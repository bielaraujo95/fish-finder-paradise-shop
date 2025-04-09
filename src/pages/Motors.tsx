
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motorProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const Motors = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-fishing-darkBlue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Motores</h1>
            <p className="max-w-3xl">
              Encontre o motor ideal para seu barco. Oferecemos uma ampla variedade de motores
              de popa com diferentes potências, desde motores compactos até os mais robustos 
              para barcos maiores.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {motorProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Motors;
