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
const AviaAI = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="AIVA AI Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Transform Your Business Workflow with AIVA AI's Advanced
                  Automation and Optimization Tools
                </p>
                <h3>
                  Unlock the Power of AI-Powered Workflow Automation and Task
                  Management
                </h3>
              </div>
              {[
                {
                  icon: "⚙️",
                  title: "Real-Time Workflow Automation",
                  desc: "AIVA AI allows you to automate your business workflows in real-time, eliminating manual effort and optimizing operational efficiency across multiple departments.",
                },
                {
                  icon: "🔧",
                  title: "Customizable Task Management",
                  desc: "Create, manage, and customize tasks with ease using AIVA AI’s flexible task management system, ensuring seamless collaboration and optimized productivity.",
                },
                {
                  icon: "🔗",
                  title: "Seamless Integration with Business Tools",
                  desc: "AIVA AI integrates smoothly with CRM, ERP, project management tools, and other popular platforms, ensuring that your business processes are automated and streamlined across systems.",
                },
                {
                  icon: "🌍",
                  title: "Global Scalability",
                  desc: "With AIVA AI, you can scale your workflows globally. It’s designed to support multiple languages, time zones, and business regions, allowing teams to collaborate seamlessly from anywhere in the world.",
                },
                {
                  icon: "📈",
                  title: "Real-Time Data Insights",
                  desc: "AIVA AI provides actionable insights and data-driven reports in real-time, helping businesses optimize their workflows and make informed decisions faster.",
                },
                {
                  icon: "🤝",
                  title: "Collaborative Task Optimization",
                  desc: "AIVA AI facilitates real-time collaboration within teams, allowing members to optimize and refine workflows together, enhancing task efficiency and driving collective success.",
                },
              ].map((feature, index) => (
                <div className="col-md-4" key={index}>
                  <div className="custom-card text-light p-4 h-100 border border-primary rounded">
                    <div
                      className="icon mb-3 fs-3"
                      role="img"
                      aria-label="Feature Icon"
                    >
                      {feature.icon}
                    </div>
                    <h5 className="fw-bold">{feature.title}</h5>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
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
                  q: "What is AIVA AI?",
                  a: "AIVA AI is an advanced workflow automation platform powered by artificial intelligence. It allows businesses to streamline tasks, optimize workflows, and enhance productivity by automating routine processes in real-time.",
                },
                {
                  q: "How does AIVA AI enhance workflow automation?",
                  a: "AIVA AI leverages AI technology to automate tasks and business processes, offering users the ability to optimize operations, reduce manual intervention, and increase efficiency across various departments like sales, marketing, and customer support.",
                },
                {
                  q: "Who can benefit from using AIVA AI?",
                  a: "AIVA AI is ideal for businesses of all sizes, from small startups to large enterprises. It benefits teams in operations, project management, marketing, customer service, and more by automating tasks and improving workflow efficiency.",
                },
                {
                  q: "What is Real-Time Workflow Automation in AIVA AI?",
                  a: "Real-time workflow automation in AIVA AI allows businesses to automate processes as they happen, ensuring that tasks are completed on time and without manual intervention. This feature is particularly useful for teams handling repetitive tasks and complex workflows.",
                },
                {
                  q: "Can I automate content creation with AIVA AI?",
                  a: "Yes, AIVA AI enables the automation of content creation, such as generating reports, email campaigns, or data-driven insights. It also provides tools for customizing and optimizing content workflows based on business needs.",
                },
                {
                  q: "Does AIVA AI offer workflow customization?",
                  a: "Absolutely! AIVA AI provides extensive customization options, allowing users to tailor workflows to their specific business requirements. You can automate everything from task assignments to notifications and approvals, ensuring smooth operations.",
                },
                {
                  q: "What is the data quality in AIVA AI?",
                  a: "AIVA AI ensures high-quality data processing, offering accurate automation and real-time insights to help businesses make data-driven decisions. The AI-driven features are optimized to maintain high standards of data quality and consistency.",
                },
                {
                  q: "Does AIVA AI integrate with other tools?",
                  a: "Yes, AIVA AI integrates seamlessly with popular business tools and platforms like CRM systems, project management tools, and marketing automation software, enabling users to connect various systems and improve overall efficiency.",
                },
                {
                  q: "Can I use AIVA AI with other business tools like CRM or ERP systems?",
                  a: "Definitely! AIVA AI works well with other business tools, including CRM, ERP, and project management platforms. This integration ensures that you can automate workflows across different departments and systems without any issues.",
                },
                {
                  q: "Is AIVA AI easy to use?",
                  a: "Yes, AIVA AI is designed to be user-friendly, with an intuitive interface that makes it accessible to both novice users and experienced professionals. The platform simplifies complex workflows and allows for quick setup and implementation.",
                },
                {
                  q: "Does AIVA AI support multiple languages?",
                  a: "Yes, AIVA AI supports multiple languages, allowing businesses to create automated workflows and content in different languages to reach a global audience and improve cross-cultural communication.",
                },
                {
                  q: "How accurate are AIVA AI's workflow automations?",
                  a: "AIVA AI offers highly accurate automation, ensuring that tasks and processes are executed precisely as defined. The AI models are trained to handle complex workflows with a high degree of accuracy, ensuring minimal errors.",
                },
                {
                  q: "Can multiple users collaborate on AIVA AI?",
                  a: "Yes, AIVA AI supports team collaboration, allowing multiple users to work together on shared workflows, tasks, and projects in real-time, enhancing efficiency and reducing duplication of effort.",
                },
                {
                  q: "What formats does AIVA AI support for workflow input?",
                  a: "AIVA AI supports a variety of input formats, including CSV files, API integrations, and custom data feeds, ensuring that businesses can easily input and process data to automate workflows.",
                },
                {
                  q: "Does AIVA AI assist with content generation?",
                  a: "AIVA AI doesn't provide direct content creation tools, but it can automate processes like report generation, email campaigns, and customer communications, making content workflows more efficient.",
                },
                {
                  q: "Can AIVA AI help with content in different languages?",
                  a: "Yes, AIVA AI is designed to handle content in multiple languages, enabling businesses to automate workflows and content creation for a global audience.",
                },
                {
                  q: "Is AIVA AI cloud-based?",
                  a: "Yes, AIVA AI is a cloud-based platform, meaning users can access their automated workflows, data, and content from anywhere with an internet connection, enabling seamless collaboration and scalability.",
                },
                {
                  q: "How often can I automate processes with AIVA AI?",
                  a: "With AIVA AI, businesses can automate processes as frequently as needed. Depending on your subscription plan, you can automate workflows continuously or set specific triggers for different tasks and processes.",
                },
                {
                  q: "Can AIVA AI track the performance of automated workflows?",
                  a: "Yes, AIVA AI provides performance tracking and analytics tools to monitor the effectiveness of your automated workflows. You can analyze key metrics and optimize workflows based on real-time data.",
                },
                {
                  q: "How secure is my data on AIVA AI?",
                  a: "AIVA AI ensures high levels of data security, using encryption and secure access protocols to protect user data and automated workflows. Your business's data remains safe and compliant with industry standards.",
                },
                {
                  q: "Is customer support available for AIVA AI?",
                  a: "Yes, AIVA AI offers comprehensive customer support, including live chat, email assistance, and a detailed help center to guide users through any questions or technical challenges.",
                },
                {
                  q: "Is there a free version of AIVA AI?",
                  a: "AIVA AI offers a free trial version with limited access to features. For full access to advanced automation and customization options, users can subscribe to a premium plan.",
                },
                {
                  q: "How do I start using AIVA AI?",
                  a: "To get started with AIVA AI, visit the official website, create an account, and choose a plan that suits your business needs. Once set up, you can begin automating workflows and optimizing tasks.",
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
                    <small className="text-muted d- text-center">
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
                    Why <strong>AIVA AI</strong> is the Ideal Platform for
                    Workflow Automation and Task Optimization
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>AIVA AI</strong> redefines how businesses manage
                    tasks and optimize workflows with its advanced AI-driven
                    solutions. Here's why it’s the ideal choice for
                    organizations looking to enhance productivity and
                    efficiency:
                  </p>

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
                      <strong>Real-Time Workflow Automation:</strong>{" "}
                      <strong>AIVA AI</strong> enables seamless task automation
                      in real time, perfect for streamlining daily operations
                      and boosting team productivity without manual
                      intervention.
                    </li>
                    <li className="mb-3">
                      <strong>Customizable AI-Driven Workflows:</strong> Whether
                      it's automating customer service responses or optimizing
                      internal processes, <strong>AIVA AI</strong> offers highly
                      customizable workflows tailored to your specific business
                      needs.
                    </li>
                    <li className="mb-3">
                      <strong>Data-Driven Insights for Decision-Making:</strong>{" "}
                      With advanced data analysis capabilities,{" "}
                      <strong>AIVA AI</strong> provides real-time insights and
                      actionable reports that empower businesses to make
                      informed, data-backed decisions.
                    </li>
                    <li className="mb-3">
                      <strong>Seamless Integration with Popular Tools:</strong>{" "}
                      Easily integrates with a variety of business platforms and
                      software tools like CRM systems, project management tools,
                      and marketing platforms to enhance your existing
                      workflows.
                    </li>
                    <li className="mb-3">
                      <strong>AI-Powered Task Recommendations:</strong>{" "}
                      <strong>AIVA AI</strong> suggests optimized actions and
                      tasks based on historical data and user preferences,
                      helping teams take proactive steps and stay ahead of
                      deadlines.
                    </li>
                    <li className="mb-3">
                      <strong>Easy-to-Use Interface:</strong> Designed with both
                      advanced users and beginners in mind,{" "}
                      <strong>AIVA AI</strong> provides an intuitive and
                      user-friendly interface, making it easy for teams to
                      implement and manage automation without a steep learning
                      curve.
                    </li>
                    <li className="mb-3">
                      <strong>Scalable for Businesses of All Sizes:</strong>{" "}
                      From small startups to large enterprises,{" "}
                      <strong>AIVA AI</strong> scales according to your needs,
                      providing the flexibility to handle diverse business
                      challenges efficiently.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Start Using <strong>AIVA AI</strong> to Revolutionize Your
                      Business Workflow
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Pros & Cons":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-2">
              Why <strong>AIVA AI</strong> is a Game-Changer in Workflow
              Automation
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>AIVA AI</strong> revolutionizes productivity and task
              management by automating key business processes. Let’s explore its
              strengths and possible limitations for users aiming to boost
              efficiency.
            </p>
            <div className="row justify-content-center gap-2">
              {/* Pros Column */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #3fcf8e",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-success text-start mb-4">✅ Pros</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Smart Task Automation:</strong>{" "}
                    <strong>AIVA AI</strong> automates repetitive tasks,
                    streamlining daily workflows and allowing teams to focus on
                    higher-value activities.
                  </li>
                  <li className="mb-2">
                    <strong>Real-Time Insights and Analytics:</strong> The
                    platform provides actionable insights in real-time, helping
                    businesses make data-driven decisions quickly and
                    efficiently.
                  </li>
                  <li className="mb-2">
                    <strong>Seamless Integration with Popular Tools:</strong>{" "}
                    <strong>AIVA AI</strong> integrates with a wide range of
                    business tools and platforms, enhancing collaboration and
                    productivity across teams.
                  </li>
                  <li className="mb-2">
                    <strong>Customizable Workflow Automation:</strong> Users can
                    tailor automation workflows to meet specific business needs,
                    optimizing efficiency and performance without coding
                    expertise.
                  </li>
                  <li className="mb-2">
                    <strong>Improved Decision-Making:</strong> AIVA AI’s data
                    analysis capabilities provide valuable insights that help
                    businesses enhance decision-making and drive growth.
                  </li>
                </ul>
              </div>

              {/* Cons Column */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #3fcf8e",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-warning text-start mb-4">⚠️ Cons</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Requires Time for Optimization:</strong> To get the
                    most out of <strong>AIVA AI</strong>, businesses may need to
                    spend time fine-tuning workflows and settings, especially
                    during the initial setup phase.
                  </li>
                  <li className="mb-2">
                    <strong>Premium Subscription for Advanced Features:</strong>{" "}
                    Some of the more advanced features and automation
                    capabilities are locked behind a premium subscription, which
                    may be a barrier for small businesses or startups.
                  </li>
                  <li className="mb-2">
                    <strong>Learning Curve for Customization:</strong> Although
                    customizable, advanced features and integrations can be
                    complex for new users, requiring a learning period to fully
                    master.
                  </li>
                  <li className="mb-2">
                    <strong>Dependence on Internet Connection:</strong> As a
                    cloud-based tool, <strong>AIVA AI</strong> requires a stable
                    and fast internet connection for real-time processing, which
                    could be a limitation in regions with unreliable
                    connectivity.
                  </li>
                  <li className="mb-2">
                    <strong>Initial Setup Complexity:</strong> For organizations
                    with diverse needs, the setup process may seem intricate,
                    requiring technical expertise to properly configure and
                    integrate AIVA AI into existing systems.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "Alternative":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-2">
              Explore Top Alternatives for Advanced AI Solutions in Workflow
              Automation
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>AIVA AI</strong> offers robust task automation and
              smart assistant features, there are other platforms providing
              unique capabilities for optimizing workflows and enhancing
              productivity.
            </p>
            <div className="row justify-content-center gap-2">
              <div
                className="col-lg-8 col-md-8 col-sm-12"
                style={{
                  border: "1px solid #3fcf8e",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>AIVA AI</strong>: A powerful AI-driven assistant
                    that automates workflows, manages tasks, and provides
                    real-time insights, boosting efficiency for businesses and
                    individuals.
                  </li>
                  <li className="mb-2">
                    <strong>Zapier</strong>: A leading automation platform that
                    connects your favorite apps and automates repetitive tasks,
                    streamlining processes across various tools without needing
                    coding skills.
                  </li>
                  <li className="mb-2">
                    <strong>IFTTT</strong>: A service that automates tasks by
                    creating simple conditional statements between different
                    apps and devices, enhancing connectivity and productivity.
                  </li>
                  <li className="mb-2">
                    <strong>Notion AI</strong>: An advanced AI-powered
                    productivity tool that helps you manage projects, create
                    content, and automate workflows in a highly customizable
                    workspace.
                  </li>
                  <li className="mb-2">
                    <strong>Microsoft Power Automate</strong>: A cloud-based
                    service that enables you to automate workflows and
                    repetitive tasks within Microsoft 365 and third-party
                    applications.
                  </li>
                  <li className="mb-2">
                    <strong>Monday.com</strong>: A work operating system with
                    automation capabilities that helps teams collaborate
                    efficiently, track progress, and manage workflows across
                    multiple platforms.
                  </li>
                  <li className="mb-2">
                    <strong>UiPath</strong>: A leading robotic process
                    automation (RPA) platform that automates repetitive
                    processes, enhances productivity, and integrates with AI
                    tools for enhanced business efficiency.
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
          <div className="row d-flex align-items-center justify-content-between mb-4">
            {/* Image Section - show first on mobile */}
            <div className="col-md-6 col-12 text-center order-1 order-md-2 mb-3 mb-md-0">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5IyEpRsYY8JsmOlBNKKmWf5jlOBFs3Ustg&s"
                alt="AIVA AI"
                className="img-fluid"
                style={{ maxHeight: "300px", objectFit: "contain" }}
              />
            </div>

            {/* Text Section - show below image on mobile, but left side on desktop */}
            <div className="col-md-6 col-12 order-2 order-md-1">
              <p className="text-primary mb-1">Write better, faster</p>
              <h1 className="h3">AIVA AI:</h1>
              <div className="text-warning mb-2">⭐⭐⭐⭐⭐</div>
              <p className="mb-3">
                AIVA (Artificial Intelligence Virtual Artist) is a cutting-edge
                music composition tool that leverages the power of AI to create
                original and high-quality music across multiple genres. Designed
                to assist composers, musicians, content creators, and
                filmmakers, AIVA is capable of generating both background music
                and full-fledged compositions. AIVA employs machine learning and
                algorithms to compose tracks, mimicking the creativity of human
                composers. With its powerful AI-driven tools, AIVA has become a
                favorite in industries such as film, video games, advertising,
                and content creation.
              </p>
<<<<<<< HEAD
              <div>
=======

              {/* <div className="mb-3">
>>>>>>> 0f48f6a61d229582bd9afb789d3c1471df1a5973
                <span className="badge bg-primary me-2">Image Generation</span>
                <span className="badge bg-success me-2">Creative</span>
                <span className="badge bg-warning text-dark">Paid</span>
              </div> */}
              <div className="mb-3">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-2"
                >
                  Explore Tool
                </a>
              </div>
            </div>
          </div>

          <section style={{ backgroundColor: "#1b1f2b", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">Enhance Your Workflow with AIVA AI</p>
              <h2
                className="text-white"
                style={{ fontWeight: "600", marginBottom: "1rem" }}
              >
                Discover How AIVA AI Revolutionizes Your Workflow and
                Productivity
              </h2>
              <p
                style={{
                  color: "#ccc",
                  marginBottom: "2rem",
                  fontStyle: "italic",
                }}
              >
                AIVA AI empowers users to automate tasks, enhance
                decision-making, and streamline operations, offering an
                intelligent assistant that adapts to your needs in real time.
              </p>

              <div className="row g-4">
                {/* Step 1 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#2d3b62",
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
              color: #3fcf8e;
              opacity: 0.6;
            }
          `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Automate Repetitive Tasks with Ease
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      AIVA AI helps automate mundane tasks, freeing up your time
                      for more valuable work. Whether it's scheduling, data
                      entry, or repetitive actions, AIVA handles it.
                    </p>
                    <div className="step1">1</div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#2d3b62",
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
              color: #3fcf8e;
              opacity: 0.6;
            }
          `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Enhance Your Decision-Making Process
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      AIVA AI's data analysis and processing capabilities
                      provide you with valuable insights, helping you make
                      faster and smarter decisions for your business or
                      projects.
                    </p>
                    <div className="step2">2</div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#2d3b62",
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
              color: #3fcf8e;
              opacity: 0.6;
            }
          `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Streamline Your Workflow Across Platforms
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      AIVA AI seamlessly integrates with various productivity
                      platforms and tools, ensuring smooth communication, task
                      management, and collaboration in your work environment.
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

          {/* <div className="bg-primary text-center text-light rounded-4 p-5 mt-5">
            <h4 className="mb-3">Ready to get started with AviaAI?</h4>
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default AviaAI;
