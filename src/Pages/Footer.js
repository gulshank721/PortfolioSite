import React from "react";

const Footer = () => {
  return (
    <div id="contacts" className="container mx-auto rounded-lg bg-stone-50 p-8">
        <p className="text-gray-800 text-xl font-semibold text-center">GET IN TOUCH</p>
      <div className="text-gray-950 font-mono my-2">
        <p className="text-xl font-serif font-semibold">Gulshan Kumar</p>
        <p>Email:- gulshank721@gmail.com</p>
        <p>Mob No. - +91 9504852419</p>
      </div>
      {/* divider */}
      <div className="my-4 h-[2px] rounded-lg bg-slate-700"></div>

      <div className="flex justify-between text-gray-900">
        <div className=" flex gap-2">
          <a className="hover:text-black" href="#">
            Disclaimer
          </a>
          <a className="hover:text-black" href="#">
            Privacy Policy
          </a>
          <a className="hover:text-black" href="#">
            Terms & Condition
          </a>
        </div>

        <p className="text-gray-800">
          Copyright &#169; 2024 Gulshank721&#174;. All rights reserved 
        </p>
      </div>
    </div>
  );
};

export default Footer;
