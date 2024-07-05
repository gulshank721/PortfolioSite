import React from "react";
import { ProjectCard } from "./ProjectCard";
import Footer from "../Pages/Footer"

const Projects = () => {
  return (
    <div id="projects" className="bg-slate-900 p-4 text-white">
      <p className="font-mono text-2xl text-center font-extralight">PROJECTS</p>
      <div className="grid grid-cols-1 md:grid-cols-3 space-y-4 text-center mx-auto p-4 mt-4">
        {/* <div className="mx-auto">
          <ProjectCard
            backgroundColor={"#fc8c03"}
            title={"ChatGPT"}
            description={"Create you custom Personolized chatbots"}
          />
        </div> */}

        <div className="mx-auto">
          <ProjectCard
            backgroundColor={"#5ec6cc"}
            title={"Rentify"}
            description={"List your unused property for sell or rent"}
            codebase={"https://github.com/gulshank721/RentifyClient"}
            demoLink={"https://rentspace.vercel.app/"}
          />
        </div>
        <div className="mx-auto">
          <ProjectCard
            backgroundColor={"#fc8c03"}
            title={"Researcher's Review System"}
            description={"Create you custom Personolized chatbots"}
            codebase={"https://github.com/gulshank721/researchers_review_portal"}
            demoLink={"https://researcher-review-system.netlify.app"}
          />
        </div>
        <div className="mx-auto">
          <ProjectCard
            backgroundColor={"#FF0066"}
            title={"Portfolio"}
            description={"My portfolio web App"}
            codebase={""}
            demoLink={""}
          />
        </div>
        <div className="mx-auto">
          <ProjectCard
            backgroundColor={"#32a852"}
            title={"Restaurent Feedback Web App"}
            description={"My portfolio web app"}
            codebase={"https://github.com/gulshank721/Restaurant-Website"}
            demoLink={"https://gulshankrestaurent.netlify.app"}
          />
        </div>
      </div>

      {/* footer section */}
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Projects;
