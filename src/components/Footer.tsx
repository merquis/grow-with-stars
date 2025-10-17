import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <img src={logo} alt="TopEstrellas" className="h-10 brightness-0 invert" />
            <p className="text-sm opacity-80">
              La plataforma que ayuda a negocios locales a brillar online con más reseñas y mejor reputación.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Producto</h4>
            <ul className="space-y-2">
              <li><Link to="/soluciones" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Soluciones</Link></li>
              <li><Link to="/recursos" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Recursos</Link></li>
              <li><Link to="/precios" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Precios</Link></li>
              <li><Link to="/blog" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Blog</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Empresa</h4>
            <ul className="space-y-2">
              <li><Link to="/sobre-nosotros" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Sobre nosotros</Link></li>
              <li><Link to="/contacto" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Contacto</Link></li>
              <li><Link to="/privacidad" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Política de Privacidad</Link></li>
              <li><Link to="/condiciones" className="text-sm opacity-80 hover:opacity-100 transition-opacity">Condiciones del servicio</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 text-center">
          <p className="text-sm opacity-80">
            © {new Date().getFullYear()} TopEstrellas. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
