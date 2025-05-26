import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
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
const Hiretual = () => {
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
              <h3 className="">Features of Hiretual AI </h3>
            </div>
            {[
              {
                icon: "🎮",
                title: "Hiretual AI Platform",
                desc: "The core platform that automates candidate sourcing, outreach, and engagement through AI-driven tools.",
              },
              {
                icon: "🔍",
                title: "Hiretual Sourcing Tool",
                desc: " A powerful sourcing engine that scans multiple platforms to find and engage potential candidates, even from passive candidate pools.",
              },
              {
                icon: "🤖",
                title: "Hiretual AI Sourcing",
                desc: "Leverages AI-powered algorithms to refine and improve sourcing strategies, ensuring better candidate matches.",
              },
              {
                icon: "📈",
                title: "Hiretual Resume Parsing",
                desc: "Automatically extracts and analyzes relevant data from candidate resumes to simplify shortlisting.",
              },
              {
                icon: "⚖️",
                title: "Hiretual Recruitment Automation",
                desc: "Automates repetitive recruiting tasks like candidate screening, interview scheduling, and outreach.",
              },
              {
                icon: "🧑‍💼",
                title: "AI Chatbots",
                desc: " Interact with candidates, answer questions, and assist in scheduling interviews, enhancing candidate experience.",
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
                  q: "What is Hiretual AI?",
                  a: "Hiretual AI is an AI-powered talent sourcing and recruitment platform that helps companies identify, engage, and hire top talent quickly and efficiently using data-driven insights.",
                },
                {
                  q: "How does Hiretual AI help with recruitment?",
                  a: "Hiretual AI automates talent sourcing, candidate outreach, and engagement by using artificial intelligence to analyze data and provide the best-fit candidates for open roles.",
                },
                {
                  q: "What features does Hiretual AI offer?",
                  a: "Hiretual AI offers features such as candidate sourcing, resume parsing, AI-driven search, outreach automation, and integrated analytics to streamline the recruitment process.",
                },
                {
                  q: "Can Hiretual AI help find passive candidates?",
                  a: "Yes, Hiretual AI is designed to find passive candidates by scanning various platforms, social networks, and databases to identify individuals who may not be actively looking for jobs but could be a good fit.",
                },
                {
                  q: "Does Hiretual AI integrate with applicant tracking systems (ATS)?",
                  a: "Yes, Hiretual AI integrates seamlessly with popular ATS systems, making it easy to manage candidates and streamline the recruitment process.",
                },
                {
                  q: "How accurate are Hiretual AI’s candidate recommendations?",
                  a: "Hiretual AI’s recommendations are highly accurate as the platform leverages machine learning algorithms to analyze a variety of data points, including experience, skills, and company preferences.",
                },
                {
                  q: "Does Hiretual AI support diversity hiring?",
                  a: "Yes, Hiretual AI can assist in diversity hiring by offering unbiased talent search options and promoting diverse candidate pipelines, helping reduce unconscious bias in recruitment.",
                },
                {
                  q: "Can Hiretual AI automate candidate outreach?",
                  a: "Yes, Hiretual AI automates candidate outreach through personalized emails, messages, and follow-ups, improving engagement and saving time for recruiters.",
                },
                {
                  q: "What kind of candidate data does Hiretual AI analyze?",
                  a: "Hiretual AI analyzes candidate data such as resumes, professional profiles, social media activity, skillsets, work experience, and geographic preferences.",
                },
                {
                  q: "Does Hiretual AI help with interview scheduling?",
                  a: "Hiretual AI doesn't directly schedule interviews, but its automation tools can help recruiters streamline communication and coordination with candidates for scheduling interviews.",
                },
                {
                  q: "How does Hiretual AI support team collaboration?",
                  a: "Hiretual AI allows recruitment teams to collaborate easily by sharing candidate profiles, insights, and communication logs, ensuring that everyone is on the same page.",
                },
                {
                  q: "Can Hiretual AI screen candidates?",
                  a: "Yes, Hiretual AI can screen candidates by analyzing resumes, skillsets, and experience to match candidates with the most suitable roles.",
                },
                {
                  q: "How does Hiretual AI improve recruitment speed?",
                  a: "Hiretual AI speeds up the recruitment process by automating key steps such as candidate sourcing, outreach, and follow-up communication, reducing the need for manual tasks.",
                },
                {
                  q: "Can Hiretual AI work for all job levels?",
                  a: "Yes, Hiretual AI can assist with hiring at all job levels, from entry-level positions to senior management roles, by finding the most qualified candidates.",
                },
                {
                  q: "How secure is Hiretual AI?",
                  a: "Hiretual AI ensures data privacy and security by following strict compliance regulations, encrypting sensitive data, and implementing secure authentication and access protocols.",
                },
                {
                  q: "Does Hiretual AI provide analytics on the hiring process?",
                  a: "Yes, Hiretual AI provides recruitment analytics that give insights into the effectiveness of candidate sourcing, outreach, and hiring strategies, helping improve the hiring process over time.",
                },
                {
                  q: "How does Hiretual AI support remote recruitment?",
                  a: "Hiretual AI supports remote recruitment by automating candidate engagement through online communication tools, enabling recruiters to interact with candidates regardless of location.",
                },
                {
                  q: "Can Hiretual AI be used for candidate re-engagement?",
                  a: "Yes, Hiretual AI helps recruiters re-engage with past candidates, reminding them of new opportunities and prompting them to apply for roles that may be a better fit.",
                },
                {
                  q: "What industries benefit from using Hiretual AI?",
                  a: "Hiretual AI benefits industries such as tech, healthcare, finance, retail, and more by optimizing recruitment processes and helping find top talent across various fields.",
                },
                {
                  q: "Can Hiretual AI support global recruitment?",
                  a: "Yes, Hiretual AI supports global recruitment by analyzing candidate data from various international job boards, professional networks, and social media platforms.",
                },
                {
                  q: "Does Hiretual AI use machine learning?",
                  a: "Yes, Hiretual AI uses machine learning to continually improve its search algorithms, ensuring more accurate talent recommendations and better candidate matching over time.",
                },
                {
                  q: "How does Hiretual AI help with employer branding?",
                  a: "Hiretual AI helps with employer branding by enabling recruiters to deliver a personalized, engaging candidate experience through automated outreach and consistent messaging.",
                },
                {
                  q: "Can Hiretual AI help reduce bias in the hiring process?",
                  a: "Yes, Hiretual AI helps reduce bias by relying on data-driven insights and objective candidate evaluations, focusing on skills, experience, and qualifications.",
                },
                {
                  q: "How customizable is Hiretual AI?",
                  a: "Hiretual AI is highly customizable, allowing recruiters to tailor outreach templates, candidate search criteria, and other features to align with company needs.",
                },
                {
                  q: "Does Hiretual AI offer integration with other HR tools?",
                  a: "Yes, Hiretual AI integrates with a variety of HR tools, including ATS, CRM, and job boards, ensuring seamless data transfer and streamlined recruitment workflows.",
                },
                {
                  q: "Can Hiretual AI track candidate engagement?",
                  a: "Yes, Hiretual AI tracks candidate engagement through email opens, responses, and interactions, providing detailed insights into candidate interest and involvement.",
                },
                {
                  q: "How does Hiretual AI assist with candidate qualification?",
                  a: "Hiretual AI automatically qualifies candidates by analyzing their experience, skills, and previous work, ensuring they meet the criteria for the role before moving forward.",
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
                alt="hiretual"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={hr2}
                alt="hiretual"
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
                    Why Use Hiretual AI?
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
                      <strong>Automated Candidate Sourcing:</strong> Hiretual AI
                      automates the sourcing of candidates by scanning multiple
                      platforms, including social media and professional
                      networks, to identify top talent.
                    </li>
                    <li className="mb-3">
                      <strong>AI-Powered Candidate Search:</strong> Hiretual AI
                      uses advanced algorithms to conduct intelligent searches
                      and match candidates to job openings based on their
                      skills, experience, and preferences.
                    </li>
                    <li className="mb-3">
                      <strong>Passive Candidate Engagement:</strong> Hiretual AI
                      reaches out to passive candidates, encouraging them to
                      consider job opportunities that align with their profiles,
                      even if they are not actively job hunting.
                    </li>
                    <li className="mb-3">
                      <strong>Resume Parsing and Screening:</strong> Hiretual AI
                      parses resumes and screens candidates based on key skills,
                      qualifications, and experience, reducing manual review
                      time.
                    </li>
                    <li className="mb-3">
                      <strong>Automated Outreach:</strong> Hiretual AI automates
                      candidate outreach through personalized emails and
                      messages, ensuring timely engagement without manual
                      effort.
                    </li>
                    <li className="mb-3">
                      <strong>AI-Driven Candidate Ranking:</strong> Hiretual AI
                      ranks candidates based on their fit for a position,
                      considering their skills, experience, and overall
                      suitability.
                    </li>
                    <li className="mb-3">
                      <strong>Diversity Hiring Support:</strong> Hiretual AI
                      helps promote diversity by focusing on skills and
                      qualifications rather than demographic factors, reducing
                      unconscious bias during the hiring process.
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
                    <strong>Faster Candidate Sourcing:</strong> Hiretual AI
                    automates candidate sourcing across multiple platforms,
                    saving time and increasing the speed of finding top talent.
                  </li>
                  <li className="mb-2">
                    <strong>Enhanced Candidate Matching:</strong> Hiretual AI
                    uses advanced algorithms to match candidates more accurately
                    to job roles based on their skills, experience, and
                    qualifications.
                  </li>
                  <li className="mb-2">
                    <strong>Improved Candidate Engagement:</strong> Hiretual AI
                    ensures continuous engagement with candidates through
                    automated messages, updates, and personalized outreach.
                  </li>
                  <li className="mb-2">
                    <strong>Data-Driven Insights:</strong> Hiretual AI provides
                    actionable recruitment analytics, helping recruiters
                    optimize their hiring strategies and improve
                    decision-making.
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
                    <strong>Dependency on Technology:</strong> Hiretual AI
                    relies heavily on automation and AI algorithms, which may
                    overlook nuances in candidate behavior that human recruiters
                    would typically assess.
                  </li>
                  <li className="mb-2">
                    <strong>
                      Potential for Overlooking Passive Candidates:
                    </strong>{" "}
                    While Hiretual AI excels at sourcing active candidates, it
                    may not always engage passive candidates as effectively as
                    traditional methods.
                  </li>
                  <li className="mb-2">
                    <strong>Data Privacy Concerns:</strong> Since Hiretual AI
                    processes large amounts of candidate data, ensuring that
                    sensitive information is handled securely and complies with
                    privacy regulations can be a challenge.
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
      <div className="row align-items-center mb-1 flex-column-reverse flex-md-row">
  {/* Text Section (Now below image on all screens) */}
  <div className="col-md-6 mt-3 mt-md-0">
    <p className="text-primary">Write better, faster</p>
    <h1>Hiretual AI</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      Hiretual AI is a next-generation AI-powered recruitment platform
      that helps organizations optimize their talent acquisition and
      candidate sourcing processes. By utilizing artificial intelligence,
      machine learning, and data-driven algorithms, Hiretual streamlines
      recruitment, allowing businesses to find the best talent faster and
      more efficiently.
    </p>
    <p>
      Unlike traditional recruiting platforms, Hiretual AI offers
      automated sourcing, predictive analytics, and AI-based candidate
      matching, ensuring a data-driven and bias-free recruitment process.
      The platform integrates seamlessly with existing HR tools,
      including Applicant Tracking Systems (ATS), CRM, and HR software,
      making it an essential tool for modern recruiters.
    </p>
    <div className="mb-3">
      <a
        href="https://hireez.com"
        rel="noopener noreferrer"
        className="btn btn-primary me-2"
      >
        Explore Tool
      </a>
    </div>
  </div>

  {/* Image Section (Now above text on all screens) */}
  <div className="col-md-6 text-center">
    <img
      src="public\assets\Img\AI for Recruitment\Ai for recruiment\Hiretual.png"
      alt="Hiretual AI"
      className="img-fluid"
      style={{ height: "300px", objectFit: "cover" }}
    />
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
                How Hiretual AI Works?
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
                      Step 1: AI-Powered Talent Sourcing
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Hiretual gathers candidate data from multiple sources and
                      uses AI-driven deep search algorithms to find the best
                      talent.
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
                      Step 2: Candidate Profiling & Enrichment
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Hiretual creates enriched profiles for candidates,
                      combining social presence, work history, and skill
                      assessments.
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
                      Step 3: Predictive Analytics & Recommendations
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Based on AI analysis, Hiretual generates predictive
                      outcomes regarding candidate suitability and provides
                      valuable hiring insights.
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

export default Hiretual;
