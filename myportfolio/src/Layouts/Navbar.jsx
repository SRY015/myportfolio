import React, { useState } from "react";
import "../Layouts/navStyle.css";
import { NavLink } from "react-router-dom";
import { FaTimes, FaBars } from "react-icons/fa";

function Navbar() {
  const [toggle, setToggle] = useState(false);
  const closeNav = () => {
    setToggle(false);
  };
  return (
    <div className="bg-black sticky md:fixed w-full py-4">
      <div className="w-11/12 mr-auto ml-auto grid phone:grid-cols-1 md:grid-cols-6">
        <div className="flex items-center">
          <span className="text-4xl font-bold bg-gradient-to-r from-purple-500 to-red-500 text-transparent bg-clip-text">
            SANDIP
          </span>
          <button
            onClick={() => {
              setToggle(!toggle);
            }}
            className="lg:hidden md:hidden text-white inline-block ml-auto"
          >
            {toggle ? (
              <FaTimes className="text-yellow-500 text-2xl mr-4" />
            ) : (
              <FaBars className="text-yellow-500 text-2xl mr-4" />
            )}
          </button>
        </div>
        <div
          className={`flex items-center md:col-span-5 md:justify-end md:space-x-6 md:py-2 md:px-2 ${
            toggle ? "flex-col" : "hidden"
          } md:flex flex-row`}
        >
          <NavLink
            to="/myportfolio/"
            onClick={closeNav}
            className="py-2 px-6 rounded-2xl font-semibold hover:bg-gradient-to-r from-purple-500 to-red-500 text-white"
          >
            Home
          </NavLink>
          <NavLink
            to="/myportfolio/about"
            onClick={closeNav}
            className="py-2 px-6 rounded-2xl font-semibold hover:bg-gradient-to-r from-purple-500 to-red-500 text-white"
          >
            About
          </NavLink>
          <NavLink
            to="/myportfolio/contact"
            onClick={closeNav}
            className="py-2 px-6 rounded-2xl font-semibold hover:bg-gradient-to-r from-purple-500 to-red-500 text-white"
          >
            Contact
          </NavLink>
          <NavLink
            to="/myportfolio/resume"
            onClick={closeNav}
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
