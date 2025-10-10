"use client";
import { motion } from "framer-motion";

export default function Navbar({ language, toggleTheme, darkMode }) {
  const scrollToSection = (id) => {
    const navbar = document.querySelector("nav");
    const navbarHeight = navbar ? navbar.offsetHeight : 0;

    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }

    const section = document.getElementById(id);
    if (section) {
      const top = section.getBoundingClientRect().top + window.scrollY - navbarHeight;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  const handleLanguageChange = (newLang) => {
    if (language !== newLang) {
      localStorage.setItem("heroLanguage", newLang);
      window.location.reload();
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-[9999]"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex flex-wrap justify-between items-center gap-2">
        {/* Logo / Nome */}
        <h1
          onClick={() => scrollToSection("top")}
          className="text-2xl font-bold cursor-pointer hover:text-cyan-400 transition"
        >
          Gustavo Silva
        </h1>

        {/* Seções principais */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-6 mt-2 sm:mt-0">
          <button onClick={() => scrollToSection("about")} className="hover:text-cyan-400 transition">
            {language === "pt" ? "Sobre Mim" : "About Me"}
          </button>
          <button onClick={() => scrollToSection("education")} className="hover:text-cyan-400 transition">
            {language === "pt" ? "Educação" : "Education"}
          </button>
          <button onClick={() => scrollToSection("projects")} className="hover:text-cyan-400 transition">
            {language === "pt" ? "Projetos" : "Projects"}
          </button>
          <button onClick={() => scrollToSection("skills")} className="hover:text-cyan-400 transition">
            {language === "pt" ? "Skills" : "Skills"}
          </button>
          <button onClick={() => scrollToSection("contact")} className="hover:text-cyan-400 transition">
            {language === "pt" ? "Contacto" : "Contact"}
          </button>
        </div>

        {/* Funcionalidades secundárias */}
        <div className="flex items-center gap-2 ml-2">
          {/* Dark Mode */}
          <button
            onClick={toggleTheme}
            className="bg-cyan-500 hover:bg-cyan-400 text-white px-3 py-2 rounded-full shadow transition"
            title={darkMode ? "Modo claro" : "Modo escuro"}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          {/* Download CV */}
          <a
            href="/CV_Gustavo.pdf"
            download
            className="bg-cyan-500 hover:bg-cyan-400 text-white px-4 py-2 rounded-full shadow transition"
          >
            {language === "pt" ? "Download CV" : "Download CV"}
          </a>

          {/* Bandeiras */}
          <img
            src="https://flagcdn.com/16x12/pt.png"
            srcSet="https://flagcdn.com/32x24/pt.png 2x, https://flagcdn.com/48x36/pt.png 3x"
            width="16"
            height="12"
            alt="Portugal"
            className={`cursor-pointer rounded ${language === "pt" ? "ring-2 ring-cyan-500" : ""}`}
            onClick={() => handleLanguageChange("pt")}
          />
          <img
            src="https://flagcdn.com/16x12/gb.png"
            srcSet="https://flagcdn.com/32x24/gb.png 2x, https://flagcdn.com/48x36/gb.png 3x"
            width="16"
            height="12"
            alt="United Kingdom"
            className={`cursor-pointer rounded ${language === "en" ? "ring-2 ring-cyan-500" : ""}`}
            onClick={() => handleLanguageChange("en")}
          />
        </div>
      </div>
    </motion.nav>
  );
}
