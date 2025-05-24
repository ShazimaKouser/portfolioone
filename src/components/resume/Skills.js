import React from 'react';
import { motion } from 'framer-motion';

// Skills data
const frontendSkills = [
  { name: "HTML5", level: 99 },
  { name: "CSS3", level: 100 },
  { name: "Bootstrap", level: 99 },
  { name: "JavaScript", level: 98 },
  { name: "React JS", level: 95 },
];

// SkillBar component to render each skill's progress bar
const SkillBar = ({ name, level }) => (
  <div className="overflow-x-hidden">
    <p className="text-sm uppercase font-medium">{name}</p>
    <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
      <motion.span
        initial={{ x: "-100%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
        style={{ width: `${level}%` }}
      >
        <span className="absolute -top-7 right-0">{level}%</span>
      </motion.span>
    </span>
  </div>
);

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full min-h-screen flex items-center justify-center"
    >
      {/* Centered Skills Section */}
      <div className="w-full max-w-3xl mx-auto px-4">
        <div className="py-12 font-titleFont flex flex-col gap-4 items-center text-center">
          <p className="text-sm text-designColor tracking-[4px] uppercase">
            Features
          </p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Frontend Development Skills
          </h2>
        </div>
        <div className="mt-14 w-full flex flex-col gap-6">
          {frontendSkills.map((skill, index) => (
            <SkillBar key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
