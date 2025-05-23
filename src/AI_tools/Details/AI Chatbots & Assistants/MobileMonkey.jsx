import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import mobilemonkey from '../../../../public/assets/Img/AI Chatbots & Assistants/38.png';
import costomerai from "../../../../public/assets/Img/AI For Chatbots/Customersai.png";

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

const MobileMonkey = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            {[
              {
                title: "AI Chatbots",
                desc: "MobileMonkey uses AI and machine learning to create chatbots capable of understanding natural language. These bots learn from user interactions, allowing them to handle more complex customer queries over time.",
              },
              {
                title: "Conversational Marketing",
                desc: "Drive sales and engagement using chatbots that personalize conversations, recommend products, and guide users through the sales funnel—transforming traditional marketing into interactive experiences.",
              },
              {
                title: "Lead Generation & Qualification",
                desc: "MobileMonkey automates the lead capture and qualification process by engaging visitors in real-time conversations, filtering high-intent leads, and forwarding them to the sales team.",
              },
              {
                title: "Multi-Channel Support",
                desc: "Engage with customers across popular messaging platforms including Facebook Messenger, WhatsApp, Instagram Direct, and SMS—all from a centralized dashboard.",
              },
              {
                title: "Marketing Automation Tools",
                desc: "Automate follow-ups, launch chat-based campaigns, and personalize messages with MobileMonkey’s built-in marketing automation tools to improve efficiency and ROI.",
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
                src={costomerai}
                alt="Screenshot 1"
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-md-6">
              <img
                src={costomerai}
                alt="Screenshot 2"
                className="img-fluid rounded-3"
              />
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
                    Drift AI – A conversational AI platform providing sales and
                    marketing automation with features like lead qualification,
                    meeting scheduling, and real-time engagement.
                  </li>
                  <li className="mb-2">
                    Botsify – A multi-channel chatbot platform with advanced AI
                    features to improve customer service and automate
                    conversations across various messaging platforms.
                  </li>
                  <li className="mb-2">
                    Aivo AI – An AI-based customer service platform that
                    automates conversations, enhances lead generation, and
                    improves customer engagement.
                  </li>
                  <li className="mb-2">
                    Intercom – A messaging platform with live chat, bots, and
                    marketing automation, offering intelligent customer
                    engagement solutions.
                  </li>
                  <li className="mb-2">
                    Tidio – A chatbot and live chat platform that provides
                    real-time communication, AI-powered automation, and
                    multi-channel support.
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
                    User-friendly chatbot platform that allows integration
                    across multiple messaging apps.
                  </li>
                  <li className="mb-2">
                    Advanced automation features for lead generation and
                    marketing campaigns.
                  </li>
                  <li className="mb-2">
                    Provides real-time engagement with prospects, helping
                    businesses capture and convert leads faster.
                  </li>
                  <li className="mb-2">
                    Supports integrations with email marketing systems, CRM
                    tools, and other business platforms.
                  </li>
                  <li className="mb-2">
                    Great for businesses looking to automate their customer
                    support and marketing activities.
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
                    Some advanced features may require a premium subscription.
                  </li>
                  <li className="mb-2">
                    Limited advanced analytics and customization options in
                    lower-tier plans.
                  </li>
                  <li className="mb-2">
                    Could require additional integrations for complex workflows
                    and multi-channel support.
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
                  q: "What is MobileMonkey?",
                  a: "MobileMonkey is an AI-powered chatbot platform that enables businesses to engage with customers via Facebook Messenger, SMS, and web chat.",
                },
                {
                  q: "What are the main features of MobileMonkey?",
                  a: "MobileMonkey includes multi-channel support, lead qualification, chatbot automation, and integration with CRM and email marketing systems.",
                },
                {
                  q: "How much does MobileMonkey cost?",
                  a: "MobileMonkey offers a free plan for basic features. Paid plans start at $19 per month with additional functionalities and integrations.",
                },
                {
                  q: "Can I integrate MobileMonkey with my website?",
                  a: "Yes, MobileMonkey provides widgets that you can integrate into your website for real-time customer interactions.",
                },
                {
                  q: "Does MobileMonkey support multi-channel communication?",
                  a: "Yes, MobileMonkey supports SMS, Facebook Messenger, and web chat, allowing businesses to communicate with customers across multiple channels.",
                },
                {
                  q: "How does MobileMonkey help with customer support?",
                  a: "MobileMonkey automates customer support by answering frequently asked questions, guiding customers through processes, and escalating issues when necessary.",
                },
                {
                  q: "How customizable are MobileMonkey’s chatbots?",
                  a: "MobileMonkey chatbots are highly customizable, allowing businesses to create tailored conversation flows, responses, and user experiences.",
                },
                {
                  q: "How does MobileMonkey help with lead generation?",
                  a: "MobileMonkey helps generate leads by engaging website visitors, qualifying them, and passing high-quality leads to your sales team for follow-up.",
                },
                {
                  q: "Can MobileMonkey handle multiple languages?",
                  a: "Yes, MobileMonkey supports multiple languages for global customer engagement.",
                },
                {
                  q: "What integrations does MobileMonkey support?",
                  a: "MobileMonkey integrates with platforms such as Mailchimp, HubSpot, Google Sheets, and more, allowing for seamless customer data management.",
                },
                {
                  q: "How does MobileMonkey improve customer engagement?",
                  a: "MobileMonkey improves engagement by automating responses, offering personalized interactions, and providing real-time assistance.",
                },
                {
                  q: "Can MobileMonkey be used for eCommerce?",
                  a: "Yes, MobileMonkey can be used for product recommendations, customer inquiries, and order tracking in eCommerce.",
                },
                {
                  q: "How does MobileMonkey handle lead qualification?",
                  a: "MobileMonkey uses pre-set qualification workflows to qualify leads, helping sales teams focus on high-priority prospects.",
                },
                {
                  q: "Can MobileMonkey automate marketing tasks?",
                  a: "Yes, MobileMonkey can automate tasks like lead nurturing, drip campaigns, and personalized marketing based on customer behavior.",
                },
                {
                  q: "Is MobileMonkey suitable for small businesses?",
                  a: "Yes, MobileMonkey's affordable pricing and easy-to-use interface make it ideal for small businesses looking to improve customer engagement.",
                },
                {
                  q: "How secure is MobileMonkey?",
                  a: "MobileMonkey follows industry-standard security practices, including encryption and secure data handling.",
                },
                {
                  q: "Does MobileMonkey offer a free trial?",
                  a: "Yes, MobileMonkey offers a free plan with basic features, allowing businesses to try the platform before committing to a paid plan.",
                },
                {
                  q: "How does MobileMonkey handle sales automation?",
                  a: "MobileMonkey automates lead qualification, sends follow-up messages, and schedules meetings with sales teams, improving sales efficiency.",
                },
                {
                  q: "Can I use MobileMonkey for SMS marketing?",
                  a: "Yes, MobileMonkey includes SMS marketing features, allowing businesses to engage with customers via text messaging.",
                },
                {
                  q: "What industries benefit from MobileMonkey?",
                  a: "MobileMonkey is used in eCommerce, healthcare, education, and other industries for automating customer engagement and improving sales.",
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

      case "why-we-use":
        return (
          <div className="container">
            <div className="row g-4">
              <div className="col-12">
                <div className="custom-card text-light p-5 text-center">
                  <h3 className="fw-bold mb-4 text-start text-primary">
                    Why Use MobileMonkey?
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
                      MobileMonkey is designed for seamless marketing automation
                      with chatbots across multiple channels like Facebook
                      Messenger, SMS, and more.
                    </li>
                    <li className="mb-3">
                      Perfect for marketers looking to automate lead generation,
                      customer engagement, and follow-ups.
                    </li>
                    <li className="mb-3">
                      Provides tools for creating AI-driven chatbots without
                      requiring any coding knowledge.
                    </li>
                    <li className="mb-3">
                      Helps businesses personalize conversations, boosting
                      customer experience and conversion rates.
                    </li>
                    <li className="mb-3">
                      Integrates with popular CRM systems and marketing tools to
                      streamline your marketing efforts.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Try MobileMonkey Now
                    </Button>
                  </div>
                </div>
              </div>
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
          <div className="d-flex align-items-center justify-content-between mb-5 lovaaiflex">
            {/* Left side (Text Section) */}
            <div style={{ flex: 1, paddingRight: "30px" }}>
           
              <h2>MobileMonkey</h2>
              <div className="text-warning mb-1">
                ⭐⭐⭐⭐⭐ 95% Satisfaction
              </div>
              <p>
                MobileMonkey is an AI-powered chatbot platform designed to
                automate customer communication through multiple channels,
                including Facebook Messenger, Instagram Direct, WhatsApp, and
                SMS. It leverages conversational marketing and AI chatbots to
                drive sales automation, streamline lead generation, and provide
                customer support. MobileMonkey is designed for businesses of all
                sizes and industries, offering a scalable solution to improve
                customer engagement and automate repetitive tasks.
              </p>

              <a
                                 href=" https://app.mobilemonkey.com/"
                                 rel="noopener noreferrer"
                                 className="btn btn-primary me-2"
                               >
                                 Explore Tool
                               </a>
            </div>

            {/* Right side (Image Section) */}
            <div style={{ flex: 1, textAlign: "center" }}>
              <img
                src={mobilemonkey}
                className="img-fluid rounded-3"
                style={{ maxWidth: "80%", height: "auto" }}
              />
            </div>
          </div>
          <section style={{ backgroundColor: "", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">
                Create Conversations with MobileMonkey in 3 Easy Steps
              </p>
              <h2
                style={{
                  fontWeight: "semibold",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                How does MobileMonkey work?
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
                      Start a Conversation with MobileMonkey
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Engage your customers instantly through chat. MobileMonkey
                      powers real-time conversations and automates responses for
                      improved engagement.
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
                      MobileMonkey Processes Your Query
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      MobileMonkey uses conversational AI to provide instant,
                      context- aware responses, enhancing customer engagement
                      and improving customer support.
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
                      Automate Sales & Support with MobileMonkey
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Automate your sales processes, manage customer support,
                      and engage customers more efficiently with MobileMonkey.
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

        
        </div>
      </div>
    </>
  );
};

export default MobileMonkey;