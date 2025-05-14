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
const Testimio = () => {
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
              <h3 className="">Diverse AI Avatars & Multilingual Support</h3>
            </div>
            {[
              {
                icon: "🧑‍🎤",
                title: "AI-Generated Avatars",
                desc: "Create lifelike presenters and narrators from a variety of avatar options, customizable for different tones, accents, and expressions.",
              },
              {
                icon: "🌍",
                title: "Multilingual Voiceover Support",
                desc: "Generate voiceovers in over 40 languages and accents with natural-sounding AI voices.",
              },
              {
                icon: "🎬",
                title: "Script-to-Video Automation",
                desc: "Turn written scripts into dynamic videos with automatic scene generation, transitions, and avatar narration.",
              },
              {
                icon: "📊",
                title: "AI-Powered Editing Tools",
                desc: "Leverage AI tools to trim, resize, add subtitles, and visually enhance videos without manual effort.",
              },
              {
                icon: "📱",
                title: "Cross-Platform Export",
                desc: "Export videos optimized for social media, websites, learning platforms, and more with just a click.",
              },
              {
                icon: "📈",
                title: "Performance Insights",
                desc: "Track engagement, completion rates, and viewer interactions with an integrated analytics dashboard.",
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
                  "q": "What is Testim.io?",
                  "a": "Testim.io is a cloud-based AI-powered platform designed to automate the testing of web and mobile applications with real-time feedback and advanced analytics."
                },
                {
                  "q": "How does Testim.io enhance test automation?",
                  "a": "Testim.io leverages AI to automatically generate and optimize test scripts, improving test coverage and execution speed, while reducing human error."
                },
                {
                  "q": "What types of testing does Testim.io support?",
                  "a": "Testim.io supports functional, regression, performance, API, and UI testing across web and mobile platforms."
                },
                {
                  "q": "Can I run tests on real devices with Testim.io?",
                  "a": "Yes, Testim.io allows testing on real devices and browsers to simulate real-world user experiences for both mobile and web applications."
                },
                {
                  "q": "How does Testim.io detect flaky tests?",
                  "a": "Testim.io uses AI to analyze test history and failure patterns, automatically identifying and marking flaky tests that fail intermittently."
                },
                {
                  "q": "Is Testim.io suitable for agile and DevOps environments?",
                  "a": "Yes, Testim.io integrates seamlessly into CI/CD pipelines, supporting continuous testing and real-time feedback for agile teams."
                },
                {
                  "q": "Can I test both Android and iOS apps with Testim.io?",
                  "a": "Yes, Testim.io supports automated testing for both Android and iOS apps using real devices, ensuring comprehensive mobile testing."
                },
                {
                  "q": "What programming languages are supported in Testim.io?",
                  "a": "Testim.io supports JavaScript, along with integrations with popular testing frameworks like Selenium, Appium, and Jest."
                },
                {
                  "q": "How does AI help in test execution within Testim.io?",
                  "a": "AI in Testim.io helps prioritize test execution based on risk factors, usage data, and historical failures to optimize test coverage and execution speed."
                },
                {
                  "q": "Does Testim.io support parallel testing?",
                  "a": "Yes, Testim.io allows parallel testing across different devices and browsers to speed up the test cycle and improve efficiency."
                },
                {
                  "q": "Can I run cross-browser tests using Testim.io?",
                  "a": "Yes, Testim.io supports cross-browser testing on all major browsers, including Chrome, Firefox, Safari, Edge, and Internet Explorer."
                },
                {
                  "q": "Does Testim.io provide real-time test reporting?",
                  "a": "Yes, Testim.io provides live dashboards, video replays, logs, and analytics for every test session to give immediate feedback and actionable insights."
                },
                {
                  "q": "Is Testim.io cloud-based?",
                  "a": "Yes, Testim.io operates in the cloud, offering scalable and flexible testing capabilities with real device access and minimal infrastructure maintenance."
                },
                {
                  "q": "What integrations does Testim.io offer?",
                  "a": "Testim.io integrates with Jenkins, CircleCI, GitHub Actions, Azure DevOps, Slack, JIRA, and many other popular tools and platforms."
                },
                {
                  "q": "What is Testim.io’s smart test execution?",
                  "a": "Testim.io’s smart test execution uses AI to select the most relevant tests based on recent code changes and past test failures, improving overall testing efficiency."
                },
                {
                  "q": "Does Testim.io support test analytics?",
                  "a": "Yes, Testim.io offers detailed test analytics, including pass/fail trends, flakiness detection, and risk-based insights to help improve testing strategies."
                },
                {
                  "q": "Can I simulate network conditions with Testim.io?",
                  "a": "Yes, Testim.io allows you to simulate various network conditions such as 3G, 4G, Wi-Fi, and low bandwidth scenarios to test app performance under real-world conditions."
                },
                {
                  "q": "What is Testim.io’s approach to mobile test automation?",
                  "a": "Testim.io combines AI-driven insights with automation to provide comprehensive mobile test coverage, including testing for native apps and mobile web apps."
                },
                {
                  "q": "Does Testim.io offer accessibility testing?",
                  "a": "Yes, Testim.io includes features for accessibility testing and compliance validation to ensure your app meets required standards."
                },
                {
                  "q": "Can I use Testim.io for manual testing?",
                  "a": "Yes, Testim.io supports manual testing sessions, allowing teams to run exploratory tests on real devices in addition to automated tests."
                },
                {
                  "q": "Does Testim.io provide screenshots and video recording?",
                  "a": "Yes, all test sessions in Testim.io are recorded with screenshots and video logs to assist in debugging and providing clear visual feedback."
                },
                {
                  "q": "Is Testim.io secure for enterprise use?",
                  "a": "Yes, Testim.io follows strict security standards, including data encryption and compliance with industry regulations, making it suitable for enterprise-grade applications."
                },
                {
                  "q": "How does Testim.io handle test maintenance?",
                  "a": "Testim.io uses AI to automatically suggest and apply updates to selectors and test scenarios, reducing the effort required for ongoing test maintenance."
                },
                {
                  "q": "What kind of support is available with Testim.io?",
                  "a": "Testim.io offers 24/7 customer support, onboarding assistance, comprehensive documentation, and expert consulting services to ensure successful implementation."
                },
                {
                  "q": "Does Testim.io offer a free trial?",
                  "a": "Yes, Testim.io offers a free trial that allows you to explore its features and test automation capabilities before committing to a subscription."
                },
                {
                  "q": "What makes Testim.io different from other testing tools?",
                  "a": "Testim.io stands out with its AI-driven test optimization, seamless CI/CD integration, real-time feedback, and cloud-based platform for scalable, efficient testing."
                },
                {
                  "q": "How easy is it to set up Testim.io?",
                  "a": "Testim.io is easy to set up, with user-friendly interfaces and integrations with existing CI/CD tools to streamline the process and accelerate testing."
                },
                {
                  "q": "Can Testim.io be used for performance testing?",
                  "a": "Yes, Testim.io supports performance testing to help identify bottlenecks and optimize the performance of web and mobile applications."
                },
                {
                  "q": "Does Testim.io support automated API testing?",
                  "a": "Yes, Testim.io supports API testing, allowing teams to automate the testing of APIs and validate their functionality and performance."
                },
                {
                  "q": "Can Testim.io integrate with my existing testing framework?",
                  "a": "Yes, Testim.io integrates with existing testing frameworks like Selenium, Appium, and many others to enhance your current test automation setup."
                },
                {
                  "q": "How does Testim.io improve mobile app testing?",
                  "a": "Testim.io automates mobile testing for both native and mobile web apps, offering full coverage and ensuring high-quality user experiences on mobile devices."
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
                    Why Use Testim.io?
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
                      <strong>Increased Test Coverage:</strong> Automates testing across various platforms and environments to reduce the risk of undetected defects.
                    </li>
                    <li className="mb-3">
                      <strong>Efficiency and Speed:</strong> AI-powered automation speeds up test execution and bug identification by handling repetitive tasks and optimizing test cases.
                    </li>
                    <li className="mb-3">
                      <strong>Continuous Testing in DevOps:</strong> Seamless integration with DevOps pipelines enables continuous testing and real-time feedback for higher quality releases.
                    </li>
                    <li className="mb-3">
                      <strong>Enhanced Accuracy:</strong> AI-driven testing minimizes human error and uses historical data to improve test precision and relevance.
                    </li>
                    <li className="mb-3">
                      <strong>Improved Mobile App Testing:</strong> Enables automation for native and mobile web apps, ensuring end-to-end validation for mobile-first experiences.
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
                    <strong>AI-Powered Optimization:</strong> Ensures only the most relevant tests are run, boosting efficiency and speeding up releases.
                  </li>
                  <li className="mb-2">
                    <strong>Comprehensive Test Automation:</strong> Supports functional, regression, API, performance, and UI testing—covering all major testing needs.
                  </li>
                  <li className="mb-2">
                    <strong>Seamless CI/CD Integration:</strong> Integrates easily with CI/CD pipelines, enabling continuous feedback and faster development cycles.
                  </li>
                  <li className="mb-2">
                    <strong>Cross-Platform Support:</strong> Allows testing across web, mobile, and cloud platforms, making it adaptable to different environments.
                  </li>
                  <li className="mb-2">
                    <strong>Real-Time Feedback:</strong> Provides instant insights to detect and resolve issues early in the development lifecycle.
                  </li>
                  <li className="mb-2">
                    <strong>Scalable and Cloud-Based:</strong> Cloud infrastructure allows for on-demand scaling without infrastructure headaches.
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
                    <strong>Learning Curve for New Users:</strong> May require time to adapt, especially for those unfamiliar with test automation or CI/CD setups.
                  </li>
                  <li className="mb-2">
                    <strong>Potential Overhead for Small Teams:</strong> Smaller teams might find its full feature set more than needed for their scale.
                  </li>
                  <li className="mb-2">
                    <strong>Pricing:</strong> Can be relatively expensive, especially for startups or smaller businesses with limited budgets.
                  </li>
                  <li className="mb-2">
                    <strong>Cloud Dependency:</strong> Requires reliable internet access; not ideal for organizations that prefer on-premise solutions.
                  </li>
                  <li className="mb-2">
                    <strong>Complex Setup for Advanced Features:</strong> Advanced functions like API or performance testing might need more technical expertise.
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
                    <strong>Playwright</strong>: Open-source end-to-end testing framework from Microsoft supporting modern web apps with powerful automation capabilities.
                  </li>
                  <li className="mb-2">
                    <strong>Cypress</strong>: Developer-friendly testing tool for frontend applications with real-time reloading and detailed debugging.
                  </li>
                  <li className="mb-2">
                    <strong>Rainforest QA</strong>: No-code test automation solution focused on crowd-sourced and automated browser testing.
                  </li>
                  <li className="mb-2">
                    <strong>Katalon Studio</strong>: Combines low-code and advanced scripting to support web, mobile, API, and desktop test automation.
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
              <h1>Testim.io</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Testim.io is an AI-powered test automation platform designed to help teams automate software testing across different environments. It uses advanced AI-driven testing capabilities to streamline the testing process, offering features such as cross-platform testing, performance testing, regression testing, mobile testing, API testing, and more. The platform is particularly useful for teams adopting continuous integration and continuous testing practices, as it integrates seamlessly into DevOps pipelines, providing real-time feedback during test execution.
              </p>

              <p>
                Testim.io focuses on automating both functional and non-functional testing and utilizes machine learning to improve test optimization and execution speed. It’s suitable for testing complex applications, mobile apps, web apps, and SaaS platforms, offering significant advantages in efficiency, accuracy, and scalability.
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
                How Syte Testim.io Works?
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
                      Test Automation Across Platforms
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Testim.io automates tests for web applications, mobile apps, APIs, and services across multiple platforms, including desktop and mobile devices. It helps teams ensure that their applications work consistently across various browsers, operating systems, and devices.
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
                      AI-Powered Test Optimization:
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Testim.io leverages AI to optimize tests, analyzing the results of previous tests to refine and improve the execution of new ones. This reduces redundancy, accelerates testing, and ensures tests are focused on the most critical areas.
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
                      Continuous Integration and Continuous Testing:
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      The platform seamlessly integrates into CI/CD pipelines, enabling continuous testing and providing instant feedback. This supports rapid software development cycles, ensuring that any issues are identified and resolved early in the development process.
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

export default Testimio;
