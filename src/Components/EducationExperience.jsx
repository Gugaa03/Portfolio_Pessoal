import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";

export default function EducationExperience({ language, textColor = "text-white", subTextColor = "text-gray-400", dateColor = "text-gray-500" }) {
  const content = {
    pt: {
      education: [
        { title: "Agrupamento Escolas Guilherme Correia de Carvalho", subtitle: "Ensino Elementar", date: "2013 - 2018" },
        { title: "CONSERVATÓRIO DE MÚSICA DE SEIA", subtitle: "Educação Musical", date: "2013 - 2018" },
        { title: "ESCOLA SECUNDÁRIA DE SEIA", subtitle: "Ciências e Tecnologias", date: "2018 - 2021" },
        { title: "UNIVERSIDADE DE TRÁS-OS-MONTES E ALTO DOURO", subtitle: "Licenciatura em Engenharia Informática", date: "2021 - 2025" }
      ],
      experience: [
        { title: "ASSOCIAÇÃO DE ESTUDANTES DE ENGENHARIA INFORMÁTICA", subtitle: "Departamento Pedagógico", date: "2021 - 2023" },
        { title: "STAFF UTAD SUMMIT", subtitle: "Organização de palestras e atividades | Apoio a empresas convidadas", date: "2022 - 2023" }
      ],
      sections: { education: "Educação", experience: "Experiência" }
    },
    en: {
      education: [
        { title: "Agrupamento Escolas Guilherme Correia de Carvalho", subtitle: "Elementary Education", date: "2013 - 2018" },
        { title: "CONSERVATÓRIO DE MÚSICA DE SEIA", subtitle: "Music Education", date: "2013 - 2018" },
        { title: "ESCOLA SECUNDÁRIA DE SEIA", subtitle: "Science and Technology", date: "2018 - 2021" },
        { title: "UNIVERSIDADE DE TRÁS-OS-MONTES E ALTO DOURO", subtitle: "Bachelor's Degree in Computer Engineering", date: "2021 - 2025" }
      ],
      experience: [
        { title: "ASSOCIATION OF COMPUTER ENGINEERING STUDENTS", subtitle: "Pedagogical Department", date: "2021 - 2023" },
        { title: "STAFF UTAD SUMMIT", subtitle: "Organization of lectures and activities | Support for invited companies", date: "2022 - 2023" }
      ],
      sections: { education: "Education", experience: "Experience" }
    }
  };

  const data = content[language] || content.pt;

  return (
<section id="education" className="scroll-mt-20 py-12 px-6 max-w-5xl mx-auto">

      <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        {data.sections.education}
      </h2>
      <div className="space-y-8 relative border-l-2 border-gray-700 ml-4">
        {data.education.map((item, index) => (
          <motion.div
            key={index}
            className="ml-6 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="absolute -left-10 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-cyan-500 text-white">
              <FaGraduationCap />
            </div>
            <h3 className={`text-xl font-semibold ${textColor}`}>{item.title}</h3>
            <p className={`${subTextColor}`}>{item.subtitle}</p>
            <span className={`${dateColor} text-sm`}>{item.date}</span>
          </motion.div>
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center my-10 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        {data.sections.experience}
      </h2>
      <div className="space-y-8 relative border-l-2 border-gray-700 ml-4">
        {data.experience.map((item, index) => (
          <motion.div
            key={index}
            className="ml-6 relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="absolute -left-10 top-1 flex items-center justify-center w-8 h-8 rounded-full bg-blue-500 text-white">
              <FaLaptopCode />
            </div>
            <h3 className={`text-xl font-semibold ${textColor}`}>{item.title}</h3>
            <p className={`${subTextColor}`}>{item.subtitle}</p>
            <span className={`${dateColor} text-sm`}>{item.date}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
