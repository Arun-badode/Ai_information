import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import d from "../../../../public/assets/Img/_AI for Privacy and Data Protection/4.png"
import DualityImg from "../../../../public/assets/Img/AI for Privacy/3.jpg"
import DualitySS from '../../../../public/assets/Img/AI for Privacy/DualitySS1.png';
import DualitySS2 from '../../../../public/assets/Img/AI for Privacy/DualitySS2.png'

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
const DualityAI = () => {
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
                title: "Data Privacy:",
                desc: "Ensures that sensitive data is encrypted and anonymized for privacy preservation.",
              },
              {
                icon: "🖼",
                title: "Compliance:",
                desc: "Helps businesses achieve GDPR, HIPAA, and other regulatory compliance.",
              },
              {
                icon: "🎵",
                title: "Secure Analytics:",
                desc: " Allows businesses to analyze encrypted data securely without decryption.",
              },
              {
                icon: "✍",
                title: "Scalability:",
                desc: "Suitable for small businesses and large enterprises with tailored solutions for both.",
              },
              {
                icon: "📱",
                title: "Multi-Cloud Security:",
                desc: "Protects data across multiple cloud environments, ensuring security and compliance.",
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
                src={DualitySS}
                alt="Duality"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={DualitySS2}
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
                  q: "What is DualityAI?",
                  a: "DualityAI is an AI-driven platform designed to protect sensitive data through anonymization, encryption, and privacy-preserving technologies.",
                },
                {
                  q: "How does DualityAI work?",
                  a: "It uses machine learning to automatically detect, redact, and anonymize sensitive data across various formats while retaining its utility.",
                },
                {
                  q: "Is DualityAI easy to use for beginners?",
                  a: "Yes, DualityAI features an intuitive interface and developer-friendly APIs that make it accessible for both technical and non-technical users.",
                },
                {
                  q: "Is DualityAI free to use?",
                  a: "DualityAI offers a basic free tier for small-scale testing, with premium features available in subscription plans.",
                },
                {
                  q: "What platforms is DualityAI available on?",
                  a: "DualityAI is accessible via cloud dashboard, API integrations, and on-premise SDKs for various systems.",
                },
                {
                  q: "What makes DualityAI unique?",
                  a: "It focuses on privacy by design, combining AI-powered anonymization with real-time compliance and security monitoring.",
                },
                {
                  q: "Who should use DualityAI?",
                  a: "Healthcare providers, financial institutions, legal firms, educators, and privacy-conscious developers can benefit from DualityAI.",
                },
                {
                  q: "Can DualityAI be used for business data protection?",
                  a: "Absolutely, businesses use DualityAI to ensure regulatory compliance, protect customer data, and secure operations.",
                },
                {
                  q: "What kind of templates or models does DualityAI offer?",
                  a: "DualityAI provides pre-built models for redacting personally identifiable information (PII), anonymizing healthcare data, and more.",
                },
                {
                  q: "How is DualityAI different from InVideo?",
                  a: "InVideo is a video editing tool, while DualityAI is a privacy-focused platform for data anonymization and encryption.",
                },
                {
                  q: "How is DualityAI different from traditional data masking tools?",
                  a: "Unlike static masking, DualityAI uses contextual AI and NLP models to ensure intelligent, dynamic anonymization.",
                },
                {
                  q: "Can I use DualityAI for YouTube content moderation?",
                  a: "Yes, it helps detect and remove sensitive information from video content before publishing.",
                },
                {
                  q: "Is there a DualityAI mobile app?",
                  a: "DualityAI provides SDKs for mobile app integration on Android and iOS platforms.",
                },
                {
                  q: "Can I export anonymized data from DualityAI in high quality?",
                  a: "Yes, you can export anonymized files or datasets in original quality and chosen format.",
                },
                {
                  q: "Does DualityAI support voice data anonymization?",
                  a: "Yes, it supports anonymization of audio content and voice recordings using speech recognition and redaction.",
                },
                {
                  q: "Does DualityAI have a built-in model library?",
                  a: "Yes, it includes pre-trained models for PII detection, redaction, and compliance analytics.",
                },
                {
                  q: "Can I use DualityAI for social media data analysis?",
                  a: "Yes, DualityAI can anonymize user-generated content for ethical social media data analysis.",
                },
                {
                  q: "Can I use DualityAI for customer data protection?",
                  a: "Yes, it’s ideal for protecting sensitive CRM and customer support data.",
                },
                {
                  q: "Does DualityAI support text pattern detection?",
                  a: "Yes, it leverages NLP to detect sensitive keywords, names, addresses, and more.",
                },
                {
                  q: "Can I anonymize documents and images with DualityAI?",
                  a: "Yes, it can redact sensitive information from both textual and visual content using AI.",
                },
                {
                  q: "What AI features does DualityAI use?",
                  a: "It uses natural language processing, computer vision, and deep learning for high-accuracy data protection.",
                },
                {
                  q: "Can I use DualityAI for short-form data processing?",
                  a: "Yes, it works effectively on chats, messages, and other short text formats.",
                },
                {
                  q: "What data formats does DualityAI support?",
                  a: "It supports structured (CSV, Excel), unstructured (PDFs, emails), and multimedia (audio, images, video) data.",
                },
                {
                  q: "Can I use DualityAI for real estate customer privacy?",
                  a: "Yes, DualityAI helps anonymize transaction records and client details.",
                },
                {
                  q: "Is DualityAI suitable for educational institutions?",
                  a: "Yes, it’s used to protect student records, assessment data, and institutional research.",
                },
                {
                  q: "Can I collaborate with a team using DualityAI?",
                  a: "Enterprise versions support team collaboration, user roles, and permission-based access.",
                },
                {
                  q: "How much data can DualityAI handle?",
                  a: "DualityAI scales to handle large enterprise data sets and real-time processing pipelines.",
                },
                {
                  q: "Does DualityAI have customer support?",
                  a: "Yes, it offers support through tickets, live chat, and dedicated account managers for enterprise plans.",
                },
                {
                  q: "Does DualityAI offer analytics?",
                  a: "Yes, it provides detailed dashboards showing anonymization coverage, error rates, and compliance progress.",
                },
                {
                  q: "Can I integrate my own encryption keys with DualityAI?",
                  a: "Yes, it supports BYOK (Bring Your Own Key) and integrates with third-party KMS tools.",
                },
                {
                  q: "Can I white-label DualityAI?",
                  a: "Yes, white-label solutions are available for partners and large organizations.",
                },
                {
                  q: "Does DualityAI have an API?",
                  a: "Yes, it offers RESTful and GraphQL APIs for seamless integration.",
                },
                {
                  q: "Is DualityAI suitable for eCommerce?",
                  a: "Yes, it secures customer data such as addresses, payment details, and order history.",
                },
                {
                  q: "Can I schedule automated anonymization jobs in DualityAI?",
                  a: "Yes, it supports scheduling recurring privacy tasks via dashboard or API.",
                },
                {
                  q: "Does DualityAI support voice-to-text anonymization?",
                  a: "Yes, it transcribes and anonymizes audio using speech-to-text models.",
                },
                {
                  q: "Does DualityAI offer auto-labeling of sensitive data?",
                  a: "Yes, it can auto-tag and classify data types for faster review and anonymization.",
                },
                {
                  q: "Can DualityAI be used offline?",
                  a: "Yes, on-premise deployments allow secure, local use without internet access.",
                },
                {
                  q: "Can I use DualityAI for vertical industry use cases?",
                  a: "Yes, it’s customizable for sectors like legal, education, government, healthcare, and finance.",
                },
                {
                  q: "Does DualityAI support real-time processing and alerts?",
                  a: "Yes, it can monitor and alert for policy violations or unusual data access in real time.",
                },
                {
                  q: "Can DualityAI detect and mask biometric data?",
                  a: "Yes, it can identify and redact facial features, fingerprints, and other biometric identifiers in media.",
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
      // ---------------------------------------------------------

      case "why-we-use":
        return (
          <div className="container">
            <div className="row g-4">
              <div className="col-12">
                <div className="custom-card text-light p-5 text-center">
                  <h3 className="fw-bold mb-4 text-start text-primary">
                    Why Use Duality AI?
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
                      DualityAI is built to protect sensitive data using
                      advanced AI-powered redaction, encryption, and
                      anonymization.
                    </li>
                    <li className="mb-3">
                      Ideal for industries like healthcare, finance, education,
                      and legal where data privacy and compliance are critical.
                    </li>
                    <li className="mb-3">
                      Automatically detects and anonymizes personal information
                      using context-aware AI models.
                    </li>
                    <li className="mb-3">
                      Simplifies privacy workflows without the need for deep
                      technical expertise in data protection or machine
                      learning.
                    </li>
                    <li className="mb-3">
                      DualityAI provides a scalable, secure, and
                      regulation-ready solution for managing privacy at any data
                      volume.
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
                    DualityAI uses privacy-preserving AI to automatically
                    detect, redact, and anonymize sensitive data.
                  </li>
                  <li className="mb-2">
                    Helps organizations stay compliant with global privacy laws
                    like GDPR, HIPAA, and CCPA.
                  </li>
                  <li className="mb-2">
                    Supports structured and unstructured data, including text,
                    images, voice, and video formats.
                  </li>
                  <li className="mb-2">
                    Seamless integration with APIs, SDKs, and cloud/on-premise
                    deployments.
                  </li>
                  <li className="mb-2">
                    Real-time processing and alerts for proactive data privacy
                    management.
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
                    May require technical expertise to configure and fine-tune
                    for specific use cases.
                  </li>
                  <li className="mb-2">
                    Advanced features like custom model training are locked
                    behind enterprise tiers.
                  </li>
                  <li className="mb-2">
                    Processing large multimedia datasets can demand significant
                    compute resources.
                  </li>
                  <li className="mb-2">
                    Offline/on-premise deployment options involve additional
                    infrastructure setup.
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
                    DualityAI – A privacy-first AI platform offering
                    privacy-preserving analytics, data collaboration, and secure
                    computation for sensitive data.
                  </li>
                  <li className="mb-2">
                    Presidio by Microsoft – Open-source tool for data
                    de-identification and PII detection.
                  </li>
                  <li className="mb-2">
                    Amazon Macie – Uses machine learning to discover and protect
                    sensitive data in AWS.
                  </li>
                  <li className="mb-2">
                    Google DLP – A cloud-based data loss prevention tool with
                    content inspection and redaction.
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
              <h1>Duality AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Duality AI is an advanced platform that leverages AI-driven
                encryption, privacy-preserving machine learning, and data
                anonymization to provide robust data privacy and data security
                solutions. It ensures businesses and organizations can handle
                sensitive data without compromising security or violating
                privacy regulations like GDPR and HIPAA. Designed for industries
                such as healthcare, finance, and enterprise solutions, Duality
                AI enables secure data sharing, data governance, and
                privacy-compliant analytics.
              </p>

              <div className="mb-3">
                <a
                                 href=" https://www.duality.ai/"
                                 rel="noopener noreferrer"
                                 className="btn btn-primary me-2"
                               >
                                 Explore Tool
                               </a>
              </div>
            </div>

            {/* Right side (Image Section) */}
            <div
              style={{ flex: 1, textAlign: "center" }}
              className="order-1 order-md-2 mb-4 mb-md-0"
            >
              <img
                src={DualityImg}
                className="img-fluid rounded-3"
                style={{ maxWidth: "80%", height: "auto" }}
                alt="duality"
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
                How to Use Duality AI?
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
                      Upload Sensitive Data
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Upload text, images, videos, voice, or documents that may
                      contain PII or confidential data.
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
                      Let DualityAI Process It
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      DualityAI uses AI to detect, anonymize, and redact
                      sensitive information in real-time while preserving data
                      utility.
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
                      Export or Integrate Seamlessly
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Download clean datasets or connect DualityAI to your
                      systems via API or SDK for ongoing automation.
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

export default DualityAI;
