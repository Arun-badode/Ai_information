import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import magisto from "../../../Images/MagistoAI.png";
import cylance from "../../../../public/assets/Img/AI for Cybersecurity/9.png";
import s1 from "../../../../public/assets/Img/AI for Cybersecurity/cylance-s1.png";
import s2 from "../../../../public/assets/Img/AI for Cybersecurity/cylance-s2.png";
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
const Cylance = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">Next-Generation Cybersecurity AI</p>
              <h3 className="">AI-Powered Threat Detection with Cylance AI</h3>
            </div>
            {[
              {
                icon: "🛡️",
                title: "AI-Powered Threat Detection:",
                desc: "Cylance AI uses advanced machine learning algorithms to detect and block cyber threats in real-time, offering proactive defense against malware, ransomware, and other malicious attacks.",
              },
              {
                icon: "🤖",
                title: "AI-Based Malware Prevention:",
                desc: "Cylance’s AI-driven approach allows it to prevent malware infections before they can execute, ensuring real-time protection across endpoints and networks.",
              },
              {
                icon: "☁️",
                title: "Cloud-Integrated Security:",
                desc: "Cylance integrates seamlessly with cloud-based environments, enabling scalable protection against evolving cyber threats in cloud, hybrid, and on-premises infrastructures.",
              },
              {
                icon: "🔍",
                title: "Advanced Threat Response:",
                desc: "Cylance AI continuously analyzes data to provide real-time alerts, automatic quarantine of suspicious files, and quick mitigation of security threats across endpoints.",
              },
              {
                icon: "⚙️",
                title: "Proactive Threat Intelligence:",
                desc: "Cylance uses global threat intelligence to adapt its detection capabilities, enabling faster identification of new and emerging threats through predictive models.",
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
                src={s2}
                alt="cylance"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={s1}
                cylance
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
                  q: "What is Cylance AI?",
                  a: "Cylance AI is an AI-powered cybersecurity platform that uses machine learning to proactively detect and prevent cyber threats, including malware, ransomware, and other advanced attacks.",
                },
                {
                  q: "How does Cylance AI work?",
                  a: "Cylance AI uses machine learning models to analyze files, processes, and behaviors in real-time, identifying and blocking malicious activities before they can compromise your systems.",
                },
                {
                  q: "Is Cylance AI resource-heavy?",
                  a: "No, Cylance AI is known for its lightweight design, providing powerful protection without negatively impacting system performance or requiring significant resources.",
                },
                {
                  q: "Can Cylance AI detect advanced persistent threats (APTs)?",
                  a: "Yes, Cylance AI uses advanced machine learning techniques to detect even the most sophisticated APTs, offering proactive protection against targeted and persistent cyberattacks.",
                },
                {
                  q: "Does Cylance AI provide real-time threat response?",
                  a: "Yes, Cylance AI provides real-time threat detection and blocking, preventing malware and other threats from executing on endpoints and spreading across your network.",
                },
                {
                  q: "Is Cylance AI suitable for small businesses?",
                  a: "Yes, Cylance AI is scalable and provides effective endpoint protection for businesses of all sizes, including small businesses with limited IT resources.",
                },
                {
                  q: "What operating systems does Cylance AI support?",
                  a: "Cylance AI supports multiple operating systems including Windows, macOS, and Linux, offering comprehensive protection across various endpoints.",
                },
                {
                  q: "Is Cylance AI cloud-based?",
                  a: "Yes, Cylance AI is cloud-managed, allowing for efficient deployment, continuous updates, and central management of endpoint security without requiring on-premises infrastructure.",
                },
                {
                  q: "Does Cylance AI have an API?",
                  a: "Yes, Cylance AI provides an API that allows integration with other security tools, SIEM systems, and custom workflows, enabling seamless automation and orchestration of security events.",
                },
                {
                  q: "Can I automate responses with Cylance AI?",
                  a: "Yes, Cylance AI supports automated response actions, allowing security teams to set predefined policies for threat detection, quarantine, and remediation, reducing manual intervention.",
                },
                {
                  q: "What is the Cylance AI dashboard?",
                  a: "The Cylance AI dashboard provides a centralized view of threat activity, allowing security teams to monitor real-time events, manage alerts, and take action against detected threats.",
                },
                {
                  q: "Does Cylance AI include threat intelligence?",
                  a: "Yes, Cylance AI integrates threat intelligence to enhance detection capabilities and provide contextual insights into emerging threats for faster and more accurate responses.",
                },
                {
                  q: "How is Cylance AI different from traditional security tools?",
                  a: "Unlike traditional security tools that rely on signature-based detection, Cylance AI uses artificial intelligence and machine learning to identify unknown threats and protect endpoints proactively, reducing the reliance on reactive measures.",
                },
                {
                  q: "Can Cylance AI protect cloud environments?",
                  a: "Yes, Cylance AI extends its protection to cloud environments, securing cloud workloads and providing visibility into cloud traffic and activities.",
                },
                {
                  q: "Does Cylance AI support identity protection?",
                  a: "Yes, Cylance AI offers identity protection features by monitoring and analyzing user activities, identifying suspicious behavior such as unauthorized access or credential misuse.",
                },
                {
                  q: "Can Cylance AI isolate compromised endpoints?",
                  a: "Yes, Cylance AI can automatically isolate compromised endpoints from the network, preventing further attacks and ensuring minimal damage.",
                },
                {
                  q: "How often is Cylance AI updated?",
                  a: "Cylance AI is continuously updated with the latest machine learning models, threat intelligence, and security patches, ensuring that it stays ahead of emerging threats.",
                },
                {
                  q: "Does Cylance AI offer mobile protection?",
                  a: "Yes, Cylance AI extends its protection to mobile devices by monitoring mobile traffic and securing endpoints across Android and iOS devices.",
                },
                {
                  q: "Can I run forensics with Cylance AI?",
                  a: "Yes, Cylance AI provides advanced forensics capabilities to investigate and analyze detected threats, enabling teams to track attack methods and timelines.",
                },
                {
                  q: "Does Cylance AI work offline?",
                  a: "Yes, Cylance AI is designed to work offline, providing detection and blocking of threats even without a constant internet connection. Data is synced once the endpoint reconnects.",
                },
                {
                  q: "What kind of support does Cylance AI offer?",
                  a: "Cylance AI offers 24/7 support through its help desk, knowledge base, and direct assistance from security experts to address issues and assist with incident response.",
                },
                {
                  q: "What’s included in Cylance AI’s Managed Detection and Response (MDR)?",
                  a: "Cylance AI’s MDR service includes continuous monitoring, automated threat hunting, incident response, and 24/7 expert oversight to detect and mitigate security incidents.",
                },
                {
                  q: "Is Cylance AI compliant with industry regulations?",
                  a: "Yes, Cylance AI supports compliance with regulatory standards such as GDPR, HIPAA, PCI DSS, and other frameworks, helping organizations meet security and privacy requirements.",
                },
                {
                  q: "Does Cylance AI offer training or certification?",
                  a: "Yes, Cylance provides training programs and certifications to help organizations and security teams optimize their use of the platform for enhanced threat detection and response.",
                },
                {
                  q: "Can I test Cylance AI before purchasing?",
                  a: "Yes, Cylance offers free trials and product demos to help businesses evaluate the platform before committing to a full purchase.",
                },
                {
                  q: "Does Cylance AI offer reporting features?",
                  a: "Yes, Cylance AI provides detailed reporting features, including incident timelines, security posture analysis, and risk assessments for better decision-making and threat management.",
                },
                {
                  q: "Is Cylance AI customizable?",
                  a: "Yes, Cylance AI allows for customizable detection thresholds, response actions, and integrations to suit the specific needs and environments of organizations.",
                },
                {
                  q: "Does Cylance AI detect insider threats?",
                  a: "Yes, Cylance AI uses machine learning to detect abnormal user behavior, unauthorized access, and other indicators of insider threats.",
                },
                {
                  q: "How is Cylance AI licensed?",
                  a: "Cylance AI is licensed on a per-endpoint basis, with flexible pricing options for businesses of different sizes and needs.",
                },
                {
                  q: "How do I contact Cylance AI?",
                  a: "You can contact Cylance AI through their website’s contact form, support portal, or by engaging with a sales representative.",
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
                    Why Use Cylance AI?
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
                      Cylance AI leverages artificial intelligence to provide
                      proactive threat detection, preventing attacks before they
                      can occur.
                    </li>
                    <li className="mb-3">
                      Uses machine learning to analyze files, processes, and
                      behaviors in real-time, identifying even the most
                      sophisticated malware.
                    </li>
                    <li className="mb-3">
                      Lightweight and resource-efficient, Cylance AI ensures
                      minimal system impact while delivering advanced
                      protection.
                    </li>
                    <li className="mb-3">
                      Fully autonomous, requiring no internet connectivity for
                      detection and blocking of threats, making it ideal for
                      offline environments.
                    </li>
                    <li className="mb-3">
                      Cylance AI integrates with existing endpoint protection
                      systems, providing a seamless experience for threat
                      prevention and detection across various platforms.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore Cylance AI
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
                    Uses AI to provide proactive threat prevention, detecting
                    and stopping malware, ransomware, and other advanced threats
                    before they can cause harm.
                  </li>
                  <li className="mb-2">
                    Lightweight agent with minimal system impact, ensuring high
                    performance while providing robust protection.
                  </li>
                  <li className="mb-2">
                    Cloud-native architecture allows for easy deployment and
                    seamless scaling across the organization.
                  </li>
                  <li className="mb-2">
                    Offers both endpoint protection and advanced threat
                    detection with machine learning algorithms, ensuring fast
                    and accurate identification of potential risks.
                  </li>
                  <li className="mb-2">
                    Does not rely on traditional signature-based detection,
                    which is often ineffective against new or unknown threats.
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
                    Can be expensive, especially for small businesses or
                    organizations with tight budgets.
                  </li>
                  <li className="mb-2">
                    May require ongoing fine-tuning and configuration to
                    minimize false positives and improve detection accuracy.
                  </li>
                  <li className="mb-2">
                    Initial setup can be complex for organizations that lack
                    experienced IT personnel or cybersecurity experts.
                  </li>
                  <li className="mb-2">
                    Cloud-dependent, which may pose challenges in environments
                    with poor or restricted internet access.
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
              Alternatives to Cylance AI
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
                    platform that provides autonomous endpoint protection,
                    threat detection, and real-time response capabilities across
                    all devices.
                  </li>
                  <li className="mb-2">
                    <strong>CrowdStrike</strong> – A cloud-native solution that
                    combines AI and machine learning to offer real-time endpoint
                    protection, threat hunting, and incident response across
                    networks and endpoints.
                  </li>
                  <li className="mb-2">
                    <strong>Fortinet FortiAI</strong> – Provides AI-powered
                    security operations for advanced threat detection and
                    response, with a focus on securing network perimeters and
                    cloud environments.
                  </li>
                  <li className="mb-2">
                    <strong>Darktrace</strong> – An autonomous security platform
                    using machine learning and AI to detect and respond to cyber
                    threats, minimizing manual intervention while securing
                    networks and cloud infrastructures.
                  </li>
                  <li className="mb-2">
                    <strong>Bitdefender GravityZone</strong> – An AI-driven
                    cybersecurity platform offering endpoint protection,
                    advanced malware detection, and response capabilities with
                    cloud-based and on-premise deployment options.
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
              <h1>Cylance AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Cylance AI refers to a set of cybersecurity solutions powered by
                artificial intelligence and machine learning, designed to
                prevent, detect, and mitigate cyber threats in real-time. Unlike
                traditional signature-based methods, Cylance AI leverages
                advanced machine learning algorithms to predict and prevent
                malicious activities before they even occur. This proactive
                approach offers superior protection against threats such as
                malware, ransomware, and advanced persistent threats (APTs),
                providing organizations with enhanced security and reduced
                reliance on manual interventions.
              </p>
              <p>
                Cylance's AI-driven security tools integrate seamlessly with
                both cloud and on-premises environments, offering solutions that
                are adaptive and scalable. By using predictive models based on
                behavioral patterns, Cylance’s AI can identify new, unknown
                threats and respond to them faster than traditional systems.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4 mb-lg-0">
        <a
  href="https://arcticwolf.com/cylance/"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-primary"
>
  Explore more
</a>

              </div>
            </div>
            {/* Right side (Image Section) */}
            <div className="col-12 col-lg-6 mb-4 mb-lg-0 text-center">
              <img
                src={cylance}
                className="img-fluid rounded-3"
                style={{ maxWidth: "100%", height: "auto" }}
                alt="Cylance AI"
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
                How to Use Cylance AI?
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
                      Install CylancePROTECT Agents
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Deploy CylancePROTECT agents on endpoints to enable
                      AI-powered threat detection and prevention in real time.
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
                      Leverage AI to Detect and Prevent Threats
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Cylance AI uses advanced machine learning to proactively
                      detect and block known and unknown threats before they
                      execute.
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
                      Monitor and Manage Threats with the Console
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Use the Cylance Console for real-time monitoring, incident
                      investigation, and management of security incidents across
                      your endpoints.
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
            {["features", "screenshots", "reviews", "FAQs", "why-we-use", "pros & cons", "alternative"].map((tab) => (
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

export default Cylance;
