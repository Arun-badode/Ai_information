import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

import zoho1 from "../../../../public/assets/Img/AI for Business/zoho1.png";
import zoho2 from "../../../../public/assets/Img/AI for Business/zoho2.png";
import zoho from "../../../../public/assets/Img/AI for Business/zoho.png";
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
const ZohoAnalyticsAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                Explore Data Smarter with Zoho Analytics AI
              </p>
              <h3 className="">
                Conversational Insights & Augmented Analytics
              </h3>
            </div>
            {[
              {
                icon: "🤖",
                title: "Zia Insights:",
                desc: "Automatically generate contextual insights, summaries, and smart recommendations from your data using Zoho’s AI assistant Zia.",
              },
              {
                icon: "💬",
                title: "Ask Zia (NLQ):",
                desc: "Type your questions in plain English and let Zia instantly respond with charts, KPIs, or visualizations.",
              },
              {
                icon: "📈",
                title: "Forecasting & What-If Analysis:",
                desc: "Use built-in models to forecast trends or simulate outcomes using adjustable variables.",
              },
              {
                icon: "🚨",
                title: "Anomaly Detection:",
                desc: "Spot irregularities in your data automatically and get notified of unexpected trends or values.",
              },
              {
                icon: "🧩",
                title: "Seamless Integration:",
                desc: "Integrate effortlessly with 500+ sources including Zoho apps, Google Workspace, Microsoft 365, and SQL databases.",
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
                src={zoho1}
                alt="Zoho Analytics AI"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={zoho2}
                alt="Zoho Analytics AI"
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
                  q: "What is Zoho Analytics AI?",
                  a: "Zoho Analytics AI refers to the AI and machine learning capabilities within Zoho Analytics, powered by Zia, the intelligent assistant that helps generate insights and automate analysis.",
                },
                {
                  q: "How does AI work in Zoho Analytics?",
                  a: "Zoho Analytics uses Zia to provide smart suggestions, detect anomalies, answer natural language questions, and deliver predictive insights using machine learning.",
                },
                {
                  q: "Is Zoho Analytics AI beginner-friendly?",
                  a: "Yes, Zoho Analytics AI is designed for both technical and non-technical users, offering intuitive dashboards and conversational analytics.",
                },
                {
                  q: "Is Zoho Analytics AI free to use?",
                  a: "Zoho Analytics offers a free plan with basic analytics features. AI capabilities like Zia Insights and forecasting are available in paid plans.",
                },
                {
                  q: "What platforms is Zoho Analytics available on?",
                  a: "Zoho Analytics is available as a web app and mobile app on Android and iOS, with seamless integration into Zoho's ecosystem.",
                },
                {
                  q: "What makes Zoho Analytics AI unique?",
                  a: "Its built-in AI assistant Zia offers natural language querying, automated insights, and smart data alerts without needing coding.",
                },
                {
                  q: "Who should use Zoho Analytics AI?",
                  a: "Business users, analysts, startups, and enterprises looking for affordable AI-powered analytics with deep Zoho ecosystem integration.",
                },
                {
                  q: "Can Zoho Analytics AI be used for forecasting?",
                  a: "Yes, Zoho Analytics provides time series forecasting to project future trends based on historical data.",
                },
                {
                  q: "Does Zoho Analytics support real-time analytics?",
                  a: "While not real-time like streaming BI tools, it supports scheduled syncs and near-real-time dashboards depending on the data source.",
                },
                {
                  q: "Can I use natural language queries in Zoho Analytics?",
                  a: "Yes, Zia allows users to type natural language questions and get immediate visual answers.",
                },
                {
                  q: "What AI features are available in Zoho Analytics?",
                  a: "Key features include Zia Insights, Smart Narratives, What-If Analysis, Forecasting, and Anomaly Detection.",
                },
                {
                  q: "Can I use Zoho Analytics AI on mobile devices?",
                  a: "Yes, the Zoho Analytics mobile app supports viewing dashboards, insights, and even interacting with Zia on the go.",
                },
                {
                  q: "Can Zoho Analytics generate automated insights?",
                  a: "Yes, Zia generates contextual summaries and explanations for trends, outliers, and KPIs automatically.",
                },
                {
                  q: "Does Zoho Analytics integrate with cloud tools?",
                  a: "Yes, Zoho Analytics connects with 500+ cloud services including Google Workspace, Microsoft 365, and Salesforce.",
                },
                {
                  q: "Is coding required to use Zoho Analytics AI?",
                  a: "No coding is required for most AI tasks. However, advanced users can use SQL, Python, and Zoho Deluge for customizations.",
                },
                {
                  q: "Can Zoho Analytics analyze unstructured data?",
                  a: "Primarily designed for structured data, but you can preprocess and import insights from unstructured sources through APIs or connectors.",
                },
                {
                  q: "Can Zoho Analytics be used for sales forecasting?",
                  a: "Yes, it's commonly used for pipeline tracking, revenue forecasting, and sales trend analysis using AI models.",
                },
                {
                  q: "Can Zoho Analytics detect anomalies?",
                  a: "Yes, Zia automatically detects unusual data patterns and flags anomalies in your reports.",
                },
                {
                  q: "What is Zia in Zoho Analytics?",
                  a: "Zia is Zoho's AI assistant that helps generate insights, answer questions, detect trends, and narrate data stories.",
                },
                {
                  q: "Can I share AI insights in Zoho Analytics?",
                  a: "Yes, you can share dashboards and AI-powered reports via email, scheduled exports, embed codes, or Zoho apps.",
                },
                {
                  q: "Does Zoho Analytics support data storytelling?",
                  a: "Yes, features like Smart Narratives and slide decks allow you to present insights in a narrative format.",
                },
                {
                  q: "What industries benefit from Zoho Analytics AI?",
                  a: "Zoho Analytics is used in retail, SaaS, healthcare, education, manufacturing, and more for accessible AI-powered BI.",
                },
                {
                  q: "Can I schedule reports in Zoho Analytics?",
                  a: "Yes, you can schedule reports and dashboards to be emailed or exported at predefined intervals.",
                },
                {
                  q: "What data formats does Zoho Analytics support?",
                  a: "It supports Excel, CSV, JSON, XML, databases (MySQL, SQL Server), and over 500 cloud apps via connectors.",
                },
                {
                  q: "Is Zoho Analytics AI cloud-based?",
                  a: "Yes, Zoho Analytics is a fully cloud-based SaaS platform with optional on-premise deployment.",
                },
                {
                  q: "Can Zoho Analytics be used offline?",
                  a: "No, Zoho Analytics requires internet connectivity for dashboard access and AI features.",
                },
                {
                  q: "Can I customize AI insights in Zoho Analytics?",
                  a: "Yes, you can configure the data Zia analyzes and tweak forecast models and narratives using settings and filters.",
                },
                {
                  q: "Does Zoho Analytics support white-labeling?",
                  a: "Yes, its Embedded BI edition allows white-labeled dashboards and custom branding for clients and partners.",
                },
                {
                  q: "Does Zoho offer customer support for Analytics?",
                  a: "Yes, support is available via chat, email, documentation, video tutorials, and a global customer success team.",
                },
                {
                  q: "Does Zoho Analytics support team collaboration?",
                  a: "Yes, teams can collaborate on dashboards, share insights, comment on widgets, and co-develop reports in workspaces.",
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
                    Why Use Zoho Analytics AI?
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
                      Zoho Analytics AI, powered by Zia, offers natural language
                      querying, automated insights, and anomaly detection.
                    </li>
                    <li className="mb-3">
                      Ideal for small to mid-sized businesses looking for
                      cost-effective, AI-powered business intelligence tools.
                    </li>
                    <li className="mb-3">
                      Supports seamless integration with Zoho apps and 500+
                      third-party data sources for centralized analysis.
                    </li>
                    <li className="mb-3">
                      Enables advanced analytics with predictive modeling, trend
                      forecasting, and smart data alerts.
                    </li>
                    <li className="mb-3">
                      Easy dashboard sharing, embedding, and collaborative
                      analytics help teams make faster, smarter decisions.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore Zoho Analytics AI
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
                    Easy-to-learn, user-friendly interface.
                  </li>
                  <li className="mb-2">
                    Powerful data blending from multiple sources
                  </li>
                  <li className="mb-2">
                    Robust AI features: forecasts, smart data alerts, sentiment
                    analysis{" "}
                  </li>
                  <li className="mb-2">
                    Affordable and transparent pricing tiers
                  </li>
                  <li className="mb-2">
                    White labeling and embedded BI for custom branding
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
                    Initial setup can feel complex for complete beginners
                  </li>
                  <li className="mb-2">
                    Initial setup and data modeling require a learning curve.
                  </li>
                  <li className="mb-2">
                    Some connectors require additional costs (e.g., Salesforce
                    advanced connector)
                  </li>
                  <li className="mb-2">
                    More AI functionality compared to visualization competitors,
                    but less detailed than specialized data science platforms
                    (like DataRobot)
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
                    Power BI: Best for deep Microsoft ecosystem users.
                  </li>
                  <li className="mb-2">
                    Tableau: Best for complex data visualizations and deep
                    analytics.
                  </li>
                  <li className="mb-2">
                    Looker (Google Cloud): Great for cloud-first companies
                    needing deep embedded analytics.
                  </li>
                  <li className="mb-2">
                    Google Data Studio: A free option for Google services users.{" "}
                  </li>
                  <li className="mb-2">
                    Qlik Sense: Advanced BI for data-heavy enterprises.
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
    <div className="row d-flex align-items-center justify-content-between mb-1">
  {/* Left side (Text Section) */}
  <div
    style={{ flex: 1, paddingRight: "30px" }}
    className="col-6 col-md-12"
  >
    <p className="text-primary">Grow better, faster</p>
    <h1>Zoho Analytics AI</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      Zoho Analytics is a powerful cloud-based business intelligence
      (BI) and data analytics platform designed for creating
      visualizations, dashboards, and detailed reports. It empowers
      businesses to transform raw data into actionable insights using
      automation, AI, and extensive integrations with over 500+ 
      business apps. It's ideal for startups, small businesses, large
      enterprises, and SaaS companies seeking an easy-to-use, yet
      highly customizable, self-service BI tool.
    </p>

    <div className="mb-3">
      <a
        href="https://www.zoho.com/analytics/features/generative-ai.html"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary me-2"
      >
        Explore Tool
      </a>
    </div>
  </div>

  {/* Right side (Image Section) */}
  <div
    style={{
      flex: 1,
      textAlign: "center",
      width: "100%",
      height: "250px",
    }}
    className="col-6 col-md-12 mb-5"
  >
    <img
      src={zoho}
      style={{ maxWidth: "100%", height: "300px" }}
      alt="Zoho Analytics AI"
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
                How to Use Zoho Analytics AI?
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
                      Import and Prepare Data
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Connect data from spreadsheets, cloud apps, databases, or
                      REST APIs and clean it using Zoho’s data preparation
                      tools.
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
                      Ask Zia for Insights
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Use Zia, Zoho’s AI assistant, to ask questions in natural
                      language, get automated reports, and receive smart
                      suggestions for trends and anomalies.
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
                      Visualize and Share
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Create dashboards and reports, schedule them for delivery,
                      embed them in portals, or share them securely across teams
                      for collaboration.
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

export default ZohoAnalyticsAI;
