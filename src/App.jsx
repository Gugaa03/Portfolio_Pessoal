"use client"; 
import { useState } from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import AboutMe from "./Components/AboutMe";
import EducationExperience from "./Components/EducationExperience";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import EmailIcon from "./Components/EmailIcon";
import BackgroundAnimation from "./Components/BackgroundAnimation";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [language, setLanguage] = useState("pt");

  const toggleTheme = () => setDarkMode(!darkMode);
  const toggleLanguage = () => setLanguage(language === "pt" ? "en" : "pt");

  const textColor = darkMode ? "text-white" : "text-gray-900";
  const subTextColor = darkMode ? "text-gray-300" : "text-gray-700";

  return (
    <div className={`relative min-h-screen overflow-x-hidden ${darkMode ? "bg-gray-900" : ""}`}>
      <div className="relative z-10">
        <Navbar language={language} toggleLanguage={toggleLanguage} textColor={textColor} />
        <Hero language={language} textColor={textColor} subTextColor={subTextColor} darkMode={darkMode} />
        <AboutMe language={language} textColor={textColor} subTextColor={subTextColor} />
        <section id="education">
          <EducationExperience language={language} textColor={textColor} subTextColor={subTextColor} />
        </section>
        <section id="projects">
          <Projects language={language} textColor={textColor} subTextColor={subTextColor} darkMode={darkMode} />
        </section>
        <section id="skills">
          <Skills language={language} textColor={textColor} subTextColor={subTextColor} darkMode={darkMode} />
        </section>
        <section id="contact">
          <Contact language={language} darkMode={darkMode} />
        </section>
        <Footer language={language} textColor={textColor} subTextColor={subTextColor} />
        <EmailIcon />

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-24 right-6 bg-cyan-500 hover:bg-cyan-400 text-white p-3 rounded-full shadow-lg z-50 transition-all duration-300"
          title={language === "pt" ? "Voltar ao topo" : "Back to top"}
        >
          ↑
        </button>

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
