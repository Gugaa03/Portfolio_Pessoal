export default function Contact({ language }) {
  return (
    <section id="contact" className="py-12 text-center">
      <h2 className="text-3xl font-bold mb-4">{language === "pt" ? "📞 Contato" : "📞 Contact"}</h2>
      <div className="flex justify-center gap-6 mb-4">
        <a href="https://github.com/Gugaa03" target="_blank" className="hover:underline">🐱 GitHub</a>
        <a href="https://www.linkedin.com/in/gustavo-silva-5a6a7527a" target="_blank" className="hover:underline">💼 LinkedIn</a>
      </div>
      <p className="text-gray-400">
        {language === "pt" ? "📧 ou clique no ícone de e-mail para me mandar uma mensagem." : "📧 or click the email icon to send me a message."}
      </p>
    </section>
  );
}
