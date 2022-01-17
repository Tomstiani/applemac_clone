import Image from "next/image";
import React from "react";
import M1Pic from "../images/m1_chip.jpg";
import iMacMockup from "../images/imac_mockup.png";

const M1 = () => {
  return (
    <div className="max-w-5xl mx-auto mt-56">
      <div className="h-screen">
        <div className="h-32 w-32 -ml-5 relative">
          <Image src={M1Pic} alt="m1 chip" layout="fill" />
        </div>
        <p className="text-7xl overflow-hidden py-1">
          <span className="text-red-800">M1 and Monterey.</span>
          <br /> With great power <br /> comes great capability.
        </p>
        <p className="text-xl pr-80 mt-8 font-bold text-gray-400">
          M1 is the most powerful chip we’ve ever made. macOS Monterey is the
          most advanced desktop operating system in the world. Combined, they
          take iMac to entirely new levels of performance, efficiency, and
          security. iMac wakes from sleep almost instantly, apps launch in a
          flash, and the whole system feels fluid, smooth, and snappy. With up
          to 85 percent faster CPU performance and up to two times faster
          graphics performance than standard 21.5‑inch iMac models, you can use
          apps like Xcode and Affinity Photo to compile code in a fraction of
          the time or edit photos in real time. And it runs cool and quiet even
          while tackling these intense workloads. That’s the power of hardware,
          software, and silicon — all designed together.
        </p>
      </div>
      <Animation />
    </div>
  );
};

const Animation = () => {
  return (
    <div className="animation-canvas h-screen">
      <div className="relative translate-x-96">
        <Image
          src={iMacMockup}
          alt="iMac Mockup"
          className="absolute mockup"
          objectFit="contain"
          height={800}
        />
      </div>
    </div>
  );
};

export default M1;
