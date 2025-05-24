import { FaCode, FaCheckCircle, FaHeadset } from "react-icons/fa";
import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section id="about" className="relative z-10 px-6 py-24  text-white overflow-hidden">
      <div className="max-w-6xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          className="text-4xl sm:text-5xl font-bold mb-4 text-designColor"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Who I Am
        </motion.h2>

        <p className="text-gray-400 text-lg mb-16 max-w-2xl mx-auto">
          Passionate about creating delightful digital experiences with performance and precision.
        </p>

        {/* Info Cards */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {[
            { icon: <FaCode />, title: 'Experience', text: '1 Year Working' },
            { icon: <FaCheckCircle />, title: 'Projects', text: '38+ Completed' },
            { icon: <FaHeadset />, title: 'Support', text: '24/7 Available' },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 w-full md:w-72 shadow-lg hover:shadow-pink-500/30 transition-all duration-300 group"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.2 }}
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-gradient-to-tr from-purple-500 to-pink-500 text-white rounded-full flex items-center justify-center text-2xl group-hover:rotate-12 transition">
                {item.icon}
              </div>
              <h4 className="text-xl font-semibold mb-1">{item.title}</h4>
              <p className="text-gray-300 text-sm">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Bio Paragraph */}
        <motion.div
          className="mt-16 max-w-4xl mx-auto text-left text-gray-300 leading-relaxed space-y-6 text-[17px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <p>
            I’m a Frontend Developer who specializes in building modern, responsive, and engaging web interfaces using
            <span className="text-pink-400 font-semibold"> HTML, CSS, JavaScript, Bootstrap, and React.js</span>. My approach focuses on delivering clean code and high performance with visually appealing UI.
          </p>
          <p>
            I've successfully completed over <span className="text-purple-400 font-semibold">38+ real and demo projects</span>, refining my skills in creating scalable and user-centric applications. I continuously strive to explore new ideas and improve my craft in the world of frontend development.
          </p>
        </motion.div>
      </div>

      {/* Glowing Background Blobs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-2xl -z-10 animate-pulse delay-500"></div>
    </section>
  );
};

export default AboutMe;
