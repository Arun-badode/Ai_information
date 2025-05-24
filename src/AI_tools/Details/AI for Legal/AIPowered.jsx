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
const AIPowered = () => {
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
                icon: "📑",
                title: "Kira Systems: AI-Powered Legal Document Review Tool",
                desc: "Kira Systems uses AI to streamline the process of reviewing and analyzing legal documents, providing accurate and efficient contract analysis and due diligence support. It can extract key terms, clauses, and data from contracts to identify risks and improve the speed of legal reviews.",
              },
              {
                icon: "⚖",
                title: "Kira Systems Contract Analysis",
                desc: "Kira Systems helps legal professionals by automating the contract review process, reducing human error, and enabling more comprehensive contract analysis. It can process complex legal language, identify critical clauses, and flag any compliance issues.",
              },
              {
                icon: "📜",
                title: "Due Diligence & M&A Support",
                desc: "Kira Systems is widely used in mergers and acquisitions (M&A) due diligence to analyze large volumes of contracts quickly. The platform automates the extraction and categorization of contract clauses, making it easier for legal teams to assess legal risks and ensure compliance.",
              },
              {
                icon: "🔍",
                title: "Risk Identification & Compliance Monitoring",
                desc: "Kira Systems utilizes machine learning to detect potential risks and compliance issues by analyzing contracts. It ensures that legal documents meet regulatory standards and flags any clauses that may pose legal risks.",
              },
              {
                icon: "📋",
                title: "Automated Contract Review",
                desc: "Kira Systems automates the contract review process, ensuring that contracts are reviewed for accuracy, consistency, and compliance with industry standards. It enables law firms to handle more contracts in less time, improving overall productivity.",
              },
              {
                icon: "🔄",
                title: "Data Extraction & Document Management",
                desc: "Kira Systems excels in extracting relevant data from contracts and other legal documents, storing it securely, and organizing it for easy access. This feature improves document management and facilitates collaboration between legal teams.",
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
                src="public\assets\Img\AI for legal\Aipowered -s1.jpg"
                alt="Power AI"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src="public\assets\Img\AI for legal\Aipowered -s2.jpg"
                alt="Power AI"
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
                  q: "What is Kira Systems?",
                  a: "It is an AI platform that automates contract review and legal document analysis.",
                },
                {
                  q: "What are Kira Systems AI capabilities?",
                  a: "Clause extraction, contract tagging, NLP, and machine learning-based review.",
                },
                {
                  q: "Is Kira Systems a legal tech software?",
                  a: "Yes, it's widely used in the legal tech industry.",
                },
                {
                  q: "How does Kira Systems work?",
                  a: "It uses NLP and machine learning to extract and organize data from contracts.",
                },
                {
                  q: "What is the pricing model of Kira AI?",
                  a: "Pricing is enterprise-based and custom depending on usage.",
                },
                {
                  q: "What are the features of Kira Systems?",
                  a: "Clause detection, compliance tracking, contract lifecycle automation, integration support.",
                },
                {
                  q: "Is Kira Systems suitable for law firms?",
                  a: "Yes, it's specifically designed for law firms and legal departments.",
                },
                {
                  q: "Does Kira Systems offer a demo or trial?",
                  a: "Yes, potential clients can request a demo and trial.",
                },
                {
                  q: "What industries use Kira Systems?",
                  a: "Legal, finance, insurance, real estate, healthcare.",
                },
                {
                  q: "How accurate is Kira Systems?",
                  a: "Accuracy improves with training and is known for high precision.",
                },
                {
                  q: "Does Kira Systems use machine learning?",
                  a: "Yes, it trains models using legal document datasets.",
                },
                {
                  q: "What is the onboarding process for Kira Systems?",
                  a: "Includes user training, setup, and support from the Kira team.",
                },
                {
                  q: "Is Kira Systems cloud-based?",
                  a: "Yes, it is offered as a SaaS legal tool.",
                },
                {
                  q: "Does Kira Systems help with compliance?",
                  a: "Yes, it assists in tracking and managing legal compliance.",
                },
                {
                  q: "Can Kira Systems extract structured data?",
                  a: "Yes, it extracts structured and unstructured data.",
                },
                {
                  q: "Does Kira Systems support multiple document formats?",
                  a: "Yes, it supports PDF, DOCX, TXT, and other common formats.",
                },
                {
                  q: "Is Kira Systems secure?",
                  a: "It follows enterprise-grade security protocols including encryption and access controls.",
                },
                {
                  q: "Does Kira Systems support integrations?",
                  a: "Yes, it integrates with DMS platforms like iManage and NetDocuments.",
                },
                {
                  q: "Can I use Kira Systems for M&A deals?",
                  a: "Yes, it's one of the most common use cases.",
                },
                {
                  q: "What type of documents can Kira analyze?",
                  a: "NDAs, leases, employment agreements, purchase contracts, etc.",
                },
                {
                  q: "Does Kira Systems support natural language processing?",
                  a: "Yes, NLP is one of the core technologies it uses.",
                },
                {
                  q: "What is Kira Systems used for in legal teams?",
                  a: "Accelerating contract review and ensuring clause accuracy.",
                },
                {
                  q: "Can Kira Systems be used by in-house counsel?",
                  a: "Yes, it's effective for corporate legal teams.",
                },
                {
                  q: "Does Kira Systems offer custom machine learning models?",
                  a: "Yes, models can be trained for specific document types and clauses.",
                },
                {
                  q: "What are some benefits of Kira Systems?",
                  a: "Time savings, cost reduction, accuracy, compliance, and scalability.",
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
                    Why Use Kira Systems?
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
                      ✅ Speeds up contract review for lawyers and legal teams
                    </li>
                    <li className="mb-3">
                      ✅ Enhances accuracy in extracting and comparing legal
                      clauses
                    </li>
                    <li className="mb-3">
                      ✅ Reduces operational costs via automation
                    </li>
                    <li className="mb-3">
                      ✅ Enables scalable legal due diligence
                    </li>
                    <li className="mb-3">
                      ✅ Suitable for both law firms and in-house legal counsel
                    </li>
                    <li className="mb-3">
                      ✅ Integrates with existing document management systems
                    </li>
                    <li className="mb-3">
                      ✅ Customizable machine learning models for specific use
                      cases
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
                  <li className="mb-2">High-speed document processing</li>
                  <li className="mb-2">
                    Accurate clause extraction using machine learning
                  </li>
                  <li className="mb-2">
                    Scalable for enterprises and legal departments
                  </li>
                  <li className="mb-2">Strong integrations and API support</li>
                  <li className="mb-2">
                    Excellent for legal compliance and risk management
                  </li>
                  <li className="mb-2">
                    Supports multiple formats and languages
                  </li>
                  <li className="mb-2">Customizable extraction models</li>
                  <li className="mb-2">Easy-to-navigate user interface</li>
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
                  <li className="mb-2">Learning curve for first-time users</li>
                  <li className="mb-2">
                    Premium pricing may not suit small firms
                  </li>
                  <li className="mb-2">
                    Dependent on document quality for best results
                  </li>
                  <li className="mb-2">
                    Requires customization for industry-specific needs
                  </li>
                  <li className="mb-2">
                    No offline version; requires internet access
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
                    Luminance: Legal AI with powerful visualization and
                    analytics tools.
                  </li>
                  <li className="mb-2">
                    eBrevia: AI-powered contract analysis with data extraction
                    capabilities.
                  </li>
                  <li className="mb-2">
                    ThoughtRiver: Focuses on pre-screening and risk analysis of
                    contracts.
                  </li>
                  <li className="mb-2">
                    LawGeex: Contract review automation for legal and
                    procurement teams.
                  </li>
                  <li className="mb-2">
                    ROSS Intelligence (archived): AI for legal research and
                    document search.
                  </li>
                  <li className="mb-2">
                    Legalsifter: Combines AI with in-context human advice for
                    contracts.
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
          <div className="row d-flex align-items-center justify-content-between mb-1">
            {/* Left side (Text Section) */}
            <div className="col-12 col-md-6 order-1 order-md-1 mb-4 mb-md-0 pe-md-5">
              <p className="text-primary">Write better, faster</p>
              <h1>Kira Systems: AI-Powered Legal Document Review Tool</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Kira Systems is an AI-powered contract analysis platform that helps law
                firms, legal teams, and enterprises extract and analyze critical
                information from legal documents. Designed specifically for the legal
                industry, Kira Systems AI uses advanced machine learning and natural
                language processing (NLP) to speed up document review processes, ensure
                accuracy, and reduce manual workload. Founded in 2011, Kira Systems has
                become one of the most trusted legal AI tools, adopted by thousands of
                professionals globally. It enhances legal workflows by automating the
                tedious task of document review, making it faster and more efficient to
                identify key information in contracts, NDAs, leases, and other legal
                documents.
              </p>
              <div className="mb-3">
                <a
                  href="https://www.litera.com/"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-2"
                >
                  Explore Tool
                </a>
              </div>
            </div>

            {/* Right side (Image Section) */}
            <div className="col-12 col-md-6 order-2 order-md-2 text-center mb-4 mb-md-0">
              <img
                src="public\assets\Img\AI for legal\AiForLegal\Kira.png"
                alt="Kira Systems"
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
                How to Use Kira Systems?
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
                      Kira Systems Contract Analysis
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Automatically identifies and extracts key clauses,
                      obligations, and data from large sets of contracts,
                      allowing legal teams to make faster, data-backed
                      decisions.
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
                      Kira Systems Legal AI
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Offers robust tools tailored for the legal industry
                      including compliance, mergers and acquisitions, and due
                      diligence.
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
                      Document Review Automation
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Reduces the time spent on manual document reviews by using
                      smart AI models trained on millions of legal documents.
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

export default AIPowered;
