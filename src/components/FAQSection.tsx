import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "¿Necesito saber informática?",
    answer: "No, TopEstrellas está diseñado para ser muy fácil de usar. Todo es visual y no necesitas conocimientos técnicos. Te guiamos paso a paso en la configuración.",
  },
  {
    question: "¿Funciona si no tengo página web?",
    answer: "Sí, TopEstrellas funciona perfectamente sin página web. Utilizamos enlaces y códigos QR que llevan directamente a Google y TripAdvisor.",
  },
  {
    question: "¿Puedo cancelar cuando quiera?",
    answer: "Sí, no hay permanencia. Puedes cancelar tu suscripción en cualquier momento desde el panel de control sin ningún coste adicional.",
  },
  {
    question: "¿Cómo se conecta con Google?",
    answer: "TopEstrellas utiliza las APIs oficiales de Google. La conexión es segura y cumple con todas las políticas de privacidad y protección de datos.",
  },
  {
    question: "¿Cuándo veré resultados?",
    answer: "La mayoría de nuestros clientes empiezan a ver las primeras reseñas en las primeras 48 horas. Los resultados mejoran semana tras semana.",
  },
  {
    question: "¿Qué incluye la prueba gratis?",
    answer: "La prueba gratis incluye acceso completo a todas las funcionalidades durante 14 días. No necesitas tarjeta de crédito para empezar.",
  },
];

const FAQSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl lg:text-5xl font-bold">
            Preguntas frecuentes
          </h2>
          <p className="text-xl text-muted-foreground">
            Resolvemos tus dudas sobre TopEstrellas
          </p>
        </div>
        
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border-2 border-border rounded-xl px-6 bg-card"
            >
              <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
