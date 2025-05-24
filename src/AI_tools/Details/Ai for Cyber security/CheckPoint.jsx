import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import checkpoint from "../../../../public/assets/Img/AI for Cybersecurity/4.png";
import check1 from "../../../../public/assets/Img/AI for Cybersecurity/Check1.png";
import check2 from "../../../../public/assets/Img/AI for Cybersecurity/Check2.png";

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
const CheckPointAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4 py-5">
            <div className="col-12 text-center mb-4">
              <p className="text-primary mb-2">
                Next-Generation Cybersecurity AI
              </p>
              <h3 className="text-light fw-bold">
                Smart, Scalable Protection with Checkpoint AI
              </h3>
            </div>

            {[
              {
                icon: "🧠",
                title: "Intelligent Threat Prevention",
                desc: "Checkpoint AI leverages deep learning and neural networks to predict and prevent cyber threats before they occur, minimizing attack surfaces and risk exposure.",
              },
              {
                icon: "🌐",
                title: "Zero-Day Attack Mitigation",
                desc: "With advanced behavioral analysis, Checkpoint AI can detect and neutralize zero-day threats in real time, securing systems against unknown vulnerabilities.",
              },
              {
                icon: "🔒",
                title: "Cloud-Native Security",
                desc: "Checkpoint AI integrates effortlessly with multi-cloud and hybrid environments, providing consistent protection across distributed infrastructures.",
              },
              {
                icon: "📊",
                title: "AI-Driven Analytics",
                desc: "Real-time analytics and pattern recognition enable faster detection, incident response, and smarter decision-making through actionable insights.",
              },
              {
                icon: "⚡",
                title: "Autonomous Response Capabilities",
                desc: "Checkpoint AI reacts autonomously to suspicious behavior by isolating threats, triggering alerts, and initiating remediation without manual intervention.",
              },
            ].map((feature, index) => (
              <div className="col-12 col-md-6 col-lg-4" key={index}>
                <div
                  className="custom-card text-light p-4 h-100 rounded-4"
                  style={{
                    border: "1px solid #7B68EE",
                    backgroundColor: "#161b22",
                  }}
                >
                  <div
                    className="icon fs-2 mb-3"
                    aria-hidden="true"
                    style={{ lineHeight: 1 }}
                  >
                    {feature.icon}
                  </div>
                  <h5 className="fw-bold text-info">{feature.title}</h5>
                  <p className="text-secondary">{feature.desc}</p>
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
<<<<<<< HEAD
                src="https://images.wondershare.com/filmora/article-images/photos-into-video-app-8.jpg"
                alt="checkpoint"
=======
                src={check1}
                alt=""
>>>>>>> a3aba11b982f646cee8c4e1fc893c4b3c7d4e356
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
<<<<<<< HEAD
                src="https://www.tipard.com/images/editor/free-online-video-editor/magisto.jpg"
                alt="checkpoint"
=======
                src={check2}
>>>>>>> a3aba11b982f646cee8c4e1fc893c4b3c7d4e356
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
                  q: "What is Check Point AI?",
                  a: "Check Point AI is an advanced cybersecurity platform that leverages artificial intelligence and threat intelligence to detect, prevent, and respond to a wide range of cyber threats.",
                },
                {
                  q: "How does Check Point AI work?",
                  a: "Check Point AI combines machine learning and real-time threat intelligence to proactively detect and mitigate attacks across networks, cloud, endpoints, and mobile devices.",
                },
                {
                  q: "Is Check Point AI suitable for enterprises?",
                  a: "Yes, Check Point AI is designed for organizations of all sizes, including large enterprises, with scalable solutions and unified security management.",
                },
                {
                  q: "Can Check Point AI detect zero-day threats?",
                  a: "Yes, Check Point AI uses advanced behavioral analysis and AI to detect zero-day threats and prevent them before they cause harm.",
                },
                {
                  q: "Does Check Point AI provide centralized management?",
                  a: "Yes, it offers a centralized management console for configuring policies, monitoring threats, and managing all security layers in one place.",
                },
                {
                  q: "Is Check Point AI compatible with cloud environments?",
                  a: "Yes, Check Point AI protects cloud infrastructure, including AWS, Azure, and Google Cloud, with deep visibility and threat prevention capabilities.",
                },
                {
                  q: "What platforms does Check Point AI support?",
                  a: "Check Point AI supports Windows, macOS, Linux, as well as major mobile platforms including iOS and Android.",
                },
                {
                  q: "Does Check Point AI have an API for integration?",
                  a: "Yes, Check Point AI offers APIs to integrate with SIEM, SOAR, and other third-party security tools for automated workflows.",
                },
                {
                  q: "Is Check Point AI cloud-managed?",
                  a: "Yes, Check Point AI provides cloud-based management, simplifying deployment, updates, and scaling across multiple environments.",
                },
                {
                  q: "Can Check Point AI isolate infected endpoints?",
                  a: "Yes, it can automatically isolate compromised endpoints to contain threats and stop lateral movement within the network.",
                },
                {
                  q: "Does Check Point AI include threat intelligence services?",
                  a: "Yes, Check Point integrates threat intelligence from its ThreatCloud system, providing real-time updates and contextual threat data.",
                },
                {
                  q: "How does Check Point AI differ from legacy solutions?",
                  a: "Unlike signature-based solutions, Check Point AI uses predictive AI models and global intelligence to block threats proactively, even before signatures are available.",
                },
                {
                  q: "Is there a mobile app for Check Point AI?",
                  a: "Yes, Check Point provides mobile security apps that extend protection to smartphones and tablets, preventing phishing and malware attacks.",
                },
                {
                  q: "Does Check Point AI support compliance reporting?",
                  a: "Yes, it provides compliance and audit-ready reports that help organizations meet regulations such as GDPR, HIPAA, and PCI-DSS.",
                },
                {
                  q: "Can Check Point AI detect insider threats?",
                  a: "Yes, it uses behavioral analytics and anomaly detection to identify suspicious activities that may indicate insider threats.",
                },
                {
                  q: "Is Check Point AI updated automatically?",
                  a: "Yes, it receives continuous updates via the cloud to ensure the latest protection mechanisms and threat intelligence are always active.",
                },
                {
                  q: "Does Check Point AI support automation?",
                  a: "Yes, it enables automated threat detection and response actions to reduce the time and effort required for manual intervention.",
                },
                {
                  q: "Can I try Check Point AI before purchasing?",
                  a: "Yes, Check Point offers free trials and product demos so businesses can evaluate its features before committing.",
                },
                {
                  q: "What support does Check Point AI offer?",
                  a: "Check Point provides 24/7 customer support, an extensive knowledge base, and access to cybersecurity experts for guidance and incident response.",
                },
                {
                  q: "Is Check Point AI suitable for hybrid environments?",
                  a: "Yes, it is optimized for hybrid infrastructures, securing both on-premises and cloud-based assets with seamless integration.",
                },
                {
                  q: "Does Check Point AI offer training and certification?",
                  a: "Yes, Check Point provides cybersecurity training, certification programs, and partner enablement resources to maximize the use of its platform.",
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
          <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">
          <div className="card bg-dark text-light p-4 p-md-5 shadow rounded-4">
            <h3 className="fw-bold mb-4 text-start text-primary">
              Why Use Check Point AI?
            </h3>

            <ul className="text-start list-unstyled ps-3 fs-6 lh-lg">
              <li className="mb-3">
                <i className="bi bi-dot"></i> Check Point AI combines artificial intelligence with global threat intelligence to prevent cyber attacks in real time.
              </li>
              <li className="mb-3">
                <i className="bi bi-dot"></i> Offers a unified security architecture across networks, endpoints, cloud, and mobile, enabling holistic protection.
              </li>
              <li className="mb-3">
                <i className="bi bi-dot"></i> Uses advanced behavioral analysis and AI to detect and block zero-day attacks, ransomware, and other sophisticated threats.
              </li>
              <li className="mb-3">
                <i className="bi bi-dot"></i> Scalable and enterprise-ready, suitable for organizations of all sizes across various industries.
              </li>
              <li className="mb-3">
                <i className="bi bi-dot"></i> Centralized management console simplifies administration, policy enforcement, and threat visibility across environments.
              </li>
            </ul>

            <div className="text-center mt-4">
              <Button variant="primary" size="sm">
                Explore Check Point AI
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
                    Integrates AI and threat intelligence to identify and stop
                    threats in real time across network, cloud, and endpoints.
                  </li>
                  <li className="mb-2">
                    Unified security management through a centralized console,
                    simplifying policy control and monitoring.
                  </li>
                  <li className="mb-2">
                    Offers deep threat prevention capabilities including
                    anti-ransomware, sandboxing, and behavioral analysis.
                  </li>
                  <li className="mb-2">
                    Scalable architecture suited for both small businesses and
                    large enterprises.
                  </li>
                  <li className="mb-2">
                    Compatible with hybrid environments, supporting on-premises,
                    cloud, and remote endpoints.
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
                    Licensing and subscription costs may be higher compared to
                    some competitors.
                  </li>
                  <li className="mb-2">
                    The management console can be complex for new users or
                    smaller IT teams.
                  </li>
                  <li className="mb-2">
                    May require manual policy adjustments and tuning for optimal
                    AI performance.
                  </li>
                  <li className="mb-2">
                    Some advanced features may require additional modules or
                    integrations, adding to complexity.
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
              Alternatives to Checkpoint AI
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
                    <strong>SentinelOne</strong> – An AI-driven cybersecurity
                    platform that offers autonomous endpoint protection, threat
                    detection, and real-time response across devices.
                  </li>
                  <li className="mb-2">
                    <strong>CrowdStrike Falcon</strong> – A cloud-native AI
                    platform combining real-time endpoint protection, threat
                    intelligence, and incident response with rapid deployment.
                  </li>
                  <li className="mb-2">
                    <strong>Fortinet FortiAI</strong> – Uses advanced AI to
                    detect and mitigate threats in real time, ideal for network
                    security, SOC automation, and hybrid cloud environments.
                  </li>
                  <li className="mb-2">
                    <strong>Darktrace</strong> – An AI-powered cybersecurity
                    solution that autonomously detects and responds to evolving
                    threats across email, network, endpoints, and cloud
                    infrastructure.
                  </li>
                  <li className="mb-2">
                    <strong>Bitdefender GravityZone</strong> – Provides
                    AI-enhanced endpoint protection and advanced threat
                    analytics for businesses, with flexible deployment options
                    including cloud and on-premise.
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
      <div className="bg-dark d-flex justify-content-between align-items-center flex-wrap">
        <a
          href="/Aitools"
          className="d-inline-block text-white text-decoration-none mt-3 ml-3 py-1 px-2 ms-5 border rounded-sm"
        >
          <i className="bi bi-arrow-left me-2"></i>Back{" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
          <div className="row align-items-center justify-content-between mb-4 flex-wrap">
            {/* Left side (Text Section) */}
            <div className="col-12 col-lg-6 mb-4 mb-lg-0" style={{ paddingRight: "30px" }}>
              <p className="text-primary">Create stunning visuals effortlessly</p>
              <h1>Check Point AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Check Point AI is an advanced cybersecurity solution powered by
                artificial intelligence (AI) and machine learning (ML). It is
                designed to protect enterprise networks, endpoints, mobile
                devices, and cloud environments from a wide range of cyber
                threats. Check Point uses AI-driven security to detect and
                prevent advanced persistent threats (APTs), ransomware, malware,
                and other cyberattacks. The platform integrates various
                technologies such as threat prevention, threat intelligence, and
                automated incident response, enabling organizations to maintain
                a robust security posture across their IT infrastructure.
              </p>
              <p>
                Check Point combines its core cybersecurity features, including
                next-gen firewall, intrusion prevention system (IPS), and
                behavioral analytics, with machine learning to provide adaptive,
                proactive, and automated protection. The platform also supports
                cloud-native security, multi-cloud environments, and zero-trust
                security models, helping businesses safeguard their digital
                assets in an ever-evolving cyber threat landscape.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4 mb-lg-0">
                <a
                  href="https://www.checkpoint.com/ai/copilot/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-lg px-4"
                >
                  Explore Tool
                </a>
              </div>
            </div>
            {/* Right side (Image Section) */}
            <div className="col-12 col-lg-6 mb-4 mb-lg-0 text-center">
              <img
                src={checkpoint}
                className="img-fluid rounded-3"
                style={{ maxWidth: "100%", height: "auto" }}
                alt="Check Point AI"
              />
            </div>
          </div>
          <section style={{ padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">Explore in 3 Simple Steps</p>
              <h2
                style={{
                  fontWeight: "600",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                How to Use Check Point AI?
              </h2>
              <div className="row g-4">
                {/* Step 1 */}
                <div className="col-12 col-md-4">
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
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Deploy Check Point Endpoints
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Install Check Point endpoint agents on devices to activate
                      AI-powered protection against malware, phishing, and
                      ransomware.
                    </p>
                    <div
                      style={{
                        position: "absolute",
                        bottom: 10,
                        right: 15,
                        fontSize: "4rem",
                        fontWeight: "bold",
                        color: "#7b61ff",
                        opacity: 0.6,
                      }}
                    >
                      1
                    </div>
                  </div>
                </div>
                {/* Step 2 */}
                <div className="col-12 col-md-4">
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
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Utilize AI for Proactive Threat Prevention
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Check Point AI analyzes behavior patterns in real time to
                      block zero-day attacks and advanced persistent threats
                      before damage occurs.
                    </p>
                    <div
                      style={{
                        position: "absolute",
                        bottom: 10,
                        right: 15,
                        fontSize: "4rem",
                        fontWeight: "bold",
                        color: "#7b61ff",
                        opacity: 0.6,
                      }}
                    >
                      2
                    </div>
                  </div>
                </div>
                {/* Step 3 */}
                <div className="col-12 col-md-4">
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
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Manage Security with Check Point Infinity Console
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Use the Infinity Console to monitor incidents, enforce
                      security policies, and get insights across your network
                      and cloud environments.
                    </p>
                    <div
                      style={{
                        position: "absolute",
                        bottom: 10,
                        right: 15,
                        fontSize: "4rem",
                        fontWeight: "bold",
                        color: "#7b61ff",
                        opacity: 0.6,
                      }}
                    >
                      3
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Tab Navigation */}
          <ul className="nav nav-tabs custom-tabs mb-4 flex-wrap">
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
        </div>
      </div>
    </>
  );
};

export default CheckPointAI;
