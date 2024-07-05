import React, { useEffect, useState } from "react";

const MorphingPic = () => {
    

  return (
    <>
     <svg viewBox="0 0 200 200" className="" xmlns="http://www.w3.org/2000/svg" height={300} width={300}>
          {/* <!-- Background Shape --> */}
          <path id="morphingPath" fill="#FF0066" 
          d="M40.1,-66.2C52.3,-62.4,62.6,-52.3,70.9,-40.2C79.1,-28.1,85.3,-14.1,86.5,0.7C87.8,15.5,84.2,31,76.9,44.8C69.7,58.6,58.7,70.7,45.3,73.6C31.9,76.4,15.9,69.9,2.5,65.6C-11,61.4,-22.1,59.4,-36.1,56.9C-50.1,54.4,-67.1,51.5,-74.1,41.9C-81.2,32.4,-78.2,16.2,-77.2,0.6C-76.2,-15,-77.2,-30.1,-71.5,-41.9C-65.8,-53.7,-53.3,-62.3,-40.3,-65.6C-27.3,-68.8,-13.6,-66.8,0.2,-67.1C14,-67.4,27.9,-70,40.1,-66.2Z"
        //   d={d} 
          transform="translate(100 100)" />
          <defs>
            <clipPath id="shapeClip">
              <path fill="#FF0066" d="M65,-35C76.3,-17.8,72.3,10.8,58.9,32.9C45.5,55.1,22.8,70.8,-0.6,71.1C-24,71.5,-47.9,56.5,-57,36.8C-66.1,17.2,-60.3,-7.1,-48.3,-24.7C-36.3,-42.3,-18.2,-53.1,4.3,-55.6C26.8,-58.1,53.6,-52.3,65,-35Z" transform="translate(100 90)" />
            </clipPath>
          </defs>
          <image href="images/profile_pic.jpeg" className="shadow-lg" x="5" y="20" width="200" height="200" clip-path="url(#shapeClip)" />
        </svg>
      
    </>
  );
};

export default MorphingPic;
