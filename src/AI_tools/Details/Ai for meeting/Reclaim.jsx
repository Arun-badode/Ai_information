import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import magisto from "../../../Images/MagistoAI.png";
import scn1 from "../../../../public/assets/Img/AI for Meeting/reclaimS2.png";
import scn2 from "../../../../public/assets/Img/AI for Meeting/reclaimS1.png";

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
const Reclaim = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
            <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">Optimize Your Time with Reclaim AI</p>
              <h3 className="">Smart Scheduling Assistant for Work-Life Balance</h3>
            </div>
            {[
              {
                icon: "📅",
                title: "Smart Task Scheduling:",
                desc: "Reclaim AI automatically schedules tasks in your calendar based on priority and availability, optimizing your productivity."
              },
              {
                icon: "⏱️",
                title: "Dynamic Time Blocking:",
                desc: "Automatically blocks time for tasks, meetings, and habits, adjusting in real-time to avoid conflicts and protect focus time."
              },
              {
                icon: "🔁",
                title: "Recurring Habits Automation:",
                desc: "Set recurring habits like workouts or planning sessions, and Reclaim AI will intelligently schedule them for you."
              },
              {
                icon: "🤝",
                title: "Collaborative Scheduling:",
                desc: "Coordinate meetings with teammates using shared calendars and scheduling links for effortless collaboration."
              },
              {
                icon: "📊",
                title: "Productivity Insights:",
                desc: "Track how your time is spent and gain actionable insights to improve focus, reduce overload, and manage priorities better."
              }
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="custom-card text-light p-4 h-100"
                  style={{ border: "1px solid #7B68EE" }}
                >
                  <div className="icon mb-3" style={{ fontSize: "1.5rem" }}>{feature.icon}</div>
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
    q: "What is Reclaim AI?",
    a: "Reclaim AI is an intelligent scheduling tool that automatically finds the best time for your tasks, habits, meetings, and priorities using AI-powered time management."
  },
  {
    q: "How does Reclaim AI work?",
    a: "Reclaim AI connects with your Google Calendar and uses algorithms to schedule your to-dos, routines, and events dynamically, optimizing for productivity and balance."
  },
  {
    q: "Can Reclaim AI schedule both work and personal tasks?",
    a: "Yes, Reclaim AI is built to balance both work and personal life by intelligently managing calendars and prioritizing tasks across categories."
  },
  {
    q: "Is Reclaim AI beginner-friendly?",
    a: "Absolutely. Reclaim AI features a user-friendly interface that helps both beginners and professionals set up scheduling automation in minutes."
  },
  {
    q: "What platforms support Reclaim AI?",
    a: "Reclaim AI integrates with Google Calendar and is accessible through any modern web browser on desktop and mobile devices."
  },
  {
    q: "Can I customize my scheduling preferences in Reclaim AI?",
    a: "Yes, Reclaim AI allows deep customization, including priority settings, focus time preferences, meeting hours, and buffer times."
  },
  {
    q: "Does Reclaim AI support recurring habits?",
    a: "Yes, Reclaim AI supports habits like daily workouts, reading, or planning, and schedules them at the best available times in your calendar."
  },
  {
    q: "Can Reclaim AI integrate with task management tools?",
    a: "Yes, Reclaim AI integrates with tools like Todoist, Asana, ClickUp, Google Tasks, and more to automatically schedule your tasks."
  },
  {
    q: "Is Reclaim AI cloud-based?",
    a: "Yes, Reclaim AI is a cloud-based platform, allowing you to access and sync your schedules seamlessly across devices."
  },
  {
    q: "Does Reclaim AI offer an API?",
    a: "Yes, Reclaim AI offers APIs for developers and teams to integrate scheduling automation into custom workflows or tools."
  },
  {
    q: "Can Reclaim AI block focus time automatically?",
    a: "Yes, Reclaim AI automatically reserves focus time blocks by analyzing your availability, preventing distractions and multitasking."
  },
  {
    q: "How is Reclaim AI different from regular calendar apps?",
    a: "Reclaim AI adds intelligence to your existing calendar by automatically prioritizing and scheduling tasks, meetings, and routines without manual effort."
  },
  {
    q: "Can I use Reclaim AI for team scheduling?",
    a: "Yes, Reclaim AI supports smart meeting coordination, shared calendars, and scheduling links to simplify team collaboration."
  },
  {
    q: "Does Reclaim AI protect user privacy?",
    a: "Yes, Reclaim AI is committed to protecting user data with secure authentication and data handling policies. Your calendar data remains private and encrypted."
  },
  {
    q: "Does Reclaim AI support time zone adjustments?",
    a: "Yes, Reclaim AI supports time zone management, making it easier for distributed teams and remote workers to coordinate schedules."
  },
  {
    q: "Is Reclaim AI free?",
    a: "Reclaim AI offers a free plan with core features, along with premium plans that unlock advanced scheduling, integrations, and team collaboration tools."
  },
  {
    q: "Can I use Reclaim AI with multiple calendars?",
    a: "Currently, Reclaim AI works with Google Calendar, but it can manage multiple calendars under a single Google account."
  },
  {
    q: "Does Reclaim AI work offline?",
    a: "No, Reclaim AI requires an internet connection to sync and update your calendar schedules in real-time."
  },
  {
    q: "What kind of customer support does Reclaim AI provide?",
    a: "Reclaim AI offers support via email, a detailed help center, and Slack community access for paid users."
  },
  {
    q: "Is Reclaim AI suitable for freelancers?",
    a: "Yes, freelancers can use Reclaim AI to manage client meetings, personal projects, and recurring work routines automatically."
  },
  {
    q: "How do I contact Reclaim AI support?",
    a: "You can contact Reclaim AI through their official website, via email at support@reclaim.ai, or through their help center for quick assistance."
  }
]

              .map((item, i) => ({ ...item, id: `faq${i}` }))
              .filter((item, i) => showAllFaqs || i < 4)
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
    Why Use Reclaim AI?
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
      Reclaim AI intelligently schedules your tasks, habits, and meetings by analyzing your availability and priorities.
    </li>
    <li className="mb-3">
      It automatically creates focus time blocks, helping you stay productive without manual planning.
    </li>
    <li className="mb-3">
      The AI dynamically adjusts your schedule based on real-time changes and conflicts, ensuring optimal time use.
    </li>
    <li className="mb-3">
      Seamlessly integrates with Google Calendar, enabling smart scheduling without leaving your existing tools.
    </li>
    <li className="mb-3">
      Perfect for professionals and teams looking to balance work and personal priorities through automated time management.
    </li>
  </ul>

  <div className="text-center mt-4">
    <Button variant="primary" size="sm">
      Explore Reclaim AI
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
                            Automatically schedules tasks, habits, and meetings based on real-time availability using AI.
                          </li>
                          <li className="mb-2">
                            Seamless integration with Google Calendar for intelligent time management.
                          </li>
                          <li className="mb-2">
                            Helps users create focus time by minimizing context-switching and calendar conflicts.
                          </li>
                          <li className="mb-2">
                            Great for remote teams with shared calendar visibility and smart meeting coordination.
                          </li>
                          <li className="mb-2">
                            Offers analytics and insights into how time is spent, improving productivity.
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
                            Currently supports only Google Calendar; no Outlook or Apple Calendar integration.
                          </li>
                          <li className="mb-2">
                            The learning curve may be steep for users unfamiliar with calendar automation.
                          </li>
                          <li className="mb-2">
                            Can be less effective for users with irregular schedules or rapidly changing plans.
                          </li>
                          <li className="mb-2">
                            Premium features require a paid plan, limiting access for free users.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                );
                
        
                
        
        
        
        
        
      case "alternative":
            return (
                  <div className="container my-5">
                    <h4 className="text-center text-light mb-4">Alternatives to Reclaim AI</h4>
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
                            <strong>Motion</strong> – An intelligent calendar that automatically plans your day, schedules meetings, and manages tasks using AI.
                          </li>
                          <li className="mb-2">
                            <strong>Clockwise</strong> – A smart calendar assistant that optimizes your schedule by creating focus time and resolving meeting conflicts.
                          </li>
                          <li className="mb-2">
                            <strong>TimeHero</strong> – Automates project planning and task scheduling using AI to ensure deadlines are met with minimal effort.
                          </li>
                          <li className="mb-2">
                            <strong>SkedPal</strong> – Combines time-blocking and AI to automatically prioritize and schedule your tasks in your calendar.
                          </li>
                          <li className="mb-2">
                            <strong>Calendly</strong> – While not fully AI-driven, it offers automated meeting scheduling with smart time-slot selection and integrations.
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
          className="d-inline-block text-white text-decoration-none ml-3 py-1"
        >
          <i className="bi bi-arrow-left me-2"></i>Back to Directory{" "}
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
      src={magisto}
      style={{ maxWidth: "100%", height: "300px", objectFit: "contain" }}
      alt="Reclaim AI"
    />
  </div>

  {/* Text Section - Appears second on mobile */}
  <div className="col-12 col-md-6 order-2 order-md-1" style={{ paddingRight: "30px" }}>
    <p className="text-primary">Create stunning visuals effortlessly</p>
    <h1>Reclaim AI</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>

    <p>
      Reclaim.ai is an AI-powered scheduling tool that optimizes your calendar, automates time management, and increases productivity. It uses intelligent algorithms to manage your tasks, appointments, meetings, and focus time in a way that minimizes scheduling conflicts and maximizes your time efficiency. With Reclaim.ai, businesses and individuals can automate scheduling, prioritize important tasks, and gain more control over their calendars.
    </p>

    <div className="mb-3">
    <a
  href="https://reclaim.ai/"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-primary me-2"
>
  Explore Reclaim
</a>


    </div>
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
How to Use Reclaim AI?</h2>

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
        Connect Your Calendar
      </h5>
      <p style={{ color: "#fff", margin: 0 }}>
        Sign up on <strong>Reclaim AI</strong> and connect your Google Calendar to allow the app to manage your schedule intelligently.
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
        Set Your Habits and Tasks
      </h5>
      <p style={{ color: "#fff", margin: 0 }}>
        Add recurring habits, one-time tasks, and work priorities. Reclaim AI will automatically schedule them at the best time for you.
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
        Let AI Optimize Your Time
      </h5>
      <p style={{ color: "#fff", margin: 0 }}>
        Reclaim AI adjusts your schedule automatically to make space for what matters most, while avoiding conflicts and burnout.
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

          <div className="bg-primary text-center text-light rounded-4 p-5 mt-5">
            <h4 className="mb-3">Ready to get started with Reclaim AI?</h4>
            <p className="mb-4">
              Join thousands of professionals already boosting their
              productivity!
            </p>
            <div>
              <button className="btn btn-light me-3">Try Now for Free</button>
              <button className="btn btn-outline-light">Schedule a Demo</button>
            </div>
            <small className="d-block mt-2">
              No credit card required.  free trial available.
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reclaim;