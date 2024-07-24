import React, { useEffect, useState } from "react";
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaBootstrap,
  FaReact,
} from "react-icons/fa6";
import { FaCopyright, FaNodeJs } from "react-icons/fa";
import { SiPhp, SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbBrandJavascript } from "react-icons/tb";
import { RiTailwindCssFill } from "react-icons/ri";

function TechSkills() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const skillAnim = () => {
      if (count < 12) {
        const skill = document.getElementById(`skill${count}`);
        skill.style.scale = "105%";
        setTimeout(() => {
          skill.style.scale = "100%";
        }, 1000);
        setCount(count + 1);
        scaleSkill(count);
      } else {
        setCount(0);
      }
    };
    const animationInterval = setInterval(skillAnim, 1000);
    return () => {
      clearInterval(animationInterval);
    };
  }, [count]);
  return (
    <div className="w-11/12 mr-auto ml-auto py-5">
      <p className="text-2xl md:text-4xl bg-gradient-to-r from-[#08EE69] to-[#38BDF8] text-transparent bg-clip-text text-center font-bold mt-2">
        Technical Skills
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-10">
        <div
          id="skill0"
          className="p-[20px] border-2 border-[#E4542C] rounded-lg shadow-lg shadow-[#E4542C] hover:scale-105 duration-150 cursor-pointer"
        >
          <FaHtml5 className="text-[#E4542C] text-[100px] mr-auto ml-auto" />
          <p className="text-4xl text-[#E4542C] text-center mt-2">HTML</p>
        </div>
        <div
          id="skill1"
          className="p-[20px] border-2 border-[#0873BF] rounded-lg shadow-lg shadow-[#0873BF] hover:scale-105 duration-150 cursor-pointer"
        >
          <FaCss3Alt className="text-[#0873BF] text-[100px] mr-auto ml-auto" />
          <p className="text-4xl text-[#0873BF] text-center mt-2">CSS</p>
        </div>
        <div
          id="skill2"
          className="p-[20px] border-2 border-[#F4E225] rounded-lg shadow-lg shadow-[#F4E225] hover:scale-105 duration-150 cursor-pointer"
        >
          <TbBrandJavascript className="text-[#F4E225] text-[100px] mr-auto ml-auto" />
          <p className="text-4xl text-[#F4E225] text-center mt-2">JavaScript</p>
        </div>
        <div
          id="skill3"
          className="p-[20px] border-2 border-[#38BDF8] rounded-lg shadow-lg shadow-[#38BDF8] hover:scale-105 duration-150 cursor-pointer"
        >
          <RiTailwindCssFill className="text-[#38BDF8] text-[100px] mr-auto ml-auto" />
          <p className="text-4xl text-[#38BDF8] text-center mt-2">
            TailWind CSS
          </p>
        </div>
        <div
          id="skill4"
          className="p-[20px] border-2 border-[#7A11F7] rounded-lg shadow-lg shadow-[#7A11F7] hover:scale-105 duration-150 cursor-pointer"
        >
          <FaBootstrap className="text-[#7A11F7] text-[100px] mr-auto ml-auto" />
          <p className="text-4xl text-[#7A11F7] text-center mt-2">Bootstrap</p>
        </div>
        <div
          id="skill5"
          className="p-[20px] border-2 border-orange-500 rounded-lg shadow-lg shadow-orange-500 hover:scale-105 duration-150 cursor-pointer"
        >
          <FaJava className="text-orange-600 text-[100px] mr-auto ml-auto" />
          <p className="text-4xl text-orange-600 text-center mt-2">
            Java Programming
          </p>
        </div>
        <div
          id="skill6"
          className="p-[20px] border-2 border-[#303C96] rounded-lg shadow-lg shadow-[#303C96] hover:scale-105 duration-150 cursor-pointer"
        >
          <FaCopyright className="text-[#303C96] text-[100px] mr-auto ml-auto" />
          <p className="text-4xl text-[#303C96] text-center mt-2">
            C Programming
          </p>
        </div>
        <div
          id="skill7"
          className="p-[20px] border-2 border-[#7377AD] rounded-lg shadow-lg shadow-[#7377AD] hover:scale-105 duration-150 cursor-pointer"
        >
          <SiPhp className="text-[#7377AD] text-[100px] mr-auto ml-auto" />
          <p className="text-4xl text-[#7377AD] text-center mt-2">PHP</p>
        </div>
        <div
          id="skill8"
          className="p-[20px] border-2 border-[#A31545] rounded-lg shadow-lg shadow-[#A31545] hover:scale-105 duration-150 cursor-pointer"
        >
          <FaReact className="text-[#A31545] text-[100px] mr-auto ml-auto" />
          <p className="text-4xl text-[#A31545] text-center mt-2">React.JS</p>
        </div>
        <div
          id="skill9"
          className="p-[20px] border-2 border-[#8FC708] rounded-lg shadow-lg shadow-[#8FC708] hover:scale-105 duration-150 cursor-pointer"
        >
          <FaNodeJs className="text-[#8FC708] text-[100px] mr-auto ml-auto" />
          <p className="text-4xl text-[#8FC708] text-center mt-2">Node.JS</p>
        </div>
        <div
          id="skill10"
          className="p-[20px] border-2 border-[#085970] rounded-lg shadow-lg shadow-[#085970] hover:scale-105 duration-150 cursor-pointer"
        >
          <GrMysql className="text-[#085970] text-[100px] mr-auto ml-auto" />
          <p className="text-4xl text-[#085970] text-center mt-2">MySql</p>
        </div>
        <div
          id="skill11"
          className="p-[20px] border-2 border-[#08EE69] rounded-lg shadow-lg shadow-[#08EE69] hover:scale-105 duration-150 cursor-pointer"
        >
          <SiMongodb className="text-[#08EE69] text-[100px] mr-auto ml-auto" />
          <p className="text-4xl text-[#08EE69] text-center mt-2">mongoDB</p>
        </div>
      </div>
    </div>
  );
}

export default TechSkills;
