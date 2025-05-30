import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import microsoft from "../../../../public/assets/Img/AI for Business/microsoft.jpeg";
import microsoft1 from "../../../../public/assets/Img/AI for Business/microsoft1.png";

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

const MicrosoftCopilot = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [openIndex, setOpenIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            {[
              {
                title: "Microsoft Copilot – AI",
                desc: "Microsoft Copilot is an AI assistant integrated into Microsoft 365 applications, enhancing productivity and creativity.",
              },
              {
                title:"Microsoft Copilot – AI",
                desc: "Microsoft Copilot is an AI assistant integrated into Microsoft 365 applications, enhancing productivity and creativity.",
              },
              {
                title: "Microsoft Copilot – AI",
                desc: "Microsoft Copilot is an AI assistant integrated into Microsoft 365 applications, enhancing productivity and creativity.",
              },
              {
                title: "Microsoft Copilot – AI",
                desc: "Microsoft Copilot is an AI assistant integrated into Microsoft 365 applications, enhancing productivity and creativity.",
              },
              {
                title:"Microsoft Copilot – AI",
                desc: "Microsoft Copilot is an AI assistant integrated into Microsoft 365 applications, enhancing productivity and creativity.",
              },
              {
                title:"Microsoft Copilot – AI",
                desc: "Microsoft Copilot is an AI assistant integrated into Microsoft 365 applications, enhancing productivity and creativity.",
              },
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div className="custom-card text-light p-4 h-100">
                  <div className="icon mb-3">{feature.icon}</div>
                  <h5 className="fw-bold">{feature.title}</h5>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case "Screenshots":
        return (
          <div className="row g-4">
            <div className="col-md-6">
              <img
                src={microsoft1}
                alt="Microsoft Copilot – AI"
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-md-6">
              <img
                src={microsoft1}
                alt="Microsoft Copilot – AI"
                className="img-fluid rounded-3"
              />
            </div>
          </div>
        );

      case "Reviews":
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

      case "Why-we-use":
        return (
          <div className="row g-4">
            <div className="col-12">
              <div className="custom-card text-light p-5 text-center">
                <h3 className="fw-bold mb-4">Why Use Microsoft Copilot?</h3>

                <h5>Overview:</h5>
                <p className="fs-5">
                Saves time on document creation and editing


                </p>

               
                <p className="fs-5 mt-3">
                Boosts productivity through automation

                </p>

               
                <p className="fs-5 mt-3">
                Integrates seamlessly with Microsoft 365 tools

                </p>

              
                <p className="fs-5 mt-3">
                Supports natural language commands (Microsoft Copilot natural language)

                </p>

               
                <p className="fs-5 mt-3">
                Offers enhanced features for business analytics and daily tasks
                </p>

              

                <Button variant="primary" size="lg" className="mt-4">
                  Try ChatGPT Now
                </Button>
              </div>
            </div>
          </div>
        );

      case "Pro&Const":
        return (
          <div style={styles.section}>
            <div className="container">
              <div className="row g-4">
                {/* Pros Section */}
                <div className="col-md-10 offset-md-1">
                  <div style={styles.card}>
                    <h3 className="mb-4 text-center">Pros of Microsoft Copilot</h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                       
                        <p>
                        AI-powered assistant for multiple Microsoft apps
                        </p>
                      </div>
                      <div className="col-md-6">
                 
                        <p>
                        Smart suggestions for emails, documents, and presentations
                        </p>
                      </div>
                      <div className="col-md-6">
                        
                        <p>
                        Improved data security and compliance
                        </p>
                      </div>
                      <div className="col-md-6">
                     
                        <p>
                        Available for enterprises and professionals
                        </p>
                      </div>
                      <div className="col-md-6">
                      
                        <p>
                        Copilot integration with OneDrive and Power BI

                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cons Section */}
                <div className="col-md-10 offset-md-1">
                  <div style={styles.card}>
                    <h3 className="mb-4 text-center">Cons of Microsoft Copilot</h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                       
                        <p>
                        Requires additional subscription (approx. $30/user/month)
                        </p>
                      </div>
                      <div className="col-md-6">
                     
                        <p>
                        Limited availability based on Microsoft Copilot launch date

                        </p>
                      </div>
                      <div className="col-md-6">
                       
                        <p>
                        Learning curve for new users

                        </p>
                      </div>
                      <div className="col-md-6">
                       
                        <p>
                        Some features only accessible in enterprise plans

                        </p>
                      </div>
                 
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Alternative":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-4">
            Alternatives to Microsoft Copilot

            </h4>
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
                  <li className="mb-3">
                    <strong>Google Duet AI –</strong> AI in Google Workspace
                  </li>
                  <li className="mb-3">
                    <strong>Notion AI –</strong>  Productivity AI inside Notion
                  </li>
                  <li className="mb-3">
                    <strong>Jasper AI – </strong> Focused on content and marketing copy

                  </li>
                  <li className="mb-3">
                    <strong>ChatGPT –</strong> Versatile AI assistant with plugin support
                  </li>
                  <li className="mb-3">
                    <strong>GrammarlyGO –</strong> AI-powered writing assistant
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

    

      case "FAQs":
        return (
          <div className="faq-section container py-5">
            <h3 className="text-center  text-white mb-5 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is Microsoft Copilot?",
                  a: "Microsoft Copilot is an AI-powered assistant integrated into Microsoft 365 apps, designed to improve productivity by automating tasks, generating content, and analyzing data.",
                },
                {
                  q: "What is the main function of Microsoft Copilot?",
                  a: "Copilot's main function is to assist users by automating tasks, drafting documents, summarizing emails, creating reports, and more, across apps like Word, Excel, and Teams.",
                },
                {
                  q: "Is Microsoft Copilot available for personal users?",
                  a: "Microsoft Copilot is primarily available for business and enterprise users who have a compatible Microsoft 365 subscription.",
                },
                {
                  q: "How does Microsoft Copilot help in Word?",
                  a: "Copilot in Word helps by drafting documents, suggesting improvements, summarizing content, and automating repetitive tasks like formatting and content organization.",
                },
                {
                  q: "Does Microsoft Copilot work with Excel?",
                  a: "Yes, Copilot in Excel assists with data analysis, formula generation, creating charts, and automating calculations.",
                },
                {
                  q: "What is Microsoft Copilot for Outlook?",
                  a: "Copilot in Outlook automates email responses, drafts professional emails, and helps manage and prioritize your inbox.",
                },
                {
                  q: "How does Microsoft Copilot integrate with Teams?",
                  a: "Microsoft Teams Copilot provides meeting summaries, tracks tasks, automates communication, and helps streamline project management within Teams.",
                },
                {
                  q: "What is the pricing for Microsoft Copilot?",
                  a: "Microsoft Copilot pricing varies based on the Microsoft 365 subscription plan, with enterprise plans being more expensive. Pricing starts at approximately $30 per user per month.",
                },
                {
                  q: "How do I activate Microsoft Copilot?",
                  a: "To activate Microsoft Copilot, ensure you have the correct Microsoft 365 subscription, then follow the activation steps in the admin settings.",
                },
                {
                  q: "Does Microsoft Copilot offer a free version?",
                  a: "Microsoft does not offer a free version of Copilot, but it may be available as part of your Microsoft 365 subscription.",
                },


              ]
                .map((item, i) => ({ ...item, id: `faq${i} `}))
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

              {/* Read More / Read Less Button */}
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

      default:
        return null;
    }
  };


  

  return (
    <>
      <div className="bg-dark">
        {/* <Link
          to="/Aitools"
          className="d-inline-block text-white text-decoration-none ml-3 py-1"
        >
          <i className="bi bi-arrow-left me-2"></i>Back to Directory
        </Link> */}
       <a
          href="/Aitools"
          className="d-inline-block text-white text-decoration-none  mt-3 ml-3 py-1 px-2 ms-5 border rounded-sm"
        >
          <i className="bi bi-arrow-left me-2"></i>Back  {" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
    <div className="row align-items-center mb-5">
  {/* Image Section - on top mobile, right on desktop */}
  <div className="col-lg-6 col-md-12 order-1 order-lg-2 text-center mb-4 mb-lg-0">
    <img
      src={microsoft}
      className="img-fluid rounded-3"
      style={{ maxWidth: "100%", height: "auto" }}
      alt="Microsoft Copilot – AI"
    />
  </div>

  {/* Text Section - below image mobile, left on desktop */}
  <div className="col-lg-6 col-md-12 order-2 order-lg-1" style={{ paddingRight: "30px" }}>
    <div className="d-flex align-items-center mb-3">
      <h2 className="mb-0">Microsoft Copilot – AI</h2>
    </div>
    <div className="text-warning mb-2">
      ⭐⭐⭐⭐⭐ 95% Satisfaction
    </div>
    <p className="mb-4">
      Microsoft Copilot (also known as Microsoft 365 Copilot) is a cutting-edge AI assistant in Microsoft that seamlessly integrates into Microsoft 365 applications like Word, Excel, PowerPoint, Outlook, and Teams. Powered by GPT-4 and Microsoft Graph, Copilot transforms how users interact with Microsoft Office tools, making it easier to create content, analyze data, and automate repetitive tasks.
    </p>
    <div className="d-flex flex-wrap gap-3">
      <a
        href="https://copilot.microsoft.com/chats/rQ7tt1PAQCHXDkRhSbpmZ"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-lg px-4"
      >
        Explore Tool
      </a>
    </div>
  </div>
</div>
<section style={{ backgroundColor: "#0b1e3d", padding: "3rem 0" }}>
  <div className="container text-center">
    <p className="text-primary">
      Enhance Productivity—Microsoft Copilot AI in Action
    </p>
    <h2
      className="text-white"
      style={{ fontWeight: "600", marginBottom: "1rem" }}
    >
      Discover How Microsoft Copilot AI Boosts Your Work Efficiency
    </h2>
    <p
      style={{
        color: "#ccc",
        marginBottom: "2rem",
        fontStyle: "italic",
      }}
    >
      Microsoft Copilot integrates AI into your everyday apps, helping you write, analyze, and create content faster with intelligent assistance.
    </p>

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
          <style>{`
            .copilot-step1 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #7b61ff;
              opacity: 0.6;
            }
          `}</style>
          <h5 style={{ fontWeight: "bold", color: "#fff" }}>
            AI-Powered Content Generation
          </h5>
          <p style={{ color: "#fff", margin: 0 }}>
            Copilot helps draft documents, emails, and presentations with contextual AI suggestions.
          </p>
          <div className="copilot-step1">1</div>
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
          <style>{`
            .copilot-step2 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #7b61ff;
              opacity: 0.6;
            }
          `}</style>
          <h5 style={{ fontWeight: "bold", color: "#fff" }}>
            Data Analysis Assistance
          </h5>
          <p style={{ color: "#fff", margin: 0 }}>
            Automatically generates insights and summaries from your data in Excel and Power BI.
          </p>
          <div className="copilot-step2">2</div>
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
          <style>{`
            .copilot-step3 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #7b61ff;
              opacity: 0.6;
            }
          `}</style>
          <h5 style={{ fontWeight: "bold", color: "#fff" }}>
            Seamless Integration Across Apps
          </h5>
          <p style={{ color: "#fff", margin: 0 }}>
            Works smoothly with Microsoft 365 tools to streamline workflows and enhance collaboration.
          </p>
          <div className="copilot-step3">3</div>
        </div>
      </div>
    </div>
  </div>
</section>


          {/* Tab Navigation */}
          <ul className="nav nav-tabs custom-tabs mb-4">
            {[
              "features",
              "Screenshots",
              "Reviews",
              "FAQs",
              // "technical",
              "Why-we-use",
              "Pro&Const",
              "Alternative",
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

export default MicrosoftCopilot;