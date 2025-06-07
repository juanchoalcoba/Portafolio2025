import { Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    // Aquí tipamos `e` como un objeto cualquiera (puedes ajustarlo si conoces la forma exacta)
    lenis.on('scroll', (e: unknown) => {
      console.log(e);
    });

    // Tipamos `time` como número
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
      <Footer />
    </>
  );
}

export default App;
