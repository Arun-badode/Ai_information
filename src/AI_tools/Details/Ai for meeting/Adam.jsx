import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

import magisto from "../../../../public/assets/Img/AI for Animation/14.png";
import scn1 from "../../../../public/assets/Img/AI for Meeting/adamS1.png";
import scn2 from "../../../../public/assets/Img/AI for Meeting/adamS2.png";
import adam  from "../../../../public/assets/Img/AI for Meeting/10.png";
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
const Adam = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
            <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">Generate High-Quality Content Instantly</p>
              <h3 className="">AI-Powered Meeting Ads, Emails & More</h3>
            </div>
            {[
  {
    "icon": "🗓️",
    "title": "Meeting Automation",
    "desc": "Automatically schedules meetings, manages invitations, and sends reminders to save you time."
  },
  {
    "icon": "✅",
    "title": "Task Management",
    "desc": "Organize, prioritize, and track tasks for individuals and teams to ensure timely completion."
  },
  {
    "icon": "⏱️",
    "title": "Time Optimization",
    "desc": "Automatically adjusts schedules to reduce wasted time and find optimal meeting slots."
  },
  {
    "icon": "🔄",
    "title": "Real-Time Updates",
    "desc": "Keeps calendars and meeting schedules updated in real-time to keep everyone in sync."
  },
  {
    "icon": "📅",
    "title": "Calendar & Email Integration",
    "desc": "Syncs seamlessly with Google Calendar, Outlook, and email platforms for effortless scheduling."
  },
  {
    "icon": "🎯",
    "title": "Goal Setting & Tracking",
    "desc": "Set and track goals to align tasks with business objectives easily."
  },
  {
    "icon": "🤝",
    "title": "Team Coordination",
    "desc": "Facilitates smooth collaboration by syncing team schedules and managing cross-functional meetings."
  }
]
.map((feature, index) => (
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
    q: "What is Adam.ai?",
    a: "Adam.ai is an AI-powered productivity tool designed to automate meeting scheduling, task management, and team coordination to improve productivity and collaboration.",
  },
  {
    q: "How does Adam.ai work?",
    a: "Adam.ai uses AI algorithms to automate the scheduling of meetings, optimize team calendars, prioritize tasks, and send reminders to keep everyone on track.",
  },
  {
    q: "Is Adam.ai easy to use for beginners?",
    a: "Yes, Adam.ai offers an intuitive interface and smart suggestions that help users easily manage meetings and tasks without technical expertise.",
  },
  {
    q: "Is Adam.ai free to use?",
    a: "Adam.ai provides a free trial with limited features, and paid plans unlock full functionality including advanced collaboration and automation tools.",
  },
  {
    q: "What platforms is Adam.ai available on?",
    a: "Adam.ai is accessible through web browsers and mobile apps on Android and iOS.",
  },
  {
    q: "What makes Adam.ai unique?",
    a: "Its seamless integration of calendar, task management, and AI scheduling sets Adam.ai apart from traditional productivity tools.",
  },
  {
    q: "Who should use Adam.ai?",
    a: "Professionals, teams, and businesses looking to improve coordination, reduce scheduling conflicts, and boost productivity.",
  },
  {
    q: "Can Adam.ai be used for business process automation?",
    a: "Yes, Adam.ai helps automate repetitive scheduling, reminders, and meeting follow-ups to streamline business processes.",
  },
  {
    q: "What kind of templates does Adam.ai offer?",
    a: "Adam.ai offers customizable meeting and task templates for project planning, team check-ins, client meetings, and more.",
  },
  {
    q: "How is Adam.ai different from other productivity tools?",
    a: "Adam.ai combines AI-driven scheduling, multi-calendar sync, and task prioritization into a single unified platform.",
  },
  {
    q: "Can I use Adam.ai for team collaboration?",
    a: "Yes, Adam.ai enhances team collaboration by syncing calendars, assigning tasks, and automating coordination.",
  },
  {
    q: "Is there an Adam.ai mobile app?",
    a: "Yes, Adam.ai is available for both Android and iOS devices.",
  },
  {
    q: "Can I integrate Adam.ai with other software?",
    a: "Adam.ai supports integrations with Google Calendar, Outlook, Zoom, and other collaboration tools.",
  },
  {
    q: "Does Adam.ai provide analytics?",
    a: "Yes, Adam.ai includes analytics to monitor meetings, task completion, and productivity metrics.",
  },
  {
    q: "Does Adam.ai support multiple languages?",
    a: "Yes, Adam.ai supports multiple languages for global user accessibility.",
  },
  {
    q: "Can I customize Adam.ai workflows?",
    a: "Yes, you can personalize scheduling preferences, task categories, and reminders to fit your needs.",
  },
  {
    q: "How secure is Adam.ai?",
    a: "Adam.ai uses enterprise-grade encryption and complies with security standards like GDPR to keep your data safe.",
  },
  {
    q: "Can Adam.ai learn from my data?",
    a: "Yes, Adam.ai uses AI to learn your preferences over time and improve scheduling and task suggestions.",
  },
  {
    q: "Can Adam.ai handle complex tasks?",
    a: "Yes, Adam.ai is built to manage multi-part tasks, deadlines, and cross-functional schedules.",
  },
  {
    q: "What kind of support does Adam.ai offer?",
    a: "Adam.ai provides support via live chat, email, and comprehensive help documentation.",
  },
  {
    q: "Can I schedule tasks with Adam.ai?",
    a: "Yes, you can set deadlines, reminders, and recurring tasks within Adam.ai’s smart task manager.",
  },
  {
    q: "Does Adam.ai offer a free trial?",
    a: "Yes, Adam.ai includes a free trial so users can explore features before subscribing.",
  },
  {
    q: "Is Adam.ai suitable for small businesses?",
    a: "Yes, Adam.ai scales for startups, freelancers, and large organizations alike.",
  },
  {
    q: "Can Adam.ai automate customer support?",
    a: "While not a customer service tool, it helps teams coordinate and follow up on client interactions efficiently.",
  },
  {
    q: "Does Adam.ai require coding skills?",
    a: "No, Adam.ai is designed for non-technical users through a visual, no-code interface.",
  },
  {
    q: "Can Adam.ai integrate with CRM systems?",
    a: "Adam.ai can work alongside CRM tools by syncing calendars and tasks, though it doesn’t directly integrate with all CRM platforms.",
  },
  {
    q: "How often is Adam.ai updated?",
    a: "Adam.ai receives frequent updates to enhance functionality, add integrations, and improve performance.",
  },
  {
    q: "Can I export data from Adam.ai?",
    a: "Yes, Adam.ai allows export of meeting summaries, task reports, and schedules in common formats.",
  },
  {
    q: "Does Adam.ai support AI chatbots?",
    a: "While Adam.ai doesn’t offer chatbots, it includes intelligent automation features for meetings and task management.",
  },
  {
    q: "Can I use Adam.ai for marketing automation?",
    a: "Adam.ai focuses more on scheduling and collaboration than marketing, but it can support marketing teams with coordination.",
  },
  {
    q: "Does Adam.ai have workflow templates?",
    a: "Yes, it provides templates for meetings, sprints, OKRs, and project planning.",
  },
  {
    q: "Is Adam.ai GDPR compliant?",
    a: "Yes, Adam.ai is fully GDPR compliant and respects user data privacy.",
  },
  {
    q: "Can I integrate Adam.ai with Slack or Teams?",
    a: "Yes, Adam.ai integrates with tools like Slack and Microsoft Teams for better collaboration.",
  },
  {
    q: "Does Adam.ai offer API access?",
    a: "Yes, developers can access Adam.ai via API for custom integrations.",
  },
  {
    q: "Can Adam.ai be used in education?",
    a: "Yes, educational institutions can use it for class schedules, meetings, and task management.",
  },
  {
    q: "Is Adam.ai cloud-based?",
    a: "Yes, Adam.ai is a cloud-first platform accessible from anywhere.",
  },
  {
    q: "What industries benefit from Adam.ai?",
    a: "Industries like tech, education, healthcare, and consulting use Adam.ai for productivity and scheduling.",
  },
  {
    q: "Does Adam.ai offer user role management?",
    a: "Yes, you can assign roles and permissions for better team coordination.",
  },
  {
    q: "Can Adam.ai process natural language?",
    a: "Yes, it uses natural language understanding to help schedule and manage tasks based on user input.",
  },
  {
    q: "How do I get started with Adam.ai?",
    a: "Visit the Adam.ai website, sign up, and follow the onboarding wizard to begin using it for your scheduling and task needs.",
  }
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
              Why Use Adam.ai?</h3>

<ul className="text-start clara-benefits-list">
  <li className="mb-3">
    Adam.ai automates meeting scheduling and task management, saving time and reducing manual effort.
  </li>
  <li className="mb-3">
    Ideal for teams and businesses looking to improve collaboration and meeting efficiency.
  </li>
  <li className="mb-3">
    Provides AI-driven meeting insights and smart task prioritization to boost productivity.
  </li>
  <li className="mb-3">
    Seamlessly integrates with popular calendars, communication, and productivity tools.
  </li>
  <li className="mb-3">
    User-friendly interface designed for all skill levels—no technical expertise needed.
  </li>
</ul>



                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Start Creating Now
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
  <div className="col-lg-5 col-md-6 col-sm-12 pros-cons-box">
    <h5 className="text-success text-start mb-4">✅ Pros</h5>
    <ul className="ps-3" style={{ listStyleType: "disc" }}>
      <li className="mb-2">
        AI Automation: Automates meeting scheduling and task management, saving time and reducing the need for manual input.
      </li>
      <li className="mb-2">
        Cross-Platform Integration: Works seamlessly with popular tools like Google Calendar, Outlook, and email platforms.
      </li>
      <li className="mb-2">
        Real-Time Updates: Keeps all participants informed with real-time updates to meeting schedules, appointments, and tasks.
      </li>
      <li className="mb-2">
        Meeting Insights: Provides AI-driven insights to help improve meeting outcomes and optimize team collaboration.
      </li>
      <li className="mb-2">
        Task Prioritization: Automatically prioritizes tasks based on deadlines and importance, helping you focus on high-priority activities.
      </li>
    </ul>
  </div>

  {/* Cons Column */}
  <div className="col-lg-5 col-md-6 col-sm-12 pros-cons-box">
    <h5 className="text-warning text-start mb-4">⚠ Cons</h5>
    <ul className="ps-3" style={{ listStyleType: "disc" }}>
      <li className="mb-2">
        Pricing for Small Teams: The cost may be a consideration for smaller teams or businesses that don’t need the advanced features offered by the higher-tier plans.
      </li>
      <li className="mb-2">
        Learning Curve: Some users may need time to get used to the various features and customization options available in the platform.
      </li>
      <li className="mb-2">
        Dependence on Integrations: While it integrates with popular platforms like Google Calendar and Outlook, it may require third-party tools or custom APIs for integration with less common software.
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
                  Trello: A project management tool that allows for task organization and team collaboration but lacks the AI-powered scheduling and automation features of Adam.ai.
                </li>
                <li className="mb-2">
                  Calendly: A scheduling tool that automates meeting bookings, but it does not offer the task management or team collaboration features found in Adam.ai.
                </li>
                <li className="mb-2">
                  Clockwise: An AI-powered scheduling tool that optimizes calendar scheduling, but it does not provide the task management and meeting insights offered by Adam.ai.
                </li>
                <li className="mb-2">
                  Google Calendar: A free tool that provides basic scheduling capabilities but lacks the advanced features and task automation offered by Adam.ai.
                </li>
                <li className="mb-2">
                  Asana: A task and project management tool that integrates with calendar tools but lacks AI-driven scheduling and automation for meetings.
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
              <h1>Adam AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
              Adam.ai is an AI-powered productivity tool designed to automate, manage, and optimize meetings, task scheduling, and team collaboration. It acts as a virtual assistant for businesses and individuals, helping to streamline workflows, improve communication, and reduce the time spent on repetitive administrative tasks. With features like AI-driven scheduling, meeting automation, task management, and real-time updates, Adam.ai is an essential tool for teams and businesses looking to enhance productivity and efficiency.

              </p>

              <div className="mb-3">
                <a
                  href="https://adam.ai/"
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
                src={adam }
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
    How to Use Adam.ai?</h2>

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
        Schedule Meetings Effortlessly
      </h5>
      <p style={{ color: "#fff", margin: 0 }}>
        Use Adam.ai’s AI-powered scheduling to book meetings seamlessly across platforms like Google Calendar and Outlook.
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
        Manage Tasks & Agendas
      </h5>
      <p style={{ color: "#fff", margin: 0 }}>
        Organize meeting agendas, assign tasks, and prioritize action items automatically with AI assistance.
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
        Get AI-Driven Meeting Insights
      </h5>
      <p style={{ color: "#fff", margin: 0 }}>
        Receive smart summaries, insights, and follow-up reminders to keep your team aligned and productive.
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

export default Adam;