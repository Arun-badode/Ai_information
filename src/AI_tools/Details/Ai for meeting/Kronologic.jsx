import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

import magisto from "../../../../public/assets/Img/AI for Animation/14.png";
import kronologic from "../../../../public/assets/Img/AI for Meeting/6.png";
import scn1 from "../../../../public/assets/Img/AI for Meeting/kronologicA1.jpeg";
import scn2 from "../../../../public/assets/Img/AI for Meeting/kronologicS2.jpeg";

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
const Kronologic= () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
            return (
                  <div className="row g-4">
                  <div className="text-center">
                    <p className="text-primary">Turn Leads into Meetings Instantly</p>
                    <h3 className="">AI-Powered Scheduling That Works While You Sleep</h3>
                  </div>
                  {[
                    {
                      icon: "⏰",
                      title: "Automated Meeting Scheduling:",
                      desc: "Let Kronologic instantly schedule meetings with leads without human intervention or back-and-forth emails.",
                    },
                    {
                      icon: "⚡",
                      title: "Real-Time Lead Engagement:",
                      desc: "Engage inbound leads in real-time by sending calendar invites moments after they express interest.",
                    },
                    {
                      icon: "🤖",
                      title: "AI-Driven Personalization:",
                      desc: "Craft personalized emails and invites at scale, tailored to each recipient’s preferences and behaviors.",
                    },
                    {
                      icon: "📅",
                      title: "Calendar Integration:",
                      desc: "Syncs seamlessly with Outlook, Google Calendar, and CRMs for end-to-end scheduling automation.",
                    },
                    {
                      icon: "📊",
                      title: "Meeting Conversion Analytics:",
                      desc: "Track meeting acceptance rates, no-shows, and optimize your outreach based on real data.",
                    },
                  ].map((feature, index) => (
                    <div className="col-md-4" key={index}>
                      <div
                        className="custom-card text-light p-4 h-100"
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
                
      case "screenshots":
        return (
          <div className="row g-4">
            <div className="col-md-6">
              <img
                src={scn1}
                alt="kronologic"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={scn2}
                alt="kronologic"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
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

      case "FAQs":
        return (
          <div className="faq-section container py-5">
            <h3 className="text-center text-white mb-5 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              { [
  {
    q: "What is Kronologic AI?",
    a: "Kronologic AI is an AI-powered scheduling platform that automatically books meetings with leads, prospects, and customers without human intervention.",
  },
  {
    q: "How does Kronologic AI work?",
    a: "It uses AI to send dynamic calendar invites, follow up automatically, and secure meetings based on recipient behavior and availability.",
  },
  {
    q: "Who should use Kronologic AI?",
    a: "Sales, marketing, and customer success teams looking to increase conversions by automating scheduling and accelerating deal cycles.",
  },
  {
    q: "Is Kronologic AI easy to integrate?",
    a: "Yes, Kronologic integrates with popular CRMs like Salesforce and HubSpot, as well as Google and Outlook calendars.",
  },
  {
    q: "What makes Kronologic AI different from other schedulers?",
    a: "Unlike calendar links, Kronologic takes a proactive approach by directly sending proposed calendar events, reducing friction and drop-offs.",
  },
  {
    q: "Does Kronologic AI replace human scheduling?",
    a: "It automates the scheduling process to save time and effort, but teams still control messaging, cadence, and campaign logic.",
  },
  {
    q: "Can Kronologic AI follow up if someone doesn't respond?",
    a: "Yes, Kronologic AI can send smart follow-up emails to increase the chance of booking a meeting.",
  },
  {
    q: "Does Kronologic AI support multi-time zone scheduling?",
    a: "Yes, it automatically detects time zones and adjusts meeting times accordingly.",
  },
  {
    q: "Is Kronologic AI customizable?",
    a: "Absolutely. You can customize the messages, meeting types, duration, and available times to fit your workflow.",
  },
  {
    q: "What platforms does Kronologic support?",
    a: "It supports integrations with Gmail, Outlook, Salesforce, HubSpot, and other business productivity tools.",
  },
  {
    q: "Can I use Kronologic AI with marketing automation tools?",
    a: "Yes, Kronologic AI can be integrated with tools like Marketo, Pardot, and others for seamless campaign coordination.",
  },
  {
    q: "Does Kronologic AI have analytics and reporting?",
    a: "Yes, it provides dashboards and insights to track scheduled meetings, conversions, and performance metrics.",
  },
  {
    q: "Is training required to use Kronologic AI?",
    a: "No advanced training is required. The platform is designed to be intuitive and easy to set up.",
  },
  {
    q: "How secure is Kronologic AI?",
    a: "Kronologic follows enterprise-grade security standards including data encryption and GDPR compliance.",
  },
  {
    q: "Can Kronologic handle large outreach campaigns?",
    a: "Yes, Kronologic is built to scale and can manage thousands of calendar invites and follow-ups in real-time.",
  },
  {
    q: "Is there a mobile app for Kronologic AI?",
    a: "Currently, Kronologic is primarily web-based, but calendar invites and communications are mobile-friendly.",
  },
  {
    q: "Can I pause or stop automated invites?",
    a: "Yes, you can pause campaigns or stop individual sequences at any time from the dashboard.",
  },
  {
    q: "Does Kronologic AI handle rescheduling automatically?",
    a: "Yes, if the recipient proposes a new time, Kronologic can handle rescheduling without manual input.",
  },
  {
    q: "What industries benefit most from Kronologic AI?",
    a: "It is especially effective in SaaS, B2B sales, recruiting, consulting, and any sector that relies on outbound lead engagement.",
  },
  {
    q: "Does Kronologic offer a free trial?",
    a: "Yes, Kronologic typically offers a demo and trial to evaluate the platform before committing.",
  },
  {
    q: "Can Kronologic AI integrate with my current lead capture system?",
    a: "Yes, Kronologic works well with existing lead forms, CRMs, and marketing pipelines.",
  },
  {
    q: "How fast can Kronologic be set up?",
    a: "You can usually set up Kronologic and start automating meetings within a few hours.",
  },
  {
    q: "Can Kronologic AI be used for recruiting interviews?",
    a: "Yes, recruiters use Kronologic to schedule interviews quickly and reduce time-to-hire.",
  },
  {
    q: "What types of meetings can Kronologic schedule?",
    a: "Sales demos, discovery calls, onboarding sessions, follow-ups, and more—any meeting type you define.",
  },
  {
    q: "Does Kronologic AI support team scheduling?",
    a: "Yes, it can intelligently route meetings to the appropriate rep based on territory, availability, or priority.",
  }
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
                  Why Use Kronologic AI?</h3>

<ul className="text-start clara-benefits-list">
  <li className="mb-3">
    Kronologic AI automates meeting scheduling, turning inbound interest into actual calendar events without human intervention.
  </li>
  <li className="mb-3">
    Ideal for sales and marketing teams aiming to accelerate pipeline velocity and increase conversion rates.
  </li>
  <li className="mb-3">
    Delivers real-time analytics and engagement insights to optimize outreach strategies.
  </li>
  <li className="mb-3">
    Seamlessly integrates with CRMs, marketing platforms, and calendar systems via robust APIs.
  </li>
  <li className="mb-3">
    Built for ease of use with a cloud-based interface that requires no coding knowledge to get started.
  </li>
</ul>


<div className="text-center mt-4">
  <button type="button" className="btn btn-primary btn-sm">
    Get Started with Kronologic AI
  </button>
</div>

                </div>
              </div>
            </div>
          </div>
        );

      case "pros & cons":
        return (
            <div className="container my-5">
            <h4 className="text-center text-light mb-4">Pros & Cons</h4>
            <div className="row justify-content-center gap-2">
              {/* Pros Column */}
              <div className="col-lg-5 col-md-6 col-sm-12 pros-cons-box">
                <h5 className="text-success text-start mb-4">✅ Pros</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    Automates sales meeting scheduling and follow-ups to accelerate deal closures.
                  </li>
                  <li className="mb-2">
                    Deep integration with major CRMs, calendars, and communication platforms.
                  </li>
                  <li className="mb-2">
                    Reduces manual outreach and boosts sales pipeline efficiency.
                  </li>
                  <li className="mb-2">
                    User-friendly no-code platform accessible to sales teams of all technical levels.
                  </li>
                  <li className="mb-2">
                    Provides actionable insights to optimize meeting success and conversion rates.
                  </li>
                </ul>
              </div>
          
              {/* Cons Column */}
              <div className="col-lg-5 col-md-6 col-sm-12 pros-cons-box">
                <h5 className="text-warning text-start mb-4">⚠ Cons</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    Initial setup and CRM configurations may require technical support.
                  </li>
                  <li className="mb-2">
                    Some advanced features are locked behind premium subscription tiers.
                  </li>
                  <li className="mb-2">
                    Fully cloud-based platform, limiting offline accessibility.
                  </li>
                  <li className="mb-2">
                    Customizing workflows to fit unique sales processes may take additional time.
                  </li>
                </ul>
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
    Kronologic AI – AI-powered meeting scheduling that automates sales appointments and follow-ups.
  </li>
  <li className="mb-2">
    Seamless CRM Integration – Connects with Salesforce, HubSpot, and other major CRMs for streamlined workflows.
  </li>
  <li className="mb-2">
    AI-Driven Sales Insights – Provides actionable analytics to improve pipeline velocity and conversion rates.
  </li>
  <li className="mb-2">
    No-Code Automation – Easy setup with a user-friendly interface, suitable for non-technical sales teams.
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
          className="d-inline-block text-white text-decoration-none  mt-3 ml-3 py-1 px-2 ms-5 border rounded-sm"
        >
          <i className="bi bi-arrow-left me-2"></i>Back  {" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
          <div className=" row d-flex align-items-center justify-content-between mb-1">
            {/* Left side (Text Section) */}
            <div
              style={{ paddingRight: "30px" }}
              className="col-md-6  col-12 order-2 order-md-1 "
            >
              <p className="text-primary">Write better, faster</p>
              <h1> Kronologic AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
              Kronologic AI is an AI-powered tool designed to streamline the process of scheduling, meeting coordination, and task management for businesses, teams, and individuals. By automating the scheduling process, Kronologic AI helps optimize time, reduce meeting overload, and improve productivity. With its smart scheduling assistant, Kronologic AI integrates with popular tools such as Google Calendar, Outlook, and Slack to help manage appointments, meetings, and reminders with ease. Its powerful features ensure that tasks are prioritized, meetings are scheduled efficiently, and collaboration is seamless.
              </p>

              <div className="mb-3">
                <a
                  href="https://us.app.kronologic.ai/"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-2"
                  target="_blank"
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
                src={kronologic}
                alt="kronologic"
                style={{
                  Width: "100%",
                  height: "auto",
                  maxHeight: "300px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
          <section style={{ backgroundColor: "", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">Explore in 3 Simple Steps</p>
              <h2
                style={{
                  fontWeight: "semibold",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
How to Use Kronologic AI?</h2>

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
        Connect Your Calendar & CRM
      </h5>
      <p style={{ color: "#fff", margin: 0 }}>
        Integrate Kronologic AI with your calendar and CRM system to enable automated meeting scheduling and sales workflow automation.
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
        Define Meeting Criteria
      </h5>
      <p style={{ color: "#fff", margin: 0 }}>
        Set your preferences for meeting types, availability windows, and target contacts to let Kronologic AI schedule smartly on your behalf.
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
        Automate & Optimize
      </h5>
      <p style={{ color: "#fff", margin: 0 }}>
        Kronologic AI proactively reaches out to prospects, books meetings based on mutual availability, and optimizes your sales cadence for better engagement.
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

              "why-we-use",
              "pros & cons",
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

export default Kronologic;
