import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import magisto from "../../../Images/MagistoAI.png";
import metaphore1 from '../../../../public/assets/Img/Ai for Search engines/Metaphor1.png';
import metaphore2 from '../../../../public/assets/Img/Ai for Search engines/Metaphor2.png';

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
const MetaPhor = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                Enhance Your Search Experience with Metaphora AI
              </p>
              <h3 className="">
                AI-Powered Search Engine for Privacy & Relevance
              </h3>
            </div>
            {[
              {
                icon: "🔍",
                title: "Customizable Text Analysis:",
                desc: "Metaphora AI allows users to customize text analysis models based on their specific needs, ensuring the most relevant and precise outcomes for your data.",
              },
              {
                icon: "🛡️",
                title: "Privacy-First Approach:",
                desc: "Metaphora AI prioritizes user data security and privacy, ensuring that no personal data is stored or tracked during analysis.",
              },
              {
                icon: "⚡",
                title: "Real-Time Data Processing:",
                desc: "Metaphora AI delivers instant results with its real-time AI data processing capabilities, helping users quickly analyze and make decisions based on data.",
              },
              {
                icon: "🌐",
                title: "Cloud-Based Solution:",
                desc: "Metaphora AI leverages cloud-based architecture to scale its services, providing access from any device with a secure connection.",
              },
              {
                icon: "📊",
                title: "Advanced Customization Options:",
                desc: "Metaphora AI provides advanced customization options to adjust models and algorithms, allowing users to optimize AI outputs to meet their specific requirements.",
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
                src={metaphore1}
                alt="metaphor"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={metaphore2}
                alt="metaphor"
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
                  q: "What is Metaphora AI?",
                  a: "Metaphora AI is an advanced artificial intelligence platform that provides real-time language processing, generating creative and data-driven insights from large text datasets.",
                },
                {
                  q: "How does Metaphora AI work?",
                  a: "Metaphora AI uses deep learning models and natural language processing algorithms to analyze and interpret textual data, offering insights and creating new content from a range of sources.",
                },
                {
                  q: "Is Metaphora AI resource-heavy?",
                  a: "No, Metaphora AI is designed to efficiently process large datasets and generate results without consuming excessive computational resources, making it scalable for various applications.",
                },
                {
                  q: "Can Metaphora AI be customized?",
                  a: "Yes, Metaphora AI offers customization options for various applications such as content generation, customer interaction, and data analysis, allowing users to fine-tune outputs based on their needs.",
                },
                {
                  q: "Does Metaphora AI track personal data?",
                  a: "Metaphora AI prioritizes privacy and security. It does not track personal data unless explicitly stated, and ensures that user interactions remain anonymous and secure.",
                },
                {
                  q: "What industries benefit from Metaphora AI?",
                  a: "Metaphora AI is beneficial in industries such as marketing, content creation, customer service, research, and data analytics, where understanding and generating text-based insights is crucial.",
                },
                {
                  q: "Is Metaphora AI suitable for small businesses?",
                  a: "Yes, Metaphora AI is scalable and can cater to businesses of all sizes, from startups to large enterprises, providing solutions for content creation, data analysis, and customer interaction.",
                },
                {
                  q: "Can Metaphora AI integrate with other platforms?",
                  a: "Yes, Metaphora AI supports integration with various tools and platforms, allowing businesses to streamline workflows and leverage AI for content creation, analytics, and automation.",
                },
                {
                  q: "Is Metaphora AI easy to use for non-technical users?",
                  a: "Yes, Metaphora AI is designed with ease of use in mind, providing user-friendly interfaces and clear documentation to help non-technical users integrate and use the platform effectively.",
                },
                {
                  q: "What languages does Metaphora AI support?",
                  a: "Metaphora AI supports multiple languages and is capable of processing and generating content in a wide range of languages, making it versatile for global use.",
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
                    Why Use Metaphora AI?
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
                      Metaphora AI leverages advanced natural language
                      processing to generate human-like text, enabling creative,
                      data-driven insights for content creators and businesses
                      alike.
                    </li>
                    <li className="mb-3">
                      It offers real-time content generation and text analysis,
                      making it a powerful tool for writing, marketing, and
                      content strategy.
                    </li>
                    <li className="mb-3">
                      The platform is highly customizable, providing the
                      flexibility to adapt to various industries like marketing,
                      customer service, research, and more.
                    </li>
                    <li className="mb-3">
                      Metaphora AI streamlines workflows by automating content
                      creation, saving time while improving the quality and
                      engagement of written material.
                    </li>
                    <li className="mb-3">
                      With machine learning models continuously improving,
                      Metaphora AI adapts to new trends and user interactions,
                      making it an intelligent tool for evolving business needs.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore Metaphora AI
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
            <h4 className="text-center text-light mb-4">
              Pros & Cons of Metaphora AI
            </h4>
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
                    Leverages advanced machine learning algorithms to provide
                    highly accurate and human-like text generation.
                  </li>
                  <li className="mb-2">
                    Capable of creating diverse content, from blog posts to
                    social media content, email campaigns, and more.
                  </li>
                  <li className="mb-2">
                    Helps improve productivity by automating content creation
                    processes, saving time and effort.
                  </li>
                  <li className="mb-2">
                    Provides SEO-optimized content suggestions, making it easier
                    to rank higher on search engines.
                  </li>
                  <li className="mb-2">
                    Offers customization options to align content with specific
                    brand voices and target audiences.
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
                    May require manual editing and fine-tuning for more
                    personalized or creative content.
                  </li>
                  <li className="mb-2">
                    AI-generated content can sometimes sound repetitive or less
                    natural compared to human-written content.
                  </li>
                  <li className="mb-2">
                    Some industries or topics may not be fully covered by
                    Metaphora AI, requiring further customization.
                  </li>
                  <li className="mb-2">
                    May be limited by the quality and diversity of training
                    data, affecting content accuracy for certain niche topics.
                  </li>
                  <li className="mb-2">
                    AI tools like Metaphora AI may not be able to match human
                    creativity in terms of nuanced and emotionally engaging
                    content.
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
              Alternatives to Metaphora AI
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
                    <strong>OpenAI GPT-3</strong> – A powerful natural language
                    processing model by OpenAI that can generate human-like text
                    for various tasks, including content creation and customer
                    service.
                  </li>
                  <li className="mb-2">
                    <strong>Copy.ai</strong> – An AI-powered content generation
                    tool designed for marketers, offering easy-to-use templates
                    for blog posts, product descriptions, and more.
                  </li>
                  <li className="mb-2">
                    <strong>Jasper AI</strong> – A versatile AI writing
                    assistant that helps create blog posts, ads, and other
                    content, with a focus on quality and SEO optimization.
                  </li>
                  <li className="mb-2">
                    <strong>Writesonic</strong> – AI-powered content creation
                    software that specializes in writing high-quality articles,
                    blog posts, and even email marketing campaigns with speed
                    and ease.
                  </li>
                  <li className="mb-2">
                    <strong>Rytr</strong> – A content generator tool that uses
                    artificial intelligence to create blogs, social media
                    content, and more, with a focus on helping writers generate
                    content faster.
                  </li>
                  <li className="mb-2">
                    <strong>INK Editor</strong> – An AI-powered content writing
                    assistant that helps optimize content for SEO, ensuring your
                    writing is search engine-friendly and engaging.
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
          <div className=" row d-flex align-items-center justify-content-between mb-1">
            {/* Left side (Text Section) */}
            <div
              
              className=" col-lg-6 "
            >
              <p className="text-primary">
                Create stunning visuals effortlessly
              </p>
              <h1> Metaphor AI </h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>

              <p>
                Metaphor AI is an advanced AI-powered content generation tool
                designed to automate and enhance content creation. It leverages
                artificial intelligence to create high-quality, SEO-optimized
                text, blog posts, social media content, marketing copy, product
                descriptions, and much more. By using cutting-edge NLP (Natural
                Language Processing) and machine learning algorithms, Metaphor
                AI streamlines the content development process for businesses,
                marketers, writers, and enterprises, enabling them to produce
                content at scale with ease and efficiency.
              </p>

             <div className="d-flex flex-wrap gap-3 mb-4 mb-lg-0">
        <a
          href="https://www.draftwithai.com/metaphor-generator"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg px-4"
        >
          Explore Tool
        </a>
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
                alt="metaphor"
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
                How to Use Metaphora AI?
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
                      Open Metaphora AI Platform
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Navigate to the Metaphora AI website or launch the
                      platform from your preferred environment.
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
                      Input Your Data or Text
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Upload your dataset, input text, or select options based
                      on the AI model you want to process.
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
                      Run the AI Model
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Trigger the AI model to process the input, and view or
                      download the results.
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

export default MetaPhor;
