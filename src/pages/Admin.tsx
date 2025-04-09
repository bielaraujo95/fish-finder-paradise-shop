
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Pencil, Plus, Save, Trash2 } from "lucide-react";
import { ProductProps } from "@/components/ProductCard";
import { featuredProducts, boatsProducts, motorProducts, equipmentProducts, clothingProducts } from "@/data/products";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// Define form validation schema
const productSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3, { message: "Nome do produto é obrigatório com pelo menos 3 caracteres" }),
  price: z.number().positive({ message: "Preço deve ser maior que zero" }),
  image: z.string().url({ message: "URL da imagem inválida" }),
  category: z.string().min(2, { message: "Categoria é obrigatória" })
});

type ProductFormValues = z.infer<typeof productSchema>;

const Admin = () => {
  // Combine all products for the admin view
  const [products, setProducts] = useState<ProductProps[]>([
    ...featuredProducts,
    ...boatsProducts.filter(boat => !featuredProducts.some(f => f.id === boat.id)),
    ...motorProducts.filter(motor => !featuredProducts.some(f => f.id === motor.id)),
    ...equipmentProducts.filter(equip => !featuredProducts.some(f => f.id === equip.id)),
    ...clothingProducts.filter(cloth => !featuredProducts.some(f => f.id === cloth.id))
  ]);
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<ProductProps | null>(null);
  
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: "",
      price: 0,
      image: "",
      category: "Equipamentos"
    }
  });

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
        name: data.name, // Ensure name is defined
        price: data.price, // Ensure price is defined
        image: data.image, // Ensure image is defined
        category: data.category // Ensure category is defined
      };
      setProducts([...products, newProduct]);
    }
    
    setIsDialogOpen(false);
    form.reset();
    setEditingProduct(null);
  };

  const handleEdit = (product: ProductProps) => {
    setEditingProduct(product);
    form.reset({
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category
    });
    setIsDialogOpen(true);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("Tem certeza que deseja excluir este produto?")) {
      setProducts(products.filter(product => product.id !== id));
    }
  };

  const handleAdd = () => {
    setEditingProduct(null);
    form.reset({
      name: "",
      price: 0,
      image: "",
      category: "Equipamentos"
    });
    setIsDialogOpen(true);
  };

  // Format price to BRL
  const formatPrice = (price: number) => {
    return price.toLocaleString('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    });
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
                          onClick={() => handleEdit(product)}
                        >
                          <Pencil size={16} />
                        </Button>
                        <Button 
                          variant="destructive" 
                          size="sm"
                          onClick={() => handleDelete(product.id)}
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
        </TabsContent>
      </Tabs>
      
      {/* Product Form Modal */}
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
          
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nome do Produto</FormLabel>
                    <FormControl>
                      <Input placeholder="Nome do produto" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categoria</FormLabel>
                    <FormControl>
                      <select
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                        {...field}
                      >
                        <option value="Barcos">Barcos</option>
                        <option value="Motores">Motores</option>
                        <option value="Equipamentos">Equipamentos</option>
                        <option value="Roupas">Roupas</option>
                        <option value="Iscas">Iscas</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="price"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preço (R$)</FormLabel>
                    <FormControl>
                      <Input 
                        type="number" 
                        step="0.01"
                        placeholder="0.00" 
                        {...field} 
                        onChange={(e) => field.onChange(parseFloat(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="image"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>URL da Imagem</FormLabel>
                    <FormControl>
                      <Input placeholder="https://exemplo.com/imagem.jpg" {...field} />
                    </FormControl>
                    {field.value && (
                      <div className="mt-2 rounded overflow-hidden">
                        <img 
                          src={field.value}
                          alt="Preview" 
                          className="w-full h-32 object-cover"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = 'https://placehold.co/600x400?text=Imagem+Inválida';
                          }}
                        />
                      </div>
                    )}
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <DialogFooter>
                <Button 
                  type="button" 
                  variant="outline" 
                  onClick={() => {
                    setIsDialogOpen(false);
                    form.reset();
                  }}
                >
                  Cancelar
                </Button>
                <Button type="submit" className="bg-fishing-lightBlue hover:bg-fishing-blue">
                  <Save className="mr-1" size={16} />
                  Salvar
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Admin;
