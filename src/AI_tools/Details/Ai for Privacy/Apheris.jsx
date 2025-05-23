import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "./ImageMindAI.css";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import apheris from "../../../../public/assets/Img/AI for Privacy/9.jpg"
import apherisSS1 from '../../../../public/assets/Img/AI for Privacy/apherisSS1.png';
import apherisSS2 from '../../../../public/assets/Img/AI for Privacy/apherisSS2.png';


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
const ApherisAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                High Productivity and Business Tools
              </p>
              <h3 className=""> Drag-and-Drop Simplicity & Custom Branding</h3>
            </div>
            {[
              {
                icon: "📊",
                title: "Federated Learning for Privacy-Preserving AI:",
                desc: "Collaborative AI model training without transferring sensitive data.",
              },
              {
                icon: "🤖",
                title: "Homomorphic Encryption:",
                desc: "Enables machine learning models to process sensitive data without decrypting it, ensuring that the data stays secure at all times.",
              },
              {
                icon: "🔗",
                title: "Differential Privacy:",
                desc: "Incorporates differential privacy techniques to prevent leakage of private information from data during model training.",
              },
              {
                icon: "🧠",
                title: "Secure Data Collaboration:",
                desc: "Empowers organizations to collaborate securely across different sectors (healthcare, finance, and beyond) while maintaining full control over their proprietary data.",
              },
              {
                icon: "📤",
                title: "Scalability with Cloud-Native Architecture:",
                desc: "Built to scale with modern cloud infrastructure, enabling organizations to leverage the power of federated learning at scale.",
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
                src={apherisSS1}
                alt="apheris"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={apherisSS2}
                alt="apheris"
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
                  q: "What is Apheris AI?",
                  a: "Apheris AI is a privacy-preserving machine learning and secure data collaboration platform that helps businesses securely process, analyze, and share sensitive data while ensuring privacy and compliance with data protection regulations like GDPR and CCPA.",
                },
                {
                  q: "How does Apheris AI work?",
                  a: "Apheris AI works by leveraging encryption techniques and privacy-preserving machine learning to enable businesses to analyze and collaborate on encrypted data without exposing sensitive information.",
                },
                {
                  q: "What industries can benefit from Apheris AI?",
                  a: "Apheris AI is ideal for industries such as healthcare, finance, retail, e-commerce, and research, where data privacy and compliance are critical.",
                },
                {
                  q: "Does Apheris AI support GDPR compliance?",
                  a: "Yes, Apheris AI includes tools to help businesses comply with GDPR, including data anonymization, secure data sharing, and privacy-preserving machine learning techniques.",
                },
                {
                  q: "Can Apheris AI be used for healthcare data?",
                  a: "Yes, Apheris AI can securely process and analyze healthcare data while ensuring compliance with regulations such as HIPAA and GDPR.",
                },
                {
                  q: "How does Apheris AI ensure data privacy?",
                  a: "Apheris AI ensures data privacy by using end-to-end encryption, data anonymization, and privacy-preserving machine learning to keep sensitive data protected throughout its lifecycle.",
                },
                {
                  q: "How is Apheris AI different from other AI platforms?",
                  a: "Apheris AI specializes in privacy-preserving machine learning and secure data collaboration, whereas many other AI platforms don’t prioritize data privacy or provide built-in compliance tools.",
                },
                {
                  q: "Does Apheris AI offer AI model training on encrypted data?",
                  a: "Yes, Apheris AI allows businesses to train machine learning models on encrypted data, ensuring that sensitive information remains secure while still enabling accurate model training.",
                },
                {
                  q: "How does Apheris AI handle data collaboration?",
                  a: "Apheris AI facilitates secure data collaboration by allowing organizations to collaborate on encrypted datasets without revealing sensitive data to external parties.",
                },
                {
                  q: "Can Apheris AI be used for AI model evaluation?",
                  a: "Yes, Apheris AI supports AI model evaluation on encrypted data, ensuring that models can be evaluated without exposing sensitive information.",
                },
                {
                  q: "How does Apheris AI handle compliance with CCPA?",
                  a: "Apheris AI offers tools for compliance with CCPA by ensuring that personal data is processed and shared securely, with features for tracking consent and managing data privacy rights.",
                },
                {
                  q: "Is Apheris AI scalable for small businesses?",
                  a: "Yes, Apheris AI is scalable and can be used by businesses of all sizes, from small startups to large enterprises, to securely process and analyze sensitive data.",
                },
                {
                  q: "Can Apheris AI integrate with existing systems?",
                  a: "Yes, Apheris AI can integrate with existing enterprise systems and data management tools, providing secure data processing and privacy-preserving analytics within established workflows.",
                },
                {
                  q: "How does Apheris AI secure cloud-based data?",
                  a: "Apheris AI applies end-to-end encryption and privacy-preserving techniques to ensure that data processed in cloud environments remains secure and compliant with privacy regulations.",
                },
                {
                  q: "Does Apheris AI offer data anonymization?",
                  a: "Yes, Apheris AI provides data anonymization tools that allow businesses to analyze sensitive data without exposing personally identifiable information (PII).",
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
                    Why Use Apheris AI?
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
                      Enhanced Data Security: The platform offers advanced
                      AI-powered encryption and privacy-preserving machine
                      learning techniques, ensuring sensitive data remains
                      protected throughout its lifecycle—from collection and
                      storage to analysis and sharing.
                    </li>

                    <li className="mb-3">
                      Compliance with Privacy Regulations: Apheris AI includes
                      tools that make it easier for businesses to comply with
                      stringent privacy regulations like GDPR, CCPA, and HIPAA,
                      reducing the risk of regulatory fines and breaches.
                    </li>

                    <li className="mb-3">
                      Scalable for Any Business: Whether a startup or a large
                      enterprise, Apheris AI is designed to scale with your
                      organization’s needs, making it accessible to businesses
                      of all sizes. The platform offers tools that cater to both
                      small and large datasets, allowing businesses to securely
                      process and analyze their data.
                    </li>

                    <li className="mb-3">
                      Secure Collaboration: Apheris AI facilitates secure data
                      collaboration across teams and organizations. Its tools
                      ensure that sensitive data can be shared securely with
                      third parties while maintaining privacy and compliance.
                    </li>

                    <li className="mb-3">
                      AI-Powered Data Protection: With Apheris AI, businesses
                      can leverage privacy-preserving machine learning to build
                      models and analytics tools without exposing sensitive
                      data. This is especially important for industries like
                      finance, healthcare, and research, where data privacy is
                      crucial.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Start Analyzing Now
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
                    Comprehensive Data Security: Apheris AI provides robust data
                    encryption and privacy-preserving techniques, making it
                    ideal for businesses that need to protect sensitive data
                    while still benefiting from powerful analytics and AI-driven
                    insights.
                  </li>
                  <li className="mb-2">
                    Regulatory Compliance Made Easy: With built-in compliance
                    tools, Apheris AI helps businesses meet GDPR, CCPA, and
                    other regional regulations with ease, ensuring they stay
                    up-to-date with global privacy laws.
                  </li>
                  <li className="mb-2">
                    User-Friendly for Enterprises: The platform is designed with
                    enterprise-level security features while maintaining
                    usability. It integrates easily with existing data
                    management systems, providing secure data processing across
                    various environments, including cloud-based solutions.
                  </li>
                  <li className="mb-2">
                    Versatile and Industry-Agnostic: Apheris AI works across
                    multiple industries, from healthcare to financial services,
                    retail, and e-commerce, enabling businesses in any field to
                    securely handle sensitive data and gain actionable insights
                    from AI models.
                  </li>
                  <li className="mb-2">
                    AI-Powered Risk Management: Apheris AI provides advanced
                    risk mitigation tools that help businesses evaluate
                    potential privacy and security risks related to their data
                    and take proactive steps to prevent breaches.
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
                    Complex Setup for Non-Technical Users: While Apheris AI is a
                    powerful platform, its advanced security and AI features may
                    require technical expertise for initial setup and
                    integration. Small businesses or those without dedicated IT
                    teams may find the platform challenging to implement.
                  </li>
                  <li className="mb-2">
                    Cost: The platform's enterprise-level tools and features may
                    be costly for smaller organizations, making it less
                    accessible for businesses with limited budgets.
                  </li>
                  <li className="mb-2">
                    Integration Challenges with Legacy Systems: Businesses with
                    outdated or legacy data systems may find it difficult to
                    integrate Apheris AI without additional customization, which
                    could lead to higher implementation costs and longer setup
                    times.
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
                    Homomorphic Encryption Solutions (e.g., Microsoft SEAL,
                    IBM): These solutions offer secure computation on encrypted
                    data, allowing businesses to perform data analysis and
                    machine learning without exposing sensitive information.
                    However, these tools typically require more manual setup and
                    technical expertise.
                  </li>
                  <li className="mb-2">
                    OneTrust: OneTrust is a privacy management platform that
                    helps businesses comply with privacy regulations and manage
                    data protection processes. However, it lacks the AI-driven
                    machine learning and secure data sharing capabilities
                    offered by Apheris AI.
                  </li>
                  <li className="mb-2">
                    BigID: BigID provides data privacy management and data
                    discovery tools. It's ideal for enterprises that need to
                    ensure data protection compliance and track sensitive data
                    usage across their organization, but it does not offer the
                    same privacy-preserving AI functionalities.
                  </li>
                  <li className="mb-2">
                    Tegus: Tegus offers AI-driven data protection tools, but it
                    primarily focuses on data analytics and insights rather than
                    full-scale data privacy and regulatory compliance solutions.
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
         <div className="row align-items-center mb-4">
  {/* Image Section — mobile pe pehle, desktop pe baad me */}
  <div
    className="col-12 col-md-6 order-1 order-md-2 text-center mb-4 mb-md-0"
    style={{ height: "auto" }}
  >
    <img
      src={apheris}
      alt="Apheris AI"
      style={{ maxWidth: "100%", height: "300px", objectFit: "contain" }}
      className="img-fluid"
    />
  </div>

  {/* Text Section — mobile pe baad me, desktop pe pehle */}
  <div
    className="col-12 col-md-6 order-2 order-md-1"
    style={{ paddingRight: "30px" }}
  >
    <p className="text-primary">Grow better, faster</p>
    <h1>Apheris AI</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      Apheris AI is a leading platform designed for privacy-preserving
      machine learning and secure data collaboration. The platform
      enables businesses to securely process, analyze, and share
      sensitive data without compromising privacy. By leveraging
      AI-powered encryption and privacy-first solutions, Apheris AI
      supports industries such as healthcare, finance, and enterprise
      in protecting their data and complying with global privacy
      regulations like GDPR and CCPA.
    </p>

    <p>
      Apheris AI provides tools for enterprises to enable secure data
      sharing, data governance, and AI model training with encrypted
      data. It ensures data privacy and allows companies to carry out
      secure data analytics, helping them develop privacy-preserving
      AI solutions. The platform is especially valuable for
      organizations working with highly sensitive information,
      ensuring that data processing and AI model development adhere to
      the strictest privacy standards.
    </p>
    <div className="mb-3">
      <a
        href="https://www.apheris.com"
        rel="noopener noreferrer"
        className="btn btn-primary me-2"
      >
        Explore Tool
      </a>
    </div>
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
                How to Use Apheris AI?
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
                      Data Collaboration
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Businesses can securely share sensitive data with partners
                      or across departments without compromising privacy. By
                      leveraging secure data sharing, organizations can
                      collaborate on projects while ensuring sensitive
                      information remains protected.
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
                      Privacy-Preserving Machine Learning
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Apheris AI enables AI-driven data privacy by allowing
                      organizations to train machine learning models on
                      encrypted data. This ensures that AI models can be
                      developed without exposing any private or sensitive
                      information during training or evaluation.
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
                      Secure Analytics
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Companies can run data analytics on encrypted data using
                      Apheris AI’s privacy-preserving techniques, enabling them
                      to gain actionable insights without violating privacy
                      regulations or exposing sensitive data.
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
              <li className="nav-item mb-2 px-12" key={tab}>
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

export default ApherisAI;
