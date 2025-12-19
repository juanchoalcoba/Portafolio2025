"use client"

import { useState, useRef, useEffect } from "react"
import { FaGithub, FaExternalLinkAlt, FaCode, FaRocket } from "react-icons/fa"

const projects = [
  {
    title: "Rey Clothes & Shoes",
    description: "Tienda Online",
    imageUrl: "/rey.png",
    videoUrl: "/hnos.mp4",
    githubUrl: "https://github.com/juanchoalcoba/frontRey",
    demoUrl: "https://front-rey.vercel.app/tienda",
  },
  {
    title: "Strongfit WebApp",
    description: "Sitio web de cadena de gimnasios",
    imageUrl: "/str.png",
    videoUrl: "/ddd.mp4",
    githubUrl: "https://github.com/juanchoalcoba/strongfit",
    demoUrl: "https://strongfit-eight.vercel.app/",
  },
  {
    title: "Animación 3D (wait loading...)",
    description: "Scroll Controller",
    imageUrl: "/3d.png",
    videoUrl: "/aaa.mp4",
    githubUrl: "https://github.com/juanchoalcoba/3D-Ball-Effect",
    demoUrl: "https://3-d-ball-effect-xi.vercel.app/",
  },
  {
    title: "Landing Lucian Viajes",
    description: "Peoyecto frontend moderno",
    imageUrl: "/lucian.png",
    githubUrl: "https://github.com/juanchoalcoba/lucianagencia",
    demoUrl: "https://lucianagencia.vercel.app/",
  },
  {
    title: "Horizontal Scroll",
    description: "Scroll horizontal con Lenis y GSAP",
    imageUrl: "/horizontal.png",
    videoUrl: "/n.mp4",
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
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (project.videoUrl && videoRef.current) {
      if (isHovered) {
        videoRef.current.play().catch(error => {
          console.error("Error al intentar reproducir el video:", error)
        })
      } else {
        videoRef.current.pause()
        videoRef.current.currentTime = 0
      }
    }
  }, [isHovered, project.videoUrl])

  return (
    <div className="group relative bg-gray-800 border border-gray-700 hover:border-blue-500 rounded-xl overflow-hidden shadow-lg transition-all duration-500 hover:-translate-y-2">
      {/* CONTENEDOR DE MEDIA: Aquí está el truco del posicionamiento */}
      <div
        className="relative w-full aspect-video overflow-hidden bg-gray-900" 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Imagen: object-cover asegura que llene el espacio sin deformarse */}
        <img
          src={project.imageUrl || "/placeholder.svg"}
          alt={project.title}
          className={`w-full h-full object-cover object-top transition-all duration-700 ease-in-out ${
            isHovered && project.videoUrl ? "opacity-0 scale-110" : "opacity-100 scale-100"
          }`}
        />

        {project.videoUrl && (
          <video
            ref={videoRef}
            src={project.videoUrl}
            loop
            muted
            playsInline
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              isHovered ? "opacity-100" : "opacity-0"
            }`}
          />
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-blue-400 transition-colors">
            {project.title}
        </h3>
        <p className="text-gray-400 text-sm mb-5 line-clamp-2">{project.description}</p>

        <div className="flex justify-between items-center gap-3">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-gray-700 text-white py-2 px-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-600 transition-colors text-sm"
          >
            <FaGithub />
            <span>Código</span>
          </a>
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 bg-blue-600 text-white py-2 px-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-blue-500 transition-colors text-sm"
          >
            <FaExternalLinkAlt />
            <span>Demo</span> 
          </a>
        </div>
      </div>
    </div>
  )
}

const Works = () => {
  return (
    <section id="proyectos" className="py-20 text-white font-roboto bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <header className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-black mb-4 flex items-center justify-center gap-4">
            <FaCode className="text-blue-500" />
            Mis Proyectos
            <FaRocket className="text-blue-500" />
            </h2>
            <div className="h-1 w-20 bg-blue-600 mx-auto rounded-full"></div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Works