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
      <a href="https://www.facebook.com/sandip1.das">
        <FaFacebookSquare className="text-[50px] text-blue-600 hover:scale-125 duration-300" />
      </a>
      <a href="">
        <FaWhatsappSquare className="text-[50px] text-green-600 hover:scale-125 duration-300" />
      </a>
      <a href="https://www.instagram.com/sandipkumar9das/">
        <FaInstagramSquare className="text-[50px] text-[#D64264] hover:scale-125 duration-300" />
      </a>
      <a href="https://www.linkedin.com/in/sandip-kumar-das-6b7bb0237">
        <FaLinkedin className="text-[50px] text-blue-600 hover:scale-125 duration-300" />
      </a>
      <a href="https://github.com/SRY015">
        <FaGithubSquare className="text-[50px] text-gray-600 hover:scale-125 duration-300" />
      </a>
    </div>
  );
}

export default SocialContact;
