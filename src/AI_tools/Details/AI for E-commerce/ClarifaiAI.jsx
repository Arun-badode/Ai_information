import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import clarifai from "../../../../public/assets/Img/AI for E-commerce/clarifai.png"
import clarifai1 from "../../../../public/assets/Img/AI for E-commerce/clarifai1.png"
import clarifai2 from "../../../../public/assets/Img/AI for E-commerce/clarifai2.png"

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
const ClarifaiAI = () => {
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
              <h3 className="">Features of Clarifai E-commerce AI</h3>
            </div>
            {[
              {
                icon: "🧠",
                title: "AI-Powered Image Recognition",
                desc: "Clarifai uses advanced computer vision to automatically recognize and classify products in images, enabling highly accurate visual understanding for ecommerce applications.",
              },
              {
                icon: "🏷️",
                title: "Automated Product Tagging",
                desc: "Automatically tags product images with relevant attributes such as color, category, material, and style, saving time and improving product catalog management.",
              },
              {
                icon: "🔎",
                title: "Visual Similarity Search",
                desc: "Allows customers to search for visually similar products by uploading images, making it easier to discover items that match their preferences or inspiration.",
              },
              {
                icon: "📦",
                title: "Smart Inventory Classification",
                desc: "Classifies and organizes large product inventories based on visual and contextual data, helping streamline ecommerce operations and improve discoverability.",
              },
              {
                icon: "📱",
                title: "Omnichannel Integration",
                desc: "Integrates across web, mobile, and social commerce platforms, delivering consistent AI-driven personalization and visual search capabilities.",
              },
              {
                icon: "⚙️",
                title: "Custom Model Training",
                desc: "Allows businesses to train custom AI models tailored to their specific product catalog and branding needs, ensuring accurate and brand-aligned results.",
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
                  q: "What is Clarifai E-commerce AI?",
                  a: "Clarifai E-commerce AI is a platform that leverages AI and machine learning to optimize e-commerce by offering features like visual search, product recommendations, and image recognition to enhance customer experience and improve product discovery.",
                },
                {
                  q: "How does Clarifai E-commerce AI work?",
                  a: "Clarifai AI analyzes product images, customer behavior, and search history to provide personalized recommendations, visual search capabilities, and optimize product discoverability.",
                },
                {
                  q: "What are the features of Clarifai E-commerce AI?",
                  a: "Key features include visual search, AI-powered product recognition, personalized product recommendations, smart search filters, image-to-product search, and dynamic product feeds.",
                },
                {
                  q: "How does Clarifai AI improve product recognition?",
                  a: "Clarifai AI uses advanced image recognition to automatically tag and categorize products based on visual attributes like color, texture, and pattern, improving product discoverability.",
                },
                {
                  q: "How does Clarifai AI help with visual search?",
                  a: "Clarifai AI allows users to upload images and find similar products within the catalog, enhancing search accuracy and improving the customer experience.",
                },
                {
                  q: "Does Clarifai E-commerce AI offer personalized recommendations?",
                  a: "Yes, Clarifai uses user behavior data such as search patterns and purchase history to deliver personalized product recommendations that suit individual preferences.",
                },
                {
                  q: "Can Clarifai AI be integrated with existing e-commerce platforms?",
                  a: "Yes, Clarifai integrates seamlessly with Shopify, Magento, WooCommerce, and other e-commerce platforms via API.",
                },
                {
                  q: "How does Clarifai AI enhance customer experience?",
                  a: "Clarifai provides relevant recommendations, visual search, and personalized product discovery, improving the overall shopping experience for customers.",
                },
                {
                  q: "What is the pricing model for Clarifai E-commerce AI?",
                  a: "Clarifai offers scalable pricing based on usage volume, such as the number of API calls and the size of the product catalog. Custom pricing is available for enterprise-level solutions.",
                },
                {
                  q: "Does Clarifai offer a free trial?",
                  a: "Yes, Clarifai offers a free trial for users to explore its features, such as visual search and personalized recommendations, before committing to a paid plan.",
                },
                {
                  q: "Can I sign up for Clarifai E-commerce AI?",
                  a: "Yes, businesses can sign up for Clarifai E-commerce AI on their official website, providing details about their business and the features they need.",
                },
                {
                  q: "How do I log in to Clarifai AI?",
                  a: "Visit the Clarifai login page, enter your credentials, and access the dashboard to manage your e-commerce AI tools.",
                },
                {
                  q: "Can Clarifai be used on mobile apps?",
                  a: "Yes, Clarifai integrates with mobile apps, allowing users to experience visual search and personalized recommendations on their smartphones and tablets.",
                },
                {
                  q: "How does Clarifai AI use machine learning?",
                  a: "Clarifai leverages machine learning to analyze user behavior, product data, and search patterns to provide personalized product recommendations and visual search functionality.",
                },
                {
                  q: "Can Clarifai help with A/B testing?",
                  a: "Yes, Clarifai provides A/B testing tools to test different variations of product recommendations and search functionality, helping businesses optimize for the best customer experience.",
                },
                {
                  q: "How does Clarifai enhance product discovery?",
                  a: "Clarifai enhances product discovery by offering visual search, personalized recommendations, and dynamic search filters, helping customers quickly find relevant products.",
                },
                {
                  q: "What are the alternatives to Clarifai E-commerce AI?",
                  a: "Alternatives include Syte AI, Vue.ai, Style AI, and Google Cloud Vision AI, each offering unique AI-driven solutions for visual search and personalized recommendations.",
                },
                {
                  q: "How does Clarifai AI improve sales conversion?",
                  a: "Clarifai increases sales conversion by delivering relevant product suggestions, optimizing product discovery, and improving the search experience.",
                },
                {
                  q: "Does Clarifai provide analytics tools?",
                  a: "Yes, Clarifai offers an analytics dashboard that tracks performance, user engagement, and the effectiveness of product recommendations and search optimization.",
                },
                {
                  q: "How does Clarifai use AI for cross-selling and upselling?",
                  a: "Clarifai suggests complementary products and higher-value items based on customer preferences and previous purchases, boosting cross-selling and upselling opportunities.",
                },
                {
                  q: "How does Clarifai handle product catalog optimization?",
                  a: "Clarifai automates catalog management by categorizing products using image recognition and providing product metadata enrichment, ensuring products are displayed correctly.",
                },
                {
                  q: "Can Clarifai AI improve search relevancy?",
                  a: "Yes, Clarifai enhances search relevancy by analyzing user behavior and tailoring search results to match customer intent and preferences.",
                },
                {
                  q: "Can I use Clarifai AI for fashion retail?",
                  a: "Yes, Clarifai AI is ideal for fashion retailers, offering visual search and outfit recommendations tailored to customers' fashion preferences.",
                },
                {
                  q: "How does Clarifai AI improve site search?",
                  a: "Clarifai optimizes site search by offering personalized results, dynamic search filters, and relevant recommendations, ensuring users find products that meet their needs.",
                },
                {
                  q: "How does Clarifai AI support product suggestions based on images?",
                  a: "Clarifai uses image recognition to identify products in user-uploaded images, matching them with similar products in the catalog for a better search experience.",
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
                src={clarifai1}
                alt="clarifai screenshot"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={clarifai2}
                alt="clarifai screenshot"
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
                    Why Use Clarifai E-commerce AI?
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
                      <strong>Personalized Product Discovery:</strong> Clarifai
                      AI enhances the shopping experience by using machine
                      learning to deliver personalized product recommendations
                      based on customer behavior and preferences.
                    </li>
                    <li className="mb-3">
                      <strong>Visual Search Capabilities:</strong> With advanced
                      image recognition, Clarifai allows users to search for
                      products by uploading images, making it easier for
                      shoppers to find exactly what they're looking for.
                    </li>
                    <li className="mb-3">
                      <strong>Seamless Platform Integration:</strong> Clarifai
                      integrates easily with popular ecommerce platforms like
                      Shopify, Magento, and WooCommerce, offering retailers a
                      flexible and scalable AI solution.
                    </li>
                    <li className="mb-3">
                      <strong>Optimized Catalog Management:</strong> Clarifai
                      automatically tags and categorizes products using visual
                      attributes, improving product discoverability and
                      streamlining catalog operations.
                    </li>
                    <li className="mb-3">
                      <strong>Increased Sales and Conversions:</strong> By
                      enhancing product discovery and delivering relevant
                      suggestions, Clarifai helps boost engagement and drive
                      higher conversion rates for ecommerce businesses.
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
                    <strong>Advanced Image Recognition:</strong> Clarifai offers
                    industry-leading image recognition, enabling automatic
                    product tagging and accurate visual product matching.
                  </li>
                  <li className="mb-2">
                    <strong>Personalized Product Recommendations:</strong> Uses
                    machine learning to deliver customized suggestions based on
                    browsing behavior, purchase history, and search patterns.
                  </li>
                  <li className="mb-2">
                    <strong>Seamless Platform Integration:</strong> Easily
                    connects with major ecommerce platforms such as Shopify,
                    Magento, and WooCommerce via APIs for fast deployment.
                  </li>
                  <li className="mb-2">
                    <strong>Scalable AI Infrastructure:</strong> Designed to
                    handle high-volume catalogs and traffic, making it suitable
                    for both startups and large-scale retailers.
                  </li>
                  <li className="mb-2">
                    <strong>Visual Search Capabilities:</strong> Allows users to
                    search products by image, improving product discovery and
                    enhancing customer experience.
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
                    <strong>Complex Integration:</strong> Implementation may
                    require technical expertise, especially for businesses
                    without in-house development resources.
                  </li>
                  <li className="mb-2">
                    <strong>Cost for High-Volume Use:</strong> While scalable,
                    pricing can increase significantly with higher API usage or
                    large product catalogs, which may impact ROI for smaller
                    businesses.
                  </li>
                  <li className="mb-2">
                    <strong>Limited Customization:</strong> Pre-built models may
                    not always align with unique business requirements or
                    specialized product categories without additional training.
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
        <div className="container-fluid px-0 px-md-3">
  <div className="row align-items-center g-4 g-lg-5 mb-4">
    {/* Left side (Text Section) */}
    <div className="col-lg-6 col-12 order-lg-1 order-2 pe-lg-5">
      <p className="text-primary fs-5 mb-2">Write better, faster</p>
      <h1 className="display-5 mb-3">Clarifai E-commerce AI</h1>
      <div className="text-warning mb-3 fs-4">⭐⭐⭐⭐⭐</div>
      <p className="lead mb-4">
        Clarifai E-commerce AI is a comprehensive AI-powered platform
        designed to help e-commerce businesses leverage machine learning
        and computer vision to improve product discoverability, enhance
        search functionality, and offer personalized shopping
        experiences. By using features like visual search, product
        recommendations, and AI-driven analytics, Clarifai aims to
        provide businesses with the tools needed to optimize their
        online stores.
      </p>

      <a
                                 href=" https://www.clarifai.com/"
                                 rel="noopener noreferrer"
                                 className="btn btn-primary me-2"
                               >
                                 Explore Tool
                               </a>

     
    </div>

    {/* Right side (Image Section) */}
    <div className="col-lg-6 col-12 order-lg-2 order-1">
      <div className="ratio ratio-16x9">
        <img
          src={clarifai}
          alt="Clarifai E-commerce AI"
          className="img-fluid rounded-3 shadow-sm object-fit-cover"
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
                How Does Clarifai E-commerce AI Works?
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
                      Visual Recognition
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Clarifai uses computer vision to detect and understand
                      product images, enabling accurate tagging, classification,
                      and visual search.
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
                      AI-Powered Tagging
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Automatically tags products with relevant attributes such
                      as color, style, material, and use-case to improve search
                      and recommendations.
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
                      Smart Product Matching
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Clarifai recommends visually and contextually similar
                      products to users, boosting engagement and improving
                      conversion rates.
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

export default ClarifaiAI;
