import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Users, Target, Heart, Award } from "lucide-react";
import { Card } from "@/components/ui/card";

const SobreNosotros = () => {
  const valores = [
    {
      icon: Users,
      title: "Centrados en el cliente",
      description: "Tu éxito es nuestro éxito. Diseñamos cada funcionalidad pensando en ti.",
    },
    {
      icon: Target,
      title: "Simplicidad",
      description: "La tecnología debe ser fácil de usar, no complicar tu día a día.",
    },
    {
      icon: Heart,
      title: "Compromiso",
      description: "Estamos aquí para ayudarte a crecer, con soporte humano siempre disponible.",
    },
    {
      icon: Award,
      title: "Innovación",
      description: "Utilizamos IA y las mejores tecnologías para darte ventaja competitiva.",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center mb-20 space-y-6 max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold">
              Ayudamos a negocios locales a brillar online
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              TopEstrellas nació con una misión clara: hacer que la gestión de reseñas sea 
              sencilla y efectiva para cualquier negocio local, sin importar su tamaño o 
              conocimientos técnicos.
            </p>
          </div>

          {/* Historia */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold">Nuestra Historia</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Comenzamos cuando vimos que muchos negocios locales excelentes tenían pocas 
                reseñas online, mientras que sus clientes satisfechos simplemente no sabían 
                cómo dejar una valoración.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Decidimos crear una solución que eliminara esa fricción: códigos QR simples, 
                enlaces directos y recordatorios automáticos que convierten clientes felices 
                en reseñas positivas.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Hoy, ayudamos a miles de negocios a mejorar su reputación online y atraer 
                más clientes cada día.
              </p>
            </div>
            <div className="bg-gradient-primary p-12 rounded-2xl text-center text-white">
              <div className="text-6xl font-bold mb-2">+10,000</div>
              <div className="text-xl mb-8">Reseñas generadas</div>
              <div className="text-6xl font-bold mb-2">500+</div>
              <div className="text-xl mb-8">Negocios confían en nosotros</div>
              <div className="text-6xl font-bold mb-2">4.8⭐</div>
              <div className="text-xl">Puntuación media de clientes</div>
            </div>
          </div>

          {/* Valores */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-center mb-12">Nuestros Valores</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {valores.map((valor, index) => {
                const Icon = valor.icon;
                return (
                  <Card key={index} className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-primary/10 rounded-xl">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{valor.title}</h3>
                    <p className="text-muted-foreground">{valor.description}</p>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* CTA Final */}
          <div className="text-center space-y-6 bg-muted p-12 rounded-2xl">
            <h2 className="text-3xl font-bold">¿Listo para empezar?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Únete a los cientos de negocios que ya están mejorando su reputación online
            </p>
            <Button variant="cta" size="xl">
              Probar Gratis
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SobreNosotros;
