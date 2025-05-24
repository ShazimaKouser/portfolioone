import { motion } from "framer-motion";
import certificate1 from "../../assets/images/certificate/course.png";
import certificate2 from "../../assets/images/certificate/course.png";
import CertificateCard from "../Certificates/CertificateCard";

const certificates = [
  {
    title: "Web Development",
    issuer: "Aspirasys",
    date: "Jan 2024",
    image: certificate1,
    link: "/certificates/web-dev.pdf"  // Ensure this file is in public/certificates
  },
  {
    title: "Internship Certificate",
    issuer: "Colen Infotech",
    date: "Mar 2024",
    image: certificate2,
    // link: "/certificates/internship.pdf"  // Ensure this file is in public/certificates
  }
];

const Certificates = () => {
  return (
    <section id="certificates" className="w-full py-20 text-white">
      <div className="max-w-6xl mx-auto text-center px-6">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-4 text-designColor"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Certificates
        </motion.h2>

        <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          Courses I've Completed
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 justify-items-center">
          {certificates.map((cert, index) => (
            <CertificateCard
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
              image={cert.image}
              link={cert.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
