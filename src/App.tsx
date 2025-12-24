import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', (e: unknown) => {
      console.log(e);
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <Navbar />
      
      <main className="w-full">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
