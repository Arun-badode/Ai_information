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
const LambdaTestAI = () => {
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
                Elevate Testing with AI-Powered Automation
              </p>
              <h3 className="">Smarter, Faster, and Scalable Test Automation</h3>
            </div>
            {[
              {
                icon: "🤖",
                title: "AI-Driven Test Execution",
                desc: "LambdaTest AI intelligently prioritizes and runs critical test cases based on code changes, past failures, and user flows for optimal performance.",
              },
              {
                icon: "📱",
                title: "Real Device Cloud",
                desc: "Test on 3,000+ real browsers and devices to ensure accurate user experiences across various platforms and operating systems.",
              },
              {
                icon: "⚡",
                title: "Parallel Test Execution",
                desc: "Accelerate test cycles with parallel test execution across multiple environments, ensuring faster releases and better scalability.",
              },
              {
                icon: "🔍",
                title: "Flaky Test Detection",
                desc: "LambdaTest AI automatically detects flaky tests by analyzing failure patterns and offers automatic script healing to improve reliability.",
              },
              {
                icon: "📈",
                title: "Advanced Performance Monitoring",
                desc: "Simulate different network conditions like 3G, 4G, and throttled Wi-Fi to assess app performance under real-world scenarios.",
              },
              {
                icon: "🔗",
                title: "Seamless CI/CD Integration",
                desc: "Easily integrate LambdaTest AI with your existing CI/CD tools such as Jenkins, GitHub Actions, and CircleCI for continuous testing within DevOps pipelines.",
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
                  "q": "What is LambdaTest AI?",
                  "a": "LambdaTest AI is an intelligent testing platform that leverages artificial intelligence to automate and optimize the testing of web and mobile applications across browsers, devices, and operating systems."
                },
                {
                  "q": "How does LambdaTest AI improve test automation?",
                  "a": "It uses AI to identify critical test cases, auto-heal scripts, and prioritize execution, reducing test flakiness and increasing automation stability."
                },
                {
                  "q": "What types of testing does LambdaTest AI support?",
                  "a": "LambdaTest AI supports functional, regression, cross-browser, mobile, API, and visual UI testing on a wide range of environments."
                },
                {
                  "q": "Can I run tests on real devices with LambdaTest AI?",
                  "a": "Yes, LambdaTest AI provides access to 3000+ real devices and browsers for accurate real-world testing."
                },
                {
                  "q": "How does LambdaTest AI help detect flaky tests?",
                  "a": "It uses historical test data and pattern recognition to flag inconsistent test behavior and reduce unreliable results."
                },
                {
                  "q": "Is LambdaTest AI suitable for agile and DevOps teams?",
                  "a": "Absolutely. LambdaTest AI integrates seamlessly with agile and DevOps workflows, ensuring faster feedback and continuous testing."
                },
                {
                  "q": "Can LambdaTest AI test both Android and iOS apps?",
                  "a": "Yes, it supports automated and manual testing for Android and iOS apps using real devices and simulators."
                },
                {
                  "q": "What programming languages are supported in LambdaTest AI?",
                  "a": "LambdaTest AI supports multiple languages and works with frameworks like Selenium, Cypress, Playwright, Puppeteer, and Appium."
                },
                {
                  "q": "How does AI enhance test execution in LambdaTest?",
                  "a": "AI dynamically prioritizes test cases based on code changes and previous failures, optimizing test execution and reducing runtime."
                },
                {
                  "q": "Does LambdaTest AI support parallel testing?",
                  "a": "Yes, it allows high-scale parallel testing to execute multiple test cases simultaneously across different browsers and devices."
                },
                {
                  "q": "Can I perform cross-browser testing using LambdaTest AI?",
                  "a": "Yes, LambdaTest AI enables comprehensive cross-browser testing on Chrome, Firefox, Safari, Edge, and more."
                },
                {
                  "q": "Does LambdaTest AI provide real-time test feedback?",
                  "a": "Yes, you receive real-time logs, screenshots, and video recordings to quickly debug and resolve issues."
                },
                {
                  "q": "Is LambdaTest AI cloud-based?",
                  "a": "Yes, it is a fully cloud-hosted solution, eliminating the need for infrastructure setup or maintenance."
                },
                {
                  "q": "What integrations are available with LambdaTest AI?",
                  "a": "It integrates with CI/CD tools like Jenkins, GitHub Actions, CircleCI, Azure DevOps, and collaboration tools like Slack and JIRA."
                },
                {
                  "q": "What is smart test execution in LambdaTest AI?",
                  "a": "Smart test execution uses AI to run only the most relevant test cases based on recent code changes and impact analysis."
                },
                {
                  "q": "Does LambdaTest AI support test analytics?",
                  "a": "Yes, it provides insights like test trends, pass/fail rates, test flakiness, and performance metrics over time."
                },
                {
                  "q": "Can I simulate different network conditions in LambdaTest AI?",
                  "a": "Yes, you can test under varied network conditions like 3G, 4G, or throttled Wi-Fi to assess app performance."
                },
                {
                  "q": "How does LambdaTest AI support mobile app testing?",
                  "a": "It combines AI-driven automation with real-device access for scalable and accurate mobile app testing."
                },
                {
                  "q": "Does LambdaTest AI offer accessibility testing?",
                  "a": "Yes, it includes tools to test web accessibility and ensure compliance with WCAG and ADA standards."
                },
                {
                  "q": "Can LambdaTest AI be used for manual testing?",
                  "a": "Yes, it supports live interactive testing along with automated testing across devices and browsers."
                },
                {
                  "q": "Does LambdaTest AI provide screenshots and video recordings?",
                  "a": "Yes, all test sessions include screenshots, logs, and video replays for detailed analysis and debugging."
                },
                {
                  "q": "Is LambdaTest AI secure for enterprise use?",
                  "a": "Yes, it complies with industry standards including SOC 2 Type II, GDPR, and ISO 27001."
                },
                {
                  "q": "How does LambdaTest AI assist with test maintenance?",
                  "a": "Its AI engine auto-detects UI and DOM changes, enabling automatic script healing and reducing maintenance efforts."
                },
                {
                  "q": "What kind of support is available with LambdaTest AI?",
                  "a": "24/7 technical support, onboarding assistance, and extensive documentation are available for all users."
                },
                {
                  "q": "Does LambdaTest AI offer a free trial?",
                  "a": "Yes, LambdaTest AI offers a free trial so users can explore features before choosing a subscription."
                },
                {
                  "q": "What sets LambdaTest AI apart from other testing platforms?",
                  "a": "Its AI-driven insights, smart test execution, native parallel testing, and wide device coverage make it uniquely powerful."
                },
                {
                  "q": "How easy is it to get started with LambdaTest AI?",
                  "a": "Getting started is quick—sign up, connect your repo or testing framework, and start testing with minimal setup."
                },
                {
                  "q": "Can LambdaTest AI be used for performance testing?",
                  "a": "Yes, it supports performance benchmarking and network simulation to ensure reliable application performance."
                },
                {
                  "q": "Does LambdaTest AI support automated API testing?",
                  "a": "It integrates with API testing tools and can run them alongside UI tests in your CI/CD pipeline."
                },
                {
                  "q": "Can I integrate LambdaTest AI with my existing test framework?",
                  "a": "Yes, LambdaTest AI supports all major testing frameworks and libraries for seamless integration into your workflow."
                },
                {
                  "q": "How does LambdaTest AI enhance mobile app test coverage?",
                  "a": "With access to real devices and AI-powered test execution, it ensures robust coverage and reliability across mobile platforms."
                }
              ]
                .map((item, i) => ({ ...item, id: `faq${i}` }))
                .filter((item, i) => showAllFaqs || i < 4)
                .map((item, i) => (
                  <div className="accordion-item mb-3" key={item.id}>
                    <h2 className="accordion-header" id={`heading${item.id}`}>
                      <button
                        className={`accordion-button ${i !== 0 ? "collapsed" : ""
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
                      className={`accordion-collapse collapse ${i === 0 ? "show" : ""
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
                    Why Use LambdaTest AI?
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
                      <strong>Increased Testing Speed:</strong> Automates repetitive tasks and leverages AI for faster feedback, accelerating development cycles.
                    </li>
                    <li className="mb-3">
                      <strong>Cost Efficiency:</strong> Reduces manual effort in cross-browser, mobile, and performance testing, lowering operational costs.
                    </li>
                    <li className="mb-3">
                      <strong>Comprehensive Coverage:</strong> Supports testing across various browsers, devices, and OS platforms to ensure full compatibility.
                    </li>
                    <li className="mb-3">
                      <strong>Real-Time Testing Feedback:</strong> Provides immediate insights during testing to resolve bugs quickly and reduce time-to-market.
                    </li>
                    <li className="mb-3">
                      <strong>Seamless CI/CD Integration:</strong> Integrates easily with CI/CD tools to automate and streamline your test pipelines.
                    </li>
                    <li className="mb-3">
                      <strong>Enhanced Test Accuracy:</strong> Uses AI to focus on high-risk areas, improving test result reliability and minimizing false positives.
                    </li>
                    <li className="mb-3">
                      <strong>Scalability:</strong> Cloud-based infrastructure allows for high-volume, parallel testing across devices and browsers.
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
                    <strong>AI-Driven Test Optimization:</strong> Analyzes previous test results to automate and streamline execution, focusing on critical app areas.
                  </li>
                  <li className="mb-2">
                    <strong>Cross-Platform Testing:</strong> Ensures compatibility by running tests across browsers, devices, and operating systems.
                  </li>
                  <li className="mb-2">
                    <strong>Automated Regression Testing:</strong> Confirms that new changes don't disrupt existing functionality with continuous regression runs.
                  </li>
                  <li className="mb-2">
                    <strong>Real-Time Feedback and Debugging:</strong> Provides instant bug detection and insights during execution to shorten the test cycle.
                  </li>
                  <li className="mb-2">
                    <strong>CI/CD Integration:</strong> Easily connects with Jenkins, GitHub Actions, GitLab, and other CI/CD tools for automation workflows.
                  </li>
                  <li className="mb-2">
                    <strong>Visual Regression Testing:</strong> Highlights UI inconsistencies by comparing versions pixel-by-pixel.
                  </li>
                  <li className="mb-2">
                    <strong>Scalable Cloud Testing:</strong> Offers cloud infrastructure that scales automatically without the need for physical labs.
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
                    <strong>Learning Curve:</strong> May require time for beginners to adapt to AI-driven testing workflows.
                  </li>
                  <li className="mb-2">
                    <strong>Pricing:</strong> Subscription costs may be high for small teams or independent developers.
                  </li>
                  <li className="mb-2">
                    <strong>Dependency on Internet Connection:</strong> Cloud-based access means testing requires stable connectivity.
                  </li>
                  <li className="mb-2">
                    <strong>Limited Manual Testing Features:</strong> Focus is on automation; manual testing tools are relatively basic.
                  </li>
                  <li className="mb-2">
                    <strong>Complex Setup for Advanced Features:</strong> Features like parallel testing or Selenium Grid may require technical setup.
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
                    <strong>BrowserStack</strong>: Real device cloud for web and mobile app testing with AI-enhanced features like auto-healing and intelligent test prioritization.
                  </li>
                  <li className="mb-2">
                    <strong>Autify</strong>: No-code AI-powered test automation platform that auto-updates test scenarios based on UI changes.
                  </li>
                  <li className="mb-2">
                    <strong>Testim</strong>: Offers AI-based test authoring and dynamic locators to create stable and scalable automated UI tests.
                  </li>
                  <li className="mb-2">
                    <strong>Functionize</strong>: Combines AI and machine learning to build and maintain functional and end-to-end tests with minimal effort.
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
              <h1>LambdaTest AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                LambdaTest AI is a cloud-based AI-driven browser testing platform designed to automate cross-browser testing, mobile testing, and performance monitoring for web applications. It leverages the power of Artificial Intelligence (AI) to help developers and QA teams run automated tests efficiently across various browsers, devices, and operating systems. LambdaTest AI enables real-time feedback, visual regression testing, and integration with CI/CD pipelines to enhance test automation and overall software testing processes.
              </p>

              <p>
                LambdaTest AI is designed to streamline the testing process for cross-browser compatibility, mobile app testing, performance testing, and UI validation. The tool allows users to run Selenium scripts on multiple browsers and devices, ensuring that websites and web applications are responsive, functional, and bug-free.
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
                How LambdaTest AI Works?
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
                      Cross-Browser Testing:
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      LambdaTest AI enables you to run tests across different browsers (Chrome, Firefox, Safari, Edge, etc.) to check browser compatibility. The AI engine prioritizes test cases that are most likely to fail, improving the efficiency of your testing.
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
                      Cross-Device Testing:
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Test web applications and mobile websites on multiple devices, including iOS and Android, to ensure a seamless user experience across all platforms.
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
                      Performance Testing
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      LambdaTest AI allows you to run performance tests to check how your application behaves under various load conditions, ensuring that it performs optimally during peak traffic.
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

export default LambdaTestAI;
