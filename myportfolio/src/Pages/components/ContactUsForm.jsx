import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ContactUsForm() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_kz4j9oe", "template_wxhzg0s", form.current, {
        publicKey: "_JeCwATc5Kec3I3dv",
      })
      .then(
        () => {
          toast("Thank you for sending mail.");
        },
        (error) => {
          toast("Something went wrong, Failed to send the mail.");
          console.log(error);
        }
      );
  };

  return (
    <div className="md:pr-5">
      <ToastContainer />
      <p className="text-white text-2xl md:text-4xl text-center md:text-left">
        CONTACT US!
      </p>
      <p className="text-white mt-2 text-[14px] md:text-[20px] font-semibold md:font-thin mb-5">
        I can't solve your problem if you don't tell me about it.
      </p>
      <form ref={form} onSubmit={sendEmail} className="md:mt-10">
        <input
          type="text"
          name="from_name"
          id="from_name"
          placeholder="Enter your name"
          className="p-3 rounded-lg w-[98%] text-white font-semibold text-[20px] bg-[#404040]"
        />
        <input
          type="email"
          name="from_email"
          id="email"
          placeholder="Enter your email address"
          className="p-3 rounded-lg w-[98%]  mt-5 text-white font-semibold text-[20px] bg-[#404040]"
        />
        <input
          type="number"
          name="from_phone"
          id="from_phone"
          placeholder="Enter your phone number"
          className="p-3 rounded-lg w-[98%] mt-5 text-white font-semibold text-[20px] bg-[#404040]"
        />
        <textarea
          name="message"
          id="message"
          placeholder="Write your message ..."
          className="p-3 rounded-lg w-[98%] mt-5 text-white font-semibold text-[20px] bg-[#404040]"
          resize="none"
          rows="5"
        ></textarea>{" "}
        <br />
        <button
          type="submit"
          className="text-white bg-red-600 mt-4 p-3 rounded-lg w-[98%] md:w-[80%] font-bold hover:bg-red-800"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default ContactUsForm;
