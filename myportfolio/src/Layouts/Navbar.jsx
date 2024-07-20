import React from "react";
import "../Layouts/navStyle.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-black fixed w-full py-4">
      <div className="w-11/12 mr-auto ml-auto grid grid-cols-6">
        <div className="md:flex items-center">
          <span className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-red-500 text-transparent bg-clip-text">
            SANDIP
          </span>
        </div>
        <div className="md:col-span-5 md:flex flex-row items-center justify-end space-x-6 md:py-2 px-2">
          <NavLink
            to="/myportfolio/home"
            className="py-2 px-6 rounded-2xl font-semibold hover:bg-gradient-to-r from-purple-500 to-red-500 text-white"
          >
            Home
          </NavLink>
          <NavLink
            to="/myportfolio/about"
            className="py-2 px-6 rounded-2xl font-semibold hover:bg-gradient-to-r from-purple-500 to-red-500 text-white"
          >
            About
          </NavLink>
          <NavLink
            to="/myportfolio/contact"
            className="py-2 px-6 rounded-2xl font-semibold hover:bg-gradient-to-r from-purple-500 to-red-500 text-white"
          >
            Contact
          </NavLink>
          <NavLink
            to="/myportfolio/resume"
            className="py-2 px-6 rounded-2xl font-semibold hover:bg-gradient-to-r from-purple-500 to-red-500 text-white"
          >
            Resume
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
