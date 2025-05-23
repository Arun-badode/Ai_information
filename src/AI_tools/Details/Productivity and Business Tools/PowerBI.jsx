import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import magisto from "../../../Images/MagistoAI.png";
import power1 from "../../../../public/assets/Img/AI for Business/power1.png";
import power2 from "../../../../public/assets/Img/AI for Business/power2.png";
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
const PowerBI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">Create Stunning Videos in Minutes</p>
              <h3 className=""> Drag-and-Drop Simplicity & Custom Branding</h3>
            </div>
            {[
              {
                icon: "🎞",
                title: "Video Templates:",
                desc: "Choose from a wide range of customizable video templates for any occasion.",
              },
              {
                icon: "🖼",
                title: "Drag-and-Drop Builder:",
                desc: "Easily add photos, video clips, text, and music with intuitive controls.",
              },
              {
                icon: "🎵",
                title: "Licensed Music Library:",
                desc: "Access a built-in collection of royalty-free music tracks.",
              },
              {
                icon: "✍",
                title: "Text Customization:",
                desc: "Add and style text overlays to enhance your video message.",
              },
              {
                icon: "📱",
                title: "Social Media Optimization:",
                desc: "Create videos tailored for platforms like Instagram, Facebook, and YouTube.",
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
                src={power1}
                alt="powerBI"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={power2}
                alt="Power AI"
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
                  q: "What is Power BI AI?",
                  a: "Power BI AI refers to the artificial intelligence capabilities built into Microsoft Power BI, enabling users to derive insights from data using features like natural language queries, predictive modeling, and smart visualizations.",
                },
                {
                  q: "How does AI work in Power BI?",
                  a: "Power BI uses machine learning and Microsoft's AI engine to analyze data, detect patterns, and suggest insights using tools like Key Influencers and the Q&A visual.",
                },
                {
                  q: "Is Power BI AI beginner-friendly?",
                  a: "Yes, Power BI AI includes intuitive tools like natural language queries and automated visualizations that make it easy for beginners to start analyzing data.",
                },
                {
                  q: "Is Power BI AI free to use?",
                  a: "Power BI offers a free version with basic AI capabilities. Premium and Pro plans unlock advanced AI features like AutoML and cognitive services integration.",
                },
                {
                  q: "What platforms is Power BI available on?",
                  a: "Power BI is available as a desktop app (Power BI Desktop), a cloud service (Power BI Service), and mobile apps for iOS and Android.",
                },
                {
                  q: "What makes Power BI AI unique?",
                  a: "Power BI combines interactive visualizations, enterprise-grade analytics, and AI-driven insights in one powerful platform integrated with Microsoft 365.",
                },
                {
                  q: "Who should use Power BI AI?",
                  a: "Business analysts, data scientists, executives, marketers, and decision-makers across industries can benefit from Power BI AI's capabilities.",
                },
                {
                  q: "Can Power BI AI be used for business forecasting?",
                  a: "Yes, Power BI supports forecasting features and integrates with Azure Machine Learning and R/Python scripts for predictive analytics.",
                },
                {
                  q: "Does Power BI AI support real-time analytics?",
                  a: "Yes, Power BI can connect to real-time data sources and display live dashboards with streaming data.",
                },
                {
                  q: "Can I ask questions in natural language in Power BI?",
                  a: "Yes, the Q&A visual allows you to ask questions using natural language and get dynamic visual responses.",
                },
                {
                  q: "What AI visuals are available in Power BI?",
                  a: "Key Influencers, Decomposition Tree, Smart Narrative, and Anomaly Detection are popular AI visuals in Power BI.",
                },
                {
                  q: "Can Power BI AI be used on mobile devices?",
                  a: "Yes, Power BI offers mobile apps that support viewing and interacting with AI-powered dashboards and reports.",
                },
                {
                  q: "Can Power BI create automated insights?",
                  a: "Yes, Power BI AI can automatically generate narratives and highlight patterns, correlations, and key metrics.",
                },
                {
                  q: "Does Power BI AI integrate with other Microsoft tools?",
                  a: "Yes, Power BI integrates seamlessly with Excel, Teams, Azure, SharePoint, and other Microsoft 365 tools.",
                },
                {
                  q: "Is coding required to use Power BI AI?",
                  a: "No coding is needed for basic AI features. However, advanced users can integrate Python, R, or Azure ML for deeper analysis.",
                },
                {
                  q: "Can Power BI AI analyze unstructured data?",
                  a: "Yes, by integrating Azure Cognitive Services, Power BI can analyze text, images, and even sentiment in unstructured data.",
                },
                {
                  q: "Can Power BI AI be used for sales analysis?",
                  a: "Yes, Power BI is widely used for tracking sales performance, forecasting revenue, and analyzing customer behavior.",
                },
                {
                  q: "Can Power BI AI detect data anomalies?",
                  a: "Yes, the Anomaly Detection feature helps identify outliers and unexpected changes in your data trends.",
                },
                {
                  q: "What is Power BI Copilot?",
                  a: "Copilot is an AI assistant in Power BI that helps generate reports, create visuals, and summarize insights using natural language prompts.",
                },
                {
                  q: "Can I share AI insights in Power BI?",
                  a: "Yes, insights and reports can be shared via dashboards, workspaces, or exported in formats like PDF and Excel.",
                },
                {
                  q: "Does Power BI AI offer data storytelling?",
                  a: "Yes, Smart Narrative and custom tooltips help tell data stories by automatically generating explanatory text.",
                },
                {
                  q: "What industries benefit most from Power BI AI?",
                  a: "Healthcare, finance, retail, logistics, and manufacturing all benefit from AI-powered data analysis in Power BI.",
                },
                {
                  q: "Can I schedule reports using Power BI AI?",
                  a: "Yes, Power BI allows scheduled report refreshes and automated delivery of dashboards and insights.",
                },
                {
                  q: "What file types does Power BI support?",
                  a: "Power BI supports Excel, CSV, JSON, XML, SQL databases, SharePoint, and many more data sources.",
                },
                {
                  q: "Is Power BI AI cloud-based?",
                  a: "Yes, Power BI Service is a cloud platform, but Power BI Desktop is available for local installations.",
                },
                {
                  q: "Can Power BI AI be used offline?",
                  a: "Power BI Desktop works offline for report creation, but cloud features and AI visuals require an internet connection.",
                },
                {
                  q: "Can I customize AI visuals in Power BI?",
                  a: "Yes, you can fine-tune parameters, filter inputs, and modify display options of AI visuals.",
                },
                {
                  q: "Does Power BI offer white-labeling?",
                  a: "Power BI Embedded allows white-labeling and embedding dashboards into your own applications.",
                },
                {
                  q: "Does Power BI offer customer support?",
                  a: "Yes, Microsoft offers detailed documentation, community forums, and professional support plans.",
                },
                {
                  q: "Does Power BI support team collaboration?",
                  a: "Yes, users can collaborate in shared workspaces and publish reports to Microsoft Teams and SharePoint.",
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
                    Why Use Power BI AI?
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
                      Power BI AI helps you uncover hidden insights using
                      machine learning and smart visualizations.
                    </li>
                    <li className="mb-3">
                      It’s ideal for businesses, analysts, and decision-makers
                      needing interactive, real-time dashboards.
                    </li>
                    <li className="mb-3">
                      Features like Key Influencers, Decomposition Tree, and
                      Smart Narrative make analytics more accessible.
                    </li>
                    <li className="mb-3">
                      Enables natural language queries, making data analysis
                      easier for non-technical users.
                    </li>
                    <li className="mb-3">
                      Power BI AI is a cloud-connected, enterprise-grade
                      platform with seamless integration into the Microsoft
                      ecosystem.
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
                    AI-powered visuals like Key Influencers and Smart Narrative
                    simplify complex data analysis.
                  </li>
                  <li className="mb-2">
                    Natural language queries enable data access for
                    non-technical users.
                  </li>
                  <li className="mb-2">
                    Seamless integration with Microsoft 365, Azure, and Excel
                    enhances productivity.
                  </li>
                  <li className="mb-2">
                    Supports real-time data streams and interactive dashboards.
                  </li>
                  <li className="mb-2">
                    Scalable from small businesses to enterprise-level
                    deployments.
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
                    Advanced AI features like AutoML require Power BI Premium.
                  </li>
                  <li className="mb-2">
                    Some users face a learning curve with DAX and data modeling.
                  </li>
                  <li className="mb-2">
                    Custom visuals and Python/R integration may need additional
                    configuration.
                  </li>
                  <li className="mb-2">
                    Performance can degrade with very large datasets if not
                    optimized.
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
                    Tableau – Renowned for its rich visual analytics, Tableau
                    offers intuitive dashboards and deep drill-down
                    capabilities.
                  </li>
                  <li className="mb-2">
                    Qlik Sense – A strong competitor that uses associative data
                    modeling and powerful AI to uncover hidden insights.
                  </li>
                  <li className="mb-2">
                    Looker – Google Cloud's BI tool focused on embedded
                    analytics and modern data modeling.
                  </li>
                  <li className="mb-2">
                    Sisense – Known for its ability to unify complex data
                    sources and leverage AI for advanced analytics and
                    predictive insights.
                  </li>
                  <li className="mb-2">
                    Zoho Analytics – Offers AI-powered data preparation,
                    visualization, and forecasting at an affordable price point.
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
    <p className="text-primary">Write better, faster</p>
    <h1>Power AI</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      Power BI is a powerful business analytics tool from Microsoft
      that helps you visualize your data and share insights across
      your organization. Power BI AI leverages artificial intelligence
      (AI) machine learning capabilities to enhance the tool's
      functionality, enabling businesses to make smarter, data-driven
      decisions. It integrates AI features and machine learning models
      directly into the data analysis and visualization process,
      making it easier to extract valuable insights from large
      datasets.
    </p>
    <p>
      Power BI AI brings artificial intelligence into the world of
      data analytics. With the integration of advanced machine
      learning, AI-driven predictions, and automated data processing,
      Power BI transforms how businesses analyze and visualize their
      data. Key AI features in Power BI include predictive analytics,
      natural language processing, data automation, and machine
      learning models.
    </p>

    <div className="mb-3">
      <a
        href="https://app.powerbi.com/singleSignOn?ru=https%3A%2F%2Fapp.powerbi.com%2F%3FnoSignUpCheck%3D1"
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
      src={magisto}
      alt="Power BI AI Interface"
      style={{ maxWidth: "100%", height: "250px", objectFit: "contain" }}
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
                How to Use Power BI AI?
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
                      Connect Your Data
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Start by importing data from Excel, databases, cloud
                      sources, or web APIs into Power BI.
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
                      Use AI Visuals
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Leverage Power BI’s AI visuals like Key Influencers and
                      Decomposition Tree to uncover insights automatically.
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
                      Share and Collaborate
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Publish your reports to Power BI Service and share
                      insights with your team through dashboards and apps.
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

export default PowerBI;
