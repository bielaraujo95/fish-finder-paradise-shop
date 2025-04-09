
import React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Save } from "lucide-react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ProductProps } from "@/components/ProductCard";

// Define form validation schema
const productSchema = z.object({
  id: z.string().optional(),
  name: z.string().min(3, { message: "Nome do produto é obrigatório com pelo menos 3 caracteres" }),
  price: z.number().positive({ message: "Preço deve ser maior que zero" }),
  image: z.string().url({ message: "URL da imagem inválida" }),
  category: z.string().min(2, { message: "Categoria é obrigatória" })
});

export type ProductFormValues = z.infer<typeof productSchema>;

interface ProductFormProps {
  editingProduct: ProductProps | null;
  onSubmit: (data: ProductFormValues) => void;
  onCancel: () => void;
}

export const ProductForm = ({ editingProduct, onSubmit, onCancel }: ProductFormProps) => {
  const form = useForm<ProductFormValues>({
    resolver: zodResolver(productSchema),
    defaultValues: {
      name: editingProduct?.name || "",
      price: editingProduct?.price || 0,
      image: editingProduct?.image || "",
      category: editingProduct?.category || "Equipamentos"
    }
  });

  return (
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
        
        <div className="flex justify-end space-x-2 pt-2">
          <Button 
            type="button" 
            variant="outline" 
            onClick={onCancel}
          >
            Cancelar
          </Button>
          <Button type="submit" className="bg-fishing-lightBlue hover:bg-fishing-blue">
            <Save className="mr-1" size={16} />
            Salvar
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default ProductForm;
