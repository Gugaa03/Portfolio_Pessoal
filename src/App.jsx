import { useState } from "react";
import { motion } from "framer-motion";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import EmailIcon from "./Components/EmailIcon";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <div className={darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"}>
      {/* Hero */}
      <Hero />

      {/* Tema toggle */}
      <button
        onClick={toggleTheme}
        className="fixed top-6 right-6 bg-cyan-500 hover:bg-cyan-400 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300"
      >
        {darkMode ? "☀️" : "🌙"}
      </button>

      {/* Projetos */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <Projects />
      </motion.section>

      {/* Skills */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <Skills />
      </motion.section>

      {/* Contato */}
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="py-12 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Contato</h2>
        <div className="flex justify-center gap-6 mb-4">
          <a href="https://github.com/Gugaa03" target="_blank" className="hover:underline">
            GitHub
          </a>
          <a href="#" className="hover:underline">
            LinkedIn
          </a>
          <a href="#" className="hover:underline">
            Twitter
          </a>
        </div>
        <p className="text-gray-400">ou clique no ícone de e-mail para me mandar uma mensagem.</p>
      </motion.section>

      {/* Footer */}
      <Footer />

      {/* Ícone de e-mail pulsante */}
      <EmailIcon />

      {/* Scroll to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-24 right-6 bg-cyan-500 hover:bg-cyan-400 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300"
        title="Voltar ao topo"
      >
        ↑
      </button>
    </div>
  );
}
