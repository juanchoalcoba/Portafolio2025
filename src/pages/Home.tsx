import About from "../components/About";
import Experience from "../components/Experience";
import Works from "../components/Works";

const Home = () => {
  return (
    <section className="relative flex-col overflow-hidden h-auto w-full font-roboto flex items-center justify-center px-6 pt-20 text-white">
      {/* Fondo nebuloso con gradientes y manchas */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-tr from-gray-900 via-gray-950 to-gray-900">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-900 opacity-30 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-20 w-96 h-96 bg-blue-900 opacity-30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-gray-800 opacity-20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      </div>

      <About />
      

      <Experience />
      <Works />
    </section>
  );
};

export default Home;
