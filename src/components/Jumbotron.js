import React from "react";
import MorphingPic from "./MorphingPic";
import { SocialMediaPanel } from "./SocialMediaPanel";
import { redirect, useNavigate } from "react-router-dom";

const Jumbotron = () => {
  const navigate = useNavigate();
   return (
    <div
      id="home"
      className="flex items-center justify-around h-[80vh] bg-slate-200 jumbotron"
      style={{
        background: "url(images/pattern-randomized.png) no-repeat fixed center",
      }}
    >
      <div className="h-max ms-6 ">
        <div className="text-5xl font-bold text-gray-700 leading-normal">
          <p className=" ">Hello, my</p>
          <p className=" ">name's Gulshan Kumar</p>
          <p className="">
            I'm Software <br /> Developer
          </p>
        </div>

        <div className="flex gap-4 font-mono text-sm mt-2">
          <a href="#contacts" className="shadow-lg border-2 border-gray-800 p-2 hover:bg-slate-800 hover:text-white hover:scale-125 transition-all ease-in-out">
            Contact me
          </a>
          <a href="/files/Resume_Gulshan_Kumar.pdf" download={"Resume_Gulshan_Kumar"} className="shadow-lg border-2 border-gray-800 p-2 hover:bg-orange-500 hover:text-black hover:scale-125 transition-all ease-in-out">Download CV</a>
        </div>
      </div>

      <div>
        <MorphingPic />
      </div>
      <div>
        <SocialMediaPanel />
      </div>
    </div>
  );
};

export default Jumbotron;
