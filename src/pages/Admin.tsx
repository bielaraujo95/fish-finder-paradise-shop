
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";
import { ProductProps } from "@/components/ProductCard";
import { getAllProducts } from "@/utils/productUtils";
import ProductTable from "@/components/admin/ProductTable";
import ProductForm, { ProductFormValues } from "@/components/admin/ProductForm";

const Admin = () => {
  const [products, setProducts] = useState<ProductProps[]>(getAllProducts());
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ProductProps | null>(null);
  
  // Handle form submission
  const onSubmit = (data: ProductFormValues) => {
    // If editing an existing product
    if (editingProduct) {
      const updatedProducts = products.map(prod => 
        prod.id === editingProduct.id ? { ...data, id: editingProduct.id } : prod
      ) as ProductProps[];
      setProducts(updatedProducts);
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
    }
    
    closeDialog();
  };

  const handleEdit = (product: ProductProps) => {
    setEditingProduct(product);
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Tem certeza que deseja excluir este produto?")) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  const handleAdd = () => {
    setEditingProduct(null);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setEditingProduct(null);
  };

  return (
    <div className="container mx-auto p-4 pb-16 bg-fishing-darkBlue/90 backdrop-blur-sm rounded-lg my-6">
      <h1 className="text-3xl font-bold mb-6 text-white">Área de Administração</h1>
      
      <Tabs defaultValue="products" className="w-full">
        <TabsList className="mb-4 bg-fishing-darkBlue">
          <TabsTrigger value="products" className="text-white data-[state=active]:bg-fishing-lightBlue">Produtos</TabsTrigger>
          {/* Future tabs can be added here */}
        </TabsList>
        
        <TabsContent value="products" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">Gerenciar Produtos</h2>
            <Button onClick={handleAdd} className="bg-fishing-lightBlue hover:bg-fishing-blue">
              <Plus className="mr-1" size={16} />
              Novo Produto
            </Button>
          </div>
          
          <ProductTable 
            products={products} 
            onEdit={handleEdit} 
            onDelete={handleDelete} 
          />
        </TabsContent>
      </Tabs>
      
      {/* Product Form Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>
              {editingProduct ? "Editar Produto" : "Adicionar Produto"}
            </DialogTitle>
            <DialogDescription>
              Preencha os detalhes do produto abaixo.
            </DialogDescription>
          </DialogHeader>
          
          <ProductForm 
            editingProduct={editingProduct} 
            onSubmit={onSubmit} 
            onCancel={closeDialog} 
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;
