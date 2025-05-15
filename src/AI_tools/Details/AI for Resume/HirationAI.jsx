import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import hiration from "../../../../public/assets/Img/Ai for Resume/47.png";
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
const HirationAI = () => {
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
                  q: "What is Hiration AI?",
                  a: "Hiration AI is a cutting-edge platform designed to help job seekers create visually appealing, ATS-friendly resumes and cover letters, improving their chances of standing out during job applications.",
                },
                {
                  q: "How does Hiration AI improve resume creation?",
                  a: "Hiration AI offers personalized keyword suggestions, customizable templates, and real-time feedback, ensuring that your resume is both ATS-compatible and visually compelling.",
                },
                {
                  q: "What are the key features of Hiration AI?",
                  a: "Hiration AI provides industry-specific templates, ATS optimization, customizable design options, real-time feedback, and the ability to build professional cover letters, enhancing your job application process.",
                },
                {
                  q: "Can Hiration AI help me create a cover letter?",
                  a: "Yes, Hiration AI includes a cover letter builder with personalized content suggestions, helping you craft a tailored cover letter that complements your resume.",
                },
                {
                  q: "Is Hiration AI compatible with Applicant Tracking Systems (ATS)?",
                  a: "Yes, Hiration AI is specifically designed to optimize your resume for ATS, helping you pass automated screening processes and improving your chances of being noticed by recruiters.",
                },
                {
                  q: "What resume formats does Hiration AI support?",
                  a: "Hiration AI supports multiple formats, including PDF and DOCX, making it easy to share your optimized resume with potential employers and ensuring compatibility with ATS systems.",
                },
                {
                  q: "Can I export my resume to LinkedIn?",
                  a: "While Hiration AI doesn’t offer direct integration with LinkedIn, it allows you to export your resume in formats that can be manually uploaded to your LinkedIn profile.",
                },
                {
                  q: "Does Hiration AI offer job-specific recommendations?",
                  a: "Yes, Hiration AI provides tailored suggestions based on the job you're applying for, ensuring your resume highlights the most relevant skills and experiences for each position.",
                },
                {
                  q: "How does Hiration AI optimize my resume for different industries?",
                  a: "Hiration AI offers industry-specific templates and advice, helping you tailor your resume to meet the standards and expectations of various fields like tech, healthcare, finance, and more.",
                },
                {
                  q: "Can I customize the design of my resume in Hiration AI?",
                  a: "Yes, Hiration AI provides a wide range of customizable templates, allowing you to create a visually stunning resume that is also ATS-friendly.",
                },
                {
                  q: "Can Hiration AI help me build a portfolio?",
                  a: "Hiration AI primarily focuses on resume and cover letter creation but helps you build a strong personal brand that can be displayed in an online portfolio, especially beneficial for creative professionals.",
                },
                {
                  q: "Is Hiration AI cloud-based?",
                  a: "Yes, Hiration AI is cloud-based, allowing you to access and update your resume from any device with an internet connection, making it convenient for job seekers on the move.",
                },
                {
                  q: "Does Hiration AI offer feedback on my resume?",
                  a: "Yes, Hiration AI provides real-time feedback on your resume’s content, design, and ATS compatibility, offering actionable suggestions for improvement.",
                },
                {
                  q: "Can Hiration AI suggest job titles based on my experience?",
                  a: "Yes, Hiration AI suggests relevant job titles based on your skills and experience, helping you target roles that align with your qualifications.",
                },
                {
                  q: "Does Hiration AI integrate with job boards?",
                  a: "Hiration AI allows you to export your resume in formats compatible with popular job boards like LinkedIn and Indeed, simplifying your job application process.",
                },
                {
                  q: "Can I download my resume in multiple formats?",
                  a: "Yes, Hiration AI offers various download options, including PDF and DOCX, ensuring your resume is ready for different application needs.",
                },
                {
                  q: "Can Hiration AI help me create a LinkedIn profile?",
                  a: "While Hiration AI doesn’t directly create LinkedIn profiles, it helps you craft high-quality resume content that can be seamlessly transferred to your LinkedIn profile.",
                },
                {
                  q: "Is Hiration AI suitable for beginners?",
                  a: "Yes, Hiration AI is user-friendly and offers step-by-step guidance, making it easy for beginners to optimize their resumes effectively.",
                },
                {
                  q: "Can Hiration AI help me with resume maintenance?",
                  a: "Yes, Hiration AI allows you to easily update your resume as you gain new skills and experiences, ensuring your resume stays current.",
                },
                {
                  q: "Does Hiration AI support multilingual resumes?",
                  a: "Yes, Hiration AI supports multiple languages, allowing you to create resumes in various languages for job opportunities around the world.",
                },
                {
                  q: "What industries does Hiration AI cater to?",
                  a: "Hiration AI serves a wide range of industries, including technology, healthcare, finance, education, and marketing, offering customized resume templates and advice for each.",
                },
                {
                  q: "Is Hiration AI free to use?",
                  a: "Hiration AI offers both free and premium plans. The free plan includes basic features, while the premium plan provides access to advanced tools and customization options.",
                },
                {
                  q: "Can Hiration AI help me with job interview preparation?",
                  a: "While Hiration AI focuses on resume and cover letter creation, it also provides valuable resources and tips to help with job interview preparation.",
                },
                {
                  q: "Does Hiration AI provide analytics on my resume?",
                  a: "Yes, Hiration AI offers analytics on your resume’s performance, providing insights into how well it matches industry trends and job market expectations.",
                },
                {
                  q: "How secure is my data with Hiration AI?",
                  a: "Hiration AI takes data security seriously, using encryption to protect your personal information and complying with privacy regulations to ensure confidentiality.",
                },
                {
                  q: "How do I start using Hiration AI?",
                  a: "Getting started with Hiration AI is easy. Simply sign up, upload your resume, and follow the user-friendly prompts to optimize it for job applications.",
                },
                {
                  q: "Can Hiration AI help me create resumes for multiple jobs?",
                  a: "Yes, Hiration AI allows you to create and customize multiple versions of your resume, each tailored to different job roles, enhancing your chances of success.",
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
                    Why Hiration AI is a Top Choice for Resume Creation and
                    Optimization
                  </h3>

                  <p className="text-start text-muted mb-3">
                    Hiration AI transforms the resume creation process by
                    combining sophisticated design with content optimization.
                    Here’s why Hiration is the go-to tool for job seekers
                    looking to create polished, ATS-friendly resumes:
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
                      <strong>Visually Stunning Templates:</strong> Hiration AI
                      offers beautifully designed, professional templates that
                      make your resume stand out while ensuring ATS
                      compatibility.
                    </li>
                    <li className="mb-3">
                      <strong>AI-Powered Content Suggestions:</strong> Receive
                      personalized content recommendations based on your career
                      goals and experience, making your resume more impactful
                      and tailored to specific roles.
                    </li>
                    <li className="mb-3">
                      <strong>ATS Compatibility:</strong> Hiration AI ensures
                      your resume is optimized for Applicant Tracking Systems,
                      boosting your chances of passing ATS scans and catching
                      recruiters’ attention.
                    </li>
                    <li className="mb-3">
                      <strong>Customizable Recommendations:</strong> Tailored
                      suggestions for each job application, enabling you to
                      fine-tune your resume for different positions and
                      industries.
                    </li>
                    <li className="mb-3">
                      <strong>Real-Time Feedback:</strong> Get instant,
                      actionable feedback to improve your resume and enhance
                      your chances of landing interviews in a competitive job
                      market.
                    </li>
                    <li className="mb-3">
                      <strong>Multiple Export Options:</strong> Export your
                      resume in PDF, DOCX, and other formats, ensuring
                      compatibility with various job application platforms.
                    </li>
                    <li className="mb-3">
                      <strong>Continuous Improvement:</strong> Track your
                      resume’s development over time, receiving continuous
                      feedback that keeps it aligned with evolving job search
                      trends.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Let Hiration AI Help You Create and Optimize Your Resume
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
              Why Hiration AI is Highly Recommended
            </h4>
            <p className="text-center text-secondary mb-4">
              Hiration AI stands out as a powerful platform for creating
              industry-ready, personalized resumes. Below are the key advantages
              and considerations when using this platform.
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
                    <strong>Industry-Ready Templates:</strong> Hiration AI
                    offers beautifully designed, modern templates that ensure
                    your resume stands out to recruiters and hiring managers.
                  </li>
                  <li className="mb-2">
                    <strong>AI-Powered Content Suggestions:</strong> Receive
                    tailored suggestions based on your career goals, experience,
                    and job preferences to create the perfect resume.
                  </li>
                  <li className="mb-2">
                    <strong>ATS Compatibility:</strong> Hiration AI optimizes
                    your resume to pass Applicant Tracking Systems, enhancing
                    your chances of being noticed by employers.
                  </li>
                  <li className="mb-2">
                    <strong>Role-Specific Customization:</strong> Customize your
                    resume to match the specific requirements of different job
                    roles and industries.
                  </li>
                  <li className="mb-2">
                    <strong>Easy-to-Use Interface:</strong> Hiration's intuitive
                    platform makes resume building effortless, even for users
                    with little to no design experience.
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
                    <strong>Limited Free Features:</strong> Some premium
                    features, like access to advanced templates and detailed
                    analytics, are only available to premium users.
                  </li>
                  <li className="mb-2">
                    <strong>Basic Customization Options:</strong> While
                    templates are highly effective, users looking for deeper
                    customization may find the visual design options somewhat
                    limiting.
                  </li>
                  <li className="mb-2">
                    <strong>Account Requirement:</strong> Creating an account is
                    mandatory to save and track progress, which may not be ideal
                    for users seeking anonymity.
                  </li>
                  <li className="mb-2">
                    <strong>Focus on Content Rather Than Design:</strong> While
                    Hiration excels in content optimization, those looking for
                    full creative freedom in visual design may find it lacking.
                  </li>
                  <li className="mb-2">
                    <strong>Free Version Limitations:</strong> The free version
                    offers limited access to templates and customization
                    features, potentially restricting users' flexibility.
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
              Hiration AI recommends a selection of top resume-building
              platforms that enable you to craft standout resumes, aligned with
              your career goals and professional journey.
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
                    <strong>Hiration AI</strong>: Build personalized,
                    industry-ready resumes with AI-driven features that tailor
                    your content to specific roles and employers.
                  </li>
                  <li className="mb-2">
                    <strong>Resume.io</strong>: Quickly create professional
                    resumes using a variety of customizable templates designed
                    for all industries.
                  </li>
                  <li className="mb-2">
                    <strong>Resumake</strong>: A minimalist platform that
                    enables fast resume creation, perfect for users who prefer
                    simplicity while maintaining high quality.
                  </li>
                  <li className="mb-2">
                    <strong>Standard Resume</strong>: Design sleek, ATS-friendly
                    resumes to increase your chances of securing interviews
                    across top industries.
                  </li>
                  <li className="mb-2">
                    <strong>Jobscan AI</strong>: Optimize your resume with
                    ATS-compatible recommendations and analysis to enhance your
                    job application success.
                  </li>
                  <li className="mb-2">
                    <strong>Kickresume AI</strong>: Create AI-powered,
                    personalized resumes that highlight your achievements and
                    skills for maximum impact.
                  </li>
                  <li className="mb-2">
                    <strong>Canva Resume Builder</strong>: Leverage Canva's
                    intuitive drag-and-drop interface to craft visually stunning
                    resumes, ideal for creative professionals.
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
          <div className=" row d-flex align-items-center justify-content-between mb-1">
            {/* Left side (Text Section) */}
            <div
              style={{ flex: 1, paddingRight: "30px" }}
              className="col-6 col-md-12 "
            >
              <p className="text-primary">Write better, faster</p>
              <h1>Hiration AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Hiration AI is an advanced AI-powered tool designed to assist
                job seekers in building optimized resumes, CVs, cover letters,
                and professional portfolios. It also provides a range of career
                tools, such as job search assistants, interview preparation, and
                career coaching. With its AI-driven features, Hiration ensures
                that resumes are tailored to specific job descriptions and
                optimized for ATS (Applicant Tracking Systems), improving the
                chances of job seekers getting noticed by recruiters.
              </p>

              <p>
                Hiration AI has garnered positive reviews for its powerful
                resume-building capabilities and comprehensive career tools. Job
                seekers particularly appreciate its AI-powered resume builder,
                which helps craft tailored, ATS-friendly resumes with
                professional templates. The platform also offers career
                coaching, job search tools, and resume optimization features,
                making it a popular choice for professionals across industries.
                However, some users find the premium features necessary for full
                access to all tools, which may not be ideal for budget-conscious
                job seekers.
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
                src={hiration}
                style={{ MaxWidth: "100%", height: "300px" }}
              />
            </div>
          </div>

          <section style={{ backgroundColor: "#0b1e3d", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">
                Create Stunning Resumes with Hiration AI
              </p>
              <h2
                style={{
                  fontWeight: "600",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                How Hiration AI Helps You Craft a Professional Resume
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
                      Analyzes Your Professional Profile
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Hiration AI evaluates your professional experience and
                      career goals, ensuring that your resume reflects your
                      unique skills and aspirations.
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
                      Customizes Your Resume for Targeted Roles
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Hiration AI personalizes your resume by adjusting every
                      section, from experience to skills, tailored specifically
                      for the job roles and industries you're targeting.
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
                      Generates a Professionally Designed Resume
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Hiration AI creates a polished, visually stunning resume
                      that effectively highlights your key achievements and
                      professional experience, making you stand out.
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

export default HirationAI;
