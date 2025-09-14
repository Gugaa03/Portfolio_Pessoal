import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const lines = [
    "Engenheiro Informático",
    "Criador de soluções e aplicações digitais",
    "Desenvolvedor Frontend/Backend",
    "Apaixonado por programação e inovação",
    "Curioso e motivado a dominar novas ferramentas"
  ];

  const [currentLine, setCurrentLine] = useState(0);
  const [typedLines, setTypedLines] = useState(Array(lines.length).fill(""));
  const typing = useRef(false);
  const [showPhoto, setShowPhoto] = useState(false);

  useEffect(() => {
    if (currentLine >= lines.length) {
      setShowPhoto(true); // Mostra foto ao final
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
  }, [currentLine]);

  return (
    <section className="flex flex-col items-center justify-center h-screen text-center px-6 bg-gray-900 text-white font-mono relative overflow-hidden">
      {/* Foto animada */}
      {showPhoto && (
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-6"
        >
          <img
            src="/path/to/sua-foto.jpg" // Substitua pelo caminho real
            alt="Gustavo Silva"
            className="w-24 h-24 rounded-full border-4 border-cyan-400 object-cover shadow-lg mx-auto"
          />
        </motion.div>
      )}

      {/* Título */}
      <h1 className="text-5xl md:text-6xl font-extrabold mb-6 relative z-10">
        Olá, sou o Gustavo Silva
      </h1>

      {/* Linhas digitadas */}
      <div className="flex flex-col gap-2 text-xl md:text-2xl text-gray-300 relative z-10">
        {typedLines.map((line, i) => (
          <span key={i}>{line}{i === currentLine ? "_" : ""}</span>
        ))}
      </div>
    </section>
  );
}
