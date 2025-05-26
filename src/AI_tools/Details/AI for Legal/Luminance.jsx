import React, { useState } from "react";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

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
const Luminance = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">Create Stunning Videos in Minutes</p>
              <h3 className=""> Drag-and-Drop Simplicity & Custom Branding</h3>
            </div>
            {[
              {
                icon: "📄",
                title: "Luminance Document Review Automation:",
                desc: "Luminance uses AI to automate document review, improving the speed and efficiency of the review process.",
              },
              {
                icon: "🔍",
                title: "Luminance Contract Analysis Powered by AI:",
                desc: "Luminance leverages AI to perform in-depth contract analysis, ensuring thorough review of contract terms and clauses.",
              },
              {
                icon: "📊",
                title: "Luminance Due Diligence for M&A Transactions:",
                desc: "Luminance automates due diligence in M&A transactions, helping legal teams quickly review and assess documents.",
              },
              {
                icon: "⚖",
                title:
                  "Luminance eDiscovery for Litigation and Investigations:",
                desc: "Luminance offers eDiscovery capabilities to assist with legal investigations, speeding up the discovery process.",
              },
              {
                icon: "📑",
                title:
                  "Luminance Legal Document Review with Smart Highlighting:",
                desc: "Luminance uses AI to highlight key sections of legal documents, helping legal professionals focus on critical clauses.",
              },
              {
                icon: "🌍",
                title: "AI for Legal Documents Analysis in Multiple Languages:",
                desc: "Luminance supports multiple languages, making it easier for global teams to analyze legal documents in various languages.",
              },
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="custom-card text-light p-4 h-100"
                  style={{ border: "1px solid #7B68EE" }}
                >
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
                src="public\assets\Img\AI for legal\LuminanceAI -s2.jpg"
                alt="Luminance"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src="public\assets\Img\AI for legal\LuminanceAI -s3.jpg"
                alt="Luminance"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
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

      case "FAQs":
        return (
          <div className="faq-section container py-5">
            <h3 className="text-center text-white mb-5 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is Luminance AI?",
                  a: "Luminance AI is an advanced legal technology platform that uses machine learning and AI to automate document review, contract analysis, and legal compliance processes.",
                },
                {
                  q: "How does Luminance AI work?",
                  a: "It uses machine learning algorithms to read, understand, and classify legal documents, identifying anomalies, risks, and important clauses automatically.",
                },
                {
                  q: "What are the main uses of Luminance AI?",
                  a: "Document review, contract analysis, due diligence, eDiscovery, compliance checks, litigation support, and regulatory audits.",
                },
                {
                  q: "Who can use Luminance AI?",
                  a: "Law firms, corporate legal teams, compliance officers, and in-house counsel across industries like finance, healthcare, and real estate.",
                },
                {
                  q: "What is Luminance document review?",
                  a: "It automates the review of large volumes of legal documents, saving time and improving accuracy.",
                },
                {
                  q: "How does Luminance support contract analysis?",
                  a: "It highlights key contract clauses, flags risks, and suggests edits automatically using AI contract redlining features.",
                },
                {
                  q: "What is Luminance due diligence?",
                  a: "It simplifies M&A transactions by organizing, reviewing, and analyzing documents faster during mergers and acquisitions.",
                },
                {
                  q: "Does Luminance support eDiscovery?",
                  a: "Yes, it helps find, classify, and review documents quickly during the discovery phase of litigation.",
                },
                {
                  q: "What is Luminance AI software?",
                  a: "It is a cloud-based SaaS software platform designed specifically for legal operations.",
                },
                {
                  q: "How accurate is Luminance AI?",
                  a: "It offers extremely high document classification and anomaly detection accuracy using machine learning.",
                },
                {
                  q: "Can Luminance help with GDPR compliance?",
                  a: "Yes, it identifies personal data and sensitive information for GDPR audits and regulatory compliance.",
                },
                {
                  q: "Is Luminance good for legal case management?",
                  a: "Yes, it helps lawyers organize case files, manage workflows, and track legal documents efficiently.",
                },
                {
                  q: "What industries use Luminance?",
                  a: "Law firms, banks, insurance companies, healthcare providers, energy firms, and tech companies.",
                },
                {
                  q: "Does Luminance support real estate transactions?",
                  a: "Yes, it streamlines document review and compliance checking for property deals and leases.",
                },
                {
                  q: "Is Luminance AI suitable for startups?",
                  a: "Yes, startups looking for efficient, automated legal operations can benefit from Luminance.",
                },
                {
                  q: "How does Luminance help with risk management?",
                  a: "It detects anomalies, missing clauses, and legal risks early in the review process.",
                },
                {
                  q: "What is Luminance machine learning?",
                  a: "It's a system that trains itself to recognize document types, clauses, and risks without manual programming.",
                },
                {
                  q: "Can Luminance integrate with other platforms?",
                  a: "Yes, it offers platform integration capabilities to connect with your existing legal tech tools.",
                },
                {
                  q: "What is Luminance legal compliance?",
                  a: "It ensures that contracts and legal documents meet regulatory standards and internal policies.",
                },
                {
                  q: "How does Luminance support multilingual document review?",
                  a: "It can review, classify, and analyze documents written in multiple languages for international deals.",
                },
                {
                  q: "What is Luminance smart highlighting?",
                  a: "It automatically highlights important information and critical clauses in legal documents.",
                },
                {
                  q: "What is AI-powered document review?",
                  a: "It’s an intelligent, automated process that speeds up and enhances the accuracy of reviewing documents.",
                },
                {
                  q: "Does Luminance offer a free trial?",
                  a: "In some regions, Luminance provides a free demo or limited-time trial; you can request it from their sales team.",
                },
                {
                  q: "What is Luminance document automation?",
                  a: "It automates tedious manual document handling like sorting, classification, and review.",
                },
                {
                  q: "How secure is Luminance AI?",
                  a: "It follows strict data security protocols, including encryption and access control, to protect sensitive documents.",
                },
              ]
                .map((item, i) => ({ ...item, id: `faq${i}` }))
                .filter((item, i, arr) => showAllFaqs || i < 4)
                .map((item, i) => (
                  <div className="accordion-item mb-3" key={item.id}>
                    <h2 className="accordion-header" id={`heading${item.id}`}>
                      <button
                        className={`accordion-button ${i !== 0 ? "collapsed" : ""
                          }`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${item.id}`}
                        aria-expanded={i === 0 ? "true" : "false"}
                        aria-controls={`collapse${item.id}`}
                        style={{
                          backgroundColor: "#161b22",
                          color: "#c9d1d9",
                          fontWeight: "bold",
                        }}
                      >
                        {item.q}
                      </button>
                    </h2>
                    <div
                      id={`collapse${item.id}`}
                      className={`accordion-collapse collapse ${i === 0 ? "show" : ""
                        }`}
                      aria-labelledby={`heading${item.id}`}
                      data-bs-parent="#faqAccordion"
                    >
                      <div
                        className="accordion-body"
                        style={{
                          backgroundColor: "#0d1117",
                          color: "#c9d1d9",
                          border: "1px solid #238636",
                          borderRadius: "8px",
                          padding: "15px",
                        }}
                      >
                        {item.a}
                      </div>
                    </div>
                  </div>
                ))}

              <div className="text-center mt-4">
                <button
                  className="btn btn-outline-light"
                  onClick={() => setShowAllFaqs(!showAllFaqs)}
                >
                  {showAllFaqs ? "Show Less" : "Read More"}
                </button>
              </div>
            </div>
          </div>
        );

      case "why-we-use":
        return (
          <div className="container">
            <div className="row g-4">
              <div className="col-12">
                <div className="custom-card text-light p-5 text-center">
                  <h3 className="fw-bold mb-4 text-start text-primary">
                    Why Use Luminance?
                  </h3>

                  <ul
                    className="text-start"
                    style={{
                      listStyleType: "disc",
                      paddingLeft: "1.5rem",
                      fontSize: "1rem",
                      lineHeight: "1.5",
                    }}
                  >
                    <li className="mb-3">
                      Speed: Dramatically reduces document review time.
                    </li>
                    <li className="mb-3">
                      Accuracy: Machine learning ensures fewer errors.
                    </li>
                    <li className="mb-3">
                      Efficiency: Handles complex, multilingual document
                      reviews.
                    </li>
                    <li className="mb-3">
                      Automation: Eliminates repetitive manual tasks.
                    </li>
                    <li className="mb-3">
                      Compliance: Assists with GDPR and regulatory compliance.
                    </li>
                    <li className="mb-3">
                      Security: Robust data security protocols for sensitive
                      information.
                    </li>
                    <li className="mb-3">
                      Flexibility: Works for law firms, in-house legal
                      departments, and corporations.
                    </li>
                    <li className="mb-3">
                      Scalability: Suitable for startups, SMBs, and large
                      enterprises.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Start Creating Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "pros & cons":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-4">Pros & Cons</h4>
            <div className="row justify-content-center gap-2">
              {/* Pros Column */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #7B68EE",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-success text-start mb-4">✅ Pros</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    Highly accurate AI-powered document analysis
                  </li>
                  <li className="mb-2">
                    Dynamic document clustering and smart highlighting
                  </li>
                  <li className="mb-2">
                    Supports multilingual legal document review
                  </li>
                  <li className="mb-2">
                    Data room analysis for M&A activities
                  </li>
                  <li className="mb-2">
                    User-friendly UI and advanced search capabilities
                  </li>
                  <li className="mb-2">
                    Continuous machine learning adaptation
                  </li>
                  <li className="mb-2">Strong regulatory compliance support</li>
                  <li className="mb-2">Seamless platform integrations</li>
                  <li className="mb-2">
                    Flexible SaaS model and cloud-based platform
                  </li>
                  <li className="mb-2">
                    Excellent customer support and training resources
                  </li>
                </ul>
              </div>

              {/* Cons Column */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #7B68EE",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-warning text-start mb-4">⚠ Cons</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    Higher pricing compared to some alternatives
                  </li>
                  <li className="mb-2">
                    Requires initial training and onboarding for optimal use
                  </li>
                  <li className="mb-2">
                    Limited offline functionality (requires strong internet
                    access)
                  </li>
                  <li className="mb-2">
                    Some features may be complex for small teams without AI
                    experience
                  </li>
                  <li className="mb-2">
                    Integration with niche legal tech software could require
                    customization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "alternative":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-4">Alternatives</h4>
            <div className="row justify-content-center gap-2">
              <div
                className="col-lg-8 col-md-8 col-sm-12"
                style={{
                  border: "1px solid #7B68EE",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    Kira Systems: A contract review automation tool that
                    leverages AI to streamline the contract analysis process for
                    legal professionals.
                  </li>
                  <li className="mb-2">
                    eBrevia: An AI-powered document analysis platform designed
                    to extract key terms and information from legal documents
                    efficiently.
                  </li>
                  <li className="mb-2">
                    ThoughtRiver: Specializes in pre-screening contracts using
                    AI to help legal teams identify potential issues early in
                    the contract process.
                  </li>
                  <li className="mb-2">
                    Relativity: An eDiscovery legal platform offering advanced
                    tools for managing and analyzing electronic evidence in
                    litigation.
                  </li>
                  <li className="mb-2">
                    LawGeex: An AI-powered contract approval automation tool
                    that helps businesses review and approve contracts faster.
                  </li>
                  <li className="mb-2">
                    ROSS Intelligence: A legal research AI platform that uses
                    machine learning to provide insights and help lawyers with
                    case law research.
                  </li>
                  <li className="mb-2">
                    Harvey AI: A contract review and compliance tool that helps
                    legal professionals with document drafting, research, and
                    case analysis using AI.
                  </li>
                  <li className="mb-2">
                    LexCheck: An automated contract negotiation tool powered by
                    AI that helps businesses and legal teams negotiate contract
                    terms efficiently.
                  </li>
                </ul>
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
      <div className="bg-dark d-flex  justify-content-between align-items-center ">
        {/* <a
          href="/Aitools"
          className="d-inline-block text-white text-decoration-none ml-3 py-1"
        >
          <i className="bi bi-arrow-left me-2"></i>Back to Directory{" "}
        </a> */}
        <a
          href="/Aitools"
          className="d-inline-block text-white text-decoration-none  mt-3 ml-3 py-1 px-2 ms-5 border rounded-sm"
        >
          <i className="bi bi-arrow-left me-2"></i>Back  {" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
          <div className="row align-items-center justify-content-between mb-1">
            {/* Left side (Text Section) */}
            <div className="col-12 col-md-6 mb-4 mb-md-0 pe-md-4">
              <p className="text-primary">Write better, faster</p>
              <h1>Luminance AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Luminance AI is an advanced legal technology platform that leverages artificial intelligence and machine learning algorithms to transform how legal professionals conduct document review, contract analysis, due diligence, eDiscovery, and compliance tasks. It offers AI-powered document analysis, helping law firms, in-house counsels, and corporate legal teams automate and accelerate the review of complex legal materials, ensuring greater speed, accuracy, and efficiency. Using natural language processing (NLP) and dynamic pattern recognition, Luminance can analyze legal documents across multiple languages, detect anomalies, cluster related documents, and assist with risk management.
              </p>

              <div className="mb-3">
                <a
                  href="https://www.luminance.com/"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-2"
                  target="_blank"
                >
                  Explore Tool
                </a>
              </div>
            </div>

            {/* Right side (Image Section) */}
            <div className="col-12 col-md-6 text-center">
              <img
                src="public\assets\Img\AI for legal\AiForLegal\Lumninance.png"
                alt="Luminance AI"
                className="img-fluid"
                style={{ height: "300px", objectFit: "contain" }}
              />
            </div>
          </div>

          <section style={{ backgroundColor: "", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">Explore in 3 Simple Steps</p>
              <h2
                style={{
                  fontWeight: "semibold",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                How to Use Luminance AI?
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
                      {" "}
                      Luminance for law firms
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Automates contract review, eDiscovery, and due diligence
                      processes.
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
                      Luminance for corporate legal teams
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Assists with compliance management, contract lifecycle,
                      and GDPR auditing.
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
                      Luminance investigations
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Helps detect anomalies and risk factors across thousands
                      of legal documents.
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
              "FAQs",

              "why-we-use",
              "pros & cons",
              "alternative",
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

export default Luminance;
