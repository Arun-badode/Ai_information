import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";


import scn1 from "../../../../public/assets/Img/AI for Meeting/sidekickS2.jpeg";
import scn2 from "../../../../public/assets/Img/AI for Meeting/sidekickS2.jpeg";

import sidekick from "../../../../public/assets/Img/AI for Meeting/8.png";
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
const Sidekick = () => {
  const [activeTab, setActiveTab] = useState("features"); 
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
<div className="row g-4">
  <div className="text-center">
    <p className="text-primary">Enhance Your Workflow with Sidekick AI</p>
    <h3>Intelligent Assistance for Scheduling & Task Automation</h3>
  </div>
  {[
    {
      icon: "🤖",
      title: "Context-Aware Scheduling:",
      desc: "Sidekick AI learns your habits and preferences to schedule meetings seamlessly.",
    },
    {
      icon: "📅",
      title: "Smart Task Management:",
      desc: "Automatically prioritize and organize tasks based on deadlines and urgency.",
    },
    {
      icon: "🔗",
      title: "Wide Integrations:",
      desc: "Connect effortlessly with Google Calendar, Microsoft Outlook, Slack, and more.",
    },
    {
      icon: "📈",
      title: "Productivity Insights:",
      desc: "Receive actionable analytics to improve your daily workflow and focus.",
    },
    {
      icon: "⚡",
      title: "One-Click Actions:",
      desc: "Quickly reschedule, delegate, or create meetings with intelligent suggestions.",
    },
  ].map((feature, index) => (
    <div className="col-md-4" key={index}>
      <div
        className="custom-card text-light p-4 h-100"
        style={{ border: "1px solid #7B68EE" }}
      >
        <div className="icon mb-3" style={{ fontSize: "2rem" }}>{feature.icon}</div>
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
                alt="sidekick"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={scn2}
                alt="sidekick"
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
  {[
    {
      q: "What is Sidekick AI?",
      a: "Sidekick AI is an intelligent assistant designed to streamline your scheduling and task management through smart AI-driven automation.",
    },
    {
      q: "How does Sidekick AI boost productivity?",
      a: "By analyzing your calendar and priorities, Sidekick AI suggests optimal meeting times and task orders to maximize your efficiency.",
    },
    {
      q: "Can Sidekick AI sync with other calendar apps?",
      a: "Yes, Sidekick AI integrates smoothly with Google Calendar, Microsoft Outlook, and other popular calendar platforms.",
    },
    {
      q: "Is Sidekick AI suitable for team collaboration?",
      a: "Absolutely! Sidekick AI offers team features that simplify coordinating meetings and project deadlines among members.",
    },
    {
      q: "Does Sidekick AI help prioritize tasks?",
      a: "Yes, it automatically organizes your tasks by urgency and deadlines, keeping your workflow focused and effective.",
    },
    {
      q: "Is there a mobile app for Sidekick AI?",
      a: "Currently, Sidekick AI is accessible through mobile-optimized web browsers, with dedicated mobile apps coming soon.",
    },
    {
      q: "Can Sidekick AI automatically suggest meeting times?",
      a: "Yes, using advanced AI, Sidekick AI finds the best meeting slots that accommodate all participants and avoid conflicts.",
    },
    {
      q: "Does Sidekick AI provide productivity analytics?",
      a: "Sidekick AI offers insightful reports to help you understand your work patterns and improve time management.",
    },
    {
      q: "Is Sidekick AI easy for beginners to use?",
      a: "Definitely, Sidekick AI features an intuitive interface requiring no technical expertise for effortless scheduling.",
    },
    {
      q: "Can Sidekick AI handle recurring meetings?",
      a: "Yes, you can easily set up and manage recurring meetings within Sidekick AI’s platform.",
    },
    {
      q: "How secure is Sidekick AI?",
      a: "Sidekick AI uses robust security measures and encryption to safeguard your personal and scheduling data.",
    },
    {
      q: "Does Sidekick AI manage time zones automatically?",
      a: "Yes, it automatically adjusts for time zone differences to prevent scheduling errors across locations.",
    },
    {
      q: "Can I customize notifications in Sidekick AI?",
      a: "Yes, you can personalize reminders and notifications to suit your workflow and preferences.",
    },
    {
      q: "Is Sidekick AI free to use?",
      a: "Sidekick AI offers a free plan with essential features and premium subscriptions for advanced options.",
    },
    {
      q: "Does Sidekick AI integrate with project management tools?",
      a: "Yes, Sidekick AI supports integrations with popular project management software to streamline your workflow.",
    },
    {
      q: "Does Sidekick AI support voice commands?",
      a: "Voice command support is planned for upcoming releases to enhance hands-free productivity.",
    },
    {
      q: "Can Sidekick AI assist with email scheduling?",
      a: "Sidekick AI integrates with email clients to help you schedule meetings directly from your inbox.",
    },
    {
      q: "How do I get started with Sidekick AI?",
      a: "Simply create an account on the Sidekick AI website, connect your calendars, and start managing your schedule smarter.",
    },
    {
      q: "Is customer support available for Sidekick AI users?",
      a: "Yes, we provide customer support via email and live chat to assist all users promptly.",
    },
    {
      q: "Is Sidekick AI suitable for remote teams?",
      a: "Yes, Sidekick AI is designed to help remote teams coordinate meetings and tasks across different time zones effortlessly.",
    },
  ]
    .map((item, i) => ({ ...item, id: `faq${i}` }))
    .filter((item, i, arr) => showAllFaqs || i < 4)
    .map((item, i) => (
      <div className="accordion-item mb-3" key={item.id}>
        <h2 className="accordion-header" id={`heading${item.id}`}>
          <button
            className={`accordion-button ${i !== 0 ? "collapsed" : ""}`}
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
          className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
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
  Why Use Sidekick AI?
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
    Sidekick AI simplifies your scheduling and task management through smart AI automation.
  </li>
  <li className="mb-3">
    Built for individuals and teams to enhance productivity with minimal effort.
  </li>
  <li className="mb-3">
    Uses AI to prioritize your tasks and streamline your daily workflow efficiently.
  </li>
  <li className="mb-3">
    Intuitive interface designed for easy use, requiring no technical skills.
  </li>
  <li className="mb-3">
    Cloud-based solution accessible anytime, keeping your schedule synced across devices.
  </li>
</ul>


    <div className="text-center mt-4">
      <Button variant="primary" size="sm">
        Get Started with Trevor AI
      </Button>
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
        Employs AI to smartly prioritize tasks and optimize your schedule.
      </li>
      <li className="mb-2">
        Automates repetitive scheduling to save valuable time.
      </li>
      <li className="mb-2">
        Easily integrates with major calendars and productivity platforms.
      </li>
      <li className="mb-2">
        Clean, intuitive UI ideal for both solo users and collaborative teams.
      </li>
      <li className="mb-2">
        Cloud-powered access ensures your schedule is always up to date.
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
        Some premium features require a subscription to unlock.
      </li>
      <li className="mb-2">
        AI suggestions might occasionally differ from individual preferences.
      </li>
      <li className="mb-2">
        Offline use is limited due to cloud-based syncing requirements.
      </li>
      <li className="mb-2">
        Minor delays can occur syncing with third-party calendar apps.
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
      Clara – AI scheduling assistant that automates meeting coordination with natural language processing.
    </li>
    <li className="mb-2">
      Meetingbird – Smart calendar and scheduling tool designed to simplify meeting booking.
    </li>
    <li className="mb-2">
      Otter.ai – AI-powered meeting transcription and collaboration assistant.
    </li>
    <li className="mb-2">
      x.ai – Intelligent scheduling assistant that manages your calendar and schedules meetings automatically.
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
        {/* <a
          href="/Aitools"
          className="d-inline-block text-white text-decoration-none ml-3 py-1"
        >
          <i className="bi bi-arrow-left me-2"></i>Back to Directory{" "}
        </a> */}
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
              <p className="text-primary">Time better, faster</p>
              <h1>Sidekick AI</h1>
<div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
<p>
  Sidekick AI is an intelligent personal assistant designed to supercharge your productivity by automating scheduling, task management, and email workflows. It uses AI to proactively suggest meeting times, prioritize tasks, and streamline communication for both individuals and teams. Sidekick AI integrates smoothly with Google Calendar, Outlook, and popular communication platforms like Slack and Microsoft Teams, providing a unified hub for efficient time and task management.
</p>


              <div className="mb-3">
                <a
                  href="https://sidekickai.co/"
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
                src={sidekick}
                alt="sidekick"
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
How to Use Sidekick AI?</h2>

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
      <style>{`
        .step1 {
          position: absolute;
          bottom: 10px;
          right: 15px;
          font-size: 4rem;
          font-weight: bold;
          color: #7b61ff;
          opacity: 0.6;
        }
      `}</style>
      <h5 style={{ fontWeight: "bold", color: "#fff" }}>Integrate Your Email & Calendar</h5>
      <p style={{ color: "#fff", margin: 0 }}>
        Connect Sidekick AI with your email and calendar to enable smart scheduling and communication.
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
      <style>{`
        .step2 {
          position: absolute;
          bottom: 10px;
          right: 15px;
          font-size: 4rem;
          font-weight: bold;
          color: #7b61ff;
          opacity: 0.6;
        }
      `}</style>
      <h5 style={{ fontWeight: "bold", color: "#fff" }}>Create Smart Meeting Links</h5>
      <p style={{ color: "#fff", margin: 0 }}>
        Use Sidekick to generate personalized scheduling links and automate availability sharing.
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
      <style>{`
        .step3 {
          position: absolute;
          bottom: 10px;
          right: 15px;
          font-size: 4rem;
          font-weight: bold;
          color: #7b61ff;
          opacity: 0.6;
        }
      `}</style>
      <h5 style={{ fontWeight: "bold", color: "#fff" }}>Automate Scheduling with AI</h5>
      <p style={{ color: "#fff", margin: 0 }}>
        Let Sidekick AI handle meeting requests, rescheduling, and calendar conflicts effortlessly.
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

export default Sidekick;