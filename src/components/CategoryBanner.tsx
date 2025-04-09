
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CategoryBannerProps {
  title: string;
  description: string;
  image: string;
  link: string;
}

const CategoryBanner = ({ title, description, image, link }: CategoryBannerProps) => {
  return (
    <div className="bg-fishing-lightGray">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-700 mb-6">{description}</p>
            <Button asChild className="bg-fishing-blue hover:bg-blue-600">
              <Link to={link}>Ver Coleção</Link>
            </Button>
          </div>
          
          <div className="order-1 md:order-2">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src={image} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;
