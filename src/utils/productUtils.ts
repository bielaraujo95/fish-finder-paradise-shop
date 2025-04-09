
import { ProductProps } from "@/components/ProductCard";
import { featuredProducts, boatsProducts, motorProducts, equipmentProducts, clothingProducts } from "@/data/products";

// Function to get all unique products (without duplicates from featured)
export const getAllProducts = (): ProductProps[] => {
  return [
    ...featuredProducts,
    ...boatsProducts.filter(boat => !featuredProducts.some(f => f.id === boat.id)),
    ...motorProducts.filter(motor => !featuredProducts.some(f => f.id === motor.id)),
    ...equipmentProducts.filter(equip => !featuredProducts.some(f => f.id === equip.id)),
    ...clothingProducts.filter(cloth => !featuredProducts.some(f => f.id === cloth.id))
  ];
};

export const formatPrice = (price: number): string => {
  return price.toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
};
