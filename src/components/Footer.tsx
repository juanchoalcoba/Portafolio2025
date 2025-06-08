import { FaGithub, FaInstagram, FaWhatsapp, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8 w-full select-none">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
        {/* Marca */}
        <h1 className="text-2xl font-bold tracking-wide">Juancho</h1>

        {/* Slogan */}
        <p className="text-center md:text-left max-w-md text-gray-400">
          Eleva tu presencia digital con diseños futuristas y modernos.
        </p>

        {/* Redes sociales */}
        <div className="flex space-x-6 text-2xl text-gray-400">
          <a
            href="https://github.com/juanchoalcoba"
            target="_blank"
            aria-label="GitHub"
            className="hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com/juancho_dev_uy/"
            target="_blank"
            aria-label="Instagram"
            className="hover:text-pink-600 transition"
          >
            <FaInstagram />
          </a>
          <a
            href="https://wa.me/59893774813"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="hover:text-green-500 transition"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-alcoba-113b5a357/"
            target="_blank"
            aria-label="LinkedIn"
            className="hover:text-blue-500 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Juancho. Todos los derechos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
