import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const tools = [
  {
    name: "ChatGPT",
    category: "Language Model",
    description:
      "Advanced AI language model for natural conversations and content generation.",
    rating: 4.8,
    reviews: 15420,
    price: "Free",
  },
  {
    name: "Jasper AI",
    category: "Content Creation",
    description:
      "AI writing assistant specialized in marketing and content creation.",
    rating: 4.6,
    reviews: 6750,
    price: "$29/month",
  },
  {
    name: "Copy.ai",
    category: "Content Creation",
    description:
      "AI-powered copywriting tool for marketing and business content.",
    rating: 4.5,
    reviews: 6320,
    price: "Free",
  },
  {
    name: "Grammarly",
    category: "Writing Assistant",
    description:
      "AI writing assistant for grammar checking and writing enhancement.",
    rating: 4.7,
    reviews: 25600,
    price: "Free",
  },
  {
    name: "Notion AI",
    category: "Productivity",
    description:
      "AI-powered workspace that helps you write, brainstorm and analyze.",
    rating: 4.6,
    reviews: 12400,
    price: "$8/month",
  },
  {
    name: "Anthropic Claude",
    category: "Language Model",
    description:
      "Advanced AI assistant with strong analytical and writing capabilities.",
    rating: 4.7,
    reviews: 9800,
    price: "Free",
  },
  {
    name: "Midjourney",
    category: "Image Generation",
    description:
      "AI-powered image generation tool for creating stunning artworks.",
    rating: 4.8,
    reviews: 8930,
    price: "Free",
  },
  {
    name: "Claude",
    category: "Language Model",
    description:
      "Advanced AI assistant focusing on analysis and long-form content.",
    rating: 4.3,
    reviews: 5280,
    price: "$19/month",
  },
];

const ToolsComparison = () => {
  const [selectedTools, setSelectedTools] = useState([]);

  const handleSelectTool = (tool) => {
    setSelectedTools((prevSelected) => {
      if (prevSelected.includes(tool)) {
        return prevSelected.filter((t) => t !== tool);
      } else {
        return [...prevSelected, tool];
      }
    });
  };

  return (
    <Container fluid className="p-5" style={{ backgroundColor: "#121212" }}>
      <div
        className="row mb-4 p-5 "
        style={{
          background: "linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%)",
        }}
      >
        <div className="col">
          <h2 className="text-light">AI Tool Comparison</h2>
          <p className="text-light">
            Compare the features, pricing, and capabilities of popular AI tools
            to find the perfect match for your needs.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col-4">
          <h4 className="text-light">AI Tool Comparison</h4>
          <p className="text-light">Compare up to 3 AI Tools side by side.</p>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-4">
          <Form.Control
            type="text"
            placeholder="Search AI tools by name or category..."
            style={{ backgroundColor: "#1e1e1e", color: "white" }}
          />
        </div>
      </div>

      <div className="row  d-flex flex-wrap">
        {tools.map((tool) => (
          <div className="col-sm-12 col-md-6 col-lg-3 mb-4" key={tool.name}>
            <Card
              className="bg-light text-black shadow-lg"
              onClick={() => handleSelectTool(tool.name)}
              style={{
                cursor: "pointer",
                border: "none",
                transition: "transform 0.3s ease",
                height: "100%",
              }}
            >
              <Card.Body>
                <Card.Title>{tool.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {tool.category}
                </Card.Subtitle>
                <Card.Text>{tool.description}</Card.Text>
                <Card.Footer>
                  <div className="d-flex justify-content-between">
                    <span>
                      ⭐ {tool.rating} ({tool.reviews} reviews)
                    </span>
                    <span>{tool.price}</span>
                  </div>
                </Card.Footer>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>

      <div
        className="row mb-4 text-center  
      "
      >
        <div className="col ">
          <h5 className="text-light">Can't find what you're looking for?</h5>
          <p className="text-light">
            {" "}
            We're constantly adding new tools to our collection.
          </p>

          <Button variant="primary">Submit Tool</Button>
        </div>
      </div>
    </Container>
  );
};

export default ToolsComparison;
