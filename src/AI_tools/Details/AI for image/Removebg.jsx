import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import magisto from "../../../Images/MagistoAI.png";

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
const RemoveBg = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">Instant Background Removal</p>
              <h3 className="">Smart AI-Powered Cutouts with Remove.bg</h3>
            </div>
            {[
              {
                icon: "✂️",
                title: "One-Click Background Removal:",
                desc: "Remove backgrounds from images instantly using powerful AI with no manual editing required.",
              },
              {
                icon: "🎯",
                title: "Precision Subject Detection:",
                desc: "Automatically detects people, animals, products, and other subjects with pixel-perfect accuracy.",
              },
              {
                icon: "📦",
                title: "Bulk Background Remover:",
                desc: "Upload and process multiple images at once to save time and streamline workflow.",
              },
              {
                icon: "🖥️",
                title: "API & App Integration:",
                desc: "Easily integrate Remove.bg with apps like Photoshop, Shopify, or use its API for automation.",
              },
              {
                icon: "🌐",
                title: "Web & Mobile Access:",
                desc: "Use Remove.bg via web browser or mobile apps for editing anywhere, anytime.",
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
                src="https://images.wondershare.com/filmora/article-images/photos-into-video-app-8.jpg"
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src="https://www.tipard.com/images/editor/free-online-video-editor/magisto.jpg"
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
                  q: "What is Remove.bg?",
                  a: "Remove.bg is an AI-powered tool that automatically removes backgrounds from images with one click, saving hours of manual work.",
                },
                {
                  q: "How does Remove.bg work?",
                  a: "It uses deep learning to identify the subject of an image and cleanly separate it from the background, generating a transparent PNG instantly.",
                },
                {
                  q: "Is Remove.bg free to use?",
                  a: "Yes, Remove.bg offers free previews with low resolution. To download high-quality images, credits or a subscription is required.",
                },
                {
                  q: "Can Remove.bg process multiple images at once?",
                  a: "Yes, bulk background removal is available through the desktop app or API for Pro users.",
                },
                {
                  q: "Does Remove.bg support transparent background exports?",
                  a: "Absolutely. Remove.bg exports images with transparent PNGs ideal for graphic design and product listings.",
                },
                {
                  q: "Can I integrate Remove.bg into my workflow?",
                  a: "Yes, Remove.bg offers plugins for Photoshop, Figma, and API access for automating tasks in custom applications.",
                },
                {
                  q: "Is there a mobile app for Remove.bg?",
                  a: "There isn’t a dedicated mobile app, but the website is mobile-friendly and works well in browsers on smartphones and tablets.",
                },
                {
                  q: "What file formats are supported by Remove.bg?",
                  a: "You can upload JPG and PNG files and download the results in PNG or JPG formats.",
                },
                {
                  q: "Can Remove.bg replace the background with another image?",
                  a: "Yes, after removing the background, you can choose to insert a new background or use a solid color before downloading.",
                },
                {
                  q: "Does Remove.bg work offline?",
                  a: "The standard service is cloud-based and requires internet, but the desktop app offers some offline processing with pre-downloaded models.",
                },
                {
                  q: "What industries commonly use Remove.bg?",
                  a: "It's widely used in e-commerce, real estate, photography, graphic design, and media production for quick image preparation.",
                },
                {
                  q: "Is Remove.bg suitable for e-commerce listings?",
                  a: "Yes, it's perfect for cleaning up product images for marketplaces like Amazon, Etsy, and Shopify.",
                },
                {
                  q: "Does Remove.bg add a watermark to images?",
                  a: "Free versions may add a watermark or offer low-resolution downloads. Paid versions provide high-res, watermark-free output.",
                },
                {
                  q: "Can Remove.bg handle images with complex backgrounds?",
                  a: "Yes, the AI is trained to handle challenging backgrounds and isolate subjects with high precision.",
                },
                {
                  q: "Can I use Remove.bg on my website?",
                  a: "Yes, developers can integrate Remove.bg via its REST API into any website or app for automated background removal.",
                },
                {
                  q: "Does Remove.bg support drag-and-drop?",
                  a: "Yes, you can easily drag and drop files into the web interface for fast processing.",
                },
                {
                  q: "Is Remove.bg accurate for hair and fine edges?",
                  a: "Yes, it’s highly accurate and excels at detecting fine details like hair, fur, and soft edges.",
                },
                {
                  q: "Can Remove.bg help with ID photos?",
                  a: "Yes, it's ideal for generating passport-style photos or corporate ID cards by removing or replacing the background.",
                },
                {
                  q: "Does Remove.bg store my images?",
                  a: "Images are processed temporarily and deleted after a short time. However, cloud history is available for logged-in users.",
                },
                {
                  q: "Can I use Remove.bg commercially?",
                  a: "Yes, commercial use is permitted under the Pro plan. Be sure to follow licensing terms.",
                },
                {
                  q: "Is support available for Remove.bg users?",
                  a: "Yes, the company offers help through a support center, contact form, and email for technical or billing queries.",
                },
                {
                  q: "Does Remove.bg offer student or nonprofit discounts?",
                  a: "Yes, Remove.bg provides discounted rates for educational institutions and nonprofit organizations upon request.",
                },
                {
                  q: "What is the cost of Remove.bg Pro?",
                  a: "Pricing starts with pay-as-you-go credits or monthly subscriptions depending on your usage needs.",
                },
                {
                  q: "Can I undo changes made in Remove.bg?",
                  a: "No manual history is available, but you can always re-upload and reprocess the image.",
                },
                {
                  q: "How often is Remove.bg updated?",
                  a: "The AI is continuously improved to handle a wide range of images and edge cases more effectively.",
                },
                {
                  q: "Does Remove.bg compress image quality?",
                  a: "No, it maintains high quality in paid plans and supports full-resolution image processing.",
                },
                {
                  q: "What browsers are supported?",
                  a: "Remove.bg works on all modern browsers like Chrome, Firefox, Edge, and Safari.",
                },
                {
                  q: "Can I test Remove.bg before subscribing?",
                  a: "Yes, you can try it for free with limited image resolution to see how it performs before committing to a plan.",
                },
                {
                  q: "How do I contact Remove.bg?",
                  a: "You can reach out through their contact page at remove.bg/contact or use their in-dashboard support options.",
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
                    Why Use Remove.bg?
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
                      Remove.bg uses advanced AI to instantly remove backgrounds
                      from images with just one click.
                    </li>
                    <li className="mb-3">
                      Ideal for e-commerce, photographers, content creators, and
                      graphic designers who need clean cutouts fast.
                    </li>
                    <li className="mb-3">
                      Offers bulk image processing, transparent PNG exports, and
                      HD resolution for professional results.
                    </li>
                    <li className="mb-3">
                      Seamlessly integrates with tools like Photoshop, Shopify,
                      and via API for automated workflows.
                    </li>
                    <li className="mb-3">
                      Accessible via web, desktop, and mobile with an intuitive
                      interface—no design experience needed.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore Remove.bg
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
                    Instantly removes image backgrounds with AI-powered
                    precision.
                  </li>
                  <li className="mb-2">
                    Supports bulk background removal via desktop app and API.
                  </li>
                  <li className="mb-2">
                    Offers transparent PNG, JPG downloads, and background
                    replacement options.
                  </li>
                  <li className="mb-2">
                    Seamlessly integrates with Photoshop, Figma, and e-commerce
                    platforms.
                  </li>
                  <li className="mb-2">
                    Simple drag-and-drop interface accessible from web, desktop,
                    and mobile browsers.
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
                    Free version has limited resolution and may include
                    compression.
                  </li>
                  <li className="mb-2">
                    High-quality downloads require credits or a subscription
                    plan.
                  </li>
                  <li className="mb-2">
                    Limited to background removal—no full-feature photo editing
                    tools.
                  </li>
                  <li className="mb-2">
                    Requires internet connection for processing unless using the
                    Pro desktop app.
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
                    <strong>Slazzer</strong> – An AI-based background remover
                    offering API access, desktop tools, and plugins for quick
                    and scalable image cutouts.
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
              style={{ flex: 1, paddingRight: "30px" }}
              className="col-6 col-md-12 "
            >
              <p className="text-primary">
                Create stunning visuals effortlessly
              </p>
              <h1>Remove.bg AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>

              <p>
                Remove.bg is an AI-powered tool designed to remove backgrounds
                from photos quickly and accurately. Whether you’re a
                photographer, e-commerce seller, social media influencer, or
                business professional, Remove.bg simplifies the process of
                background removal with a powerful AI engine that detects and
                isolates subjects in photos. It’s perfect for creating
                transparent PNGs, product images, portraits, and even video
                background removal. Remove.bg works seamlessly on both web
                platforms and mobile devices, making it a go-to solution for
                background removal for images and videos.
              </p>

              <div className="mb-3">
                <span className="badge bg-primary me-2"> Image</span>
                <span className="badge bg-success me-2">Creative</span>
                <span className="badge bg-warning text-dark">Paid</span>
              </div>
            </div>

            {/* Right side (Image Section) */}
            <div
              style={{
                flex: 1,
                textAlign: "center",
                Width: "100%",
                height: "250px",
              }}
              className="col-6 col-md-12 mb-5  "
            >
              <img
                src={magisto}
                style={{ MaxWidth: "100%", height: "300px" }}
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
                How to Use Remove.bg?
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
                      Go to Remove.bg
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Visit <strong>remove.bg</strong> in your browser or use
                      the desktop/mobile app to get started with AI-powered
                      background removal.
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
                      Upload an Image
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Select an image from your computer, drag and drop it, or
                      paste a URL. Remove.bg will automatically detect and
                      remove the background.
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
                      Download or Replace Background
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Download the transparent PNG or choose a new background to
                      insert. Then save your image for use in any project.
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

          <div className="bg-primary text-center text-light rounded-4 p-5 mt-5">
            <h4 className="mb-3">Ready to get started with Remove.bg AI ?</h4>
            <p className="mb-4">
              Join thousands of professionals already boosting their
              productivity!
            </p>
            <div>
              <button className="btn btn-light me-3">Try Now for Free</button>
              <button className="btn btn-outline-light">Schedule a Demo</button>
            </div>
            <small className="d-block mt-2">
              No credit card required. free trial available.
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default RemoveBg;
