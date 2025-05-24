import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

import deatilimage from "../../../Images/DetailImage.png";
import grammarly from "../../../../public/assets/Img/AI for Business/4.png";

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

const Grammarly = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [openIndex, setOpenIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <div className="row g-4">
            {[
              {
                title: "Grammarly Writing Assistant:",
                desc: "A comprehensive tool that enhances writing by providing suggestions for grammar, style, clarity, and more.",
              },
              {
                title: "Grammarly Grammar Check:",
                desc: " A robust grammar checker that identifies and corrects a wide range of grammatical errors.",
              },
              {
                title: "Grammarly Spelling Checker:",
                desc: " Identifies and corrects spelling mistakes across various types of writing.",
              },
              {
                title: "AI-Powered Suggestions:",
                desc: " Grammarly’s machine learning algorithms offer personalized suggestions to enhance sentence structure, word choice, and writing style.",
              },
              {
                title: "Plagiarism Detection:",
                desc: "Ensures that your content is original by checking it against billions of online sources for potential plagiarism.",
              },
              {
                title: "Tone Detection:",
                desc: "Recognizes the tone of your writing and suggests adjustments to ensure it matches your intended message, whether formal, casual, or persuasive.​",
              },
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div className="custom-card text-light p-4 h-100">
                  <div className="icon mb-3">{feature.icon}</div>
                  <h5 className="fw-bold">{feature.title}</h5>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case "Screenshots":
        return (
          <div className="row g-4">
            <div className="col-md-6">
              <img
                src={deatilimage}
                alt="grammarly"
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-md-6">
              <img
                src={deatilimage}
                alt="grammarly"
                className="img-fluid rounded-3"
              />
            </div>
          </div>
        );

      case "Reviews":
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

      case "Why-we-use":
        return (
          <div className="row g-4">
            <div className="col-12">
              <div className="custom-card text-light p-5 text-center">
                <h3 className="fw-bold mb-4">Why Use Grammarly AI? </h3>

                <p className="fs-5 mt-3">
                  <b>Improves Writing Quality:</b> Whether you are writing an
                  academic paper, business email, or social media post,
                  Grammarly helps you maintain high-quality writing by offering
                  tailored suggestions.
                </p>
                <p className="fs-5 mt-3">
                  <b>Saves Time:</b> By automating the proofreading process,
                  Grammarly allows you to focus on the creative aspect of
                  writing instead of spending time checking for grammatical
                  errors.
                </p>
                <p className="fs-5 mt-3">
                  <b>Enhances Professionalism:</b> Grammarly’s suggestions
                  ensure that your work is polished, clear, and professional,
                  making it ideal for business communications.
                </p>
                <p className="fs-5 mt-3">
                  <b>AI-Powered Feedback:</b> The AI behind Grammarly offers
                  unique insights, ensuring your writing resonates with your
                  target audience.
                </p>

                <Button variant="primary" size="lg" className="mt-4">
                  Try Grammarly AI Now
                </Button>
              </div>
            </div>
          </div>
        );

      case "Pro&Const":
        return (
          <div style={styles.section}>
            <div className="container">
              <div className="row g-4">
                {/* Pros Section */}
                <div className="col-md-10 offset-md-1">
                  <div style={styles.card}>
                    <h3 className="mb-4 text-center">Pros of Grammarly AI:</h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <p>
                          <b>Comprehensive Feedback: </b>Provides detailed
                          feedback on grammar, spelling, punctuation, style,
                          tone, and clarity.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b>User-Friendly:</b> Easy to use across multiple
                          platforms including emails, social media, and
                          documents.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b>Real-Time Suggestions:</b> Offers real-time
                          corrections and suggestions, saving time and effort.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b>Plagiarism Detection:</b> Useful for academic and
                          professional writing to ensure originality.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b>Vocabulary Enhancement:</b> Helps improve word
                          choice, enhancing the quality and diversity of
                          language used.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cons Section */}
                <div className="col-md-10 offset-md-1">
                  <div style={styles.card}>
                    <h3 className="mb-4 text-center">Cons of Grammarly AI:</h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <p>
                          <b> Free Version Limitations:</b>The free version has
                          limited features, including basic grammar and spelling
                          checks, but lacks advanced style and tone analysis.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b>Can Miss Contextual Errors:</b> Sometimes, the AI
                          may miss errors that require human judgment, such as
                          nuanced sentence structure or cultural context.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b>Not Always Perfect:</b>While it catches many
                          mistakes, some advanced grammar nuances may not be
                          detected, requiring manual proofreading.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Alternative":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-4">
              Alternatives to Grammarly AI:
            </h4>
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
                  <li className="mb-3">
                    <strong> Hemingway Editor: –</strong> Focuses on simplifying
                    your writing, highlighting complex sentences, and improving
                    readability.
                  </li>
                  <li className="mb-3">
                    <strong>ProWritingAid: –</strong> Offers in-depth grammar,
                    style checks, and reports to improve writing.
                  </li>
                  <li className="mb-3">
                    <strong>Ginger Software: – </strong>A grammar and spell
                    checker with additional features for sentence rephrasing and
                    translations.
                  </li>
                  <li className="mb-3">
                    <strong>WhiteSmoke: – </strong> Provides grammar checking,
                    style suggestions, and translation tools.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "FAQs":
        return (
          <div className="faq-section container py-5">
            <h3 className="text-center  text-white mb-5 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is Grammarly AI?",
                  a: "Grammarly AI is an advanced writing assistant powered by artificial intelligence, designed to enhance your writing by checking grammar, punctuation, tone, and style.",
                },
                {
                  q: " How does Grammarly work?",
                  a: "Grammarly analyzes your writing using AI and machine learning algorithms, suggesting corrections for grammar, spelling, punctuation, style, and tone in real-time.",
                },
                {
                  q: " Is Grammarly free?",
                  a: "Yes, Grammarly offers a free version that checks for basic grammar and spelling errors. The premium version offers additional features like plagiarism detection and style suggestions.",
                },
                {
                  q: "Can Grammarly detect plagiarism?",
                  a: "Yes, Grammarly can detect plagiarism by comparing your content to billions of online sources to ensure originality.",
                },
                {
                  q: " Is Grammarly suitable for academic writing?",
                  a: "Yes, Grammarly is excellent for academic writing as it checks for grammar, plagiarism, tone, and clarity, making sure your academic papers are of high quality.",
                },
                {
                  q: " Does Grammarly check for grammar mistakes?",
                  a: "Yes, Grammarly provides comprehensive grammar checks, highlighting mistakes such as sentence fragments, subject-verb agreement, and improper punctuation",
                },
                {
                  q: "What is the difference between Grammarly Free and Premium?",
                  a: "The free version provides basic grammar, spelling, and punctuation checks, while the premium version includes advanced features like plagiarism detection, tone analysis, and vocabulary enhancement.",
                },
                {
                  q: " How accurate is Grammarly’s grammar check?",
                  a: "Grammarly’s grammar check is highly accurate, but it may occasionally miss nuanced errors, such as contextual grammar issues that require human judgment.",
                },
                {
                  q: " Does Grammarly offer a browser extension?",
                  a: "Yes, Grammarly offers browser extensions for Chrome, Firefox, Safari, and Edge to check your writing on web-based platforms like Gmail and social media.",
                },
                {
                  q: " Can Grammarly be used on Microsoft Word?",
                  a: "Yes, Grammarly integrates with Microsoft Word via a desktop app, checking grammar and spelling directly within Word documents.",
                },
                {
                  q: "Does Grammarly offer a mobile app?",
                  a: "Yes, Grammarly has a mobile app for both iOS and Android that provides grammar and style checks for writing on mobile devices.",
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

              {/* Read More / Read Less Button */}
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

      default:
        return null;
    }
  };

  return (
    <>
      <div className="bg-dark">
        {/* <Link
          to="/Aitools"
          className="d-inline-block text-white text-decoration-none ml-3 py-1"
        >
          <i className="bi bi-arrow-left me-2"></i>Back to Directory
        </Link> */}
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
  <div style={{ flex: 1, paddingRight: "30px" }} className="mb-4 mb-md-0">
    <div className="d-flex align-items-center mb-3">
      <img
        src={Logo}
        alt="Grammarly Logo"
        className="me-3"
        style={{ width: "60px", height: "auto" }}
      />
      <h2 className="mb-0">Grammarly AI</h2>
    </div>

    <div className="text-warning mb-2">⭐⭐⭐⭐⭐ 95% Satisfaction</div>

    <p>
      Grammarly AI is an advanced artificial intelligence-powered writing assistant designed to assist writers, students, professionals, and businesses in improving their written communication. By leveraging AI and machine learning, Grammarly analyzes your text for grammar, spelling, punctuation, clarity, tone, and style, providing real-time suggestions for improvement.
    </p>

    <a
      href="https://www.grammarly.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-primary"
    >
      Explore Tool
    </a>
  </div>

  {/* Right side (Image Section) */}
  <div style={{ flex: 1, textAlign: "center" }}>
    <img
      src={grammarly}
      alt="Grammarly AI"
      className="img-fluid rounded-3"
      style={{ maxWidth: "80%", height: "auto" }}
    />
  </div>
</div>


          {/* Tab Navigation */}
          <ul className="nav nav-tabs custom-tabs mb-4">
            {[
              "Features",
              "Screenshots",
              "Reviews",
              "FAQs",
              // "technical",
              "Why-we-use",
              "Pro&Const",
              "Alternative",
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

export default Grammarly;
