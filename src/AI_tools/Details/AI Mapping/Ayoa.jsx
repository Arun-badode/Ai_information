import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";

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
const Ayoa = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                Create Studio-Quality Videos with AI
              </p>
              <h3 className="">Features of Ayoa AI </h3>
            </div>
            {[
              {
                icon: "📝",
                title: "AI-Powered Task Management",
                desc: "Ayoa AI helps prioritize and categorize tasks based on deadlines, urgency, and dependencies, ensuring smoother project workflows.",
              },
              {
                icon: "🤖",
                title: "Smart Task Assignment",
                desc: "AI analyzes team skills and availability to suggest the best team members for each task, improving efficiency and collaboration.",
              },
              {
                icon: "📈",
                title: "AI-Driven Progress Tracking",
                desc: "Ayoa AI tracks the progress of tasks in real-time and provides insights and suggestions for optimal project completion.",
              },
              {
                icon: "🔔",
                title: "Automated Task Reminders",
                desc: "AI sends automatic task reminders to team members based on deadlines, helping to prevent missed tasks and late submissions.",
              },
              {
                icon: "💬",
                title: "Collaborative AI Suggestions",
                desc: "AI helps facilitate team collaboration by suggesting task updates, potential bottlenecks, and improvements to enhance overall project performance.",
              },
              {
                icon: "🧠",
                title: "Intelligent Resource Allocation",
                desc: "Ayoa AI optimizes resource allocation by analyzing team workload and suggesting adjustments for maximum productivity.",
              },
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="custom-card text-light p-4 h-100  "
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
      case "FAQs":
        return (
          <div className="faq-section container py-4">
            <h3 className="text-center text-white mb-4 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is Ayoa AI?",
                  a: "Ayoa AI is a task and project management platform that uses artificial intelligence to enhance team collaboration, task prioritization, and resource allocation, helping teams work more efficiently.",
                },
                {
                  q: "How does Ayoa AI assist in task management?",
                  a: "Ayoa AI helps manage tasks by automatically prioritizing them based on urgency, importance, and deadlines, ensuring that teams focus on the right tasks at the right time.",
                },
                {
                  q: "Can Ayoa AI help with project planning?",
                  a: "Yes, Ayoa AI offers smart project planning tools that suggest optimal task sequences, resource allocation, and timeframes to ensure projects run smoothly.",
                },
                {
                  q: "How does Ayoa AI improve team collaboration?",
                  a: "Ayoa AI enhances collaboration by suggesting task assignments based on team members' skills, workload, and availability, making it easier to distribute tasks and track progress.",
                },
                {
                  q: "Can Ayoa AI automate task reminders?",
                  a: "Yes, Ayoa AI automatically sends task reminders based on due dates and priority levels, helping teams stay on track and meet deadlines.",
                },
                {
                  q: "How does Ayoa AI help with resource management?",
                  a: "Ayoa AI optimizes resource allocation by analyzing team workload and skillset, ensuring tasks are assigned to the right person with available capacity.",
                },
                {
                  q: "Is Ayoa AI suitable for small teams?",
                  a: "Yes, Ayoa AI is flexible and scalable, making it suitable for both small teams and large organizations looking to optimize task and project management.",
                },
                {
                  q: "Can Ayoa AI handle complex projects?",
                  a: "Yes, Ayoa AI can manage complex projects by breaking them down into manageable tasks, suggesting task dependencies, and providing insights on project progression.",
                },
                {
                  q: "Does Ayoa AI support integration with other tools?",
                  a: "Yes, Ayoa AI integrates with a variety of tools such as Google Calendar, Slack, and Microsoft Teams, ensuring seamless workflow across different platforms.",
                },
                {
                  q: "How does Ayoa AI track project progress?",
                  a: "Ayoa AI provides real-time progress tracking through visual tools like Gantt charts, task boards, and to-do lists, helping teams monitor deadlines and task completion.",
                },
                {
                  q: "Can Ayoa AI create detailed project reports?",
                  a: "Yes, Ayoa AI generates detailed project reports that track task completion, time spent on activities, and overall project progress.",
                },
                {
                  q: "How does Ayoa AI help with task delegation?",
                  a: "Ayoa AI assists with task delegation by analyzing team members' strengths and current workload to assign tasks to the most suitable individuals.",
                },
                {
                  q: "Can Ayoa AI suggest improvements for tasks and projects?",
                  a: "Yes, Ayoa AI provides suggestions to improve task execution, based on past data and performance metrics, making recommendations for optimizing workflows.",
                },
                {
                  q: "Does Ayoa AI offer visual project management tools?",
                  a: "Yes, Ayoa AI offers various visual project management tools like mind maps, Kanban boards, and Gantt charts to enhance task organization and workflow visualization.",
                },
                {
                  q: "How does Ayoa AI help with team communication?",
                  a: "Ayoa AI improves communication by allowing team members to leave comments, share updates, and collaborate on tasks directly within the platform.",
                },
                {
                  q: "Can Ayoa AI be customized for different business needs?",
                  a: "Yes, Ayoa AI is highly customizable, allowing teams to tailor workflows, templates, and task management processes to fit their unique needs.",
                },
                {
                  q: "Is Ayoa AI mobile-friendly?",
                  a: "Yes, Ayoa AI offers a mobile app that allows users to manage tasks, track projects, and communicate with team members while on the go.",
                },
                {
                  q: "How does Ayoa AI improve productivity?",
                  a: "Ayoa AI boosts productivity by automating routine tasks, streamlining communication, and ensuring that team members are always focused on the most important tasks.",
                },
                {
                  q: "Can Ayoa AI handle both personal and team tasks?",
                  a: "Yes, Ayoa AI allows users to manage both personal tasks and team projects, providing a comprehensive view of all tasks in one platform.",
                },
                {
                  q: "Does Ayoa AI provide task prioritization?",
                  a: "Yes, Ayoa AI automatically prioritizes tasks based on their urgency, importance, and due dates to ensure that teams focus on the right tasks at the right time.",
                },
                {
                  q: "Can Ayoa AI help track team performance?",
                  a: "Yes, Ayoa AI tracks team performance by analyzing task completion rates, deadlines met, and individual contributions, providing insights into team efficiency.",
                },
                {
                  q: "Is Ayoa AI suitable for agile project management?",
                  a: "Yes, Ayoa AI is ideal for agile project management, offering tools such as Kanban boards and sprints to support iterative development and flexible workflows.",
                },
                {
                  q: "How does Ayoa AI help with brainstorming?",
                  a: "Ayoa AI provides mind mapping tools to assist teams in brainstorming and generating creative ideas for tasks and projects.",
                },
                {
                  q: "Can Ayoa AI analyze task completion time?",
                  a: "Yes, Ayoa AI tracks the time spent on tasks and compares it with estimated times, providing insights into task efficiency and potential bottlenecks.",
                },
                {
                  q: "How does Ayoa AI support collaborative planning?",
                  a: "Ayoa AI supports collaborative planning by allowing teams to jointly create tasks, set priorities, and track progress in real time, fostering a collaborative environment.",
                },
                {
                  q: "Does Ayoa AI integrate with communication platforms?",
                  a: "Yes, Ayoa AI integrates with communication platforms like Slack, Microsoft Teams, and email, ensuring smooth communication between team members.",
                },
                {
                  q: "Can Ayoa AI manage multiple projects simultaneously?",
                  a: "Yes, Ayoa AI can handle multiple projects at once, providing separate task boards for each project while keeping the overall workflow organized.",
                },
                {
                  q: "What are the main benefits of using Ayoa AI?",
                  a: "The main benefits of using Ayoa AI include improved task prioritization, enhanced team collaboration, smarter project planning, and better resource allocation.",
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

      case "Screenshots":
        return (
          <div className="row g-4">
            <div className="col-md-6">
              <img
                src="https://www.testingcatalog.com/content/images/size/w2000/2024/06/screenshot-app.runwayml.com-2024.06.24-00_36_32--1-.png"
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src="https://www.techspot.com/articles-info/2720/images/2023-08-17-image.jpg"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
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

      case "Technical":
        return (
          <div style={styles.section}>
            <div className="container">
              <div className="row g-4">
                {/* System Requirements */}
                <div className="col-md-8">
                  <div style={styles.card}>
                    <h5 className="mb-4">System Requirements</h5>
                    <div className="row">
                      <div className="col-md-6">
                        <h6>Supported Platforms</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>🪟 Windows 10/11 (Web App)</li>
                          <li>🍎 macOS 11+ (Chrome or Safari)</li>
                          <li>📱 Android & iOS (Mobile Browser)</li>
                          <li>🌐 Modern browsers (Chrome, Firefox, Edge)</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h6>Hardware Requirements</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>⚡ Intel i3 or equivalent (2.0 GHz+)</li>
                          <li>🧠 4 GB RAM (8 GB preferred for HD rendering)</li>
                          <li>💾 300 MB disk space for cache</li>
                          <li>📶 Stable high-speed internet (4 Mbps+)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Resources & Support */}
                <div className="col-md-4">
                  <div style={styles.card}>
                    <h5 className="mb-4">Resources</h5>
                    <ul className="list-unstyled mb-4" style={styles.smallText}>
                      <li>📄 Getting Started with Pictory</li>
                      <li>💻 API Documentation</li>
                      <li>🎥 Video Tutorials</li>
                      <li>🎓 AI Video Academy</li>
                      <li>💬 Support Community</li>
                    </ul>
                    <h5>Support</h5>
                    <button
                      className="btn w-100 my-2"
                      style={styles.button}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor =
                          styles.buttonHover.backgroundColor;
                        e.target.style.borderColor =
                          styles.buttonHover.borderColor;
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor =
                          styles.button.backgroundColor;
                        e.target.style.borderColor = styles.button.borderColor;
                      }}
                    >
                      🎧 Contact Support
                    </button>
                    <small className="text-muted d-block text-center">
                      24/7 technical support for premium users
                    </small>
                  </div>
                </div>

                {/* Integrations */}
                <div className="col-12">
                  <div style={styles.card}>
                    <h5 className="mb-4">Integration Capabilities</h5>
                    <div className="row">
                      <div className="col-md-4">
                        <h6>Content Sources</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>🧰 Google Docs</li>
                          <li>🧰 Microsoft Word</li>
                          <li>🧰 Blog URLs for video summarization</li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <h6>Export Tools</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>💻 MP4 Video Export</li>
                          <li>💻 SRT/VTT Subtitles</li>
                          <li>💻 Social media formats</li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <h6>Marketing Tools</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>📢 Hootsuite Integration</li>
                          <li>📢 HubSpot</li>
                          <li>📢 LinkedIn & Facebook Upload</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Why-We-Use":
        return (
          <div className="container">
            <div className="row g-4">
              <div className="col-12">
                <div className="custom-card text-light p-5 text-center">
                  <h3 className="fw-bold mb-4 text-start text-primary">
                    Why Use Ayoa AI?
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
                      <strong>Task Prioritization & Automation:</strong> Ayoa AI
                      automatically analyzes tasks and assigns priority levels
                      based on deadlines, urgency, and dependencies, ensuring
                      that teams focus on the most critical tasks.
                    </li>
                    <li className="mb-3">
                      <strong>Smart Project Planning:</strong> Ayoa AI assists
                      with project planning by suggesting optimal task
                      sequences, allocating resources efficiently, and setting
                      realistic timelines, which helps teams execute projects
                      smoothly.
                    </li>
                    <li className="mb-3">
                      <strong>Team Collaboration & Communication:</strong> Ayoa
                      AI enhances team collaboration by recommending task
                      assignments based on individual strengths and
                      availability, and it integrates communication tools to
                      keep the team aligned and informed.
                    </li>
                    <li className="mb-3">
                      <strong>Progress Tracking & Reporting:</strong> Ayoa AI
                      tracks task completion rates and generates detailed
                      reports to give real-time insights into project status,
                      helping managers make data-driven decisions and identify
                      bottlenecks early.
                    </li>
                    <li className="mb-3">
                      <strong>Resource Management:</strong> Ayoa AI analyzes
                      team members’ workloads and skills to optimize resource
                      allocation, ensuring that tasks are assigned to the most
                      suitable person while maintaining a balanced workload
                      across the team.
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

      case "Pros & Cons":
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
                    <strong>Faster Candidate Screening:</strong> Zoho Recruit AI
                    automates the initial screening process, allowing recruiters
                    to filter through resumes and shortlist top candidates
                    quickly.
                  </li>
                  <li className="mb-3">
                    <strong>Smarter Matching:</strong> The AI helps match
                    candidates' qualifications, experience, and skills with job
                    requirements, making the hiring process more accurate and
                    efficient.
                  </li>
                  <li className="mb-3">
                    <strong>Reduces Bias:</strong> AI-powered evaluations remove
                    human biases, ensuring that candidates are assessed based on
                    their actual skills and qualifications, promoting fair
                    hiring practices.
                  </li>
                  <li className="mb-3">
                    <strong>Improved Candidate Experience:</strong> Candidates
                    benefit from a seamless, personalized experience as Zoho
                    Recruit AI tailors the hiring process to their specific
                    needs and capabilities.
                  </li>
                </ul>

                <h5>Pros of Ayoa AI:</h5>
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
                    <strong>Boosted Creativity:</strong> Ayoa AI helps users
                    brainstorm and organize ideas in a creative and efficient
                    manner, providing tools that inspire innovation.
                  </li>
                  <li className="mb-3">
                    <strong>Enhanced Collaboration:</strong> Facilitates better
                    teamwork by allowing team members to share ideas, track
                    progress, and provide feedback in real-time, ensuring
                    everyone is on the same page.
                  </li>
                  <li className="mb-3">
                    <strong>Increased Productivity:</strong> With task
                    management and AI-driven suggestions, Ayoa AI helps users
                    prioritize and focus on high-impact tasks, making it easier
                    to stay productive.
                  </li>
                  <li className="mb-3">
                    <strong>Personalized Workflows:</strong> Ayoa AI customizes
                    workflows based on user needs, ensuring that tasks are
                    completed more efficiently and aligned with individual or
                    team goals.
                  </li>
                  <li className="mb-3">
                    <strong>AI-Driven Insights:</strong> The AI provides
                    actionable insights into project performance, helping users
                    make better decisions and continuously improve their
                    workflows.
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
                <h5 className="text-warning text-start mb-4">⚠️ Cons</h5>
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
                    <strong>Learning Curve:</strong> Ayoa AI can have a learning
                    curve for new users, especially those who are not familiar
                    with AI-driven task management and collaboration tools.
                  </li>
                  <li className="mb-3">
                    <strong>Over-Reliance on AI:</strong> Some users might
                    become overly dependent on the AI's suggestions, potentially
                    overlooking creative or unique solutions that aren't
                    generated by the AI.
                  </li>
                  <li className="mb-3">
                    <strong>Limited Customization:</strong> While Ayoa AI offers
                    workflow customization, there may still be limitations in
                    adapting the tool to fit very specific or niche use cases.
                  </li>
                  <li className="mb-3">
                    <strong>Data Privacy Concerns:</strong> Since Ayoa AI
                    handles sensitive data, users must ensure that the platform
                    complies with data privacy regulations to avoid security
                    risks.
                  </li>
                  <li className="mb-3">
                    <strong>Requires Internet Access:</strong> Ayoa AI requires
                    a stable internet connection to function effectively, which
                    could be an issue for remote teams in areas with unreliable
                    connectivity.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "Alternative":
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
                    <strong>Requires High-Quality Data:</strong> Zoho Recruit
                    AI’s performance is highly dependent on the quality and
                    accuracy of the data it receives. Inaccurate or incomplete
                    data can affect the AI’s ability to make accurate
                    predictions.
                  </li>
                  <li className="mb-2">
                    <strong>Potential for Over-Reliance on Automation:</strong>{" "}
                    While AI helps speed up processes, it can lead to
                    over-reliance on automation, potentially missing out on
                    assessing the intangible qualities of candidates.
                  </li>
                  <li className="mb-2">
                    <strong>Risk of Bias:</strong> Though designed to reduce
                    bias, the AI system may still carry biases from historical
                    data, which could unintentionally affect the fairness of
                    candidate evaluations.
                  </li>
                  <li className="mb-2">
                    <strong>Requires Constant Training:</strong> For optimal
                    performance, the AI requires regular training and updates,
                    which can be time-consuming and require dedicated resources.
                  </li>
                  <li className="mb-2">
                    <strong>Limited Human Touch:</strong> While AI can assist in
                    streamlining recruitment, it may lack the human intuition
                    necessary to fully understand a candidate's personality,
                    cultural fit, and other qualitative factors.
                  </li>
                  <li className="mb-2">
                    <strong>Integration Complexity:</strong> For businesses
                    using multiple systems, integrating Zoho Recruit AI into
                    their existing workflows could be challenging and might
                    require technical expertise.
                  </li>
                  <li className="mb-2">
                    <strong>Privacy Concerns:</strong> As Zoho Recruit AI
                    involves handling a large amount of sensitive candidate
                    data, there may be concerns about data security and
                    compliance with privacy regulations.
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
          <div className=" row d-flex align-items-center justify-content-between mb-1">
            {/* Left side (Text Section) */}
            <div
              style={{ flex: 1, paddingRight: "30px" }}
              className="col-6 col-md-12 "
            >
              <p className="text-primary">Write better, faster</p>
              <h1>Ayoa AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Ayoa AI is an intelligent task management and project planning
                software that enhances productivity through artificial
                intelligence. This tool integrates mind mapping, task
                prioritization, and collaboration features to assist teams and
                individuals in managing their workflows effectively. Ayoa AI
                combines various productivity techniques such as visual task
                management, Kanban boards, Gantt charts, and AI-driven task
                automation to simplify the management of personal and team
                tasks.
              </p>

              <div className="mb-3">
                <span className="badge bg-primary me-2">Image Generation</span>
                <span className="badge bg-success me-2">Creative</span>
                <span className="badge bg-warning text-dark">Paid</span>
              </div>
            </div>

            {/* Right side (Image Section) */}
            <div
              style={{
                flex: 1,
                textAlign: "center",
                Width: "100%",
                height: "250px",
              }}
              className="col-6 col-md-12 mb-5  "
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5IyEpRsYY8JsmOlBNKKmWf5jlOBFs3Ustg&s"
                style={{ MaxWidth: "100%", height: "300px" }}
              />
            </div>
          </div>
          <section style={{ backgroundColor: "", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">Create Videos in 3 Simple Steps</p>
              <h2
                style={{
                  fontWeight: "semibold",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                How Ayoa AI Works?
              </h2>
              <div className="row g-4 mt-5">
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
          .ayoa1 {
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
                      Step 1: AI-Assisted Task Management
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Ayoa AI helps prioritize and categorize tasks based on
                      deadlines and urgency, improving workflow efficiency.
                    </p>
                    <div className="ayoa1">1</div>
                  </div>
                </div>

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
          .ayoa2 {
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
                      Step 2: AI-Powered Collaboration
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Ayoa AI helps teams collaborate efficiently by analyzing
                      task distribution and suggesting the best team members for
                      each task.
                    </p>
                    <div className="ayoa2">2</div>
                  </div>
                </div>

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
          .ayoa3 {
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
                      Step 3: Smart Task Suggestions & Automation
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Ayoa AI automates task suggestions and reminds team
                      members of deadlines, optimizing productivity and project
                      management.
                    </p>
                    <div className="ayoa3">3</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tab Navigation */}
          <ul className="nav nav-tabs custom-tabs mb-4">
            {[
              "Features",
              "Screenshots",
              "Reviews",
              "FAQs",
              "Technical",
              "Why-We-Use",
              "Pros & Cons",
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

          <div className="bg-primary text-center text-light rounded-4 p-5 mt-5">
            <h4 className="mb-3">Ready to get started with Ayoa?</h4>
            <p className="mb-4">
              Join thousands of professionals already boosting their
              productivity!
            </p>
            <div>
              <button className="btn btn-light me-3">Try Now for Free</button>
              <button className="btn btn-outline-light">Schedule a Demo</button>
            </div>
            <small className="d-block mt-2">
              No credit card required. 14-day free trial available.
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ayoa;
