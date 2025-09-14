import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import EducationExperience from "./components/EducationExperience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import EmailIcon from "./components/EmailIcon";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("pt");

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage(language === "pt" ? "en" : "pt");

  // Define cores de texto dependendo do modo
  const textColor = darkMode ? "text-white" : "text-gray-900";
  const subTextColor = darkMode ? "text-gray-300" : "text-gray-700";

  return (
    <div className={`relative min-h-screen overflow-x-hidden ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}>
      {/* Conteúdo */}
      <div className="relative z-10">
        <Navbar language={language} toggleLanguage={toggleLanguage} textColor={textColor} />

        {/* Hero */}
        <Hero language={language} textColor={textColor} subTextColor={subTextColor} darkMode={darkMode} />

        {/* Sobre Mim */}
        <AboutMe language={language} textColor={textColor} subTextColor={subTextColor} />

        {/* Educação */}
        <section id="education">
          <EducationExperience language={language} textColor={textColor} subTextColor={subTextColor} />
        </section>

        {/* Projetos */}
        <section id="projects">
          <Projects language={language} textColor={textColor} subTextColor={subTextColor} />
        </section>

        {/* Skills */}
        <section id="skills">
          <Skills language={language} textColor={textColor} subTextColor={subTextColor} />
        </section>

        {/* Contato */}
        <section id="contact">
          <Contact language={language} textColor={textColor} subTextColor={subTextColor} />
        </section>

        {/* Footer */}
        <Footer language={language} textColor={textColor} subTextColor={subTextColor} />

        {/* Email Icon */}
        <EmailIcon />

        {/* Scroll to top */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 bg-cyan-500 hover:bg-cyan-400 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300"
          title={language === "pt" ? "Voltar ao topo" : "Back to top"}
        >
          ↑
        </button>

        {/* Toggle Theme */}
        <button
          onClick={toggleTheme}
          className="fixed top-6 right-6 bg-cyan-500 hover:bg-cyan-400 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300 mr-16"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>
      </div>
    </div>
  );
}
