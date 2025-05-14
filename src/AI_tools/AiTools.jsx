import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const AiTools = () => {
  const [tools, setTools] = useState([
    {
      id: 1,
      name: "NeuralWrite Pro",
      description: "Advanced AI writing assistant with context understanding",
      category: "Writing",
      price: "Paid",
      useCase: "Content Creation",
      rating: 4.8,
      popularity: 95,
      image:
        "https://readdy.ai/api/search-image?query=3D%20rendered%20futuristic%20AI%20writing%20interface%20floating%20in%20space%20with%20holographic%20text%20elements%2C%20dark%20background%20with%20blue%20accent%20lighting%2C%20professional%20UI%20design%20with%20depth%20and%20dimension%2C%20modern%20minimalist%20aesthetic&width=400&height=300&seq=16&orientation=landscape",
    },
    {
      id: 2,
      name: "PixelMind",
      description: "Revolutionary image generation and editing platform",
      category: "Image",
      price: "Free",
      useCase: "Design",
      rating: 4.9,
      popularity: 98,
      image:
        "https://readdy.ai/api/search-image?query=3D%20rendered%20AI%20image%20creation%20workspace%20with%20floating%20canvas%20and%20artistic%20elements%2C%20dark%20space%20environment%20with%20purple%20accent%20lighting%2C%20futuristic%20interface%20with%20depth%20and%20dimension&width=400&height=300&seq=17&orientation=landscape",
    },
    {
      id: 3,
      name: "DataSense AI",
      description: "Intelligent data analysis and visualization tool",
      category: "Analytics",
      price: "Paid",
      useCase: "Business",
      rating: 4.7,
      popularity: 92,
      image:
        "https://readdy.ai/api/search-image?query=3D%20rendered%20data%20visualization%20dashboard%20floating%20in%20dark%20space%20with%20glowing%20charts%20and%20graphs%2C%20modern%20interface%20with%20green%20accent%20lighting%2C%20futuristic%20analytics%20workspace&width=400&height=300&seq=18&orientation=landscape",
    },
    {
      id: 4,
      name: "VoiceGenius",
      description: "Advanced voice synthesis and processing platform",
      category: "Audio",
      price: "Free",
      useCase: "Media",
      rating: 4.6,
      popularity: 88,
      image:
        "https://readdy.ai/api/search-image?query=3D%20rendered%20audio%20processing%20interface%20with%20floating%20waveforms%20and%20sound%20elements%2C%20dark%20space%20environment%20with%20orange%20accent%20lighting%2C%20futuristic%20sound%20studio%20concept&width=400&height=300&seq=19&orientation=landscape",
    },
    {
      id: 5,
      name: "CodeCraft AI",
      description: "Intelligent code generation and optimization tool",
      category: "Development",
      price: "Paid",
      useCase: "Programming",
      rating: 4.8,
      popularity: 94,
      image:
        "https://readdy.ai/api/search-image?query=3D%20rendered%20coding%20interface%20with%20floating%20code%20blocks%20and%20development%20tools%2C%20dark%20space%20background%20with%20cyan%20accent%20lighting%2C%20futuristic%20programming%20workspace&width=400&height=300&seq=20&orientation=landscape",
    },
    {
      id: 6,
      name: "MarketMind",
      description: "AI-powered marketing strategy and analytics platform",
      category: "Marketing",
      price: "Paid",
      useCase: "Business",
      rating: 4.7,
      popularity: 91,
      image:
        "https://readdy.ai/api/search-image?query=3D%20rendered%20marketing%20analytics%20dashboard%20with%20floating%20charts%20and%20campaign%20elements%2C%20dark%20space%20environment%20with%20red%20accent%20lighting%2C%20futuristic%20business%20interface&width=400&height=300&seq=21&orientation=landscape",
    },
  ]);

  const [filteredTools, setFilteredTools] = useState(tools);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [selectedUseCase, setSelectedUseCase] = useState("All");
  const [sortBy, setSortBy] = useState("popularity");
  const [currentPage, setCurrentPage] = useState(1);
  const toolsPerPage = 6;

  const categories = [
    "All",
    "Writing",
    "Image",
    "Analytics",
    "Audio",
    "Development",
    "Marketing",
  ];
  const prices = ["All", "Free", "Paid"];
  const useCases = [
    "All",
    "Content Creation",
    "Design",
    "Business",
    "Media",
    "Programming",
  ];

  useEffect(() => {
    let filtered = [...tools];

    if (selectedCategory !== "All") {
      filtered = filtered.filter((tool) => tool.category === selectedCategory);
    }
    if (selectedPrice !== "All") {
      filtered = filtered.filter((tool) => tool.price === selectedPrice);
    }
    if (selectedUseCase !== "All") {
      filtered = filtered.filter((tool) => tool.useCase === selectedUseCase);
    }

    if (sortBy === "popularity") {
      filtered.sort((a, b) => b.popularity - a.popularity);
    } else if (sortBy === "rating") {
      filtered.sort((a, b) => b.rating - a.rating);
    }

    setFilteredTools(filtered);
    setCurrentPage(1);
  }, [selectedCategory, selectedPrice, selectedUseCase, sortBy]);

  const indexOfLastTool = currentPage * toolsPerPage;
  const indexOfFirstTool = indexOfLastTool - toolsPerPage;
  const currentTools = filteredTools.slice(indexOfFirstTool, indexOfLastTool);
  const totalPages = Math.ceil(filteredTools.length / toolsPerPage);

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}

      {/* Search Bar */}

      <div
        className="search-container container"
        style={{
          width: "80%",
          maxWidth: "100%",
          display: "flex",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <input
          type="text"
          placeholder="Search AI tools..."
          className="search-bar"
          style={{
            width: "100%",
            maxWidth: "100%",
            padding: "10px",
            fontSize: "16px",
            borderRadius: "25px",
            border: "1px solid #ccc",
            outline: "none",
            backgroundColor: "#1e1e2f",
            color: "white",
            transition: "all 0.3s ease",
          }}
        />
        <button
          className="search-button"
          style={{
            background: "none",
            border: "none",
            padding: "10px",
            marginLeft: "-40px",
            cursor: "pointer",
          }}
        >
          <i
            className="fa fa-search"
            style={{ color: "white", fontSize: "18px" }}
          ></i>
        </button>
              
      </div>

      {/* Filters Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {/* Category Filter */}
          <div className="relative">
            <select
              className="w-full bg-gray-800 text-white rounded-lg py-3 px-4 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <i className="fas fa-chevron-down text-gray-400"></i>
            </div>
          </div>

          {/* Price Filter */}
          <div className="relative">
            <select
              className="w-full bg-gray-800 text-white rounded-lg py-3 px-4 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedPrice}
              onChange={(e) => setSelectedPrice(e.target.value)}
            >
              {prices.map((price) => (
                <option key={price} value={price}>
                  {price}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <i className="fas fa-chevron-down text-gray-400"></i>
            </div>
          </div>

          {/* Use Case Filter */}
          <div className="relative">
            <select
              className="w-full bg-gray-800 text-white rounded-lg py-3 px-4 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={selectedUseCase}
              onChange={(e) => setSelectedUseCase(e.target.value)}
            >
              {useCases.map((useCase) => (
                <option key={useCase} value={useCase}>
                  {useCase}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <i className="fas fa-chevron-down text-gray-400"></i>
            </div>
          </div>

          {/* Sort By */}
          <div className="relative">
            <select
              className="w-full bg-gray-800 text-white rounded-lg py-3 px-4 appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="popularity">Sort by Popularity</option>
              <option value="rating">Sort by Rating</option>
            </select>
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <i className="fas fa-chevron-down text-gray-400"></i>
            </div>
          </div>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentTools.map((tool) => (
            <div
              key={tool.id}
              className="bg-gray-800 rounded-xl overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <div className="relative h-48">
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                  {tool.price}
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-gray-700 text-sm px-3 py-1 rounded-full">
                    {tool.category}
                  </span>
                  <div className="flex items-center">
                    <i className="fas fa-star text-yellow-400 mr-1"></i>
                    <span>{tool.rating}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-400">
                    <i className="fas fa-users mr-2"></i>
                    {tool.popularity}% popularity
                  </span>
                 <Link to="/ImageMindAI">
                    <button className="bg-[#1E3D59] hover:bg-blue-700 text-white px-4 py-2 rounded-full transition-colors !rounded-button cursor-pointer whitespace-nowrap">
                      View More
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-12 space-x-2">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-full bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed !rounded-button cursor-pointer whitespace-nowrap"
            >
              <i className="fas fa-chevron-left"></i>
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`px-4 py-2 rounded-full ${
                  currentPage === page
                    ? "bg-blue-600 text-white"
                    : "bg-gray-800 text-white hover:bg-gray-700"
                } !rounded-button cursor-pointer whitespace-nowrap`}
              >
                {page}
              </button>
            ))}
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-full bg-gray-800 text-white disabled:opacity-50 disabled:cursor-not-allowed !rounded-button cursor-pointer whitespace-nowrap"
            >
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AiTools;
