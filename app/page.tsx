import Navbar from "@/components/ui/Navbar";
import Hero from "@/components/ui/Hero";
import Servicios from "@/components/ui/Servicios";
import Beneficios from "@/components/ui/Beneficios";
import Equipo from "@/components/ui/Equipo";
import Testimonios from "@/components/ui/Testimonios";
import Contacto from "@/components/ui/Contacto";
import Footer from "@/components/ui/Footer";


export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Barra de navegación */}
      <Navbar />

      {/* Contenido principal */}
      <main className="flex-1">
        {/* Sección principal / Hero */}
        <Hero />

        {/* Sección de servicios */}
        <Servicios />

        {/* Sección de beneficios */}
        <Beneficios />

        {/* Sección del equipo */}
        <Equipo />

        {/* Sección de testimonios */}
        <Testimonios />

        {/* Sección de contacto */}
        <Contacto />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
