import React, { useState } from "react";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

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
const DeepDreamGeneratorAI = () => {
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
                icon: "🎨",
                title: "Dream Style Customization:",
                desc: "Apply unique artistic styles to transform your images and create surreal masterpieces.",
              },
              {
                icon: "🌌",
                title: "Advanced Neural Networks:",
                desc: "Leverage deep neural networks to generate stunning dream-like images from your input.",
              },
              {
                icon: "🖼",
                title: "Image Enhancement Tools:",
                desc: "Enhance your artwork with a range of tools designed for vivid details and texture refinement.",
              },
              {
                icon: "💻",
                title: "High-Resolution Outputs:",
                desc: "Generate high-quality, detailed images suitable for professional use or digital displays.",
              },
              {
                icon: "🔧",
                title: "Customizable Parameters:",
                desc: "Adjust multiple settings to fine-tune the artistic output to your exact vision.",
              },
              {
                icon: "🌍",
                title: "Community & Sharing:",
                desc: "Share your dream creations with a vibrant community and explore artwork from others.",
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
                  q: "What is Deep Dream Generator?",
                  a: "Deep Dream Generator is an AI-powered tool that transforms images into surreal, dream-like artworks using neural networks, inspired by Google’s Deep Dream project.",
                },
                {
                  q: "Who created Deep Dream Generator?",
                  a: "The original Deep Dream algorithm was created by Google engineers in 2015. Deep Dream Generator is a public platform built around that concept for creative use.",
                },
                {
                  q: "How does Deep Dream Generator work?",
                  a: "It uses convolutional neural networks (CNNs) to process images and emphasize patterns it identifies, often resulting in trippy, hallucinogenic visuals.",
                },
                {
                  q: "Is Deep Dream Generator free to use?",
                  a: "Yes, it offers a free plan with limited features. Paid plans provide higher resolution, faster processing, and more customization.",
                },
                {
                  q: "What are the main features of Deep Dream Generator?",
                  a: "Image style transfer, dream filter selection, resolution settings, neural customization, batch processing, and more.",
                },
                {
                  q: "Is Deep Dream Generator an app or web-based?",
                  a: "It is a web-based platform, accessible via browser at deepdreamgenerator.com.",
                },
                {
                  q: "Do I need to sign up to use it?",
                  a: "Yes, a free account is required to save and process images.",
                },
                {
                  q: "What file types does it accept?",
                  a: "JPEG and PNG files are supported for image uploads.",
                },
                {
                  q: "What are the upload size limits?",
                  a: "On free plans, smaller images are allowed. Paid users can upload higher-resolution files.",
                },
                {
                  q: "Can I use Deep Dream Generator on mobile?",
                  a: "Yes, the website is mobile-responsive, although it works best on desktop.",
                },
                {
                  q: "Can I use my own images?",
                  a: "Yes, you can upload any image you want as the base for your dream transformation.",
                },
                {
                  q: "Does it work with photos of people?",
                  a: "Yes, but the neural processing often distorts faces artistically, giving them surreal features.",
                },
                {
                  q: "How long does image processing take?",
                  a: "It varies by image size and server load, typically from a few seconds to several minutes.",
                },
                {
                  q: "Can I control the intensity of the effect?",
                  a: "Yes, you can choose dream ‘depth’ levels and neural settings.",
                },
                {
                  q: "Does it support batch processing?",
                  a: "Yes, in premium plans you can process multiple images simultaneously.",
                },
                {
                  q: "Can I download high-resolution outputs?",
                  a: "Yes, high-res downloads are available on paid plans.",
                },
                {
                  q: "What is the best resolution for upload?",
                  a: "Use medium-to-high resolution for best detail retention and dream clarity.",
                },
                {
                  q: "Can I edit images after generating?",
                  a: "You must re-process the image to change styles. Manual editing isn't built-in.",
                },
                {
                  q: "Can I preview before final rendering?",
                  a: "Yes, a low-res preview is generated first.",
                },
                {
                  q: "Does it keep a gallery of my artworks?",
                  a: "Yes, each user has a profile with an image gallery.",
                },
                {
                  q: "What are the different dream styles?",
                  a: "Deep Style, Thin Style, and Deep Dream are the main types.",
                },
                {
                  q: "What is ‘Deep Style’?",
                  a: "It blends a chosen artistic style image with your content image using neural style transfer.",
                },
                {
                  q: "What is ‘Thin Style’?",
                  a: "It applies lighter, subtler neural filters—more like a photo filter.",
                },
                {
                  q: "What is ‘Deep Dream’?",
                  a: "It magnifies patterns seen by the neural network, creating trippy visuals with faces, eyes, animals, etc.",
                },
                {
                  q: "Can I upload my own style image?",
                  a: "Yes, for Deep Style, you can select a custom image to apply its texture/style.",
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
                    Why Use Deep Dream Generator?
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
                      Easy access to complex AI rendering tools.
                    </li>
                    <li className="mb-3">
                      Create art that stands out with its unique hallucinogenic
                      style.
                    </li>
                    <li className="mb-3">
                      Ideal for artists, designers, content creators, and
                      marketers looking to push visual boundaries.
                    </li>
                    <li className="mb-3">
                      No prior technical knowledge required.
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
                  <li className="mb-2">Free version available.</li>
                  <li className="mb-2">
                    Browser-based, no installation required.
                  </li>
                  <li className="mb-2">
                    Unique AI art style not commonly found in other tools.
                  </li>
                  <li className="mb-2">
                    Strong community for inspiration and sharing.
                  </li>
                  <li className="mb-2">Frequent updates and improvements.</li>
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
                  <li className="mb-2">Limited resolution on free plan.</li>
                  <li className="mb-2">
                    Slower generation times during peak usage.
                  </li>
                  <li className="mb-2">
                    Can be GPU-intensive if running locally.
                  </li>
                  <li className="mb-2">
                    Less realistic than other AI art tools (intentionally
                    dreamlike).
                  </li>
                  <li className="mb-2">
                    Fewer customization options than some alternatives.
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
                    MidJourney – High realism and artistic AI generation.
                  </li>
                  <li className="mb-2">
                    Stable Diffusion – Open-source, custom styles.
                  </li>
                  <li className="mb-2">
                    DALL·E 3 – Advanced prompt-based generation by OpenAI.
                  </li>
                  <li className="mb-2">
                    NightCafe – Multiple AI engines in one platform.
                  </li>
                  <li className="mb-2">
                    Artbreeder – AI-powered genetic art combination.
                  </li>
                  <li className="mb-2">
                    Runway ML – Video and image-based creative AI tools.
                  </li>
                  <li className="mb-2">
                    Adobe Firefly – Adobe's suite of generative AI tools.
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
    <p className="text-primary">Write better, faster</p>
    <h1>What is Deep Dream Generator</h1>
    <div className="text-warning mb-2">⭐⭐⭐⭐⭐</div>

    <p>
      Deep Dream Generator is a powerful AI-powered art tool that transforms images into
      dreamlike, surreal, and psychedelic artworks. Originally developed by Google engineers
      in 2015, the tool uses convolutional neural networks (CNNs) to reinterpret and enhance
      patterns in images, producing hallucinogenic visuals.
    </p>
    <p>
      It’s now an online creative platform where users can upload photos and apply
      dream-inspired filters, neural style transfers, and deep AI interpretations.
    </p>

    <div className="mb-3">
      <a
        href="https://deepdreamgenerator.com/"
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
      src="" // Add your image URL here
      alt="Deep Dream Generator Preview"
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
                How to Use Deep Dream Generator?
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
                      Select a style (from psychedelic, fantasy, abstract to
                      realistic overlays).
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
                      Choose intensity and style depth parameters.
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
                      Download, share, or continue refining the result.
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

export default DeepDreamGeneratorAI;
