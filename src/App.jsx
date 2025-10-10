// App.jsx
"use client";
import { useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import EducationExperience from "./Components/EducationExperience";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import EmailIcon from "./Components/EmailIcon";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("pt");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("heroLanguage");
      if (savedLang) setLanguage(savedLang);
    }
  }, []);

  const changeLanguage = (newLang) => {
    setLanguage(newLang);
    if (typeof window !== "undefined") {
      localStorage.setItem("heroLanguage", newLang);
    }
  };

  const toggleTheme = () => setDarkMode(!darkMode);

  const textColor = darkMode ? "text-white" : "text-gray-900";
  const subTextColor = darkMode ? "text-gray-300" : "text-gray-700";

  return (
    <div className={`relative min-h-screen overflow-x-hidden transition-colors duration-300 ${darkMode ? "bg-gray-900" : "bg-gray-100"}`}>
      
  
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full relative">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,#0ff_1px,transparent_1px,transparent_40px)] opacity-20 sm:opacity-30 animate-pulse pointer-events-none"></div>
          <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,#0ff_1px,transparent_1px,transparent_40px)] opacity-20 sm:opacity-30 animate-pulse pointer-events-none"></div>
        </div>
      </div>

      {/* CONTEÚDO PRINCIPAL */}
      <div className="relative z-10 px-4 sm:px-6 md:px-12">
        <Navbar
          language={language}
          toggleLanguage={changeLanguage}
          darkMode={darkMode}
          toggleTheme={toggleTheme} // ✅ Passando o toggleTheme para o Navbar
        />
        <Hero language={language} textColor={textColor} subTextColor={subTextColor} />
        <AboutMe language={language} textColor={textColor} subTextColor={subTextColor} />
        <section id="education">
          <EducationExperience language={language} textColor={textColor} subTextColor={subTextColor} />
        </section>
        <section id="projects">
          <Projects language={language} textColor={textColor} subTextColor={subTextColor} darkMode={darkMode} />
        </section>
        <section id="skills">
          <Skills language={language} />
        </section>
        <section id="contact">
          <Contact language={language} darkMode={darkMode} />
        </section>
        <Footer language={language} textColor={textColor} subTextColor={subTextColor} />
        <EmailIcon />
      </div>
      
      {/* BOTÃO VOLTAR AO TOPO */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-[calc(6rem+env(safe-area-inset-bottom))] right-4 sm:right-6 bg-cyan-500 hover:bg-cyan-400 text-white p-3 sm:p-4 rounded-full shadow-lg z-50 transition-all duration-300 text-lg sm:text-xl"
        title={language === "pt" ? "Voltar ao topo" : "Back to top"}
      >
        ↑
      </button>
    </div>
  );
}
