import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

import vectra from "../../../../public/assets/Img/AI for Cybersecurity/2.png";
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
const Vectra = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">Enterprise-Grade Cybersecurity</p>
              <h3 className="">AI-Powered Threat Detection with Vectra AI</h3>
            </div>
            {[
              {
                icon: "🛡️",
                title: "Real-Time Threat Detection:",
                desc: "Vectra AI uses machine learning and behavioral analytics to detect threats in real-time, including APTs, malware, and insider threats across network traffic and endpoints.",
              },
              {
                icon: "🤖",
                title: "Behavioral Analytics:",
                desc: "Monitors user behavior and network traffic patterns to detect anomalies and suspicious activity, improving the accuracy of threat detection.",
              },
              {
                icon: "☁️",
                title: "Cloud-Native Platform:",
                desc: "Fully cloud-based architecture that provides seamless scalability, rapid deployment, and integrated visibility across on-premises, cloud, and hybrid environments.",
              },
              {
                icon: "🔍",
                title: "Automated Threat Hunting:",
                desc: "Vectra AI continuously hunts for threats using AI-driven models, minimizing the need for manual threat detection and allowing teams to focus on high-priority incidents.",
              },
              {
                icon: "⚙️",
                title: "Integrated Incide-nt Response:",
                desc: "Automatically correlates data, generates alerts, and provides actionable insights for incident response, reducing time to remediation and improving overall security posture.",
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
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src="https://www.tipard.com/images/editor/free-online-video-editor/magisto.jpg"
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
                  q: "What is Vectra AI?",
                  a: "Vectra AI is an advanced cybersecurity platform that leverages artificial intelligence and machine learning to detect, monitor, and respond to cyber threats across an organization’s infrastructure.",
                },
                {
                  q: "How does Vectra AI work?",
                  a: "Vectra AI uses behavioral analytics and machine learning to continuously monitor network traffic, user behavior, and endpoint activities to detect a wide range of cyber threats.",
                },
                {
                  q: "Is Vectra AI resource-heavy?",
                  a: "No, Vectra AI is designed to be scalable and efficient, using lightweight sensors that minimize the impact on system resources while providing robust monitoring.",
                },
                {
                  q: "Can Vectra AI detect advanced persistent threats (APTs)?",
                  a: "Yes, Vectra AI is specifically designed to detect advanced persistent threats (APTs) and sophisticated attack techniques that other security solutions might miss.",
                },
                {
                  q: "Does Vectra AI provide real-time threat response?",
                  a: "Yes, Vectra AI automates the detection of threats and provides actionable insights for real-time response, significantly reducing the time to mitigate risks.",
                },
                {
                  q: "Is Vectra AI suitable for small businesses?",
                  a: "Yes, Vectra AI is scalable and suitable for businesses of all sizes, offering enterprise-grade security while being flexible enough for smaller organizations.",
                },
                {
                  q: "What operating systems does Vectra AI support?",
                  a: "Vectra AI supports a wide range of operating systems, including Windows, macOS, Linux, and mobile platforms, providing comprehensive monitoring for all devices.",
                },
                {
                  q: "Is Vectra AI cloud-based?",
                  a: "Yes, Vectra AI is a cloud-native solution that leverages the cloud for scalable deployment, ensuring rapid detection and response capabilities.",
                },
                {
                  q: "Does Vectra AI have an API?",
                  a: "Yes, Vectra AI offers API access for integration with SIEMs, SOAR platforms, and custom security workflows, enabling seamless automation.",
                },
                {
                  q: "Can I automate responses with Vectra AI?",
                  a: "Yes, Vectra AI allows automated detection and response actions to reduce manual effort and speed up threat remediation.",
                },
                {
                  q: "What is the Vectra AI dashboard?",
                  a: "The Vectra AI dashboard provides a centralized view of network traffic, threat detections, and ongoing investigations, helping security teams stay informed and act quickly.",
                },
                {
                  q: "Does Vectra AI include threat intelligence?",
                  a: "Yes, Vectra AI integrates global threat intelligence to enhance detection and provide context-rich alerts for faster incident response.",
                },
                {
                  q: "How is Vectra AI different from traditional security tools?",
                  a: "Vectra AI uses behavioral analytics and machine learning to detect unknown threats and anomalies, unlike traditional tools that primarily rely on signature-based detection.",
                },
                {
                  q: "Can Vectra AI protect cloud environments?",
                  a: "Yes, Vectra AI offers protection for cloud workloads across AWS, Azure, and Google Cloud, providing visibility and threat detection for cloud infrastructure.",
                },
                {
                  q: "Does Vectra AI support identity protection?",
                  a: "Yes, Vectra AI can monitor user behavior, detect suspicious access, and help protect against insider threats through its identity analytics features.",
                },
                {
                  q: "Can Vectra AI isolate compromised endpoints?",
                  a: "Yes, Vectra AI enables rapid containment of compromised endpoints by isolating them from the network to prevent lateral movement and further exploitation.",
                },
                {
                  q: "How often is Vectra AI updated?",
                  a: "Vectra AI continuously updates its machine learning models and detection capabilities to stay ahead of emerging threats, with automatic updates provided as part of the service.",
                },
                {
                  q: "Does Vectra AI offer mobile protection?",
                  a: "Yes, Vectra AI includes mobile threat detection and protection for both Android and iOS devices, securing mobile endpoints within your organization.",
                },
                {
                  q: "Can I run forensics with Vectra AI?",
                  a: "Yes, Vectra AI offers advanced forensic analysis capabilities that allow security teams to perform deep investigations into detected threats.",
                },
                {
                  q: "Does Vectra AI work offline?",
                  a: "Vectra AI is primarily cloud-based, but it offers offline detection capabilities for endpoints, which sync with the cloud once reconnected.",
                },
                {
                  q: "What kind of support does Vectra AI offer?",
                  a: "Vectra AI offers 24/7 customer support, a comprehensive knowledge base, and access to their expert security team for assistance with incidents and queries.",
                },
                {
                  q: "What’s included in Vectra AI’s Managed Detection and Response (MDR)?",
                  a: "Vectra AI’s MDR service provides round-the-clock threat monitoring, incident response, and threat hunting with expert oversight from Vectra’s security team.",
                },
                {
                  q: "Is Vectra AI compliant with industry regulations?",
                  a: "Yes, Vectra AI supports compliance with standards such as GDPR, HIPAA, PCI DSS, and other regulatory frameworks.",
                },
                {
                  q: "Does Vectra AI offer training or certification?",
                  a: "Yes, Vectra AI offers training and certification for security professionals, helping them understand how to use the platform effectively.",
                },
                {
                  q: "Can I test Vectra AI before purchasing?",
                  a: "Yes, Vectra AI offers free trials and product demos for organizations looking to evaluate the platform before making a commitment.",
                },
                {
                  q: "Does Vectra AI offer reporting features?",
                  a: "Yes, Vectra AI provides detailed reporting capabilities, including risk assessments, security posture analysis, and incident timelines.",
                },
                {
                  q: "Is Vectra AI customizable?",
                  a: "Yes, Vectra AI is highly customizable, allowing security teams to configure detection thresholds, response actions, and integrations according to their specific needs.",
                },
                {
                  q: "Does Vectra AI detect insider threats?",
                  a: "Yes, Vectra AI uses machine learning to detect insider threats by monitoring user behavior and identifying abnormal access patterns.",
                },
                {
                  q: "How is Vectra AI licensed?",
                  a: "Vectra AI is licensed on a per-endpoint or per-user basis, with flexible options available based on the size and needs of the organization.",
                },
                {
                  q: "How do I contact Vectra AI?",
                  a: "You can contact Vectra AI through their website’s contact form, support portal, or by engaging with a sales representative.",
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
                    Why Use Vectra AI?
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
                      Vectra AI uses machine learning and behavioral analytics
                      to detect and respond to cyber threats in real-time.
                    </li>
                    <li className="mb-3">
                      Provides real-time visibility into network traffic,
                      endpoint activities, and user behavior to detect advanced
                      threats.
                    </li>
                    <li className="mb-3">
                      Cloud-native platform with continuous adaptability to
                      emerging threats, reducing false positives and improving
                      accuracy.
                    </li>
                    <li className="mb-3">
                      Automated detection and response help security teams
                      prioritize and respond more efficiently to potential
                      threats.
                    </li>
                    <li className="mb-3">
                      Ideal for enterprises needing scalable and proactive
                      threat detection and network monitoring for complex
                      environments.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore Vectra AI
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
                    AI-driven threat detection using behavioral analytics to
                    detect advanced threats and anomalies.
                  </li>
                  <li className="mb-2">
                    Cloud-native solution with no hardware requirements and easy
                    scalability.
                  </li>
                  <li className="mb-2">
                    Real-time visibility into network traffic, user behavior,
                    and endpoint activities.
                  </li>
                  <li className="mb-2">
                    Automated detection and incident response, reducing manual
                    effort for security teams.
                  </li>
                  <li className="mb-2">
                    Continuous learning and adaptability to emerging cyber
                    threats, minimizing false positives.
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
                    Can be expensive for small businesses, especially if
                    advanced features or additional modules are needed.
                  </li>
                  <li className="mb-2">
                    Some users report a learning curve when setting up and
                    managing the platform.
                  </li>
                  <li className="mb-2">
                    The platform may generate false positives during initial
                    deployment, requiring fine-tuning.
                  </li>
                  <li className="mb-2">
                    Requires ongoing cloud connectivity for full functionality
                    and data processing.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "alternative":
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
                    <strong>Darktrace</strong> – An AI-powered cybersecurity
                    platform known for its autonomous threat detection and
                    response capabilities. It provides network monitoring and
                    detection of cyber threats using machine learning and
                    behavioral analysis.
                  </li>
                  <li className="mb-2">
                    <strong>SentinelOne</strong> – Uses AI to provide autonomous
                    threat prevention and response for endpoints. The platform
                    offers real-time monitoring and automated threat mitigation
                    capabilities.
                  </li>
                  <li className="mb-2">
                    <strong>Palo Alto Networks Cortex XDR</strong> – Integrates
                    endpoint, network, and cloud security using AI and machine
                    learning to detect and prevent advanced threats. It provides
                    an all-in-one security solution for businesses.
                  </li>
                  <li className="mb-2">
                    <strong>Microsoft Defender for Endpoint</strong> – An
                    enterprise-grade security solution from Microsoft offering
                    endpoint detection, response, and threat analytics.
                  </li>
                  <li className="mb-2">
                    <strong>McAfee MVISION</strong> – Leverages machine learning
                    for endpoint protection, providing automated threat
                    detection, response, and security management across cloud
                    and on-premise environments.
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
              <p className="text-primary">
                Create stunning visuals effortlessly
              </p>
              <h1>Vectra AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>

              <p>
                Vectra AI is an advanced cybersecurity platform that leverages
                artificial intelligence and machine learning to detect, monitor,
                and respond to cyber threats across an organization’s
                infrastructure. By using behavioral analytics, Vectra AI
                provides real-time visibility into network traffic, user
                behavior, and endpoint activities to detect a wide range of
                cyber threats, including advanced persistent threats (APTs),
                malware, ransomware, and insider threats.
              </p>

              <p>
                This cloud-native solution continuously adapts to emerging
                threats, providing automated detection, threat intelligence, and
                incident response. Vectra AI’s advanced machine learning models
                help reduce false positives and improve detection accuracy,
                allowing security teams to respond more quickly and effectively
                to potential threats.
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
              <img src={vectra} style={{ MaxWidth: "100%", height: "300px" }} />
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
                How to Use Vectra AI?
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
                      Connect Your Network Environment
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Deploy Vectra sensors to monitor internal traffic, cloud
                      workloads, and user behavior across your hybrid or
                      cloud-native infrastructure.
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
                      Analyze with Vectra Cognito AI
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Vectra's AI continuously analyzes traffic and user
                      activity using behavioral models and machine learning to
                      detect hidden threats.
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
                      Respond and Investigate
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Use the Vectra dashboard to investigate attack paths,
                      prioritize detections, and integrate with SIEM or SOAR
                      platforms for automated response.
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
            <h4 className="mb-3">Ready to get started with Vectra AI ?</h4>
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

export default Vectra;
