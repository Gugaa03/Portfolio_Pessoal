import { useEffect, useState } from "react";

export default function BackgroundAnimation() {
  const [lines, setLines] = useState([]);

  useEffect(() => {
    const characters = "01{}[]();<>".split(""); // caracteres de código
    const newLines = Array.from({ length: 30 }).map(() => ({
      x: Math.random() * window.innerWidth,
      length: 5 + Math.floor(Math.random() * 10),
      chars: Array.from({ length: 5 + Math.floor(Math.random() * 10) }, () =>
        characters[Math.floor(Math.random() * characters.length)]
      ),
      duration: 5 + Math.random() * 5,
    }));
    setLines(newLines);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden text-cyan-400 opacity-60">
      {lines.map((line, i) => (
        <div
          key={i}
          className="absolute flex flex-col font-mono text-xs leading-none animate-fall"
          style={{
            left: line.x,
            top: -100,
            animationDuration: `${line.duration}s`,
            animationIterationCount: "infinite",
          }}
        >
          {line.chars.map((char, idx) => (
            <span key={idx}>{char}</span>
          ))}
        </div>
      ))}
    </div>
  );
}
