import { MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-ice-dark text-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="font-montserrat font-bold text-xl mb-2">
              Iceberg Smart Marketing
            </div>
            <div className="font-montserrat text-ice-light/80 text-sm">
              Inteligente mesmo.
            </div>
          </div>

          {/* Links */}
          <div className="flex items-center gap-8">
            <a 
              href="#" 
              className="font-montserrat text-sm text-ice-light/80 hover:text-white transition-colors"
            >
              Política de Privacidade
            </a>
            <a 
              href="#" 
              className="font-montserrat text-sm text-ice-light/80 hover:text-white transition-colors"
            >
              Contato
            </a>
            <a 
              href="#" 
              className="flex items-center gap-2 font-montserrat text-sm text-ice-light/80 hover:text-white transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-ice-light/20 mt-8 pt-8 text-center">
          <p className="font-montserrat text-sm text-ice-light/60">
            © 2024 Iceberg Smart Marketing. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;