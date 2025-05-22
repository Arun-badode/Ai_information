import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

import magisto from "../../../../public/assets/Img/AI for Animation/14.png";

import scn1 from "../../../../public/assets/Img/AI for Meeting/trevenS1.jpeg";
import scn2 from "../../../../public/assets/Img/AI for Meeting/trevenS2.jpeg";


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
const Trevor = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
<div className="row g-4">
  <div className="text-center">
    <p className="text-primary">Boost Your Productivity with AI Assistance</p>
    <h3 className="">Smart Scheduling & Seamless Task Management</h3>
  </div>
  {[
    {
      icon: "🤖",
      title: "AI-Powered Scheduling:",
      desc: "Automatically plan and optimize your calendar with smart AI suggestions.",
    },
    {
      icon: "📅",
      title: "Task Prioritization:",
      desc: "Organize your to-do list by importance and deadlines effortlessly.",
    },
    {
      icon: "🔗",
      title: "Integrations:",
      desc: "Sync with Google Calendar, Outlook, and other popular tools for unified management.",
    },
    {
      icon: "📈",
      title: "Analytics & Insights:",
      desc: "Get detailed reports on your productivity patterns and meeting effectiveness.",
    },
    {
      icon: "⚡",
      title: "Quick Actions:",
      desc: "Easily reschedule, cancel, or create new meetings with minimal clicks.",
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
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={scn2}
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
                  q: "What is Trevor AI?",
                  a: "Trevor AI is an intelligent scheduling assistant that helps you manage your calendar and tasks effortlessly using AI technology.",
                },
                {
                  q: "How does Trevor AI improve productivity?",
                  a: "By analyzing your schedule and priorities, Trevor AI automatically suggests optimal meeting times and task arrangements to save you time.",
                },
                {
                  q: "Can Trevor AI integrate with other calendar apps?",
                  a: "Yes, Trevor AI seamlessly integrates with Google Calendar, Outlook, and other popular calendar services.",
                },
                {
                  q: "Is Trevor AI suitable for teams?",
                  a: "Absolutely! Trevor AI offers collaboration features to help teams schedule meetings and manage projects efficiently.",
                },
                {
                  q: "Does Trevor AI support task prioritization?",
                  a: "Yes, it helps prioritize your to-do list based on deadlines and importance to keep you focused on what matters most.",
                },
                {
                  q: "Is there a mobile app for Trevor AI?",
                  a: "Currently, Trevor AI is accessible via web browsers optimized for mobile, with dedicated apps coming soon.",
                },
                {
                  q: "Can Trevor AI suggest meeting times automatically?",
                  a: "Yes, it uses AI to find the best meeting slots that work for all participants, avoiding conflicts.",
                },
                {
                  q: "Does Trevor AI provide analytics on productivity?",
                  a: "Trevor AI offers insights and reports on your scheduling habits to help improve your efficiency over time.",
                },
                {
                  q: "Is Trevor AI easy to use for beginners?",
                  a: "Definitely, Trevor AI’s intuitive interface requires no technical skills, making scheduling simple for everyone.",
                },
                {
                  q: "Can Trevor AI handle recurring meetings?",
                  a: "Yes, it supports setting up and managing recurring meetings effortlessly.",
                },
                {
                  q: "Is Trevor AI secure?",
                  a: "Trevor AI uses industry-standard security protocols to protect your data and privacy.",
                },
                {
                  q: "Does Trevor AI support time zone management?",
                  a: "Yes, it automatically adjusts for time zones to avoid scheduling confusion across locations.",
                },
                {
                  q: "Can I customize notifications in Trevor AI?",
                  a: "Yes, you can set reminders and notifications according to your preferences.",
                },
                {
                  q: "Is Trevor AI free to use?",
                  a: "Trevor AI offers a free tier with basic features and premium plans for advanced functionality.",
                },
                {
                  q: "Can Trevor AI integrate with project management tools?",
                  a: "Integration with popular project management apps is available to streamline your workflow.",
                },
                {
                  q: "Does Trevor AI support voice commands?",
                  a: "Voice command support is planned for future updates.",
                },
                {
                  q: "Can Trevor AI help with email scheduling?",
                  a: "While Trevor AI focuses on calendar and task management, it can integrate with email clients for scheduling purposes.",
                },
                {
                  q: "How do I get started with Trevor AI?",
                  a: "Simply sign up on the Trevor AI website, connect your calendar, and start optimizing your schedule right away.",
                },
                {
                  q: "Is customer support available for Trevor AI users?",
                  a: "Yes, support is provided via email and live chat for all users.",
                },
                {
                  q: "Can Trevor AI be used for remote teams?",
                  a: "Trevor AI is perfect for remote teams, helping coordinate meetings across different time zones smoothly.",
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
      Why Use Trevor AI?
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
        Trevor AI streamlines your scheduling and task management with intelligent automation.
      </li>
      <li className="mb-3">
        Designed for professionals and teams to boost productivity effortlessly.
      </li>
      <li className="mb-3">
        Leverages AI to prioritize your tasks and optimize your daily workflow.
      </li>
      <li className="mb-3">
        User-friendly interface that requires no technical expertise to get started.
      </li>
      <li className="mb-3">
        Cloud-based platform accessible anywhere, ensuring your schedule is always up to date.
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
        Uses AI to intelligently prioritize and schedule your tasks.
      </li>
      <li className="mb-2">
        Saves time by automating routine scheduling decisions.
      </li>
      <li className="mb-2">
        Integrates seamlessly with popular calendars and productivity apps.
      </li>
      <li className="mb-2">
        User-friendly interface suitable for individuals and teams.
      </li>
      <li className="mb-2">
        Cloud-based, accessible from anywhere on any device.
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
        Some advanced features require a paid subscription.
      </li>
      <li className="mb-2">
        AI prioritization may not always align perfectly with personal preferences.
      </li>
      <li className="mb-2">
        Limited offline functionality as it relies on cloud sync.
      </li>
      <li className="mb-2">
        Occasional sync delays with third-party calendar integrations.
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
        Clockwise – AI-powered smart calendar assistant that optimizes your schedule.
      </li>
      <li className="mb-2">
        x.ai – AI scheduling assistant that handles meeting coordination.
      </li>
      <li className="mb-2">
        Motion – Automated task and calendar management for busy professionals.
      </li>
      <li className="mb-2">
        Reclaim.ai – Smart calendar tool that prioritizes and blocks time for tasks.
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
              <h1> Trevor AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
              Trevor AI is an AI-powered productivity tool designed to optimize task management, scheduling, and team coordination. It helps automate repetitive tasks, streamline workflows, and improve focus, making it ideal for both personal and professional use. With advanced features like task prioritization, time blocking, and smart calendar syncing, Trevor AI boosts productivity by simplifying scheduling, reducing manual tasks, and enhancing team collaboration. It integrates seamlessly with tools like Google Calendar and Outlook to synchronize appointments, tasks, and meetings.
              </p>

              <div className="mb-3">
                <a
                  href="https://www.trevorai.com/"
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
                src={magisto}
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
    How to Use Trevor AI?</h2>

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
      <h5 style={{ fontWeight: "bold", color: "#fff" }}>Connect Your Calendar</h5>
      <p style={{ color: "#fff", margin: 0 }}>
        Sync Trevor AI with your existing calendar (Google, Outlook, etc.) to get started.
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
      <h5 style={{ fontWeight: "bold", color: "#fff" }}>Set Your Priorities & Preferences</h5>
      <p style={{ color: "#fff", margin: 0 }}>
        Define your work hours, priorities, and preferences so Trevor AI can optimize your schedule.
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
      <h5 style={{ fontWeight: "bold", color: "#fff" }}>Let Trevor Manage Your Time</h5>
      <p style={{ color: "#fff", margin: 0 }}>
        Trevor AI automatically schedules meetings, tasks, and breaks to maximize productivity.
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

export default Trevor;