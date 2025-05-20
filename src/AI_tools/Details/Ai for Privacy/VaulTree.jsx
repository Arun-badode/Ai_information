import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./PrivateAI.css"; // <-- custom CSS file import
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import c from "../../../../public/assets/Img/_AI for Privacy and Data Protection/3.png"

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
const VaultreeAI = () => {
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
                title: "Enhanced Data Security:",
                desc: "Protects sensitive data using encryption and anonymization methods.",
              },
              {
                icon: "🖼",
                title: "Privacy Compliance:",
                desc: "Helps businesses achieve GDPR, HIPAA, and other regulatory compliance.",
              },
              {
                icon: "🎵",
                title: "Data Anonymization:",
                desc: " Allows businesses to process sensitive data without exposing personally identifiable information (PII).",
              },
              {
                icon: "✍",
                title: "Scalability:",
                desc: "Suitable for small businesses to large enterprises, providing scalable solutions.",
              },
              {
                icon: "📱",
                title: "AI-Powered Protection: ",
                desc: "Utilizes AI-driven encryption to secure data during processing and transmission.",
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
                  q: "What is VaultreeAI?",
                  a: "VaultreeAI is a privacy-first platform that enables fully functional data encryption and secure processing without exposing raw data, even during computation.",
                },
                {
                  q: "How does VaultreeAI work?",
                  a: "VaultreeAI uses advanced cryptographic methods like Fully Homomorphic Encryption and Encrypted Search to allow querying and processing encrypted data in real time.",
                },
                {
                  q: "Is VaultreeAI easy to use for beginners?",
                  a: "Yes, VaultreeAI offers developer-friendly SDKs and APIs that simplify integration and make it accessible to teams with varying technical backgrounds.",
                },
                {
                  q: "Is VaultreeAI free to use?",
                  a: "VaultreeAI provides a free trial tier, with scalable enterprise options available through subscription plans.",
                },
                {
                  q: "What platforms is VaultreeAI available on?",
                  a: "VaultreeAI is available via cloud platform, self-hosted options, and integration-ready SDKs and APIs.",
                },
                {
                  q: "What makes VaultreeAI unique?",
                  a: "VaultreeAI enables computation on encrypted data without needing to decrypt it, ensuring maximum security and compliance.",
                },
                {
                  q: "Who should use VaultreeAI?",
                  a: "Organizations in finance, healthcare, legal, and any industry dealing with sensitive information benefit greatly from VaultreeAI.",
                },
                {
                  q: "Can VaultreeAI be used for business data protection?",
                  a: "Yes, VaultreeAI is ideal for safeguarding business-critical data while maintaining usability and performance.",
                },
                {
                  q: "What kind of templates or models does VaultreeAI offer?",
                  a: "VaultreeAI provides SDKs with built-in encryption models for structured and unstructured data formats.",
                },
                {
                  q: "How is VaultreeAI different from InVideo?",
                  a: "InVideo is a content creation tool, whereas VaultreeAI focuses on encryption and privacy-preserving data processing.",
                },
                {
                  q: "How is VaultreeAI different from traditional data masking tools?",
                  a: "Traditional tools reveal data during processing; VaultreeAI keeps it encrypted throughout the data lifecycle.",
                },
                {
                  q: "Can I use VaultreeAI for YouTube content moderation?",
                  a: "While VaultreeAI isn’t built for content moderation, it can help anonymize data extracted from videos through secure processing.",
                },
                {
                  q: "Is there a VaultreeAI mobile app?",
                  a: "VaultreeAI doesn't have a mobile app but offers SDKs for secure mobile integration.",
                },
                {
                  q: "Can I export encrypted data from VaultreeAI in high quality?",
                  a: "Yes, encrypted data can be decrypted securely by authorized parties and exported in the desired format.",
                },
                {
                  q: "Does VaultreeAI support voice data encryption?",
                  a: "Yes, VaultreeAI can encrypt audio data and allow analysis without exposing original recordings.",
                },
                {
                  q: "Does VaultreeAI have a built-in model library?",
                  a: "VaultreeAI includes libraries for encrypted search, filtering, and computation across multiple data types.",
                },
                {
                  q: "Can I use VaultreeAI for social media data analysis?",
                  a: "Yes, VaultreeAI can securely analyze encrypted social media datasets while preserving privacy.",
                },
                {
                  q: "Can I use VaultreeAI for customer data protection?",
                  a: "Absolutely. VaultreeAI is designed to protect customer identities and records during processing.",
                },
                {
                  q: "Does VaultreeAI support text pattern detection?",
                  a: "Yes, pattern detection can be performed on encrypted text using specialized encrypted search algorithms.",
                },
                {
                  q: "Can I encrypt documents and images with VaultreeAI?",
                  a: "Yes, VaultreeAI supports encryption and querying of document metadata and certain visual content.",
                },
                {
                  q: "What AI features does VaultreeAI use?",
                  a: "VaultreeAI integrates cryptographic AI and secure computing to process encrypted data intelligently.",
                },
                {
                  q: "Can I use VaultreeAI for short-form data processing?",
                  a: "Yes, short texts like messages and chat logs can be encrypted and analyzed securely.",
                },
                {
                  q: "What data formats does VaultreeAI support?",
                  a: "VaultreeAI supports JSON, CSV, images, audio, and documents, depending on encryption needs.",
                },
                {
                  q: "Can I use VaultreeAI for real estate customer privacy?",
                  a: "Yes, VaultreeAI can secure transaction records, contracts, and personal details of clients.",
                },
                {
                  q: "Is VaultreeAI suitable for educational institutions?",
                  a: "Yes, it's used for securing student records, exam results, and research data.",
                },
                {
                  q: "Can I collaborate with a team using VaultreeAI?",
                  a: "Enterprise features include multi-user collaboration, permissions, and encrypted access controls.",
                },
                {
                  q: "How much data can VaultreeAI handle?",
                  a: "VaultreeAI scales to handle large enterprise-level datasets and encrypted operations efficiently.",
                },
                {
                  q: "Does VaultreeAI have customer support?",
                  a: "Yes, support is provided through documentation, live chat, and dedicated account managers for enterprise clients.",
                },
                {
                  q: "Does VaultreeAI offer analytics?",
                  a: "Yes, VaultreeAI provides dashboards that track encrypted operations and privacy metrics.",
                },
                {
                  q: "Can I integrate my own encryption keys with VaultreeAI?",
                  a: "Yes, VaultreeAI supports BYOK (Bring Your Own Key) for enhanced key control.",
                },
                {
                  q: "Can I white-label VaultreeAI?",
                  a: "Yes, VaultreeAI offers white-label options for large partners and solution integrators.",
                },
                {
                  q: "Does VaultreeAI have an API?",
                  a: "Yes, VaultreeAI provides RESTful APIs and SDKs for secure application integration.",
                },
                {
                  q: "Is VaultreeAI suitable for eCommerce?",
                  a: "Yes, it protects sensitive information like payment data, user details, and purchase history.",
                },
                {
                  q: "Can I schedule automated encryption jobs in VaultreeAI?",
                  a: "Yes, tasks like data encryption and audit logging can be automated through scheduling tools.",
                },
                {
                  q: "Does VaultreeAI support voice-to-text encryption?",
                  a: "Yes, it can encrypt voice inputs and securely run speech-to-text processes on them.",
                },
                {
                  q: "Does VaultreeAI offer auto-labeling of sensitive data?",
                  a: "Yes, it uses AI to classify and label encrypted data for targeted encryption workflows.",
                },
                {
                  q: "Can VaultreeAI be used offline?",
                  a: "Yes, VaultreeAI supports secure on-premise deployments for full offline capability.",
                },
                {
                  q: "Can I use VaultreeAI for vertical industry use cases?",
                  a: "Yes, VaultreeAI is adaptable for finance, healthcare, education, government, and more.",
                },
                {
                  q: "Does VaultreeAI support real-time processing and alerts?",
                  a: "Yes, it supports real-time encrypted data analysis with alerting for suspicious activities.",
                },
                {
                  q: "Can VaultreeAI detect and encrypt biometric data?",
                  a: "Yes, it can encrypt and manage biometric data like facial patterns and fingerprints.",
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
                    Why Use Vaultree AI?
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
                      VaultreeAI is designed to protect sensitive data through
                      advanced cryptographic techniques, enabling secure
                      processing without exposing raw data.
                    </li>
                    <li className="mb-3">
                      Ideal for industries such as healthcare, finance,
                      education, and legal, where data privacy, compliance, and
                      secure data processing are essential.
                    </li>
                    <li className="mb-3">
                      Automatically encrypts and anonymizes sensitive data using
                      advanced, context-aware cryptographic methods and AI
                      models.
                    </li>
                    <li className="mb-3">
                      Simplifies privacy workflows without requiring in-depth
                      technical knowledge, making it accessible to a wide range
                      of users.
                    </li>
                    <li className="mb-3">
                      VaultreeAI provides a scalable, secure, and
                      regulation-compliant solution for managing privacy across
                      all types and volumes of data.
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
                    VaultreeAI uses privacy-preserving cryptography to protect
                    sensitive data while allowing its secure processing without
                    exposure.
                  </li>
                  <li className="mb-2">
                    Ideal for industries such as healthcare, finance, and legal,
                    ensuring compliance with global regulations like GDPR and
                    HIPAA.
                  </li>
                  <li className="mb-2">
                    Supports a wide range of data types, including structured,
                    unstructured, and multimedia formats like text, images,
                    voice, and video.
                  </li>
                  <li className="mb-2">
                    Easy integration with APIs, SDKs, and both cloud and
                    on-premise deployment options.
                  </li>
                  <li className="mb-2">
                    Real-time processing and alerts enable proactive privacy
                    management and data security.
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
                    May require technical expertise to fully integrate and
                    optimize for specific privacy use cases.
                  </li>
                  <li className="mb-2">
                    Advanced features like custom cryptographic model
                    configurations may only be available in higher-tier plans.
                  </li>
                  <li className="mb-2">
                    Processing large-scale data, especially multimedia, can
                    require significant computational resources.
                  </li>
                  <li className="mb-2">
                    On-premise and offline deployments necessitate additional
                    infrastructure and configuration setup.
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
                    **TokenEx** – A cloud-based tokenization platform that
                    secures sensitive data without exposing it.
                  </li>
                  <li className="mb-2">
                    **Presidio by Microsoft** – Open-source tool for data
                    de-identification and PII (Personally Identifiable
                    Information) detection.
                  </li>
                  <li className="mb-2">
                    **Amazon Macie** – Uses machine learning to automatically
                    discover, classify, and protect sensitive data within AWS.
                  </li>
                  <li className="mb-2">
                    **Google DLP (Data Loss Prevention)** – A cloud-based data
                    loss prevention tool that helps with content inspection,
                    classification, and redaction.
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
          className="d-inline-block text-white text-decoration-none ml-3 py-1"
        >
          <i className="bi bi-arrow-left me-2"></i>Back to Directory{" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
                           <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mb-5">
            {/* Left side (Text Section) */}
           <div style={{ flex: 1, paddingRight: "30px" }} className="order-2 order-md-1">sName="col-6 col-md-12 "
            
              <p className="text-primary">Write better, faster</p>
              <h1>Vaultree AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Vaultree AI is an innovative AI-driven encryption and data
                privacy solution that helps businesses and organizations
                securely manage sensitive information. Vaultree AI employs
                privacy-preserving machine learning and advanced encryption
                techniques to provide secure data processing without
                compromising security. Its main goal is to protect data across
                industries such as healthcare, finance, and enterprise
                applications while ensuring compliance with privacy regulations
                like GDPR and HIPAA.
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
                                     src={c}
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
                How to Use Vaultree AI?
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
                      Encrypt Your Data
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Vaultree allows you to encrypt your sensitive data before
                      processing, using fully functional data-in-use encryption
                      technology.
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
                      Search & Process Encrypted Data
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Perform operations such as search, query, and analytics
                      directly on encrypted data without decryption.
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
                      Decrypt Results Securely
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Retrieve and decrypt only the final outputs — ensuring
                      data privacy throughout the entire process.
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

export default VaultreeAI;
