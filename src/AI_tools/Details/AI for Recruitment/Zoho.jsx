import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";

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
const Zoho = () => {
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
              <h3 className="">Features of Zoho Recruit AI </h3>
            </div>
            {[
              {
                icon: "🧑‍💻",
                title: "AI-Powered Resume Screening",
                desc: "Zoho Recruit uses AI to automatically scan and rank resumes based on job requirements, helping recruiters identify the best candidates faster.",
              },
              {
                icon: "📅",
                title: "Automated Interview Scheduling",
                desc: "AI automatically schedules interviews by analyzing candidate and interviewer availability, reducing administrative work for recruiters.",
              },
              {
                icon: "🌎",
                title: "Global Talent Sourcing",
                desc: "Supports sourcing candidates from multiple job boards, social media platforms, and internal databases, giving recruiters access to a global talent pool.",
              },
              {
                icon: "📊",
                title: "Customizable Recruiting Pipeline",
                desc: "Zoho Recruit allows recruiters to create customized recruiting workflows and pipelines to streamline the hiring process based on unique business needs.",
              },
              {
                icon: "📱",
                title: "Mobile Recruiting",
                desc: "Offers mobile compatibility, allowing recruiters to manage candidate applications, schedule interviews, and communicate with candidates directly from their mobile devices.",
              },
              {
                icon: "🔒",
                title: "Data Security & Compliance",
                desc: "Ensures the security of candidate data and compliance with regulations like GDPR, keeping sensitive information safe and private.",
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
                  q: "What is Zoho Recruit AI?",
                  a: "Zoho Recruit AI is an intelligent recruitment automation tool that leverages artificial intelligence to streamline the hiring process by automating resume screening, candidate ranking, interview scheduling, and more.",
                },
                {
                  q: "How does Zoho Recruit AI screen resumes?",
                  a: "Zoho Recruit AI uses machine learning algorithms to scan resumes, compare them with job requirements, and automatically rank candidates based on their qualifications, skills, and experience.",
                },
                {
                  q: "Can Zoho Recruit AI help with candidate shortlisting?",
                  a: "Yes, Zoho Recruit AI automates candidate shortlisting by analyzing resumes and matching candidates' profiles with job descriptions, reducing the time recruiters spend manually reviewing applications.",
                },
                {
                  q: "Is Zoho Recruit AI capable of scheduling interviews?",
                  a: "Yes, Zoho Recruit AI automates interview scheduling by syncing candidate and interviewer availability, sending reminders, and even rescheduling if needed.",
                },
                {
                  q: "How does Zoho Recruit AI help with job posting?",
                  a: "Zoho Recruit AI suggests the best platforms for posting job openings based on your hiring requirements and targets the right candidate pool.",
                },
                {
                  q: "Does Zoho Recruit AI analyze candidate communications?",
                  a: "Yes, Zoho Recruit AI analyzes candidates' emails and messages, helping recruiters evaluate communication skills and response time.",
                },
                {
                  q: "Can Zoho Recruit AI assess candidate personality?",
                  a: "Zoho Recruit AI can assess personality traits using behavioral assessments and psychometric tests to understand how candidates might fit within a company’s culture.",
                },
                {
                  q: "How does Zoho Recruit AI rank candidates?",
                  a: "Zoho Recruit AI ranks candidates based on their skills, qualifications, and performance during assessments, providing recruiters with a shortlist of top candidates.",
                },
                {
                  q: "Is Zoho Recruit AI capable of handling multiple job positions?",
                  a: "Yes, Zoho Recruit AI can handle recruitment for multiple job positions simultaneously, ensuring that all roles are filled efficiently and effectively.",
                },
                {
                  q: "Can I customize the AI-driven features in Zoho Recruit?",
                  a: "Yes, Zoho Recruit AI allows recruiters to customize features such as screening criteria, assessments, and interview questions to suit the specific needs of the job.",
                },
                {
                  q: "How does Zoho Recruit AI reduce bias in hiring?",
                  a: "Zoho Recruit AI focuses on objective data like skills and qualifications, helping reduce unconscious bias in hiring decisions by not factoring in personal characteristics like gender or age.",
                },
                {
                  q: "Can Zoho Recruit AI be integrated with other tools?",
                  a: "Yes, Zoho Recruit AI integrates seamlessly with other Zoho applications and third-party tools such as Google Calendar, Microsoft Outlook, and job boards like Indeed and LinkedIn.",
                },
                {
                  q: "Is Zoho Recruit AI easy to use?",
                  a: "Yes, Zoho Recruit AI is designed to be user-friendly with an intuitive interface, allowing recruiters to easily navigate and utilize its features without extensive training.",
                },
                {
                  q: "How secure is the data in Zoho Recruit AI?",
                  a: "Zoho Recruit AI ensures that all data is securely stored with encryption and complies with global data protection regulations such as GDPR to protect candidate and company information.",
                },
                {
                  q: "What kind of reports can Zoho Recruit AI generate?",
                  a: "Zoho Recruit AI generates insightful reports that cover recruitment analytics, candidate sourcing, interview performance, and time-to-hire metrics to help recruiters optimize the hiring process.",
                },
                {
                  q: "Does Zoho Recruit AI provide candidate engagement features?",
                  a: "Yes, Zoho Recruit AI provides automated follow-ups, interview reminders, and feedback requests, ensuring consistent and timely communication with candidates throughout the hiring process.",
                },
                {
                  q: "Can Zoho Recruit AI predict the best candidates for a job?",
                  a: "Yes, Zoho Recruit AI uses predictive analytics to evaluate a candidate's potential for success in a role based on their qualifications, experience, and fit with the job requirements.",
                },
                {
                  q: "Can Zoho Recruit AI handle interview scheduling?",
                  a: "Yes, Zoho Recruit AI can automatically schedule interviews by coordinating with the interviewers' calendars and sending candidates the interview details.",
                },
                {
                  q: "Does Zoho Recruit AI support video interviews?",
                  a: "Yes, Zoho Recruit AI integrates with video interview platforms, enabling recruiters to conduct remote interviews seamlessly.",
                },
                {
                  q: "Is Zoho Recruit AI suitable for small businesses?",
                  a: "Yes, Zoho Recruit AI is scalable and can be used by small businesses to streamline their hiring process, reduce time-to-hire, and ensure more accurate candidate selection.",
                },
                {
                  q: "How does Zoho Recruit AI help improve candidate experience?",
                  a: "Zoho Recruit AI enhances the candidate experience by providing fast, transparent, and consistent communication, automated updates, and a more efficient application process.",
                },
                {
                  q: "Can Zoho Recruit AI automate candidate communication?",
                  a: "Yes, Zoho Recruit AI automates candidate communication through email and SMS notifications for interview invitations, reminders, and application status updates.",
                },
                {
                  q: "Can Zoho Recruit AI track applicant progress?",
                  a: "Yes, Zoho Recruit AI tracks candidates' progress throughout the recruitment process, from application submission to final hiring decision, and keeps recruiters updated in real-time.",
                },
                {
                  q: "Does Zoho Recruit AI support collaboration among recruitment teams?",
                  a: "Yes, Zoho Recruit AI facilitates team collaboration by allowing recruiters to share notes, comments, and ratings on candidates and review interview performance together.",
                },
                {
                  q: "How does Zoho Recruit AI help with talent pooling?",
                  a: "Zoho Recruit AI helps build and manage a talent pool by identifying and categorizing candidates based on their skills and experience, making it easier to source for future openings.",
                },
                {
                  q: "What is the pricing model for Zoho Recruit AI?",
                  a: "Zoho Recruit AI operates on a subscription-based pricing model, with various plans that cater to small businesses, mid-sized companies, and large enterprises.",
                },
                {
                  q: "Can Zoho Recruit AI integrate with applicant tracking systems (ATS)?",
                  a: "Yes, Zoho Recruit AI integrates with various ATS platforms, enabling seamless data transfer and improving recruitment workflow efficiency.",
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
                src="https://www.testingcatalog.com/content/images/size/w2000/2024/06/screenshot-app.runwayml.com-2024.06.24-00_36_32--1-.png"
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src="https://www.techspot.com/articles-info/2720/images/2023-08-17-image.jpg"
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
                    Why Use Zoho Recruit AI?
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
                      <strong>Automated Resume Screening:</strong> Zoho Recruit
                      AI automatically scans resumes and ranks candidates based
                      on skills, experience, and qualifications, reducing manual
                      screening time.
                    </li>
                    <li className="mb-3">
                      <strong>AI-Powered Candidate Ranking:</strong> The AI
                      system ranks candidates by matching their profiles to job
                      requirements, helping recruiters focus on top talent
                      quickly.
                    </li>
                    <li className="mb-3">
                      <strong>Behavioral Assessment:</strong> Zoho Recruit AI
                      helps assess a candidate's behavioral traits and cultural
                      fit through pre-screening questionnaires and AI-based
                      analysis.
                    </li>
                    <li className="mb-3">
                      <strong>Interview Scheduling Automation:</strong> Zoho
                      Recruit AI automates interview scheduling by syncing
                      calendars and sending invitations, saving time for
                      recruiters.
                    </li>
                    <li className="mb-3">
                      <strong>Collaborative Recruitment Process:</strong> The
                      platform allows team members to share notes, rate
                      candidates, and make collective hiring decisions based on
                      AI-driven insights.
                    </li>
                    <li className="mb-3">
                      <strong>Job Posting Optimization:</strong> Zoho Recruit AI
                      suggests the best platforms for posting job openings and
                      tailors job descriptions based on data-driven insights to
                      attract the right candidates.
                    </li>
                    <li className="mb-3">
                      <strong>Reducing Hiring Bias:</strong> By focusing on
                      objective data like qualifications and experience, Zoho
                      Recruit AI helps minimize unconscious bias in the
                      recruitment process.
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
                    <strong>Faster Candidate Screening:</strong> Zoho Recruit AI
                    automates the initial screening process, allowing recruiters
                    to filter through resumes and shortlist top candidates
                    quickly.
                  </li>
                  <li className="mb-3">
                    <strong>Smarter Matching:</strong> The AI helps match
                    candidates' qualifications, experience, and skills with job
                    requirements, making the hiring process more accurate and
                    efficient.
                  </li>
                  <li className="mb-3">
                    <strong>Reduces Bias:</strong> AI-powered evaluations remove
                    human biases, ensuring that candidates are assessed based on
                    their actual skills and qualifications, promoting fair
                    hiring practices.
                  </li>
                  <li className="mb-3">
                    <strong>Improved Candidate Experience:</strong> Candidates
                    benefit from a seamless, personalized experience as Zoho
                    Recruit AI tailors the hiring process to their specific
                    needs and capabilities.
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
                    <strong>Requires High-Quality Data:</strong> Zoho Recruit
                    AI’s performance is highly dependent on the quality and
                    accuracy of the data it receives. Inaccurate or incomplete
                    data can affect the AI’s ability to make accurate
                    predictions.
                  </li>
                  <li className="mb-2">
                    <strong>Potential for Over-Reliance on Automation:</strong>{" "}
                    While AI helps speed up processes, it can lead to
                    over-reliance on automation, potentially missing out on
                    assessing the intangible qualities of candidates.
                  </li>
                  <li className="mb-2">
                    <strong>Risk of Bias:</strong> Though designed to reduce
                    bias, the AI system may still carry biases from historical
                    data, which could unintentionally affect the fairness of
                    candidate evaluations.
                  </li>
                  <li className="mb-2">
                    <strong>Requires Constant Training:</strong> For optimal
                    performance, the AI requires regular training and updates,
                    which can be time-consuming and require dedicated resources.
                  </li>
                  <li className="mb-2">
                    <strong>Limited Human Touch:</strong> While AI can assist in
                    streamlining recruitment, it may lack the human intuition
                    necessary to fully understand a candidate's personality,
                    cultural fit, and other qualitative factors.
                  </li>
                  <li className="mb-2">
                    <strong>Integration Complexity:</strong> For businesses
                    using multiple systems, integrating Zoho Recruit AI into
                    their existing workflows could be challenging and might
                    require technical expertise.
                  </li>
                  <li className="mb-2">
                    <strong>Privacy Concerns:</strong> As Zoho Recruit AI
                    involves handling a large amount of sensitive candidate
                    data, there may be concerns about data security and
                    compliance with privacy regulations.
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
          className="d-inline-block text-white text-decoration-none ml-3 py-3 ms-3"
        >
          <i className="bi bi-arrow-left me-2"></i>Back {" "}
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
              <h1>Zoho Recruit AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                "Streamline your recruitment process with Zoho Recruit
                AI—empowering businesses to hire faster, smarter, and more
                efficiently."
              </p>

              <p>
                Zoho Recruit AI is a comprehensive recruitment platform that
                integrates artificial intelligence (AI) to automate and optimize
                every stage of the hiring process. From candidate sourcing and
                screening to job matching and interview scheduling, Zoho Recruit
                AI is designed to help businesses find the best talent quickly
                and accurately.
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
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5IyEpRsYY8JsmOlBNKKmWf5jlOBFs3Ustg&s"
                style={{ MaxWidth: "100%", height: "300px" }}
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
                How Zoho Recruit AI Works?
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
          .zoho1 {
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
                      Step 1: AI-Powered Candidate Sourcing
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Zoho Recruit uses AI to search and source candidates from
                      multiple job boards and databases, ensuring a diverse
                      talent pool.
                    </p>
                    <div className="zoho1">1</div>
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
          .zoho2 {
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
                      Step 2: AI-Based Resume Screening
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      AI in Zoho Recruit scans resumes to identify the best
                      candidates by matching skills, qualifications, and
                      experience with job requirements.
                    </p>
                    <div className="zoho2">2</div>
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
          .zoho3 {
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
                      Step 3: AI-Powered Interview Scheduling
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Zoho Recruit's AI automates interview scheduling by
                      analyzing candidate availability and matching it with the
                      interviewer's calendar.
                    </p>
                    <div className="zoho3">3</div>
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

          <div className="bg-primary text-center text-light rounded-4 p-5 mt-5">
            <h4 className="mb-3">Ready to get started with Zoho?</h4>
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

export default Zoho;
