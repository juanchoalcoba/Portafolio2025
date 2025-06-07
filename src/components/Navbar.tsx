import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="bg-gray-900 font-roboto text-gray-300 fixed w-full z-10 shadow-lg">
      <nav className=" px-6 py-4 flex justify-between items-center border-b-1 border-gray-500">
        <Link to='/' className="text-xl font-bold cursor-pointer">Juancho</Link>
        <ul className="flex space-x-6">
          <Link to='/' className="hover:text-indigo-400 cursor-pointer transition">Inicio</Link>
          <li className="hover:text-indigo-400 cursor-pointer transition">Proyectos</li>
          <li className="hover:text-indigo-400 cursor-pointer transition">Contacto</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
