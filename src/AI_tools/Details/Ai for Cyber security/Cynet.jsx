import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

import cynet from "../../../../public/assets/Img/AI for Cybersecurity/5.png";
import cynet1 from "../../../../public/assets/Img/AI for Cybersecurity/Cynet1.png"
import cynet2 from "../../../../public/assets/Img/AI for Cybersecurity/Cynet2.png";           
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
const CynetAI = () => {
  const [activeTab, setActiveTab] = useState("features");
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
                Smart, Scalable Protection with Cynet 360 AI
              </h3>
            </div>

            {[
              {
                icon: "🧠",
                title: "Intelligent Threat Prevention",
                desc: "Cynet 360 AI uses machine learning and behavioral analytics to predict and prevent threats before they occur, ensuring proactive protection across your entire network.",
              },
              {
                icon: "🌐",
                title: "Zero-Day Threat Mitigation",
                desc: "With advanced AI-driven behavioral analysis, Cynet 360 AI can detect and block zero-day threats in real-time, keeping systems safe from unknown vulnerabilities.",
              },
              {
                icon: "🔒",
                title: "Cloud-Native Security",
                desc: "Cynet 360 AI integrates seamlessly with cloud environments, offering protection across hybrid and multi-cloud infrastructures while ensuring data security and compliance.",
              },
              {
                icon: "📊",
                title: "AI-Driven Analytics",
                desc: "Utilizing real-time data analytics, Cynet 360 AI helps businesses quickly identify and respond to threats, with actionable insights that improve overall security posture.",
              },
              {
                icon: "⚡",
                title: "Autonomous Response Capabilities",
                desc: "Cynet 360 AI automatically reacts to detected threats, isolating affected endpoints, blocking malicious activity, and initiating remediation, all without human intervention.",
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


                src={cynet1}
                alt="cynet"

                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img

                src={cynet2}
               alt="cynet"
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
                  q: "What is Cynet 360 AI?",
                  a: "Cynet 360 AI is a comprehensive cybersecurity solution that leverages AI to protect your organization from advanced threats, offering autonomous threat detection, prevention, and remediation.",
                },
                {
                  q: "How does Cynet 360 AI work?",
                  a: "Cynet 360 AI uses machine learning, behavioral analytics, and threat intelligence to proactively detect and mitigate security risks across endpoints, networks, and cloud environments.",
                },
                {
                  q: "Is Cynet 360 AI suitable for enterprises?",
                  a: "Yes, Cynet 360 AI is scalable and designed to protect organizations of all sizes, from small businesses to large enterprises, with a unified security management system.",
                },
                {
                  q: "Can Cynet 360 AI detect zero-day threats?",
                  a: "Yes, Cynet 360 AI uses AI-powered behavioral analysis to identify zero-day threats and prevent them from compromising your systems.",
                },
                {
                  q: "Does Cynet 360 AI provide centralized management?",
                  a: "Yes, Cynet 360 AI offers a centralized management console, allowing users to configure policies, monitor security events, and maintain full visibility across the entire infrastructure.",
                },
                {
                  q: "Is Cynet 360 AI compatible with cloud environments?",
                  a: "Yes, Cynet 360 AI integrates seamlessly with public and private cloud infrastructures, including AWS, Azure, and Google Cloud, providing protection across both cloud and on-premises environments.",
                },
                {
                  q: "What platforms does Cynet 360 AI support?",
                  a: "Cynet 360 AI supports Windows, macOS, Linux, and mobile platforms, including iOS and Android, ensuring comprehensive protection for all devices in your network.",
                },
                {
                  q: "Does Cynet 360 AI have an API for integration?",
                  a: "Yes, Cynet 360 AI provides APIs for integration with SIEM, SOAR, and other third-party security tools, enabling automated workflows and custom integrations.",
                },
                {
                  q: "Is Cynet 360 AI cloud-managed?",
                  a: "Yes, Cynet 360 AI is cloud-managed, making it easier to deploy, update, and scale across multiple environments without the need for on-premises infrastructure.",
                },
                {
                  q: "Can Cynet 360 AI isolate infected endpoints?",
                  a: "Yes, Cynet 360 AI automatically isolates infected endpoints to contain threats, preventing lateral movement within your network.",
                },
                {
                  q: "Does Cynet 360 AI include threat intelligence services?",
                  a: "Yes, Cynet 360 AI integrates global threat intelligence, continuously updating its protection mechanisms with the latest threat data to enhance detection and prevention.",
                },
                {
                  q: "How does Cynet 360 AI differ from legacy solutions?",
                  a: "Unlike traditional signature-based systems, Cynet 360 AI uses predictive AI models, behavior analysis, and threat intelligence to proactively block threats before they can cause harm.",
                },
                {
                  q: "Is there a mobile app for Cynet 360 AI?",
                  a: "Yes, Cynet 360 AI offers mobile applications that extend security protections to smartphones and tablets, helping to prevent phishing, malware, and other mobile-based attacks.",
                },
                {
                  q: "Does Cynet 360 AI support compliance reporting?",
                  a: "Yes, Cynet 360 AI includes compliance reporting features to help organizations meet regulatory requirements such as GDPR, HIPAA, PCI-DSS, and more.",
                },
                {
                  q: "Can Cynet 360 AI detect insider threats?",
                  a: "Yes, Cynet 360 AI uses behavioral analysis to detect anomalies and suspicious activities that may indicate potential insider threats.",
                },
                {
                  q: "Is Cynet 360 AI updated automatically?",
                  a: "Yes, Cynet 360 AI receives continuous updates through the cloud to ensure the latest protection mechanisms and threat intelligence are always active.",
                },
                {
                  q: "Does Cynet 360 AI support automation?",
                  a: "Yes, Cynet 360 AI enables automated threat detection and response actions, reducing the time and effort required for manual intervention.",
                },
                {
                  q: "Can I try Cynet 360 AI before purchasing?",
                  a: "Yes, Cynet offers free trials and demos for businesses to evaluate its features and performance before committing to a subscription.",
                },
                {
                  q: "What support does Cynet 360 AI offer?",
                  a: "Cynet provides 24/7 customer support, an extensive knowledge base, and access to cybersecurity experts for guidance and incident response.",
                },
                {
                  q: "Is Cynet 360 AI suitable for hybrid environments?",
                  a: "Yes, Cynet 360 AI is optimized for hybrid environments, offering protection for both on-premises and cloud-based infrastructures.",
                },
                {
                  q: "Does Cynet 360 AI offer training and certification?",
                  a: "Yes, Cynet offers training resources and certification programs to ensure users and partners can fully utilize the platform’s capabilities.",
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
                    Why Use Cynet 360 AI?
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
                      Cynet 360 AI integrates artificial intelligence with
                      advanced threat intelligence to provide real-time
                      cybersecurity across all endpoints.
                    </li>
                    <li className="mb-3">
                      Offers comprehensive protection by unifying security
                      management across network, cloud, and endpoint
                      environments.
                    </li>
                    <li className="mb-3">
                      Uses behavioral analysis and machine learning to
                      automatically detect, block, and remediate threats,
                      including zero-day attacks and ransomware.
                    </li>
                    <li className="mb-3">
                      Scalable architecture that suits both small businesses and
                      large enterprises, adapting to the needs of various
                      organizations.
                    </li>
                    <li className="mb-3">
                      Centralized management console simplifies the
                      administration of policies, providing visibility into
                      security incidents across all environments.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore Cynet 360 AI
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
              Alternatives to Cynet 360 AI
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
                    <strong>Darktrace</strong> – A leader in AI-powered
                    cybersecurity, providing autonomous detection and response
                    to advanced threats, using machine learning and behavioral
                    analytics.
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
                  <li className="mb-2">
                    <strong>Microsoft Defender for Endpoint</strong> – A
                    comprehensive endpoint security solution that integrates
                    AI-powered threat detection and prevention, helping to
                    safeguard endpoints across organizations.
                  </li>
                  <li className="mb-2">
                    <strong>FireEye Helix</strong> – An AI-driven security
                    platform that combines threat intelligence and automation
                    for real-time threat detection, incident response, and
                    mitigation.
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
              <p className="text-primary">
                Create stunning visuals effortlessly
              </p>
              <h1>Cynet 360 AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Cynet AI, 360 AI, and Cynet 360 AI are cutting-edge technologies
                in the cybersecurity space that leverage artificial intelligence
                (AI) and machine learning (ML) to provide advanced protection
                for enterprise networks, endpoints, and cloud environments.
                These AI-driven solutions are designed to detect and mitigate
                cyber threats in real-time, offering automated security
                responses and enhancing overall system security. With the rise
                of cyber threats like ransomware, data breaches, and insider
                threats, these AI-based tools play a pivotal role in fortifying
                the defense systems of organizations worldwide.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4 mb-lg-0">
                <a
                  href="https://www.cynet.com/"
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
                src={cynet}
                className="img-fluid rounded-3"
                style={{ maxWidth: "100%", height: "auto" }}
                alt="Cynet 360 AI"
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
                How to Use Cynet 360
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
                      Deploy Cynet 360 Agent
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Install the Cynet agent on all endpoints to begin
                      collecting behavioral and system activity data for
                      real-time protection.
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
                      Activate Autonomous Breach Protection
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Leverage Cynet’s AI and machine learning to automatically
                      detect, block, and remediate threats without manual
                      intervention.
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
                      Monitor and Control via Cynet Dashboard
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Use the centralized dashboard to view incidents, manage
                      threat hunting, and customize protection policies across
                      all endpoints.
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

export default CynetAI;
