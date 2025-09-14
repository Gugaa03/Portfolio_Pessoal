export default function Contact({ language, darkMode }) {
  return (
    <section
      id="contact"
      className={`py-12 text-center ${
        darkMode ? "bg-gray-900" : "bg-white"
      }`}
    >
      <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        {language === "pt" ? "📞 Contato" : "📞 Contact"}
      </h2>

      <div className="flex justify-center gap-6 mb-4">
        <a
          href="https://github.com/Gugaa03"
          target="_blank"
          className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:underline"
        >
          🐱 GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/gustavo-silva-5a6a7527a"
          target="_blank"
          className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:underline"
        >
          💼 LinkedIn
        </a>
      </div>

      <p className={darkMode ? "text-gray-400" : "text-gray-700"}>
        {language === "pt"
          ? "📧 ou clique no ícone de e-mail para me mandar uma mensagem."
          : "📧 or click the email icon to send me a message."}
      </p>
    </section>
  );
}
