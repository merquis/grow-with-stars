import { Button } from "@/components/ui/button";
import { Star, TrendingUp } from "lucide-react";
import dashboardMockup from "@/assets/dashboard-mockup.png";

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-hero">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full">
              <Star className="h-4 w-4 text-accent fill-accent" />
              <span className="text-sm font-medium">Aumenta tu puntuación online</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
              Convierte tus clientes en reseñas{" "}
              <span className="text-primary">⭐</span> y tus reseñas en más ventas{" "}
              <span className="text-accent">💰</span>
            </h1>
            
            <p className="text-xl text-muted-foreground leading-relaxed">
              TopEstrellas te ayuda a subir tu puntuación en Google y TripAdvisor, responder reseñas automáticamente y atraer más clientes.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="xl">
                Probar Gratis
              </Button>
              <Button variant="outline" size="xl">
                <TrendingUp className="h-5 w-5" />
                Ver Cómo Funciona
              </Button>
            </div>
            
            <div className="flex items-center gap-8 pt-4">
              <div>
                <div className="text-3xl font-bold text-primary">+10,000</div>
                <div className="text-sm text-muted-foreground">Reseñas generadas</div>
              </div>
              <div className="h-12 w-px bg-border" />
              <div>
                <div className="text-3xl font-bold text-primary">4.8⭐</div>
                <div className="text-sm text-muted-foreground">Puntuación media</div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <img 
              src={dashboardMockup} 
              alt="Panel TopEstrellas" 
              className="relative rounded-2xl shadow-soft border border-border"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
