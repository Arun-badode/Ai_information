import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import applitools from "../../../../public/assets/Img/Ai for Resume/2.png";

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
const Applitool = () => {
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
                Elevate Your Visual Testing with Applitools AI
              </p>
              <h3 className="">
                AI-Driven, Scalable, and High-Accuracy Visual Test Automation
              </h3>
            </div>
            {[
              {
                icon: "🧠",
                title: "Visual AI-Powered Testing",
                desc: "Applitools AI uses advanced Visual AI to automate visual regression testing, identifying UI changes and inconsistencies without manual effort, ensuring faster and more reliable tests.",
              },
              {
                icon: "📱",
                title: "Cross-Platform Real Device Testing",
                desc: "Execute tests across real devices for Android, iOS, and major desktop browsers, ensuring your app’s UI looks flawless on all platforms and devices.",
              },
              {
                icon: "⚡",
                title: "Smart Visual Test Execution",
                desc: "Applitools AI enables intelligent test execution based on visual changes and impact analysis, optimizing test time and enhancing overall efficiency.",
              },
              {
                icon: "🔍",
                title: "AI-Powered Visual Insights",
                desc: "Leverage AI to analyze visual defects, detect flaky UI components, and optimize test coverage with insights from historical data, improving overall test quality.",
              },
              {
                icon: "🌐",
                title: "Network Simulation & Performance Testing",
                desc: "Simulate network conditions like 3G, 4G, and slow Wi-Fi to assess your app's visual performance under different connectivity scenarios, ensuring a smooth user experience.",
              },
              {
                icon: "🔧",
                title: "CI/CD & DevOps Ready",
                desc: "Seamlessly integrate with CI/CD tools like Jenkins, GitHub Actions, Azure DevOps, and more to enable continuous visual testing and faster release cycles.",
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
            <h3 className="text-center text-white mb-4 px-6 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is Applitools AI?",
                  a: "Applitools AI is a visual testing platform powered by AI that automates visual regression testing for web and mobile applications. It enhances test accuracy, speed, and coverage, reducing manual efforts and improving overall efficiency in the testing process.",
                },
                {
                  q: "How does Applitools AI improve test automation?",
                  a: "Applitools AI uses Visual AI to automate visual regression testing, allowing teams to detect UI changes and inconsistencies without manual intervention, ensuring faster feedback, better accuracy, and more reliable tests.",
                },
                {
                  q: "What types of testing are supported by Applitools AI?",
                  a: "Applitools AI supports visual UI testing, regression testing, cross-browser testing, responsive testing, mobile testing, and accessibility testing to ensure comprehensive coverage of all visual elements.",
                },
                {
                  q: "Can I run tests on real devices with Applitools AI?",
                  a: "Yes, Applitools AI supports testing on real devices, including Android and iOS, along with simulators and emulators to ensure thorough testing across various platforms.",
                },
                {
                  q: "Can Applitools AI test both Android and iOS apps?",
                  a: "Yes, Applitools AI provides automated visual testing for both Android and iOS applications, ensuring that the UI looks consistent across different devices.",
                },
                {
                  q: "Does Applitools AI support cross-browser testing?",
                  a: "Yes, Applitools AI supports automated testing across major browsers like Chrome, Firefox, Safari, and Edge to ensure consistent user experiences across all platforms.",
                },
                {
                  q: "Does Applitools AI support automated API testing?",
                  a: "While Applitools AI focuses primarily on visual testing, it can be integrated with other tools to enable end-to-end testing, including API testing.",
                },
                {
                  q: "Does Applitools AI support parallel testing?",
                  a: "Yes, Applitools AI supports parallel test execution across multiple browsers and devices, enabling faster testing and quicker feedback.",
                },
                {
                  q: "Is Applitools AI cloud-based?",
                  a: "Yes, Applitools AI is a cloud-based platform that offers scalability, easy collaboration, and reduced infrastructure maintenance, making it easy for teams to manage tests.",
                },
                {
                  q: "Does Applitools AI provide real-time test feedback?",
                  a: "Yes, Applitools AI provides real-time feedback with detailed visual reports, screenshots, and logs to help developers identify and resolve issues quickly.",
                },
                {
                  q: "How does Applitools AI detect visual defects?",
                  a: "Applitools AI uses advanced Visual AI to analyze UI elements and compare them against a baseline, detecting visual defects and inconsistencies that are critical to user experience.",
                },
                {
                  q: "Is Applitools AI suitable for Agile and DevOps teams?",
                  a: "Yes, Applitools AI integrates seamlessly into CI/CD pipelines, supporting continuous testing in Agile and DevOps workflows, allowing teams to test early and often.",
                },
                {
                  q: "What programming languages and frameworks are supported by Applitools AI?",
                  a: "Applitools AI supports integration with various testing frameworks and languages, including Selenium, Cypress, Playwright, Appium, and many more for visual testing.",
                },
                {
                  q: "What is smart visual testing in Applitools AI?",
                  a: "Smart visual testing in Applitools AI prioritizes tests based on visual changes and the impact on the user experience, enabling more efficient execution and reducing overall test times.",
                },
                {
                  q: "Can Applitools AI simulate different network conditions?",
                  a: "Applitools AI focuses on visual testing and does not simulate network conditions. However, it can be integrated with other tools to test app performance under various network conditions.",
                },
                {
                  q: "Does Applitools AI offer accessibility testing?",
                  a: "Yes, Applitools AI helps ensure applications meet accessibility standards, such as WCAG and ADA, by identifying visual defects related to accessibility during test execution.",
                },
                {
                  q: "Does Applitools AI support manual testing?",
                  a: "While Applitools AI is focused on automating visual testing, it also provides support for manual review processes to handle complex scenarios and edge cases.",
                },
                {
                  q: "Does Applitools AI provide screenshots and video recordings?",
                  a: "Yes, every visual test in Applitools AI is accompanied by screenshots and detailed reports to help developers diagnose and fix visual issues more easily.",
                },
                {
                  q: "How does Applitools AI handle test maintenance?",
                  a: "Applitools AI uses self-healing technology to automatically adjust tests when UI changes are detected, minimizing the need for manual test maintenance.",
                },
                {
                  q: "Is Applitools AI secure for enterprise use?",
                  a: "Yes, Applitools AI meets high security standards, including compliance with SOC 2 Type II, ISO 27001, and GDPR, ensuring its suitability for enterprise use.",
                },
                {
                  q: "What integrations are available with Applitools AI?",
                  a: "Applitools AI integrates with popular CI/CD tools like Jenkins, GitHub Actions, Azure DevOps, as well as collaboration tools like Slack and JIRA for seamless workflows.",
                },
                {
                  q: "Does Applitools AI provide test analytics?",
                  a: "Yes, Applitools AI offers detailed analytics, including dashboards to track test trends, pass/fail rates, coverage gaps, and other insights to help optimize the testing process.",
                },
                {
                  q: "What kind of support does Applitools AI offer?",
                  a: "Applitools AI offers 24/7 support, onboarding assistance, and comprehensive documentation to help teams adopt and use the platform effectively.",
                },
                {
                  q: "Does Applitools AI offer a free trial?",
                  a: "Yes, Applitools AI offers a free trial, allowing you to explore its features and see how it can improve your testing process before committing to the platform.",
                },
                {
                  q: "How easy is it to get started with Applitools AI?",
                  a: "Getting started with Applitools AI is simple—just sign up, integrate your testing framework, and start running visual tests with minimal setup.",
                },
                {
                  q: "What sets Applitools AI apart from other testing platforms?",
                  a: "Applitools AI stands out with its advanced Visual AI, self-healing capabilities, seamless integrations, real-time feedback, and focus on automating visual testing to enhance the user experience.",
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
          <div className="row g-4 px-5">
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
                    Why Use Applitools AI?
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
                      <strong>Speed and Efficiency:</strong> Applitools AI
                      speeds up the testing process by automating visual
                      regression testing, reducing manual efforts and allowing
                      developers to focus more on writing code rather than
                      checking UI elements.
                    </li>
                    <li className="mb-3">
                      <strong>Accuracy:</strong> Unlike traditional
                      pixel-by-pixel comparisons, Applitools Visual AI
                      understands and analyzes the context of visual elements,
                      detecting changes that are critical to user experience and
                      identifying UI design inconsistencies.
                    </li>
                    <li className="mb-3">
                      <strong>Cross-Device Compatibility:</strong> Applitools
                      ensures that applications look great across all devices,
                      including desktops, smartphones, and tablets, with
                      responsive web design testing that adapts to various
                      screen sizes.
                    </li>
                    <li className="mb-3">
                      <strong>Automates UI Testing:</strong> Applitools
                      automates the entire UI testing process, from image
                      validation to UI consistency across platforms, reducing
                      the need for repetitive manual testing and saving valuable
                      time.
                    </li>
                    <li className="mb-3">
                      <strong>Visual Consistency:</strong> Applitools ensures
                      that the UI remains consistent across different devices,
                      platforms, and browsers, which is essential for
                      maintaining a seamless and uniform experience for users.
                    </li>
                    <li className="mb-3">
                      <strong>Seamless Integration:</strong> Applitools AI
                      integrates seamlessly with various testing frameworks,
                      CI/CD systems, and cloud testing environments, making it
                      easy to include in your existing development workflows.
                    </li>
                    <li className="mb-3">
                      <strong>Real-Time Feedback:</strong> Applitools provides
                      real-time feedback on the visual changes or defects
                      detected, allowing developers and testers to quickly
                      address issues and reduce the time to market.
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
                    <strong>Advanced AI-Powered Visual Testing:</strong>{" "}
                    Applitools Visual AI uses advanced machine learning models
                    to detect visual issues that traditional testing methods
                    might miss, enhancing the accuracy and reliability of visual
                    tests.
                  </li>
                  <li className="mb-2">
                    <strong>Automated UI and Regression Testing:</strong>{" "}
                    Applitools automates UI testing and visual regression
                    testing, eliminating the need for time-consuming manual
                    checks and making the testing process much faster and more
                    scalable.
                  </li>
                  <li className="mb-2">
                    <strong>Cross-Platform Testing:</strong> Applitools ensures
                    consistent performance across cross-platform and
                    cross-device environments, helping businesses ensure their
                    UI looks good on all platforms and browsers.
                  </li>
                  <li className="mb-2">
                    <strong>Cloud-Based Test Management:</strong> Applitools
                    offers cloud-based testing, making it easy to scale testing
                    efforts, collaborate remotely, and access real-time test
                    results from any location.
                  </li>
                  <li className="mb-2">
                    <strong>Efficient Performance:</strong> By automating
                    repetitive testing tasks, Applitools AI improves the overall
                    testing performance, reducing bottlenecks in the development
                    process and accelerating release cycles.
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
                    <strong>Dependence on Image-Based Testing:</strong> While
                    Applitools Visual AI is highly efficient at detecting visual
                    issues, it may not capture functional errors, requiring a
                    hybrid approach that combines both functional testing and
                    visual validation for comprehensive coverage.
                  </li>
                  <li className="mb-2">
                    <strong>Learning Curve:</strong> Implementing Applitools AI
                    within a testing workflow may have a learning curve for
                    teams that are not familiar with AI-powered testing tools or
                    visual regression testing.
                  </li>
                  <li className="mb-2">
                    <strong>Initial Setup Costs:</strong> The initial setup of
                    Applitools AI, including integration into existing systems
                    and workflows, may involve additional costs in terms of time
                    and resources.
                  </li>
                  <li className="mb-2">
                    <strong>Subscription-Based Pricing:</strong> Applitools
                    offers subscription-based pricing, which may be a concern
                    for smaller businesses with limited budgets compared to
                    traditional open-source testing tools.
                  </li>
                  <li className="mb-2">
                    <strong>Not Suited for Non-UI Testing:</strong> Applitools
                    AI is specialized in UI testing and may not be the best
                    choice for non-UI testing, such as performance, security, or
                    API testing, which would need additional tools for
                    comprehensive test coverage.
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
                    <strong>Functionize AI</strong>: An AI-powered test
                    automation platform offering machine learning-driven test
                    creation, execution, and maintenance for web, mobile, and
                    API testing.
                  </li>
                  <li className="mb-2">
                    <strong>Testim</strong>: Uses machine learning to create
                    stable, self-healing tests with an intuitive visual
                    interface, enabling teams to accelerate testing processes
                    and minimize test maintenance.
                  </li>
                  <li className="mb-2">
                    <strong>mabl</strong>: AI-powered test automation platform
                    with built-in intelligent features for creating, executing,
                    and maintaining tests within CI/CD pipelines, ensuring fast
                    and reliable feedback.
                  </li>
                  <li className="mb-2">
                    <strong>Applitools</strong>: Focuses on visual testing,
                    leveraging AI to detect visual defects and ensure UI
                    consistency across various browsers and devices, providing
                    powerful visual regression testing.
                  </li>
                  <li className="mb-2">
                    <strong>ACCELQ</strong>: A no-code automation platform
                    leveraging AI for autonomous test creation, predictive
                    maintenance, and seamless integration with business
                    workflows.
                  </li>
                  <li className="mb-2">
                    <strong>Tricentis Tosca AI</strong>: A model-based test
                    automation solution enhanced with AI to optimize test
                    execution, improve accuracy, and reduce maintenance overhead
                    in complex enterprise environments.
                  </li>
                  <li className="mb-2">
                    <strong>Rainforest QA</strong>: A cloud-based testing
                    platform that integrates AI to automate functional and
                    regression testing, ensuring scalability and speed with
                    minimal maintenance effort.
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

      <div className="bg-dark text-light">
        <div className="bg-dark text-light ">
          <div className="container">
            <div className="row d-flex align-items-center justify-content-between mb-1">
              {/* Left side (Text Section) */}
              <div
                style={{ paddingRight: "30px" }}
                className="col-md-6 col-12 order-2 order-md-1"
              >
                <p className="text-primary">Write better, faster</p>
                <h1>Applitools AI</h1>
                <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
                <p>
                  Applitools AI is a cutting-edge visual testing and AI-powered
                  automated testing tool designed for developers and QA
                  engineers. It uses visual AI to provide highly accurate and
                  efficient visual testing solutions for web and mobile
                  applications, enabling businesses to automate UI and
                  regression testing processes. Applitools integrates seamlessly
                  into CI/CD pipelines and works on cloud-based testing
                  platforms, offering an automated way to ensure high-quality
                  user interfaces across different devices, platforms, and
                  browsers
                </p>

                <p>
                  The Applitools Visual AI is unique in that it doesn’t just
                  check for pixel-perfect comparisons but can also detect visual
                  bugs that could impact user experience. Applitools helps speed
                  up visual regression testing and functional testing with
                  advanced image comparison, screenshot comparisons, and
                  real-time feedback
                </p>

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

              {/* Right side (Add your content here) */}
              <div className="col-md-6 col-12 order-1 order-md-2">
                {/* Example: Image or any other content */}
                <img
                  src={applitools}
                  alt="Applitools AI"
                  className="img-fluid rounded"
                />
              </div>
            </div>
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
              How Applitools AI Works?
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
                    Automated Testing:
                  </h5>
                  <p style={{ color: "#fff", margin: 0 }}>
                    Applitools AI automates visual testing for mobile and web
                    applications, detecting visual defects such as layout
                    changes, missing elements, or design inconsistencies across
                    different devices and browsers.
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
                    Cross-Browser Testing:
                  </h5>
                  <p style={{ color: "#fff", margin: 0 }}>
                    Applitools supports cross-browser testing, ensuring the UI
                    is consistent across all supported web browsers and
                    versions, allowing you to identify issues before they impact
                    your users.
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
                    Mobile and Web Testing:
                  </h5>
                  <p style={{ color: "#fff", margin: 0 }}>
                    Applitools offers solutions for both mobile and web testing,
                    enabling teams to perform thorough testing on apps and
                    websites across various platforms and devices without manual
                    intervention.
                  </p>
                  <div className="step3">3</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tab Navigation */}
        <ul className="nav nav-tabs custom-tabs mb-4 px-5">
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
    </>
  );
};

export default Applitool;
