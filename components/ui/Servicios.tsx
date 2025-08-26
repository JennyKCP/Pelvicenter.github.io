import { HeartPulse, ShieldCheck, Users2 } from "lucide-react";

const services = [
  {
    icon: <HeartPulse className="w-8 h-8 text-indigo-600" />,
    title: "Rehabilitación",
    desc: "Planes personalizados para el suelo pélvico en hombres y mujeres.",
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-indigo-600" />,
    title: "Tecnología Avanzada",
    desc: "Equipos modernos para diagnósticos y tratamientos efectivos.",
  },
  {
    icon: <Users2 className="w-8 h-8 text-indigo-600" />,
    title: "Atención Integral",
    desc: "Profesionales capacitados en salud y bienestar pélvico.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Nuestros Servicios</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div key={i} className="p-6 bg-indigo-50 rounded-xl shadow hover:shadow-lg transition">
              <div className="flex justify-center mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800">{s.title}</h3>
              <p className="mt-2 text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
