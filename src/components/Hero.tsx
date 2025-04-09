
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-fishing-darkBlue text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542259009477-d625272157b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80')" }}
      />
      
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Equipamentos de Pesca de Qualidade</h1>
          <p className="text-xl mb-8">Encontre tudo o que você precisa para sua próxima aventura de pesca: barcos, motores, varas, iscas e muito mais.</p>
          
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="bg-fishing-blue hover:bg-blue-600">
              <Link to="/produtos">Ver Produtos</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-white border-white hover:bg-white/10">
              <Link to="/contato">Fale Conosco</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
