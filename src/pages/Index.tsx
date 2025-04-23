
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProducts from "@/components/FeaturedProducts";
import CategoryBanner from "@/components/CategoryBanner";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { ProductProps } from "@/components/ProductCard";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();

  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        toast({
          title: "Erro ao carregar produtos",
          description: error.message,
          variant: "destructive"
        });
        return [];
      }

      return data as ProductProps[];
    }
  });

  // Filter products by category
  const featuredProducts = products.slice(0, 4); // First 4 products as featured
  const boatsProducts = products.filter(p => p.category === 'Barcos').slice(0, 4);
  const motorProducts = products.filter(p => p.category === 'Motores').slice(0, 4);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {!isLoading && (
          <>
            <FeaturedProducts title="Produtos em Destaque" products={featuredProducts} />
            
            <CategoryBanner 
              title="Barcos de Alumínio"
              description="Nossa coleção de barcos de alumínio para pesca oferece diversos modelos resistentes e duráveis para todas as suas aventuras na água."
              image="https://images.unsplash.com/photo-1564762861015-5089d60afdce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1548&q=80"
              link="/barcos"
            />
            
            <FeaturedProducts title="Barcos em Destaque" products={boatsProducts} />
            
            <CategoryBanner 
              title="Motores de Popa"
              description="Motores de alta performance para seu barco com a melhor tecnologia e economia de combustível."
              image="https://images.unsplash.com/photo-1573676583585-94671afcf359?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1636&q=80"
              link="/motores"
            />
            
            <FeaturedProducts title="Motores em Destaque" products={motorProducts} />
            
            <AboutSection />
          </>
        )}
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
