import { FiMail } from "react-icons/fi";
import { motion } from "framer-motion";

export default function EmailIcon() {
  const gmailLink = () => {
    const email = "guga090403@gmail.com";
    const url = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=&body=`;
    window.open(url, "_blank");
  };

  return (
    <motion.button
      onClick={gmailLink}
      className="fixed bottom-6 right-6 bg-cyan-500 hover:bg-cyan-400 text-white p-4 rounded-full shadow-lg flex items-center justify-center z-50"
      initial={{ scale: 1 }}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      title="Enviar Email"
    >
      <FiMail className="w-6 h-6" />
    </motion.button>
  );
}
