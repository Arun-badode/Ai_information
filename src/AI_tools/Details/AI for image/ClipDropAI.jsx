import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import magisto from "../../../Images/MagistoAI.png";
import clipdropSS1 from '../../../../public/assets/Img/AI from Image/clipdropSS1.png';
import clipdropSS2 from '../../../../public/assets/Img/AI from Image/clipdropSS2.png';


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
const ClipDropAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">Boost Your Edits with ClipDrop AI</p>
              <h3 className="">Smart & Fast AI Photo Editing for Everyone</h3>
            </div>
            {[
              {
                icon: "🧹",
                title: "AI Cleanup Tool:",
                desc: "Easily remove unwanted objects, people, or imperfections from your photos using ClipDrop’s advanced AI cleanup technology.",
              },
              {
                icon: "🖼️",
                title: "Background Remover:",
                desc: "Instantly erase or replace backgrounds from any image with a single click—ideal for e-commerce, social media, and marketing.",
              },
              {
                icon: "💡",
                title: "Relight Images:",
                desc: "Use AI to adjust lighting in your photos as if they were shot in a professional studio, enhancing clarity and depth automatically.",
              },
              {
                icon: "🔍",
                title: "Image Upscaler:",
                desc: "Enhance image resolution without quality loss using ClipDrop’s AI-powered upscaling, making low-res images print and web-ready.",
              },
              {
                icon: "🌐",
                title: "Web & App Access:",
                desc: "Edit seamlessly on ClipDrop’s web platform or mobile app, giving you flexibility to enhance images from anywhere, anytime.",
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
                src={clipdropSS1}
                alt="clipdrop"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={clipdropSS2}
                alt="clipdrop"
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
                  q: "What is ClipDrop AI?",
                  a: "ClipDrop AI is an AI-powered image editing platform offering tools like background removal, object cleanup, relighting, and upscaling for creators and professionals.",
                },
                {
                  q: "How does AI work in ClipDrop?",
                  a: "ClipDrop uses advanced AI models to intelligently detect subjects, clean up backgrounds, enhance lighting, and upscale images with minimal user input.",
                },
                {
                  q: "Can ClipDrop AI remove backgrounds?",
                  a: "Yes, ClipDrop offers a one-click AI background remover that instantly isolates subjects from the background.",
                },
                {
                  q: "Does ClipDrop offer object cleanup?",
                  a: "Yes, the AI Cleanup tool removes unwanted elements such as people, text, or distractions from photos in seconds.",
                },
                {
                  q: "Is ClipDrop beginner-friendly?",
                  a: "Yes, ClipDrop is easy to use with a clean interface and simple tools suitable for both beginners and professionals.",
                },
                {
                  q: "Does ClipDrop have a mobile app?",
                  a: "Yes, ClipDrop is available for Android and iOS, allowing users to edit photos directly from their phones.",
                },
                {
                  q: "Can I relight images using ClipDrop?",
                  a: "Yes, ClipDrop’s Relight feature allows you to adjust lighting conditions in photos for a professional studio effect.",
                },
                {
                  q: "Does ClipDrop offer image upscaling?",
                  a: "Yes, the AI Upscaler enhances image resolution and quality, making low-res images suitable for high-definition use.",
                },
                {
                  q: "Can I use ClipDrop offline?",
                  a: "Most ClipDrop features require an internet connection as they are cloud-based, especially for AI processing.",
                },
                {
                  q: "Is ClipDrop free to use?",
                  a: "ClipDrop offers limited features for free and a Pro subscription for full access to advanced AI tools.",
                },
                {
                  q: "Does ClipDrop support transparent PNG exports?",
                  a: "Yes, background-removed images can be exported as transparent PNG files for use in various projects.",
                },
                {
                  q: "Can I integrate ClipDrop with Photoshop?",
                  a: "Yes, ClipDrop has a plugin for Photoshop that lets you import processed images directly into your editing workflow.",
                },
                {
                  q: "Is ClipDrop suitable for e-commerce?",
                  a: "Absolutely. ClipDrop is widely used for product photos, enabling clean, high-quality visuals with background removal and lighting correction.",
                },
                {
                  q: "Can I process images in bulk?",
                  a: "Batch processing is limited but available for certain tools under the Pro subscription.",
                },
                {
                  q: "What file types does ClipDrop support?",
                  a: "ClipDrop supports popular image formats like JPG, PNG, and WebP.",
                },
                {
                  q: "Does ClipDrop compress image quality?",
                  a: "ClipDrop preserves image quality and allows high-resolution exports, especially with the upscaler tool.",
                },
                {
                  q: "Can I edit images directly in the browser?",
                  a: "Yes, ClipDrop provides a full-featured web platform for instant image uploads and editing.",
                },
                {
                  q: "Does ClipDrop offer cloud storage?",
                  a: "ClipDrop allows temporary cloud access for image processing, but long-term storage is limited.",
                },
                {
                  q: "Can ClipDrop replace image backgrounds?",
                  a: "Yes, once a background is removed, you can replace it with a new color, image, or scene.",
                },
                {
                  q: "Is ClipDrop useful for social media creators?",
                  a: "Yes, content creators use ClipDrop to produce clean, professional images for platforms like Instagram, YouTube, and TikTok.",
                },
                {
                  q: "Can I undo or redo changes in ClipDrop?",
                  a: "You can preview and adjust your edits, though full undo/redo functionality may vary by tool.",
                },
                {
                  q: "Are there watermarks on free ClipDrop exports?",
                  a: "Yes, the free version may apply a watermark. Pro users can export images without watermarks.",
                },
                {
                  q: "Is ClipDrop available on desktop?",
                  a: "Yes, ClipDrop is accessible via web browser and offers desktop applications for Windows and macOS.",
                },
                {
                  q: "Does ClipDrop have design tools?",
                  a: "ClipDrop focuses on AI image editing, not full graphic design, but exported files can be used in design tools like Canva or Photoshop.",
                },
                {
                  q: "Can I capture objects in real-time with ClipDrop?",
                  a: "Yes, the mobile app allows you to capture real-world objects and instantly remove backgrounds or enhance the photo.",
                },
                {
                  q: "What industries use ClipDrop?",
                  a: "ClipDrop is widely used in e-commerce, marketing, photography, and content creation industries.",
                },
                {
                  q: "Does ClipDrop support multiple languages?",
                  a: "Yes, ClipDrop supports international users with a multilingual interface.",
                },
                {
                  q: "What payment methods does ClipDrop accept?",
                  a: "ClipDrop accepts major credit/debit cards and offers monthly or annual subscription plans.",
                },
                {
                  q: "How often is ClipDrop updated?",
                  a: "ClipDrop is frequently updated with new features, performance improvements, and AI enhancements.",
                },
                {
                  q: "Does ClipDrop provide customer support?",
                  a: "Yes, ClipDrop offers support through email, help documentation, and live chat on its official website.",
                },
              ]

                .map((item, i) => ({ ...item, id: `faq${i}` }))
                .filter((item, i) => showAllFaqs || i < 4)
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
                    Why Use ClipDrop AI?
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
                      ClipDrop AI provides powerful tools like background
                      removal, cleanup, relighting, and upscaling powered by
                      advanced AI.
                    </li>
                    <li className="mb-3">
                      Perfect for photographers, designers, marketers, and
                      e-commerce sellers needing quick, high-quality image
                      edits.
                    </li>
                    <li className="mb-3">
                      Enables seamless object removal, image enhancement, and
                      lighting corrections with just a few clicks.
                    </li>
                    <li className="mb-3">
                      Accessible on web, desktop, and mobile (iOS, Android),
                      ensuring productivity across all devices.
                    </li>
                    <li className="mb-3">
                      Ideal for both beginners and professionals with intuitive
                      features and high-resolution, watermark-free exports in
                      the Pro version.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore ClipDrop AI
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
                    Powerful AI tools for background removal, object cleanup,
                    relighting, and upscaling.
                  </li>
                  <li className="mb-2">
                    Clean, intuitive UI with fast processing and one-click
                    automation.
                  </li>
                  <li className="mb-2">
                    Compatible with web, desktop (Windows/macOS), mobile
                    (Android/iOS), and has a Photoshop plugin.
                  </li>
                  <li className="mb-2">
                    Great for e-commerce, photography, and content creators
                    needing quick image edits.
                  </li>
                  <li className="mb-2">
                    Produces high-resolution, watermark-free results with the
                    Pro version.
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
                    Most AI tools require a Pro subscription for full access.
                  </li>
                  <li className="mb-2">
                    Does not offer full manual editing or layering like
                    traditional photo editors.
                  </li>
                  <li className="mb-2">
                    Requires a stable internet connection for processing and
                    saving images.
                  </li>
                  <li className="mb-2">
                    Limited batch editing options compared to more advanced
                    software.
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
                    <strong>Remove.bg</strong> – A popular tool for automatic
                    background removal using AI, perfect for profile pictures
                    and product photos.
                  </li>
                  <li className="mb-2">
                    <strong>Cleanup.pictures</strong> – Free and premium AI
                    image cleanup tool focused on removing unwanted objects and
                    imperfections.
                  </li>
                  <li className="mb-2">
                    <strong>Fotor AI</strong> – Offers one-click photo
                    enhancement, background removal, and creative AI filters
                    ideal for quick edits.
                  </li>
                  <li className="mb-2">
                    <strong>Canva Pro</strong> – Combines graphic design with AI
                    editing tools like background remover, image enhancer, and
                    smart mockups.
                  </li>
                  <li className="mb-2">
                    <strong>Pixlr X</strong> – A lightweight browser-based
                    editor with AI background removal, filters, and essential
                    retouching tools.
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
          <i className="bi bi-arrow-left me-2"></i>Back  {" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
      <div className="row align-items-center justify-content-between mb-4">
  {/* Left side (Text Section) */}
  <div className="col-lg-6 col-md-12 mb-4 mb-lg-0">
    <p className="text-primary">Create stunning visuals effortlessly</p>
    <h1>ClipDrop AI</h1>
    <div className="text-warning mb-2">⭐⭐⭐⭐⭐</div>

    <p>
      ClipDrop AI is an AI-powered photo editing and image enhancement tool that offers an
      array of advanced features like automatic background removal, object detection, image
      upscaling, and portrait enhancement. It automates complex tasks to help professionals
      and casual users achieve high-quality results.
    </p>
    <p>
      Ideal for automating tedious editing tasks while producing professional results.
      Available on mobile and desktop platforms for flexible use.
    </p>

    <div className="mb-3">
      <a
        href="https://clipdrop.co/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary me-2"
      >
        Explore Tool
      </a>
    </div>
  </div>

  {/* Right side (Image Section) */}
  <div className="col-lg-6 col-md-12 text-center">
    <img
      src={magisto}
      alt="ClipDrop Preview"
      className="img-fluid"
      style={{ maxHeight: "300px", width: "100%", objectFit: "contain" }}
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
                How to Use ClipDrop AI?
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
                      Visit ClipDrop Website or Get the App
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Go to ClipDrop.co or download the ClipDrop app from your
                      device’s app store to access AI-powered photo editing
                      tools.
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
                      Upload or Capture an Image
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Choose an image from your device or use your camera to
                      instantly capture and upload for AI editing.
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
                      Edit with AI Tools and Download
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Apply AI tools like background remover, relight, cleanup,
                      or upscale. Once satisfied, download or share your
                      enhanced image.
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

export default ClipDropAI;
