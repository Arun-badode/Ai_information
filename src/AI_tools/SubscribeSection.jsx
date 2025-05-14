import React from "react";
import Subscribe from "../Images/subscribe.jpg";

const SubscribeSection = () => {
  return (
    <section
      className="relative py-24 px-6 bg-cover bg-center"
      style={{
        backgroundImage: `url(${Subscribe})`, // Apply the background image correctly
      }}
    >
      <div className="absolute inset-0 bg-[#042b54] opacity-50"></div>{" "}
      {/* Dark overlay for better readability */}
      <div className="relative z-10 text-center">
        <h2 className="text-white text-5xl font-bold mb-4">
          YOUR IDEAS
          <br />
          OUR AI TOOLS
        </h2>
        <p className="text-white text-lg mb-8">Join our AI Tools Community</p>

        
        <div className="flex justify-center items-center space-x-4 bg-transparent">
          <input
            type="email"
            placeholder="Your email address"
            className="px-6 py-3 w-64 rounded-full text-white bg-[#84bcf8] bg-opacity-50 border-none "
          />
          <button className="bg-white text-black px-8 py-3 rounded-full font-semibold border-2 border-white hover:bg-white hover:text-black transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default SubscribeSection;