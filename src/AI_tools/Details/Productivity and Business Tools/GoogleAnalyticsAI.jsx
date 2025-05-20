import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import google from '../../../../public/assets/Img/AI for Business/google.png'
import googly1 from '../../../../public/assets/Img/AI for Business/googly1.png'
import google12 from '../../../../public/assets/Img/AI for Business/google12.png'

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
const GoogleAnalyticsAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                Explore Data Smarter with Google Analytics AI
              </p>
              <h3 className="">
                Predictive Metrics & Smart Automated Insights
              </h3>
            </div>
            {[
              {
                icon: "📊",
                title: "Automated Insights:",
                desc: "Receive instant alerts on key trends, anomalies, and performance changes directly within your GA4 dashboard.",
              },
              {
                icon: "🔮",
                title: "Predictive Metrics:",
                desc: "Use AI-powered metrics like purchase probability and churn likelihood to segment users effectively.",
              },
              {
                icon: "📈",
                title: "Behavior Modeling:",
                desc: "Understand user journeys and forecast actions using behavior flow and engagement predictions.",
              },
              {
                icon: "💬",
                title: "Natural Language Summaries:",
                desc: "Surface high-level summaries of user behavior trends and marketing campaign results with machine learning analysis.",
              },
              {
                icon: "🔗",
                title: "BigQuery & Looker Integration:",
                desc: "Connect with BigQuery and Looker Studio for advanced machine learning queries, dashboards, and AI-driven visualizations.",
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
                src={googly1}
                alt="screenshot1"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={google12}
                alt="screenshot2"
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
                  q: "What is Google Analytics AI?",
                  a: "Google Analytics AI refers to the machine learning and AI-driven insights built into Google Analytics 4 (GA4), enabling automated insights, predictive metrics, and anomaly detection.",
                },
                {
                  q: "How does AI work in Google Analytics?",
                  a: "Google Analytics uses AI to identify trends, forecast user behavior, detect anomalies, and surface automated insights about website and app performance.",
                },
                {
                  q: "Is Google Analytics AI beginner-friendly?",
                  a: "Yes, the AI insights are automatically generated and presented in a readable format, making them useful for users of all levels.",
                },
                {
                  q: "Is Google Analytics AI free to use?",
                  a: "Yes, Google Analytics (including AI features) is free to use, though BigQuery export and advanced modeling may require Google Cloud integration.",
                },
                {
                  q: "What platforms support Google Analytics?",
                  a: "Google Analytics can be used on websites, mobile apps (via Firebase), and across various Google marketing platforms.",
                },
                {
                  q: "What makes Google Analytics AI unique?",
                  a: "It offers predictive metrics like purchase probability, churn likelihood, and automated alerts without custom modeling.",
                },
                {
                  q: "Who should use Google Analytics AI?",
                  a: "Marketers, analysts, and business owners who want to track user behavior, predict actions, and optimize digital experiences.",
                },
                {
                  q: "Can Google Analytics AI be used for forecasting?",
                  a: "Yes, GA4 includes predictive metrics that estimate future user actions like conversions or revenue.",
                },
                {
                  q: "Does Google Analytics support real-time data?",
                  a: "Yes, real-time reports show current user activity on websites and apps.",
                },
                {
                  q: "Can I ask natural language questions in Google Analytics?",
                  a: "Not directly in GA4, but Google Analytics integrates with Looker Studio and Google Assistant for simplified query handling.",
                },
                {
                  q: "What AI features are in GA4?",
                  a: "Predictive metrics, anomaly detection, automated insights, and audience suggestions based on behavior.",
                },
                {
                  q: "Can I access Google Analytics AI on mobile?",
                  a: "Yes, the Google Analytics mobile app supports dashboards, reports, and insights.",
                },
                {
                  q: "Does Google Analytics generate automated insights?",
                  a: "Yes, GA4 shows AI-driven insights like traffic spikes, user drop-offs, and goal performance trends.",
                },
                {
                  q: "Does GA4 integrate with other Google tools?",
                  a: "Yes, including Google Ads, BigQuery, Firebase, Tag Manager, and Data Studio.",
                },
                {
                  q: "Do I need coding to use Google Analytics AI?",
                  a: "No, most insights are automated. However, developers can use the API and BigQuery for advanced use cases.",
                },
                {
                  q: "Can Google Analytics handle unstructured data?",
                  a: "GA primarily analyzes structured event-based data, but it can integrate with BigQuery for more complex datasets.",
                },
                {
                  q: "Can Google Analytics AI assist with eCommerce tracking?",
                  a: "Yes, it tracks product views, cart activity, transactions, and predicts purchase likelihood.",
                },
                {
                  q: "Can GA4 detect anomalies?",
                  a: "Yes, AI detects unusual drops or surges in user behavior, traffic, or goal completions.",
                },
                {
                  q: "What is predictive analytics in GA4?",
                  a: "It includes metrics like churn probability and conversion probability, helping segment users more effectively.",
                },
                {
                  q: "Can I share Google Analytics reports?",
                  a: "Yes, reports can be shared via email, exported to PDF, or integrated with Looker Studio for collaboration.",
                },
                {
                  q: "Does Google Analytics support storytelling?",
                  a: "With Looker Studio integration, users can build narrative dashboards and share visual stories with stakeholders.",
                },
                {
                  q: "What industries benefit most from GA4 AI?",
                  a: "Retail, media, SaaS, finance, and education benefit from automated user behavior tracking and optimization.",
                },
                {
                  q: "Can GA4 schedule report exports?",
                  a: "Yes, reports can be scheduled through linked Looker Studio dashboards or third-party tools.",
                },
                {
                  q: "What file formats does Google Analytics support?",
                  a: "Exports include CSV and PDF; GA4 also integrates with BigQuery for raw data in table format.",
                },
                {
                  q: "Is Google Analytics cloud-based?",
                  a: "Yes, GA4 is entirely cloud-based and built to scale with user volume.",
                },
                {
                  q: "Can Google Analytics work offline?",
                  a: "No, it requires an internet connection to process and display data.",
                },
                {
                  q: "Can I customize AI features in GA4?",
                  a: "Users can define events, goals, and segments which feed into AI-generated insights.",
                },
                {
                  q: "Does Google Analytics support white-labeling?",
                  a: "Not directly, but data can be exported to white-labeled dashboards in Looker Studio.",
                },
                {
                  q: "Is customer support available for GA4?",
                  a: "Yes, through help centers, community forums, and premium support via Google Workspace.",
                },
                {
                  q: "Does Google Analytics support collaboration?",
                  a: "Yes, reports and dashboards can be shared with teams, and permissions can be managed across users.",
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
                    Why Use Google Analytics AI?
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
                      Google Analytics AI automatically uncovers key trends,
                      patterns, and anomalies in your website and app data.
                    </li>
                    <li className="mb-3">
                      It’s ideal for marketers and product teams aiming to
                      improve user journeys and campaign performance with
                      AI-driven insights.
                    </li>
                    <li className="mb-3">
                      Integrates seamlessly with Google Ads, BigQuery, Google
                      Tag Manager, and the entire Google ecosystem.
                    </li>
                    <li className="mb-3">
                      Predictive audiences and churn probability scores help you
                      take proactive marketing actions.
                    </li>
                    <li className="mb-3">
                      Offers both free and enterprise-grade options to support
                      small businesses and large enterprises alike.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore Google Analytics AI
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
                    Seamless integration with Google Ads, BigQuery, and other
                    Google services.
                  </li>
                  <li className="mb-2">
                    AI-powered insights automatically detect trends, anomalies,
                    and predictions.
                  </li>
                  <li className="mb-2">
                    Real-time data tracking and predictive audiences for
                    marketing optimization.
                  </li>
                  <li className="mb-2">
                    Free to use for most websites with scalable enterprise
                    options.
                  </li>
                  <li className="mb-2">
                    User-friendly UI and customizable dashboards in GA4.
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
                    Steep learning curve for users transitioning from Universal
                    Analytics to GA4.
                  </li>
                  <li className="mb-2">
                    Limited customization in standard reports without BigQuery
                    or third-party tools.
                  </li>
                  <li className="mb-2">
                    Predictive metrics are only available for websites with high
                    traffic volume.
                  </li>
                  <li className="mb-2">
                    Historical data may not carry over seamlessly from older
                    Google Analytics versions.
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
                    Adobe Analytics – Enterprise-grade analytics with deeper
                    customer journey tracking and AI-based attribution modeling.
                  </li>
                  <li className="mb-2">
                    Matomo – A privacy-focused Google Analytics alternative
                    offering user-centric reports and on-premise hosting.
                  </li>
                  <li className="mb-2">
                    Mixpanel – Ideal for product analytics and event-based
                    tracking, especially for SaaS and mobile apps.
                  </li>
                  <li className="mb-2">
                    Piwik PRO – A GDPR-compliant analytics platform for
                    government and healthcare organizations with private
                    cloud/on-prem hosting.
                  </li>
                  <li className="mb-2">
                    Kissmetrics – Focuses on cohort and funnel analysis for
                    eCommerce and subscription-based businesses.
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
        <div className="row d-flex align-items-center justify-content-between mb-3">
  {/* Left side (Text Section) */}
  <div className="col-md-6 mb-4 mb-md-0" style={{ paddingRight: "30px" }}>
    <p className="text-primary">Grow better, faster</p>
    <h1>Google Analytics AI</h1>
    <div className="text-warning mb-2">⭐⭐⭐⭐⭐</div>
    <p>
      Google Analytics AI, powered by artificial intelligence and machine learning algorithms, has become an essential tool for businesses looking to understand customer behavior and enhance decision-making. By leveraging AI in Google Analytics, users can gain predictive insights, automate data analysis, and enhance reporting accuracy. AI-driven insights enable businesses to make informed decisions faster and more efficiently.
    </p>
    <a
      href="https://cloud.google.com/use-cases/ai-data-analytics"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-primary mt-2"
    >
      Explore Tool
    </a>
  </div>

  {/* Right side (Image Section) */}
  <div className="col-md-6 text-center">
    <img
      src={google}
      alt="Google Analytics AI"
      style={{ maxWidth: "100%", height: "300px", objectFit: "contain" }}
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
                How to Use Google Analytics AI?
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
                      Set Up GA4 Property
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Create a Google Analytics 4 property and install the
                      tracking code on your website or app to begin collecting
                      user interaction data.
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
                      Leverage Insights & Predictions
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Use AI-powered insights, predictive audiences, and anomaly
                      detection to discover trends, user churn probabilities,
                      and revenue forecasts.
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
                      Build Reports & Integrate
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Customize dashboards, use Explorations to drill into data,
                      and integrate with BigQuery or Google Ads for deeper,
                      AI-enhanced analytics.
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

export default GoogleAnalyticsAI;
