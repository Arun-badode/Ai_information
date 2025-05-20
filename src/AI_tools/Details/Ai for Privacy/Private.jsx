import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import "../../ImageMindAI.css"; // <-- custom CSS file import
// review section data

import a from "../../../../public/assets/Img/_AI for Privacy and Data Protection/1.png"



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
const PrivateAI = () => {
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
                title: "Data Protection:",
                desc: "Ensures that data is processed securely, reducing the risk of unauthorized access.",
              },
              {
                icon: "🖼",
                title: "Privacy:",
                desc: "Protects user privacy by anonymizing data and securing communication channels.",
              },
              {
                icon: "🎵",
                title: "GDPR Compliance:",
                desc: " Helps businesses comply with GDPR by providing robust data protection and audit features..",
              },
              {
                icon: "✍",
                title: "Encryption:",
                desc: "Uses AI-driven encryption to ensure that sensitive information remains confidential.",
              },
              {
                icon: "📱",
                title: "Content Protection:",
                desc: " Helps protect intellectual property and other sensitive content from unauthorized access.",
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
                  q: "What is Private AI?",
                  a: "Private AI is an AI-powered privacy tool that helps secure and anonymize sensitive data for businesses and individuals.",
                },
                {
                  q: "How does Private AI work?",
                  a: "It uses artificial intelligence to detect, encrypt, and anonymize sensitive data while maintaining data utility.",
                },
                {
                  q: "Is Private AI easy to use for beginners?",
                  a: "Yes, Private AI offers a user-friendly interface and APIs that make it accessible even to those without technical expertise.",
                },
                {
                  q: "Is Private AI free to use?",
                  a: "Private AI offers a limited free version for basic testing. Advanced features are available in paid enterprise plans.",
                },
                {
                  q: "What platforms is Private AI available on?",
                  a: "Private AI is available via web dashboards, cloud platforms, and as SDKs for integration into various applications.",
                },
                {
                  q: "What makes Private AI unique?",
                  a: "It prioritizes privacy and compliance, using cutting-edge AI to provide real-time data protection and anonymization.",
                },
                {
                  q: "Who should use Private AI?",
                  a: "Organizations in healthcare, finance, education, and law, as well as privacy-conscious individuals, can benefit from Private AI.",
                },
                {
                  q: "Can Private AI be used for business data protection?",
                  a: "Yes, businesses use Private AI to ensure data compliance, secure customer data, and protect internal communications.",
                },
                {
                  q: "What kind of templates or models does Private AI offer?",
                  a: "Private AI includes pre-built models for redacting PII, anonymizing medical data, and complying with regulations like GDPR and HIPAA.",
                },
                {
                  q: "How is Private AI different from InVideo?",
                  a: "InVideo focuses on video editing, while Private AI focuses on data privacy, encryption, and anonymization using AI.",
                },
                {
                  q: "How is Private AI different from traditional data masking tools?",
                  a: "Private AI uses dynamic, context-aware anonymization powered by machine learning, unlike basic masking tools that rely on static rules.",
                },
                {
                  q: "Can I use Private AI for YouTube content moderation?",
                  a: "Yes, it can help detect and redact sensitive information in video content before publishing.",
                },
                {
                  q: "Is there a Private AI mobile app?",
                  a: "Private AI offers mobile SDKs for integrating privacy features into Android and iOS apps.",
                },
                {
                  q: "Can I export anonymized data from Private AI in high quality?",
                  a: "Yes, Private AI allows export of high-quality anonymized datasets or files based on your configuration.",
                },
                {
                  q: "Does Private AI support voice data anonymization?",
                  a: "Yes, it can process and anonymize voice data for use in call centers, recordings, and voice-based services.",
                },
                {
                  q: "Does Private AI have a built-in model library?",
                  a: "Yes, it comes with pre-trained models for PII detection, text redaction, and language processing.",
                },
                {
                  q: "Can I use Private AI for social media data analysis?",
                  a: "Yes, it can analyze and anonymize social media data for insights without compromising user privacy.",
                },
                {
                  q: "Can I use Private AI for customer data protection?",
                  a: "Absolutely, it's widely used to secure customer information in CRMs, support systems, and user databases.",
                },
                {
                  q: "Does Private AI support text pattern detection?",
                  a: "Yes, it supports NLP-based pattern recognition to detect sensitive keywords and redact them.",
                },
                {
                  q: "Can I anonymize documents and images with Private AI?",
                  a: "Yes, Private AI supports anonymization of both textual and visual data using advanced AI algorithms.",
                },
                {
                  q: "What AI features does Private AI use?",
                  a: "It uses NLP, computer vision, and deep learning models to detect, classify, and protect sensitive data.",
                },
                {
                  q: "Can I use Private AI for short-form data processing?",
                  a: "Yes, it’s highly effective for short texts like chats, messages, and snippets containing sensitive information.",
                },
                {
                  q: "What data formats does Private AI support?",
                  a: "It supports structured (CSV, JSON), unstructured (PDFs, emails), and multimedia (images, video, audio) data formats.",
                },
                {
                  q: "Can I use Private AI for real estate customer privacy?",
                  a: "Yes, you can anonymize client data and transaction details to maintain confidentiality.",
                },
                {
                  q: "Is Private AI suitable for educational institutions?",
                  a: "Yes, schools and universities use it to anonymize student records and protect academic data.",
                },
                {
                  q: "Can I collaborate with a team using Private AI?",
                  a: "Enterprise plans offer role-based access and team collaboration for managing and auditing data privacy.",
                },
                {
                  q: "How much data can Private AI handle?",
                  a: "Private AI is built to handle large-scale datasets and batch processing in enterprise environments.",
                },
                {
                  q: "Does Private AI have customer support?",
                  a: "Yes, Private AI offers email, ticket-based, and live support options depending on your plan.",
                },
                {
                  q: "Does Private AI offer analytics?",
                  a: "Yes, it provides insights into data anonymization coverage, compliance status, and data processing metrics.",
                },
                {
                  q: "Can I integrate my own encryption keys with Private AI?",
                  a: "Yes, it allows integration of custom key management systems (KMS) for complete control over encryption.",
                },
                {
                  q: "Can I white-label Private AI?",
                  a: "White-labeling is available in enterprise agreements for custom branding and deployment.",
                },
                {
                  q: "Does Private AI have an API?",
                  a: "Yes, it offers robust REST and GraphQL APIs for integrating data privacy into your applications.",
                },
                {
                  q: "Is Private AI suitable for eCommerce?",
                  a: "Yes, it helps protect customer purchase histories, addresses, and payment data on eCommerce platforms.",
                },
                {
                  q: "Can I schedule automated anonymization jobs in Private AI?",
                  a: "Yes, it supports scheduling for recurring data scans and anonymization tasks.",
                },
                {
                  q: "Does Private AI support voice-to-text anonymization?",
                  a: "Yes, it can transcribe voice to text and then automatically redact sensitive data.",
                },
                {
                  q: "Does Private AI offer auto-labeling of sensitive data?",
                  a: "Yes, it can automatically label PII and sensitive content for review or removal.",
                },
                {
                  q: "Can Private AI be used offline?",
                  a: "Yes, on-premise deployments allow you to use Private AI in secure, disconnected environments.",
                },
                {
                  q: "Can I use Private AI for vertical industry use cases?",
                  a: "Yes, it’s customizable for industries like healthcare, finance, legal, education, and government.",
                },
                {
                  q: "Does Private AI support real-time processing and alerts?",
                  a: "Yes, it supports real-time monitoring and can trigger alerts for privacy violations or breaches.",
                },
                {
                  q: "Can Private AI detect and mask biometric data?",
                  a: "Yes, it can identify and obscure facial features, fingerprints, and other biometric identifiers.",
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
                    Why Use Private AI?
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
                      Private AI is perfect for protecting sensitive information
                      through advanced AI-powered redaction and anonymization.
                    </li>
                    <li className="mb-3">
                      Great for enterprises in healthcare, finance, and legal
                      sectors to ensure compliance and safeguard privacy.
                    </li>
                    <li className="mb-3">
                      Offers automatic data anonymization and redaction using
                      cutting-edge AI models trained for privacy tasks.
                    </li>
                    <li className="mb-3">
                      Simplifies privacy workflows without requiring deep
                      machine learning or data security expertise.
                    </li>
                    <li className="mb-3">
                      Private AI is ideal for organizations seeking secure,
                      scalable, and compliant solutions for handling sensitive
                      data.
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
                    Advanced AI detects and redacts personal and sensitive data
                    automatically.
                  </li>
                  <li className="mb-2">
                    Helps companies meet data privacy regulations like GDPR,
                    HIPAA, and CCPA.
                  </li>
                  <li className="mb-2">
                    Supports multiple languages and file formats (text, audio,
                    video).
                  </li>
                  <li className="mb-2">
                    Easy to integrate into existing workflows via API or SDK.
                  </li>
                  <li className="mb-2">
                    High accuracy with minimal manual intervention needed.
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
                    Requires initial setup and technical understanding for
                    integration.
                  </li>
                  <li className="mb-2">
                    Some advanced features are only available in enterprise
                    plans.
                  </li>
                  <li className="mb-2">
                    May not support all file types or edge cases out of the box.
                  </li>
                  <li className="mb-2">
                    Offline deployment options may require additional
                    configuration.
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
                  <li className="mb-2">
                    OpenMined – Privacy-preserving machine learning tools
                    focused on federated learning and differential privacy.
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
           <div style={{ flex: 1, paddingRight: "30px" }} className="order-2 order-md-1">

              <p className="text-primary">Write better, faster</p>
              <h1>Private AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Private AI refers to privacy-enhancing technologies that
                integrate artificial intelligence (AI) with data protection and
                security features to ensure that sensitive information remains
                secure. These AI tools are designed to process and analyze data
                while maintaining privacy, whether it's through encryption,
                anonymization, or other data governance methods. Private AI is
                widely used in industries like healthcare, finance, and
                enterprise security to protect user data from unauthorized
                access and breaches.
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
                           src={a}
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
                How to Use Private AI?
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
                      Upload Your Content
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Start by uploading your text, audio, video, or documents
                      containing sensitive data.
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
                      Let AI Detect & Redact
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Private AI automatically identifies and redacts personally
                      identifiable information (PII) using advanced AI models.
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
                      Download or Integrate
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Download the redacted files or integrate the results into
                      your workflow via API or SDK.
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

export default PrivateAI;
