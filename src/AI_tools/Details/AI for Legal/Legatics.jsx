import React, { useState } from "react";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

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
const Legatics = () => {
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
                icon: "📑",
                title:
                  "Legatics: AI-Powered Legal Transaction Management Platform",
                desc: "Legatics streamlines legal transactions with AI-driven tools to manage workflows, automate tasks, and ensure compliance across the deal lifecycle.",
              },
              {
                icon: "⚖",
                title: "Document Automation & Workflow",
                desc: "Legatics automates document generation and approvals, ensuring that legal teams can quickly handle transactions with minimal manual effort.",
              },
              {
                icon: "📜",
                title: "Risk Management",
                desc: "The platform helps identify risks in legal transactions, offering AI-assisted risk analysis and real-time alerts to mitigate potential issues.",
              },
              {
                icon: "🔍",
                title: "Transaction Tracking",
                desc: "Legatics provides real-time tracking and status updates for legal transactions, ensuring that all stakeholders are informed at every stage of the deal.",
              },
              {
                icon: "📋",
                title: "Compliance & Due Diligence",
                desc: "With AI-driven compliance checks, Legatics ensures that all necessary legal requirements and regulatory standards are met during transactions.",
              },
              {
                icon: "🔄",
                title: "Collaboration & Communication",
                desc: "The platform enables seamless collaboration between legal teams and stakeholders, with built-in communication tools and document sharing features.",
              },
              {
                icon: "📑",
                title: "Data Analytics & Insights",
                desc: "Legatics uses AI to analyze transaction data and provide actionable insights, helping teams make informed decisions throughout the deal process.",
              },
              {
                icon: "🌍",
                title: "Multilingual & Multi-jurisdictional Support",
                desc: "The platform supports multiple languages and jurisdictions, enabling global teams to collaborate effectively on international transactions.",
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
                  q: "What is Legatics?",
                  a: "Legatics is a legal transaction management platform that helps law firms and corporate legal teams streamline their document management, contract drafting, and collaboration processes using AI and automation tools.",
                },
                {
                  q: "What are the core features of Legatics?",
                  a: "Core features include legal transaction management, AI contract automation, document management, real-time collaboration, digital checklists, and more.",
                },
                {
                  q: "How does Legatics help law firms?",
                  a: "Legatics helps law firms by automating contract drafting, improving collaboration between teams, and ensuring compliance through real-time tracking and customizable templates.",
                },
                {
                  q: "Can Legatics be used for M&A transactions?",
                  a: "Yes, Legatics is specifically designed for M&A transactions and provides tools to manage due diligence, automate contract drafting, and streamline the closing process.",
                },
                {
                  q: "What are the benefits of using Legatics?",
                  a: "Benefits include improved efficiency, enhanced document management, better collaboration, automated contract reviews, reduced risk, and improved compliance.",
                },
                {
                  q: "Is Legatics secure?",
                  a: "Yes, Legatics provides robust security features, including data encryption, role-based access, audit logs, and GDPR compliance to ensure data protection.",
                },
                {
                  q: "Does Legatics integrate with other tools?",
                  a: "Yes, Legatics integrates with tools like DocuSign, iManage, CRM systems, and cloud storage platforms for seamless workflow management.",
                },
                {
                  q: "What types of businesses can use Legatics?",
                  a: "Legatics is suitable for law firms, corporate legal teams, in-house counsel, and other organizations that handle legal transactions and contracts.",
                },
                {
                  q: "How does Legatics handle contract automation?",
                  a: "Legatics uses AI contract automation to generate, review, and finalize contracts quickly, ensuring compliance and reducing manual work.",
                },
                {
                  q: "What kind of data can I import into Legatics?",
                  a: "You can import data from Excel, Word tables, JSON files, and other formats to create and manage legal documents more efficiently.",
                },
                {
                  q: "Can Legatics help with document management?",
                  a: "Yes, Legatics offers a comprehensive document management system that enables users to store, share, and organize legal documents securely.",
                },
                {
                  q: "Does Legatics provide templates?",
                  a: "Yes, Legatics offers a wide range of transaction templates, custom templates, and the ability to customize and share templates based on practice areas.",
                },
                {
                  q: "How does Legatics improve collaboration?",
                  a: "Legatics enables real-time collaboration, allowing legal teams to work together on documents, track changes, and communicate seamlessly within the platform.",
                },
                {
                  q: "What is the pricing for Legatics?",
                  a: "Pricing for Legatics is subscription-based and varies depending on the size of your team and the features required. For specific pricing, you should contact Legatics directly.",
                },
                {
                  q: "Does Legatics offer a free trial?",
                  a: "Yes, Legatics typically offers a free trial for users to explore its features and understand how it can benefit their legal operations.",
                },
                {
                  q: "How is data protected in Legatics?",
                  a: "Legatics employs advanced data encryption, user authentication, and role-based access control to ensure that your data remains secure at all times.",
                },
                {
                  q: "Is Legatics cloud-based?",
                  a: "Yes, Legatics is a cloud-based solution, which means users can access it from anywhere with an internet connection.",
                },
                {
                  q: "Can Legatics be accessed on mobile devices?",
                  a: "Yes, Legatics is available on both iOS and Android, making it easy to manage legal tasks from your smartphone or tablet.",
                },
                {
                  q: "Can I import legal text into Legatics?",
                  a: "Yes, Legatics provides a legal text importer that allows you to bring in complex legal documents for review and management.",
                },
                {
                  q: "Does Legatics support GDPR compliance?",
                  a: "Yes, Legatics is designed to help users comply with GDPR regulations, providing tools for data protection, access control, and audit tracking.",
                },
                {
                  q: "How does Legatics handle AI contract analysis?",
                  a: "Legatics uses AI contract analysis to identify risks, inconsistencies, and potential issues in legal contracts, making the review process faster and more accurate.",
                },
                {
                  q: "What are transaction templates in Legatics?",
                  a: "Transaction templates are pre-built document templates specifically designed for different legal transactions, such as M&A or real estate deals, allowing legal teams to quickly draft documents.",
                },
                {
                  q: "Can Legatics handle litigation support?",
                  a: "Yes, Legatics can be used for litigation support, providing tools for document management, collaboration, and tracking the progress of legal cases.",
                },
                {
                  q: "What integrations are available with Legatics?",
                  a: "Legatics integrates with a variety of tools including DocuSign, iManage, CRM, ERP systems, email, and cloud storage platforms.",
                },
                {
                  q: "Does Legatics offer real-time document editing?",
                  a: "Yes, Legatics enables real-time collaboration on documents, allowing multiple users to edit and make changes simultaneously.",
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
                    Why Use Legatics?
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
                      ✅ AI-powered contract automation for fast, accurate
                      contract drafting and analysis
                    </li>
                    <li className="mb-3">
                      ✅ Efficient legal transaction management across various
                      practice areas
                    </li>
                    <li className="mb-3">
                      ✅ Easy-to-use digital checklists and status dashboards
                      for tracking legal work
                    </li>
                    <li className="mb-3">
                      ✅ Real-time collaboration for legal teams, ensuring
                      everyone is on the same page
                    </li>
                    <li className="mb-3">
                      ✅ Enhanced data protection, audit logs, and compliance
                      tracking
                    </li>
                    <li className="mb-3">
                      ✅ Ideal for law firms, corporate legal teams, paralegals,
                      and compliance officers
                    </li>
                    <li className="mb-3">
                      ✅ Web-based platform with multi-device support for
                      seamless access
                    </li>
                    <li className="mb-3">
                      ✅ Cloud-based solution offering a scalable, flexible
                      platform
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Start Creating Now
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
                    AI Contract Review and analysis streamline complex legal
                    processes
                  </li>
                  <li className="mb-2">
                    Real-time collaboration allows teams to work seamlessly
                    together
                  </li>
                  <li className="mb-2">
                    Supports a wide range of legal use cases such as M&A
                    transactions, real estate, and litigation support
                  </li>
                  <li className="mb-2">
                    Custom templates and template libraries enhance efficiency
                    and consistency
                  </li>
                  <li className="mb-2">
                    Data encryption and compliance features ensure legal teams
                    meet regulatory requirements
                  </li>
                  <li className="mb-2">
                    User-friendly interface with cross-platform compatibility
                    offers flexibility
                  </li>
                  <li className="mb-2">
                    Reporting tools and data-driven insights help with strategic
                    decision-making
                  </li>
                  <li className="mb-2">
                    Automated contract drafting and signature management
                    simplify contract workflows
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
                    The platform might be complex for non-legal professionals or
                    teams unfamiliar with legal tech
                  </li>
                  <li className="mb-2">
                    Limited customization for highly specialized
                    enterprise-level legal teams
                  </li>
                  <li className="mb-2">
                    Some complex contracts might require manual review despite
                    AI assistance
                  </li>
                  <li className="mb-2">
                    No offline mode may limit accessibility in areas with
                    unreliable internet connections
                  </li>
                  <li className="mb-2">
                    Pricing could be high for small law firms or solo
                    practitioners
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
                    Legartis: A comprehensive AI contract analysis tool focused
                    on understanding legal documents and improving workflow.
                  </li>
                  <li className="mb-2">
                    Kira Systems: An AI-powered contract review software
                    offering customizable clause extraction.
                  </li>
                  <li className="mb-2">
                    Luminance: A legal AI platform with strong data analytics
                    and machine learning capabilities for document review.
                  </li>
                  <li className="mb-2">
                    ContractPodAi: Provides automated contract management
                    solutions for large corporate legal teams.
                  </li>
                  <li className="mb-2">
                    LawGeex: A contract review AI that leverages machine
                    learning for contract analysis and approval workflows.
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
              <p className="text-primary">Write better, faster</p>
              <h1>
                Legatics: AI-Powered Legal Transaction Management Platform
              </h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Legatics is a cutting-edge AI-powered legal transaction
                management tool designed to streamline the complexity of legal
                processes. The Legatics platform utilizes machine learning and
                natural language processing (NLP) to automate contract review,
                document management, and collaboration across various legal
                domains. It is particularly useful for corporate law firms,
                in-house counsel, and legal teams dealing with M&A transactions,
                real estate deals, and banking & finance matters.
              </p>

              <div className="mb-3">
                <span className="badge bg-primary me-2">Image Generation</span>
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
              <img src="" style={{ MaxWidth: "100%", height: "300px" }} />
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
                How to Use Legatics?
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
                      {" "}
                      Legal Transaction Management
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Legatics provides end-to-end automation for legal
                      processes, allowing legal teams to manage transactions
                      efficiently.
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
                      AI Contract Automation
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      AI tools within the platform automate tasks like contract
                      drafting, AI contract review, and AI contract analysis,
                      helping legal professionals save time and reduce errors.
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
                      Document Management:
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Provides insights on legal writing tone and sentence
                      structure to improve document quality. Store, organize,
                      and access legal documents through Legatics’ cloud-based
                      solution. It includes features like document tagging and
                      version control.
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
            <h4 className="mb-3">Ready to get started with Legatics?</h4>
            <p className="mb-4">
              Join thousands of professionals already boosting their
              productivity!
            </p>
            <div>
              <button className="btn btn-light me-3">Try Now for Free</button>
              <button className="btn btn-outline-light">Schedule a Demo</button>
            </div>
            <small className="d-block mt-2">
              No credit card required. 14-day free trial available.
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Legatics;
