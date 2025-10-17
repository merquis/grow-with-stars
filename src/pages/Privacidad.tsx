import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacidad = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-5xl font-bold mb-8">Política de Privacidad</h1>
          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-muted-foreground">
              Última actualización: Enero 2025
            </p>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">1. Introducción</h2>
              <p className="text-muted-foreground leading-relaxed">
                En TopEstrellas, nos tomamos muy en serio la privacidad de nuestros usuarios. 
                Esta Política de Privacidad explica cómo recopilamos, usamos, divulgamos y 
                protegemos su información personal cuando utiliza nuestros servicios.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">2. Información que recopilamos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Recopilamos información que usted nos proporciona directamente, como:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Nombre y datos de contacto (email, teléfono)</li>
                <li>Información de la empresa y negocio</li>
                <li>Datos de facturación y pago</li>
                <li>Comunicaciones con nuestro equipo de soporte</li>
                <li>Información de uso de la plataforma</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">3. Cómo usamos su información</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Proporcionar y mejorar nuestros servicios</li>
                <li>Procesar transacciones y enviar confirmaciones</li>
                <li>Responder a sus consultas y proporcionar soporte</li>
                <li>Enviar actualizaciones sobre el servicio</li>
                <li>Cumplir con obligaciones legales</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">4. Compartir información</h2>
              <p className="text-muted-foreground leading-relaxed">
                No vendemos ni alquilamos su información personal a terceros. Solo compartimos 
                información con:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Proveedores de servicios que nos ayudan a operar nuestro negocio</li>
                <li>Autoridades cuando sea requerido por ley</li>
                <li>Con su consentimiento explícito</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">5. Seguridad de los datos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Implementamos medidas de seguridad técnicas y organizativas apropiadas para 
                proteger su información personal contra acceso no autorizado, alteración, 
                divulgación o destrucción.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">6. Sus derechos</h2>
              <p className="text-muted-foreground leading-relaxed">
                Usted tiene derecho a:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Acceder a su información personal</li>
                <li>Rectificar datos incorrectos</li>
                <li>Solicitar la eliminación de sus datos</li>
                <li>Oponerse al procesamiento de sus datos</li>
                <li>Solicitar la portabilidad de sus datos</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">7. Cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Utilizamos cookies y tecnologías similares para mejorar su experiencia, 
                analizar el uso de nuestro sitio y personalizar contenido.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-3xl font-bold">8. Contacto</h2>
              <p className="text-muted-foreground leading-relaxed">
                Si tiene preguntas sobre esta Política de Privacidad, contáctenos en:
              </p>
              <p className="text-muted-foreground">
                Email: privacidad@topestrellas.com<br />
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

export default Privacidad;
