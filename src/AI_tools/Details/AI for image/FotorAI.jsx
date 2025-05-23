import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import magisto from "../../../Images/MagistoAI.png";
import fotorSS1 from '../../../../public/assets/Img/AI from Image/fotorSS1.png';
import fotorSS2 from '../../../../public/assets/Img/AI from Image/fotorSS2.png';


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
const FotorAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">Boost Your Edits with Fotor AI</p>
              <h3 className="">Smart & Fast AI Photo Editing for Everyone</h3>
            </div>
            {[
              {
                icon: "🖼️",
                title: "One-Tap Photo Enhancement:",
                desc: "Fotor AI automatically enhances your photos by adjusting exposure, color, contrast, and sharpness to achieve optimal quality in seconds.",
              },
              {
                icon: "📸",
                title: "AI Portrait Retouching:",
                desc: "Smooth skin, remove blemishes, whiten teeth, and enhance facial features with powerful AI portrait tools ideal for selfies and headshots.",
              },
              {
                icon: "🧽",
                title: "AI Background Remover:",
                desc: "Remove or replace backgrounds instantly with just one click using Fotor’s AI background remover—perfect for product shots and profile photos.",
              },
              {
                icon: "🎨",
                title: "AI Art Generator:",
                desc: "Turn your images into digital artwork with Fotor’s AI art tools, including cartoon effects, painting styles, and artistic filters.",
              },
              {
                icon: "⚙️",
                title: "Multi-Platform Editing:",
                desc: "Available on web, Windows, macOS, Android, and iOS, Fotor AI offers seamless editing across all devices without needing professional skills.",
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
                src={fotorSS1}
                alt="fotor"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={fotorSS2}
                alt="fotor"
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
                  q: "What is Fotor AI?",
                  a: "Fotor AI is an AI-powered photo editing platform offering one-tap enhancements, background removal, portrait retouching, and artistic effects for beginners and professionals alike.",
                },
                {
                  q: "How does AI work in Fotor?",
                  a: "Fotor AI uses deep learning algorithms to analyze photos and apply intelligent adjustments such as lighting correction, skin smoothing, and auto-retouching.",
                },
                {
                  q: "Can Fotor AI remove backgrounds?",
                  a: "Yes, Fotor AI includes a one-click AI background remover to isolate subjects and replace or delete backgrounds.",
                },
                {
                  q: "Does Fotor support RAW image editing?",
                  a: "Yes, Fotor allows importing and editing RAW files with support for various cameras and formats.",
                },
                {
                  q: "Is Fotor beginner-friendly?",
                  a: "Yes, Fotor is designed with an intuitive interface and one-click tools to make professional editing accessible to all skill levels.",
                },
                {
                  q: "Does Fotor have a mobile app?",
                  a: "Yes, Fotor is available on Android and iOS for editing on the go with AI-powered features.",
                },
                {
                  q: "Can I create collages with Fotor?",
                  a: "Yes, Fotor offers a collage maker with customizable templates and layouts for personal and professional use.",
                },
                {
                  q: "Does Fotor offer batch editing?",
                  a: "Yes, Fotor supports batch processing for resizing, enhancing, or watermarking multiple images simultaneously.",
                },
                {
                  q: "Can I use Fotor AI offline?",
                  a: "No, Fotor is primarily a web-based and cloud-enabled app, so an internet connection is required for most features.",
                },
                {
                  q: "Is Fotor free to use?",
                  a: "Fotor offers a free version with basic features and a Pro plan for advanced AI tools, templates, and content.",
                },
                {
                  q: "Does Fotor include design tools?",
                  a: "Yes, Fotor provides templates and editing tools for creating social media posts, posters, business cards, and more.",
                },
                {
                  q: "What kind of AI filters are available?",
                  a: "Fotor offers AI filters like cartoon effects, oil painting, vintage tones, and more under its AI Effects section.",
                },
                {
                  q: "Can I retouch portraits in Fotor?",
                  a: "Yes, you can smooth skin, whiten teeth, remove blemishes, and apply makeup using AI-powered retouching.",
                },
                {
                  q: "Can I add text and stickers to images?",
                  a: "Yes, Fotor lets users add and style text, icons, and stickers with drag-and-drop ease.",
                },
                {
                  q: "Is Fotor good for professional use?",
                  a: "Yes, many businesses and marketers use Fotor for quick, quality content creation thanks to its efficient AI workflow.",
                },
                {
                  q: "Can I save projects in Fotor?",
                  a: "Yes, Fotor Pro users can save projects and re-edit them later from their cloud workspace.",
                },
                {
                  q: "Does Fotor support transparent PNG export?",
                  a: "Yes, you can export images with transparent backgrounds in PNG format using the Pro plan.",
                },
                {
                  q: "Does Fotor compress image quality?",
                  a: "Fotor allows exporting in high resolution and full quality, with adjustable settings depending on the export format.",
                },
                {
                  q: "Can I use Fotor on Windows or Mac?",
                  a: "Yes, Fotor offers native desktop apps for both Windows and macOS platforms.",
                },
                {
                  q: "Does Fotor offer cloud storage?",
                  a: "Yes, Fotor Pro includes cloud storage for managing and accessing your designs across devices.",
                },
                {
                  q: "Is Fotor good for creating social media content?",
                  a: "Absolutely. Fotor provides pre-sized templates and AI suggestions for Instagram, Facebook, YouTube, and more.",
                },
                {
                  q: "Does Fotor support multi-language editing?",
                  a: "Yes, Fotor supports multiple languages for global users and allows editing in various character sets.",
                },
                {
                  q: "Can Fotor turn photos into cartoons or sketches?",
                  a: "Yes, Fotor AI includes artistic effects like cartoonizer, sketch, and painting styles for creative edits.",
                },
                {
                  q: "How secure is my data on Fotor?",
                  a: "Fotor uses encrypted connections and secure cloud storage to protect user data and uploaded content.",
                },
                {
                  q: "Can I undo or redo edits in Fotor?",
                  a: "Yes, you can undo, redo, or reset edits at any point during your session.",
                },
                {
                  q: "Is there a watermark on edited images?",
                  a: "The free version includes a watermark on some features. The Pro version allows watermark-free exports.",
                },
                {
                  q: "What payment options does Fotor support?",
                  a: "Fotor accepts major credit/debit cards and PayPal for subscription plans.",
                },
                {
                  q: "Can I collaborate with a team in Fotor?",
                  a: "While collaboration features are limited, Fotor enables sharing editable links for team feedback.",
                },
                {
                  q: "How often is Fotor updated?",
                  a: "Fotor is actively updated with new features, templates, and AI improvements regularly.",
                },
                {
                  q: "Does Fotor offer customer support?",
                  a: "Yes, Fotor provides email support, a help center, and community forums for user assistance.",
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
                    Why Use Fotor AI?
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
                      Fotor AI offers intelligent photo enhancement tools
                      including one-tap editing, background removal, and
                      portrait retouching.
                    </li>
                    <li className="mb-3">
                      The platform includes design templates for social media,
                      marketing materials, and photo collages—ideal for creators
                      and businesses.
                    </li>
                    <li className="mb-3">
                      Users can apply artistic AI effects like cartoon filters,
                      painting styles, and vintage looks effortlessly.
                    </li>
                    <li className="mb-3">
                      Available on web, desktop, and mobile platforms (Windows,
                      macOS, Android, iOS), making editing accessible anywhere.
                    </li>
                    <li className="mb-3">
                      Designed for both beginners and professionals with
                      user-friendly tools and advanced export options like
                      transparent PNG.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore Fotor AI
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
                    One-click AI enhancement improves exposure, color, and
                    clarity automatically.
                  </li>
                  <li className="mb-2">
                    Offers background remover, portrait retouching, and creative
                    AI effects like cartoon and painting filters.
                  </li>
                  <li className="mb-2">
                    Multi-platform support — available on web, desktop
                    (Windows/macOS), and mobile (Android/iOS).
                  </li>
                  <li className="mb-2">
                    Comes with a design suite for social media posts, flyers,
                    posters, and ads.
                  </li>
                  <li className="mb-2">
                    Batch processing, templates, and collage maker streamline
                    professional workflows.
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
                    Some advanced features are locked behind the Pro
                    subscription.
                  </li>
                  <li className="mb-2">
                    Lacks the full flexibility of layer-based editing like in
                    Photoshop.
                  </li>
                  <li className="mb-2">
                    Internet connection required for some AI-powered tools.
                  </li>
                  <li className="mb-2">
                    Limited control over individual enhancement parameters
                    compared to manual editors.
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
                    <strong>Canva Pro</strong> – A versatile design platform
                    with AI-powered image editing, background removal, and
                    templates for marketing and social media content.
                  </li>
                  <li className="mb-2">
                    <strong>Pixlr X</strong> – A browser-based AI photo editor
                    offering one-click enhancements, filters, retouching tools,
                    and background remover.
                  </li>
                  <li className="mb-2">
                    <strong>Photopea</strong> – Free online editor supporting
                    PSD files, layers, and advanced manual photo editing
                    features similar to Photoshop.
                  </li>
                  <li className="mb-2">
                    <strong>BeFunky</strong> – User-friendly tool with AI
                    editing, batch processing, collage maker, and graphic design
                    templates.
                  </li>
                  <li className="mb-2">
                    <strong>Polarr</strong> – An AI-powered photo editing app
                    that offers advanced filters, facial recognition for
                    retouching, and custom overlays.
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
  <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 pe-lg-4">
    <p className="text-primary">Create stunning visuals effortlessly</p>
    <h1>Fotor AI</h1>
    <div className="text-warning mb-2">⭐⭐⭐⭐⭐</div>

    <p>
      Fotor AI is a powerful AI-powered photo editing tool that leverages advanced
      algorithms to provide a wide range of editing features for both beginners and
      professionals. It can transform your images through various functions, including
      image upscaling, photo restoration, portrait enhancement, object removal, and
      artistic effects.
    </p>
    <p>
      Fotor AI uses artificial intelligence to simplify and enhance the photo editing
      process, making it accessible for users of all skill levels. Whether you're
      looking to improve the quality of a portrait, remove unwanted backgrounds, or
      convert your photos into stunning artwork, Fotor AI offers all the tools you
      need to create high-quality images.
    </p>
    <p>
      Its user-friendly interface, coupled with AI-driven features, makes it ideal
      for use in both professional and personal photography projects.
    </p>

    <div className="mb-3">
      <a
        href="https://www.fotor.com/ai-image-generator/"
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
      alt="Fotor AI Preview"
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
                How to Use Fotor AI?
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
                      Visit Fotor or Download the App
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Go to Fotor.com on your browser or download the Fotor app
                      from your device’s app store to start editing.
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
                      Upload Your Image
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Upload your photo from your computer or phone gallery to
                      begin editing with AI tools like background remover or
                      photo enhancer.
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
                      Apply AI Effects and Export
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Use Fotor’s AI tools to edit, enhance, or design. Once
                      done, preview your image and download or share your final
                      design instantly.
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

export default FotorAI;
