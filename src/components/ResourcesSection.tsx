import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Calculator, Link, Printer, QrCode } from "lucide-react";

const resources = [
  {
    icon: Calculator,
    title: "Calculadora de reseñas necesarias",
    description: "Calcula cuántas reseñas necesitas para mejorar tu puntuación",
  },
  {
    icon: Link,
    title: "Enlace directo a reseñas de Google",
    description: "Genera tu enlace personalizado para reseñas",
  },
  {
    icon: Printer,
    title: "Cartel con código QR imprimible",
    description: "Descarga carteles listos para imprimir y colocar en tu negocio",
  },
  {
    icon: QrCode,
    title: "Generador de código QR personalizado",
    description: "Crea códigos QR personalizados para tu negocio",
  },
];

const ResourcesSection = () => {
  return (
    <section id="recursos" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Herramientas gratuitas para conseguir más reseñas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Recursos prácticos que puedes usar ahora mismo
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {resources.map((resource, index) => {
            const Icon = resource.icon;
            return (
              <Card key={index} className="p-6 hover:shadow-soft transition-shadow bg-background">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-4 bg-accent/10 rounded-xl">
                    <Icon className="h-8 w-8 text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold">
                    {resource.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {resource.description}
                  </p>
                  <Button variant="outline" size="sm" className="w-full">
                    Usar Herramienta
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
        
        <div className="text-center space-y-6 bg-background p-12 rounded-2xl shadow-card">
          <p className="text-xl font-semibold">
            ¿Quieres automatizarlo todo? TopEstrellas lo hace por ti.
          </p>
          <Button variant="cta" size="xl">
            Probar Gratis
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
