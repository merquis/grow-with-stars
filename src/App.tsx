import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Soluciones from "./pages/Soluciones";
import Recursos from "./pages/Recursos";
import Precios from "./pages/Precios";
import SobreNosotros from "./pages/SobreNosotros";
import Contacto from "./pages/Contacto";
import Blog from "./pages/Blog";
import Privacidad from "./pages/Privacidad";
import Condiciones from "./pages/Condiciones";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/soluciones" element={<Soluciones />} />
          <Route path="/recursos" element={<Recursos />} />
          <Route path="/precios" element={<Precios />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/condiciones" element={<Condiciones />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
