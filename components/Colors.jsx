import Image from "next/image";
import React, { useState } from "react";
import greenSide from "../images/colors/green/color_side_green.jpg";
import greenFront from "../images/colors/green/color_front_green.jpg";
import greenBack from "../images/colors/green/color_back_green.jpg";
import redSide from "../images/colors/red/color_side_red.jpg";
import redFront from "../images/colors/red/color_front_red.jpg";
import redBack from "../images/colors/red/color_back_red.jpg";
import blueSide from "../images/colors/blue/color_side_blue.jpg";
import blueFront from "../images/colors/blue/color_front_blue.jpg";
import blueBack from "../images/colors/blue/color_back_blue.jpg";
import yellowSide from "../images/colors/yellow/color_side_yellow.jpg";
import yellowFront from "../images/colors/yellow/color_front_yellow.jpg";
import yellowBack from "../images/colors/yellow/color_back_yellow.jpg";
import orangeSide from "../images/colors/orange/color_side_orange.jpg";
import orangeFront from "../images/colors/orange/color_front_orange.jpg";
import orangeBack from "../images/colors/orange/color_back_orange.jpg";
import purpleSide from "../images/colors/purple/color_side_purple.jpg";
import purpleFront from "../images/colors/purple/color_front_purple.jpg";
import purpleBack from "../images/colors/purple/color_back_purple.jpg";
import silverSide from "../images/colors/silver/color_side_silver.jpg";
import silverFront from "../images/colors/silver/color_front_silver.jpg";
import silverBack from "../images/colors/silver/color_back_silver.jpg";

const Colors = () => {
  const [color, setColor] = useState("green");

  const showColor = (color, pos) => {
    switch (color) {
      case "green":
        if (pos === "front") {
          return (
            <Image
              src={greenFront}
              alt="green-front"
              height={300}
              objectFit="contain"
            />
          );
        } else if (pos === "back") {
          return (
            <Image
              src={greenBack}
              alt="green-back"
              height={300}
              objectFit="contain"
            />
          );
        } else if (pos === "side") {
          return (
            <Image
              src={greenSide}
              alt="green-side"
              height={700}
              objectFit="contain"
            />
          );
        }
        break;
      case "red":
        if (pos === "front") {
          return (
            <Image
              src={redFront}
              alt="red-front"
              height={300}
              objectFit="contain"
            />
          );
        } else if (pos === "back") {
          return (
            <Image
              src={redBack}
              alt="red-back"
              height={300}
              objectFit="contain"
            />
          );
        } else if (pos === "side") {
          return (
            <Image
              src={redSide}
              alt="red-side"
              height={700}
              objectFit="contain"
            />
          );
        }
        break;
      case "blue":
        if (pos === "front") {
          return (
            <Image
              src={blueFront}
              alt="blue-front"
              height={300}
              objectFit="contain"
            />
          );
        } else if (pos === "back") {
          return (
            <Image
              src={blueBack}
              alt="blue-back"
              height={300}
              objectFit="contain"
            />
          );
        } else if (pos === "side") {
          return (
            <Image
              src={blueSide}
              alt="blue-side"
              height={700}
              objectFit="contain"
            />
          );
        }
        break;
      case "yellow":
        if (pos === "front") {
          return (
            <Image
              src={yellowFront}
              alt="yellow-front"
              height={300}
              objectFit="contain"
            />
          );
        } else if (pos === "back") {
          return (
            <Image
              src={yellowBack}
              alt="yellow-back"
              height={300}
              objectFit="contain"
            />
          );
        } else if (pos === "side") {
          return (
            <Image
              src={yellowSide}
              alt="yellow-side"
              height={700}
              objectFit="contain"
            />
          );
        }
        break;
      case "orange":
        if (pos === "front") {
          return (
            <Image
              src={orangeFront}
              alt="orange-front"
              height={300}
              objectFit="contain"
            />
          );
        } else if (pos === "back") {
          return (
            <Image
              src={orangeBack}
              alt="orange-back"
              height={300}
              objectFit="contain"
            />
          );
        } else if (pos === "side") {
          return (
            <Image
              src={orangeSide}
              alt="orange-side"
              height={700}
              objectFit="contain"
            />
          );
        }
        break;
      case "purple":
        if (pos === "front") {
          return (
            <Image
              src={purpleFront}
              alt="purple-front"
              height={300}
              objectFit="contain"
            />
          );
        } else if (pos === "back") {
          return (
            <Image
              src={purpleBack}
              alt="purple-back"
              height={300}
              objectFit="contain"
            />
          );
        } else if (pos === "side") {
          return (
            <Image
              src={purpleSide}
              alt="purple-side"
              height={700}
              objectFit="contain"
            />
          );
        }
        break;
      case "silver":
        if (pos === "front") {
          return (
            <Image
              src={silverFront}
              alt="silver-front"
              height={300}
              objectFit="contain"
            />
          );
        } else if (pos === "back") {
          return (
            <Image
              src={silverBack}
              alt="silver-back"
              height={300}
              objectFit="contain"
            />
          );
        } else if (pos === "side") {
          return (
            <Image
              src={silverSide}
              alt="silver-side"
              height={700}
              objectFit="contain"
            />
          );
        }
        break;
    }
  };

  return (
    <div>
      <div className="max-w-5xl mx-auto text-6xl font-semibold">
        Seven vibrant colors. <br />
        You do <span className="hueGradient">hue.</span>
      </div>
      <div className="w-9/12 mx-auto mt-24 flex flex-col gap-4">
        <video
          src="https://www.apple.com/105/media/us/imac-24/2021/5e004d75-3ad6-4bb9-ab59-41f891fc52f0/anim/colors-hero/large_2x.mp4"
          autoPlay
          loop={false}
        />
        <div className="flex gap-x-4">
          <div
            className="flex justify-center items-center w-1/2 py-24 bg-gray-50 relative"
            id="left"
          >
            <div className="flex flex-col items-center justify-between absolute left-12 gap-y-4">
              <button
                onClick={() => {
                  setColor("green");
                }}
                className="w-8 h-8 rounded-full bg-green-300"
              ></button>
              <button
                onClick={() => {
                  setColor("red");
                }}
                className="w-8 h-8 rounded-full bg-red-300"
              ></button>
              <button
                onClick={() => {
                  setColor("blue");
                }}
                className="w-8 h-8 rounded-full bg-blue-300"
              ></button>
              <button
                onClick={() => {
                  setColor("orange");
                }}
                className="w-8 h-8 rounded-full bg-orange-300"
              ></button>
              <button
                onClick={() => {
                  setColor("purple");
                }}
                className="w-8 h-8 rounded-full bg-purple-300"
              ></button>
              <button
                onClick={() => {
                  setColor("yellow");
                }}
                className="w-8 h-8 rounded-full bg-yellow-300"
              ></button>
              <button
                onClick={() => {
                  setColor("silver");
                }}
                className="w-8 h-8 rounded-full bg-gray-300"
              ></button>
            </div>
            {showColor(color, "side")}
          </div>
          <div className="flex justify-center items-center w-1/2 gap-y-4 flex-col">
            <div
              className="h-1/2 bg-gray-50 w-full flex justify-center items-center"
              id="up"
            >
              {showColor(color, "front")}
            </div>
            <div
              className="h-1/2 bg-gray-50 w-full flex items-center justify-center"
              id="down"
            >
              {showColor(color, "back")}
            </div>
          </div>
        </div>
        <video
          src="https://www.apple.com/105/media/us/imac-24/2021/5e004d75-3ad6-4bb9-ab59-41f891fc52f0/anim/colors-lifestyle/large_2x.mp4"
          autoPlay
          loop={true}
        ></video>
      </div>
    </div>
  );
};

export default Colors;
