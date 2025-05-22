import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";


import scn1 from "../../../../public/assets/Img/AI for Meeting/shedulerS2.png";
import scn2 from "../../../../public/assets/Img/AI for Meeting/shedulerS1.png";


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

const Schedular = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
            <div className="row g-4">
            {[
              {
                icon: "⏰",
                title: "Automated Meeting Scheduling",
                desc: "Automatically books sales appointments and demos based on calendar availability and customer preferences.",
              },
              {
                icon: "🔗",
                title: "CRM & Calendar Integration",
                desc: "Seamlessly syncs with popular CRMs like Salesforce and HubSpot, as well as major calendar platforms for real-time updates.",
              },
              {
                icon: "📊",
                title: "AI-Driven Analytics",
                desc: "Provides actionable insights and analytics to optimize meeting conversion rates and improve sales pipeline efficiency.",
              },
              {
                icon: "🤖",
                title: "Intelligent Follow-Ups",
                desc: "Automatically sends personalized follow-up messages to prospects, reducing manual outreach and boosting engagement.",
              },
              {
                icon: "⚙️",
                title: "No-Code Setup",
                desc: "User-friendly interface allows sales teams to configure workflows and automations without technical expertise.",
              },
              {
                icon: "🌐",
                title: "Cloud-Based Platform",
                desc: "Access Scheduler AI anywhere with a secure cloud-based system, ensuring your scheduling runs smoothly on all devices.",
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
                src={scn1}
                alt="Screenshot 1"
                className="img-fluid rounded-3"
              />

              <img src="" alt="Screenshot 1" className="img-fluid rounded-3" />

            </div>
            <div className="col-md-6">
              <img
                src={scn2} 
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

      case "why-we-use":
        return (
            <div className="row g-4">
            <div className="col-12">
              <div className="custom-card text-light p-5 text-center">
                <h3 className="fw-bold mb-4">Why Use Scheduler AI?</h3>
                
                <h5>Overview:</h5>
                <p className="fs-5">
                  Scheduler AI automates your sales meeting scheduling by intelligently coordinating calendars, reducing manual follow-ups, and boosting pipeline efficiency.
                </p>
                
                <h5>24/7 Meeting Coordination:</h5>
                <p className="fs-5 mt-3">
                  Unlike manual scheduling, Scheduler AI works round the clock to instantly book demos and sales appointments without delay.
                </p>
                
                <h5>Seamless CRM & Calendar Integration:</h5>
                <p className="fs-5 mt-3">
                  Integrates smoothly with popular CRM systems and calendar platforms to ensure your data stays in sync and your team stays aligned.
                </p>
                
                <h5>Personalized Outreach:</h5>
                <p className="fs-5 mt-3">
                  Scheduler AI customizes follow-up messages based on prospect behavior and preferences, increasing engagement and meeting conversions.
                </p>
                
                <h5>Insights & Analytics:</h5>
                <p className="fs-5 mt-3">
                  Gain actionable analytics on your scheduling efficiency and conversion rates to continuously optimize your sales workflow.
                </p>
                
                <h5>Easy No-Code Setup:</h5>
                <p className="fs-5 mt-3">
                  Designed for sales teams, Scheduler AI requires no technical skills for setup — just configure your preferences and start automating.
                </p>
                
                <h5>Cloud-Based Reliability:</h5>
                <p className="fs-5 mt-3">
                  Being fully cloud-based, Scheduler AI is accessible anywhere and scales with your business without infrastructure hassles.
                </p>
                
                <Button variant="primary" size="lg" className="mt-4">
                  Get Started with Scheduler AI
                </Button>
              </div>
            </div>
          </div>
          
        );

      case "Pro&Cons":
        return (
            <div style={styles.section}>
            <div className="container">
              <div className="row g-4">
                {/* Pros Section */}
                <div className="col-md-10 offset-md-1">
                  <div style={styles.card}>
                    <h3 className="mb-4 text-center">Pros of Scheduler AI</h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <h6>Automates Scheduling:</h6>
                        <p>
                          Scheduler AI automates the process of booking meetings and demos, saving valuable time for sales teams.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Seamless Integrations:</h6>
                        <p>
                          Integrates smoothly with popular CRMs, calendars, and communication platforms to keep your workflow connected.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>24/7 Availability:</h6>
                        <p>
                          Works round the clock to schedule appointments, ensuring no leads are missed regardless of time zones.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Personalized Scheduling:</h6>
                        <p>
                          Tailors scheduling and follow-ups based on customer behavior and preferences to increase conversion rates.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Detailed Analytics:</h6>
                        <p>
                          Provides insights into meeting performance and pipeline velocity to optimize sales processes continuously.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>User-Friendly Interface:</h6>
                        <p>
                          Designed for easy setup and use, requiring no coding knowledge to automate complex scheduling workflows.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
          
                {/* Cons Section */}
                <div className="col-md-10 offset-md-1">
                  <div style={styles.card}>
                    <h3 className="mb-4 text-center">Cons of Scheduler AI</h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <h6>Complex Setup:</h6>
                        <p>
                          Initial configuration and CRM integration can be challenging for users without technical expertise.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Subscription Costs:</h6>
                        <p>
                          Advanced features and detailed analytics are often locked behind higher-tier paid plans.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Cloud Dependency:</h6>
                        <p>
                          Being fully cloud-based, Scheduler AI requires a stable internet connection and lacks offline functionality.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Customization Time:</h6>
                        <p>
                          Fine-tuning the system for specific sales workflows may require time and experimentation.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Limited Support for Niche CRMs:</h6>
                        <p>
                          Some less common CRM platforms may not be supported, limiting integration options for certain businesses.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        );

      case "Alternatives":
        return (
          <div style={styles.section}>
            <div className="container">
              <div className="row g-4">
              <div className="col-md-10 offset-md-1">
  <div style={styles.card}>
    <h3 className="mb-4 text-center">
      Alternatives to Scheduler AI
    </h3>
    <div className="row mt-5">
      <div className="col-md-6">
        <h6>Calendly:</h6>
        <p>
          A popular scheduling tool that simplifies meeting bookings by syncing calendars and offering easy-to-share scheduling links.
        </p>
      </div>
      <div className="col-md-6">
        <h6>HubSpot Meetings:</h6>
        <p>
          An integrated scheduling solution within HubSpot CRM, allowing seamless booking and tracking of sales meetings.
        </p>
      </div>
      <div className="col-md-6">
        <h6>Acuity Scheduling:</h6>
        <p>
          Offers customizable appointment scheduling with automated reminders and calendar sync, suitable for businesses of all sizes.
        </p>
      </div>
      <div className="col-md-6">
        <h6>Microsoft Bookings:</h6>
        <p>
          Part of the Microsoft 365 suite, this tool enables scheduling, calendar management, and customer communication within the Microsoft ecosystem.
        </p>
      </div>
      <div className="col-md-6">
        <h6>SimplyBook.me:</h6>
        <p>
          A flexible online booking system that supports multiple industries with features like custom booking websites and payment integrations.
        </p>
      </div>
    </div>
  </div>
</div>

              </div>
            </div>
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
      q: "What is Schedular AI?",
      a: "Schedular AI is an intelligent scheduling assistant designed to optimize your calendar by automatically finding the best meeting times, managing conflicts, and sending reminders.",
    },
    {
      q: "How does Schedular AI work?",
      a: "Schedular AI uses machine learning and natural language processing to analyze your availability, preferences, and priorities to schedule meetings efficiently without manual effort.",
    },
    {
      q: "Can I integrate Schedular AI with my existing calendar?",
      a: "Yes, Schedular AI integrates seamlessly with popular calendar platforms like Google Calendar, Outlook, and Apple Calendar to sync events in real-time.",
    },
    {
      q: "Is Schedular AI secure?",
      a: "Absolutely. Schedular AI employs end-to-end encryption and complies with strict data privacy standards to keep your scheduling data safe and confidential.",
    },
    {
      q: "Can Schedular AI handle recurring meetings?",
      a: "Yes, it can automatically recognize and schedule recurring meetings based on your preferences and existing patterns.",
    },
    {
      q: "Does Schedular AI support multiple time zones?",
      a: "Yes, Schedular AI intelligently manages time zone differences to schedule meetings that work for all participants, regardless of their locations.",
    },
    {
      q: "Can I customize meeting preferences in Schedular AI?",
      a: "You can customize meeting durations, preferred time slots, buffer times between meetings, and notification settings to tailor scheduling to your needs.",
    },
    {
      q: "How does Schedular AI notify me about upcoming meetings?",
      a: "Schedular AI sends reminders via email, SMS, or in-app notifications, depending on your configured preferences.",
    },
    {
      q: "Can Schedular AI suggest meeting agendas?",
      a: "Schedular AI can generate suggested agendas based on meeting topics and previous conversations, helping participants stay on track.",
    },
    {
      q: "Is Schedular AI suitable for teams?",
      a: "Yes, it supports team scheduling by coordinating multiple calendars and suggesting optimal group meeting times.",
    },
    {
      q: "Does Schedular AI offer analytics?",
      a: "Schedular AI provides detailed reports on your scheduling patterns, meeting frequency, and time utilization to help improve productivity.",
    },
    {
      q: "Can I use Schedular AI on mobile devices?",
      a: "Yes, Schedular AI offers mobile apps for both iOS and Android to manage your schedule on the go.",
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
      
        <a
          href="/Aitools"
          className="d-inline-block text-white text-decoration-none  mt-3 ml-3 py-1 px-2 ms-5 border rounded-sm"
        >
          <i className="bi bi-arrow-left me-2"></i>Back{" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-between mb-1">
  {/* Image Section - Appears first on mobile */}
  <div
    className="col-12 col-md-6 order-1 order-md-2 text-center mb-3 mb-md-0"
    style={{ height: "250px" }}
  >
    <img
      src=""
      style={{ maxWidth: "100%", height: "300px", objectFit: "contain" }}
      alt="Scheduler AI"
    />
  </div>

  {/* Text Section - Appears second on mobile */}
  <div className="col-12 col-md-6 order-2 order-md-1" style={{ paddingRight: "30px" }}>
    <p className="text-primary">Automate meeting scheduling with AI</p>
    <h1>Scheduler AI</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>

    <p>
      Scheduler AI is an advanced AI-powered meeting assistant designed to simplify and automate the entire scheduling process. It integrates with your calendars (like Google and Outlook) and eliminates the need for back-and-forth emails. Using natural language understanding and real-time availability checks, Scheduler AI intelligently proposes and finalizes meeting times for individuals and teams. Whether you’re booking sales calls, interviews, or internal meetings, Scheduler AI ensures optimized time slots, boosts productivity, and improves overall workflow coordination. Its customizable meeting templates, smart time blocking, and automated follow-ups make it a must-have productivity tool for modern professionals and organizations.
    </p>

    <div className="mb-3">
      <a
        href="https://www.scheduler.ai/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary me-2"
      >
        Explore Scheduler
      </a>

   
    </div>
  </div>
</div>

          </div>

          {/* Tab Navigation */}
          <ul className="nav nav-tabs custom-tabs mb-4">
            {[
              "features",
              "screenshots",
              "reviews",
              "FAQs",
              // "technical",
              "why-we-use",
              "Pro&Cons",
              "Alternatives",
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
    
    </>
  );
};

export default Schedular;
