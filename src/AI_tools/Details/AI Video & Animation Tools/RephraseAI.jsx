import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

import rephraseAI from "../../../../public/assets/Img/AI for Animation/13.png";
import scn13 from "../../../../public/assets/Img/AI for Animation/scn13.jpg";
import scn14 from "../../../../public/assets/Img/AI for Animation/scn14.jpg";
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
const RephraseAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                Create Personalized Videos in Minutes
              </p>
              <h3 className=""> AI-Powered Video Generation & Customization</h3>
            </div>
            {[
              {
                icon: "🤖",
                title: "AI-Powered Video Creation:",
                desc: "Generate professional-looking videos from text using advanced AI algorithms.",
              },
              {
                icon: "💬",
                title: "Text-to-Video Conversion:",
                desc: "Convert your text into realistic video content with synthetic avatars.",
              },
              {
                icon: "🎨",
                title: "Customizable Avatars & Scenes:",
                desc: "Personalize the appearance and style of avatars and scenes to match your brand.",
              },
              {
                icon: "🔧",
                title: "Advanced Editing Tools:",
                desc: "Modify videos with powerful editing features, including text, background, and more.",
              },
              {
                icon: "🌐",
                title: "Multi-Platform Integration:",
                desc: "Seamlessly integrate your videos for use across websites, social media, and marketing campaigns.",
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
      case "why-we-use":
        return (
          <div className="container">
            <div className="row g-4">
              <div className="col-12">
                <div className="custom-card text-light p-5 text-center">
                  <h3 className="fw-bold mb-4 text-start text-primary">
                    Why Use Rephrase.ai?
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
                      Rephrase.ai is perfect for businesses and marketers
                      needing personalized video creation using AI.
                    </li>
                    <li className="mb-3">
                      It's ideal for creating AI-driven video content for
                      websites, social media, and marketing campaigns.
                    </li>
                    <li className="mb-3">
                      The platform offers innovative features like text-to-video
                      conversion and customizable avatars.
                    </li>
                    <li className="mb-3">
                      Rephrase.ai enhances productivity by automating video
                      generation and customization processes.
                    </li>
                    <li className="mb-3">
                      It simplifies video creation and enables quick production
                      of professional-looking videos with minimal effort.
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
      case "FAQs":
        return (
          <div className="faq-section container py-5">
            <h3 className="text-center text-white mb-5 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is Rephrase.ai?",
                  a: "Rephrase.ai is an AI-powered video platform that allows users to create personalized videos by converting text into dynamic video content using human-like avatars.",
                },
                {
                  q: "How does Rephrase.ai work?",
                  a: "Rephrase.ai works by transforming text scripts into videos, using AI to generate lifelike avatars that speak the script and create engaging visual content.",
                },
                {
                  q: "Is Rephrase.ai free to use?",
                  a: "Rephrase.ai offers a free trial with limited features. To access full capabilities, a paid subscription is required.",
                },
                {
                  q: "What industries can benefit from Rephrase.ai?",
                  a: "Rephrase.ai is beneficial for industries such as marketing, sales, HR, education, eCommerce, real estate, and more.",
                },
                {
                  q: "How do I create a video using Rephrase.ai?",
                  a: "Simply input your script or text, select a custom avatar, and Rephrase.ai will generate the video based on the input.",
                },
                {
                  q: "What is the pricing of Rephrase.ai?",
                  a: "Rephrase.ai offers flexible pricing plans, including enterprise pricing for large-scale video production. The exact pricing depends on the features required and the scale of usage.",
                },
                {
                  q: "Does Rephrase.ai offer a demo?",
                  a: "Yes, Rephrase.ai provides a demo to help users understand how the platform works before committing to a subscription.",
                },
                {
                  q: "Can I create personalized videos for sales with Rephrase.ai?",
                  a: "Yes, Rephrase.ai is ideal for creating personalized sales videos that can be sent directly to prospects.",
                },
                {
                  q: "What video templates are available on Rephrase.ai?",
                  a: "Rephrase.ai offers various templates, including explainer videos, product demos, testimonial videos, and corporate videos.",
                },
                {
                  q: "Can Rephrase.ai generate videos for marketing purposes?",
                  a: "Absolutely. Rephrase.ai is widely used for creating personalized marketing videos tailored to specific customer segments.",
                },
                {
                  q: "How does Rephrase.ai improve customer engagement?",
                  a: "Rephrase.ai helps businesses create personalized content, leading to more effective customer engagement and better response rates in sales and marketing campaigns.",
                },
                {
                  q: "What makes Rephrase.ai different from other video creation tools?",
                  a: "Rephrase.ai specializes in personalized video generation using AI-driven avatars, making videos more relevant and engaging compared to generic content creation tools.",
                },
                {
                  q: "Can I customize the avatars in Rephrase.ai?",
                  a: "Yes, Rephrase.ai allows customization of avatars to match your brand’s tone and personality, ensuring a more personalized video experience.",
                },
                {
                  q: "Can I use Rephrase.ai for email marketing?",
                  a: "Yes, Rephrase.ai is ideal for creating personalized video emails that can significantly boost email engagement rates.",
                },
                {
                  q: "What types of videos can I create with Rephrase.ai?",
                  a: "You can create explainer videos, sales pitch videos, testimonials, product demo videos, corporate training videos, and more.",
                },
                {
                  q: "Is Rephrase.ai suitable for real estate?",
                  a: "Yes, real estate businesses can use Rephrase.ai to create personalized property tour videos, engaging potential buyers with dynamic visuals.",
                },
                {
                  q: "Can Rephrase.ai be integrated with other tools?",
                  a: "Yes, Rephrase.ai supports integrations with CRM systems, email marketing platforms, and other tools to automate video creation.",
                },
                {
                  q: "How accurate is the AI avatar in Rephrase.ai?",
                  a: "Rephrase.ai’s AI avatars are designed to closely mimic human speech and facial expressions, making them highly realistic.",
                },
                {
                  q: "Does Rephrase.ai offer multilingual support?",
                  a: "Yes, Rephrase.ai supports multiple languages, making it suitable for global audiences.",
                },
                {
                  q: "Can I add voiceover to videos created with Rephrase.ai?",
                  a: "Yes, Rephrase.ai allows you to add voiceover to the videos, with custom narration options.",
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

              {/* Read More / Show Less Button */}
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

      case "screenshots":
        return (
          <div className="row g-4">
            <div className="col-md-6">
              <img
                src={scn13}
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={scn14}
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
                    AI-driven editing that automatically analyzes and enhances
                    your video content.
                  </li>
                  <li className="mb-2">
                    Perfect for producing polished videos quickly with minimal
                    effort.
                  </li>
                  <li className="mb-2">
                    Comes with built-in music, effects, and transitions for
                    seamless creation.
                  </li>
                  <li className="mb-2">
                    User-friendly interface, making it ideal for beginners and
                    small businesses.
                  </li>
                  <li className="mb-2">
                    Effortlessly share your creations across various social
                    media platforms.
                  </li>
                </ul>
              </div>

              {/*  */}
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
                    Some features are restricted to premium plans.
                  </li>
                  <li className="mb-2">
                    Automated edits may not always align perfectly with your
                    vision.
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
                    Animoto – A user-friendly tool for creating slideshow-style
                    marketing videos.
                  </li>
                  <li className="mb-2">
                    InVideo – Offers advanced templates and AI assistance for
                    quick video creation.
                  </li>
                  <li className="mb-2">
                    Canva Video – A design-friendly platform with simple video
                    editing and drag-and-drop tools.
                  </li>
                  <li className="mb-2">
                    Adobe Express – Ideal for creating branded video content
                    with flexible design elements.
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
              <h1> Rephrase AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                {" "}
                Rephrase.ai is an advanced AI-powered video generation platform
                that allows users to create personalized videos by transforming
                text into engaging video content. It uses artificial
                intelligence to produce human-like avatars and dynamic,
                real-time video responses, making it ideal for various
                applications such as marketing, sales, recruitment, education,
                and more.
              </p>

              <div className="mb-3">
                <a
                  href="https://www.rephraseai.tech/"
                  target="_blank"
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
                src={rephraseAI}
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
                      Start by uploading your images and video files to the
                      AI-powered Magisto platform.
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
                      Choose AI Editing Style
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Select from AI-driven editing options, themes, and
                      soundtracks to enhance your video content.
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
                      Finalize and Share with AI Magic
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Let Magisto's AI complete the editing process, then share
                      or download your polished video.
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

export default RephraseAI;
