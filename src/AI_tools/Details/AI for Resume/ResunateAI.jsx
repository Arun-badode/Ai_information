import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import resunate from "../../../../public/assets/Img/Ai for Resume/47.png";
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
const ResunateAI = () => {
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
                Effortless Resume Creation with Resunate AI
              </p>
              <h3 className="">
                ATS-Friendly Resume Design for Career Success
              </h3>
            </div>
            {[
              {
                icon: "📝",
                title: "ATS Optimization Recommendations",
                desc: "Resunate AI provides intelligent recommendations to optimize your resume for Applicant Tracking Systems (ATS), ensuring your resume passes automated screenings and gets noticed by recruiters.",
              },
              {
                icon: "🌍",
                title: "Multilingual Resume Support",
                desc: "Create resumes in multiple languages, allowing you to target global job opportunities across various industries and regions, enhancing your reach and job prospects.",
              },
              {
                icon: "⚡",
                title: "Fast and Efficient Resume Customization",
                desc: "Resunate AI simplifies the resume-building process, enabling you to quickly generate a professional, ATS-optimized resume without hassle.",
              },
              {
                icon: "🔍",
                title: "Job-Specific Content Recommendations",
                desc: "Resunate AI customizes your resume with job-specific keywords and content suggestions, helping you stand out for the roles you're applying to.",
              },
              {
                icon: "🎯",
                title: "Industry-Specific Resume Tips",
                desc: "Get tailored advice and suggestions for various industries like tech, finance, healthcare, and marketing, ensuring your resume meets the standards and expectations of each industry.",
              },
              {
                icon: "🔗",
                title: "Seamless Job Board Integration",
                desc: "Easily export your optimized resume in formats compatible with job boards like LinkedIn, Indeed, and Glassdoor, simplifying the job application process.",
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
                  q: "What is Resunate AI?",
                  a: "Resunate AI is an advanced platform that helps job seekers craft visually stunning, ATS-optimized resumes and cover letters, significantly improving their chances of standing out during the job application process.",
                },
                {
                  q: "How does Resunate AI improve resume creation?",
                  a: "Resunate AI provides tailored keyword suggestions, industry-specific templates, and real-time feedback, ensuring that your resume is both visually appealing and ATS-compatible.",
                },
                {
                  q: "What are the key features of Resunate AI?",
                  a: "Resunate AI offers industry-specific templates, real-time content suggestions, ATS optimization, customizable designs, and the ability to create professional cover letters to improve your job application outcomes.",
                },
                {
                  q: "Can Resunate AI help me create a cover letter?",
                  a: "Yes, Resunate AI includes a cover letter builder with personalized content recommendations, helping you craft a cover letter that complements your resume.",
                },
                {
                  q: "Is Resunate AI compatible with Applicant Tracking Systems (ATS)?",
                  a: "Yes, Resunate AI is specifically designed to optimize your resume for ATS, helping you navigate automated screening processes and improve your visibility to recruiters.",
                },
                {
                  q: "What resume formats does Resunate AI support?",
                  a: "Resunate AI supports multiple formats, including PDF and DOCX, ensuring your resume is compatible with ATS systems and ready for submission to employers.",
                },
                {
                  q: "Can I export my resume to LinkedIn?",
                  a: "While Resunate AI does not offer direct LinkedIn integration, you can export your resume in formats that can be easily uploaded to your LinkedIn profile manually.",
                },
                {
                  q: "Does Resunate AI offer job-specific recommendations?",
                  a: "Yes, Resunate AI provides customized suggestions based on the job you are applying for, ensuring your resume highlights the most relevant skills and experiences for each specific role.",
                },
                {
                  q: "How does Resunate AI optimize my resume for different industries?",
                  a: "Resunate AI provides industry-specific templates and recommendations, helping you customize your resume to meet the expectations and standards of various fields like technology, healthcare, finance, and more.",
                },
                {
                  q: "Can I customize the design of my resume in Resunate AI?",
                  a: "Yes, Resunate AI offers a wide range of customizable templates, allowing you to create a visually appealing resume that is also optimized for ATS compatibility.",
                },
                {
                  q: "Can Resunate AI help me build a portfolio?",
                  a: "Resunate AI focuses primarily on resume and cover letter creation, but it can help you build a strong personal brand, which can be showcased through an online portfolio, especially useful for creative professionals.",
                },
                {
                  q: "Is Resunate AI cloud-based?",
                  a: "Yes, Resunate AI is cloud-based, allowing you to access and update your resume from any device with an internet connection, making it convenient for job seekers on the move.",
                },
                {
                  q: "Does Resunate AI offer feedback on my resume?",
                  a: "Yes, Resunate AI provides real-time feedback on your resume’s content, design, and ATS compatibility, offering actionable suggestions for improvement.",
                },
                {
                  q: "Can Resunate AI suggest job titles based on my experience?",
                  a: "Yes, Resunate AI suggests relevant job titles based on your skills and experience, helping you target positions that align with your qualifications.",
                },
                {
                  q: "Does Resunate AI integrate with job boards?",
                  a: "Resunate AI allows you to export your resume in formats compatible with popular job boards like LinkedIn and Indeed, simplifying the job application process.",
                },
                {
                  q: "Can I download my resume in multiple formats?",
                  a: "Yes, Resunate AI offers various download options, including PDF and DOCX, ensuring your resume is ready for different application needs.",
                },
                {
                  q: "Can Resunate AI help me create a LinkedIn profile?",
                  a: "While Resunate AI doesn’t directly create LinkedIn profiles, it helps you craft high-quality resume content that can be seamlessly transferred to your LinkedIn profile.",
                },
                {
                  q: "Is Resunate AI suitable for beginners?",
                  a: "Yes, Resunate AI is user-friendly and offers step-by-step guidance, making it easy for beginners to optimize their resumes effectively.",
                },
                {
                  q: "Can Resunate AI help me with resume maintenance?",
                  a: "Yes, Resunate AI makes it easy to update your resume as you gain new skills and experiences, ensuring it stays up-to-date for job applications.",
                },
                {
                  q: "Does Resunate AI support multilingual resumes?",
                  a: "Yes, Resunate AI supports multiple languages, allowing you to create resumes in various languages for international job opportunities.",
                },
                {
                  q: "What industries does Resunate AI cater to?",
                  a: "Resunate AI serves a wide range of industries, including technology, healthcare, finance, education, and marketing, offering customized resume templates and advice for each field.",
                },
                {
                  q: "Is Resunate AI free to use?",
                  a: "Resunate AI offers both free and premium plans. The free plan includes basic features, while the premium plan unlocks advanced tools and additional customization options.",
                },
                {
                  q: "Can Resunate AI help me with job interview preparation?",
                  a: "While Resunate AI specializes in resume and cover letter creation, it also provides useful tips and resources to support your job interview preparation.",
                },
                {
                  q: "Does Resunate AI provide analytics on my resume?",
                  a: "Yes, Resunate AI offers performance analytics on your resume, providing insights into how well it aligns with industry trends and job market expectations.",
                },
                {
                  q: "How secure is my data with Resunate AI?",
                  a: "Resunate AI prioritizes data security, using encryption to protect your personal information and complying with privacy regulations to ensure your data remains confidential.",
                },
                {
                  q: "How do I start using Resunate AI?",
                  a: "To get started with Resunate AI, simply sign up, upload your resume, and follow the intuitive prompts to optimize it for your job applications.",
                },
                {
                  q: "Can Resunate AI help me create resumes for multiple jobs?",
                  a: "Yes, Resunate AI allows you to create and customize multiple versions of your resume, each tailored to different job roles, increasing your chances of success.",
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
                    Why Resunate AI is the Best Choice for Resume Creation and
                    Optimization
                  </h3>

                  <p className="text-start text-muted mb-3">
                    Resunate AI revolutionizes the way you create and optimize
                    your resume by combining intuitive design with advanced
                    content recommendations. Here’s why Resunate AI is the
                    preferred tool for job seekers looking to craft standout,
                    ATS-ready resumes:
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
                      <strong>Tailored Templates for Every Industry:</strong>{" "}
                      Resunate AI offers a wide selection of professionally
                      designed templates that not only look great but are
                      optimized for different job sectors.
                    </li>
                    <li className="mb-3">
                      <strong>AI-Powered Resume Suggestions:</strong> Receive
                      personalized, role-specific recommendations that help you
                      highlight your most relevant skills and experiences,
                      making your resume more impactful.
                    </li>
                    <li className="mb-3">
                      <strong>ATS Optimization:</strong> Resunate AI ensures
                      that your resume is fully compatible with Applicant
                      Tracking Systems (ATS), increasing your chances of passing
                      ATS filters and getting noticed by employers.
                    </li>
                    <li className="mb-3">
                      <strong>Real-Time Customization:</strong> Fine-tune your
                      resume with real-time feedback, allowing you to adjust
                      your resume based on different job applications and
                      industries.
                    </li>
                    <li className="mb-3">
                      <strong>Instant, Actionable Feedback:</strong> Receive
                      immediate suggestions for improving your resume’s content
                      and formatting, ensuring you’re always on track in the
                      competitive job market.
                    </li>
                    <li className="mb-3">
                      <strong>Multiple Export Formats:</strong> Easily export
                      your resume in PDF, DOCX, and other formats, making it
                      easy to submit to various job application portals and
                      employers.
                    </li>
                    <li className="mb-3">
                      <strong>Continuous Resume Enhancement:</strong> Track your
                      resume’s progress over time with ongoing feedback to keep
                      it up-to-date with the latest trends and job market
                      requirements.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Let Resunate AI Help You Build and Optimize Your Resume
                      for Career Success
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
              Why Resunate AI is Highly Recommended
            </h4>
            <p className="text-center text-secondary mb-4">
              Resunate AI stands out as an innovative platform for building
              personalized, ATS-ready resumes. Below are the key advantages and
              considerations when using this platform.
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
                    <strong>AI-Driven Resume Optimization:</strong> Resunate AI
                    provides intelligent suggestions to tailor your resume for
                    specific roles and industries, maximizing your chances of
                    success.
                  </li>
                  <li className="mb-2">
                    <strong>ATS Compatibility:</strong> Resunate AI ensures your
                    resume passes through Applicant Tracking Systems (ATS),
                    making it more likely to be noticed by recruiters.
                  </li>
                  <li className="mb-2">
                    <strong>Industry-Specific Templates:</strong> Choose from a
                    wide range of resume templates designed for various
                    industries, ensuring your resume is visually appealing and
                    functional.
                  </li>
                  <li className="mb-2">
                    <strong>Role Customization:</strong> Customize your resume
                    to highlight the specific skills and experiences that matter
                    most to your target role.
                  </li>
                  <li className="mb-2">
                    <strong>Quick and Easy Process:</strong> Resunate AI
                    simplifies the resume-building process, allowing you to
                    create a professional resume in just a few steps.
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
                    <strong>Premium Features Only:</strong> Some advanced
                    features, such as additional templates and detailed
                    analytics, are available only with a premium subscription.
                  </li>
                  <li className="mb-2">
                    <strong>Limited Free Plan:</strong> The free plan offers
                    basic functionality, with restrictions on customization and
                    template selection.
                  </li>
                  <li className="mb-2">
                    <strong>Account Creation Required:</strong> Creating an
                    account is mandatory to save and track progress, which may
                    not appeal to those who prefer more anonymous options.
                  </li>
                  <li className="mb-2">
                    <strong>Limited Visual Customization:</strong> Resunate AI
                    focuses on content optimization, which may not satisfy users
                    looking for more creative flexibility in visual design.
                  </li>
                  <li className="mb-2">
                    <strong>Relatively Basic Templates:</strong> While effective
                    for most users, the available templates may feel too basic
                    for those looking for highly unique and personalized
                    designs.
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
              Resunate AI presents a collection of top resume-building platforms
              that help you craft standout resumes, tailored to your career
              aspirations and professional journey.
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
                    <strong>Resunate AI</strong>: Build personalized, ATS-ready
                    resumes using AI-driven features that tailor content for
                    specific roles and employers.
                  </li>
                  <li className="mb-2">
                    <strong>Resume Genius</strong>: Create resumes with ease
                    using customizable templates, designed to cater to various
                    industries and job roles.
                  </li>
                  <li className="mb-2">
                    <strong>Novoresume</strong>: Design modern and professional
                    resumes with pre-designed templates that ensure clarity and
                    ATS optimization.
                  </li>
                  <li className="mb-2">
                    <strong>Zety</strong>: Quickly build professional resumes
                    with Zety's step-by-step guidance, offering a wide variety
                    of templates and customization options.
                  </li>
                  <li className="mb-2">
                    <strong>Resume Builder Pro</strong>: Create high-quality
                    resumes with professionally designed templates and
                    job-specific recommendations.
                  </li>
                  <li className="mb-2">
                    <strong>VisualCV</strong>: Customize your resume with modern
                    templates and showcase your experience in a visually
                    appealing format.
                  </li>
                  <li className="mb-2">
                    <strong>Canva Resume Builder</strong>: Utilize Canva's
                    drag-and-drop interface to design creative and eye-catching
                    resumes, perfect for professionals in design and other
                    creative fields.
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
                src={resunate}
                alt="resunate"
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
              <h1>Resunate AI</h1>

              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Resunate AI is an innovative AI-powered platform designed to
                help job seekers optimize their resumes and CVs, making them
                more attractive to recruiters and Applicant Tracking Systems
                (ATS). Resunate AI offers a suite of tools, including resume
                building, ATS optimization, job search tools, job
                recommendations, and career coaching. By utilizing AI, Resunate
                streamlines the resume creation process and ensures it aligns
                with industry standards and job descriptions.
              </p>
              <div className="mb-3">
                <a
                  href=" https://www.resunate.com"
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
                    career goals, ensuring that your resume reflects your unique
                    skills and aspirations.
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
      </div>
    </>
  );
};

export default ResunateAI;
