
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { ProductProps } from "@/components/ProductCard";
import ProductTable from "@/components/admin/ProductTable";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import ProductForm, { ProductFormValues } from "@/components/admin/ProductForm";
import { supabase } from "@/integrations/supabase/client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const ProductsTab = () => {
  const [isProductDialogOpen, setIsProductDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ProductProps | null>(null);
  const [isAuthChecking, setIsAuthChecking] = useState(true);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Check if user is authenticated
  useEffect(() => {
    const checkAuth = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error || !data.session) {
        toast({
          title: "Acesso restrito",
          description: "Você precisa estar autenticado para gerenciar produtos.",
          variant: "destructive"
        });
      }
      setIsAuthChecking(false);
    };
    
    checkAuth();
  }, [toast]);

  const { data: products = [], isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        toast({
          title: "Erro ao carregar produtos",
          description: error.message,
          variant: "destructive"
        });
        return [];
      }

      return data as ProductProps[];
    }
  });

  const createProduct = useMutation({
    mutationFn: async (data: ProductFormValues) => {
      const { error } = await supabase
        .from('products')
        .insert([{
          name: data.name,
          price: data.price,
          image: data.image,
          category: data.category
        }]);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      toast({
        title: "Produto adicionado",
        description: "O produto foi adicionado com sucesso."
      });
      closeProductDialog();
    },
    onError: (error) => {
      toast({
        title: "Erro ao adicionar produto",
        description: error.message,
        variant: "destructive"
      });
    }
  });

  const updateProduct = useMutation({
    mutationFn: async ({ id, ...data }: ProductFormValues & { id: string }) => {
      const { error } = await supabase
        .from('products')
        .update({
          name: data.name,
          price: data.price,
          image: data.image,
          category: data.category
        })
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      toast({
        title: "Produto atualizado",
        description: "O produto foi atualizado com sucesso."
      });
      closeProductDialog();
    },
    onError: (error) => {
      toast({
        title: "Erro ao atualizar produto",
        description: error.message,
        variant: "destructive"
      });
    }
  });

  const deleteProduct = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['products'] });
      toast({
        title: "Produto removido",
        description: "O produto foi removido com sucesso."
      });
    },
    onError: (error) => {
      toast({
        title: "Erro ao remover produto",
        description: error.message,
        variant: "destructive"
      });
    }
  });

  const onProductSubmit = (data: ProductFormValues) => {
    if (editingProduct) {
      updateProduct.mutate({ ...data, id: editingProduct.id });
    } else {
      createProduct.mutate(data);
    }
  };

  const handleEditProduct = (product: ProductProps) => {
    setEditingProduct(product);
    setIsProductDialogOpen(true);
  };

  const handleDeleteProduct = (id: string) => {
    deleteProduct.mutate(id);
  };

  const handleAddProduct = () => {
    setEditingProduct(null);
    setIsProductDialogOpen(true);
  };

  const closeProductDialog = () => {
    setIsProductDialogOpen(false);
    setEditingProduct(null);
  };

  if (isAuthChecking) {
    return <div className="text-center text-white">Verificando autenticação...</div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Gerenciar Produtos</h2>
        <Button onClick={handleAddProduct} className="bg-fishing-lightBlue hover:bg-fishing-blue">
          <Plus className="mr-1" size={16} />
          Novo Produto
        </Button>
      </div>
      
      {isLoading ? (
        <div className="text-center text-white">Carregando produtos...</div>
      ) : (
        <ProductTable 
          products={products} 
          onEdit={handleEditProduct} 
          onDelete={handleDeleteProduct} 
        />
      )}

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
