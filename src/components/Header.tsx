import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <img src={logo} alt="TopEstrellas" className="h-10" />
          </a>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#soluciones" className="text-foreground hover:text-primary transition-colors font-medium">
              SOLUCIONES
            </a>
            <a href="#recursos" className="text-foreground hover:text-primary transition-colors font-medium">
              RECURSOS
            </a>
            <a href="#precios" className="text-foreground hover:text-primary transition-colors font-medium">
              PRECIOS
            </a>
          </nav>
          
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="default">
              Iniciar Sesión
            </Button>
            <Button variant="cta" size="lg">
              Probar Gratis
            </Button>
          </div>
          
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
