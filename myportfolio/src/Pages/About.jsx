import React from "react";
import { GiTennisRacket } from "react-icons/gi";
import { RiRidingFill } from "react-icons/ri";
import { MdQueueMusic } from "react-icons/md";

function About() {
  return (
    <div className="bg-black min-h-screen pt-20">
      <p className="text-4xl text-white text-center font-bold mt-20">
        Know Who <span className="text-red-600 font-bold">I'M</span>
      </p>
      <p className="text-center text-2xl text-white mt-10">
        Hi Everyone, I am{" "}
        <span className="text-purple-600 font-semibold">Sandip Kumar Das</span>{" "}
        from{" "}
        <span className="text-purple-600 font-semibold">
          Jhargram, West Bengal, India.
        </span>
      </p>
      <p className="text-center text-2xl text-white">
        I am working as a full stack web developer at{" "}
        <span className="text-purple-600 font-semibold">
          Pravaah Consulting.
        </span>
      </p>
      <p className="text-center text-1xl text-white mt-4">
        I started my coding adventure during my BCA days (2018–2021). Think of
        it as my coding origin story. Then, during my MCA stint (2021–2023), I
        turbocharged my skills.
      </p>
      <p className="text-center text-1xl text-white mt-2">
        Before landing my current gig, I was an intern right here(Pravaah
        Consulting). Imagine it as my magical apprenticeship. I learned spells
        and brewed potions. It was like Hogwarts for developers.
      </p>
      <p className="text-center text-1xl text-white mt-2">
        Now, as a full-time wizard—I mean, developer—I’ve spent half a year
        crafting cool stuff. Databases? Tamed. Animations? Choreographed. Bugs?
        Squashed like tiny digital bugs.
      </p>
      <p className="text-center text-1xl text-white mt-2">
        My mission is to build bridges between users and tech by creating
        digital masterpieces—like websites that feel like cozy cafes or apps
        that dance when you click.
      </p>

      <p className="text-center text-3xl text-white mt-10">
        Apart from coding, some other activities that I love to do!
      </p>
      <ul className="text-white mr-auto ml-auto mt-5 w-48 text-center">
        <li>
          Playing Batminton{" "}
          <GiTennisRacket className="text-white inline-block text-2xl ml-2" />
        </li>
        <li>
          Bike Riding{" "}
          <RiRidingFill className="text-white inline-block text-2xl ml-2" />
        </li>
        <li>
          Listining to Music{" "}
          <MdQueueMusic className="text-white inline-block text-2xl ml-2" />
        </li>
      </ul>
      <img
        src="https://lns9777.github.io/Portfolio/iMAGES/Aboutimg.png"
        alt="loading..."
        className="mt-5 h-[400px] mr-auto ml-auto"
      />
    </div>
  );
}

export default About;
