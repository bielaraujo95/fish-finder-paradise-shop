
import { ProductProps } from "./ProductCard";
import ProductCard from "./ProductCard";

interface CategorySectionProps {
  title: string;
  products: ProductProps[];
}

const FeaturedProducts = ({ title, products }: CategorySectionProps) => {
  return (
    <section className="py-12 river-overlay">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-white">{title}</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
