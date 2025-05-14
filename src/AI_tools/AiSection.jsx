import React, { useState } from "react";

const AISection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center bg-black">
        <div className="container mx-auto text-center px-8 z-10">
          {/* Heading */}
          <h1 className="text-6xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            What we do
          </h1>

          {/* Subheading */}
          <h2 className="text-4xl font-semibold mb-4">isAI Tools.</h2>

          {/* Description Text */}
          <p className="text-lg font-light max-w-3xl mx-auto text-gray-400">
            Our platform offers cutting-edge AI tools designed to enhance your
            productivity, creativity, and efficiency. Discover the perfect AI
            solutions for your unique needs.
          </p>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://readdy.ai/api/search-image?query=abstract%20digital%20AI%20visualization%20with%20floating%203D%20geometric%20shapes%20and%20glowing%20particles%2C%20dark%20futuristic%20background%20with%20depth%20effect%2C%20modern%20tech%20concept%20with%20dynamic%20elements%2C%20professional%20design%20with%20subtle%20color%20accents&width=1440&height=800&seq=1&orientation=landscape"
            alt="AI Background"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>

      {/* Search Bar Section */}
      <div className="container mx-auto px-8 py-12 text-center z-10">
        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            placeholder="Search for AI tools..."
            className="w-full py-4 px-6 rounded-full bg-opacity-20 bg-white border-none text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-white"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="absolute right-3 top-1/2 transform -translate-y-1/2 !rounded-button cursor-pointer whitespace-nowrap">
            <i className="fas fa-search text-xl"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AISection;
