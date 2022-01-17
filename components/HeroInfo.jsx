import { ChevronRightIcon, PlayIcon } from "@heroicons/react/outline";
import React from "react";

const HeroInfo = () => {
  return (
    <div className="flex justify-center items-center flex-col mt-8 mb-96">
      <div className="text-center font-semibold text-4xl">
        <span className="text-blue-900">Say </span>
        <span className="text-yellow-500">hello </span>
        <span className="text-orange-400">to </span>
        <span className="text-red-600">the </span>
        <span className="text-purple-900">new </span>
        <span className="text-blue-900">iMac.</span>
        <br />
        Inspired by the best of Apple. Transformed by <br /> the M1 chip. Stands
        out in any space. <br /> Fits perfectly into your life.
      </div>
      <div className="mt-8 text-2xl font-semibold">From $1299</div>
      <div className="mt-8 text-xl font-semibold flex gap-32">
        <p className="flex items-center justify-center text-blue-700">
          Watch the event <ChevronRightIcon className="h-4 w-4 mt-1" />
        </p>
        <p className="flex items-center justify-center text-blue-700">
          Watch the video <PlayIcon className="h-5 w-5 mt-1 ml-1" />
        </p>
      </div>
    </div>
  );
};

export default HeroInfo;
