import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

import sas1 from "../../../../public/assets/Img/AI for Business/sas1.png";
import sas2 from "../../../../public/assets/Img/AI for Business/sas2.png";
import sas from "../../../../public/assets/Img/AI for Business/sas.png";
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
const SASAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">Accelerate Insights with SAS AI</p>
              <h3 className="">
                Enterprise-Ready AI for Smarter Business Decisions
              </h3>
            </div>
            {[
              {
                icon: "🧠",
                title: "AI-Driven Analytics:",
                desc: "SAS AI integrates advanced analytics, enabling organizations to harness machine learning and deep learning for actionable insights.",
              },
              {
                icon: "📊",
                title: "SAS Viya Platform:",
                desc: "Develop, deploy, and manage models at scale using an open, cloud-enabled analytics platform with support for Python and R.",
              },
              {
                icon: "🔄",
                title: "Automated Machine Learning (AutoML):",
                desc: "SAS AutoML streamlines data preparation, feature engineering, and model selection to accelerate the AI lifecycle.",
              },
              {
                icon: "🔍",
                title: "Explainable AI (XAI):",
                desc: "SAS provides interpretable AI models and visual explanations to support transparent and trustworthy decisions.",
              },
              {
                icon: "🔐",
                title: "Enterprise-Grade Security & Governance:",
                desc: "Ensure compliance and data governance with built-in security features across the SAS AI ecosystem.",
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
                src={sas1}
                alt="SAS AI"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={sas2}
                alt="SAS AI"
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
                  q: "What is SAS AI?",
                  a: "SAS AI is a comprehensive suite of AI and advanced analytics tools offered by SAS, enabling organizations to build, train, deploy, and manage machine learning models across industries.",
                },
                {
                  q: "How does AI work in SAS?",
                  a: "SAS AI uses powerful machine learning, deep learning, natural language processing, and computer vision technologies to extract insights from structured and unstructured data.",
                },
                {
                  q: "Can SAS AI handle real-time data?",
                  a: "Yes, SAS supports real-time analytics with in-stream processing and event-driven architecture using SAS Event Stream Processing and other tools.",
                },
                {
                  q: "Is SAS AI beginner-friendly?",
                  a: "Yes, SAS provides drag-and-drop interfaces through SAS Visual Analytics and Model Studio, making it accessible for non-programmers.",
                },
                {
                  q: "What platforms support SAS AI?",
                  a: "SAS AI runs on SAS Viya, which can be deployed on-premises, in private cloud, or public clouds like AWS, Azure, and Google Cloud.",
                },
                {
                  q: "Can I run custom models in SAS AI?",
                  a: "Yes, SAS supports integration with Python, R, and other open-source frameworks for importing and executing custom models.",
                },
                {
                  q: "Does SAS AI support autoscaling?",
                  a: "Yes, when deployed in the cloud (e.g., on Kubernetes), SAS Viya supports autoscaling of compute resources.",
                },
                {
                  q: "Can I use Jupyter Notebooks with SAS AI?",
                  a: "Yes, SAS provides Jupyter Notebook integration through its SASPy library and supports model development via Python.",
                },
                {
                  q: "Is SAS AI cloud-native?",
                  a: "Yes, SAS Viya is a cloud-native, container-based platform optimized for Kubernetes environments.",
                },
                {
                  q: "Does SAS AI require coding knowledge?",
                  a: "No, users can use visual tools for modeling, or code with Python, R, and SAS for more customization.",
                },
                {
                  q: "Can SAS AI connect to external data sources?",
                  a: "Yes, SAS AI connects to a wide range of data sources including Hadoop, relational databases, cloud storage, and APIs.",
                },
                {
                  q: "Does SAS AI support role-based access control?",
                  a: "Yes, SAS Viya includes built-in user management and role-based access control for secure collaboration.",
                },
                {
                  q: "Can I schedule AI jobs in SAS AI?",
                  a: "Yes, SAS provides job scheduling and automation through SAS Environment Manager and integration with cron or external schedulers.",
                },
                {
                  q: "Is SAS AI mobile-friendly?",
                  a: "Yes, SAS Visual Analytics dashboards are mobile-responsive and accessible from smartphones and tablets.",
                },
                {
                  q: "Can SAS AI integrate with third-party BI tools?",
                  a: "Yes, SAS supports data export and can integrate with tools like Power BI and Tableau using REST APIs and connectors.",
                },
                {
                  q: "What are common use cases of SAS AI?",
                  a: "Use cases include fraud detection, risk scoring, predictive maintenance, customer segmentation, and demand forecasting.",
                },
                {
                  q: "Does SAS AI support hybrid deployments?",
                  a: "Yes, SAS Viya supports hybrid and multi-cloud deployments, allowing flexibility across on-prem and cloud environments.",
                },
                {
                  q: "Is SAS AI secure?",
                  a: "Yes, SAS AI includes enterprise-grade security features such as data encryption, access control, and compliance with standards like HIPAA and GDPR.",
                },
                {
                  q: "What visualization options are available?",
                  a: "SAS Visual Analytics offers rich, interactive visualizations with AI-driven insights and natural language explanations.",
                },
                {
                  q: "Can I customize AI pipelines in SAS AI?",
                  a: "Yes, SAS Model Studio allows full customization of AI pipelines using visual flows or custom code.",
                },
                {
                  q: "Does SAS AI support event-driven AI pipelines?",
                  a: "Yes, SAS Event Stream Processing supports real-time, event-driven AI for immediate insights and actions.",
                },
                {
                  q: "Does SAS AI offer developer APIs?",
                  a: "Yes, SAS provides REST APIs, Python interfaces (SASPy), and other SDKs for developers to interact with models and data.",
                },
                {
                  q: "Can SAS AI handle large datasets?",
                  a: "Yes, SAS is designed to process and analyze massive datasets efficiently, both in-memory and on-disk.",
                },
                {
                  q: "How is SAS AI different from Oracle, AWS, or Azure AI?",
                  a: "SAS AI offers deep analytics, industry-specific solutions, and mature data science capabilities tailored for regulated industries and advanced users.",
                },
                {
                  q: "What industries benefit from SAS AI?",
                  a: "Industries include banking, insurance, healthcare, government, retail, telecom, and manufacturing.",
                },
                {
                  q: "Can SAS AI integrate with Git or CI/CD tools?",
                  a: "Yes, SAS supports Git integration and CI/CD pipelines through APIs and orchestration tools like Jenkins and GitHub Actions.",
                },
                {
                  q: "Does SAS AI support model lifecycle management?",
                  a: "Yes, SAS provides model registration, validation, versioning, and monitoring through SAS Model Manager.",
                },
                {
                  q: "Can I use AutoML in SAS AI?",
                  a: "Yes, SAS AutoML in Model Studio automates model selection, tuning, and evaluation for better productivity.",
                },
                {
                  q: "Does SAS AI help reduce cost?",
                  a: "Yes, through optimized resource utilization, automation, and workload scaling, SAS AI improves cost efficiency.",
                },
                {
                  q: "What kind of support does SAS AI offer?",
                  a: "SAS offers documentation, online training, certifications, user communities, and enterprise-grade technical support.",
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
                    Why Use SAS AI?
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
                      SAS AI provides advanced analytics, machine learning, and
                      AI capabilities through the SAS Viya platform for powerful
                      decision-making.
                    </li>
                    <li className="mb-3">
                      Seamless integration with open-source languages like
                      Python and R, along with support for REST APIs and
                      cloud-native deployment.
                    </li>
                    <li className="mb-3">
                      SAS Visual Analytics offers interactive dashboards,
                      natural language explanations, and automated insights
                      powered by AI.
                    </li>
                    <li className="mb-3">
                      Enterprise-grade security with data encryption, access
                      control, and regulatory compliance for healthcare,
                      finance, and government sectors.
                    </li>
                    <li className="mb-3">
                      Designed for both analysts and data scientists, offering
                      drag-and-drop tools, AutoML, and support for custom model
                      deployment.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore SAS AI
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
                    Comprehensive AI and analytics platform with robust support
                    for machine learning, deep learning, and NLP.
                  </li>
                  <li className="mb-2">
                    SAS Viya supports hybrid and multi-cloud deployments,
                    including AWS, Azure, and on-premise.
                  </li>
                  <li className="mb-2">
                    User-friendly interfaces with drag-and-drop workflows and
                    AutoML in Model Studio.
                  </li>
                  <li className="mb-2">
                    Seamless integration with open-source tools like Python, R,
                    Jupyter, and Git.
                  </li>
                  <li className="mb-2">
                    Enterprise-grade security, governance, and compliance with
                    industry standards like HIPAA and GDPR.
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
                    Licensing and subscription costs can be high for small and
                    mid-sized businesses.
                  </li>
                  <li className="mb-2">
                    Some tools may have a learning curve for developers
                    unfamiliar with SAS syntax or interface.
                  </li>
                  <li className="mb-2">
                    Requires setup and configuration for seamless integration
                    with modern CI/CD pipelines.
                  </li>
                  <li className="mb-2">
                    Not as widely adopted in startups or open-source AI
                    communities compared to AWS or Azure ML.
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
                    Microsoft Azure Machine Learning – Cloud-based ML
                    development environment with support for AutoML, MLOps, and
                    Python-based notebooks.
                  </li>
                  <li className="mb-2">
                    Google Vertex AI – Unified platform for building and
                    deploying ML models with support for AutoML and custom
                    training pipelines.
                  </li>
                  <li className="mb-2">
                    IBM Watson Studio – Offers a collaborative platform with
                    AutoAI, Jupyter notebooks, and model lifecycle management
                    for enterprises.
                  </li>
                  <li className="mb-2">
                    RapidMiner – Visual data science platform for fast
                    prototyping, machine learning, and model operations, aimed
                    at business analysts.
                  </li>
                  <li className="mb-2">
                    H2O.ai – Open-source machine learning platform with robust
                    AutoML, explainability, and support for enterprise-scale AI
                    solutions.
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
<div className="row align-items-center justify-content-between mb-5">
  {/* Image Section - First on mobile */}
  <div className="col-12 col-md-6 order-1 order-md-2 text-center mb-4 mb-md-0">
    <img
      src={magisto}
      alt="SAS AI representation"
      style={{ maxWidth: "100%", height: "300px", objectFit: "contain" }}
      className="img-fluid"
    />
  </div>

  {/* Text Section - Second on mobile */}
  <div className="col-12 col-md-6 order-2 order-md-1" style={{ paddingRight: "30px" }}>
    <p className="text-primary">Grow better, faster</p>
    <h1>SAS AI</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      SAS AI (SAS Artificial Intelligence) refers to the suite of AI
      tools, machine learning frameworks, and advanced analytics
      offered by SAS. It integrates SAS machine learning, SAS deep
      learning, predictive analytics, and natural language processing
      (NLP) capabilities to empower businesses to make smarter
      decisions faster. The SAS AI platform is a robust and scalable
      system that provides SAS AI software tailored for different
      industries such as finance, healthcare, retail, and education.
      It combines SAS data science tools, analytics AI, and AI-driven
      solutions that are suitable for businesses of all sizes.
    </p>
    <div className="mb-3">
      <a
        href="https://www.sasai.global/chat/"
        target="_blank"
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
                How to Use SAS AI?
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
                      Access SAS Viya Platform
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Start by logging into SAS Viya through your cloud or
                      on-prem environment and load datasets from various sources
                      including cloud storage or databases.
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
                      Build & Train Models
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Use SAS Model Studio or code notebooks (Python, R, SAS) to
                      explore data, apply AutoML, build models, and perform
                      validations.
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
                      Deploy & Monitor AI Pipelines
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Register and deploy models via SAS Model Manager,
                      integrate with applications or APIs, and monitor
                      performance using real-time metrics and governance tools.
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

        </div>
      </div>
    </>
  );
};

export default SASAI;
