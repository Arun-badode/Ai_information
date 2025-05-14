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
const Govison = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="GoVision AI Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Unlock Powerful Visual Insights with GoVision AI
                </p>
                <h3>
                  Transform Data into Actionable Visuals for Smarter Decisions
                </h3>
              </div>
              {[
                {
                  icon: "📊",
                  title: "Data-Driven Visual Insights",
                  desc: "GoVision AI empowers you to visualize complex data into simple, digestible charts, graphs, and diagrams for better decision-making.",
                },
                {
                  icon: "🌐",
                  title: "Global Language and Format Support",
                  desc: "Create and export visuals in various languages and file formats, including PDF, PNG, and SVG, for maximum accessibility and flexibility.",
                },
                {
                  icon: "⚡",
                  title: "Fast, Real-Time Processing",
                  desc: "Generate complex diagrams and visuals in seconds, even with large datasets, making it ideal for rapid workflows and analysis.",
                },
                {
                  icon: "🔒",
                  title: "Secure and Private Data Handling",
                  desc: "GoVision AI ensures your data is processed with top-level encryption, following strict privacy standards for safe and secure content creation.",
                },
                {
                  icon: "📈",
                  title: "Dynamic Visualization Customization",
                  desc: "Tailor your visuals to suit your needs, adjusting layouts, themes, and data complexity to reflect your audience's requirements.",
                },
                {
                  icon: "🖋️",
                  title: "Support for Diverse Content Creation",
                  desc: "Whether you're drafting reports, building presentations, or brainstorming creative ideas, GoVision AI delivers polished, ready-to-use visuals.",
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
                  q: "What is GoVision AI?",
                  a: "GoVision AI is an advanced platform designed to simplify data analysis, visualize complex processes, and create intuitive diagrams and content, empowering users to enhance communication and decision-making.",
                },
                {
                  q: "How does GoVision AI work?",
                  a: "GoVision AI leverages artificial intelligence to analyze data inputs and generate visuals such as flowcharts, process maps, and interactive diagrams to facilitate clear communication and better understanding of complex topics.",
                },
                {
                  q: "Is the content generated by GoVision AI secure?",
                  a: "Yes, GoVision AI ensures that all content produced is proprietary and free from copyright concerns, giving you the flexibility to use it for personal, academic, or professional purposes.",
                },
                {
                  q: "Can I customize the visuals created by GoVision AI?",
                  a: "Absolutely! You can easily personalize the design, layout, and elements of the visuals to align with your project requirements or branding preferences.",
                },
                {
                  q: "Can GoVision AI handle large data sets?",
                  a: "Yes, GoVision AI is optimized to manage and visualize substantial volumes of data, making it ideal for analysts, marketers, and corporate teams looking to gain insights from big data.",
                },
                {
                  q: "Which file formats are supported for export?",
                  a: "GoVision AI allows you to export your visuals in a variety of formats, including PDF, PNG, SVG, and Excel, ensuring compatibility with various platforms and use cases.",
                },
                {
                  q: "Is GoVision AI free to use?",
                  a: "GoVision AI offers both a free tier with essential features and premium plans with enhanced AI tools, team collaboration, and customization options.",
                },
                {
                  q: "Can I share or download my visuals from GoVision AI?",
                  a: "Yes, you can easily share your generated visuals with others via download links, cloud integration, or through direct sharing options within the platform.",
                },
                {
                  q: "Is GoVision AI suitable for educational use?",
                  a: "Definitely! GoVision AI is perfect for students and educators who need to create educational materials, diagrams, or research presentations to simplify complex concepts.",
                },
                {
                  q: "Does GoVision AI generate original content?",
                  a: "Yes, GoVision AI generates completely original diagrams and content, ensuring uniqueness and reducing the risks of plagiarism.",
                },
                {
                  q: "Is GoVision AI easy to use for beginners?",
                  a: "Yes, the platform is designed to be user-friendly, allowing beginners to get started quickly without requiring any technical expertise.",
                },
                {
                  q: "Can I select a visual theme or style in GoVision AI?",
                  a: "Yes, GoVision AI provides a wide range of templates and visual styles, including professional, modern, creative, and minimalist designs, to fit your specific needs.",
                },
                {
                  q: "Is GoVision AI useful for businesses and organizations?",
                  a: "Yes, GoVision AI is ideal for businesses that need to automate documentation, visualize business processes, and enhance team collaboration through intuitive visuals.",
                },
                {
                  q: "How does GoVision AI ensure data security?",
                  a: "GoVision AI adheres to the highest security standards, encrypting all data and following strict privacy protocols to protect your sensitive information.",
                },
                {
                  q: "Can I use GoVision AI on my mobile device?",
                  a: "Yes, GoVision AI is mobile-responsive and can be accessed on any modern browser, ensuring you can work on the go, whether on a desktop or mobile device.",
                },
                {
                  q: "Do I need technical skills to use GoVision AI?",
                  a: "Not at all. GoVision AI is designed to be intuitive and accessible for users of all skill levels, from beginners to experts.",
                },
                {
                  q: "Does GoVision AI only create flowcharts?",
                  a: "No, GoVision AI can generate a variety of visual content, including mind maps, process diagrams, org charts, data summaries, and creative brainstorming boards.",
                },
                {
                  q: "How fast can GoVision AI generate content?",
                  a: "GoVision AI is fast, generating most diagrams and visuals in seconds, even when working with large or unstructured data sets.",
                },
                {
                  q: "Is GoVision AI a cloud-based platform?",
                  a: "Yes, GoVision AI is fully cloud-based, meaning no installation is required. You can access it directly from any browser.",
                },
                {
                  q: "What if I need help with GoVision AI?",
                  a: "GoVision AI provides comprehensive support, including a help center, live chat, and email assistance for any questions or technical issues.",
                },
                {
                  q: "Can GoVision AI be used for creative purposes?",
                  a: "Yes, GoVision AI is excellent for creative tasks, including marketing campaigns, idea mapping, storyboarding, and visual content planning.",
                },
                {
                  q: "Can GoVision AI simplify complex data visually?",
                  a: "Yes, GoVision AI excels at turning complex data into easily digestible, visual insights, helping you focus on analysis rather than raw numbers.",
                },
                {
                  q: "Is GoVision AI helpful for project management?",
                  a: "Absolutely! Project managers can design workflows, team structures, timelines, and more, all with clear visual representations that enhance project clarity.",
                },
                {
                  q: "How secure is my data on GoVision AI?",
                  a: "GoVision AI employs state-of-the-art encryption and security practices to ensure your data is fully protected and remains confidential.",
                },
                {
                  q: "Does GoVision AI support multiple languages?",
                  a: "Yes, GoVision AI is accessible in multiple languages, making it easy for global teams to collaborate.",
                },
                {
                  q: "What integrations does GoVision AI offer?",
                  a: "GoVision AI integrates with popular platforms such as Google Workspace, Microsoft Office, Slack, and more to streamline workflows and collaboration.",
                },
                {
                  q: "Is GoVision AI suitable for eCommerce?",
                  a: "Yes, GoVision AI can help eCommerce businesses map customer journeys, visualize product flows, and manage inventory with ease.",
                },
                {
                  q: "Does GoVision AI help with SEO strategies?",
                  a: "While it doesn’t generate SEO content, GoVision AI helps you visualize SEO strategies, keyword mappings, and website structures for better optimization.",
                },
                {
                  q: "Can I adjust the level of detail in my visuals?",
                  a: "Yes, GoVision AI allows you to control the visual detail, offering simple, medium, or detailed views to suit your audience's needs.",
                },
                {
                  q: "Can GoVision AI assist legal professionals?",
                  a: "Yes, GoVision AI can be used for visualizing legal processes, contract structures, and case workflows, but legal experts should verify accuracy.",
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
                    Why <strong>GoVision AI</strong> is Your Smart Companion for
                    Simplifying and Structuring Complex Content
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>GoVision AI</strong> empowers teams and individuals
                    to convert scattered data, dense content, or raw inputs into
                    clear, structured insights. Whether you’re preparing
                    reports, training materials, or quick summaries, here’s why
                    people rely on <strong>GoVision AI</strong>:
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
                      <strong>Efficient Content Structuring:</strong> Breaks
                      down complex information into easy-to-follow visuals or
                      summaries tailored for quick understanding.
                    </li>
                    <li className="mb-3">
                      <strong>Live Collaboration Tools:</strong> Built-in team
                      features allow seamless collaboration, letting multiple
                      users co-create, edit, and finalize content together.
                    </li>
                    <li className="mb-3">
                      <strong>Ready-Made Layout Options:</strong> Choose from a
                      wide array of templates and formats designed for business,
                      education, and creative industries.
                    </li>
                    <li className="mb-3">
                      <strong>Beginner-Friendly Design:</strong> No steep
                      learning curve—just an intuitive workspace that helps
                      users focus on ideas, not interfaces.
                    </li>
                    <li className="mb-3">
                      <strong>AI-Driven Output Generation:</strong>{" "}
                      Automatically generates structured summaries, diagrams, or
                      presentations from notes or raw content in seconds.
                    </li>
                    <li className="mb-3">
                      <strong>Connects to Your Workflow:</strong> Easily syncs
                      with tools like Google Docs, Notion, Slack, and Microsoft
                      Teams to keep work moving without disruption.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Try <strong>GoVision AI</strong> — Experience Clarity,
                      Speed, and Smarter Collaboration
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
              What Makes <strong>GoVision AI</strong> a Smart Choice for
              Intelligent Content Simplification
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>GoVision AI</strong> simplifies the way users break down,
              visualize, and communicate complex information. It supports
              clarity, enhances productivity, and transforms raw content into
              digestible, action-ready formats.
            </p>

            {/* GoVision AI Section */}
            <div className="row justify-content-center gap-2 mb-5">
              {/* Pros */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #28a745",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#2c353f",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-success text-start mb-4">
                  ✅ GoVision AI - Pros
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Instant Content Clarity:</strong> Breaks down
                    complicated topics into easy-to-understand formats, saving
                    users hours of manual effort.
                  </li>
                  <li className="mb-2">
                    <strong>Flexible Visual Outputs:</strong> Transforms input
                    into summaries, charts, or mind maps—ideal for different
                    audiences and platforms.
                  </li>
                  <li className="mb-2">
                    <strong>Collaboration-Ready:</strong> Lets teams co-edit,
                    comment, and structure content together in real time.
                  </li>
                  <li className="mb-2">
                    <strong>Intelligent Suggestions:</strong> Recommends layout
                    formats or simplification styles based on content type and
                    purpose.
                  </li>
                  <li className="mb-2">
                    <strong>Seamless Integrations:</strong> Easily connects with
                    cloud storage, note-taking tools, and project management
                    platforms.
                  </li>
                </ul>
              </div>

              {/* Cons */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #28a745",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#2c353f",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-warning text-start mb-4">
                  ⚠️ GoVision AI - Cons
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Limited Offline Functionality:</strong> Most core
                    features require internet connectivity for real-time
                    processing.
                  </li>
                  <li className="mb-2">
                    <strong>Learning Curve for Beginners:</strong> New users may
                    take some time to explore and customize the full feature
                    set.
                  </li>
                  <li className="mb-2">
                    <strong>Usage Caps on Free Plans:</strong> High-volume users
                    may hit limitations unless they upgrade to a premium tier.
                  </li>
                  <li className="mb-2">
                    <strong>Performance on Large Files:</strong> Processing
                    extremely lengthy documents can take time or cause lag on
                    older devices.
                  </li>
                  <li className="mb-2">
                    <strong>Customization Overload:</strong> With many layout
                    and export options, decision-making can slow down
                    less-experienced users.
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
              Discover Smart Alternatives to GoVision AI for Enhanced Clarity
              and Content Structuring
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>GoVision AI</strong> excels at turning complex ideas
              into crisp, actionable insights, other intelligent tools also
              bring unique strengths to content visualization, simplification,
              and delivery.
            </p>
            <div className="row justify-content-center gap-2">
              <div
                className="col-lg-8 col-md-8 col-sm-12"
                style={{
                  border: "1px solid #0062cc",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#2c353f",
                  minHeight: "100%",
                }}
              >
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>ClarityNest</strong>: Organizes layered thoughts
                    into clean frameworks, perfect for corporate decks, briefs,
                    or knowledge sharing.
                  </li>
                  <li className="mb-2">
                    <strong>FlowRender</strong>: Turns processes and ideas into
                    easy-to-follow flowcharts for improved understanding across
                    teams.
                  </li>
                  <li className="mb-2">
                    <strong>SimplifyIQ</strong>: Breaks down verbose or dense
                    writing into bite-sized, engaging content for trainers and
                    digital creators.
                  </li>
                  <li className="mb-2">
                    <strong>ThinkSketch</strong>: Enables quick mind mapping of
                    abstract ideas into actionable mental models and strategies.
                  </li>
                  <li className="mb-2">
                    <strong>PathStruct</strong>: Drag-and-drop interface for
                    building logic flows and organizing content visually without
                    coding.
                  </li>
                  <li className="mb-2">
                    <strong>BriefWise</strong>: Tailors long-form narratives
                    into concise takeaways while preserving tone, context, and
                    impact.
                  </li>
                  <li className="mb-2">
                    <strong>VisualInk</strong>: Converts detailed documents into
                    diagrams and illustrations to support design thinking and
                    teamwork.
                  </li>
                  <li className="mb-2">
                    <strong>SnapDigest</strong>: Ideal for newsletters and
                    executive summaries—delivers quick-read versions of long
                    documents.
                  </li>
                  <li className="mb-2">
                    <strong>CoreExtract</strong>: Designed for research
                    professionals to extract only essential findings from
                    technical or scientific reports.
                  </li>
                  <li className="mb-2">
                    <strong>IdeaLayout</strong>: Translates raw thoughts into
                    structured wireframes, helpful for dev teams and product
                    strategy.
                  </li>
                  <li className="mb-2">
                    <strong>ClauseClear</strong>: Simplifies contracts, legal
                    texts, and dense manuals without compromising accuracy or
                    intent.
                  </li>
                  <li className="mb-2">
                    <strong>InsightRadar</strong>: Surfaces critical data points
                    and insights from complex sources to support faster
                    decision-making.
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
              <h1>GoVision AI:</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Focal Systems AI is a retail automation platform that uses
                computer vision and AI-powered shelf cameras to monitor
                inventory, track stock levels, and optimize in-store operations.
                It replaces manual shelf audits with real-time insights,
                ensuring product availability and planogram compliance.
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

          <section style={{ backgroundColor: "#283e55", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">
                Simplify Deep Thinking—Unlock Clarity with GoVision AI
              </p>
              <h2
                className="text-white"
                style={{ fontWeight: "600", marginBottom: "1rem" }}
              >
                Discover How GoVision AI Translates Complex Inputs into Clear,
                Focused Outcomes
              </h2>
              <p
                style={{
                  color: "#ccc",
                  marginBottom: "2rem",
                  fontStyle: "italic",
                }}
              >
                GoVision AI transforms dense, layered information into concise,
                well-structured content—delivering originality, simplicity, and
                purpose.
              </p>

              <div className="row g-4">
                {/* Step 1 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#2f9fd4",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
          .govision-step1 {
            position: absolute;
            bottom: 10px;
            right: 15px;
            font-size: 4rem;
            font-weight: bold;
            color: #c9e7f7;
            opacity: 0.7;
          }
        `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Smart Concept Segmentation
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      GoVision AI breaks down ideas into structured parts,
                      enabling focused interpretation and clearer understanding
                      at every stage.
                    </p>
                    <div className="govision-step1">1</div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#2f9fd4",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
          .govision-step2 {
            position: absolute;
            bottom: 10px;
            right: 15px;
            font-size: 4rem;
            font-weight: bold;
            color: #c9e7f7;
            opacity: 0.7;
          }
        `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Seamless Tone Alignment
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Whether professional, friendly, or imaginative, GoVision
                      AI aligns your tone to your target audience without losing
                      your intent.
                    </p>
                    <div className="govision-step2">2</div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#2f9fd4",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
          .govision-step3 {
            position: absolute;
            bottom: 10px;
            right: 15px;
            font-size: 4rem;
            font-weight: bold;
            color: #c9e7f7;
            opacity: 0.7;
          }
        `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Authentic and Original Output
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Every deliverable from GoVision AI is uniquely crafted and
                      completely plagiarism-free, while preserving your core
                      ideas.
                    </p>
                    <div className="govision-step3">3</div>
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
            <h4 className="mb-3">Ready to get started with GOVision AI?</h4>
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

export default Govison;
