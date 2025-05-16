import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import trigo from "../../../../public/assets/Img/Ai  for Retail/5.png";
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
const Trigo = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="Trigo AI Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Discover Smarter, Faster, and More Scalable Solutions with
                  Trigo AI
                </p>
                <h3>
                  Redefining How Businesses Use AI for Growth and Innovation
                </h3>
              </div>
              {[
                {
                  icon: "⚡",
                  title: "Instant Intelligence",
                  desc: "Trigo AI transforms raw data into instant, meaningful insights—empowering your team to make informed decisions without delay.",
                },
                {
                  icon: "🔗",
                  title: "Effortless Integration",
                  desc: "Trigo AI fits right into your existing tools and workflows, offering smooth connectivity and minimal setup across platforms.",
                },
                {
                  icon: "📊",
                  title: "Insightful Visual Reports",
                  desc: "Generate impactful dashboards and visuals that clearly communicate trends, performance, and outcomes—customized for your needs.",
                },
                {
                  icon: "🛡️",
                  title: "Enterprise-Grade Security",
                  desc: "Your data is always protected with Trigo AI’s end-to-end encryption, compliance-grade architecture, and secure access controls.",
                },
                {
                  icon: "🌐",
                  title: "Built for Global Teams",
                  desc: "From local startups to global enterprises, Trigo AI adapts to any scale and location—supporting multilingual users and international teams.",
                },
                {
                  icon: "🧠",
                  title: "Adaptive AI Engine",
                  desc: "Trigo AI evolves with your business—learning from every interaction to deliver sharper results and smarter automation over time.",
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
                  q: "What is Trigo AI?",
                  a: "Trigo AI is a next-gen AI-driven platform designed to streamline business operations, deliver deep analytical insights, and automate complex workflows across industries.",
                },
                {
                  q: "How does Trigo AI function?",
                  a: "Trigo AI uses advanced machine learning algorithms to evaluate large datasets, automate routine tasks, and offer real-time guidance to support smarter business strategies.",
                },
                {
                  q: "Is my data safe with Trigo AI?",
                  a: "Yes, Trigo AI is built with enterprise-grade security, using strong encryption and privacy-focused protocols to ensure your data remains protected and confidential.",
                },
                {
                  q: "Can I personalize the outputs from Trigo AI?",
                  a: "Absolutely. Trigo AI offers flexible customization options, letting you tailor visual styles, themes, and data formats to align with your unique branding or use case.",
                },
                {
                  q: "Does Trigo AI handle big data efficiently?",
                  a: "Yes, Trigo AI is built to handle and process large datasets smoothly, delivering insights and analytics without compromising on speed or performance.",
                },
                {
                  q: "What formats can I export data in from Trigo AI?",
                  a: "Trigo AI supports multiple export formats such as PDF, CSV, PNG, and Excel, ensuring compatibility with your existing systems and sharing needs.",
                },
                {
                  q: "Is Trigo AI available for free?",
                  a: "Trigo AI offers a free basic version with core features, along with paid plans that unlock premium tools, integrations, and advanced analytics capabilities.",
                },
                {
                  q: "Can I share or download results created by Trigo AI?",
                  a: "Yes, Trigo AI allows seamless sharing and downloading of your outputs, whether via cloud links or direct file exports, making collaboration simple.",
                },
                {
                  q: "Is Trigo AI suitable for education?",
                  a: "Yes, Trigo AI is a powerful educational tool that simplifies data exploration and presentation, making it ideal for teaching, learning, and academic research.",
                },
                {
                  q: "Does Trigo AI create original content?",
                  a: "Yes, Trigo AI generates content and visuals based on your input, ensuring each result is unique and aligned with your objectives.",
                },
                {
                  q: "Is Trigo AI beginner-friendly?",
                  a: "Yes, Trigo AI features a clean, intuitive interface that allows both beginners and professionals to easily access and benefit from its capabilities.",
                },
                {
                  q: "Can I select a design theme in Trigo AI?",
                  a: "Yes, Trigo AI includes a library of templates and themes to help you choose the right visual style for your project or business.",
                },
                {
                  q: "How can Trigo AI help my business?",
                  a: "Trigo AI boosts operational efficiency, uncovers actionable insights, and reduces manual workload by automating complex processes intelligently.",
                },
                {
                  q: "How is user privacy maintained in Trigo AI?",
                  a: "Trigo AI strictly follows global data protection regulations and ensures user privacy through encrypted communication and secure data storage.",
                },
                {
                  q: "Is Trigo AI mobile compatible?",
                  a: "Yes, Trigo AI is fully responsive and works smoothly on smartphones, tablets, and desktops, allowing access anytime, anywhere.",
                },
                {
                  q: "Do I need technical knowledge to use Trigo AI?",
                  a: "Not at all. Trigo AI is designed for users of all backgrounds, making complex AI functionalities accessible without technical expertise.",
                },
                {
                  q: "Can Trigo AI generate more than just flowcharts?",
                  a: "Yes, Trigo AI supports a variety of data visualizations, including graphs, dashboards, timelines, and performance metrics.",
                },
                {
                  q: "How fast is Trigo AI at generating results?",
                  a: "Trigo AI delivers data visualizations and reports in real time, even with heavy datasets, helping you act on insights instantly.",
                },
                {
                  q: "Is Trigo AI cloud-based?",
                  a: "Yes, Trigo AI operates entirely in the cloud, ensuring scalability, easy access, and automatic updates with zero installations required.",
                },
                {
                  q: "What kind of support is available for Trigo AI?",
                  a: "Trigo AI offers support through a help desk, live chat, and email. Users also have access to tutorials, guides, and community forums.",
                },
                {
                  q: "Can I use Trigo AI for creative projects?",
                  a: "Yes, Trigo AI is excellent for content creation, storytelling, and design projects, offering tools to enhance visual creativity and impact.",
                },
                {
                  q: "Can Trigo AI simplify complex analytics?",
                  a: "Yes, Trigo AI turns intricate data into easy-to-understand visuals, making complex information accessible to all stakeholders.",
                },
                {
                  q: "Is Trigo AI suitable for project management?",
                  a: "Definitely. Trigo AI can visualize project timelines, track progress, assign tasks, and manage resources efficiently.",
                },
                {
                  q: "How secure is my information on Trigo AI?",
                  a: "Trigo AI uses state-of-the-art security measures like encrypted servers and secure user authentication to protect your data.",
                },
                {
                  q: "Does Trigo AI support different languages?",
                  a: "Yes, Trigo AI offers multilingual support, making it a valuable asset for international teams and global users.",
                },
                {
                  q: "Which tools does Trigo AI integrate with?",
                  a: "Trigo AI connects seamlessly with platforms like Google Workspace, Microsoft Office, Slack, and many others to enhance productivity.",
                },
                {
                  q: "Is Trigo AI helpful for eCommerce platforms?",
                  a: "Yes, Trigo AI can analyze customer data, track inventory performance, and optimize sales strategies for eCommerce growth.",
                },
                {
                  q: "Does Trigo AI assist with SEO insights?",
                  a: "Trigo AI can help visualize and track SEO performance metrics, keyword trends, and content impact to support strategic planning.",
                },
                {
                  q: "Can I adjust the level of detail in reports?",
                  a: "Yes, Trigo AI allows you to control the depth of information in your visuals—from high-level summaries to deep data dives.",
                },
                {
                  q: "Is Trigo AI suitable for legal firms?",
                  a: "Yes, legal teams can use Trigo AI to organize case data, monitor timelines, and enhance decision-making through clear visualization.",
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
                  <h3 className="fw-bold mb-4 text-start text-info">
                    Why <strong>Trigo AI</strong> is the Smartest Move for
                    Future-Ready Automation and Insight-Driven Growth
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>Trigo AI</strong> redefines the way teams handle
                    data, automate tasks, and unlock insights—bringing together
                    intelligence, simplicity, and adaptability under one roof.
                    Here’s what makes <strong>Trigo AI</strong> a standout
                    solution for modern digital operations:
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
                      <strong>Real-Time Workflow Intelligence:</strong> Trigo AI
                      uncovers patterns and insights as they happen, helping
                      businesses stay proactive—not reactive.
                    </li>
                    <li className="mb-3">
                      <strong>Automation That Thinks Ahead:</strong> Handles
                      repetitive and complex tasks with contextual
                      understanding, freeing up teams for innovation and
                      strategy.
                    </li>
                    <li className="mb-3">
                      <strong>Flexible AI Modules:</strong> Trigo adapts to your
                      existing workflows, offering plug-and-play modules that
                      align with industry-specific goals and data types.
                    </li>
                    <li className="mb-3">
                      <strong>Effortless User Experience:</strong> Built with
                      simplicity in mind, Trigo empowers both technical and
                      non-technical users with clear dashboards and intuitive
                      controls.
                    </li>
                    <li className="mb-3">
                      <strong>Seamless Team Collaboration:</strong> Enables
                      synchronized access to insights, projects, and
                      decisions—keeping every stakeholder informed and aligned.
                    </li>
                    <li className="mb-3">
                      <strong>Native Tool Integrations:</strong> Easily connects
                      with popular platforms like Notion, Slack, Google
                      Workspace, and more, enhancing your digital ecosystem
                      without disruption.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-info btn-sm">
                      Start with <strong>Trigo AI</strong> — Transform Data Into
                      Decisions, Fast
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
              Why Choose <strong>Trigo AI</strong> to Power Smarter, Leaner
              Operations
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>Trigo AI</strong> is designed to intelligently adapt to
              your business needs—automating routine tasks, enhancing
              decision-making, and turning raw data into clear strategies. Built
              with flexibility, speed, and precision in mind, it helps you work
              smarter and scale faster in an increasingly digital landscape.
            </p>

            {/* Trigo AI Section */}
            <div className="row justify-content-center gap-2 mb-5">
              {/* Pros */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #16a085",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e3d59",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-success text-start mb-4">
                  ✅ Trigo AI - Pros
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Adaptive Automation Engine:</strong> Dynamically
                    adjusts processes based on real-time data and evolving
                    workflows, reducing manual effort and boosting efficiency.
                  </li>
                  <li className="mb-2">
                    <strong>Actionable Intelligence at Scale:</strong> Converts
                    complex datasets into clear, contextual insights for faster,
                    data-backed decisions across departments.
                  </li>
                  <li className="mb-2">
                    <strong>Modular & Scalable Architecture:</strong> Easily
                    integrates into existing systems and grows with your
                    team—perfect for both startups and enterprises.
                  </li>
                  <li className="mb-2">
                    <strong>User-Centric Design:</strong> Designed for usability
                    with clean dashboards, guided workflows, and low learning
                    curves across skill levels.
                  </li>
                  <li className="mb-2">
                    <strong>Industry-Tailored Intelligence:</strong> From
                    finance to logistics, Trigo AI provides domain-specific
                    tools that align with unique operational needs.
                  </li>
                </ul>
              </div>

              {/* Cons */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #e74c3c",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e3d59",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-danger text-start mb-4">
                  ⚠️ Trigo AI - Cons
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Initial Setup Requires Alignment:</strong>{" "}
                    Implementation may need cross-team coordination to align
                    data flows and define automation goals.
                  </li>
                  <li className="mb-2">
                    <strong>Advanced Features Demand Familiarity:</strong> While
                    intuitive at the core, some predictive and AI-modeling
                    features may require onboarding or technical knowledge.
                  </li>
                  <li className="mb-2">
                    <strong>Pricing Tiers Based on Usage:</strong> Volume-based
                    pricing may become costly for high-frequency automation use
                    cases if not optimized properly.
                  </li>
                  <li className="mb-2">
                    <strong>Limited Offline Functionality:</strong> Trigo AI
                    depends heavily on cloud connectivity, which may be
                    restrictive in disconnected or low-bandwidth environments.
                  </li>
                  <li className="mb-2">
                    <strong>Feature Expansion in Progress:</strong> Some niche
                    features for specialized industries are still under
                    development or available through beta access only.
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
              Discover Competitors and Specialized Tools Complementary to Trigo
              AI
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>Trigo AI</strong> delivers intelligent automation
              and deep analytics, other platforms offer specialized capabilities
              for distinct business use cases, from visualization to streamlined
              document summarization.
            </p>
            <div className="row justify-content-center gap-2">
              <div
                className="col-lg-8 col-md-8 col-sm-12"
                style={{
                  border: "1px solid #27ae60",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1c2833",
                  minHeight: "100%",
                }}
              >
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>InsightGrid</strong>: Focused on visual trend
                    mapping and data storytelling, this tool helps teams
                    visualize key insights with clarity.
                  </li>
                  <li className="mb-2">
                    <strong>LogicLoop</strong>: Designed to automate rule-based
                    workflows, LogicLoop excels in industries that require
                    regular data checks and alerts.
                  </li>
                  <li className="mb-2">
                    <strong>IntelCraft</strong>: Combines machine learning with
                    process visualization, enabling advanced forecasting and
                    performance analysis.
                  </li>
                  <li className="mb-2">
                    <strong>GeoPulse</strong>: Integrates geospatial analytics
                    into business decisions, ideal for logistics, delivery, and
                    infrastructure planning.
                  </li>
                  <li className="mb-2">
                    <strong>OptiChain</strong>: Specializes in optimizing
                    multi-step operations, especially in manufacturing and
                    supply chain management.
                  </li>
                  <li className="mb-2">
                    <strong>Condenso</strong>: Summarizes lengthy technical
                    documents and reports into digestible highlights for
                    executive consumption.
                  </li>
                  <li className="mb-2">
                    <strong>SimplicityIQ</strong>: Transforms technical data
                    into clear narratives, supporting internal training and team
                    communication.
                  </li>
                  <li className="mb-2">
                    <strong>BoardView</strong>: A strategic planning dashboard
                    for executives, focusing on KPIs, goals, and
                    decision-critical alerts.
                  </li>
                  <li className="mb-2">
                    <strong>DataSculptor</strong>: Digs through massive datasets
                    to detect trends, spikes, and hidden correlations in user
                    behavior.
                  </li>
                  <li className="mb-2">
                    <strong>MockForge</strong>: Rapidly builds interactive UI
                    prototypes for digital product teams, accelerating design
                    feedback loops.
                  </li>
                  <li className="mb-2">
                    <strong>ClearDocs</strong>: Rephrases complex documentation
                    into plain language, enhancing accessibility for
                    non-technical stakeholders.
                  </li>
                  <li className="mb-2">
                    <strong>PulseTrend</strong>: Tracks social, market, or
                    business trends through real-time data monitoring and
                    sentiment analysis.
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
              <h1>Trigo AI:</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Trigo AI is an artificial intelligence-based platform that
                powers autonomous checkout solutions for physical retailers.
                Using advanced computer vision, deep learning, and edge
                computing, Trigo transforms traditional supermarkets and grocery
                stores into frictionless, cashierless smart stores, allowing
                customers to shop and leave without scanning or waiting in line.
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
              <img src={trigo} style={{ MaxWidth: "100%", height: "300px" }} />
            </div>
          </div>

          <section style={{ backgroundColor: "#1a1a2e", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">
                Accelerate Intelligence-Driven Innovation with Trigo AI
              </p>
              <h2
                className="text-white"
                style={{ fontWeight: "600", marginBottom: "1rem" }}
              >
                Empower Your Business with Adaptive Automation and Instant
                Insight Generation
              </h2>
              <p
                style={{
                  color: "#ccc",
                  marginBottom: "2rem",
                  fontStyle: "italic",
                }}
              >
                Trigo AI seamlessly bridges data, logic, and automation to
                reimagine how your organization operates—delivering clarity,
                precision, and adaptive efficiency at scale.
              </p>

              <div className="row g-4">
                {/* Step 1 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#0f3460",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
            .trigo-step1 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #dff9fb;
              opacity: 0.7;
            }
          `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Intelligent Data Discovery
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Trigo AI uncovers trends, patterns, and hidden insights
                      from your datasets—empowering faster and smarter business
                      outcomes.
                    </p>
                    <div className="trigo-step1">1</div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#0f3460",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
            .trigo-step2 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #dff9fb;
              opacity: 0.7;
            }
          `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Adaptive Process Optimization
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      From manual workflows to intelligent automation, Trigo AI
                      adapts in real-time to optimize performance and reduce
                      operational friction.
                    </p>
                    <div className="trigo-step2">2</div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#0f3460",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
            .trigo-step3 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #dff9fb;
              opacity: 0.7;
            }
          `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Scalable Accuracy at Every Level
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Whether you're scaling departments or datasets, Trigo AI
                      delivers reliable outcomes with consistent accuracy and
                      minimal oversight.
                    </p>
                    <div className="trigo-step3">3</div>
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
            <h4 className="mb-3">Ready to get started with Trigo AI?</h4>
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

export default Trigo;
