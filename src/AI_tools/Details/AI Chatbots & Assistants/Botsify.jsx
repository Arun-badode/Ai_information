import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";



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

const Botsify = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            {[
              {
                title: "Multichannel Support",
                desc: "Deploy Botsify chatbots across websites, Facebook Messenger, WhatsApp, Slack, and SMS to engage users wherever they are.",
              },
              {
                title: "Drag-and-Drop Builder",
                desc: "Design conversational flows easily using a visual drag-and-drop interface without needing to write code.",
              },
              {
                title: "AI & NLP Integration",
                desc: "Leverage artificial intelligence and natural language processing to create smart, context-aware conversations.",
              },
              {
                title: "Live Chat Integration",
                desc: "Seamlessly switch between automated chatbot responses and live human support when needed.",
              },
              {
                title: "Lead Generation Tools",
                desc: "Capture, qualify, and nurture leads using interactive chatbot flows that integrate with your marketing funnel.",
              },
              {
                title: "Analytics Dashboard",
                desc: "Track chatbot usage, performance, and user engagement metrics with a detailed analytics dashboard.",
              },
              {
                title: "CRM Integration",
                desc: "Connect Botsify with popular CRM platforms to sync conversations and streamline customer data handling.",
              },
              {
                title: "Customizable Templates",
                desc: "Use pre-designed templates built for industries like education, healthcare, and e-commerce to get started faster.",
              },
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div className="custom-card text-light p-4 h-100">
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
                src=''
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
      case "alternative":
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
                    MobileMonkey – A chatbot and marketing automation tool for
                    businesses that supports cross-platform communication,
                    including Facebook Messenger, SMS, and Webchat.
                  </li>
                  <li className="mb-2">
                    Aivo AI – AI-powered customer service solutions designed for
                    automating conversations, lead generation, and enhancing
                    customer engagement across channels.
                  </li>
                  <li className="mb-2">
                    Intercom – A messaging platform that integrates automated
                    workflows, AI chatbots, and live chat to improve customer
                    engagement and support.
                  </li>
                  <li className="mb-2">
                    Drift AI – A conversational AI platform focused on lead
                    qualification, real-time chat interactions, and sales
                    automation.
                  </li>
                  <li className="mb-2">
                    Tidio – A chatbot solution with live chat and AI
                    capabilities that supports real-time communication, ideal
                    for customer support and sales automation.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "pros & Cons":
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
                    Easy-to-use drag-and-drop chatbot builder with no coding
                    required.
                  </li>
                  <li className="mb-2">
                    Supports multi-channel integration, including WhatsApp,
                    Facebook, and websites.
                  </li>
                  <li className="mb-2">
                    Advanced AI capabilities with machine learning for improving
                    chatbot responses over time.
                  </li>
                  <li className="mb-2">
                    Offers strong customer support through live chat and
                    automated responses.
                  </li>
                  <li className="mb-2">
                    Flexible pricing plans suitable for small to large
                    businesses.
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
                    Some advanced features are only available in the higher-tier
                    plans.
                  </li>
                  <li className="mb-2">
                    Chatbot creation might require customization for complex
                    workflows.
                  </li>
                  <li className="mb-2">
                    Occasionally, AI responses may need manual intervention for
                    accuracy.
                  </li>
                </ul>
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
                    Why Use Botsify?
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
                      Botsify combines AI-driven automation with chatbots to
                      streamline customer service and sales.
                    </li>
                    <li className="mb-3">
                      Perfect for businesses of all sizes looking to automate
                      their customer service and support.
                    </li>
                    <li className="mb-3">
                      Provides 24/7 support through conversational AI, ensuring
                      customers are always attended to.
                    </li>
                    <li className="mb-3">
                      Offers a no-code platform to build and deploy bots easily
                      without requiring developer skills.
                    </li>
                    <li className="mb-3">
                      Supports integrations with multiple messaging platforms
                      like WhatsApp, Facebook, and more.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Try Botsify Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                  q: "What is Botsify?",
                  a: "Botsify is an AI-powered chatbot platform designed to automate communication across multiple channels like websites, Facebook Messenger, and more.",
                },
                {
                  q: "What are the main features of Botsify?",
                  a: "Key features include drag-and-drop chatbot builder, multi-channel deployment, live chat integration, AI-based NLP, and over 100 integrations.",
                },
                {
                  q: "How much does Botsify cost?",
                  a: "Botsify offers a free plan with basic features. Paid plans start at $50 per month, providing more bots, integrations, and advanced features.",
                },
                {
                  q: "Can I integrate Botsify with my website?",
                  a: "Yes, Botsify integrates easily with websites via widgets that can be added to your site for real-time interaction.",
                },
                {
                  q: "Does Botsify support multi-channel deployment?",
                  a: "Yes, it supports multiple channels such as websites, Facebook Messenger, Slack, and more, allowing businesses to communicate with customers on various platforms.",
                },
                {
                  q: "Is Botsify suitable for small businesses?",
                  a: "Yes, Botsify is affordable and ideal for small businesses looking to automate customer support without needing technical expertise.",
                },
                {
                  q: "How does Botsify handle customer support?",
                  a: "Botsify can automate support by answering FAQs, guiding users, and escalating issues to live agents when needed.",
                },
                {
                  q: "How customizable is Botsify?",
                  a: "Botsify allows you to fully customize your chatbot, including conversation flows, integrations, and chatbot design.",
                },
                {
                  q: "How does Botsify help with lead generation?",
                  a: "Botsify can qualify leads through automated conversations and pass high-quality leads to your sales team.",
                },
                {
                  q: "Can Botsify handle multiple languages?",
                  a: "Yes, Botsify supports multiple languages for global customer engagement.",
                },
                {
                  q: "What integrations does Botsify support?",
                  a: "Botsify integrates with platforms like Google Sheets, Salesforce, Mailchimp, and others, enabling seamless workflow automation.",
                },
                {
                  q: "How does Botsify compare to other chatbot platforms?",
                  a: "Botsify offers broader channel support and more flexible workflows compared to many chatbot platforms like ManyChat or Chatfuel.",
                },
                {
                  q: "How secure is Botsify?",
                  a: "Botsify follows industry-standard security practices, including data encryption, to ensure secure communication with users.",
                },
                {
                  q: "Can I track user interactions on Botsify?",
                  a: "Yes, Botsify provides analytics to track user interactions and chatbot performance.",
                },
                {
                  q: "Does Botsify support webhook integration?",
                  a: "Yes, Botsify supports webhooks to enable real-time data exchange between the chatbot and external systems.",
                },
                {
                  q: "Can I automate marketing with Botsify?",
                  a: "Yes, Botsify can be used for marketing automation, such as sending promotional messages, product recommendations, and more.",
                },
                {
                  q: "Is there a free trial for Botsify?",
                  a: "Yes, Botsify offers a free plan with limited features to help you get started with their platform.",
                },
                {
                  q: "How does Botsify manage data privacy?",
                  a: "Botsify complies with data privacy regulations like GDPR, ensuring that all user data is handled securely and responsibly.",
                },
                {
                  q: "What industries benefit from Botsify?",
                  a: "Botsify is used across industries like e-commerce, healthcare, finance, and more to automate communication and customer support.",
                },
                {
                  q: "How does Botsify handle AI-driven conversations?",
                  a: "Botsify uses AI to understand customer intent, allowing for dynamic and context-driven conversations.",
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
                src='{Logo}'
                alt="Logo"
                className="me-3"
                style={{ width: "60px" }}
              />
              <h2>Botsify</h2>
              <div className="text-warning mb-1">
                ⭐⭐⭐⭐⭐ 95% Satisfaction
              </div>
              <p>
                Botsify is a no-code chatbot platform that enables businesses to
                create AI-powered chatbots for various channels, including
                websites, Facebook Messenger, WhatsApp, Slack, and SMS. It
                offers a user-friendly interface, allowing users to build and
                deploy chatbots without any programming knowledge. ​
              </p>
            </div>

            {/* Right side (Image Section) */}
            <div style={{ flex: 1, textAlign: "center" }}>
              <img
                src="https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/a-robot-coming-out-of-a-laptop-screen-with-the-perplexity-ai-logo-in-its-hand.jpg"
                className="img-fluid rounded-3"
                style={{ maxWidth: "80%", height: "auto" }}
              />
            </div>
          </div>
          <section style={{ backgroundColor: "", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">
                Create Conversations with Botsify in 3 Easy Steps
              </p>
              <h2
                style={{
                  fontWeight: "semibold",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                How does Botsify work?
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
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Start a Conversation with Botsify
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Begin by engaging with Botsify. It processes your queries
                      and provides instant, context-aware responses with no
                      setup required.
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
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Botsify Processes Your Query
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Botsify uses AI to understand user inputs and provide
                      answers instantly. It integrates with various platforms,
                      including websites and social media.
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
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Automate Your Customer Support with Botsify
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Automate customer interactions, manage leads, and engage
                      your customers across multiple channels using Botsify.
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
              // "technical",
              "why-we-use",
              "pros & Cons",
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

          <div className="bg-primary text-center text-light rounded-4 p-5 mt-5">
            <h4 className="mb-3">Ready to get started with Botsify?</h4>
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

export default Botsify;