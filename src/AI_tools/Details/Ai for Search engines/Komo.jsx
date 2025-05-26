import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import komo from "../../../../public/assets/Img/Ai for Search engines/komo.png";
import magisto from "../../../Images/MagistoAI.png";
import komo1 from "../../../../public/assets/Img/Ai for Search engines/komo1.png";

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
const Komo = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                AI-Powered Content Generation and SEO Optimization with Komo AI
              </p>
              <h3 className="">Boost Your Content Creation with Komo AI</h3>
            </div>
            {[
              {
                icon: "📝",
                title: "AI Content Generation:",
                desc: "Automatically generates content that is SEO-optimized, saving time and effort in the writing process.",
              },
              {
                icon: "📈",
                title: "SEO Optimization:",
                desc: "Offers keyword analysis, on-page SEO optimization, and performance tracking to help you achieve better search engine rankings.",
              },
              {
                icon: "📋",
                title: "Content Templates:",
                desc: "Provides content templates that can be customized based on the user’s needs, helping to streamline the content creation process.",
              },
              {
                icon: "🧑‍💻",
                title: "Content Briefs:",
                desc: "Generates detailed content briefs that align with SEO goals, making it easier to structure content effectively.",
              },
              {
                icon: "🔑",
                title: "Keyword Suggestions:",
                desc: "Suggests relevant keywords based on trending topics, your content, and competitor analysis.",
              },
              {
                icon: "📊",
                title: "Content Scoring:",
                desc: "Scores content based on SEO quality, ensuring that your content meets search engine requirements for better ranking.",
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
                src={komo1}
                alt="komo"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={komo1}
                alt="komo"
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
                  q: "What is Komo AI?",
                  a: "Komo AI is an AI-powered content generation tool designed to help businesses and content creators automatically produce high-quality, SEO-optimized content efficiently.",
                },
                {
                  q: "How does Komo AI work?",
                  a: "Komo AI leverages natural language processing and machine learning to generate content, analyze SEO keywords, and optimize content for better search engine rankings.",
                },
                {
                  q: "Is Komo AI resource-heavy?",
                  a: "No, Komo AI is designed to be efficient and scalable, providing high-quality content generation without heavy resource consumption.",
                },
                {
                  q: "Can Komo AI create content for multiple industries?",
                  a: "Yes, Komo AI can be customized to create content for a wide range of industries, including marketing, technology, healthcare, and more.",
                },
                {
                  q: "Does Komo AI offer real-time SEO suggestions?",
                  a: "Yes, Komo AI provides real-time SEO analysis and suggestions to improve content's visibility on search engines.",
                },
                {
                  q: "Is Komo AI suitable for small businesses?",
                  a: "Yes, Komo AI is scalable and can cater to businesses of all sizes, from small startups to large enterprises, with flexible pricing options.",
                },
                {
                  q: "What types of content can Komo AI generate?",
                  a: "Komo AI can generate various types of content, including blog posts, product descriptions, social media posts, and email marketing campaigns.",
                },
                {
                  q: "Can I customize the content generated by Komo AI?",
                  a: "Yes, Komo AI allows users to customize generated content, ensuring it aligns with brand voice, style, and target audience.",
                },
                {
                  q: "Does Komo AI integrate with other tools?",
                  a: "Yes, Komo AI offers integration with various tools such as content management systems (CMS), SEO platforms, and email marketing services.",
                },
                {
                  q: "Can I automate content creation with Komo AI?",
                  a: "Yes, Komo AI enables automated content creation based on predefined topics, keywords, and content briefs.",
                },
                {
                  q: "What is the Komo AI dashboard?",
                  a: "The Komo AI dashboard provides a centralized interface to manage content generation, track performance, and review SEO metrics.",
                },
                {
                  q: "Does Komo AI include content performance tracking?",
                  a: "Yes, Komo AI includes built-in tracking features to monitor how well the generated content performs in terms of SEO rankings and user engagement.",
                },
                {
                  q: "How is Komo AI different from traditional content writing tools?",
                  a: "Unlike traditional content writing tools, Komo AI uses advanced machine learning and SEO optimization to create content that ranks well on search engines and engages readers.",
                },
                {
                  q: "Can Komo AI be used for email marketing content?",
                  a: "Yes, Komo AI can generate personalized and engaging email marketing content, saving time and effort in campaign creation.",
                },
                {
                  q: "How fast is the content generated by Komo AI?",
                  a: "Komo AI generates high-quality content almost instantly, allowing for quick turnarounds in content creation.",
                },
                {
                  q: "Does Komo AI support multiple languages?",
                  a: "Yes, Komo AI supports content generation in multiple languages, making it suitable for global businesses.",
                },
                {
                  q: "How often is Komo AI updated?",
                  a: "Komo AI is regularly updated with the latest AI and SEO enhancements to ensure optimal performance and content quality.",
                },
                {
                  q: "Does Komo AI offer a free trial?",
                  a: "Yes, Komo AI offers a free trial for users to test its features and explore its capabilities before committing to a subscription.",
                },
                {
                  q: "Can I use Komo AI for social media content creation?",
                  a: "Yes, Komo AI can generate social media content, including posts, captions, and hashtags, tailored for different platforms.",
                },
                {
                  q: "How is Komo AI licensed?",
                  a: "Komo AI is available via subscription-based pricing, with different plans based on usage and content generation needs.",
                },
                {
                  q: "What support does Komo AI offer?",
                  a: "Komo AI offers 24/7 customer support, a comprehensive knowledge base, and live chat assistance for users.",
                },
                {
                  q: "Is Komo AI secure?",
                  a: "Yes, Komo AI follows industry-standard security protocols to ensure that your data and content are secure and protected.",
                },
                {
                  q: "How do I contact Komo AI support?",
                  a: "You can contact Komo AI support through their website’s contact form, via email, or through their live chat feature.",
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
                    Why Use Komo AI?
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
                      Komo AI uses artificial intelligence to generate
                      high-quality, SEO-optimized content quickly and
                      efficiently.
                    </li>
                    <li className="mb-3">
                      Offers detailed content briefs and keyword analysis,
                      helping you create better-optimized articles and web
                      content.
                    </li>
                    <li className="mb-3">
                      Provides customizable templates that streamline the
                      writing process, saving time and increasing productivity.
                    </li>
                    <li className="mb-3">
                      Komo AI automatically scores content for SEO quality,
                      ensuring your content meets search engine requirements for
                      better ranking.
                    </li>
                    <li className="mb-3">
                      Continuously learns from user interactions to improve
                      content suggestions and enhance overall performance.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore Komo AI
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
              Pros & Cons of Komo AI
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
                    AI-driven content generation that saves time and effort,
                    producing SEO-optimized content automatically.
                  </li>
                  <li className="mb-2">
                    Offers keyword analysis, on-page SEO optimization, and
                    performance tracking for better search engine rankings.
                  </li>
                  <li className="mb-2">
                    Provides customizable content templates to streamline the
                    content creation process.
                  </li>
                  <li className="mb-2">
                    Generates detailed content briefs aligned with SEO goals,
                    making it easier to structure content effectively.
                  </li>
                  <li className="mb-2">
                    Komo AI suggests relevant keywords based on trending topics,
                    improving content visibility.
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
                    May not always produce fully original or unique content,
                    requiring manual editing for personalization.
                  </li>
                  <li className="mb-2">
                    Some users may find it challenging to refine content without
                    specific topic knowledge.
                  </li>
                  <li className="mb-2">
                    Advanced features, templates, or integrations may require
                    additional cost for full functionality.
                  </li>
                  <li className="mb-2">
                    Users may experience limitations in customizability for
                    niche content types or specific industries.
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
              Alternatives to Komo AI
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
                    <strong>Jasper AI</strong> – A content generation platform
                    that uses AI to help create high-quality written content for
                    marketing, blogs, and more, with SEO optimization.
                  </li>
                  <li className="mb-2">
                    <strong>Copy.ai</strong> – An AI writing assistant that
                    generates creative content ideas, blog posts, product
                    descriptions, and social media copy, helping to streamline
                    content creation.
                  </li>
                  <li className="mb-2">
                    <strong>Writesonic</strong> – An AI-powered tool designed
                    for generating various types of content, including blogs,
                    ads, emails, and more, with a focus on SEO and high
                    engagement.
                  </li>
                  <li className="mb-2">
                    <strong>Surfer SEO</strong> – A comprehensive SEO tool that
                    combines AI-driven content generation with advanced SEO
                    analysis, optimizing content for search engines in real
                    time.
                  </li>
                  <li className="mb-2">
                    <strong>INK Editor</strong> – AI-powered content editor
                    designed for writing SEO-friendly content. It helps writers
                    optimize their content for search engines and improve
                    engagement.
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
      <div className="bg-dark d-flex justify-content-between align-items-center">
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
          <div className="row d-flex align-items-center justify-content-between mb-1">
            {/* Left side (Text Section) */}
            <div
            
              className=" col-md-6 order-2 order-md-1 mb-5 mb-md-0"
            >
              <p className="text-primary">
                Create stunning visuals effortlessly
              </p>
              <h1>Komo AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>

              <p>
                Komo AI is an advanced AI-powered tool designed to help users
                with content creation, SEO optimization, keyword research, and
                content strategy. It automates the process of generating
                SEO-optimized articles, blog posts, and other types of content,
                ensuring that they are tailored to the latest search engine
                algorithms. Komo AI is ideal for SEO professionals, content
                marketers, and anyone looking to boost their content creation
                and SEO efforts.
              </p>

             <div className="d-flex flex-wrap gap-3 mb-4 mb-lg-0">
        <a
          href="https://komo.ai/"
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
  className="col-12 col-md-6 order-1 order-md-2 mb-5 mb-md-0"
  style={{
    flex: 1,
    textAlign: "center",
    width: "100%",
  }}
>
  <img
    src={komo}
    alt="Komo AI"
    style={{
      maxWidth: "100%",
      height: "auto", // ensures full visibility and responsiveness
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
                How to Use Komo AI?
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
                    <style>{`
            .step1 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #7b61ff;
              opacity: 0.6;
            }
          `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Sign Up for Komo AI
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Start by creating an account with Komo AI to access its
                      content generation, SEO tools, and more.
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
                    <style>{`
            .step2 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #7b61ff;
              opacity: 0.6;
            }
          `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Generate SEO-Optimized Content
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Use Komo AI's content generation tools to create
                      SEO-friendly articles, blog posts, and other content in
                      seconds.
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
                    <style>{`
            .step3 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #7b61ff;
              opacity: 0.6;
            }
          `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Optimize and Publish Your Content
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Refine your content with SEO suggestions and keyword
                      optimization, then easily publish your content to your
                      platform.
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

export default Komo;
