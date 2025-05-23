import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

import magisto from "../../../../public/assets/Img/AI for Animation/14.png";
import scn9 from "../../../../public/assets/Img/AI for Animation/scn9.jpg";
import scn10 from "../../../../public/assets/Img/AI for Animation/scn10.jpg";
import contentbotSS1 from '../../../../public/assets/Img/AI for Writing/contentbotSS1.png';
import contentbotSS2 from '../../../../public/assets/Img/AI for Writing/contentbotSS2.png';
import contentbotImg from '../../../../public/assets/Img/AI for Writing/13.png'

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
const Contentbot = () => {
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
                icon: "🤖",
                title: "AI Content Generation:",
                desc: "Create blog posts, articles, and marketing copy quickly with AI-powered writing tools.",
              },
              {
                icon: "✍️",
                title: "Rewrite & Expand:",
                desc: "Enhance existing content by rewriting or expanding text while maintaining your voice.",
              },
              {
                icon: "⚙️",
                title: "Automated Content Ideas:",
                desc: "Generate headlines, blog topics, and social media captions automatically.",
              },
              {
                icon: "📈",
                title: "SEO Optimization:",
                desc: "Get SEO-friendly content suggestions and keyword integration to boost your search rankings.",
              },
              {
                icon: "🔗",
                title: "Multichannel Support:",
                desc: "Create content tailored for blogs, emails, ads, social media, and more from one platform.",
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
                src={contentbotSS1}
                alt="contentbot"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={contentbotSS2}
                alt="contentbot"
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
                  q: "What is ContentBot AI?",
                  a: "ContentBot AI is an AI-powered content generation platform designed to help marketers, bloggers, and businesses quickly create high-quality written content.",
                },
                {
                  q: "How does ContentBot AI work?",
                  a: "It uses advanced AI models to generate, rewrite, and optimize content for various marketing and creative needs.",
                },
                {
                  q: "Is ContentBot AI good for marketing professionals?",
                  a: "Yes, it offers specialized templates and tools for blog posts, ad copy, email marketing, and social media content.",
                },
                {
                  q: "Can ContentBot AI help with writer's block?",
                  a: "Absolutely. It provides content ideas, rewrites, and expansions to keep your writing fresh and flowing.",
                },
                {
                  q: "Is ContentBot AI beginner-friendly?",
                  a: "Yes, with an intuitive interface and ready-to-use templates, it’s suitable for beginners and experienced users alike.",
                },
                {
                  q: "What makes ContentBot AI different from other AI writers?",
                  a: "ContentBot AI combines multiple content generation methods with SEO-focused tools and automation features.",
                },
                {
                  q: "What platforms support ContentBot AI?",
                  a: "ContentBot AI is web-based and accessible from any modern browser on desktop or mobile devices.",
                },
                {
                  q: "Can I use ContentBot AI for non-marketing content?",
                  a: "Yes, ContentBot AI can also generate general blog articles, product descriptions, and other types of written content.",
                },
                {
                  q: "Does ContentBot AI support multiple languages?",
                  a: "Yes, it supports several languages, helping you reach a global audience.",
                },
                {
                  q: "Can I collaborate with others using ContentBot AI?",
                  a: "Currently, it doesn’t have built-in collaboration, but you can share and export your content easily.",
                },
                {
                  q: "Does ContentBot AI save my data securely?",
                  a: "Yes, all your generated content is securely saved in your account with privacy protections.",
                },
                {
                  q: "Is there a free version of ContentBot AI?",
                  a: "ContentBot AI offers a free trial with limited usage; full access requires a paid subscription.",
                },
                {
                  q: "Can I export content from ContentBot AI?",
                  a: "Yes, content can be exported in various formats or copied directly from the platform.",
                },
                {
                  q: "Does ContentBot AI include plagiarism checking?",
                  a: "No, plagiarism checking is not currently integrated.",
                },
                {
                  q: "Can ContentBot AI help improve grammar and tone?",
                  a: "Yes, it provides suggestions to enhance clarity, tone, and style but is not a full grammar checker.",
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
                    Why Use ContentBot AI?
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
                      ContentBot AI helps marketers, bloggers, and businesses
                      create high-quality content quickly with AI assistance.
                    </li>
                    <li className="mb-3">
                      Ideal for producing blog posts, ad copy, email campaigns,
                      and social media content.
                    </li>
                    <li className="mb-3">
                      Offers features like content generation, rewriting, idea
                      suggestions, and SEO optimization.
                    </li>
                    <li className="mb-3">
                      Provides automation tools to streamline your content
                      marketing workflow.
                    </li>
                    <li className="mb-3">
                      Web-based and user-friendly—no complex setup required;
                      start creating content instantly.
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
                    Generates high-quality marketing and blog content quickly
                    with AI.
                  </li>
                  <li className="mb-2">
                    Supports multiple content types including ads, emails,
                    social media, and blogs.
                  </li>
                  <li className="mb-2">
                    SEO-focused tools help improve search rankings and keyword
                    integration.
                  </li>
                  <li className="mb-2">
                    User-friendly interface suitable for marketers, bloggers,
                    and small businesses.
                  </li>
                  <li className="mb-2">
                    Cloud-based platform accessible from any modern browser
                    without setup.
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
                    Limited support for highly technical or academic writing.
                  </li>
                  <li className="mb-2">
                    No integrated plagiarism checker included.
                  </li>
                  <li className="mb-2">
                    Collaboration features are minimal or absent.
                  </li>
                  <li className="mb-2">
                    Full features require a paid subscription after the free
                    trial.
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
                    Jasper AI – Powerful AI platform for marketing copy, blog
                    writing, and brand storytelling.
                  </li>
                  <li className="mb-2">
                    Copy.ai – User-friendly AI tool for creating social media
                    posts, ads, and product descriptions.
                  </li>
                  <li className="mb-2">
                    Writesonic – AI content generator with strong SEO
                    capabilities and chatbot integrations.
                  </li>
                  <li className="mb-2">
                    Peppertype.ai – AI writing assistant designed for marketing
                    teams and content creators.
                  </li>
                  <li className="mb-2">
                    Scalenut – Integrated AI writing and SEO platform with
                    keyword research and content planning.
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
              <h1>ContentBot AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                ContentBot AI is a robust writing tool designed to simplify
                content creation using artificial intelligence. The platform
                harnesses cutting-edge AI technology to help businesses,
                bloggers, marketers, and content creators produce high-quality,
                SEO-optimized content at scale. Whether you're creating blog
                posts, social media content, newsletters, or product
                descriptions, ContentBot offers a range of tools tailored to
                different writing needs. It’s designed to assist in generating
                creative and engaging text that resonates with the target
                audience while ensuring relevance and quality.
              </p>

              <div className="mb-3">
                <a
                  href=" https://contentbot.ai"
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
                src={contentbotImg}
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
                How to Use ContentBot AI?
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
                      Sign Up and Choose Template
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Create an account on ContentBot AI and select a content
                      template such as blog post, ad copy, or email.
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
                      Input Keywords & Customize
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Enter relevant keywords, select tone and language options,
                      and customize the content prompt.
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
                      Generate & Review Content
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Click the generate button to create your content, then
                      review, edit, and export as needed.
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

export default Contentbot;
