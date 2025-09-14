import { motion } from "framer-motion";

export default function Navbar({ language, toggleLanguage }) {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Nome */}
        <h1
          onClick={() => scrollToSection("hero")}
          className="text-2xl font-bold cursor-pointer hover:text-cyan-400 transition"
        >
          Gustavo Silva
        </h1>

        {/* Links */}
        <div className="flex items-center gap-6">
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
            {language === "pt" ? "Contato" : "Contact"}
          </button>

          {/* Download CV */}
          <a
            href="/CV_Gustavo.pdf"
            download
            className="bg-cyan-500 hover:bg-cyan-400 text-white px-4 py-2 rounded-full shadow transition"
          >
            {language === "pt" ? "Download CV" : "Download CV"}
          </a>

          {/* Bandeiras de idioma */}
          <div className="flex gap-2 ml-4 text-xl cursor-pointer">
            <span
              onClick={() => language !== "pt" && toggleLanguage()}
              className={language === "pt" ? "opacity-100" : "opacity-50 hover:opacity-100 transition"}
            >
              🇵🇹
            </span>
            <span
              onClick={() => language !== "en" && toggleLanguage()}
              className={language === "en" ? "opacity-100" : "opacity-50 hover:opacity-100 transition"}
            >
              🇬🇧
            </span>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
