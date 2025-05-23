import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

import magisto from "../../../../public/assets/Img/AI for Animation/14.png";
import scn9 from "../../../../public/assets/Img/AI for Animation/scn9.jpg";
import scn10 from "../../../../public/assets/Img/AI for Animation/scn10.jpg";
import sudowriteSS1 from '../../../../public/assets/Img/AI for Writing/sudowriteSS1.png';
import sudowriteSS2 from '../../../../public/assets/Img/AI for Writing/sudowriteSS2.png';
import sudowriteImg from '../../../../public/assets/Img/AI for Writing/5.png'

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
const Sudowriter = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">Write Smarter, Not Harder</p>
              <h3 className="">
                AI-Powered Creative Writing Tools for Authors & Storytellers
              </h3>
            </div>
            {[
              {
                icon: "🧠",
                title: "Story Engine:",
                desc: "Build entire plots, arcs, and scenes with AI-driven structure support.",
              },
              {
                icon: "✨",
                title: "Rewrite & Expand:",
                desc: "Improve or lengthen your content instantly while keeping your original tone.",
              },
              {
                icon: "🖋️",
                title: "Describe Feature:",
                desc: "Turn simple words into rich, vivid descriptions perfect for novels and scripts.",
              },
              {
                icon: "🎭",
                title: "Character Brainstorming:",
                desc: "Generate unique character traits, motivations, and dialogue suggestions.",
              },
              {
                icon: "📚",
                title: "Genre-Specific Suggestions:",
                desc: "Get recommendations tailored to sci-fi, romance, horror, fantasy, and more.",
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
                src={sudowriteSS1}
                alt="sudowrite"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={sudowriteSS2}
                alt="sudowriteSS2"
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
                  q: "What is Sudowrite?",
                  a: "Sudowrite is an AI-powered creative writing assistant designed to help authors, screenwriters, and storytellers generate and refine content.",
                },
                {
                  q: "How does Sudowrite work?",
                  a: "It uses advanced GPT-based AI to assist with idea generation, rewriting, expanding, describing, and brainstorming creative content.",
                },
                {
                  q: "Is Sudowrite good for fiction writers?",
                  a: "Yes, it's particularly effective for fiction writers, offering tools for plot, dialogue, world-building, and character development.",
                },
                {
                  q: "Can Sudowrite help with writer's block?",
                  a: "Absolutely. Sudowrite's tools like 'Describe', 'Expand', and 'Brainstorm' are made to spark ideas and keep your writing flowing.",
                },
                {
                  q: "Is Sudowrite beginner-friendly?",
                  a: "Yes, it has a user-friendly interface and guided features, making it easy for both beginners and experienced authors to use.",
                },
                {
                  q: "What makes Sudowrite different from ChatGPT?",
                  a: "Sudowrite is focused specifically on long-form creative writing, offering unique features like Story Engine, Describe, and Rewrite tools.",
                },
                {
                  q: "What platforms support Sudowrite?",
                  a: "Sudowrite is a web-based app, so you can access it on any device with an internet connection and browser.",
                },
                {
                  q: "Can I use Sudowrite for non-fiction or essays?",
                  a: "Yes, although it’s optimized for storytelling, many writers also use it to refine non-fiction writing and essays.",
                },
                {
                  q: "Does Sudowrite support multiple genres?",
                  a: "Yes, it works across genres like fantasy, sci-fi, romance, horror, and more with tailored writing suggestions.",
                },
                {
                  q: "Can I collaborate with others on Sudowrite?",
                  a: "Currently, it doesn't offer real-time collaboration but you can share and export your writing easily.",
                },
                {
                  q: "Does Sudowrite store my writing securely?",
                  a: "Yes, your drafts are saved in your account securely, and you can export or delete them anytime.",
                },
                {
                  q: "Is there a free version of Sudowrite?",
                  a: "Sudowrite offers a free trial with limited credits. Full access requires a subscription plan.",
                },
                {
                  q: "Can I export my stories from Sudowrite?",
                  a: "Yes, you can export your content in plain text or document formats from the interface.",
                },
                {
                  q: "Does Sudowrite offer a plagiarism checker?",
                  a: "No, Sudowrite does not include a built-in plagiarism checker.",
                },
                {
                  q: "Can Sudowrite help with editing grammar?",
                  a: "While it's not a grammar checker like Grammarly, it can improve flow, tone, and clarity of your sentences.",
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
                    Why Use Sudowrite AI?
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
                      Sudowrite helps writers overcome writer’s block and
                      enhance creativity using AI.
                    </li>
                    <li className="mb-3">
                      Ideal for authors, screenwriters, and creatives working on
                      fiction, scripts, or poetry.
                    </li>
                    <li className="mb-3">
                      Offers tools like Describe, Expand, Rewrite, and
                      Brainstorm to craft compelling narratives.
                    </li>
                    <li className="mb-3">
                      Story Engine guides you through building entire plots,
                      scenes, and character arcs.
                    </li>
                    <li className="mb-3">
                      Web-based and easy to use—no installation needed, just
                      start writing with AI support.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Start Writing Now
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
                    Excellent for overcoming writer’s block with AI-generated
                    suggestions.
                  </li>
                  <li className="mb-2">
                    Intuitive features like “Describe,” “Rewrite,” and “Expand”
                    speed up creative writing.
                  </li>
                  <li className="mb-2">
                    Story Engine helps structure full-length novels,
                    screenplays, and stories.
                  </li>
                  <li className="mb-2">
                    Tailored tools for fiction writers across genres like
                    fantasy, horror, romance, and more.
                  </li>
                  <li className="mb-2">
                    Web-based and easy to use on any modern browser—no setup
                    required.
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
                    Not ideal for factual or highly technical writing tasks.
                  </li>
                  <li className="mb-2">
                    No built-in grammar checker like Grammarly.
                  </li>
                  <li className="mb-2">
                    Lacks real-time collaboration or multi-user document
                    sharing.
                  </li>
                  <li className="mb-2">
                    Requires a subscription after the limited free trial.
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
                    Jasper AI – Advanced AI writing platform ideal for
                    marketing, long-form content, and brand copy.
                  </li>
                  <li className="mb-2">
                    Copy.ai – Easy-to-use tool for generating social media
                    captions, blog intros, and product descriptions.
                  </li>
                  <li className="mb-2">
                    Writesonic – SEO-focused AI writer with blog generation,
                    ads, and chatbot capabilities.
                  </li>
                  <li className="mb-2">
                    NovelAI – Popular for generating fiction and anime-style
                    storytelling with customizable controls.
                  </li>
                  <li className="mb-2">
                    Scalenut – Combines AI writing with SEO planning, topic
                    clusters, and keyword research tools.
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
          <i className="bi bi-arrow-left me-2"></i>Back{" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
          <div className=" row d-flex align-items-center justify-content-between mb-1">
            {/* Left side (Text Section) */}
            <div
              style={{ paddingRight: "30px" }}
              className="col-md-6  col-12 order-2 order-md-1 "
            >
              <p className="text-primary">Write better, faster</p>
              <h1>Sudowrite AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Sudowrite is an AI-powered writing tool designed to assist
                writers in creative writing, novel creation, content generation,
                and much more. As an AI writing assistant, Sudowrite helps
                authors overcome writer's block, brainstorm ideas, generate plot
                twists, and refine their stories. Whether you're a novelist,
                screenwriter, or content creator, Sudowrite provides tools that
                make writing faster and more efficient.
              </p>
              <p>
                Sudowrite is a creative AI tool specifically tailored for
                fiction and non-fiction writers. By utilizing artificial
                intelligence, Sudowrite helps generate content ideas, develop
                plot structures, and improve your overall writing quality.
                Sudowrite assists in brainstorming ideas, generating dialogue,
                and even providing creative prompts, making it an ideal tool for
                writers who struggle with creativity or are simply looking to
                streamline their writing process.
              </p>

              <div className="mb-3">
                <a
                  href="https://sudowrite.com/"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-2"
                >
                  Explore Tool
                </a>
              </div>
            </div>

            {/* Right side (Image Section) */}
            <div
              style={{
                textAlign: "center",
                Width: "100%",
                height: "250px",
              }}
              className="col-md-6 col-12 order-md-2 order-1 text-center mb-3 mb-md-0  "
            >
              <img
                src={sudowriteImg}
                style={{
                  Width: "100%",
                  height: "auto",
                  maxHeight: "300px",
                  objectFit: "contain",
                }}
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
                How to Use Sudowrite AI?
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
                      Start a New Document
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Log in to Sudowrite and begin by creating a new document
                      for your story, novel, or scene.
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
                      Use AI Writing Tools
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Choose from features like “Describe,” “Rewrite,” or
                      “Expand” to craft better scenes and characters.
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
                      Build and Export
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Use the “Story Engine” to outline full plots, then export
                      your manuscript when you're ready to publish or review.
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

export default Sudowriter;
