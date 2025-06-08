import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaBriefcase } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-gray-900/30 font-roboto text-gray-300 fixed w-full z-20 shadow-lg backdrop-blur-2xl">
      <nav className="py-4 px-8 flex w-full justify-between items-center border-b border-gray-500 ">
        <Link to="/" className="flex items-center text-xl font-bold cursor-pointer space-x-2">
          <FaBriefcase className="text-gray-300" />
          <span>Juancho</span>
        </Link>

        {/* Menú para pantallas medianas y grandes */}
        <ul className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-indigo-400 transition">Inicio</Link>
          <li className="hover:text-indigo-400 cursor-pointer transition">
            <a href="#proyectos">Proyectos</a>
          </li>
          <li className="hover:text-indigo-400 cursor-pointer transition">Contacto</li>
        </ul>

        {/* Ícono hamburguesa en móvil */}
        <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Menú móvil */}
        {isOpen && (
          <div className="absolute top-16 left-0 w-full bg-gray-900 flex flex-col items-center space-y-6 py-6 shadow-md md:hidden z-20">
            <Link to="/" onClick={toggleMenu} className="hover:text-indigo-400 transition">Inicio</Link>
            <button onClick={toggleMenu} className="hover:text-indigo-400 transition">Proyectos</button>
            <button onClick={toggleMenu} className="hover:text-indigo-400 transition">Contacto</button>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
