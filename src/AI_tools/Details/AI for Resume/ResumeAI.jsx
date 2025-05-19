import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

import resume from "../../../../public/assets/Img/Ai for Resume/44.png";
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
const RessumeAI = () => {
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
                Unlock Seamless Visual Testing with Razi AI
              </p>
              <h3 className="">AI-Backed Visual Assurance for Modern Apps</h3>
            </div>
            {[
              {
                icon: "🧠",
                title: "AI-Based Visual Checks",
                desc: "Razi AI leverages advanced visual recognition to automatically identify UI mismatches, helping you catch visual bugs faster and reduce manual reviews.",
              },
              {
                icon: "📱",
                title: "Multi-Device & Browser Compatibility",
                desc: "Run your tests across real devices—Android, iOS, and popular desktop browsers—to ensure consistent appearance and behavior everywhere.",
              },
              {
                icon: "⚡",
                title: "Optimized Test Execution",
                desc: "Razi AI smartly prioritizes visual checks based on recent changes, cutting down test time while maintaining high detection accuracy.",
              },
              {
                icon: "🔍",
                title: "Intelligent UI Defect Detection",
                desc: "Analyze UI changes with context-aware insights, spot inconsistencies, and enhance your visual coverage using historical testing patterns.",
              },
              {
                icon: "🌐",
                title: "Network-Aware UI Validation",
                desc: "Emulate various network environments like 3G, 4G, or limited Wi-Fi to evaluate how your UI performs in real-world conditions.",
              },
              {
                icon: "🔧",
                title: "CI/CD Friendly Integration",
                desc: "Plug into your delivery pipeline using tools like Jenkins, GitHub Actions, or Azure DevOps to enable continuous visual validations on every build.",
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
                  q: "What is Resume.io AI?",
                  a: "Resume.io AI is an intelligent resume-building platform that uses AI to help job seekers create professional, personalized resumes easily and quickly.",
                },
                {
                  q: "How does Resume.io AI enhance resume creation?",
                  a: "Resume.io AI offers smart suggestions for job-specific content, formatting, and styling based on the job role you're targeting, helping your resume stand out.",
                },
                {
                  q: "What are the key features of Resume.io AI?",
                  a: "Key features include customizable resume templates, real-time feedback, ATS optimization, cover letter creation, and multi-format export options.",
                },
                {
                  q: "Can I create a cover letter with Resume.io AI?",
                  a: "Yes, Resume.io AI offers templates and suggestions to help you create a professional cover letter that complements your resume.",
                },
                {
                  q: "Is Resume.io AI compatible with Applicant Tracking Systems (ATS)?",
                  a: "Yes, Resume.io AI ensures your resume is ATS-friendly by recommending keyword-rich content and optimizing formatting to help you pass ATS screenings.",
                },
                {
                  q: "What resume formats does Resume.io AI support?",
                  a: "Resume.io AI supports multiple formats, including PDF, DOCX, and TXT, making it easy to download and submit your resume to employers.",
                },
                {
                  q: "Can I export my resume to LinkedIn?",
                  a: "While Resume.io AI doesn't directly export to LinkedIn, you can download your resume and manually upload it to your LinkedIn profile.",
                },
                {
                  q: "Does Resume.io AI help with job-specific recommendations?",
                  a: "Yes, Resume.io AI tailors suggestions based on your target job, including skills, experience, and achievements relevant to the role you're applying for.",
                },
                {
                  q: "How does Resume.io AI optimize my resume for different industries?",
                  a: "Resume.io AI provides templates and content suggestions customized for various industries, including tech, healthcare, finance, marketing, and more.",
                },
                {
                  q: "Can I customize the design of my resume in Resume.io AI?",
                  a: "Yes, Resume.io AI offers a variety of professional templates that can be customized to suit your style, while maintaining ATS compatibility.",
                },
                {
                  q: "Can Resume.io AI be used for building portfolios?",
                  a: "While primarily focused on resumes, Resume.io AI also offers options to create digital portfolios to showcase your work and achievements.",
                },
                {
                  q: "Is Resume.io AI cloud-based?",
                  a: "Yes, Resume.io AI operates entirely in the cloud, meaning you can access and edit your resume from any device with internet connectivity.",
                },
                {
                  q: "Does Resume.io AI offer feedback on my resume?",
                  a: "Yes, Resume.io AI provides real-time feedback on your resume's content, formatting, and overall effectiveness, helping you refine it before submission.",
                },
                {
                  q: "Can Resume.io AI suggest job titles based on my experience?",
                  a: "Yes, Resume.io AI suggests relevant job titles based on your skills, experience, and industry, helping you target the right opportunities.",
                },
                {
                  q: "Does Resume.io AI integrate with job boards?",
                  a: "Yes, Resume.io AI allows you to export your resume in formats compatible with popular job boards like LinkedIn, Indeed, and others.",
                },
                {
                  q: "Can I download my resume in multiple formats?",
                  a: "Yes, you can download your resume in various formats, including PDF, DOCX, and TXT, depending on your needs.",
                },
                {
                  q: "Can Resume.io AI help me create a LinkedIn profile?",
                  a: "While Resume.io AI doesn't create LinkedIn profiles directly, it provides resume content that you can easily transfer to your LinkedIn profile.",
                },
                {
                  q: "Is Resume.io AI suitable for beginners?",
                  a: "Yes, Resume.io AI is designed to be user-friendly, with an intuitive interface and step-by-step guidance, making it easy for beginners to create professional resumes.",
                },
                {
                  q: "Can Resume.io AI help me with resume maintenance?",
                  a: "Yes, Resume.io AI allows you to easily update your resume with new experiences, skills, or job titles, keeping it current and relevant.",
                },
                {
                  q: "Does Resume.io AI support multilingual resumes?",
                  a: "Yes, Resume.io AI supports multiple languages, enabling you to create resumes in different languages for global job opportunities.",
                },
                {
                  q: "What industries does Resume.io AI cater to?",
                  a: "Resume.io AI offers industry-specific templates and content recommendations for a wide range of fields, including tech, finance, healthcare, education, and more.",
                },
                {
                  q: "Is Resume.io AI free to use?",
                  a: "Resume.io AI offers both free and paid plans, with the free version allowing basic resume creation and the premium version offering advanced features like custom templates and additional export options.",
                },
                {
                  q: "Can Resume.io AI help me with job interview preparation?",
                  a: "Resume.io AI primarily focuses on resume building but offers resources and tips for interview preparation through blog posts and educational content.",
                },
                {
                  q: "Does Resume.io AI provide analytics on my resume?",
                  a: "Yes, Resume.io AI provides insights into the performance of your resume, including recommendations for improvement based on common hiring patterns.",
                },
                {
                  q: "How secure is my data with Resume.io AI?",
                  a: "Resume.io AI follows strict security measures, including data encryption and compliance with privacy regulations like GDPR, to protect your personal information.",
                },
                {
                  q: "How do I start using Resume.io AI?",
                  a: "Simply sign up for an account, choose a template, and start entering your details. Resume.io AI will guide you through each step of the resume creation process.",
                },
                {
                  q: "Can Resume.io AI help me create resumes for multiple jobs?",
                  a: "Yes, you can create multiple resumes targeting different job positions, with Resume.io AI suggesting tailored content for each one.",
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
                alt=""
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
                    Why Resume.io AI Recommends Smart Resume Tools Like Zety
                  </h3>

                  <p className="text-start text-muted mb-3">
                    Resume.io AI evaluates your career goals and recommends
                    tools designed to streamline resume creation. Here’s why a
                    platform like <strong>Zety</strong> might be the right match
                    for you:
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
                      <strong>Speeds Up Resume Building:</strong> Use
                      pre-written content and smart templates to build a
                      standout resume in minutes.
                    </li>
                    <li className="mb-3">
                      <strong>Personalized Suggestions:</strong> AI-driven
                      suggestions help you write better bullet points tailored
                      to your desired role.
                    </li>
                    <li className="mb-3">
                      <strong>Consistent Formatting:</strong> Ensures that your
                      layout stays clean, professional, and recruiter-ready—no
                      formatting hassles.
                    </li>
                    <li className="mb-3">
                      <strong>Customizable Designs:</strong> Choose styles
                      suited to your industry, whether you’re in tech, design,
                      or finance.
                    </li>
                    <li className="mb-3">
                      <strong>Aligned With Best Practices:</strong> Keeps your
                      resume compliant with modern hiring trends and ATS
                      guidelines.
                    </li>
                    <li className="mb-3">
                      <strong>Easy Export Options:</strong> Download in multiple
                      formats (PDF, DOCX) for quick sharing or job site uploads.
                    </li>
                    <li className="mb-3">
                      <strong>Feedback in Real-Time:</strong> Get instant
                      suggestions and alerts for missing sections or common
                      resume mistakes.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Let Resume.io AI Find Your Ideal Tool
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
              Why Resume.io AI Recommends Zety
            </h4>
            <p className="text-center text-secondary mb-4">
              Based on your preferences, Resume.io AI suggests{" "}
              <strong>Zety</strong>. Here's a breakdown of its advantages and
              considerations.
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
                    <strong>ATS-Friendly Templates:</strong> Professionally
                    designed to pass applicant tracking systems effortlessly.
                  </li>
                  <li className="mb-2">
                    <strong>Smart Suggestions:</strong> Offers phrase and bullet
                    point guidance based on your selected role.
                  </li>
                  <li className="mb-2">
                    <strong>Multiple Resume Formats:</strong> Easily switch
                    between styles depending on industry or job level.
                  </li>
                  <li className="mb-2">
                    <strong>Built-in Cover Letter Tool:</strong> Helps you match
                    your resume with personalized cover letters.
                  </li>
                  <li className="mb-2">
                    <strong>Easy Customization:</strong> Simple interface makes
                    it beginner-friendly for quick edits.
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
                    <strong>Limited Free Access:</strong> Most export features
                    require a paid plan after the trial period.
                  </li>
                  <li className="mb-2">
                    <strong>Template Lock-In:</strong> Switching templates can
                    sometimes reset formatting choices.
                  </li>
                  <li className="mb-2">
                    <strong>No Portfolio Hosting:</strong> Does not support
                    hosting for creative portfolios or external links.
                  </li>
                  <li className="mb-2">
                    <strong>Less Ideal for Niche Careers:</strong> May need
                    manual tweaks for academic, research, or artistic fields.
                  </li>
                  <li className="mb-2">
                    <strong>Login Required:</strong> You must create an account
                    to save or access any resume content.
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
              Resume.io AI suggests top resume platforms and tools to help you
              build standout applications based on your unique goals.
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
                    <strong>Resume Genius</strong>: A user-friendly builder with
                    pre-written bullet points tailored to job titles.
                  </li>
                  <li className="mb-2">
                    <strong>Zety</strong>: Offers modern templates, expert tips,
                    and keyword optimization for applicant tracking systems
                    (ATS).
                  </li>
                  <li className="mb-2">
                    <strong>Novoresume</strong>: Great for visually polished
                    resumes and CVs with customization for career levels.
                  </li>
                  <li className="mb-2">
                    <strong>Kickresume</strong>: Ideal for students and early
                    professionals with ready-to-use content and design options.
                  </li>
                  <li className="mb-2">
                    <strong>Canva Resume Builder</strong>: A flexible
                    drag-and-drop interface with design-forward layouts for
                    creative roles.
                  </li>
                  <li className="mb-2">
                    <strong>VisualCV</strong>: Useful for professionals needing
                    multiple resume versions with performance tracking.
                  </li>
                  <li className="mb-2">
                    <strong>Enhancv</strong>: Best for those looking to showcase
                    personality and soft skills alongside achievements.
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
          <div className="row align-items-start">
            {/* Left side (Text Section) */}
            <div
              style={{ paddingRight: "30px" }}
              className="col-md-6 col-12 order-2 order-md-1"
            >
              <p className="text-primary">Write better, faster</p>
              <h1>Resume.io AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Resume.io AI is an AI-powered platform designed to help job
                seekers create professional, ATS-friendly resumes quickly and
                efficiently. By leveraging advanced machine learning and deep
                learning technologies, Resume.io AI automates key aspects of
                resume building, including resume optimization, keyword
                integration, and ATS formatting. It provides real-time feedback,
                helping users improve their resumes to match job descriptions
                and increase the likelihood of landing interviews.
              </p>

              <p>
                Resume.io AI automates the tedious process of writing and
                optimizing resumes by utilizing machine learning algorithms. It
                ensures that resumes are tailored to meet job-specific
                requirements, automatically adjusting keywords, skills, and
                formatting for better ATS compatibility. Whether you're a recent
                graduate or an experienced professional, Resume.io AI makes the
                resume creation process easier and more efficient.
              </p>

              <div className="mb-3">
                <a
                  href="https://www.resumeai.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-2"
                >
                  Explore Tool
                </a>
              </div>
            </div>

            {/* Right side (Image Section) */}
            <div
              style={{
                textAlign: "center",
                Width: "100%",
                height: "250px",
              }}
              className="col-md-6 col-12 order-md-2 order-1 text-center mb-3 mb-md-0  "
            >
              <img
                src={resume}
                alt="Enhancv AI"
                style={{
                  Width: "100%",
                  height: "auto",
                  maxHeight: "300px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
        </div>

        <section style={{ backgroundColor: "#0b1e3d", padding: "3rem 0" }}>
          <div className="container text-center">
            <p className="text-primary">
              Build Smarter Resumes in 3 Easy Steps
            </p>
            <h2
              style={{
                fontWeight: "600",
                color: "#fff",
                marginBottom: "1rem",
              }}
            >
              How Resume.io AI Assists You
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
                    Analyzes Your Career Goals
                  </h5>
                  <p style={{ color: "#fff", margin: 0 }}>
                    Resume.io AI understands your professional background and
                    aspirations to create a framework that aligns with your job
                    search strategy.
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
                    Personalizes Every Section
                  </h5>
                  <p style={{ color: "#fff", margin: 0 }}>
                    From headline to experience bullets, the AI customizes your
                    resume tone, format, and keywords to fit the role you’re
                    targeting.
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
                    Outputs Job-Ready Resumes
                  </h5>
                  <p style={{ color: "#fff", margin: 0 }}>
                    Download a polished, recruiter-friendly resume that’s built
                    to stand out—ready for any job board or direct submission.
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
      </div>
    </>
  );
};

export default RessumeAI;
