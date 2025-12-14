import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  const jRef = useRef(null);
  const aRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

    gsap.set([jRef.current, aRef.current], {
      strokeDasharray: 1000,
      strokeDashoffset: 1000,
      opacity: 0.8,
    });

    tl.to(jRef.current, {
      strokeDashoffset: 0,
      duration: 1.4,
      ease: "power3.out",
    })
      .to(
        aRef.current,
        {
          strokeDashoffset: 0,
          duration: 1.4,
          ease: "power3.out",
        },
        "-=1"
      )
      .to(
        [jRef.current, aRef.current],
        {
          opacity: 1,
          filter: "drop-shadow(0 0 12px rgba(59,130,246,0.9))",
          duration: 0.8,
        },
        "-=0.5"
      )
      .to([jRef.current, aRef.current], {
        strokeDashoffset: 1000,
        opacity: 0.3,
        filter: "drop-shadow(0 0 0 transparent)",
        duration: 4,
        ease: "power2.inOut",
      });
  }, []);

  return (
    <section className="relative h-screen bg-gradient-to-tr from-gray-900 via-gray-950 to-gray-900 flex items-center justify-center overflow-hidden text-white">

      {/* Fondo */}
      <div className="absolute inset-0 -z-10">

        <div className="absolute w-[600px] h-[600px] bg-blue-900 opacity-20 blur-[200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute w-[400px] h-[400px] bg-indigo-700 opacity-30 blur-[150px] top-10 left-10"></div>
        <div className="absolute w-[400px] h-[400px] bg-blue-800 opacity-30 blur-[150px] bottom-10 right-10"></div>
      </div>

      <div className="text-center flex flex-col items-center gap-6">

        {/* SVG animado */}
        <svg
          width="280"
          height="200"
          viewBox="0 0 300 200"
          fill="none"
          className="drop-shadow-2xl mr-12"
        >
          <path
            ref={jRef}
            d="M88 40 L80 130 Q80 170 120 173 Q160 170 160 130"
            stroke="#3b82f6"       // color nuevo azul vivo
            strokeWidth="12"
            strokeLinecap="round"
          />

          <path
            ref={aRef}
            d="M200 170 L239 40 L260 170 M212 120 L248 120"
            stroke="#60a5fa"       // azul celeste degradado
            strokeWidth="12"
            strokeLinecap="round"
          />
        </svg>

        <h1 className="text-5xl md:text-6xl font-bold tracking-wide text-gradient bg-clip-text text-transparent from-blue-400 via-blue-200 to-indigo-400 bg-gradient-to-r">
          Juan Alcoba
        </h1>
        <h2 className="text-xl md:text-2xl font-light text-blue-300">
          Developer / Desarrollador
        </h2>

        {/* Botón ÉPICO */}
        <Link
          to="/home"
          className="
            relative px-8 py-2 rounded-full
            bg-blue-900
            text-white font-bold text-lg uppercase tracking-wider
            shadow-lg
            transition-all duration-500
            hover:text-blue-950
            hover:bg-white
            z-10
          "
        >
          Ingresar
        </Link>

        {/* Redes Sociales */}
        <div className="flex items-center gap-6 mt-4">
          <a
            href="https://github.com/juanchoalcoba"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-105 drop-shadow-[0_0_8px_rgba(96,165,250,0.9)]"
            >
            <FaGithub size={38} />
          </a>

          <a
            href="https://www.linkedin.com/in/juan-alcoba-113b5a357/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 h transition-all duration-300 transform hover:scale-110 drop-shadow-[0_0_8px_rgba(96,165,250,0.5)]"
          >
            <FaLinkedin size={38} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default Hero;
