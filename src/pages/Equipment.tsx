
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { equipmentProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Equipment = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-fishing-darkBlue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Equipamentos</h1>
            <p className="max-w-3xl">
              Descubra nossa coleção completa de equipamentos de pesca de alta qualidade.
              Varas, molinetes, carretilhas e todos os acessórios que você precisa para 
              uma experiência de pesca perfeita.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {equipmentProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Equipment;
