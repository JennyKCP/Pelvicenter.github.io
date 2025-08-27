export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between gap-8 px-8 py-16 bg-rose-50">
      <div className="flex-1">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          En Pelvicenter, somos especialistas en fortalecer tu suelo pélvico
        </h1>
        <p className="text-lg text-gray-700 mb-6">
          Recupera el control y disfruta tu día a día sin preocupaciones gracias a nuestra fisioterapia pélvica especializada.
        </p>
        <a
          href="#contacto"
          className="inline-block bg-rose-500 hover:bg-rose-600 text-white font-semibold px-6 py-3 rounded-full transition"
        >
          Contáctanos
        </a>
      </div>
      <div className="flex-1">
        <img
          src="/assets/Logo.png"
          alt="Terapia suelo pélvico"
          className="rounded-2xl shadow-lg w-full"
        />
      </div>
    </section>
  )
}
