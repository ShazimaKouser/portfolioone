import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Education Section */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2005 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Journey</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Primary School Education"
            subTitle="Municipal Urdu Girls Primary School (2010 - 2014)"
            result="Completed"
            des="My learning journey began at Municipal Urdu Girls Primary School, where I was introduced to the joy of learning. It was here that I developed foundational skills in reading, writing, and basic mathematics. The nurturing environment and dedicated teachers sparked my curiosity and built the confidence that still drives me today."
          />
          <ResumeCard
            title="Higher Secondary Education"
            subTitle="Hasnath-e-Jria Girls Higher Secondary School (2014 - 2021)"
            result="12th Grade Completed"
            des="Completed my higher secondary education with a strong focus on academics and personal growth. The structured curriculum and supportive environment helped shape my critical thinking and encouraged me to pursue further studies in the field of technology and commerce."
          />

          <ResumeCard
            title="B.Com in Computer Applications"
            subTitle="University of Madras – Distance Education (2021 - 2024)"
            result="Completed"
            des="Earned my Bachelor’s degree in Computer Applications through the Distance Education Centre in Ambur, affiliated with the University of Madras. This phase of my education taught me the power of discipline, self-learning, and commitment. I deepened my understanding of both commerce and technology, strengthening my passion for the digital world."
          />
          <ResumeCard
            title="Web Development Course"
            subTitle="Aspirasys(2024 - 2025)"
            result="In Progress"
            des="Currently learning web development, focusing on building responsive web pages. The course covers key technologies such as HTML, CSS, JavaScript, and React, and I'm highly passionate about creating dynamic and user-friendly websites. This education is enhancing my skills in both front-end design and development."
          />

        </div>
      </div>

      {/* Placeholder for Job Experience */}
      {/* <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Coming Soon</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Your next opportunity"
            subTitle="In Progress"
            result="To be updated"
            des="Job experience section will be updated as you take on exciting new roles and continue to grow in your career journey."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Education;
