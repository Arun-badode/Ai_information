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
const LilyAI = () => {
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
              <h3 className="">Features of Lily AI</h3>
            </div>
            {[
              {
                icon: "🧠",
                title: "AI-Driven Product Attribution",
                desc: "Lily AI enriches product data by assigning detailed, customer-centric attributes, enhancing searchability and personalization.",
              },
              {
                icon: "🎯",
                title: "Personalized Recommendations",
                desc: "Lily AI delivers hyper-personalized product recommendations by aligning emotional context and detailed attributes with each shopper’s intent.",
              },
              {
                icon: "📈",
                title: "Conversion Rate Optimization",
                desc: "By improving the relevancy of search and recommendations, Lily AI helps increase conversion rates and average order value across ecommerce sites.",
              },
              {
                icon: "📊",
                title: "Advanced Consumer Intelligence",
                desc: "Lily AI uses behavioral data and AI models to understand shopper intent, enabling better segmentation and targeting across channels.",
              },
              {
                icon: "🛒",
                title: "Enhanced Site Search",
                desc: "Lily AI improves site search by mapping shopper language to product data, making it easier for customers to find what they're looking for.",
              },
              {
                icon: "🔗",
                title: "Seamless Integration",
                desc: "Lily AI integrates easily with existing ecommerce platforms and tools, supporting fast deployment and consistent performance at scale.",
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
                  q: "What is Lily AI?",
                  a: "Lily AI is an AI-powered personalization and recommendation engine designed to enhance the search experience, improve product discovery, and deliver personalized results for ecommerce websites and mobile apps.",
                },
                {
                  q: "How does Lily AI work?",
                  a: "Lily AI uses machine learning algorithms to analyze user behavior and preferences, providing personalized product recommendations and improving the search experience with dynamic filters and real-time search optimization.",
                },
                {
                  q: "What industries can use Lily AI?",
                  a: "Lily AI is mainly used in ecommerce, retail, and fashion, but it can be applied to any business that requires personalized product recommendations or improved search results.",
                },
                {
                  q: "What are the key features of Lily AI?",
                  a: "Some key features include personalized product recommendations, dynamic search filters, real-time product discovery, custom ranking, and advanced analytics.",
                },
                {
                  q: "How does Lily AI improve ecommerce websites?",
                  a: "By providing AI-powered search, personalized recommendations, and automated content filtering, Lily AI enhances product discoverability, user experience, and conversion rates.",
                },
                {
                  q: "What is personalization in Lily AI?",
                  a: "Personalization in Lily AI refers to the use of user data and machine learning to provide personalized shopping experiences, such as customized product suggestions and search results based on previous interactions.",
                },
                {
                  q: "Does Lily AI provide product recommendations?",
                  a: "Yes, Lily AI uses behavioral data to suggest products that are relevant to the user, helping them discover items that match their preferences.",
                },
                {
                  q: "What is real-time search in Lily AI?",
                  a: "Real-time search allows users to see results instantly as they type, improving the user experience by delivering relevant results faster.",
                },
                {
                  q: "Can Lily AI integrate with existing ecommerce platforms?",
                  a: "Yes, Lily AI offers easy integration with platforms like Shopify, Magento, WooCommerce, and custom ecommerce solutions via its API.",
                },
                {
                  q: "Is Lily AI suitable for small businesses?",
                  a: "Lily AI is scalable and can be used by small businesses, though its pricing may be more suitable for growing or larger ecommerce platforms with significant traffic.",
                },
                {
                  q: "How do I sign up for Lily AI?",
                  a: "You can sign up for Lily AI by visiting their official website and selecting a suitable pricing plan that fits your business needs.",
                },
                {
                  q: "Does Lily AI offer a free trial?",
                  a: "Yes, Lily AI offers a free trial that allows businesses to explore its features and capabilities before committing to a paid plan.",
                },
                {
                  q: "What is the pricing for Lily AI?",
                  a: "Pricing for Lily AI is subscription-based, with different tiers based on business size and features. Custom pricing is available for larger enterprises.",
                },
                {
                  q: "What type of businesses benefit from Lily AI?",
                  a: "Ecommerce stores, fashion retailers, mobile apps, and B2B platforms can all benefit from Lily AI's personalization and search optimization features.",
                },
                {
                  q: "Can Lily AI handle large product catalogs?",
                  a: "Yes, Lily AI is built to handle large-scale catalogs, ensuring that search results and product recommendations are still fast and accurate.",
                },
                {
                  q: "What is the search ranking algorithm in Lily AI?",
                  a: "Lily AI allows businesses to define custom ranking criteria, such as product popularity, user behavior, or promotional offers, to determine how search results are displayed.",
                },
                {
                  q: "Does Lily AI support multi-language search?",
                  a: "Yes, Lily AI supports multi-language search, making it ideal for global businesses that want to cater to a diverse audience.",
                },
                {
                  q: "How does Lily AI handle product recommendations?",
                  a: "Lily AI analyzes customer behavior, purchase history, and search patterns to provide personalized product recommendations in real-time.",
                },
                {
                  q: "What is the dynamic search filter feature in Lily AI?",
                  a: "Dynamic search filters automatically adjust based on user preferences and real-time data, allowing users to refine their product search more effectively.",
                },
                {
                  q: "Can Lily AI be used for mobile app search?",
                  a: "Yes, Lily AI can be integrated into mobile apps, providing real-time search, personalized product recommendations, and dynamic filters for mobile users.",
                },
                {
                  q: "How does Lily AI enhance the customer experience?",
                  a: "Lily AI delivers a personalized shopping journey by providing relevant product suggestions, dynamic filtering, and faster search results, improving user satisfaction.",
                },
                {
                  q: "Does Lily AI provide search auto-complete?",
                  a: "Yes, Lily AI provides auto-complete features that suggest relevant products or search queries as users type, improving the overall search speed.",
                },
                {
                  q: "What is behavioral targeting in Lily AI?",
                  a: "Behavioral targeting in Lily AI refers to the ability to analyze user actions and preferences to personalize product recommendations and search results.",
                },
                {
                  q: "Can Lily AI optimize sales conversion rates?",
                  a: "Yes, by providing relevant product recommendations and improving search experience, Lily AI can help increase sales conversion rates on ecommerce websites.",
                },
                {
                  q: "How does Lily AI handle customer insights?",
                  a: "Lily AI offers analytics tools to gather customer data, helping businesses understand shopping behavior, preferences, and conversion trends.",
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
                    Why Use Lily AI?
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
                      <strong> Enhanced Personalization:</strong> Lily AI’s
                      primary advantage is its ability to personalize every
                      touchpoint in the shopping journey. From product discovery
                      to checkout, customers get relevant suggestions and
                      filters, leading to better engagement.
                    </li>
                    <li class="mb-3">
                      <strong> Increased Conversion Rates:</strong> By providing
                      smart product recommendations and optimizing search
                      experiences, Lily AI directly impacts conversion rates,
                      helping businesses turn browsers into buyers.
                    </li>
                    <li class="mb-3">
                      <strong>Time and Cost Efficiency:</strong> Lily AI
                      automates search and recommendation processes, reducing
                      the time and effort required for manual adjustments and
                      optimizations. This leads to a more efficient ecommerce
                      operation.
                    </li>
                    <li class="mb-3">
                      <strong> Scalable for All Businesses: </strong> Whether
                      you're a small business or a large enterprise, Lily AI’s
                      scalable architecture ensures that it can handle your
                      growing catalog and expanding customer base.
                    </li>
                    <li class="mb-3">
                      <strong>Comprehensive Analytics:</strong> Lily AI provides
                      detailed analytics on customer behavior, sales patterns,
                      and product performance, allowing businesses to make
                      data-driven decisions.
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
                    Highly Personalized User Experience: Lily AI offers
                    exceptional personalization for product recommendations,
                    ensuring that customers always see products they are
                    interested in, increasing the likelihood of a purchase.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Improved Product Discoverability: By using dynamic search
                    filters and AI-driven recommendations, it helps users
                    discover products faster, reducing bounce rates.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Real-Time Personalization: The AI adapts to user behavior in
                    real time, showing relevant products and offers tailored to
                    each shopper’s needs.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Powerful Analytics: Lily AI provides insights into user
                    behavior, allowing businesses to fine-tune their
                    recommendations and promotions based on actionable data.
                  </li>
                  <li className="mb-2">
                    Seamless Integration: Lily AI integrates easily with
                    existing ecommerce platforms and mobile apps, providing
                    businesses with a plug-and-play solution.
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
                    Cost for Small Businesses: Lily AI’s pricing structure may
                    be on the higher side for small businesses or startups,
                    especially those with limited budgets.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Requires Technical Knowledge: For full customization and
                    integration, businesses may need technical support or
                    developers, as the system offers advanced features and APIs.
                  </li>
                  <li className="mb-2">
                    Limited Features for Non-Ecommerce Websites: Lily AI is
                    primarily designed for ecommerce and may not be as
                    beneficial for non-retail websites or blogs.
                  </li>
                  <li className="mb-2">
                    Complexity for New Users: The advanced analytics dashboard
                    and personalization settings can be overwhelming for new
                    users without a strong technical background.
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
              <h1>Lily AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Lily AI is an AI-powered personalization and recommendation
                engine designed for ecommerce businesses and retailers. It uses
                machine learning and predictive analytics to deliver
                personalized product recommendations and search experiences to
                users. With Lily AI, businesses can provide relevant product
                suggestions, dynamic search filters, and enhance customer
                engagement.
              </p>

              <p>
                The platform is particularly beneficial for online retailers,
                fashion brands, and mobile app developers, as it optimizes the
                entire shopping experience, from product discovery to checkout.
                Lily AI helps businesses increase conversions, improve product
                discoverability, and boost sales by personalizing every
                interaction a customer has with the website or app.
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
                How Lily AI Works
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
                      Personalized Search
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Lily AI powers real-time personalized search, which
                      delivers relevant search results based on user behavior,
                      preferences, and purchase history.
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
                      Using machine learning, Lily AI analyzes past behavior to
                      provide personalized product recommendations to users,
                      ensuring they are shown items that match their tastes.
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
                      AI-Powered Merchandising
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Businesses can leverage Lily AI’s smart merchandising
                      tools to dynamically display best-sellers, new arrivals,
                      or promotional products to customers based on their
                      behavior and engagement.
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

export default LilyAI;
