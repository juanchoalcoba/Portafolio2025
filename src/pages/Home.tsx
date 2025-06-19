import { useEffect, useRef } from "react";
import About from "../components/About";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Works from "../components/Works";
import Contact from "../components/Contact";

const Home = () => {
  const circle1 = useRef<HTMLDivElement>(null);
  const circle2 = useRef<HTMLDivElement>(null);
  const circle3 = useRef<HTMLDivElement>(null);
  const overlay = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      // Parallax: mueve los círculos con distintas velocidades
      if (circle1.current) {
        circle1.current.style.transform = `translateY(${scrollY * 0.3}px)`;
      }
          
      
      if (circle2.current) {
        circle2.current.style.transform = `translateY(-${scrollY * 0.2}px)`;
      }
      if (circle3.current) {
        circle3.current.style.transform = `translateY(${scrollY * 0.1}px)`;
      }

      // Oscurecer el fondo progresivamente, límite 0.6 de opacidad
      const maxOpacity = 0.6;
      const scrollLimit = 500;
      const opacity = Math.min((scrollY / scrollLimit) * maxOpacity, maxOpacity);

      if (overlay.current) {
        overlay.current.style.backgroundColor = `rgba(0,0,0,${opacity})`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fondo nebuloso fijo con gradientes y manchas, detrás de todo */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-tr from-gray-900 via-gray-950 to-gray-900">
        {/* Capa oscura que va cambiando opacidad con scroll */}
        <div
          ref={overlay}
          className="absolute inset-0 pointer-events-none transition-colors duration-300"
          style={{ backgroundColor: "rgba(0,0,0,0)" }}
        />

        <div
          ref={circle1}
          className="absolute top-20 left-10 w-96 h-96 bg-blue-900 opacity-30 rounded-full blur-3xl"
          style={{ willChange: "transform" }}
        />
        <div
          ref={circle2}
          className="absolute bottom-10 right-20 w-96 h-96 bg-blue-900 opacity-30 rounded-full blur-3xl"
          style={{ willChange: "transform" }}
        />
        <div
          ref={circle3}
          className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gray-800 opacity-20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2"
          style={{ willChange: "transform" }}
        />
      </div>

      {/* Contenedor principal del contenido */}
      <section className="flex flex-col items-center justify-center font-roboto pt-8 px-6 text-white">
        <div className="w-full flex flex-col justify-center items-center">
          <About />
          <Experience />
          <Works />
          <Contact />
          <Footer />

        </div>
      </section>
    </>
  );
};

export default Home;
