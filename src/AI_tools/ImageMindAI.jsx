import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ImageMindAI.css";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../Images/logo[2].png";
import deatilimage from "../Images/DetailImage.png";

// review section data
const reviews = [
  {
    name: "Alex Johnson",
    date: "April 15, 2025",
    review:
      "This tool has completely transformed my workflow. The AI capabilities are far beyond what I expected and the interface is intuitive.",
    rating: 5,
  },
  {
    name: "Sarah Miller",
    date: "April 10, 2025",
    review:
      "Very powerful tool with great features. The only reason I’m not giving 5 stars is because of the learning curve for some advanced features.",
    rating: 4,
  },
  {
    name: "David Chen",
    date: "April 3, 2025",
    review:
      "Worth every penny! The customer support is exceptional and the tool itself has saved me countless hours of work.",
    rating: 5,
  },
  {
    name: "Emma Wilson",
    date: "March 28, 2025",
    review:
      "Good tool overall, but I’ve experienced some performance issues with larger projects. Hope they improve this in future updates.",
    rating: 3,
  },
];

const ratingBreakdown = {
  "5 stars": 70,
  "4 stars": 20,
  "3 stars": 7,
  "2 stars": 2,
  "1 star": 1,
};

// Technical details styles
const styles = {
  section: {
    backgroundColor: "#0d1117",
    color: "#c9d1d9",
    minHeight: "100vh",
    padding: "60px 0",
  },
  card: {
    backgroundColor: "#161b22",
    borderRadius: "16px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
    padding: "30px",
    height: "100%",
  },
  smallText: {
    fontSize: "0.95rem",
  },
  button: {
    backgroundColor: "#238636",
    borderColor: "#238636",
  },
  buttonHover: {
    backgroundColor: "#2ea043",
    borderColor: "#2ea043",
  },
};

const Gemini = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'

  const renderTabContent = () => {
    switch (activeTab) {
      case "feature":
        return (
          <div className="row g-4">
            {[
              {
                icon: "🤖",
                title: "AI-Powered Chatbot fnjdsfndfkj",
                desc: "Simulate human-like conversations, ideal for automating customer service, content creation, and business operations.",
              },
              {
                icon: "🧠",
                title: "Machine Learning Models",
                desc: "Leverage machine learning to improve performance over time, enhancing context understanding and user query handling.",
              },
              {
                icon: "💬",
                title: "Conversational AI",
                desc: "Maintain context across multiple interactions for smoother and more natural multi-turn conversations.",
              },
              {
                icon: "🔍",
                title: "SEO Optimization",
                desc: "Generate SEO-driven content and improve readability, ensuring higher search engine rankings.",
              },
              {
                icon: "🛒",
                title: "AI for E-Commerce",
                desc: "Provide personalized product recommendations and offer 24/7 customer support via AI-powered chatbots.",
              },
              {
                icon: "📚",
                title: "AI for Education",
                desc: "Enhance personalized learning experiences, offer automated grading, and provide feedback to students.",
              },
              {
                icon: "📈",
                title: "Business Automation",
                desc: "Streamline business processes by automating repetitive tasks such as emails, customer inquiries, and sales automation.",
              },
              {
                icon: "🌍",
                title: "Multilingual Support",
                desc: "Support multiple languages for global customer engagement and automate customer service across borders.",
              },
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div className="custom-card text-light p-4 h-100">
                  <div className="icon mb-3">{feature.icon}</div>
                  <h5 className="fw-bold">{feature.title}</h5>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case "screenshots":
        return (
          <div className="row g-4">
            <div className="col-md-6">
              <img
                src={deatilimage}
                alt="Screenshot 1"
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-md-6">
              <img
                src={deatilimage}
                alt="Screenshot 2"
                className="img-fluid rounded-3"
              />
            </div>
          </div>
        );

      case "reviews":
        return (
          <Container style={{ backgroundColor: "black", padding: "20px" }}>
            <Row style={{ justifyContent: "center" }}>
              <Col md={12} lg={6} style={{ marginBottom: "20px" }}>
                <div
                  style={{
                    backgroundColor: "#2f2f2f",
                    padding: "20px",
                    borderRadius: "5px",
                  }}
                >
                  <h4
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: "bold",
                      color: "white",
                    }}
                  >
                    USER REVIEWS
                  </h4>
                  <div className="d-flex align-items-center mb-3">
                    <p className="text-white">4.5 out of 5</p>
                    <p style={{ color: "#6c757d" }}> ⭐⭐⭐⭐⭐</p>
                  </div>
                  <ProgressBar
                    now={ratingBreakdown["5 stars"]}
                    label="5 stars"
                    variant="success"
                    style={{ marginBottom: "20px", height: "30px" }}
                  />
                  <ProgressBar
                    now={ratingBreakdown["4 stars"]}
                    label="4 stars"
                    variant="info"
                    style={{ marginBottom: "20px", height: "30px" }}
                  />
                  <ProgressBar
                    now={ratingBreakdown["3 stars"]}
                    label="3 stars"
                    variant="warning"
                    style={{ marginBottom: "20px", height: "30px" }}
                  />
                  <ProgressBar
                    now={ratingBreakdown["2 stars"]}
                    label="2 stars"
                    variant="danger"
                    style={{ marginBottom: "20px", height: "30px" }}
                  />
                  <ProgressBar
                    now={ratingBreakdown["1 star"]}
                    label="1 star"
                    variant="secondary"
                    style={{ marginBottom: "20px", height: "30px" }}
                  />
                </div>
              </Col>
              <Col md={12} lg={6} style={{ marginBottom: "20px" }}>
                <div style={{ padding: "20px", borderRadius: "5px" }}>
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        color: "white",
                      }}
                    >
                      RECENT REVIEWS
                    </h4>
                    <Button variant="primary" style={{ width: "30%" }}>
                      Write Review
                    </Button>
                  </div>
                  {reviews.map((review, index) => (
                    <div
                      key={index}
                      style={{
                        backgroundColor: "#2f2f2f",
                        padding: "15px",
                        marginBottom: "10px",
                        borderRadius: "5px",
                        color: "white",
                      }}
                    >
                      <p>
                        <strong>{review.name}</strong> (Verified User) -{" "}
                        {review.date}
                      </p>
                      <p>{review.review}</p>
                      <div style={{ color: "#ffcc00" }}>
                        {"⭐".repeat(review.rating)}
                      </div>
                    </div>
                  ))}
                  <Button variant="primary" style={{ width: "30%" }}>
                    Load More Reviews
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        );

      case "technical":
        return (
          <div style={styles.section}>
            <div className="container">
              <div className="row g-4">
                <div className="col-md-8">
                  <div style={styles.card}>
                    <h5 className="mb-4">System Requirements</h5>
                    <div className="row">
                      <div className="col-md-6">
                        <h6>Supported Platforms</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>🪟 Windows 10/11</li>
                          <li>🍎 macOS 11+</li>
                          <li>🐧 Linux (Ubuntu, Debian)</li>
                          <li>🌐 Web-based access</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h6>Hardware Requirements</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>⚡ 2.0 GHz processor or higher</li>
                          <li>🧠 4 GB RAM minimum (8 GB recommended)</li>
                          <li>💾 500 MB available disk space</li>
                          <li>📶 Broadband internet connection</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div style={styles.card}>
                    <h5 className="mb-4">Resources</h5>
                    <ul className="list-unstyled mb-4" style={styles.smallText}>
                      <li>📄 Documentation</li>
                      <li>💻 API Reference</li>
                      <li>🎥 Video Tutorials</li>
                      <li>🎓 Learning Center</li>
                      <li>💬 Community Forum</li>
                    </ul>
                    <h5>Support</h5>
                    <button
                      className="btn w-100 my-2"
                      style={styles.button}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor =
                          styles.buttonHover.backgroundColor;
                        e.target.style.borderColor =
                          styles.buttonHover.borderColor;
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor =
                          styles.button.backgroundColor;
                        e.target.style.borderColor = styles.button.borderColor;
                      }}
                    >
                      🎧 Contact Support
                    </button>
                    <small className="text-muted d-block text-center">
                      24/7 support for paid plans
                    </small>
                  </div>
                </div>

                <div className="col-12">
                  <div style={styles.card}>
                    <h5 className="mb-4">Integration Capabilities</h5>
                    <div className="row">
                      <div className="col-md-4">
                        <h6>Productivity</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>🧰 Google Workspace</li>
                          <li>🧰 Microsoft 365</li>
                          <li>🧰 Slack</li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <h6>Development</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>💻 GitHub</li>
                          <li>💻 Jira</li>
                          <li>💻 GitLab</li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <h6>Marketing</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>📢 HubSpot</li>
                          <li>📢 Mailchimp</li>
                          <li>📢 Salesforce</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "why-we-use":
        return (
          <div className="row g-4">
            <div className="col-12">
              <div className="custom-card text-light p-5 text-center">
                <h3 className="fw-bold mb-4">Why Use AI Writer?</h3>
                <p className="fs-5">
                  AI Writer empowers users to effortlessly create high-quality
                  written content, saving time, enhancing creativity, and making
                  professional-grade writing accessible to everyone — no writing
                  skills required!
                </p>
                <p className="fs-5 mt-3">
                  Whether you're a marketer, writer, educator, or hobbyist, AI
                  Writer provides a powerful platform to unleash your
                  imagination and create compelling content.
                </p>
                <Button variant="primary" size="lg" className="mt-4">
                  Start Writing Now
                </Button>
              </div>
            </div>
          </div>
        );

      case "faq":
        return (
          <div className="faq-section container py-4">
            <h3 className="text-center mb-4">Frequently Asked Questions</h3>

            <div className="accordion" id="faqAccordion">
              {/* FAQ Item 1 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What is ImageMind AI?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className=""
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    ImageMind AI is an advanced AI platform that generates
                    stunning visuals based on text descriptions. It uses deep
                    learning models to transform written input into high-quality
                    images.
                  </div>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How does ImageMind AI work?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    The platform uses AI models trained on large datasets of
                    images and text descriptions to generate images based on
                    user input. You can type in a description, and the AI will
                    visualize it into a unique image.
                  </div>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Can I use ImageMind AI for free?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Yes, ImageMind AI offers a free trial that allows you to
                    generate a limited number of images. To access additional
                    features and more usage, you can opt for one of the paid
                    plans.
                  </div>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    What are the system requirements for ImageMind AI?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    ImageMind AI is a web-based platform, so you only need a
                    stable internet connection and a modern web browser like
                    Chrome or Firefox. There are no specific hardware
                    requirements to use the platform.
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="bg-dark">
        <Link
          to="/Aitools"
          className="d-inline-block text-white text-decoration-none ml-3 py-1"
        >
          <i className="bi bi-arrow-left me-2"></i>Back to Directory
        </Link>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between mb-5">
            {/* Left side (Text Section) */}
            <div style={{ flex: 1, paddingRight: "30px" }}>
              <img
                src={Logo}
                alt="Logo"
                className="me-3"
                style={{ width: "60px" }}
              />
              <h2>ImageMind AI</h2>
              <div className="text-warning mb-1">
                ⭐⭐⭐⭐⭐ 95% Satisfaction
              </div>
              <p>
                Revolutionary AI image generation platform that transforms text
                descriptions into stunning visuals.
              </p>
              <div className="mb-3">
                <span className="badge bg-primary me-2">Image Generation</span>
                <span className="badge bg-success me-2">Creative</span>
                <span className="badge bg-warning text-dark">Paid</span>
              </div>
              <div>
                <button className="btn btn-primary me-2">Try Now</button>
                <button className="btn btn-outline-light">Watch Demo</button>
              </div>
            </div>

            {/* Right side (Image Section) */}
            <div style={{ flex: 1, textAlign: "center" }}>
              <img
                src={deatilimage}
                alt="Dashboard Preview"
                className="img-fluid rounded-3"
                style={{ maxWidth: "80%", height: "auto" }}
              />
            </div>
          </div>

          {/* Tab Navigation */}
          <ul className="nav nav-tabs custom-tabs mb-4">
            {[
              "features",
              "screenshots",
              "reviews",
              "faq",
              "technical",
              "why-we-use",
            ].map((tab) => (
              <li className="nav-item mb-2" key={tab}>
                <button
                  className={`nav-link ${activeTab === tab ? "active" : ""}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              </li>
            ))}
          </ul>

          {/* Tab Content */}
          <div className="tab-content-area">{renderTabContent()}</div>

          <div className="bg-primary text-center text-light rounded-4 p-5 mt-5">
            <h4 className="mb-3">Ready to get started with ImageMind AI?</h4>
            <p className="mb-4">
              Join thousands of professionals already boosting their
              productivity!
            </p>
            <div>
              <button className="btn btn-light me-3">Try Now for Free</button>
              <button className="btn btn-outline-light">Schedule a Demo</button>
            </div>
            <small className="d-block mt-2">
              No credit card required. 14-day free trial available.
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gemini;
