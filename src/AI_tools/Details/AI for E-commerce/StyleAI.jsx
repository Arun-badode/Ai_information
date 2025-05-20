import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import style from '../../../../public/assets/Img/AI for E-commerce/style.png'
import style1 from '../../../../public/assets/Img/AI for E-commerce/style1.png'
import style2 from '../../../../public/assets/Img/AI for E-commerce/style2.png'
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
const StyleAI = () => {
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
              <h3 className="">Features of Style AI</h3>
            </div>
            {[
              {
                icon: "🖼️",
                title: "Visual Search",
                desc: "Style AI allows users to upload images to find visually similar fashion products, enhancing product discovery and helping customers find items that match their style.",
              },
              {
                icon: "🤖",
                title: "Personalized Styling",
                desc: "Style AI uses machine learning to offer personalized styling suggestions based on individual preferences, past shopping behavior, and current fashion trends.",
              },
              {
                icon: "📊",
                title: "Outfit Recommendations",
                desc: "By analyzing customer preferences and trends, Style AI provides curated outfit suggestions, allowing customers to easily create complete looks from various products.",
              },
              {
                icon: "📈",
                title: "Engagement Optimization",
                desc: "Style AI increases user interaction by offering personalized fashion feeds, boosting time spent on the site and contributing to higher conversion rates.",
              },
              {
                icon: "🌐",
                title: "Cross-Platform Compatibility",
                desc: "Style AI seamlessly integrates with both web and mobile platforms, ensuring a consistent and personalized shopping experience across all devices.",
              },
              {
                icon: "🔍",
                title: "Smart Search Filters",
                desc: "Style AI improves the search experience by providing dynamic, personalized search filters tailored to each user's preferences and fashion choices.",
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
                  q: "What is Style AI?",
                  a: "Style AI is an AI-powered platform that uses machine learning and computer vision to provide personalized styling recommendations and enhance fashion search for online shoppers and retailers.",
                },
                {
                  q: "How does Style AI work?",
                  a: "Style AI analyzes user behavior and product images, offering personalized recommendations, outfit suggestions, and visual search capabilities for ecommerce websites and mobile apps.",
                },
                {
                  q: "What are the features of Style AI?",
                  a: "Style AI includes visual search, personalized recommendations, outfit suggestions, AI-powered styling, and smart search filters that improve the customer shopping experience.",
                },
                {
                  q: "Is there a free trial for Style AI?",
                  a: "Yes, Style AI offers a free trial for businesses to explore its features, including product recommendations and visual search, before committing to a paid plan.",
                },
                {
                  q: "How do I sign up for Style AI?",
                  a: "To sign up, visit the official Style AI website, register your business details, and select a plan that fits your needs.",
                },
                {
                  q: "How do I log in to Style AI?",
                  a: "To log in, go to the login page on the Style AI website, enter your credentials, and access your dashboard.",
                },
                {
                  q: "How does Style AI improve the customer experience?",
                  a: "Style AI enhances customer experience by offering personalized product recommendations, outfit suggestions, and a seamless shopping experience, ensuring customers find what they need quickly.",
                },
                {
                  q: "Can Style AI be integrated with ecommerce platforms?",
                  a: "Yes, Style AI integrates with Shopify, Magento, WooCommerce, and other ecommerce platforms, enhancing the search and recommendation functionality.",
                },
                {
                  q: "Does Style AI provide product tagging and categorization?",
                  a: "Yes, Style AI automates product tagging and categorization, ensuring that products are correctly tagged and visible in search results.",
                },
                {
                  q: "How does Style AI help fashion retailers?",
                  a: "Style AI helps fashion retailers by providing visual search, personalized recommendations, and outfit suggestions, making it easier for customers to discover and purchase fashion products.",
                },
                {
                  q: "Does Style AI support mobile apps?",
                  a: "Yes, Style AI is fully optimized for mobile apps, providing visual search and personalized recommendations for a seamless shopping experience on smartphones and tablets.",
                },
                {
                  q: "Can Style AI recommend outfits?",
                  a: "Yes, Style AI provides outfit recommendations based on user preferences, body type, and current fashion trends.",
                },
                {
                  q: "How does Style AI handle visual search?",
                  a: "Style AI allows customers to upload an image and find similar products in your catalog using image recognition and visual search technology.",
                },
                {
                  q: "Is Style AI suitable for luxury fashion brands?",
                  a: "Yes, Style AI is ideal for luxury brands, offering personalized fashion recommendations, outfit suggestions, and visual search for high-end products.",
                },
                {
                  q: "Can Style AI be used for B2C ecommerce?",
                  a: "Yes, Style AI is designed for B2C ecommerce, offering personalized shopping experiences and fashion recommendations for consumers.",
                },
                {
                  q: "What is the pricing for Style AI?",
                  a: "Style AI uses a subscription-based pricing model, with different plans based on features like visual search, recommendations, and the volume of search queries.",
                },
                {
                  q: "How does Style AI handle product discovery?",
                  a: "Style AI improves product discovery by offering relevant recommendations based on customer behavior and preferences, making it easier for users to find what they’re looking for.",
                },
                {
                  q: "How does Style AI improve sales conversion rates?",
                  a: "By delivering personalized recommendations, outfit suggestions, and improving search relevancy, Style AI increases sales conversions and customer engagement.",
                },
                {
                  q: "Does Style AI offer analytics and reporting?",
                  a: "Yes, Style AI offers an analytics dashboard that provides insights into user behavior, search performance, and recommendation effectiveness.",
                },
                {
                  q: "How does Style AI use machine learning?",
                  a: "Style AI uses machine learning to analyze user preferences, browsing behavior, and purchase history, enabling it to make personalized product recommendations.",
                },
                {
                  q: "How does Style AI help with customer retention?",
                  a: "By providing personalized recommendations, outfit suggestions, and smart search filters, Style AI encourages customers to return to your site for future purchases, boosting customer retention.",
                },
                {
                  q: "How does Style AI improve site search?",
                  a: "Style AI enhances site search by offering personalized results, dynamic search filters, and AI-powered product suggestions, improving the overall search experience.",
                },
                {
                  q: "Does Style AI support cross-selling and upselling?",
                  a: "Yes, Style AI supports cross-selling and upselling by recommending complementary products and higher-value items based on customer behavior.",
                },
                {
                  q: "How does Style AI handle product categorization?",
                  a: "Style AI automates product categorization based on product attributes and customer preferences, ensuring that products are placed in relevant categories for easy discovery.",
                },
                {
                  q: "Can Style AI help with fashion trend prediction?",
                  a: "Yes, Style AI can analyze user behavior and fashion trends to predict what styles are likely to become popular, allowing retailers to stay ahead of the trends.",
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
                src={style1}
                alt="style screenshot"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={style2}
                alt="style screenshot"
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
                    Why Use Style AI?
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
                      <strong>Personalization at Scale:</strong> Style AI offers
                      personalized styling and product suggestions, improving
                      the user experience by showing customers exactly what they
                      want to see based on their preferences and search history.
                    </li>
                    <li className="mb-3">
                      <strong>Improved User Engagement:</strong> By offering
                      outfit suggestions and personalized fashion feeds, Style
                      AI boosts user interaction and time spent on the site,
                      which contributes to higher sales conversions.
                    </li>
                    <li className="mb-3">
                      <strong>Seamless Integration:</strong> Style AI can be
                      easily integrated with existing ecommerce platforms,
                      websites, and mobile apps, providing retailers with a
                      simple and efficient solution for visual search and
                      recommendations.
                    </li>
                    <li className="mb-3">
                      <strong>Enhanced Customer Experience:</strong> By
                      streamlining the fashion discovery process with
                      personalized product suggestions and a virtual styling
                      assistant, Style AI improves customer satisfaction and
                      boosts loyalty.
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
                    <strong>Personalized Styling Recommendations:</strong>{" "}
                    Offers tailored outfit suggestions based on individual
                    preferences, fashion trends, and user data.
                  </li>
                  <li className="mb-2">
                    <strong>Visual Search Functionality:</strong> Enables
                    customers to find similar products by uploading images,
                    improving product discovery.
                  </li>
                  <li className="mb-2">
                    <strong>Seamless Ecommerce Integration:</strong> Easily
                    integrates with platforms like Shopify, Magento, and
                    WooCommerce, streamlining deployment.
                  </li>
                  <li className="mb-2">
                    <strong>AI-Powered Fashion Insights:</strong> Uses machine
                    learning to analyze style trends and user behavior for
                    better product recommendations.
                  </li>
                  <li className="mb-2">
                    <strong>Omnichannel Personalization:</strong> Provides
                    consistent styling and product recommendations across web,
                    mobile, and social platforms.
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
                    <strong>Pricing:</strong> Subscription costs may be a
                    barrier for small to mid-sized retailers, especially those
                    with limited tech budgets.
                  </li>
                  <li className="mb-2">
                    <strong>Style Compatibility:</strong> Recommendations may
                    not always align perfectly with niche fashion preferences or
                    brand-specific aesthetics.
                  </li>
                  <li className="mb-2">
                    <strong>Initial Setup Complexity:</strong> Requires
                    integration with existing catalogs and customer data, which
                    may demand technical support during onboarding.
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
          <div className="container-fluid px-0 px-lg-4">
  <div className="row align-items-center g-4 g-lg-5 mb-4">
    {/* Left side (Text Section) */}
    <div className="col-lg-6 col-12 order-lg-1 order-2 pe-lg-5">
      <p className="text-primary fw-semibold mb-2">Write better, faster</p>
      <h1 className="display-5 fw-bold mb-3">Style AI</h1>
      <div className="text-warning mb-3 fs-5">⭐⭐⭐⭐⭐</div>
      
      <p className="mb-4 fs-5">
        Style AI is an advanced AI-powered solution designed to
        revolutionize the fashion industry by providing personalized
        styling recommendations and visual search capabilities. It helps
        ecommerce retailers, fashion brands, and online stores to offer
        highly tailored shopping experiences. Leveraging machine
        learning and computer vision, Style AI optimizes the entire
        fashion shopping experience, from product discovery to
        personalized recommendations, improving user engagement and
        conversion rates.
      </p>

      <div className="d-flex flex-wrap gap-3">
        <a
          href="https://www.styleai.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary px-4 py-2 fw-medium rounded-pill"
        >
          Explore Tool
        </a>
      
      </div>
    </div>

    {/* Right side (Image Section) */}
    <div className="col-lg-6 col-12 order-lg-2 order-1">
      <div className="ratio ratio-16x9 bg-light rounded-4 overflow-hidden p-3 shadow">
        <img
          src={style}
          alt="Style AI Platform"
          className="img-fluid object-fit-cover"
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
                How Does Style AI Work?
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
                      Image-to-Product Search
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Customers can upload an image and Style AI identifies and
                      displays visually similar products.
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
                      Personalized Styling
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      It suggests outfits and accessories based on individual
                      preferences and past shopping behavior.
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
                      Product Discovery
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      It enhances product catalogs by categorizing and tagging
                      products automatically, making them easier to find.
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

export default StyleAI;
