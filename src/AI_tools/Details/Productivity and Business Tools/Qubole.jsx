import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

import qubole1 from "../../../../public/assets/Img/AI for Business/qubole1.png";
import qubole2 from "../../../../public/assets/Img/AI for Business/qubole2.png";
import qubole from "../../../../public/assets/Img/AI for Business/qubole.png";
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
const Qubole = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                Explore Data Smarter with Qubole AI
              </p>
              <h3 className="">
                Cloud-Native Big Data & Intelligent Pipeline Optimization
              </h3>
            </div>
            {[
              {
                icon: "⚙️",
                title: "Multi-Engine Support:",
                desc: "Qubole lets you run Apache Spark, Hive, Presto, and Airflow within a unified, managed environment.",
              },
              {
                icon: "🤖",
                title: "AI-Driven Autoscaling:",
                desc: "Automatically scale compute clusters based on workload patterns to minimize costs and maximize throughput.",
              },
              {
                icon: "📈",
                title: "Advanced Pipeline Orchestration:",
                desc: "Use Airflow, schedulers, and notebooks to design and monitor complex ETL and ML workflows at scale.",
              },
              {
                icon: "🔗",
                title: "Seamless Cloud Integration:",
                desc: "Natively integrates with AWS, Azure, and Google Cloud along with S3, GCS, and Blob Storage for unified access.",
              },
              {
                icon: "📊",
                title: "Notebook & BI Compatibility:",
                desc: "Work with Jupyter or Zeppelin notebooks, and connect Qubole to BI tools like Looker, Power BI, and Tableau.",
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
                src={qubole1}
                alt="Qubole"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={qubole2}
                alt="Qubole"
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
                  q: "What is Qubole AI?",
                  a: "Qubole AI is a cloud-native data platform that enables scalable big data processing, machine learning workflows, and automated data pipeline management.",
                },
                {
                  q: "How does AI work in Qubole?",
                  a: "Qubole uses AI to optimize cluster scaling, detect job anomalies, and suggest performance improvements for data pipelines.",
                },
                {
                  q: "Can Qubole handle real-time data?",
                  a: "Qubole supports batch and streaming data ingestion, making it suitable for both real-time and scheduled workloads.",
                },
                {
                  q: "Is Qubole beginner-friendly?",
                  a: "While Qubole provides a powerful interface and notebooks, it’s best suited for data engineers, scientists, and analysts familiar with big data tools.",
                },
                {
                  q: "What cloud platforms does Qubole support?",
                  a: "Qubole supports AWS, Azure, and Google Cloud, enabling flexible deployment across cloud providers.",
                },
                {
                  q: "Can I run Spark on Qubole?",
                  a: "Yes, Qubole supports Apache Spark, along with Hive, Presto, and Airflow, all integrated into its unified platform.",
                },
                {
                  q: "Does Qubole support autoscaling?",
                  a: "Yes, Qubole uses machine learning to intelligently autoscale clusters based on workload demand, reducing cloud costs.",
                },
                {
                  q: "Can I use Jupyter Notebooks in Qubole?",
                  a: "Yes, Qubole includes integrated Jupyter and Zeppelin notebooks for interactive data exploration and ML development.",
                },
                {
                  q: "Is Qubole a cloud-native platform?",
                  a: "Yes, Qubole is designed to be fully cloud-native with dynamic provisioning and cost-aware resource management.",
                },
                {
                  q: "Does Qubole require coding knowledge?",
                  a: "Yes, most workflows involve scripting in SQL, Python, Scala, or other languages supported by Spark, Hive, or Presto.",
                },
                {
                  q: "Can Qubole connect to S3 or Azure Blob Storage?",
                  a: "Yes, Qubole natively connects to major cloud object storage systems like S3, Azure Blob, and Google Cloud Storage.",
                },
                {
                  q: "Does Qubole support role-based access control?",
                  a: "Yes, Qubole includes granular RBAC features for managing user and team access.",
                },
                {
                  q: "Can I schedule jobs in Qubole?",
                  a: "Yes, Qubole includes a built-in scheduler for ETL workflows, batch jobs, and reporting tasks.",
                },
                {
                  q: "Is Qubole mobile-friendly?",
                  a: "While Qubole’s interface is web-based, it’s primarily optimized for desktop usage.",
                },
                {
                  q: "Can Qubole integrate with third-party BI tools?",
                  a: "Yes, Qubole integrates with tools like Tableau, Looker, and Power BI via JDBC/ODBC connections.",
                },
                {
                  q: "What are the key use cases of Qubole AI?",
                  a: "Key use cases include ETL automation, log processing, data lake transformation, machine learning, and real-time analytics.",
                },
                {
                  q: "Does Qubole support hybrid cloud deployments?",
                  a: "Qubole is optimized for public cloud but can be integrated into hybrid architectures using secure APIs and storage links.",
                },
                {
                  q: "Is Qubole secure?",
                  a: "Yes, Qubole supports encryption at rest and in transit, audit logs, SSO, and compliance with enterprise security standards.",
                },
                {
                  q: "What visualization capabilities does Qubole have?",
                  a: "Qubole provides basic visualizations in notebooks but relies on integration with external BI platforms for advanced dashboards.",
                },
                {
                  q: "Can I customize cluster settings in Qubole?",
                  a: "Yes, you can configure instance types, autoscaling policies, and bootstrap actions per workload.",
                },
                {
                  q: "Does Qubole support event-driven data processing?",
                  a: "Yes, using Apache Airflow and REST APIs, Qubole supports event-based triggers for pipelines.",
                },
                {
                  q: "Does Qubole offer developer APIs?",
                  a: "Yes, Qubole provides REST APIs for cluster control, job execution, monitoring, and data access.",
                },
                {
                  q: "Can I process large datasets with Qubole?",
                  a: "Absolutely — Qubole is built for petabyte-scale data workloads across multiple engines like Spark and Hive.",
                },
                {
                  q: "How is Qubole different from Databricks?",
                  a: "While Databricks focuses on a tightly integrated Spark-based platform, Qubole offers multi-engine flexibility and broader ETL pipeline control.",
                },
                {
                  q: "What industries use Qubole?",
                  a: "Qubole is widely used in media, ad tech, fintech, e-commerce, and data-intensive SaaS companies.",
                },
                {
                  q: "Can Qubole integrate with Git or CI/CD tools?",
                  a: "Yes, Qubole supports version control via Git and can be automated in CI/CD workflows using APIs or Airflow.",
                },
                {
                  q: "Does Qubole support ML lifecycle management?",
                  a: "Qubole provides data prep, model training, and scheduling, but external tools may be needed for full model deployment and monitoring.",
                },
                {
                  q: "Can I use Presto in Qubole?",
                  a: "Yes, Qubole offers a managed Presto engine for interactive SQL querying over large datasets.",
                },
                {
                  q: "Does Qubole support cost optimization?",
                  a: "Yes, Qubole’s AI engine tracks usage patterns and optimizes resource allocation to reduce spend.",
                },
                {
                  q: "What support options does Qubole provide?",
                  a: "Qubole offers documentation, chat support, ticketing, and dedicated technical account managers for enterprise plans.",
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
                    Why Use Qubole AI?
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
                      Qubole automates and optimizes big data processing across
                      Spark, Hive, Presto, and Airflow for faster pipeline
                      execution.
                    </li>
                    <li className="mb-3">
                      AI-driven autoscaling and workload-aware optimizations
                      reduce cloud costs while improving performance.
                    </li>
                    <li className="mb-3">
                      Supports advanced ML workflows with built-in notebook
                      environments like Jupyter and Zeppelin.
                    </li>
                    <li className="mb-3">
                      Seamlessly integrates with AWS, Azure, and Google Cloud
                      for unified data access across multiple storage formats.
                    </li>
                    <li className="mb-3">
                      Provides a centralized interface for job scheduling,
                      monitoring, governance, and team collaboration.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore Qubole AI
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
                    Supports multiple engines like Apache Spark, Hive, Presto,
                    and Airflow in a unified platform.
                  </li>
                  <li className="mb-2">
                    Intelligent autoscaling reduces cloud infrastructure costs
                    while maintaining performance.
                  </li>
                  <li className="mb-2">
                    Built-in support for machine learning workflows and
                    notebooks (Jupyter, Zeppelin).
                  </li>
                  <li className="mb-2">
                    Integrates with major cloud storage providers like AWS S3,
                    Azure, and Google Cloud.
                  </li>
                  <li className="mb-2">
                    Centralized management, job scheduling, and access controls
                    streamline data operations.
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
                    Not ideal for non-technical business users; requires data
                    engineering knowledge.
                  </li>
                  <li className="mb-2">
                    Interface can be overwhelming for beginners unfamiliar with
                    big data tools.
                  </li>
                  <li className="mb-2">
                    Limited built-in BI or dashboarding features compared to
                    platforms like Databricks or Snowflake.
                  </li>
                  <li className="mb-2">
                    Custom Spark tuning and job optimization may require manual
                    configuration.
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
                    Databricks – Unified platform for big data processing,
                    lakehouse architecture, and collaborative machine learning
                    workflows.
                  </li>
                  <li className="mb-2">
                    Amazon EMR – Fully managed Hadoop and Spark service for
                    large-scale data processing on AWS.
                  </li>
                  <li className="mb-2">
                    Google Cloud Dataproc – A fast, cost-effective way to run
                    Apache Spark and Hadoop on Google Cloud.
                  </li>
                  <li className="mb-2">
                    Azure Synapse Analytics – Combines big data and data
                    warehousing into a single cloud-native analytics service.
                  </li>
                  <li className="mb-2">
                    Snowflake – A cloud data platform known for performance,
                    scalability, and SQL-based analytics on large datasets.
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
  {/* Image Section - shows first on mobile */}
  <div className="col-12 col-md-6 order-1 order-md-2 text-center mb-4 mb-md-0">
    <img
      src={qubole}
      alt="Qubole platform"
      style={{ maxWidth: "100%", height: "250px", objectFit: "contain" }}
      className="img-fluid"
    />
  </div>

  {/* Text Section - shows after image on mobile */}
  <div className="col-12 col-md-6 order-2 order-md-1" style={{ paddingRight: "30px" }}>
    <p className="text-primary">Grow better, faster</p>
    <h1>Qubole</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      Qubole is a cloud-native data platform that simplifies and
      automates the management of big data. With robust support for
      data analytics, machine learning, and big data processing,
      Qubole allows businesses to analyze and derive insights from
      vast amounts of data. Leveraging cloud infrastructure such as
      AWS, Google Cloud, and Microsoft Azure, Qubole helps enterprises
      scale their data processing and analysis efforts seamlessly.
    </p>
    <p>
      Qubole is a comprehensive cloud-based data platform that
      provides advanced analytics and machine learning capabilities.
      It is designed to simplify big data processing by automating
      data pipelines, enabling real-time data analysis, and providing
      powerful data visualization tools. With Qubole, businesses can
      optimize their data management strategies, reduce infrastructure
      overhead, and gain insights from large datasets efficiently.
    </p>
    <div className="mb-3">
      <a
        href="https://www.qubole.com/"
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
                How to Use Qubole?
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
                      Connect to Cloud Storage & Data Lakes
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Link Qubole to your data sources such as Amazon S3, Azure
                      Blob Storage, or Hadoop-based data lakes for unified
                      access.
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
                      Build Pipelines & Run Queries
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Use Qubole’s notebooks, schedulers, and engines (Presto,
                      Spark, Hive) to run SQL queries, ETL jobs, or ML pipelines
                      at scale.
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
                      Monitor, Scale & Optimize
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Leverage Qubole’s autoscaling and cost optimization tools
                      to track performance, reduce cloud costs, and scale
                      infrastructure on demand.
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

export default Qubole;
