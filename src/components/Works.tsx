"use client"

import { useState, useRef, useEffect } from "react" // <-- Importar useRef y useEffect
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket } from "react-icons/fa"

// ... (El array de projects sigue siendo el mismo)
const projects = [
  {
    title: "Rey Clothes & Shoes",
    description: "Tienda Online",
    imageUrl: "/rey.png",
        videoUrl: "/rey2.mp4",

    githubUrl: "https://github.com/juanchoalcoba/frontRey",
    demoUrl: "https://front-rey.vercel.app/tienda",
  },
  {
    title: "Strongfit WebApp",
    description: "Sitio web de cadena de gimnasios",
    imageUrl: "/str.png",
            videoUrl: "/gymvideo.mp4",

    githubUrl: "https://github.com/juanchoalcoba/strongfit",
    demoUrl: "https://strongfit-eight.vercel.app/",
  },
  {
    title: "Animación 3D (wait loading...)",
    description: "Blender HTML CSS Y JS",
    imageUrl: "/3d.png",
    videoUrl: "/ball3d.mp4",
    githubUrl: "https://github.com/juanchoalcoba/3D-Ball-Effect",
    demoUrl: "https://3-d-ball-effect-xi.vercel.app/",
  },
  {
    title: "Horizontal Scroll",
    description: "Scroll horizontal con Lenis y GSAP",
    imageUrl: "/horizontal.png",
    githubUrl: "https://github.com/juanchoalcoba/scroll-horizontal",
    demoUrl: "https://scroll-horizontal.vercel.app/",
  },
  {
    title: "Canal Stream OLGA",
    description: "Diseño para canal de STREAMING",
    imageUrl: "/olga.png",
    githubUrl: "https://github.com/juanchoalcoba/olgaenvivo",
    demoUrl: "https://olgaenvivo.vercel.app/",
  },
  {
    title: "Super Animation FrontendJs...)",
    description: "GSAP ScrollTrigger",
    imageUrl: "/workmini.png",
    githubUrl: "https://github.com/juanchoalcoba/cap1891",
    demoUrl: "https://cap1891.vercel.app/",
  },
  {
    title: "Dashboard API Renders",
    description: "Fetching API´s externas",
    imageUrl: "/api.png",
    videoUrl: "/mini.mp4",
    githubUrl: "https://github.com/juanchoalcoba/apirenders",
    demoUrl: "https://apirenders.vercel.app/",
  },
]

const ProjectCard = ({ project }: { project: (typeof projects)[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null) // <-- Crear una referencia para el elemento video

  // <-- Hook para controlar la reproducción del video
  useEffect(() => {
    if (project.videoUrl && videoRef.current) {
      if (isHovered) {
        // Al hacer hover, intenta reproducir
        videoRef.current.play().catch(error => {
          // Manejar errores de reproducción automática (a veces necesario)
          console.error("Error al intentar reproducir el video:", error)
        })
      } else {
        // Al quitar el hover, pausar y rebobinar
        videoRef.current.pause()
        videoRef.current.currentTime = 0 // Opcional: rebobinar al principio
      }
    }
  }, [isHovered, project.videoUrl]) // Se ejecuta cada vez que isHovered cambia

  return (
    <div className="relative bg-gray-800 border border-gray-300 hover:bg-gray-900 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition duration-700 transform hover:scale-102">
      <div
        className="w-full h-48 overflow-hidden bg-black relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Imagen - siempre visible como fallback/placeholder */}
        <img
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          className={`w-full h-full object-cover object-center transition-all duration-500 ${
            isHovered && project.videoUrl ? "opacity-0" : "opacity-100"
          }`}
        />

        {project.videoUrl && (
          <video
            ref={videoRef} // <-- Asignar la referencia al elemento video
            src={project.videoUrl}
            loop
            muted
            playsInline
            // Eliminar 'autoPlay={isHovered}' y dejar el control a 'useEffect'
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>

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
  )
}

// ... (El componente Works sigue igual)
const Works = () => {
  return (
    <section id="proyectos" className="py-16 text-white font-roboto">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-6xl font-bold text-center mb-12 flex items-center justify-center gap-4">
          <FaCode className="text-blue-200 text-4xl md:text-5xl" />
          Proyectos
          <FaRocket className="text-blue-200 text-4xl md:text-5xl" />
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works