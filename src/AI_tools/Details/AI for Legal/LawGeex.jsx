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
const LawGeex = () => {
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
                icon: "📄",
                title: "AI-Powered Contract Review:",
                desc: "LawGeex uses AI to automate contract review, helping businesses save time by quickly identifying issues, risks, and areas that need negotiation or clarification in contracts.",
              },
              {
                icon: "📊",
                title: "Risk Analysis and Compliance: ",
                desc: "LawGeex AI analyzes contracts for compliance with applicable laws and regulations, providing businesses with risk assessments and ensuring all legal documents are aligned with industry standards.",
              },
              {
                icon: "🔍",
                title: "AI-Powered Contract Negotiation Insights: ",
                desc: "LawGeex helps businesses by providing insights into areas of contracts that could be negotiated, helping users understand what terms could be changed to their advantage.",
              },
              {
                icon: "📑",
                title: "Document Automation: ",
                desc: "LawGeex automates the creation of standard legal documents, saving businesses time and effort while reducing errors by generating legally compliant contracts based on user inputs.",
              },
              {
                icon: "⚖",
                title: "Streamlined Workflow Integration: ",
                desc: "LawGeex integrates with existing workflows and contract management systems, allowing for a smooth process of reviewing and managing contracts within business operations.",
              },
              {
                icon: "💡",
                title: "Legal Insights and Recommendations: ",
                desc: "LawGeex provides actionable legal insights and recommendations during the contract review process, allowing businesses to make more informed decisions quickly.",
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
                  q: "What is LawGeex?",
                  a: "LawGeex is an AI-powered platform that automates contract review, streamlining the process by analyzing contracts for compliance, risk, and other critical factors.",
                },
                {
                  q: "How does LawGeex work?",
                  a: "It uses machine learning algorithms to review contracts, compare them with predefined legal standards, and flag deviations, making contract review faster and more accurate.",
                },
                {
                  q: "Can LawGeex handle all types of contracts?",
                  a: "Yes, LawGeex can review various contracts, including NDAs, sales contracts, employment agreements, and more.",
                },
                {
                  q: "Is LawGeex suitable for small businesses?",
                  a: "Absolutely. LawGeex is scalable and helps small businesses by automating contract reviews, ensuring compliance, and saving time and money.",
                },
                {
                  q: "How accurate is LawGeex's AI?",
                  a: "LawGeex is highly accurate. Its AI continuously learns from a growing database of legal documents to improve its review capabilities.",
                },
                {
                  q: "Can LawGeex be integrated with other legal tools?",
                  a: "Yes, LawGeex integrates with many contract management systems and legal tools, making it easy to incorporate into existing workflows.",
                },
                {
                  q: "What industries use LawGeex?",
                  a: "LawGeex is used across industries such as technology, healthcare, finance, retail, and legal services.",
                },
                {
                  q: "Can LawGeex handle complex legal documents?",
                  a: "Yes, LawGeex is designed to handle both simple and complex legal documents, but more complex documents may still require human oversight.",
                },
                {
                  q: "What are the benefits of using LawGeex?",
                  a: "Benefits include increased efficiency, reduced legal costs, better contract compliance, and faster contract processing.",
                },
                {
                  q: "How does LawGeex help with contract compliance?",
                  a: "LawGeex automatically checks contracts for compliance with relevant laws and regulations, reducing the risk of non-compliance.",
                },
                {
                  q: "What types of contracts can LawGeex review?",
                  a: "LawGeex can review a variety of contracts, including sales agreements, NDAs, employee contracts, service agreements, and more.",
                },
                {
                  q: "Does LawGeex review the entire contract?",
                  a: "Yes, it reviews the entire contract, ensuring that all terms and clauses meet compliance standards and identifying any potential issues.",
                },
                {
                  q: "Can I try LawGeex before committing?",
                  a: "Yes, LawGeex offers a demo version so you can explore its features and capabilities before making a purchase.",
                },
                {
                  q: "Is LawGeex secure?",
                  a: "Yes, LawGeex employs industry-standard encryption and security protocols to protect sensitive contract data.",
                },
                {
                  q: "How fast is the contract review process with LawGeex?",
                  a: "LawGeex significantly speeds up the contract review process, with AI handling most of the work in minutes compared to traditional manual reviews.",
                },
                {
                  q: "Can LawGeex help with contract redlining?",
                  a: "Yes, LawGeex automatically highlights and suggests changes to contract clauses, simplifying the redlining process.",
                },
                {
                  q: "Does LawGeex offer customer support?",
                  a: "Yes, LawGeex provides excellent customer support, including access to a team of legal and technical experts.",
                },
                {
                  q: "How much does LawGeex cost?",
                  a: "Pricing for LawGeex is customized based on the size of the business and the number of contracts being reviewed. You can contact the sales team for a quote.",
                },
                {
                  q: "What are the pricing plans for LawGeex?",
                  a: "LawGeex offers various pricing plans depending on the needs of your business, including plans for startups, SMBs, and large enterprises.",
                },
                {
                  q: "Does LawGeex have a mobile app?",
                  a: "Currently, LawGeex is a web-based platform, and there is no mobile app available.",
                },
                {
                  q: "What types of integrations does LawGeex support?",
                  a: "LawGeex integrates with CRM systems, contract management platforms, and other legal tools to streamline the workflow.",
                },
                {
                  q: "What is the ROI of using LawGeex?",
                  a: "LawGeex typically offers a positive return on investment by reducing contract review times, legal costs, and increasing overall efficiency.",
                },
                {
                  q: "Is LawGeex easy to use?",
                  a: "Yes, LawGeex has an intuitive interface that makes it easy for legal professionals to use, even if they are not tech-savvy.",
                },
                {
                  q: "Can LawGeex help with contract negotiation?",
                  a: "While LawGeex focuses on contract review, it also highlights areas that might require negotiation or modification.",
                },
                {
                  q: "Does LawGeex support multi-language contracts?",
                  a: "Yes, LawGeex supports multiple languages, making it suitable for international businesses.",
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
                    Why Use LawGeex AI?
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
                      Speed & Efficiency: Traditional contract review processes
                      can take a significant amount of time, especially for
                      large enterprises. LawGeex dramatically accelerates this
                      process by automating mundane tasks, enabling teams to
                      focus on higher-level work.
                    </li>
                    <li className="mb-3">
                      Accuracy: LawGeex leverages AI to review contracts with
                      high precision, reducing the likelihood of oversight and
                      human error. It ensures that all contracts meet compliance
                      standards and are free from critical mistakes.
                    </li>
                    <li className="mb-3">
                      Cost Savings: By automating routine legal work, businesses
                      can reduce their reliance on external legal counsel and
                      the associated costs. LawGeex provides a cost-effective
                      solution for legal teams, especially for SMBs and
                      enterprises looking to optimize their budget.
                    </li>
                    <li className="mb-3">
                      Improved Risk Management: AI's ability to identify
                      potential risks in contracts ensures that businesses are
                      not exposed to unnecessary liabilities. LawGeex highlights
                      clauses that could lead to financial, legal, or
                      reputational risks, allowing teams to take corrective
                      action early.
                    </li>
                    <li className="mb-3">
                      Scalability: Whether you're a small business or a large
                      enterprise, LawGeex scales to meet the needs of your
                      organization. It is flexible enough to handle increasing
                      volumes of contracts as your business grows.
                    </li>
                    <li className="mb-3">
                      Better Compliance: Ensuring compliance with constantly
                      changing laws and regulations can be challenging. LawGeex
                      helps businesses stay compliant with the latest legal
                      requirements by flagging non-compliant terms and ensuring
                      that contracts are in line with relevant legislation.
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
                    Time Efficiency: Automates time-consuming tasks like
                    contract review and redlining.
                  </li>
                  <li className="mb-2">
                    High Accuracy: Uses AI to ensure precise contract analysis,
                    minimizing errors.
                  </li>
                  <li className="mb-2">
                    Cost Savings: Reduces the need for manual intervention and
                    external legal assistance, making it a budget-friendly
                    option.
                  </li>
                  <li className="mb-2">
                    Improved Compliance: Ensures contracts meet legal standards
                    and industry regulations.
                  </li>
                  <li className="mb-2">
                    User-Friendly Interface: Easy-to-use platform that requires
                    minimal training for teams to integrate.
                  </li>
                  <li className="mb-2">
                    Integration with Existing Systems: Seamlessly works with
                    existing tools and contract management systems.
                  </li>
                  <li className="mb-2">
                    Risk Management: Identifies potential legal risks in
                    contracts, preventing potential liabilities.
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
                    Complex Contracts May Need Human Review: While LawGeex
                    handles standard contracts efficiently, more complex or
                    highly specialized contracts may still require human input
                    for detailed analysis.
                  </li>
                  <li className="mb-2">
                    Initial Setup Time: Depending on the scale, it might take
                    some time to set up and train the system to align with your
                    specific contract requirements.
                  </li>
                  <li className="mb-2">
                    Limited Advanced Features: While LawGeex is excellent for
                    contract review, it may not offer as many features for more
                    complex legal tasks compared to other legal AI platforms.
                  </li>
                  <li className="mb-2">
                    Dependence on Data Quality: Like all AI systems, the
                    performance of LawGeex depends on the quality of the data it
                    is trained on. Poor-quality documents could lead to
                    inaccurate results.
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
                    Kira Systems: A comprehensive AI tool for contract analysis,
                    offering advanced capabilities in due diligence, contract
                    review, and compliance.
                  </li>
                  <li className="mb-2">
                    Luminance: An AI-powered legal tech solution focused on
                    document review, due diligence, and compliance.
                  </li>
                  <li className="mb-2">
                    ThoughtRiver: An AI-driven contract review platform that
                    helps legal teams identify and mitigate risks early.
                  </li>
                  <li className="mb-2">
                    LinkSquares: An AI-based platform for contract lifecycle
                    management that offers automated contract analysis and
                    reporting.
                  </li>
                  <li className="mb-2">
                    Evisort: Another popular AI tool for contract management,
                    focusing on automated document review and compliance
                    tracking.
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
        <a
          href="/Aitools"
          className="d-inline-block text-white text-decoration-none ml-3 py-1"
        >
          <i className="bi bi-arrow-left me-2"></i>Back to Directory{" "}
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
              <h1>LawGeex: AI-Powered Contract Review Tool</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                LawGeex is a cutting-edge AI-powered contract review platform
                that utilizes advanced machine learning algorithms to automate
                and streamline the contract management process. It is designed
                to assist legal professionals and businesses by providing
                faster, more accurate contract reviews, reducing human error,
                and ensuring compliance. By automating routine contract review
                tasks, LawGeex enhances the productivity of legal teams, helping
                them focus on more complex tasks and strategic decisions. The
                platform is widely used by enterprises, law firms, in-house
                legal teams, and SMBs to manage their contract review processes
                efficiently. LawGeex handles contract analysis, redlining, and
                ensures compliance with regulations while identifying risks. Its
                easy integration into existing legal workflows makes it a
                practical choice for many organizations.
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
                How to Use LawGeex Ai?
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
                      Contract Review Automation
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      LawGeex automates the review process by analyzing
                      contracts against a library of legal rules and guidelines.
                      It flags clauses that deviate from the standard, making it
                      easier for legal teams to identify and address issues.
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
                      AI-Powered Contract Analysis:
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      LawGeex employs artificial intelligence to review
                      contracts, analyzing terms, clauses, and language for
                      accuracy and compliance. It compares contracts against
                      templates and legal databases to identify missing or
                      non-compliant clauses.
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
                      Contract Redlining & Risk Assessment
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      The platform redlines contracts by highlighting issues
                      such as missing clauses, incorrect language, or potential
                      risks. It automatically suggests revisions, speeding up
                      the approval process and mitigating potential legal risks.
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
            <h4 className="mb-3">Ready to get started with LawGeex Ai?</h4>
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

export default LawGeex;
