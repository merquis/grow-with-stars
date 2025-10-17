import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const Blog = () => {
  const articulos = [
    {
      titulo: "Cómo conseguir más reseñas en Google: Guía completa 2025",
      categoria: "Guías",
      fecha: "15 Enero 2025",
      lectura: "5 min",
      extracto: "Descubre las estrategias más efectivas para aumentar el número de reseñas positivas en Google y mejorar tu presencia online.",
      imagen: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800",
    },
    {
      titulo: "Por qué las reseñas online son cruciales para tu negocio local",
      categoria: "Marketing",
      fecha: "10 Enero 2025",
      lectura: "4 min",
      extracto: "El 93% de los consumidores lee reseñas antes de visitar un negocio. Aprende por qué son tan importantes.",
      imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800",
    },
    {
      titulo: "Responder reseñas negativas: Convierte críticas en oportunidades",
      categoria: "Atención al cliente",
      fecha: "5 Enero 2025",
      lectura: "6 min",
      extracto: "Una reseña negativa bien gestionada puede convertirse en tu mejor carta de presentación. Te enseñamos cómo.",
      imagen: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800",
    },
    {
      titulo: "Códigos QR para reseñas: La forma más fácil de conseguirlas",
      categoria: "Herramientas",
      fecha: "28 Diciembre 2024",
      lectura: "3 min",
      extracto: "Los códigos QR eliminan la fricción y multiplican tus reseñas. Descubre cómo implementarlos en tu negocio.",
      imagen: "https://images.unsplash.com/photo-1555421689-3f034debb7a6?w=800",
    },
    {
      titulo: "Inteligencia Artificial para gestionar reseñas: El futuro es ahora",
      categoria: "Tecnología",
      fecha: "20 Diciembre 2024",
      lectura: "5 min",
      extracto: "La IA puede responder tus reseñas de forma personalizada y profesional. Conoce las ventajas de la automatización.",
      imagen: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800",
    },
    {
      titulo: "Casos de éxito: Restaurantes que duplicaron clientes con TopEstrellas",
      categoria: "Casos de éxito",
      fecha: "15 Diciembre 2024",
      lectura: "7 min",
      extracto: "Historias reales de restaurantes que mejoraron su puntuación y aumentaron sus reservas usando nuestra plataforma.",
      imagen: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold">Blog de TopEstrellas</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Consejos, guías y estrategias para mejorar tu reputación online
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articulos.map((articulo, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-soft transition-shadow">
                <img 
                  src={articulo.imagen} 
                  alt={articulo.titulo}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                      {articulo.categoria}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold leading-tight">
                    {articulo.titulo}
                  </h3>
                  
                  <p className="text-muted-foreground">
                    {articulo.extracto}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {articulo.fecha}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {articulo.lectura}
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="w-full group">
                    Leer más
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
