import React from "react";

const LocalNavbar = () => {
  return (
    <div className="shadow-sm w-full navbar bg-white bg-opacity-80 backdrop-filter backdrop-blur-md sticky top-0 z-10">
      <div className="flex items-center justify-between max-w-5xl h-full mx-auto">
        <div className="text-xl font-semibold">iMac 24&#34;</div>
        <div className="flex justify-between items-center gap-x-6 text-xs">
          <div>Overview</div>
          <div>Why Mac</div>
          <div>Tech Specs</div>
          <div className="bg-blue-600 py-1 px-3 rounded-full text-white">
            Buy
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocalNavbar;
