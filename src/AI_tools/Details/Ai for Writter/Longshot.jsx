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
const Longshot = () => {
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
                desc: "Generate detailed blog posts, articles, and marketing copy quickly using advanced AI.",
              },
              {
                icon: "✍️",
                title: "Rewrite & Expand:",
                desc: "Improve existing content by rewriting sentences or expanding paragraphs while keeping your unique voice.",
              },
              {
                icon: "💡",
                title: "Automated Content Ideas:",
                desc: "Automatically generate compelling headlines, blog topics, and social media captions to keep content fresh.",
              },
              {
                icon: "📈",
                title: "SEO Optimization:",
                desc: "Boost your search rankings with keyword-rich content suggestions and SEO analysis tools.",
              },
              {
                icon: "🌐",
                title: "Multichannel Support:",
                desc: "Create optimized content for blogs, emails, ads, social media, and more all within a single platform.",
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
                  q: "What is LongShot AI?",
                  a: "LongShot AI is an advanced AI-powered content creation platform designed to help marketers, bloggers, and businesses generate in-depth, SEO-optimized long-form content quickly.",
                },
                {
                  q: "How does LongShot AI work?",
                  a: "It leverages advanced AI models to research topics, generate, rewrite, and optimize content tailored for marketing and creative purposes.",
                },
                {
                  q: "Is LongShot AI good for marketing professionals?",
                  a: "Yes, LongShot AI provides specialized templates and tools for blog posts, product descriptions, ad copy, and social media content.",
                },
                {
                  q: "Can LongShot AI help with writer's block?",
                  a: "Absolutely. LongShot AI offers content ideas, expansions, and rewriting features to keep your writing flowing smoothly.",
                },
                {
                  q: "Is LongShot AI beginner-friendly?",
                  a: "Yes, with an easy-to-use interface and prebuilt templates, it suits both beginners and experienced content creators.",
                },
                {
                  q: "What makes LongShot AI different from other AI writers?",
                  a: "LongShot AI integrates deep research, fact-checking, and SEO optimization within its AI-driven content generation process.",
                },
                {
                  q: "What platforms support LongShot AI?",
                  a: "LongShot AI is a web-based platform accessible via any modern browser on desktop or mobile devices.",
                },
                {
                  q: "Can I use LongShot AI for non-marketing content?",
                  a: "Yes, it can generate a wide range of content including educational articles, how-to guides, and product descriptions.",
                },
                {
                  q: "Does LongShot AI support multiple languages?",
                  a: "Yes, LongShot AI supports several languages to help you create content for global audiences.",
                },
                {
                  q: "Can I collaborate with others using LongShot AI?",
                  a: "Currently, LongShot AI does not offer built-in collaboration features, but content can be shared and exported easily.",
                },
                {
                  q: "Does LongShot AI save my data securely?",
                  a: "Yes, your generated content and data are securely stored with privacy and security measures.",
                },
                {
                  q: "Is there a free version of LongShot AI?",
                  a: "LongShot AI offers a free trial with limited features; full access requires a paid subscription.",
                },
                {
                  q: "Can I export content from LongShot AI?",
                  a: "Yes, content can be exported in various formats or copied directly from the platform’s editor.",
                },
                {
                  q: "Does LongShot AI include plagiarism checking?",
                  a: "No, plagiarism detection is not currently integrated within LongShot AI.",
                },
                {
                  q: "Can LongShot AI help improve grammar and tone?",
                  a: "Yes, it provides suggestions for clarity, tone, and style improvements but is not a dedicated grammar checker.",
                },
                {
                  q: "What types of content can LongShot AI create?",
                  a: "It can generate blog posts, product descriptions, social media content, ad copy, emails, and more.",
                },
                {
                  q: "How does LongShot AI handle SEO?",
                  a: "LongShot AI includes keyword research tools and SEO-friendly content suggestions to improve your search rankings.",
                },
                {
                  q: "Can LongShot AI help with content research?",
                  a: "Yes, it performs topic research to generate fact-based content outlines and ideas.",
                },
                {
                  q: "Is LongShot AI suitable for eCommerce content?",
                  a: "Absolutely, it specializes in creating product descriptions and marketing copy optimized for eCommerce platforms.",
                },
                {
                  q: "How customizable is the content generated by LongShot AI?",
                  a: "You can adjust tone, length, keywords, and style to tailor the content to your brand voice.",
                },
                {
                  q: "Does LongShot AI have templates?",
                  a: "Yes, it offers a wide range of templates for different content types and industries.",
                },
                {
                  q: "Can LongShot AI generate content for social media?",
                  a: "Yes, it can create captions, posts, and ads optimized for platforms like Facebook, Instagram, and LinkedIn.",
                },
                {
                  q: "Is LongShot AI suitable for long-form content?",
                  a: "Yes, it’s specifically designed to assist with creating detailed and well-researched long-form articles.",
                },
                {
                  q: "Does LongShot AI provide content editing tools?",
                  a: "Yes, it allows you to rewrite, expand, and polish your content within the platform.",
                },
                {
                  q: "How fast is content generated by LongShot AI?",
                  a: "Content is generated in seconds to minutes depending on length and complexity.",
                },
                {
                  q: "Can I use LongShot AI on mobile devices?",
                  a: "Yes, the web platform is fully responsive and accessible on mobile browsers.",
                },
                {
                  q: "Does LongShot AI support multiple user accounts?",
                  a: "Team accounts and multi-user management features are available on higher-tier plans.",
                },
                {
                  q: "Can LongShot AI be integrated with other tools?",
                  a: "It offers API access and integrations with popular platforms to streamline your workflow.",
                },
                {
                  q: "Is training required to use LongShot AI?",
                  a: "No formal training is needed; the interface is user-friendly and intuitive.",
                },
                {
                  q: "Can I schedule content creation in LongShot AI?",
                  a: "Scheduling features are not built-in but can be managed through integrations with publishing tools.",
                },
                {
                  q: "How accurate is the AI-generated content?",
                  a: "LongShot AI strives for accuracy by combining AI generation with research and fact-checking.",
                },
                {
                  q: "Does LongShot AI support multiple content languages?",
                  a: "Yes, it supports several languages to help you create localized content.",
                },
                {
                  q: "Can I get customer support for LongShot AI?",
                  a: "Yes, customer support is available via email, chat, and help documentation.",
                },
                {
                  q: "What payment plans does LongShot AI offer?",
                  a: "Multiple subscription tiers are available, including monthly and annual plans tailored to your usage.",
                },
                {
                  q: "Is LongShot AI suitable for beginners?",
                  a: "Yes, its intuitive interface and templates make it easy for beginners to start creating content.",
                },
                {
                  q: "Can I cancel my LongShot AI subscription anytime?",
                  a: "Yes, subscriptions can be canceled anytime without penalty.",
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
                    Why Use LongShot AI?
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
                      LongShot AI helps marketers, bloggers, and businesses
                      generate detailed, SEO-optimized content quickly using AI.
                    </li>
                    <li className="mb-3">
                      Ideal for creating long-form blog posts, product
                      descriptions, email newsletters, and social media content.
                    </li>
                    <li className="mb-3">
                      Includes powerful features like content generation,
                      rewriting, idea generation, and SEO analysis.
                    </li>
                    <li className="mb-3">
                      Offers automation tools to simplify and speed up your
                      content marketing process.
                    </li>
                    <li className="mb-3">
                      Web-based, intuitive platform requiring no complex
                      setup—start creating high-quality content instantly.
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
                    Generates detailed, SEO-optimized long-form content quickly
                    using AI.
                  </li>
                  <li className="mb-2">
                    Supports diverse content formats including blogs, ads,
                    emails, and social media.
                  </li>
                  <li className="mb-2">
                    Built-in SEO tools help improve keyword targeting and search
                    engine rankings.
                  </li>
                  <li className="mb-2">
                    User-friendly interface designed for marketers, bloggers,
                    and content teams.
                  </li>
                  <li className="mb-2">
                    Cloud-based platform accessible from any device without
                    installation.
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
                    Limited capabilities for technical, scientific, or academic
                    writing.
                  </li>
                  <li className="mb-2">
                    Does not include a built-in plagiarism checker.
                  </li>
                  <li className="mb-2">
                    Collaboration tools are limited or not available.
                  </li>
                  <li className="mb-2">
                    Full access and advanced features require a paid
                    subscription after trial.
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
                    Jasper AI – Advanced AI writing platform for marketing,
                    long-form content, and brand storytelling.
                  </li>
                  <li className="mb-2">
                    Copy.ai – Easy-to-use AI tool for social media content, ads,
                    and product descriptions.
                  </li>
                  <li className="mb-2">
                    Writesonic – AI content generator with SEO focus and chatbot
                    capabilities.
                  </li>
                  <li className="mb-2">
                    Peppertype.ai – AI writing assistant built for marketing
                    teams and content creators.
                  </li>
                  <li className="mb-2">
                    Scalenut – AI writing platform integrated with SEO tools for
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
              <h1>LongShot AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                LongShot AI is an AI-powered content generation tool designed to
                help users create high-quality content efficiently. It leverages
                artificial intelligence to assist with writing blog posts,
                social media content, emails, landing pages, product
                descriptions, SEO-optimized content, and more. LongShot AI is
                particularly useful for marketers, businesses, content creators,
                and freelance writers looking to enhance their writing processes
                with AI.
              </p>

              <div className="mb-3">
                <a
                  href="https://www.longshot.ai/"
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
                How to Use LongShot AI?
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
                      Sign Up and Select Content Type
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Create your LongShot AI account and pick a content type
                      like blog post, article, or marketing copy.
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
                      Add Keywords & Customize Settings
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Input your keywords, set tone, language, and SEO
                      preferences to tailor the output.
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
                      Generate, Edit & Export
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Generate your content, then review, edit, and export in
                      your preferred format.
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

export default Longshot;
