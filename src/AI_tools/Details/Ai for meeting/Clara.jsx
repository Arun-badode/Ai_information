import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";


import clara from "../../../../public/assets/Img/AI for Meeting/5.png";
import scn1 from "../../../../public/assets/Img/AI for Meeting/claraS1.png";
import scn2 from "../../../../public/assets/Img/AI for Meeting/ClaraS2.png";

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
const Clara = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
            return (
                  <div className="row g-4">
                    <div className="text-center">
                      <p className="text-primary">Create Content That Converts in Minutes</p>
                      <h3 className="">AI-Powered Simplicity with Human-Like Intelligence</h3>
                    </div>
                    {[
                      {
                        icon: "🧠",
                        title: "Smart Content Generation:",
                        desc: "Generate blog posts, product descriptions, and emails with human-like clarity and tone.",
                      },
                      {
                        icon: "🎯",
                        title: "Brand Voice Customization:",
                        desc: "Train Clara AI to match your brand’s tone, voice, and content style effortlessly.",
                      },
                      {
                        icon: "💬",
                        title: "Conversational Copywriting:",
                        desc: "Engage your audience with interactive, dialogue-style writing powered by contextual memory.",
                      },
                      {
                        icon: "📈",
                        title: "SEO Optimization Built-In:",
                        desc: "Get keyword suggestions and metadata optimization for better search engine visibility.",
                      },
                      {
                        icon: "🌐",
                        title: "Multi-Language Support:",
                        desc: "Create content in multiple languages with consistent tone and intent.",
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
                src={scn1}
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={scn2}
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
              { [
  {
    q: "What is Clara AI?",
    a: "Clara AI is an intelligent automation platform designed to streamline workflows and improve productivity through advanced AI-powered tools.",
  },
  {
    q: "How does Clara AI work?",
    a: "Clara AI integrates with your existing systems to automate repetitive tasks using machine learning and natural language processing.",
  },
  {
    q: "Is Clara AI easy to use for beginners?",
    a: "Yes, Clara AI offers an intuitive interface and pre-built templates to help users get started quickly without needing technical skills.",
  },
  {
    q: "Is Clara AI free to use?",
    a: "Clara AI provides a free trial with limited features, while paid plans unlock full functionality and premium support.",
  },
  {
    q: "What platforms is Clara AI available on?",
    a: "Clara AI is accessible through web browsers and mobile apps on Android and iOS.",
  },
  {
    q: "What makes Clara AI unique?",
    a: "Its combination of deep automation capabilities with easy customization sets Clara AI apart from other automation platforms.",
  },
  {
    q: "Who should use Clara AI?",
    a: "Businesses of all sizes, entrepreneurs, and teams seeking to optimize workflows and reduce manual work.",
  },
  {
    q: "Can Clara AI be used for business process automation?",
    a: "Yes, Clara AI excels at automating processes such as scheduling, data entry, customer communications, and reporting.",
  },
  {
    q: "What kind of templates does Clara AI offer?",
    a: "Clara AI offers templates for marketing automation, customer support, sales workflows, and project management.",
  },
  {
    q: "How is Clara AI different from other automation tools?",
    a: "Clara AI combines AI intelligence with user-friendly customization options, making it powerful yet accessible.",
  },
  {
    q: "Can I use Clara AI for team collaboration?",
    a: "Yes, Clara AI includes features that enable team collaboration and task assignments.",
  },
  {
    q: "Is there a Clara AI mobile app?",
    a: "Yes, Clara AI is available on both Android and iOS devices.",
  },
  {
    q: "Can I integrate Clara AI with other software?",
    a: "Clara AI supports integrations with many popular business tools via API and third-party connectors.",
  },
  {
    q: "Does Clara AI provide analytics?",
    a: "Yes, Clara AI offers dashboards and reports to monitor workflow performance and ROI.",
  },
  {
    q: "Does Clara AI support multiple languages?",
    a: "Clara AI supports multiple languages to cater to global users.",
  },
  {
    q: "Can I customize Clara AI workflows?",
    a: "Absolutely, you can tailor workflows and automation rules to fit your business needs.",
  },
  {
    q: "How secure is Clara AI?",
    a: "Clara AI employs robust security protocols, including data encryption and compliance with industry standards.",
  },
  {
    q: "Can Clara AI learn from my data?",
    a: "Yes, Clara AI uses machine learning to improve automation accuracy over time based on your inputs and feedback.",
  },
  {
    q: "Can Clara AI handle complex tasks?",
    a: "Clara AI is designed to handle both simple and complex automation workflows effectively.",
  },
  {
    q: "What kind of support does Clara AI offer?",
    a: "Clara AI offers customer support via email, chat, and detailed documentation.",
  },
  {
    q: "Can I schedule tasks with Clara AI?",
    a: "Yes, Clara AI allows scheduling and triggering automation at specific times or events.",
  },
  {
    q: "Does Clara AI offer a free trial?",
    a: "Yes, Clara AI provides a free trial so you can test its features before subscribing.",
  },
  {
    q: "Is Clara AI suitable for small businesses?",
    a: "Yes, Clara AI scales to businesses of all sizes including startups and small enterprises.",
  },
  {
    q: "Can Clara AI automate customer support?",
    a: "Yes, Clara AI can automate customer queries and support ticket management.",
  },
  {
    q: "Does Clara AI require coding skills?",
    a: "No, Clara AI is designed for users with no coding experience through visual workflow builders.",
  },
  {
    q: "Can Clara AI integrate with CRM systems?",
    a: "Yes, it can connect with popular CRM platforms to automate sales and customer management.",
  },
  {
    q: "How often is Clara AI updated?",
    a: "Clara AI receives regular updates to enhance features and security.",
  },
  {
    q: "Can I export data from Clara AI?",
    a: "Yes, data and reports can be exported in common formats for offline use.",
  },
  {
    q: "Does Clara AI support AI chatbots?",
    a: "Clara AI includes chatbot automation capabilities for customer interaction.",
  },
  {
    q: "Can I use Clara AI for marketing automation?",
    a: "Yes, Clara AI automates email marketing, social media posting, and lead nurturing.",
  },
  {
    q: "Does Clara AI have workflow templates?",
    a: "It comes with pre-built templates to quickly launch automations.",
  },
  {
    q: "Is Clara AI GDPR compliant?",
    a: "Yes, Clara AI complies with GDPR and other data privacy laws.",
  },
  {
    q: "Can I integrate Clara AI with Slack or Teams?",
    a: "Yes, Clara AI supports integration with Slack, Microsoft Teams, and other collaboration tools.",
  },
  {
    q: "Does Clara AI offer API access?",
    a: "API access is available for advanced integration and customization.",
  },
  {
    q: "Can Clara AI be used in education?",
    a: "Yes, it helps automate administrative and communication tasks in educational institutions.",
  },
  {
    q: "Is Clara AI cloud-based?",
    a: "Yes, Clara AI is a cloud-based platform accessible anywhere.",
  },
  {
    q: "What industries benefit from Clara AI?",
    a: "Industries such as retail, healthcare, finance, and more benefit from its automation.",
  },
  {
    q: "Does Clara AI offer user role management?",
    a: "Yes, it supports roles and permissions for team collaboration.",
  },
  {
    q: "Can Clara AI process natural language?",
    a: "Yes, Clara AI uses NLP to understand and respond to user inputs.",
  },
  {
    q: "How do I get started with Clara AI?",
    a: "Sign up on the Clara AI website and follow the onboarding guide to set up your first workflows.",
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
                  Why Use Clara AI?</h3>

<ul className="text-start clara-benefits-list">
  <li className="mb-3">
    Clara AI automates repetitive business tasks, saving time and reducing errors.
  </li>
  <li className="mb-3">
    Perfect for businesses and teams looking to optimize workflows and boost productivity.
  </li>
  <li className="mb-3">
    Provides intelligent insights and actionable analytics to improve decision-making.
  </li>
  <li className="mb-3">
    Offers easy integration with popular tools and platforms through APIs.
  </li>
  <li className="mb-3">
    Designed for users of all technical levels with an intuitive, cloud-based interface.
  </li>
</ul>

<div className="text-center mt-4">
  <button type="button" className="btn btn-primary btn-sm">
    Get Started with Clara AI
  </button>
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
  className="col-lg-5 col-md-6 col-sm-12 pros-cons-box"
>
  <h5 className="text-success text-start mb-4">✅ Pros</h5>
  <ul className="ps-3" style={{ listStyleType: "disc" }}>
    <li className="mb-2">
      Automates repetitive business workflows with intelligent AI.
    </li>
    <li className="mb-2">
      Supports integration with popular business and communication platforms.
    </li>
    <li className="mb-2">
      Offers customizable automation templates for various industries.
    </li>
    <li className="mb-2">
      Easy-to-use interface suitable for users with no coding skills.
    </li>
    <li className="mb-2">
      Continuously learns and improves based on user feedback.
    </li>
  </ul>
</div>

{/* Cons Column */}
<div
  className="col-lg-5 col-md-6 col-sm-12 pros-cons-box"
>
  <h5 className="text-warning text-start mb-4">⚠ Cons</h5>
  <ul className="ps-3" style={{ listStyleType: "disc" }}>
    <li className="mb-2">
      Complex automation setup may require a learning curve for beginners.
    </li>
    <li className="mb-2">
      Premium features require subscription plans, which may be costly for small teams.
    </li>
    <li className="mb-2">
      Some integrations need manual configuration and API knowledge.
    </li>
    <li className="mb-2">
      Fully offline use is not supported as it is cloud-based.
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
    Zapier – Automation platform that connects apps and services to automate workflows.
  </li>
  <li className="mb-2">
    UiPath – Robotic Process Automation (RPA) tool for automating repetitive business processes.
  </li>
  <li className="mb-2">
    Microsoft Power Automate – Integrates Microsoft apps with custom automation flows.
  </li>
  <li className="mb-2">
    Integromat (Make) – Visual platform to build complex automated workflows without coding.
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
              style={{ paddingRight: "30px" }}
              className="col-md-6  col-12 order-2 order-md-1 "
            >
              <p className="text-primary">Write better, faster</p>
              <h1>Clara AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
              Clara AI is an AI-powered scheduling assistant designed to automate and streamline the process of meeting scheduling, task management, and calendar optimization. By using Clara AI, businesses and individuals can significantly reduce the time spent on administrative tasks like managing appointments, coordinating meetings, and balancing their calendars. Clara AI functions as a virtual assistant that handles scheduling, optimizes work time, and integrates with popular calendar and communication tools like Google Calendar, Outlook, and Slack, making it a great productivity tool for teams, professionals, and business owners.

              </p>

              <div className="mb-3">
                <a
                  href="https://getclara.io/"
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
                textAlign: "center",
                Width: "100%",
                height: "250px",
              }}
              className="col-md-6 col-12 order-md-2 order-1 text-center mb-3 mb-md-0  "
            >
              <img
                src={clara}
                style={{
                  Width: "100%",
                  height: "auto",
                  maxHeight: "300px",
                  objectFit: "contain",
                }}
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
                How to Use Clara AI?
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
        Choose Content Type
      </h5>
      <p style={{ color: "#fff", margin: 0 }}>
        Select whether you want to generate a blog, product description, ad copy, or email.
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
        Customize Inputs
      </h5>
      <p style={{ color: "#fff", margin: 0 }}>
        Enter your topic, keywords, tone, and target audience to personalize Clara’s output.
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
        Generate & Refine
      </h5>
      <p style={{ color: "#fff", margin: 0 }}>
        Let Clara AI craft your content instantly, then review, edit, and export as needed.
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

export default Clara;
