import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative overflow-hidden h-screen w-full font-roboto flex items-center justify-center px-6 pt-20 text-white">
      {/* Fondo nebuloso con gradientes y manchas */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-gray-900 via-gray-950 to-gray-900">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-900 opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-900 opacity-30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gray-800 opacity-20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="p-1 border-2 border-gray-500 rounded-lg backdrop-blur-sm">
        <div className="p-10 border-2 border-gray-600 rounded-3xl text-center">
            <div className="absolute inset-0 bg-black opacity-50 z-[-2]"></div>
          <div className="flex items-center justify-center gap-4 mb-4 flex-wrap">
            {/* Imagen de perfil */}
            <img
              src="https://avatars.githubusercontent.com/u/107285285?v=4" // Asegurate de que esta imagen exista en la carpeta public
              alt="Foto de perfil de Juan Alcoba"
              className="w-16 h-16 rounded-full object-cover border-2 border-blue-100"
            />
            <p className="text-xl md:text-4xl text-blue-100">Juan Alcoba</p>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-100">
            Full Stack Developer
          </h2>
          

          {/* Botones */}
          <div className="flex justify-center gap-4 mt-6 flex-wrap">
            <button className="bg-blue-900 hover:bg-blue-950 text-white font-semibold py-2 px-6 rounded-xl transition duration-300">
              Descargar CV
            </button>
            <Link to='/home' className="bg-gray-300 hover:bg-white text-gray-800 font-semibold py-2 px-6 rounded-xl transition duration-300">
              Ingresar
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
