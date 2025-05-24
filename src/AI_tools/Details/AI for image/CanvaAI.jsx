import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import canvaSS1 from '../../../../public/assets/Img/AI from Image/canvaSS1.png';
import canvaSS2 from '../../../../public/assets/Img/AI from Image/canvaSS2.png';
import canva from '../../../../public/assets/Img/AI from Image/3.png';


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
const CanvaAI = () => {
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
                icon: "📝",
                title: "Canva Magic Write:",
                desc: "AI writer for blogs, captions, and scripts, making content creation faster and easier.",
              },
              {
                icon: "✂",
                title: "Magic Edit, Magic Eraser, Magic Expand:",
                desc: "AI-powered photo editing tools for advanced image manipulation, including editing, erasing, and expanding content.",
              },
              {
                icon: "🎨",
                title: "AI Image and Art Generators:",
                desc: "Create stunning AI-generated artwork in various styles, from abstract to photorealistic, all at the touch of a button.",
              },
              {
                icon: "🎨",
                title: "Magic Design:",
                desc: "AI-powered design tool for layout suggestions, helping you create professional-looking designs quickly.",
              },
              {
                icon: "🖼",
                title: "AI Logo, Flyer, and Poster Maker:",
                desc: "Generate logos, flyers, and posters using AI, with customizable templates and designs.",
              },
              {
                icon: "🎥",
                title: "AI Video Generator, Voiceovers, and Talking Avatars:",
                desc: "Generate AI videos with voiceovers and talking avatars, perfect for creating engaging content and presentations.",
              },
              {
                icon: "📊",
                title: "AI-Powered Presentation Tools:",
                desc: "Create stunning presentations using AI, with suggestions for layouts, design elements, and content organization.",
              },
              {
                icon: "🔍",
                title: "AI for Branding, Slogans, Hashtags, and SEO:",
                desc: "Generate branding materials, slogans, hashtags, and optimized SEO content with the power of AI.",
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
                    Why Use Canva AI
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
                    <ul>
                      <li className="mb-3">
                        Saves hours on design and writing.
                      </li>
                      <li className="mb-3">
                        No technical or design skills required.
                      </li>
                      <li className="mb-3">
                        Ready-to-use templates enhanced with AI.
                      </li>
                      <li className="mb-3">
                        Ideal for individuals, teams, students, and businesses.
                      </li>
                      <li className="mb-3">
                        Seamless integration with Canva’s ecosystem.
                      </li>
                    </ul>
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
      case "FAQ":
        return (
          <div className="faq-section container py-5">
            <h3 className="text-center text-white mb-5 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is Canva AI?",
                  a: "Canva AI is a suite of artificial intelligence-powered tools within the Canva platform to help create designs, images, videos, and written content easily.",
                },
                {
                  q: "Is Canva AI free to use?",
                  a: "Yes, many Canva AI tools are free, but premium features like Magic Write or advanced templates may require a Pro plan.",
                },
                {
                  q: "How does Canva AI work?",
                  a: "It uses generative AI and machine learning models to produce text, images, video effects, and design suggestions based on your input.",
                },
                {
                  q: "What is Canva Magic Studio?",
                  a: "Magic Studio is Canva’s AI toolset, offering features like Magic Write, Magic Edit, Magic Eraser, and more.",
                },
                {
                  q: "How do I access Canva AI?",
                  a: "Log into Canva.com, start a project, and access Magic Studio tools from the editor.",
                },

                // Design & Image Tools
                {
                  q: "Can Canva AI generate images?",
                  a: "Yes, Canva’s text-to-image feature allows you to create images from written prompts.",
                },
                {
                  q: "What is Canva Magic Edit?",
                  a: "Magic Edit lets you change elements of an image by selecting an area and entering a new description.",
                },
                {
                  q: "Does Canva AI have a background remover?",
                  a: "Yes, it's one of the most popular AI tools on Canva and works with one click.",
                },
                {
                  q: "What is Canva Magic Eraser?",
                  a: "It removes unwanted objects or people from an image using AI.",
                },
                {
                  q: "Can Canva create logos using AI?",
                  a: "Yes, the Canva AI logo maker helps generate unique logos with customizable styles.",
                },

                // Text & Content Tools
                {
                  q: "What is Canva Magic Write?",
                  a: "Magic Write is an AI text generator that creates blog posts, captions, bios, scripts, and more.",
                },
                {
                  q: "Can Canva AI generate social media captions?",
                  a: "Yes, use Magic Write or the caption generator tool in the Social Media kit.",
                },
                {
                  q: "Does Canva AI support multiple languages?",
                  a: "Yes, it supports many languages and even provides AI-powered translation.",
                },
                {
                  q: "Can I generate blog posts with Canva AI?",
                  a: "Yes, you can input your topic and let Magic Write generate a full blog post draft.",
                },
                {
                  q: "Can Canva help with SEO?",
                  a: "Yes, with the Canva AI SEO tool, you can generate keywords, meta titles, and descriptions.",
                },

                // Video & Animation Tools
                {
                  q: "Can Canva AI create videos?",
                  a: "Yes, Canva AI can generate, edit, and animate video content.",
                },
                {
                  q: "What is Canva Magic Animate?",
                  a: "This tool adds automatic animations to design elements.",
                },
                {
                  q: "Can Canva AI generate voiceovers?",
                  a: "Yes, Canva offers AI voice generation for narration in videos.",
                },
                {
                  q: "Does Canva AI offer lip-sync avatars?",
                  a: "Yes, Canva has talking avatars that sync with your script using AI.",
                },
                {
                  q: "Can I use Canva AI for YouTube thumbnails?",
                  a: "Absolutely, Canva’s AI tools help design engaging thumbnails quickly.",
                },

                // Business & Commercial Use
                {
                  q: "Can Canva AI be used commercially?",
                  a: "Yes, most outputs can be used for commercial purposes, but always check Canva’s licensing terms.",
                },
                {
                  q: "Can I use Canva AI for print on demand?",
                  a: "Yes, you can design products using AI and sell them under your brand.",
                },
                {
                  q: "Is there a Canva AI API?",
                  a: "Currently, Canva AI doesn’t offer a public API for external integrations.",
                },
                {
                  q: "Is Canva AI good for real estate marketing?",
                  a: "Yes, it’s great for creating listings, social posts, and promotional videos.",
                },
                {
                  q: "Can Canva AI create book covers?",
                  a: "Yes, with templates and AI design suggestions, it’s ideal for authors and publishers.",
                },
              ]

                .map((item, i) => ({ ...item, id: ` faq${i}` }))
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
                src={canvaSS1}
                alt="canva"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={canvaSS2}
                alt="canva"
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
                    🎥 Advanced text-to-video generation.
                  </li>
                  <li className="mb-2">
                    🎨 Supports AI image, art, and video creation.
                  </li>
                  <li className="mb-2">🧠 Train or customize AI models.</li>
                  <li className="mb-2">
                    🖌 No-code UI with professional-grade tools.
                  </li>
                  <li className="mb-2">
                    ⚙ Seamless integration with industry tools (Adobe, Final
                    Cut, Unity).
                  </li>
                  <li className="mb-2">
                    🔄 Real-time previews and fast rendering.
                  </li>
                  <li className="mb-2">
                    📈 Constantly updated AI model library.
                  </li>
                  <li className="mb-2">
                    📚 Rich educational resources and tutorials.
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
                    Some features require Canva Pro subscription.
                  </li>
                  <li className="mb-2">
                    AI-generated content may lack creative depth.
                  </li>
                  <li className="mb-2">
                    Limited customization for some AI tools.
                  </li>
                  <li className="mb-2">
                    Magic tools might not match professional-grade software.
                  </li>
                  <li className="mb-2">AI art prompts can be hit-or-miss.</li>
                  <li className="mb-2">Dependence on internet connection.</li>
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
                  <ul className="ps-3" style={{ listStyleType: "disc" }}>
                    <li className="mb-2">
                      Tool: Adobe Firefly | Specialty: More powerful image
                      editing.
                    </li>
                    <li className="mb-2">
                      Tool: DALL·E | Specialty: Dedicated text-to-image
                      generator.
                    </li>
                    <li className="mb-2">
                      Tool: Runway ML | Specialty: Advanced AI video generation.
                    </li>
                    <li className="mb-2">
                      Tool: Picsart AI | Specialty: Image and video AI tools.
                    </li>
                    <li className="mb-2">
                      Tool: Visme | Specialty: Design-focused AI alternative.
                    </li>
                    <li className="mb-2">
                      Tool: Crello | Specialty: Design-focused AI alternative.
                    </li>
                    <li className="mb-2">
                      Tool: Fotor | Specialty: Design-focused AI alternative.
                    </li>
                    <li className="mb-2">
                      Tool: ChatGPT | Specialty: For content generation.
                    </li>
                  </ul>
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
        <div className="row align-items-center g-4 mb-4">
  {/* Left side (Text Section) */}
  <div className="col-lg-6 col-12 order-lg-1 order-2 pe-lg-4">
    <p className="text-primary mb-2">Write better, faster</p>
    <h1 className="mb-3">Canva AI</h1>
    <div className="text-warning mb-3">⭐⭐⭐⭐⭐</div>
    <p className="mb-3">
      Canva AI refers to the suite of artificial intelligence-powered
      tools integrated within the Canva platform. These tools fall
      under the umbrella of Canva Magic Studio, a collection of smart
      features that help users design, write, animate, and edit
      content with ease.
    </p>
    <p className="mb-4">
      From AI-generated images to smart writing assistants, Canva AI aims 
      to make graphic design and content creation accessible for everyone—whether 
      you're a professional, student, or small business owner.
    </p>

    <div className="mb-3">
      <a
        href="https://www.canva.com/ai-image-generator/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-lg px-4"
      >
        Explore Tool
      </a>
    </div>
  </div>

  {/* Right side (Image Section) */}
  <div className="col-lg-6 col-12 order-lg-2 order-1 text-center">
    <img
      src={canva}
      alt="Canva AI Magic Studio Interface"
      className="img-fluid rounded-3 shadow-lg"
      style={{
        maxHeight: "350px",
        width: "auto",
        objectFit: "contain"
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
                How to Use Canva AI
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
                      Log in to Canva
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      (free or Pro account)
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
                      Use the Magic Studio tools like:
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Magic Write: Generate content with simple prompts Magic
                      Design: Get layout suggestions Text-to-image: Turn prompts
                      into visuals Magic Edit: Change parts of photos Magic
                      Eraser: Remove objects
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
                      Use Magic
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Animate to make static elements dynamic
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
              "FAQ",

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

export default CanvaAI;
