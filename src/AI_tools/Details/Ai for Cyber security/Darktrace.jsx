import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

import dark from "../../../../public/assets/Img/AI for Cybersecurity/3.png";
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
const Darktrace = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">Next-Generation Cyber AI</p>
              <h3 className="">
                AI-Powered Threat Detection with Darktrace AI
              </h3>
            </div>
            {[
              {
                icon: "🛡️",
                title: "Autonomous Threat Detection:",
                desc: "Darktrace AI uses self-learning algorithms to detect and respond to cyber threats in real-time, without relying on predefined rules or signatures.",
              },
              {
                icon: "🤖",
                title: "Behavioral Analytics:",
                desc: "Monitors network and user behavior to identify abnormal activities, offering an advanced approach to detect even the most sophisticated threats like zero-day attacks.",
              },
              {
                icon: "☁️",
                title: "Cloud-Native Architecture:",
                desc: "Fully cloud-based with no need for hardware installation, Darktrace scales seamlessly to cover cloud, hybrid, and on-premises environments with ease.",
              },
              {
                icon: "🔍",
                title: "AI-Powered Threat Response:",
                desc: "Darktrace’s Autonomous Response feature allows it to autonomously take immediate actions to neutralize threats, like isolating compromised systems or blocking suspicious activity.",
              },
              {
                icon: "⚙️",
                title: "Integrated Threat Intelligence:",
                desc: "Darktrace leverages global threat intelligence to continuously update its models, ensuring it is always adapting to new cyber risks and emerging attack vectors.",
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

      case "screenshots":
        return (
          <div className="row g-4">
            <div className="col-md-6">
              <img
                src="https://images.wondershare.com/filmora/article-images/photos-into-video-app-8.jpg"
                alt="darktrace"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src="https://www.tipard.com/images/editor/free-online-video-editor/magisto.jpg"
                alt="darktrace"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
        );

      case "reviews":
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

      case "FAQs":
        return (
          <div className="faq-section container py-5">
            <h3 className="text-center text-white mb-5 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is Darktrace AI?",
                  a: "Darktrace AI is an AI-powered cybersecurity platform that uses machine learning to autonomously detect and respond to cyber threats in real-time across networks, endpoints, and cloud environments.",
                },
                {
                  q: "How does Darktrace AI work?",
                  a: "Darktrace AI works by continuously learning the normal behavior of every device, user, and application in your network. It then uses this baseline to detect anomalies and emerging threats, providing early warning and response.",
                },
                {
                  q: "Is Darktrace AI resource-heavy?",
                  a: "No, Darktrace is designed to operate with minimal system impact, using lightweight sensors that can be deployed across your network without straining performance.",
                },
                {
                  q: "Can Darktrace AI detect advanced persistent threats (APTs)?",
                  a: "Yes, Darktrace AI is specifically built to detect APTs by analyzing network traffic and user behavior in real-time, helping identify sophisticated threats that bypass traditional security tools.",
                },
                {
                  q: "Does Darktrace AI provide real-time threat response?",
                  a: "Yes, Darktrace AI provides autonomous threat response through its Antigena feature, which can take immediate action to contain or mitigate threats without human intervention.",
                },
                {
                  q: "Is Darktrace AI suitable for small businesses?",
                  a: "Yes, Darktrace AI is scalable, making it suitable for businesses of all sizes. Its cloud-based nature ensures that even smaller organizations can leverage enterprise-grade security.",
                },
                {
                  q: "What operating systems does Darktrace AI support?",
                  a: "Darktrace AI supports a variety of operating systems, including Windows, macOS, Linux, and mobile platforms, ensuring comprehensive protection across all endpoints.",
                },
                {
                  q: "Is Darktrace AI cloud-based?",
                  a: "Yes, Darktrace AI is fully cloud-native, enabling easy deployment and scaling without the need for on-premises hardware, and providing visibility into both cloud and on-prem environments.",
                },
                {
                  q: "Does Darktrace AI have an API?",
                  a: "Yes, Darktrace AI provides APIs for integration with other security tools, such as SIEMs, SOAR platforms, and custom security workflows, allowing for seamless automation and orchestration.",
                },
                {
                  q: "Can I automate responses with Darktrace AI?",
                  a: "Yes, Darktrace AI’s Antigena can automatically respond to detected threats by isolating affected devices, blocking suspicious traffic, and preventing further attacks, all without manual intervention.",
                },
                {
                  q: "What is the Darktrace AI dashboard?",
                  a: "The Darktrace AI dashboard provides a central view of threat activity, incidents, and security posture across your entire network. It offers real-time alerts, detailed reports, and insights into detected threats.",
                },
                {
                  q: "Does Darktrace AI include threat intelligence?",
                  a: "Yes, Darktrace AI integrates threat intelligence into its machine learning models, allowing it to detect emerging threats and provide context-aware alerts for rapid response.",
                },
                {
                  q: "How is Darktrace AI different from traditional security tools?",
                  a: "Unlike traditional tools that rely on signature-based detection, Darktrace AI uses unsupervised machine learning to detect unknown threats, including insider threats and zero-day attacks.",
                },
                {
                  q: "Can Darktrace AI protect cloud environments?",
                  a: "Yes, Darktrace AI provides comprehensive protection for cloud workloads across AWS, Azure, and Google Cloud, offering visibility into cloud traffic and workloads alongside on-prem systems.",
                },
                {
                  q: "Does Darktrace AI support identity protection?",
                  a: "Yes, Darktrace AI monitors user and entity behavior to detect suspicious activity, such as abnormal login attempts, lateral movement, and unauthorized access, helping to secure identities.",
                },
                {
                  q: "Can Darktrace AI isolate compromised endpoints?",
                  a: "Yes, Darktrace AI can isolate compromised endpoints through its Antigena feature, preventing the spread of attacks and minimizing damage to the network.",
                },
                {
                  q: "How often is Darktrace AI updated?",
                  a: "Darktrace AI continuously updates its detection models using machine learning to stay ahead of new threats. These updates are automatically pushed to the platform without requiring user action.",
                },
                {
                  q: "Does Darktrace AI offer mobile protection?",
                  a: "Yes, Darktrace AI extends protection to mobile endpoints by monitoring mobile traffic and user behavior, securing mobile devices across the organization.",
                },
                {
                  q: "Can I run forensics with Darktrace AI?",
                  a: "Yes, Darktrace AI provides forensic analysis capabilities, enabling security teams to investigate incidents and gain insights into attack timelines and techniques used by attackers.",
                },
                {
                  q: "Does Darktrace AI work offline?",
                  a: "Darktrace AI primarily operates in the cloud, but it retains some detection capabilities offline and syncs data once connectivity is restored.",
                },
                {
                  q: "What kind of support does Darktrace AI offer?",
                  a: "Darktrace AI offers 24/7 support through a dedicated customer success team, a knowledge base, and access to security experts for incident response and troubleshooting.",
                },
                {
                  q: "What’s included in Darktrace AI’s Managed Detection and Response (MDR)?",
                  a: "Darktrace’s MDR service includes 24/7 monitoring, incident response, threat hunting, and expert oversight, ensuring that threats are detected and mitigated quickly and efficiently.",
                },
                {
                  q: "Is Darktrace AI compliant with industry regulations?",
                  a: "Yes, Darktrace AI supports compliance with standards such as GDPR, HIPAA, PCI DSS, and other regulatory frameworks, providing security teams with tools to meet their compliance needs.",
                },
                {
                  q: "Does Darktrace AI offer training or certification?",
                  a: "Yes, Darktrace offers training and certification programs to help security teams understand how to leverage the platform effectively for threat detection and incident response.",
                },
                {
                  q: "Can I test Darktrace AI before purchasing?",
                  a: "Yes, Darktrace offers free trials and product demos for businesses looking to evaluate the platform before making a commitment.",
                },
                {
                  q: "Does Darktrace AI offer reporting features?",
                  a: "Yes, Darktrace AI provides comprehensive reporting capabilities, including risk assessments, security posture analysis, and incident timelines.",
                },
                {
                  q: "Is Darktrace AI customizable?",
                  a: "Yes, Darktrace AI is highly customizable, allowing security teams to configure detection thresholds, response actions, and integrations based on their specific security requirements.",
                },
                {
                  q: "Does Darktrace AI detect insider threats?",
                  a: "Yes, Darktrace AI leverages behavioral analysis to detect insider threats by monitoring user behavior and identifying abnormal access patterns.",
                },
                {
                  q: "How is Darktrace AI licensed?",
                  a: "Darktrace AI is licensed on a per-endpoint or per-user basis, with flexible licensing options available to accommodate different business sizes and needs.",
                },
                {
                  q: "How do I contact Darktrace AI?",
                  a: "You can contact Darktrace through their website’s contact form, support portal, or by engaging with a sales representative.",
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

      case "why-we-use":
        return (
          <div className="container">
            <div className="row g-4">
              <div className="col-12">
                <div className="custom-card text-light p-5 text-center">
                  <h3 className="fw-bold mb-4 text-start text-primary">
                    Why Use Darktrace AI?
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
                      Darktrace AI uses unsupervised machine learning to
                      autonomously detect and respond to emerging cyber threats
                      in real-time.
                    </li>
                    <li className="mb-3">
                      Provides comprehensive visibility into networks,
                      endpoints, cloud environments, and user behaviors for
                      early threat detection.
                    </li>
                    <li className="mb-3">
                      Cloud-native architecture allows seamless scalability and
                      rapid deployment, ensuring efficient protection for
                      organizations of all sizes.
                    </li>
                    <li className="mb-3">
                      Self-learning algorithms enable Darktrace AI to detect
                      unknown threats and adapt to new attack techniques without
                      relying on signatures.
                    </li>
                    <li className="mb-3">
                      Darktrace’s Autonomous Response (Antigena) can take
                      automated actions to contain threats, minimizing human
                      intervention and response time.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore Darktrace AI
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "pros & cons":
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
                    Autonomous threat detection and response powered by machine
                    learning and behavioral analytics.
                  </li>
                  <li className="mb-2">
                    Cloud-native, requiring no hardware installation, and
                    offering seamless scalability for growing businesses.
                  </li>
                  <li className="mb-2">
                    Real-time visibility into network traffic, endpoints, and
                    user behavior across all systems.
                  </li>
                  <li className="mb-2">
                    Self-learning AI that adapts to new and emerging threats,
                    improving over time with minimal manual tuning.
                  </li>
                  <li className="mb-2">
                    Autonomous Response (Antigena) takes immediate actions to
                    contain threats without human intervention, reducing
                    response time.
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
                <h5 className="text-warning text-start mb-4">⚠ Cons</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    Can be costly for smaller organizations or those with
                    limited budgets, especially for the full-featured package.
                  </li>
                  <li className="mb-2">
                    Requires initial configuration and fine-tuning to minimize
                    false positives and optimize threat detection.
                  </li>
                  <li className="mb-2">
                    Some users report a learning curve for administrators,
                    especially when first deploying and managing the platform.
                  </li>
                  <li className="mb-2">
                    Relies heavily on cloud connectivity, which may not be
                    suitable for environments with limited or unstable internet
                    access.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "alternative":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-4">
              Alternatives to Darktrace AI
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
                  <li className="mb-2">
                    <strong>SentinelOne</strong> – A next-generation autonomous
                    endpoint protection platform that uses AI to prevent,
                    detect, and respond to cyber threats across all devices in
                    real-time.
                  </li>
                  <li className="mb-2">
                    <strong>Darktrace Antigena</strong> – Darktrace's own
                    autonomous response tool that integrates with its platform
                    to detect and respond to threats autonomously.
                  </li>
                  <li className="mb-2">
                    <strong>CrowdStrike</strong> – A cloud-native cybersecurity
                    platform that uses AI and machine learning to provide
                    real-time threat detection, endpoint protection, and
                    incident response.
                  </li>
                  <li className="mb-2">
                    <strong>Vectra AI</strong> – Uses machine learning to detect
                    hidden threats and provide real-time visibility into network
                    traffic and user behavior for effective threat hunting and
                    response.
                  </li>
                  <li className="mb-2">
                    <strong>Fortinet FortiAI</strong> – An AI-powered security
                    operations platform that offers advanced detection and
                    automated responses, focusing on network security and
                    endpoint protection.
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
        {/* <a
          href="/Aitools"
          className="d-inline-block text-white text-decoration-none ml-3 py-1"
        >
          <i className="bi bi-arrow-left me-2"></i>Back to Directory{" "}
        </a> */}
        <a
          href="/Aitools"
          className="d-inline-block text-white text-decoration-none  mt-3 ml-3 py-1 px-2 ms-5 border rounded-sm"
        >
          <i className="bi bi-arrow-left me-2"></i>Back  {" "}
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
              <p className="text-primary">
                Create stunning visuals effortlessly
              </p>
              <h1>Darktrace AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>

              <p>
                Darktrace AI is a cybersecurity platform that uses artificial
                intelligence (AI) and machine learning (ML) to offer proactive
                protection and detection of cyber threats. Unlike traditional
                security systems, Darktrace uses self-learning algorithms to
                monitor network traffic, user activity, and endpoint behavior in
                real time. This allows it to detect even the most advanced cyber
                threats, such as advanced persistent threats (APTs), ransomware,
                and insider threats, before they can cause significant damage.
                The platform offers autonomous response capabilities that can
                neutralize threats without human intervention, improving
                response times and minimizing the risk of attacks.
              </p>

              <p>
                Darktrace leverages AI-driven cybersecurity and behavioral
                analytics to identify anomalies in the network, providing
                security teams with the intelligence they need to take action
                swiftly. The platform is cloud-native, ensuring scalable and
                seamless protection across distributed networks, cloud
                environments, and on-premises infrastructures.
              </p>

              <div className="mb-3">
                <span className="badge bg-primary me-2"> Security</span>
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
              <img src={dark} style={{ MaxWidth: "100%", height: "300px" }} />
            </div>
          </div>
          <section style={{ backgroundColor: "", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">Explore in 3 Simple Steps</p>
              <h2
                style={{
                  fontWeight: "semibold",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                How to Use Darktrace AI?
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
                      Deploy Darktrace Sensors
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Install Darktrace’s AI-powered sensors to continuously
                      monitor your network, cloud infrastructure, and endpoints
                      for real-time threat detection.
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
                      Analyze with Darktrace’s AI
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Darktrace’s AI continuously learns and analyzes the
                      behavior of users, devices, and networks to identify
                      abnormal activities and potential threats.
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
                      Investigate and Respond Automatically
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Use the Darktrace dashboard for automated response
                      actions. In case of suspicious activity, Darktrace’s
                      autonomous response system takes immediate action, such as
                      isolating compromised systems.
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
              "features",
              "screenshots",
              "reviews",
              "FAQs",

              "why-we-use",
              "pros & cons",
              "alternative",
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
            <h4 className="mb-3">Ready to get started with Darktrace AI ?</h4>
            <p className="mb-4">
              Join thousands of professionals already boosting their
              productivity!
            </p>
            <div>
              <button className="btn btn-light me-3">Try Now for Free</button>
              <button className="btn btn-outline-light">Schedule a Demo</button>
            </div>
            <small className="d-block mt-2">
              No credit card required. free trial available.
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Darktrace;
