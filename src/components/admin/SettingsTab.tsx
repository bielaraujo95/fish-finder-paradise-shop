
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

const SettingsTab = () => {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Configurações</h2>
      </div>
      <Card className="bg-fishing-darkestBlue text-white border-0">
        <CardContent className="p-6">
          <p className="text-center text-fishing-gray py-8">
            Funcionalidade em desenvolvimento
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsTab;
