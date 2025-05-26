import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import copyaiSS1 from '../../../../public/assets/Img/AI for Writing/copyaiSS1.png';
import copyaiSS2 from '../../../../public/assets/Img/AI for Writing/copyaiSS2.png';
import copyaiImg from '../../../../public/assets/Img/AI for Writing/2.png'


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
const CopyAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                Create High-Quality Content in Minutes
              </p>
              <h3 className="">
                AI-Powered Writing Tools & Intelligent Content Generation
              </h3>
            </div>
            {[
              {
                icon: "🧠",
                title: "AI Content Generator:",
                desc: "Generate high-quality copy for blogs, social media, ads, and more with Copy.ai’s advanced AI technology.",
              },
              {
                icon: "🎯",
                title: "Brand Voice Customization:",
                desc: "Create content that reflects your brand’s unique voice with easy-to-use customization tools.",
              },
              {
                icon: "🌍",
                title: "Multilingual Support:",
                desc: "Write content in multiple languages to reach a global audience with ease.",
              },
              {
                icon: "⚡",
                title: "Templates for Every Need:",
                desc: "Choose from a variety of templates designed for marketing, product descriptions, emails, and more.",
              },
              {
                icon: "🤝",
                title: "Collaboration Tools:",
                desc: "Collaborate in real-time with your team for seamless content creation and sharing.",
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
                src={copyaiSS1}
                alt="copyai"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={copyaiSS2}
                alt="copy ai"
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

      case "why-we-use":
        return (
          <div className="container">
            <div className="row g-4">
              <div className="col-12">
                <div className="custom-card text-light p-5 text-center">
                  <h3 className="fw-bold mb-4 text-start text-primary">
                    Why Use Copy.ai?
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
                      Generate high-quality marketing, product, and social media
                      copy in seconds.
                    </li>
                    <li className="mb-3">
                      Access a wide range of templates designed for various
                      content types and industries.
                    </li>
                    <li className="mb-3">
                      Save time on content creation with AI that adapts to your
                      brand voice and tone.
                    </li>
                    <li className="mb-3">
                      Perfect for marketers, content creators, and businesses
                      looking to enhance their content strategies.
                    </li>
                    <li className="mb-3">
                      Supports multiple languages to help you create content for
                      global audiences.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Start Writing Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "faqs":
        return (
          <div className="faq-section container py-4">
            <h3 className="text-center mb-4">Frequently Asked Questions</h3>

            <div className="accordion" id="faqAccordion">
              {/* FAQ Item 1 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What is Copy.ai?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse show"
                  aria-labelledby="headingOne"
                >
                  <div className="accordion-body">
                    Copy.ai is an AI-powered writing tool designed to help users
                    create marketing copy, blog posts, product descriptions,
                    emails, and more—instantly and effortlessly.
                  </div>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How does Copy.ai work?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Copy.ai uses advanced language models to turn simple prompts
                    or keywords into high-quality written content within
                    seconds, helping marketers and creators save time and boost
                    productivity.
                  </div>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Is Copy.ai good for long-form content?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    While Copy.ai is primarily optimized for short-form content
                    like product descriptions and social media copy, it also
                    offers tools to assist with longer content like blog intros
                    and outlines.
                  </div>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    What kind of content can I create with Copy.ai?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    With Copy.ai, you can create content such as product
                    descriptions, digital ad copy, social media captions,
                    startup pitches, email subject lines, and more—all with
                    minimal input.
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
                    Offers dozens of content templates for ads, emails, blogs,
                    and more.
                  </li>
                  <li className="mb-2">
                    Very beginner-friendly interface with minimal learning
                    curve.
                  </li>
                  <li className="mb-2">
                    Fast content generation with decent quality out of the box.
                  </li>
                  <li className="mb-2">
                    Affordable pricing options, including a free plan.
                  </li>
                  <li className="mb-2">
                    Regular feature updates and active community support.
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
                <h5 className="text-warning text-start mb-4">⚠️ Cons</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    Limited customization for tone and voice compared to
                    competitors.
                  </li>
                  <li className="mb-2">
                    Output can sometimes feel too generic or robotic.
                  </li>
                  <li className="mb-2">
                    Not ideal for long-form or highly creative writing tasks.
                  </li>
                  <li className="mb-2">
                    Lacks advanced SEO integrations like Surfer SEO.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "alternative":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-4">
              Alternatives to Copy.ai
            </h4>
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
                    <strong>Jasper AI:</strong> Known for powerful long-form
                    content generation and tone control, but priced higher than
                    Copy.ai.
                  </li>
                  <li className="mb-2">
                    <strong>Writesonic:</strong> Offers AI content for blogs and
                    marketing with a free plan, though it lacks Copy.ai’s
                    intuitive UX.
                  </li>
                  <li className="mb-2">
                    <strong>Rytr:</strong> Budget-friendly AI writing tool with
                    basic features, but limited when it comes to creativity and
                    polish.
                  </li>
                  <li className="mb-2">
                    <strong>Copysmith:</strong> Tailored for eCommerce and bulk
                    product descriptions, but less flexible than Copy.ai for
                    varied use cases.
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
          <i className="bi bi-arrow-left me-2"></i>Back{" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
       <div className="row align-items-center mb-4">
  {/* Image Section - Top on mobile, right on desktop */}
  <div className="col-12 col-md-6 order-1 order-md-2 text-center mb-4 mb-md-0">
    <img
      src={copyaiImg}
      alt="Copy.ai"
      className="img-fluid"
      style={{
        maxWidth: "100%",
        height: "300px",
        objectFit: "contain",
      }}
    />
  </div>

  {/* Text Section - Bottom on mobile, left on desktop */}
  <div className="col-12 col-md-6 order-2 order-md-1 px-3 px-md-4">
    <p className="text-primary">Write better, faster</p>
    <h1>Copy.ai</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      Copy.ai is an AI-powered content generation platform designed to help users
      create high-quality copy quickly and efficiently. Whether you’re writing blog
      posts, social media content, product descriptions, or ad copy, Copy.ai automates
      writing tasks using advanced language models. It is tailored for marketers,
      content creators, eCommerce businesses, and anyone who needs compelling
      written content fast.
    </p>
    <a
      href="https://www.copy.ai"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-primary mt-2"
    >
      Explore Tool
    </a>
  </div>
</div>

<<<<<<< HEAD

            {/* Right side (Image Section) */}
            <div
  className="col-12 col-md-6 mb-5 d-flex justify-content-center align-items-center"
  style={{
    height: "250px",
  }}
>
  <img
    src={copyaiImg}
    className="img-fluid"
    alt="Copy.ai"
    style={{ maxHeight: "100%", objectFit: "contain" }}
  />
</div>

          </div>
=======
>>>>>>> 9732e077a94f9a43e3fcff86cd1122391726245d
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
                How to Use Copy.ai?
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
                      Pick a Project Type
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Choose from templates like product descriptions, blog
                      intros, social posts, and more tailored for your marketing
                      goals.
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
                      Enter Your Brief
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Fill in a short description or keywords that describe what
                      kind of content you want Copy.ai to generate.
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
                      Generate and Edit Instantly
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Instantly get multiple AI-written results you can edit,
                      save, or copy for use in your campaigns.
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
              "faqs",

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

export default CopyAI;
