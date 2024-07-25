import React from "react";
import AnimatedText from "./components/NameAnim";
import ProfileAnim from "./components/ProfileAnim";
import SocialContact from "./components/SocialContact";

function Home() {
  return (
    <div className={`bg-black min-h-screen pt-10 md:pt-20 pb-5 md:pb-0`}>
      <div className="w-11/12 mr-auto ml-auto md:pt-32 grid grid-cols-1 md:grid-cols-3">
        <div className="col-span-2">
          <p className="font-bold text-2xl text-center md:text-left text-red-700 mb-2">
            HELLO!
          </p>
          <AnimatedText
            textToAnimate="Sandip Kumar Das."
            animationSpeed={200}
          />
          <pre className="text-white font-Roboto text-[17px] tracking-wide mt-5 mb-10 hidden md:block">
            As a passionate web developer at Pravaah Consulting,
            <br />
            I’ve spent the last six months weaving digital magic with React.js,{" "}
            <br />
            crafting pixel-perfect interfaces using Tailwind CSS,
            <br />
            and even sprinkling a touch of Velo (Wix) wizardry.
          </pre>
          <div className="block md:hidden mt-10">
            <ProfileAnim />
          </div>
          <p className="text-white text-center font-Roboto text-[17px] tracking-wide mt-5 mb-10 block md:hidden">
            As a passionate web developer at Pravaah Consulting, I’ve spent the
            last six months weaving digital magic with React.js, crafting
            pixel-perfect interfaces using Tailwind CSS, and even sprinkling a
            touch of Velo (Wix) wizardry.
          </p>
          <p className="text-red-700 text-center md:text-left font-semibold">
            FIND ME ON
          </p>
          <SocialContact />
        </div>
        <div className="col-span-1 hidden md:block">
          <ProfileAnim />
        </div>
      </div>
    </div>
  );
}

export default Home;
