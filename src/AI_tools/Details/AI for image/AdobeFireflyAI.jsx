import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import adobefireflySS1 from '../../../../public/assets/Img/AI from Image/adobefireflySS1.png';
import adobefireflySS2 from '../../../../public/assets/Img/AI from Image/adobefireflySS2.png';
import adobe from '../../../../public/assets/Img/AI from Image/1.png';


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
const AdobeFireflyAI = () => {
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
                icon: "🎨",
                title: "AI-Powered Creativity:",
                desc: "Adobe Firefly leverages powerful AI technology to generate high-quality images, illustrations, and designs based on text prompts, empowering users to create stunning artwork with ease.",
              },
              {
                icon: "🖌",
                title: "Customizable Styles and Effects:",
                desc: "With Adobe Firefly, users can adjust styles, colors, and effects to personalize their creations, enabling unique and tailor-made visual content for any project.",
              },
              {
                icon: "🔄",
                title: "Image Refinement and Editing:",
                desc: "Adobe Firefly allows users to refine and enhance generated images by providing intuitive editing tools, perfect for fine-tuning artwork or altering specific details.",
              },
              {
                icon: "🌍",
                title: "Diverse Design Capabilities:",
                desc: "Adobe Firefly supports the creation of images with a wide variety of design aesthetics and cultural contexts, making it a versatile tool for global creative projects.",
              },
              {
                icon: "🚀",
                title: "Fast Image Generation:",
                desc: "Adobe Firefly can generate high-quality visual content in a fraction of the time, accelerating the creative process and enabling rapid iterations for design projects.",
              },
              {
                icon: "🔌",
                title: "Seamless Integration with Adobe Suite:",
                desc: "Adobe Firefly integrates smoothly with Adobe Creative Cloud, allowing users to easily bring their AI-generated images into applications like Photoshop, Illustrator, and InDesign.",
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
                    Why Use Adobe Firefly?
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
                        Quick Content Creation: Generate images or designs in
                        minutes rather than spending hours manually creating
                        them.
                      </li>
                      <li className="mb-3">
                        Customization: Fine-tune outputs based on specific
                        prompts and styles.
                      </li>
                      <li className="mb-3">
                        Creative Experimentation: Easily experiment with various
                        artistic styles and concepts without needing advanced
                        design skills.
                      </li>
                      <li className="mb-3">
                        Seamless Integration: Since it integrates with Adobe's
                        ecosystem, users can move seamlessly between Firefly and
                        tools like Photoshop, Illustrator, and Lightroom.
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
                  q: "What is Adobe Firefly?",
                  a: "Adobe Firefly is an AI-powered creative tool that generates images, illustrations, and graphic designs based on user input through text prompts. It integrates seamlessly into Adobe's Creative Cloud suite.",
                },
                {
                  q: "How does Adobe Firefly work?",
                  a: "Adobe Firefly uses advanced machine learning models trained on a vast dataset of creative content to generate images based on textual descriptions. It interprets the user's prompts and translates them into visual art.",
                },
                {
                  q: "Is Adobe Firefly free?",
                  a: "Adobe Firefly offers a limited free trial. However, full access requires a paid Adobe Creative Cloud subscription.",
                },
                {
                  q: "How do I access Adobe Firefly?",
                  a: "Adobe Firefly is available via Adobe's Creative Cloud. You need a subscription to access it through the web, desktop apps like Photoshop and Illustrator, or mobile versions.",
                },
                {
                  q: "Can Adobe Firefly generate images from text?",
                  a: "Yes, Adobe Firefly can generate images directly from text prompts. This feature allows you to describe what you want, and Firefly creates a corresponding image.",
                },
                {
                  q: "What is the difference between Adobe Firefly and other AI tools like DALL-E?",
                  a: "While both Adobe Firefly and DALL-E generate images from text prompts, Adobe Firefly is integrated with Adobe’s suite of tools, which makes it ideal for professionals who need to refine or edit images using industry-standard software.",
                },
                {
                  q: "Is Adobe Firefly part of Adobe Creative Cloud?",
                  a: "Yes, Adobe Firefly is included in Adobe Creative Cloud, making it available to all Creative Cloud subscribers.",
                },
                {
                  q: "Can I use Adobe Firefly for commercial projects?",
                  a: "Yes, Adobe Firefly allows users to create images for commercial purposes, subject to Adobe’s licensing and content usage policies.",
                },
                {
                  q: "Does Adobe Firefly have a mobile app?",
                  a: "Yes, Adobe Firefly is available on both desktop and mobile platforms as part of Adobe’s suite of creative tools.",
                },
                {
                  q: "What are the main features of Adobe Firefly?",
                  a: "Key features include: Text-to-image generation, Style transfer, Generative fill, Inpainting, Text effects, Customizable prompts.",
                },
                {
                  q: "What kind of images can I create with Adobe Firefly?",
                  a: "You can create photorealistic images, abstract art, cartoon-style illustrations, typography effects, fantasy art, and more using Adobe Firefly.",
                },
                {
                  q: "Can Adobe Firefly generate text effects?",
                  a: "Yes, Adobe Firefly can create unique text effects based on your prompts, including fonts, shapes, and styles.",
                },
                {
                  q: "Can Adobe Firefly handle image editing tasks?",
                  a: "Yes, it can perform image editing tasks such as background removal, inpainting (editing specific parts of an image), and applying style transfers.",
                },
                {
                  q: "What are Adobe Firefly’s style transfer capabilities?",
                  a: "Style transfer allows you to apply the style of one image to another, such as turning a photo into a painting or applying a particular artistic style to an image.",
                },
                {
                  q: "How do I write effective prompts for Adobe Firefly?",
                  a: "To write effective prompts, describe the image you want in detail, including aspects like mood, color palette, style, and specific elements (e.g., 'a futuristic city skyline at sunset').",
                },
                {
                  q: "Does Adobe Firefly offer pre-built templates?",
                  a: "Adobe Firefly is primarily focused on generating custom content from prompts rather than using pre-built templates, offering more flexibility and creativity.",
                },
                {
                  q: "How long does it take for Adobe Firefly to generate an image?",
                  a: "The time it takes varies depending on the complexity of the prompt and the quality settings. Typically, it takes a few seconds to a couple of minutes to generate an image.",
                },
                {
                  q: "Is Adobe Firefly good for beginners?",
                  a: "Yes, Adobe Firefly is user-friendly, and beginners can easily create impressive art using simple text prompts. Adobe also offers tutorials to help new users.",
                },
                {
                  q: "Can I refine images generated by Adobe Firefly?",
                  a: "Yes, once an image is generated, you can refine it further using Adobe’s powerful editing tools, such as Photoshop or Illustrator.",
                },
                {
                  q: "Can Adobe Firefly generate vector art?",
                  a: "Adobe Firefly can generate raster-based art, but it can be exported and refined into vector formats using Adobe Illustrator.",
                },
                {
                  q: "Does Adobe Firefly support 3D art?",
                  a: "Yes, Adobe Firefly can generate 3D renders and integrates with Adobe tools like Adobe Dimension for further 3D modeling and rendering.",
                },
                {
                  q: "How do I get started with Adobe Firefly?",
                  a: "To get started, sign up for an Adobe Creative Cloud subscription, download Adobe Firefly, and start experimenting with simple text prompts to generate images.",
                },
                {
                  q: "Can I use Adobe Firefly offline?",
                  a: "No, Adobe Firefly requires an internet connection to access the AI-powered features.",
                },
                {
                  q: "Is Adobe Firefly integrated with Adobe Photoshop?",
                  a: "Yes, Adobe Firefly is integrated with Adobe Photoshop, allowing users to generate images and then refine them directly within the Photoshop environment.",
                },
                {
                  q: "Does Adobe Firefly support animation?",
                  a: "Adobe Firefly can generate still images, and its integration with other Adobe tools like After Effects can help create animations based on generated content.",
                },
              ]

                .map((item, i) => ({ ...item, id: `faq${i} ` }))
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
                src={adobefireflySS1}
                alt="adobefirefly"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={Rephrase}
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
                    User-Friendly: Its intuitive interface makes it easy for
                    both beginners and professionals to use.
                  </li>
                  <li className="mb-2">
                    High-Quality Outputs: Adobe Firefly generates impressive and
                    realistic images that can be used for professional purposes.
                  </li>
                  <li className="mb-2">
                    Versatile: It supports various styles, from photorealistic
                    to abstract art, and can be used across a range of creative
                    industries.
                  </li>
                  <li className="mb-2">
                    Seamless Integration: Integrates well with other Adobe
                    tools, enhancing productivity for users within Adobe's
                    ecosystem.
                  </li>
                  <li className="mb-2">
                    Prompt-Based: Allows users to generate art simply by typing
                    descriptive text, making it accessible to non-artists.
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
                    Subscription-Based: Adobe Firefly requires a subscription to
                    Adobe Creative Cloud, which might be expensive for some
                    users.
                  </li>
                  <li className="mb-2">
                    Limited Free Trial: While there may be free trials
                    available, the tool’s full features require paid access.
                  </li>
                  <li className="mb-2">
                    Learning Curve: While user-friendly, users may need some
                    time to fully understand how to optimize prompts and refine
                    generated images.
                  </li>
                  <li className="mb-2">
                    Internet Access: Being an AI-powered tool, Adobe Firefly
                    requires a stable internet connection to function.
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
                      DALL-E (by OpenAI): A strong alternative to Firefly,
                      especially for creative text-to-image generation, offering
                      similar capabilities with unique features.
                    </li>
                    <li className="mb-2">
                      MidJourney: Known for its artistic and surreal style,
                      MidJourney offers a text-to-image generator that is
                      favored by creative professionals.
                    </li>
                    <li className="mb-2">
                      Stable Diffusion: An open-source alternative to Firefly
                      that offers more flexibility for advanced users and
                      developers who want to fine-tune AI models.
                    </li>
                    <li className="mb-2">
                      Canva AI: While more simplified than Adobe Firefly,
                      Canva's AI-powered tools offer easy-to-use features for
                      non-designers.
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
          className="d-inline-block text-white text-decoration-none ml-3 py-3 ms-3"
        >
          <i className="bi bi-arrow-left me-2"></i>Back to Directories {" "}
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
    <h1 className="mb-3">Adobe Firefly</h1>
    <div className="text-warning mb-3">⭐⭐⭐⭐⭐</div>
    <p className="mb-3">
      Adobe Firefly is an AI-driven creative tool designed to enhance
      and streamline design, content creation, and image generation
      processes. Developed by Adobe, Firefly leverages advanced
      machine learning to create artwork, graphics, and other digital
      assets based on text prompts. It is a versatile tool for both
      professionals and casual creators, enabling high-quality visual
      outputs quickly and efficiently. Adobe Firefly integrates
      seamlessly with Adobe's suite of software like Photoshop and
      Illustrator, making it a powerful addition to any designer's
      workflow.
    </p>

    <div className="mb-3">
      <a
        href="https://www.adobe.com/products/firefly.html"
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
      src={adobe}
      alt="Adobe Firefly AI Art Tool"
      className="img-fluid rounded shadow"
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
                How to Use Adobe Firefly
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
                      Sign Up and Access
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Adobe Firefly is part of Adobe's Creative Cloud, so you
                      need an active subscription to access it.
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
                      Interface Overview:
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Firefly is available as both a standalone application and
                      a plugin within Adobe software like Photoshop and
                      Illustrator. The user-friendly interface allows you to
                      input prompts, select styles, and fine-tune your results.
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
                      Text-to-Image Generation:
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      To generate an image, simply type a detailed prompt in the
                      text box. For example, “a futuristic city skyline at
                      sunset.” Adobe Firefly will interpret your prompt and
                      generate an image based on your description.
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

export default AdobeFireflyAI;
