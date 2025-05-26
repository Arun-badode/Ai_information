import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

import sonic from "../../../../public/assets/Img/AI for Cybersecurity/10.png";
import sonic1 from "../../../../public/assets/Img/AI for Cybersecurity/SonicWall1.png";
import sonic2 from "../../../../public/assets/Img/AI for Cybersecurity/SonicWall2.png";
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
const SonicWall = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">Next-Generation Cybersecurity AI</p>
              <h3 className="">
                AI-Powered Threat Detection with SonicWall AI
              </h3>
            </div>
            {[
              {
                icon: "🛡️",
                title: "AI-Powered Threat Detection:",
                desc: "SonicWall AI leverages machine learning and behavioral analytics to detect and prevent cyber threats in real-time, providing comprehensive protection across endpoints and networks.",
              },
              {
                icon: "🤖",
                title: "Next-Generation Firewall Protection:",
                desc: "SonicWall’s next-gen firewall technology is augmented with AI to proactively identify and block advanced threats like malware, ransomware, and zero-day exploits.",
              },
              {
                icon: "☁️",
                title: "Cloud-Integrated Security:",
                desc: "SonicWall AI integrates with cloud platforms to provide scalable and adaptive protection, securing cloud, hybrid, and on-premises environments from emerging cyber risks.",
              },
              {
                icon: "🔍",
                title: "Real-Time Threat Response:",
                desc: "SonicWall’s AI-driven response capabilities enable it to automatically block malicious activity, quarantine infected endpoints, and alert security teams in real time.",
              },
              {
                icon: "⚙️",
                title: "Advanced Threat Intelligence:",
                desc: "SonicWall AI continuously learns from global threat intelligence feeds, updating its models to identify and mitigate new and evolving attack methods.",
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
                src={sonic1}
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={sonic2}
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
                  q: "What is SonicWall AI?",
                  a: "SonicWall AI is a cybersecurity platform powered by artificial intelligence that provides real-time threat detection, prevention, and automated response across networks, endpoints, and cloud environments.",
                },
                {
                  q: "How does SonicWall AI work?",
                  a: "SonicWall AI uses machine learning and behavioral analysis to detect abnormal network activities, identify advanced cyber threats like malware and ransomware, and respond automatically to mitigate risks.",
                },
                {
                  q: "Is SonicWall AI resource-heavy?",
                  a: "No, SonicWall AI is designed to operate efficiently, offering lightweight, scalable protection without compromising system performance.",
                },
                {
                  q: "Can SonicWall AI detect advanced persistent threats (APTs)?",
                  a: "Yes, SonicWall AI is built to detect APTs by analyzing network traffic, user behavior, and endpoint activities, even those that bypass traditional security measures.",
                },
                {
                  q: "Does SonicWall AI provide real-time threat response?",
                  a: "Yes, SonicWall AI provides real-time threat prevention and response, using its AI engine to detect, block, and automatically respond to cyber threats.",
                },
                {
                  q: "Is SonicWall AI suitable for small businesses?",
                  a: "Yes, SonicWall AI is scalable and suitable for businesses of all sizes, providing enterprise-grade security solutions that are easy to deploy and manage.",
                },
                {
                  q: "What operating systems does SonicWall AI support?",
                  a: "SonicWall AI supports a variety of operating systems, including Windows, macOS, Linux, and mobile platforms, ensuring comprehensive protection across all endpoints.",
                },
                {
                  q: "Is SonicWall AI cloud-based?",
                  a: "Yes, SonicWall AI is a cloud-native platform that offers flexible deployment, easy scaling, and provides visibility into both cloud and on-premises environments.",
                },
                {
                  q: "Does SonicWall AI have an API?",
                  a: "Yes, SonicWall AI offers API access for integration with third-party security tools, SIEM platforms, and custom security workflows, enabling automation and orchestration.",
                },
                {
                  q: "Can I automate responses with SonicWall AI?",
                  a: "Yes, SonicWall AI allows you to automate threat detection and response actions, reducing the time to mitigate security risks and improving efficiency.",
                },
                {
                  q: "What is the SonicWall AI dashboard?",
                  a: "The SonicWall AI dashboard provides real-time insights, alerts, and comprehensive visibility into your network’s security posture, making it easier for security teams to monitor threats and respond promptly.",
                },
                {
                  q: "Does SonicWall AI include threat intelligence?",
                  a: "Yes, SonicWall AI integrates threat intelligence feeds to enhance detection, correlate data, and provide real-time updates on emerging cyber threats.",
                },
                {
                  q: "How is SonicWall AI different from traditional security tools?",
                  a: "Unlike traditional security tools, SonicWall AI uses machine learning and behavioral analytics to detect and respond to unknown and advanced threats in real-time, improving accuracy and reducing false positives.",
                },
                {
                  q: "Can SonicWall AI protect cloud environments?",
                  a: "Yes, SonicWall AI offers protection for cloud workloads, ensuring security across both cloud and on-premises environments.",
                },
                {
                  q: "Does SonicWall AI support identity protection?",
                  a: "Yes, SonicWall AI monitors and analyzes user behavior to detect and prevent identity theft, unauthorized access, and insider threats.",
                },
                {
                  q: "Can SonicWall AI isolate compromised endpoints?",
                  a: "Yes, SonicWall AI can isolate compromised endpoints to prevent the spread of malicious activity and protect the rest of the network.",
                },
                {
                  q: "How often is SonicWall AI updated?",
                  a: "SonicWall AI continuously updates its detection models and threat intelligence feeds to stay ahead of emerging risks, ensuring real-time protection against the latest cyber threats.",
                },
                {
                  q: "Does SonicWall AI offer mobile protection?",
                  a: "Yes, SonicWall AI extends protection to mobile devices by monitoring mobile traffic and securing mobile endpoints within the network.",
                },
                {
                  q: "Can I run forensics with SonicWall AI?",
                  a: "Yes, SonicWall AI provides advanced forensic capabilities to investigate and analyze detected threats, enabling teams to track attack timelines and methods.",
                },
                {
                  q: "Does SonicWall AI work offline?",
                  a: "SonicWall AI is primarily cloud-based, but it offers offline protection for endpoints, with data syncing once the device reconnects to the network.",
                },
                {
                  q: "What kind of support does SonicWall AI offer?",
                  a: "SonicWall AI provides 24/7 customer support, a comprehensive knowledge base, and access to security experts for troubleshooting and incident response.",
                },
                {
                  q: "What’s included in SonicWall AI’s Managed Detection and Response (MDR)?",
                  a: "SonicWall’s MDR service offers continuous threat monitoring, incident response, and threat hunting by expert teams to ensure rapid detection and mitigation of cyber threats.",
                },
                {
                  q: "Is SonicWall AI compliant with industry regulations?",
                  a: "Yes, SonicWall AI helps organizations meet compliance with regulatory frameworks such as HIPAA, PCI DSS, GDPR, and more.",
                },
                {
                  q: "Does SonicWall AI offer training or certification?",
                  a: "Yes, SonicWall provides training programs and certifications to help security professionals understand how to leverage the platform for optimal threat detection and incident response.",
                },
                {
                  q: "Can I test SonicWall AI before purchasing?",
                  a: "Yes, SonicWall offers free trials and product demos to help businesses evaluate its features before committing to a purchase.",
                },
                {
                  q: "Does SonicWall AI offer reporting features?",
                  a: "Yes, SonicWall AI provides detailed reports, including incident timelines, security posture analysis, and risk assessments, allowing for effective security management.",
                },
                {
                  q: "Is SonicWall AI customizable?",
                  a: "Yes, SonicWall AI allows for customizable detection thresholds, automated response actions, and integration options to suit specific organizational needs.",
                },
                {
                  q: "Does SonicWall AI detect insider threats?",
                  a: "Yes, SonicWall AI leverages behavioral analytics to detect insider threats by monitoring abnormal access patterns and unauthorized activities.",
                },
                {
                  q: "How is SonicWall AI licensed?",
                  a: "SonicWall AI is licensed on a per-endpoint or per-user basis, offering flexible licensing options to accommodate organizations of all sizes.",
                },
                {
                  q: "How do I contact SonicWall AI?",
                  a: "You can contact SonicWall AI through their website’s contact form, support portal, or by engaging with a sales representative.",
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
                    Why Use SonicWall AI?
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
                      SonicWall AI provides real-time threat detection and
                      prevention across endpoints, networks, and cloud
                      environments.
                    </li>
                    <li className="mb-3">
                      It uses machine learning to analyze network traffic and
                      user behavior, ensuring the detection of both known and
                      unknown threats.
                    </li>
                    <li className="mb-3">
                      Fully cloud-native architecture allows for seamless
                      scaling and easy deployment, ensuring quick protection for
                      businesses of any size.
                    </li>
                    <li className="mb-3">
                      Offers automated incident response and threat mitigation,
                      reducing response times and minimizing manual
                      intervention.
                    </li>
                    <li className="mb-3">
                      Integrates with other security tools, including SIEMs, and
                      offers a user-friendly interface for easy threat
                      management and monitoring.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore SonicWall AI
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
                    Real-time AI-powered threat detection, preventing attacks
                    before they spread across networks and endpoints.
                  </li>
                  <li className="mb-2">
                    Provides comprehensive protection across networks,
                    endpoints, and cloud environments with seamless integration.
                  </li>
                  <li className="mb-2">
                    Cloud-based architecture for easy scalability and efficient
                    deployment, making it suitable for businesses of all sizes.
                  </li>
                  <li className="mb-2">
                    Strong firewall and advanced intrusion prevention systems
                    (IPS) for proactive threat prevention.
                  </li>
                  <li className="mb-2">
                    Automated incident response and reporting tools to minimize
                    response time and reduce manual intervention.
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
                    Can be expensive, particularly for small businesses or those
                    with limited budgets.
                  </li>
                  <li className="mb-2">
                    Requires advanced technical expertise for initial
                    configuration and optimal performance, particularly for
                    complex environments.
                  </li>
                  <li className="mb-2">
                    May generate false positives during the initial deployment
                    phase, requiring fine-tuning and ongoing adjustments.
                  </li>
                  <li className="mb-2">
                    Dependence on cloud connectivity can be a limitation for
                    environments with unreliable or restricted internet access.
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
              Alternatives to SonicWall AI
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
                    <strong>SentinelOne</strong> – An AI-powered endpoint
                    protection platform that uses machine learning to prevent,
                    detect, and respond to cyber threats in real-time across all
                    devices.
                  </li>
                  <li className="mb-2">
                    <strong>Fortinet FortiAI</strong> – An AI-based platform
                    offering advanced threat detection and automated response,
                    particularly strong in network security and firewall
                    management.
                  </li>
                  <li className="mb-2">
                    <strong>CrowdStrike</strong> – A cloud-native cybersecurity
                    platform utilizing AI and machine learning for real-time
                    endpoint protection, threat detection, and incident
                    response.
                  </li>
                  <li className="mb-2">
                    <strong>Darktrace</strong> – An autonomous cybersecurity
                    platform using machine learning and AI to detect and respond
                    to cyber threats with minimal human intervention, focusing
                    on network and cloud security.
                  </li>
                  <li className="mb-2">
                    <strong>Vectra AI</strong> – Leverages machine learning to
                    provide real-time visibility into network traffic, detect
                    hidden threats, and deliver advanced threat hunting and
                    incident response capabilities.
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
  {/* Image Section: show first on mobile, second on large screens */}
  <div className="col-12 col-lg-6 mb-4 mb-lg-0 text-center order-1 order-lg-2">
    <img
      src={sonic}
      className="img-fluid rounded-3"
      style={{ maxWidth: "100%", height: "auto" }}
      alt="SonicWall AI"
    />
  </div>

  {/* Text Section: show second on mobile, first on large screens */}
  <div
    className="col-12 col-lg-6 mb-4 mb-lg-0 order-2 order-lg-1"
    style={{ paddingRight: "30px" }}
  >
    <p className="text-primary">
      Create stunning visuals effortlessly
    </p>
    <h1>SonicWall AI</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      SonicWall AI is a suite of advanced cybersecurity solutions that
      leverages artificial intelligence (AI) and machine learning to
      protect businesses against evolving threats. These solutions
      focus on proactive threat prevention, real-time detection, and
      automated responses, offering a comprehensive approach to
      securing networks, endpoints, and cloud environments. With a
      focus on AI-driven technologies, SonicWall AI delivers
      predictive and real-time security measures that are adaptive,
      scalable, and highly effective at blocking sophisticated
      attacks, including ransomware, zero-day exploits, and advanced
      persistent threats (APTs).
    </p>
    <p>
      SonicWall's AI-powered tools, such as firewalls, intrusion
      prevention systems, and malware detection, help businesses
      safeguard their IT infrastructure by continuously learning from
      new data and adapting to emerging threats. This provides
      enhanced protection with minimal reliance on traditional
      signature-based methods.
    </p>
    <div className="d-flex flex-wrap gap-3 mb-4 mb-lg-0">
      <a
        href="https://www.sonicwall.com/award/sonicwall-named-winner-in-best-ai-and-machine-learning-based-security-solution-of-the-year-award"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-lg px-4"
      >
        Explore Tool
      </a>
    </div>
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
                How to Use SonicWall AI?
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
                      Deploy SonicWall Sensors
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Install SonicWall’s AI-powered sensors on your network
                      perimeter and endpoints to monitor traffic and detect
                      threats in real-time.
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
                      Analyze Traffic with SonicWall AI
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      SonicWall AI analyzes network traffic and user behavior
                      using machine learning to identify anomalies, threats, and
                      vulnerabilities.
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
                      Respond and Prevent Threats
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      With SonicWall AI’s autonomous threat response, take
                      immediate action to block or quarantine threats
                      automatically, securing your network.
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

export default SonicWall;
