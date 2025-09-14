import { motion } from "framer-motion";
import { FaPython, FaReact, FaCss3Alt, FaAndroid, FaCode, FaSuperscript, FaJsSquare } from "react-icons/fa";
import { SiKotlin, SiTypescript, SiDotnet, SiSupabase, SiMysql, SiTailwindcss, SiNextdotjs } from "react-icons/si";

const categories = [
  {
    name: "Frontend / Web",
    skills: [
      { name: "React", icon: <FaReact /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "Tailwind", icon: <SiTailwindcss /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "JavaScript", icon: <FaJsSquare /> }
    ]
  },
  {
    name: "Backend / Geral",
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

export default function Skills() {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills & Tecnologias</h2>
      
      {/* Linguagens por categoria */}
      {categories.map((category, i) => (
        <div key={i} className="mb-8">
          <h3 className="text-xl font-semibold text-center mb-4">{category.name}</h3>
          <div className="flex flex-wrap justify-center gap-6">
            {category.skills.map((skill, j) => (
              <motion.div
                key={j}
                className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg w-24 h-24 justify-center text-3xl text-cyan-400 hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: j * 0.1 }}
              >
                {skill.icon}
                <span className="text-sm mt-2 text-white text-center">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {/* Apps / Ferramentas */}
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-center mb-4">Apps / Ferramentas</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {apps.map((app, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center bg-gray-800 p-4 rounded-lg shadow-lg w-24 h-24 justify-center text-3xl text-green-400 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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
