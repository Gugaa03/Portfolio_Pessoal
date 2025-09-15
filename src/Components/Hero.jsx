import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero({ language: initialLanguage, textColor = "text-white", subTextColor = "text-gray-300" }) {
  const linesContent = {
    pt: [
      "Engenheiro Informático",
      "Criador de soluções e aplicações digitais",
      "Desenvolvedor Frontend/Backend",
      "Apaixonado por programação e inovação",
      "Curioso e motivado a dominar novas ferramentas"
    ],
    en: [
      "Computer Engineer",
      "Creator of digital solutions and applications",
      "Frontend/Backend Developer",
      "Passionate about programming and innovation",
      "Curious and motivated to learn new tools"
    ]
  };

  const [language, setLanguage] = useState(() => {
    return typeof window !== "undefined" ? localStorage.getItem("heroLanguage") || initialLanguage : initialLanguage;
  });

  const lines = linesContent[language] || linesContent.pt;
  const [typedLines, setTypedLines] = useState(Array(lines.length).fill(""));
  const [currentLine, setCurrentLine] = useState(0);
  const [showPhoto, setShowPhoto] = useState(false);
  const typing = useRef(false);

  useEffect(() => {
    if (currentLine >= lines.length) {
      setShowPhoto(true);
      return;
    }
    if (typing.current) return;
    typing.current = true;

    const typeLine = (charIndex = 0) => {
      if (charIndex < lines[currentLine].length) {
        setTypedLines(prev => {
          const updated = [...prev];
          updated[currentLine] += lines[currentLine][charIndex];
          return updated;
        });
        setTimeout(() => typeLine(charIndex + 1), 80);
      } else {
        typing.current = false;
        setCurrentLine(prev => prev + 1);
      }
    };

    typeLine();
  }, [currentLine, lines]);

  return (
    <section className="flex flex-col items-center justify-center h-screen text-center px-6 bg-transparent font-mono relative overflow-hidden">
      {showPhoto && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <img
            src="/1740424433599.jpg"
            alt="Gustavo Silva"
            className="w-40 h-40 rounded-full border-4 border-cyan-400 object-cover shadow-lg mx-auto"
          />
        </motion.div>
      )}

      <h1 className={`text-5xl md:text-6xl font-extrabold mb-6 relative z-10 ${textColor}`}>
        {language === "pt" ? "Olá, sou o Gustavo Silva" : "Hi, I'm Gustavo Silva"}
      </h1>

      <div className={`flex flex-col gap-2 text-xl md:text-2xl relative z-10 ${subTextColor}`}>
        {typedLines.map((line, i) => (
          <span key={i}>
            {line}
            {i === currentLine && currentLine < lines.length ? "_" : ""}
          </span>
        ))}
      </div>
    </section>
  );
}
