import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import reZiAI from "../../../../public/assets/Img/Ai for Resume/40.png";

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
const ReZiAI = () => {
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
                Unlock Seamless Visual Testing with Razi AI
              </p>
              <h3 className="">AI-Backed Visual Assurance for Modern Apps</h3>
            </div>
            {[
              {
                icon: "🧠",
                title: "AI-Based Visual Checks",
                desc: "Razi AI leverages advanced visual recognition to automatically identify UI mismatches, helping you catch visual bugs faster and reduce manual reviews.",
              },
              {
                icon: "📱",
                title: "Multi-Device & Browser Compatibility",
                desc: "Run your tests across real devices—Android, iOS, and popular desktop browsers—to ensure consistent appearance and behavior everywhere.",
              },
              {
                icon: "⚡",
                title: "Optimized Test Execution",
                desc: "Razi AI smartly prioritizes visual checks based on recent changes, cutting down test time while maintaining high detection accuracy.",
              },
              {
                icon: "🔍",
                title: "Intelligent UI Defect Detection",
                desc: "Analyze UI changes with context-aware insights, spot inconsistencies, and enhance your visual coverage using historical testing patterns.",
              },
              {
                icon: "🌐",
                title: "Network-Aware UI Validation",
                desc: "Emulate various network environments like 3G, 4G, or limited Wi-Fi to evaluate how your UI performs in real-world conditions.",
              },
              {
                icon: "🔧",
                title: "CI/CD Friendly Integration",
                desc: "Plug into your delivery pipeline using tools like Jenkins, GitHub Actions, or Azure DevOps to enable continuous visual validations on every build.",
              },
            ].map((feature, index) => (
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

      case "FAQs":
        return (
          <div className="faq-section container py-4">
            <h3 className="text-center text-white mb-4 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is Razi AI?",
                  a: "Razi AI is an intelligent visual testing solution that automates the validation of user interfaces across web and mobile platforms. It helps teams identify UI issues early, ensuring a high-quality user experience with less manual effort.",
                },
                {
                  q: "How does Razi AI enhance automation in testing?",
                  a: "Razi AI leverages smart visual comparisons to detect meaningful UI changes, enabling faster test cycles and minimizing the need for manual review in automated testing pipelines.",
                },
                {
                  q: "What testing types are supported by Razi AI?",
                  a: "Razi AI supports a wide range of tests, including visual checks, responsive layout validation, mobile compatibility testing, accessibility assessments, and regression testing.",
                },
                {
                  q: "Can Razi AI test on real mobile devices?",
                  a: "Yes, Razi AI supports both real-device testing and emulators for iOS and Android to ensure accurate validation on various form factors and operating systems.",
                },
                {
                  q: "Is cross-browser testing available in Razi AI?",
                  a: "Absolutely. Razi AI enables UI validation across major browsers such as Chrome, Firefox, Safari, and Edge to ensure consistent appearance and behavior.",
                },
                {
                  q: "Does Razi AI support API testing?",
                  a: "Razi AI is focused on UI validation, but it can integrate with API testing tools for a complete end-to-end testing solution.",
                },
                {
                  q: "Is parallel test execution possible with Razi AI?",
                  a: "Yes, Razi AI can run tests in parallel across different environments and devices, which significantly speeds up test completion time.",
                },
                {
                  q: "Is Razi AI cloud-based?",
                  a: "Razi AI operates in the cloud, making it easy to scale, collaborate, and manage tests without the burden of maintaining infrastructure.",
                },
                {
                  q: "Does Razi AI offer real-time visual feedback?",
                  a: "Yes, developers and testers receive instant visual reports with screenshots and annotations, allowing for faster debugging and resolution.",
                },
                {
                  q: "How does Razi AI identify visual discrepancies?",
                  a: "Razi AI uses context-aware analysis to compare screen states and detect layout shifts, missing elements, and design deviations that could affect the user experience.",
                },
                {
                  q: "Is Razi AI compatible with Agile and DevOps workflows?",
                  a: "Yes, Razi AI integrates with CI/CD tools to support continuous testing, helping Agile and DevOps teams release updates with confidence.",
                },
                {
                  q: "Which languages and frameworks does Razi AI work with?",
                  a: "Razi AI supports popular testing frameworks such as Selenium, Cypress, Playwright, and Appium, with compatibility for JavaScript, Java, Python, and more.",
                },
                {
                  q: "What is intelligent visual testing in Razi AI?",
                  a: "Intelligent visual testing means Razi AI prioritizes visual validations based on UI changes, reducing redundant checks and optimizing test suite performance.",
                },
                {
                  q: "Can Razi AI simulate slow network conditions?",
                  a: "Razi AI focuses on UI analysis, but it can be used alongside performance testing tools to simulate network conditions and evaluate app responsiveness.",
                },
                {
                  q: "Does Razi AI support accessibility testing?",
                  a: "Yes, Razi AI helps uncover visual elements that may hinder accessibility, ensuring applications are inclusive and meet industry standards like WCAG.",
                },
                {
                  q: "Can Razi AI be used for manual inspection?",
                  a: "While designed for automation, Razi AI allows manual inspection of visual differences to handle edge cases or non-standard UI behavior.",
                },
                {
                  q: "Are screenshots or video captures included in reports?",
                  a: "Yes, Razi AI provides detailed visual logs with screenshots and highlights of changes, making it easy to trace issues and share insights.",
                },
                {
                  q: "How is test maintenance handled in Razi AI?",
                  a: "Razi AI employs adaptive comparison techniques that reduce noise from minor changes, minimizing test flakiness and simplifying maintenance.",
                },
                {
                  q: "Is Razi AI secure for enterprise use?",
                  a: "Yes, Razi AI follows strict security protocols, including data encryption and compliance with standards like ISO and GDPR.",
                },
                {
                  q: "What integrations are available for Razi AI?",
                  a: "Razi AI works with tools like Jenkins, GitHub Actions, CircleCI, Slack, and Jira to fit into existing development and testing workflows.",
                },
                {
                  q: "Does Razi AI offer insights through analytics?",
                  a: "Yes, Razi AI provides dashboards and reports to help teams monitor test trends, success rates, and problem areas over time.",
                },
                {
                  q: "What kind of support is available for Razi AI?",
                  a: "Razi AI provides customer support through live chat, email, documentation, and onboarding sessions to help users get up to speed quickly.",
                },
                {
                  q: "Is there a free trial for Razi AI?",
                  a: "Yes, you can explore Razi AI through a free trial to see how it fits your testing needs before making a commitment.",
                },
                {
                  q: "Is Razi AI easy to adopt?",
                  a: "Razi AI is beginner-friendly, with straightforward integration guides and documentation to help teams get started with minimal setup.",
                },
                {
                  q: "What makes Razi AI different from other platforms?",
                  a: "Razi AI stands out with its smart visual engine, seamless automation, quick feedback loop, and ease of integration—helping teams ship better products, faster.",
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
                    Why Razi AI Recommends Visual Testing Tools Like Applitools
                  </h3>

                  <p className="text-start text-muted mb-3">
                    Razi AI analyzes your workflow and suggests the best-fit
                    visual testing solution based on your team's needs,
                    environment, and scalability goals. Here’s why a tool like{" "}
                    <strong>Applitools</strong> might be recommended:
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
                      <strong>Boosts Testing Speed:</strong> Automates visual
                      checks, cutting down on manual review time and letting
                      developers focus on code—not on spotting UI mismatches.
                    </li>
                    <li className="mb-3">
                      <strong>Smarter Detection:</strong> AI-driven analysis
                      looks beyond pixel changes to understand layout shifts,
                      design bugs, and meaningful visual differences.
                    </li>
                    <li className="mb-3">
                      <strong>Consistent Across Screens:</strong> Ensures your
                      app looks right on all screen sizes, from mobile phones to
                      large monitors.
                    </li>
                    <li className="mb-3">
                      <strong>Full UI Automation:</strong> Eliminates repetitive
                      manual work by testing multiple UI states and platforms
                      simultaneously.
                    </li>
                    <li className="mb-3">
                      <strong>Maintains Design Integrity:</strong> Verifies that
                      visual elements stay aligned with your brand and user
                      expectations, across updates.
                    </li>
                    <li className="mb-3">
                      <strong>Works with Your Stack:</strong> Integrates easily
                      with most test frameworks and CI/CD tools, keeping your
                      development flow uninterrupted.
                    </li>
                    <li className="mb-3">
                      <strong>Instant Feedback:</strong> Quickly flags
                      unexpected changes, so you can fix issues early and ship
                      confidently.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Let Razi AI Pick the Right Tool for You
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
              Why Razi AI Suggests Applitools
            </h4>
            <p className="text-center text-secondary mb-4">
              Based on your preferences, Razi AI recommends{" "}
              <strong>Applitools</strong>. Here’s a quick look at its strengths
              and trade-offs.
            </p>
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
                    <strong>Advanced AI-Powered Visual Testing:</strong> Detects
                    subtle UI changes missed by manual or traditional automated
                    tests.
                  </li>
                  <li className="mb-2">
                    <strong>Automated Regression Coverage:</strong> Speeds up
                    testing cycles by handling repetitive UI checks at scale.
                  </li>
                  <li className="mb-2">
                    <strong>Cross-Browser & Device Assurance:</strong> Ensures
                    visual consistency across different platforms.
                  </li>
                  <li className="mb-2">
                    <strong>Cloud-First & Scalable:</strong> Enables real-time
                    collaboration and scalable test runs.
                  </li>
                  <li className="mb-2">
                    <strong>Boosts Dev Velocity:</strong> Reduces manual testing
                    burden, helping teams release faster.
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
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Visual-Only Focus:</strong> Doesn’t replace
                    functional testing—best used alongside tools like Selenium
                    or Cypress.
                  </li>
                  <li className="mb-2">
                    <strong>Requires Onboarding:</strong> Some learning curve
                    for teams new to visual validation or AI-driven platforms.
                  </li>
                  <li className="mb-2">
                    <strong>Setup Time:</strong> Integrating with pipelines and
                    team workflows may require upfront effort.
                  </li>
                  <li className="mb-2">
                    <strong>Premium Pricing:</strong> Paid model may deter
                    smaller startups preferring open-source alternatives.
                  </li>
                  <li className="mb-2">
                    <strong>UI-Specific:</strong> Not applicable for
                    performance, API, or backend testing without companion
                    tools.
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
              Tailored Alternatives for You
            </h4>
            <p className="text-center text-secondary mb-4">
              Razi AI recommends the best testing tools based on your unique
              needs and workflow.
            </p>
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
                    <strong>Functionize AI</strong>: Ideal for teams needing
                    end-to-end AI-driven test automation with deep learning
                    insights for web, mobile, and APIs.
                  </li>
                  <li className="mb-2">
                    <strong>Testim</strong>: Great for agile teams looking for
                    self-healing tests and fast authoring using a visual
                    interface.
                  </li>
                  <li className="mb-2">
                    <strong>mabl</strong>: Best suited for CI/CD pipelines with
                    built-in AI features to ensure quality at speed.
                  </li>
                  <li className="mb-2">
                    <strong>Applitools</strong>: Recommended for teams
                    prioritizing visual validation and UI consistency across
                    browsers/devices.
                  </li>
                  <li className="mb-2">
                    <strong>ACCELQ</strong>: A solid choice for enterprises
                    seeking no-code automation and predictive maintenance.
                  </li>
                  <li className="mb-2">
                    <strong>Tricentis Tosca AI</strong>: Designed for
                    large-scale enterprise systems requiring model-based and
                    AI-optimized testing.
                  </li>
                  <li className="mb-2">
                    <strong>Rainforest QA</strong>: Suitable for fast-moving
                    teams wanting scalable, cloud-based functional testing with
                    low maintenance.
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
              <h1>Rezi AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Rezi AI is an AI-powered platform that helps job seekers and
                professionals create optimized resumes through advanced machine
                learning and computer vision technologies. It uses deep learning
                models to analyze and enhance resumes, ensuring they pass
                through Applicant Tracking Systems (ATS) effectively.
              </p>

              <p>
                Rezi AI is a cutting-edge tool designed to help job seekers
                create high-quality, ATS-friendly resumes. The platform uses AI
                algorithms to evaluate resumes, suggest improvements, and
                generate optimized resumes tailored to specific jobs and
                industries. Rezi AI is perfect for freelancers, job seekers, and
                career coaches looking to enhance their resume-building process.
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
              <img src={reZiAI} style={{ MaxWidth: "100%", height: "300px" }} />
            </div>
          </div>
          <section style={{ backgroundColor: "#0b1e3d", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">Create Content in 3 Simple Steps</p>
              <h2
                style={{
                  fontWeight: "600",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                How Razi AI Works for You
              </h2>

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
            .step1 {
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
                      Understands Your Intent:
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Razi AI intelligently analyzes your goals and context to
                      generate personalized content, ensuring it's aligned with
                      your message and audience.
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
                    <style>{`
            .step2 {
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
                      Adapts Content Dynamically:
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Whether it's tone, format, or platform—Razi AI adapts the
                      content style in real-time to best suit your audience and
                      publishing goals.
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
                    <style>{`
            .step3 {
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
                      Delivers Tailored Results:
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Get high-quality, ready-to-use content tailored exactly to
                      your specifications—saving you time while maximizing
                      engagement.
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

          <div className="bg-primary text-center text-light rounded-4 p-5 mt-5">
            <h4 className="mb-3">Ready to get started with RunWayGen?</h4>
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

export default ReZiAI;
