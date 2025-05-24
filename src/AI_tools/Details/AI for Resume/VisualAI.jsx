import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import visual from "../../../../public/assets/Img/Ai for Resume/45.png";
import VisualCV1 from "../../../../public/assets/Img/Ai for Resume/VisualCV1.png";
import VisualCV2 from "../../../../public/assets/Img/Ai for Resume/VisualCV2.png";
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
const VisualAI = () => {
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
                Effortless Resume Creation with VisualCV AI
              </p>
              <h3 className="">
                ATS-Friendly Resume Design for Career Success
              </h3>
            </div>
            {[
              {
                icon: "📝",
                title: "ATS Optimization Recommendations",
                desc: "VisualCV AI offers intelligent recommendations to optimize your resume for Applicant Tracking Systems (ATS), ensuring your resume passes automated screening processes and gets noticed by recruiters.",
              },
              {
                icon: "🌍",
                title: "Multilingual Resume Support",
                desc: "Create resumes in multiple languages to target global job opportunities across different industries and regions, expanding your reach and job prospects.",
              },
              {
                icon: "⚡",
                title: "Fast and Efficient Resume Customization",
                desc: "VisualCV AI streamlines the resume-building process, enabling you to quickly generate a professional, ATS-optimized resume without the hassle.",
              },
              {
                icon: "🔍",
                title: "Job-Specific Content Recommendations",
                desc: "VisualCV AI customizes your resume with job-specific keywords and content suggestions, ensuring you stand out for the roles you're applying to.",
              },
              {
                icon: "🎯",
                title: "Industry-Specific Resume Tips",
                desc: "Get tailored advice and suggestions for industries like tech, finance, healthcare, marketing, and more, ensuring your resume meets industry standards and expectations.",
              },
              {
                icon: "🔗",
                title: "Seamless Job Board Integration",
                desc: "Easily export your optimized resume in formats compatible with major job boards like LinkedIn, Indeed, and Glassdoor, simplifying your job application process.",
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
                  q: "What is VisualCV AI?",
                  a: "VisualCV AI is a powerful platform designed to help job seekers create visually appealing, ATS-friendly resumes and cover letters, enhancing their chances of standing out in job applications.",
                },
                {
                  q: "How does VisualCV AI improve resume creation?",
                  a: "VisualCV AI offers job-specific keyword recommendations, customizable design templates, and real-time feedback to optimize your resume for both ATS compatibility and visual appeal.",
                },
                {
                  q: "What are the key features of VisualCV AI?",
                  a: "VisualCV AI provides industry-specific templates, ATS optimization, customizable design options, real-time feedback, and the ability to create professional cover letters to boost your job search.",
                },
                {
                  q: "Can VisualCV AI help me create a cover letter?",
                  a: "Yes, VisualCV AI includes a cover letter builder with personalized content suggestions, helping you create a tailored cover letter that complements your resume.",
                },
                {
                  q: "Is VisualCV AI compatible with Applicant Tracking Systems (ATS)?",
                  a: "Yes, VisualCV AI is specifically designed to ensure that your resume is ATS-compatible, helping you pass through automated screening processes and increase your chances of being noticed by recruiters.",
                },
                {
                  q: "What resume formats does VisualCV AI support?",
                  a: "VisualCV AI supports multiple formats, including PDF and DOCX, making it easy to share your optimized resume with potential employers and ensuring compatibility with ATS systems.",
                },
                {
                  q: "Can I export my resume to LinkedIn?",
                  a: "VisualCV AI doesn't offer direct integration with LinkedIn, but it allows you to export your resume in formats that can be manually uploaded to your LinkedIn profile.",
                },
                {
                  q: "Does VisualCV AI offer job-specific recommendations?",
                  a: "Yes, VisualCV AI offers tailored suggestions based on the job you're applying for, ensuring that your resume highlights the most relevant skills and experiences for each role.",
                },
                {
                  q: "How does VisualCV AI optimize my resume for different industries?",
                  a: "VisualCV AI provides industry-specific templates and advice, allowing you to customize your resume according to the standards and expectations of various fields such as tech, healthcare, finance, and more.",
                },
                {
                  q: "Can I customize the design of my resume in VisualCV AI?",
                  a: "Yes, VisualCV AI offers a range of customizable templates, allowing you to design a visually stunning resume that also remains ATS-friendly.",
                },
                {
                  q: "Can VisualCV AI help me build a portfolio?",
                  a: "While VisualCV AI primarily focuses on resume creation, it helps you build a strong personal brand that can be showcased in an online portfolio, especially useful for creative professionals.",
                },
                {
                  q: "Is VisualCV AI cloud-based?",
                  a: "Yes, VisualCV AI is cloud-based, meaning you can access and update your resume from any device with an internet connection, making it convenient for job seekers on the go.",
                },
                {
                  q: "Does VisualCV AI offer feedback on my resume?",
                  a: "Yes, VisualCV AI provides real-time feedback on your resume’s content, design, and ATS compatibility, offering actionable suggestions for improvement.",
                },
                {
                  q: "Can VisualCV AI suggest job titles based on my experience?",
                  a: "Yes, VisualCV AI suggests relevant job titles based on your skills and experience, helping you target roles that are a good match for your qualifications.",
                },
                {
                  q: "Does VisualCV AI integrate with job boards?",
                  a: "VisualCV AI allows you to export your resume in formats that are compatible with popular job boards like LinkedIn and Indeed, simplifying your job application process.",
                },
                {
                  q: "Can I download my resume in multiple formats?",
                  a: "Yes, VisualCV AI provides various download options, including PDF and DOCX, to ensure your resume is ready for different application requirements.",
                },
                {
                  q: "Can VisualCV AI help me create a LinkedIn profile?",
                  a: "While VisualCV AI doesn’t directly create LinkedIn profiles, it helps you craft high-quality resume content that can be seamlessly transferred to your LinkedIn profile.",
                },
                {
                  q: "Is VisualCV AI suitable for beginners?",
                  a: "Yes, VisualCV AI is user-friendly and offers step-by-step guidance, making it easy for beginners to optimize their resumes effectively.",
                },
                {
                  q: "Can VisualCV AI help me with resume maintenance?",
                  a: "Yes, VisualCV AI allows you to easily update your resume as you gain new skills and experiences, ensuring it always reflects your most recent qualifications.",
                },
                {
                  q: "Does VisualCV AI support multilingual resumes?",
                  a: "Yes, VisualCV AI supports multiple languages, allowing you to create resumes for job opportunities in different regions around the world.",
                },
                {
                  q: "What industries does VisualCV AI cater to?",
                  a: "VisualCV AI caters to a wide variety of industries, including technology, healthcare, finance, education, marketing, and more, offering tailored resume templates and advice for each.",
                },
                {
                  q: "Is VisualCV AI free to use?",
                  a: "VisualCV AI offers both free and paid plans. The free plan includes basic resume creation features, while the premium plan unlocks advanced tools and customization options for a more in-depth resume-building experience.",
                },
                {
                  q: "Can VisualCV AI help me with job interview preparation?",
                  a: "While VisualCV AI focuses on resume and cover letter creation, it also provides valuable resources, tips, and blog content to help with job interview preparation.",
                },
                {
                  q: "Does VisualCV AI provide analytics on my resume?",
                  a: "Yes, VisualCV AI offers analytics on your resume's performance, providing insights into how well it aligns with industry trends and job market expectations.",
                },
                {
                  q: "How secure is my data with VisualCV AI?",
                  a: "VisualCV AI prioritizes your data security, using encryption to protect your personal information and adhering to privacy regulations to ensure confidentiality.",
                },
                {
                  q: "How do I start using VisualCV AI?",
                  a: "Getting started with VisualCV AI is simple. Just sign up, upload your resume, and follow the easy-to-follow prompts to optimize it for job applications.",
                },
                {
                  q: "Can VisualCV AI help me create resumes for multiple jobs?",
                  a: "Yes, VisualCV AI allows you to create and customize multiple versions of your resume, each tailored to different job roles, increasing your chances of success.",
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
                src={VisualCV1}
                alt="visualai"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={VisualCV2}
                alt="visualai"
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
                    Why VisualCV AI is a Top Choice for Resume Creation and
                    Optimization
                  </h3>

                  <p className="text-start text-muted mb-3">
                    VisualCV AI revolutionizes the resume creation process by
                    focusing on both design and content optimization. Here’s why
                    VisualCV is the go-to tool for job seekers aiming to create
                    visually appealing and ATS-optimized resumes:
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
                      <strong>Visually Stunning Templates:</strong> VisualCV AI
                      offers beautiful and professional templates, making your
                      resume stand out while maintaining ATS compatibility.
                    </li>
                    <li className="mb-3">
                      <strong>AI-Powered Content Suggestions:</strong> Receive
                      personalized content recommendations that reflect your
                      professional experience and career goals, making your
                      resume more impactful.
                    </li>
                    <li className="mb-3">
                      <strong>ATS Compatibility:</strong> VisualCV AI ensures
                      your resume is optimized for Applicant Tracking Systems,
                      increasing your chances of passing ATS scans and catching
                      the eye of recruiters.
                    </li>
                    <li className="mb-3">
                      <strong>Customizable Recommendations:</strong> Get
                      tailored suggestions based on the job you’re applying for,
                      allowing you to fine-tune your resume for specific roles.
                    </li>
                    <li className="mb-3">
                      <strong>Real-Time Feedback:</strong> VisualCV AI provides
                      instant feedback and actionable suggestions, helping you
                      improve your resume and stay ahead in the job market.
                    </li>
                    <li className="mb-3">
                      <strong>Multiple Export Options:</strong> Export your
                      resume in various formats, including PDF and DOCX, to
                      ensure it’s ready for all types of job applications.
                    </li>
                    <li className="mb-3">
                      <strong>Continuous Improvement:</strong> Track your
                      resume’s progress over time with ongoing feedback,
                      ensuring it evolves to stay aligned with your job search
                      goals.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Let VisualCV AI Help You Create and Optimize Your Resume
                      for Success
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
              Why VisualCV AI is Highly Recommended
            </h4>
            <p className="text-center text-secondary mb-4">
              VisualCV AI stands out as a powerful platform for creating
              visually stunning and personalized resumes. Below are the key
              advantages and considerations when using this platform.
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
                    <strong>Visually Stunning Templates:</strong> VisualCV AI
                    offers beautifully designed templates that help your resume
                    stand out to hiring managers.
                  </li>
                  <li className="mb-2">
                    <strong>Personalized Content Suggestions:</strong> Receive
                    tailored content suggestions that reflect your experience
                    and career goals.
                  </li>
                  <li className="mb-2">
                    <strong>Performance Tracking:</strong> Monitor the success
                    of your resume with performance insights, including how your
                    resume is being viewed by employers.
                  </li>
                  <li className="mb-2">
                    <strong>Customizable for Different Roles:</strong> VisualCV
                    AI allows for customization based on specific job roles,
                    helping you tailor your resume to multiple career paths.
                  </li>
                  <li className="mb-2">
                    <strong>ATS Compatibility:</strong> VisualCV AI ensures your
                    resume is optimized to pass Applicant Tracking Systems,
                    increasing your chances of getting noticed.
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
                    <strong>Limited Free Features:</strong> Some advanced
                    features, such as access to premium templates and analytics,
                    are only available to premium users.
                  </li>
                  <li className="mb-2">
                    <strong>Free Version Limitations:</strong> The free version
                    offers limited access to customization options and template
                    choices.
                  </li>
                  <li className="mb-2">
                    <strong>Basic Visual Customization:</strong> While templates
                    are visually appealing, deeper customization of visual
                    design elements may be limited compared to other platforms.
                  </li>
                  <li className="mb-2">
                    <strong>Account Requirement:</strong> An account is
                    necessary to create, save, and track progress, which may not
                    be ideal for users who prefer an anonymous experience.
                  </li>
                  <li className="mb-2">
                    <strong>Focus on Content Over Design:</strong> While the
                    platform excels in content optimization, it may not offer
                    the level of creative design flexibility some users expect.
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
              Explore Powerful Alternatives for Building Resumes
            </h4>
            <p className="text-center text-secondary mb-4">
              VisualCV AI recommends a selection of top resume-building
              platforms that allow you to craft standout resumes, tailored to
              your career objectives and professional journey.
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
                    <strong>VisualCV AI</strong>: Craft visually appealing and
                    customized resumes with the help of AI, designed to help you
                    stand out and leave a lasting impression.
                  </li>
                  <li className="mb-2">
                    <strong>Resume.io</strong>: Build professional and modern
                    resumes quickly with a variety of templates and intuitive
                    tools for customization.
                  </li>
                  <li className="mb-2">
                    <strong>Resumake</strong>: A clean and minimalist platform
                    for fast resume creation, ideal for users who prefer
                    simplicity without compromising quality.
                  </li>
                  <li className="mb-2">
                    <strong>Standard Resume</strong>: Create sleek, professional
                    resumes with high ATS compatibility, designed to boost your
                    chances of securing interviews.
                  </li>
                  <li className="mb-2">
                    <strong>Jobscan AI</strong>: Optimize your resume with
                    ATS-friendly suggestions, automated analysis, and expert
                    recommendations for better job application success.
                  </li>
                  <li className="mb-2">
                    <strong>Kickresume AI</strong>: Generate AI-powered,
                    personalized resumes that highlight your skills and
                    accomplishments in a standout way.
                  </li>
                  <li className="mb-2">
                    <strong>Canva Resume Builder</strong>: Use Canva's
                    easy-to-use drag-and-drop interface to create beautifully
                    designed resumes, perfect for creative professionals.
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
          <div className="row align-items-center mb-5">
  {/* Image Section: Right on desktop, Top on mobile */}
  <div className="col-md-6 col-12 text-center order-1 order-md-2">
    <img
      src={visual}
      alt="Zety"
      style={{
        maxWidth: "100%",
        height: "300px",
        objectFit: "contain",
      }}
    />
  </div>

  {/* Text Section: Left on desktop, Bottom on mobile */}
  <div
    className="col-md-6 col-12 mb-4 mb-md-0 order-2 order-md-1"
    style={{ paddingRight: "30px" }}
  >
    <p className="text-primary">Write better, faster</p>
    <h1>VisualCV AI</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      VisualCV AI is a powerful tool designed to help job seekers
      build professional, optimized resumes and portfolios using
      artificial intelligence. With its AI-powered features, it allows
      users to create customized, ATS-friendly resumes and CVs,
      optimize job applications, track job progress, and much more.
      VisualCV offers tools for job search, professional portfolio
      creation, and career development, making it an all-in-one
      solution for job seekers.
    </p>
    <div className="mb-3">
      <a
        href="https://www.visualcv.com/"
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

        <section style={{ backgroundColor: "#0b1e3d", padding: "5rem 0" }}>
          <div className="container text-center">
            <p className="text-primary">
              Create Stunning Resumes with VisualCV AI
            </p>
            <h2
              style={{
                fontWeight: "600",
                color: "#fff",
                marginBottom: "1rem",
              }}
            >
              How VisualCV AI Helps You Craft a Professional Resume
            </h2>

            <div className="row g-4">
              {/* Step 1 */}
              <div className="col-md-4">
                <div
                  className="position-relative"
                  style={{
                    backgroundColor: "#1034A6",
                    borderRadius: "12px",
                    boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                    padding: "2rem",
                    height: "100%",
                  }}
                >
                  <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                    Analyzes Your Professional Profile
                  </h5>
                  <p style={{ color: "#fff", margin: 0 }}>
                    VisualCV AI examines your experience and career goals to
                    ensure your resume reflects your unique skills and
                    aspirations.
                  </p>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      right: "15px",
                      fontSize: "4rem",
                      fontWeight: "bold",
                      color: "#7b61ff",
                      opacity: 0.6,
                    }}
                  >
                    1
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="col-md-4">
                <div
                  className="position-relative"
                  style={{
                    backgroundColor: "#1034A6",
                    borderRadius: "12px",
                    boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                    padding: "2rem",
                    height: "100%",
                  }}
                >
                  <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                    Customizes Your Resume for Targeted Roles
                  </h5>
                  <p style={{ color: "#fff", margin: 0 }}>
                    VisualCV AI adjusts every section of your resume, from
                    experience to skills, tailoring it to specific job roles and
                    industries.
                  </p>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      right: "15px",
                      fontSize: "4rem",
                      fontWeight: "bold",
                      color: "#7b61ff",
                      opacity: 0.6,
                    }}
                  >
                    2
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="col-md-4">
                <div
                  className="position-relative"
                  style={{
                    backgroundColor: "#1034A6",
                    borderRadius: "12px",
                    boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                    padding: "2rem",
                    height: "100%",
                  }}
                >
                  <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                    Generates a Professionally Designed Resume
                  </h5>
                  <p style={{ color: "#fff", margin: 0 }}>
                    VisualCV AI generates a visually stunning, industry-ready
                    resume that highlights your key achievements and
                    professional experience.
                  </p>
                  <div
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      right: "15px",
                      fontSize: "4rem",
                      fontWeight: "bold",
                      color: "#7b61ff",
                      opacity: 0.6,
                    }}
                  >
                    3
                  </div>
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

export default VisualAI;
