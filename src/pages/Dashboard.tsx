
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ShoppingBag, Users, MessageSquare, TrendingUp } from "lucide-react";
import AdminLayout from "@/components/admin/AdminLayout";

// Componente para estatísticas
const StatCard = ({ title, value, icon, trend, color }: {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
  color: string;
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className={`p-2 rounded-full ${color}`}>{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {trend && (
          <p className="text-xs flex items-center gap-1 text-muted-foreground">
            <TrendingUp className="h-3 w-3" />
            {trend} desde o mês passado
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default function Dashboard() {
  return (
    <AdminLayout>
      <div className="p-6 space-y-6">
        <div className="flex flex-col space-y-2">
          <h2 className="text-3xl font-bold tracking-tight text-white">Dashboard</h2>
          <p className="text-fishing-gray">Visão geral e estatísticas do seu negócio</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard 
            title="Total de Produtos" 
            value="248" 
            icon={<ShoppingBag className="h-5 w-5 text-white" />} 
            trend="12% aumento" 
            color="bg-fishing-blue"
          />
          <StatCard 
            title="Cadastros" 
            value="573" 
            icon={<Users className="h-5 w-5 text-white" />} 
            trend="8% aumento" 
            color="bg-fishing-lightBlue"
          />
          <StatCard 
            title="Mensagens" 
            value="32" 
            icon={<MessageSquare className="h-5 w-5 text-white" />} 
            trend="5 novas" 
            color="bg-fishing-riverBlue"
          />
          <StatCard 
            title="Vendas do Mês" 
            value="R$ 12.830" 
            icon={<TrendingUp className="h-5 w-5 text-white" />} 
            trend="23% aumento" 
            color="bg-fishing-red"
          />
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>Vendas Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-fishing-darkBlue flex items-center justify-center">
                        <ShoppingBag className="h-5 w-5 text-fishing-lightBlue" />
                      </div>
                      <div>
                        <p className="font-medium">Vara de Pesca Pro 3000</p>
                        <p className="text-sm text-muted-foreground">
                          {new Date(Date.now() - i * 86400000).toLocaleDateString('pt-BR')}
                        </p>
                      </div>
                    </div>
                    <div className="font-semibold">R$ {(Math.random() * 1000).toFixed(2)}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Cadastros Recentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-full bg-fishing-darkBlue flex items-center justify-center">
                        <Users className="h-5 w-5 text-fishing-lightBlue" />
                      </div>
                      <div>
                        <p className="font-medium">Cliente {i + 1}</p>
                        <p className="text-sm text-muted-foreground">cliente{i+1}@email.com</p>
                      </div>
                    </div>
                    <div className="text-sm bg-green-100 text-green-800 py-1 px-2 rounded-full">Ativo</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </AdminLayout>
  );
}
