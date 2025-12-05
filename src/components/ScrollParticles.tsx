import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollParticles() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const particles = [];

    const symbols = ["<", "/>", "</>", "<>", "//", "{}", "()=>{}"];

    for (let i = 0; i < 40; i++) {
      const el = document.createElement("div");
      el.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      el.style.position = "absolute";
      el.style.left = Math.random() * 100 + "%";
      el.style.top = Math.random() * 100 + "%";
      el.style.opacity = "0";
      el.style.fontSize = 14 + Math.random() * 20 + "px";
      el.style.color = "rgba(96,165,250,0.7)";
      el.style.transform = "translateX(-50px)";
      const container = containerRef.current;
if (!container) return;

      particles.push(el);
    }

    particles.forEach((p, i) => {
      gsap.to(p, {
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
        opacity: 1,
        x: 150 + Math.random() * 150,
        duration: 1,
        ease: "power2.out",
        delay: i * 0.01,
      });

      gsap.to(p, {
        scrollTrigger: {
          trigger: container,
          start: "top center",
          end: "bottom top",
          scrub: true,
        },
        opacity: 0,
        x: 300,
      });
    });
  }, []);

  return (
    <div
      ref={containerRef}
      style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 1 }}
    />
  );
}
