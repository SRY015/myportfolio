import React from "react";
import CV from "../assets/Images/CV!.png";
import CV2 from "../assets/Images/CV.pdf";

function Resume() {
  return (
    <div className="bg-black min-h-screen pt-10  pb-5 md:pb-0">
      <img
        src={CV}
        alt=""
        className="md:w-[40%] md:h-[800px] ml-auto mr-auto p-2 md:p-0"
      />
      <p className="text-center mt-5 pb-5">
        <a href={CV2} className="text-white bg-red-600 p-2 rounded-md">
          Download CV
        </a>
      </p>
    </div>
  );
}

export default Resume;
