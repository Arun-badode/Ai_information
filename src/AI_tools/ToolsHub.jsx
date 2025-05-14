import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Review.css";
// import Img from '../Images/aivo.jpeg';

const toolsData = [
  {
    id: 1,
    name: "ChatGPT",
    icon: "Img",
    rating: 4.5,
    description:
      "An AI-based conversational agent that simulates human-like dialogue, useful for customer support.",
  },
  {
    id: 2,
    name: "DALL-E",
    icon: "/dalle-icon.png",
    rating: 5.0,
    description:
      "An AI tool that generates realistic images from textual descriptions, enabling creative visual content creation.",
  },
  {
    id: 3,
    name: "OpenAI Codex",
    icon: "/codex-icon.png",
    rating: 3.5,
    description:
      "A powerful AI that translates natural language into code, revolutionizing software development processes.",
  },
  {
    id: 4,
    name: "GPT-3",
    icon: "/gpt3-icon.png",
    rating: 4.2,
    description:
      "AI model for text generation, capable of writing code, articles, and even creative content.",
  },
  {
    id: 5,
    name: "Runway ML",
    icon: "/runwayml-icon.png",
    rating: 4.7,
    description:
      "A creative AI tool for video editing, deep learning, and real-time media manipulation.",
  },
  {
    id: 6,
    name: "Clarifai",
    icon: "/clarifai-icon.png",
    rating: 4.3,
    description:
      "AI for computer vision and NLP, helping businesses with image recognition and automation.",
  },
  {
    id: 7,
    name: "Artbreeder",
    icon: "/artbreeder-icon.png",
    rating: 4.8,
    description:
      "Generative AI that allows users to create art, including portraits, landscapes, and even album covers.",
  },
  {
    id: 8,
    name: "Hugging Face",
    icon: "/huggingface-icon.png",
    rating: 4.9,
    description:
      "A collaborative platform for NLP, providing pretrained models for text analysis and processing.",
  },
];

const ToolCard = ({ tool }) => (
  <Col xs={12} md={4} className="mb-4">
    <div className="tool-card1">
      <img src={tool.icon} alt={tool.name} className="tool-icon" />
      <h5>{tool.name}</h5>
      <div className="rating">
        {[...Array(5)].map((_, i) => (
          <span
            key={i}
            className={`star ${i < Math.floor(tool.rating) ? "filled" : ""}`}
          ></span>
        ))}
        <span>({tool.rating.toFixed(1)})</span>
      </div>
      <p className="description">{tool.description}</p>
    </div>
  </Col>
);

const ToolsHub = () => {
  const [scrollIndex, setScrollIndex] = useState(0);

  const nextSlide = () => {
    if (scrollIndex < toolsData.length - 3) {
      setScrollIndex(scrollIndex + 1);
    }
  };

  const prevSlide = () => {
    if (scrollIndex > 0) {
      setScrollIndex(scrollIndex - 1);
    }
  };

  return (
    <div className="bg-[#042b54]">
      {/* Review Heading */}
      <h2 className="text-center text-white mb-4">Review</h2>

      <Container className="mt-1">
        <div className="relative">
          {/* Tools Container for Scrolling */}
          <div
            className="tools-container"
            style={{
              display: "flex",
              overflowX: "scroll",
              gap: "1rem",
              scrollBehavior: "smooth",
              scrollbarWidth: "none", // Hide the scrollbar in Firefox
              WebkitOverflowScrolling: "touch", // For smooth scrolling on iOS devices
            }}
          >
            {toolsData.slice(scrollIndex, scrollIndex + 3).map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>

          {/* Left and Right Arrows at the Bottom of Cards */}
          <button
            onClick={prevSlide}
            className="transform -translate-x-1/2 text-white bg-gray-600 hover:bg-gray-700 rounded-full"
          >
            &lt;
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0  transform translate-x-1/2 text-white bg-gray-600 hover:bg-gray-700 rounded-full"
          >
            &gt;
          </button>
        </div>
      </Container>
    </div>
  );
};

export default ToolsHub;