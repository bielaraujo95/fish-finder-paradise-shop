
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ProductProps } from "@/components/ProductCard";
import ProductTable from "@/components/admin/ProductTable";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ProductForm, { ProductFormValues } from "@/components/admin/ProductForm";

interface ProductsTabProps {
  products: ProductProps[];
  setProducts: React.Dispatch<React.SetStateAction<ProductProps[]>>;
}

const ProductsTab = ({ products, setProducts }: ProductsTabProps) => {
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ProductProps | null>(null);
  const { toast } = useToast();

  // Handle product form submission
  const onProductSubmit = (data: ProductFormValues) => {
    // If editing an existing product
    if (editingProduct) {
      const updatedProducts = products.map(prod => 
        prod.id === editingProduct.id ? { ...data, id: editingProduct.id } : prod
      ) as ProductProps[];
      setProducts(updatedProducts);
      toast({
        title: "Produto atualizado",
        description: `${data.name} foi atualizado com sucesso.`
      });
    } else {
      // Creating a new product
      const newProduct: ProductProps = {
        ...data,
        id: `${Date.now()}`, // Generate a simple ID
        name: data.name, 
        price: data.price,
        image: data.image,
        category: data.category
      };
      setProducts([...products, newProduct]);
      toast({
        title: "Produto adicionado",
        description: `${data.name} foi adicionado com sucesso.`
      });
    }
    
    closeProductDialog();
  };

  const handleEditProduct = (product: ProductProps) => {
    setEditingProduct(product);
    setIsProductDialogOpen(true);
  };

  const handleDeleteProduct = (id: string) => {
    setProducts(products.filter(product => product.id !== id));
    toast({
      title: "Produto removido",
      description: "O produto foi removido com sucesso."
    });
  };

  const handleAddProduct = () => {
    setEditingProduct(null);
    setIsProductDialogOpen(true);
  };

  const closeProductDialog = () => {
    setIsProductDialogOpen(false);
    setEditingProduct(null);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Gerenciar Produtos</h2>
        <Button onClick={handleAddProduct} className="bg-fishing-lightBlue hover:bg-fishing-blue">
          <Plus className="mr-1" size={16} />
          Novo Produto
        </Button>
      </div>
      
      <ProductTable 
        products={products} 
        onEdit={handleEditProduct} 
        onDelete={handleDeleteProduct} 
      />

      {/* Product Form Dialog */}
      <Dialog open={isProductDialogOpen} onOpenChange={setIsProductDialogOpen}>
        <DialogContent className="max-w-md bg-fishing-darkestBlue text-white border-fishing-blue">
          <DialogHeader>
            <DialogTitle>
              {editingProduct ? "Editar Produto" : "Adicionar Produto"}
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              Preencha os detalhes do produto abaixo.
            </DialogDescription>
          </DialogHeader>
          
          <ProductForm 
            editingProduct={editingProduct} 
            onSubmit={onProductSubmit} 
            onCancel={closeProductDialog} 
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ProductsTab;
