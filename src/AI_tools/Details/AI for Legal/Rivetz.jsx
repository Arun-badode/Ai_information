import React, { useState } from "react";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

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
const Rivetz = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">Create Stunning Videos in Minutes</p>
              <h3 className=""> Drag-and-Drop Simplicity & Custom Branding</h3>
            </div>
            {[
              {
                icon: "🔒",
                title: "Rivetz: AI-Powered Blockchain Security Platform",
                desc: "Rivetz offers AI-driven security for blockchain transactions, ensuring data integrity and protecting assets against cyber threats with advanced encryption and authentication methods.",
              },
              {
                icon: "🔐",
                title: "AI-Enhanced Data Encryption",
                desc: "Rivetz uses AI to enhance encryption techniques, providing top-tier security for blockchain transactions and safeguarding sensitive data in real time.",
              },
              {
                icon: "🛡",
                title: "Blockchain Authentication",
                desc: "Rivetz ensures secure and seamless authentication for blockchain applications, leveraging AI to verify identities and prevent unauthorized access.",
              },
              {
                icon: "⚙",
                title: "Smart Contract Monitoring",
                desc: "AI-powered smart contract monitoring enables Rivetz to identify vulnerabilities, flag potential issues, and enhance the overall security of decentralized finance (DeFi) applications.",
              },
              {
                icon: "🔍",
                title: "Real-Time Threat Detection",
                desc: "Rivetz continuously monitors blockchain networks, using AI to detect and mitigate threats in real time, ensuring a secure environment for transactions.",
              },
              {
                icon: "⚖",
                title: "Regulatory Compliance Support",
                desc: "The platform assists businesses in ensuring their blockchain operations are compliant with legal and regulatory requirements through AI-assisted monitoring and reporting.",
              },
              {
                icon: "🧠",
                title: "Machine Learning for Adaptive Security",
                desc: "Rivetz uses machine learning to adapt to new security threats, constantly learning from emerging vulnerabilities and evolving to counter new risks in blockchain ecosystems.",
              },
              {
                icon: "🌍",
                title: "Global Blockchain Security",
                desc: "Rivetz offers global protection for blockchain networks, supporting decentralized applications across multiple jurisdictions with comprehensive AI security protocols.",
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
                  q: "What is Rivetz?",
                  a: "Rivetz is a blockchain-based security platform that integrates Trusted Execution Environment (TEE) with AI to ensure mobile device and digital identity security.",
                },
                {
                  q: "How does Rivetz ensure mobile security?",
                  a: "Rivetz uses TEE to isolate sensitive data from potential threats, ensuring encrypted storage and secure execution of operations on mobile devices.",
                },
                {
                  q: "What is a Trusted Execution Environment (TEE)?",
                  a: "A TEE is a secure, isolated environment in a device’s hardware where sensitive data and operations can be executed without being exposed to external threats.",
                },
                {
                  q: "What does Rivetz use blockchain for?",
                  a: "Rivetz utilizes blockchain technology to create decentralized security protocols that secure mobile devices, digital identities, and cryptocurrency transactions.",
                },
                {
                  q: "How does Rivetz protect cryptocurrency wallets?",
                  a: "Rivetz protects cryptocurrency wallets by providing hardware-backed encryption and ensuring private keys are securely stored and managed.",
                },
                {
                  q: "What is the RvT token?",
                  a: "The RvT token is the native cryptocurrency of the Rivetz ecosystem, used for transaction validation, incentivizing service providers, and governance.",
                },
                {
                  q: "How is AI integrated into Rivetz?",
                  a: "AI is employed to continuously monitor mobile devices and digital identities, identifying threats and providing proactive security measures.",
                },
                {
                  q: "Can Rivetz be used to protect mobile applications?",
                  a: "Yes, Rivetz ensures the security of mobile applications by employing trusted hardware, encryption, and AI threat detection.",
                },
                {
                  q: "Does Rivetz offer secure messaging solutions?",
                  a: "Yes, Rivetz provides end-to-end encryption for secure messaging, ensuring that communications remain confidential and protected from interception.",
                },
                {
                  q: "What are the benefits of using Rivetz for digital identity protection?",
                  a: "Rivetz provides decentralized protection for digital identities using blockchain, ensuring privacy, self-sovereignty, and secure access.",
                },
                {
                  q: "What is self-sovereign identity (SSI)?",
                  a: "SSI is a digital identity model where individuals have control over their identity data, eliminating the need for central authorities.",
                },
                {
                  q: "What types of encryption does Rivetz use?",
                  a: "Rivetz employs dual encryption, using both public and private keys to secure sensitive data both in transit and at rest.",
                },
                {
                  q: "Can Rivetz protect against identity theft?",
                  a: "Yes, Rivetz prevents identity theft by securing user identities through blockchain and encryption technologies, making unauthorized access extremely difficult.",
                },
                {
                  q: "What is the Sentinel Protocol in Rivetz?",
                  a: "Sentinel Protocol is a decentralized cybersecurity platform that Rivetz integrates with to provide real-time threat intelligence and secure blockchain transactions.",
                },
                {
                  q: "How does Rivetz ensure mobile hardware security?",
                  a: "Rivetz ensures mobile hardware security by integrating trusted hardware into mobile devices, making unauthorized access nearly impossible.",
                },
                {
                  q: "Does Rivetz provide mobile security for enterprise solutions?",
                  a: "Yes, Rivetz offers mobile security solutions tailored for enterprises, ensuring that corporate devices and sensitive data are protected from cyber threats.",
                },
                {
                  q: "Is Rivetz compatible with cryptocurrency exchanges?",
                  a: "Yes, Rivetz can integrate with cryptocurrency exchanges, enhancing the security of transactions and protecting user data during trading activities.",
                },
                {
                  q: "How does Rivetz ensure data protection?",
                  a: "Rivetz uses encryption and secure execution environments to protect sensitive data on mobile devices and during transmission, safeguarding it from unauthorized access.",
                },
                {
                  q: "What is blockchain-based security?",
                  a: "Blockchain-based security uses blockchain technology to secure and decentralize data storage and transactions, making it tamper-proof and resistant to cyber threats.",
                },
                {
                  q: "What makes Rivetz’s security decentralized?",
                  a: "Rivetz uses blockchain to decentralize control and management of security data, providing a more robust and transparent solution compared to centralized models.",
                },
                {
                  q: "How does Rivetz protect mobile device security?",
                  a: "Rivetz protects mobile devices by using hardware security features, trusted execution environments, and secure messaging protocols to prevent unauthorized access.",
                },
                {
                  q: "Can Rivetz protect against cyberattacks?",
                  a: "Yes, Rivetz prevents a wide range of cyberattacks, including malware, ransomware, and phishing, by providing multi-layered security features.",
                },
                {
                  q: "What are mobile security challenges addressed by Rivetz?",
                  a: "Rivetz addresses challenges such as unauthorized access, data breaches, device tampering, and malware attacks using blockchain encryption and trusted hardware.",
                },
                {
                  q: "Can Rivetz integrate with existing cybersecurity tools?",
                  a: "Yes, Rivetz is designed to integrate with other cybersecurity tools, enhancing their functionality and providing an additional layer of protection.",
                },
                {
                  q: "What is blockchain adoption, and how does Rivetz contribute?",
                  a: "Blockchain adoption refers to the integration of blockchain technology in various sectors. Rivetz contributes by securing blockchain-based transactions and decentralized data storage.",
                },
              ]
                .map((item, i) => ({ ...item, id: `faq${i}` }))
                .filter((item, i, arr) => showAllFaqs || i < 4)
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
                    Why Use Rivetz?
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
                      Blockchain Security: Rivetz offers blockchain-based
                      security solutions to protect assets, transactions, and
                      digital identities.
                    </li>
                    <li className="mb-3">
                      AI-Powered Security: The AI tool in Rivetz continuously
                      analyzes data and user behavior to detect threats and
                      improve security.
                    </li>
                    <li className="mb-3">
                      Mobile Security: Mobile users are increasingly targeted by
                      cybercriminals. Rivetz offers robust protection for mobile
                      applications and devices.
                    </li>
                    <li className="mb-3">
                      Hardware Security: Trusted hardware solutions ensure that
                      security measures are executed directly on the device,
                      reducing vulnerabilities.
                    </li>
                    <li className="mb-3">
                      Encryption & Privacy Protection: Rivetz ensures that
                      users' data is encrypted using dual encryption, ensuring
                      privacy during transmission.
                    </li>
                    <li className="mb-3">
                      Seamless Blockchain Integration: Rivetz allows
                      organizations to integrate security solutions directly
                      into blockchain applications, enabling tamper-proof
                      transactions.
                    </li>
                    <li className="mb-3">
                      Scalability: Rivetz' blockchain technology is scalable,
                      meaning it can be adopted by both small startups and large
                      enterprises.
                    </li>
                    <li className="mb-3">
                      User-Friendly: With mobile access and easy onboarding,
                      Rivetz is accessible to both technical and non-technical
                      users.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Start Creating Now
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
                    Robust Mobile Security: Protects mobile devices and
                    applications from security threats using advanced
                    hardware-based authentication methods.
                  </li>
                  <li className="mb-2">
                    AI-Driven Security: The platform's use of artificial
                    intelligence enables real-time threat detection and improves
                    overall security.
                  </li>
                  <li className="mb-2">
                    Comprehensive Privacy Protection: Ensures user data is
                    encrypted and private.
                  </li>
                  <li className="mb-2">
                    Scalable and Adaptable: Suitable for both small businesses
                    and large corporations looking to secure mobile and
                    blockchain applications.
                  </li>
                  <li className="mb-2">
                    Blockchain Security: Rivetz' blockchain integration ensures
                    that transactions are secure and tamper-proof.
                  </li>
                  <li className="mb-2">
                    Cross-Platform Compatibility: Rivetz is compatible with both
                    mobile and desktop applications, providing flexibility for
                    users.
                  </li>
                  <li className="mb-2">
                    Supports Decentralized Security: Decentralized security
                    architecture minimizes risks associated with centralized
                    systems.
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
                    Limited Adoption: Rivetz is relatively new in the market and
                    may have limited adoption compared to established security
                    platforms.
                  </li>
                  <li className="mb-2">
                    Complexity: Some users may find the platform's AI-powered
                    and hardware-based features complex to implement.
                  </li>
                  <li className="mb-2">
                    Dependency on Hardware: Requires secure hardware
                    integration, which may limit its use on certain devices
                    without the necessary trusted computing environment.
                  </li>
                  <li className="mb-2">
                    Limited Integration with Other Tools: Rivetz may not have as
                    many integrations with third-party tools or platforms
                    compared to more mainstream cybersecurity solutions.
                  </li>
                  <li className="mb-2">
                    Targeted for Specific Use Cases: Rivetz is more suited for
                    mobile security and blockchain applications, and may not be
                    as versatile for other industries.
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
                    Sentinel Protocol: Another AI-based blockchain security
                    platform, focusing on cyber threat intelligence and
                    decentralized security.
                  </li>
                  <li className="mb-2">
                    Agrello: A platform that uses blockchain to offer legally
                    binding smart contracts with secure, decentralized identity
                    management.
                  </li>
                  <li className="mb-2">
                    CipherTrace: Provides cryptocurrency anti-money laundering
                    and compliance solutions with advanced blockchain analytics.
                  </li>
                  <li className="mb-2">
                    Guardtime: A blockchain-based cybersecurity platform focused
                    on data integrity and protection.
                  </li>
                  <li className="mb-2">
                    Quantum Computing Security: Emerging solutions that use
                    quantum computing to protect against next-generation cyber
                    threats, including in blockchain networks.
                  </li>
                  <li className="mb-2">
                    BitGo: A multi-signature cryptocurrency wallet that offers
                    enterprise-level protection for digital assets.
                  </li>
                  <li className="mb-2">
                    McAfee: A traditional cybersecurity solution that also
                    offers some protection for blockchain transactions.
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
              <p className="text-primary">Write better, faster</p>
              <h1>Rivetz: AI-Powered Blockchain Security Platform</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                What is Rivetz? Rivetz is an AI-driven security solution
                designed to provide blockchain-based protection, primarily for
                mobile applications and digital identities. By leveraging a
                Trusted Execution Environment (TEE), Rivetz ensures end-to-end
                security for mobile devices, cryptocurrency wallets, and
                blockchain transactions. The platform focuses on privacy
                protection, secure communications, and decentralization,
                offering innovative tools to safeguard sensitive data across
                decentralized networks.
              </p>

              <div className="mb-3">
                <span className="badge bg-primary me-2">Image Generation</span>
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
              <img src="" style={{ MaxWidth: "100%", height: "300px" }} />
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
                How to Use Rivetz?
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
                      {" "}
                      Mobile Security
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Rivetz offers mobile user security by using secure
                      hardware-based authentication methods, protecting devices
                      and applications from hacking attempts.
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
                      Digital Identity Protection
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Rivetz leverages blockchain-based security and
                      self-sovereign identities to safeguard personal data and
                      digital identities.
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
                      Cryptocurrency Transactions
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Rivetz integrates secure cryptocurrency wallet support,
                      allowing users to manage digital assets safely through
                      trusted hardware and dual encryption techniques.
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
            <h4 className="mb-3">Ready to get started with Rivetz?</h4>
            <p className="mb-4">
              Join thousands of professionals already boosting their
              productivity!
            </p>
            <div>
              <button className="btn btn-light me-3">Try Now for Free</button>
              <button className="btn btn-outline-light">Schedule a Demo</button>
            </div>
            <small className="d-block mt-2">
              No credit card required. 14-day free trial available.
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Rivetz;
