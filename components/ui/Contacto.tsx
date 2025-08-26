export default function Contacto() {
  return (
    <section id="contacto" className="py-16 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Contacto</h2>
        <form className="mt-8 max-w-2xl mx-auto grid gap-4">
          <input type="text" placeholder="Nombre" className="p-3 border rounded-lg w-full" />
          <input type="email" placeholder="Correo" className="p-3 border rounded-lg w-full" />
          <textarea placeholder="Mensaje" className="p-3 border rounded-lg w-full h-32"></textarea>
          <button className="bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition">
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}
