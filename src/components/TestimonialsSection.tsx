import { Card } from "@/components/ui/card";
import { Star, TrendingUp } from "lucide-react";

const testimonials = [
  {
    business: "Restaurante La Terraza",
    type: "Restaurante",
    result: "+75 reseñas en 30 días",
    rating: 4.8,
    quote: "TopEstrellas cambió completamente nuestra presencia online. Ahora recibimos reseñas constantemente sin tener que perseguir a los clientes.",
    owner: "María González",
  },
  {
    business: "Hotel SolMar",
    type: "Hotel",
    result: "De 4,1 ⭐ a 4,6 ⭐ en dos meses",
    rating: 4.6,
    quote: "La herramienta de respuestas automáticas nos ahorra horas cada semana. Las respuestas son profesionales y personalizadas.",
    owner: "Carlos Ramírez",
  },
  {
    business: "Centro Estética Élite",
    type: "Centro de Estética",
    result: "Duplicamos reservas",
    rating: 4.9,
    quote: "Las campañas automáticas son increíbles. Capturamos los contactos de nuestros clientes y los convertimos en ventas recurrentes.",
    owner: "Ana Martínez",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Negocios que ya brillan con TopEstrellas
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Casos de éxito reales de negocios como el tuyo
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 bg-background">
              <div className="space-y-6">
                <div className="flex items-center gap-2">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${
                        i < Math.floor(testimonial.rating) 
                          ? 'text-accent fill-accent' 
                          : 'text-muted'
                      }`} 
                    />
                  ))}
                  <span className="font-semibold ml-2">{testimonial.rating}</span>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-1">{testimonial.business}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.type}</p>
                </div>
                
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <span className="font-semibold text-primary">{testimonial.result}</span>
                </div>
                
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
                
                <div className="pt-4 border-t border-border">
                  <p className="font-semibold">{testimonial.owner}</p>
                  <p className="text-sm text-muted-foreground">Propietario/a</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
