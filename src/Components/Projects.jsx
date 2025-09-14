import { motion } from "framer-motion";

const projects = [
  {
    title: "Trello",
    description: "Pequeno Exemplo de Trello feito em Reactjs, Tailwind e JavaScript",
    lang: "JavaScript",
    link: "https://github.com/Gugaa03/Trello"
  },
  {
    title: "BotOLX",
    description: "Bot para OLX que manda notificação quando uma nova mota é anunciada",
    lang: "Python",
    link: "https://github.com/Gugaa03/BotOLX"
  },
  {
    title: "JogoThreeJS",
    description: "Jogo para a cadeira de computação gráfica (2 pessoas)",
    lang: "JavaScript",
    link: "https://github.com/Gugaa03/JogoThreeJS"
  },
  {
    title: "ProjetoFinaldeCurso",
    description: "Projeto final de curso em C#",
    lang: "C#",
    link: "https://github.com/Gugaa03/ProjetoFinaldeCurso"
  }
];

export default function Projects() {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Projetos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, i) => (
          <motion.a
            key={i}
            href={proj.link}
            target="_blank"
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
          >
            <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
            <p className="text-gray-400 mb-2">{proj.description}</p>
            <span className="text-sm text-cyan-400">{proj.lang}</span>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
