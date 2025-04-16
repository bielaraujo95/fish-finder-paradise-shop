
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ProductProps } from "@/components/ProductCard";
import { getAllProducts } from "@/utils/productUtils";
import AdminLayout from "@/components/admin/AdminLayout";
import { useSearchParams } from "react-router-dom";
import ProductsTab from "@/components/admin/ProductsTab";
import RegistrationsTab from "@/components/admin/RegistrationsTab";
import MessagesTab from "@/components/admin/MessagesTab";
import SettingsTab from "@/components/admin/SettingsTab";
import { RegistrationProps } from "@/types/admin";

const Admin = () => {
  const [products, setProducts] = useState<ProductProps[]>(getAllProducts());
  const [registrations, setRegistrations] = useState<RegistrationProps[]>([]);
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "products";

  return (
    <AdminLayout>
      <div className="container mx-auto p-4 pb-16 bg-fishing-darkBlue/90 backdrop-blur-sm rounded-lg my-6">
        <h1 className="text-3xl font-bold mb-6 text-white">Gerenciamento</h1>
        
        <Tabs defaultValue={activeTab} value={activeTab} className="w-full">
          <TabsList className="mb-4 bg-fishing-darkBlue">
            <TabsTrigger value="products" className="text-white data-[state=active]:bg-fishing-lightBlue">Produtos</TabsTrigger>
            <TabsTrigger value="registrations" className="text-white data-[state=active]:bg-fishing-lightBlue">Cadastros</TabsTrigger>
            <TabsTrigger value="messages" className="text-white data-[state=active]:bg-fishing-lightBlue">Mensagens</TabsTrigger>
            <TabsTrigger value="settings" className="text-white data-[state=active]:bg-fishing-lightBlue">Configurações</TabsTrigger>
          </TabsList>
          
          <TabsContent value="products" className="space-y-4">
            <ProductsTab products={products} setProducts={setProducts} />
          </TabsContent>
          
          <TabsContent value="registrations" className="space-y-4">
            <RegistrationsTab registrations={registrations} setRegistrations={setRegistrations} />
          </TabsContent>
          
          <TabsContent value="messages" className="space-y-4">
            <MessagesTab />
          </TabsContent>
          
          <TabsContent value="settings" className="space-y-4">
            <SettingsTab />
          </TabsContent>
        </Tabs>
      </div>
    </AdminLayout>
  );
};

export default Admin;
