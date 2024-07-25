import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsappSquare,
  FaGithubSquare,
} from "react-icons/fa";

function SocialContact() {
  return (
    <div className="mt-5 flex space-x-3 justify-center md:justify-start">
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
  );
}

export default SocialContact;
