
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus } from "lucide-react";
import { ProductProps } from "@/components/ProductCard";
import { getAllProducts } from "@/utils/productUtils";
import ProductTable from "@/components/admin/ProductTable";
import ProductForm, { ProductFormValues } from "@/components/admin/ProductForm";
import { useToast } from "@/hooks/use-toast";
import RegistrationTable from "@/components/admin/RegistrationTable";
import RegistrationForm, { RegistrationFormValues } from "@/components/admin/RegistrationForm";

// Interface para os registros
export interface RegistrationProps {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: string;
  registrationDate: string;
}

const Admin = () => {
  const [products, setProducts] = useState<ProductProps[]>(getAllProducts());
  const [registrations, setRegistrations] = useState<RegistrationProps[]>([]);
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);
  const [isRegistrationDialogOpen, setIsRegistrationDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ProductProps | null>(null);
  const [editingRegistration, setEditingRegistration] = useState<RegistrationProps | null>(null);
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

  // Handle registration form submission
  const onRegistrationSubmit = (data: RegistrationFormValues) => {
    // If editing an existing registration
    if (editingRegistration) {
      const updatedRegistrations = registrations.map(reg => 
        reg.id === editingRegistration.id ? { ...data, id: editingRegistration.id } : reg
      ) as RegistrationProps[];
      setRegistrations(updatedRegistrations);
      toast({
        title: "Cadastro atualizado",
        description: `Cadastro de ${data.name} foi atualizado com sucesso.`
      });
    } else {
      // Creating a new registration
      const newRegistration: RegistrationProps = {
        ...data,
        id: `${Date.now()}`, // Generate a simple ID
        registrationDate: new Date().toISOString().split('T')[0] // Current date in YYYY-MM-DD format
      };
      setRegistrations([...registrations, newRegistration]);
      toast({
        title: "Cadastro adicionado",
        description: `Cadastro de ${data.name} foi adicionado com sucesso.`
      });
    }
    
    closeRegistrationDialog();
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
  
  const handleEditRegistration = (registration: RegistrationProps) => {
    setEditingRegistration(registration);
    setIsRegistrationDialogOpen(true);
  };

  const handleDeleteRegistration = (id: string) => {
    setRegistrations(registrations.filter(registration => registration.id !== id));
    toast({
      title: "Cadastro removido",
      description: "O cadastro foi removido com sucesso."
    });
  };

  const handleAddRegistration = () => {
    setEditingRegistration(null);
    setIsRegistrationDialogOpen(true);
  };

  const closeRegistrationDialog = () => {
    setIsRegistrationDialogOpen(false);
    setEditingRegistration(null);
  };

  return (
    <div className="container mx-auto p-4 pb-16 bg-fishing-darkBlue/90 backdrop-blur-sm rounded-lg my-6">
      <h1 className="text-3xl font-bold mb-6 text-white">Área de Administração</h1>
      
      <Tabs defaultValue="products" className="w-full">
        <TabsList className="mb-4 bg-fishing-darkBlue">
          <TabsTrigger value="products" className="text-white data-[state=active]:bg-fishing-lightBlue">Produtos</TabsTrigger>
          <TabsTrigger value="registrations" className="text-white data-[state=active]:bg-fishing-lightBlue">Cadastros</TabsTrigger>
        </TabsList>
        
        <TabsContent value="products" className="space-y-4">
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
        </TabsContent>
        
        <TabsContent value="registrations" className="space-y-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-bold text-white">Gerenciar Cadastros</h2>
            <Button onClick={handleAddRegistration} className="bg-fishing-lightBlue hover:bg-fishing-blue">
              <Plus className="mr-1" size={16} />
              Novo Cadastro
            </Button>
          </div>
          
          <RegistrationTable 
            registrations={registrations} 
            onEdit={handleEditRegistration} 
            onDelete={handleDeleteRegistration} 
          />
        </TabsContent>
      </Tabs>
      
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
      
      {/* Registration Form Dialog */}
      <Dialog open={isRegistrationDialogOpen} onOpenChange={setIsRegistrationDialogOpen}>
        <DialogContent className="max-w-md bg-fishing-darkestBlue text-white border-fishing-blue">
          <DialogHeader>
            <DialogTitle>
              {editingRegistration ? "Editar Cadastro" : "Adicionar Cadastro"}
            </DialogTitle>
            <DialogDescription className="text-gray-300">
              Preencha os detalhes do cadastro abaixo.
            </DialogDescription>
          </DialogHeader>
          
          <RegistrationForm 
            editingRegistration={editingRegistration} 
            onSubmit={onRegistrationSubmit} 
            onCancel={closeRegistrationDialog} 
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;
