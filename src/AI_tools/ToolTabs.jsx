import React, { useState } from "react";
import { Row, Col, Card, Badge } from "react-bootstrap";
import { FiTrendingUp } from "react-icons/fi";
import { FaStar } from "react-icons/fa";
import "./ToolTabs.css";
import "bootstrap/dist/css/bootstrap.min.css";

const ToolTabs = () => {
  const [activeTab, setActiveTab] = useState("popular");

  const tools = {
    popular: [
      {
        name: "ChatGPT",
        icon: "https://i.postimg.cc/W1TK2JtC/Chat-GPT-Logo.jpg",
        desc: "Revolutionize interaction, creativity, and innovation with the leader in AI.",
        tags: ["#writing generators", "#ai chatbots", "#education"],
        votes: 5305,
      },
      {
        name: "Claude 3",
        icon: "https://i.postimg.cc/PqqRDsWM/Anthropics-Claude-3.jpg",
        desc: "Revolutionize workflows with AI-driven text, analytics, automation.",
        tags: ["#ai chatbots", "#marketing", "#customer support"],
        votes: 199,
      },
      {
        name: "Midjourney",
        icon: "https://i.postimg.cc/bJDV6xFD/maxresdefault-1.jpg",
        desc: "Unlock digital artistry: AI transforms text into stunning visuals.",
        tags: ["#text to image", "#image generators", "#design generators"],
        votes: 300,
      },
    ],
    recent: [
      {
        name: "Runway ML",
        icon: "/runwayml-icon.png",
        desc: "Create videos from text with cutting-edge generative AI models.",
        tags: ["#video generators", "#ai editing", "#creators"],
        votes: 120,
      },
      {
        name: "Notion AI",
        icon: "/notionai-icon.png",
        desc: "AI-powered writing assistant inside Notion for productivity and clarity.",
        tags: ["#ai writing", "#productivity", "#notetaking"],
        votes: 412,
      },
      {
        name: "Magician",
        icon: "/magician-icon.png",
        desc: "AI tool for Figma to generate icons, copy, and visual assets on the fly.",
        tags: ["#figma plugin", "#design", "#ui tools"],
        votes: 98,
      },
    ],
  };

  return (
    <div className="tool-tabs-container py-4 px-20">
      {/* Icon Tab Switch */}
      <div className="icon-tab-bar d-flex justify-content-center">
        <div
          className={`icon-tab-item ${activeTab === "popular" ? "active" : ""}`}
          onClick={() => setActiveTab("popular")}
        >
          <FiTrendingUp className="me-2 icon" />
          Most Hyped AI Tools
        </div>
        <div
          className={`icon-tab-item ${activeTab === "recent" ? "active" : ""}`}
          onClick={() => setActiveTab("recent")}
        >
          <FaStar className="me-2 icon" />
          Most Useable AI Tools
        </div>
      </div>

      {/* Tab Content */}
      <div className="fade-in mt-5">
        <Row className="flex-nowrap overflow-auto">
          {tools[activeTab].length > 0 ? (
            tools[activeTab].map((tool, idx) => (
                            <Col md={4} key={idx} className="mb-3 flex-shrink-0">
                <Card className="tool-card bg-gradient-to-r from-purple-500 to-indigo-700 p-4 rounded-lg shadow-lg hover:bg-indigo-600 transition duration-300">
                  <img
                    src={tool.icon}
                    alt={tool.name}
                    className="w-full h-32 object-cover rounded-lg mb-4"
                  />
                  <div className="text-center">
                    <h5 className="text-xl font-semibold text-white mb-2">
                      {tool.name}
                    </h5>
                    <p className="text-sm text-[#E2E8F0] mb-3">{tool.desc}</p>
                    <div className="flex justify-center flex-wrap gap-2">
                      {tool.tags.map((tag, i) => (
                        <Badge
                          key={i}
                          className="bg-dark text-warning px-2 py-1 rounded"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="mt-3 text-center text-[#E2E8F0]" style={{display:"flex",justifyContent:"space-around"}}>
                    <div className="text-[#A0AEC0]">
                      <i className="bi bi-bookmark"></i> {tool.votes}
                    </div>
                    <div className="text-[#38BDF8] fw-bold ">
                      <i className="bi bi-arrow-up"></i> {tool.votes}
                    </div>
                  </div>
                </Card>
              </Col>
            ))
          ) : (
            <Col>
              <p className="text-center text-white-50">
                No tools available yet.
              </p>
            </Col>
          )}
        </Row>
      </div>
    </div>
  );
};

export default ToolTabs;
