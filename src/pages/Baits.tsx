
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const baitsProducts = [
  {
    id: "21",
    name: "Kit Iscas Artificiais",
    price: 189.90,
    image: "https://images.unsplash.com/photo-1516962497879-f10607d6c548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Iscas"
  },
  {
    id: "22",
    name: "Isca Artificial Articulada",
    price: 49.90,
    image: "https://images.unsplash.com/photo-1609004866740-b0cc750d9067?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Iscas"
  },
  {
    id: "23",
    name: "Isca Artificial Soft",
    price: 29.90,
    image: "https://images.unsplash.com/photo-1516962497879-f10607d6c548?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    category: "Iscas"
  },
  {
    id: "24",
    name: "Isca Artificial Jig",
    price: 39.90,
    image: "https://images.unsplash.com/photo-1541780050008-c289805ced40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1450&q=80",
    category: "Iscas"
  }
];

const Baits = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <div className="bg-fishing-darkBlue text-white py-12">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Iscas</h1>
            <p className="max-w-3xl">
              Nossa coleção de iscas artificiais oferece opções para todos os tipos de peixes
              e ambientes de pesca. Encontre iscas de alta qualidade que imitam perfeitamente
              os movimentos naturais dos peixes.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {baitsProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Baits;
