export default function Servicios() {
  const services = [
    {
    
      title: "Rehabilitación de Suelo Pélvico",
      desc: "Fortalecimiento y recuperación de los músculos del suelo pélvico para prevenir o tratar incontinencia urinaria, prolapsos y molestias relacionadas. Especialmente indicado en mujeres postparto o en etapas de menopausia."
    },
    {

      title: "Prevención y Tratamiento de Incontinencia Urinaria",
      desc: "Evaluación y terapias específicas para mujeres que sufren escapes de orina al reír, toser, hacer deporte o durante el día a día. Soluciones discretas y efectivas para mejorar la calidad de vida"
    },
    {

      title: "Fisioterapia Postparto",
      desc: "Acompañamiento y recuperación integral después del embarazo y parto. Incluye ejercicios personalizados, masajes y técnicas para devolver a fuerza, elasticidad y confianza al cuerpo."
	  },
	{

      title: "Terapias para Dolores Pélvicos y Lumbares",
      desc: "Tratamiento de dolores crónicos en la zona pélvica, abdominal o lumbar relacionados con alteraciones musculares, posturales o del suelo pélvico."
    },
	{

      title: "Fisioterapia en Embarazo",
      desc: "Preparación del cuerpo para el parto a través de ejercicios de elasticidad, respiración y fortalecimiento del suelo pélvico, reduciendo dolores de espalda y molestias durante el embarazo."
    }
  ]

  return (
    <section id="servicios" className="px-8 py-16 bg-white text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-10">Nuestros servicios</h2>
      <div className="grid gap-8 md:grid-cols-3">
        {services.map((s, i) => (
          <div key={i} className="bg-rose-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
           
            <h3 className="font-semibold text-lg text-gray-900 mb-2">{s.title}</h3>
            <p className="text-gray-700">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
