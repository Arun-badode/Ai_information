import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";

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
const ViSenzeAI = () => {
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
              <h3 className="">Features of ViSenze AI </h3>
            </div>
            {[
              {
                icon: "🖼️",
                title: "Visual Search Intelligence",
                desc: "ViSenze AI enables image-based product discovery by allowing users to upload photos and instantly receive visually similar product results.",
              },
              {
                icon: "🤖",
                title: "AI-Powered Product Recognition",
                desc: "ViSenze AI uses advanced machine learning and computer vision to automatically recognize, tag, and categorize products with high accuracy.",
              },
              {
                icon: "📊",
                title: "Behavioral-Based Personalization",
                desc: "By analyzing browsing patterns and past behaviors, ViSenze AI delivers real-time, personalized product recommendations tailored to each shopper.",
              },
              {
                icon: "📈",
                title: "Enhanced Conversion Optimization",
                desc: "ViSenze AI improves conversion rates by showcasing relevant products at the right time through smart, data-driven placement strategies.",
              },
              {
                icon: "🌐",
                title: "Multi-Platform Compatibility",
                desc: "ViSenze AI integrates seamlessly with web and mobile platforms, delivering consistent personalized shopping experiences across devices.",
              },
              {
                icon: "🔍",
                title: "Search & Discovery Optimization",
                desc: "ViSenze AI enhances ecommerce search by refining queries using visual data, product attributes, and contextual cues for greater relevance.",
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
                  q: "What is ViSenze AI?",
                  a: "ViSenze AI is an AI-powered visual search and product recognition platform that helps businesses improve ecommerce search, product discovery, and personalized recommendations using machine learning and computer vision.",
                },
                {
                  q: "How does ViSenze AI work?",
                  a: "ViSenze AI uses image recognition and machine learning algorithms to analyze user behavior and product attributes, providing personalized product suggestions and optimizing search functionality.",
                },
                {
                  q: "What are the benefits of using ViSenze AI?",
                  a: "ViSenze AI boosts conversion rates, enhances customer engagement, improves search relevance, and provides personalized recommendations to users, making it easier for customers to find products.",
                },
                {
                  q: "Can ViSenze AI be integrated with ecommerce platforms?",
                  a: "Yes, ViSenze AI seamlessly integrates with ecommerce platforms such as Shopify, Magento, WooCommerce, and custom ecommerce solutions.",
                },
                {
                  q: "Does ViSenze AI provide a free trial?",
                  a: "Yes, ViSenze AI offers a free trial, allowing businesses to test out its features before committing to a paid plan.",
                },
                {
                  q: "How do I sign up for ViSenze AI?",
                  a: "To sign up, visit the ViSenze AI website, create an account, and choose the plan that best fits your business needs. You can sign up with your business details.",
                },
                {
                  q: "How do I log in to ViSenze AI?",
                  a: "To log in, visit the ViSenze AI login page and enter your username and password associated with your registered account.",
                },
                {
                  q: "How does ViSenze AI improve customer experience?",
                  a: "ViSenze AI improves customer experience by providing personalized search results, relevant product recommendations, and a more intuitive visual search experience.",
                },
                {
                  q: "Does ViSenze AI support mobile apps?",
                  a: "Yes, ViSenze AI can be integrated with mobile apps, enabling visual search and personalized recommendations directly within the app for a seamless mobile shopping experience.",
                },
                {
                  q: "How does ViSenze AI handle visual search?",
                  a: "ViSenze AI enables users to search for products by uploading images. It uses image recognition technology to match the image to products in your catalog and present visually similar options.",
                },
                {
                  q: "Can ViSenze AI increase sales?",
                  a: "Yes, ViSenze AI helps increase sales by offering personalized product recommendations, optimizing product discoverability, and enhancing customer engagement, all of which lead to higher conversion rates.",
                },
                {
                  q: "Does ViSenze AI support multi-language search?",
                  a: "Yes, ViSenze AI supports multi-language search, making it easier for businesses to cater to a global audience by providing localized recommendations and product suggestions.",
                },
                {
                  q: "How does ViSenze AI personalize recommendations?",
                  a: "ViSenze AI personalizes recommendations by analyzing user behavior, purchase history, and browsing patterns to deliver relevant product suggestions tailored to each customer.",
                },
                {
                  q: "What is the pricing model for ViSenze AI?",
                  a: "ViSenze AI offers a subscription-based pricing model, with plans tailored to small, medium, and large businesses. Pricing is based on factors like search queries and features.",
                },
                {
                  q: "Does ViSenze AI offer A/B testing?",
                  a: "Yes, ViSenze AI includes A/B testing tools to test the effectiveness of product recommendations, search results, and personalized features, optimizing the user experience.",
                },
                {
                  q: "Can ViSenze AI be used for fashion retailers?",
                  a: "Yes, ViSenze AI is particularly effective for fashion retailers, offering image-to-product search and personalized product recommendations based on style preferences and customer behavior.",
                },
                {
                  q: "Does ViSenze AI optimize ecommerce search?",
                  a: "Yes, ViSenze AI optimizes ecommerce search by offering relevant, real-time product recommendations and filtering results based on user preferences, improving the search experience.",
                },
                {
                  q: "How does ViSenze AI help with product categorization?",
                  a: "ViSenze AI automates product categorization and tagging, ensuring that products are grouped accurately and that they appear in relevant search results.",
                },
                {
                  q: "Can ViSenze AI handle large product catalogs?",
                  a: "Yes, ViSenze AI is designed to handle large-scale product catalogs, ensuring that products are quickly and accurately discovered, even in businesses with extensive inventories.",
                },
                {
                  q: "What are ViSenze AI’s key features?",
                  a: "Key features of ViSenze AI include visual search, personalized recommendations, real-time search optimization, product tagging, A/B testing, and analytics dashboards.",
                },
                {
                  q: "How does ViSenze AI improve product discoverability?",
                  a: "ViSenze AI improves product discoverability by providing smart search filters, real-time recommendations, and image recognition to help users find the products they are looking for.",
                },
                {
                  q: "How does ViSenze AI handle customer segmentation?",
                  a: "ViSenze AI uses machine learning to segment customers based on their behavior, preferences, and purchasing history, delivering personalized content and recommendations to each segment.",
                },
                {
                  q: "Can ViSenze AI be used for inventory management?",
                  a: "Yes, ViSenze AI integrates with your inventory management system, ensuring that product availability is reflected in search results and recommendations.",
                },
                {
                  q: "How does ViSenze AI improve the conversion rate?",
                  a: "By offering personalized recommendations, relevant search results, and enhanced user experience, ViSenze AI drives higher conversion rates by showing customers the products they are most likely to purchase.",
                },
                {
                  q: "How does ViSenze AI improve product relevance?",
                  a: "ViSenze AI continuously analyzes user behavior and search patterns, ensuring that only the most relevant products are shown to customers, increasing the likelihood of purchase.",
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
                src="https://www.testingcatalog.com/content/images/size/w2000/2024/06/screenshot-app.runwayml.com-2024.06.24-00_36_32--1-.png"
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src="https://www.techspot.com/articles-info/2720/images/2023-08-17-image.jpg"
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
                    Why Use ViSenze AI?
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
                      <strong>Increased Conversion Rates:</strong> By providing
                      personalized search results and image-based search,
                      ViSenze AI significantly boosts sales conversion by
                      showing customers the most relevant products.
                    </li>
                    <li className="mb-3">
                      <strong>Enhanced Customer Experience:</strong> ViSenze AI
                      helps users find products faster with visual search,
                      reducing frustration and improving customer satisfaction.
                    </li>
                    <li className="mb-3">
                      <strong>Seamless Integration:</strong> ViSenze AI
                      integrates easily with existing ecommerce platforms such
                      as Shopify, Magento, and WooCommerce, making it accessible
                      for all types of online retailers.
                    </li>
                    <li className="mb-3">
                      <strong>Scalable for All Businesses:</strong> Whether
                      you’re a small business or a global brand, ViSenze AI’s
                      scalable solutions ensure it can grow with your business
                      needs.
                    </li>
                    <li className="mb-3">
                      <strong>Real-Time Analytics:</strong> ViSenze AI provides
                      real-time insights into customer behavior, helping
                      businesses optimize their search and recommendation
                      algorithms.
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
                    <strong>AI-Powered Visual Search:</strong> ViSenze AI allows
                    users to search for products by image, making product
                    discovery more intuitive and enhancing user engagement.
                  </li>
                  <li className="mb-2">
                    <strong>Real-Time Product Recommendations:</strong> The
                    platform delivers personalized product suggestions based on
                    user behavior, improving the chances of a sale.
                  </li>
                  <li className="mb-2">
                    <strong>Automated Product Tagging:</strong> ViSenze AI
                    automates product tagging, making it easier to organize and
                    categorize products, ensuring they are discoverable through
                    search.
                  </li>
                  <li className="mb-2">
                    <strong>Cross-Platform Integration:</strong> ViSenze AI
                    integrates with major ecommerce platforms, apps, and custom
                    solutions, ensuring a seamless user experience across
                    devices.
                  </li>
                  <li className="mb-2">
                    <strong>Data-Driven Insights:</strong> ViSenze AI provides
                    businesses with valuable insights into customer preferences,
                    helping improve marketing strategies.
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
                    <strong>Pricing:</strong> While ViSenze AI offers powerful
                    features, its pricing may be a bit steep for small
                    businesses or startups with limited budgets.
                  </li>
                  <li className="mb-2">
                    <strong>Learning Curve for Beginners:</strong> New users may
                    need some time to fully understand the customization options
                    and analytics dashboard, especially for those with limited
                    technical expertise.
                  </li>
                  <li className="mb-2">
                    <strong>Dependency on High-Quality Images:</strong> ViSenze
                    AI’s image-to-product search feature requires high-quality
                    images for accurate results, which can be a challenge if
                    product images are inconsistent or of low quality.
                  </li>
                  <li className="mb-2">
                    <strong>Limited Features for Non-Retail Websites:</strong>{" "}
                    ViSenze AI is optimized for ecommerce and may not offer as
                    much value for non-retail websites or content-driven
                    platforms.
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
          <div className=" row d-flex align-items-center justify-content-between mb-1">
            {/* Left side (Text Section) */}
            <div
              style={{ flex: 1, paddingRight: "30px" }}
              className="col-6 col-md-12 "
            >
              <p className="text-primary">Write better, faster</p>
              <h1> ViSenze AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                ViSenze AI is an advanced AI-powered visual search and product
                recognition platform that is designed to help businesses improve
                product discovery and customer engagement on ecommerce websites
                and mobile apps. It provides personalized product
                recommendations and enables image-to-product search, allowing
                users to search for products by simply uploading an image.
              </p>
              <p>
                Leveraging machine learning and computer vision technologies,
                ViSenze AI transforms how customers interact with online
                retailers, making it easier for users to find products they
                love, thus improving conversion rates and sales.
              </p>

              <div className="mb-3">
                <span className="badge bg-primary me-2">Image Generation</span>
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5IyEpRsYY8JsmOlBNKKmWf5jlOBFs3Ustg&s"
                style={{ MaxWidth: "100%", height: "300px" }}
              />
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
                How ViSenze AI Works
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
                      Visual Search
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Users can upload a picture or screenshot, and ViSenze AI
                      will identify the product and show visually similar items
                      available in your store.
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
                      Product Recommendations
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Based on user behavior and preferences, ViSenze AI offers
                      personalized product recommendations.
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
                      Product Tagging
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Automates the process of tagging products with relevant
                      keywords, improving search results and product visibility.
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

          <div className="bg-primary text-center text-light rounded-4 p-5 mt-5">
            <h4 className="mb-3">Ready to get started with RunWayGen?</h4>
            <p className="mb-4">
              Join thousands of professionals already boosting their
              productivity!
            </p>
            <div>
              <button className="btn btn-light me-3">Try Now for Free</button>
              <button className="btn btn-outline-light">Schedule a Demo</button>
            </div>
            <small className="d-block mt-2">
              No credit card required. 14-day free trial available.
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViSenzeAI;
