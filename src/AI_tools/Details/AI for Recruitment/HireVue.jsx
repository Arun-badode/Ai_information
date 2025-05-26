import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import hirevue1 from "../../../../public/assets/Img/AI for Recruitment/1.png";
import hr1 from "../../../../public/assets/Img/AI for Recruitment/hr-s1.png";
import hr2 from "../../../../public/assets/Img/AI for Recruitment/hr-s2.png";

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
const HireVue = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                Create Studio-Quality Videos with AI
              </p>
              <h3 className="">Features of HireVue AI </h3>
            </div>
            {[
              {
                icon: "🎥",
                title: "On-Demand Video Interviews",
                desc: "HireVue allows candidates to complete interviews anytime, anywhere by answering pre-recorded questions, reducing scheduling conflicts and speeding up hiring cycles.",
              },
              {
                icon: "🧠",
                title: "AI-Powered Candidate Insights",
                desc: "Using artificial intelligence, HireVue evaluates candidate responses for language, tone, and other cues to provide data-driven insights and reduce unconscious bias.",
              },
              {
                icon: "🕹️",
                title: "Game-Based Assessments",
                desc: "Cognitive and behavioral assessments are delivered through engaging games that measure traits like problem-solving, attention, and emotional intelligence.",
              },
              {
                icon: "📈",
                title: "Structured Interviewing",
                desc: "Standardized interview questions help ensure every candidate gets a fair, consistent evaluation aligned with job-specific criteria.",
              },
              {
                icon: "🤝",
                title: "Live Interviews",
                desc: "In addition to on-demand interviews, HireVue supports live video interviews with built-in evaluation tools, ideal for deeper candidate engagement.",
              },
              {
                icon: "🔒",
                title: "Compliance & Security",
                desc: "HireVue ensures GDPR and EEOC compliance, offering secure data handling and audit trails to meet enterprise hiring standards.",
              },
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="custom-card text-light p-4 h-100  "
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
      case "FAQs":
        return (
          <div className="faq-section container py-4">
            <h3 className="text-center text-white mb-4 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is HireVue?",
                  a: "HireVue is a digital platform that uses AI and video interviews to streamline hiring processes.",
                },
                {
                  q: "What does HireVue AI do?",
                  a: "HireVue AI analyzes candidate video interviews to evaluate communication skills, expressions, and job fit.",
                },
                {
                  q: "How does HireVue work?",
                  a: "Candidates record interviews; HireVue's AI evaluates responses using voice, language, and facial analysis.",
                },
                {
                  q: "What is a HireVue video interview?",
                  a: "A HireVue video interview is an on-demand video response to employer-set questions.",
                },
                {
                  q: "What is a HireVue assessment?",
                  a: "It is a pre-employment evaluation including video responses, cognitive games, and technical tests.",
                },
                {
                  q: "Is HireVue an AI platform?",
                  a: "Yes, it integrates AI for scoring and analyzing candidate interviews.",
                },
                {
                  q: "What companies use HireVue?",
                  a: "Companies like Unilever, Goldman Sachs, Delta Airlines, and JP Morgan use HireVue.",
                },
                {
                  q: "What is the benefit of HireVue?",
                  a: "It reduces time-to-hire, minimizes bias, and enables remote interviews.",
                },
                {
                  q: "How accurate is HireVue AI?",
                  a: "HireVue AI achieves high predictive accuracy but depends on quality of training data.",
                },
                {
                  q: "What is an asynchronous interview in HireVue?",
                  a: "It means candidates record interviews at their convenience, not live with an interviewer.",
                },
                {
                  q: "What is HireVue predictive hiring?",
                  a: "It’s the use of AI models to predict which candidates will succeed in a job.",
                },
                {
                  q: "Is HireVue a live interview?",
                  a: "HireVue primarily uses recorded, on-demand interviews; live options are available too.",
                },
                {
                  q: "Can you retake a HireVue interview?",
                  a: "Usually no, unless the recruiter specifically allows multiple attempts.",
                },
                {
                  q: "What is HireVue's AI evaluation process?",
                  a: "It scores candidates based on speech, expressions, and behavioral patterns.",
                },
                {
                  q: "Does HireVue use facial recognition?",
                  a: "It uses facial analysis for expressions, but not full identity recognition.",
                },
                {
                  q: "What is HireVue AI scoring?",
                  a: "It is an automated system that ranks candidates based on AI evaluation models.",
                },
                {
                  q: "What is HireVue game-based assessment?",
                  a: "Interactive games that assess cognitive and emotional skills.",
                },
                {
                  q: "Is HireVue fair?",
                  a: "HireVue aims for fairness by training AI models to avoid bias, but some debate exists.",
                },
                {
                  q: "What happens after HireVue interview?",
                  a: "Recruiters review AI scores and video recordings to decide next steps.",
                },
                {
                  q: "How long does HireVue interview take?",
                  a: "Typically 20–30 minutes for standard interviews.",
                },
                {
                  q: "How is HireVue different from Zoom?",
                  a: "HireVue interviews are mostly asynchronous and AI-evaluated; Zoom interviews are live.",
                },
                {
                  q: "Can HireVue detect cheating?",
                  a: "Yes, irregularities like looking off-camera frequently are flagged.",
                },
                {
                  q: "Is HireVue interview difficult?",
                  a: "Preparation matters; questions often focus on situational judgment and behavioral skills.",
                },
                {
                  q: "What kind of questions are asked in HireVue?",
                  a: "Behavioral, situational, role-specific, and cognitive questions.",
                },
                {
                  q: "Can you pause a HireVue interview?",
                  a: "Not during a question recording, but breaks may exist between questions.",
                },
              ]

                .map((item, i) => ({ ...item, id: `faq${i}` }))
                .filter((item, i) => showAllFaqs || i < 4)
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

      case "Screenshots":
        return (
          <div className="row g-4">
            <div className="col-md-6">
              <img
                src={hr1}
                alt="hirevue"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={hr2}
                alt="hirevue"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
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

      case "Technical":
        return (
          <div style={styles.section}>
            <div className="container">
              <div className="row g-4">
                {/* System Requirements */}
                <div className="col-md-8">
                  <div style={styles.card}>
                    <h5 className="mb-4">System Requirements</h5>
                    <div className="row">
                      <div className="col-md-6">
                        <h6>Supported Platforms</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>🪟 Windows 10/11 (Web App)</li>
                          <li>🍎 macOS 11+ (Chrome or Safari)</li>
                          <li>📱 Android & iOS (Mobile Browser)</li>
                          <li>🌐 Modern browsers (Chrome, Firefox, Edge)</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h6>Hardware Requirements</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>⚡ Intel i3 or equivalent (2.0 GHz+)</li>
                          <li>🧠 4 GB RAM (8 GB preferred for HD rendering)</li>
                          <li>💾 300 MB disk space for cache</li>
                          <li>📶 Stable high-speed internet (4 Mbps+)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Resources & Support */}
                <div className="col-md-4">
                  <div style={styles.card}>
                    <h5 className="mb-4">Resources</h5>
                    <ul className="list-unstyled mb-4" style={styles.smallText}>
                      <li>📄 Getting Started with Pictory</li>
                      <li>💻 API Documentation</li>
                      <li>🎥 Video Tutorials</li>
                      <li>🎓 AI Video Academy</li>
                      <li>💬 Support Community</li>
                    </ul>
                    <h5>Support</h5>
                    <button
                      className="btn w-100 my-2"
                      style={styles.button}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor =
                          styles.buttonHover.backgroundColor;
                        e.target.style.borderColor =
                          styles.buttonHover.borderColor;
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor =
                          styles.button.backgroundColor;
                        e.target.style.borderColor = styles.button.borderColor;
                      }}
                    >
                      🎧 Contact Support
                    </button>
                    <small className="text-muted d-block text-center">
                      24/7 technical support for premium users
                    </small>
                  </div>
                </div>

                {/* Integrations */}
                <div className="col-12">
                  <div style={styles.card}>
                    <h5 className="mb-4">Integration Capabilities</h5>
                    <div className="row">
                      <div className="col-md-4">
                        <h6>Content Sources</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>🧰 Google Docs</li>
                          <li>🧰 Microsoft Word</li>
                          <li>🧰 Blog URLs for video summarization</li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <h6>Export Tools</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>💻 MP4 Video Export</li>
                          <li>💻 SRT/VTT Subtitles</li>
                          <li>💻 Social media formats</li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <h6>Marketing Tools</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>📢 Hootsuite Integration</li>
                          <li>📢 HubSpot</li>
                          <li>📢 LinkedIn & Facebook Upload</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Why-We-Use":
        return (
          <div className="container">
            <div className="row g-4">
              <div className="col-12">
                <div className="custom-card text-light p-5 text-center">
                  <h3 className="fw-bold mb-4 text-start text-primary">
                    Why Use HireVue AI?
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
                      <strong>AI-Powered Interview Analysis:</strong> Evaluate
                      candidate responses using voice, facial expression, and
                      language analysis.
                    </li>
                    <li className="mb-3">
                      <strong>Asynchronous Video Interviews:</strong> Allow
                      candidates to complete interviews anytime, enhancing
                      flexibility and reach.
                    </li>
                    <li className="mb-3">
                      <strong>Game-Based Assessments:</strong> Use interactive
                      games to assess cognitive abilities and emotional
                      intelligence.
                    </li>
                    <li className="mb-3">
                      <strong>Predictive Hiring Models:</strong> Forecast
                      candidate success using data-driven AI insights.
                    </li>
                    <li className="mb-3">
                      <strong>Bias Reduction Tools:</strong> Train AI models to
                      reduce hiring bias and promote fair evaluations.
                    </li>
                    <li className="mb-3">
                      <strong>Scoring & Ranking:</strong> Automatically rank
                      candidates based on skills, traits, and responses.
                    </li>
                    <li className="mb-3">
                      <strong>Facial Expression Analysis:</strong> Monitor
                      candidate engagement and communication through facial
                      cues.
                    </li>
                    <li className="mb-3">
                      <strong>Speech & Language Processing:</strong> Analyze
                      tone, pace, and word choice to assess communication
                      skills.
                    </li>
                    <li className="mb-3">
                      <strong>Cheating Detection:</strong> Detect unusual
                      behavior or off-camera activity during video interviews.
                    </li>
                    <li className="mb-3">
                      <strong>Performance Analytics:</strong> Provide recruiters
                      with data on candidate behavior and overall hiring trends.
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

      case "Pros & Cons":
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
                    <strong>Faster Hiring Process:</strong> Streamlines
                    candidate screening and reduces time-to-hire through
                    automation.
                  </li>
                  <li className="mb-2">
                    <strong>24/7 Candidate Access:</strong> Allows applicants to
                    complete interviews at their convenience, improving
                    candidate experience.
                  </li>
                  <li className="mb-2">
                    <strong>Scalable Interviewing:</strong> Enables
                    organizations to assess thousands of candidates
                    simultaneously without increasing recruiter workload.
                  </li>
                  <li className="mb-2">
                    <strong>AI-Powered Insights:</strong> Provides objective
                    scoring based on communication, tone, and behavior for more
                    data-driven decisions.
                  </li>
                  <li className="mb-2">
                    <strong>Bias Reduction:</strong> Uses structured AI models
                    to minimize unconscious bias in candidate evaluations.
                  </li>
                  <li className="mb-2">
                    <strong>Comprehensive Candidate Profiles:</strong> Combines
                    video, game-based assessments, and AI scoring to deliver
                    holistic candidate evaluations.
                  </li>
                  <li className="mb-2">
                    <strong>Remote Interviewing:</strong> Supports fully remote
                    recruitment workflows, ideal for global hiring or hybrid
                    workforces.
                  </li>
                  <li className="mb-2">
                    <strong>Standardized Assessments:</strong> Ensures every
                    candidate is asked the same questions, improving fairness
                    and consistency.
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
                <h5 className="text-warning text-start mb-4">⚠️ Cons</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Privacy Concerns:</strong> The use of facial and
                    voice analysis in AI evaluations has raised concerns about
                    data privacy and surveillance.
                  </li>
                  <li className="mb-2">
                    <strong>Potential Bias in AI:</strong> Despite efforts to
                    reduce bias, critics argue that AI models may still inherit
                    biases from training data.
                  </li>
                  <li className="mb-2">
                    <strong>Lack of Human Interaction:</strong> Automated and
                    asynchronous interviews can feel impersonal, potentially
                    affecting the candidate experience.
                  </li>
                  <li className="mb-2">
                    <strong>Limited Feedback:</strong> Candidates often receive
                    little to no feedback after completing HireVue interviews,
                    leaving them in the dark about their performance.
                  </li>
                  <li className="mb-2">
                    <strong>Technical Issues:</strong> Candidates may face
                    problems like connectivity issues, poor lighting, or
                    microphone malfunctions that affect performance.
                  </li>
                  <li className="mb-2">
                    <strong>Stressful for Candidates:</strong> The pressure of
                    recording timed responses and being analyzed by AI can
                    increase anxiety and reduce natural communication.
                  </li>
                  <li className="mb-2">
                    <strong>Limited Customization:</strong> Some employers find
                    the platform rigid in terms of customizing assessments and
                    branding the candidate experience.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "Alternative":
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
                    Best for avatar-based explainer and corporate videos.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Emerging competition with realistic scene generation but
                    still in closed beta.
                  </li>
                  <li className="mb-2">
                    Great for musicians and creators wanting visual storytelling
                    synced with audio.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Known for creative animated video styles and short-form
                    content.
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
        <div className="row align-items-center mb-4">
  {/* Left side (Text Section) */}
  <div className="col-lg-6 col-md-12 order-lg-1 order-2 pe-lg-4">
    <p className="text-primary mb-2">Write better, faster</p>
    <h1 className="mb-3">HireVue AI</h1>
    <div className="text-warning mb-3">⭐⭐⭐⭐⭐</div>
    <p className="mb-3">
      HireVue is an innovative AI-powered hiring platform that helps
      organizations conduct video interviews, assessments, and talent
      evaluations. It blends AI, machine learning, and video
      technology to analyze candidates' responses, facial expressions,
      and communication skills. HireVue streamlines recruitment by
      automating the initial interview stages, helping companies hire
      better candidates faster.
    </p>
    <p className="mb-4">
      HireVue is used by major companies worldwide to reduce hiring
      time, remove biases, and enhance candidate experiences.
    </p>
    <div className="d-flex flex-wrap gap-3 mb-4 mb-lg-0">
      <a
        href="https://www.hirevue.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-lg px-4"
      >
        Explore Tool
      </a>
    </div>
  </div>

  {/* Right side (Image Section) */}
  <div className="col-lg-6 col-md-12 order-lg-2 order-1 text-center mb-4 mb-lg-0">
    <div className="image-container" style={{ maxHeight: "300px", overflow: "hidden" }}>
      <img
        src={hirevue1}
        className="img-fluid rounded-3"
        style={{ 
          width: "100%",
          height: "auto",
          objectFit: "cover",
          objectPosition: "center"
        }}
        alt="HireVue AI Platform"
      />
    </div>
  </div>
</div>
          <section style={{ backgroundColor: "", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">Create Videos in 3 Simple Steps</p>
              <h2
                style={{
                  fontWeight: "semibold",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                How HireVue AI Works?
              </h2>
              <div className="row g-4 mt-5">
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
          .step4 {
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
                      Step 1: Invitation & Setup
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Candidates receive an invite to a HireVue interview, where
                      they check their setup and get ready through optional
                      practice questions.
                    </p>
                    <div className="step4">1</div>
                  </div>
                </div>

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
          .step5 {
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
                      Step 2: Video Interview or Assessment
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Applicants record responses to pre-set questions or
                      complete cognitive/personal assessments using games or
                      quizzes.
                    </p>
                    <div className="step5">2</div>
                  </div>
                </div>

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
          .step6 {
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
                      Step 3: Review & Selection
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Employers review the candidate's videos and results. AI
                      scoring may assist, but final decisions remain with human
                      recruiters.
                    </p>
                    <div className="step6">3</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Tab Navigation */}
          <ul className="nav nav-tabs custom-tabs mb-4">
            {[
              "Features",
              "Screenshots",
              "Reviews",
              "FAQs",
              "Technical",
              "Why-We-Use",
              "Pros & Cons",
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

export default HireVue;
