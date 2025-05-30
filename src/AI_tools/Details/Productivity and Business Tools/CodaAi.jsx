import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import coda from "../../../../public/assets/Img/AI for Business/6.png";
import coda1 from '../../../../public/assets/Img/AI for Business/coda1.png'
import coda2 from '../../../../public/assets/Img/AI for Business/coda2.png'

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

const CodaAI = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default active tab as 'features'
  const [openIndex, setOpenIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <div className="row g-4">
            {[
              {
                title: "Coda AI Features:",
                desc: "Coda AI provides a variety of powerful tools for document creation, task management, team collaboration, and more. It integrates AI to automate processes, optimize workflows, and enhance productivity.",
              },
              {
                title: "  Coda AI Integration:",
                desc: " Seamlessly integrates with popular platforms like Slack, Google Sheets, and CRM systems, allowing businesses to centralize their processes and data in one place.",
              },
              {
                title: " Coda AI Workflow Automation",
                desc: " Automates repetitive tasks, reducing manual effort and increasing efficiency. The AI handles tasks like document generation, project tracking, and reporting with minimal input from users.",
              },
              {
                title: " Coda AI Document Creation: ",
                desc: " Coda AI allows users to create dynamic documents that can adjust based on the context. This makes document creation more intuitive and streamlined.",
              },
              {
                title: "Coda AI Productivity Tools:",
                desc: " With built-in productivity tools like task management, time tracking, and real-time collaboration, Coda AI helps individuals and teams stay organized and focused.",
              },
              {
                title: "Coda AI for Teams:",
                desc: " Whether it's a small startup or a large enterprise, Coda AI provides tailored solutions to streamline team workflows, manage tasks, and improve communication.​",
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

      case "Screenshots":
        return (
          <div className="row g-4">
            <div className="col-md-6">
              <img
                src={coda1}
                alt="Coda AI"
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-md-6">
              <img
                src={coda2}
                alt="Coda AI"
                className="img-fluid rounded-3"
              />
            </div>
          </div>
        );

      case "Reviews":
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

      case "Why-we-use":
        return (
          <div className="row g-4">
            <div className="col-12">
              <div className="custom-card text-light p-5 text-center">
                <h3 className="fw-bold mb-4">Why Use Coda AI? </h3>

                <p>
                  Coda AI provides numerous benefits to both businesses and
                  individuals:
                </p>

                <p className="fs-5 mt-3">
                  <b> Seamless Collaboration:</b> Coda AI fosters collaboration
                  among teams, departments, and clients, allowing for real-time
                  updates, feedback, and file sharing.
                </p>
                <p className="fs-5 mt-3">
                  <b> Increased Productivity:</b> Automation of repetitive tasks
                  and streamlining workflows helps teams stay productive and
                  focus on higher-priority activities.
                </p>
                <p className="fs-5 mt-3">
                  <b>Customization:</b> With customizable templates and
                  workflows, Coda AI can be tailored to fit specific needs,
                  whether it's for project management, content creation, or HR
                  processes.
                </p>
                <p className="fs-5 mt-3">
                  <b> Real-Time Updates:</b> Coda AI ensures that team members
                  are always working with the latest information, reducing the
                  risk of errors and miscommunication
                </p>

                <Button variant="primary" size="lg" className="mt-4">
                  Try Coda AI Now
                </Button>
              </div>
            </div>
          </div>
        );

      case "Pro&Const":
        return (
          <div style={styles.section}>
            <div className="container">
              <div className="row g-4">
                {/* Pros Section */}
                <div className="col-md-10 offset-md-1">
                  <div style={styles.card}>
                    <h3 className="mb-4 text-center">Pros of Coda AI</h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <p>
                          <b>Versatile Integrations:</b> Integrates with Slack,
                          Google Sheets, Dropbox, and many more apps.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b>Collaboration Focused:</b> Built to enhance
                          teamwork through real-time updates, feedback sharing,
                          and task tracking.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b>Customization:</b> Allows users to build custom
                          workflows and templates.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b>User-Friendly Interface:</b> Intuitive design that
                          is easy to use for both tech-savvy and non-technical
                          users.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b>Automation Features:</b> Automates repetitive tasks
                          and processes, saving time and effort.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cons Section */}
                <div className="col-md-10 offset-md-1">
                  <div style={styles.card}>
                    <h3 className="mb-4 text-center">Cons of Coda AI:</h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <p>
                          <b> Learning Curve:</b> Some users may find the tool
                          complex to get started with due to its extensive
                          features and customization options
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b> Premium Pricing: </b>While Coda AI offers a free
                          plan, many of the advanced features are locked behind
                          paid plans.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b> Limited Mobile App Features:</b> The mobile app
                          may lack some features available in the desktop
                          version, affecting on-the-go accessibility.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b> Dependence on Integrations:</b> Some users may
                          find the integration setup challenging, especially for
                          non-technical teams.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Alternative":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-4">
              Alternatives to Coda AI:
            </h4>
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
                  <li className="mb-3">
                    <strong> Sonix: –</strong> Known for its transcription
                    accuracy, Sonix also provides support for multiple languages
                    and is ideal for media professionals.
                  </li>
                  <li className="mb-3">
                    <strong>Notion AI:</strong> Offers similar team
                    collaboration and document management features, with more
                    focus on note-taking and database management.
                  </li>
                  <li className="mb-3">
                    <strong>Trello:</strong> Great for project management,
                    though it lacks the robust document creation and workflow
                    automation features of Coda AI.
                  </li>
                  <li className="mb-3">
                    <strong>Airtable:</strong> A flexible platform that focuses
                    on organizing data, project management, and collaboration
                    with some automation features, but lacks the document
                    creation focus of Coda AI.
                  </li>

                  <li className="mb-3">
                    <strong>ClickUp:</strong> A comprehensive project management
                    tool with workflow automation, but Coda AI provides more
                    flexibility in terms of custom document creation and
                    integration
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "FAQs":
        return (
          <div className="faq-section container py-5">
            <h3 className="text-center  text-white mb-5 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is Coda AI?",
                  a: "Coda AI is an AI-powered platform designed to automate workflows, improve team collaboration, and enhance document management, making it easier for businesses to manage tasks, projects, and data.",
                },
                {
                  q: "How does Coda AI improve productivity?",
                  a: " Coda AI helps teams streamline tasks, automate repetitive actions, and centralize information, boosting overall productivity and reducing time spent on manual work",
                },
                {
                  q: "Is Coda AI suitable for small businesses?",
                  a: " Yes, Coda AI is highly suitable for small businesses, providing them with powerful tools for task management, collaboration, and automation at an affordable price.",
                },
                {
                  q: " Can I use Coda AI for project management?",
                  a: "Absolutely! Coda AI has features like task management, timeline tracking, and real-time updates, making it an ideal tool for managing projects.",
                },
                {
                  q: "How does Coda AI integrate with other apps?",
                  a: "Coda AI integrates with apps like Google Sheets, Slack, Microsoft Teams, Dropbox, and more, allowing seamless collaboration and centralization of workflows.",
                },
                {
                  q: " What are the key features of Coda AI?",
                  a: " Coda AI offers features such as document creation, workflow automation, task management, team collaboration, and data organization.",
                },
                {
                  q: "Does Coda AI have a mobile app?",
                  a: " Yes, Coda AI has a mobile app that allows you to manage tasks, collaborate with teams, and access documents from anywhere.",
                },
                {
                  q: " Is Coda AI easy to use for beginners?",
                  a: "Coda AI offers a user-friendly interface, but some of its advanced features may require a learning curve. However, it's generally easy to pick up for most users.",
                },
                {
                  q: " Is Coda AI secure for businesses?",
                  a: "Yes, Coda AI ensures the security of your data by using encrypted cloud storage and secure sharing features",
                },
                {
                  q: " How do I get started with Coda AI?",
                  a: " You can start by signing up for an account on the Coda AI website, exploring the various templates, and integrating it with your existing tools.",
                },
                {
                  q: "Can I use Coda AI for team feedback collection?",
                  a: " Yes, Coda AI makes it easy to collect and analyze team feedback by creating forms, surveys, and feedback loops.",
                },
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

              {/* Read More / Read Less Button */}
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
         <div className="row align-items-center g-4 mb-5">
  {/* Left side (Text Section) */}
  <div className="col-lg-6 col-12 order-lg-1 order-2 pe-lg-4">
    <div className="d-flex align-items-center mb-3">
     
      <h2 className="mb-0">Coda AI</h2>
    </div>
    <div className="text-warning mb-3">
      ⭐⭐⭐⭐⭐ 95% Satisfaction
    </div>
    <p className="mb-4">
      Coda AI is a versatile, AI-powered tool designed to help
      individuals, teams, and businesses automate their workflows,
      improve productivity, and streamline document management. It
      integrates advanced features like document creation, task
      management, team collaboration, and data organization, all in a
      single platform.
    </p>
    <p className="mb-4">
      By leveraging machine learning and real-time
      updates, Coda AI helps businesses achieve better collaboration,
      optimize workflows, and manage projects with efficiency.
    </p>
    <div className="mb-3">
      <a
        href="https://www.codeai.studio/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-lg px-4"
      >
        Explore Tool
      </a>
    </div>
  </div>

  {/* Right side (Image Section) */}
  <div className="col-lg-6 col-12 order-lg-2 order-1 text-center">
    <img
      src={coda}
      alt="Coda AI Interface"
      className="img-fluid rounded-3 shadow-sm"
      style={{ 
        maxWidth: "100%", 
        height: "auto",
        maxHeight: "350px"
      }}
    />
  </div>
</div>





<section style={{ backgroundColor: "#0b1e3d", padding: "3rem 0" }}>
  <div className="container text-center">
    <p className="text-primary">
      Supercharge Docs & Teams—Coda AI in Action
    </p>
    <h2
      className="text-white"
      style={{ fontWeight: "600", marginBottom: "1rem" }}
    >
      Discover How Coda AI Enhances Collaboration and Documentation
    </h2>
    <p
      style={{
        color: "#ccc",
        marginBottom: "2rem",
        fontStyle: "italic",
      }}
    >
      Coda AI brings intelligence to your docs—automating updates, summarizing info,
      and enabling real-time collaboration across teams.
    </p>

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
            .coda-step1 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #7b61ff;
              opacity: 0.6;
            }
          `}</style>
          <h5 style={{ fontWeight: "bold", color: "#fff" }}>
            Smart Summarization
          </h5>
          <p style={{ color: "#fff", margin: 0 }}>
            Coda AI summarizes long documents into key points, helping you save time and stay informed.
          </p>
          <div className="coda-step1">1</div>
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
            .coda-step2 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #7b61ff;
              opacity: 0.6;
            }
          `}</style>
          <h5 style={{ fontWeight: "bold", color: "#fff" }}>
            Automates Meeting Notes
          </h5>
          <p style={{ color: "#fff", margin: 0 }}>
            Automatically captures and organizes meeting notes, turning conversations into action items.
          </p>
          <div className="coda-step2">2</div>
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
            .coda-step3 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #7b61ff;
              opacity: 0.6;
            }
          `}</style>
          <h5 style={{ fontWeight: "bold", color: "#fff" }}>
            AI-Enhanced Collaboration
          </h5>
          <p style={{ color: "#fff", margin: 0 }}>
            Empower teams to co-create documents smarter with real-time AI suggestions and integrations.
          </p>
          <div className="coda-step3">3</div>
        </div>
      </div>
    </div>
  </div>
</section>


v

          {/* Tab Navigation */}
          <ul className="nav nav-tabs custom-tabs mb-4">
            {[
              "Features",
              "Screenshots",
              "Reviews",
              "FAQs",
              // "technical",
              "Why-we-use",
              "Pro&Const",
              "Alternative",
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

export default CodaAI;
