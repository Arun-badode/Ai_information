import React from "react";
import service1 from "../Images/service1.jpg";

const ServiceCard = ({ imgSrc, title, description }) => {
  return (
    <div className="bg-gradient-to-r from-sky-400 to-blue-1000 rounded-lg shadow-xl p-6 text-center">
      <img
        src={imgSrc}
        alt={title}
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-2xl text-[#38BDF8] font-bold mb-2">{title}</h3>
      <p className="text-[#E2E8F0]">{description}</p>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-20 px-6 bg-[#1A202C]">
      <h2 className="text-center text-[#38BDF8] text-4xl font-bold mb-12">
        Top 10 AI Tools
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        <ServiceCard
          imgSrc={service1}
          title="ChatGPT"
          description="Revolutionary conversational AI for human-like interactions and creativity."
        />
        <ServiceCard
          imgSrc={service1}
          title="DALL·E"
          description="AI-powered image generation tool for creating custom visuals from text prompts."
        />
        <ServiceCard
          imgSrc={service1}
          title="Jasper"
          description="AI writing assistant for content creation and marketing automation."
        />
        <ServiceCard
          imgSrc={service1}
          title="Lumen5"
          description="AI-based video creation platform that converts text into engaging videos."
        />
        <ServiceCard
          imgSrc={service1}
          title="Grammarly"
          description="AI writing tool for grammar and style improvements in written content."
        />
        <ServiceCard
          imgSrc={service1}
          title="Copy.ai"
          description="AI-powered copywriting assistant for generating text and marketing content."
        />
        <ServiceCard
          imgSrc={service1}
          title="CopySmith"
          description="AI-based tool for content generation, writing copy, and SEO optimization."
        />
        <ServiceCard
          imgSrc={service1}
          title="Surfer SEO"
          description="AI-powered SEO tool for improving content and boosting website rankings."
        />
      </div>
    </section>
  );
};

export default Services;
