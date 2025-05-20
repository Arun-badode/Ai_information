import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import algoliaai from "../../../../public/assets/Img/AI for E-commerce/algolia.png"
import algoliass1 from "../../../../public/assets/Img/AI for E-commerce/algoliass1.png"
import algoliass2 from "../../../../public/assets/Img/AI for E-commerce/algoliass2.png"


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
const AlgoliaAI = () => {
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
              <h3 className="">Features of Algolia AI</h3>
            </div>
            {[
              {
                icon: "🖼",
                title: "Real-Time Search",
                desc: "Algolia AI processes search queries instantly to return accurate results, significantly reducing wait times for users.",
              },
              {
                icon: "🎨",
                title: "Personalized Search",
                desc: " Based on user interactions, Algolia AI personalizes the search results, tailoring them to each individual’s behavior and preferences.",
              },
              {
                icon: "✏",
                title: "Product Recommendations",
                desc: "Algolia uses machine learning to suggest products based on search history, improving the overall shopping experience and increasing sales.",
              },
              {
                icon: "📦",
                title: "Dynamic Filters and Ranking",
                desc: " It provides dynamic search filters and adjusts search rankings according to custom parameters like relevance, popularity, or promotional activity.",
              },
              {
                icon: "⚙",
                title: "Scalability",
                desc: "Algolia AI is built to handle vast amounts of data efficiently, making it ideal for both small businesses and large enterprises.",
              },

              {
                icon: "📦",
                title: "Search Auto-Complete and Correction",
                desc: "Algolia’s auto-complete feature helps users find products quickly, while its auto-correction feature ensures they still find relevant results even with typos.",
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
                  q: "What is Algolia AI?",
                  a: "Algolia AI is a search and discovery platform that uses advanced machine learning and natural language processing (NLP) to enhance the search experience, improve product discovery, and personalize results for ecommerce websites, apps, and content platforms.",
                },
                {
                  q: "How does Algolia AI work?",
                  a: "Algolia AI works by indexing large datasets and using machine learning algorithms to provide real-time, relevant search results and recommendations based on user behavior, preferences, and context.",
                },
                {
                  q: "What are the features of Algolia AI?",
                  a: "Key features of Algolia AI include real-time search, personalized search results, dynamic filtering, product recommendations, site search, multi-language support, and A/B testing for search results.",
                },
                {
                  q: "What industries use Algolia AI?",
                  a: "Algolia AI is widely used in ecommerce, media, SaaS platforms, and mobile apps for personalized search and product discovery.",
                },
                {
                  q: "How does Algolia AI improve ecommerce search?",
                  a: "Algolia AI improves ecommerce search by providing personalized search results, smart product recommendations, auto-completion, auto-correction, and dynamic filtering based on real-time customer behavior.",
                },
                {
                  q: "Is Algolia AI customizable?",
                  a: "Yes, Algolia AI is highly customizable, allowing businesses to define custom ranking, create dynamic filters, and adjust search relevancy based on their unique business needs.",
                },
                {
                  q: "Does Algolia AI support multilingual search?",
                  a: "Yes, Algolia AI supports multi-language search, making it ideal for businesses with a global audience and multiple language needs.",
                },
                {
                  q: "How does Algolia AI enhance the user experience?",
                  a: "By offering fast search results, relevant product recommendations, auto-complete features, and dynamic filtering, Algolia AI creates a seamless and personalized experience for users.",
                },
                {
                  q: "Does Algolia AI offer any integrations?",
                  a: "Yes, Algolia AI offers seamless integrations with popular ecommerce platforms like Shopify, Magento, BigCommerce, and WooCommerce, as well as custom integrations via API.",
                },
                {
                  q: "How does Algolia AI handle product recommendations?",
                  a: "Algolia AI uses behavioral data, search history, and user preferences to offer personalized product recommendations in real time, improving product discovery and boosting conversions.",
                },
                {
                  q: "What is the pricing model for Algolia AI?",
                  a: "Algolia AI offers a pay-as-you-go pricing model based on the number of search operations and indexing volume, with custom pricing for enterprise solutions.",
                },
                {
                  q: "Does Algolia AI offer a free trial?",
                  a: "Yes, Algolia AI offers a free trial with limited usage to help businesses test its features and capabilities.",
                },
                {
                  q: "How do I sign up for Algolia AI?",
                  a: "You can sign up for Algolia AI on their official website by creating an account and selecting the appropriate plan for your business.",
                },
                {
                  q: "How do I log in to Algolia AI?",
                  a: "To log in, visit the Algolia AI login page and enter your registered email address and password.",
                },
                {
                  q: "Does Algolia AI offer personalized search results?",
                  a: "Yes, Algolia AI personalizes search results based on user behavior, search history, and preferences to provide relevant and engaging search experiences.",
                },
                {
                  q: "How fast is Algolia AI's search performance?",
                  a: "Algolia AI provides instant search results with very low latency, often returning relevant results in milliseconds, ensuring a fast and seamless experience for users.",
                },
                {
                  q: "How does Algolia AI handle large product catalogs?",
                  a: "Algolia AI handles large catalogs efficiently by indexing product data and using optimized algorithms to ensure fast search and product discovery, even with millions of products.",
                },
                {
                  q: "What is the search ranking algorithm in Algolia AI?",
                  a: "The ranking algorithm in Algolia AI is customizable, allowing businesses to define how search results are prioritized based on relevance, popularity, category, custom attributes, and other factors.",
                },
                {
                  q: "Can Algolia AI be used for mobile app search?",
                  a: "Yes, Algolia AI can be integrated with mobile apps, providing fast and personalized search experiences for mobile users.",
                },
                {
                  q: "How does Algolia AI improve product discoverability?",
                  a: "Algolia AI enhances product discoverability by providing relevant search results, dynamic filters, and personalized recommendations, ensuring that users can easily find the products they are looking for.",
                },
                {
                  q: "Can I use Algolia AI for voice search?",
                  a: "Yes, Algolia AI supports voice search capabilities, allowing users to find products using voice commands.",
                },
                {
                  q: "How does Algolia AI improve conversion rates?",
                  a: "By delivering relevant and personalized product suggestions, real-time search, and dynamic filters, Algolia AI increases engagement and conversion rates.",
                },
                {
                  q: "Does Algolia AI offer A/B testing for search results?",
                  a: "Yes, Algolia AI provides A/B testing capabilities, allowing businesses to test different search ranking strategies and measure their impact on user engagement and conversions.",
                },
                {
                  q: "How does Algolia AI handle data synchronization?",
                  a: "Algolia AI ensures real-time data synchronization between your product catalog and search results, so that any updates to inventory or product information are instantly reflected in search.",
                },
                {
                  q: "What is the custom ranking feature in Algolia AI?",
                  a: "Custom ranking allows businesses to define their own criteria for ranking search results, such as boosting high-margin products, new arrivals, or best sellers in search results.",
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
                src={algoliass1}
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={algoliass2}
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
                    Why Use Algolia AI?
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
                      <strong>Enhanced User Experience:</strong> Algolia AI
                      improves site search speed, which leads to better user
                      experience and higher customer satisfaction. It’s
                      optimized for fast search results and relevant product
                      discovery.
                    </li>
                    <li class="mb-3">
                      <strong>Improved Conversion Rates:</strong> By providing
                      personalized results, dynamic filtering, and real-time
                      search suggestions, Algolia boosts sales conversion rates
                      by making products easier to find.
                    </li>
                    <li class="mb-3">
                      <strong>Scalable for Any Business Size:</strong> Algolia
                      is highly scalable and can support small businesses as
                      well as large enterprises. It can handle massive product
                      catalogs and large volumes of traffic with ease.
                    </li>
                    <li class="mb-3">
                      <strong> Seamless Integration: </strong> Algolia AI can be
                      easily integrated with existing ecommerce platforms,
                      websites, or apps via its API, making setup
                      straightforward for businesses.
                    </li>
                    <li class="mb-3">
                      <strong>Advanced Analytics and Insights:</strong> Through
                      Algolia provides detailed analytics, helping businesses
                      understand search performance, user behavior, and customer
                      preferences to improve future strategies.
                    </li>
                    <li class="mb-3">
                      <strong>Global Reach with Multi-Language Support:</strong>{" "}
                      Algolia AI allows businesses to cater to global audiences
                      by supporting multilingual search and regional
                      personalization.
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
                    Fast and Accurate Search: Algolia AI offers instant search
                    results, which significantly enhances user experience and
                    reduces bounce rates.
                  </li>
                  <li className="mb-2">
                    {" "}
                    High Customization: Algolia provides powerful custom ranking
                    and search relevance tuning options, giving businesses
                    complete control over how their results are displayed.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Personalized Experiences: With personalized search results,
                    businesses can tailor the shopping journey for each user
                    based on their search behavior and preferences.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Scalable for All Businesses: Whether you’re a small startup
                    or a large enterprise, Algolia AI scales to meet your needs,
                    ensuring performance even with large product catalogs.
                  </li>
                  <li className="mb-2">
                    Seamless Integration: Algolia integrates easily with major
                    ecommerce platforms like Shopify, Magento, and WooCommerce,
                    and it offers an extensive API for custom integrations.
                  </li>
                  <li className="mb-2">
                    Advanced Analytics: With user behavior analysis and search
                    performance insights, businesses can make data-driven
                    decisions to improve customer engagement.
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
                    Pricing for Small Businesses: Algolia’s pricing can be on
                    the higher side for small businesses, especially if you need
                    advanced features or high-volume usage.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Requires Technical Setup: Although integration is relatively
                    easy for developers, non-technical teams may need assistance
                    with initial setup and advanced features.
                  </li>
                  <li className="mb-2">
                    Limited Built-in AI Features: While Algolia excels in search
                    functionalities, its AI-powered recommendations aren’t as
                    extensive as some other platforms that focus solely on
                    personalized suggestions.
                  </li>
                  <li className="mb-2">
                    Complex Documentation for New Users: For those new to
                    Algolia, its documentation can be overwhelming, especially
                    when trying to configure more advanced settings.
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
          <div className="container-fluid">
  <div className="row align-items-center justify-content-between mb-1 g-4">
    {/* Left side (Text Section) */}
    <div className="col-lg-6 col-md-12 order-lg-1 order-2">
      <p className="text-primary">Write better, faster</p>
      <h1>Algolia AI</h1>
      <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
      <p className="mb-3">
        Algolia AI is an advanced AI-powered search and discovery
        platform designed to optimize the search experience for
        ecommerce businesses, developers, and website owners. Algolia
        helps companies improve product search accuracy, personalize
        user experiences, and boost overall conversion rates. Utilizing
        machine learning and natural language processing (NLP), Algolia
        AI enhances real-time search, search rankings, product
        recommendations, and much more.
      </p>

      <p className="mb-4">
        By indexing large amounts of data, Algolia AI offers instant
        search results, personalized suggestions, and dynamic filtering,
        making it a powerful solution for any business looking to
        enhance their search and product discovery experience.
      </p>

      <div className="mb-3">
        <a
          href="https://www.algolia.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary me-2"
        >
          Explore Tool
        </a>
      </div>
    </div>

    {/* Right side (Image Section) */}
    <div className="col-lg-6 col-md-12 order-lg-2 order-1 text-center">
      <img
        src={algoliaai}
        alt="algoliaai"
        className="img-fluid"
        style={{ maxHeight: "300px", width: "auto" }}
      />
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
                How Algolia AI Works?
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
                      AI-Powered Search & Discovery
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Algolia AI enhances search relevance by learning from user
                      interactions, ranking results based on intent, context,
                      and past behavior.
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
                      Personalization Engine
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      It dynamically adapts product listings and search results
                      to individual users by leveraging click data, conversion
                      metrics, and session history.
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
                      Analytics-Driven Optimization
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Algolia continuously analyzes user behavior to optimize
                      search performance, improve click-through rates, and
                      increase conversions.
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

export default AlgoliaAI;
