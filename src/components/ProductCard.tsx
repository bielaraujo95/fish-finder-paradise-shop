
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export interface ProductProps {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({ product }: { product: ProductProps }) => {
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="aspect-square overflow-hidden">
        <img 
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      
      <CardContent className="p-4 flex-grow">
        <div className="mb-2">
          <span className="text-xs text-gray-500">{product.category}</span>
        </div>
        <h3 className="font-medium text-lg mb-2">{product.name}</h3>
        <p className="text-fishing-blue font-bold text-xl">{formatPrice(product.price)}</p>
      </CardContent>
      
      <CardFooter className="p-4 pt-0">
        <div className="flex gap-2 w-full">
          <Button variant="outline" className="flex-1">
            Detalhes
          </Button>
          <Button className="flex-1 bg-fishing-blue hover:bg-blue-600">
            Comprar
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
