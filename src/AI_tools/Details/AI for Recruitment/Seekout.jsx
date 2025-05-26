import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import seek1 from "../../../../public/assets/Img/AI for Recruitment/seek-s1.png";
import seek2 from "../../../../public/assets/Img/AI for Recruitment/seek-s2.png";

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
const Seekout = () => {
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
              <h3 className="">Features of SeekOut AI </h3>
            </div>
            {[
              {
                icon: "🌐",
                title: "SeekOut Talent Search",
                desc: "Leverages deep search technology to uncover diverse talent from a wide array of online sources, including LinkedIn, GitHub, and niche databases.",
              },
              {
                icon: "📊",
                title: "SeekOut Candidate Profiling",
                desc: "Aggregates rich profiles from multiple channels, providing a comprehensive view of candidates' experience, skills, and interests.",
              },
              {
                icon: "🤖",
                title: "AI-Powered Recommendations",
                desc: "Uses AI algorithms to recommend the best candidates for specific roles based on their skills, experience, and cultural fit.",
              },
              {
                icon: "💬",
                title: "Automated Outreach",
                desc: "Automatically sends personalized outreach messages to engage both active and passive candidates.",
              },
              {
                icon: "🎯",
                title: "Diversity Sourcing",
                desc: "Enables diversity-focused recruitment by identifying and engaging underrepresented groups with advanced filtering options.",
              },
              {
                icon: "📈",
                title: "Talent Pool Analytics",
                desc: "Provides in-depth analytics on candidate pipelines, talent availability, and market trends to optimize recruitment strategies.",
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
                  q: "What is SeekOut AI?",
                  a: "SeekOut AI is a talent sourcing and recruiting platform that uses artificial intelligence to help companies find, engage, and hire top talent through deep search technology and data-driven insights.",
                },
                {
                  q: "How does SeekOut AI help with recruitment?",
                  a: "SeekOut AI simplifies recruitment by automating talent sourcing, candidate engagement, and outreach, utilizing AI algorithms to identify the best-fit candidates for open positions.",
                },
                {
                  q: "What features does SeekOut AI offer?",
                  a: "SeekOut AI offers features such as deep talent search, candidate profiling, diversity hiring, predictive analytics, and outreach automation to improve hiring processes.",
                },
                {
                  q: "Can SeekOut AI help find passive candidates?",
                  a: "Yes, SeekOut AI is specifically designed to identify passive candidates by searching social networks, public databases, and other platforms where candidates may not be actively job hunting.",
                },
                {
                  q: "Does SeekOut AI integrate with applicant tracking systems (ATS)?",
                  a: "Yes, SeekOut AI integrates with various ATS platforms, enabling seamless workflow and candidate management.",
                },
                {
                  q: "How accurate are SeekOut AI's candidate recommendations?",
                  a: "SeekOut AI's recommendations are highly accurate, as it leverages AI and machine learning to analyze candidate profiles and match them with job requirements.",
                },
                {
                  q: "Can SeekOut AI help with diversity hiring?",
                  a: "Yes, SeekOut AI supports diversity hiring by helping companies find and engage underrepresented groups using advanced filtering and diversity-focused search capabilities.",
                },
                {
                  q: "Can SeekOut AI automate candidate outreach?",
                  a: "Yes, SeekOut AI can automate candidate outreach, sending personalized messages and follow-ups to candidates, enhancing engagement and saving time for recruiters.",
                },
                {
                  q: "What kind of candidate data does SeekOut AI analyze?",
                  a: "SeekOut AI analyzes data such as resumes, work experience, professional profiles, skills, social media activity, and geographic preferences to build comprehensive candidate profiles.",
                },
                {
                  q: "How does SeekOut AI support diversity hiring?",
                  a: "SeekOut AI offers tools to help companies identify and engage diverse talent, ensuring inclusivity throughout the recruitment process.",
                },
                {
                  q: "Does SeekOut AI have a mobile app?",
                  a: "Yes, SeekOut AI provides mobile support so recruiters can access talent profiles, engage with candidates, and make decisions from anywhere.",
                },
                {
                  q: "How does SeekOut AI's deep search work?",
                  a: "SeekOut AI uses advanced search algorithms that scan multiple platforms, including social media and public databases, to identify talent across different industries.",
                },
                {
                  q: "Can SeekOut AI be used for candidate re-engagement?",
                  a: "Yes, SeekOut AI helps recruiters re-engage with past candidates, reminding them of new opportunities and prompting them to apply for roles that may be a better fit.",
                },
                {
                  q: "How does SeekOut AI help improve candidate experience?",
                  a: "SeekOut AI enhances the candidate experience by providing personalized communication and an intuitive platform for candidate engagement.",
                },
                {
                  q: "How does SeekOut AI assist with team collaboration?",
                  a: "SeekOut AI facilitates team collaboration by enabling easy sharing of candidate profiles, engagement histories, and recruitment insights to keep teams aligned.",
                },
                {
                  q: "Can SeekOut AI improve recruitment efficiency?",
                  a: "Yes, SeekOut AI boosts recruitment efficiency by automating candidate sourcing, engagement, and follow-up processes, which saves recruiters time and reduces manual efforts.",
                },
                {
                  q: "Does SeekOut AI use machine learning?",
                  a: "Yes, SeekOut AI uses machine learning to enhance its search algorithms and continually improve its ability to match candidates with the right roles.",
                },
                {
                  q: "How customizable is SeekOut AI?",
                  a: "SeekOut AI is highly customizable, allowing recruiters to adjust search criteria, messaging templates, and outreach strategies to suit the company's specific hiring needs.",
                },
                {
                  q: "Can SeekOut AI track candidate engagement?",
                  a: "Yes, SeekOut AI tracks candidate engagement, including response rates and interactions, helping recruiters gauge candidate interest and tailor their outreach strategies.",
                },
                {
                  q: "Can SeekOut AI assist with job-specific qualifications?",
                  a: "Yes, SeekOut AI helps match candidates with job-specific qualifications by analyzing resumes, skills, and work experience to identify top candidates.",
                },
                {
                  q: "How secure is SeekOut AI?",
                  a: "SeekOut AI ensures data security and privacy by adhering to industry standards and regulations, with encryption and secure access protocols to protect candidate data.",
                },
                {
                  q: "How does SeekOut AI support remote recruitment?",
                  a: "SeekOut AI supports remote recruitment by enabling recruiters to engage with candidates across the globe through integrated communication tools and automated outreach.",
                },
                {
                  q: "Does SeekOut AI help with employer branding?",
                  a: "Yes, SeekOut AI assists with employer branding by ensuring recruiters provide a consistent, engaging candidate experience through automated communication and personalized outreach.",
                },
                {
                  q: "What industries benefit from using SeekOut AI?",
                  a: "SeekOut AI benefits industries such as technology, healthcare, finance, education, and more by helping companies identify top talent across a range of sectors.",
                },
                {
                  q: "Can SeekOut AI support global recruitment?",
                  a: "Yes, SeekOut AI can help recruiters with global recruitment by analyzing candidate data from international sources and platforms, allowing for worldwide talent searches.",
                },
                {
                  q: "Does SeekOut AI integrate with other HR tools?",
                  a: "Yes, SeekOut AI integrates with various HR tools, including ATS, CRMs, and other talent management systems to ensure a smooth, connected recruiting process.",
                },
                {
                  q: "How does SeekOut AI assist with interview scheduling?",
                  a: "SeekOut AI does not directly schedule interviews but offers tools to streamline the interview scheduling process through automated reminders and communication with candidates.",
                },
                {
                  q: "Can SeekOut AI help with screening candidates?",
                  a: "Yes, SeekOut AI can help screen candidates by assessing resumes, skills, and work experience, ensuring only the most qualified candidates are selected.",
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
                src={seek1}
                alt="seekOut"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={seek2}
                alt="seekOut"
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
                    Why Use SeekOut AI?
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
                      <strong>Deep Talent Search:</strong> SeekOut AI uses
                      advanced algorithms to search multiple platforms,
                      including social media, job boards, and professional
                      networks, to find top talent across various industries.
                    </li>
                    <li className="mb-3">
                      <strong>Passive Candidate Sourcing:</strong> SeekOut AI
                      targets passive candidates by identifying individuals who
                      aren't actively seeking jobs but are a good fit based on
                      their skills and experience.
                    </li>
                    <li className="mb-3">
                      <strong>Diversity and Inclusion Hiring:</strong> SeekOut
                      AI promotes diversity by helping companies discover and
                      engage underrepresented talent, creating more inclusive
                      candidate pipelines.
                    </li>
                    <li className="mb-3">
                      <strong>AI-Powered Candidate Matching:</strong> SeekOut AI
                      uses machine learning to match candidates with job
                      openings by analyzing their skills, qualifications, and
                      work experience to find the best fits.
                    </li>
                    <li className="mb-3">
                      <strong>Automated Candidate Outreach:</strong> SeekOut AI
                      automates personalized outreach to candidates through
                      emails and messages, allowing recruiters to engage with
                      talent more efficiently.
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
                    <strong>Faster Talent Search:</strong> SeekOut AI
                    streamlines the talent search process by scanning a wide
                    range of platforms, ensuring that recruiters can find
                    high-quality candidates quickly.
                  </li>
                  <li className="mb-2">
                    <strong>Advanced Candidate Matching:</strong> SeekOut AI
                    uses AI-driven algorithms to accurately match candidates to
                    open roles, improving the chances of finding the best fit
                    based on skills, experience, and qualifications.
                  </li>
                  <li className="mb-2">
                    <strong>Comprehensive Diversity Hiring:</strong> SeekOut AI
                    helps improve diversity and inclusion efforts by discovering
                    underrepresented talent, creating a more diverse pipeline
                    and reducing bias in the hiring process.
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
                    <strong>Dependency on AI Algorithms:</strong> SeekOut AI
                    heavily relies on machine learning and AI-driven algorithms,
                    which may miss subtle, human-centric qualities like cultural
                    fit or emotional intelligence that traditional recruitment
                    methods would catch.
                  </li>
                  <li className="mb-2">
                    <strong>Risk of Bias in AI:</strong> While SeekOut AI aims
                    to reduce bias, its algorithms can still unintentionally
                    perpetuate biases if not properly calibrated, leading to
                    potentially skewed candidate selections.
                  </li>
                  <li className="mb-2">
                    <strong>Overlooking Passive Talent:</strong> SeekOut AI
                    focuses heavily on active candidates and may struggle to
                    fully engage with passive talent who aren't actively seeking
                    new opportunities but could be a perfect fit.
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
  {/* Text Section (Left on desktop, bottom on mobile) */}
  <div className="col-md-6 mt-3 mt-md-0">
    <p className="text-primary">Write better, faster</p>
    <h1>SeekOut AI</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      SeekOut AI is a powerful AI-powered recruitment platform that helps
      organizations optimize their talent sourcing, candidate engagement, and
      hiring processes. Designed for both small businesses and large enterprises,
      SeekOut leverages artificial intelligence and machine learning to automate
      the recruitment process, enhance candidate discovery, and improve candidate
      matching.
    </p>
    <p>
      Unlike traditional recruiting methods, SeekOut AI uses advanced algorithms
      and predictive analytics to identify the best candidates across multiple
      platforms and engage with them in a personalized way. The platform can
      source passive candidates, search diverse talent pools, and integrate
      seamlessly with your existing ATS and CRM systems, making it an end-to-end
      solution for modern recruitment.
    </p>
    <div className="mb-3">
      <a
        href="https://www.seekout.com/"
        rel="noopener noreferrer"
        className="btn btn-primary me-2"
        target="_blank"
      >
        Explore Tool
      </a>
    </div>
  </div>

  {/* Image Section (Right on desktop, top on mobile) */}
 <div className="col-12 col-md-6 d-flex justify-content-center align-items-center text-center mb-3 mb-md-0">
  <img
    src="/assets/Img/AI for Recruitment/Ai for recruiment/Seekout.png"
    alt="SeekOut AI"
    className="img-fluid rounded-3"
    style={{ maxHeight: "300px", objectFit: "cover" }}
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
                How SeekOut AI Works?
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
                      Step 1: AI-Driven Talent Discovery
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      SeekOut AI utilizes advanced algorithms to scan a vast
                      pool of online sources, including LinkedIn, job boards,
                      and other databases, to uncover potential candidates who
                      meet specific hiring needs.
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
                      Step 2: Candidate Profiling & Insights
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      SeekOut AI enhances candidate profiles by aggregating data
                      from multiple channels, offering a comprehensive view of
                      skills, professional experiences, and contributions.
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
                      Step 3: Engaging Passive Candidates
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      SeekOut allows for proactive outreach to passive
                      candidates using personalized, automated messages to build
                      relationships and keep top talent engaged for future
                      opportunities.
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

export default Seekout;
