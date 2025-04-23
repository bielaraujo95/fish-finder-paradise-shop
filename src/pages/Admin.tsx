
import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import AdminLayout from "@/components/admin/AdminLayout";
import { useSearchParams } from "react-router-dom";
import ProductsTab from "@/components/admin/ProductsTab";
import RegistrationsTab from "@/components/admin/RegistrationsTab";
import MessagesTab from "@/components/admin/MessagesTab";
import SettingsTab from "@/components/admin/SettingsTab";
import { RegistrationProps } from "@/types/admin";

const Admin = () => {
  const [searchParams] = useSearchParams();
  const activeTab = searchParams.get("tab") || "products";
  
  // Add state for registrations
  const [registrations, setRegistrations] = useState<RegistrationProps[]>([
    {
      id: "1",
      name: "João Silva",
      email: "joao.silva@exemplo.com",
      phone: "(11) 91234-5678",
      status: "Aprovado",
      registrationDate: "2024-04-20"
    },
    {
      id: "2",
      name: "Maria Souza",
      email: "maria.souza@exemplo.com",
      phone: "(21) 98765-4321",
      status: "Pendente",
      registrationDate: "2024-04-21"
    }
  ]);

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
            <ProductsTab />
          </TabsContent>
          
          <TabsContent value="registrations" className="space-y-4">
            <RegistrationsTab 
              registrations={registrations} 
              setRegistrations={setRegistrations} 
            />
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
