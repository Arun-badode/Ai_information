import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../AI_tools/ImageMindAI.css"; // <-- custom CSS file import
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

const SnatchBot = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            {[
              {
                icon: "🤖",
                title: "Chatbot Builder",
                desc: "A drag-and-drop interface that simplifies the creation of chatbots.",
              },
              {
                icon: "💬",
                title: "Multi-Channel Support",
                desc: "Engage customers across SMS, WhatsApp, Instagram, Facebook Messenger, and more.",
              },
              {
                icon: "🔄",
                title: "Automation Workflows",
                desc: "Automate tasks like lead generation, customer onboarding, sales qualification, and customer support.",
              },
              {
                icon: "🔗",
                title: "Integrations",
                desc: "Integrates with CRM systems, email platforms, Google Sheets, and more to enhance functionality.",
              },
              {
                icon: "🎙",
                title: "Voice Assistant Support",
                desc: "SnatchBot also allows businesses to build voice-enabled chatbots.",
              },
              {
                icon: "🧠",
                title: "Advanced AI",
                desc: "Utilizes NLP and machine learning for better understanding and personalization of customer interactions.",
              },
              {
                icon: "📊",
                title: "Analytics and Reporting",
                desc: "Track chatbot performance, customer interactions, and sales metrics with built-in analytics.",
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

      case "screenshots":
        return (
          <div className="row g-4">
            <div className="col-md-6">
              <img src="" alt="Screenshot 1" className="img-fluid rounded-3" />
            </div>
            <div className="col-md-6">
              <img src="" alt="Screenshot 2" className="img-fluid rounded-3" />
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

      case "FAQs":
        return (
          <div className="faq-section container py-5">
            <h3 className="text-center text-white mb-5 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "How easy is it to set up SnatchBot on my website?",
                  a: "Setting up SnatchBot is simple and can be done in minutes. You can integrate it with your website by adding a small piece of JavaScript code or using a plugin for WordPress or Shopify.",
                },
                {
                  q: "Does SnatchBot provide customer support?",
                  a: "Yes, SnatchBot provides 24/7 support through its chatbot and live chat. The chatbot can answer basic inquiries, and you can escalate complex issues to live agents.",
                },
                {
                  q: "Can SnatchBot handle both text and voice-based interactions?",
                  a: "Yes, SnatchBot supports both text-based chatbots and voice assistants, allowing businesses to engage with customers in multiple ways.",
                },
                {
                  q: "Can I integrate SnatchBot with my CRM system?",
                  a: "Yes, SnatchBot integrates with popular CRM systems like Salesforce, HubSpot, and Zoho, ensuring seamless data synchronization and lead management.",
                },
                {
                  q: "Is SnatchBot suitable for small businesses?",
                  a: "Yes, SnatchBot is a great option for small businesses, especially because it offers a free plan that includes essential chatbot features and automates customer interactions.",
                },
                {
                  q: "Can SnatchBot help with product recommendations?",
                  a: "Yes, SnatchBot can recommend products based on user behavior, past interactions, or preferences, making it a valuable tool for eCommerce businesses.",
                },
                {
                  q: "How does SnatchBot handle multi-channel communication?",
                  a: "SnatchBot can handle multi-channel communication on platforms like Facebook Messenger, WhatsApp, Instagram Direct, SMS, and more, making it easy for businesses to engage customers wherever they are.",
                },
                {
                  q: "How do I integrate SnatchBot with my website?",
                  a: "Integrating SnatchBot with your website is simple. After creating a bot, you can integrate it by adding a JavaScript code snippet or using plugins for WordPress/Shopify. Step-by-step guides are also provided.",
                },
                {
                  q: "Can I use SnatchBot on multiple websites?",
                  a: "Yes, SnatchBot allows you to manage multiple bots for different websites from a single account, making it easy to scale and manage customer interactions.",
                },
                {
                  q: "Does SnatchBot offer a mobile app for managing chats?",
                  a: "Yes, SnatchBot offers a mobile app for both iOS and Android so you can manage chats, respond to inquiries, and track performance on the go.",
                },
                {
                  q: "How customizable are the chatbots in SnatchBot?",
                  a: "SnatchBot offers a high degree of customization. You can design the conversation flow, appearance, and behavior, and use templates for faster setup.",
                },
                {
                  q: "Can I personalize the messages that SnatchBot sends to users?",
                  a: "Yes, you can use dynamic variables like name, location, or history to personalize chatbot messages for more engaging interactions.",
                },
                {
                  q: "Can SnatchBot automate follow-up messages?",
                  a: "Yes, SnatchBot can send follow-ups automatically based on rules, such as reminders for abandoned carts or unread messages.",
                },
                {
                  q: "Can SnatchBot handle complex conversational flows?",
                  a: "Yes, with branching logic, SnatchBot can manage complex conversational paths tailored to user responses.",
                },
                {
                  q: "How can SnatchBot help improve customer engagement?",
                  a: "SnatchBot boosts engagement through real-time responses, 24/7 support, and personalized messaging.",
                },
                {
                  q: "Can SnatchBot help with customer retention?",
                  a: "Yes, by sending follow-ups, offers, and reminders, SnatchBot helps businesses retain customers and keep them engaged.",
                },
                {
                  q: "Can SnatchBot send personalized promotions to customers?",
                  a: "Yes, you can send tailored offers or discounts based on user behavior, interests, and purchase history.",
                },
                {
                  q: "Can SnatchBot help improve customer satisfaction?",
                  a: "Yes, it improves satisfaction through fast replies, helpful recommendations, and intelligent automation.",
                },
                {
                  q: "How does SnatchBot use artificial intelligence (AI)?",
                  a: "SnatchBot uses AI and NLP to understand and respond intelligently to user input and improve its accuracy over time.",
                },
                {
                  q: "Can SnatchBot handle complex AI conversations?",
                  a: "SnatchBot is capable of handling moderately complex conversations and can escalate advanced queries to human agents.",
                },
                {
                  q: "How does SnatchBot handle predictive responses?",
                  a: "SnatchBot uses predictive analytics to suggest replies or actions based on past user behavior and data patterns.",
                },
                {
                  q: "Can SnatchBot use machine learning to improve its performance?",
                  a: "Yes, it applies machine learning to learn from past interactions and improve accuracy and response quality.",
                },
                {
                  q: "How can SnatchBot help with lead generation?",
                  a: "SnatchBot collects visitor data and qualifies leads through automated conversation, forwarding them to your sales team.",
                },
                {
                  q: "Can SnatchBot automate the sales funnel?",
                  a: "Yes, it nurtures leads with automated messages and guides them through each funnel stage before handing them to a rep.",
                },
                {
                  q: "How does SnatchBot improve sales conversion rates?",
                  a: "It increases conversions by engaging users instantly, qualifying them quickly, and reducing friction in the buying process.",
                },
                {
                  q: "Can SnatchBot automate marketing campaigns?",
                  a: "Yes, SnatchBot sends targeted messages based on user behavior and triggers, automating your marketing efforts.",
                },
                {
                  q: "Can SnatchBot help with appointment scheduling?",
                  a: "Yes, customers can book appointments directly through SnatchBot, and it can sync with your calendar system.",
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
                    Easy to set up and deploy with no coding required.
                  </li>
                  <li className="mb-2">
                    Supports both text and voice-based interactions.
                  </li>
                  <li className="mb-2">
                    Offers multi-channel support including Messenger, WhatsApp,
                    and more.
                  </li>
                  <li className="mb-2">
                    Free plan available with essential chatbot features.
                  </li>
                  <li className="mb-2">
                    Integrates with popular CRM platforms like Salesforce and
                    HubSpot.
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
                    Advanced AI features and analytics may require a premium
                    subscription.
                  </li>
                  <li className="mb-2">
                    Limited customization compared to open-source chatbot
                    platforms.
                  </li>
                  <li className="mb-2">
                    UI could feel slightly outdated compared to newer
                    competitors.
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
                    Why Use SnatchBot?
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
                      SnatchBot offers a no-code platform, making chatbot
                      creation simple and accessible to everyone.
                    </li>
                    <li className="mb-3">
                      Ideal for businesses of all sizes to automate support,
                      lead capture, and engagement.
                    </li>
                    <li className="mb-3">
                      Provides multi-channel support including websites,
                      Messenger, WhatsApp, and more.
                    </li>
                    <li className="mb-3">
                      Comes with a free plan and advanced AI features, including
                      NLP and sentiment analysis.
                    </li>
                    <li className="mb-3">
                      Offers seamless CRM integration and analytics to track and
                      optimize performance.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Try SnatchBot Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
                    Tidio – AI chatbot for marketing automation, customer
                    service, and live chat integration.
                  </li>
                  <li className="mb-2">
                    Drift – Conversation-driven platform focused on B2B sales
                    and lead generation automation.
                  </li>
                  <li className="mb-2">
                    Botsify – Easy-to-use chatbot builder with CRM integration
                    and multi-channel support.
                  </li>
                  <li className="mb-2">
                    Intercom – Business messaging and customer support tool with
                    automated chatbot capabilities.
                  </li>
                  <li className="mb-2">
                    MobileMonkey – Chatbot for omnichannel marketing including
                    Facebook, web chat, and SMS.
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
      <div className="bg-dark">
        {/* <Link
          to="/Aitools"
          className="d-inline-block text-white text-decoration-none ml-3 py-1"
        >
          <i className="bi bi-arrow-left me-2"></i>Back to Directory
        </Link> */}
        <a
          href="/Aitools"
          className="d-inline-block text-white text-decoration-none  mt-3 ml-3 py-1 px-2 ms-5 border rounded-sm"
        >
          <i className="bi bi-arrow-left me-2"></i>Back{" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between mb-5 lovaaiflex">
            {/* Left side (Text Section) */}
            <div style={{ flex: 1, paddingRight: "30px" }}>
              <h2>SnatchBot</h2>
              <div className="text-warning mb-1">
                ⭐⭐⭐⭐⭐ 95% Satisfaction
              </div>
              <p>
                SnatchBot is an AI-powered chatbot platform designed to automate
                customer communication across various messaging channels like
                Facebook Messenger, WhatsApp, Instagram Direct, SMS, and more.
                It offers businesses the ability to build, deploy, and manage
                intelligent chatbots and live chat systems for customer service,
                marketing, and sales purposes. The platform is particularly
                popular for its ease of use, extensive automation features, and
                integrations with a wide range of tools. SnatchBot supports both
                text-based chatbots and voice assistants, making it a versatile
                tool for enhancing customer engagement and improving operational
                efficiency.
              </p>
              <div className="mb-3">
                <span className="badge bg-primary me-2">Image Generation</span>
                <span className="badge bg-success me-2">Creative</span>
                <span className="badge bg-warning text-dark">Paid</span>
              </div>
              <div>
                <button className="btn btn-primary me-2">Try Now</button>
                <button className="btn btn-outline-light">Watch Demo</button>
              </div>
            </div>

            {/* Right side (Image Section) */}
            <div style={{ flex: 1, textAlign: "center" }}>
              <img
                src=""
                alt="Dashboard Preview"
                className="img-fluid rounded-3"
                style={{ maxWidth: "80%", height: "auto" }}
              />
            </div>
          </div>

          {/* Tab Navigation */}
          <ul className="nav nav-tabs custom-tabs mb-4">
            {[
              "features",
              "screenshots",
              "reviews",
              "FAQs",
              "pros & Cons",
              "why-we-use",
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
            <h4 className="mb-3">Ready to get started with SnatchBot?</h4>
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

export default SnatchBot;
