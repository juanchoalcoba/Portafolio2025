import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaJs
} from 'react-icons/fa';

import {
  SiMongodb,
  SiMysql
} from 'react-icons/si';

const About = () => {
  return (
    <section className="min-h-screen w-full  text-white flex flex-col items-center justify-center">
      <h1 className="text-6xl md:text-8xl font-bold mb-6 text-blue-200 text-center drop-shadow-lg">
        Sobre mí
      </h1>

      <p className="text-lg md:text-xl text-balance text-center max-w-2xl text-gray-300 mb-10">
        Soy un desarrollador full stack con pasión por crear experiencias web modernas, funcionales y con estilo. Amante del código limpio, las buenas prácticas y de todo lo que huela a tecnología. 🚀
      </p>

      {/* Íconos tecnológicos */}
      <div className="flex gap-6 flex-wrap justify-center text-4xl md:text-5xl text-blue-300 animate-pulse">
        <FaHtml5 className="hover:text-orange-500 transition" />
        <FaCss3Alt className="hover:text-blue-500 transition" />
        <FaJs className="hover:text-yellow-400 transition" />
        <FaReact className="hover:text-cyan-400 transition animate-spin-slow" />
        <FaNodeJs className="hover:text-green-400 transition" />
        <SiMongodb className="hover:text-green-500 transition" />
        <SiMysql className="hover:text-blue-500 transition" />
        <FaGithub className="hover:text-white transition" />
      </div>
       <p className="mt-4 pt-4 text-yellow-100 ">
  &lt;TecnologíasQueSueloUtilizar /&gt;
</p>

    </section>
  );
};

export default About;
