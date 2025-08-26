const equipo = [
  { nombre: "Dra. Ana Pérez", cargo: "Fisioterapeuta especialista" },
  { nombre: "Dr. Carlos López", cargo: "Urólogo colaborador" },
  { nombre: "Lic. María García", cargo: "Nutricionista" },
];

export default function Equipo() {
  return (
    <section id="equipo" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Nuestro Equipo</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-8">
          {equipo.map((m, i) => (
            <div key={i} className="p-6 bg-indigo-50 rounded-xl shadow">
              <div className="w-24 h-24 mx-auto rounded-full bg-gray-200" />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">{m.nombre}</h3>
              <p className="text-gray-600">{m.cargo}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
