import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

import jobscan from "../../../../public/assets/Img/Ai for Resume/44.png";

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
const JobScanAI = () => {
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
                Effortless Resume Optimization with Jobscan AI
              </p>
              <h3 className="">
                ATS-Optimized Resume Building for Career Success
              </h3>
            </div>
            {[
              {
                icon: "📝",
                title: "ATS Optimization Recommendations",
                desc: "Jobscan AI provides intelligent recommendations to optimize your resume for Applicant Tracking Systems (ATS), ensuring your resume passes automated screening processes.",
              },
              {
                icon: "🌍",
                title: "Multilingual Resume Support",
                desc: "Create resumes in multiple languages, enabling you to target global job opportunities across different industries and regions.",
              },
              {
                icon: "⚡",
                title: "Fast and Efficient Resume Customization",
                desc: "Jobscan AI streamlines the resume-building process, allowing you to generate an ATS-optimized resume quickly and efficiently.",
              },
              {
                icon: "🔍",
                title: "Job-Specific Content Recommendations",
                desc: "Jobscan AI tailors your resume with job-specific keywords and content, helping you stand out for the position you're applying for.",
              },
              {
                icon: "🎯",
                title: "Industry-Specific Resume Tips",
                desc: "Receive tips and suggestions for specific industries like tech, finance, healthcare, and more, ensuring your resume aligns with industry standards.",
              },
              {
                icon: "🔗",
                title: "Seamless Job Board Integration",
                desc: "Effortlessly export your optimized resume in formats compatible with major job boards like LinkedIn, Indeed, and Glassdoor, streamlining your job application process.",
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
                  q: "What is Jobscan AI?",
                  a: "Jobscan AI is an advanced platform designed to help job seekers optimize their resumes for Applicant Tracking Systems (ATS) and improve their chances of landing job interviews.",
                },
                {
                  q: "How does Jobscan AI improve resume creation?",
                  a: "Jobscan AI provides job-specific keyword recommendations, ATS-friendly formatting tips, and tailored feedback to ensure your resume is optimized for maximum visibility in ATS scans.",
                },
                {
                  q: "What are the key features of Jobscan AI?",
                  a: "Jobscan AI offers ATS optimization, real-time feedback, job match scoring, customizable templates, and resume improvement tools to enhance your chances of getting noticed by recruiters.",
                },
                {
                  q: "Can Jobscan AI help me create a cover letter?",
                  a: "Yes, Jobscan AI includes a cover letter builder with content suggestions, enabling you to create a cover letter that aligns with your resume and job application.",
                },
                {
                  q: "Is Jobscan AI compatible with Applicant Tracking Systems (ATS)?",
                  a: "Yes, Jobscan AI is specifically designed to optimize your resume for ATS, ensuring that it meets the necessary standards to pass through automated screening processes.",
                },
                {
                  q: "What resume formats does Jobscan AI support?",
                  a: "Jobscan AI supports formats like PDF and DOCX, ensuring compatibility with most ATS systems and making it easy to share your resume with potential employers.",
                },
                {
                  q: "Can I export my resume to LinkedIn?",
                  a: "Jobscan AI doesn't offer direct integration with LinkedIn, but you can easily export your resume and manually upload it to your LinkedIn profile.",
                },
                {
                  q: "Does Jobscan AI offer job-specific recommendations?",
                  a: "Yes, Jobscan AI provides tailored suggestions based on the job you're applying for, ensuring that your resume highlights the most relevant skills and experience.",
                },
                {
                  q: "How does Jobscan AI optimize my resume for different industries?",
                  a: "Jobscan AI offers industry-specific advice and templates, helping you tailor your resume to the standards and expectations of various fields like tech, healthcare, finance, and more.",
                },
                {
                  q: "Can I customize the design of my resume in Jobscan AI?",
                  a: "Yes, Jobscan AI allows you to customize your resume's design, ensuring that it’s both visually appealing and ATS-friendly.",
                },
                {
                  q: "Can Jobscan AI help me build a portfolio?",
                  a: "While Jobscan AI focuses on resume optimization, it helps you create a strong personal brand that can be showcased in a portfolio, especially for creative roles.",
                },
                {
                  q: "Is Jobscan AI cloud-based?",
                  a: "Yes, Jobscan AI is cloud-based, allowing you to access and update your resume from any device with an internet connection.",
                },
                {
                  q: "Does Jobscan AI offer feedback on my resume?",
                  a: "Yes, Jobscan AI provides real-time feedback on your resume’s content, design, and ATS compatibility, offering actionable suggestions to improve it.",
                },
                {
                  q: "Can Jobscan AI suggest job titles based on my experience?",
                  a: "Yes, Jobscan AI suggests job titles based on your skills and experience, helping you target roles that best match your qualifications.",
                },
                {
                  q: "Does Jobscan AI integrate with job boards?",
                  a: "Jobscan AI allows you to export your resume in formats compatible with popular job boards, like LinkedIn and Indeed, making it easier to apply for jobs.",
                },
                {
                  q: "Can I download my resume in multiple formats?",
                  a: "Yes, Jobscan AI offers several download options, including PDF and DOCX formats, to accommodate different job application requirements.",
                },
                {
                  q: "Can Jobscan AI help me create a LinkedIn profile?",
                  a: "While Jobscan AI doesn't directly create LinkedIn profiles, it helps you craft resume content that can easily be transferred to your LinkedIn profile.",
                },
                {
                  q: "Is Jobscan AI suitable for beginners?",
                  a: "Yes, Jobscan AI is user-friendly and provides step-by-step guidance to help beginners optimize their resumes effectively.",
                },
                {
                  q: "Can Jobscan AI help me with resume maintenance?",
                  a: "Yes, Jobscan AI makes it easy to keep your resume up-to-date by adding new skills, experiences, and job roles, ensuring it reflects your career growth.",
                },
                {
                  q: "Does Jobscan AI support multilingual resumes?",
                  a: "Yes, Jobscan AI supports multiple languages, allowing you to create resumes for global job opportunities.",
                },
                {
                  q: "What industries does Jobscan AI cater to?",
                  a: "Jobscan AI caters to a wide range of industries, including technology, healthcare, finance, education, marketing, and more.",
                },
                {
                  q: "Is Jobscan AI free to use?",
                  a: "Jobscan AI offers both free and paid plans. The free plan includes basic resume optimization features, while the premium plan unlocks advanced tools and features for more in-depth analysis.",
                },
                {
                  q: "Can Jobscan AI help me with job interview preparation?",
                  a: "While Jobscan AI focuses on resume optimization, it offers resources and blog content to assist with job interview preparation.",
                },
                {
                  q: "Does Jobscan AI provide analytics on my resume?",
                  a: "Yes, Jobscan AI provides analytics on your resume's performance, offering insights on how to improve its effectiveness based on industry trends.",
                },
                {
                  q: "How secure is my data with Jobscan AI?",
                  a: "Jobscan AI prioritizes data security and uses encryption to protect your personal information, adhering to privacy regulations to ensure confidentiality.",
                },
                {
                  q: "How do I start using Jobscan AI?",
                  a: "Starting with Jobscan AI is simple. Just sign up, upload your resume, and follow the prompts to optimize it for ATS and job applications.",
                },
                {
                  q: "Can Jobscan AI help me create resumes for multiple jobs?",
                  a: "Yes, Jobscan AI allows you to create and customize multiple versions of your resume, each tailored to a specific job role, improving your chances of success.",
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
                    Why Jobscan AI is a Top Choice for Resume Optimization
                  </h3>

                  <p className="text-start text-muted mb-3">
                    Jobscan AI revolutionizes the resume-building process by
                    focusing on optimizing your resume for Applicant Tracking
                    Systems (ATS). Here’s why Jobscan is the go-to tool for job
                    seekers aiming to improve their resume’s performance:
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
                      <strong>ATS-Friendly Resume Optimization:</strong> Jobscan
                      AI ensures your resume is structured with the right
                      keywords and formatting to pass through Applicant Tracking
                      Systems and increase your chances of getting noticed.
                    </li>
                    <li className="mb-3">
                      <strong>Job Match Scoring:</strong> Jobscan AI compares
                      your resume against job descriptions and provides a match
                      score, helping you see how well your resume aligns with
                      the job you're applying for.
                    </li>
                    <li className="mb-3">
                      <strong>Instant Resume Feedback:</strong> Get real-time
                      analysis and suggestions to improve your resume, focusing
                      on key areas that may need attention for better ATS
                      compatibility.
                    </li>
                    <li className="mb-3">
                      <strong>Customizable Recommendations:</strong> Receive
                      personalized feedback and recommendations based on your
                      specific job goals and experience, helping you tailor your
                      resume more effectively.
                    </li>
                    <li className="mb-3">
                      <strong>Comprehensive Resume Guide:</strong> Gain access
                      to step-by-step advice on how to craft a professional
                      resume, from keyword optimization to formatting tips.
                    </li>
                    <li className="mb-3">
                      <strong>Multiple Export Options:</strong> Export your
                      optimized resume in various formats, such as PDF and DOCX,
                      making it easy to apply to different job applications.
                    </li>
                    <li className="mb-3">
                      <strong>Continuous Improvement:</strong> Track your
                      resume’s progress with Jobscan’s detailed feedback,
                      ensuring you continually refine your resume for better job
                      matching.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Let Jobscan AI Help You Optimize Your Resume for Job
                      Success
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
              Why Jobscan AI is Highly Recommended
            </h4>
            <p className="text-center text-secondary mb-4">
              Jobscan AI stands out as a powerful platform for optimizing your
              resume to pass Applicant Tracking Systems (ATS) and impress hiring
              managers. Below are the key advantages and considerations when
              using this platform.
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
                    <strong>ATS Optimization:</strong> Jobscan AI helps you
                    tailor your resume to ensure it passes through ATS by
                    suggesting relevant keywords and structuring your content
                    effectively.
                  </li>
                  <li className="mb-2">
                    <strong>Automated Resume Analysis:</strong> Get instant
                    feedback on your resume with detailed suggestions to improve
                    your chances of getting noticed by employers.
                  </li>
                  <li className="mb-2">
                    <strong>Job Match Scoring:</strong> Jobscan AI provides a
                    score for how well your resume matches a specific job
                    description, helping you focus on areas that need
                    improvement.
                  </li>
                  <li className="mb-2">
                    <strong>Comprehensive Resume Guides:</strong> Receive
                    in-depth advice on how to craft a standout resume, including
                    tips on keywords, formatting, and content.
                  </li>
                  <li className="mb-2">
                    <strong>Easy-to-Use Interface:</strong> Jobscan AI offers a
                    user-friendly platform, making it simple to optimize and
                    edit your resume without any technical expertise.
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
                    <strong>Premium Features Limited:</strong> Some advanced
                    features, such as the full range of resume analyses and
                    in-depth customization options, are only available to
                    premium users.
                  </li>
                  <li className="mb-2">
                    <strong>Free Version Restrictions:</strong> Free users may
                    be limited to a certain number of resume scans and features,
                    with access to more advanced tools requiring a subscription.
                  </li>
                  <li className="mb-2">
                    <strong>Basic Customization:</strong> While Jobscan AI
                    offers great suggestions, it lacks deep customization
                    options compared to some other resume-building platforms.
                  </li>
                  <li className="mb-2">
                    <strong>No Visual Design Tools:</strong> Jobscan AI focuses
                    more on content and ATS compatibility, but it doesn't offer
                    advanced visual design templates like some other platforms.
                  </li>
                  <li className="mb-2">
                    <strong>Account Required for Saving:</strong> An account is
                    required to save and track your progress, which may not be
                    ideal for users who prefer an anonymous experience.
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
              Explore Powerful Alternatives for Resumes
            </h4>
            <p className="text-center text-secondary mb-4">
              Jobscan AI suggests a curated list of top resume-building
              platforms that empower you to create unique and tailored resumes
              for your career goals.
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
                    <strong>Jobscan AI</strong>: Optimize your resume with
                    ATS-friendly suggestions and automated analysis to improve
                    your chances of getting noticed by hiring systems.
                  </li>
                  <li className="mb-2">
                    <strong>Resume.io</strong>: A user-friendly platform
                    offering professional templates and a fast resume-building
                    experience.
                  </li>
                  <li className="mb-2">
                    <strong>Resumake</strong>: A minimalist platform designed to
                    create sleek and straightforward resumes quickly and easily.
                  </li>
                  <li className="mb-2">
                    <strong>Standard Resume</strong>: Focuses on delivering
                    clean, professional resumes with a high level of
                    ATS-compatibility for increased job application success.
                  </li>
                  <li className="mb-2">
                    <strong>VisualCV</strong>: Create visually stunning resumes
                    and portfolios, with additional performance tracking
                    features to monitor how your resume is performing.
                  </li>
                  <li className="mb-2">
                    <strong>Kickresume AI</strong>: Design personalized resumes
                    with AI-driven content that reflects your experience,
                    skills, and ambitions for a standout job application.
                  </li>
                  <li className="mb-2">
                    <strong>Canva Resume Builder</strong>: Create beautifully
                    designed resumes with an intuitive drag-and-drop interface,
                    ideal for creative professionals.
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
              <h1>Jobscan AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Jobscan AI is an innovative tool designed to help job seekers
                optimize their resumes and applications using artificial
                intelligence. It offers job search, resume matching, and career
                coaching services, aiming to improve job opportunities by
                enhancing applicants' chances of passing through Applicant
                Tracking Systems (ATS).
              </p>

              <p>
                Jobscan AI has been widely recognized for its comprehensive
                features that improve the job application process. With its
                resume optimization and job matching capabilities, Jobscan helps
                users align their resumes with job descriptions, ensuring better
                chances of getting noticed by recruiters.
              </p>
              <div className="mb-3">
                <a
                href="https://www.jobscan.co/"
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
                src={jobscan}
                alt="jobscan"
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
                Create Impactful Resumes with Jobscan AI
              </p>
              <h2
                style={{
                  fontWeight: "600",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                How Jobscan AI Helps You Build a Winning Resume
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
                      Analyzes Your Career & Goals
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Jobscan AI examines your professional journey and
                      aspirations to create a resume that is in sync with your
                      desired role.
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
                      Customizes Resume for Your Dream Job
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Jobscan AI customizes every section of your resume,
                      including your headline and experience, to match the job
                      you're targeting.
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
                      Generates a Polished, Ready-to-Submit Resume
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Download a fully optimized, job-ready resume that will
                      help you stand out and make a lasting impression on
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

          
        </div>
     
    </>
  );
};

export default JobScanAI;
