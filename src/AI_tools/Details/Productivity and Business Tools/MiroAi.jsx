import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import miro from "../../../../public/assets/Img/AI for Business/7.png";
import miro1 from "../../../../public/assets/Img/AI for Business/miro1.png";
import miro2 from "../../../../public/assets/Img/AI for Business/miro2.png";

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

const MiroAi = () => {
  const [activeTab, setActiveTab] = useState("features");
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
                title: "Miro AI Tools:",
                desc: " Miro integrates AI-driven tools that help streamline workflows, simplify task management, and facilitate better collaboration. These AI tools enhance the user's ability to manage projects, collaborate in real-time, and make data-driven decisions faster.",
              },
              {
                title: "AI in Miro:",
                desc: "The integration of AI in Miro elevates the user experience by providing predictive analysis, automated task management, and personalized insights. It’s designed to help teams stay on track, collaborate more efficiently, and improve productivity.",
              },
              {
                title: " Miro Smart Collaboration:",
                desc: " AI-powered collaboration tools in Miro enable teams to seamlessly interact with one another in a shared workspace, no matter where they are located. Features like AI-powered feedback and real-time collaboration help boost productivity during meetings, workshops, and brainstorming sessions.",
              },
              {
                title: "Miro AI Integrations: ",
                desc: "  Miro allows for powerful integrations with other tools like Slack, Jira, and Google Workspace, all enhanced with AI to improve workflows and communication.",
              },
              {
                title: "Miro Intelligent Workflows:",
                desc: " Miro’s AI-enabled workflows help automate the process of task allocation, prioritize action items, and streamline project management, saving time and improving accuracy.",
              },
              {
                title: "Miro AI for Teams:",
                desc: "  Designed with teams in mind, Miro’s AI-driven tools enhance coordination, communication, and accountability by allowing teams to share boards, assign tasks, and track progress seamlessly.​",
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
                src={miro1}
                alt="Screenshot 1"
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-md-6">
              <img
                src={miro2}
                alt="Screenshot 2"
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
                <h3 className="fw-bold mb-4">Why Use Miro AI Features </h3>

                <b>
                  Miro AI tools are designed to improve productivity,
                  collaboration, and task management in a digital workspace.
                  Whether you are a project manager, designer, or team leader,
                  Miro’s AI features help:
                </b>

                <p className="fs-5 mt-3">
                  <b>Increase Productivity:</b> By automating mundane tasks,
                  Miro’s AI-driven tools reduce time spent on administrative
                  work, allowing teams to focus on more critical creative or
                  strategic tasks.
                </p>
                <p className="fs-5 mt-3">
                  <b>Streamline Collaboration:</b> With real-time AI-powered
                  collaboration, your team can communicate and work on the same
                  tasks simultaneously,
                </p>
                <p className="fs-5 mt-3">
                  <b>Optimize Workflows:</b> AI assists in task prioritization,
                  streamlining planning processes, and automatically
                  categorizing content to keep projects on track.
                </p>
                <p className="fs-5 mt-3">
                  <b>Gain Insights:</b> Miro AI tools provide actionable
                  insights that help you understand project status, team
                  performance, and potential areas for improvement
                </p>

                <Button variant="primary" size="lg" className="mt-4">
                  Try Miro AI Now
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
                    <h3 className="mb-4 text-center">
                      Pros of Miro AI Features
                    </h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <p>
                          <b>Enhanced Team Collaboration:</b> With real-time
                          updates and AI collaboration tools, teams can
                          seamlessly work together despite being in different
                          locations.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b> Automated Task Management:</b> Miro’s AI-driven
                          task allocation and reminders help keep teams
                          organized and ensure deadlines are met.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b>Predictive Analytics:</b> Miro’s AI uses predictive
                          analytics to anticipate needs, deliver insights, and
                          suggest next steps, improving decision-making.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b>Efficient Workflow Management:</b> With intelligent
                          workflow automation, Miro helps simplify project
                          tracking, making it easier to manage complex tasks
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b>Integrations:</b> Miro’s AI features integrate
                          seamlessly with other tools, such as Google Workspace
                          and Slack, creating a unified workspace for your team
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cons Section */}
                <div className="col-md-10 offset-md-1">
                  <div style={styles.card}>
                    <h3 className="mb-4 text-center">
                      Cons of Miro AI Features
                    </h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <p>
                          <b> Learning Curve:</b> Some users may experience a
                          learning curve when using Miro's AI-powered features
                          due to the complexity of the tools
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b>Over-Reliance on AI:</b> While AI can automate many
                          tasks, there’s still a need for human creativity and
                          intervention, and users might become too dependent on
                          AI suggestions.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b>Cost:</b> The AI features are often bundled into
                          premium plans, which might be cost-prohibitive for
                          smaller teams or individuals
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b> Customization Limits:</b> Some of the automated
                          suggestions might not align perfectly with every
                          team’s working style or preferences.
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
              Alternatives to Miro AI Features
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
                    <strong>Lucidchart:</strong> A diagramming tool that
                    provides AI-driven insights and easy integration with other
                    project management tools.
                  </li>
                  <li className="mb-3">
                    <strong>Trello:</strong> Offers collaboration and project
                    management features with AI enhancements like task
                    automation and smart workflows.
                  </li>
                  <li className="mb-3">
                    <strong> Monday.com:</strong> Provides AI tools for
                    automating workflows, managing tasks, and tracking project
                    progress.
                  </li>
                  <li className="mb-3">
                    <strong>Asana:</strong>Integrates AI tools to optimize
                    project management, improve team collaboration, and provide
                    predictive insights.
                  </li>

                  <li className="mb-3">
                    <strong>Notion:</strong> AI features include task
                    management, smart categorization, and content planning,
                    perfect for teams looking for a versatile workspace
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
                  q: "What is Miro AI?",
                  a: "Miro AI refers to the artificial intelligence features integrated within the Miro platform to enhance collaboration, task management, and team productivity.",
                },
                {
                  q: "How does Miro AI help with task management? ",
                  a: "Miro AI automates task assignments, tracks deadlines, sends reminders, and prioritizes tasks to ensure that teams stay organized.",
                },
                {
                  q: "Can Miro AI improve team collaboration? ",
                  a: "Yes, Miro AI provides real-time collaboration tools, including feedback automation, shared workspaces, and streamlined communication",
                },
                {
                  q: "Does Miro AI offer integrations with other tools? ",
                  a: "Yes, Miro AI integrates with tools like Slack, Jira, Google Workspace, and others for better project management and team collaboration.",
                },
                {
                  q: "What type of insights does Miro AI provide? ",
                  a: "Miro AI provides insights into team performance, project status, and recommendations for improving workflows.",
                },
                {
                  q: " Is Miro AI suitable for remote teams? ",
                  a: "Yes, Miro AI is designed for remote collaboration, allowing teams to work together in real-time, no matter where they are located",
                },
                {
                  q: "Can Miro AI assist in brainstorming sessions? ",
                  a: "Yes, Miro AI helps organize and categorize ideas during brainstorming sessions, providing structure to the creative process.",
                },
                {
                  q: " What are the machine learning capabilities in Miro AI?",
                  a: " Miro AI’s machine learning tools detect patterns in team activities, suggest improvements for task management, and optimize workflows.",
                },
                {
                  q: " How does Miro AI help with project tracking?",
                  a: " Miro AI provides visual project tracking tools that let teams monitor progress in real-time and make adjustments as needed",
                },
                {
                  q: " Can Miro AI help create smart agendas for meetings?",
                  a: " Yes, Miro AI generates smart agendas for meetings, ensuring that important topics are prioritized and action items are clear.",
                },
                {
                  q: "Does Miro AI provide project forecasting? ",
                  a: "Yes, Miro AI provides project forecasting tools to predict completion times based on current progress and historical data.",
                },
              ]
                .map((item, i) => ({ ...item, id: `faq${i} ` }))
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
   <div className="d-flex align-items-center justify-content-between mb-5">
  {/* Left side (Text Section) */}
  <div style={{ flex: 1, paddingRight: "30px" }}>
    <img
      src=""// replace with your imported logo variable
      alt="Miro Logo"
      className="me-3"
      style={{ width: "60px" }}
    />
    <h2>Miro AI</h2>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐ 95% Satisfaction</div>
    <p className="mb-3">
      Miro is an online collaboration and whiteboard tool designed to
      facilitate teamwork and productivity. By leveraging Artificial
      Intelligence (AI), Miro enhances its offerings, making team
      collaboration more intuitive, efficient, and streamlined. From
      brainstorming and planning to task management and project
      tracking, Miro AI tools play a significant role in transforming
      how teams work together.
    </p>
    <div className="mb-3">
      <a
        href="https://miro.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary me-2"
      >
        Explore Tool
      </a>
    </div>
  </div>

  {/* Right side (Image Section) */}
  <div style={{ flex: 1, textAlign: "center" }}>
    <img
      src={miro}
      className="img-fluid rounded-3"
      style={{ maxWidth: "80%", height: "auto" }}
      alt="Miro AI Screenshot"
    />
  </div>
</div>


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

export default MiroAi;
