import React from "react";
import Jumbotron from "../components/Jumbotron";
import AboutMe from "./AboutMe";
import Projects from "../components/Projects";
import SkillExperiences from "./SkillExperiences";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <div className="w-full">
      <Jumbotron />
      <AboutMe/>
      <SkillExperiences/>
      <Projects/>
      {/* <Footer/> */}
    </div>
  );
};

export default HomePage;
