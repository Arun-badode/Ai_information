import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import zety from "../../../../public/assets/Img/Ai for Resume/41.png";
import Zety1 from "../../../../public/assets/Img/Ai for Resume/Zety1.png";
import Zety2 from "../../../../public/assets/Img/Ai for Resume/Zety2.png";
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
const ZetyAI = () => {
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
                Unlock Effortless Resume Creation with Zety AI
              </p>
              <h3 className="">AI-Enhanced Resume Building for Job Seekers</h3>
            </div>
            {[
              {
                icon: "📝",
                title: "AI-Powered Resume Suggestions",
                desc: "Zety AI generates tailored suggestions for your resume content, helping you create a personalized and compelling resume based on your skills and experience.",
              },
              {
                icon: "🌍",
                title: "Global Job Market Compatibility",
                desc: "Zety AI allows you to create resumes in multiple languages, catering to job seekers across various countries and industries.",
              },
              {
                icon: "⚡",
                title: "Fast Resume Building",
                desc: "Zety AI optimizes the resume-building process, allowing you to generate a polished resume quickly with minimal effort.",
              },
              {
                icon: "🔍",
                title: "ATS-Friendly Resume Formatting",
                desc: "Zety AI ensures your resume is ATS-compatible by suggesting industry-relevant keywords and structuring your resume for maximum visibility in Applicant Tracking Systems.",
              },
              {
                icon: "🎯",
                title: "Job-Specific Tailoring",
                desc: "Get tailored resume content based on the specific job role you're targeting, improving your chances of standing out to recruiters.",
              },
              {
                icon: "🔗",
                title: "Seamless Job Board Integration",
                desc: "Easily export your resume in multiple formats that are compatible with popular job boards like LinkedIn, Indeed, and Glassdoor for quick applications.",
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

      case "FAQs":
        return (
          <div className="faq-section container py-4">
            <h3 className="text-center text-white mb-4 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is Zety AI?",
                  a: "Zety AI is an advanced tool designed to help job seekers craft personalized, professional resumes quickly using AI-driven templates and suggestions.",
                },
                {
                  q: "How does Zety AI enhance resume creation?",
                  a: "Zety AI offers intelligent recommendations for resume content, layout, and keywords tailored to your target job role, helping you create a standout resume.",
                },
                {
                  q: "What are the key features of Zety AI?",
                  a: "Zety AI's features include customizable resume templates, real-time feedback, ATS optimization, cover letter creation, and the ability to export resumes in multiple formats.",
                },
                {
                  q: "Can I create a cover letter with Zety AI?",
                  a: "Yes, Zety AI offers a cover letter tool that suggests content and templates to help you write a professional, personalized cover letter.",
                },
                {
                  q: "Is Zety AI compatible with Applicant Tracking Systems (ATS)?",
                  a: "Absolutely! Zety AI ensures your resume is ATS-friendly by offering keyword-rich suggestions and formatting options that help you pass ATS screenings.",
                },
                {
                  q: "What resume formats does Zety AI support?",
                  a: "Zety AI supports several formats including PDF, DOCX, and TXT, making it simple to export and share your resume with employers.",
                },
                {
                  q: "Can I export my resume to LinkedIn?",
                  a: "While Zety AI doesn't offer direct LinkedIn integration, you can easily export your resume and upload it to LinkedIn manually.",
                },
                {
                  q: "Does Zety AI provide job-specific recommendations?",
                  a: "Yes, Zety AI tailors content suggestions based on your target job, including skills and achievements that align with the role you’re applying for.",
                },
                {
                  q: "How does Zety AI optimize my resume for different industries?",
                  a: "Zety AI provides industry-specific templates and content recommendations for various sectors, including technology, healthcare, marketing, and more.",
                },
                {
                  q: "Can I customize the design of my resume in Zety AI?",
                  a: "Yes, Zety AI offers a wide variety of professional templates that can be customized to your preference, while ensuring ATS compatibility.",
                },
                {
                  q: "Can Zety AI help me build a portfolio?",
                  a: "While Zety AI focuses on resume building, it also offers the ability to create a portfolio to showcase your work and achievements, particularly for creative professionals.",
                },
                {
                  q: "Is Zety AI cloud-based?",
                  a: "Yes, Zety AI is fully cloud-based, allowing you to access and edit your resume from any device with an internet connection.",
                },
                {
                  q: "Does Zety AI offer feedback on my resume?",
                  a: "Yes, Zety AI provides real-time feedback on your resume's structure, content, and formatting to help you make improvements before submitting it.",
                },
                {
                  q: "Can Zety AI suggest job titles based on my experience?",
                  a: "Yes, Zety AI suggests job titles tailored to your skills and experience, helping you apply for roles that align with your career background.",
                },
                {
                  q: "Does Zety AI integrate with job boards?",
                  a: "Zety AI allows you to download resumes in formats that are compatible with major job boards such as LinkedIn and Indeed.",
                },
                {
                  q: "Can I download my resume in multiple formats?",
                  a: "Yes, you can download your resume in multiple formats, including PDF, DOCX, and TXT, depending on your needs.",
                },
                {
                  q: "Can Zety AI help me create a LinkedIn profile?",
                  a: "Zety AI doesn't create LinkedIn profiles directly, but it helps you create content that you can easily transfer to your LinkedIn profile.",
                },
                {
                  q: "Is Zety AI suitable for beginners?",
                  a: "Yes, Zety AI is user-friendly and designed for both beginners and experienced professionals, providing easy-to-follow guidance throughout the resume creation process.",
                },
                {
                  q: "Can Zety AI help me with resume maintenance?",
                  a: "Yes, Zety AI allows you to easily update your resume with new experiences, skills, or job roles, ensuring your resume remains up to date.",
                },
                {
                  q: "Does Zety AI support multilingual resumes?",
                  a: "Yes, Zety AI supports multiple languages, allowing you to create resumes for job opportunities across different regions.",
                },
                {
                  q: "What industries does Zety AI cater to?",
                  a: "Zety AI offers tailored templates and content for various industries, including technology, finance, healthcare, education, and more.",
                },
                {
                  q: "Is Zety AI free to use?",
                  a: "Zety AI offers both free and paid plans. The free plan allows basic resume creation, while the premium plan provides additional features like custom templates and extra export options.",
                },
                {
                  q: "Can Zety AI help me with job interview preparation?",
                  a: "Zety AI primarily focuses on resume building but provides additional resources like blog posts and tips to help you prepare for job interviews.",
                },
                {
                  q: "Does Zety AI provide analytics on my resume?",
                  a: "Yes, Zety AI offers insights into the effectiveness of your resume, with suggestions for improvement based on hiring patterns and industry standards.",
                },
                {
                  q: "How secure is my data with Zety AI?",
                  a: "Zety AI uses strong encryption protocols and complies with privacy regulations like GDPR to ensure the security and confidentiality of your personal data.",
                },
                {
                  q: "How do I start using Zety AI?",
                  a: "To get started, simply sign up for an account, choose a template, and begin entering your information. Zety AI will guide you step by step through the resume creation process.",
                },
                {
                  q: "Can Zety AI help me create resumes for multiple jobs?",
                  a: "Yes, Zety AI allows you to create multiple resumes targeting different job positions, each with tailored content to increase your chances of success.",
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
                src={Zety1}
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={Zety2}
                alr=""
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
                    Why Zety AI is a Top Choice for Resume Building
                  </h3>

                  <p className="text-start text-muted mb-3">
                    Zety AI assesses your unique career goals and suggests
                    powerful tools designed to simplify the resume creation
                    process. Here’s why Zety is a great fit for your job
                    application needs:
                  </p>

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
                      <strong>Quick and Efficient Resume Creation:</strong>{" "}
                      Utilize pre-designed templates and AI-driven content
                      suggestions to craft your resume swiftly.
                    </li>
                    <li className="mb-3">
                      <strong>Role-Specific Guidance:</strong> Receive
                      personalized advice on phrasing and structuring your
                      resume according to the job you want.
                    </li>
                    <li className="mb-3">
                      <strong>Professional Layouts:</strong> Maintain a
                      polished, consistent look throughout your resume without
                      worrying about formatting issues.
                    </li>
                    <li className="mb-3">
                      <strong>Tailored Design Options:</strong> Choose from a
                      variety of styles that fit the standards of your industry,
                      whether it's tech, finance, or marketing.
                    </li>
                    <li className="mb-3">
                      <strong>Optimized for Hiring Trends:</strong> Ensure your
                      resume meets current recruitment best practices, including
                      compatibility with ATS systems.
                    </li>
                    <li className="mb-3">
                      <strong>Convenient Export Formats:</strong> Export your
                      resume in formats like PDF or DOCX for easy sharing with
                      recruiters or for job applications.
                    </li>
                    <li className="mb-3">
                      <strong>Instant Feedback:</strong> Get real-time
                      suggestions and alerts to improve your resume, making sure
                      you don’t miss important sections.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Let Zety AI Help You Build the Perfect Resume
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Pros & Cons":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-2">
              Why Zety AI is Highly Recommended
            </h4>
            <p className="text-center text-secondary mb-4">
              Based on your preferences, Zety AI is an excellent choice for
              building professional resumes. Here's a breakdown of its
              advantages and considerations.
            </p>
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
                    <strong>Customizable Templates:</strong> Tailor resumes
                    easily with numerous templates designed for various
                    industries.
                  </li>
                  <li className="mb-2">
                    <strong>AI-Driven Suggestions:</strong> Get role-specific
                    guidance and automatic suggestions for phrasing and
                    structure.
                  </li>
                  <li className="mb-2">
                    <strong>ATS Optimization:</strong> Ensure that your resume
                    passes Applicant Tracking Systems with ease, improving job
                    application success.
                  </li>
                  <li className="mb-2">
                    <strong>Built-In Cover Letter Generator:</strong>{" "}
                    Automatically generate a personalized cover letter that
                    complements your resume.
                  </li>
                  <li className="mb-2">
                    <strong>User-Friendly Interface:</strong> Easy-to-use
                    platform, great for both beginners and professionals looking
                    to build polished resumes quickly.
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
                    <strong>Limited Free Version:</strong> Many export and
                    customization features are available only in the premium
                    version.
                  </li>
                  <li className="mb-2">
                    <strong>Template Switching Limitations:</strong> Changing
                    templates could cause some formatting issues and
                    inconsistencies.
                  </li>
                  <li className="mb-2">
                    <strong>No Portfolio Hosting:</strong> Zety doesn’t provide
                    portfolio hosting features, which can be crucial for certain
                    careers.
                  </li>
                  <li className="mb-2">
                    <strong>Not Tailored for Niche Roles:</strong> Some
                    professions, like academics or creatives, may require manual
                    adjustments.
                  </li>
                  <li className="mb-2">
                    <strong>Account Creation Required:</strong> You need to
                    register an account to save or access your resume, which
                    might be a barrier for some users.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "Alternative":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-2">
              Smart Alternatives to Explore
            </h4>
            <p className="text-center text-secondary mb-4">
              Zety AI recommends top resume platforms and tools to help you
              build standout resumes, tailored to your professional goals.
            </p>
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
                    <strong>Zety Resume Builder</strong>: Create professional
                    resumes using modern templates and optimized for ATS with
                    expert tips.
                  </li>
                  <li className="mb-2">
                    <strong>Resume Genius</strong>: A user-friendly platform
                    with pre-written bullet points for various job titles.
                  </li>
                  <li className="mb-2">
                    <strong>Novoresume</strong>: Ideal for polished resumes with
                    customization options for career levels and professional
                    profiles.
                  </li>
                  <li className="mb-2">
                    <strong>Kickresume</strong>: Great for students and early
                    professionals with pre-designed templates and content ready
                    to use.
                  </li>
                  <li className="mb-2">
                    <strong>Canva Resume Builder</strong>: A flexible,
                    drag-and-drop platform with design-forward templates for
                    creative professionals.
                  </li>
                  <li className="mb-2">
                    <strong>VisualCV</strong>: Perfect for creating multiple
                    versions of your resume and includes performance tracking
                    features.
                  </li>
                  <li className="mb-2">
                    <strong>Enhancv</strong>: Showcase your personality, soft
                    skills, and achievements with eye-catching design features.
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
          <div className="row align-items-center mb-5">
            {/* Right side (Image Section) */}
            <div className="col-md-6 col-12 text-center">
              <img
                src={zety}
                alt="Zety"
                style={{
                  maxWidth: "100%",
                  height: "300px",
                  objectFit: "contain",
                }}
              />
            </div>
            {/* Left side (Text Section) */}
            <div
              className="col-md-6 col-12 mb-4 mb-md-0"
              style={{ paddingRight: "30px" }}
            >
              <p className="text-primary">Write better, faster</p>
              <h1>Zety AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Zety AI is an AI-powered resume builder that helps job seekers
                create ATS-friendly and professional resumes quickly and
                efficiently. By leveraging machine learning and deep learning
                algorithms, Zety AI automates key aspects of the resume-building
                process, including resume optimization, keyword integration, and
                ATS formatting. It provides real-time feedback, ensuring that
                resumes are optimized to increase the chances of landing
                interviews.
              </p>
              <p>
                Zety AI is a leading AI resume-building platform designed to
                help job seekers build professional resumes that align with
                job-specific requirements. The platform offers customizable
                resume templates, real-time feedback, and ensures that resumes
                are ATS-compatible. With a focus on machine learning and deep
                learning models, Zety AI helps users generate optimized resumes
                in a fraction of the time it would take manually.
              </p>
              <div className="mb-3">
                <a
                  href="https://zety.com/resume-builder"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-2"
                >
                  Explore Tool
                </a>
              </div>
            </div>
          </div>
        </div>

        <section style={{ backgroundColor: "#0b1e3d", padding: "3rem 0" }}>
          <div className="container text-center">
            <p className="text-primary">Build Smarter Resumes with Zety AI</p>
            <h2
              style={{
                fontWeight: "600",
                color: "#fff",
                marginBottom: "1rem",
              }}
            >
              How Zety AI Assists You in Creating the Perfect Resume
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
                  <style>{`
            .step1 {
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
                    Understands Your Career Goals
                  </h5>
                  <p style={{ color: "#fff", margin: 0 }}>
                    Zety AI analyzes your professional background to craft a
                    resume that reflects your career goals and job search
                    strategy.
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
                  <style>{`
            .step2 {
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
                    Customizes Each Section
                  </h5>
                  <p style={{ color: "#fff", margin: 0 }}>
                    Zety AI personalizes every section of your resume, from
                    headline to experience, ensuring it matches the job role
                    you're applying for.
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
                  <style>{`
            .step3 {
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
                    Generates Job-Ready Resumes
                  </h5>
                  <p style={{ color: "#fff", margin: 0 }}>
                    Download a professional resume that stands out to recruiters
                    and is ready for submission to job boards or direct
                    employers.
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
          <h4 className="mb-3">Ready to get started with RunWayGen?</h4>
          <p className="mb-4">
            Join thousands of professionals already boosting their productivity!
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
    </>
  );
};

export default ZetyAI;
