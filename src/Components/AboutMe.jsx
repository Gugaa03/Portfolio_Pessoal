export default function AboutMe({ language }) {
  const content = {
    pt: {
      title: "Sobre Mim",
      paragraphs: [
        "Sou o Gustavo Silva, um engenheiro informático apaixonado por tecnologia, programação e inovação. Tenho experiência em desenvolvimento Frontend e Backend, na criação de aplicações web e móveis.",
        "Destaco-me por ser curioso e motivado em aprender novas ferramentas e linguagens. Gosto de resolver problemas com código e transformar ideias em soluções digitais. "
      ]
    }, 
    en: {
      title: "About Me",
      paragraphs: [
        "I'm Gustavo Silva, a computer engineer passionate about technology, programming, and innovation. I have experience in Frontend and Backend development, creating web and mobile applications.",
        "I stand out for being curious and motivated to learn new tools and languages. I enjoy solving problems with code and turning ideas into impactful digital solutions. "
      ]
    }
  };

  const { title, paragraphs } = content[language] || content.pt;

  return (
    <section
      id="about"
      className="scroll-mt-24 text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
    >
      {/* Conteúdo estático */}
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">{title}</h2>
        {paragraphs.map((p, i) => (
          <p key={i} className="text-lg text-gray-300 leading-relaxed mt-4">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
