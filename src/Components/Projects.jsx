import { motion } from "framer-motion";

export default function Projects({ language }) {
  const projectsContent = [
    {
      title: "Trello",
      descriptionPT: "Aplicação de gestão de tarefas no estilo Trello, demonstrando funcionalidades básicas de organização utilizando React, TailwindCSS e JavaScript.",
      descriptionEN: "Task management application in the Trello style, demonstrating fundamental organizational features using React, TailwindCSS, and JavaScript.",
      lang: "JavaScript",
      link: "https://github.com/Gugaa03/Trello"
    },
    {
      title: "BotOLX",
      descriptionPT: "Bot para OLX que envia notificações apenas quando são anunciadas motas específicas, automatizando a monitorização de anúncios desejados.",
      descriptionEN: "OLX Bot that sends notifications only when specific motorcycles are listed, automating the monitoring of desired ads.",
      lang: "Python",
      link: "https://github.com/Gugaa03/BotOLX"
    },
    {
      title: "JogoThreeJS",
      descriptionPT: "Jogo do galo desenvolvido para a disciplina de Computação Gráfica, projetado para dois jogadores utilizando Three.js e JavaScript.",
      descriptionEN: "Tic-tac-toe in space game developed for the Computer Graphics course, designed for two players using Three.js and JavaScript.",
      lang: "JavaScript",
      link: "https://github.com/Gugaa03/JogoThreeJS"
    },
    {
      title: "TicketLine",
      descriptionPT: "Sistema completo de bilheteira online, implementado em C# com MySQL no backend e React + TailwindCSS no frontend, para gestão eficiente de vendas e reservas.",
      descriptionEN: "Comprehensive online ticketing system, implemented in C# with MySQL backend and React + TailwindCSS frontend, providing efficient management of sales and reservations.",
      lang: "C#, MySQL, React, TailwindCSS",
      link: "https://github.com/Gugaa03/TicketLine"
    },
    {
      title: "Barbearia Estilo",
      descriptionPT: "Sistema profissional de gestão de barbearia com autenticação via Supabase, frontend desenvolvido em React e TailwindCSS, incluindo funcionalidades completas de agenda e registro de barbeiros.",
      descriptionEN: "Professional barbershop management system with Supabase authentication, frontend developed in React and TailwindCSS, including comprehensive scheduling and barber registration functionalities.",
      lang: "TypeScript, Supabase, React, TailwindCSS",
      link: "https://github.com/Gugaa03/Barbearia"
    },
    {
      title: "GamersClub",
     descriptionPT: "Loja de jogos online construída com Next.js, Supabase e Tailwind CSS. Permite explorar jogos, adicionar ao carrinho e realizar compras.",
      descriptionEN: "Online game store built with Next.js, Supabase, and Tailwind CSS. Allows users to explore games, add to cart, and make purchases.",
      lang: "Next.js, Supabase, Tailwind CSS, React",
      link: "https://github.com/Gugaa03/GamersClub",
      inDevelopment: true
    }
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
            className="relative bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer overflow-hidden"
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
            {/* Badge de Desenvolvimento */}
            {proj.inDevelopment && (
              <span className="absolute top-3 right-3 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full shadow-lg">
                ⚠️ {language === "pt" ? "Em Desenvolvimento" : "In Development"}
              </span>
            )}

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
