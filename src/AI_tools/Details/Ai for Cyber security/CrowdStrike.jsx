import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

import crowd from "../../../../public/assets/Img/AI for Cybersecurity/1.png";
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
const CrowdStrike = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">Enterprise-Grade Cybersecurity</p>
              <h3 className="">AI-Powered Threat Detection with CrowdStrike</h3>
            </div>
            {[
              {
                icon: "🛡️",
                title: "Real-Time Threat Prevention:",
                desc: "CrowdStrike uses AI to instantly detect and stop malware, ransomware, and fileless attacks across all endpoints.",
              },
              {
                icon: "🤖",
                title: "Behavior-Based Detection:",
                desc: "Monitors endpoint behavior using machine learning to identify suspicious activity and stop threats before damage occurs.",
              },
              {
                icon: "☁️",
                title: "Cloud-Native Platform:",
                desc: "No on-premises infrastructure needed—deploy the lightweight Falcon agent and manage everything from the cloud console.",
              },
              {
                icon: "🔍",
                title: "Integrated Threat Intelligence:",
                desc: "Backed by real-time global intelligence to enhance detection, contextualize alerts, and speed up investigations.",
              },
              {
                icon: "⚙️",
                title: "Automated Incident Response:",
                desc: "Respond automatically to detected threats—quarantine endpoints, delete malicious files, and generate forensic data instantly.",
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
                alt="crowdstrke"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src="https://www.tipard.com/images/editor/free-online-video-editor/magisto.jpg"
                alt="crowdstrike"
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
                  q: "What is CrowdStrike AI?",
                  a: "CrowdStrike AI is a cloud-native cybersecurity solution that uses artificial intelligence and machine learning to detect, prevent, and respond to threats in real-time.",
                },
                {
                  q: "How does CrowdStrike AI work?",
                  a: "It leverages the lightweight Falcon agent and behavioral analytics to monitor endpoints, detect anomalies, and stop cyberattacks before they spread.",
                },
                {
                  q: "Is CrowdStrike Falcon agent resource-heavy?",
                  a: "No, the Falcon agent is designed to be lightweight and runs silently in the background with minimal impact on system performance.",
                },
                {
                  q: "Can CrowdStrike detect ransomware?",
                  a: "Yes, CrowdStrike detects and stops ransomware attacks using behavior-based AI analysis and threat intelligence.",
                },
                {
                  q: "Does CrowdStrike support real-time response?",
                  a: "Yes, it offers real-time incident response, allowing you to isolate endpoints, remove malicious files, and perform forensic investigations.",
                },
                {
                  q: "Is CrowdStrike suitable for small businesses?",
                  a: "Yes, CrowdStrike offers scalable solutions that suit both small businesses and large enterprises.",
                },
                {
                  q: "What operating systems does CrowdStrike support?",
                  a: "It supports Windows, macOS, and Linux endpoints, as well as cloud workloads and mobile devices.",
                },
                {
                  q: "Is CrowdStrike cloud-based?",
                  a: "Yes, CrowdStrike is a fully cloud-native platform, allowing rapid deployment without on-premises infrastructure.",
                },
                {
                  q: "Does CrowdStrike have an API?",
                  a: "Yes, CrowdStrike provides extensive API access for integration with SIEMs, SOAR platforms, and custom security workflows.",
                },
                {
                  q: "Can I automate responses with CrowdStrike?",
                  a: "Yes, you can automate workflows and responses using Falcon Fusion and custom scripts triggered by specific events.",
                },
                {
                  q: "What is the Falcon Console?",
                  a: "The Falcon Console is a centralized web-based dashboard where administrators can monitor threats, review detections, and manage policies.",
                },
                {
                  q: "Does CrowdStrike include threat intelligence?",
                  a: "Yes, CrowdStrike incorporates its Threat Graph™ and intelligence feeds to provide context-aware alerts and recommendations.",
                },
                {
                  q: "How is CrowdStrike different from traditional antivirus?",
                  a: "Unlike legacy antivirus, CrowdStrike uses AI, cloud-based analysis, and behavior detection instead of relying only on signature updates.",
                },
                {
                  q: "Can CrowdStrike protect cloud environments?",
                  a: "Yes, CrowdStrike provides security for cloud workloads in AWS, Azure, and Google Cloud through Falcon Cloud Workload Protection.",
                },
                {
                  q: "Does CrowdStrike support identity protection?",
                  a: "Yes, with Falcon Identity Protection, CrowdStrike helps monitor and secure user authentication and credential use.",
                },
                {
                  q: "Can CrowdStrike isolate infected devices?",
                  a: "Yes, administrators can remotely isolate endpoints from the network to prevent the spread of malware or data exfiltration.",
                },
                {
                  q: "How often is CrowdStrike updated?",
                  a: "As a cloud-native solution, CrowdStrike updates threat intelligence and detection capabilities continuously without user intervention.",
                },
                {
                  q: "Does CrowdStrike offer mobile protection?",
                  a: "Yes, CrowdStrike extends its protection to Android and iOS devices through its mobile threat defense solutions.",
                },
                {
                  q: "Can I run forensics with CrowdStrike?",
                  a: "Yes, Falcon Insight provides endpoint detection and response (EDR) capabilities that support in-depth forensics and timeline analysis.",
                },
                {
                  q: "Does CrowdStrike work offline?",
                  a: "While it’s cloud-based, the Falcon agent maintains local detection capabilities even when offline and syncs data once reconnected.",
                },
                {
                  q: "What kind of support does CrowdStrike offer?",
                  a: "CrowdStrike offers 24/7 support, knowledge base, ticketing, and access to Falcon Complete—its fully managed threat hunting service.",
                },
                {
                  q: "What’s included in Falcon Complete?",
                  a: "Falcon Complete is a managed service that combines the CrowdStrike platform with a dedicated team for full threat response and management.",
                },
                {
                  q: "Is CrowdStrike compliant with industry regulations?",
                  a: "Yes, CrowdStrike supports compliance with standards like HIPAA, PCI DSS, GDPR, and more.",
                },
                {
                  q: "Does CrowdStrike offer training or certification?",
                  a: "Yes, the CrowdStrike University provides training, documentation, and certification for administrators and security professionals.",
                },
                {
                  q: "Can I test CrowdStrike before purchasing?",
                  a: "Yes, CrowdStrike offers free trials and product demos for businesses evaluating the platform.",
                },
                {
                  q: "Does CrowdStrike offer reporting features?",
                  a: "Yes, detailed reporting and dashboards are available for detections, investigations, user behavior, and system health.",
                },
                {
                  q: "Is CrowdStrike AI customizable?",
                  a: "You can configure detection thresholds, automated responses, and integrations to suit your environment’s needs.",
                },
                {
                  q: "Does CrowdStrike detect insider threats?",
                  a: "Yes, CrowdStrike monitors for lateral movement, suspicious access, and identity misuse to detect insider threats.",
                },
                {
                  q: "How is CrowdStrike licensed?",
                  a: "CrowdStrike licenses its platform on a per-endpoint basis, with multiple tiers and add-on modules available.",
                },
                {
                  q: "How do I contact CrowdStrike?",
                  a: "You can reach CrowdStrike via their website’s contact form, support portal, or by engaging with a sales representative.",
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
                    Why Use CrowdStrike AI?
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
                      CrowdStrike AI delivers real-time threat detection and
                      response with cloud-native architecture.
                    </li>
                    <li className="mb-3">
                      Provides advanced endpoint protection using behavioral
                      analysis, threat intelligence, and machine learning.
                    </li>
                    <li className="mb-3">
                      Lightweight Falcon agent ensures minimal system impact
                      while monitoring threats continuously.
                    </li>
                    <li className="mb-3">
                      Seamless integration with security ecosystems, including
                      SIEM tools, cloud platforms, and APIs.
                    </li>
                    <li className="mb-3">
                      Ideal for businesses of all sizes that require fast,
                      automated, and scalable cybersecurity solutions.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore CrowdStrike AI
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
                    Real-time threat detection and prevention using AI and
                    behavioral analysis.
                  </li>
                  <li className="mb-2">
                    Cloud-native architecture allows lightweight agent
                    deployment and fast scalability.
                  </li>
                  <li className="mb-2">
                    Integrated threat intelligence and automated incident
                    response reduce manual workload.
                  </li>
                  <li className="mb-2">
                    Provides visibility across endpoints, workloads, identities,
                    and data.
                  </li>
                  <li className="mb-2">
                    Easy integration with third-party tools like SIEMs and cloud
                    providers.
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
                    Higher cost compared to some other endpoint protection
                    platforms.
                  </li>
                  <li className="mb-2">
                    Requires internet connectivity for full functionality due to
                    its cloud-native nature.
                  </li>
                  <li className="mb-2">
                    Advanced features may require additional licensing or
                    modules.
                  </li>
                  <li className="mb-2">
                    Some users report a learning curve for new administrators.
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
                    <strong>SentinelOne</strong> – A next-gen endpoint
                    protection platform using AI to prevent, detect, and respond
                    to cyber threats autonomously.
                  </li>
                  <li className="mb-2">
                    <strong>Microsoft Defender for Endpoint</strong> – An
                    enterprise-grade security solution from Microsoft offering
                    endpoint detection, response, and threat analytics.
                  </li>
                  <li className="mb-2">
                    <strong>Trend Micro Apex One</strong> – A comprehensive
                    endpoint security suite with machine learning, behavior
                    analysis, and vulnerability protection.
                  </li>
                  <li className="mb-2">
                    <strong>Carbon Black (VMware)</strong> – Provides
                    cloud-native endpoint protection and behavioral EDR with
                    continuous recording and advanced threat hunting.
                  </li>
                  <li className="mb-2">
                    <strong>Symantec Endpoint Security</strong> – A robust
                    solution for threat prevention, detection, and incident
                    response, powered by machine learning and threat
                    intelligence.
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
              <h1>CrowdStrike AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>

              <p>
                CrowdStrike AI is a cutting-edge cybersecurity platform that
                integrates artificial intelligence and machine learning to
                provide real-time protection against cyber threats. Known for
                its robust threat detection, prevention, and incident response
                capabilities, CrowdStrike leverages AI-powered solutions to
                secure endpoints, networks, and cloud environments. The platform
                uses advanced algorithms to predict and detect both known and
                unknown threats, ensuring that organizations stay one step ahead
                of cybercriminals.
              </p>

              <div className="mb-3">
                <span className="badge bg-primary me-2"> Image</span>
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
              <img src={crowd} style={{ MaxWidth: "100%", height: "300px" }} />
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
                How to Use CrowdStrike AI?
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
                      Deploy Falcon Agent
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Start by installing the lightweight CrowdStrike Falcon
                      agent on your devices. It silently runs in the background
                      and monitors all activity.
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
                      Access the Falcon Console
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Log into the cloud-based Falcon Console to monitor
                      endpoints, review threats, configure settings, and launch
                      automated investigations.
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
                      Detect & Respond Automatically
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Let CrowdStrike AI detect, analyze, and respond to threats
                      in real time with proactive threat intelligence and
                      automated incident handling.
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
            <h4 className="mb-3">Ready to get started with CrowdStrike AI ?</h4>
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

export default CrowdStrike;
