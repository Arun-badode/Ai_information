import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import magisto from "../../../Images/MagistoAI.png";
import clockwise from "../../../../public/assets/Img/AI for Meeting/3.png";
import scn1 from "../../../../public/assets/Img/AI for Meeting/clockwiseS1.png";
import scn2 from "../../../../public/assets/Img/AI for Meeting/ClockwiseS2.png";

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
const Clockwise = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">Optimize Your Time with Clockwise AI</p>
              <h3 className="">Smart Scheduling Assistant for Work-Life Balance</h3>
            </div>
            {
              [
                {
                  icon: "🧠",
                  title: "AI-Powered Scheduling:",
                  desc: "Automates meeting scheduling by finding the best times for everyone based on their availability and preferences."
                },
                {
                  icon: "📆",
                  title: "Time-Blocking:",
                  desc: "Automatically allocates blocks of time for focused work, meetings, and tasks to reduce context switching and enhance productivity."
                },
                {
                  icon: "🗓️",
                  title: "Smart Calendar Management:",
                  desc: "Optimizes your calendar by prioritizing key meetings and freeing up time for deep, uninterrupted work."
                },
                {
                  icon: "✅",
                  title: "Task Management:",
                  desc: "Automates task allocation and scheduling to ensure your most critical tasks are completed on time."
                },
                {
                  icon: "🤝",
                  title: "Team Collaboration:",
                  desc: "Facilitates seamless collaboration by syncing calendars and optimizing shared meeting times across teams."
                },
                {
                  icon: "🔗",
                  title: "Powerful Integrations:",
                  desc: "Works with Google Calendar, Outlook, Zoom, Slack, Trello, and more to streamline your workflows."
                },
                {
                  icon: "🌍",
                  title: "Meeting Coordination:",
                  desc: "Coordinates meetings intelligently by adjusting for team members' time zones and availability."
                },
                {
                  icon: "📌",
                  title: "Task Delegation:",
                  desc: "Automatically assigns tasks to the right time slots based on urgency, availability, and importance."
                }
              ]
                .map((feature, index) => (
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
                alt="clockwise"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={scn2}
                alt="clockwise"
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
                  q: "What is Clockwise AI?",
                  a: "Clockwise AI is a smart calendar assistant that automatically optimizes your schedule by finding the best times for meetings, tasks, and focus work."
                },
                {
                  q: "How does Clockwise AI work?",
                  a: "Clockwise connects with your calendar and uses AI to reorganize meetings, allocate focus time, and reduce conflicts based on your preferences and team availability."
                },
                {
                  q: "Can Clockwise AI manage both work and personal tasks?",
                  a: "Yes, Clockwise AI helps balance professional and personal commitments by intelligently scheduling both across your calendar."
                },
                {
                  q: "Is Clockwise AI easy to use for beginners?",
                  a: "Yes, Clockwise is user-friendly with a simple setup process that guides users through integration and preferences."
                },
                {
                  q: "What platforms does Clockwise support?",
                  a: "Clockwise integrates with Google Calendar and works on any modern browser. Outlook support is also available for some features."
                },
                {
                  q: "Can I customize my scheduling preferences in Clockwise?",
                  a: "Absolutely. You can set working hours, preferred meeting times, focus time blocks, lunch breaks, and more."
                },
                {
                  q: "Does Clockwise AI support recurring events or tasks?",
                  a: "Yes, Clockwise can schedule recurring meetings and protect recurring focus time based on your set rules."
                },
                {
                  q: "Can Clockwise AI integrate with other tools?",
                  a: "Yes, Clockwise integrates with Slack, Zoom, Asana, and other productivity tools to streamline team coordination."
                },
                {
                  q: "Is Clockwise AI cloud-based?",
                  a: "Yes, Clockwise is entirely cloud-based, meaning you can access it from anywhere with internet access."
                },
                {
                  q: "Does Clockwise offer an API?",
                  a: "Clockwise does not currently offer a public API but provides integration through supported tools like Slack and Asana."
                },
                {
                  q: "Can Clockwise AI reserve focus time?",
                  a: "Yes, Clockwise intelligently blocks out focus time in your calendar based on your availability and workload."
                },
                {
                  q: "How is Clockwise AI different from traditional calendar apps?",
                  a: "Clockwise adds automation and intelligence to your existing calendar, removing the need for manual scheduling and rescheduling."
                },
                {
                  q: "Can I use Clockwise AI for team scheduling?",
                  a: "Yes, Clockwise can automatically find the best meeting times for team members, avoiding conflicts and maximizing productivity."
                },
                {
                  q: "Does Clockwise protect user privacy?",
                  a: "Yes, Clockwise follows strict data protection policies. Calendar information is processed securely and only used for scheduling purposes."
                },
                {
                  q: "Does Clockwise AI adjust for time zones?",
                  a: "Yes, Clockwise handles time zone differences, making it ideal for teams working across different regions."
                },
                {
                  q: "Is Clockwise AI free to use?",
                  a: "Clockwise offers a free plan with basic scheduling features, and premium plans for advanced automation, analytics, and team coordination."
                },
                {
                  q: "Can I use Clockwise with multiple calendars?",
                  a: "Yes, Clockwise can manage multiple calendars under the same account and adjust availability accordingly."
                },
                {
                  q: "Does Clockwise AI require internet access?",
                  a: "Yes, since it’s a cloud-based tool, you need an internet connection to sync changes and updates in real-time."
                },
                {
                  q: "What kind of support does Clockwise offer?",
                  a: "Clockwise offers support via email, a help center with documentation, and a support team for premium users."
                },
                {
                  q: "Is Clockwise AI suitable for freelancers or individuals?",
                  a: "Yes, Clockwise is beneficial for both individuals and teams by optimizing daily schedules and reducing cognitive load."
                },
                {
                  q: "How can I contact Clockwise support?",
                  a: "You can contact Clockwise support via their website’s help center or by emailing support@getclockwise.com."
                },
                {
                  q: "Does Clockwise AI work with hybrid or remote teams?",
                  a: "Yes, Clockwise is built to support remote and hybrid teams by optimizing schedules based on availability and preferences."
                },
                {
                  q: "Can I pause Clockwise optimizations?",
                  a: "Yes, users can pause or limit scheduling optimizations at any time if they want to take manual control."
                },
                {
                  q: "Can I set buffer times between meetings?",
                  a: "Yes, Clockwise allows users to configure buffer times to avoid back-to-back meetings and reduce burnout."
                },
                {
                  q: "Does Clockwise AI support mobile use?",
                  a: "Clockwise works on mobile browsers, but full-featured access is best on desktop. A dedicated mobile app may have limited functionality."
                },
                {
                  q: "Does Clockwise offer analytics on calendar usage?",
                  a: "Yes, premium users get insights on how time is spent, including focus time vs. meetings vs. fragmented time."
                },
                {
                  q: "Can I invite collaborators to Clockwise?",
                  a: "You can invite team members to use Clockwise for better coordination and shared scheduling benefits."
                },
                {
                  q: "Does Clockwise conflict with manual calendar changes?",
                  a: "No, Clockwise respects manual overrides and lets you control which events are flexible or fixed."
                },
                {
                  q: "Is onboarding easy for teams?",
                  a: "Yes, Clockwise offers guided onboarding and templates to help teams quickly configure their preferences and start optimizing."
                },
                {
                  q: "How often does Clockwise update your calendar?",
                  a: "Clockwise continuously updates and adjusts your calendar based on real-time changes and updates from connected tools."
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
                    Why Use Clockwise AI?
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
                      <strong>Increase Productivity:</strong> By automating scheduling and optimizing your calendar, Clockwise AI helps you focus on high-priority tasks without distractions.
                    </li>
                    <li className="mb-3">
                      <strong>Save Time:</strong> With automated meeting scheduling, task allocation, and smart calendar management, users save time spent on manual coordination.
                    </li>
                    <li className="mb-3">
                      <strong>Better Work-Life Balance:</strong> Clockwise AI ensures that you have dedicated time for both work and personal activities, improving work-life integration.
                    </li>
                    <li className="mb-3">
                      <strong>AI-Powered Efficiency:</strong> Clockwise AI leverages advanced algorithms to manage your calendar intelligently, suggesting optimal times for tasks and meetings.
                    </li>
                    <li className="mb-3">
                      <strong>Team Collaboration:</strong> Clockwise AI helps teams coordinate better by syncing calendars and finding the best times for meetings without scheduling conflicts.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Explore Clockwise AI
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
                    <strong>Smart Scheduling:</strong> Automatically finds optimal times for meetings, eliminating scheduling conflicts.
                  </li>
                  <li className="mb-2">
                    <strong>Time Management:</strong> Allocates focus time and meetings efficiently, improving work-life balance and productivity.
                  </li>
                  <li className="mb-2">
                    <strong>Team Coordination:</strong> Helps remote and hybrid teams collaborate seamlessly by managing shared calendars.
                  </li>
                  <li className="mb-2">
                    <strong>Integrations:</strong> Works well with widely-used tools such as Google Calendar, Outlook, Zoom, and Slack.
                  </li>
                  <li className="mb-2">
                    <strong>Easy to Use:</strong> Simple setup and user-friendly interface for both individuals and teams.
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
                    <strong>Learning Curve:</strong> Some users may need time to adapt to the AI-powered scheduling features.
                  </li>
                  <li className="mb-2">
                    <strong>Pricing:</strong> The subscription cost may be a consideration for small businesses or individuals, especially for advanced features.
                  </li>
                  <li className="mb-2">
                    <strong>Limited Customization:</strong> While Clockwise AI is highly automated, there may be some limitations in fully customizing the AI-driven scheduling process.
                  </li>
                  <li className="mb-2">
                    <strong>Mobile App Limitations:</strong> The mobile version may lack some advanced features available on the desktop version.
                  </li>
                </ul>
              </div>
            </div>
          </div>

        );








      case "alternative":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-4">Alternatives to Clockwise AI</h4>
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
                    <strong>Google Calendar</strong> – A free tool that offers basic calendar scheduling but lacks the automation and optimization features of Clockwise AI.
                  </li>
                  <li className="mb-2">
                    <strong>Microsoft Outlook</strong> – Offers calendar and email integration, but doesn’t include AI-powered time management capabilities.
                  </li>
                  <li className="mb-2">
                    <strong>Trello</strong> – Great for organizing tasks and projects, but lacks smart calendar automation and time-blocking features.
                  </li>
                  <li className="mb-2">
                    <strong>Zoom Scheduler</strong> – Focuses on meeting scheduling via Zoom, but doesn't handle broader calendar optimization or smart time management.
                  </li>
                  <li className="mb-2">
                    <strong>TimeHero</strong> – A productivity tool with AI-driven scheduling and task automation, similar to Clockwise, with additional project timeline features.
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
          
          <section style={{ backgroundColor: "", padding: "3rem 0" }}>
            <div className="container text-center">
              <div className="row d-flex align-items-center justify-content-between mb-1">
  {/* Right side (Image Section) - will appear first on mobile */}
  <div
    className="col-12 col-md-6 order-1 order-md-2 text-center mb-3 mb-md-0"
    style={{ height: "250px" }}
  >
    <img
      src={clockwise}
      style={{ maxWidth: "100%", height: "300px", objectFit: "contain" }}
      alt="Clockwise AI"
    />
  </div>

  {/* Left side (Text Section) - will appear second on mobile */}
  <div className="col-12 col-md-6 order-2 order-md-1">
    <p className="text-primary">Create stunning visuals effortlessly</p>
    <h1>Clockwise AI</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>

    <p>
      Clockwise AI is an intelligent time management and scheduling tool designed to help users optimize their workday. It uses AI-powered algorithms to automate and streamline tasks such as meeting scheduling, time-blocking, and calendar management. By leveraging Clockwise AI, individuals and teams can increase productivity, reduce scheduling conflicts, and better manage their time. Clockwise integrates seamlessly with popular tools like Google Calendar, Outlook, Zoom, Slack, and more, making it an essential tool for managing both personal and professional schedules.
    </p>

    <div className="mb-3">
   <a
  href="https://www.clockwise.ai/"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-primary me-2"
>
  Explore Tool
</a>

    </div>
  </div>
</div>

              <p className="text-primary">Explore in 3 Simple Steps</p>
              <h2
                style={{
                  fontWeight: "semibold",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                How to Use Clockwise AI?</h2>
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
                      Integrate Your Calendar
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Sign up on <strong>Clockwise</strong> and connect your Google Calendar or Outlook to enable smart scheduling and automation.
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
                      Customize Your Work Preferences
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Define your ideal meeting hours, focus time, and lunch breaks. Clockwise AI will adjust your calendar based on your availability and team needs.
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
                      Enable Smart Calendar Optimization
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Let Clockwise intelligently optimize your meetings, focus time, and team alignment—helping everyone stay in flow and reduce burnout.
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

export default Clockwise;