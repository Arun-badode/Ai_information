import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import icmi1 from "../../../../public/assets/Img/AI for Recruitment/ic-s1.png";
import icmi2 from "../../../../public/assets/Img/AI for Recruitment/ic-s2.png";
import icimsImg from '../../../../public/assets/Img/AI for Recruitment/9.png';

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
const Icims = () => {
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
              <h3 className="">Features of iCIMS AI </h3>
            </div>
            {[
              {
                icon: "🔍",
                title: "AI-Powered Candidate Search",
                desc: "Uses machine learning to search across multiple databases, job boards, and social networks to find the best candidates for open roles.",
              },
              {
                icon: "📄",
                title: "Resume Parsing & Screening",
                desc: "Automatically parses resumes, extracting key information such as skills, qualifications, and experience for a more efficient candidate screening process.",
              },
              {
                icon: "💌",
                title: "Automated Candidate Engagement",
                desc: "Sends personalized messages, follow-ups, and job notifications to candidates, ensuring continuous engagement throughout the hiring process.",
              },
              {
                icon: "📊",
                title: "Data-Driven Insights",
                desc: "Provides recruitment analytics and data-driven insights, helping recruiters optimize hiring strategies and improve decision-making.",
              },
              {
                icon: "🌍",
                title: "Global Talent Pool Access",
                desc: "Supports sourcing from a global talent pool, allowing businesses to find candidates from different regions and backgrounds.",
              },
              {
                icon: "🛠️",
                title: "Customizable Workflows",
                desc: "Offers flexible, customizable workflows to align recruitment processes with specific company needs, enhancing efficiency.",
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
                  q: "What is iCIMS AI?",
                  a: "iCIMS AI is a recruiting platform that leverages artificial intelligence to streamline talent acquisition, providing smarter search, screening, and engagement tools for recruiters.",
                },
                {
                  q: "How does iCIMS AI assist in talent sourcing?",
                  a: "iCIMS AI enhances talent sourcing by using machine learning algorithms to identify the most qualified candidates from multiple sources, including job boards, social media, and databases.",
                },
                {
                  q: "Can iCIMS AI automate candidate screening?",
                  a: "Yes, iCIMS AI automates candidate screening by analyzing resumes and applications, ensuring that only the most suitable candidates are passed through to the next hiring stages.",
                },
                {
                  q: "How does iCIMS AI help in improving diversity hiring?",
                  a: "iCIMS AI helps promote diversity by using AI-driven sourcing and candidate matching that focuses on qualifications rather than demographics, helping reduce bias in hiring.",
                },
                {
                  q: "Does iCIMS AI integrate with other tools?",
                  a: "Yes, iCIMS AI integrates seamlessly with various HR systems such as Applicant Tracking Systems (ATS), Human Resource Information Systems (HRIS), and other recruitment platforms.",
                },
                {
                  q: "Can iCIMS AI enhance candidate experience?",
                  a: "Yes, iCIMS AI improves candidate experience by automating communication and providing a personalized, responsive process for job seekers.",
                },
                {
                  q: "What features does iCIMS AI offer?",
                  a: "iCIMS AI offers features such as AI-powered candidate search, resume parsing, automated outreach, candidate engagement, predictive analytics, and diversity sourcing.",
                },
                {
                  q: "How does iCIMS AI perform candidate matching?",
                  a: "iCIMS AI uses machine learning to analyze candidate data, including resumes and work history, to match candidates with the best-fit roles based on skills, experience, and job requirements.",
                },
                {
                  q: "Can iCIMS AI be used for passive candidate sourcing?",
                  a: "Yes, iCIMS AI can identify passive candidates by analyzing online profiles, social media activity, and other relevant sources even when candidates are not actively seeking new opportunities.",
                },
                {
                  q: "Does iCIMS AI provide analytics on recruitment?",
                  a: "Yes, iCIMS AI provides analytics that help recruiters track candidate pipelines, measure engagement, and improve hiring strategies with data-driven insights.",
                },
                {
                  q: "How does iCIMS AI support diversity and inclusion in hiring?",
                  a: "iCIMS AI supports diversity and inclusion by offering advanced search and filtering capabilities that focus on skills and qualifications, helping eliminate biases in the recruitment process.",
                },
                {
                  q: "Does iCIMS AI automate candidate outreach?",
                  a: "Yes, iCIMS AI automates candidate outreach, sending personalized messages to candidates and keeping them engaged throughout the hiring process.",
                },
                {
                  q: "How does iCIMS AI improve recruitment efficiency?",
                  a: "iCIMS AI improves recruitment efficiency by automating repetitive tasks, such as candidate sourcing, screening, and outreach, saving recruiters significant time and resources.",
                },
                {
                  q: "Can iCIMS AI integrate with Applicant Tracking Systems (ATS)?",
                  a: "Yes, iCIMS AI integrates with most Applicant Tracking Systems (ATS) to ensure a smooth workflow and candidate management.",
                },
                {
                  q: "How does iCIMS AI perform candidate screening?",
                  a: "iCIMS AI uses AI-driven algorithms to screen resumes, rank candidates based on qualifications and experience, and filter out those who don't meet the job's criteria.",
                },
                {
                  q: "What types of data does iCIMS AI analyze?",
                  a: "iCIMS AI analyzes various types of data, including resumes, work experience, skills, education, social media activity, and other publicly available professional information.",
                },
                {
                  q: "Can iCIMS AI help with re-engaging past candidates?",
                  a: "Yes, iCIMS AI can help re-engage past candidates by sending automated outreach messages for new roles or opportunities that might interest them.",
                },
                {
                  q: "How customizable is iCIMS AI?",
                  a: "iCIMS AI is highly customizable, allowing recruiters to adjust candidate search parameters, messaging templates, and workflows to meet their organization's specific recruitment needs.",
                },
                {
                  q: "How does iCIMS AI support remote hiring?",
                  a: "iCIMS AI supports remote hiring by facilitating virtual interviews, providing tools for remote team collaboration, and sourcing talent from a global pool of candidates.",
                },
                {
                  q: "Does iCIMS AI have predictive analytics capabilities?",
                  a: "Yes, iCIMS AI offers predictive analytics that can forecast hiring trends, candidate success, and overall recruitment effectiveness based on past data.",
                },
                {
                  q: "How secure is the data used by iCIMS AI?",
                  a: "iCIMS AI adheres to industry-leading data security standards to protect candidate and employer information, including encryption and secure access protocols.",
                },
                {
                  q: "Can iCIMS AI improve the employer brand?",
                  a: "Yes, iCIMS AI helps improve employer branding by ensuring a consistent and positive candidate experience through personalized communications and efficient outreach.",
                },
                {
                  q: "What industries benefit most from iCIMS AI?",
                  a: "iCIMS AI is beneficial for industries such as technology, healthcare, finance, and education, as it helps streamline hiring for diverse roles across various sectors.",
                },
                {
                  q: "How does iCIMS AI assist with interview scheduling?",
                  a: "iCIMS AI integrates with scheduling tools to automate the interview process, sending reminders and helping streamline coordination with candidates.",
                },
                {
                  q: "Can iCIMS AI be used for global recruitment?",
                  a: "Yes, iCIMS AI supports global recruitment by enabling the sourcing and hiring of candidates from different geographical locations through integrated global talent pools.",
                },
                {
                  q: "Does iCIMS AI track candidate engagement?",
                  a: "Yes, iCIMS AI tracks candidate engagement and provides data on response rates and interactions, helping recruiters adjust outreach strategies accordingly.",
                },
                {
                  q: "How does iCIMS AI support team collaboration?",
                  a: "iCIMS AI enhances team collaboration by allowing recruiters to share candidate profiles, feedback, and insights in real-time to keep hiring teams aligned.",
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
                src={icmi1}
                alt="icim"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={icmi2}
                alt="icim"
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
                    Why Use iCIMS AI?
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
                      <strong>AI-Powered Candidate Search:</strong> iCIMS AI
                      helps recruiters source candidates from a variety of
                      platforms, streamlining the search process to find the
                      best talent efficiently.
                    </li>
                    <li className="mb-3">
                      <strong>Automated Resume Screening:</strong> iCIMS AI
                      automates the resume screening process, analyzing resumes
                      and applications to ensure only the most qualified
                      candidates proceed to the next stage.
                    </li>
                    <li className="mb-3">
                      <strong>Candidate Matching:</strong> The AI analyzes
                      candidate profiles and job descriptions to match
                      candidates to positions based on their skills, experience,
                      and cultural fit.
                    </li>
                    <li className="mb-3">
                      <strong>Predictive Analytics for Recruitment:</strong>{" "}
                      iCIMS AI leverages data to predict trends in talent
                      availability, helping companies make more informed hiring
                      decisions.
                    </li>
                    <li className="mb-3">
                      <strong>Diversity and Inclusion Sourcing:</strong> iCIMS
                      AI supports diversity hiring by focusing on skills and
                      qualifications, ensuring that recruitment is inclusive and
                      eliminates biases.
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
                    <strong>AI-Powered Candidate Search:</strong> iCIMS AI helps
                    recruiters source candidates from a variety of platforms,
                    streamlining the search process to find the best talent
                    efficiently.
                  </li>
                  <li className="mb-3">
                    <strong>Automated Resume Screening:</strong> iCIMS AI
                    automates the resume screening process, analyzing resumes
                    and applications to ensure only the most qualified
                    candidates proceed to the next stage.
                  </li>
                  <li className="mb-3">
                    <strong>Candidate Matching:</strong> The AI analyzes
                    candidate profiles and job descriptions to match candidates
                    to positions based on their skills, experience, and cultural
                    fit.
                  </li>
                  <li className="mb-3">
                    <strong>Predictive Analytics for Recruitment:</strong> iCIMS
                    AI leverages data to predict trends in talent availability,
                    helping companies make more informed hiring decisions.
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
                    <strong>Dependency on Technology:</strong> iCIMS AI relies
                    heavily on algorithms and automation, which might overlook
                    the subtle, human aspects of a candidate’s potential or
                    culture fit.
                  </li>
                  <li className="mb-3">
                    <strong>
                      Potential for Overlooking Passive Candidates:
                    </strong>{" "}
                    While iCIMS AI excels in sourcing active candidates, it may
                    not always effectively engage with passive talent who aren't
                    actively seeking new opportunities.
                  </li>
                  <li className="mb-3">
                    <strong>Data Privacy Concerns:</strong> Since iCIMS AI
                    processes and stores a large amount of candidate data, there
                    is a need to ensure that sensitive information is properly
                    secured and complies with data privacy regulations.
                  </li>
                  <li className="mb-3">
                    <strong>AI Bias:</strong> Like any AI-powered tool, there is
                    a risk of bias in the algorithms, which may inadvertently
                    favor certain candidate profiles or overlook others based on
                    historical data.
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
       <div className="row d-flex align-items-center justify-content-between flex-column-reverse flex-md-row mb-1">
  {/* Left Side (Text Section) */}
  <div className="col-md-6 mt-3 mt-md-0">
    <p className="text-primary">Write better, faster</p>
    <h1>iCIMS AI</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      iCIMS AI is an advanced AI-powered recruitment platform that helps
      organizations streamline their talent acquisition processes. iCIMS is
      a comprehensive Applicant Tracking System (ATS) and recruitment
      software that integrates artificial intelligence (AI) and machine
      learning to enhance candidate sourcing, job matching, candidate
      engagement, and recruitment automation.
    </p>
    <p>
      By leveraging predictive analytics and data-driven recruitment,
      iCIMS AI automates repetitive recruitment tasks, improving
      efficiency and ensuring that recruiters can focus on evaluating
      high-quality candidates. This tool is especially beneficial for
      large enterprises and organizations that require scalable,
      effective hiring solutions.
    </p>
    <div className="mb-3">
      <a
        href="https://www.icims.com/"
        rel="noopener noreferrer"
        className="btn btn-primary me-2"
        target="_blank"
      >
        Explore Tool
      </a>
    </div>
  </div>

  {/* Right Side (Image Section) */}
  <div className="col-lg-6 col-md-12 order-lg-2 order-1">
     <div className="ratio ratio-16x9">
       <img
         src={icimsImg}
         className="img-fluid rounded-3 object-fit-cover"
         alt="icims"
         loading="lazy"
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
                How iCIMS AI Works?
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
          .hiretual1 {
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
                      Step 1: AI-Powered Candidate Search
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      iCIMS AI uses machine learning to search across various
                      talent pools, including resumes, social media, and other
                      candidate databases, to identify the best-fit candidates
                      for open roles.
                    </p>
                    <div className="hiretual1">1</div>
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
          .hiretual2 {
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
                      Step 2: Resume Parsing and Screening
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      iCIMS AI automatically parses resumes and screens
                      candidates by extracting key skills, experience, and
                      qualifications, reducing manual review time and improving
                      the efficiency of candidate selection.
                    </p>
                    <div className="hiretual2">2</div>
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
          .hiretual3 {
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
                      Step 3: AI-Powered Candidate Engagement
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      iCIMS AI automates candidate engagement by sending
                      personalized outreach emails, follow-ups, and job
                      notifications, keeping candidates engaged throughout the
                      hiring process.
                    </p>
                    <div className="hiretual3">3</div>
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

export default Icims;
