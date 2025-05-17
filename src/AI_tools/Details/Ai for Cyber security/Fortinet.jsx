import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

import { Shield } from "lucide-react";
import fortinet from "../../../../public/assets/Img/AI for Cybersecurity/7.png";
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
const Fortinet = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">Enterprise-Grade Cybersecurity</p>
              <h3 className="">AI-Powered Threat Detection with Fortinet AI</h3>
            </div>
            {[
              {
                icon: "🛡️",
                title: "Real-Time Threat Detection:",
                desc: "Fortinet AI uses advanced machine learning and threat intelligence to detect and mitigate cyber threats in real-time, including malware, APTs, and insider threats across network traffic and endpoints.",
              },
              {
                icon: "🤖",
                title: "Behavioral Analytics:",
                desc: "Fortinet AI monitors user behavior and network traffic patterns to detect anomalies and malicious activity, improving the accuracy of threat detection and reducing false positives.",
              },
              {
                icon: "☁️",
                title: "Cloud-Native Platform:",
                desc: "Fortinet AI integrates seamlessly with cloud environments, providing scalable, flexible protection for on-premises, cloud, and hybrid infrastructures, ensuring full visibility and security.",
              },
              {
                icon: "🔍",
                title: "Automated Threat Hunting:",
                desc: "Fortinet AI autonomously hunts for threats, reducing the need for manual intervention and allowing security teams to focus on high-priority incidents and faster response times.",
              },
              {
                icon: "⚙️",
                title: "Integrated Incident Response:",
                desc: "Fortinet AI automatically correlates threat data, generates alerts, and provides actionable insights for incident response, streamlining the remediation process and enhancing overall security posture.",
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
                  q: "What is Fortinet AI?",
                  a: "Fortinet AI is an advanced cybersecurity platform that uses artificial intelligence to detect, monitor, and respond to threats across an organization's network, cloud, and endpoint infrastructure.",
                },
                {
                  q: "How does Fortinet AI work?",
                  a: "Fortinet AI combines machine learning, behavioral analytics, and threat intelligence to continuously monitor traffic, user behavior, and endpoints to detect and mitigate cyber threats in real-time.",
                },
                {
                  q: "Is Fortinet AI resource-heavy?",
                  a: "No, Fortinet AI is designed to be efficient with minimal impact on system resources, providing comprehensive protection without slowing down your operations.",
                },
                {
                  q: "Can Fortinet AI detect advanced persistent threats (APTs)?",
                  a: "Yes, Fortinet AI is specifically designed to detect advanced persistent threats (APTs) and other complex attack techniques using behavioral models and machine learning.",
                },
                {
                  q: "Does Fortinet AI provide real-time threat response?",
                  a: "Yes, Fortinet AI offers automated threat detection and real-time response, providing actionable insights to mitigate threats quickly and efficiently.",
                },
                {
                  q: "Is Fortinet AI suitable for small businesses?",
                  a: "Yes, Fortinet AI is scalable, offering protection for organizations of all sizes, from small businesses to large enterprises, with customizable deployment options.",
                },
                {
                  q: "What operating systems does Fortinet AI support?",
                  a: "Fortinet AI supports multiple operating systems, including Windows, macOS, Linux, and mobile platforms, providing coverage across all devices in your organization.",
                },
                {
                  q: "Is Fortinet AI cloud-based?",
                  a: "Yes, Fortinet AI is cloud-native, allowing for scalable deployment and rapid response across distributed environments, including on-premises, cloud, and hybrid infrastructures.",
                },
                {
                  q: "Does Fortinet AI have an API?",
                  a: "Yes, Fortinet AI offers API access for seamless integration with SIEMs, SOAR platforms, and custom security workflows, enabling automated threat management.",
                },
                {
                  q: "Can I automate responses with Fortinet AI?",
                  a: "Yes, Fortinet AI allows automated threat detection and response actions, minimizing manual intervention and improving the speed of threat mitigation.",
                },
                {
                  q: "What is the Fortinet AI dashboard?",
                  a: "The Fortinet AI dashboard provides a centralized view of network traffic, security events, and ongoing investigations, helping security teams stay informed and respond to threats promptly.",
                },
                {
                  q: "Does Fortinet AI include threat intelligence?",
                  a: "Yes, Fortinet AI integrates threat intelligence from global sources to enhance detection accuracy and provide context-rich alerts for faster incident response.",
                },
                {
                  q: "How is Fortinet AI different from traditional security tools?",
                  a: "Unlike traditional signature-based tools, Fortinet AI uses behavioral analytics and AI to detect and prevent unknown threats, offering more proactive protection.",
                },
                {
                  q: "Can Fortinet AI protect cloud environments?",
                  a: "Yes, Fortinet AI provides robust protection for cloud workloads across AWS, Azure, and Google Cloud, with visibility and threat detection for your cloud infrastructure.",
                },
                {
                  q: "Does Fortinet AI support identity protection?",
                  a: "Yes, Fortinet AI uses behavioral analysis to monitor user behavior, detect suspicious access, and help protect against insider threats.",
                },
                {
                  q: "Can Fortinet AI isolate compromised endpoints?",
                  a: "Yes, Fortinet AI can automatically isolate compromised endpoints to prevent further exploitation and lateral movement within the network.",
                },
                {
                  q: "How often is Fortinet AI updated?",
                  a: "Fortinet AI continuously updates its machine learning models, threat intelligence, and detection capabilities to stay ahead of evolving threats, with automatic updates included.",
                },
                {
                  q: "Does Fortinet AI offer mobile protection?",
                  a: "Yes, Fortinet AI includes mobile threat detection and protection for both Android and iOS devices, securing mobile endpoints within your organization.",
                },
                {
                  q: "Can I run forensics with Fortinet AI?",
                  a: "Yes, Fortinet AI offers forensic analysis capabilities that allow security teams to perform deep investigations into detected threats and incidents.",
                },
                {
                  q: "Does Fortinet AI work offline?",
                  a: "Fortinet AI is primarily cloud-based, but it provides offline detection capabilities for endpoints, which sync with the cloud once reconnected.",
                },
                {
                  q: "What kind of support does Fortinet AI offer?",
                  a: "Fortinet AI offers 24/7 customer support, a comprehensive knowledge base, and access to expert security teams for assistance with incidents and queries.",
                },
                {
                  q: "What’s included in Fortinet AI’s Managed Detection and Response (MDR)?",
                  a: "Fortinet AI’s MDR service provides continuous monitoring, incident response, and proactive threat hunting, with expert oversight to ensure rapid threat mitigation.",
                },
                {
                  q: "Is Fortinet AI compliant with industry regulations?",
                  a: "Yes, Fortinet AI supports compliance with various standards such as GDPR, HIPAA, PCI DSS, and other regulatory frameworks to ensure your organization meets industry requirements.",
                },
                {
                  q: "Does Fortinet AI offer training or certification?",
                  a: "Yes, Fortinet AI provides training and certification for cybersecurity professionals, helping them effectively utilize the platform and stay updated with the latest security practices.",
                },
                {
                  q: "Can I test Fortinet AI before purchasing?",
                  a: "Yes, Fortinet AI offers free trials and product demos to help organizations evaluate its features before making a purchasing decision.",
                },
                {
                  q: "Does Fortinet AI offer reporting features?",
                  a: "Yes, Fortinet AI includes advanced reporting features, such as risk assessments, security posture analysis, and incident timelines to meet compliance and auditing needs.",
                },
                {
                  q: "Is Fortinet AI customizable?",
                  a: "Yes, Fortinet AI is highly customizable, allowing security teams to configure detection thresholds, response actions, and integrations based on their specific needs.",
                },
                {
                  q: "Does Fortinet AI detect insider threats?",
                  a: "Yes, Fortinet AI uses machine learning to detect insider threats by monitoring user behavior and identifying unusual access patterns or activities.",
                },
                {
                  q: "How is Fortinet AI licensed?",
                  a: "Fortinet AI is licensed based on the number of endpoints or users, with flexible licensing options that scale to meet the needs of your organization.",
                },
                {
                  q: "How do I contact Fortinet AI?",
                  a: "You can contact Fortinet AI through their website’s contact form, support portal, or by engaging with a sales representative for inquiries or assistance.",
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
                    Why Use Fortinet AI?
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
                      Fortinet AI uses advanced machine learning and threat
                      intelligence to detect and respond to cyber threats in
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
                      Explore Fortinet AI
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
                    detect advanced threats and anomalies across network
                    traffic, endpoints, and users.
                  </li>
                  <li className="mb-2">
                    Cloud-native solution with no hardware requirements,
                    offering scalability and flexibility for businesses of all
                    sizes.
                  </li>
                  <li className="mb-2">
                    Real-time visibility into network traffic, user behavior,
                    and endpoint activities, providing comprehensive security
                    insights.
                  </li>
                  <li className="mb-2">
                    Automated detection and incident response capabilities,
                    reducing manual efforts and enhancing the speed of threat
                    mitigation.
                  </li>
                  <li className="mb-2">
                    Continuous learning and adaptability to emerging cyber
                    threats, ensuring minimal false positives while improving
                    accuracy.
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
                    Can be costly for small businesses, particularly if
                    additional features or advanced modules are needed.
                  </li>
                  <li className="mb-2">
                    Some users report a learning curve when initially setting up
                    and managing the platform, especially for smaller IT teams.
                  </li>
                  <li className="mb-2">
                    During the initial deployment, it may generate false
                    positives, which require fine-tuning to optimize detection
                    accuracy.
                  </li>
                  <li className="mb-2">
                    Requires consistent cloud connectivity for full
                    functionality and data processing, which may pose challenges
                    in certain environments.
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
              Alternatives to Fortinet AI
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
                  <li className="mb-2">
                    <strong>CrowdStrike</strong> – Provides AI-driven endpoint
                    protection and threat intelligence to defend against
                    cyberattacks, including malware, ransomware, and advanced
                    persistent threats (APTs).
                  </li>
                  <li className="mb-2">
                    <strong>Check Point Quantum</strong> – Offers a robust
                    AI-powered cybersecurity platform that integrates threat
                    prevention, endpoint protection, and network security in
                    real-time.
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
              <h1>Fortinet AI </h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>

              <p>
                Fortinet is a leader in cybersecurity and integrates AI and
                machine learning into its security systems to protect businesses
                against emerging cyber threats. Their AI-powered security
                solutions help businesses ensure network, endpoint, cloud, and
                data protection, while also offering real-time threat detection
                and predictive intelligence.
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
              <img
                src={fortinet}
                style={{ MaxWidth: "100%", height: "300px" }}
              />
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
                How to Use Fortinet AI?
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
                      Deploy Fortinet AI Across Your Network
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Begin by deploying Fortinet AI sensors across your
                      network, endpoints, cloud resources, and user activities
                      to monitor traffic and detect threats.
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
                      Analyze Data with Fortinet AI's Threat Detection
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Fortinet AI continuously analyzes network traffic and
                      endpoint activity using machine learning algorithms to
                      detect potential threats in real-time before they impact
                      your systems.
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
                      Take Action with Fortinet AI's Autonomous Response
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Fortinet AI can autonomously respond to detected threats
                      by isolating compromised devices, blocking malicious
                      activity, and initiating remediation actions.
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
            <h4 className="mb-3">Ready to get started with Fortinet AI ?</h4>
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

export default Fortinet;
