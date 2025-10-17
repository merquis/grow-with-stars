import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contacto = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensaje enviado",
      description: "Te responderemos en menos de 24 horas.",
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold">Contacta con nosotros</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              ¿Tienes preguntas? Estamos aquí para ayudarte
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Formulario */}
            <Card className="p-8">
              <h2 className="text-2xl font-bold mb-6">Envíanos un mensaje</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Nombre</label>
                  <Input placeholder="Tu nombre" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Email</label>
                  <Input type="email" placeholder="tu@email.com" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Teléfono</label>
                  <Input type="tel" placeholder="+34 600 000 000" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Mensaje</label>
                  <Textarea 
                    placeholder="Cuéntanos cómo podemos ayudarte..." 
                    rows={6}
                    required
                  />
                </div>
                <Button type="submit" variant="cta" size="lg" className="w-full">
                  Enviar Mensaje
                </Button>
              </form>
            </Card>

            {/* Info de contacto */}
            <div className="space-y-8">
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground">hola@topestrellas.com</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Respondemos en menos de 24 horas
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Teléfono</h3>
                    <p className="text-muted-foreground">+34 900 000 000</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Lun-Vie de 9:00 a 18:00
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Oficinas</h3>
                    <p className="text-muted-foreground">
                      Calle Ejemplo 123<br />
                      28001 Madrid, España
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 bg-muted">
                <h3 className="font-semibold mb-3">Horario de atención</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lunes - Viernes:</span>
                    <span className="font-medium">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Sábado:</span>
                    <span className="font-medium">10:00 - 14:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Domingo:</span>
                    <span className="font-medium">Cerrado</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contacto;
