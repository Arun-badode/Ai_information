import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import aivo from "../../../../public/assets/Img/AI Chatbots & Assistants/1.jpg";

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

const AivoAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4 px-4">
            {[
              {
                title: "AI-Powered Chatbots",
                desc: "Aivo uses artificial intelligence to automate responses, handle sales queries, and provide 24/7 customer support across your digital channels.",
              },
              {
                title: "Omni-Channel Engagement",
                desc: "Engage users on WhatsApp, Instagram, Facebook Messenger, SMS, and websites with seamless multi-channel chatbot experiences.",
              },
              {
                title: "Natural Language Processing (NLP)",
                desc: "Aivo’s NLP engine understands and interprets human language, enabling smart, human-like conversations that improve with time.",
              },
              {
                title: "Live Agent Handoff",
                desc: "When AI hits its limits, Aivo transfers conversations to human agents smoothly to ensure the customer experience never drops.",
              },
              {
                title: "Lead Generation & Qualification",
                desc: "Capture user data and qualify leads automatically based on user responses, helping businesses identify high-value prospects quickly.",
              },
              {
                title: "Customer Journey Insights",
                desc: "Track how users interact with your chatbot and understand their path through the sales funnel with Aivo’s customer journey mapping.",
              },
              {
                title: "Multilingual Capabilities",
                desc: "Break language barriers with multilingual support, allowing your bot to communicate effectively with customers worldwide.",
              },
              {
                title: "Advanced Analytics & Reporting",
                desc: "Measure chatbot performance, customer satisfaction, and user behavior to continuously optimize the experience and business impact.",
              },
            ].map((feature, index) => (
              <div className="col-md-4 px-4" key={index}>
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
                    Drift AI – A conversational AI platform for sales and
                    customer service, providing chat automation, lead
                    qualification, and real-time engagement.
                  </li>
                  <li className="mb-2">
                    Botsify – A chatbot platform designed to automate
                    communication across multiple channels, with AI support for
                    engaging users and improving customer experiences.
                  </li>
                  <li className="mb-2">
                    MobileMonkey – An AI-powered chatbot and marketing
                    automation platform that enables businesses to engage
                    customers across channels, including SMS, Facebook
                    Messenger, and Webchat.
                  </li>
                  <li className="mb-2">
                    Tidio – A platform offering live chat and AI-powered bots
                    that help businesses engage customers in real-time and
                    automate responses.
                  </li>
                  <li className="mb-2">
                    Intercom – A customer support and messaging platform with
                    AI-powered automation for personalized messaging and
                    efficient customer engagement.
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
                    Powerful AI and natural language processing (NLP) to
                    understand complex customer queries.
                  </li>
                  <li className="mb-2">
                    Can integrate seamlessly with messaging platforms like
                    WhatsApp, Facebook Messenger, and websites.
                  </li>
                  <li className="mb-2">
                    Provides omnichannel support with AI-powered chatbots and
                    live chat features.
                  </li>
                  <li className="mb-2">
                    High level of customization for each business, allowing
                    tailored conversations.
                  </li>
                  <li className="mb-2">
                    Offers advanced analytics and reporting features to optimize
                    customer service operations.
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
                    Requires some technical expertise for setup and integration
                    with systems.
                  </li>
                  <li className="mb-2">
                    Higher pricing compared to simpler chatbot tools.
                  </li>
                  <li className="mb-2">
                    AI may require adjustments for very specific industry needs.
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
                    Why Use Aivo AI?
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
                      Aivo AI provides advanced conversational support,
                      integrating AI with human-like responses.
                    </li>
                    <li className="mb-3">
                      Ideal for customer service, allowing businesses to handle
                      queries, offer personalized solutions, and improve
                      satisfaction.
                    </li>
                    <li className="mb-3">
                      Offers integrations with multiple platforms like WhatsApp,
                      Facebook Messenger, and websites.
                    </li>
                    <li className="mb-3">
                      Provides easy customization to suit brand tone and
                      specific industry needs.
                    </li>
                    <li className="mb-3">
                      Offers scalable solutions for small to large businesses,
                      improving team efficiency with AI automation.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Try Aivo AI Now
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
                  q: "What is Aivo AI?",
                  a: "Aivo AI is a platform for creating AI-driven chatbots that can be used in customer service, marketing, and lead generation across multiple channels.",
                },
                {
                  q: "What features does Aivo AI offer?",
                  a: "Aivo AI offers multi-channel deployment, AI-based natural language processing, analytics, and integrations with CRM tools.",
                },
                {
                  q: "How much does Aivo AI cost?",
                  a: "Aivo AI offers a customized pricing model based on the features and number of users. Contact their sales team for more information.",
                },
                {
                  q: "Can Aivo AI be integrated with CRM systems?",
                  a: "Yes, Aivo AI integrates with popular CRM systems such as Salesforce, HubSpot, and others for seamless customer data management.",
                },
                {
                  q: "How does Aivo AI enhance customer experience?",
                  a: "Aivo AI enhances customer experience by automating responses, offering personalized interactions, and providing instant support.",
                },
                {
                  q: "Can Aivo AI handle sales automation?",
                  a: "Yes, Aivo AI can qualify leads, automate follow-up, and provide sales teams with valuable insights to boost productivity.",
                },
                {
                  q: "Does Aivo AI offer multilingual support?",
                  a: "Yes, Aivo AI supports multiple languages, enabling businesses to engage with global customers.",
                },
                {
                  q: "What industries use Aivo AI?",
                  a: "Aivo AI is used across multiple industries, including eCommerce, healthcare, and banking, to automate customer service and marketing.",
                },
                {
                  q: "How does Aivo AI help in lead generation?",
                  a: "Aivo AI captures leads by interacting with website visitors, collecting their information, and qualifying them for follow-up.",
                },
                {
                  q: "Can I customize Aivo AI's chatbots?",
                  a: "Yes, Aivo AI allows businesses to customize chatbot responses, workflows, and integrations based on their specific needs.",
                },
                {
                  q: "Is Aivo AI easy to implement?",
                  a: "Yes, Aivo AI is designed for easy implementation with user-friendly dashboards and integration tools.",
                },
                {
                  q: "Can Aivo AI be used for marketing?",
                  a: "Yes, Aivo AI can automate marketing tasks such as customer engagement, product recommendations, and personalized campaigns.",
                },
                {
                  q: "Does Aivo AI support API integration?",
                  a: "Yes, Aivo AI provides API support for integrating with third-party systems and automating workflows.",
                },
                {
                  q: "What platforms can Aivo AI be deployed on?",
                  a: "Aivo AI can be deployed on websites, social media platforms, and messaging apps like Facebook Messenger and WhatsApp.",
                },
                {
                  q: "How does Aivo AI ensure data security?",
                  a: "Aivo AI follows industry best practices for data encryption and ensures compliance with data privacy regulations like GDPR.",
                },
                {
                  q: "Can Aivo AI help in onboarding customers?",
                  a: "Yes, Aivo AI can assist in onboarding by guiding new customers through tutorials and product setup.",
                },
                {
                  q: "Does Aivo AI support analytics?",
                  a: "Yes, Aivo AI provides analytics to track chatbot performance, customer interactions, and lead conversion rates.",
                },
                {
                  q: "How does Aivo AI compare to other AI platforms?",
                  a: "Aivo AI is known for its flexibility, scalability, and multi-channel capabilities compared to other AI platforms like Drift and Botsify.",
                },
                {
                  q: "Can Aivo AI be used for eCommerce?",
                  a: "Yes, Aivo AI is great for eCommerce, offering automated customer support, product recommendations, and order tracking.",
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
          <i className="bi bi-arrow-left me-2"></i>Back  {" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between mb-5">
            {/* Left side (Text Section) */}
            <div className="" style={{ flex: 1, paddingRight: "30px" }}>
              <img
                src=""
                alt="Logo"
                className="me-3"
                style={{ width: "60px" }}
              />
              <h2>Aivo AI</h2>
              <div className="text-warning mb-1">
                ⭐⭐⭐⭐⭐ 95% Satisfaction
              </div>
              <p>
                Aivo is an AI-powered customer service platform that enables
                businesses to automate their customer support and communication
                processes using chatbots and live chat. It is designed to
                provide intelligent conversations with users across multiple
                channels such as websites, WhatsApp, Facebook Messenger,
                Instagram, and SMS. Aivo enhances customer engagement, drives
                sales, and ensures seamless support through its AI-driven
                capabilities.
              </p>
                        <div className="mb-3">
                          <a
                            href= " https://aivo.ai"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary me-2"
                          >
                            Explore Tool
                          </a>
                        </div>
                      </div>
          
                      {/* Right side (Image Section) */}
                      <div
                        style={{
                          textAlign: "center",
                          Width: "100%",
                          height: "250px",
                        }}
                        className="col-md-6 col-12 order-md-2 order-1 text-center mb-3 mb-md-0  "
                      >
                        <img
                          src={aivo}
                          alt="aivo"
                          style={{
                            Width: "100%",
                            height: "auto",
                            maxHeight: "300px",
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    </div>
                  </div>


<section style={{ backgroundColor: "", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">
                Create Conversations with Aivo AI in 3 Easy Steps
              </p>
              <h2
                style={{
                  fontWeight: "semibold",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                How does Aivo AI work?
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
                      Start a Conversation with Aivo AI
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Aivo AI allows you to engage in real-time conversations.
                      Simply input a query, and it provides contextual responses
                      instantly.
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
                      Aivo AI Processes Your Query
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Aivo AI analyzes your input and provides intelligent,
                      real-time responses, allowing for efficient customer
                      support and engagement.
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
                      Automate Sales and Support with Aivo AI
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Automate your sales processes, customer support, and
                      improve customer engagement with Aivo AI’s advanced
                      conversational abilities.
                    </p>
                    <div className="step3">3</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tab Navigation */}
          <ul className="nav nav-tabs custom-tabs mb-4 py-3 px-10">
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
              <li className="nav-item mb-2 px-12" key={tab}>
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
   
    </>
  );
};

export default AivoAI;
