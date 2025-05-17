import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import GPT3 from "../../public/assets/Img/Trending AI tools/5.png";
import Financial from "../../public/assets/Img/Trending AI tools/1.png";
import GoogleAnalytics from "../../public/assets/Img/Trending AI tools/2.png";
import HubSpot from "../../public/assets/Img/Trending AI tools/3.png";
import DALL from "../../public/assets/Img/Trending AI tools/4.png";



const TrendingTools = () => {
  const categories = [
    "Marketing",
    "Productivity",
    "Design",
    "Video",
    "Research",
    "Text-To-Image",
    "Design Generators",
    "Email Assistant",
  ];

  const allTools = {
    Marketing: [
      {
        name: "OpenAI GPT-4",
        description: "Next-gen conversational AI for businesses.",
        image: GPT3,
        rating: 4.8,
      },
      {
        name: "AI Financial Tech",
        description: "AI for automating financial services.",
        image: Financial,

        rating: 4.7,
      },
      {
        name: "Google Analytics AI",
        description: "AI-enhanced web analytics for business growth.",
        image: GoogleAnalytics,
        rating: 4.6,
      },
      {
        name: "HubSpot AI",
        description: "AI-powered CRM for smarter marketing.",
        image: HubSpot,
        rating: 4.8,
      },
      {
        name: "AI Financial Tech",
        description: "AI for automating financial services.",
        image: Financial,

        rating: 4.7,
      },
      {
        name: "HubSpot AI",
        description: "AI-powered CRM for smarter marketing.",
        image: HubSpot,
        rating: 4.8,
      },
    ],
    Productivity: [
      {
        name: "DALL-E 2",
        description: "AI tool for creating stunning images from text prompts.",
        image: DALL,
        rating: 4.9,
      },
      {
        name: "GPT-3",
        description: "AI-powered text generation tool for content creation.",
        image: "https://via.placeholder.com/150",
        rating: 4.7,
      },
      {
        name: "Notion AI",
        description: "AI to help with note-taking and knowledge management.",
        image: "https://via.placeholder.com/150",
        rating: 4.8,
      },
    ],
    Design: [
      {
        name: "TensorFlow",
        description: "Open-source AI framework for building ML models.",
        image: "https://via.placeholder.com/150",
        rating: 4.5,
      },
      {
        name: "BERT",
        description:
          "Transformers-based AI for natural language understanding.",
        image: "https://via.placeholder.com/150",
        rating: 4.6,
      },
      {
        name: "Runway ML",
        description: "AI for designers to create AI-based visual content.",
        image: "https://via.placeholder.com/150",
        rating: 4.7,
      },
    ],
    Video: [
      {
        name: "Deepfake",
        description: "AI for creating hyper-realistic video manipulation.",
        image: "https://via.placeholder.com/150",
        rating: 4.3,
      },
      {
        name: "Synthesia",
        description: "AI tool for generating synthetic video content.",
        image: "https://via.placeholder.com/150",
        rating: 4.4,
      },
    ],
    Research: [
      {
        name: "Scholarcy AI",
        description: "AI-based research summarizer.",
        image: "https://via.placeholder.com/150",
        rating: 4.6,
      },
      {
        name: "Semantic Scholar",
        description: "AI-powered academic search engine.",
        image: "https://via.placeholder.com/150",
        rating: 4.7,
      },
    ],
    "Text-To-Image": [
      {
        name: "Artbreeder",
        description: "AI tool for generating art and images from text.",
        image: "https://via.placeholder.com/150",
        rating: 4.9,
      },
      {
        name: "Craiyon",
        description: "AI-based tool to generate images from text prompts.",
        image: "https://via.placeholder.com/150",
        rating: 4.5,
      },
    ],
    "Design Generators": [
      {
        name: "Canva AI",
        description: "AI-powered tool for designing social media graphics.",
        image: "https://via.placeholder.com/150",
        rating: 4.8,
      },
      {
        name: "Logojoy",
        description: "AI logo generator for your brand identity.",
        image: "https://via.placeholder.com/150",
        rating: 4.7,
      },
    ],
    "Email Assistant": [
      {
        name: "Mailchimp AI",
        description: "AI for email marketing campaigns.",
        image: "https://via.placeholder.com/150",
        rating: 4.6,
      },
      {
        name: "Grammarly",
        description: "AI-based writing assistant for email drafting.",
        image: "https://via.placeholder.com/150",
        rating: 4.9,
      },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState("Marketing");
  const [tools, setTools] = useState(allTools[selectedCategory]);
  const [scrollIndex, setScrollIndex] = useState(0);

  const nextSlide = () => {
    if (scrollIndex < tools.length - 4) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  const prevSlide = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setTools(allTools[category]);
    setScrollIndex(0); // Reset scroll to the first set of tools
  };

  return (
    <div className="bg-[#1A202C] text-white py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-8">Trending AI Tools</h2>

        {/* Categories with horizontal scroll */}
        <div className="flex justify-center items-center space-x-4 mb-8 overflow-x-auto px-4">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => handleCategoryClick(category)}
              className={`${
                selectedCategory === category
                  ? "bg-white text-gray-900"
                  : "bg-gray-700 text-white"
              } py-1 sm:py-2 px-3 sm:px-4 rounded-full hover:bg-gradient-to-r from-sky-400 to-blue-1000 hover:text-white transition duration-300 whitespace-nowrap`}
            >
              {category}
            </button>
          ))}
        </div>

        <p className="text-lg mb-12">
          Explore our editorial favorites and popular AI tools in these trending
          categories.
        </p>

        {/* Navigation Arrows */}
        <div className="flex justify-between mb-6 px-4 max-w-xs mx-auto">
          <button
            onClick={prevSlide}
            className="bg-gradient-to-r from-sky-400 to-blue-1000 p-3 rounded-full text-white hover:bg-indigo-500"
            aria-label="Previous"
          >
            <FaArrowLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="bg-gradient-to-r from-sky-400 to-blue-1000 p-3 rounded-full text-white hover:bg-indigo-500"
            aria-label="Next"
          >
            <FaArrowRight size={20} />
          </button>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
          {tools.slice(scrollIndex, scrollIndex + 4).map((tool, index) => (
            <div
              key={index}
              className="bg-gradient-to-r from-sky-400 to-blue-1000 p-6 rounded-lg shadow-lg flex flex-col items-center hover:bg-indigo-600 transition duration-300"
            >
              <img
                src={tool.image}
                alt={tool.name}
                className="w-full h-24 sm:h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
              <p className="text-sm mb-4">{tool.description}</p>
              <span className="text-yellow-400">{`⭐ ${tool.rating}`}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrendingTools;
