
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { ProductProps } from "@/components/ProductCard";

interface ProductTableProps {
  products: ProductProps[];
  onEdit: (product: ProductProps) => void;
  onDelete: (id: string) => void;
}

const ProductTable = ({ products, onEdit, onDelete }: ProductTableProps) => {
  // Format price to BRL
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
  };

  return (
    <div className="rounded-md border bg-fishing-darkestBlue/50 backdrop-blur-sm shadow">
      <Table>
        <TableHeader>
          <TableRow className="hover:bg-fishing-darkestBlue/70">
            <TableHead className="text-white">Imagem</TableHead>
            <TableHead className="text-white">Nome</TableHead>
            <TableHead className="text-white">Categoria</TableHead>
            <TableHead className="text-white">Preço</TableHead>
            <TableHead className="text-white">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.id} className="hover:bg-fishing-darkestBlue/70">
              <TableCell className="font-medium">
                <div className="w-16 h-16 rounded overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </TableCell>
              <TableCell>{product.name}</TableCell>
              <TableCell>{product.category}</TableCell>
              <TableCell>{formatPrice(product.price)}</TableCell>
              <TableCell>
                <div className="flex space-x-2">
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => onEdit(product)}
                  >
                    <Pencil size={16} />
                  </Button>
                  <Button 
                    variant="destructive" 
                    size="sm"
                    onClick={() => onDelete(product.id)}
                  >
                    <Trash2 size={16} />
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProductTable;
