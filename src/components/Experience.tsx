import { FaBookOpen, FaBriefcase, FaGraduationCap, FaPencilRuler, FaUniversity } from "react-icons/fa";
import { MdTimeline } from "react-icons/md";
import { motion } from "framer-motion";

const experiences = [
      {
    year: "2025",
    title: "Acualizando conceptos diariamente",
    icon: <FaGraduationCap  className="text-blue-200" />,
    description:
      "Estudio diariamente de herramientas asi como idioma Inglés",
  },
  
    {
        year: "2024",
        title: "BPU Meat",
        icon: <FaPencilRuler className="text-blue-200" />,
        description:
        "Colaboracion en sitio web empresarial para la planta frigorífica",
    },
    {
      year: "2022 - Actualmente",
      title: "Desarrollador Full-stack Freelance",
      icon: <FaBriefcase className="text-blue-200" />,
      description:
        "Desarrollé plataformas e-commerce responsivas utilizando React, Tailwind CSS y TypeScript. Integré Swiper, GSAP y modales para interfaces dinámicas.",
    },
  {
    year: "2021",
    title: "Desarrollador Web - Prisma Ecuador",
    icon: <FaBookOpen className="text-blue-200" />,
    description:
      "Trabajé en el desarrollo de sitios web corporativos usando WordPress y Elementor, aplicando personalizaciones con HTML y CSS.",
  },    
  {
      year: "2018 - 2023",
      title: "LTI - UTEC",
      icon: <FaUniversity className="text-blue-200" />,
      description:
      "Egresado de carrera Tecnologías de la Informacion brindado por la institución UTEC",
    },
];

export default function Experience() {
  return (
    <section className="min-h-screen text-white py-20 px-6 font-roboto">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-blue-200 mb-16 text-center flex items-center justify-center gap-4"
        >
          <MdTimeline className="text-blue-300 text-6xl" /> Experiencia
        </motion.h2>

        <div className="relative border-l-4 border-cyan-200 ml-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="mb-12 pl-10 relative"
            >
              <div className="absolute -left-6 top-1 text-3xl bg-[#0f172a] p-2 rounded-full border-2 border-cyan-200">
                {exp.icon}
              </div>
              <h3 className="text-2xl font-bold text-blue-200">{exp.year}</h3>
              <h4 className="text-xl font-semibold mb-1">{exp.title}</h4>
              <p className="text-gray-300 max-w-prose text-balance leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
