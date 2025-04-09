
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-fishing-darkBlue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">Pesca Total</h3>
            <p className="text-gray-300 mb-4">
              Sua loja completa de artigos de pesca, barcos de alumínio,
              motores e equipamentos para pescadores de todos os níveis.
            </p>
            <div className="flex space-x-4">
              <Link to="#" className="text-gray-300 hover:text-white transition">
                <Facebook size={20} />
              </Link>
              <Link to="#" className="text-gray-300 hover:text-white transition">
                <Instagram size={20} />
              </Link>
              <Link to="#" className="text-gray-300 hover:text-white transition">
                <Twitter size={20} />
              </Link>
            </div>
          </div>
          
          {/* Products */}
          <div>
            <h3 className="text-xl font-bold mb-4">Produtos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/barcos" className="text-gray-300 hover:text-white transition">
                  Barcos
                </Link>
              </li>
              <li>
                <Link to="/motores" className="text-gray-300 hover:text-white transition">
                  Motores
                </Link>
              </li>
              <li>
                <Link to="/equipamentos" className="text-gray-300 hover:text-white transition">
                  Equipamentos
                </Link>
              </li>
              <li>
                <Link to="/iscas" className="text-gray-300 hover:text-white transition">
                  Iscas
                </Link>
              </li>
              <li>
                <Link to="/roupas" className="text-gray-300 hover:text-white transition">
                  Roupas
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Information */}
          <div>
            <h3 className="text-xl font-bold mb-4">Informações</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/sobre" className="text-gray-300 hover:text-white transition">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/politica-privacidade" className="text-gray-300 hover:text-white transition">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link to="/termos-condicoes" className="text-gray-300 hover:text-white transition">
                  Termos e Condições
                </Link>
              </li>
              <li>
                <Link to="/envio" className="text-gray-300 hover:text-white transition">
                  Informações de Envio
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-fishing-blue flex-shrink-0" />
                <span className="text-gray-300">Rua dos Pescadores, 123<br />São Paulo, SP</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-fishing-blue flex-shrink-0" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-fishing-blue flex-shrink-0" />
                <span className="text-gray-300">contato@pescatotal.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Pesca Total. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
