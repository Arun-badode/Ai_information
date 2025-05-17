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

const FlowXO = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            {[
              {
                title: "Drag-and-Drop Chatbot Builder",
                desc: "Easily design chatbots using Flow XO’s visual builder—no coding required. Create conversation flows intuitively with a user-friendly drag-and-drop interface.",
              },
              {
                title: "Live Chat Integration",
                desc: "Combine AI-powered automation with human support by enabling seamless transition from chatbot to live chat within your customer interactions.",
              },
              {
                title: "AI Intent & Sentiment Detection",
                desc: "Flow XO detects user intent and sentiment, allowing bots to respond appropriately and escalate emotional or sensitive queries when needed.",
              },
              {
                title: "Lead Generation & Qualification",
                desc: "Capture, filter, and qualify leads automatically based on user input, behaviors, and responses—streamlining your sales pipeline.",
              },
              {
                title: "Payment Processing Inside Chats",
                desc: "Accept payments directly within the chat interface through Stripe integration, offering a frictionless buying experience to your users.",
              },
              {
                title: "CRM & App Integrations",
                desc: "Integrate Flow XO with CRMs, Google Sheets, Slack, Mailchimp, and 100+ apps to streamline workflows and keep your data synchronized.",
              },
              {
                title: "Analytics & Reporting",
                desc: "Monitor performance with built-in analytics and reporting tools that help you track engagement, conversion rates, and bot effectiveness.",
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
              <img
                src=""
                alt="Screenshot 1"
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-md-6">
              <img
                src=""
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
                    Zapier – A leading automation tool that connects apps and
                    automates workflows, ideal for integrating Flow XO with
                    other services.
                  </li>
                  <li className="mb-2">
                    Integromat – Offers advanced automation features and
                    multi-step workflows for complex business processes.
                  </li>
                  <li className="mb-2">
                    Chatfuel – A no-code chatbot platform for building Facebook
                    Messenger bots, great for customer support and marketing
                    automation.
                  </li>
                  <li className="mb-2">
                    ManyChat – A chatbot builder focused on creating bots for
                    marketing, sales, and customer support across multiple
                    channels like Facebook, Instagram, and SMS.
                  </li>
                  <li className="mb-2">
                    MobileMonkey – A multi-platform chatbot builder for
                    businesses to automate customer communication on Facebook,
                    web, and SMS.
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
                    Why Use Flow XO AI?
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
                      Flow XO AI simplifies customer communication by
                      integrating AI-driven chatbots into business processes.
                    </li>
                    <li className="mb-3">
                      Ideal for automating customer support, marketing, and
                      sales engagement across multiple platforms.
                    </li>
                    <li className="mb-3">
                      Offers seamless integration with a variety of tools and
                      platforms, improving workflow and data synchronization.
                    </li>
                    <li className="mb-3">
                      Allows businesses to collect customer data in real-time,
                      enhancing personalization and customer service.
                    </li>
                    <li className="mb-3">
                      Provides no-code workflows for businesses to easily
                      automate tasks, reducing manual effort and increasing
                      efficiency.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Try Flow XO AI Now
                    </Button>
                  </div>
                </div>
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
                    Automates customer communication, saving time and improving
                    efficiency.
                  </li>
                  <li className="mb-2">
                    Integrates seamlessly with popular platforms like Slack,
                    Facebook, and more.
                  </li>
                  <li className="mb-2">
                    Customizable chatbots and workflows for different business
                    needs.
                  </li>
                  <li className="mb-2">
                    Provides multi-channel support, allowing businesses to
                    engage customers across multiple platforms.
                  </li>
                  <li className="mb-2">
                    User-friendly, no-code interface for businesses without
                    technical expertise.
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
                    Can be challenging to set up for more complex use cases
                    without technical assistance.
                  </li>
                  <li className="mb-2">
                    Premium features are locked behind a subscription.
                  </li>
                  <li className="mb-2">
                    The platform can experience limitations when handling a
                    large volume of conversations simultaneously.
                  </li>
                </ul>
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
                  q: "What is Flow XO?",
                  a: "Flow XO is a cloud-based platform that enables users to create and deploy chatbots and automated workflows across various channels, including websites, Facebook Messenger, WhatsApp, Slack, and SMS. It offers a no-code interface, making it accessible for businesses to automate customer interactions without programming knowledge.",
                },
                {
                  q: "What are the main features of Flow XO?",
                  a: "Key features include a visual chatbot builder, multi-channel deployment, live chat integration, AI-powered intent detection, sentiment analysis, webhook support, and over 100 integrations with third-party applications.",
                },
                {
                  q: "How much does Flow XO cost?",
                  a: "Flow XO offers a free plan with limited features. Paid plans start at $19 per month, providing additional interactions, bots, and advanced functionalities. Pricing details can be found on their official pricing page.",
                },
                {
                  q: "Can I integrate Flow XO with other applications?",
                  a: "Yes, Flow XO supports integrations with various applications such as Google Sheets, Mailchimp, Salesforce, and more. These integrations facilitate seamless data exchange and workflow automation.",
                },
                {
                  q: "Is Flow XO suitable for small businesses?",
                  a: "Absolutely. Flow XO's user-friendly interface and affordable pricing make it an excellent choice for small to medium-sized businesses looking to enhance customer engagement and automate routine tasks.",
                },
                {
                  q: "How does Flow XO handle customer support automation?",
                  a: "Flow XO allows businesses to automate customer support by creating chatbots that can answer FAQs, guide users through processes, and escalate complex issues to human agents via live chat integration.",
                },
                {
                  q: "What channels does Flow XO support for chatbot deployment?",
                  a: "Flow XO supports multiple channels, including:\nWebsites\nFacebook Messenger\nWhatsApp\nSlack\nSMS (via Twilio)\nTelegram",
                },
                {
                  q: "Does Flow XO offer templates for chatbot creation?",
                  a: "Yes, Flow XO provides pre-built templates that users can customize to fit their specific needs, expediting the chatbot development process.",
                },
                {
                  q: "How does Flow XO compare to ManyChat and Chatfuel?",
                  a: "Flow XO vs. ManyChat: Flow XO offers broader multi-channel support and deeper integrations, while ManyChat is primarily focused on Facebook Messenger marketing.\nFlow XO vs. Chatfuel: Flow XO provides more extensive integration options and a more flexible workflow builder compared to Chatfuel's emphasis on Facebook Messenger bots.",
                },
                {
                  q: "Is there a tutorial available for getting started with Flow XO?",
                  a: "Yes, Flow XO offers comprehensive tutorials and documentation in their Help Center to assist users in building and deploying chatbots effectively.",
                },
                {
                  q: "What is the Flow XO API, and how can I use it?",
                  a: "The Flow XO API allows developers to programmatically interact with the platform, enabling advanced integrations and custom functionalities beyond the standard features.",
                },
                {
                  q: "Can I use Flow XO for lead generation?",
                  a: "Yes, Flow XO is equipped with tools to capture and qualify leads through interactive chatbots, which can be integrated with CRM systems for seamless lead management.",
                },
                {
                  q: "How does Flow XO's AI-powered chatbot work?",
                  a: "Flow XO utilizes AI capabilities such as intent detection and sentiment analysis to understand user inputs and respond appropriately, enhancing the conversational experience.",
                },
                {
                  q: "What is the process for building a chatbot with Flow XO?",
                  a: "Building a chatbot involves:\nDefining the chatbot's purpose and goals.\nUsing the visual builder to create conversational flows.\nIntegrating necessary applications and services.\nTesting the chatbot using the built-in tools.\nDeploying the chatbot across chosen channels.",
                },
                {
                  q: "Does Flow XO support webhook integration?",
                  a: "Yes, Flow XO supports webhooks, allowing for real-time data exchange between the chatbot and external systems, facilitating dynamic and responsive interactions.",
                },
                {
                  q: "Can I collect user data using Flow XO?",
                  a: "Flow XO enables the collection of user data through conversational interactions, which can be stored, analyzed, and utilized for personalized engagement and marketing strategies.",
                },
                {
                  q: "Is there a free trial available for Flow XO?",
                  a: "Flow XO offers a free plan with limited features, allowing users to explore the platform's capabilities before committing to a paid subscription.",
                },
                {
                  q: "What industries can benefit from using Flow XO?",
                  a: "Flow XO is versatile and can be applied across various industries, including:\nE-commerce\nHealthcare\nFinance\nEducation\nEvent Management",
                },
                {
                  q: "How does Flow XO handle multilingual chatbots?",
                  a: "Flow XO supports the creation of multilingual chatbots, enabling businesses to engage with a diverse customer base by providing interactions in multiple languages.",
                },
                {
                  q: "What kind of support does Flow XO offer?",
                  a: "Flow XO provides support through their Help Center, community forums, and direct contact options to assist users with any issues or questions.",
                },
              ]
                .map((item, i) => ({ ...item, id: `faq${i}`}))
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
              <h2>Flow XO</h2>
              <div className="text-warning mb-1">
                ⭐⭐⭐⭐⭐ 95% Satisfaction
              </div>
              <p>
                Flow XO is an AI-powered chatbot and automation platform that
                allows businesses to build intelligent digital assistants for
                websites, Messenger, WhatsApp, Slack, and SMS. It helps automate
                customer support, lead generation, sales funnels, and
                appointment scheduling without coding.
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
                Create Conversations with Flow XO in 3 Easy Steps
              </p>
              <h2
                style={{
                  fontWeight: "semibold",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                How does Flow XO work?
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
                      Create a Flow with Flow XO
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Start by creating a new flow within Flow XO. Choose from
                      templates or build your own automated workflows.
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
                      Automate Responses with Flow XO
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      With Flow XO, automate your responses based on pre-set
                      conditions, ensuring real-time engagement with your
                      customers.
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
                      Enhance Workflow & Engage Customers
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Flow XO helps automate workflows, track responses, and
                      personalize interactions, improving customer satisfaction
                      and business efficiency.
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
            <h4 className="mb-3">Ready to get started with Flow XO?</h4>
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

export default FlowXO;