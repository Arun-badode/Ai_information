import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import magisto from "../../../Images/MagistoAI.png";

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
const OracleAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">Accelerate Insights with Oracle AI</p>
              <h3 className="">
                Enterprise-Ready AI for Smarter Business Decisions
              </h3>
            </div>
            {[
              {
                icon: "🧠",
                title: "Integrated AI Services:",
                desc: "Oracle AI includes built-in machine learning across Oracle Cloud apps, enabling smarter automation and decision-making.",
              },
              {
                icon: "📦",
                title: "OCI Data Science Platform:",
                desc: "Develop, train, and deploy models at scale using Python, Jupyter, and popular ML frameworks on Oracle Cloud Infrastructure.",
              },
              {
                icon: "⚡",
                title: "Autonomous Database AI:",
                desc: "Built-in AI capabilities in Oracle Autonomous Database help automate data preparation, insight generation, and query optimization.",
              },
              {
                icon: "🔍",
                title: "AI-Powered Analytics:",
                desc: "Oracle Analytics Cloud uses AI to help users discover patterns, detect anomalies, and generate predictive insights with ease.",
              },
              {
                icon: "🔐",
                title: "Secure and Scalable AI:",
                desc: "Oracle ensures data privacy and governance with enterprise-grade security for all AI workloads and model operations.",
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
                  q: "What is Oracle AI?",
                  a: "Oracle AI is a suite of cloud-based services and tools for building, training, deploying, and operationalizing AI and machine learning applications on Oracle Cloud Infrastructure (OCI).",
                },
                {
                  q: "How does AI work in Oracle Cloud?",
                  a: "Oracle AI combines prebuilt services, AutoML, and infrastructure tools to deliver predictions, forecasts, NLP, computer vision, and anomaly detection using enterprise data.",
                },
                {
                  q: "Can Oracle AI handle real-time data?",
                  a: "Yes, Oracle AI integrates with streaming services like Oracle Stream Analytics and Kafka to process real-time data feeds.",
                },
                {
                  q: "Is Oracle AI beginner-friendly?",
                  a: "Yes, it provides no-code interfaces for business analysts via Oracle Analytics Cloud, and SDKs for developers who prefer full customization.",
                },
                {
                  q: "What cloud platforms support Oracle AI?",
                  a: "Oracle AI runs natively on Oracle Cloud Infrastructure, with some tools available for hybrid and multi-cloud deployments.",
                },
                {
                  q: "Can I run custom models on Oracle AI?",
                  a: "Yes, you can bring your own models trained in Python, TensorFlow, PyTorch, or scikit-learn and deploy them using OCI Data Science.",
                },
                {
                  q: "Does Oracle AI support autoscaling?",
                  a: "Yes, OCI services support autoscaling for compute and Kubernetes workloads used in AI pipelines.",
                },
                {
                  q: "Can I use Jupyter Notebooks in Oracle AI?",
                  a: "Yes, Oracle Data Science includes hosted JupyterLab environments for model development and experimentation.",
                },
                {
                  q: "Is Oracle AI cloud-native?",
                  a: "Yes, it’s built to run on OCI with deep integrations into Oracle’s cloud security, observability, and governance stack.",
                },
                {
                  q: "Does Oracle AI require coding knowledge?",
                  a: "Not necessarily — business users can use Oracle Analytics Cloud's natural language and drag-and-drop tools, while developers can use APIs and Python SDKs.",
                },
                {
                  q: "Can Oracle AI connect to external data sources?",
                  a: "Yes, it connects to Oracle Autonomous Database, object storage, REST APIs, and external sources like AWS S3 or Azure Blob.",
                },
                {
                  q: "Does Oracle AI support role-based access control?",
                  a: "Yes, OCI Identity and Access Management (IAM) enforces fine-grained access and integrates with enterprise SSO systems.",
                },
                {
                  q: "Can I schedule AI jobs in Oracle Cloud?",
                  a: "Yes, Oracle supports job scheduling via OCI Functions, Data Integration, and Airflow (via Marketplace or custom setup).",
                },
                {
                  q: "Is Oracle AI mobile-friendly?",
                  a: "Oracle Analytics Cloud provides mobile dashboards and reports with embedded machine learning-powered insights.",
                },
                {
                  q: "Can Oracle AI integrate with third-party BI tools?",
                  a: "Yes, it integrates with tools like Power BI and Tableau using connectors and standard JDBC/ODBC drivers.",
                },
                {
                  q: "What are common use cases of Oracle AI?",
                  a: "Use cases include demand forecasting, fraud detection, document classification, intelligent chatbots, and predictive maintenance.",
                },
                {
                  q: "Does Oracle AI support hybrid deployments?",
                  a: "Yes, using Oracle Cloud@Customer and Autonomous Database Link, you can extend AI across hybrid environments.",
                },
                {
                  q: "Is Oracle AI secure?",
                  a: "Yes, OCI AI services are protected by encryption, fine-grained access control, audit logs, and enterprise-grade compliance (SOC 2, GDPR, HIPAA).",
                },
                {
                  q: "What visualization options are available?",
                  a: "Oracle Analytics Cloud offers interactive dashboards, auto-generated insights, and explainable AI features for transparency.",
                },
                {
                  q: "Can I customize AI pipelines in Oracle AI?",
                  a: "Yes, OCI Data Science lets you build fully customized pipelines using Python, TensorFlow, or custom scripts.",
                },
                {
                  q: "Does Oracle support event-driven AI pipelines?",
                  a: "Yes, using OCI Events and Functions, you can trigger AI tasks based on data changes, schedules, or webhooks.",
                },
                {
                  q: "Does Oracle AI offer developer APIs?",
                  a: "Yes, Oracle provides REST APIs and Python/CLI SDKs for model deployment, data access, and pipeline execution.",
                },
                {
                  q: "Can Oracle AI handle large datasets?",
                  a: "Yes, Oracle's Autonomous Data Warehouse and Object Storage support petabyte-scale data for training and inference.",
                },
                {
                  q: "How is Oracle AI different from AWS or Azure AI?",
                  a: "Oracle AI focuses on enterprise-grade integration with Oracle business apps and databases, and includes prebuilt models tailored for finance, HR, and supply chain.",
                },
                {
                  q: "What industries benefit from Oracle AI?",
                  a: "Industries include finance, retail, healthcare, logistics, manufacturing, and public sector organizations leveraging ERP and CRM data.",
                },
                {
                  q: "Can Oracle AI integrate with Git or CI/CD tools?",
                  a: "Yes, Oracle Data Science integrates with Git and supports CI/CD pipelines via DevOps services or Jenkins/GitHub Actions.",
                },
                {
                  q: "Does Oracle AI support model lifecycle management?",
                  a: "Yes, Oracle provides model versioning, performance tracking, and automated deployment tools within OCI Data Science.",
                },
                {
                  q: "Can I use AutoML in Oracle AI?",
                  a: "Yes, Oracle AutoML automates feature engineering, model selection, and hyperparameter tuning for tabular data.",
                },
                {
                  q: "Does Oracle AI help reduce cost?",
                  a: "Yes, through intelligent workload placement, autoscaling, and preemptible compute options, Oracle optimizes performance and spend.",
                },
                {
                  q: "What kind of support does Oracle AI offer?",
                  a: "Oracle provides extensive support including documentation, tutorials, Oracle University training, and 24/7 enterprise support plans.",
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
                    Why Use Oracle AI?
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
                      Oracle AI offers prebuilt, API-driven services for Vision,
                      Language, Forecasting, and Anomaly Detection on Oracle
                      Cloud Infrastructure.
                    </li>
                    <li className="mb-3">
                      Seamless integration with Oracle Database, Fusion Apps,
                      and ERP/CRM systems for end-to-end enterprise automation.
                    </li>
                    <li className="mb-3">
                      Oracle Analytics Cloud delivers AI-powered insights,
                      natural language queries, and smart data visualizations.
                    </li>
                    <li className="mb-3">
                      Secure and scalable cloud infrastructure with built-in
                      governance, encryption, and compliance features.
                    </li>
                    <li className="mb-3">
                      Designed for both developers and business users, with
                      tools to deploy models, automate pipelines, and generate
                      insights at scale.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore Oracle AI
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
                    Integrated AI services including Vision, Language,
                    Forecasting, and Anomaly Detection on OCI.
                  </li>
                  <li className="mb-2">
                    Tight integration with Oracle Database, Fusion Apps, and
                    other enterprise-grade services.
                  </li>
                  <li className="mb-2">
                    Prebuilt models available through APIs for faster deployment
                    with minimal data science effort.
                  </li>
                  <li className="mb-2">
                    Oracle Analytics Cloud enables automated insights and
                    natural language queries.
                  </li>
                  <li className="mb-2">
                    Strong enterprise security, governance, and compliance built
                    into the platform.
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
                    Smaller AI community and ecosystem compared to AWS, Azure,
                    and Google Cloud.
                  </li>
                  <li className="mb-2">
                    Less developer-focused tooling; geared more toward
                    enterprises using Oracle products.
                  </li>
                  <li className="mb-2">
                    Advanced customization of AI models may require external
                    tooling or integration.
                  </li>
                  <li className="mb-2">
                    UI and documentation can be complex for new users not
                    already familiar with Oracle Cloud Infrastructure (OCI).
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
                    Microsoft Azure AI – Offers prebuilt AI services, cognitive
                    APIs, and ML tools deeply integrated with the Azure
                    ecosystem.
                  </li>
                  <li className="mb-2">
                    Google Cloud AI Platform – Provides AutoML, Vertex AI, and
                    powerful tools for training, deploying, and managing ML
                    models.
                  </li>
                  <li className="mb-2">
                    AWS SageMaker – Fully managed platform for building,
                    training, and deploying machine learning models at scale.
                  </li>
                  <li className="mb-2">
                    IBM Watson – Enterprise-grade AI with NLP, computer vision,
                    and automated model lifecycle management for regulated
                    industries.
                  </li>
                  <li className="mb-2">
                    DataRobot – Automated machine learning platform focused on
                    rapid model development and explainable AI for business
                    users.
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
              <p className="text-primary">Grow better, faster</p>
              <h1>Oracle AI </h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>

              <p>
                Oracle Analytics is a comprehensive platform designed to help
                businesses gain actionable insights from their data through
                advanced analytics, visualization tools, and AI-driven
                capabilities. This powerful platform supports enterprise-level
                analytics, offering intuitive data exploration and reporting
                tools to drive decision-making across various industries.
              </p>
              <p>
                Oracle Analytics is an end-to-end solution that allows users to
                access, analyze, and visualize data in real time. By utilizing
                the power of AI, machine learning, and cloud infrastructure,
                Oracle Analytics empowers organizations to turn data into
                actionable insights. The platform is designed to work with data
                from various sources, including cloud-based platforms,
                on-premise databases, and third-party applications.
              </p>

              <div className="mb-3">
                <span className="badge bg-primary me-2"> Business</span>
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
                src={magisto}
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
                How to Use Oracle AI?
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
                      Connect to Oracle Cloud Infrastructure
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Set up Oracle AI by connecting to Oracle Cloud services
                      and datasets using Data Science or Autonomous Database.
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
                      Train Models & Analyze Data
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Use Oracle AI tools to build, train, and deploy machine
                      learning models or run analytics via OCI Data Science
                      notebooks and AutoML.
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
                      Deploy, Monitor & Scale AI Solutions
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Deploy AI models into production with Oracle Cloud
                      services, monitor performance, and scale based on demand
                      with built-in automation.
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
            <h4 className="mb-3">Ready to get started with Oracle AI?</h4>
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

export default OracleAI;
