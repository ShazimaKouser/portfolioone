import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaReact,
} from "react-icons/fa";
import {FaHtml5, FaCss3Alt, FaBootstrap, FaJs } from "react-icons/fa";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Web Designer.", "Frontend Developer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY WORLD</h4>
        <h1 className="text-5xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Shazima Kouser</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
          "I'm a Frontend Developer passionate about crafting clean, responsive, and user-focused web experiences. I turn ideas into interactive, beautifully designed websites with attention to detail and performance."
        </p>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <FaHtml5 />
          </span>
          <span className="bannerIcon">
            <FaCss3Alt />
          </span>
          <span className="bannerIcon">
            <FaJs />
          </span>
          <span className="bannerIcon">
            <FaBootstrap />
          </span>
        </div>

      </div>
    </div>
  );
};

export default LeftBanner;
