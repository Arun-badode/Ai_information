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

const ZapierAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [openIndex, setOpenIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <div className="row g-4">
            {[
              {
                title: "AI-powered automation",
                desc: "Zapier AI leverages machine learning to analyze workflows and suggest optimizations.",
              },
              {
                title: "App integrations",
                desc: "Zapier integrates with over 5,000 apps, automating tasks across all platforms.",
              },
              {
                title: "Task automation",
                desc: " From CRM updates to email triggers, Zapier AI automates repetitive tasks",
              },
              {
                title: "Data syncing",
                desc: "Automatically syncs data between apps to ensure consistency",
              },
              {
                title: "AI task delegation",
                desc: "Uses AI to assign tasks based on user behavior and data",
              },
              {
                title: "Customization",
                desc: "Customize workflows according to business-specific needs.",
              },
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div className="custom-card text-light p-4 h-100">
                  <div className="icon mb-3">{feature.icon}</div>
                  <h5 className="fw-bold">{feature.title}</h5>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case "Screenshots":
        return (
          <div className="row g-4">
            <div className="col-md-6">
              <img
                src={deatilimage}
                alt="Screenshot 1"
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-md-6">
              <img
                src={deatilimage}
                alt="Screenshot 2"
                className="img-fluid rounded-3"
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

      case "Why-we-use":
        return (
          <div className="row g-4">
            <div className="col-12">
              <div className="custom-card text-light p-5 text-center">
                <h3 className="fw-bold mb-4">Why Use Zapier AI?</h3>

                <p className="fs-5 mt-3">
                  Zapier AI saves time, reduces errors, and increases
                  productivity by automating tasks that would otherwise require
                  manual input. It's especially beneficial for small businesses,
                  marketing teams, and anyone looking to streamline their
                  operations. With Zapier, you can integrate all your
                  applications and automate workflows to improve efficiency
                  across the board.
                </p>

                <Button variant="primary" size="lg" className="mt-4">
                  Try Zapier AI Now
                </Button>
              </div>
            </div>
          </div>
        );

      case "Pro&Const":
        return (
          <div style={styles.section}>
            <div className="container">
              <div className="row g-4">
                {/* Pros Section */}
                <div className="col-md-10 offset-md-1">
                  <div style={styles.card}>
                    <h3 className="mb-4 text-center">Pros of Zapier AI</h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <p>
                          <b>Wide app integration:</b> Connects with over 5,000
                          apps, ensuring versatility.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b> No coding required: </b>Anyone can use it with a
                          simple drag-and-drop interface.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b> Scalable:</b> Suitable for businesses of all
                          sizes, from small businesses to enterprises.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b> Real-time automation:</b> Ensures tasks are
                          automated in real time, saving time and resources.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b> Custom workflows:</b> Customize workflows to meet
                          the unique needs of your business.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cons Section */}
                <div className="col-md-10 offset-md-1">
                  <div style={styles.card}>
                    <h3 className="mb-4 text-center">Cons of Zapier AI</h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <p>
                          <b> Pricing:</b> The higher-tier plans can be costly
                          for small businesses.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b> Limited features in free plan:</b> The free plan
                          is quite limited in terms of the number of tasks and
                          integrations.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b>Complexity with advanced automation:</b> For more
                          complex workflows, users might need to get familiar
                          with some technicalities.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b> Dependency on apps:</b> The integrations are
                          dependent on third-party apps’ APIs, which can
                          occasionally lead to disruptions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Alternative":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-4">
              Alternatives to Zapier AI
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
                  <li className="mb-3">
                    <strong>Integromat: –</strong> A competitor that also offers
                    robust automation features with visual workflow building.
                  </li>
                  <li className="mb-3">
                    <strong>Microsoft Power Automate: –</strong> A strong
                    alternative for enterprises with deep Microsoft ecosystem
                    integration.
                  </li>
                  <li className="mb-3">
                    <strong>Tray.io: – </strong> A more developer-centric
                    platform focused on advanced integrations and workflows.
                  </li>
                  <li className="mb-3">
                    <strong> Workato: –</strong> Enterprise-level integration
                    with support for both low-code and no-code workflows.
                  </li>
                  <li className="mb-3">
                    <strong>Automate.io: –</strong> A simpler alternative for
                    smaller businesses, with fewer integrations than Zapier but
                    still offering useful automation features.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "FAQs":
        return (
          <div className="faq-section container py-5">
            <h3 className="text-center  text-white mb-5 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is Zapier AI?",
                  a: " Zapier AI is a platform that automates workflows and tasks by integrating AI with over 5,000 apps.",
                },
                {
                  q: "How much does Zapier AI cost?",
                  a: " It offers several pricing tiers, from a free version with limited tasks to premium plans starting at $19.99/month.",
                },
                {
                  q: "Is Zapier AI free?",
                  a: "Yes, Zapier offers a free plan with basic automation features and up to 100 tasks per month.",
                },
                {
                  q: "Can I use Zapier AI with Google Sheets?",
                  a: "Yes, Zapier AI integrates seamlessly with Google Sheets, allowing automation between your Google Sheets and other apps.",
                },
                {
                  q: "How does Zapier AI improve productivity?",
                  a: " By automating repetitive tasks, Zapier AI frees up time for more strategic work, thus boosting productivity.",
                },
                {
                  q: "Can I automate my email campaigns with Zapier AI?",
                  a: "Yes, you can set up automated email triggers, responses, and campaigns through integrations with email marketing tools.",
                },
                {
                  q: "What is the difference between Zapier AI and Integromat?",
                  a: " Both are automation tools, but Zapier AI is easier for beginners, while Integromat offers more complex workflows and advanced integrations.",
                },
                {
                  q: " What is a 'Zap' in Zapier ?",
                  a: "A 'Zap' is an automated workflow that links two or more apps to carry out specific tasks when triggered by certain events.",
                },
                {
                  q: "How much does Zapier AI cost?",
                  a: "Zapier AI offers several pricing plans, starting from a free plan with limited features to premium plans starting at $19.99/month.",
                },
                {
                  q: " What is the Zapier AI free trial?",
                  a: "Zapier AI offers a free version with limited features, but there is no free trial for paid plans. However, you can explore the free version for initial testing.",
                },
              ]
                .map((item, i) => ({ ...item, id: `faq${i}` }))
                .filter((item, i, arr) => showAllFaqs || i < 4)
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

              {/* Read More / Read Less Button */}
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

      default:
        return null;
    }
  };

  return (
    <>
      <div className="bg-dark">
        <Link
          to="/Aitools"
          className="d-inline-block text-white text-decoration-none ml-3 py-1"
        >
          <i className="bi bi-arrow-left me-2"></i>Back to Directory
        </Link>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between mb-5">
            {/* Left side (Text Section) */}
            <div style={{ flex: 1, paddingRight: "30px" }}>
              <img
                src={Logo}
                alt="Logo"
                className="me-3"
                style={{ width: "60px" }}
              />
              <h2>Zapier AI</h2>
              <div className="text-warning mb-1">
                ⭐⭐⭐⭐⭐ 95% Satisfaction
              </div>
              <p>
                Zapier AI is an intelligent automation platform that integrates
                artificial intelligence to help businesses and individuals
                automate workflows, save time, and enhance productivity. Through
                AI-powered workflows, Zapier connects hundreds of apps, making
                tasks seamless without the need for manual intervention. It
                facilitates automation for repetitive tasks across various
                applications like CRM systems, email marketing tools, social
                media platforms, and more.
              </p>
            </div>

            {/* Right side (Image Section) */}
            <div style={{ flex: 1, textAlign: "center" }}>
              <img
                src="/src/Images/WhatsApp Image 2025-05-07 at 15.17.45.jpeg"
                className="img-fluid rounded-3"
                style={{ maxWidth: "80%", height: "auto" }}
              />
            </div>
          </div>

          {/* Tab Navigation */}
          <ul className="nav nav-tabs custom-tabs mb-4">
            {[
              "Features",
              "Screenshots",
              "Reviews",
              "FAQs",
              // "technical",
              "Why-we-use",
              "Pro&Const",
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
            <h4 className="mb-3">Ready to get started with Zapier AI?</h4>
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

export default ZapierAI;
