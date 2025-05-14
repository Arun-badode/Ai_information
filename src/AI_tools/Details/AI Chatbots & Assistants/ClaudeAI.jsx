import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/Logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import claude from "../../../Images/ClaudeAI.png"

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

const ClaudeAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            {[
              {
                icon: "🖼",
                title: "Input Processing",
                desc: "When a user submits a query or command, Claude AI breaks the text into tokens (small units of meaning) that the model can process.",
              },
              {
                icon: "🎨",
                title: "Context Understanding",
                desc: "Claude AI leverages NLP techniques to understand the context behind the text. It processes elements such as intent, emotion, and semantic meaning.",
              },
              {
                icon: "✏",
                title: "Text Generation",
                desc: "Claude AI uses text generation algorithms to predict the most likely next words or sentences based on the input provided.",
              },
              {
                icon: "📦",
                title: "Output Delivery",
                desc: "After processing the input, Claude AI delivers the generated text in a form that is easy to understand and contextually relevant.",
              },
              {
                icon: "⚙",
                title: "Claude for Customer Service",
                desc: "Claude AI’s chatbot capabilities are commonly used for customer service. It can automate responses to frequently asked questions, provide real-time solutions, and even troubleshoot common problems.",
              },
              {
                icon: "✨",
                title: "Claude in Business Automation",
                desc: "Claude AI helps automate a variety of business functions, including sales, marketing, and customer engagement. By using Claude for lead qualification, follow-ups, and product recommendations, businesses can optimize their operations.",
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
                <h3 className="fw-bold mb-4">Why Use Claude AI?</h3>
                <h5> Efficiency:</h5>
                <p className="fs-5">
                Claude AI automates various tasks, such as customer service, content creation, and sales processes, reducing the need for human intervention and freeing up time for more strategic tasks.
                </p>
                <h5>Scalability:</h5>
                <p className="fs-5 mt-3">
                Claude AI can handle large volumes of simultaneous interactions without degradation in performance, making it perfect for businesses that require scalability, especially during peak periods.
                </p>
                <h5>24/7 Availability:</h5>
                <p className="fs-5 mt-3">
                Claude AI operates continuously without breaks, ensuring that businesses can provide round-the-clock support and engage customers at any time.
                </p>
                <h5>Cost Reduction:</h5>
                <p className="fs-5 mt-3">
                By automating tasks that would normally require human employees, businesses can significantly reduce operational costs while maintaining high efficiency.
                </p>
                <h5>Personalization:</h5>
                <p className="fs-5 mt-3">
                Claude AI uses machine learning to personalize interactions based on user data, ensuring that responses are relevant to the individual customer.
                </p>
                <h5>Seamless Integration:</h5>
                <p className="fs-5 mt-3">
                Claude AI’s API allows it to easily integrate with existing platforms like CRM systems, websites, and mobile apps, making it an excellent solution for businesses seeking to enhance their digital infrastructure.
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
                    What is Claude AI?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className=""
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                  Claude AI is an advanced conversational AI developed by Anthropic AI, powered by GPT-4. It is designed for a range of applications including customer service, content creation, and business automation.
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
                   How accurate is Claude AI?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                  Claude AI is highly accurate due to its use of GPT-4, which offers better context understanding and generation of human-like responses.
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
                   How do I integrate Claude AI into my business?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                  Claude AI can be integrated into your business through its API, which allows seamless connection with your website, CRM, or other platforms.
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
                    Can Claude AI be used for content generation?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                  Yes, Claude AI excels at content creation, generating blog posts, marketing copy, and SEO content.
                  </div>
                </div>
              </div>

               {/* FAQ Item 5 */}
               <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                   What industries benefit the most from Claude AI?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                  Claude AI is beneficial for e-commerce, customer service, education, marketing, finance, and healthcare industries, among others.
                  </div>
                </div>
              </div>

              {/* FAQ Item 6 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingsix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsesix"
                    aria-expanded="false"
                    aria-controls="collapsesix"
                  >
                  Does Claude AI support multiple languages?
                  </button>
                </h2>
                <div
                  id="collapsesix"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingsix"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                  Yes, Claude AI supports multiple languages, enabling businesses to reach global customers.
                  </div>
                </div>
              </div>

              
            {/* FAQ Item 7 */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingseven">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseseven"
                    aria-expanded="false"
                    aria-controls="collapseseven"
                  >
                  Does Claude AI support multiple languages?
                  </button>
                </h2>
                <div
                  id="collapseseven"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingseven"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                  Yes, Claude AI supports multiple languages, enabling businesses to reach global customers.
                  </div>
                </div>
              </div>

              {/* FAQ Item 8 */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingeight">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseeight"
                    aria-expanded="false"
                    aria-controls="collapseeight"
                  >
                  Is Claude AI suitable for enterprise solutions?
                  </button>
                </h2>
                <div
                  id="collapseeight"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingeight"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                  Yes, Claude AI can be used for enterprise solutions, integrating seamlessly into large-scale business operations.
                  </div>
                </div>
              </div>

                {/* FAQ Item 9 */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingnine">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsenine"
                    aria-expanded="false"
                    aria-controls="collapsenine"
                  >
              Can Claude AI handle complex customer queries?

                  </button>
                </h2>
                <div
                  id="collapsenine"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingnine"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                  Claude AI can handle complex queries but may sometimes struggle with highly specialized topics that require domain-specific knowledge.

                  </div>
                </div>
              </div>

               {/* FAQ Item 10 */}
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingten">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseten"
                    aria-expanded="false"
                    aria-controls="collapseten"
                  >
              How does Claude AI handle sensitive customer data?
                  </button>
                </h2>
                <div
                  id="collapseten"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingten"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                  Claude AI adheres to industry standards for data privacy and security, but businesses must ensure they comply with GDPR and other privacy regulations when using AI.
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
              <h2>The Ultimate Guide to Claude AI</h2>
              <div className="text-warning mb-1">
                ⭐⭐⭐⭐⭐ 95% Satisfaction
              </div>
              <p>
                Claude AI is an advanced AI chatbot developed by Anthropic AI.
                It leverages machine learning and natural language processing
                (NLP) to process and generate human-like responses across
                multiple domains. Claude was designed to improve on previous AI
                language models, such as GPT-3, by enhancing safety and
                alignment with human values, making it more suitable for a wide
                range of applications in various industries.
              </p>
            </div>

            {/* Right side (Image Section) */}
            <div style={{ flex: 1, textAlign: "center" }}>
              <img
                src={claude}
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
            <h4 className="mb-3">Ready to get started with Drift AI?</h4>
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

export default ClaudeAI;