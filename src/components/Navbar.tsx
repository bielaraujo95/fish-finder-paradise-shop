
import { useState } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <span className="text-fishing-blue font-bold text-xl md:text-2xl">Pesca Total</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <Link to="/barcos" className="text-gray-700 hover:text-fishing-blue px-3 py-2 rounded-md font-medium">
                Barcos
              </Link>
              <Link to="/motores" className="text-gray-700 hover:text-fishing-blue px-3 py-2 rounded-md font-medium">
                Motores
              </Link>
              <Link to="/equipamentos" className="text-gray-700 hover:text-fishing-blue px-3 py-2 rounded-md font-medium">
                Equipamentos
              </Link>
              <Link to="/iscas" className="text-gray-700 hover:text-fishing-blue px-3 py-2 rounded-md font-medium">
                Iscas
              </Link>
              <Link to="/roupas" className="text-gray-700 hover:text-fishing-blue px-3 py-2 rounded-md font-medium">
                Roupas
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-fishing-blue px-3 py-2 rounded-md font-medium">
                Blog
              </Link>
            </div>
          </div>

          {/* Right side elements - cart & mobile menu button */}
          <div className="flex items-center">
            <Button variant="ghost" size="icon" className="mr-2">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Carrinho</span>
            </Button>
            
            {/* Admin panel link */}
            <Link to="/admin" className="mr-2">
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5" />
                <span className="sr-only">Admin</span>
              </Button>
            </Link>
            
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
          <Link 
            to="/barcos" 
            className="text-gray-700 hover:text-fishing-blue block px-3 py-2 rounded-md font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Barcos
          </Link>
          <Link 
            to="/motores" 
            className="text-gray-700 hover:text-fishing-blue block px-3 py-2 rounded-md font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Motores
          </Link>
          <Link 
            to="/equipamentos" 
            className="text-gray-700 hover:text-fishing-blue block px-3 py-2 rounded-md font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Equipamentos
          </Link>
          <Link 
            to="/iscas" 
            className="text-gray-700 hover:text-fishing-blue block px-3 py-2 rounded-md font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Iscas
          </Link>
          <Link 
            to="/roupas" 
            className="text-gray-700 hover:text-fishing-blue block px-3 py-2 rounded-md font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Roupas
          </Link>
          <Link 
            to="/blog" 
            className="text-gray-700 hover:text-fishing-blue block px-3 py-2 rounded-md font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Blog
          </Link>
          <Link 
            to="/admin" 
            className="text-gray-700 hover:text-fishing-blue block px-3 py-2 rounded-md font-medium"
            onClick={() => setIsMenuOpen(false)}
          >
            Administração
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
