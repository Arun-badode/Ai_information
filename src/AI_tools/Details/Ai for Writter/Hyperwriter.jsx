import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

import magisto from "../../../../public/assets/Img/AI for Animation/14.png";
// import scn9 from "../../../../public/assets/Img/AI for privacy/scn9.jpg";
// import scn10 from "../../../../public/assets/Img/AI for privacy/scn10.jpg";

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
const Hyperwriter = () => {
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
                icon: "⚡",
                title: "AI Autocomplete:",
                desc: "Write faster with real-time AI suggestions that complete your thoughts as you type.",
              },
              {
                icon: "🔁",
                title: "Rewrite Assistant:",
                desc: "Quickly rephrase sentences or paragraphs while preserving your intended meaning.",
              },
              {
                icon: "🔍",
                title: "Research Companion:",
                desc: "Get instant summaries, facts, and sources from the web without leaving your document.",
              },
              {
                icon: "🧠",
                title: "Memory-Powered Context:",
                desc: "HyperWrite remembers what you’ve written to maintain context across long documents.",
              },
              {
                icon: "📝",
                title: "Smart Templates:",
                desc: "Use pre-built templates for emails, reports, blogs, and more to streamline your writing process.",
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
                src={scn9}
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={scn10}
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
                  q: "What is HyperWrite AI?",
                  a: "HyperWrite is an AI-powered writing assistant designed to enhance productivity through features like autocomplete, rewriting, and research support.",
                },
                {
                  q: "How does HyperWrite AI work?",
                  a: "It uses advanced language models to generate text suggestions, rewrite content, summarize information, and even search the web in real-time.",
                },
                {
                  q: "Is HyperWrite suitable for long-form content?",
                  a: "Yes, HyperWrite is especially good for long-form writing like essays, articles, and creative projects thanks to its context retention.",
                },
                {
                  q: "Is HyperWrite free to use?",
                  a: "HyperWrite offers a free plan with limited daily usage. Premium plans unlock more generations, memory, and advanced features.",
                },
                {
                  q: "What makes HyperWrite different from other AI tools?",
                  a: "Its real-time autocomplete, memory-based personalization, and research assistant set it apart from other tools like ChatGPT and Rytr.",
                },
                {
                  q: "Does HyperWrite support rewriting content?",
                  a: "Yes, the 'Rewrite' tool allows you to improve tone, grammar, or clarity while preserving meaning.",
                },
                {
                  q: "Can I use HyperWrite for research?",
                  a: "Yes, the Research Assistant tool pulls reliable sources and summaries from the web directly into your writing environment.",
                },
                {
                  q: "Does HyperWrite save my documents?",
                  a: "Yes, all your sessions and documents are saved in your dashboard for later editing or export.",
                },
                {
                  q: "Is HyperWrite good for students?",
                  a: "Absolutely. Students use it for essays, summaries, citations, and brainstorming academic content.",
                },
                {
                  q: "Can I use HyperWrite for creative writing?",
                  a: "Yes, HyperWrite is excellent for creative writing, especially when you need help building ideas, character dialogue, or descriptions.",
                },
                {
                  q: "What writing formats does HyperWrite support?",
                  a: "It supports blog posts, essays, reports, emails, stories, and virtually any type of written content.",
                },
                {
                  q: "Can I collaborate with others on HyperWrite?",
                  a: "While it doesn't have live collaboration, you can share and export documents with others easily.",
                },
                {
                  q: "Does HyperWrite have a mobile app?",
                  a: "Currently, HyperWrite is browser-based and optimized for desktop and mobile use, but no dedicated mobile app exists yet.",
                },
                {
                  q: "Is HyperWrite secure for sensitive content?",
                  a: "Yes, HyperWrite uses encrypted connections and secure servers to store your content safely.",
                },
                {
                  q: "Does HyperWrite offer tone customization?",
                  a: "Yes, you can adjust the tone and style when rewriting or generating content.",
                },
                {
                  q: "Does HyperWrite support different languages?",
                  a: "Currently, HyperWrite primarily supports English, but language capabilities are expanding.",
                },
                {
                  q: "Is there a plagiarism checker in HyperWrite?",
                  a: "No built-in plagiarism checker is currently available, but you can use third-party tools alongside it.",
                },
                {
                  q: "What type of users is HyperWrite best for?",
                  a: "It's great for professionals, students, marketers, content creators, and anyone who writes regularly.",
                },
                {
                  q: "Can I use HyperWrite for email writing?",
                  a: "Yes, you can generate, rewrite, and polish professional or casual emails quickly.",
                },
                {
                  q: "Does HyperWrite offer customer support?",
                  a: "Yes, HyperWrite provides customer support via email and also maintains a helpful resource center.",
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
                    Why Use HyperWrite AI?
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
                      HyperWrite boosts your writing productivity with real-time
                      AI autocomplete and smart suggestions.
                    </li>
                    <li className="mb-3">
                      Great for students, researchers, marketers, and
                      professionals who need writing, summarizing, or rewriting
                      support.
                    </li>
                    <li className="mb-3">
                      Includes a Research Assistant that pulls facts, summaries,
                      and citations directly from the web.
                    </li>
                    <li className="mb-3">
                      Offers personalized writing through memory-based context
                      retention across documents.
                    </li>
                    <li className="mb-3">
                      Simple, browser-based platform with smart templates and a
                      distraction-free writing environment.
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
                    Real-time AI autocomplete boosts writing speed and
                    creativity.
                  </li>
                  <li className="mb-2">
                    Research Assistant fetches live data, summaries, and
                    citations.
                  </li>
                  <li className="mb-2">
                    Personalized suggestions using memory/context retention.
                  </li>
                  <li className="mb-2">
                    Versatile for blogs, essays, emails, reports, and creative
                    writing.
                  </li>
                  <li className="mb-2">
                    Browser-based — no downloads or installations required.
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
                    Limited support for languages beyond English (as of now).
                  </li>
                  <li className="mb-2">
                    No built-in plagiarism checker included.
                  </li>
                  <li className="mb-2">
                    Not ideal for highly technical or legal writing.
                  </li>
                  <li className="mb-2">
                    No real-time collaboration or shared workspace features yet.
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
                    GrammarlyGO – Offers smart text generation, rewriting, and
                    grammar correction with contextual awareness.
                  </li>
                  <li className="mb-2">
                    Notion AI – Combines note-taking and writing with AI
                    assistance for planning, writing, and summarizing tasks.
                  </li>
                  <li className="mb-2">
                    Jasper AI – Great for marketing copy, emails, and content
                    strategy with extensive customization.
                  </li>
                  <li className="mb-2">
                    Wordtune – Ideal for rewriting and improving sentence
                    structure with tone control options.
                  </li>
                  <li className="mb-2">
                    Writesonic – A broader AI content platform with article
                    writing, chatbot integration, and SEO tools.
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
              <h1>HyperWrite AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                HyperWrite is an advanced AI-powered writing assistant designed
                to help users improve, generate, and optimize content for
                various purposes—be it blogs, emails, essays, or marketing copy.
                With features like sentence rephrasing, content summarization,
                and grammar suggestions, it caters to students, professionals,
                bloggers, and businesses alike.
              </p>

              <div className="mb-3">
                <a
                  href="https://www.hyperwriteai.com/"
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
                src={magisto}
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
                How to Use HyperWrite AI?
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
                      Open a New Document
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Log in to HyperWrite and start a new document. You can
                      begin from scratch or paste your existing content for
                      suggestions.
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
                      Use Tools Like Autocomplete or Rewrite
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      As you write, use the AI Autocomplete to finish sentences
                      or use tools like “Rewrite” to improve tone and clarity.
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
                      Summarize or Export
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Use the Research Assistant or Summarize tools for deeper
                      insights, then export or copy your content when ready.
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

export default Hyperwriter;
