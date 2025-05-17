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
const Magisto = () => {
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
                title: "Video Templates:",
                desc: "Choose from a wide range of customizable video templates for any occasion.",
              },
              {
                icon: "🖼",
                title: "Drag-and-Drop Builder:",
                desc: "Easily add photos, video clips, text, and music with intuitive controls.",
              },
              {
                icon: "🎵",
                title: "Licensed Music Library:",
                desc: "Access a built-in collection of royalty-free music tracks.",
              },
              {
                icon: "✍",
                title: "Text Customization:",
                desc: "Add and style text overlays to enhance your video message.",
              },
              {
                icon: "📱",
                title: "Social Media Optimization:",
                desc: "Create videos tailored for platforms like Instagram, Facebook, and YouTube.",
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
                  q: "What is Magisto?",
                  a: "Magisto is an AI-powered online video editor that simplifies video creation with automation and smart editing features.",
                },
                {
                  q: "How does Magisto work?",
                  a: "It uses artificial intelligence to analyze video clips, add effects, transitions, and music, and create polished videos with minimal user input.",
                },
                {
                  q: "Is Magisto easy to use for beginners?",
                  a: "Yes, Magisto is designed to be beginner-friendly with drag-and-drop editing and automated tools.",
                },
                {
                  q: "Is Magisto free to use?",
                  a: "Magisto offers a free trial with limited features. Paid plans unlock premium tools and exports.",
                },
                {
                  q: "What platforms is Magisto available on?",
                  a: "Magisto is accessible via web browsers, Android, and iOS apps.",
                },
                {
                  q: "What makes Magisto unique?",
                  a: "Its AI-driven video editing engine automates much of the video creation process, saving time.",
                },
                {
                  q: "Who should use Magisto?",
                  a: "Businesses, marketers, influencers, educators, and small content creators looking for quick and professional videos.",
                },
                {
                  q: "Can Magisto be used for business marketing?",
                  a: "Yes, many use Magisto to create brand videos, product demos, and promotional content.",
                },
                {
                  q: "What kind of templates does Magisto offer?",
                  a: "Magisto offers templates for marketing, education, events, real estate, and social media.",
                },
                {
                  q: "How is Magisto different from InVideo?",
                  a: "Magisto focuses more on AI automation, while InVideo offers more manual control and customization.",
                },
                {
                  q: "How is Magisto different from Animoto?",
                  a: "Magisto uses more AI-driven editing, while Animoto offers more drag-and-drop flexibility.",
                },
                {
                  q: "Can I use Magisto for YouTube videos?",
                  a: "Yes, many YouTubers use it to create vlogs, intros, tutorials, and more.",
                },
                {
                  q: "Is there a Magisto mobile app?",
                  a: "Yes, Magisto is available for both Android and iOS.",
                },
                {
                  q: "Can I export videos in HD with Magisto?",
                  a: "Yes, depending on your plan, you can export videos in high resolution.",
                },
                {
                  q: "Does Magisto support voiceover?",
                  a: "Yes, you can add your voiceover to any video.",
                },
                {
                  q: "Does Magisto have a built-in music library?",
                  a: "Yes, it includes a royalty-free music library for video enhancement.",
                },
                {
                  q: "Can I use Magisto for Instagram videos?",
                  a: "Absolutely, Magisto has formats and templates optimized for Instagram.",
                },
                {
                  q: "Can I make Facebook video ads with Magisto?",
                  a: "Yes, Magisto is ideal for creating Facebook video ads quickly.",
                },
                {
                  q: "Does Magisto support text animations?",
                  a: "Yes, it includes animated text options to enhance video storytelling.",
                },
                {
                  q: "Can I create slideshows in Magisto?",
                  a: "Yes, Magisto’s slideshow maker allows you to create engaging photo and video slideshows.",
                },
                {
                  q: "What AI features does Magisto use?",
                  a: "AI analyzes scenes, adds transitions, selects music, and automates editing.",
                },
                {
                  q: "Can I use Magisto for TikTok content?",
                  a: "Yes, it’s great for short, eye-catching TikTok-style videos.",
                },
                {
                  q: "What video formats does Magisto support?",
                  a: "It supports most popular video formats including MP4 and MOV.",
                },
                {
                  q: "Can I use Magisto for real estate marketing?",
                  a: "Yes, Magisto offers templates specifically for property tours and listings.",
                },
                {
                  q: "Is Magisto suitable for educational videos?",
                  a: "Yes, teachers and students use it for lessons, presentations, and e-learning videos.",
                },
                {
                  q: "Can I collaborate with a team on Magisto?",
                  a: "Team collaboration tools are available in higher-tier plans.",
                },
                {
                  q: "How long can my videos be on Magisto?",
                  a: "Video length depends on your subscription tier, usually up to 10 minutes.",
                },
                {
                  q: "Does Magisto have customer support?",
                  a: "Yes, support is available via email and help center.",
                },
                {
                  q: "Does Magisto offer analytics?",
                  a: "Business plans include basic video performance insights.",
                },
                {
                  q: "Can I use my own music in Magisto?",
                  a: "Yes, you can upload your own audio tracks.",
                },
                {
                  q: "Can I white-label my videos?",
                  a: "Only premium plans allow branding removal and custom branding.",
                },
                {
                  q: "Does Magisto have an API?",
                  a: "Yes, there is an API for enterprise integration.",
                },
                {
                  q: "Is Magisto suitable for eCommerce?",
                  a: "Yes, it helps brands showcase products with promotional videos.",
                },
                {
                  q: "Can I schedule posts from Magisto?",
                  a: "While not a built-in feature, you can export videos for scheduling via other tools.",
                },
                {
                  q: "Does Magisto offer voice-to-video functionality?",
                  a: "Not directly, but you can upload voice recordings to use as narration.",
                },
                {
                  q: "Does Magisto auto-caption videos?",
                  a: "It doesn’t have built-in auto-captioning, but you can manually add text.",
                },
                {
                  q: "Can Magisto be used offline?",
                  a: "No, it's a cloud-based tool and requires an internet connection.",
                },
                {
                  q: "Can I create vertical videos in Magisto?",
                  a: "Yes, vertical video templates are available.",
                },
                {
                  q: "Does Magisto offer transitions and effects?",
                  a: "Yes, a variety of transitions, filters, and effects are available.",
                },
                {
                  q: "Can Magisto edit audio?",
                  a: "Basic audio editing like volume adjustment and trimming is supported.",
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
                    Why Use Magisto AI?
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
                      Magisto is perfect for creating quick, polished videos
                      using AI.
                    </li>
                    <li className="mb-3">
                      Great for businesses, marketers, and social media
                      influencers to create engaging content.
                    </li>
                    <li className="mb-3">
                      Offers automatic video editing with AI-driven tools and
                      pre-built templates.
                    </li>
                    <li className="mb-3">
                      Simplifies video creation without requiring advanced
                      editing skills.
                    </li>
                    <li className="mb-3">
                      Magisto is ideal for users looking for an intuitive,
                      cloud-based solution for video editing.
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
                    Smart AI automatically analyzes and edits your footage.
                  </li>
                  <li className="mb-2">
                    Great for quick and professional-looking video creation.
                  </li>
                  <li className="mb-2">
                    Includes music, effects, and transitions automatically.
                  </li>
                  <li className="mb-2">
                    Simple interface ideal for beginners and small businesses.
                  </li>
                  <li className="mb-2">
                    Easily share videos on social media platforms.
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
                    Limited control over video editing compared to fully manual
                    editors.
                  </li>
                  <li className="mb-2">
                    Some features are locked behind premium plans.
                  </li>
                  <li className="mb-2">
                    Automated edits may not always match your vision perfectly.
                  </li>
                  <li className="mb-2">
                    The free plan includes a watermark on the final video.
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
                    Animoto – Easy-to-use tool for making slideshow-style
                    marketing videos.
                  </li>
                  <li className="mb-2">
                    InVideo – Offers advanced templates and AI assistance for
                    quick video creation.
                  </li>
                  <li className="mb-2">
                    Canva Video – Design-friendly platform with simple video
                    editing and drag-and-drop tools.
                  </li>
                  <li className="mb-2">
                    Adobe Express – Great for branded video content with
                    flexible design elements.
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
              style={{ paddingRight: "30px" }}
              className="col-md-6  col-12 order-2 order-md-1 "
            >
              <p className="text-primary">Write better, faster</p>
              <h1>Magisto AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Magisto is an AI-powered video editing tool that simplifies the
                process of creating engaging and professional-looking videos.
                Designed for users of all skill levels, Magisto utilizes
                artificial intelligence to analyze raw footage, apply smart
                editing techniques, and generate high-quality videos for various
                purposes. Whether you're a content creator, marketer, educator,
                or business owner, Magisto streamlines your video creation
                workflow, saving time without compromising quality.
              </p>

              <div className="mb-3">
                <a
                  href="https://www.magisto.com/"
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
                How to Use Magisto AI?
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
                      Upload Your Media
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Start by uploading your photos and video clips to the
                      Magisto platform.
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
                      Select Editing Style
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Choose from various AI-powered themes, music, and editing
                      styles to match your message.
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
                      Finalize and Share
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Let Magisto's AI edit your video automatically, then
                      download or share it online.
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

export default Magisto;
