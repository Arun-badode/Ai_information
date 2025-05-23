import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import runwaySS1 from '../../../../public/assets/Img/AI from Image/runwaySS1.png';
import runwaySS2 from '../../../../public/assets/Img/AI from Image/runwaySS2.png';


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
const RunwayMLAI = () => {
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
                icon: "🎥",
                title: "Text-to-Video Generation using Gen-2:",
                desc: "Create dynamic videos from text descriptions with Gen-2, transforming written prompts into motion visuals for creative projects.",
              },
              {
                icon: "✂",
                title: "Video Editing:",
                desc: "Advanced video editing features such as motion tracking, lip-syncing, and background removal, making it easier to create professional-quality content.",
              },
              {
                icon: "🎨",
                title: "AI Art Creation:",
                desc: "Generate stunning artwork with AI in styles ranging from anime to surreal and realistic images, giving users the flexibility to explore various artistic expressions.",
              },
              {
                icon: "❌",
                title: "Object Removal:",
                desc: "Seamlessly erase unwanted parts of videos, providing a clean and polished final product by removing distractions or irrelevant content.",
              },
              {
                icon: "🔲",
                title: "Inpainting & Outpainting:",
                desc: "Fill missing areas in images or videos with AI, completing visuals by intelligently generating the content that best fits the context.",
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
                    Why Use Runway ML?
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
                        Turn text prompts into cinematic videos.
                      </li>
                      <li className="mb-3">
                        Powerful yet easy-to-use UI for professionals &
                        beginners.
                      </li>
                      <li className="mb-3">
                        Create high-quality marketing content, social media
                        clips, and artwork in minutes.
                      </li>
                      <li className="mb-3">
                        Use pre-trained models or train your own.
                      </li>
                      <li className="mb-3">
                        Integrates with Adobe tools, OBS Studio, Unity, Unreal
                        Engine.
                      </li>
                      <li className="mb-3">
                        Ideal for YouTubers, designers, agencies, students, NFT
                        creators.
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
                  q: "Who created Runway ML?",
                  a: "Runway ML was founded by a team of researchers and creatives including Cristóbal Valenzuela. It was designed to make machine learning tools accessible to creatives without coding skills.",
                },
                {
                  q: "What can Runway ML do?",
                  a: "Runway ML can perform text-to-video generation, video editing, image generation, object removal, inpainting, and much more.",
                },
                {
                  q: "Is Runway ML a free tool?",
                  a: "Runway ML offers a limited free plan with paid plans for extended features and more credits.",
                },
                {
                  q: "Is Runway ML only for video?",
                  a: "No, while Runway ML is popular for video tools, it also supports image generation, AI portraits, object removal, and style transfer.",
                },
                {
                  q: "Can beginners use Runway ML?",
                  a: "Yes, it is designed to be user-friendly with an intuitive interface, perfect for beginners and professionals alike.",
                },
                {
                  q: "Does Runway ML require coding?",
                  a: "No coding is required. Runway ML provides a visual interface where users can access powerful AI models without technical expertise.",
                },
                {
                  q: "What is Gen-2 in Runway ML?",
                  a: "Gen-2 is Runway ML’s latest generation of text-to-video and video editing AI, offering better realism, motion understanding, and creative flexibility.",
                },
                {
                  q: "What platforms is Runway ML available on?",
                  a: "Runway ML is available through its web platform and also integrates with tools like Adobe Premiere, Photoshop, and OBS Studio.",
                },
                {
                  q: "Is Runway ML used by professionals?",
                  a: "Yes, it’s used by content creators, filmmakers, educators, marketers, and even large studios for AI-assisted production.",
                },

                // 🎥 Video Creation & Editing
                {
                  q: "Can Runway ML generate videos from text?",
                  a: "Yes, with Gen-2, you can create videos directly from descriptive text prompts.",
                },
                {
                  q: "Can I remove backgrounds in videos using Runway ML?",
                  a: "Yes, Runway ML offers a background removal tool that works without a green screen.",
                },
                {
                  q: "Does Runway ML support video inpainting?",
                  a: "Yes, you can paint over unwanted objects in videos to remove or replace them.",
                },
                {
                  q: "Can I upscale videos in Runway ML?",
                  a: "Yes, it includes a video upscaling feature to enhance resolution.",
                },
                {
                  q: "What is motion tracking in Runway ML?",
                  a: "It allows you to follow and edit elements that move across frames, ideal for adding graphics or effects.",
                },
                {
                  q: "How long can the generated videos be?",
                  a: "Length depends on the credits you have and the feature used, but usually ranges from a few seconds to a minute.",
                },
                {
                  q: "Does Runway ML support frame interpolation?",
                  a: "Yes, you can create smoother video transitions using AI-based frame interpolation.",
                },
                {
                  q: "Can I slow down a video in Runway ML?",
                  a: "Yes, it provides tools for AI-powered slow motion effects.",
                },
                {
                  q: "Is lip-sync animation possible with Runway ML?",
                  a: "Yes, especially useful for avatar-based content and dubbing.",
                },
                {
                  q: "Does Runway ML export videos in high resolution?",
                  a: "Yes, with the right plan, you can export in HD or 4K resolution.",
                },

                // 🎨 Image Generation & Editing
                {
                  q: "Can Runway ML generate images from text?",
                  a: "Yes, similar to MidJourney or DALL·E, it uses AI to turn text prompts into stunning images.",
                },
                {
                  q: "What styles can Runway ML generate?",
                  a: "It supports a wide range of styles including anime, surreal, fantasy, photorealistic, cartoon, and more.",
                },
                {
                  q: "Can I enhance images in Runway ML?",
                  a: "Yes, with AI-based enhancement, noise removal, and color correction tools.",
                },
                {
                  q: "Does it support style transfer?",
                  a: "Yes, you can apply the artistic style of one image to another using AI.",
                },
                {
                  q: "What is image inpainting?",
                  a: "It allows users to erase and regenerate parts of an image, seamlessly filling gaps using AI.",
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
                src={runwaySS1}
                alt="runway"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={runwaySS2}
                alt="runway"
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
                    💵 Many features are locked behind paid plans.
                  </li>
                  <li className="mb-2">
                    🖥 Heavier browser usage may lag on low-end PCs.
                  </li>
                  <li className="mb-2">
                    🧪 Some AI outputs may need manual correction.
                  </li>
                  <li className="mb-2">🔄 Learning curve for prompt design.</li>
                  <li className="mb-2">
                    📉 Limited export formats in the free plan.
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
                  <ul className="ps-3" style={{ listStyleType: "disc" }}>
                    <li className="mb-2">
                      Tool: MidJourney | Specialty: Art generation from text,
                      great for concept art.
                    </li>
                    <li className="mb-2">
                      Tool: Stable Diffusion | Specialty: Open-source, flexible,
                      custom models.
                    </li>
                    <li className="mb-2">
                      Tool: Adobe Firefly | Specialty: Integrated in Adobe
                      ecosystem, commercial use ready.
                    </li>
                    <li className="mb-2">
                      Tool: DALL·E | Specialty: OpenAI’s powerful text-to-image
                      generator.
                    </li>
                    <li className="mb-2">
                      Tool: Pictory | Specialty: AI video summarizer for
                      YouTubers.
                    </li>
                    <li className="mb-2">
                      Tool: Kaiber AI | Specialty: AI video generation with
                      motion style animation.
                    </li>
                    <li className="mb-2">
                      Tool: DeepBrain AI | Specialty: Best for AI avatars &
                      face-sync video.
                    </li>
                    <li className="mb-2">
                      Tool: Leonardo AI | Specialty: Artistic creation and
                      visual storytelling.
                    </li>
                    <li className="mb-2">
                      Tool: Synthesia | Specialty: Human-like AI video
                      narration.
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
       <div className="row align-items-center justify-content-between mb-1">
  {/* Left side (Text Section) */}
  <div className="col-12 col-md-6 mb-4 mb-md-0" style={{ paddingRight: "30px" }}>
    <p className="text-primary">Write better, faster</p>
    <h1>Runway ML</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      Runway ML is a powerful AI platform designed for creatives,
      filmmakers, and designers to generate and edit media using
      machine learning models. It simplifies advanced AI tasks like
      text-to-video generation, inpainting, object removal, style
      transfer, and more—without requiring any coding knowledge.
      It is especially known for its text-to-video model Gen-2,
      offering next-level creativity with minimal input.
    </p>
    <div className="mb-3">
      <a
        href="https://runwayml.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary me-2"
      >
        Explore Tool
      </a>
    </div>
  </div>

  {/* Right side (Image Section) */}
  <div className="col-12 col-md-6 text-center">
    <img
      src="your-base64-image-or-link-here"
      alt="Runway ML Tool"
      style={{ width: "100%", maxHeight: "250px", objectFit: "cover" }}
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
                How to Use Runway ML
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
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}></h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Go to the official website and sign up.
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
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}></h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Choose from Free or Paid plans based on your use case.
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
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}></h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Access the dashboard with tools like Gen-2, inpainting,
                      video editor, image generation, etc
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

export default RunwayMLAI;
