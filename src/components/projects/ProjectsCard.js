
import React from 'react';

const ProjectsCard = ({ title, des, src, live, code }) => {
  return (
    <div className="w-full p-4 shadow-lg rounded-lg border bg-dark dark:bg-[#1e1e1e] transition-all">
      <img src={src} alt={title} className="w-full h-40 object-cover rounded-md mb-4 " />
      <h3 className="text-lg font-semibold text-designColor dark:text-white">{title}</h3>
      <p className="text-sm text-white-600 dark:text-gray-300 my-2">{des}</p>
      <div className="flex gap-4 mt-4">
        <a href={live} target="_blank" rel="noreferrer" className="text-[rgb(185,127,242)] hover:underline">
          Live Demo
        </a>
        {code && (
          <a href={code} target="_blank" rel="noreferrer" className="text-[rgb(236,111,177)] hover:underline">
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectsCard;
