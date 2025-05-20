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
const ReminiAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                Accelerate Creativity with Remini AI
              </p>
              <h3 className="">AI-Powered Photo Restoration & Enhancement</h3>
            </div>
            {[
              {
                icon: "🧠",
                title: "AI Photo Restoration:",
                desc: "Remini AI restores old, blurry, or damaged photos by enhancing facial details, sharpening features, and improving image quality with advanced AI algorithms.",
              },
              {
                icon: "📈",
                title: "Real-Time Enhancement:",
                desc: "Get instant results with real-time photo enhancement that improves clarity, resolution, and sharpness using deep learning models.",
              },
              {
                icon: "👶",
                title: "Facial Detail Recovery:",
                desc: "Rebuild facial features, smooth skin, and enhance eye details with intelligent face-focused enhancement—ideal for portraits and vintage shots.",
              },
              {
                icon: "📱",
                title: "Mobile App Convenience:",
                desc: "Available as a mobile app on iOS and Android, Remini makes high-quality AI photo editing accessible anytime, anywhere.",
              },
              {
                icon: "⚡",
                title: "Batch & Video Enhancement:",
                desc: "In addition to still images, Remini supports batch processing and video enhancement, making it useful for restoring video frames and slideshows.",
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
                  q: "What is Remini AI?",
                  a: "Remini AI is a mobile-based photo enhancement app that uses advanced artificial intelligence to restore and sharpen old, blurry, or low-quality images into high-definition results.",
                },
                {
                  q: "How does AI work in Remini?",
                  a: "Remini AI uses deep learning models to analyze and reconstruct facial features, improve sharpness, reduce noise, and enhance overall image clarity automatically.",
                },
                {
                  q: "Can Remini AI enhance low-resolution images?",
                  a: "Yes, Remini is especially effective at transforming low-resolution and pixelated images into sharper, more detailed versions.",
                },
                {
                  q: "Is Remini AI beginner-friendly?",
                  a: "Yes, Remini offers a simple one-tap enhancement interface, making it ideal for users with no photo editing experience.",
                },
                {
                  q: "What platforms support Remini AI?",
                  a: "Remini is available as a mobile app for Android and iOS devices.",
                },
                {
                  q: "Can I edit custom details manually in Remini?",
                  a: "No, Remini focuses on automated AI-driven enhancement and does not provide manual editing tools or layers.",
                },
                {
                  q: "Does Remini support batch processing?",
                  a: "Batch processing is limited; enhancements are typically applied one image at a time, although video frame enhancement is supported.",
                },
                {
                  q: "Can I enhance videos with Remini AI?",
                  a: "Yes, Remini includes a feature for enhancing videos, making faces and frames clearer with AI upscaling.",
                },
                {
                  q: "Is Remini cloud-based?",
                  a: "Yes, Remini uses cloud-based AI processing, which requires an internet connection for applying enhancements.",
                },
                {
                  q: "Does Remini AI require photo editing experience?",
                  a: "No, Remini is designed for instant, automatic enhancement and requires no editing knowledge.",
                },
                {
                  q: "Can Remini AI improve portraits?",
                  a: "Yes, Remini excels at enhancing facial features in portraits, including skin texture, eyes, and overall sharpness.",
                },
                {
                  q: "Is there a desktop version of Remini?",
                  a: "No, Remini is currently available only as a mobile application.",
                },
                {
                  q: "Can Remini remove backgrounds?",
                  a: "No, Remini does not support object or background removal. Its focus is enhancement, not editing or compositing.",
                },
                {
                  q: "What kind of photos benefit from Remini?",
                  a: "Old photos, blurry images, low-resolution selfies, and pixelated portraits benefit the most from Remini’s AI restoration.",
                },
                {
                  q: "Can Remini be used for professional restoration?",
                  a: "Yes, many users leverage Remini for quick professional-grade photo restorations, especially in the photography and media industries.",
                },
                {
                  q: "Is Remini fast?",
                  a: "Yes, enhancements are processed quickly in the cloud, with most transformations taking under a minute.",
                },
                {
                  q: "Does Remini support layer-based editing?",
                  a: "No, Remini is not a full photo editor and does not support layers or complex compositing features.",
                },
                {
                  q: "Is Remini AI secure?",
                  a: "Yes, Remini processes photos through secure cloud servers and does not permanently store user data.",
                },
                {
                  q: "What is the AI Enhance feature?",
                  a: "AI Enhance is Remini’s main tool that automatically improves clarity, texture, and resolution in a single tap.",
                },
                {
                  q: "Does Remini include old photo restoration?",
                  a: "Yes, one of Remini’s core strengths is restoring vintage and damaged photos to look new and crisp.",
                },
                {
                  q: "Can I save enhanced images in HD?",
                  a: "Yes, Remini allows saving output in high-resolution formats, depending on the subscription plan.",
                },
                {
                  q: "Does Remini support creative effects?",
                  a: "No, Remini focuses purely on realism and enhancement, not creative filters or stylistic overlays.",
                },
                {
                  q: "Can Remini be used for ID photo cleanup?",
                  a: "Yes, many users use Remini to clarify passport, ID, or document photos by enhancing facial clarity.",
                },
                {
                  q: "What industries benefit from Remini AI?",
                  a: "Industries like photography, journalism, genealogy, and digital archiving benefit from Remini’s restoration capabilities.",
                },
                {
                  q: "Does Remini get regular updates?",
                  a: "Yes, Remini is actively maintained and regularly updated to improve performance and add new enhancement models.",
                },
                {
                  q: "Can I organize or group images in Remini?",
                  a: "Remini does not include organizational tools; it focuses solely on image input, enhancement, and output.",
                },
                {
                  q: "Does Remini support RAW images?",
                  a: "Remini primarily supports standard formats like JPEG and PNG; RAW support is not officially documented.",
                },
                {
                  q: "Is there a free trial of Remini AI?",
                  a: "Yes, Remini offers a limited-use free version with daily enhancement credits; a premium subscription unlocks full access.",
                },
                {
                  q: "How is Remini different from Photoshop?",
                  a: "Unlike Photoshop, which requires manual editing skills, Remini automates enhancement using AI with no user input needed.",
                },
                {
                  q: "What support does Remini offer?",
                  a: "Remini provides in-app FAQs, customer support through the mobile app stores, and help through their official website.",
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
                    Why Use Remini AI?
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
                      Remini AI uses advanced artificial intelligence to restore
                      old, blurry, or low-quality photos into sharp,
                      high-definition images.
                    </li>
                    <li className="mb-3">
                      Ideal for enhancing portraits by refining facial details,
                      reducing noise, and improving image clarity in seconds.
                    </li>
                    <li className="mb-3">
                      Offers a simple, one-tap enhancement process—no editing
                      experience required.
                    </li>
                    <li className="mb-3">
                      Available as a convenient mobile app for both iOS and
                      Android devices, perfect for editing on the go.
                    </li>
                    <li className="mb-3">
                      Useful for a wide range of users, from casual smartphone
                      photographers to professionals needing fast photo
                      restoration.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore Remini AI
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
                    Instantly enhances blurry, old, or low-resolution photos
                    using advanced AI restoration.
                  </li>
                  <li className="mb-2">
                    Extremely beginner-friendly with one-tap enhancement — no
                    editing experience required.
                  </li>
                  <li className="mb-2">
                    Great for portraits, selfies, and ID photo enhancements with
                    facial detail improvement.
                  </li>
                  <li className="mb-2">
                    Available as a mobile app for both Android and iOS — easy to
                    use on the go.
                  </li>
                  <li className="mb-2">
                    Includes video enhancement features for sharpening
                    low-quality video frames.
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
                    Requires an internet connection as enhancements are
                    processed in the cloud.
                  </li>
                  <li className="mb-2">
                    Limited editing controls — no manual fine-tuning or
                    layer-based editing.
                  </li>
                  <li className="mb-2">
                    Free version has usage limits; full access requires a
                    subscription.
                  </li>
                  <li className="mb-2">
                    Not suitable for creative edits, compositing, or advanced
                    workflows like Photoshop.
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
                    **Remini Web** – The official browser-based version of
                    Remini for desktop users who prefer working outside mobile
                    apps.
                  </li>
                  <li className="mb-2">
                    **Let's Enhance** – An AI tool that improves image
                    resolution, removes compression artifacts, and enhances
                    details without losing quality.
                  </li>
                  <li className="mb-2">
                    **VanceAI** – Offers AI-powered image enlarging, sharpening,
                    and background removal, ideal for restoring photos with
                    ease.
                  </li>
                  <li className="mb-2">
                    **Fotor AI Enlarger** – A simple online tool that allows
                    users to enhance photo resolution and clarity using AI.
                  </li>
                  <li className="mb-2">
                    **Pixelcut** – Designed for e-commerce and content creators,
                    it uses AI to clean up, upscale, and sharpen product or
                    portrait photos.
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
    <h1>Remini AI</h1>
    <div className="text-warning mb-2">⭐⭐⭐⭐⭐</div>

    <p>
      Remini AI is an advanced photo restoration tool powered by artificial intelligence.
      It’s designed to enhance and restore photos, particularly low-resolution, pixelated,
      or damaged images. By using AI and machine learning, Remini AI helps improve image
      quality, remove noise, and upscale photos to high-definition, making it an essential
      tool for both amateur and professional photographers.
    </p>

    <div className="mb-3">
      <a
        href="https://remini.ai/"
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
      src={magisto} // Replace with actual Remini image URL if needed
      alt="Remini AI Example"
      className="img-fluid"
      style={{ maxHeight: "300px", objectFit: "contain" }}
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
                How to Use Remini AI?
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
                      Download the App
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Install the Remini app from the Google Play Store or Apple
                      App Store and create an account to get started.
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
                      Upload a Photo
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Choose a blurry, old, or low-resolution image from your
                      phone gallery and upload it for enhancement.
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
                      Enhance and Save
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Tap “Enhance” to apply AI improvements. Preview the
                      result, then save or share the high-quality version
                      instantly.
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

export default ReminiAI;
