import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

import b from "../../../../public/assets/Img/_AI for Privacy and Data Protection/2.png"
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
const AnonosAI = () => {
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
                icon: "🎞",
                title: "Data Privacy and Protection:",
                desc: "Ensures that sensitive data is encrypted, anonymized, and protected from unauthorized access.",
              },
              {
                icon: "🖼",
                title: "GDPR and Compliance:",
                desc: "Helps businesses comply with GDPR, CCPA, and other privacy laws.",
              },
              {
                icon: "🎵",
                title: "Data Security:",
                desc: "  Uses AI-driven encryption and data masking techniques to safeguard business-critical data.",
              },
              {
                icon: "✍",
                title: "Scalable:",
                desc: "Anonos AI scales to meet the needs of both small businesses and large enterprises.",
              },
              {
                icon: "📱",
                title: "Multi-Cloud Support:",
                desc: " Offers security solutions for multi-cloud environments, ensuring that data is protected across various platforms.",
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
                src="https://images.wondershare.com/filmora/article-images/photos-into-video-app-8.jpg"
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src="https://www.tipard.com/images/editor/free-online-video-editor/magisto.jpg"
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

      // ----------------------------------------------------------------------

      case "FAQs":
        return (
          <div className="faq-section container py-5">
            <h3 className="text-center text-white mb-5 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is Anonos AI?",
                  a: "Anonos AI is a privacy-enhancing technology platform that enables secure data sharing, processing, and analysis while complying with global data privacy laws like GDPR and HIPAA.",
                },
                {
                  q: "How does Anonos AI work?",
                  a: "It uses synthetic data, pseudonymization, and dynamic data masking to protect sensitive data and ensure compliant data utility.",
                },
                {
                  q: "Who can benefit from Anonos AI?",
                  a: "Organizations in finance, healthcare, legal, retail, and any data-driven industry seeking compliant data innovation and secure collaboration can benefit.",
                },
                {
                  q: "Is Anonos AI suitable for global compliance?",
                  a: "Yes, it’s built to support global regulations such as GDPR, HIPAA, CCPA, and more through advanced privacy-preserving techniques.",
                },
                {
                  q: "Does Anonos AI use real data for analysis?",
                  a: "It transforms real data into privacy-preserving forms like synthetic data that retain analytical value without exposing identities.",
                },
                {
                  q: "Can Anonos AI be used for AI/ML training?",
                  a: "Yes, it provides privacy-safe datasets suitable for training machine learning models while preserving accuracy and reducing risk.",
                },
                {
                  q: "Is Anonos AI cloud-based or on-premise?",
                  a: "Anonos AI is available as both cloud-based SaaS and on-premise deployments for enterprises with strict data residency needs.",
                },
                {
                  q: "How is Anonos AI different from traditional encryption?",
                  a: "Unlike static encryption, Anonos enables controlled data use through dynamically de-identified data that can be safely analyzed.",
                },
                {
                  q: "Does Anonos AI support real-time data use?",
                  a: "Yes, it supports real-time data streaming and processing with built-in privacy protection.",
                },
                {
                  q: "Can I integrate Anonos AI with my existing systems?",
                  a: "Yes, Anonos provides APIs and connectors for seamless integration with existing databases, applications, and analytics tools.",
                },
                {
                  q: "Does Anonos AI support consent management?",
                  a: "Yes, it incorporates lawful consent handling and data usage tracking to align with compliance frameworks.",
                },
                {
                  q: "Can Anonos AI help in cross-border data transfers?",
                  a: "Yes, its dynamic de-identification supports lawful international data transfer by minimizing re-identification risks.",
                },
                {
                  q: "Is Anonos AI scalable for big data environments?",
                  a: "Absolutely. It is designed to scale across enterprise-level datasets with high-throughput processing needs.",
                },
                {
                  q: "Can I use Anonos AI for secure data collaboration?",
                  a: "Yes, it enables data sharing and collaboration with third parties without exposing raw or sensitive information.",
                },
                {
                  q: "Does Anonos AI provide audit trails?",
                  a: "Yes, it maintains detailed logs for compliance, tracking data transformations and access history.",
                },
                {
                  q: "Does Anonos AI support privacy-preserving data sharing?",
                  a: "Yes, it enables organizations to share usable data with partners, researchers, and vendors while protecting sensitive content.",
                },
                {
                  q: "Can I use Anonos AI with my data lake or warehouse?",
                  a: "Yes, it integrates with major cloud data platforms like AWS, Azure, and GCP, as well as on-premise data lakes and warehouses.",
                },
                {
                  q: "Does Anonos AI offer role-based access control?",
                  a: "Yes, administrators can assign specific data access and transformation privileges to different users based on roles.",
                },
                {
                  q: "Can Anonos AI mask biometric data?",
                  a: "Yes, it can detect and anonymize biometric identifiers such as facial features, fingerprints, and voice data.",
                },
                {
                  q: "Is Anonos AI suitable for telecom data protection?",
                  a: "Yes, telecom companies use Anonos to anonymize call records, usage data, and customer information for secure analytics.",
                },
                {
                  q: "How does Anonos AI ensure ethical AI development?",
                  a: "By providing privacy-respectful datasets, Anonos helps reduce bias, discrimination, and legal risks in AI model training.",
                },
                {
                  q: "Does Anonos AI support multi-region deployment?",
                  a: "Yes, it supports global deployment with localized privacy enforcement to meet regional compliance requirements.",
                },
                {
                  q: "Can Anonos AI automate data privacy tasks?",
                  a: "Yes, it enables automated data discovery, classification, transformation, and policy enforcement at scale.",
                },
              ]
                .map((item, i) => ({ ...item, id: `faq${i}` }))
                .filter((item, i, arr) => showAllFaqs || i < 4)
                .map((item, i) => (
                  <div className="accordion-item mb-3" key={item.id}>
                    <h2 className="accordion-header" id={`heading${item.id}`}>
                      <button
                        className={`accordion-button ${
                          i !== 0 ? "collapsed" : ""
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
                      className={`accordion-collapse collapse ${
                        i === 0 ? "show" : ""
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
      // ---------------------------------------------------------

      case "why-we-use":
        return (
          <div className="container">
            <div className="row g-4">
              <div className="col-12">
                <div className="custom-card text-light p-5 text-center">
                  <h3 className="fw-bold mb-4 text-start text-primary">
                    Why Use Anonos AI?
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
                      Anonos AI empowers organizations to securely share and
                      process data using privacy-enhancing technologies like
                      pseudonymization and synthetic data.
                    </li>
                    <li className="mb-3">
                      Ideal for industries like healthcare, finance, legal, and
                      retail that require regulatory compliance under laws like
                      GDPR, HIPAA, and CCPA.
                    </li>
                    <li className="mb-3">
                      Enables compliant AI/ML model training and analytics
                      without exposing sensitive or personally identifiable
                      information.
                    </li>
                    <li className="mb-3">
                      Supports secure cross-border data transfers and
                      collaboration while preserving data utility and minimizing
                      re-identification risks.
                    </li>
                    <li className="mb-3">
                      Offers scalable on-premise and cloud-based solutions,
                      making it suitable for both startups and large enterprises
                      with complex data environments.
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
                    Uses advanced privacy-enhancing technologies like
                    pseudonymization and synthetic data.
                  </li>
                  <li className="mb-2">
                    Supports compliance with global regulations including GDPR,
                    HIPAA, CCPA, and more.
                  </li>
                  <li className="mb-2">
                    Enables secure data collaboration and cross-border transfers
                    without exposing raw data.
                  </li>
                  <li className="mb-2">
                    Scalable architecture suitable for enterprise-level big data
                    processing.
                  </li>
                  <li className="mb-2">
                    Offers both cloud-based and on-premise deployment options.
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
                    Requires a learning curve to understand dynamic
                    de-identification and synthetic data use.
                  </li>
                  <li className="mb-2">
                    Full capabilities may be locked behind enterprise licensing.
                  </li>
                  <li className="mb-2">
                    Onboarding time may be longer for smaller teams with limited
                    technical resources.
                  </li>
                  <li className="mb-2">
                    Integration into legacy systems might need customization or
                    developer support.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      // ---------------------------------------------------------------------------
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
                    <strong>Presidio by Microsoft</strong> – Open-source
                    framework for detecting, classifying, and de-identifying
                    sensitive data.
                  </li>
                  <li className="mb-2">
                    <strong>Amazon Macie</strong> – Uses ML to discover and
                    protect sensitive data in AWS, great for S3 data scanning.
                  </li>
                  <li className="mb-2">
                    <strong>Google Cloud DLP</strong> – Scans and redacts
                    sensitive information across Google Cloud with powerful
                    inspection rules.
                  </li>
                  <li className="mb-2">
                    <strong>OpenMined</strong> – Offers privacy-preserving ML
                    frameworks including federated learning and differential
                    privacy.
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
      <a
          href="/Aitools"
          className="d-inline-block text-white text-decoration-none  mt-3 ml-3 py-1 px-2 ms-5 border rounded-sm"
        >
          <i className="bi bi-arrow-left me-2"></i>Back  {" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
                    <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mb-5">
            {/* Left side (Text Section) */}
           <div style={{ flex: 1, paddingRight: "30px" }} className="order-2 order-md-1">
              <p className="text-primary">Write better, faster</p>
              <h1>Anonos AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Anonos AI is an innovative AI-powered platform designed to
                protect personal data, enhance data privacy, and ensure data
                protection while maintaining compliance with privacy regulations
                like GDPR. It leverages machine learning, data anonymization,
                and encryption technologies to secure sensitive data, making it
                suitable for industries like finance, healthcare, and businesses
                that handle large volumes of confidential information.
              </p>

              <div className="mb-3">
                <span className="badge bg-primary me-2">Image Generation</span>
                <span className="badge bg-success me-2">Creative</span>
                <span className="badge bg-warning text-dark">Paid</span>
              </div>
            </div>

            {/* Right side (Image Section) */}
           <div
                                 style={{ flex: 1, textAlign: "center" }}
                                 className="order-1 order-md-2 mb-4 mb-md-0"
                               >
                                 <img
                                   src={b}
                                   className="img-fluid rounded-3"
                                   style={{ maxWidth: "80%", height: "auto" }}
                                   alt="Quizlet AI platform illustration"
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
                How to Use Anonos AI?
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
                      Ingest & Connect Data
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Connect your data sources via APIs or import files to
                      Anonos for processing. Structured and unstructured data
                      are both supported.
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
                      Apply Privacy Controls
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Automatically transform your data using techniques like
                      pseudonymization, tokenization, and synthetic data
                      generation.
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
                      Use & Share Securely
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Safely analyze, collaborate, and share data across
                      departments or borders — all while staying compliant with
                      global laws.
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

export default AnonosAI;
