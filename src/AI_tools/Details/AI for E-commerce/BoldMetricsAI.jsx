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
const BoldMetricsAI = () => {
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
              <h3 className="">Features of Bold Metrics AI</h3>
            </div>
            {[
              {
                icon: "📏",
                title: "Virtual Body Measurement",
                desc: "Generates precise body measurements from user input without the need for a measuring tape, enabling accurate fit prediction across apparel categories.",
              },
              {
                icon: "🧍",
                title: "3D Body Data Modeling",
                desc: "Creates 3D body models using AI to better understand customer fit preferences and match them with the best-fitting clothing items.",
              },
              {
                icon: "👕",
                title: "Smart Size Recommendations",
                desc: "Delivers real-time size and fit suggestions based on predicted body data, purchase history, and product-specific sizing standards.",
              },
              {
                icon: "📉",
                title: "Return Rate Reduction",
                desc: "Reduces size-related returns by ensuring customers choose the right fit, improving customer satisfaction and cutting operational costs.",
              },
              {
                icon: "🔗",
                title: "Ecommerce Platform Integration",
                desc: "Easily integrates with major ecommerce platforms, delivering seamless functionality within existing product pages and checkout flows.",
              },
              {
                icon: "📊",
                title: "Fit Data Analytics",
                desc: "Provides retailers with insights on sizing trends, customer preferences, and product fit performance to optimize inventory and design.",
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
                  q: "What is Bold Metrics AI?",
                  a: "Bold Metrics AI is an AI-powered platform designed for fashion retailers and e-commerce platforms, offering personalized size recommendations, fit predictions, and virtual fitting room experiences for customers.",
                },
                {
                  q: "How does Bold Metrics AI work?",
                  a: "Bold Metrics AI uses machine learning and data analytics to analyze customer data (such as size, body measurements, shopping history, and preferences) and provide personalized recommendations and size predictions.",
                },
                {
                  q: "What are the main features of Bold Metrics AI?",
                  a: "Key features include size recommendations, virtual fitting room, product discovery, personalized shopping experiences, real-time recommendations, and customer insights.",
                },
                {
                  q: "What pricing model does Bold Metrics AI use?",
                  a: "Bold Metrics AI offers custom pricing tailored to each retailer’s needs, based on the size of the business, product catalog, and the features required.",
                },
                {
                  q: "How can I get a free trial of Bold Metrics AI?",
                  a: "To access a free trial, contact Bold Metrics AI directly via their website to inquire about trial availability and specific terms.",
                },
                {
                  q: "Does Bold Metrics AI support small businesses?",
                  a: "Yes, Bold Metrics AI can support small businesses, although the cost may vary depending on the e-commerce platform and features needed.",
                },
                {
                  q: "How easy is it to integrate Bold Metrics AI with existing platforms?",
                  a: "Bold Metrics AI integrates easily with major e-commerce platforms like Shopify, Magento, and WooCommerce via API, but integration complexity depends on the existing systems.",
                },
                {
                  q: "Does Bold Metrics AI offer a virtual fitting room feature?",
                  a: "Yes, Bold Metrics AI provides a virtual fitting room feature, allowing customers to try on clothes digitally using their body measurements and shopping history.",
                },
                {
                  q: "How does Bold Metrics AI reduce returns?",
                  a: "By providing accurate size predictions and virtual try-ons, customers are more likely to purchase items that fit, significantly reducing returns due to size issues.",
                },
                {
                  q: "How does Bold Metrics AI improve conversion rates?",
                  a: "Bold Metrics AI improves conversion rates by offering personalized recommendations and real-time product suggestions tailored to customers’ preferences, making it easier for customers to find products they are likely to purchase.",
                },
                {
                  q: "How does Bold Metrics AI help retailers?",
                  a: "Bold Metrics AI helps retailers by providing size recommendations, improving product discoverability, and creating a personalized shopping experience that leads to higher customer satisfaction and sales.",
                },
                {
                  q: "Can Bold Metrics AI work on mobile apps?",
                  a: "Yes, Bold Metrics AI can be integrated with mobile apps, enabling customers to enjoy personalized recommendations, size suggestions, and virtual fitting room features on their mobile devices.",
                },
                {
                  q: "How accurate is Bold Metrics AI’s size prediction?",
                  a: "Bold Metrics AI’s size prediction is highly accurate, using machine learning and customer data such as body measurements, shopping history, and preferences to provide the best fit.",
                },
                {
                  q: "Can Bold Metrics AI predict sizes for all body types?",
                  a: "Yes, Bold Metrics AI is designed to accommodate various body types and personal preferences, providing size recommendations that are specific to each customer.",
                },
                {
                  q: "Does Bold Metrics AI support multiple languages?",
                  a: "Yes, Bold Metrics AI can be customized to support multi-language searches and recommendations, which is ideal for global businesses.",
                },
                {
                  q: "How does Bold Metrics AI help with inventory management?",
                  a: "Bold Metrics AI provides insights into popular products, size availability, and customer preferences, which helps retailers optimize their inventory management and avoid overstocking or stockouts.",
                },
                {
                  q: "Can Bold Metrics AI categorize products?",
                  a: "Yes, Bold Metrics AI can categorize products based on customer preferences, style, and size, improving product discoverability and searchability.",
                },
                {
                  q: "How does Bold Metrics AI support fashion recommendations?",
                  a: "Bold Metrics AI provides personalized fashion recommendations based on user preferences, size predictions, and past purchases, ensuring customers find the best products that match their style.",
                },
                {
                  q: "How does Bold Metrics AI help with cross-selling and upselling?",
                  a: "Bold Metrics AI identifies opportunities for cross-selling and upselling by recommending complementary products based on the customer’s shopping behavior and product preferences.",
                },
                {
                  q: "Can Bold Metrics AI integrate with other marketing tools?",
                  a: "Yes, Bold Metrics AI can integrate with a variety of marketing tools, enabling retailers to personalize email campaigns, social media ads, and promotions based on customer data.",
                },
                {
                  q: "How does Bold Metrics AI personalize the shopping experience?",
                  a: "Bold Metrics AI personalizes the shopping experience by providing size recommendations, personalized product suggestions, and real-time updates based on customer behavior, preferences, and browsing history.",
                },
                {
                  q: "Can Bold Metrics AI improve the site search function?",
                  a: "Yes, Bold Metrics AI optimizes site search by offering dynamic product suggestions and personalized filters, making it easier for customers to find products that match their needs.",
                },
                {
                  q: "How does Bold Metrics AI use machine learning?",
                  a: "Bold Metrics AI uses machine learning to continuously improve its size predictions, product suggestions, and customer insights, ensuring the platform gets more accurate as it gathers more data.",
                },
                {
                  q: "Does Bold Metrics AI offer a customer segmentation tool?",
                  a: "Yes, Bold Metrics AI offers customer segmentation based on shopping behavior, size preferences, and purchase history, allowing retailers to create targeted marketing campaigns.",
                },
                {
                  q: "How does Bold Metrics AI enhance customer engagement?",
                  a: "By offering personalized shopping experiences, size recommendations, and virtual try-ons, Bold Metrics AI improves customer engagement, making shopping more interactive and satisfying.",
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
                    Why Use Bold Metrics AI?
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
                      <strong>
                        Personalized Fit and Size Recommendations:
                      </strong>{" "}
                      Bold Metrics AI uses machine learning to deliver accurate
                      size and fit suggestions tailored to each shopper’s body
                      measurements and preferences.
                    </li>
                    <li className="mb-3">
                      <strong>Virtual Fitting Room Experience:</strong>{" "}
                      Customers can digitally try on clothing using their
                      profile data, improving confidence in fit and reducing the
                      likelihood of returns.
                    </li>
                    <li className="mb-3">
                      <strong>Seamless Platform Integration:</strong> Bold
                      Metrics integrates with popular e-commerce platforms like
                      Shopify, Magento, and WooCommerce, making it easy for
                      retailers to adopt the technology.
                    </li>
                    <li className="mb-3">
                      <strong>
                        Reduced Returns and Improved Inventory Planning:
                      </strong>{" "}
                      By ensuring customers get the right fit the first time,
                      Bold Metrics helps reduce size-related returns and
                      provides insights for smarter inventory management.
                    </li>
                    <li className="mb-3">
                      <strong>
                        Enhanced Customer Engagement and Conversion:
                      </strong>{" "}
                      Personalized shopping experiences, real-time
                      recommendations, and accurate sizing lead to greater
                      customer satisfaction and increased sales conversion
                      rates.
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
                    <strong>Accurate Size Predictions:</strong> Bold Metrics AI
                    delivers precise fit recommendations by analyzing user body
                    data, helping customers find their perfect size with
                    confidence.
                  </li>
                  <li className="mb-2">
                    <strong>Virtual Fitting Room:</strong> Offers an interactive
                    virtual try-on experience that enhances online shopping and
                    reduces uncertainty about fit.
                  </li>
                  <li className="mb-2">
                    <strong>Seamless Platform Integration:</strong> Integrates
                    smoothly with leading ecommerce platforms like Shopify,
                    Magento, and WooCommerce through easy-to-use APIs.
                  </li>
                  <li className="mb-2">
                    <strong>Reduced Returns:</strong> By helping customers get
                    the right fit, Bold Metrics significantly decreases return
                    rates, saving retailers time and costs.
                  </li>
                  <li className="mb-2">
                    <strong>Improved Customer Experience:</strong> Personalized
                    sizing and fit insights lead to higher satisfaction,
                    increased conversion rates, and stronger brand loyalty.
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
                    <strong>Initial Setup Complexity:</strong> Implementing Bold
                    Metrics may require integration of sizing data and technical
                    setup, which can be challenging without technical support.
                  </li>
                  <li className="mb-2">
                    <strong>Custom Pricing Model:</strong> The lack of
                    transparent, fixed pricing can make budgeting difficult for
                    smaller retailers or startups.
                  </li>
                  <li className="mb-2">
                    <strong>Data Dependency:</strong> The accuracy of
                    recommendations depends heavily on quality input data from
                    users, which may vary or be difficult to obtain in some
                    cases.
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
              <h1>Bold Metrics AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Bold Metrics AI is an innovative AI-powered platform designed
                for fashion retailers and e-commerce businesses. It uses machine
                learning to provide personalized size recommendations, virtual
                fitting rooms, and product suggestions tailored to individual
                customers. The platform is specifically designed to improve the
                shopping experience, reduce returns, and enhance customer
                satisfaction by providing real-time, personalized fashion
                recommendations.
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
                How Does Bold Metrics AI Works?
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
                      Virtual Sizing Engine
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Bold Metrics uses AI and body data to generate precise
                      sizing recommendations without the need for physical
                      measurements.
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
                      Body Data Collection
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Users answer a few questions or sync with purchase
                      history; Bold Metrics then predicts accurate body
                      measurements using AI algorithms.
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
                      Fit-Driven Product Matching
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      The platform recommends the best-fitting products,
                      reducing returns and increasing customer satisfaction and
                      confidence in sizing.
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

export default BoldMetricsAI;
