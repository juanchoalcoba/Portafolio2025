import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket } from 'react-icons/fa';

const projects = [
  {
    title: 'Rey Clothes & Shoes',
    description: 'Tienda Online',
    imageUrl: '/rey.png',
    githubUrl: 'https://github.com/juanchoalcoba/frontRey',
    demoUrl: 'https://front-rey.vercel.app/tienda',
  },
  {
    title: 'Strongfit WebApp',
    description: 'Sitio web de cadena de gimnasios',
    imageUrl: '/str.png',
    githubUrl: 'https://github.com/juanchoalcoba/strongfit',
    demoUrl: 'https://strongfit-eight.vercel.app/',
  },
  {
    title: 'Kids Party',
    description: 'Salon de fiestas infantiles',
    imageUrl: '/kids.png',
    githubUrl: 'https://github.com/juanchoalcoba/api-party-kids',
    demoUrl: 'https://kidsparty.uy/',
  },
  {
    title: 'The Beer House',
    description: 'Cerveceria uruguaya',
    imageUrl: '/tbh.png',
    githubUrl: 'https://github.com/juanchoalcoba/thebeerhouse',
    demoUrl: 'https://thebeerhouse.vercel.app/',
  },
  {
    title: 'Proyecto E',
    description: 'Descripción breve del Proyecto E.',
    imageUrl: '/rey.png',
    githubUrl: 'https://github.com/usuario/proyecto-e',
    demoUrl: 'https://proyecto-e.com',
  },
  {
    title: 'Proyecto F',
    description: 'Descripción breve del Proyecto F.',
    imageUrl: '/rey.png',
    githubUrl: 'https://github.com/usuario/proyecto-f',
    demoUrl: 'https://proyecto-f.com',
  },
];

const Works = () => {
  return (
    <section className="py-16 text-white font-roboto">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-6xl font-bold text-center mb-12 flex items-center justify-center gap-4">
          <FaCode className="text-blue-200 text-4xl md:text-5xl" />
          Proyectos
          <FaRocket className="text-pink-200 text-4xl md:text-5xl" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative bg-gray-800 hover:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-700 transform hover:scale-102"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover p-2"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex justify-between items-center">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-700 text-white py-1 px-4 rounded-full flex items-center space-x-2 hover:bg-gray-600 transition duration-400"
                  >
                    <FaGithub />
                    <span>Código</span>
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-blue-600 text-white py-1 px-4 rounded-full flex items-center space-x-2 hover:bg-blue-700 transition duration-400"
                  >
                    <FaExternalLinkAlt />
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
