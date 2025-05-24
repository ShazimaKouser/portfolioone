import React from 'react'
import Title from '../layouts/Title'
import ProjectsCard from './ProjectsCard';
import registrationImg from "../../assets/projects/pro1.png";
import shoeShopImg from "../../assets/projects/pro2.png";
import travelSiteImg from "../../assets/projects/pro3.png";
import searchBookImg from "../../assets/projects/pro4.png";
import kubramartImg from "../../assets/projects/pro5.png";
import amazingClockImg from "../../assets/projects/pro6.png";
import teamMembersImg from "../../assets/projects/pro7.png";
import weatherAppImg from "../../assets/projects/pro8.png";
import quizAppImg from "../../assets/projects/pro10.png";
import productCatalogueImg from "../../assets/projects/pro9.png";
import themeSwitcherImg from "../../assets/projects/pro11.png";
import multiPageAppImg from "../../assets/projects/pro12.png";





const projectList = [
  {
    title: "Registration Form",
    des: "A simple HTML project with login & signup pages.",
    src: registrationImg,
    live: "https://registrationandsigninform.netlify.app/",
    code: "https://github.com/ShazimaKouser/Project-Registration-Form-",
  },
  {
    title: "Shoe Shop Website",
    des: "Responsive HTML/CSS layout for a modern shoe store.",
    src: shoeShopImg,
    live: "https://shoe-shop-website.netlify.app/",
    code: "https://github.com/ShazimaKouser/SHOE-SHOP-WEBSITE",
  },
  {
    title: "Travel Website (Bootstrap)",
    des: "Travel booking UI built with Bootstrap.",
    src: travelSiteImg,
    live: "https://travel-db.netlify.app/",
    code: "https://github.com/ShazimaKouser/Bootstrap-pro",
  },
  {
    title: "Search Book Engine",
    des: "JavaScript-based book search engine using Open Library API.",
    src: searchBookImg,
    live: "https://searchbookengine.netlify.app/",
    code: "https://github.com/ShazimaKouser/search-engine--book-",
  },
  {
    title: "Digital Clock",
    des: "Dynamic JavaScript clock with date and time display.",
    src: amazingClockImg,
    live: "https://amazing-time.netlify.app/",
    code: "https://github.com/ShazimaKouser/Digital-clock--3",
  },
  {
    title: "KubraMart (Real Template)",
    des: "Professional eCommerce template using HTML/CSS/JS.",
    src: kubramartImg,
    live: "https://kubramart.netlify.app/",
    code: "https://github.com/ShazimaKouser/kubra-mart",
  },
  {
    title: "Team Members",
    des: "Reusable React components to display dynamic team profiles.",
    src: teamMembersImg,
    live: "https://profilesteam.netlify.app/",
    code: "https://github.com/ShazimaKouser/Team-member",
  },

  {
    title: "Weather App",
    des: "Live weather app using React Hooks and real-time API fetch.",
    src: weatherAppImg,
    live: "https://livetemperature.netlify.app/",
    code: "https://github.com/ShazimaKouser/weather-api",
  },
  {
    title: "Quiz App",
    des: "Interactive quiz app with state handling and score tracking.",
    src: quizAppImg,
    live: "https://quizability.netlify.app/",
    code: "https://github.com/ShazimaKouser/quizApp",
  },
  {
    title: "Product Catalogue",
    des: "Multi-page product listing app with dynamic routing.",
    src: productCatalogueImg,
    live: "https://catlogue.netlify.app/",
    code: "https://github.com/ShazimaKouser/Product-catalog",
  },
  {
    title: "Theme Switcher",
    des: "Theme toggler using React Context API for global state.",
    src: themeSwitcherImg,
    live: "https://styletoggle.netlify.app/",
    code: "https://github.com/ShazimaKouser/Theme-switcher",
  },
  {
    title: "Multi-Page App",
    des: "React Router-based navigation between multiple pages.",
    src: multiPageAppImg,
    live: "https://bakingfood.netlify.app/",
    code: "https://github.com/ShazimaKouser/Baking",
  }
];

const Projects = () => {
  return (
    <section id="projects" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center ">
        <Title
          title="EXPLORE MY PROJECT WORK"
          des="HTML, CSS, Bootstrap & JS Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14 mt-10">
        {projectList.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            des={project.des}
            src={project.src}
            live={project.live}
            code={project.code}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
