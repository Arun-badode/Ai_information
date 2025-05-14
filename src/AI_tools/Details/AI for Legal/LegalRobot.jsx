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
const LegalRobot = () => {
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
                title: "Semantic Analysis",
                desc: "Understands the meaning behind legal clauses using NLP and compares them against industry standards.",
              },
              {
                icon: "⚖",
                title: "Benchmarking Contracts",
                desc: "Compares your agreements with similar documents to identify unusual or missing clauses.",
              },
              {
                icon: "📜",
                title: "Risk Assessment",
                desc: "Automatically flags risky terms, ambiguous language, or non-standard clauses.",
              },
              {
                icon: "🔍",
                title: "Document Scoring",
                desc: "Provides overall scores based on readability, complexity, compliance, and grammar accuracy.",
              },
              {
                icon: "📋",
                title: "Machine Learning Models",
                desc: "Continuously learns from a growing dataset of legal texts to improve precision and predictions.",
              },
              {
                icon: "🔄",
                title: "Collaborative Review",
                desc: "Allows teams to share and review documents with contextual AI suggestions.",
              },
              {
                icon: "📑",
                title: "Legal Language Simplification",
                desc: "Translates dense legalese into simpler, understandable terms for non-lawyers.",
              },
              {
                icon: "🌍",
                title: "Multilingual Support",
                desc: "Supports review and analysis in multiple languages for global legal teams.",
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

      case "FAQs":
        return (
          <div className="faq-section container py-5">
            <h3 className="text-center text-white mb-5 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is Legal Robot?",
                  a: "Legal Robot is an AI-powered tool that automates the review and analysis of legal documents, focusing on grammar, readability, compliance, and contract analysis.",
                },
                {
                  q: "How does Legal Robot work?",
                  a: "Legal Robot uses AI, machine learning, and natural language processing (NLP) to analyze legal documents, identify clauses, check compliance, and assess readability in real time.",
                },
                {
                  q: "Can Legal Robot analyze contracts?",
                  a: "Yes, Legal Robot is specifically designed for contract analysis, allowing users to review clauses, identify risks, and ensure compliance.",
                },
                {
                  q: "What types of legal documents can Legal Robot analyze?",
                  a: "Legal Robot can analyze contracts, NDAs, privacy policies, and other legal documents requiring compliance and readability assessments.",
                },
                {
                  q: "Does Legal Robot offer a free version?",
                  a: "Yes, Legal Robot provides a free version with basic functionality, but premium features like advanced contract analysis and integration require a paid subscription.",
                },
                {
                  q: "Is Legal Robot safe to use?",
                  a: "Yes, Legal Robot employs industry-standard encryption and security practices to ensure the safety and confidentiality of your documents.",
                },
                {
                  q: "What is the pricing for Legal Robot?",
                  a: "Pricing for Legal Robot varies based on the subscription plan you choose, with options for individuals, small businesses, and enterprises. Check their website for specific details.",
                },
                {
                  q: "Does Legal Robot have a mobile app?",
                  a: "Yes, Legal Robot is available on both iOS and Android platforms, enabling users to review documents on-the-go.",
                },
                {
                  q: "Can Legal Robot help with NDA reviews?",
                  a: "Yes, Legal Robot specializes in NDA reviews, providing analysis on terms, clauses, and compliance.",
                },
                {
                  q: "How accurate is Legal Robot?",
                  a: "Legal Robot is highly accurate, with continuous learning from a large corpus of legal documents to improve its analysis. However, it is recommended to manually review the results for complex legal documents.",
                },
                {
                  q: "Is Legal Robot suitable for startups?",
                  a: "Yes, Legal Robot is ideal for startups, offering an affordable, easy-to-use tool to handle legal document analysis without a dedicated legal team.",
                },
                {
                  q: "What are the benefits of using Legal Robot?",
                  a: "Legal Robot helps increase efficiency, improve document readability, ensure compliance, reduce legal risks, and save costs associated with traditional legal services.",
                },
                {
                  q: "Does Legal Robot offer integration with other platforms?",
                  a: "Yes, Legal Robot supports integration via APIs, allowing users to incorporate the tool into third-party legal platforms and workflows.",
                },
                {
                  q: "What is the difference between Legal Robot and traditional lawyers?",
                  a: "While traditional lawyers offer personalized legal advice and deep insights, Legal Robot provides automated contract analysis and document review for efficiency and cost savings.",
                },
                {
                  q: "Can Legal Robot detect legal risks?",
                  a: "Yes, Legal Robot automatically identifies risky clauses, ambiguous language, and non-compliance with legal standards.",
                },
                {
                  q: "How does Legal Robot improve readability in legal documents?",
                  a: "Legal Robot evaluates the complexity of sentences, checks for plain language, and suggests improvements to make legal documents easier to understand.",
                },
                {
                  q: "Can Legal Robot analyze legal clauses?",
                  a: "Yes, Legal Robot can detect key clauses in contracts and provide feedback on their accuracy, relevance, and compliance with legal standards.",
                },
                {
                  q: "Does Legal Robot offer document summaries?",
                  a: "Yes, Legal Robot can provide concise summaries of lengthy legal documents to highlight key points and clauses.",
                },
                {
                  q: "What is the difference between Legal Robot and LawGeex?",
                  a: "While both tools offer contract analysis, Legal Robot focuses more on readability and grammar analysis, while LawGeex emphasizes compliance and contract lifecycle management.",
                },
                {
                  q: "How does Legal Robot help small businesses?",
                  a: "Legal Robot provides small businesses with affordable, automated contract analysis, helping them ensure compliance without hiring expensive legal professionals.",
                },
                {
                  q: "Is Legal Robot available as a web-based tool?",
                  a: "Yes, Legal Robot is available as a web application that can be accessed from any device with an internet connection.",
                },
                {
                  q: "Does Legal Robot support multiple languages?",
                  a: "Yes, Legal Robot supports multiple languages, making it a useful tool for international businesses and legal teams.",
                },
                {
                  q: "Can Legal Robot help with legal document compliance?",
                  a: "Yes, Legal Robot checks for compliance with various legal standards, including GDPR, privacy laws, and contract regulations.",
                },
                {
                  q: "How does Legal Robot compare to Kira Systems?",
                  a: "While both tools provide contract analysis, Kira Systems offers more advanced machine learning capabilities and customizable clause extraction for enterprise-level legal teams. Legal Robot focuses more on readability and affordability for smaller businesses.",
                },
                {
                  q: "Can Legal Robot help with contract grading?",
                  a: "Yes, Legal Robot offers contract grading, where it evaluates contracts based on readability, compliance, and legal risks.",
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
                    Why Use Legal Robot?
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
                    <li className="mb-3">✅ AI-powered contract audit</li>
                    <li className="mb-3">
                      ✅ Plain language analysis and readability scoring
                    </li>
                    <li className="mb-3">
                      ✅ Real-time feedback on legal writing and grammar
                    </li>
                    <li className="mb-3">✅ NDA and compliance review</li>
                    <li className="mb-3">
                      ✅ Suitable for startups, legal teams, and small
                      businesses
                    </li>
                    <li className="mb-3">
                      ✅ Web-based and available for iOS and Android
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
                  <li className="mb-2">Easy to use for non-lawyers</li>
                  <li className="mb-2">Improves readability and compliance</li>
                  <li className="mb-2">
                    Automatic clause detection and risk identification
                  </li>
                  <li className="mb-2">Cost-effective for small businesses</li>
                  <li className="mb-2">
                    Useful for startup legal documentation
                  </li>
                  <li className="mb-2">
                    Supports SaaS model and cloud-based usage
                  </li>
                  <li className="mb-2">
                    Offers Chrome extension and mobile app
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
                    Limited features compared to full-scale legal platforms
                  </li>
                  <li className="mb-2">
                    May require manual interpretation for complex contracts
                  </li>
                  <li className="mb-2">
                    Lacks deep customization for enterprise-level legal teams
                  </li>
                  <li className="mb-2">No offline mode</li>
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
                    LawGeex: AI contract review tailored for corporate legal
                    teams
                  </li>
                  <li className="mb-2">
                    Kira Systems: Advanced legal AI with customizable clause
                    extraction
                  </li>
                  <li className="mb-2">
                    Legalsifter: Combines AI with expert legal suggestions
                  </li>
                  <li className="mb-2">
                    Luminance: Offers data visualization and in-depth legal
                    analytics
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
              <h1> What is Legal Robot?</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Legal Robot is an AI-powered software tool that provides
                automated legal analysis, contract review, grammar checks, and
                readability assessments. Designed for legal professionals,
                startups, and small businesses, Legal Robot uses machine
                learning and natural language processing (NLP) to make legal
                documents easier to understand and more compliant.
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
              <img src="" style={{ MaxWidth: "100%", height: "300px" }} />
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
                How to Use Legal Robot?
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
                      Contract Review
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Legal Robot automatically audits contracts for structure,
                      grammar, legal clauses, and compliance.
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
                      Readability Analysis
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Evaluates legal documents for clarity and plain language
                      to ensure better understanding.
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
                      Legal Grammar & Sentence Structure
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Provides insights on legal writing tone and sentence
                      structure to improve document quality.
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
            <h4 className="mb-3">Ready to get started with Legal Robot?</h4>
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

export default LegalRobot;
