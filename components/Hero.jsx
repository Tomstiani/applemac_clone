import React from "react";
import Image from "next/image";
import background from "../images/heroPic.jpeg";

const Hero = () => {
  return (
    <div className="heroHeight w-screen relative -mt-12">
      <Image
        src={background}
        layout="fill"
        alt="hero-img"
        objectFit="cover"
        className="absolute"
      ></Image>
      <div className="absolute text-center text-7xl font-semibold top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 w-full text-gray-900">
        You&#39;ve never seen <br /> a computer like this before
      </div>
    </div>
  );
};

export default Hero;
