export default function Hero() {
  return (
    <section id="inicio" className="pt-24 pb-16 bg-indigo-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
          Cuidamos tu Salud Pélvica
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
          En Pelvicenter ofrecemos atención especializada en rehabilitación de suelo pélvico con tecnología avanzada y profesionales expertos.
        </p>
        <div className="mt-6">
          <a
            href="#contacto"
            className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
          >
            Agenda tu cita
          </a>
        </div>
      </div>
    </section>
  );
}
