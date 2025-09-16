import { motion } from "framer-motion";
import { FaPython, FaReact, FaCss3Alt, FaAndroid, FaCode, FaSuperscript, FaJsSquare } from "react-icons/fa";
import { SiKotlin, SiTypescript, SiDotnet, SiSupabase, SiMysql, SiTailwindcss, SiNextdotjs } from "react-icons/si";

export default function Skills({ language }) {
  const categories = [
    {
      namePT: "Frontend / Web", nameEN: "Frontend / Web",
      skills: [
        { name: "React", icon: <FaReact /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "Tailwind", icon: <SiTailwindcss /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "JavaScript", icon: <FaJsSquare /> }
      ]
    },
    {
      namePT: "Backend / Geral", nameEN: "Backend / General",
      skills: [
        { name: "ASP.NET", icon: <SiDotnet /> },
        { name: "C#", icon: <SiDotnet /> },
        { name: "Python", icon: <FaPython /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "Kotlin", icon: <SiKotlin /> }
      ]
    }
  ];

  const apps = [
    { name: "VS Code", icon: <FaCode /> },
    { name: "Visual Studio", icon: <FaCode /> },
    { name: "SSMS / SQL", icon: <SiMysql /> },
    { name: "Supabase", icon: <SiSupabase /> },
    { name: "NetLogo", icon: <FaCode /> },
    { name: "Android Studio", icon: <FaAndroid /> },
    { name: "MATLAB", icon: <FaSuperscript /> }
  ];

  const scrollAnimation = {
    initial: { y: 20, opacity: 0, rotate: 0 },
    whileInView: { y: 0, opacity: 1, rotate: 0 },
    transition: { duration: 0.6, ease: "easeOut" },
    viewport: { once: true }
  };

  return (
    <section id="skills" className="scroll-mt-24 py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        {language === "pt" ? "Skills & Tecnologias" : "Skills & Technologies"}
      </h2>

      {categories.map((category, i) => (
        <div key={i} className="mb-8">
          <h3 className="text-xl font-semibold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {language === "pt" ? category.namePT : category.nameEN}
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {category.skills.map((skill, j) => (
              <motion.div
                key={j}
                className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg w-24 h-24 justify-center text-3xl text-cyan-400"
                {...scrollAnimation}
                whileHover={{ scale: 1.2, boxShadow: "0px 10px 20px rgba(0,255,255,0.5)" }}
              >
                {skill.icon}
                <span className="text-sm mt-2 text-white text-center">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      <div className="mb-8">
        <h3 className="text-xl font-semibold text-center mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          {language === "pt" ? "Apps / Ferramentas" : "Apps / Tools"}
        </h3>
        <div className="flex flex-wrap justify-center gap-6">
          {apps.map((app, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg w-24 h-24 justify-center text-3xl text-green-400"
              {...scrollAnimation}
              whileHover={{ scale: 1.2, boxShadow: "0px 10px 20px rgba(0,255,0,0.5)" }}
            >
              {app.icon}
              <span className="text-sm mt-2 text-white text-center">{app.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
