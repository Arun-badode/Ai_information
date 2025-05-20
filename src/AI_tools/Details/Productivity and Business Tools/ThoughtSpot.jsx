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
const ThoughtSpot = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                Explore Data Smarter with ThoughtSpot AI
              </p>
              <h3 className="">
                Search-Powered Analytics & AI-Driven Business Insights
              </h3>
            </div>
            {[
              {
                icon: "🔎",
                title: "Natural Language Search:",
                desc: "Ask questions in plain English and get instant answers with interactive charts powered by ThoughtSpot’s search engine.",
              },
              {
                icon: "🤖",
                title: "SpotIQ AI Engine:",
                desc: "Automatically uncovers trends, anomalies, and key drivers across millions of data points without manual analysis.",
              },
              {
                icon: "📊",
                title: "Live Cloud Data Access:",
                desc: "Query real-time data directly from Snowflake, BigQuery, Redshift, and more—no data movement required.",
              },
              {
                icon: "📈",
                title: "Interactive Dashboards:",
                desc: "Build and share live dashboards that update instantly based on search queries or real-time metrics.",
              },
              {
                icon: "🔌",
                title: "Embed & Integrate Anywhere:",
                desc: "Embed ThoughtSpot insights into apps, CRMs, or tools like Salesforce, Slack, and Google Sheets using robust APIs.",
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
                  q: "What is ThoughtSpot AI?",
                  a: "ThoughtSpot AI is a search-powered analytics platform that lets users explore data using natural language and get instant, AI-generated visual insights.",
                },
                {
                  q: "How does AI work in ThoughtSpot?",
                  a: "ThoughtSpot uses AI (via SpotIQ) to automatically detect patterns, anomalies, and key drivers in large datasets, surfacing insights without user queries.",
                },
                {
                  q: "Can ThoughtSpot handle natural language questions?",
                  a: "Yes, users can ask questions in plain English, and ThoughtSpot translates them into SQL to generate instant visualizations and dashboards.",
                },
                {
                  q: "Does ThoughtSpot support real-time data?",
                  a: "ThoughtSpot connects directly to live cloud data warehouses like Snowflake and BigQuery for real-time querying.",
                },
                {
                  q: "Is ThoughtSpot beginner-friendly?",
                  a: "Yes, it's designed for non-technical users who want to explore and analyze data without writing SQL.",
                },
                {
                  q: "What is SpotIQ?",
                  a: "SpotIQ is ThoughtSpot’s AI engine that automatically scans your data and returns personalized, real-time insights.",
                },
                {
                  q: "Can ThoughtSpot connect to Snowflake?",
                  a: "Yes, it integrates seamlessly with Snowflake, offering live querying capabilities.",
                },
                {
                  q: "What file formats does ThoughtSpot support for export?",
                  a: "You can export results to CSV, XLSX, and PDF.",
                },
                {
                  q: "Is ThoughtSpot a cloud-based platform?",
                  a: "Yes, ThoughtSpot is fully cloud-native and offers deployment on AWS, Azure, and GCP.",
                },
                {
                  q: "Does ThoughtSpot require coding knowledge?",
                  a: "No coding is required to use ThoughtSpot’s search and AI tools.",
                },
                {
                  q: "Can ThoughtSpot be embedded?",
                  a: "Yes, ThoughtSpot Everywhere allows you to embed interactive analytics into apps or web portals.",
                },
                {
                  q: "Does ThoughtSpot support role-based access control?",
                  a: "Yes, ThoughtSpot includes enterprise-grade RBAC and data governance features.",
                },
                {
                  q: "Can I schedule reports in ThoughtSpot?",
                  a: "Yes, you can schedule report emails and alerts based on conditions or intervals.",
                },
                {
                  q: "Is ThoughtSpot mobile friendly?",
                  a: "Yes, there’s a responsive web interface and a dedicated mobile app for on-the-go analytics.",
                },
                {
                  q: "Can ThoughtSpot integrate with Salesforce?",
                  a: "Yes, it integrates with Salesforce and can embed analytics directly into your CRM workflows.",
                },
                {
                  q: "What are the key use cases of ThoughtSpot AI?",
                  a: "Common use cases include sales analytics, marketing performance, product engagement, and financial reporting.",
                },
                {
                  q: "Does ThoughtSpot support multi-cloud environments?",
                  a: "Yes, it supports deployment across multiple clouds and hybrid infrastructures.",
                },
                {
                  q: "Is ThoughtSpot secure?",
                  a: "Yes, it complies with enterprise security standards including SOC 2, GDPR, and supports SSO and encryption.",
                },
                {
                  q: "What types of visualizations does ThoughtSpot offer?",
                  a: "It offers tables, bar charts, time series, heatmaps, pie charts, and more with smart charting based on context.",
                },
                {
                  q: "Can I customize dashboards in ThoughtSpot?",
                  a: "Yes, dashboards are fully interactive and customizable with drag-and-drop capabilities.",
                },
                {
                  q: "Does ThoughtSpot support real-time alerts?",
                  a: "Yes, you can set alerts on KPIs, thresholds, or SpotIQ discoveries.",
                },
                {
                  q: "Is there a developer API for ThoughtSpot?",
                  a: "Yes, ThoughtSpot provides REST APIs, Webhooks, and embed SDKs for developers.",
                },
                {
                  q: "Can I analyze large datasets in ThoughtSpot?",
                  a: "Yes, it’s optimized for querying billions of rows of data in seconds via live connections.",
                },
                {
                  q: "How is ThoughtSpot different from Tableau or Power BI?",
                  a: "Unlike traditional BI tools, ThoughtSpot uses search and AI-first UX to empower self-service analytics without dashboards.",
                },
                {
                  q: "What industries use ThoughtSpot?",
                  a: "Finance, Retail, Healthcare, SaaS, and Manufacturing widely adopt ThoughtSpot for scalable analytics.",
                },
                {
                  q: "Does ThoughtSpot support version control?",
                  a: "Versioning is available through integration with Git and dev environments in ThoughtSpot Modeling Language (TML).",
                },
                {
                  q: "What is TML in ThoughtSpot?",
                  a: "TML (ThoughtSpot Modeling Language) is a YAML-based language used to define and manage analytics objects as code.",
                },
                {
                  q: "Can I do cohort analysis in ThoughtSpot?",
                  a: "Yes, you can perform cohort-based breakdowns using SpotIQ or by crafting custom visualizations.",
                },
                {
                  q: "Does ThoughtSpot support custom SQL?",
                  a: "Yes, ThoughtSpot enables custom SQL queries via Worksheets or embedded SQL blocks.",
                },
                {
                  q: "What kind of support is available?",
                  a: "ThoughtSpot offers knowledge base access, community forums, enterprise support, and technical account management.",
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
                    Why Use ThoughtSpot AI?
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
                      ThoughtSpot allows users to ask data questions in natural
                      language and receive instant, AI-generated visual
                      insights.
                    </li>
                    <li className="mb-3">
                      Powered by SpotIQ, it automatically analyzes billions of
                      rows of data to surface hidden trends, outliers, and
                      anomalies.
                    </li>
                    <li className="mb-3">
                      Natively connects to cloud data warehouses like Snowflake,
                      BigQuery, Redshift, and Databricks for live querying.
                    </li>
                    <li className="mb-3">
                      Empowers business users to explore and share insights
                      without relying on BI developers or SQL knowledge.
                    </li>
                    <li className="mb-3">
                      Supports embedded analytics, APIs, and integration with
                      tools like Slack, Salesforce, and Google Sheets.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore ThoughtSpot AI
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
                    AI-powered natural language search lets anyone ask questions
                    and get visual answers instantly.
                  </li>
                  <li className="mb-2">
                    Live query architecture connects directly to cloud data
                    warehouses (e.g. Snowflake, BigQuery).
                  </li>
                  <li className="mb-2">
                    User-friendly interface that democratizes access to BI for
                    non-technical users.
                  </li>
                  <li className="mb-2">
                    Embedded analytics and charts can be integrated directly
                    into applications.
                  </li>
                  <li className="mb-2">
                    Offers real-time insight generation with machine
                    learning-powered SpotIQ.
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
                    Requires modern cloud data warehouse setup for full
                    capabilities.
                  </li>
                  <li className="mb-2">
                    Pricing may be high for small businesses or startups.
                  </li>
                  <li className="mb-2">
                    Learning curve for users unfamiliar with self-service
                    analytics platforms.
                  </li>
                  <li className="mb-2">
                    SpotIQ AI suggestions can sometimes surface noisy or
                    redundant insights.
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
                    Tableau – A powerful BI platform known for its rich data
                    visualizations and dashboarding capabilities.
                  </li>
                  <li className="mb-2">
                    Power BI – Microsoft’s enterprise analytics suite, ideal for
                    integration with Office 365 and Excel.
                  </li>
                  <li className="mb-2">
                    Looker – Google’s cloud-native BI tool offering customizable
                    data models and embedded analytics.
                  </li>
                  <li className="mb-2">
                    Qlik Sense – Offers associative data modeling and AI-driven
                    insights with an emphasis on data literacy.
                  </li>
                  <li className="mb-2">
                    Sigma Computing – Spreadsheet-like interface on live cloud
                    data, designed for analysts and business users.
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
              <h1>ThoughtSpot </h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                ThoughtSpot is an advanced business intelligence (BI) and
                analytics platform that leverages AI-powered search and machine
                learning to help users discover insights from their data
                effortlessly. With a simple search-based interface, ThoughtSpot
                enables data exploration, analysis, and reporting for teams
                across various industries, such as finance, marketing, sales,
                and HR.
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
                How to Use ThoughtSpot AI?
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
                      Connect Your Data Sources
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Integrate ThoughtSpot with your cloud data warehouse
                      (Snowflake, BigQuery, Redshift, etc.) to enable live
                      analytics.
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
                      Ask Questions in Natural Language
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Use ThoughtSpot’s AI search bar to ask data questions in
                      plain English, and instantly receive charts, KPIs, and
                      trends.
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
                      Share & Embed Live Insights
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Share AI-generated insights with your team or embed
                      interactive dashboards into your apps and workflows.
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
            <h4 className="mb-3">Ready to get started with ThoughtSpot AI?</h4>
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

export default ThoughtSpot;
