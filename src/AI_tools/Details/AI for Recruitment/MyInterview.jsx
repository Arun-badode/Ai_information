import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import MyInterview from "../../../../public/assets/Img/AI for Recruitment/Ai for recruiment/MyInterview.png";
import myin1 from "../../../../public/assets/Img/AI for Recruitment/myin-s1.png";
import myin2 from "../../../../public/assets/Img/AI for Recruitment/myin-s2.png";

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
const MyInterView = () => {
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
              <h3 className="">Features of MyInterview AI </h3>
            </div>
            {[
              {
                icon: "🎥",
                title: "Video Interviewing",
                desc: "Enables candidates to record video responses to pre-set interview questions, giving recruiters insights into personality and communication skills.",
              },
              {
                icon: "🧠",
                title: "AI-Powered Candidate Analysis",
                desc: "Analyzes tone of voice, facial expressions, and keywords to assess candidate traits like confidence, enthusiasm, and cultural fit.",
              },
              {
                icon: "⚙️",
                title: "Automated Shortlisting",
                desc: "Automatically ranks and shortlists candidates based on AI evaluation, helping recruiters focus on top talent faster.",
              },
              {
                icon: "🤝",
                title: "Collaborative Review Tools",
                desc: "Allows hiring teams to review, comment, and share candidate interviews easily, improving decision-making and team alignment.",
              },
              {
                icon: "📲",
                title: "Mobile-Friendly Experience",
                desc: "Provides a seamless interview experience for candidates across devices, increasing participation and accessibility.",
              },
              {
                icon: "🔐",
                title: "GDPR & Data Security Compliance",
                desc: "Ensures candidate data is stored securely and in compliance with global privacy regulations like GDPR.",
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
                  q: "When can I start my interview? Is there a deadline?",
                  a: "You can start your interview anytime before the given deadline. Be sure to complete it before the time runs out.",
                },
                {
                  q: "Do I need a camera and microphone for this interview?",
                  a: "Yes, a working camera and microphone are required to complete your video interview.",
                },
                {
                  q: "How long is my interview going to be?",
                  a: "It depends on the number of questions set by the employer, but most interviews take between 10 to 30 minutes.",
                },
                {
                  q: "Can I see the questions beforehand?",
                  a: "No, questions are revealed one at a time during the interview to simulate a real-time interview environment.",
                },
                {
                  q: "Can I redo my video answers?",
                  a: "Some employers allow retakes, while others limit responses to one attempt. Check your interview instructions for details.",
                },
                {
                  q: "Is MyInterview AI mobile-friendly?",
                  a: "Yes, you can complete your interview on a mobile device using a browser with camera and microphone access.",
                },
                {
                  q: "What internet speed is recommended?",
                  a: "A stable internet connection with at least 1 Mbps upload speed is recommended for smooth video uploads.",
                },
                {
                  q: "Is there a practice question before the real interview?",
                  a: "Yes, most interviews include a practice question to help you test your camera, microphone, and get comfortable.",
                },
                {
                  q: "How secure is my video data?",
                  a: "MyInterview uses encryption and strict access controls to ensure the security of your interview data.",
                },
                {
                  q: "What happens after I submit my interview?",
                  a: "Your responses are sent to the employer for review. They will contact you regarding the next steps.",
                },
                {
                  q: "Can I do the interview in a different language?",
                  a: "Some interviews support multiple languages, but this depends on the employer's settings.",
                },
                {
                  q: "Do I need to download any software?",
                  a: "No downloads are needed. MyInterview works entirely in your web browser.",
                },
                {
                  q: "Can I pause the interview and come back later?",
                  a: "Once you begin the actual interview, you typically cannot pause. Finish in one sitting unless otherwise stated.",
                },
                {
                  q: "Can I contact support if something goes wrong?",
                  a: "Yes, MyInterview provides technical support if you encounter issues during the interview.",
                },
                {
                  q: "Will my interview be reviewed by AI or a human?",
                  a: "MyInterview uses AI to assist in ranking and evaluating answers, but final decisions are made by human recruiters.",
                },
                {
                  q: "What types of questions should I expect?",
                  a: "Questions may cover behavioral scenarios, skills-based prompts, or motivations for the role you're applying to.",
                },
                {
                  q: "Is my interview time-limited per question?",
                  a: "Yes, each question typically has a time limit for preparation and recording, set by the employer.",
                },
                {
                  q: "Can I reapply or retake the interview later?",
                  a: "That depends on the employer’s policy. Some allow retakes, while others only accept one submission.",
                },
                {
                  q: "What devices are supported?",
                  a: "MyInterview supports desktops, laptops, and mobile devices with modern browsers like Chrome, Safari, or Firefox.",
                },
                {
                  q: "Will I receive confirmation after submitting my interview?",
                  a: "Yes, you’ll receive a confirmation message or email once your interview is successfully submitted.",
                },
                {
                  q: "What if my video or audio doesn't upload?",
                  a: "Try refreshing the page or switching browsers. If problems persist, contact MyInterview support for help.",
                },
                {
                  q: "Can I wear headphones during the interview?",
                  a: "Yes, using headphones can improve audio quality and reduce background noise.",
                },
                {
                  q: "How do I prepare for the video interview?",
                  a: "Find a quiet space, dress appropriately, test your equipment, and be ready to speak clearly and confidently.",
                },
                {
                  q: "Is MyInterview AI used for all job types?",
                  a: "Yes, it's used across industries including tech, retail, customer service, healthcare, and more.",
                },
                {
                  q: "Can I share my interview with others?",
                  a: "Your video interview is private and intended only for the employer. Sharing is not recommended.",
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
                src={myin1}
                alt="my interview"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={myin2}
                alt="my interview"
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
                    Why Use MyInterview AI?
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
                      <strong>Pre-Screening Candidates Efficiently:</strong>{" "}
                      MyInterview AI automates the initial screening through
                      one-way video interviews, helping recruiters identify top
                      candidates faster.
                    </li>
                    <li className="mb-3">
                      <strong>Enhancing Candidate Experience:</strong>{" "}
                      Candidates can complete interviews anytime using their
                      devices, making the process more flexible and accessible.
                    </li>
                    <li className="mb-3">
                      <strong>Reducing Hiring Bias:</strong> Standardized
                      questions and AI-assisted reviews help ensure fair and
                      objective evaluations.
                    </li>
                    <li className="mb-3">
                      <strong>Remote Recruitment:</strong> Enables recruiters to
                      evaluate global candidates without the need for in-person
                      interviews.
                    </li>
                    <li className="mb-3">
                      <strong>Collaborative Hiring Decisions:</strong> Teams can
                      comment on, rate, and share video responses, streamlining
                      the decision-making process.
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
                    <strong>Efficient Pre-Screening:</strong> MyInterview AI
                    automates the initial candidate screening process with video
                    interviews, saving time for recruiters.
                  </li>
                  <li className="mb-3">
                    <strong>Improved Candidate Engagement:</strong> Offers
                    candidates the flexibility to complete interviews at their
                    own convenience.
                  </li>
                  <li className="mb-3">
                    <strong>Reduces Bias:</strong> Standardized AI assessments
                    ensure that evaluations are based on objective data rather
                    than subjective impressions.
                  </li>
                  <li className="mb-3">
                    <strong>Remote-Friendly:</strong> Enables recruiters to
                    interview global talent without the need for in-person
                    meetings.
                  </li>
                  <li className="mb-3">
                    <strong>Collaborative Decision Making:</strong> Teams can
                    review and discuss video responses collectively,
                    streamlining the hiring process.
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
  {/* Left side (Text Section) */}
  <div className="col-md-6 col-12" style={{ paddingRight: "30px" }}>
    <p className="text-primary">Write better, faster</p>
    <h1>MyInterview AI</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      "Revolutionize your hiring process with MyInterview AI—empowering businesses to hire faster, smarter, and without bias!"
    </p>
    <p>
      MyInterview AI is an AI-powered video interview platform designed to simplify and optimize the recruitment process. It enables companies to automate their entire interview process, from candidate sourcing to screening and evaluation. By utilizing artificial intelligence, machine learning, and predictive analytics, MyInterview AI allows businesses to quickly assess candidates' skills and fit for the role, without the need for manual intervention.
    </p>
    <div className="mb-3">
      <a
        href="https://www.myinterview.com"
        rel="noopener noreferrer"
        className="btn btn-primary me-2"
        target="_blank"
      >
        Explore Tool
      </a>
    </div>
  </div>

  {/* Right side (Image Section) */}
  <div className="col-md-6 col-12 mb-4 text-center">
    <img
      src={MyInterview}
      alt="MyInterview AI"
      style={{ maxWidth: "100%", height: "300px", objectFit: "contain" }}
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
                How MyInterview AI Works?
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
          .myinterview1 {
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
                      Step 1: Video Interview Invitations
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Candidates receive invitations to record video responses
                      to pre-defined questions, enabling recruiters to assess
                      soft skills and communication style early in the hiring
                      process.
                    </p>
                    <div className="myinterview1">1</div>
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
          .myinterview2 {
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
                      Step 2: AI-Powered Candidate Analysis
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      MyInterview’s AI analyzes facial expressions, speech
                      patterns, and keywords to assess candidate personality
                      traits and fit for the role.
                    </p>
                    <div className="myinterview2">2</div>
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
          .myinterview3 {
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
                      Step 3: Shortlisting & Collaboration
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Recruiters can easily review, score, and share candidate
                      interviews with their teams, speeding up hiring decisions
                      with better collaboration and transparency.
                    </p>
                    <div className="myinterview3">3</div>
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

export default MyInterView;
