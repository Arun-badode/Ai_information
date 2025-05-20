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
const Rossntelligence = () => {
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
                icon: "🔍",
                title: "Natural Language Legal Search:",
                desc: "Users can ask questions in plain English and get results relevant to their queries, making legal research more intuitive.",
              },
              {
                icon: "📚",
                title: "Legal Case Analysis AI:",
                desc: "ROSS can analyze legal cases, identify relevant precedents, and summarize key aspects that can aid in case strategy.",
              },
              {
                icon: "🤖",
                title: "AI Legal Research Assistant:",
                desc: "Acts as an AI-powered assistant, helping legal professionals by providing relevant case law, statutes, and regulations on-demand.",
              },
              {
                icon: "⚙",
                title: "Legal Research Automation:",
                desc: "Automates many of the tedious aspects of legal research, allowing legal teams to focus on more strategic tasks.",
              },
              {
                icon: "🔗",
                title: "Integration with Legal Tools:",
                desc: "ROSS integrates with other legal platforms, making it easy to incorporate it into existing workflows and improve overall productivity.",
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
                  q: "What is ROSS Intelligence?",
                  a: "ROSS Intelligence is an AI-powered legal research tool that uses machine learning and natural language processing to assist legal professionals in finding relevant legal information quickly and accurately.",
                },
                {
                  q: "How does ROSS Intelligence work?",
                  a: "ROSS uses natural language processing (NLP) to interpret user queries and retrieve the most relevant legal data from a vast database of case law, statutes, and legal documents.",
                },
                {
                  q: "What features does ROSS Intelligence offer?",
                  a: "ROSS offers features such as natural language legal search, legal case analysis, document automation, AI-powered legal research, and legal research automation.",
                },
                {
                  q: "What are the key benefits of using ROSS Intelligence?",
                  a: "Benefits include improved legal research speed, higher accuracy, reduced costs, better legal research efficiency, and automation of repetitive tasks.",
                },
                {
                  q: "Is ROSS Intelligence suitable for small law firms?",
                  a: "Yes, ROSS is suitable for all sizes of law firms, from small practices to large firms, offering significant efficiency benefits for any legal professional.",
                },
                {
                  q: "Can ROSS Intelligence assist with legal compliance?",
                  a: "Yes, ROSS helps legal professionals stay compliant by providing relevant case law and statutes for various industries.",
                },
                {
                  q: "How does ROSS Intelligence improve the accuracy of legal research?",
                  a: "ROSS uses AI and machine learning algorithms that are trained to understand legal concepts, ensuring that the research results are highly accurate and relevant.",
                },
                {
                  q: "Does ROSS have a free trial?",
                  a: "Yes, ROSS offers a free trial to help users experience the platform before committing to a subscription plan.",
                },
                {
                  q: "What types of legal research can ROSS assist with?",
                  a: "ROSS helps with case law research, statutes, regulations, legal document analysis, legal compliance, contract law, and more.",
                },
                {
                  q: "Can ROSS be integrated with other legal tools?",
                  a: "Yes, ROSS integrates with various legal software tools, including practice management systems and document automation tools.",
                },
                {
                  q: "How fast is ROSS at returning legal research results?",
                  a: "ROSS delivers legal research results in seconds, significantly reducing the time it would take to perform manual research.",
                },
                {
                  q: "Is ROSS Intelligence AI-powered?",
                  a: "Yes, ROSS Intelligence leverages AI technology, including machine learning and natural language processing, to enhance the legal research process.",
                },
                {
                  q: "Can ROSS Intelligence understand plain language?",
                  a: "Yes, ROSS understands and processes natural language queries, allowing users to ask legal questions in plain English.",
                },
                {
                  q: "What makes ROSS Intelligence different from other legal research tools?",
                  a: "Unlike traditional tools, ROSS allows for natural language search, making legal research more intuitive and accessible.",
                },
                {
                  q: "Is ROSS Intelligence customizable?",
                  a: "Yes, ROSS can be customized based on the specific needs of your legal practice, such as integrating with other tools or adjusting to your preferred workflow.",
                },
                {
                  q: "Can ROSS help with legal case analysis?",
                  a: "Yes, ROSS can assist in analyzing legal cases, summarizing important aspects, and identifying precedents.",
                },
                {
                  q: "How does ROSS automate legal research?",
                  a: "ROSS automates legal research by utilizing AI to sift through massive amounts of legal data and generate relevant research findings, minimizing manual work.",
                },
                {
                  q: "Is ROSS useful for in-house counsel?",
                  a: "Yes, ROSS is especially helpful for in-house counsel by providing quick access to case law, statutes, and legal precedents needed for legal advice and decision-making.",
                },
                {
                  q: "Does ROSS offer document automation?",
                  a: "Yes, ROSS helps automate the creation of legal documents, making it easier to draft contracts, agreements, and other legal papers.",
                },
                {
                  q: "How does ROSS benefit legal departments?",
                  a: "ROSS saves time by automating research, provides fast and accurate answers, and ensures compliance, thus improving the overall efficiency of legal departments.",
                },
                {
                  q: "What is the subscription model for ROSS Intelligence?",
                  a: "ROSS offers monthly, quarterly, and annual subscription plans to suit different legal practices and departments.",
                },
                {
                  q: "Can ROSS Intelligence help with contract management?",
                  a: "Yes, ROSS assists with contract management by analyzing contract clauses, identifying potential risks, and ensuring compliance.",
                },
                {
                  q: "Is ROSS suitable for international law firms?",
                  a: "Yes, ROSS can be used by international law firms, providing access to a wide range of legal resources relevant to multiple jurisdictions.",
                },
                {
                  q: "Does ROSS offer training for new users?",
                  a: "Yes, ROSS offers training sessions, tutorials, and user guides to help new users get started with the platform.",
                },
                {
                  q: "How does ROSS help with legal research for law firms?",
                  a: "ROSS enhances law firm research efficiency by providing quick, accurate, and AI-powered insights, which saves time and resources.",
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
                    Why Use ROSS Intelligence?
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
                      Time-saving: Traditional legal research methods can be
                      time-consuming and require significant effort. With ROSS
                      Intelligence, research tasks are automated, allowing legal
                      professionals to save hours of manual work.
                    </li>
                    <li className="mb-3">
                      Increased accuracy: ROSS leverages AI to ensure that legal
                      search results are highly accurate, reducing the risk of
                      overlooking critical legal precedents and documents.
                    </li>
                    <li className="mb-3">
                      Improved productivity: ROSS helps legal professionals
                      access relevant information faster, improving productivity
                      across legal teams, law firms, and in-house legal
                      departments.
                    </li>
                    <li className="mb-3">
                      Cost-effective: By automating many aspects of legal
                      research, ROSS significantly reduces the costs associated
                      with human labor and manual research.
                    </li>
                    <li className="mb-3">
                      Easy to use: The platform is built with an intuitive
                      interface that makes it easy for both novice and
                      experienced users to navigate and perform complex legal
                      searches.
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
                    AI-Powered Search: ROSS’s natural language processing allows
                    users to search using plain language rather than complex
                    legal keywords, improving accessibility.
                  </li>
                  <li className="mb-2">
                    Speed: It speeds up legal research by providing instant,
                    relevant results, helping professionals get answers faster.
                  </li>
                  <li className="mb-2">
                    Accuracy: The AI models behind ROSS are trained to provide
                    precise and accurate legal insights based on the user's
                    query, ensuring high-quality results.
                  </li>
                  <li className="mb-2">
                    Comprehensive Legal Database: ROSS offers a vast database of
                    case law, statutes, and regulations, making it an invaluable
                    resource for any legal professional.
                  </li>
                  <li className="mb-2">
                    Ease of Use: ROSS features an intuitive interface that
                    allows legal professionals to quickly adapt to the platform,
                    reducing the learning curve.
                  </li>
                  <li className="mb-2">
                    Cost-Effective: By automating the research process, ROSS
                    reduces the need for large research teams, cutting
                    operational costs.
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
                    Price: ROSS Intelligence may be costly for solo
                    practitioners or small law firms, especially for those just
                    starting out.
                  </li>
                  <li className="mb-2">
                    Dependence on AI: Some legal professionals may prefer the
                    human touch of traditional research methods over relying on
                    AI technology.
                  </li>
                  <li className="mb-2">
                    Limited Scope for Niche Legal Areas: While ROSS covers a
                    broad range of legal areas, it may not have deep resources
                    in every niche area of law.
                  </li>
                  <li className="mb-2">
                    Data Limitations: The platform’s AI models rely on the data
                    they’ve been trained on, meaning they may not provide the
                    best results in highly specialized legal areas with fewer
                    available data.
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
                    Westlaw: A well-established name in the legal research
                    space, Westlaw provides extensive case law, statutes, and
                    legal commentary with advanced search capabilities.
                  </li>
                  <li className="mb-2">
                    LexisNexis: Known for its comprehensive legal database,
                    LexisNexis offers a range of legal research tools, including
                    document management and legal analytics.
                  </li>
                  <li className="mb-2">
                    Casetext: Another AI-powered tool, Casetext provides legal
                    research services with a focus on AI-driven case law
                    analysis.
                  </li>
                  <li className="mb-2">
                    Bloomberg Law: Bloomberg offers legal research tools with a
                    focus on legal analytics and practical solutions for law
                    firms.
                  </li>
                  <li className="mb-2">
                    Practical Law: A legal resource platform that provides
                    practical tools and guidance for law firms and legal
                    departments, specializing in templates, legal updates, and
                    workflows.
                  </li>
                  <li className="mb-2">
                    Harvey: A new competitor in AI legal tech, Harvey helps
                    legal professionals with document drafting, research, and
                    case analysis.
                  </li>
                  <li className="mb-2">
                    Darrow: Specializes in AI-powered litigation analytics to
                    help law firms understand patterns in case law and judicial
                    behavior.
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
              <h1>ROSS Intelligence Overview</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                ROSS Intelligence is a cutting-edge AI-powered legal research
                tool that streamlines and accelerates the process of finding and
                analyzing legal information. Designed for law firms, corporate
                legal departments, and legal professionals, ROSS uses natural
                language processing (NLP) and machine learning to provide
                accurate and relevant legal research results. It helps users
                quickly search through massive volumes of legal data, ensuring a
                more efficient, faster, and accurate way to conduct legal
                research. ROSS’s ability to understand and respond to
                question-based legal searches provides an intuitive experience
                that removes the complexity from traditional legal research.
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
                How to Use ROSS Intelligence?
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
                      Conduct AI-powered legal research
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      ROSS assists users in finding relevant legal precedents,
                      case law, and statutes by asking questions in natural
                      language.
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
                      Legal case analysis
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      With its powerful AI capabilities, ROSS analyzes case law
                      to identify critical points and provide deep insights to
                      inform legal strategies.
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
                      Legal document analysis
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      ROSS can review and analyze legal documents quickly,
                      helping legal teams review contracts, agreements, and
                      other documents faster than ever.
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
            <h4 className="mb-3">
              Ready to get started with ROSS Intelligence?
            </h4>
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

export default Rossntelligence;
