import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const SocialMediaPanel = () => {
  return (
    <div class="text-center mx-4 border-2 bg-slate-100  p-4">
      <ul class="">
        <li className="my-4 p-2 bg-gray-800 hover:bg-black group">
          <a href="https://github.com/gulshank721" target="_blank" rel="noreferrer">
            <FaGithub className="group-hover:animate-bounce" color="white" size={20} />
          </a>
        </li>
        <li className="my-4 p-2 bg-gray-800 hover:bg-blue-600 group">
          <a href="https://www.linkedin.com/in/gulshank721/" target="_blank" rel="noreferrer">
            <FaLinkedin className="group-hover:animate-bounce hover:animate-bounce " color="white" size={20} />
          </a>
        </li>
      </ul>
    </div>
  );
};
