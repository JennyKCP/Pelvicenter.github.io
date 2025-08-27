import { PhoneIcon, EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline"
import { FaFacebook, FaInstagram, FaLink } from "react-icons/fa6"

export default function Contact() {
  return (
    <section id="contacto" className="px-8 py-16 bg-rose-50">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Contáctanos</h2>
      <p className="text-gray-700 mb-10 text-center">
        Estamos aquí para ayudarte. Elige el medio que prefieras:
      </p>

      {/* Datos de contacto */}
      <div className="flex flex-col md:flex-row justify-center flex-wrap gap-8 text-gray-800 mb-10">
        <a href="tel:+59170370383" className="flex items-center gap-2 hover:text-rose-600">
          <PhoneIcon className="w-5 h-5" /> +591 70370383
        </a>
        <a href="mailto:info@pelvicenter.com" className="flex items-center gap-2 hover:text-rose-600">
          <EnvelopeIcon className="w-5 h-5" /> info@pelvicenter.com
        </a>
        <a href="https://www.facebook.com/pelvicenterbo" target="_blank" className="flex items-center gap-2 hover:text-rose-600">
          <FaFacebook className="w-5 h-5" /> Facebook
        </a>
        <a href="https://www.instagram.com/pelvicenter.bo" target="_blank" className="flex items-center gap-2 hover:text-rose-600">
          <FaInstagram className="w-5 h-5" /> Instagram
        </a>
        <a 
          href="https://linktr.ee/pelvicenter.bo" 
          target="_blank" 
          className="flex items-center gap-2 hover:text-rose-600"
        >
          <FaLink className="w-5 h-5" /> Linktree
        </a>
        <a 
          href="https://www.google.com/maps/place/PelviCenter/@-17.3872708,-66.1526161,17z/data=!3m1!4b1!4m6!3m5!1s0x93e375573a1e2187:0xd473ac3717cccc33!8m2!3d-17.3872708!4d-66.1526161!16s%2Fg%2F11pz7kgk7j" 
          target="_blank" 
          className="flex items-center gap-2 hover:text-rose-600"
        >
          <MapPinIcon className="w-5 h-5" /> Ver en Google Maps
        </a>
      </div>

      {/* Mapa embebido (con coordenadas correctas de tu link) */}
      <div className="w-full h-80 rounded-2xl overflow-hidden shadow-lg">
        <iframe
          title="Ubicación Pelvicenter"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.4313069831874!2d-66.1526161!3d-17.3872708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x93e375573a1e2187%3A0xd473ac3717cccc33!2sPelviCenter!5e0!3m2!1ses!2sbo!4v1724712370000!5m2!1ses!2sbo"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  )
}

