import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-black via-gray-900 to-gray-800 text-gray-300 py-16 px-8 select-none">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Logo & Marca */}
        <div className="flex flex-col space-y-4">
          <h1 className="text-5xl font-extrabold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-white">
            JUAN ALCOBA
          </h1>
          <p className="max-w-sm text-gray-400 leading-relaxed">
            Eleva tu presencia digital con nuestros diseños futuristas en tonos oscuros y una experiencia fluida. Únete a la ola de innovación.
          </p>
          <div className="flex space-x-6 mt-4">
            <a
              href="#"
              aria-label="Twitter"
              className="hover:text-purple-500 transition-colors"
            >
              {/* Icono de Twitter */}
              <svg
                className="w-7 h-7 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0022.4.4a9.14 9.14 0 01-2.88 1.1A4.52 4.52 0 0016.87 0c-2.5 0-4.51 2.02-4.51 4.52 0 .36.04.7.11 1.03A12.83 12.83 0 013 1.15a4.52 4.52 0 001.39 6.03 4.49 4.49 0 01-2.05-.56v.06c0 2.22 1.58 4.06 3.67 4.48a4.52 4.52 0 01-2.04.08c.58 1.8 2.27 3.1 4.27 3.14A9.06 9.06 0 013 19.5 12.82 12.82 0 008.29 21c7.55 0 11.68-6.26 11.68-11.68 0-.18-.01-.36-.02-.53A8.36 8.36 0 0023 3z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-pink-600 transition-colors"
            >
              {/* Icono de Instagram */}
              <svg
                className="w-7 h-7 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm9.9 1.35a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-blue-500 transition-colors"
            >
              {/* Icono de LinkedIn */}
              <svg
                className="w-7 h-7 fill-current"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zm.02 6h4.9v12h-4.9v-12zm7.8 0h4.7v1.9h.07c.66-1.26 2.28-2.58 4.7-2.58v4.9c-1.72 0-3.02.88-3.52 2.16v7.94h-4.9v-12z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Sección de Enlaces */}
        <div className="flex justify-around md:justify-center md:space-x-20">
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white tracking-wide uppercase">
              Enlaces útiles
            </h2>
            <ul className="space-y-4 text-lg cursor-pointer hover:text-purple-400 transition-colors">
              <Link to='/'>Inicio</Link>
              <li>Proyectos</li>
              <li>Contacto</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6 text-white tracking-wide uppercase">
              Recursos
            </h2>
            <ul className="space-y-4 text-lg cursor-pointer hover:text-pink-400 transition-colors">
              <li>Blog</li>
              <li>Preguntas frecuentes</li>
              <li>Soporte</li>
              <li>Política de privacidad</li>
              <li>Términos de uso</li>
            </ul>
          </div>
        </div>

        {/* Contacto y Boletín */}
        <div className="flex flex-col space-y-6 max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-white tracking-wide uppercase">
            Mantente conectado
          </h2>
          <p className="text-gray-400">
            Suscríbete a nuestro boletín para recibir las últimas novedades y ofertas exclusivas.
          </p>
          <form className="flex space-x-4">
            <input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-grow rounded-md px-4 py-3 text-gray-900 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-950 text-white px-6 py-3 rounded-md font-semibold transition"
            >
              Suscribirme
            </button>
          </form>
          <div className="mt-auto text-gray-500 text-sm tracking-wide">
            &copy; {new Date().getFullYear()} Juan Alcoba. Todos los derechos reservados.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
