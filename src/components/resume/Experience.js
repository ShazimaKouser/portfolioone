import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2024 - Present</p>
          <h2 className="text-3xl md:text-4xl font-bold">My Journey</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Aspiring Web Developer"
            subTitle="Aspirasys - (2024 - Present)"
            result="Completed"
            des="Currently pursuing web development at Aspirasys. Completed HTML, CSS, JavaScript, and ReactJS. Passionate about creating responsive and user-interactive web pages."
          />
          <ResumeCard
            title="Frontend Projects"
            subTitle="Self-initiated - (2024 - Present)"
            result="Personal"
            des="Worked on multiple mini-projects using HTML, CSS, and ReactJS. Focused on building clean layouts and improving UI/UX design skills."
          />
          <ResumeCard
            title="Continuous Learner"
            subTitle="Online Resources & Practice"
            result="Everyday"
            des="Always exploring new trends in frontend development, learning from real-world websites, and sharpening skills by rebuilding designs."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;
