import React from "react";

function Contact() {
  return (
    <div className="bg-black min-h-screen md:pt-20 pb-5 md:pb-0">
      <div className="w-11/12 grid grid-cols-1 md:grid-cols-2 mr-auto ml-auto py-10">
        <div>
          <p className="text-white text-2xl md:text-4xl text-center md:text-left">
            CONTACT US!
          </p>
          <p className="text-white mt-2 md:text-[20px] font-thin">
            I can't solve your problem if you don't tell me about it.
          </p>
          <form className="md:mt-10">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              className="p-3 rounded-lg w-[98%] md:w-[80%]"
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              className="p-3 rounded-lg w-[98%] md:w-[80%] mt-5"
            />
            <input
              type="number"
              name="phone"
              id="phone"
              placeholder="Enter your phone number"
              className="p-3 rounded-lg w-[98%] md:w-[80%] mt-5"
            />
            <textarea
              name="message"
              id="message"
              placeholder="Write your message"
              className="p-3 rounded-lg w-[98%] md:w-[80%] mt-5"
              resize="none"
              rows="5"
            ></textarea>{" "}
            <br />
            <button
              type="submit"
              className="text-white bg-red-600 mt-4 p-3 rounded-lg w-[98%] md:w-[80%] font-bold hover:bg-red-800"
            >
              Send
            </button>
          </form>
        </div>
        <div></div>
      </div>
    </div>
  );
}

export default Contact;
