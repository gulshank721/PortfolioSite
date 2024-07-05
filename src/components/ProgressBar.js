import React from "react";

const ProgressBar = ({width, color}) => {
  return (
    <div class="w-full bg-gray-200 rounded-sm dark:bg-gray-700">
      <div
        className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-sm h-[10px]"
        style= {{width: `${width}%`, backgroundColor: `${color}`}}
      >
        {" "}
        {/* {`${width}%`} */}
    
      </div>
    </div>
  );
};

export default ProgressBar;
