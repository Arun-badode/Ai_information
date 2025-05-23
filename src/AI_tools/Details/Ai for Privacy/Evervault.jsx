import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
// import "./PrivateAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import   evervault from "../../../../public/assets/Img/AI for Privacy/5.jpg"
import evervaultSS1 from '../../../../public/assets/Img/AI for Privacy/evervaultSS1.png';
import evervaultSS2 from '../../../../public/assets/Img/AI for Privacy/evervaultSS2.png';

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
const Evervault = () => {
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
                title: "AI-Powered Encryption:",
                desc: "Automates data protection through intelligent encryption processes.",
              },
              {
                icon: "🖼",
                title: "GDPR & HIPAA Compliance:",
                desc: "Built-in features to ensure your data management practices align with regulatory standards.",
              },
              {
                icon: "🎵",
                title: "Secure Data Sharing:",
                desc: " Safely share data across various platforms with guaranteed encryption.",
              },
              {
                icon: "✍",
                title: "Cloud Security:",
                desc: "Integrates with cloud environments to secure data without compromising on accessibility or performance.",
              },
              {
                icon: "📱",
                title: "Data Anonymization: ",
                desc: "Protects personally identifiable information (PII) with advanced anonymization techniques.",
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
                src={evervaultSS1}
                alt="evervault"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={evervaultSS2}
                alt="evervault"
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
                  q: "What is EverVaultAI?",
                  a: "EverVaultAI is a data security platform designed to encrypt sensitive information and enable secure data processing in real time without exposing raw data.",
                },
                {
                  q: "How does EverVaultAI work?",
                  a: "EverVaultAI leverages advanced encryption technologies like secure enclaves and encrypted functions to process data securely inside isolated environments.",
                },
                {
                  q: "Is EverVaultAI easy to use for beginners?",
                  a: "Yes, EverVaultAI offers simple SDKs and APIs that allow developers of all experience levels to easily integrate encryption into their apps.",
                },
                {
                  q: "Is EverVaultAI free to use?",
                  a: "EverVaultAI provides a free tier with basic functionality, along with paid plans for enterprises that need advanced features and scalability.",
                },
                {
                  q: "What platforms is EverVaultAI available on?",
                  a: "EverVaultAI is available via cloud services, API integrations, and SDKs for major development frameworks.",
                },
                {
                  q: "What makes EverVaultAI unique?",
                  a: "EverVaultAI allows developers to encrypt and process sensitive data using secure enclaves without managing complex encryption logic themselves.",
                },
                {
                  q: "Who should use EverVaultAI?",
                  a: "Businesses handling sensitive data—such as in fintech, healthcare, e-commerce, or legal sectors—benefit greatly from EverVaultAI's secure processing capabilities.",
                },
                {
                  q: "Can EverVaultAI be used for business data protection?",
                  a: "Absolutely. EverVaultAI helps protect critical business data during transmission, storage, and processing phases.",
                },
                {
                  q: "What kind of templates or models does EverVaultAI offer?",
                  a: "EverVaultAI provides SDKs and templates to help developers quickly implement encryption workflows for common data types and patterns.",
                },
                {
                  q: "How is EverVaultAI different from InVideo?",
                  a: "InVideo is a media editing tool, while EverVaultAI is focused entirely on secure encryption and data protection workflows.",
                },
                {
                  q: "How is EverVaultAI different from traditional data masking tools?",
                  a: "Unlike masking, EverVaultAI ensures that data remains encrypted even during processing, providing stronger end-to-end protection.",
                },
                {
                  q: "Can I use EverVaultAI for YouTube content moderation?",
                  a: "While it's not built for content moderation, EverVaultAI can help secure extracted data or metadata from YouTube videos.",
                },
                {
                  q: "Is there an EverVaultAI mobile app?",
                  a: "No mobile app, but EverVaultAI SDKs can be used to build secure mobile apps with encrypted data handling.",
                },
                {
                  q: "Can I export encrypted data from EverVaultAI in high quality?",
                  a: "Yes, encrypted data can be decrypted and securely exported by authorized systems or users.",
                },
                {
                  q: "Does EverVaultAI support voice data encryption?",
                  a: "Yes, EverVaultAI can encrypt audio data and manage secure processing in compatible environments.",
                },
                {
                  q: "Does EverVaultAI have a built-in model library?",
                  a: "It includes pre-configured encryption workflows and SDKs tailored for common use cases.",
                },
                {
                  q: "Can I use EverVaultAI for social media data analysis?",
                  a: "Yes, EverVaultAI can encrypt and help process social media data securely, especially PII and behavioral insights.",
                },
                {
                  q: "Can I use EverVaultAI for customer data protection?",
                  a: "Yes, protecting customer PII and transaction data is one of EverVaultAI's core strengths.",
                },
                {
                  q: "Does EverVaultAI support text pattern detection?",
                  a: "Yes, pattern recognition and tokenization can be performed on encrypted data via integrated services.",
                },
                {
                  q: "Can I encrypt documents and images with EverVaultAI?",
                  a: "Yes, EverVaultAI supports encryption and controlled processing of documents and some image metadata.",
                },
                {
                  q: "What AI features does EverVaultAI use?",
                  a: "EverVaultAI doesn't rely on AI directly, but integrates with secure environments that allow encrypted functions and logic.",
                },
                {
                  q: "Can I use EverVaultAI for short-form data processing?",
                  a: "Yes, short messages, logs, and forms can be encrypted and securely processed in real time.",
                },
                {
                  q: "What data formats does EverVaultAI support?",
                  a: "It supports JSON, CSV, form data, and more—common formats in modern web and backend systems.",
                },
                {
                  q: "Can I use EverVaultAI for real estate customer privacy?",
                  a: "Yes, it helps protect transaction data, contracts, and personal info related to property buyers and sellers.",
                },
                {
                  q: "Is EverVaultAI suitable for educational institutions?",
                  a: "Yes, it’s ideal for protecting student records, exam data, and internal communications.",
                },
                {
                  q: "Can I collaborate with a team using EverVaultAI?",
                  a: "Yes, enterprise plans support user roles, permissions, and collaborative access to encrypted operations.",
                },
                {
                  q: "How much data can EverVaultAI handle?",
                  a: "It’s built to scale with enterprise workloads and can handle large volumes of encrypted data efficiently.",
                },
                {
                  q: "Does EverVaultAI have customer support?",
                  a: "Yes, it offers comprehensive documentation, email support, and dedicated account management for enterprise clients.",
                },
                {
                  q: "Does EverVaultAI offer analytics?",
                  a: "Yes, dashboards allow monitoring of encrypted activity, usage, and compliance metrics.",
                },
                {
                  q: "Can I integrate my own encryption keys with EverVaultAI?",
                  a: "Yes, EverVaultAI supports BYOK (Bring Your Own Key) and advanced key management practices.",
                },
                {
                  q: "Can I white-label EverVaultAI?",
                  a: "Yes, white-labeling is available for enterprise and SaaS partners who want a custom-branded solution.",
                },
                {
                  q: "Does EverVaultAI have an API?",
                  a: "Yes, EverVaultAI provides RESTful APIs and SDKs for seamless integration into modern apps.",
                },
                {
                  q: "Is EverVaultAI suitable for eCommerce?",
                  a: "Yes, it can protect customer profiles, payment details, and transactional data in eCommerce apps.",
                },
                {
                  q: "Can I schedule automated encryption jobs in EverVaultAI?",
                  a: "Yes, encryption, logging, and audit tasks can be scheduled and triggered via API or workflow automation.",
                },
                {
                  q: "Does EverVaultAI support voice-to-text encryption?",
                  a: "Yes, it allows encrypted voice inputs to be securely converted and analyzed as text.",
                },
                {
                  q: "Does EverVaultAI offer auto-labeling of sensitive data?",
                  a: "Yes, it uses tokenization and pattern detection to automatically classify and secure sensitive fields.",
                },
                {
                  q: "Can EverVaultAI be used offline?",
                  a: "Yes, EverVaultAI supports secure self-hosted deployments with full offline capabilities.",
                },
                {
                  q: "Can I use EverVaultAI for vertical industry use cases?",
                  a: "Yes, it supports tailored encryption needs for finance, healthcare, education, logistics, and more.",
                },
                {
                  q: "Does EverVaultAI support real-time processing and alerts?",
                  a: "Yes, it enables secure, real-time data processing with event triggers and compliance alerts.",
                },
                {
                  q: "Can EverVaultAI detect and encrypt biometric data?",
                  a: "Yes, biometric information like fingerprints or facial patterns can be encrypted and protected.",
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
                    Why Use EverVault AI?
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
                      EverVaultAI enables real-time encryption and secure data
                      processing using technologies like secure enclaves and
                      encrypted functions.
                    </li>
                    <li className="mb-3">
                      Designed for industries with strict data privacy
                      requirements—such as healthcare, finance, legal, and
                      education.
                    </li>
                    <li className="mb-3">
                      Simplifies compliance with data protection regulations
                      like GDPR, HIPAA, and CCPA through built-in security
                      measures.
                    </li>
                    <li className="mb-3">
                      Offers developer-friendly SDKs and APIs for fast
                      integration into modern applications without deep
                      cryptographic knowledge.
                    </li>
                    <li className="mb-3">
                      Scalable and efficient, EverVaultAI helps organizations
                      protect sensitive information at every stage—storage,
                      transmission, and computation.
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
                    EverVaultAI enables secure data processing using
                    encryption-in-use technologies like secure enclaves.
                  </li>
                  <li className="mb-2">
                    Helps businesses stay compliant with data regulations such
                    as GDPR, HIPAA, and PCI DSS.
                  </li>
                  <li className="mb-2">
                    Developer-friendly SDKs and APIs simplify integration into
                    existing applications.
                  </li>
                  <li className="mb-2">
                    Offers encryption of data without disrupting application
                    performance or user experience.
                  </li>
                  <li className="mb-2">
                    Supports Bring Your Own Key (BYOK) and fine-grained access
                    control for better key management.
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
                    May have a learning curve for teams unfamiliar with
                    enclave-based architecture.
                  </li>
                  <li className="mb-2">
                    Some advanced features may require enterprise-level
                    subscriptions.
                  </li>
                  <li className="mb-2">
                    Limited support for processing certain types of unstructured
                    multimedia data.
                  </li>
                  <li className="mb-2">
                    On-premise options may not offer the same ease of deployment
                    as cloud-native solutions.
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
                    <strong>TokenEx</strong> – A cloud-based tokenization
                    platform that secures sensitive data without exposing it.
                  </li>
                  <li className="mb-2">
                    <strong>Presidio by Microsoft</strong> – Open-source tool
                    for data de-identification and PII (Personally Identifiable
                    Information) detection.
                  </li>
                  <li className="mb-2">
                    <strong>Amazon Macie</strong> – Uses machine learning to
                    automatically discover, classify, and protect sensitive data
                    within AWS.
                  </li>
                  <li className="mb-2">
                    <strong>Google DLP (Data Loss Prevention)</strong> – A
                    cloud-based data loss prevention tool that helps with
                    content inspection, classification, and redaction.
                  </li>
                  <li className="mb-2">
                    <strong>Evervault</strong> – A data encryption platform that
                    allows processing and analyzing of sensitive data without
                    exposure using hardware-encrypted data storage.
                  </li>
                  <li className="mb-2">
                    <strong>Fortanix</strong> – Offers Runtime Encryption,
                    enabling encryption of data during computation with secure
                    enclaves and hardware-assisted security.
                  </li>
                  <li className="mb-2">
                    <strong>Symantec Data Loss Prevention</strong> – A data
                    protection solution that detects and prevents data leaks,
                    ensuring sensitive information remains secure across
                    endpoints, networks, and cloud platforms.
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
         <div className="row align-items-center mb-4">
  {/* Image Section - First on mobile, second on desktop */}
  <div
    className="col-12 col-md-6 order-1 order-md-2 text-center mb-4 mb-md-0"
    style={{ height: "auto" }}
  >
    <img
      src={evervault}
      alt="EverVault AI"
      style={{ maxWidth: "100%", height: "300px", objectFit: "contain" }}
      className="img-fluid"
    />
  </div>

  {/* Text Section - Second on mobile, first on desktop */}
  <div
    className="col-12 col-md-6 order-2 order-md-1"
    style={{ paddingRight: "30px" }}
  >
    <p className="text-primary">Write better, faster</p>
    <h1>EverVault AI</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      Evervault AI is a cutting-edge tool designed to provide advanced
      encryption and data security for sensitive information. Built with
      AI-powered encryption technology, it offers businesses and organizations
      a powerful solution to protect their data, ensure compliance with
      regulations like GDPR and HIPAA, and maintain the privacy of their users.
      It is an essential tool for enterprises that handle confidential
      information and require secure cloud-based storage and data sharing
      solutions.
    </p>

    <div className="mb-3">
      <a
        href="https://evervault.com"
        rel="noopener noreferrer"
        className="btn btn-primary me-2"
      >
        Explore Tool
      </a>
    </div>
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
                How to Use EverVault AI?
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
                      Secure Your Data
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Vaultree encrypts your sensitive data before processing,
                      using cutting-edge data-in-use encryption technology.
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
                      Perform Encrypted Operations
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      You can search, query, and analyze the encrypted data
                      securely without the need for decryption.
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
                      Securely Decrypt the Results
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      After performing the operations, decrypt only the
                      necessary results to ensure full privacy.
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

export default Evervault;
