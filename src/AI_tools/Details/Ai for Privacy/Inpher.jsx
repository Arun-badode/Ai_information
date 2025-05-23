import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./PrivateAI.css"; // <-- custom CSS file import
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
const InpherAI= () => {
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
                title: "Machine Learning with Privacy:",
                desc: "Inpher AI allows organizations to leverage machine learning while maintaining the privacy of sensitive data. This enables the development of AI models without the risk of exposing customer data.",
              },
              {
                icon: "🖼",
                title: "Healthcare:",
                desc: " Inpher AI’s platform is widely used in the healthcare industry to protect patient data and comply with health data privacy regulations like HIPAA.",
              },
              {
                icon: "🎵",
                title: "Financial Services: ",
                desc: " Inpher AI helps financial institutions securely process customer information while adhering to industry regulations like financial compliance and data governance.",
              },
              {
                icon: "✍",
                title: "Data Privacy:",
                desc: "Inpher AI is designed to help businesses implement privacy-conscious machine learning and secure data handling practices that comply with GDPR, CCPA, and other privacy laws.",

              },
              {
                icon: "📱",
                title: "Cloud Services:",
                desc: "Inpher AI integrates with cloud-based systems to provide secure cloud services for enterprise data storage, analysis, and processing.",
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
  q: "What is InpherAI?",
  a: "InpherAI is a privacy-enhancing technology platform that enables secure data collaboration and computation across distributed sources without exposing raw data.",
},
{
  q: "How does InpherAI work?",
  a: "InpherAI uses secure multiparty computation (SMPC), federated learning, and homomorphic encryption to enable analysis on encrypted and distributed data.",
},
{
  q: "Is InpherAI easy to use for beginners?",
  a: "Yes, InpherAI offers intuitive APIs and SDKs, making it easier for data teams and developers to integrate privacy-preserving technologies.",
},
{
  q: "Is InpherAI free to use?",
  a: "InpherAI offers a demo and trial experience. Enterprise deployments are available through subscription-based plans.",
},
{
  q: "What platforms is InpherAI available on?",
  a: "InpherAI is available via cloud services, hybrid deployments, and on-premise environments for maximum control and compliance.",
},
{
  q: "What makes InpherAI unique?",
  a: "InpherAI enables analytics and machine learning across multiple parties’ encrypted data, without centralizing or exposing any of it.",
},
{
  q: "Who should use InpherAI?",
  a: "Organizations in sectors like healthcare, finance, and government benefit from InpherAI’s secure computation capabilities on sensitive or regulated data.",
},
{
  q: "Can InpherAI be used for business data protection?",
  a: "Yes, InpherAI ensures secure computation and sharing of business-critical data across internal teams or partners.",
},
{
  q: "What kind of templates or models does InpherAI offer?",
  a: "InpherAI provides libraries and SDKs that support secure machine learning and analytics on encrypted, distributed datasets.",
},
{
  q: "How is InpherAI different from InVideo?",
  a: "InVideo is a content creation tool, while InpherAI focuses on secure computation and privacy-preserving data collaboration.",
},
{
  q: "How is InpherAI different from traditional data masking tools?",
  a: "Unlike traditional tools, InpherAI enables computation without ever revealing raw data, ensuring stronger privacy protection.",
},
{
  q: "Can I use InpherAI for YouTube content moderation?",
  a: "InpherAI isn’t designed for content moderation but can help with analyzing encrypted video metadata securely if needed.",
},
{
  q: "Is there an InpherAI mobile app?",
  a: "InpherAI does not offer a mobile app, but SDKs support integration with mobile and web applications securely.",
},
{
  q: "Can I export encrypted data from InpherAI in high quality?",
  a: "Yes, results from encrypted computation can be securely exported in decrypted form by authorized users.",
},
{
  q: "Does InpherAI support voice data encryption?",
  a: "Yes, InpherAI can process encrypted voice data without exposing the original recordings.",
},
{
  q: "Does InpherAI have a built-in model library?",
  a: "Yes, InpherAI offers tools for privacy-preserving analytics, federated learning, and secure data operations.",
},
{
  q: "Can I use InpherAI for social media data analysis?",
  a: "Yes, InpherAI enables analysis of encrypted social media data for insights without compromising privacy.",
},
{
  q: "Can I use InpherAI for customer data protection?",
  a: "Absolutely. InpherAI protects customer records during computation, reducing risk while enabling insights.",
},
{
  q: "Does InpherAI support text pattern detection?",
  a: "Yes, InpherAI supports encrypted text processing and pattern recognition with secure search techniques.",
},
{
  q: "Can I encrypt documents and images with InpherAI?",
  a: "Yes, InpherAI supports encrypted computation over document and image metadata, depending on the use case.",
},
{
  q: "What AI features does InpherAI use?",
  a: "InpherAI uses secure AI models trained using federated learning and SMPC without exposing raw datasets.",
},
{
  q: "Can I use InpherAI for short-form data processing?",
  a: "Yes, InpherAI can handle encrypted messaging, logs, and other short-text formats.",
},
{
  q: "What data formats does InpherAI support?",
  a: "InpherAI supports structured (CSV, JSON), semi-structured, and some multimedia metadata formats.",
},
{
  q: "Can I use InpherAI for real estate customer privacy?",
  a: "Yes, InpherAI helps secure contracts, client details, and transactions in real estate platforms.",
},
{
  q: "Is InpherAI suitable for educational institutions?",
  a: "Yes, InpherAI is useful for securing student records, assessments, and sensitive institutional data.",
},
{
  q: "Can I collaborate with a team using InpherAI?",
  a: "Yes, InpherAI supports multi-party computations and access controls for secure team collaboration.",
},
{
  q: "How much data can InpherAI handle?",
  a: "InpherAI is scalable and capable of managing large, distributed datasets across multiple nodes.",
},
{
  q: "Does InpherAI have customer support?",
  a: "Yes, InpherAI offers documentation, onboarding support, and dedicated customer assistance for enterprise users.",
},
{
  q: "Does InpherAI offer analytics?",
  a: "Yes, InpherAI enables privacy-preserving analytics and insights across encrypted and distributed data sets.",
},
{
  q: "Can I integrate my own encryption keys with InpherAI?",
  a: "Yes, InpherAI allows integration with external KMS and supports BYOK (Bring Your Own Key).",
},
{
  q: "Can I white-label InpherAI?",
  a: "Yes, InpherAI supports white-labeling for enterprise partners and platform providers.",
},
{
  q: "Does InpherAI have an API?",
  a: "Yes, InpherAI offers APIs and SDKs to integrate privacy-preserving features into your applications.",
},
{
  q: "Is InpherAI suitable for eCommerce?",
  a: "Yes, eCommerce businesses use InpherAI to protect customer and transaction data without sacrificing analytical capability.",
},
{
  q: "Can I schedule automated encryption jobs in InpherAI?",
  a: "Yes, InpherAI supports job scheduling for secure data operations and encrypted workflow management.",
},
{
  q: "Does InpherAI support voice-to-text encryption?",
  a: "Yes, InpherAI can process voice inputs through secure voice-to-text pipelines.",
},
{
  q: "Does InpherAI offer auto-labeling of sensitive data?",
  a: "Yes, InpherAI can automatically identify and tag sensitive data for encryption and policy enforcement.",
},
{
  q: "Can InpherAI be used offline?",
  a: "Yes, InpherAI supports on-premise deployments for secure offline data processing.",
},
{
  q: "Can I use InpherAI for vertical industry use cases?",
  a: "Yes, InpherAI is tailored for industries like healthcare, finance, government, and enterprise analytics.",
},
{
  q: "Does InpherAI support real-time processing and alerts?",
  a: "Yes, InpherAI includes features for real-time privacy-preserving computations and alerting systems.",
},
{
  q: "Can InpherAI detect and encrypt biometric data?",
  a: "Yes, InpherAI can process and protect biometric data such as fingerprints and facial recognition data securely.",
}
]
                .map((item, i) => ({ ...item, id: `faq${i}`}))
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
                    Why Use Inpher AI?
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
                     InpherAI enables privacy-preserving computation using advanced cryptography like Secure Multiparty Computation (SMPC) and Federated Learning, ensuring no raw data is ever exposed.
                    </li>
                    <li className="mb-3">
                      Perfect for data-sensitive industries like healthcare, finance, education, and government where confidentiality and compliance are critical.
                    </li>
                    <li className="mb-3">
                       Supports encrypted analytics and machine learning workflows across distributed data sources—no need to centralize or move data.
                    </li>
                    <li className="mb-3">
                      Simplifies secure data collaboration across teams or organizations, with intuitive APIs and SDKs that reduce technical complexity.
                    </li>
                    <li className="mb-3">
                      InpherAI offers a scalable, regulation-compliant solution for secure data processing and collaborative analytics at enterprise scale.
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
                   InpherAI uses Secure Multiparty Computation (SMPC) and Federated Learning to process data without ever exposing raw information.
                  </li>
                  <li className="mb-2">
                     Enables secure collaboration across organizations, perfect for sectors like finance, healthcare, and government.
                  </li>
                  <li className="mb-2">
                   Compliant with data privacy regulations such as GDPR, HIPAA, and CCPA, supporting strong governance.
                  </li>
                  <li className="mb-2">
                    No need to centralize data—analytics and machine learning can be run across distributed systems.
                  </li>
                  <li className="mb-2">
                    API-first design with developer-friendly SDKs for seamless integration into enterprise systems.
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
                   May have a steep learning curve for teams unfamiliar with privacy-preserving computation techniques.
                  </li>
                  <li className="mb-2">
                     Performance can be impacted in complex or latency-sensitive environments due to cryptographic overhead.
                  </li>
                  <li className="mb-2">
                   Requires strong data governance practices for optimal implementation across multiple data silos.
                  </li>
                  <li className="mb-2">
                    Some advanced features or connectors might be gated behind enterprise-tier pricing.
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
                       <strong>Duality Technologies</strong> – Specializes in secure data collaboration using Homomorphic Encryption and Federated AI, enabling privacy-preserving analytics across organizations.
                  </li>
                  <li className="mb-2">
                        <strong>Secure AI Labs (SAIL)</strong> – Offers federated learning and privacy-preserving analytics for biomedical and healthcare data without transferring sensitive data.
                  </li>
                  <li className="mb-2">
                          <strong>Intel HE-Transformer</strong> – An open-source framework by Intel that enables neural network computation on encrypted data using Homomorphic Encryption.
                  </li>
                  <li className="mb-2">
                        <strong>Oasis Labs</strong> – Provides privacy-first cloud computing infrastructure with confidential smart contracts and secure enclaves for data privacy.
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
          <div className=" row d-flex align-items-center justify-content-between mb-1">
            {/* Left side (Text Section) */}
            <div
              style={{ flex: 1, paddingRight: "30px" }}
              className="col-6 col-md-12 "
            >
              <p className="text-primary">Write better, faster</p>
              <h1>Inpher AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
              Inpher AI is an advanced privacy-preserving AI platform designed to provide secure machine learning, data protection, and compliance solutions. With an emphasis on privacy-focused AI and data security, Inpher AI allows businesses to harness the power of artificial intelligence while ensuring their data remains encrypted, compliant, and secure.
            Inpher AI specializes in privacy-preserving machine learning, a groundbreaking approach that allows AI models to process sensitive data without ever exposing it. Whether it’s healthcare data, financial data, or customer information, Inpher AI ensures that all data remains private and secure.

                </p>

              <div className="mb-3">
                <span className="badge bg-primary me-2">Image Generation</span>
                <span className="badge bg-success me-2">Creative</span>
                <span className="badge bg-warning text-dark">Paid</span>
              </div>
            </div>

            {/* Right side (Image Section) */}
            <div
              style={{
                flex: 1,
                textAlign: "center",
                Width: "100%",
                height: "250px",
              }}
              className="col-6 col-md-12 mb-5  "
            >
              <img
                src=""
                style={{ MaxWidth: "100%", height: "300px" }}
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
                How to Use Inpher AI?
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
                       Vaultree allows you to encrypt your sensitive data before processing, using fully functional data-in-use encryption technology.
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
                        Perform operations such as search, query, and analytics directly on encrypted data without decryption.
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
                      Retrieve and decrypt only the final outputs — ensuring data privacy throughout the entire process.
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

          <div className="bg-primary text-center text-light rounded-4 p-5 mt-5">
            <h4 className="mb-3">Ready to get started with Inpher AI?</h4>
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

export default InpherAI;