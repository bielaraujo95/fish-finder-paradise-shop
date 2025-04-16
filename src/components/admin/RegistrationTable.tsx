
import React from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Pencil, Trash2 } from "lucide-react";
import { RegistrationProps } from "@/pages/Admin";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface RegistrationTableProps {
  registrations: RegistrationProps[];
  onEdit: (registration: RegistrationProps) => void;
  onDelete: (id: string) => void;
}

const RegistrationTable = ({ registrations, onEdit, onDelete }: RegistrationTableProps) => {
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [registrationToDelete, setRegistrationToDelete] = React.useState<string | null>(null);

  const handleDeleteClick = (id: string) => {
    setRegistrationToDelete(id);
    setDeleteDialogOpen(true);
  };

  const handleConfirmDelete = () => {
    if (registrationToDelete) {
      onDelete(registrationToDelete);
      setRegistrationToDelete(null);
    }
    setDeleteDialogOpen(false);
  };

  const getStatusBadgeClass = (status: string) => {
    switch (status) {
      case "Aprovado":
        return "bg-green-500/20 text-green-500";
      case "Pendente":
        return "bg-yellow-500/20 text-yellow-500";
      case "Rejeitado":
        return "bg-red-500/20 text-red-500";
      default:
        return "bg-gray-500/20 text-gray-300";
    }
  };

  return (
    <>
      <div className="rounded-md border bg-fishing-darkestBlue/50 backdrop-blur-sm shadow">
        <Table>
          <TableHeader>
            <TableRow className="hover:bg-fishing-darkestBlue/70">
              <TableHead className="text-white">Nome</TableHead>
              <TableHead className="text-white">Email</TableHead>
              <TableHead className="text-white">Telefone</TableHead>
              <TableHead className="text-white">Status</TableHead>
              <TableHead className="text-white">Data de Cadastro</TableHead>
              <TableHead className="text-white">Ações</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {registrations.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center py-8 text-gray-400">
                  Nenhum cadastro encontrado. Adicione um novo cadastro.
                </TableCell>
              </TableRow>
            ) : (
              registrations.map((registration) => (
                <TableRow key={registration.id} className="hover:bg-fishing-darkestBlue/70">
                  <TableCell>{registration.name}</TableCell>
                  <TableCell>{registration.email}</TableCell>
                  <TableCell>{registration.phone}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadgeClass(registration.status)}`}>
                      {registration.status}
                    </span>
                  </TableCell>
                  <TableCell>{registration.registrationDate}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button 
                        variant="secondary" 
                        size="sm"
                        onClick={() => onEdit(registration)}
                      >
                        <Pencil size={16} />
                      </Button>
                      <Button 
                        variant="destructive" 
                        size="sm"
                        onClick={() => handleDeleteClick(registration.id)}
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent className="bg-fishing-darkestBlue text-white border-fishing-blue">
          <AlertDialogHeader>
            <AlertDialogTitle>Confirmar exclusão</AlertDialogTitle>
            <AlertDialogDescription className="text-gray-300">
              Tem certeza que deseja excluir este cadastro? Esta ação não pode ser desfeita.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="bg-gray-700 hover:bg-gray-600 text-white">Cancelar</AlertDialogCancel>
            <AlertDialogAction 
              onClick={handleConfirmDelete}
              className="bg-red-600 hover:bg-red-700"
            >
              Excluir
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
};

export default RegistrationTable;
