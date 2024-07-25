import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddCall, MdEmail } from "react-icons/md";
import SocialContact from "./components/SocialContact";
import ContactUsForm from "./components/ContactUsForm";

function Contact() {
  return (
    <div className="bg-black min-h-screen md:pt-20 pb-5 md:pb-0">
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-3 mr-auto ml-auto py-10">
        <div className="md:border-r-2 order-2 md:order-1">
          <ContactUsForm />
        </div>
        <div className="p-5 order-3 md:order-2">
          <p className="md:mt-24 flex">
            <FaLocationDot className="inline-block text-3xl text-yellow-400 mr-2 mt-2" />
            <span className="text-white text-xl">
              Kultikri, Sankrail, Jhargram, West Bengal, <br /> India - 721135.
            </span>
          </p>
          <p className="mt-5 flex">
            <MdAddCall className="inline-block text-3xl text-green-400 mr-2" />
            <span className="text-white text-xl">+91 7477869211</span>
          </p>
          <p className="mt-5 flex">
            <MdEmail className="inline-block text-3xl text-red-600 mr-2" />
            <span className="text-white text-xl">
              sandipkumar9das@gmail.com
            </span>
          </p>
          <SocialContact />
        </div>
        <div className="order-1 md:order-3">
          <img
            src="https://media0.giphy.com/media/WTchgPv5tD5TDk6jXr/giphy.gif?cid=6c09b952pvxf19stjphdtro7nnqbjlhbx1ecjbw3e6fus4z8&ep=v1_gifs_search&rid=giphy.gif&ct=g"
            alt=""
            className="w-full -mt-10"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
