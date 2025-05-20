import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import clerkio from "../../../../public/assets/Img/AI for E-commerce/clerkio.png"
import clerkio1 from "../../../../public/assets/Img/AI for E-commerce/clerkio1.png"
import clerkio2 from "../../../../public/assets/Img/AI for E-commerce/clerkio2.png"
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
const ClerkioAI = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                Create Studio-Quality Videos with AI
              </p>
              <h3 className=""> Features of Clerk.io AI</h3>
            </div>
            {[
              {
                icon: "🖼",
                title: "Ecommerce Search Optimization",
                desc: "Clerk.io provides smart search and predictive search features, using AI-powered search engines that improve product discovery with auto-complete, typo tolerance, and relevance boosting.",
              },
              {
                icon: "🎨",
                title: "Product Recommendations",
                desc: "It powers upselling, cross-selling tools, smart recommendations, and personalized landing pages to dynamically boost cart value.",
              },
              {
                icon: "✏",
                title: "Dynamic Filtering",
                desc: " Dynamic filters and dynamic product feeds adapt automatically based on inventory, user behavior, and real-time trends.",
              },
              {
                icon: "📦",
                title: "Omnichannel Personalization",
                desc: "Clerk.io delivers real-time personalization across websites, mobile apps, emails, and SMS campaigns, creating seamless customer journeys.",
              },
              {
                icon: "⚙",
                title: "Customer Retention & Loyalty",
                desc: "Through personalized marketing, behavioral targeting, abandoned cart recovery, and loyalty program integrations, Clerk.io helps brands keep customers engaged long-term.",
              },

              {
                icon: "📦",
                title: "Performance Analytics",
                desc: "Using real-time dashboards, brands can track click-through rate optimization, sales conversion optimization, and shopper intent prediction to continually improve marketing strategies.",
              },
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="custom-card text-light p-4 h-100  "
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
      case "FAQs":
        return (
          <div className="faq-section container py-4">
            <h3 className="text-center text-white mb-4 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is Clerk.io AI?",
                  a: "Clerk.io AI is an AI-powered ecommerce platform offering smart search, personalization, and recommendation tools to boost sales.",
                },
                {
                  q: "How does Clerk.io AI work?",
                  a: "It uses machine learning algorithms to analyze shopper behavior, optimize search results, and deliver personalized product suggestions.",
                },
                {
                  q: "Who can use Clerk.io AI?",
                  a: "Ecommerce businesses across industries like fashion, electronics, home goods, and more.",
                },
                {
                  q: "Is Clerk.io AI only for ecommerce?",
                  a: "Yes, Clerk.io is built specifically to enhance ecommerce shopping experiences.",
                },
                {
                  q: "What are the main features of Clerk.io AI?",
                  a: "Smart search, personalized recommendations, dynamic filtering, customer retention tools, upselling and cross-selling.",
                },
                {
                  q: "What is Clerk.io smart search?",
                  a: "An AI-driven search engine that predicts and corrects user queries for faster product discovery.",
                },
                {
                  q: "What is Clerk.io AI personalization?",
                  a: "Tailoring product displays, emails, and site content based on each shopper's behavior and preferences.",
                },
                {
                  q: "Does Clerk.io AI offer dynamic product recommendations?",
                  a: "Yes, it offers real-time product suggestions to increase average order value.",
                },
                {
                  q: "How does Clerk.io AI help boost revenue?",
                  a: "Through personalized shopping experiences, smarter search results, and targeted marketing automation.",
                },
                {
                  q: "What platforms integrate with Clerk.io AI?",
                  a: "Shopify, Magento, WooCommerce, BigCommerce, Salesforce Commerce Cloud, and custom APIs.",
                },
                {
                  q: "What is Clerk.io’s predictive search feature?",
                  a: "Predictive search auto-completes queries and suggests products even before users finish typing.",
                },
                {
                  q: "Is Clerk.io AI easy to integrate?",
                  a: "Yes, Clerk.io provides plug-and-play apps for major platforms and detailed API documentation.",
                },
                {
                  q: "Does Clerk.io AI have an onboarding service?",
                  a: "Yes, Clerk.io offers full onboarding support and training for new customers.",
                },
                {
                  q: "How much does Clerk.io AI cost?",
                  a: "Pricing varies based on store size, features required, and traffic — it’s offered on a custom quote basis.",
                },
                {
                  q: "Does Clerk.io AI offer a free trial?",
                  a: "You can request a demo, but a free trial's availability depends on the specific package.",
                },
                {
                  q: "Does Clerk.io AI boost customer retention?",
                  a: "Yes, it enhances customer loyalty by personalizing every shopping interaction.",
                },
                {
                  q: "How does Clerk.io AI personalize marketing campaigns?",
                  a: "By inserting dynamic, behavior-based product recommendations into emails and SMS campaigns.",
                },
                {
                  q: "What is Clerk.io AI’s upselling feature?",
                  a: "Recommends higher-value products based on the shopper’s browsing or cart history.",
                },
                {
                  q: "What is cross-selling with Clerk.io AI?",
                  a: "Suggesting complementary products to boost total sales during the checkout process.",
                },
                {
                  q: "Does Clerk.io AI offer abandoned cart recovery?",
                  a: "Yes, through personalized follow-up emails and smart reminders.",
                },
                {
                  q: "How does Clerk.io AI help with catalog management?",
                  a: "By dynamically organizing and enriching product catalogs for better navigation.",
                },
                {
                  q: "Does Clerk.io AI support omnichannel personalization?",
                  a: "Yes, it synchronizes web, mobile, email, and SMS for seamless customer journeys.",
                },
                {
                  q: "What is dynamic filtering in Clerk.io AI?",
                  a: "Real-time updated filters that adapt based on available stock, user preferences, and trends.",
                },
                {
                  q: "What is Clerk.io AI’s dashboard like?",
                  a: "A real-time analytics dashboard showing conversion rates, CTR, behavior flows, and sales data.",
                },
                {
                  q: "Can Clerk.io AI handle large product catalogs?",
                  a: "Yes, Clerk.io is built to manage and personalize large ecommerce inventories efficiently.",
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

      case "Screenshots":
        return (
          <div className="row g-4">
            <div className="col-md-6">
              <img
                src={clerkio1}
                alt="clerkio screenshot"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={clerkio2}
                alt="clerkio screenshot"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
        );

      case "Reviews":
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

      case "Technical":
        return (
          <div style={styles.section}>
            <div className="container">
              <div className="row g-4">
                {/* System Requirements */}
                <div className="col-md-8">
                  <div style={styles.card}>
                    <h5 className="mb-4">System Requirements</h5>
                    <div className="row">
                      <div className="col-md-6">
                        <h6>Supported Platforms</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>🪟 Windows 10/11 (Web App)</li>
                          <li>🍎 macOS 11+ (Chrome or Safari)</li>
                          <li>📱 Android & iOS (Mobile Browser)</li>
                          <li>🌐 Modern browsers (Chrome, Firefox, Edge)</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h6>Hardware Requirements</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>⚡ Intel i3 or equivalent (2.0 GHz+)</li>
                          <li>🧠 4 GB RAM (8 GB preferred for HD rendering)</li>
                          <li>💾 300 MB disk space for cache</li>
                          <li>📶 Stable high-speed internet (4 Mbps+)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Resources & Support */}
                <div className="col-md-4">
                  <div style={styles.card}>
                    <h5 className="mb-4">Resources</h5>
                    <ul className="list-unstyled mb-4" style={styles.smallText}>
                      <li>📄 Getting Started with Pictory</li>
                      <li>💻 API Documentation</li>
                      <li>🎥 Video Tutorials</li>
                      <li>🎓 AI Video Academy</li>
                      <li>💬 Support Community</li>
                    </ul>
                    <h5>Support</h5>
                    <button
                      className="btn w-100 my-2"
                      style={styles.button}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor =
                          styles.buttonHover.backgroundColor;
                        e.target.style.borderColor =
                          styles.buttonHover.borderColor;
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor =
                          styles.button.backgroundColor;
                        e.target.style.borderColor = styles.button.borderColor;
                      }}
                    >
                      🎧 Contact Support
                    </button>
                    <small className="text-muted d-block text-center">
                      24/7 technical support for premium users
                    </small>
                  </div>
                </div>

                {/* Integrations */}
                <div className="col-12">
                  <div style={styles.card}>
                    <h5 className="mb-4">Integration Capabilities</h5>
                    <div className="row">
                      <div className="col-md-4">
                        <h6>Content Sources</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>🧰 Google Docs</li>
                          <li>🧰 Microsoft Word</li>
                          <li>🧰 Blog URLs for video summarization</li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <h6>Export Tools</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>💻 MP4 Video Export</li>
                          <li>💻 SRT/VTT Subtitles</li>
                          <li>💻 Social media formats</li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <h6>Marketing Tools</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>📢 Hootsuite Integration</li>
                          <li>📢 HubSpot</li>
                          <li>📢 LinkedIn & Facebook Upload</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Why-We-Use":
        return (
          <div className="container">
            <div className="row g-4">
              <div className="col-12">
                <div className="custom-card text-light p-5 text-center">
                  <h3 className="fw-bold mb-4 text-start text-primary">
                    Why Use Clerk.io AI?
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
                    <li class="mb-3">
                      <strong>Boost Sales and Conversions:</strong> Personalized
                      product discovery leads directly to higher conversions and
                      average order values.
                    </li>
                    <li class="mb-3">
                      <strong>Intelligent Searchandising:</strong> Clerk.io
                      smart search and searchandising tools optimize site
                      navigation, helping users find exactly what they want
                      faster.
                    </li>
                    <li class="mb-3">
                      <strong>
                        Real-Time Personalization Across Channels:
                      </strong>{" "}
                      Clerk.io connects web, mobile, and email experiences with
                      real-time user segmentation and omnichannel
                      personalization strategies. .
                    </li>
                    <li class="mb-3">
                      <strong>Data-Driven Growth:</strong> Clerk.io ecommerce
                      data insights and predictive ecommerce analytics allow
                      brands to make smarter, faster decisions.
                    </li>
                    <li class="mb-3">
                      <strong>Automation and Scale:</strong> Through
                      behavior-based recommendations and AI-driven ecommerce
                      growth, Clerk.io saves time while maximizing
                      profitability.
                    </li>
                    <li class="mb-3">
                      <strong>Future-Ready Ecommerce AI:</strong> With headless
                      ecommerce personalization, mobile ecommerce
                      personalization, and dynamic filters, Clerk.io prepares
                      businesses for the future of AI-powered retail.
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

      case "Pros & Cons":
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
                    All-in-One Ecommerce AI Solution: Search, recommendations,
                    personalization, and marketing automation in one platform.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Seamless Integration: Easy onboarding, extensive API
                    support, and integrations with major ecommerce platforms.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Highly Personalized Experiences: Supports real-time behavior
                    targeting, dynamic campaigns, and product relevance
                    boosting.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Rich Analytics and Dashboards: Detailed performance
                    analytics dashboard to track ecommerce KPIs.
                  </li>
                  <li className="mb-2">
                    Flexible Pricing Plans: Pricing models based on business
                    size and required features (custom quotes available).
                  </li>
                  <li className="mb-2">
                    Improves User Experience: Smart navigation, personalized
                    site search, intelligent product discovery, and optimized
                    shopper journeys.
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
                    Not Free: Clerk.io AI is a premium tool; free trials are
                    limited, and it can be costly for very small startups.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Requires Technical Setup: Full potential requires proper
                    integration, configuration, and customization support.
                  </li>
                  <li className="mb-2">
                    Focus on Ecommerce: Clerk.io is strictly for ecommerce
                    brands — not suitable for blogs, SaaS, or non-commerce
                    industries.
                  </li>
                  <li className="mb-2">
                    Complex Dashboard Learning Curve: While powerful, Clerk.io’s
                    advanced dashboards might take time for non-technical users
                    to master.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "Alternative":
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
                    Best for avatar-based explainer and corporate videos.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Emerging competition with realistic scene generation but
                    still in closed beta.
                  </li>
                  <li className="mb-2">
                    Great for musicians and creators wanting visual storytelling
                    synced with audio.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Known for creative animated video styles and short-form
                    content.
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
          <div className="container-fluid px-0 px-lg-3">
  <div className="row align-items-center g-4 g-lg-5 mb-4">
    {/* Left side (Text Section) */}
    <div className="col-lg-6 col-12 order-lg-1 order-2 pe-lg-4">
      <p className="text-primary fw-semibold mb-2">Write better, faster</p>
      <h1 className="display-6 mb-3">Clerk.io AI</h1>
      <div className="text-warning mb-3 fs-5">⭐⭐⭐⭐⭐</div>
      
      <div className="mb-4">
        <p className="mb-3">
          Clerk.io AI is an advanced AI-powered solution for ecommerce
          businesses designed to deliver smart product search,
          personalized recommendations, and dynamic merchandising. It uses
          machine learning, behavioral targeting, and predictive analytics
          to boost sales conversion rates, customer retention, and revenue
          for online stores.
        </p>

        <p className="mb-0">
          Clerk.io AI serves more than just ecommerce search — it also
          powers upselling, cross-selling, dynamic filtering, smart
          category pages, personalized marketing, and real-time
          segmentation. By integrating behavior-based recommendations and
          AI-powered search suggestions, Clerk.io transforms traditional
          online shopping into highly personalized smart shopping
          experiences.
        </p>
      </div>

      <div className="d-flex flex-wrap gap-3">
        <a
          href="https://www.clerk.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary px-4 py-2 fw-medium"
        >
          Explore Tool
        </a>
       
      </div>
    </div>

    {/* Right side (Image Section) */}
    <div className="col-lg-6 col-12 order-lg-2 order-1">
      <div className="ratio ratio-16x9 bg-light rounded-3 overflow-hidden">
        <img
          src={clerkio}
          alt="Clerk.io AI Platform"
          className="img-fluid object-fit-contain p-3"
        />
      </div>
    </div>
  </div>
</div>
          <section style={{ backgroundColor: "", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">Create Videos in 3 Simple Steps</p>
              <h2
                style={{
                  fontWeight: "semibold",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                How Clerk.io AI Works?
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
                      AI-Driven Product Discovery
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Clerk.io uses advanced machine learning algorithms to
                      enhance product discovery, offering personalized product
                      suggestions based on user behavior.
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
                      Real-Time Dynamic Recommendations
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      The AI continuously adapts to user actions, offering
                      highly relevant product recommendations based on
                      individual preferences in real-time.
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
                      Enhanced Site Search
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      With Clerk.io, search results are fine-tuned using AI,
                      ensuring users find the most relevant products quickly and
                      accurately, improving the overall experience.
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
              "Features",
              "Screenshots",
              "Reviews",
              "FAQs",
              "Technical",
              "Why-We-Use",
              "Pros & Cons",
              "Alternative",
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

export default ClerkioAI;
