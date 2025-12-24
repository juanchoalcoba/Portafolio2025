import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed w-full z-30 bg-gray-900/40 backdrop-blur-xl shadow-lg border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* BRAND */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-3 text-xl font-bold tracking-wide text-gray-200 hover:text-white transition-all"
        >
          <img
            src="/perfil.jpeg"
            alt="Avatar de Juancho"
            className="w-8 h-8 rounded-full object-cover border border-white/20"
          />
          <span>Juancho</span>
        </Link>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex gap-8 text-gray-300 items-center">

          <Link
            to="/"
            className="hover:text-indigo-400 transition-colors text-lg font-medium"
          >
            Inicio
          </Link>

          <button
            onClick={() => scrollToSection("proyectos")}
            className="hover:text-indigo-400 cursor-pointer transition-colors text-lg font-medium"
          >
            Proyectos
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="hover:text-indigo-400 cursor-pointer transition-colors text-lg font-medium"
          >
            Contacto
          </button>
        </ul>

        {/* ICONO MENÚ MÓVIL */}
        <div
          className="md:hidden text-3xl text-gray-200 cursor-pointer transition hover:text-indigo-400"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* MENU MOBILE */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-900/95 backdrop-blur-lg py-8 flex flex-col items-center gap-8 md:hidden shadow-xl border-b border-gray-700">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="text-gray-200 hover:text-indigo-400 text-lg transition"
            >
              Inicio
            </Link>

            <button
              onClick={() => scrollToSection("proyectos")}
              className="text-gray-200 hover:text-indigo-400 text-lg transition"
            >
              Proyectos
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-200 hover:text-indigo-400 text-lg transition"
            >
              Contacto
            </button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
