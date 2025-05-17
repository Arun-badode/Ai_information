import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import animoto from "../../../../public/assets/Img/AI for Animation/12.png";
import scn3 from "../../../../public/assets/Img/AI for Animation/scn3.jpg"
import scn4 from "../../../../public/assets/Img/AI for Animation/scn4.jpg";


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
const Animoto = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
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

      case "Screenshots":
        return (
          <div className="row g-4">
            <div className="col-md-6">
              <img
                src={scn3}
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={scn4}
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
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

      case "Why-We-Use":
        return (
          <div className="container">
            <div className="row g-4">
              <div className="col-12">
                <div className="custom-card text-light p-5 text-center">
                  <h3 className="fw-bold mb-4 text-start text-primary">
                    Why Use Animoto?
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
                      Animoto is ideal for users who want to quickly create
                      professional-looking videos.
                    </li>
                    <li className="mb-3">
                      Great for businesses, educators, and social media
                      marketers to craft engaging content.
                    </li>
                    <li className="mb-3">
                      Offers easy drag-and-drop functionality with pre-built
                      templates and stock media.
                    </li>
                    <li className="mb-3">
                      Allows customization of branding, text, music, and
                      transitions without technical skills.
                    </li>
                    <li className="mb-3">
                      Animoto simplifies video creation for personal and
                      professional use alike.
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

      case "Pros & Cons":
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
                    User-friendly drag-and-drop video editor.
                  </li>
                  <li className="mb-2">
                    A wide range of templates for quick video creation.
                  </li>
                  <li className="mb-2">
                    Suitable for marketing, education, and social media videos.
                  </li>
                  <li className="mb-2">
                    Cloud-based platform — no need to install software.
                  </li>
                  <li className="mb-2">
                    Offers royalty-free music and media library.
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
                    Limited customization compared to professional video
                    editors.
                  </li>
                  <li className="mb-2">
                    Watermark on videos in the free version.
                  </li>
                  <li className="mb-2">
                    Not ideal for complex or long-form video editing projects.
                  </li>
                  <li className="mb-2">
                    Templates can feel repetitive for frequent users.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "Alternative":
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
                    A simple drag-and-drop video maker great for quick social
                    media posts.
                  </li>
                  <li className="mb-2">
                    A platform focused on branded video creation with
                    professional templates.
                  </li>
                  <li className="mb-2">
                    An intuitive video editor with strong stock footage and
                    music integration.
                  </li>
                  <li className="mb-2">
                    A cloud-based solution ideal for teams collaborating on
                    video content.
                  </li>
                </ul>
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
                  q: "What is Animoto?",
                  a: "Animoto is a cloud-based video creation tool that helps users turn photos and video clips into professional-quality videos.",
                },
                {
                  q: "How do I create a video with Animoto?",
                  a: "Sign up, upload media, choose a template, add text/music, and click 'create' to generate your video.",
                },
                {
                  q: "Is Animoto free to use?",
                  a: "Animoto offers a free trial with limited features before subscribing to paid plans.",
                },
                {
                  q: "What are Animoto's subscription plans?",
                  a: "Animoto offers Personal, Professional, and Business plans, starting at $15/month.",
                },
                {
                  q: "Can I use Animoto for social media videos?",
                  a: "Yes, it has templates optimized for Instagram, Facebook, TikTok, and more.",
                },
                {
                  q: "Does Animoto provide templates?",
                  a: "Yes, it offers templates for marketing, personal events, and more.",
                },
                {
                  q: "Can I add music to my Animoto video?",
                  a: "Yes, use royalty-free tracks from its library or upload your own.",
                },
                {
                  q: "Is Animoto suitable for businesses?",
                  a: "Yes, it's great for marketing, product demos, and social content.",
                },
                {
                  q: "Can I add text to Animoto videos?",
                  a: "Yes, you can add and customize text in your video.",
                },
                {
                  q: "Does Animoto support video ads?",
                  a: "Yes, you can create video ads for websites and social platforms.",
                },
                {
                  q: "What types of videos can I create with Animoto?",
                  a: "Marketing videos, tutorials, slideshows, social videos, etc.",
                },
                {
                  q: "Is Animoto beginner-friendly?",
                  a: "Yes, it has a simple drag-and-drop interface perfect for beginners.",
                },
                {
                  q: "Can Animoto be used for creating explainer videos?",
                  a: "Yes, it has tools and templates ideal for explainer videos.",
                },
                {
                  q: "Can I download the videos created in Animoto?",
                  a: "Yes, videos can be downloaded in HD or shared directly.",
                },
                {
                  q: "What video formats does Animoto support?",
                  a: "Supports MP4, MOV, and other common formats.",
                },
                {
                  q: "Can I use Animoto for creating Instagram Stories?",
                  a: "Yes, it includes vertical formats for Instagram Stories.",
                },
                {
                  q: "Can Animoto be used for creating wedding videos?",
                  a: "Yes, it has beautiful templates for wedding highlights and slideshows.",
                },
                {
                  q: "Does Animoto offer a mobile app?",
                  a: "Yes, available on both iOS and Android.",
                },
                {
                  q: "How long can the videos be on Animoto?",
                  a: "Typically up to 10 minutes, depending on your plan.",
                },
                {
                  q: "What is the difference between Animoto and Adobe Spark?",
                  a: "Animoto is focused on video, while Adobe Spark includes graphics and web tools.",
                },
                {
                  q: "Can Animoto be used for real estate videos?",
                  a: "Yes, ideal for property tours and client testimonials.",
                },
                {
                  q: "Is Animoto good for creating YouTube videos?",
                  a: "Yes, great for intros, how-tos, and promotional content.",
                },
                {
                  q: "Can I upload my own videos to Animoto?",
                  a: "Yes, you can upload both photos and video clips.",
                },
                {
                  q: "What is Animoto's AI-powered video creation?",
                  a: "AI selects the best media, transitions, and music for polished videos.",
                },
                {
                  q: "Does Animoto provide any customization options?",
                  a: "Yes, customize text, transitions, colors, effects, and branding.",
                },
                {
                  q: "Can I add subtitles to my Animoto videos?",
                  a: "You can add text overlays and captions, but not auto subtitles.",
                },
                {
                  q: "Does Animoto offer video analytics?",
                  a: "No, use YouTube/Facebook to track analytics.",
                },
                {
                  q: "Can I create a video for TikTok with Animoto?",
                  a: "Yes, it supports TikTok-friendly formats and templates.",
                },
                {
                  q: "Can Animoto be used for educational content?",
                  a: "Yes, it's useful for tutorials and learning videos.",
                },
                {
                  q: "Does Animoto have customer support?",
                  a: "Yes, support is available via email, live chat, and help center.",
                },
                {
                  q: "How does Animoto compare to InVideo?",
                  a: "InVideo has more advanced tools; Animoto is easier for beginners.",
                },
                {
                  q: "Can I create product demo videos with Animoto?",
                  a: "Yes, ideal for showcasing features and benefits.",
                },
                {
                  q: "Can Animoto be used for video ads on Facebook?",
                  a: "Yes, it includes Facebook ad templates.",
                },
                {
                  q: "Can I use Animoto for event videos?",
                  a: "Yes, great for creating promotional and recap videos.",
                },
                {
                  q: "Does Animoto offer templates for small businesses?",
                  a: "Yes, including ads, promos, and testimonials.",
                },
                {
                  q: "Can I remove Animoto's watermark from my videos?",
                  a: "Yes, watermark is removed in paid plans.",
                },
                {
                  q: "Can Animoto create animated videos?",
                  a: "Basic animations are supported, not full character animation.",
                },
                {
                  q: "Is Animoto good for influencer marketing?",
                  a: "Yes, great for engaging video content for campaigns.",
                },
                {
                  q: "How does Animoto help with video storytelling?",
                  a: "Templates and tools help create narrative-driven content.",
                },
                {
                  q: "Can I add logos to my Animoto videos?",
                  a: "Yes, add branding including logos and colors.",
                },
                {
                  q: "Does Animoto support video transitions?",
                  a: "Yes, it includes smooth transition effects.",
                },
                {
                  q: "What video editing features does Animoto provide?",
                  a: "Trimming, text overlays, filters, transitions, and music.",
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
              <h1>Animoto AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Animoto is a cloud-based video creation platform that allows
                users to easily create professional-quality videos from photos,
                video clips, and music. The platform offers an intuitive
                interface with drag-and-drop functionality, making it accessible
                for both beginners and professionals. Animoto is widely used for
                social media content creation, marketing, and business
                promotions.
              </p>

              <div className="mb-3">
                <a
                  href="https://animoto.com/"
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
                src={animoto}
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
                How to Use Animoto?
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
                      Choose a Video Template
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Start by selecting a pre-built Animoto template that suits
                      your story or brand.
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
                      Add Media and Customize
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Upload your photos, videos, and text — then drag and drop
                      to customize your video.
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
                      Export and Share
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Download your video instantly or share it directly to
                      social media and websites.
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
              "Features",
              "Screenshots",
              "Reviews",
              "FAQs",

              "Why-We-Use",
              "Pros & Cons",
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

export default Animoto;
