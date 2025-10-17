import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Bot, Phone, Globe, BarChart3, Gift } from "lucide-react";

const solutions = [
  {
    icon: Star,
    title: "Sube tu puntuación en Google y TripAdvisor",
    description: "Motiva a tus clientes con enlaces y códigos QR personalizados.",
  },
  {
    icon: Bot,
    title: "Responde reseñas automáticamente con IA",
    description: "Ahorra horas de trabajo con respuestas profesionales instantáneas.",
  },
  {
    icon: Phone,
    title: "Captura correos y teléfonos de tus clientes",
    description: "Convierte cada reseña en un contacto real.",
  },
  {
    icon: Globe,
    title: "Comunicación multilingüe automática",
    description: "Tus clientes eligen idioma (español, inglés, alemán o francés) y las campañas se envían en su idioma.",
  },
  {
    icon: BarChart3,
    title: "Estadísticas avanzadas",
    description: "Consulta reseñas, puntuación media y evolución semanal.",
  },
  {
    icon: Gift,
    title: "Incentivos inteligentes para aumentar reseñas",
    description: "Elige el sistema que mejor se adapte: sin premio, premio directo, ruleta de la suerte o sorteo automático.",
  },
];

const SolutionsSection = () => {
  return (
    <section id="soluciones" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Todo lo que tu negocio necesita para brillar online
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Una plataforma completa para gestionar y mejorar tu reputación online
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card key={index} className="p-8 hover:shadow-soft transition-shadow border-2">
                <div className="flex flex-col items-start space-y-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold leading-tight">
                    {solution.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {solution.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center space-y-6">
          <p className="text-lg text-foreground font-medium">
            Empieza hoy a subir tus estrellas y verás la diferencia en tus ventas.
          </p>
          <Button variant="cta" size="xl">
            Probar Gratis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
