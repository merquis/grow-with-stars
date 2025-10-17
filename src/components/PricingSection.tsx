import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Mensual",
    price: "129",
    period: "mes",
    popular: false,
  },
  {
    name: "Trimestral",
    price: "297",
    period: "3 meses",
    popular: true,
    savings: "Ahorra 90€",
  },
  {
    name: "Semestral",
    price: "540",
    period: "6 meses",
    popular: false,
    savings: "Ahorra 234€",
  },
];

const features = [
  "Generador de reseñas con QR",
  "Respuestas automáticas por IA",
  "Captura de contactos",
  "Campañas automáticas",
  "Estadísticas avanzadas",
  "Soporte humano",
];

const PricingSection = () => {
  return (
    <section id="precios" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Planes sencillos para hacer crecer tu negocio
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sin permanencia. Cancela cuando quieras.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 relative ${
                plan.popular 
                  ? 'border-primary border-2 shadow-soft scale-105' 
                  : 'border-2'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-primary text-primary-foreground rounded-full text-sm font-semibold">
                  Más Popular
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                {plan.savings && (
                  <p className="text-sm text-accent font-medium mb-4">{plan.savings}</p>
                )}
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold">{plan.price}€</span>
                  <span className="text-muted-foreground">/ {plan.period}</span>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                {features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="p-1 bg-primary/10 rounded-full mt-0.5">
                      <Check className="h-4 w-4 text-primary" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button 
                variant={plan.popular ? "cta" : "default"} 
                size="lg" 
                className="w-full"
              >
                Probar Gratis
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
