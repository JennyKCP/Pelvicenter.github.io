const testimonios = [
  {
    nombre: "Laura M.",
    texto: "Gracias a Pelvicenter recuperé mi confianza y mejoré mi calidad de vida.",
  },
  {
    nombre: "José R.",
    texto: "Excelente atención, muy profesionales y dedicados.",
  },
];

export default function Testimonios() {
  return (
    <section id="testimonios" className="py-16 bg-indigo-50">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Testimonios</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonios.map((t, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow">
              <p className="text-gray-700 italic">“{t.texto}”</p>
              <h3 className="mt-4 font-semibold text-indigo-600">{t.nombre}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
