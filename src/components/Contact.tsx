// Contact.tsx

const Contact = () => {
  return (
    <section className="min-h-screen w-full bg-[#0b1120] text-blue-200 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl border border-blue-200 rounded-2xl p-8 shadow-lg backdrop-blur-md bg-[#0b1120]/60 z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-6">Contáctame</h2>
        <p className="text-center text-lg text-blue-300 mb-8">
          ¿Tienes un proyecto o idea en mente? ¡Hablemos!
        </p>

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block mb-1 text-blue-300 font-medium">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 rounded-md border border-blue-200 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-blue-400"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 text-blue-300 font-medium">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 rounded-md border border-blue-200 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-blue-400"
              placeholder="tucorreo@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1 text-blue-300 font-medium">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full px-4 py-2 rounded-md border border-blue-200 bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-blue-400"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-blue-800 hover:bg-blue-700 text-white font-semibold rounded-md transition duration-300 shadow-md hover:scale-[1.02]"
          >
            Enviar mensaje
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
