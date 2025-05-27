import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import Rainforest from "../../../../public/assets/Img/AI for software testing/rainforest.png"
import rainforestqaSS1 from '../../../../public/assets/Img/AI for software testing/rainforestqaSS1.png';
import rainforestqaSS2 from '../../../../public/assets/Img/AI for software testing/rainforestqaSS2.png';



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
const RainforestQA = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">Elevate Your QA with Rainforest QA</p>
              <h3 className="">
                AI-Driven, Scalable, and Low-Maintenance Test Automation
              </h3>
            </div>
            {[
              {
                icon: "🧠",
                title: "Self-Healing Tests",
                desc: "Rainforest QA uses AI-powered self-healing technology to automatically update tests when application changes occur, reducing manual maintenance and ensuring stable tests.",
              },
              {
                icon: "📱",
                title: "Cross-Platform Real Device Testing",
                desc: "Execute tests across a wide range of real devices and browsers, ensuring your app’s performance and functionality on Android, iOS, and all major desktop platforms.",
              },
              {
                icon: "⚡",
                title: "Smart Parallel Execution",
                desc: "Rainforest QA enables intelligent parallel execution of tests across environments, reducing test cycles and delivering quick feedback for faster development.",
              },
              {
                icon: "🔍",
                title: "AI-Powered Test Insights",
                desc: "Utilize AI to analyze failure trends, detect flaky tests, and optimize test coverage based on historical data, providing actionable insights to improve test efficiency.",
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
                  q: "What is Rainforest QA?",
                  a: "Rainforest QA is an AI-powered test automation platform designed to streamline and accelerate the testing process for web, mobile, and API applications. It aims to enhance test coverage, speed, and accuracy while reducing manual testing efforts.",
                },
                {
                  q: "How does Rainforest QA improve test automation?",
                  a: "Rainforest QA leverages machine learning and AI to automatically create, execute, and maintain tests, reducing the manual effort and improving speed, accuracy, and coverage across testing processes.",
                },
                {
                  q: "What types of testing are supported by Rainforest QA?",
                  a: "Rainforest QA supports UI testing, regression testing, performance testing, API testing, mobile testing, cross-browser testing, and accessibility testing to provide comprehensive coverage.",
                },
                {
                  q: "Can I run tests on real devices with Rainforest QA?",
                  a: "Yes, Rainforest QA supports testing on real devices for both Android and iOS applications, as well as emulators and simulators.",
                },
                {
                  q: "Can Rainforest QA test both Android and iOS apps?",
                  a: "Yes, Rainforest QA provides automated testing for both Android and iOS apps on real devices and simulators.",
                },
                {
                  q: "Does Rainforest QA support cross-browser testing?",
                  a: "Yes, Rainforest QA supports automated testing across major browsers like Chrome, Firefox, Safari, and Edge to ensure consistent user experiences.",
                },
                {
                  q: "Does Rainforest QA support automated API testing?",
                  a: "Yes, Rainforest QA integrates automated API testing into your workflows, enabling you to test backend services alongside UI testing.",
                },
                {
                  q: "Does Rainforest QA support parallel testing?",
                  a: "Yes, Rainforest QA allows parallel test execution across different browsers, devices, and environments, accelerating the testing process.",
                },
                {
                  q: "Is Rainforest QA cloud-based?",
                  a: "Yes, Rainforest QA is a cloud-based platform that offers scalability, easy collaboration, and reduced infrastructure maintenance.",
                },
                {
                  q: "Does Rainforest QA provide real-time test feedback?",
                  a: "Yes, Rainforest QA offers real-time feedback with detailed logs, screenshots, and video recordings to help developers identify and fix issues faster.",
                },
                {
                  q: "How does Rainforest QA detect flaky tests?",
                  a: "Rainforest QA uses AI-powered analysis and historical test data to identify flaky or unstable tests and provides suggestions for improving them.",
                },
                {
                  q: "Is Rainforest QA suitable for Agile and DevOps teams?",
                  a: "Yes, Rainforest QA integrates seamlessly into CI/CD pipelines and supports continuous testing, making it ideal for Agile and DevOps environments.",
                },
                {
                  q: "What programming languages and frameworks are supported by Rainforest QA?",
                  a: "Rainforest QA supports integration with several frameworks and languages, including Selenium, Appium, REST APIs, and other common testing tools.",
                },
                {
                  q: "What is smart test execution in Rainforest QA?",
                  a: "Smart test execution in Rainforest QA prioritizes test cases based on code changes, historical data, and impact analysis to reduce overall test execution time.",
                },
                {
                  q: "Can Rainforest QA simulate different network conditions?",
                  a: "Yes, Rainforest QA allows you to simulate various network conditions, such as 3G, 4G, and slow Wi-Fi, to assess app performance under different connectivity scenarios.",
                },
                {
                  q: "Does Rainforest QA offer accessibility testing?",
                  a: "Yes, Rainforest QA helps ensure your applications meet accessibility standards like WCAG and ADA by detecting accessibility issues during test execution.",
                },
                {
                  q: "Does Rainforest QA support manual testing?",
                  a: "Yes, alongside automated testing, Rainforest QA offers support for live interactive testing across devices and browsers.",
                },
                {
                  q: "Does Rainforest QA provide screenshots and video recordings?",
                  a: "Yes, every test execution in Rainforest QA comes with logs, screenshots, and video recordings to facilitate easier debugging and issue validation.",
                },
                {
                  q: "How does Rainforest QA handle test maintenance?",
                  a: "Rainforest QA uses self-healing technology to automatically update tests when application changes are detected, minimizing the need for manual maintenance.",
                },
                {
                  q: "Is Rainforest QA secure for enterprise use?",
                  a: "Yes, Rainforest QA complies with high security standards such as SOC 2 Type II, ISO 27001, and GDPR, ensuring its suitability for enterprise use.",
                },
                {
                  q: "What integrations are available with Rainforest QA?",
                  a: "Rainforest QA integrates with popular CI/CD tools like Jenkins, GitHub Actions, Azure DevOps, as well as collaboration tools like Slack and JIRA.",
                },
                {
                  q: "Does Rainforest QA provide test analytics?",
                  a: "Yes, Rainforest QA offers in-depth analytics, including detailed dashboards to track test trends, pass/fail rates, coverage gaps, and other insights.",
                },
                {
                  q: "What kind of support does Rainforest QA offer?",
                  a: "Rainforest QA provides 24/7 support, onboarding assistance, and comprehensive documentation to ensure smooth adoption and use of the platform.",
                },
                {
                  q: "Does Rainforest QA offer a free trial?",
                  a: "Yes, Rainforest QA offers a free trial, allowing you to explore its features before committing to the platform.",
                },
                {
                  q: "How easy is it to get started with Rainforest QA?",
                  a: "Getting started with Rainforest QA is simple—just sign up, integrate your repository or testing framework, and start testing with minimal setup.",
                },
                {
                  q: "What sets Rainforest QA apart from other testing platforms?",
                  a: "Rainforest QA stands out with its AI-driven test automation, self-healing capabilities, smart execution, real-time analytics, and seamless integration with the entire development lifecycle.",
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
                src={rainforestqaSS1}
                alt="rainforest"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={rainforestqaSS2}
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
                alt="rainforest"
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
                    Why Use Rainforest QA?
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
                      <strong>Efficiency and Speed:</strong> By automating
                      testing processes, Rainforest QA significantly accelerates
                      testing cycles, enabling faster releases with high-quality
                      results, reducing testing time and the manual effort
                      involved.
                    </li>
                    <li className="mb-3">
                      <strong>Scalability:</strong> Rainforest QA’s cloud-based
                      infrastructure makes it easy to scale testing efforts as
                      needed, allowing teams to handle an increasing number of
                      test cases and diverse platforms without additional
                      infrastructure.
                    </li>
                    <li className="mb-3">
                      <strong>AI-Driven Insights:</strong> With AI-powered
                      testing, Rainforest QA offers intelligent recommendations
                      and identifies issues more effectively than traditional
                      testing methods, ensuring quicker defect detection and
                      improved decision-making.
                    </li>
                    <li className="mb-3">
                      <strong>Cross-Platform Consistency:</strong> Rainforest
                      ensures cross-platform consistency, allowing teams to
                      verify that applications are consistent across all devices
                      and browsers, which is essential for providing a seamless
                      user experience across platforms.
                    </li>
                    <li className="mb-3">
                      <strong>Support for CI/CD Pipelines:</strong> Integrating
                      seamlessly with CI/CD tools, Rainforest QA allows teams to
                      run tests as part of their automated development
                      pipelines, ensuring that any code pushed to production is
                      thoroughly validated before release.
                    </li>
                    <li className="mb-3">
                      <strong>Comprehensive Testing Solutions:</strong>{" "}
                      Rainforest QA covers a wide range of testing needs,
                      including UI testing, regression testing, API testing,
                      performance testing, and mobile app testing, all in one
                      platform.
                    </li>
                    <li className="mb-3">
                      <strong>Cost-Effective:</strong> By automating many
                      aspects of the testing process, Rainforest QA reduces the
                      need for manual testers and expensive testing
                      infrastructure, offering a cost-effective solution for
                      both small teams and large enterprises.
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
                    <strong>AI-Powered Testing:</strong> Rainforest QA leverages
                    machine learning to automate visual checks, detect
                    regressions, and optimize the testing process by identifying
                    defects more efficiently than traditional testing tools.
                  </li>
                  <li className="mb-2">
                    <strong>Wide Range of Testing Options:</strong> With
                    functional testing, UI testing, cross-browser testing, API
                    testing, and mobile testing all integrated, Rainforest QA
                    provides a comprehensive testing solution for modern
                    applications.
                  </li>
                  <li className="mb-2">
                    <strong>Cloud-Based Accessibility:</strong> Being
                    cloud-based, Rainforest QA provides remote accessibility,
                    enabling teams to run tests from anywhere without the need
                    to manage complex infrastructure.
                  </li>
                  <li className="mb-2">
                    <strong>Seamless CI/CD Integration:</strong> Rainforest QA
                    integrates smoothly with CI/CD pipelines, ensuring that
                    automated testing is an integral part of your software
                    development lifecycle, improving overall efficiency.
                  </li>
                  <li className="mb-2">
                    <strong>Cross-Device Testing:</strong> With its ability to
                    test on multiple devices and browsers, Rainforest QA ensures
                    that your app provides a consistent experience across
                    different platforms, reducing the likelihood of visual or
                    functional bugs in production.
                  </li>
                  <li className="mb-2">
                    <strong>Real-Time Test Monitoring:</strong> The ability to
                    monitor tests in real-time ensures that teams get immediate
                    feedback, which accelerates the process of identifying and
                    fixing issues, reducing time-to-market.
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
                    <strong>Limited to UI and Functional Testing:</strong> While
                    Rainforest QA excels at UI and functional testing, it may
                    not be the best solution for other types of testing, such as
                    security testing, penetration testing, or load testing,
                    which may require additional tools.
                  </li>
                  <li className="mb-2">
                    <strong>Pricing:</strong> The cost of Rainforest QA may be
                    prohibitive for smaller teams or startups, especially when
                    compared to some open-source or self-hosted alternatives.
                  </li>
                  <li className="mb-2">
                    <strong>Learning Curve:</strong> Getting accustomed to
                    Rainforest AI and integrating it into existing workflows may
                    involve a learning curve for teams that are new to AI-driven
                    testing or automated testing solutions.
                  </li>
                  <li className="mb-2">
                    <strong>Dependency on Cloud Infrastructure:</strong> Being a
                    cloud-based solution, Rainforest QA requires a reliable
                    internet connection and might not be ideal for teams in
                    environments with limited or unreliable network access.
                  </li>
                  <li className="mb-2">
                    <strong>Limited Customization for Advanced Testing:</strong>{" "}
                    For more complex testing scenarios, Rainforest QA may offer
                    limited customization options compared to other testing
                    tools, requiring teams to explore additional solutions.
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
                    consistency across various browsers and devices.
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
      src={Rainforest}
      alt="Rainforest QA"
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
    <h1>Rainforest QA</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      Rainforest QA is an AI-powered, cloud-based testing platform that enables
      teams to automate manual testing processes for web and mobile
      applications. With a focus on delivering high-quality, efficient, and
      scalable testing solutions, Rainforest QA integrates into CI/CD pipelines
      and enhances the test automation process for cross-platform, web, and
      mobile applications.
    </p>
    <p>
      Rainforest’s AI-powered testing capabilities optimize the testing workflow
      by providing automated regression tests, UI testing, functional testing,
      and more, helping teams detect issues faster, minimize manual effort, and
      maintain application quality in real-time. Rainforest QA supports
      end-to-end testing, API testing, and performance testing, offering
      flexible solutions for developers, QA engineers, and product managers to
      automate various aspects of their testing.
    </p>

    <div className="mb-3">
      <a
        href="https://rainforest.zone/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary me-2"
      >
        Explore Tool
      </a>
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
                How Rainforest QA Works?
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
                      Rainforest QA automates a wide range of tests such as UI
                      tests, regression tests, performance tests, and mobile app
                      tests. It eliminates the need for repetitive manual
                      checks, allowing development teams to focus on critical
                      development tasks
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
                      Rainforest QA supports cross-platform testing, ensuring
                      that your application functions consistently across
                      multiple platforms, including desktop, mobile, and tablet,
                      while maintaining a seamless user experience
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
                      Mobile Testing:
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Rainforest QA for mobile testing is designed to
                      automatically test both native mobile applications and
                      mobile web versions. This ensures the quality of mobile
                      apps across different screen sizes and operating systems
                      like iOS and Android.
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

export default RainforestQA;
