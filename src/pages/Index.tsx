import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Star, Bot, Phone, BarChart3 } from "lucide-react";
import { Card } from "@/components/ui/card";

const Index = () => {
  const features = [
    {
      icon: Star,
      title: "Más reseñas",
      description: "Aumenta tu puntuación en Google y TripAdvisor",
    },
    {
      icon: Bot,
      title: "Respuestas automáticas",
      description: "IA que responde por ti profesionalmente",
    },
    {
      icon: Phone,
      title: "Captura contactos",
      description: "Convierte reseñas en clientes recurrentes",
    },
    {
      icon: BarChart3,
      title: "Estadísticas",
      description: "Analiza tu reputación en tiempo real",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        
        {/* Features destacados */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <Card key={index} className="p-6 text-center hover:shadow-soft transition-shadow">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <TestimonialsSection />
        
        {/* CTA Final */}
        <section className="py-24 bg-gradient-primary text-white">
          <div className="container mx-auto px-4 text-center space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              ¿Listo para hacer brillar tu negocio?
            </h2>
            <p className="text-xl max-w-2xl mx-auto opacity-90">
              Únete a cientos de negocios que ya están mejorando su reputación online
            </p>
            <Button variant="secondary" size="xl" className="bg-white text-primary hover:bg-white/90">
              Probar Gratis 14 Días
            </Button>
            <p className="text-sm opacity-75">
              Sin tarjeta de crédito. Cancela cuando quieras.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
