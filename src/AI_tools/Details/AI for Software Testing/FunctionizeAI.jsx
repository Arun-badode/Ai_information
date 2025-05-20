import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import functionize from '../../../../public/assets/Img/AI for software testing/functionize.png'
import functionize1 from '../../../../public/assets/Img/AI for software testing/functionize1.png'
import functionize2 from '../../../../public/assets/Img/AI for software testing/functionize2.png'

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
const FunctionizeAI = () => {
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
                Empower Your QA with Functionize AI
              </p>
              <h3 className="">
                AI-Driven, Scalable, and Low-Maintenance Test Automation
              </h3>
            </div>
            {[
              {
                icon: "🧠",
                title: "Self-Healing Tests",
                desc: "Functionize automatically updates tests when UI elements change using machine learning, drastically reducing test maintenance and minimizing disruptions.",
              },
              {
                icon: "📱",
                title: "Cross-Platform Real Device Testing",
                desc: "Run tests across thousands of real devices and browsers to validate performance and functionality on Android, iOS, and all major desktop platforms.",
              },
              {
                icon: "⚡",
                title: "Smart Parallel Execution",
                desc: "Functionize enables intelligent parallel test execution across environments, cutting down test cycles and delivering faster feedback to your dev teams.",
              },
              {
                icon: "🔍",
                title: "AI-Powered Test Insights",
                desc: "Leverage AI to detect flaky tests, analyze failure trends, and optimize test coverage with actionable insights drawn from historical and behavioral data.",
              },
              {
                icon: "🌐",
                title: "Network Simulation & Performance Testing",
                desc: "Simulate diverse network conditions and measure app performance under real-world constraints to ensure reliability across all user environments.",
              },
              {
                icon: "🔧",
                title: "CI/CD & DevOps Ready",
                desc: "Seamlessly integrate with tools like Jenkins, GitHub Actions, Azure DevOps, and more for continuous testing, full traceability, and faster releases.",
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
                  q: "What is Functionize AI?",
                  a: "Functionize AI is an AI-powered test automation platform designed to test web, mobile, and API applications. It leverages machine learning to accelerate testing, reduce maintenance, and improve quality across platforms.",
                },
                {
                  q: "How does Functionize AI improve test automation?",
                  a: "Functionize AI uses machine learning and natural language processing to automatically create, execute, and maintain tests, reducing flakiness and manual effort while improving speed and accuracy.",
                },
                {
                  q: "What types of testing are supported by Functionize AI?",
                  a: "Functionize supports functional, regression, visual UI, performance, API, mobile, accessibility, and cross-browser testing for comprehensive QA coverage.",
                },
                {
                  q: "Can I run tests on real devices with Functionize AI?",
                  a: "Yes, Functionize provides access to both real mobile devices and emulators for accurate testing of Android and iOS applications.",
                },
                {
                  q: "Can Functionize AI test both Android and iOS apps?",
                  a: "Yes, Functionize AI supports automated and manual testing for both Android and iOS platforms on real devices and simulators.",
                },
                {
                  q: "Does Functionize AI support cross-browser testing?",
                  a: "Yes, Functionize enables testing across major browsers such as Chrome, Firefox, Safari, and Edge to ensure cross-platform compatibility.",
                },
                {
                  q: "Does Functionize AI support automated API testing?",
                  a: "Yes, Functionize integrates API tests into your workflows, allowing validation of backend services alongside UI testing.",
                },
                {
                  q: "Does Functionize AI support parallel testing?",
                  a: "Yes, it allows parallel execution of tests across multiple browsers, devices, and environments to accelerate the testing process.",
                },
                {
                  q: "Is Functionize AI cloud-based?",
                  a: "Yes, Functionize is a cloud-based platform that offers scalability, easy collaboration, and reduced infrastructure overhead.",
                },
                {
                  q: "Does Functionize provide real-time test feedback?",
                  a: "Yes, it delivers real-time feedback with logs, screenshots, and video recordings to help developers debug quickly.",
                },
                {
                  q: "How does Functionize detect flaky tests?",
                  a: "Functionize uses historical data and AI analysis to identify unstable or flaky tests and suggest improvements.",
                },
                {
                  q: "Is Functionize suitable for Agile and DevOps teams?",
                  a: "Absolutely. Functionize integrates with CI/CD pipelines and supports continuous testing, making it ideal for Agile and DevOps workflows.",
                },
                {
                  q: "What programming languages and frameworks are supported?",
                  a: "Functionize integrates with most major frameworks and languages including Selenium, Cypress, Appium, and REST APIs.",
                },
                {
                  q: "What is smart test execution in Functionize?",
                  a: "Smart execution prioritizes the most relevant test cases based on code changes, historical data, and impact analysis to reduce test time.",
                },
                {
                  q: "Can Functionize simulate different network conditions?",
                  a: "Yes, Functionize lets you emulate conditions like 3G, 4G, or slow Wi-Fi to evaluate app performance under varying connectivity.",
                },
                {
                  q: "Does Functionize offer accessibility testing?",
                  a: "Yes, it helps ensure your apps meet WCAG and ADA compliance by identifying accessibility issues during test runs.",
                },
                {
                  q: "Does Functionize AI support manual testing?",
                  a: "Yes, alongside automation, Functionize allows live interactive testing on various devices and browsers.",
                },
                {
                  q: "Does Functionize provide screenshots and video recordings?",
                  a: "Yes, every test execution includes screenshots, logs, and video replays to aid debugging and validation.",
                },
                {
                  q: "How does Functionize handle test maintenance?",
                  a: "Functionize uses self-healing technology to automatically update tests when UI elements change, reducing the need for manual maintenance.",
                },
                {
                  q: "Is Functionize secure for enterprise use?",
                  a: "Yes, it complies with enterprise-grade security standards like SOC 2 Type II, ISO 27001, and GDPR.",
                },
                {
                  q: "What integrations are available with Functionize?",
                  a: "Functionize integrates with CI/CD tools like Jenkins, GitHub Actions, CircleCI, Azure DevOps, and collaboration tools like Slack and JIRA.",
                },
                {
                  q: "Does Functionize provide test analytics?",
                  a: "Yes, it offers detailed dashboards showing test trends, pass/fail rates, coverage gaps, and more for actionable insights.",
                },
                {
                  q: "What kind of support does Functionize offer?",
                  a: "Functionize provides 24/7 support, onboarding assistance, and comprehensive documentation for all users.",
                },
                {
                  q: "Does Functionize offer a free trial?",
                  a: "Yes, a free trial is available to help you explore the platform's features before committing.",
                },
                {
                  q: "How easy is it to get started with Functionize?",
                  a: "It's quick and easy—sign up, connect your repository or testing framework, and start testing with minimal setup.",
                },
                {
                  q: "What sets Functionize apart from other testing platforms?",
                  a: "Functionize stands out with its AI-driven self-healing, smart execution, real-time analytics, and seamless integration across the testing lifecycle.",
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
                src={functionize1}
                alt="screenshot1"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={functionize2}
                alt="screenshot2"
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
                    Why Use Functionize AI?
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
                      <strong>Faster Time to Market:</strong> Functionize AI
                      automates and speeds up the testing process, allowing
                      teams to fix bugs quickly and release software faster.
                    </li>
                    <li className="mb-3">
                      <strong>Improved Accuracy and Coverage:</strong> Delivers
                      high-precision testing by detecting bugs, UI
                      inconsistencies, and performance issues across platforms,
                      enhancing both quality and coverage.
                    </li>
                    <li className="mb-3">
                      <strong>Easy Integration with CI/CD:</strong> Seamlessly
                      integrates with CI/CD pipelines for continuous testing
                      throughout the development lifecycle, ensuring more stable
                      and reliable releases.
                    </li>
                    <li className="mb-3">
                      <strong>AI-Driven Optimization:</strong> Automatically
                      adapts to app changes, optimizes test cases, and
                      identifies UI updates without manual scripting, making the
                      process more intelligent and efficient.
                    </li>
                    <li className="mb-3">
                      <strong>No Code Automation:</strong> Empowers testers of
                      all skill levels to build and run automated tests using a
                      scriptless interface, freeing up time for more strategic
                      tasks.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Start Creating Now
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
                    <strong>Efficiency and Speed:</strong> Automates repetitive
                    tasks, runs tests in parallel, and accelerates the overall
                    testing process, enabling faster feedback and quicker
                    releases.
                  </li>
                  <li className="mb-2">
                    <strong>Cross-Platform and Mobile Testing:</strong> Supports
                    multiple devices, browsers, and platforms to ensure a
                    consistent user experience and reliable performance.
                  </li>
                  <li className="mb-2">
                    <strong>Seamless Integration:</strong> Easily integrates
                    with popular CI/CD tools like Jenkins, GitHub, and Slack for
                    streamlined automated testing within development workflows.
                  </li>
                  <li className="mb-2">
                    <strong>Real-Time Feedback:</strong> Provides immediate test
                    results, helping teams detect and fix issues early in the
                    development cycle to avoid delays.
                  </li>
                  <li className="mb-2">
                    <strong>Scalability:</strong> Cloud-based infrastructure
                    allows easy test scaling, on-demand execution, and broad
                    testing coverage without worrying about hardware
                    limitations.
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
                    <strong>Learning Curve for New Users:</strong> Although
                    user-friendly, new teams may face challenges when adapting
                    to AI-driven and complex testing scenarios.
                  </li>
                  <li className="mb-2">
                    <strong>Costs:</strong> Higher pricing compared to
                    open-source or simpler tools can be a constraint for small
                    teams or startups with limited budgets.
                  </li>
                  <li className="mb-2">
                    <strong>Customization Limitations:</strong> Some highly
                    specialized or complex test workflows may require custom
                    setups that aren't natively supported.
                  </li>
                  <li className="mb-2">
                    <strong>Dependence on Cloud Infrastructure:</strong>{" "}
                    Requires a reliable internet connection and may not suit
                    environments with strict security or offline requirements.
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
                    <strong>Testim</strong>: An AI-powered test automation tool
                    that leverages machine learning for stable, self-healing
                    tests, and visual test creation.
                  </li>
                  <li className="mb-2">
                    <strong>mabl</strong>: Provides intelligent test automation
                    with built-in machine learning capabilities, helping teams
                    create, execute, and maintain tests effortlessly.
                  </li>
                  <li className="mb-2">
                    <strong>Applitools</strong>: While primarily known for
                    visual testing, it uses AI to detect visual bugs and
                    maintain UI consistency across browsers and devices.
                  </li>
                  <li className="mb-2">
                    <strong>ACCELQ</strong>: A codeless test automation platform
                    using AI for predictive test authoring, autonomous
                    maintenance, and business-driven testing.
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
 <div className="row align-items-center justify-content-between mb-1">
  {/* Left side (Text Section) */}
  <div className="col-lg-6 col-md-12 order-lg-1 order-2">
    <p className="text-primary">Write better, faster</p>
    <h1>Functionize AI</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      Functionize AI is an advanced, AI-powered test automation
      platform designed to streamline and accelerate the process of
      testing web and mobile applications. By utilizing machine
      learning and AI, Functionize automates various testing types,
      including functional testing, regression testing, UI testing,
      and performance testing, among others. This allows developers
      and QA teams to deliver high-quality software faster and more
      efficiently.
    </p>

    <p>
      With Functionize AI, testing is simplified, scalable, and
      integrated with continuous integration and deployment (CI/CD)
      workflows, enabling organizations to maintain quality assurance
      throughout the development cycle. Functionize reduces the
      complexity of test automation by offering scriptless test
      creation, AI-driven optimization, and powerful integrations,
      making it a comprehensive testing solution for both small teams
      and large enterprises.
    </p>

    <div className="d-flex flex-wrap gap-3 mb-4 mb-lg-0">
      <a
        href="https://www.functionize.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-lg px-4"
      >
        Explore Tool
      </a>
    </div>
  </div>

  {/* Right side (Image Section) */}
  <div className="col-lg-6 col-md-12 order-lg-2 order-1 mb-4 mb-lg-0 text-center">
    <img
      src={functionize}
      className="img-fluid"
      style={{ maxHeight: "300px", width: "auto" }}
      alt="Functionize AI"
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
                How Functionize AI Works?
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
                      AI-Powered Test Automation:
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Functionize AI automates both functional and regression
                      testing, identifying issues in real-time as code changes
                      are made. By using AI to analyze application behavior, it
                      automatically adapts to changes, creating robust tests
                      that run across various environments.
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
                      Cross-Platform Testing:
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      With Functionize for cross-platform testing, you can test
                      your application on various web browsers, mobile devices,
                      and operating systems. This ensures a seamless user
                      experience across platforms, making it especially useful
                      for applications with wide-ranging user bases.
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
                      Mobile Testing
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Functionize AI for mobile testing automates the testing of
                      mobile apps, ensuring that apps perform well on different
                      mobile devices, OS versions, and screen sizes, including
                      performance testing under various network conditions.
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

        
        </div>
      </div>
    </>
  );
};

export default FunctionizeAI;
