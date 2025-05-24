import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import perfecto from '../../../../public/assets/Img/AI for software testing/perfecto.png'
import perfectio1 from '../../../../public/assets/Img/AI for software testing/perfectio1.png'
import perfectio2 from '../../../../public/assets/Img/AI for software testing/perfectio2.png'



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
const PerfectoAI = () => {
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
                  q: "What is Perfecto AI?",
                  a: "Perfecto AI is a cloud-based platform that provides AI-powered mobile and web application testing on real devices and browsers.",
                },
                {
                  q: "How does Perfecto AI enhance test automation?",
                  a: "Perfecto AI leverages machine learning to detect flaky tests, improve test stability, and optimize execution based on test history.",
                },
                {
                  q: "What types of testing does Perfecto support?",
                  a: "Perfecto supports functional, regression, exploratory, performance, and cross-browser testing.",
                },
                {
                  q: "What is real device testing in Perfecto?",
                  a: "Real device testing allows users to run tests on actual smartphones and tablets hosted in the cloud to simulate real user experiences.",
                },
                {
                  q: "How does Perfecto AI detect flaky tests?",
                  a: "It uses AI to analyze patterns of test failures over time and marks tests as flaky if they fail inconsistently.",
                },
                {
                  q: "Is Perfecto AI suitable for agile and DevOps?",
                  a: "Yes, Perfecto integrates seamlessly into CI/CD pipelines and supports fast, scalable testing for agile teams.",
                },
                {
                  q: "Can I test both Android and iOS apps with Perfecto?",
                  a: "Yes, Perfecto supports automated testing on both Android and iOS platforms using real and virtual devices.",
                },
                {
                  q: "What programming languages are supported in Perfecto?",
                  a: "Perfecto supports Java, Python, JavaScript, C#, and integrations with popular test frameworks like Selenium, Appium, and TestNG.",
                },
                {
                  q: "How does AI help in test execution within Perfecto?",
                  a: "AI prioritizes test execution based on risk, usage data, and previous failures to improve testing efficiency.",
                },
                {
                  q: "Does Perfecto support parallel testing?",
                  a: "Yes, Perfecto allows multiple tests to run simultaneously across different devices and browsers to speed up validation.",
                },
                {
                  q: "Can I run cross-browser tests using Perfecto?",
                  a: "Absolutely, Perfecto enables cross-browser testing on Chrome, Firefox, Safari, Edge, and Internet Explorer.",
                },
                {
                  q: "Does Perfecto provide real-time test reporting?",
                  a: "Yes, it offers live dashboards, video replays, logs, and analytics for every test session.",
                },
                {
                  q: "Is Perfecto cloud-based?",
                  a: "Yes, Perfecto runs in the cloud, offering easy scalability, real device access, and reduced maintenance overhead.",
                },
                {
                  q: "What integrations does Perfecto offer?",
                  a: "Perfecto integrates with Jenkins, CircleCI, GitHub Actions, Azure DevOps, JIRA, and Slack, among others.",
                },
                {
                  q: "What is Perfecto's smart test execution?",
                  a: "It refers to AI-driven selection of tests that are most likely to be affected by recent code changes or failures.",
                },
                {
                  q: "Does Perfecto support test analytics?",
                  a: "Yes, Perfecto offers actionable analytics like pass/fail trends, flakiness detection, and risk-based insights.",
                },
                {
                  q: "Can I simulate network conditions with Perfecto?",
                  a: "Yes, Perfecto enables simulation of real-world network conditions like 3G, 4G, Wi-Fi, and low bandwidth scenarios.",
                },
                {
                  q: "What is Perfecto’s approach to mobile test automation?",
                  a: "It combines Appium-based automation with AI-powered insights and access to a wide range of real devices.",
                },
                {
                  q: "Does Perfecto AI offer accessibility testing?",
                  a: "Yes, Perfecto includes capabilities for accessibility checks and compliance validation.",
                },
                {
                  q: "Can I use Perfecto for manual testing?",
                  a: "Yes, Perfecto also supports live testing sessions on real devices for exploratory or manual testing needs.",
                },
                {
                  q: "Does Perfecto provide screenshots and video recording?",
                  a: "Yes, all test sessions are recorded with screenshots and video logs to aid debugging.",
                },
                {
                  q: "Is Perfecto secure for enterprise use?",
                  a: "Yes, it follows strict security standards including SOC 2, GDPR, and data encryption for enterprise-grade protection.",
                },
                {
                  q: "How does Perfecto handle test maintenance?",
                  a: "Perfecto uses AI to automatically update selectors and suggest changes to reduce maintenance effort.",
                },
                {
                  q: "What kind of support is available with Perfecto?",
                  a: "Perfecto offers 24/7 support, onboarding assistance, documentation, and expert consulting.",
                },
                {
                  q: "Does Perfecto offer a free trial?",
                  a: "Yes, you can request a demo or sign up for a trial through the official Perfecto website.",
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
                src={perfectio1}
                alt="perfecto"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={perfectio2}
                alt="perfecto"
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
                    Why Use Perfecto AI?
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
                    <li class="mb-3">
                      <strong> Comprehensive Coverage:</strong>Supports
                      functional, regression, performance, UI, and mobile
                      testing across platforms, ensuring applications are fully
                      tested.
                    </li>
                    <li class="mb-3">
                      <strong>Efficiency Gains:</strong> AI-powered test
                      optimization improves testing efficiency by prioritizing
                      impactful tests and reducing redundant ones.
                    </li>
                    <li class="mb-3">
                      <strong>Faster Time-to-Market:</strong>Continuous testing
                      ensures quick detection of issues, allowing teams to
                      resolve them faster and reduce time-to-market.
                    </li>
                    <li class="mb-3">
                      <strong>ECost-Effective:</strong> By automating many
                      aspects of testing, Perfecto AI reduces the reliance on
                      manual testing and the associated labor costs.
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
                    AI-Powered Automation: Streamlines test creation, execution,
                    and reporting, improving the speed and accuracy of testing.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Comprehensive Support: Provides cross-platform testing for
                    web and mobile apps, ensuring consistent performance across
                    devices and browsers.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Scalable Cloud-Based Testing: Enables cloud-based testing
                    that scales with the needs of your project, providing
                    flexibility and on-demand testing capabilities.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Continuous Integration: Seamlessly integrates with CI/CD
                    pipelines, allowing automated testing during every stage of
                    development.
                  </li>
                  <li className="mb-2">
                    Real-Time Results and Feedback: Immediate feedback on test
                    results helps detect issues earlier in the development
                    cycle.
                  </li>
                  <li className="mb-2">
                    Visual Regression Testing: Detects visual changes and UI
                    discrepancies, ensuring the application’s look and feel
                    remains consistent after updates.
                  </li>
                  <li className="mb-2">
                    Comprehensive Reporting: Detailed reports with insights on
                    test results, performance metrics, and detected issues help
                    teams take informed action.
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
                    Learning Curve: While powerful, Perfecto AI may require a
                    learning curve for new users, especially those not familiar
                    with AI-powered testing tools.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Cost: The advanced features and comprehensive nature of
                    Perfecto AI may make it expensive, especially for small
                    teams or startups with limited budgets.
                  </li>
                  <li className="mb-2">
                    Requires Cloud Infrastructure: Cloud-based testing requires
                    a reliable internet connection and suitable cloud
                    infrastructure, which could be a challenge in areas with
                    limited access to high-speed internet.
                  </li>
                  <li className="mb-2">
                    Heavy on Resources: Running multiple tests simultaneously or
                    testing on various devices may be resource-intensive,
                    requiring proper infrastructure to handle the load.
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
                    <strong>Synthesia</strong>: Ideal for creating AI-generated
                    avatar videos for training and corporate content.
                  </li>
                  <li className="mb-2">
                    <strong>Runway ML</strong>: Offers advanced AI video editing
                    tools, including scene generation and real-time background
                    removal.
                  </li>
                  <li className="mb-2">
                    <strong>Pictory</strong>: Transforms long-form content like
                    webinars and blogs into short, branded video highlights.
                  </li>
                  <li className="mb-2">
                    <strong>Lumen5</strong>: Known for automating video creation
                    from scripts or blog posts with a focus on marketing teams.
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
      <div className="row align-items-center justify-content-between mb-4">
  {/* Left side (Text Section) */}
  <div className="col-lg-6 col-md-12 order-lg-1 order-2 pe-lg-4">
    <p className="text-primary">Write better, faster</p>
    <h1>Perfecto AI</h1>
    <div className="text-warning mb-3">⭐⭐⭐⭐⭐</div>
    <p className="mb-3">
      Perfecto AI is an AI-powered test automation platform designed
      to streamline and optimize the software testing process. The
      tool supports automation for web and mobile applications,
      offering a wide range of features such as cross-browser testing,
      API testing, performance testing, regression testing, UI
      testing, and more. Powered by AI, Perfecto automates repetitive
      testing tasks, reducing manual efforts, and improving test
      accuracy. The platform is highly suited for DevOps and CI/CD
      pipelines, providing real-time feedback and enhancing testing
      processes at scale.
    </p>

    <div className="d-flex flex-wrap gap-3 mb-4 mb-lg-0">
      <a
        href="https://www.perfecto.io/"
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
      src={perfecto}
      alt="Perfecto AI"
      className="img-fluid"
      style={{ 
        maxHeight: "300px", 
        width: "auto",
        objectFit: "contain" 
      }}
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
                How Syte Visual AI Works?
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
                      AI Visual Search
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Shoppers can upload a photo or screenshot to find similar
                      or matching products instantly using image-based search
                      technology.
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
                      Smart Visual Discovery
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      It powers dynamic product feeds, visual inspiration
                      boards, and hyper-personalized shopping experiences.
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
                      Automated Product Tagging
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Using advanced tagging systems, Syte AI enriches product
                      catalogs by automatically identifying and tagging visual
                      attributes like color, texture, and style.
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

export default PerfectoAI;
