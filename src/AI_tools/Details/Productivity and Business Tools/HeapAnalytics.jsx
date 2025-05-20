import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import google from "../../../../public/assets/Img/AI for Business/google.png";

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
const HeapAnalytics = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                Explore Data Smarter with Heap Analytics AI
              </p>
              <h3 className="">
                Automatic Event Capture & Intelligent Behavior Insights
              </h3>
            </div>
            {[
              {
                icon: "⚡",
                title: "Autocapture Everything:",
                desc: "Heap automatically records every user click, pageview, form submission, and interaction—no manual tagging needed.",
              },
              {
                icon: "🧠",
                title: "AI-Powered Insights:",
                desc: "Quickly detect friction points, drop-offs, and behavioral patterns using Heap’s built-in intelligence engine.",
              },
              {
                icon: "🔍",
                title: "User Journey Analysis:",
                desc: "Visualize complete paths users take through your product and identify bottlenecks or high-converting flows.",
              },
              {
                icon: "📉",
                title: "Retention & Funnel Insights:",
                desc: "Analyze retention trends, identify where users are churning, and optimize your funnel with AI-assisted recommendations.",
              },
              {
                icon: "🔌",
                title: "Rich Integrations:",
                desc: "Connect Heap to tools like Segment, Salesforce, and data warehouses to enrich and distribute AI-driven insights.",
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
                  q: "What is Heap Analytics AI?",
                  a: "Heap Analytics AI refers to the automatic data capture and AI-powered insights offered by Heap, enabling effortless event tracking, user journey analysis, and behavior-based insights without manual instrumentation.",
                },
                {
                  q: "How does AI work in Heap Analytics?",
                  a: "Heap uses AI to identify friction points, uncover hidden trends, detect drop-offs, and recommend areas for improving the user experience based on automatically captured user interactions.",
                },
                {
                  q: "Is Heap Analytics AI beginner-friendly?",
                  a: "Yes, Heap's AI insights and auto-capture features are designed to reduce the need for engineering input, making it accessible to non-technical users like marketers and product teams.",
                },
                {
                  q: "Is Heap Analytics AI free to use?",
                  a: "Heap offers a free plan with core features including AI insights, with additional capabilities and longer data retention available in paid tiers.",
                },
                {
                  q: "What platforms support Heap Analytics?",
                  a: "Heap supports websites, mobile apps, and web applications through SDKs and APIs for platforms like React, Angular, iOS, and Android.",
                },
                {
                  q: "What makes Heap Analytics AI unique?",
                  a: "Heap automatically captures every user interaction and uses AI to surface behavior insights without the need for pre-defined events or manual tagging.",
                },
                {
                  q: "Can Heap Analytics handle unstructured data?",
                  a: "Heap focuses on structured event and user data, but its integrations with tools like Segment allow you to enrich and route data flexibly.",
                },
                {
                  q: "Can Heap Analytics AI assist with eCommerce tracking?",
                  a: "Yes, Heap captures product views, cart activity, checkout flows, and user interactions, helping optimize the eCommerce funnel.",
                },
                {
                  q: "Can Heap detect anomalies?",
                  a: "Yes, Heap can highlight unexpected changes in user behavior, drop-offs in funnels, and shifts in engagement metrics.",
                },
                {
                  q: "What is predictive analytics in Heap?",
                  a: "Heap uses AI to highlight patterns and correlations, helping predict user churn, conversion blockers, and product engagement trends.",
                },
                {
                  q: "Can I share Heap Analytics reports?",
                  a: "Yes, Heap offers export options and team sharing, allowing you to collaborate across departments and stakeholders.",
                },
                {
                  q: "Does Heap Analytics support storytelling?",
                  a: "Heap's dashboards and visualizations allow users to create compelling narratives with behavioral data for stakeholders.",
                },
                {
                  q: "What industries benefit most from Heap AI?",
                  a: "Ecommerce, SaaS, EdTech, FinTech, and media companies benefit from Heap’s automated behavioral tracking and AI-powered recommendations.",
                },
                {
                  q: "Can Heap schedule report exports?",
                  a: "Heap currently allows manual exports and API access; scheduled exports are available via integrations or with advanced plans.",
                },
                {
                  q: "What file formats does Heap Analytics support?",
                  a: "Heap supports CSV exports and API data access. You can also integrate Heap data into BI tools or data warehouses.",
                },
                {
                  q: "Is Heap Analytics cloud-based?",
                  a: "Yes, Heap is a fully cloud-based analytics platform.",
                },
                {
                  q: "Can Heap Analytics work offline?",
                  a: "No, Heap requires an internet connection to send, store, and process captured event data.",
                },
                {
                  q: "Can I customize AI features in Heap?",
                  a: "You can define segments, virtual events, and user properties to enhance AI insights and funnel analysis.",
                },
                {
                  q: "Does Heap Analytics support white-labeling?",
                  a: "Heap does not offer white-label dashboards out of the box, but data can be exported to external white-labeled solutions.",
                },
                {
                  q: "Is customer support available for Heap?",
                  a: "Yes, Heap provides documentation, a knowledge base, community support, and dedicated support for premium customers.",
                },
                {
                  q: "Does Heap Analytics support collaboration?",
                  a: "Yes, Heap allows team collaboration with user roles, shared reports, and team-level access to insights and dashboards.",
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
                    Why Use Heap Analytics AI?
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
                      Heap automatically captures all user interactions—clicks,
                      swipes, form fills—without manual event tagging.
                    </li>
                    <li className="mb-3">
                      Delivers AI-powered insights that identify friction
                      points, drop-offs, and high-value behaviors in your user
                      flows.
                    </li>
                    <li className="mb-3">
                      Integrates with popular tools like Salesforce, Segment,
                      Amplitude, and more to unify customer data.
                    </li>
                    <li className="mb-3">
                      Helps product and growth teams make decisions faster with
                      automated journey analysis and behavior tracking.
                    </li>
                    <li className="mb-3">
                      Flexible pricing tiers with powerful features available
                      for startups and scalable plans for enterprises.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore Heap Analytics AI
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
                    Auto-captures user interactions without manual tracking
                    setup.
                  </li>
                  <li className="mb-2">
                    Rich session replay and user journey visualization tools.
                  </li>
                  <li className="mb-2">
                    Enables product and UX teams to make data-driven decisions
                    without engineering overhead.
                  </li>
                  <li className="mb-2">
                    Integrates easily with tools like Segment, Salesforce, and
                    Slack.
                  </li>
                  <li className="mb-2">
                    Strong behavioral analytics and funnel analysis
                    capabilities.
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
                    Free plan is limited in terms of data retention and user
                    quota.
                  </li>
                  <li className="mb-2">
                    Initial setup for advanced use cases may require technical
                    expertise.
                  </li>
                  <li className="mb-2">
                    Not ideal for high-scale enterprise analytics compared to
                    BigQuery integrations.
                  </li>
                  <li className="mb-2">
                    UI can feel cluttered with too many nested options for new
                    users.
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
                    Mixpanel – Focuses on advanced product analytics, funnel
                    tracking, and user retention analysis.
                  </li>
                  <li className="mb-2">
                    Amplitude – Great for behavioral analytics, cohort analysis,
                    and A/B test tracking at scale.
                  </li>
                  <li className="mb-2">
                    Pendo – Combines analytics with in-app guidance and user
                    feedback for product-led growth teams.
                  </li>
                  <li className="mb-2">
                    PostHog – Open-source product analytics with autocapture and
                    session recording, ideal for privacy-conscious teams.
                  </li>
                  <li className="mb-2">
                    Smartlook – Offers heatmaps, session replays, and user
                    journey analytics tailored for web and mobile apps.
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
       <div className="row d-flex align-items-center justify-content-between mb-5">
  {/* Left side (Text Section) */}
  <div
    style={{ flex: 1, paddingRight: "30px" }}
    className="col-12 col-md-6"
  >
    <p className="text-primary">Grow better, faster</p>
    <h1>Heap Analytics AI</h1>
    <div className="text-warning mb-2">⭐⭐⭐⭐⭐</div>
    <p className="mb-3">
      Heap Analytics is an advanced analytics platform designed to provide real-time insights into user behavior and activity across web and mobile apps. It automatically captures every user interaction, such as clicks, form submissions, page views, and more, without requiring manual tracking code. This makes it a powerful tool for marketers, product teams, and business analysts looking for a simple way to gather valuable data and insights. Heap's platform is known for its ease of use and robust integration with other business tools.
    </p>

    <p className="mb-4">
      Heap Analytics is a data analytics tool that helps businesses collect, analyze, and visualize user behavior data without relying on complex setup or manual event tracking. Unlike traditional analytics platforms that require predefined tracking tags, Heap automatically records every user interaction, which helps organizations better understand user behavior and improve decision-making processes. With Heap, users can track data points across their website or mobile app and gain insights into customer journeys, conversions, and business growth.
    </p>

    <div className="mb-3">
      <a
        href="https://www.heap.io/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary"
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
    className="col-12 col-md-6 mb-5"
  >
    <img
      src={google} // replace with your heap image variable
      alt="Heap Analytics AI"
      style={{ maxWidth: "100%", height: "300px" }}
      className="img-fluid"
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
                How to Use Heap Analytics AI?
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
                      Install Heap Snippet
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Add Heap's tracking code to your website or app to
                      automatically capture every user interaction and event.
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
                      Enable Autocapture & AI Suggestions
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Use Heap’s autocapture and AI-assisted event suggestions
                      to identify meaningful patterns in user behavior without
                      manual tagging.
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
                      Analyze & Optimize
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Use AI-powered funnels, retention charts, and behavioral
                      insights to discover bottlenecks, optimize user flows, and
                      improve product decisions.
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

export default HeapAnalytics;
