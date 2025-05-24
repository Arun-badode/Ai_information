import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import magisto from "../../../Images/MagistoAI.png";
import luminarSS1 from '../../../../public/assets/Img/AI from Image/luminarSS1.png';
import luminarSS2 from '../../../../public/assets/Img/AI from Image/luminarSS2.png';
import luminar from '../../../../public/assets/Img/AI from Image/10.png';


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
const LuminarAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                Accelerate Creativity with Luminar AI
              </p>
              <h3 className="">
                AI-Powered Photo Editing for Stunning Visual Results
              </h3>
            </div>
            {[
              {
                icon: "✨",
                title: "AI Image Enhancement:",
                desc: "Luminar AI uses artificial intelligence to automatically enhance photos by adjusting color, contrast, and detail intelligently.",
              },
              {
                icon: "📷",
                title: "Portrait AI Tools:",
                desc: "Enhance faces, remove blemishes, smooth skin, and brighten eyes using intuitive AI-powered portrait retouching features.",
              },
              {
                icon: "🌄",
                title: "Sky Replacement & Augmented Reality:",
                desc: "Easily replace dull skies and add realistic sun rays or atmospheric effects with a single click using Sky AI and Atmosphere AI.",
              },
              {
                icon: "⚙️",
                title: "Template-Based Editing:",
                desc: "Luminar AI offers smart templates that analyze your photo and recommend styles that match content and composition.",
              },
              {
                icon: "🛡️",
                title: "Non-Destructive & Fast Workflow:",
                desc: "Work faster with real-time previews, non-destructive editing, and batch processing while preserving original files.",
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
                src={luminarSS1}
                alt="luminar"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={luminarSS2}
                alt="luminar"
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
                  q: "What is Luminar AI?",
                  a: "Luminar AI is an AI-powered photo editing software developed by Skylum that helps photographers and creatives enhance images quickly using intelligent automation and creative tools.",
                },
                {
                  q: "How does AI work in Luminar AI?",
                  a: "Luminar AI uses artificial intelligence to analyze photos and apply enhancements such as sky replacement, portrait retouching, structure boost, and scene relighting automatically.",
                },
                {
                  q: "Can Luminar AI handle RAW files?",
                  a: "Yes, Luminar AI supports RAW image editing and provides powerful tools for noise reduction, color grading, and detail enhancement.",
                },
                {
                  q: "Is Luminar AI beginner-friendly?",
                  a: "Yes, Luminar AI is designed for ease of use, offering templates and AI-driven suggestions that make high-quality editing accessible even for non-professionals.",
                },
                {
                  q: "What platforms support Luminar AI?",
                  a: "Luminar AI is available for both Windows and macOS platforms as a standalone application or as a plugin for Adobe Photoshop and Lightroom.",
                },
                {
                  q: "Can I apply custom edits in Luminar AI?",
                  a: "Yes, while Luminar AI provides automatic enhancements, it also allows manual adjustments for full creative control over every aspect of the image.",
                },
                {
                  q: "Does Luminar AI support batch editing?",
                  a: "Yes, Luminar AI enables batch processing so users can apply the same edits or templates to multiple photos at once.",
                },
                {
                  q: "Can Luminar AI be used with Lightroom?",
                  a: "Yes, Luminar AI can be used as a plugin with Adobe Lightroom Classic and Photoshop, allowing seamless integration into existing workflows.",
                },
                {
                  q: "Is Luminar AI cloud-based?",
                  a: "No, Luminar AI is desktop software and does not require an internet connection for editing. All features are installed locally.",
                },
                {
                  q: "Does Luminar AI require photo editing experience?",
                  a: "No, it is built for both beginners and experienced editors with AI templates and manual fine-tuning options available.",
                },
                {
                  q: "Can Luminar AI edit portraits?",
                  a: "Yes, Luminar AI has dedicated portrait enhancement tools such as Skin AI, Face AI, and Iris AI for retouching faces effortlessly.",
                },
                {
                  q: "Is there a mobile version of Luminar AI?",
                  a: "No, as of now Luminar AI is only available for desktop platforms (Windows and macOS).",
                },
                {
                  q: "Can Luminar AI remove objects or backgrounds?",
                  a: "Yes, Luminar AI includes tools like Composition AI and masking to remove unwanted elements or isolate subjects.",
                },
                {
                  q: "What kind of visual styles can I apply?",
                  a: "Luminar AI offers creative filters, cinematic color grading, and mood enhancements through LUTs and AI-driven templates.",
                },
                {
                  q: "Can Luminar AI be used for commercial photography?",
                  a: "Yes, Luminar AI is widely used by professional photographers and businesses for fast turnaround and visually impressive results.",
                },
                {
                  q: "Is Luminar AI fast?",
                  a: "Yes, it is optimized for speed with real-time previews and AI tools that reduce manual effort significantly.",
                },
                {
                  q: "Does Luminar AI support layers?",
                  a: "Unlike Photoshop, Luminar AI does not use a traditional layer system, but it supports local adjustments and masking for selective edits.",
                },
                {
                  q: "Is Luminar AI safe and secure?",
                  a: "Yes, Luminar AI operates locally and does not transmit images or data to the cloud, ensuring privacy and data security.",
                },
                {
                  q: "What are templates in Luminar AI?",
                  a: "Templates are intelligent presets that automatically apply optimized edits based on photo content, making editing quicker and easier.",
                },
                {
                  q: "Does Luminar AI include AI sky replacement?",
                  a: "Yes, Sky AI is one of Luminar AI’s signature features, allowing realistic and automatic sky replacement with lighting and reflection adjustments.",
                },
                {
                  q: "Can I use my own skies in Sky Replacement?",
                  a: "Yes, you can upload custom sky images for use in the Sky AI tool to match your style and needs.",
                },
                {
                  q: "Does Luminar AI support creative effects?",
                  a: "Yes, it includes Atmosphere AI, Bokeh AI, and various mood-enhancing filters to add depth, drama, or artistic style.",
                },
                {
                  q: "Can Luminar AI help with color grading?",
                  a: "Yes, Luminar AI includes tools like Color Harmony, HSL, and Split Toning for advanced color control and grading.",
                },
                {
                  q: "What industries benefit from Luminar AI?",
                  a: "Photographers, real estate agencies, e-commerce brands, travel influencers, and digital marketers often use Luminar AI to enhance imagery.",
                },
                {
                  q: "Does Luminar AI get regular updates?",
                  a: "Yes, Skylum provides updates to improve features, performance, and camera/lens support based on user feedback.",
                },
                {
                  q: "Can Luminar AI integrate with file managers?",
                  a: "While it doesn't act as a file browser, it allows folder-based import and custom image organization within the app.",
                },
                {
                  q: "Does Luminar AI support RAW file export?",
                  a: "Yes, edited images can be exported in JPEG, PNG, TIFF, and other formats, though RAW export depends on source file handling.",
                },
                {
                  q: "Does Luminar AI offer a free trial?",
                  a: "Yes, Skylum offers a limited-time free trial of Luminar AI so users can evaluate its features before purchasing.",
                },
                {
                  q: "How is Luminar AI different from Photoshop?",
                  a: "Unlike Photoshop, Luminar AI focuses on intelligent automation, requires less manual input, and is optimized for rapid, professional photo enhancement.",
                },
                {
                  q: "What support does Luminar AI offer?",
                  a: "Skylum provides tutorials, a knowledge base, customer support, and a community forum to help users get the most from Luminar AI.",
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
                    Why Use Luminar AI?
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
                      Luminar AI uses artificial intelligence to automatically
                      enhance photos with smart adjustments to lighting, color,
                      and details.
                    </li>
                    <li className="mb-3">
                      Offers powerful tools like Sky AI, Portrait AI, and
                      Structure AI for professional-level results without
                      complex editing skills.
                    </li>
                    <li className="mb-3">
                      Templates and one-click adjustments allow photographers to
                      save time while maintaining creative control.
                    </li>
                    <li className="mb-3">
                      Integrates with Adobe Photoshop and Lightroom as a plugin,
                      or functions independently as a full-featured editing
                      suite.
                    </li>
                    <li className="mb-3">
                      Designed for both beginners and professionals with a
                      user-friendly interface and non-destructive editing
                      workflow.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore Luminar AI
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
                    AI-powered tools like Sky Replacement, Portrait Retouching,
                    and Structure Boost enhance images effortlessly.
                  </li>
                  <li className="mb-2">
                    User-friendly interface with one-click templates for quick
                    professional edits, even for beginners.
                  </li>
                  <li className="mb-2">
                    Non-destructive editing workflow preserves original photos
                    while allowing creative freedom.
                  </li>
                  <li className="mb-2">
                    Compatible as a plugin for Photoshop and Lightroom, or
                    standalone software.
                  </li>
                  <li className="mb-2">
                    Frequent updates and community support from Skylum for
                    improvements and new features.
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
                    Lacks layer-based editing and advanced retouching tools
                    found in Photoshop.
                  </li>
                  <li className="mb-2">
                    Performance can be slow on older or low-spec machines,
                    especially when rendering AI effects.
                  </li>
                  <li className="mb-2">
                    Not ideal for professional compositing or complex design
                    workflows.
                  </li>
                  <li className="mb-2">
                    Limited mobile or browser-based editing capabilities;
                    desktop-only.
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
                    Adobe Photoshop – Industry-standard photo editing software
                    with advanced features and plugin support, including
                    AI-based tools like Neural Filters.
                  </li>
                  <li className="mb-2">
                    Adobe Lightroom – Popular for batch editing and photo
                    organization, with AI-powered enhancements and mobile
                    support.
                  </li>
                  <li className="mb-2">
                    ON1 Photo RAW – AI-enhanced editor offering sky replacement,
                    portrait retouching, and masking tools similar to Luminar
                    AI.
                  </li>
                  <li className="mb-2">
                    Topaz Photo AI – Specializes in AI upscaling, denoising, and
                    sharpening, making it ideal for high-quality image
                    restoration.
                  </li>
                  <li className="mb-2">
                    Fotor – An online photo editor with AI retouching, one-tap
                    enhancements, and easy-to-use design tools for casual users.
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
  {/* Image Section (First on mobile, second on desktop) */}
  <div className="col-lg-6 col-md-12 text-center order-1 order-lg-2 mb-4 mb-lg-0">
    <img
      src={luminar}
      alt="Luminar AI Preview"
      className="img-fluid"
      style={{ maxHeight: "300px", width: "100%", objectFit: "contain" }}
    />
  </div>

  {/* Text Section (Second on mobile, first on desktop) */}
  <div className="col-lg-6 col-md-12 order-2 order-lg-1 pe-lg-4">
    <p className="text-primary">Create stunning visuals effortlessly</p>
    <h1>Luminar AI</h1>
    <div className="text-warning mb-2">⭐⭐⭐⭐⭐</div>

    <p>
      Luminar AI is an advanced AI-powered photo editing software developed by Skylum,
      designed to simplify the editing process while delivering professional-grade results.
      It uses artificial intelligence to automate tasks such as sky replacement, portrait
      enhancement, lighting correction, and more.
    </p>

    <p>
      With tools like Sky AI, Portrait AI, Structure AI, and customizable templates,
      Luminar AI empowers photographers and creators to enhance images quickly and
      creatively—without needing deep technical knowledge.
    </p>

    <div className="mb-3">
      <a
        href="https://skylum.com/luminar-ai"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary me-2"
      >
        Explore Tool
      </a>
    </div>
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
                How to Use Luminar AI?
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
                      Import Your Photos
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Open Luminar AI on your desktop and import images from
                      your computer. The software supports RAW, JPEG, and other
                      common formats.
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
                      Apply AI Enhancements
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Use built-in AI tools like Sky AI, Face AI, and Template
                      suggestions to enhance your photos instantly with just a
                      few clicks.
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
                      Once your edits are complete, export your images in high
                      resolution and share them on social media, websites, or
                      with clients.
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

export default LuminarAI;
