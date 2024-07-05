import React, { useState } from "react";
import { Outlet } from "react-router-dom";

const Navbar = () => {
  const [activeTab, setActiveTab] = useState();
  const handleTabClick = (tab) => {
    // console.log(tab);
    setActiveTab(tab);
  };
  const activeTabStyle = "text-cyan-400 text-lg border-b-4 border-cyan-400";
  return (
    <div className="">
      <div className="flex px-6  justify-center align-middle bg-slate-900 text-white font-semibold font-sans ">
        <ul className="flex gap-6 ">
          <li
            onClick={() => handleTabClick("home")}
            className={`${activeTab === "home" && activeTabStyle} py-6`}
          >
            <a href="#home">Home</a>
          </li>
          <li
            onClick={() => handleTabClick("about_me")}
            className={`${activeTab === "about_me" && activeTabStyle} py-6`}
          >
            <a href="#about_me">About</a>
          </li>
          <li
            onClick={() => handleTabClick("experience")}
            className={`${activeTab === "experience" && activeTabStyle} py-6`}
          >
            <a href="#experience">Skills & Experience</a>
          </li>
          <li
            onClick={() => handleTabClick("projects")}
            className={`${activeTab === "projects" && activeTabStyle} py-6`}
          >
            <a href="#projects">Projects</a>
          </li>
          <li
            onClick={() => handleTabClick("contacts")}
            className={`${activeTab === "contacts" && activeTabStyle} py-6`}
          >
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </div>

      <div className="center">
        <Outlet />
      </div>
    </div>
  );
};

export default Navbar;
