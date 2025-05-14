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
const FindMineAI = () => {
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
              <h3 className="">Features of FindMine AI </h3>
            </div>
            {[
              {
                icon: "🖼️",
                title: "Visual Search",
                desc: "FindMine AI enables visual search by allowing users to upload images and find visually similar products from the catalog, enhancing product discovery.",
              },
              {
                icon: "🤖",
                title: "Personalized Product Recommendations",
                desc: "FindMine AI uses machine learning to analyze customer behavior and shopping history, delivering personalized product recommendations in real-time.",
              },
              {
                icon: "📊",
                title: "Behavioral-Based Personalization",
                desc: "By analyzing customer browsing and purchase patterns, FindMine AI tailors product suggestions to individual preferences, creating a more personalized shopping experience.",
              },
              {
                icon: "📈",
                title: "Conversion Rate Optimization",
                desc: "FindMine AI boosts conversion rates by presenting the most relevant products at the right time, optimizing product placement and improving the overall shopping experience.",
              },
              {
                icon: "🌐",
                title: "Multi-Platform Compatibility",
                desc: "FindMine AI integrates seamlessly with web and mobile platforms, providing consistent and personalized shopping experiences across all devices.",
              },
              {
                icon: "🔍",
                title: "Smart Search Filters",
                desc: "FindMine AI enhances site search by offering dynamic, personalized filters that improve product discoverability and streamline the customer journey.",
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
                  q: "What is FindMine AI?",
                  a: "FindMine AI is an AI-powered platform that enhances e-commerce by offering personalized product recommendations, visual search, and product discovery tools for online retailers.",
                },
                {
                  q: "How does FindMine AI work?",
                  a: "FindMine AI uses machine learning and image recognition to analyze customer data and product images to provide personalized shopping experiences, improving conversion rates and customer satisfaction.",
                },
                {
                  q: "What features does FindMine AI offer?",
                  a: "FindMine AI offers personalized product recommendations, visual search, dynamic product suggestions, product tagging, and AI-powered search filters.",
                },
                {
                  q: "What is the pricing model for FindMine AI?",
                  a: "FindMine AI uses a customized pricing model, dependent on business size, product catalog, and features needed. Contact FindMine for a quote.",
                },
                {
                  q: "Does FindMine AI offer a free trial?",
                  a: "Yes, FindMine AI offers a free trial for businesses to explore its features like personalized recommendations and visual search.",
                },
                {
                  q: "How does FindMine AI benefit e-commerce?",
                  a: "FindMine AI increases sales conversion, improves customer engagement, and provides personalized shopping experiences, which helps businesses grow.",
                },
                {
                  q: "Is FindMine AI suitable for fashion retailers?",
                  a: "Yes, FindMine AI is perfect for fashion retailers as it provides personalized fashion recommendations, outfit suggestions, and visual product search.",
                },
                {
                  q: "How does FindMine AI improve product recommendations?",
                  a: "FindMine AI uses machine learning to analyze user behavior, search data, and product preferences, offering relevant product recommendations.",
                },
                {
                  q: "Can FindMine AI integrate with existing e-commerce platforms?",
                  a: "Yes, FindMine AI integrates seamlessly with e-commerce platforms like Shopify, Magento, and WooCommerce.",
                },
                {
                  q: "How does FindMine AI handle product discovery?",
                  a: "FindMine AI enhances product discovery by providing dynamic suggestions and personalized recommendations based on customer behavior.",
                },
                {
                  q: "How does FindMine AI improve site search?",
                  a: "FindMine AI optimizes site search with smart search filters, personalized results, and visual search, making it easier for customers to find what they need.",
                },
                {
                  q: "Does FindMine AI use machine learning?",
                  a: "Yes, FindMine AI leverages machine learning to analyze user data and predict customer preferences, ensuring the most relevant products are recommended.",
                },
                {
                  q: "Can FindMine AI be used on mobile apps?",
                  a: "Yes, FindMine AI can be integrated with mobile apps, providing personalized recommendations and visual search functionality on mobile devices.",
                },
                {
                  q: "What are the main benefits of using FindMine AI?",
                  a: "The main benefits include increased sales conversion, improved customer experience, personalized recommendations, and easy integration with e-commerce platforms.",
                },
                {
                  q: "How does FindMine AI improve customer experience?",
                  a: "FindMine AI personalizes the shopping experience by offering relevant product recommendations, personalized shopping journeys, and real-time product matching.",
                },
                {
                  q: "How does FindMine AI work for B2B businesses?",
                  a: "FindMine AI can be adapted for B2B businesses by offering smart product recommendations and product discovery for bulk buyers and suppliers.",
                },
                {
                  q: "Can FindMine AI be used for luxury fashion e-commerce?",
                  a: "Yes, FindMine AI is well-suited for luxury fashion brands as it offers personalized recommendations, style suggestions, and visual search tailored to high-end products.",
                },
                {
                  q: "Does FindMine AI offer a recommendation engine?",
                  a: "Yes, FindMine AI has a product recommendation engine that suggests relevant products based on customer data and behavior.",
                },
                {
                  q: "How does FindMine AI handle real-time recommendations?",
                  a: "FindMine AI analyzes user interactions in real-time, offering instant product recommendations based on current behavior and browsing history.",
                },
                {
                  q: "What is the integration process for FindMine AI?",
                  a: "FindMine AI offers easy integration with e-commerce platforms via API or SDK, allowing businesses to add AI-powered recommendations to their websites or mobile apps.",
                },
                {
                  q: "Does FindMine AI provide customer insights?",
                  a: "Yes, FindMine AI provides customer insights by analyzing user behavior and shopping patterns, which helps businesses improve their marketing and sales strategies.",
                },
                {
                  q: "How does FindMine AI help with product tagging?",
                  a: "FindMine AI automatically tags and categorizes products using AI-powered image recognition, ensuring they are properly indexed for search optimization.",
                },
                {
                  q: "Can FindMine AI be used for content-based product recommendations?",
                  a: "Yes, FindMine AI analyzes product descriptions, images, and metadata to recommend products based on content and similarity.",
                },
                {
                  q: "How does FindMine AI work with product ranking?",
                  a: "FindMine AI adjusts product rankings based on user preferences, search activity, and product popularity, ensuring the most relevant items are highlighted.",
                },
                {
                  q: "How does FindMine AI optimize sales conversion?",
                  a: "By offering personalized recommendations, real-time product suggestions, and smart product discovery, FindMine AI optimizes the sales funnel and boosts conversion rates.",
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
                    Why Use FindMine AI?
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
                      <strong>Personalized Recommendations:</strong> FindMine AI
                      enhances the shopping experience by delivering
                      personalized product recommendations based on customer
                      behavior, past interactions, and preferences, helping
                      customers discover products they are more likely to
                      purchase.
                    </li>
                    <li className="mb-3">
                      <strong>Improved Product Discovery:</strong> By offering
                      visual search and dynamic product suggestions, FindMine AI
                      helps customers easily find relevant products, improving
                      product discoverability and overall engagement on the
                      website.
                    </li>
                    <li className="mb-3">
                      <strong>Seamless Integration:</strong> FindMine AI
                      integrates easily with popular ecommerce platforms like
                      Shopify, Magento, and WooCommerce, allowing businesses to
                      seamlessly add AI-powered recommendations and features to
                      their online stores.
                    </li>
                    <li className="mb-3">
                      <strong>Enhanced Customer Experience:</strong> With
                      personalized shopping journeys, smart search filters, and
                      real-time product recommendations, FindMine AI ensures a
                      more engaging and relevant experience for customers,
                      increasing satisfaction and loyalty.
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
                    <strong>Personalized Recommendations:</strong> Tailors the
                    shopping experience based on customer data, increasing
                    conversion rates.
                  </li>
                  <li className="mb-2">
                    <strong>Automated Product Tagging:</strong> Reduces manual
                    work by automating product categorization and metadata
                    tagging.
                  </li>
                  <li className="mb-2">
                    <strong>Seamless Integration:</strong> Easily integrates
                    with popular e-commerce platforms like Shopify, Magento, and
                    WooCommerce.
                  </li>
                  <li className="mb-2">
                    <strong>AI-Powered Personalization:</strong> Uses machine
                    learning to provide accurate product suggestions, improving
                    the customer journey.
                  </li>
                  <li className="mb-2">
                    <strong>Multi-Channel Personalization:</strong> Consistent
                    personalized shopping experience across mobile apps,
                    websites, and social platforms.
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
                    <strong>Pricing:</strong> Pricing may be high for smaller
                    businesses, depending on the scale of usage.
                  </li>
                  <li className="mb-2">
                    <strong>Customization Limitations:</strong> While FindMine
                    AI offers personalized experiences, some businesses may need
                    further customization for unique use cases.
                  </li>
                  <li className="mb-2">
                    <strong>Learning Curve:</strong> The setup process for
                    machine learning features may require technical knowledge or
                    support from FindMine’s team.
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
              <h1>FindMine AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                FindMine AI is an advanced AI-powered platform designed to
                enhance the e-commerce experience through personalized product
                recommendations, product discovery, and smart search tools. It
                leverages machine learning and visual recognition to help
                businesses improve their customer experience, increase sales
                conversion, and provide a personalized shopping experience for
                users.
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
                How FindMine AI Works
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
                      Personalized Product Recommendations
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      FindMine AI analyzes customer behavior and recommends
                      products based on preferences and shopping history.
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
                      Visual Search
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Customers can upload images, and FindMine AI identifies
                      similar products from the catalog.
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
                      Dynamic Search Filters
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      It offers smart filters and personalized search results to
                      help customers easily find the right products.
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

export default FindMineAI;
