import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./ImageMindAI.css";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
// import magisto from "../../../Images/MagistoAI.png";
import enveil from "../../../../public/assets/Img/AI for Privacy/10.jpg"
import enveilSS1 from '../../../../public/assets/Img/AI for Privacy/enveilSS1.png';
import enveilSS2 from '../../../../public/assets/Img/AI for Privacy/enveilSS2.png';


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
const Enveil = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                High Productivity and Business Tools
              </p>
              <h3 className=""> Drag-and-Drop Simplicity & Custom Branding</h3>
            </div>
            {[
              {
                icon: "📊",
                title: "Robust Data Security:",
                desc: "Enveil AI offers AI-powered data encryption and privacy-preserving machine learning techniques to ensure sensitive information remains secure throughout the data processing cycle. This protects data from potential breaches, making it a vital tool for data-intensive industries.",
              },
              {
                icon: "🤖",
                title: "Comprehensive Compliance:",
                desc: " With its focus on regulatory compliance, Enveil AI helps businesses comply with laws like GDPR and CCPA. Built-in tools for compliance reporting, audit tracking, and data anonymization ensure that companies can meet regulatory requirements while processing sensitive data.",
              },
              {
                icon: "🔗",
                title: "Privacy-Preserving AI:",
                desc: " Enveil AI allows businesses to train machine learning models and perform AI analytics on encrypted data. The platform ensures that even while utilizing AI, organizations can maintain data privacy and compliance with data protection laws.",
              },
              {
                icon: "🧠",
                title: "Secure Data Sharing and Collaboration:",
                desc: "Enveil AI for secure data sharing ensures that businesses can collaborate with multiple stakeholders or partners while keeping sensitive information protected. This is especially useful for industries like healthcare, finance, and research, where data privacy is paramount.",
              },
              {
                icon: "📤",
                title: "Scalable Solutions:",
                desc: "Whether you're a small business or a large enterprise, Enveil AI offers scalable solutions for secure cloud services, encrypted data processing, and privacy-first analytics. The platform can be customized to meet the needs of any organization, regardless of its size or sector.",
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
                src={enveilSS1}
                alt="enviel"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={enveilSS2}
                alt="enveil"
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
                  q: "What is Enveil AI?",
                  a: "Enveil AI is a platform focused on privacy-preserving machine learning and secure data processing, enabling businesses to analyze and collaborate on sensitive data while ensuring privacy and regulatory compliance.",
                },
                {
                  q: "How does Enveil AI protect data privacy?",
                  a: "Enveil AI uses advanced encryption and privacy-preserving techniques to ensure that sensitive data remains private throughout the entire data processing cycle.",
                },
                {
                  q: "Can Enveil AI be used for machine learning?",
                  a: "Yes, Enveil AI allows businesses to train machine learning models on encrypted data, ensuring data privacy and compliance with privacy regulations.",
                },
                {
                  q: "How does Enveil AI ensure GDPR compliance?",
                  a: "Enveil AI includes built-in tools for GDPR compliance, such as data anonymization, secure data sharing, and compliance tracking.",
                },
                {
                  q: "Is Enveil AI suitable for the healthcare industry?",
                  a: "Yes, Enveil AI helps healthcare organizations protect sensitive medical data and comply with HIPAA regulations by ensuring secure and private data processing.",
                },
                {
                  q: "Can Enveil AI be used for data collaboration?",
                  a: "Yes, Enveil AI facilitates secure data collaboration, allowing businesses to share encrypted data with external partners while ensuring that sensitive information remains protected.",
                },
                {
                  q: "Does Enveil AI support AI model training on encrypted data?",
                  a: "Yes, Enveil AI enables businesses to train AI models on encrypted data, preserving data privacy and ensuring that sensitive information is never exposed during the training process.",
                },
                {
                  q: "How does Enveil AI ensure secure data sharing?",
                  a: "Enveil AI uses end-to-end encryption to ensure that data shared between teams, organizations, or external partners remains secure and private.",
                },
                {
                  q: "Does Enveil AI provide solutions for regulatory compliance?",
                  a: "Yes, Enveil AI provides built-in tools for regulatory compliance, making it easier for businesses to adhere to GDPR, CCPA, and other data protection regulations.",
                },
                {
                  q: "How does Enveil AI handle data encryption?",
                  a: "Enveil AI uses advanced encryption techniques to ensure that data is protected at all stages of its lifecycle—from storage to transmission to analysis.",
                },
                {
                  q: "How does Enveil AI enhance data security in cloud environments?",
                  a: "Enveil AI enhances cloud data security by applying end-to-end encryption and privacy-preserving analytics to data stored and processed in the cloud, ensuring that sensitive information remains protected even in a multi-cloud environment.",
                },
                {
                  q: "Can Enveil AI be used in the finance sector?",
                  a: "Yes, Enveil AI is particularly beneficial for the finance sector, providing solutions for secure financial data processing, compliance with PCI-DSS, and ensuring that financial transactions remain private and secure.",
                },
                {
                  q: "How does Enveil AI prevent unauthorized access to sensitive data?",
                  a: "Enveil AI prevents unauthorized access to sensitive data by implementing strong access controls, encryption, and audit logs, ensuring that only authorized users can access the data.",
                },
                {
                  q: "Does Enveil AI support multi-party collaborations?",
                  a: "Yes, Enveil AI supports multi-party collaboration by allowing multiple organizations or departments to share and analyze encrypted data without exposing sensitive information.",
                },
                {
                  q: "Can Enveil AI be integrated into existing IT systems?",
                  a: "Yes, Enveil AI can be integrated into existing IT systems with minimal disruption. It supports integration with various cloud platforms and on-premise systems, ensuring a smooth transition for businesses adopting the platform.",
                },
                {
                  q: "How does Enveil AI maintain compliance with privacy laws?",
                  a: "Enveil AI includes built-in compliance tools such as data anonymization, audit trails, and compliance reporting to help businesses meet privacy laws like GDPR, CCPA, and HIPAA.",
                },
                {
                  q: "Can Enveil AI help prevent data breaches?",
                  a: "Yes, Enveil AI helps prevent data breaches by using encryption and secure data processing techniques, ensuring that sensitive data remains private and protected during storage, transmission, and analysis.",
                },
                {
                  q: "How does Qlik Sense AI handle large datasets?How does Enveil AI handle encrypted machine learning?",
                  a: "Enveil AI supports encrypted machine learning, allowing businesses to build, train, and evaluate machine learning models on encrypted data, ensuring that sensitive data remains protected throughout the process.",
                },
                {
                  q: "Can Enveil AI be used for compliance with data sovereignty laws?",
                  a: "Yes, Enveil AI supports data sovereignty by allowing businesses to store and process data within specific jurisdictions, ensuring compliance with local laws and regulations related to data residency.",
                },
                {
                  q: "Does Enveil AI offer any tools for data anonymization?",
                  a: "Yes, Enveil AI includes data anonymization tools, allowing businesses to anonymize sensitive data while maintaining its usability for analysis and machine learning purposes, ensuring compliance with privacy regulations.",
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

      case "why-we-use":
        return (
          <div className="container">
            <div className="row g-4">
              <div className="col-12">
                <div className="custom-card text-light p-5 text-center">
                  <h3 className="fw-bold mb-4 text-start text-primary">
                    Why Use Enveil AI?
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
                      Enveil AI provides advanced data encryption and
                      privacy-preserving machine learning solutions to help
                      businesses protect sensitive information while utilizing
                      AI insights.
                    </li>
                    <li className="mb-3">
                      Ideal for industries like healthcare, finance, and
                      government that handle sensitive data and require strong
                      data privacy and security compliance.
                    </li>
                    <li className="mb-3">
                      Uses homomorphic encryption to perform analytics on
                      encrypted data, ensuring that data is never exposed or
                      decrypted during the processing, keeping it secure.
                    </li>
                    <li className="mb-3">
                      Empowers data scientists and analysts with a platform that
                      enables AI-driven insights without compromising data
                      privacy or confidentiality.
                    </li>
                    <li className="mb-3">
                      Scalable and cloud-native, Enveil AI offers seamless
                      integration with existing data workflows while ensuring
                      compliance with industry regulations like GDPR and HIPAA.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Start Analyzing Now
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
                    Advanced Security Features: Enveil AI uses AI-powered
                    encryption and privacy-preserving machine learning to ensure
                    that sensitive data remains protected at all stages of
                    processing, from storage to analysis.
                  </li>
                  <li className="mb-2">
                    Regulatory Compliance Made Easy: The platform’s built-in
                    compliance tools help businesses meet global privacy
                    regulations, such as GDPR, CCPA, and HIPAA, ensuring that
                    they adhere to industry standards without manual
                    intervention.
                  </li>
                  <li className="mb-2">
                    Data Privacy and Confidentiality: Enveil AI ensures that
                    sensitive information remains private and confidential by
                    using encryption and data anonymization, even while
                    processing and analyzing data.
                  </li>
                  <li className="mb-2">
                    Ease of Use: Despite its complex security features, Enveil
                    AI is user-friendly, with intuitive interfaces and seamless
                    integration with existing enterprise systems.
                  </li>
                  <li className="mb-2">
                    Versatility: Enveil AI supports a variety of industries,
                    including healthcare, finance, e-commerce, and government,
                    making it an all-encompassing solution for businesses
                    needing to secure and manage sensitive data.
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
                    Technical Expertise Required: While Enveil AI is
                    user-friendly, fully leveraging its capabilities might
                    require technical expertise, especially when integrating AI
                    models or customizing encryption techniques.
                  </li>
                  <li className="mb-2">
                    Cost: The advanced encryption and compliance tools offered
                    by Enveil AI might be more expensive than other simpler
                    solutions, making it a more costly choice for small
                    businesses or startups.
                  </li>
                  <li className="mb-2">
                    Integration Complexity: Businesses with legacy systems may
                    face integration challenges when adopting Enveil AI. The
                    process may require additional technical work to integrate
                    with existing infrastructures.
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
                    Homomorphic Encryption Solutions (e.g., Microsoft SEAL):
                    These solutions offer a similar approach to
                    privacy-preserving AI, allowing computations on encrypted
                    data. However, they often require more manual setup and are
                    generally more complex to implement than Enveil AI.
                  </li>
                  <li className="mb-2">
                    OneTrust: OneTrust provides a robust privacy management
                    platform that helps businesses comply with privacy laws and
                    regulations. However, it focuses primarily on privacy
                    management rather than secure AI-driven data analytics.
                  </li>
                  <li className="mb-2">
                    BigID: BigID specializes in data privacy management and data
                    discovery, helping businesses protect sensitive information.
                    While BigID offers powerful data governance, it doesn’t
                    provide the same AI-powered encryption and
                    privacy-preserving machine learning features as Enveil AI.
                  </li>
                  <li className="mb-2">
                    Tegus: Tegus focuses on providing AI-driven data protection
                    solutions for businesses, but it lacks the same level of
                    privacy-preserving machine learning and encrypted data
                    processing capabilities offered by Enveil AI.
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
  {/* Image Section - first on mobile, second on desktop */}
  <div
    className="col-12 col-md-6 order-1 order-md-2 text-center mb-4 mb-md-0"
    style={{ height: "auto" }}
  >
    <img
      src={enveil}
      alt="Enveil AI"
      style={{ maxWidth: "100%", height: "300px", objectFit: "contain" }}
      className="img-fluid"
    />
  </div>

  {/* Text Section - second on mobile, first on desktop */}
  <div
    className="col-12 col-md-6 order-2 order-md-1"
    style={{ paddingRight: "30px" }}
  >
    <p className="text-primary">Grow better, faster</p>
    <h1>Enveil AI</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      Enveil AI is an advanced privacy-preserving machine learning
      platform that focuses on secure data processing and AI-driven
      data security. It offers a suite of data privacy tools designed
      to help businesses securely process, analyze, and share
      sensitive data while complying with global privacy regulations
      like GDPR and CCPA. Enveil AI leverages end-to-end encryption
      and privacy-preserving AI techniques to ensure data
      confidentiality, even during the processing and analysis stages.
    </p>
    <p>
      With Enveil AI features, businesses can use machine learning and
      AI models on encrypted data, enabling them to leverage AI
      without exposing sensitive information. The platform provides
      solutions for secure data sharing, data governance, and
      regulatory compliance, making it suitable for industries such as
      healthcare, finance, government, and more.
    </p>
    <div className="mb-3">
      <a
        href="https://www.enveil.com"
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
                How to Use Enveil AI?
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
                      Data Privacy and Protection
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Enveil AI provides tools for secure data storage and
                      ensures data sovereignty. It protects sensitive data by
                      encrypting it throughout its lifecycle—from storage to
                      transmission—ensuring it remains private and secure.
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
                      Machine Learning and AI Model Training
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Enveil AI for machine learning enables businesses to train
                      AI models on encrypted data. The platform uses
                      privacy-preserving techniques to maintain confidentiality
                      while developing and refining machine learning models,
                      making it ideal for organizations concerned about data
                      privacy.
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
                      Regulatory Compliance
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      With Enveil AI compliance tools, businesses can ensure
                      they adhere to privacy regulations like GDPR and CCPA.
                      Enveil AI offers built-in compliance tracking, secure data
                      sharing, and data anonymization features, making it easier
                      for businesses to meet regulatory standards.
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

export default Enveil;
