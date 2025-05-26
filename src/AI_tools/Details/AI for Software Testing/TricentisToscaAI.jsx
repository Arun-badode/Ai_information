import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import tricentisSS1 from '../../../../public/assets/Img/AI for software testing/tricentisSS1.png';
import tricentisSS2 from '../../../../public/assets/Img/AI for software testing/tricentisSS2.png';
 import tricentis  from '../../../../public/assets/Img/AI for software testing/Tricentis.jpeg';

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
const TricentisToscaAI = () => {
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
                Elevate Your QA with Tricentis Tosca AI
              </p>
              <h3 className="">
                AI-Driven, Scalable, and Low-Maintenance Test Automation
              </h3>
            </div>
            {[
              {
                icon: "🧠",
                title: "Self-Healing Tests",
                desc: "Tricentis Tosca AI automatically updates tests when UI elements change using AI-driven self-healing technology, significantly reducing manual maintenance and ensuring stable tests.",
              },
              {
                icon: "📱",
                title: "Cross-Platform Real Device Testing",
                desc: "Execute tests across a wide range of real devices and browsers, ensuring your app’s performance and functionality on Android, iOS, and all major desktop platforms.",
              },
              {
                icon: "⚡",
                title: "Smart Parallel Execution",
                desc: "Tricentis Tosca AI enables intelligent parallel execution of tests across environments, shortening test cycles and delivering quick feedback for faster development.",
              },
              {
                icon: "🔍",
                title: "AI-Powered Test Insights",
                desc: "Use AI to analyze failure trends, detect flaky tests, and optimize test coverage based on historical data, providing actionable insights to improve test efficiency.",
              },
              {
                icon: "🌐",
                title: "Network Simulation & Performance Testing",
                desc: "Simulate various network conditions such as 3G, 4G, and slow Wi-Fi to assess your app’s performance under real-world conditions and ensure optimal reliability.",
              },
              {
                icon: "🔧",
                title: "CI/CD & DevOps Ready",
                desc: "Seamlessly integrate with CI/CD tools like Jenkins, GitHub Actions, Azure DevOps, and more, enabling continuous testing, full traceability, and faster release cycles.",
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
                  q: "What is Tricentis Tosca AI?",
                  a: "Tricentis Tosca AI is a test automation platform that uses artificial intelligence to streamline and accelerate testing for web, mobile, and API applications. It aims to improve testing efficiency, reduce maintenance, and enhance quality.",
                },
                {
                  q: "How does Tricentis Tosca AI improve test automation?",
                  a: "Tricentis Tosca AI leverages machine learning and AI to automatically create, execute, and maintain tests, reducing manual effort and improving speed and accuracy across testing processes.",
                },
                {
                  q: "What types of testing are supported by Tricentis Tosca AI?",
                  a: "Tricentis Tosca AI supports functional, regression, performance, API, mobile, cross-browser, and accessibility testing to provide comprehensive test coverage.",
                },
                {
                  q: "Can I run tests on real devices with Tricentis Tosca AI?",
                  a: "Yes, Tosca AI supports testing on real devices as well as emulators for both Android and iOS applications.",
                },
                {
                  q: "Can Tricentis Tosca AI test both Android and iOS apps?",
                  a: "Yes, Tricentis Tosca AI provides automated testing for both Android and iOS apps on real devices and simulators.",
                },
                {
                  q: "Does Tricentis Tosca AI support cross-browser testing?",
                  a: "Yes, Tosca AI supports automated testing across major browsers like Chrome, Firefox, Safari, and Edge to ensure consistent user experiences.",
                },
                {
                  q: "Does Tricentis Tosca AI support automated API testing?",
                  a: "Yes, Tosca AI integrates automated API testing into your workflows, enabling you to test backend services alongside UI testing.",
                },
                {
                  q: "Does Tricentis Tosca AI support parallel testing?",
                  a: "Yes, Tosca AI allows parallel test execution across different browsers, devices, and environments, accelerating the testing process.",
                },
                {
                  q: "Is Tricentis Tosca AI cloud-based?",
                  a: "Yes, Tosca AI is a cloud-based platform that offers scalability, easy collaboration, and reduced infrastructure maintenance.",
                },
                {
                  q: "Does Tricentis Tosca AI provide real-time test feedback?",
                  a: "Yes, Tosca AI offers real-time feedback with detailed logs, screenshots, and video recordings to help developers identify and fix issues faster.",
                },
                {
                  q: "How does Tricentis Tosca AI detect flaky tests?",
                  a: "Tosca AI uses AI-powered analysis and historical test data to identify flaky or unstable tests and provides suggestions for improving them.",
                },
                {
                  q: "Is Tricentis Tosca AI suitable for Agile and DevOps teams?",
                  a: "Yes, Tosca AI integrates seamlessly into CI/CD pipelines and supports continuous testing, making it ideal for Agile and DevOps environments.",
                },
                {
                  q: "What programming languages and frameworks are supported by Tricentis Tosca AI?",
                  a: "Tricentis Tosca AI supports integration with several frameworks and languages, including Selenium, Appium, and REST APIs, among others.",
                },
                {
                  q: "What is smart test execution in Tricentis Tosca AI?",
                  a: "Smart test execution in Tosca AI prioritizes test cases based on code changes, historical data, and impact analysis to reduce overall test execution time.",
                },
                {
                  q: "Can Tricentis Tosca AI simulate different network conditions?",
                  a: "Yes, Tosca AI allows you to simulate various network conditions, such as 3G, 4G, and slow Wi-Fi, to assess app performance under different connectivity scenarios.",
                },
                {
                  q: "Does Tricentis Tosca AI offer accessibility testing?",
                  a: "Yes, Tosca AI helps ensure your applications meet accessibility standards like WCAG and ADA by detecting accessibility issues during test execution.",
                },
                {
                  q: "Does Tricentis Tosca AI support manual testing?",
                  a: "Yes, alongside automated testing, Tosca AI offers support for live interactive testing across devices and browsers.",
                },
                {
                  q: "Does Tricentis Tosca AI provide screenshots and video recordings?",
                  a: "Yes, every test execution in Tosca AI comes with logs, screenshots, and video recordings to facilitate easier debugging and issue validation.",
                },
                {
                  q: "How does Tricentis Tosca AI handle test maintenance?",
                  a: "Tosca AI uses self-healing technology to automatically update tests when application changes are detected, minimizing the need for manual maintenance.",
                },
                {
                  q: "Is Tricentis Tosca AI secure for enterprise use?",
                  a: "Yes, Tosca AI complies with high security standards such as SOC 2 Type II, ISO 27001, and GDPR, ensuring its suitability for enterprise use.",
                },
                {
                  q: "What integrations are available with Tricentis Tosca AI?",
                  a: "Tricentis Tosca AI integrates with popular CI/CD tools like Jenkins, GitHub Actions, Azure DevOps, as well as collaboration tools like Slack and JIRA.",
                },
                {
                  q: "Does Tricentis Tosca AI provide test analytics?",
                  a: "Yes, Tosca AI offers in-depth analytics, including detailed dashboards to track test trends, pass/fail rates, coverage gaps, and other insights.",
                },
                {
                  q: "What kind of support does Tricentis Tosca AI offer?",
                  a: "Tricentis Tosca AI provides 24/7 support, onboarding assistance, and comprehensive documentation to ensure smooth adoption and use of the platform.",
                },
                {
                  q: "Does Tricentis Tosca AI offer a free trial?",
                  a: "Yes, Tricentis Tosca AI offers a free trial, allowing you to explore its features before committing to the platform.",
                },
                {
                  q: "How easy is it to get started with Tricentis Tosca AI?",
                  a: "Getting started with Tosca AI is simple—just sign up, integrate your repository or testing framework, and start testing with minimal setup.",
                },
                {
                  q: "What sets Tricentis Tosca AI apart from other testing platforms?",
                  a: "Tosca AI stands out with its AI-driven test automation, self-healing capabilities, smart execution, real-time analytics, and seamless integration with the entire development lifecycle.",
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
                src={tricentisSS1}
                alt="TricentisToscal"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={tricentisSS2}
                alt="TricentisToscal"
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
                    Why Use Tricentis Tosca AI?
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
                      <strong>Speed and Efficiency:</strong> Tosca AI
                      accelerates the testing process by automating repetitive
                      tasks, running tests in parallel, and providing real-time
                      feedback, enabling faster bug identification and
                      resolution.
                    </li>
                    <li className="mb-3">
                      <strong>AI-Powered Accuracy:</strong> Leveraging AI, Tosca
                      AI enhances test accuracy by detecting issues that
                      traditional testing may miss. It automatically adapts to
                      changes in the application, ensuring robust and reliable
                      tests.
                    </li>
                    <li className="mb-3">
                      <strong>Cross-Platform Support:</strong> Tosca AI supports
                      automated testing for both web and mobile apps, ensuring a
                      consistent user experience across multiple devices,
                      browsers, and platforms.
                    </li>
                    <li className="mb-3">
                      <strong>Seamless Integration with CI/CD:</strong> Tosca AI
                      integrates with popular CI/CD tools like Jenkins, GitHub,
                      and Bitbucket, enabling continuous testing and smooth
                      updates to your development and deployment pipelines.
                    </li>
                    <li className="mb-3">
                      <strong>Scriptless Automation:</strong> Tosca AI allows
                      users to automate tests without writing complex scripts,
                      making it accessible to users with minimal programming
                      experience and boosting team efficiency.
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
                    <strong>No Coding Required:</strong> Tosca AI offers
                    scriptless automation, making it user-friendly and
                    accessible to non-technical users without the need for deep
                    programming knowledge.
                  </li>
                  <li className="mb-2">
                    <strong>Scalability:</strong> Tosca AI’s cloud-based
                    infrastructure allows teams to scale their testing efforts
                    without worrying about infrastructure, making it suitable
                    for both small teams and large enterprises.
                  </li>
                  <li className="mb-2">
                    <strong>Comprehensive Testing:</strong> Supports a wide
                    range of testing types such as functional, regression, UI,
                    performance, and API testing, providing a holistic testing
                    solution.
                  </li>
                  <li className="mb-2">
                    <strong>Cross-Browser and Cross-Platform Support:</strong>{" "}
                    Enables automated testing across browsers, mobile platforms,
                    and devices to ensure consistent functionality across all
                    environments.
                  </li>
                  <li className="mb-2">
                    <strong>Faster Test Execution:</strong> Tosca AI can run
                    tests in parallel and optimize test execution, significantly
                    speeding up the testing process and reducing time for each
                    cycle.
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
                    <strong>Learning Curve for New Users:</strong> While
                    user-friendly, new users unfamiliar with test automation
                    tools or AI-driven testing may face a learning curve and
                    need time to become proficient.
                  </li>
                  <li className="mb-2">
                    <strong>Cost:</strong> Tosca AI can be more expensive than
                    open-source alternatives, potentially posing a challenge for
                    small businesses or startups with tight budgets.
                  </li>
                  <li className="mb-2">
                    <strong>
                      Limited Customization for Complex Use Cases:
                    </strong>{" "}
                    Although Tosca AI covers most testing scenarios, it may not
                    fully support highly customized workflows or specific niche
                    requirements.
                  </li>
                  <li className="mb-2">
                    <strong>Dependence on Cloud Infrastructure:</strong> Being a
                    cloud-based solution, Tosca AI requires a stable internet
                    connection and may not be suitable for teams with strict
                    security policies or environments with limited cloud access.
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
                    <strong>Testim</strong>: AI-powered test automation tool
                    that uses machine learning for creating stable, self-healing
                    tests with an intuitive visual interface.
                  </li>
                  <li className="mb-2">
                    <strong>mabl</strong>: An intelligent test automation
                    platform with built-in AI for easy test creation, execution,
                    and maintenance within CI/CD pipelines.
                  </li>
                  <li className="mb-2">
                    <strong>Applitools</strong>: Focused on visual testing, it
                    uses AI to detect visual bugs and ensure UI consistency
                    across browsers, viewports, and devices.
                  </li>
                  <li className="mb-2">
                    <strong>ACCELQ</strong>: A no-code automation platform
                    leveraging AI for autonomous test creation, predictive
                    maintenance, and business-aligned testing workflows.
                  </li>
                  <li className="mb-2">
                    <strong>Tricentis Tosca AI</strong>: Combines model-based
                    test automation with AI to accelerate testing, improve
                    accuracy, and reduce maintenance in complex enterprise
                    environments.
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
          className="d-inline-block text-white text-decoration-none  mt-3 ml-3 py-1 px-2 ms-5 border rounded-sm"
        >
          <i className="bi bi-arrow-left me-2"></i>Back  {" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
         <div className="row d-flex align-items-center justify-content-between mb-1">
  {/* Image Section - first on mobile, right on desktop */}
  <div
    className="col-12 col-md-6 order-1 order-md-2 mb-4 mb-md-0 text-center"
    style={{
      textAlign: "center",
    }}
  >
    <img
      src={tricentis}
      alt="Tricentis Tosca"
      style={{
        maxWidth: "100%",
        height: "300px",
        objectFit: "contain",
      }}
    />
  </div>

  {/* Text Section - below image on mobile, left on desktop */}
  <div
    className="col-12 col-md-6 order-2 order-md-1"
    style={{ paddingRight: "30px" }}
  >
    <p className="text-primary">Write better, faster</p>
    <h1>Tricentis Tosca AI</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      Tricentis Tosca AI is an AI-powered test automation platform that
      provides comprehensive and scalable testing solutions for both web and
      mobile applications. Tosca's AI-driven testing helps businesses automate
      their software testing, making it faster, more efficient, and more
      reliable. The platform offers a wide range of testing capabilities,
      including functional testing, regression testing, UI testing, performance
      testing, and API testing.
    </p>

    <p>
      By using AI to drive test automation, Tricentis Tosca eliminates the need
      for manual testing and ensures high-quality software by identifying
      defects early in the development lifecycle. This AI-powered platform is
      designed to enhance productivity by reducing the time and effort required
      for testing, while improving the accuracy of results and the overall
      efficiency of the testing process.
    </p>

    <a
      href="https://www.tricentis.com/"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-primary me-2"
    >
      Explore Tool
    </a>
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
                How Tricentis Tosca AI Works?
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
                      Tricentis Tosca AI provides automated testing across
                      multiple platforms, allowing teams to run tests on web,
                      mobile, and API applications without manual intervention.
                      It supports scriptless automation, reducing the need for
                      complex coding and enabling faster test creation.
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
                      Functional and Regression Testing:
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      The platform offers functional testing to ensure that all
                      features and functions work as expected and regression
                      testing to confirm that new changes do not break existing
                      features. Tricentis Tosca automates both testing types,
                      improving speed and accuracy.
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
                      Cross-Platform and Mobile Testing
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Tricentis Tosca automates testing for both web
                      applications and mobile applications, ensuring
                      cross-platform compatibility. Whether testing on iOS,
                      Android, or various browsers, Tosca AI ensures your
                      application works seamlessly across multiple platforms.
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

export default TricentisToscaAI;
