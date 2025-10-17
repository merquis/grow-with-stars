import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";

const Precios = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Precios;
