import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ResourcesSection from "@/components/ResourcesSection";

const Recursos = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Recursos;
