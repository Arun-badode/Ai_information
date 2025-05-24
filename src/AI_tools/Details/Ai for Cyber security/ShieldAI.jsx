import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

import { Shield } from "lucide-react";
import shield from "../../../../public/assets/Img/AI for Cybersecurity/6.png";
import shield1 from "../../../../public/assets/Img/AI for Cybersecurity/Shield1.png";
import shield2 from "../../../../public/assets/Img/AI for Cybersecurity/Shield2.png";
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
const ShieldAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">Enterprise-Grade Cybersecurity</p>
              <h3 className="">AI-Powered Threat Detection with AI Shield</h3>
            </div>
            {[
              {
                icon: "🛡️",
                title: "Real-Time Threat Detection:",
                desc: "AI Shield uses machine learning and behavioral analytics to detect threats in real-time, including APTs, malware, and insider threats across network traffic and endpoints.",
              },
              {
                icon: "🤖",
                title: "Behavioral Analytics:",
                desc: "AI Shield continuously monitors user behavior and network traffic patterns to detect anomalies and suspicious activity, improving the accuracy of threat detection.",
              },
              {
                icon: "☁️",
                title: "Cloud-Native Platform:",
                desc: "AI Shield’s fully cloud-based architecture provides seamless scalability, rapid deployment, and integrated visibility across on-premises, cloud, and hybrid environments.",
              },
              {
                icon: "🔍",
                title: "Automated Threat Hunting:",
                desc: "AI Shield continuously hunts for threats using AI-driven models, minimizing the need for manual threat detection and allowing security teams to focus on high-priority incidents.",
              },
              {
                icon: "⚙️",
                title: "Integrated Incident Response:",
                desc: "AI Shield automatically correlates data, generates alerts, and provides actionable insights for incident response, reducing time to remediation and improving overall security posture.",
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

                

                src={shield1}
                alt="shield"

                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img

               

                src={shield2}
                alt="shield"
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
                  q: "What is AI Shield?",
                  a: "AI Shield is an advanced AI-driven cybersecurity solution that provides autonomous detection, prevention, and response to a wide range of cyber threats across an organization's infrastructure.",
                },
                {
                  q: "How does AI Shield work?",
                  a: "AI Shield uses machine learning, behavioral analytics, and threat intelligence to continuously monitor network traffic, endpoint activities, and user behavior to detect and respond to cyber threats in real-time.",
                },
                {
                  q: "Is AI Shield resource-heavy?",
                  a: "No, AI Shield is designed to be lightweight and efficient, with minimal impact on system resources while providing robust security monitoring.",
                },
                {
                  q: "Can AI Shield detect advanced persistent threats (APTs)?",
                  a: "Yes, AI Shield is specifically designed to detect advanced persistent threats (APTs) and sophisticated attack techniques, providing comprehensive protection against evolving threats.",
                },
                {
                  q: "Does AI Shield provide real-time threat response?",
                  a: "Yes, AI Shield offers automated real-time threat detection and response, enabling rapid incident mitigation and reducing the time to neutralize risks.",
                },
                {
                  q: "Is AI Shield suitable for small businesses?",
                  a: "Yes, AI Shield is scalable and can be tailored to fit organizations of all sizes, from small businesses to large enterprises, with flexible deployment options.",
                },
                {
                  q: "What operating systems does AI Shield support?",
                  a: "AI Shield supports a wide range of operating systems, including Windows, macOS, Linux, and major mobile platforms, ensuring complete device protection across your organization.",
                },
                {
                  q: "Is AI Shield cloud-based?",
                  a: "Yes, AI Shield is a cloud-native solution that provides scalable deployment and real-time threat response capabilities across all environments, including on-premises and cloud-based infrastructures.",
                },
                {
                  q: "Does AI Shield have an API?",
                  a: "Yes, AI Shield offers API access for integration with SIEMs, SOAR platforms, and custom security workflows, enabling seamless automation and threat management.",
                },
                {
                  q: "Can I automate responses with AI Shield?",
                  a: "Yes, AI Shield allows automated detection and response actions to reduce manual intervention and speed up the remediation of security incidents.",
                },
                {
                  q: "What is the AI Shield dashboard?",
                  a: "The AI Shield dashboard provides a centralized view of network traffic, threat detections, and ongoing investigations, helping security teams stay informed and respond quickly.",
                },
                {
                  q: "Does AI Shield include threat intelligence?",
                  a: "Yes, AI Shield integrates global threat intelligence to enhance detection accuracy and provide context-rich alerts for faster incident response.",
                },
                {
                  q: "How is AI Shield different from traditional security tools?",
                  a: "AI Shield uses behavioral analytics and AI to detect unknown threats and anomalies, unlike traditional signature-based tools that rely on predefined attack patterns.",
                },
                {
                  q: "Can AI Shield protect cloud environments?",
                  a: "Yes, AI Shield provides comprehensive protection for cloud workloads across AWS, Azure, and Google Cloud, offering visibility and threat detection for cloud infrastructure.",
                },
                {
                  q: "Does AI Shield support identity protection?",
                  a: "Yes, AI Shield monitors user behavior, detects suspicious access, and helps protect against insider threats through its identity and access management features.",
                },
                {
                  q: "Can AI Shield isolate compromised endpoints?",
                  a: "Yes, AI Shield can automatically isolate compromised endpoints to prevent lateral movement and further exploitation within the network.",
                },
                {
                  q: "How often is AI Shield updated?",
                  a: "AI Shield continuously updates its machine learning models and detection capabilities to stay ahead of emerging threats, with automatic updates provided as part of the service.",
                },
                {
                  q: "Does AI Shield offer mobile protection?",
                  a: "Yes, AI Shield includes mobile threat detection and protection for both Android and iOS devices, ensuring comprehensive endpoint security across your organization.",
                },
                {
                  q: "Can I run forensics with AI Shield?",
                  a: "Yes, AI Shield offers advanced forensic analysis capabilities, allowing security teams to conduct in-depth investigations into detected threats.",
                },
                {
                  q: "Does AI Shield work offline?",
                  a: "AI Shield is primarily cloud-based, but it offers offline detection capabilities for endpoints, which sync with the cloud once reconnected.",
                },
                {
                  q: "What kind of support does AI Shield offer?",
                  a: "AI Shield offers 24/7 customer support, a comprehensive knowledge base, and access to expert security teams for assistance with incidents and queries.",
                },
                {
                  q: "What’s included in AI Shield’s Managed Detection and Response (MDR)?",
                  a: "AI Shield’s MDR service provides round-the-clock threat monitoring, incident response, and proactive threat hunting with expert oversight from the AI Shield security team.",
                },
                {
                  q: "Is AI Shield compliant with industry regulations?",
                  a: "Yes, AI Shield supports compliance with standards such as GDPR, HIPAA, PCI DSS, and other regulatory frameworks, ensuring that your organization meets industry requirements.",
                },
                {
                  q: "Does AI Shield offer training or certification?",
                  a: "Yes, AI Shield offers training and certification for security professionals to help them effectively use the platform and stay up to date with the latest cybersecurity practices.",
                },
                {
                  q: "Can I test AI Shield before purchasing?",
                  a: "Yes, AI Shield offers free trials and product demos for businesses to evaluate its features and effectiveness before making a commitment.",
                },
                {
                  q: "Does AI Shield offer reporting features?",
                  a: "Yes, AI Shield provides detailed reporting capabilities, including risk assessments, security posture analysis, and incident timelines for compliance and auditing purposes.",
                },
                {
                  q: "Is AI Shield customizable?",
                  a: "Yes, AI Shield is highly customizable, allowing security teams to configure detection thresholds, response actions, and integrations to meet specific security needs.",
                },
                {
                  q: "Does AI Shield detect insider threats?",
                  a: "Yes, AI Shield uses machine learning to detect insider threats by monitoring user behavior, identifying abnormal access patterns, and preventing unauthorized actions.",
                },
                {
                  q: "How is AI Shield licensed?",
                  a: "AI Shield is licensed on a per-endpoint or per-user basis, with flexible licensing options available to suit the size and needs of your organization.",
                },
                {
                  q: "How do I contact AI Shield?",
                  a: "You can contact AI Shield through their website’s contact form, support portal, or by engaging with a sales representative for inquiries or assistance.",
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
                    Why Use AI Shield?
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
                      AI Shield uses advanced machine learning and behavioral
                      analysis to detect and respond to cyber threats in
                      real-time.
                    </li>
                    <li className="mb-3">
                      Provides real-time visibility into network traffic,
                      endpoint activities, and user behavior to detect both
                      known and unknown threats.
                    </li>
                    <li className="mb-3">
                      Cloud-native platform with adaptive AI that continuously
                      learns and evolves to handle emerging threats while
                      reducing false positives.
                    </li>
                    <li className="mb-3">
                      Automated threat detection and response allow security
                      teams to focus on critical issues, improving the speed and
                      effectiveness of security measures.
                    </li>
                    <li className="mb-3">
                      Scalable and enterprise-ready, making it ideal for
                      organizations of all sizes looking for comprehensive,
                      proactive threat detection across all environments.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore AI Shield
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
          <div className="row align-items-center justify-content-between mb-4 flex-wrap">
            {/* Left side (Text Section) */}
            <div className="col-12 col-lg-6 mb-4 mb-lg-0" style={{ paddingRight: "30px" }}>
              <p className="text-primary">
                Create stunning visuals effortlessly
              </p>
              <h1>AI Shield</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                AI Shield is a state-of-the-art cybersecurity platform that
                leverages artificial intelligence to protect against a wide
                range of online threats. By using AI and machine learning, AI
                Shield provides real-time detection, analysis, and response
                systems to safeguard businesses, enterprises, and individuals
                from evolving cyberattacks. The platform uses predictive
                analytics and automated responses to combat threats such as
                malware, phishing, and data breaches effectively.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4 mb-lg-0">
                <a
                  href="https://www.boschaishield.com/"
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
                src={shield}
                className="img-fluid rounded-3"
                style={{ maxWidth: "100%", height: "auto" }}
                alt="AI Shield"
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
                How to Use AI Shield?
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
                      Deploy AI Shield Across Your Network
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Begin by deploying AI Shield sensors to monitor traffic,
                      endpoints, cloud resources, and user activity across your
                      infrastructure.
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
                      Analyze Data with AI Shield’s Threat Detection
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      AI Shield’s machine learning algorithms continuously
                      analyze data, detecting potential threats in real-time
                      before they can impact your systems.
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
                      Take Action with AI Shield’s Autonomous Response
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      AI Shield can autonomously respond to detected threats by
                      isolating compromised devices, blocking malicious
                      activity, and initiating remediation actions.
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

export default ShieldAI;
