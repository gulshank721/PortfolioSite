import React from "react";
import ProgressBar from "../components/ProgressBar";
import { FaJava, FaNode, FaNodeJs, FaReact } from "react-icons/fa";
import {
  SiCss3,
  SiExpress,
  SiFlask,
  SiHtml5,
  SiMongodb,
  SiPython,
} from "react-icons/si";

const SkillExperiences = () => {
  return (
    <div id="experience" className="p-3 bg-orange-100">
      <div className="font-mono text-2xl text-center font-extralight  ">
        Skills and Experiences
      </div>
      <p className="px-4 text-sm font-sans font-semibold text-gray-800 text-center">
      I have honed my skills in web development, software engineering, UI/UX design, frontend development, and backend development across various tech stacks. Throughout my career, I have successfully delivered numerous projects, showcasing my expertise and versatility.
      </p>
      <div className="grid grid-cols-2 p-4 gap-4 my-4 mx-8 ">
        <div>
          <div className="flex items-center gap-2">
            <FaReact className="" size={22} />
            <p className="text-2xl text-gray-800 font-bold mb-1"> React.js</p>
          </div>

          <div className="w-2/3">
            <ProgressBar width={75} color={"#28b1c9"} />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <FaNodeJs className="" size={22} />
            <p className="text-2xl text-gray-800 font-bold mb-1">JavaScript</p>
          </div>

          <div className="w-2/3">
            <ProgressBar width={70} color={"#c7c928"} />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <FaNode size={24} />
            <p className="text-2xl text-gray-800 font-bold mb-1">Node</p>
          </div>

          <div className="w-2/3">
            <ProgressBar width={50} color={"#28c951"} />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <SiMongodb size={22} />
            <p className="text-2xl text-gray-800 font-bold mb-1">MongoDB</p>
          </div>

          <div className="w-2/3">
            <ProgressBar width={60} color={"#51c928"} />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <SiExpress size={22} />
            <p className="text-2xl text-gray-800 font-bold mb-1">Express.js</p>
          </div>

          <div className="w-2/3">
            <ProgressBar width={66} color={"#222421"} />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <SiPython size={22} />
            <p className="text-2xl text-gray-800 font-bold mb-1">Python</p>
          </div>

          <div className="w-2/3">
            <ProgressBar width={70} color={"#242421"} />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <SiFlask size={22} />
            <p className="text-2xl text-gray-800 font-bold mb-1">Flask</p>
          </div>

          <div className="w-2/3">
            <ProgressBar width={65} color={"#212424"} />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <SiHtml5 size={22} />
            <p className="text-2xl text-gray-800 font-bold mb-1">HTML</p>
          </div>

          <div className="w-2/3">
            <ProgressBar width={80} color={"#a86032"} />
          </div>
        </div>
        <div>
          <div className="flex items-center gap-2">
            <SiCss3 size={22} />
            <p className="text-2xl text-gray-800 font-bold mb-1">CSS</p>
          </div>

          <div className="w-2/3">
            <ProgressBar width={70} color={"#5ec6cc"} />
          </div>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <FaJava size={22} />
            <p className="text-2xl text-gray-800 font-bold mb-1">Java</p>
          </div>

          <div className="w-2/3">
            <ProgressBar width={75} color={"#3260a8"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillExperiences;
