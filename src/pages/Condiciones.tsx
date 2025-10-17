import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Condiciones = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl font-bold mb-8">Condiciones del Servicio</h1>
          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-muted-foreground">
              Última actualización: Enero 2025
            </p>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">1. Aceptación de términos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Al acceder y utilizar TopEstrellas, usted acepta estar sujeto a estos 
                Términos y Condiciones y a todas las leyes y regulaciones aplicables.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">2. Descripción del servicio</h2>
              <p className="text-muted-foreground leading-relaxed">
                TopEstrellas es una plataforma SaaS que ayuda a negocios locales a gestionar 
                sus reseñas online, incluyendo:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Generación de enlaces y códigos QR para reseñas</li>
                <li>Respuestas automáticas mediante IA</li>
                <li>Captura de contactos de clientes</li>
                <li>Estadísticas y análisis de reseñas</li>
                <li>Campañas automáticas multilingües</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">3. Planes y pagos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Ofrecemos varios planes de suscripción:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Los precios se indican en la página de precios</li>
                <li>Las suscripciones se renuevan automáticamente</li>
                <li>Puede cancelar en cualquier momento</li>
                <li>No hay reembolsos por periodos parciales</li>
                <li>Prueba gratuita de 14 días sin tarjeta de crédito</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">4. Uso aceptable</h2>
              <p className="text-muted-foreground leading-relaxed">
                Usted acepta NO:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Utilizar el servicio para actividades ilegales</li>
                <li>Generar reseñas falsas o engañosas</li>
                <li>Acosar, amenazar o dañar a otros</li>
                <li>Intentar acceder a cuentas de otros usuarios</li>
                <li>Realizar ingeniería inversa de la plataforma</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">5. Propiedad intelectual</h2>
              <p className="text-muted-foreground leading-relaxed">
                Todo el contenido, características y funcionalidad de TopEstrellas son 
                propiedad de nuestra empresa y están protegidos por leyes de propiedad 
                intelectual.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">6. Limitación de responsabilidad</h2>
              <p className="text-muted-foreground leading-relaxed">
                TopEstrellas no será responsable de daños indirectos, incidentales o 
                consecuentes que resulten del uso o la imposibilidad de usar el servicio.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">7. Modificaciones del servicio</h2>
              <p className="text-muted-foreground leading-relaxed">
                Nos reservamos el derecho de modificar o discontinuar el servicio en 
                cualquier momento, con o sin previo aviso.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">8. Cancelación</h2>
              <p className="text-muted-foreground leading-relaxed">
                Puede cancelar su suscripción en cualquier momento desde el panel de control. 
                La cancelación será efectiva al final del periodo de facturación actual.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">9. Contacto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Para preguntas sobre estos términos, contáctenos:
              </p>
              <p className="text-muted-foreground">
                Email: legal@topestrellas.com<br />
                Teléfono: +34 900 000 000
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Condiciones;
