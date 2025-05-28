import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import cloudeai from '../../../../public/assets/Img/AI Chatbots & Assistants/26.png'
import cloudeaiSS1 from '../../../../public/assets/Img/AI Chatbots & Assistants/cloudeSS1.png'
import cloudeaiSS2 from '../../../../public/assets/Img/AI Chatbots & Assistants/cloudeSS2.png'

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
                src={cloudeaiSS1}
                alt="Screenshot 1"
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-md-6">
              <img
                src={cloudeaiSS2}
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
      <h3 className="text-center text-white mb-4 text-primary ">Frequently Asked Questions</h3>

      <div className="accordion" id="faqAccordion">
        {[
          {
            id: "One",
            question: "What is Claude AI?",
            answer:
              "Claude AI is an advanced conversational AI developed by Anthropic AI, powered by GPT-4. It is designed for a range of applications including customer service, content creation, and business automation.",
          },
          {
            id: "Two",
            question: "How accurate is Claude AI?",
            answer:
              "Claude AI is highly accurate due to its use of GPT-4, which offers better context understanding and generation of human-like responses.",
          },
          {
            id: "Three",
            question: "How do I integrate Claude AI into my business?",
            answer:
              "Claude AI can be integrated into your business through its API, which allows seamless connection with your website, CRM, or other platforms.",
          },
          {
            id: "Four",
            question: "Can Claude AI be used for content generation?",
            answer:
              "Yes, Claude AI excels at content creation, generating blog posts, marketing copy, and SEO content.",
          },
          {
            id: "Five",
            question: "What industries benefit the most from Claude AI?",
            answer:
              "Claude AI is beneficial for e-commerce, customer service, education, marketing, finance, and healthcare industries, among others.",
          },
          {
            id: "Six",
            question: "Does Claude AI support multiple languages?",
            answer:
              "Yes, Claude AI supports multiple languages, enabling businesses to reach global customers.",
          },
          {
            id: "Seven",
            question: "Does Claude AI support multiple languages?",
            answer:
              "Yes, Claude AI supports multiple languages, enabling businesses to reach global customers.",
          },
          {
            id: "Eight",
            question: "Is Claude AI suitable for enterprise solutions?",
            answer:
              "Yes, Claude AI can be used for enterprise solutions, integrating seamlessly into large-scale business operations.",
          },
          {
            id: "Nine",
            question: "Can Claude AI handle complex customer queries?",
            answer:
              "Claude AI can handle complex queries but may sometimes struggle with highly specialized topics that require domain-specific knowledge.",
          },
          {
            id: "Ten",
            question: "How does Claude AI handle sensitive customer data?",
            answer:
              "Claude AI adheres to industry standards for data privacy and security, but businesses must ensure they comply with GDPR and other privacy regulations when using AI.",
          },
        ].map((faq) => (
          <div className="accordion-item" key={faq.id}>
            <h2 className="accordion-header" id={`heading${faq.id}`}>
              <button
                className="accordion-button collapsed custom-btn"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${faq.id}`}
                aria-expanded="false"
                aria-controls={`collapse${faq.id}`}
                   style={{
                          backgroundColor: "#161b22",
                          color: "#c9d1d9",
                          fontWeight: "bold",
                        }}
              >
                {faq.question}
              </button>
            </h2>
            <div
              id={`collapse${faq.id}`}
              className="accordion-collapse collapse"
              aria-labelledby={`heading${faq.id}`}
              data-bs-parent="#faqAccordion"
            >
              <div className="accordion-body"
               style={{
                          backgroundColor: "#0d1117",
                          color: "#c9d1d9",
                          border: "1px solid #238636",
                          borderRadius: "8px",
                          padding: "15px",
                        }}>{faq.answer}
                
              </div>
            </div>
          </div>
        ))}
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
        {/* <Link
          to="/Aitools"
          className="d-inline-block text-white text-decoration-none ml-3 py-1"
        >
          <i className="bi bi-arrow-left me-2"></i>Back to Directory
        </Link> */}
        <a
          href="/Aitools"
          className="d-inline-block text-white text-decoration-none  mt-3 ml-3 py-1 px-2 ms-5 border rounded-sm"
        >
          <i className="bi bi-arrow-left me-2"></i>Back  {" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between mb-5 lovaaiflex">
            {/* Left side (Text Section) */}
            <div style={{ flex: 1, paddingRight: "30px" }}>
              
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
              <a
                                 href="  https://claude.ai"
                                 rel="noopener noreferrer"
                                 className="btn btn-primary me-2"
                                  target="_blank"
                               >
                                 Explore Tool
                               </a>
            </div>

            {/* Right side (Image Section) */}
            <div style={{ flex: 1, textAlign: "center" }}>
                                      <img
                                        src={cloudeai}
                                        alt="cloudeai"
                                        className="img-fluid rounded-3"
                                        style={{ maxWidth: "100%", height: "auto" }}
                                      />
                                    </div>
          </div>
                        <section style={{ backgroundColor: "", padding: "3rem 0" }}>
  <div className="container text-center">
    <p className="text-primary">Automate Conversations in 3 Easy Steps</p>
    <h2
      style={{
        fontWeight: "semibold",
        color: "#fff",
        marginBottom: "1rem",
      }}
    >
      How does Claude AI work?
    </h2>

    <div className="row g-4">
      {/* Step 1 */}
      <div className="col-md-4">
        <div
          style={{
            position: "relative",
            backgroundColor: "#1034A6",
            borderRadius: "12px",
            boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
            padding: "2rem",
            height: "100%",
          }}
        >
          <style>
            {`
              .step1 {
                position: absolute;
                bottom: 10px;
                right: 15px;
                font-size: 4rem;
                font-weight: bold;
                color: #7b61ff;
                opacity: 0.6;
              }
            `}
          </style>
          <h5 style={{ fontWeight: "bold", color: "#fff" }}>
            Craft Intelligent Prompts
          </h5>
          <p style={{ color: "#fff", margin: 0 }}>
            Design effective prompts to guide Claude’s conversational AI for various use cases.
          </p>
          <div className="step1">1</div>
        </div>
      </div>

      {/* Step 2 */}
      <div className="col-md-4">
        <div
          style={{
            position: "relative",
            backgroundColor: "#1034A6",
            borderRadius: "12px",
            boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
            padding: "2rem",
            height: "100%",
          }}
        >
          <style>
            {`
              .step2 {
                position: absolute;
                bottom: 10px;
                right: 15px;
                font-size: 4rem;
                font-weight: bold;
                color: #7b61ff;
                opacity: 0.6;
              }
            `}
          </style>
          <h5 style={{ fontWeight: "bold", color: "#fff" }}>
            Integrate into Your Workflow
          </h5>
          <p style={{ color: "#fff", margin: 0 }}>
            Connect Claude AI with tools like Slack, Notion, or custom platforms via API.
          </p>
          <div className="step2">2</div>
        </div>
      </div>

      {/* Step 3 */}
      <div className="col-md-4">
        <div
          style={{
            position: "relative",
            backgroundColor: "#1034A6",
            borderRadius: "12px",
            boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
            padding: "2rem",
            height: "100%",
          }}
        >
          <style>
            {`
              .step3 {
                position: absolute;
                bottom: 10px;
                right: 15px;
                font-size: 4rem;
                font-weight: bold;
                color: #7b61ff;
                opacity: 0.6;
              }
            `}
          </style>
          <h5 style={{ fontWeight: "bold", color: "#fff" }}>
            Refine with Feedback
          </h5>
          <p style={{ color: "#fff", margin: 0 }}>
            Improve Claude’s responses using feedback loops and continuous learning.
          </p>
          <div className="step3">3</div>
        </div>
      </div>
    </div>
  </div>
</section>

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

        </div>
      </div>
    </>
  );
};

export default ClaudeAI;