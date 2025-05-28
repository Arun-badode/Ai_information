import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

import qlik1 from "../../../../public/assets/Img/AI for Business/qlik1.png";
import qlik2 from "../../../../public/assets/Img/AI for Business/qlik2.png";
import qlik from "../../../../public/assets/Img/AI for Business/qlik.jpeg";
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
const QlikSenseAI = () => {
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
                title: "Smart Data Visualization:",
                desc: "Create compelling, interactive charts and graphs with AI recommendations.",
              },
              {
                icon: "🤖",
                title: "AI Insights Generator:",
                desc: "Uncover hidden trends and patterns automatically using Qlik’s Associative Engine.",
              },
              {
                icon: "🔗",
                title: "Data Integration:",
                desc: "Seamlessly connect to spreadsheets, cloud apps, databases, and more.",
              },
              {
                icon: "🧠",
                title: "Augmented Analytics:",
                desc: "Empower users with natural language queries and AI-driven insights.",
              },
              {
                icon: "📤",
                title: "Collaborative Sharing:",
                desc: "Easily share dashboards and reports across your organization securely.",
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
                src={qlik1}
                alt="Qlik Sense AI"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={qlik2}
                alt="Qlik Sense AI"
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
                  q: "What is Qlik Sense AI?",
                  a: "Qlik Sense AI is an advanced analytics platform that uses augmented intelligence to generate insights from your data with natural language interaction and smart visualizations.",
                },
                {
                  q: "How does Qlik Sense AI help businesses?",
                  a: "It enables faster decision-making by automatically detecting patterns, trends, and outliers in data, and providing predictive suggestions.",
                },
                {
                  q: "Is Qlik Sense AI suitable for non-technical users?",
                  a: "Yes, Qlik Sense AI is designed for both analysts and business users with user-friendly dashboards and natural language query support.",
                },
                {
                  q: "Does Qlik Sense AI support natural language processing?",
                  a: "Yes, users can ask questions using everyday language and get immediate visual insights through Insight Advisor.",
                },
                {
                  q: "What data sources can Qlik Sense AI connect to?",
                  a: "Qlik Sense AI supports integration with Excel, SQL databases, cloud storage (AWS, Azure), web APIs, and over 100 other connectors.",
                },
                {
                  q: "What makes Qlik Sense AI different from traditional BI tools?",
                  a: "Qlik’s Associative Engine explores all possible relationships in data, unlike query-based BI tools that are limited to predefined hierarchies.",
                },
                {
                  q: "Is Qlik Sense AI cloud-based?",
                  a: "Yes, Qlik Sense offers both cloud and on-premise deployment options based on business needs.",
                },
                {
                  q: "Can I customize dashboards in Qlik Sense AI?",
                  a: "Absolutely. Dashboards are highly customizable using drag-and-drop, script editing, and extension support.",
                },
                {
                  q: "Does Qlik Sense AI offer data storytelling features?",
                  a: "Yes, Qlik Sense allows you to create guided storyboards with dynamic data snapshots for impactful presentations.",
                },
                {
                  q: "Is Qlik Sense AI secure for enterprise use?",
                  a: "Yes, it includes enterprise-grade security features like row-level access, encryption, and user authentication.",
                },
                {
                  q: "Who should use Qlik Sense AI?",
                  a: "It's ideal for data analysts, business executives, financial planners, sales teams, and operations managers.",
                },
                {
                  q: "Can Qlik Sense AI be used on mobile?",
                  a: "Yes, Qlik Sense provides responsive dashboards accessible from smartphones and tablets with full interactivity.",
                },
                {
                  q: "Does Qlik Sense AI support real-time data analysis?",
                  a: "Yes, it can be integrated with real-time data pipelines to provide live dashboards and alerts.",
                },
                {
                  q: "Can I share reports created in Qlik Sense AI?",
                  a: "Yes, reports can be shared via secure links, embedded in web apps, or exported in PDF and Excel formats.",
                },
                {
                  q: "Is training required to use Qlik Sense AI?",
                  a: "While intuitive, Qlik offers a range of tutorials, help docs, and certification courses for advanced usage.",
                },
                {
                  q: "Does Qlik Sense AI support collaboration?",
                  a: "Yes, team members can collaborate using shared workspaces, bookmarks, and storytelling features.",
                },
                {
                  q: "What industries use Qlik Sense AI?",
                  a: "It is widely used in healthcare, finance, retail, manufacturing, and government sectors for analytics and reporting.",
                },
                {
                  q: "How does Qlik Sense AI handle large datasets?",
                  a: "It efficiently handles millions of rows of data through in-memory processing and optimized indexing.",
                },
                {
                  q: "Can I use Qlik Sense AI for predictive analytics?",
                  a: "Yes, with integration to R, Python, and AutoML tools, Qlik enables predictive modeling and what-if analysis.",
                },
                {
                  q: "Is Qlik Sense AI available with a free trial?",
                  a: "Yes, Qlik offers a free trial version with limited features to explore the platform before subscribing.",
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
                    Why Use Qlik Sense AI?
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
                      Qlik Sense AI provides advanced data visualization and
                      AI-powered insights for better decision-making.
                    </li>
                    <li className="mb-3">
                      Ideal for analysts, executives, and business teams to
                      explore data interactively and collaboratively.
                    </li>
                    <li className="mb-3">
                      Offers smart suggestions, automated insights, and natural
                      language queries through its Insight Advisor.
                    </li>
                    <li className="mb-3">
                      Simplifies analytics without needing coding or deep
                      technical expertise.
                    </li>
                    <li className="mb-3">
                      Qlik Sense AI is a scalable, cloud-ready platform perfect
                      for modern business intelligence workflows.
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
                    AI-driven analytics provide fast and accurate business
                    insights.
                  </li>
                  <li className="mb-2">
                    Natural language query support makes it accessible for
                    non-technical users.
                  </li>
                  <li className="mb-2">
                    Highly interactive and customizable dashboards for deep data
                    exploration.
                  </li>
                  <li className="mb-2">
                    Scalable architecture supports both cloud and on-premise
                    deployments.
                  </li>
                  <li className="mb-2">
                    Wide integration with third-party tools, databases, and
                    cloud services.
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
                    Can have a learning curve for advanced scripting and
                    customizations.
                  </li>
                  <li className="mb-2">
                    Full feature access may require higher-tier licenses.
                  </li>
                  <li className="mb-2">
                    Performance may vary with extremely large or unoptimized
                    datasets.
                  </li>
                  <li className="mb-2">
                    Some advanced predictive features depend on integration with
                    external tools like R or Python.
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
                    Power BI – Microsoft's data analytics tool offering seamless
                    integration with the Office ecosystem.
                  </li>
                  <li className="mb-2">
                    Tableau – A powerful platform known for rich data
                    visualizations and interactive dashboards.
                  </li>
                  <li className="mb-2">
                    Looker – A Google Cloud-based BI tool that excels in
                    embedded analytics and data modeling.
                  </li>
                  <li className="mb-2">
                    Sisense – Combines data from multiple sources and leverages
                    AI for predictive analytics.
                  </li>
                  <li className="mb-2">
                    Zoho Analytics – Offers an easy-to-use interface with
                    AI-driven insights and automation tools.
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
  <div className="row align-items-center justify-content-between mb-1">
  {/* Image Section: on top on mobile, right on desktop */}
  <div
    className="col-12 col-md-6 order-1 order-md-2 mb-4 mb-md-0 text-center"
    style={{ height: "250px" }}
  >
    <img
      src={qlik}
      alt="Qlik Sense AI"
      style={{ maxWidth: "100%", height: "250px", objectFit: "contain" }}
    />
  </div>

  {/* Text Section: below image on mobile, left on desktop */}
  <div
    className="col-12 col-md-6 order-2 order-md-1"
    style={{ paddingRight: "30px" }}
  >
    <p className="text-primary">Grow better, faster</p>
    <h1>Qlik Sense AI</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      Qlik Sense AI is a leading data analytics and business
      intelligence tool that leverages artificial intelligence in Qlik
      Sense to enhance data analysis, predictive modeling, and
      visualization. It empowers businesses to make data-driven
      decisions by providing deeper insights through advanced machine
      learning, AI-powered data analysis, and real-time reporting.
    </p>
    <p>
      Qlik Sense is a self-service data visualization and business
      intelligence tool that helps organizations analyze, interpret,
      and visualize large volumes of data. By incorporating Qlik Sense
      AI, users can unlock the potential of machine learning and
      predictive analytics to drive better business outcomes.
    </p>

    <div className="mb-3">
      <a
        href="https://www.qlik.com/us/products/qlik-ai-ml"
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
                How to Use Qlik Sense AI?
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
                      Import Your Data
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Begin by uploading or connecting your data from various
                      sources into Qlik Sense.
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
                      Generate Insights
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Use Qlik Sense AI to explore your data and generate
                      intelligent insights, trends, and recommendations.
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
                      Visualize & Share
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Create interactive dashboards using AI suggestions, then
                      share insights with your team securely.
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

export default QlikSenseAI;
