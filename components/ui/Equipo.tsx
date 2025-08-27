export default function equipo() {
  return (
    <section id="equipo" className="px-8 py-16 bg-white">
      <h2 className="text-2xl font-bold text-gray-900 mb-10 text-center">
        Nuestro Equipo
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Foto a la izquierda */}
        <div className="w-full md:w-1/3">
          <img
            src="/assets/Lic1.png" 
            alt="Nombre del especialista"
            className="w-full h-auto rounded-2xl shadow-lg object-cover"
          />
        </div>

        {/* Info a la derecha */}
        <div className="w-full md:w-2/3 text-gray-700">
          <h3 className="text-xl font-semibold text-gray-900">
            Dra. Nombre Apellido
          </h3>
          <p className="mt-2 text-rose-600 font-medium">
            Fisioterapeuta especializada en salud pélvica y rehabilitación de suelo pélvico.
          </p>

          <p className="mt-4 leading-relaxed">
            Con más de <strong>10 años de experiencia</strong> en fisioterapia, ayudando a mujeres a recuperar su bienestar físico y emocional en diferentes etapas de la vida, la Dra. Adrianne Vigabriel.

			Cree firmemente que la salud pélvica es una parte esencial de la calidad de vida de la mujer. Su enfoque está basado en la atención personalizada, la empatía y la educación, para que cada paciente entienda su cuerpo y se sienta acompañada en el proceso de recuperación.

			En Pelvicenter, brinda un tratamiento integral en un espacio seguro y confidencial, diseñado exclusivamente para mujeres. Su objetivo no es solo aliviar síntomas, sino encontrar la raíz de la afección y trabajar juntas hacia una recuperación real y duradera.
          </p>

          <p className="mt-4 leading-relaxed">
            Su enfoque combina técnicas de rehabilitación, educación del
            paciente y un acompañamiento cercano para lograr resultados
            efectivos y duraderos.
          </p>

          <ul className="mt-6 space-y-2 list-disc list-inside">
            <li>Licenciada en Fisioterapia</li>
            <li>Postgrado en Rehabilitación Pélvica</li>
            <li>Miembro de la Sociedad de Fisioterapia en Salud de la Mujer</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
