
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { RegistrationProps } from "@/types/admin";
import RegistrationTable from "@/components/admin/RegistrationTable";
import RegistrationForm, { RegistrationFormValues } from "@/components/admin/RegistrationForm";

interface RegistrationsTabProps {
  registrations: RegistrationProps[];
  setRegistrations: React.Dispatch<React.SetStateAction<RegistrationProps[]>>;
}

const RegistrationsTab = ({ registrations, setRegistrations }: RegistrationsTabProps) => {
  const [isRegistrationDialogOpen, setIsRegistrationDialogOpen] = useState(false);
  const [editingRegistration, setEditingRegistration] = useState<RegistrationProps | null>(null);
  const { toast } = useToast();

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
      // Creating a new registration - ensure all required fields are provided
      const newRegistration: RegistrationProps = {
        id: `${Date.now()}`,
        name: data.name,
        email: data.email,
        phone: data.phone,
        status: data.status || "Pendente",
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
    <div className="space-y-4">
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

export default RegistrationsTab;
