import { motion } from "framer-motion";
import { s } from "framer-motion/client";

export default function Projects({ language }) {
  const projectsContent = [
    { title: "Trello", descriptionPT: "Pequeno Exemplo de Trello feito em Reactjs, Tailwind e JavaScript", descriptionEN: "Small Trello example made with Reactjs, Tailwind and JavaScript", lang: "JavaScript", link: "https://github.com/Gugaa03/Trello" },
    { title: "BotOLX", descriptionPT: "Bot para OLX que manda notificação quando uma nova mota é anunciada", descriptionEN: "OLX Bot that sends a notification when a new bike is announced", lang: "Python", link: "https://github.com/Gugaa03/BotOLX" },
    { title: "JogoThreeJS", descriptionPT: "Jogo para a cadeira de computação gráfica (2 pessoas)", descriptionEN: "Game for the computer graphics class (2 players)", lang: "JavaScript", link: "https://github.com/Gugaa03/JogoThreeJS" },
    { title: "ProjetoFinaldeCurso", descriptionPT: "Projeto final de curso em C#", descriptionEN: "Final course project in C#", lang: "C#", link: "https://github.com/Gugaa03/ProjetoFinaldeCurso" }
  ];

 return (
  <section className="py-12 px-6 max-w-6xl mx-auto">
    <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
      {language === "pt" ? "Projetos" : "Projects"}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projectsContent.map((proj, i) => (
        <motion.a
          key={i}
          href={proj.link}
          target="_blank"
          className="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{
            scale: 1.05,
            rotate: [0, 1, -1, 0],
            boxShadow: "0px 10px 20px rgba(0,255,255,0.5)",
            transition: { duration: 0.3 }
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.2 }}
        >
          <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            {proj.title}
          </h3>
          <p className="text-gray-400 mb-2">
            {language === "pt" ? proj.descriptionPT : proj.descriptionEN}
          </p>
          <span className="text-sm text-cyan-400">{proj.lang}</span>
        </motion.a>
      ))}
    </div>
  </section>
);
}