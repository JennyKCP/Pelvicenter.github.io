const testimonios = [
  {
    nombre: "Maria Fernanda Peña",
    texto: "Estar embarazada es una etapa hermosa, pero también desafiante. En este centro encontré el apoyo y el cuidado que mi cuerpo necesita. Cada sesión me hace sentir relajada y feliz de contar con tan buen@s profesionales. ¡Mil gracias!",
  },
  {
    nombre: "Amparo Escobar",
    texto: "La Lic. Muy capacitada profesionalmente. Por mi experiencia a la tercera sesión mi dolencia mejoro un 80%.Me siento feliz y muy cómoda con la atención que me brindan. Recomiendo a todas las personas que si necesitan ayuda en sus procesos de rehabilitación puedan acudir a su consulta  para obtener más información.",
	},
  {
    nombre: "Mauge",
    texto: "Estoy súper contenta con la atención!!. Me siento muy segura con la licenciada, que es muy correcta y profesional en el trato conmigo!!. Voy avanzando rápido, y muy bien, en mi recuperación!!. Recomiendo Pelvicenter al 100 × 100!!!.",
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
