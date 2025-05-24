import { FaDownload, FaEye } from "react-icons/fa";
import { motion } from "framer-motion";

const CertificateCard = ({ title, issuer, date, image, link }) => {
  return (
    <motion.div
      className="rounded-2xl shadow-lg overflow-hidden w-[450px] border"
      style={{ borderColor: "#e5e7eb" }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-5 text-center">
        <h3 className="text-xl font-semibold text-designColor mb-2">{title}</h3>
        <p className="text-sm text-gray-400 mb-1">Issued by: {issuer}</p>
        <p className="text-sm text-gray-400 mb-4">Date: {date}</p>

        <div className="flex gap-6 justify-center">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 text-white rounded-lg hover:opacity-90 transition duration-300"
            style={{ backgroundColor: "rgb(185, 127, 242)" }} // Purple
          >
            <FaEye className="mr-2" /> View PDF
          </a>

          <a
            href={link}
            download
            className="inline-flex items-center px-4 py-2 text-white rounded-lg hover:opacity-90 transition duration-300"
            style={{ backgroundColor: "rgb(236, 111, 164)" }} // Pink
          >
            <FaDownload className="mr-2" /> Download
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default CertificateCard;
