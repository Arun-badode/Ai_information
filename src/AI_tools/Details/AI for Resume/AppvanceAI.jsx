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

const AppvanceAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
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
                title: "Automated Test Execution",
                desc: "Appvance IQ automates test execution, allowing for the rapid running of tests without manual intervention. Tests can be executed across multiple platforms and devices, speeding up the testing process significantly.",
              },
              {
                title: "AI-Powered Test Creation",
                desc: "Appvance IQ uses AI to automatically generate test scripts, adapting to changes in the application and ensuring that test cases are up-to-date and relevant without the need for manual coding.",
              },
              {
                title: "Cross-Platform Testing",
                desc: "Appvance IQ supports testing across multiple platforms including web, mobile, and API. This ensures that applications perform consistently and accurately, regardless of the platform or device.",
              },
              {
                title: "Regression and Functional Testing",
                desc: "Appvance IQ automates regression testing, ensuring that new updates do not disrupt existing functionality, and functional testing, confirming that all features of an application work as expected.",
              },
              {
                title: "Performance and Load Testing",
                desc: "Appvance IQ provides performance testing tools that allow teams to simulate real-world traffic loads on their applications to ensure scalability and optimal performance under stress.",
              },
              {
                title: "UI Testing and Visual Regression",
                desc: "Appvance IQ helps with UI testing by checking if visual components of the application remain consistent across different versions. Visual regression testing ensures that the UI’s appearance remains the same, identifying issues like layout discrepancies or broken visual elements",
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
                src={deatilimage}
                alt="Screenshot 1"
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-md-6">
              <img
                src={deatilimage}
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
                <h3 className="fw-bold mb-4">Why Use Appvance IQ?</h3>

                <h5>AI-Driven Efficiency:</h5>
                <p className="fs-5">
                  Appvance IQ’s AI-powered capabilities streamline the testing
                  process by automating test creation, execution, and reporting,
                  making it faster and more reliable.
                </p>

                <h5>Supports Multiple Platforms:</h5>
                <p className="fs-5 mt-3">
                  Whether it’s a web app, mobile app, or API, Appvance IQ
                  supports testing across all these platforms, ensuring
                  consistent performance and functionality on all devices and
                  environments.
                </p>

                <h5>Reduces Manual Testing Effort:</h5>
                <p className="fs-5 mt-3">
                  By automating repetitive tasks such as script creation,
                  execution, and reporting, Appvance IQ reduces the effort
                  required for manual testing, freeing up resources for more
                  strategic activities.
                </p>

                <h5>Real-Time Feedback and Reporting:</h5>
                <p className="fs-5 mt-3">
                  The platform provides real-time feedback and detailed test
                  reports, allowing teams to quickly identify issues and resolve
                  them before they impact the user experience.
                </p>

                <h5>Optimizes Test Cycles:</h5>
                <p className="fs-5 mt-3">
                  Appvance IQ helps accelerate the testing process by
                  prioritizing the most critical tests and allowing for faster
                  test execution. This reduces the overall testing cycle time
                  and allows teams to release products quicker.
                </p>

                <Button variant="primary" size="lg" className="mt-4">
                  Try Appvance IQ Now
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
                    <h3 className="mb-4 text-center">Pros of Appvance IQ</h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <h6>Ease of Use:</h6>
                        <p>
                          With its scriptless automation, Appvance IQ is easy to
                          use, even for teams without deep programming
                          knowledge, which helps make testing accessible to
                          everyone, including non-technical users.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Comprehensive Testing:</h6>
                        <p>
                          Appvance IQ offers a wide range of testing
                          capabilities, including performance testing, API
                          testing, UI testing, load testing, and cross-platform
                          testing, making it a comprehensive solution for
                          software testing.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>AI-Powered Test Optimization:</h6>
                        <p>
                          The AI-powered optimization feature helps ensure that
                          tests are executed in the most efficient manner,
                          reducing redundant tests and improving overall testing
                          efficiency.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Integration with CI/CD:</h6>
                        <p>
                          Appvance IQ integrates with CI/CD tools like Jenkins,
                          GitHub, and Bitbucket, enabling automated testing
                          throughout the entire development lifecycle, which
                          accelerates time-to-market.
                        </p>
                      </div>

                      <div className="col-md-6">
                        <h6>Cross-Device and Cross-Browser Support:</h6>
                        <p>
                          The platform supports testing across multiple browsers
                          and devices, ensuring that the application functions
                          as expected no matter where or how it’s accessed.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cons Section */}
                <div className="col-md-10 offset-md-1">
                  <div style={styles.card}>
                    <h3 className="mb-4 text-center">Cons of Appvance IQ</h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <h6>Learning Curve:</h6>
                        <p>
                          While Appvance IQ is user-friendly, some users may
                          experience a learning curve when adapting to the
                          platform’s features, especially if they are new to
                          test automation or AI-driven tools.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Cost:</h6>
                        <p>
                          Appvance IQ can be expensive compared to open-source
                          testing tools. It may not be the best option for small
                          teams or startups with limited budgets.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Dependence on Cloud Infrastructure:</h6>
                        <p>
                          As a cloud-based platform, Appvance IQ relies on a
                          stable internet connection, which may be problematic
                          in areas with unreliable internet connectivity or for
                          teams with strict internal security protocols that
                          limit cloud use.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Customization Limitations:</h6>
                        <p>
                          While Appvance IQ covers a wide range of test cases,
                          some users with highly customized applications may
                          find that the platform doesn’t fully support every
                          niche requirement, which could limit its
                          effectiveness.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>What is Tricentis Tosca AI?:</h6>
                        <p>
                          Answer: Tricentis Tosca AI is an AI-powered test
                          automation platform that helps accelerate software
                          testing processes, providing comprehensive test
                          solutions for web, mobile, API, and cross-platform
                          applications.
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
              Alternatives to ChatGPT
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
                    <strong>Katalon Studio:</strong> Katalon Studio is an
                    all-in-one automation tool for web, API, mobile, and desktop
                    testing. It provides scriptless options and integrates well
                    with CI/CD and DevOps pipelines.
                  </li>
                  <li className="mb-3">
                    <strong>Rainforest QA, Inc.:</strong> Rainforest QA offers
                    no-code automated testing powered by AI and crowdtesting. It
                    enables fast, scalable QA for web applications and
                    integrates with CI/CD tools for continuous quality
                    assurance.
                  </li>
                  <li className="mb-3">
                    <strong>Cypress:</strong> Cypress is a fast, reliable
                    testing framework for web applications. It runs in the
                    browser, offering real-time reloading, time-travel
                    debugging, and supports JavaScript-based end-to-end testing.
                  </li>
                  <li className="mb-3">
                    <strong>LambdaTest:</strong>LambdaTest is a cloud-based
                    cross-browser testing platform. It allows manual and
                    automated testing across real browsers and devices,
                    supporting Selenium, Cypress, and integrating with major
                    CI/CD tools..
                  </li>
                  <li className="mb-3">
                    <strong>BrowserStack:</strong> BrowserStack provides real
                    device and browser testing in the cloud. It supports manual
                    and automated testing using Selenium, Appium, and more,
                    ensuring consistent user experience across platforms.
                  </li>
                  <li className="mb-3">
                    <strong>Testlio Inc.:</strong> Testlio is a managed app
                    testing platform combining human testers with automation. It
                    supports end-to-end, usability, and localization testing,
                    ensuring high-quality digital experiences across devices and
                    locations.
                  </li>

                  <li className="mb-3">
                    <strong>Watir:</strong> Watir (Web Application Testing in
                    Ruby) is an open-source library for automating web browsers.
                    It supports simple and readable tests, and works well for
                    functional and regression testing.
                  </li>

                  <li className="mb-3">
                    <strong>Sauce Labs:</strong> Sauce Labs offers cloud-based
                    testing for web and mobile apps. It supports Selenium,
                    Appium, and other frameworks, providing access to thousands
                    of browser-device combinations for comprehensive test
                    coverage.
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
                  q: "How does Appvance IQ work?",
                  a: "Appvance IQ uses artificial intelligence to autonomously generate, execute, and prioritize tests across your application stack, optimizing testing speed and accuracy.",
                },
                {
                  q: "What types of testing does Appvance IQ support?",
                  a: "Appvance IQ supports functional, performance, load, regression, API, unit, UI, and security testing.",
                },
                {
                  q: "What is AI-generated testing in Appvance IQ?",
                  a: "AI-generated testing leverages machine learning to automatically create and run tests based on actual user behavior and application changes.",
                },
                {
                  q: "Can Appvance IQ integrate with CI/CD pipelines?",
                  a: "Yes, Appvance IQ seamlessly integrates with CI/CD tools like Jenkins, GitLab, Azure DevOps, and Bamboo for continuous testing.",
                },
                {
                  q: "Does Appvance IQ support performance and load testing?",
                  a: "Yes, Appvance IQ enables realistic performance and load testing to simulate thousands of concurrent users and assess scalability.",
                },
                {
                  q: "What is unified testing in Appvance IQ?",
                  a: "Unified testing allows execution of all test types—functional, API, UI, load, and unit—within a single platform, eliminating tool fragmentation.",
                },
                {
                  q: "Can Appvance IQ test mobile apps?",
                  a: "Yes, Appvance IQ supports automated testing for both Android and iOS apps using real devices or emulators.",
                },
                {
                  q: "How does Appvance IQ prioritize tests?",
                  a: "Appvance IQ uses AI to analyze code changes and usage patterns, prioritizing critical tests that are most likely to detect defects.",
                },
                {
                  q: "Does Appvance IQ support scriptless testing?",
                  a: "Yes, Appvance IQ offers a scriptless interface and AI-generated tests, enabling non-developers to create and manage tests easily.",
                },
                {
                  q: "What is Appvance IQ's role in regression testing?",
                  a: "Appvance IQ identifies and retests affected areas of the application automatically, ensuring stability after each update.",
                },
                {
                  q: "Can Appvance IQ test web applications?",
                  a: "Yes, Appvance IQ automates web application testing across major browsers like Chrome, Firefox, Safari, and Edge.",
                },
                {
                  q: "Does Appvance IQ support API testing?",
                  a: "Yes, Appvance IQ enables robust API testing to validate endpoints for functionality, security, and performance.",
                },
                {
                  q: "How does Appvance IQ reduce test maintenance?",
                  a: "Appvance IQ offers self-healing tests that adapt to UI and logic changes automatically, minimizing manual updates.",
                },
                {
                  q: "What is self-healing test automation in Appvance IQ?",
                  a: "Self-healing automation updates test scripts on-the-fly when the application changes, reducing failures due to outdated scripts.",
                },
                {
                  q: "Can Appvance IQ run tests in parallel?",
                  a: "Yes, Appvance IQ supports parallel test execution across multiple browsers, devices, and environments to speed up testing.",
                },
                {
                  q: "Does Appvance IQ support cloud testing?",
                  a: "Yes, Appvance IQ offers cloud-based test execution for scalability and flexibility without infrastructure management.",
                },
                {
                  q: "What is the advantage of Appvance IQ’s AI engine?",
                  a: "The AI engine generates real-user-based tests, prioritizes high-risk areas, and adapts tests over time for increased coverage and reliability.",
                },
                {
                  q: "Can Appvance IQ generate test data automatically?",
                  a: "Yes, Appvance IQ can generate and manage test data automatically for functional and performance testing.",
                },
                {
                  q: "Does Appvance IQ support test versioning?",
                  a: "Yes, Appvance IQ tracks test versions, allowing teams to manage updates and rollbacks easily.",
                },
                {
                  q: "How does Appvance IQ support agile development?",
                  a: "By integrating into sprint cycles, running fast tests, and offering real-time results, Appvance IQ aligns testing with agile workflows.",
                },
                {
                  q: "Can Appvance IQ support security testing?",
                  a: "Appvance IQ integrates with security tools and can include security checks in your automated test plans.",
                },
                {
                  q: "How are test results reported in Appvance IQ?",
                  a: "Appvance IQ provides real-time dashboards, trend analytics, and detailed reports with failure logs and performance metrics.",
                },
                {
                  q: "Does Appvance IQ support testing across environments?",
                  a: "Yes, Appvance IQ can execute tests in different environments like staging, QA, and production for comprehensive validation.",
                },
                {
                  q: "What programming languages are supported in Appvance IQ?",
                  a: "Appvance IQ supports JavaScript, Python, and other major scripting languages for custom scripting alongside AI-generated tests.",
                },
                {
                  q: "Can Appvance IQ be used for end-to-end testing?",
                  a: "Yes, Appvance IQ supports end-to-end automation across web, mobile, API, and backend layers for complete coverage.",
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
        <Link
          to="/Aitools"
          className="d-inline-block text-white text-decoration-none ml-3 py-1"
        >
          <i className="bi bi-arrow-left me-2"></i>Back to Directory
        </Link>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between mb-5">
            {/* Left side (Text Section) */}
            <div style={{ flex: 1, paddingRight: "30px" }}>
              <img
                src={Logo}
                alt="Logo"
                className="me-3"
                style={{ width: "60px" }}
              />
              <h2>Appvance IQ</h2>
              <div className="text-warning mb-1">
                ⭐⭐⭐⭐⭐ 95% Satisfaction
              </div>
              <p>
                Appvance IQ is a powerful AI-powered test automation platform
                designed to streamline the software testing process. It
                integrates AI-driven testing capabilities, enabling teams to
                automate functional, performance, and regression tests across a
                variety of platforms. Appvance IQ allows for cross-browser and
                cross-platform testing, providing deep insights into the quality
                of applications through fast and efficient test automation.
              </p>
              <p>
                By using AI-powered testing, Appvance IQ reduces the manual
                effort involved in creating and executing tests, allowing teams
                to focus on higher-level activities such as application
                development and user experience. With support for cloud-based
                testing, continuous integration, mobile app testing, web app
                testing, and more, it’s an essential tool for modern agile teams
                looking to speed up their testing processes while maintaining
                high-quality standards.
              </p>
            </div>

            {/* Right side (Image Section) */}
            <div style={{ flex: 1, textAlign: "center" }}>
              <img
                src="https://images.indianexpress.com/2023/05/ChatGPT-Code-Interpreter.jpg"
                className="img-fluid rounded-3"
                style={{ maxWidth: "80%", height: "auto" }}
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

          <div className="bg-primary text-center text-light rounded-4 p-5 mt-5">
            <h4 className="mb-3">Ready to get started with ChatGPTI?</h4>
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

export default AppvanceAI;
