import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

import magisto from "../../../../public/assets/Img/AI for Animation/14.png";
import scn9 from "../../../../public/assets/Img/AI for Animation/scn9.jpg";
import scn10 from "../../../../public/assets/Img/AI for Animation/scn10.jpg";

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
const Spingboat = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                Rewrite and Spin Content Effortlessly
              </p>
              <h3 className="">
                Fast, Automated Text Rewriting & Paraphrasing
              </h3>
            </div>
            {[
              {
                icon: "🔄",
                title: "Automatic Text Spinning:",
                desc: "Instantly rewrite and paraphrase your articles to create unique versions.",
              },
              {
                icon: "✍️",
                title: "Natural Language Processing:",
                desc: "Spin content while preserving meaning and readability using advanced AI.",
              },
              {
                icon: "⚡",
                title: "Fast Processing Speed:",
                desc: "Get spun content delivered in seconds to meet your tight deadlines.",
              },
              {
                icon: "🌐",
                title: "Multiple Language Support:",
                desc: "Spin text in various languages to reach a global audience.",
              },
              {
                icon: "🔍",
                title: "Plagiarism Reduction:",
                desc: "Helps reduce duplicate content issues by generating unique text variations.",
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
                  q: "What is Spinbot AI?",
                  a: "Spinbot AI is an automated text rewriting and paraphrasing tool that helps users create unique content quickly by transforming existing text.",
                },
                {
                  q: "How does Spinbot AI work?",
                  a: "It uses advanced natural language processing to rewrite sentences while preserving the original meaning, producing fresh and unique variations.",
                },
                {
                  q: "Is Spinbot AI easy to use for beginners?",
                  a: "Yes, Spinbot offers a simple interface where you just paste your text and get spun content instantly without technical knowledge.",
                },
                {
                  q: "Is Spinbot free to use?",
                  a: "Spinbot offers a free version with some limits; premium plans unlock faster speeds and no ads.",
                },
                {
                  q: "What platforms is Spinbot available on?",
                  a: "Spinbot is a web-based tool accessible on any modern browser across desktop and mobile devices.",
                },
                {
                  q: "What makes Spinbot AI unique?",
                  a: "Spinbot specializes in quick and efficient text spinning with minimal manual input, ideal for content marketers and writers needing fresh content fast.",
                },
                {
                  q: "Who should use Spinbot AI?",
                  a: "Content creators, bloggers, SEO specialists, and marketers looking to avoid duplicate content issues and refresh articles.",
                },
                {
                  q: "Can Spinbot be used for SEO content?",
                  a: "Yes, it helps generate unique variations of existing SEO content to improve search rankings.",
                },
                {
                  q: "Does Spinbot support multiple languages?",
                  a: "Currently, Spinbot primarily supports English text rewriting.",
                },
                {
                  q: "Does Spinbot have an API?",
                  a: "Spinbot offers API access for enterprise users to integrate text spinning capabilities into their workflows.",
                },
                {
                  q: "Can I export spun content from Spinbot?",
                  a: "Yes, you can copy or download the rewritten text after spinning.",
                },
                {
                  q: "Does Spinbot check for plagiarism?",
                  a: "Spinbot does not provide built-in plagiarism checking; it focuses on content rewriting.",
                },
                {
                  q: "Is Spinbot suitable for academic writing?",
                  a: "Spinbot is not recommended for academic or highly technical writing due to possible changes in meaning.",
                },
                {
                  q: "Can Spinbot maintain the original tone?",
                  a: "Spinbot attempts to preserve tone but heavy spinning can alter style and voice.",
                },
                {
                  q: "Is Spinbot safe to use?",
                  a: "Yes, Spinbot ensures your text is private and not stored permanently on their servers.",
                },
                {
                  q: "Does Spinbot offer customer support?",
                  a: "Support is available via email and FAQs on the official website.",
                },
                {
                  q: "Does Spinbot support bulk spinning?",
                  a: "Bulk spinning options are available in premium plans.",
                },
                {
                  q: "Can Spinbot rewrite social media posts?",
                  a: "Yes, it’s effective for generating varied social media content to keep your feeds fresh.",
                },
                {
                  q: "Does Spinbot have a desktop or mobile app?",
                  a: "No, Spinbot currently operates as a browser-based service only.",
                },
                {
                  q: "Can I use Spinbot offline?",
                  a: "No, Spinbot requires an internet connection to process content.",
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
                <h3 className="fw-bold mb-4 text-start text-primary">
                  Why Use Spinbot AI?
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
                    Spinbot AI is perfect for quickly generating unique
                    rewritten content.
                  </li>
                  <li className="mb-3">
                    Ideal for bloggers, marketers, and SEO specialists who need
                    fresh content fast.
                  </li>
                  <li className="mb-3">
                    Offers automated text spinning with natural language
                    processing to maintain meaning.
                  </li>
                  <li className="mb-3">
                    Simplifies content creation without needing manual rewriting
                    or deep writing skills.
                  </li>
                  <li className="mb-3">
                    Spinbot is a web-based, easy-to-use platform accessible from
                    any device.
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
                    Quickly generates unique, rewritten content from existing
                    text.
                  </li>
                  <li className="mb-2">
                    Easy to use with minimal input required — just paste and
                    spin.
                  </li>
                  <li className="mb-2">
                    Helps avoid duplicate content issues for SEO and marketing.
                  </li>
                  <li className="mb-2">
                    Supports multiple languages (primarily English) for broader
                    reach.
                  </li>
                  <li className="mb-2">
                    Web-based, accessible on any device without installation.
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
                    May alter meaning if heavily spun; manual review is
                    recommended.
                  </li>
                  <li className="mb-2">
                    Limited to primarily English language support.
                  </li>
                  <li className="mb-2">
                    No built-in plagiarism detection or grammar correction.
                  </li>
                  <li className="mb-2">
                    Free version includes usage limits and ads; premium unlocks
                    full features.
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
                    QuillBot – Popular AI paraphrasing tool offering advanced
                    rewriting and grammar suggestions.
                  </li>
                  <li className="mb-2">
                    WordAi – AI-powered content spinner focused on producing
                    human-readable, unique articles.
                  </li>
                  <li className="mb-2">
                    Paraphraser.io – User-friendly paraphrasing platform
                    supporting multiple languages and tones.
                  </li>
                  <li className="mb-2">
                    Spin Rewriter – Offers bulk spinning and ENL technology for
                    natural language rewriting.
                  </li>
                  <li className="mb-2">
                    Chimp Rewriter – Desktop software with advanced AI rewriting
                    and SEO optimization features.
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
              <h1>Spinbot AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Spinbot is an online text and article rewriter tool that allows
                users to quickly generate unique content by rephrasing existing
                text. Whether you're a content creator, marketer, or student,
                Spinbot offers a fast and reliable way to create fresh content
                while maintaining readability and coherence. In this review,
                we'll cover Spinbot's features, pricing, pros and cons, and its
                use in various industries like SEO, blogging, eCommerce, and
                digital marketing.
              </p>
              <p>
                Spinbot is an AI-powered content spinner and article rewriter
                tool. It helps users by generating unique variations of any
                given text. This tool is especially helpful for bloggers,
                content marketers, and SEO professionals who need to produce
                multiple versions of content without manually rewording every
                sentence.
              </p>

              <div className="mb-3">
                <a
                  href="https://spinbot.com/"
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
                How to Use Spinbot AI?
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
                    <style>{`
        .step1 {
          position: absolute;
          bottom: 10px;
          right: 15px;
          font-size: 4rem;
          font-weight: bold;
          color: #7b61ff;
          opacity: 0.6;
        }
      `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Paste Your Text
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Start by pasting the text you want to rewrite or spin into
                      the Spinbot editor.
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
                    <style>{`
        .step2 {
          position: absolute;
          bottom: 10px;
          right: 15px;
          font-size: 4rem;
          font-weight: bold;
          color: #7b61ff;
          opacity: 0.6;
        }
      `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Customize Settings
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Adjust the spinning settings if needed, such as the level
                      of rewriting or avoiding certain words.
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
                    <style>{`
        .step3 {
          position: absolute;
          bottom: 10px;
          right: 15px;
          font-size: 4rem;
          font-weight: bold;
          color: #7b61ff;
          opacity: 0.6;
        }
      `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Generate & Copy
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Click the "Spin" button to generate your rewritten text,
                      then copy or export it as needed.
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

export default Spingboat;
