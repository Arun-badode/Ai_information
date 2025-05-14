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
const BrowserStack = () => {
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
                Elevate Testing with AI-Powered Intelligence
              </p>
              <h3 className="">
                Smarter, Faster, and Scalable Test Automation
              </h3>
            </div>
            {[
              {
                icon: "🤖",
                title: "AI-Driven Test Execution",
                desc: "Automatically prioritize and run critical test cases using AI that understands code changes, user flows, and past test failures.",
              },
              {
                icon: "📱",
                title: "Real Device Cloud",
                desc: "Run tests on 3,000+ real browsers and devices in the cloud to ensure consistent user experience across platforms.",
              },
              {
                icon: "⚡",
                title: "Parallel Test Execution",
                desc: "Speed up your test cycles by running tests in parallel across multiple environments, reducing release time significantly.",
              },
              {
                icon: "🔍",
                title: "Flaky Test Detection",
                desc: "AI detects and isolates flaky tests by analyzing failure patterns across multiple test runs.",
              },
              {
                icon: "📈",
                title: "Performance Monitoring",
                desc: "Simulate real-world network conditions and monitor performance metrics for each test session with actionable insights.",
              },
              {
                icon: "🔗",
                title: "Seamless CI/CD Integration",
                desc: "Easily integrate with Jenkins, GitHub Actions, CircleCI, and more for continuous testing within your DevOps pipelines.",
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
                  q: "What is BrowserStack AI?",
                  a: "BrowserStack AI is an intelligent testing platform that combines BrowserStack’s infrastructure with AI-powered capabilities to automate and optimize web and mobile application testing.",
                },
                {
                  q: "How does BrowserStack AI enhance test automation?",
                  a: "BrowserStack AI streamlines test automation by using artificial intelligence to prioritize tests, reduce flaky tests, and auto-heal broken tests, resulting in faster and more stable test execution.",
                },
                {
                  q: "What types of testing does BrowserStack AI support?",
                  a: "BrowserStack AI supports functional, regression, cross-browser, mobile, and API testing across real devices and browsers.",
                },
                {
                  q: "Can I run tests on real devices with BrowserStack AI?",
                  a: "Yes, BrowserStack AI allows you to run tests on 3000+ real devices and browsers, enabling accurate simulation of real user environments.",
                },
                {
                  q: "How does BrowserStack AI detect flaky tests?",
                  a: "It analyzes historical test data to identify inconsistent test behavior and flags flaky tests, helping teams improve test reliability.",
                },
                {
                  q: "Is BrowserStack AI suitable for agile and DevOps environments?",
                  a: "Yes, it integrates smoothly into agile and DevOps pipelines, providing fast feedback loops and continuous testing support.",
                },
                {
                  q: "Can I test both Android and iOS apps with BrowserStack AI?",
                  a: "Absolutely. BrowserStack AI supports automation and manual testing for both Android and iOS platforms on real devices.",
                },
                {
                  q: "What programming languages are supported in BrowserStack AI?",
                  a: "It supports multiple programming languages via integrations with tools like Selenium, Appium, Playwright, Cypress, and more.",
                },
                {
                  q: "How does AI help in test execution within BrowserStack AI?",
                  a: "AI optimizes test execution by dynamically selecting the most relevant tests based on risk, previous failures, and code changes.",
                },
                {
                  q: "Does BrowserStack AI support parallel testing?",
                  a: "Yes, it supports high-scale parallel testing across various environments, reducing test execution time significantly.",
                },
                {
                  q: "Can I run cross-browser tests using BrowserStack AI?",
                  a: "Yes, it enables seamless cross-browser testing across major browsers like Chrome, Firefox, Safari, and Edge.",
                },
                {
                  q: "Does BrowserStack AI provide real-time test reporting?",
                  a: "Yes, it offers real-time dashboards, logs, and video recordings to give instant feedback and improve debugging.",
                },
                {
                  q: "Is BrowserStack AI cloud-based?",
                  a: "Yes, BrowserStack AI is a fully cloud-hosted solution with zero setup and infrastructure management requirements.",
                },
                {
                  q: "What integrations does BrowserStack AI offer?",
                  a: "BrowserStack AI integrates with CI/CD tools like Jenkins, GitHub Actions, Azure DevOps, CircleCI, and project management tools like JIRA and Slack.",
                },
                {
                  q: "What is BrowserStack AI’s smart test execution?",
                  a: "Smart test execution uses AI to determine which tests to run based on recent changes and historical test outcomes, improving speed and efficiency.",
                },
                {
                  q: "Does BrowserStack AI support test analytics?",
                  a: "Yes, it provides advanced analytics such as flakiness trends, failure reasons, and test performance over time.",
                },
                {
                  q: "Can I simulate network conditions with BrowserStack AI?",
                  a: "Yes, you can simulate different network environments like 3G, 4G, or throttled Wi-Fi to test app behavior under varied connectivity.",
                },
                {
                  q: "What is BrowserStack AI’s approach to mobile test automation?",
                  a: "It combines AI capabilities with real-device testing to provide scalable and stable automation for mobile applications.",
                },
                {
                  q: "Does BrowserStack AI offer accessibility testing?",
                  a: "Yes, it includes accessibility testing features to ensure your app meets WCAG standards and is inclusive for all users.",
                },
                {
                  q: "Can I use BrowserStack AI for manual testing?",
                  a: "Yes, BrowserStack AI complements automated testing with the ability to run manual exploratory tests on real devices and browsers.",
                },
                {
                  q: "Does BrowserStack AI provide screenshots and video recording?",
                  a: "Yes, every test session includes full logs, screenshots, and video replays to aid debugging and collaboration.",
                },
                {
                  q: "Is BrowserStack AI secure for enterprise use?",
                  a: "Yes, BrowserStack AI follows enterprise-grade security protocols including SOC 2, GDPR, and ISO 27001 compliance.",
                },
                {
                  q: "How does BrowserStack AI handle test maintenance?",
                  a: "AI automatically detects changes in UI and DOM structure and suggests updates, minimizing the effort required for test maintenance.",
                },
                {
                  q: "What kind of support is available with BrowserStack AI?",
                  a: "It offers 24/7 technical support, detailed documentation, and onboarding help for enterprise customers.",
                },
                {
                  q: "Does BrowserStack AI offer a free trial?",
                  a: "Yes, you can try BrowserStack AI with a free trial to explore its features before upgrading to a paid plan.",
                },
                {
                  q: "What makes BrowserStack AI different from other testing tools?",
                  a: "It stands out with AI-powered optimization, access to 3000+ real devices, instant test insights, and seamless CI/CD integration.",
                },
                {
                  q: "How easy is it to set up BrowserStack AI?",
                  a: "Setup is simple and quick—just sign up, connect your repo or test framework, and start testing with minimal configuration.",
                },
                {
                  q: "Can BrowserStack AI be used for performance testing?",
                  a: "Yes, it supports basic performance metrics and network simulation to test app performance under realistic conditions.",
                },
                {
                  q: "Does BrowserStack AI support automated API testing?",
                  a: "BrowserStack AI integrates with tools that support API testing, and can be used alongside them within your pipelines.",
                },
                {
                  q: "Can BrowserStack AI integrate with my existing testing framework?",
                  a: "Yes, it is compatible with all popular frameworks including Selenium, Appium, Playwright, Cypress, and more.",
                },
                {
                  q: "How does BrowserStack AI improve mobile app testing?",
                  a: "It automates testing for native and hybrid mobile apps on real devices, ensuring consistent performance and reducing test flakiness.",
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
                    Why Use BrowserStack AI?
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
                      <strong>Efficiency:</strong> Automates repetitive tasks
                      like cross-browser and device testing, reducing manual
                      workload and increasing overall test efficiency.
                    </li>
                    <li className="mb-3">
                      <strong>Wide Browser Support:</strong> Enables testing
                      across a broad range of browsers and devices to ensure
                      consistent application performance.
                    </li>
                    <li className="mb-3">
                      <strong>Enhanced Accuracy:</strong> AI-driven intelligence
                      targets the most failure-prone areas, improving the
                      precision and value of test outcomes.
                    </li>
                    <li className="mb-3">
                      <strong>Seamless Integration:</strong> Easily integrates
                      with tools like Selenium, Jenkins, and others to support
                      smooth CI/CD workflow adoption.
                    </li>
                    <li className="mb-3">
                      <strong>Real-Time Test Results:</strong> Delivers
                      immediate feedback to help identify and fix issues faster
                      within the development cycle.
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
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Automated Testing:</strong> Automates browser and
                    mobile testing, drastically reducing manual effort and
                    saving time.
                  </li>
                  <li className="mb-2">
                    <strong>Cross-Platform Testing:</strong> Offers support for
                    a wide range of browsers and devices across desktop and
                    mobile platforms.
                  </li>
                  <li className="mb-2">
                    <strong>Seamless Selenium Integration:</strong> Integrates
                    smoothly with Selenium and other popular testing tools,
                    enhancing test workflows.
                  </li>
                  <li className="mb-2">
                    <strong>Real-Time Feedback:</strong> Delivers instant test
                    results, enabling faster detection and resolution of issues.
                  </li>
                  <li className="mb-2">
                    <strong>Cloud-Based:</strong> Provides scalable and flexible
                    infrastructure without local setup requirements.
                  </li>
                  <li className="mb-2">
                    <strong>AI-Enhanced Testing:</strong> Uses AI to prioritize
                    high-risk areas, optimizing test coverage and efficiency.
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
                    <strong>Learning Curve:</strong> New users may require time
                    to fully integrate the tool into their workflows.
                  </li>
                  <li className="mb-2">
                    <strong>Subscription-Based Pricing:</strong> Can be costly
                    for small teams or individual developers.
                  </li>
                  <li className="mb-2">
                    <strong>Limited Manual Testing:</strong> Manual testing
                    capabilities may be less advanced compared to dedicated
                    manual testing tools.
                  </li>
                  <li className="mb-2">
                    <strong>Cloud Dependency:</strong> Requires stable internet
                    connectivity and does not support offline testing.
                  </li>
                  <li className="mb-2">
                    <strong>Customization Limits:</strong> May not provide
                    sufficient flexibility for highly complex or customized test
                    scenarios.
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
                    <strong>Sauce Labs</strong>: Cloud-based platform for
                    cross-browser testing, mobile app testing, and
                    Selenium/Appium automation with strong CI/CD integrations.
                  </li>
                  <li className="mb-2">
                    <strong>LambdaTest</strong>: Cloud testing platform offering
                    manual and automated testing across thousands of browsers,
                    devices, and OS combinations.
                  </li>
                  <li className="mb-2">
                    <strong>TestingBot</strong>: Provides Selenium and
                    Cypress-based automated testing on a wide range of real
                    browsers and mobile devices.
                  </li>
                  <li className="mb-2">
                    <strong>HeadSpin</strong>: Offers real device cloud,
                    AI-based performance monitoring, and cross-platform testing
                    for mobile and web apps.
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
              <h1> BrowserStack AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                BrowserStack AI is a powerful AI-driven browser testing tool
                that helps developers and QA teams perform automated testing
                across different browsers, devices, and operating systems. It
                integrates seamlessly with popular frameworks like Selenium,
                making it easy to scale testing efforts for web applications. By
                leveraging AI and machine learning, BrowserStack AI enhances the
                accuracy and speed of cross-browser testing, ensuring that web
                applications work consistently across all platforms. It is
                especially useful in continuous integration (CI) environments,
                automating browser compatibility checks, and offering real-time
                feedback during the testing process.
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
                How BrowserStack AI Works?
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
                      Cross-browser testing:
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Automatically test your web applications across multiple
                      browsers (Chrome, Firefox, Safari, etc.) without having to
                      manually configure each one.
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
                      Cross-device testing:
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Test your application on a variety of mobile devices and
                      operating systems, ensuring it functions well on Android,
                      iOS, and desktop devices.
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
                      Integration with Selenium:
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Use BrowserStack AI with Selenium for enhanced test
                      automation, enabling you to run tests efficiently in
                      real-time and on cloud infrastructure.
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

export default BrowserStack;
