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
const TableauAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">Explore Data Smarter with Domo AI</p>
              <h3 className="">
                Real-Time Intelligence & Automated Decision-Making
              </h3>
            </div>
            {[
              {
                icon: "⚙️",
                title: "AutoML:",
                desc: "Build and deploy predictive models without writing code using Domo’s built-in AutoML workflows.",
              },
              {
                icon: "💡",
                title: "Intelligent Alerts:",
                desc: "Set up AI-powered alerts to get notified about anomalies, trends, or important changes in your data.",
              },
              {
                icon: "🧠",
                title: "Jupyter Workspaces:",
                desc: "Run advanced analytics with integrated Jupyter Notebooks supporting Python and R for custom ML solutions.",
              },
              {
                icon: "🔍",
                title: "Natural Language Queries:",
                desc: "Ask data questions in everyday language and get instant answers with AI-driven visual summaries.",
              },
              {
                icon: "🌐",
                title: "Domo Everywhere:",
                desc: "Embed interactive dashboards with AI insights into portals, apps, and client platforms with full branding control.",
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
                  q: "What is Domo AI?",
                  a: "Domo AI is the artificial intelligence and machine learning capability built into the Domo platform, enabling data-driven predictions, intelligent alerts, and natural language insights.",
                },
                {
                  q: "How does AI work in Domo?",
                  a: "Domo AI leverages AutoML, Python/R integrations, and prebuilt models to analyze data, predict trends, and offer automated insights within dashboards and cards.",
                },
                {
                  q: "Is Domo AI beginner-friendly?",
                  a: "Yes, Domo provides an intuitive interface with drag-and-drop tools and natural language query features suitable for non-technical users.",
                },
                {
                  q: "Is Domo AI free to use?",
                  a: "Domo offers AI features with its subscription plans. Advanced AI functionalities may require higher-tier licenses or add-ons like AutoML or Jupyter Workspaces.",
                },
                {
                  q: "What platforms is Domo available on?",
                  a: "Domo is a fully cloud-based platform accessible via web and mobile apps for both iOS and Android.",
                },
                {
                  q: "What makes Domo AI unique?",
                  a: "Domo combines real-time data pipelines, AutoML, and BI visualization in one platform with AI-driven decision-making and embedded analytics.",
                },
                {
                  q: "Who should use Domo AI?",
                  a: "Business analysts, executives, and teams that require real-time insights, cross-departmental collaboration, and embedded intelligence.",
                },
                {
                  q: "Can Domo AI be used for forecasting?",
                  a: "Yes, Domo's AutoML and forecasting features allow you to predict future trends and model various business scenarios.",
                },
                {
                  q: "Does Domo AI support real-time analytics?",
                  a: "Yes, Domo's architecture supports real-time data streaming, dashboard updates, and instant alerts.",
                },
                {
                  q: "Can I use natural language in Domo AI?",
                  a: "Yes, Domo offers natural language querying, allowing users to ask data questions in plain English for instant insights.",
                },
                {
                  q: "What AI tools are built into Domo?",
                  a: "Domo includes AutoML, predictive analytics, intelligent alerts, Jupyter Notebook integration, and NLP querying.",
                },
                {
                  q: "Can I use Domo AI on mobile devices?",
                  a: "Yes, Domo's mobile app supports full interactivity with dashboards, alerts, and AI-powered reports.",
                },
                {
                  q: "Can Domo AI generate automated insights?",
                  a: "Yes, Domo AI generates predictive cards and alerts that proactively surface key business insights.",
                },
                {
                  q: "Does Domo integrate with cloud tools?",
                  a: "Yes, Domo supports 1,000+ connectors including Google Cloud, AWS, Microsoft Azure, and many SaaS apps.",
                },
                {
                  q: "Is coding required to use Domo AI?",
                  a: "No coding is needed for most users, but developers can use Python, R, and SQL for advanced modeling within Jupyter or scripting environments.",
                },
                {
                  q: "Can Domo AI handle unstructured data?",
                  a: "Yes, Domo can analyze unstructured data through integrations with AI/ML models and external processing tools.",
                },
                {
                  q: "Can Domo AI be used for sales forecasting?",
                  a: "Absolutely, Domo AI is widely used for sales pipeline analysis, revenue forecasting, and performance tracking.",
                },
                {
                  q: "Can Domo detect anomalies?",
                  a: "Yes, Domo's AI alerts detect data anomalies and notify users in real time via email or mobile.",
                },
                {
                  q: "What is Domo AutoML?",
                  a: "Domo AutoML lets users train, evaluate, and deploy predictive models without writing code, using intuitive workflows.",
                },
                {
                  q: "Can I share AI insights in Domo?",
                  a: "Yes, Domo supports real-time dashboard sharing, alerts, scheduled reports, and secure publishing with Domo Everywhere.",
                },
                {
                  q: "Does Domo support data storytelling?",
                  a: "Yes, you can build interactive dashboards and combine cards to narrate a complete business story visually.",
                },
                {
                  q: "What industries benefit from Domo AI?",
                  a: "Retail, finance, healthcare, logistics, manufacturing, and marketing teams commonly use Domo AI for strategic insights.",
                },
                {
                  q: "Can I schedule reports using Domo?",
                  a: "Yes, Domo supports report scheduling and automated alert delivery to stakeholders.",
                },
                {
                  q: "What data formats does Domo support?",
                  a: "Domo supports Excel, CSV, JSON, XML, and integrates with APIs, SQL databases, and cloud apps like Google Sheets and Salesforce.",
                },
                {
                  q: "Is Domo AI cloud-based?",
                  a: "Yes, Domo is entirely cloud-native, built for scalability, speed, and collaboration.",
                },
                {
                  q: "Can Domo be used offline?",
                  a: "No, Domo requires internet connectivity as it’s a fully cloud-based solution.",
                },
                {
                  q: "Can I customize AI models in Domo?",
                  a: "Yes, advanced users can build, tune, and deploy custom ML models using Python or R inside Jupyter Workspaces.",
                },
                {
                  q: "Does Domo offer white-labeling?",
                  a: "Yes, with Domo Everywhere, you can embed dashboards into your own platforms with full branding control.",
                },
                {
                  q: "Does Domo offer customer support?",
                  a: "Yes, Domo provides comprehensive support through documentation, live chat, customer success teams, and community forums.",
                },
                {
                  q: "Does Domo support team collaboration?",
                  a: "Yes, Domo enables teams to collaborate on dashboards, share insights in real time, and annotate visualizations for better communication.",
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
                    Why Use Domo AI?
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
                      Domo AI transforms raw data into actionable insights using
                      AutoML, natural language queries, and intelligent alerts.
                    </li>
                    <li className="mb-3">
                      It’s perfect for enterprises that need real-time
                      decision-making across departments and large-scale data
                      environments.
                    </li>
                    <li className="mb-3">
                      Domo’s Magic ETL and pre-built connectors make data
                      integration and preparation fast and user-friendly.
                    </li>
                    <li className="mb-3">
                      Supports advanced modeling and scripting with R, Python,
                      and Jupyter integration for custom AI/ML workflows.
                    </li>
                    <li className="mb-3">
                      With Domo Everywhere, you can embed dashboards and
                      collaborate securely with internal and external
                      stakeholders.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore Domo AI
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
                    Real-time data visualizations and dashboards powered by AI
                    and AutoML.
                  </li>
                  <li className="mb-2">
                    Easy-to-use natural language queries and intelligent alerts
                    for quick insights.
                  </li>
                  <li className="mb-2">
                    Extensive connector library with 1,000+ pre-built data
                    integrations.
                  </li>
                  <li className="mb-2">
                    Embedded machine learning models with support for Python, R,
                    and Jupyter Notebooks.
                  </li>
                  <li className="mb-2">
                    Domo Everywhere enables white-labeled dashboard sharing and
                    external collaboration.
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
                    Pricing may be high for small teams or startups compared to
                    simpler BI tools.
                  </li>
                  <li className="mb-2">
                    Initial setup and data modeling require a learning curve.
                  </li>
                  <li className="mb-2">
                    Some AI capabilities are more limited without advanced plan
                    tiers.
                  </li>
                  <li className="mb-2">
                    Advanced customization may need support from Domo experts or
                    developers.
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
                    Tableau – Known for its interactive dashboards and AI tools
                    like Explain Data and Einstein Discovery, great for visual
                    analytics.
                  </li>
                  <li className="mb-2">
                    Power BI – Microsoft's AI-enabled platform integrates with
                    Azure ML and Excel, offering scalable business intelligence
                    for enterprises.
                  </li>
                  <li className="mb-2">
                    Looker (Google Cloud) – Focuses on embedded analytics and
                    AI-powered exploration using LookML and seamless integration
                    with BigQuery.
                  </li>
                  <li className="mb-2">
                    Sisense – Provides AI-driven analytics and embedded
                    intelligence with strong API support for customizable
                    solutions.
                  </li>
                  <li className="mb-2">
                    Qlik Sense – Offers associative data exploration and
                    Augmented Intelligence to surface key insights from complex
                    datasets.
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
          className="d-inline-block text-white text-decoration-none ml-3 py-3 ms-3"
        >
          <i className="bi bi-arrow-left me-2"></i>Back {" "}
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
              <h1>Domo AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Domo AI is a powerful platform that integrates artificial
                intelligence and machine learning into its business intelligence
                (BI) services. Designed for modern enterprises, Domo AI
                transforms how businesses visualize, analyze, and act on their
                data by delivering smart, real-time, and AI-driven insights.
                Leveraging Domo AI analytics, machine learning models, and
                predictive analytics, organizations can enhance decision-making,
                improve performance, and drive growth.
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
                How to Use Domo AI?
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
                      Connect and Unify Data
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Import data from spreadsheets, databases, APIs, or cloud
                      services using Domo's 1,000+ connectors, and centralize it
                      in one platform.
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
                      Apply AI & Machine Learning
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Use Domo AI tools to run predictive analytics, generate
                      insights using natural language queries, and build custom
                      ML models with AutoML.
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
                      Share and Automate
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Build interactive dashboards, set alerts, and automate
                      business workflows across departments using Domo
                      Everywhere and real-time collaboration tools.
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
            <h4 className="mb-3">Ready to get started with Domo AI?</h4>
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

export default TableauAI;
