export default function Navbar() {
  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md sticky top-0 z-50">
      <div className="text-rose-600 font-bold text-lg">🌸 PELVICENTER</div>
      <nav>
        <ul className="flex gap-6 text-gray-700">
          <li><a href="#" className="hover:text-rose-600">Inicio</a></li>
          <li><a href="#servicios" className="hover:text-rose-600">Servicios</a></li>
          <li><a href="#nosotros" className="hover:text-rose-600">Sobre nosotros</a></li>
          <li><a href="#contacto" className="hover:text-rose-600">Contacto</a></li>
        </ul>
      </nav>
    </header>
  )
}

