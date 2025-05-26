import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import ver1 from "../../../../public/assets/Img/AI for Recruitment/ver-s1.png";
import ver2 from "../../../../public/assets/Img/AI for Recruitment/ver-s2.png";
import vervoeImg from '../../../../public/assets/Img/AI for Recruitment/Ai for recruiment/VerVoe.png'

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
const VerVoe = () => {
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
              <h3 className="">Features of Vervoe AI </h3>
            </div>
            {[
              {
                icon: "🎯",
                title: "AI-Powered Skill Assessments",
                desc: "Customizes skill assessments based on job requirements, simulating real-world tasks to evaluate candidates objectively.",
              },
              {
                icon: "📊",
                title: "Automated Candidate Ranking",
                desc: "Ranks candidates based on their performance in skill assessments, making it easier to identify top candidates.",
              },
              {
                icon: "🔄",
                title: "Seamless ATS Integration",
                desc: "Integrates with existing Applicant Tracking Systems (ATS) to automate candidate management and improve workflow.",
              },
              {
                icon: "🌐",
                title: "Global Talent Sourcing",
                desc: "Supports sourcing talent from a global pool, ensuring companies have access to diverse candidates from different regions.",
              },
              {
                icon: "📈",
                title: "Data-Driven Recruitment Insights",
                desc: "Provides recruitment analytics that help recruiters make data-driven decisions and optimize hiring strategies.",
              },
              {
                icon: "🧠",
                title: "AI-Powered Candidate Matching",
                desc: "Uses machine learning to match candidates to job roles based on their skills, qualifications, and performance in assessments.",
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
                  q: "What is Vervoe AI?",
                  a: "Vervoe AI is a recruitment platform that uses AI-powered skill assessments to evaluate candidates based on performance rather than resumes.",
                },
                {
                  q: "How does Vervoe AI assess candidates?",
                  a: "Vervoe AI uses customizable skill assessments that simulate real job tasks, allowing recruiters to see how candidates perform in practical scenarios.",
                },
                {
                  q: "Can Vervoe AI replace traditional interviews?",
                  a: "While not a full replacement, Vervoe AI reduces the need for initial interviews by pre-assessing skills and filtering candidates effectively.",
                },
                {
                  q: "Does Vervoe AI offer customizable assessments?",
                  a: "Yes, Vervoe AI provides customizable assessments tailored to specific roles and skills, including technical, soft, and creative skills.",
                },
                {
                  q: "How does Vervoe AI rank candidates?",
                  a: "Vervoe AI uses machine learning to automatically grade assessments and rank candidates based on performance.",
                },
                {
                  q: "What types of skills can Vervoe AI assess?",
                  a: "Vervoe AI can assess a wide range of skills including coding, communication, sales, design, customer service, and more.",
                },
                {
                  q: "Is Vervoe AI suitable for remote hiring?",
                  a: "Yes, Vervoe AI is ideal for remote hiring, enabling virtual assessments that can be completed from anywhere.",
                },
                {
                  q: "Can Vervoe AI help reduce hiring bias?",
                  a: "Yes, Vervoe AI focuses on performance-based evaluation, which helps reduce unconscious bias in the hiring process.",
                },
                {
                  q: "Does Vervoe AI integrate with ATS platforms?",
                  a: "Yes, Vervoe AI integrates with several Applicant Tracking Systems (ATS) to streamline the recruitment workflow.",
                },
                {
                  q: "How are candidates notified about assessments?",
                  a: "Candidates receive email invitations and reminders with links to complete their assessments online.",
                },
                {
                  q: "Is Vervoe AI mobile-friendly?",
                  a: "Yes, Vervoe assessments can be completed on mobile devices, making it convenient for candidates.",
                },
                {
                  q: "What industries use Vervoe AI?",
                  a: "Vervoe AI is used across industries such as tech, retail, customer service, finance, education, and healthcare.",
                },
                {
                  q: "Can I view assessment results in real time?",
                  a: "Yes, recruiters can access real-time performance analytics and rankings within the platform.",
                },
                {
                  q: "How secure is the candidate data in Vervoe AI?",
                  a: "Vervoe AI follows industry-standard security practices, including data encryption and secure access controls.",
                },
                {
                  q: "Does Vervoe AI support bulk candidate assessments?",
                  a: "Yes, you can invite and assess multiple candidates at once using Vervoe’s bulk upload and invitation tools.",
                },
                {
                  q: "Is there a free trial for Vervoe AI?",
                  a: "Yes, Vervoe offers a free trial for companies to explore its features and create test assessments.",
                },
                {
                  q: "Can candidates retake assessments?",
                  a: "By default, candidates get one attempt, but recruiters can manually allow retakes if needed.",
                },
                {
                  q: "What formats are supported in assessments?",
                  a: "Assessments can include multiple-choice, video responses, file uploads, coding exercises, and open text.",
                },
                {
                  q: "How long do Vervoe assessments take?",
                  a: "Assessment length varies but typically ranges from 15 to 60 minutes, depending on role complexity.",
                },
                {
                  q: "Can I brand the assessments with my company logo?",
                  a: "Yes, Vervoe allows custom branding with logos, colors, and messaging to reflect your employer brand.",
                },
                {
                  q: "Is Vervoe AI suitable for high-volume hiring?",
                  a: "Yes, Vervoe is designed to efficiently assess and rank thousands of candidates for large-scale hiring.",
                },
                {
                  q: "Can I collaborate with team members on candidate evaluations?",
                  a: "Yes, hiring teams can leave feedback, share results, and collaborate on candidate decisions in Vervoe.",
                },
                {
                  q: "How is AI used in grading assessments?",
                  a: "Vervoe’s AI uses natural language processing and pattern recognition to score open-ended and video responses.",
                },
                {
                  q: "Does Vervoe support multi-language assessments?",
                  a: "Yes, assessments can be created in multiple languages to accommodate global hiring needs.",
                },
                {
                  q: "How does Vervoe help improve candidate experience?",
                  a: "Vervoe provides engaging, job-relevant assessments that give candidates a chance to showcase their skills fairly.",
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
                src={ver1}
                alt="vervoe"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={ver2}
                alt="vervoe"
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
                    Why Use Vervoe AI?
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
                      <strong>Skill-Based Candidate Evaluation:</strong> Vervoe
                      AI evaluates candidates based on how well they perform
                      job-specific tasks rather than relying solely on resumes
                      or experience.
                    </li>
                    <li className="mb-3">
                      <strong>Automated Grading and Ranking:</strong> Vervoe’s
                      AI automatically grades assessments and ranks candidates
                      by performance, saving recruiters time and effort.
                    </li>
                    <li className="mb-3">
                      <strong>Customized Assessments:</strong> Employers can
                      create role-specific assessments that reflect the
                      real-world challenges candidates will face on the job.
                    </li>
                    <li className="mb-3">
                      <strong>Bias-Free Hiring:</strong> By focusing on actual
                      skills demonstrated during assessments, Vervoe helps
                      reduce hiring bias and promote fair evaluation.
                    </li>
                    <li className="mb-3">
                      <strong>Improved Candidate Experience:</strong> Vervoe
                      offers engaging and interactive assessments that let
                      candidates showcase their talents in a meaningful way.
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
                    <strong>Skill-Based Hiring:</strong> Vervoe evaluates
                    candidates based on real-world skills instead of resumes,
                    leading to more accurate hiring decisions.
                  </li>
                  <li className="mb-3">
                    <strong>Bias Reduction:</strong> AI-based grading minimizes
                    unconscious bias by focusing on objective performance
                    metrics.
                  </li>
                  <li className="mb-3">
                    <strong>Customizable Assessments:</strong> Employers can
                    create tailored assessments for different roles, improving
                    relevance and effectiveness.
                  </li>
                  <li className="mb-3">
                    <strong>Automated Grading:</strong> Vervoe’s AI saves time
                    by instantly grading candidate responses and ranking them
                    accordingly.
                  </li>
                  <li className="mb-3">
                    <strong>Enhanced Candidate Experience:</strong> The platform
                    provides an interactive and engaging process that allows
                    candidates to showcase their talents.
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
                    <strong>Limited Human Interaction:</strong> The automated
                    assessment process may reduce opportunities for personal
                    interaction between recruiters and candidates early in the
                    hiring process.
                  </li>
                  <li className="mb-3">
                    <strong>Assessment Fatigue:</strong> Candidates may find
                    lengthy or complex assessments time-consuming, leading to
                    potential drop-offs or frustration.
                  </li>
                  <li className="mb-3">
                    <strong>AI Grading Challenges:</strong> Automated scoring
                    may misinterpret creative or unconventional answers that a
                    human reviewer might appreciate.
                  </li>
                  <li className="mb-3">
                    <strong>Customization Requires Effort:</strong> While the
                    platform allows high customization, creating and fine-tuning
                    tailored assessments can be resource-intensive for
                    recruiters.
                  </li>
                  <li className="mb-3">
                    <strong>Dependence on Technical Infrastructure:</strong> Any
                    system glitches or technical issues can impact the accuracy
                    of results and disrupt candidate evaluations.
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
   <div className="container mb-4">
  <div className="row flex-column-reverse flex-md-row align-items-center">
    {/* Text Column - Left on Desktop, Bottom on Mobile */}
    <div className="col-md-6 mt-3 mt-md-0">
      <p className="text-primary">Write better, faster</p>
      <h1>Vervoe AI</h1>
      <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
      <p>
        Vervoe AI is an AI-powered recruitment platform designed to help
        organizations streamline their talent acquisition and hiring
        processes. It leverages machine learning algorithms, deep learning,
        and predictive analytics to automate the recruitment process from
        candidate sourcing to job matching, ensuring a smarter, faster, and
        more efficient hiring experience.
      </p>
      <p>
        The platform enables businesses to source, engage, and assess
        candidates without bias, based on their skills and competency,
        rather than traditional resumes and qualifications. By focusing on
        skills-based hiring, Vervoe ensures that organizations can make
        better hiring decisions while improving candidate experience.
      </p>
      <div className="mb-3">
        <a
          href="https://vervoe.com/"
          rel="noopener noreferrer"
          className="btn btn-primary me-2"
        >
          Explore Tool
        </a>
      </div>
    </div>

    {/* Image Column - Right on Desktop, Top on Mobile */}
     <div className="col-lg-6 col-md-12 order-lg-2 order-1">
        <div className="ratio ratio-16x9">
          <img
            src={vervoeImg}
            className="img-fluid rounded-3 object-fit-cover"
            alt="vervoe"
            loading="lazy"
          />
        </div>
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
                How Vervoe AI Works?
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
        .vervoe1 {
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
                      Step 1: AI-Powered Skill Assessments
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Vervoe AI evaluates candidates through customized skill
                      assessments based on job requirements, simulating
                      real-world tasks and providing an objective analysis of
                      their skills.
                    </p>
                    <div className="vervoe1">1</div>
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
        .vervoe2 {
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
                      Step 2: Automated Candidate Ranking
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Vervoe AI ranks candidates based on their performance in
                      the assessments, automating the selection process by
                      prioritizing candidates who demonstrate the best skills
                      and potential.
                    </p>
                    <div className="vervoe2">2</div>
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
        .vervoe3 {
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
                      Step 3: Seamless Integration with ATS
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Vervoe AI integrates with existing Applicant Tracking
                      Systems (ATS), streamlining candidate management, and
                      automating the flow of data, ensuring a smooth recruitment
                      process.
                    </p>
                    <div className="vervoe3">3</div>
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

export default VerVoe;
