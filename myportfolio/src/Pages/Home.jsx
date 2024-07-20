import React from "react";
import AnimatedText from "./components/NameAnim";
import ProfileAnim from "./components/ProfileAnim";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
  FaGithubSquare,
} from "react-icons/fa";

function Home() {
  return (
    <div className="bg-black min-h-screen pt-20">
      <div className="w-11/12 mr-auto ml-auto pt-32 grid grid-cols-3">
        <div className="col-span-2">
          <p className="font-bold text-2xl text-red-700 mb-2">HELLO!</p>
          <AnimatedText
            textToAnimate="Sandip Kumar Das."
            animationSpeed={200}
          />
          <pre className="text-white font-Roboto text-[17px] tracking-wide mt-5 mb-10">
            As a passionate web developer at Pravaah Consulting,
            <br />
            I’ve spent the last six months weaving digital magic with React.js,{" "}
            <br />
            crafting pixel-perfect interfaces using Tailwind CSS,
            <br />
            and even sprinkling a touch of Velo (Wix) wizardry.
          </pre>
          <p className="text-red-700 font-semibold">FIND ME ON</p>
          <div className="mt-5 flex space-x-3">
            <a href="">
              <FaFacebookSquare className="text-[50px] text-blue-600 hover:scale-125 duration-300" />
            </a>
            <a href="">
              <FaWhatsappSquare className="text-[50px] text-green-600 hover:scale-125 duration-300" />
            </a>
            <a href="">
              <FaInstagramSquare className="text-[50px] text-[#D64264] hover:scale-125 duration-300" />
            </a>
            <a href="">
              <FaLinkedin className="text-[50px] text-blue-600 hover:scale-125 duration-300" />
            </a>
            <a href="">
              <FaGithubSquare className="text-[50px] text-gray-600 hover:scale-125 duration-300" />
            </a>
          </div>
        </div>
        <div className="col-span-1">
          <ProfileAnim />
        </div>
      </div>
    </div>
  );
}

export default Home;
