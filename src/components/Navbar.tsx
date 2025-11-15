import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaBriefcase } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed w-full z-30 bg-gray-900/40 backdrop-blur-xl shadow-lg border-b border-white/10">
      <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* BRAND */}
        <Link
          to="/"
          className="flex items-center gap-3 text-xl font-bold tracking-wide text-gray-200 hover:text-white transition-all"
        >
          <FaBriefcase className="text-indigo-400 text-2xl" />
          <span className="text-gray-200">Juancho</span>
        </Link>

        {/* MENU DESKTOP */}
        <ul className="hidden md:flex gap-8 text-gray-300 items-center">
          <Link
            to="/"
            className="hover:text-indigo-400 transition-colors text-lg font-medium"
          >
            Inicio
          </Link>

          <a
            href="#proyectos"
            className="hover:text-indigo-400 transition-colors text-lg font-medium cursor-pointer"
          >
            Proyectos
          </a>

          <a
            href="#contact"
            className="hover:text-indigo-400 transition-colors text-lg font-medium cursor-pointer"
          >
            Contacto
          </a>
        </ul>

        {/* ICON MENÚ MÓVIL */}
        <div
          className="md:hidden text-3xl text-gray-200 cursor-pointer transition hover:text-indigo-400"
          onClick={toggleMenu}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* MENU MOBILE */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-900/95 backdrop-blur-lg py-8 flex flex-col items-center gap-8 md:hidden animate-fadeIn shadow-xl border-b border-gray-700">
            <Link
              to="/"
              onClick={toggleMenu}
              className="text-gray-200 hover:text-indigo-400 text-lg transition"
            >
              Inicio
            </Link>

            <a
              href="#proyectos"
              onClick={toggleMenu}
              className="text-gray-200 hover:text-indigo-400 text-lg transition cursor-pointer"
            >
              Proyectos
            </a>

            <a
              href="#contact"
              onClick={toggleMenu}
              className="text-gray-200 hover:text-indigo-400 text-lg transition cursor-pointer"
            >
              Contacto
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
