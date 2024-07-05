import React from "react";

const AboutMe = () => {
  return (
    <div id="about_me" className="container p-3">
      <div className="flex p-4 gap-6 items-center" >
        <div className="w-[60%] min-w-[200px] ">
          <img
            src="images/Robot_aboutMe.png"
            alt="robot_graphics"
            
          />
        </div>
        <div className="ms-8 me-4  flex-grow font-mono">
          <h1 className="text-3xl font-semibold pb-2">About Me</h1>
          <p className="font-semibold">
            I am graduated with Master of Computer Application(M.C.A.) from
            Banaras Hindu Univerity (BHU). 
            
          </p>
          <p className="text-lg">
          With over a year of experience as a full-stack software engineer, I've engaged with various technologies including <span className="font-semibold">React, JavaScript, Python, MySQL, and PostgreSQL.
            </span> Throughout my career, I've tackled diverse projects, involving direct client interaction and effective communication.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
