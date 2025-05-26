import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import kick from "../../../../public/assets/Img/Ai for Resume/43.png";
import kick1 from "../../../../public/assets/Img/Ai for Resume/Kickresume1.png"
import kick2 from "../../../../public/assets/Img/Ai for Resume/Kickresume2.png";
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
const KickResume = () => {
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
                Effortless Resume Creation with Kickresume AI
              </p>
              <h3 className="">
                AI-Powered Resume Building for Career Success
              </h3>
            </div>
            {[
              {
                icon: "📝",
                title: "Smart Resume Recommendations",
                desc: "Kickresume AI provides intelligent suggestions for your resume content, helping you craft a personalized resume that highlights your skills and achievements effectively.",
              },
              {
                icon: "🌍",
                title: "Multilingual Support",
                desc: "Create resumes in multiple languages, making it easier for job seekers to apply for positions globally across different industries and regions.",
              },
              {
                icon: "⚡",
                title: "Quick and Efficient Resume Creation",
                desc: "Kickresume AI streamlines the resume-building process, enabling you to generate a professional, polished resume in a fraction of the time.",
              },
              {
                icon: "🔍",
                title: "ATS-Friendly Optimization",
                desc: "Kickresume AI ensures your resume is ATS-compatible by suggesting relevant keywords and structuring your content to pass Applicant Tracking Systems with ease.",
              },
              {
                icon: "🎯",
                title: "Job Role Customization",
                desc: "Receive tailored content recommendations specific to the job role you're aiming for, boosting your chances of catching the eye of hiring managers.",
              },
              {
                icon: "🔗",
                title: "Easy Job Board Integration",
                desc: "Effortlessly export your resume in formats that are compatible with major job boards such as LinkedIn, Indeed, and Glassdoor for smooth application submission.",
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
                  q: "What is Kickresume AI?",
                  a: "Kickresume AI is an advanced platform designed to help professionals craft personalized and visually striking resumes in just minutes with AI-assisted templates and suggestions.",
                },
                {
                  q: "How does Kickresume AI improve resume creation?",
                  a: "Kickresume AI provides smart content suggestions, layout optimization, and job-specific keyword recommendations, enabling you to create an eye-catching resume that showcases your strengths.",
                },
                {
                  q: "What are the key features of Kickresume AI?",
                  a: "Kickresume AI offers customizable templates, real-time feedback, ATS optimization, portfolio creation, and multiple export formats, making it easy to create a polished and tailored resume.",
                },
                {
                  q: "Can I create a cover letter with Kickresume AI?",
                  a: "Yes, Kickresume AI includes a cover letter builder with content suggestions and customizable templates, helping you write a personalized cover letter to complement your resume.",
                },
                {
                  q: "Is Kickresume AI compatible with Applicant Tracking Systems (ATS)?",
                  a: "Yes, Kickresume AI ensures your resume is ATS-friendly by providing optimized keywords and formatting that align with current recruitment standards.",
                },
                {
                  q: "What resume formats does Kickresume AI support?",
                  a: "Kickresume AI supports popular formats such as PDF, DOCX, and TXT, allowing you to export your resume in the format that suits your needs.",
                },
                {
                  q: "Can I export my resume to LinkedIn?",
                  a: "While Kickresume AI doesn't offer direct LinkedIn integration, you can easily export your resume and manually upload it to LinkedIn.",
                },
                {
                  q: "Does Kickresume AI offer job-specific recommendations?",
                  a: "Yes, Kickresume AI tailors suggestions based on your targeted job, recommending relevant skills and achievements to boost your chances of success.",
                },
                {
                  q: "How does Kickresume AI optimize my resume for different industries?",
                  a: "Kickresume AI provides industry-specific templates and suggestions, covering fields such as tech, marketing, finance, healthcare, and more, ensuring your resume aligns with industry standards.",
                },
                {
                  q: "Can I customize the design of my resume in Kickresume AI?",
                  a: "Yes, Kickresume AI offers a variety of professional templates that can be customized to match your style, while ensuring ATS compatibility.",
                },
                {
                  q: "Can Kickresume AI help me build a portfolio?",
                  a: "Yes, Kickresume AI allows you to create a portfolio to showcase your work, making it perfect for creative professionals looking to present their projects.",
                },
                {
                  q: "Is Kickresume AI cloud-based?",
                  a: "Yes, Kickresume AI is cloud-based, enabling you to access and update your resume from any device with an internet connection.",
                },
                {
                  q: "Does Kickresume AI offer feedback on my resume?",
                  a: "Yes, Kickresume AI provides real-time feedback on your resume’s design, content, and formatting, helping you refine it before submission.",
                },
                {
                  q: "Can Kickresume AI suggest job titles based on my experience?",
                  a: "Yes, Kickresume AI suggests job titles that align with your experience and skills, helping you target the most suitable positions.",
                },
                {
                  q: "Does Kickresume AI integrate with job boards?",
                  a: "Kickresume AI allows you to export your resume in formats compatible with major job boards like LinkedIn and Indeed, simplifying the application process.",
                },
                {
                  q: "Can I download my resume in multiple formats?",
                  a: "Yes, Kickresume AI offers various download options, including PDF, DOCX, and TXT formats, making it easy to share and apply for jobs.",
                },
                {
                  q: "Can Kickresume AI help me create a LinkedIn profile?",
                  a: "Kickresume AI doesn’t directly create LinkedIn profiles but helps you craft content that can be easily transferred to your LinkedIn profile.",
                },
                {
                  q: "Is Kickresume AI suitable for beginners?",
                  a: "Yes, Kickresume AI is beginner-friendly, providing step-by-step guidance and intuitive design tools for users with no prior experience in resume building.",
                },
                {
                  q: "Can Kickresume AI help me with resume maintenance?",
                  a: "Yes, Kickresume AI allows you to keep your resume up to date by adding new skills, experiences, and job roles, ensuring it reflects your latest achievements.",
                },
                {
                  q: "Does Kickresume AI support multilingual resumes?",
                  a: "Yes, Kickresume AI supports multiple languages, allowing you to create resumes in different languages for global job opportunities.",
                },
                {
                  q: "What industries does Kickresume AI cater to?",
                  a: "Kickresume AI provides templates and recommendations for a wide range of industries, including technology, finance, marketing, healthcare, and education.",
                },
                {
                  q: "Is Kickresume AI free to use?",
                  a: "Kickresume AI offers both free and paid plans. The free plan includes basic resume-building features, while the premium plan unlocks additional templates, export options, and advanced tools.",
                },
                {
                  q: "Can Kickresume AI help me with job interview preparation?",
                  a: "While Kickresume AI focuses on resume building, it provides useful resources and blog content to assist with job interview preparation.",
                },
                {
                  q: "Does Kickresume AI provide analytics on my resume?",
                  a: "Yes, Kickresume AI offers analytics to evaluate the effectiveness of your resume, offering suggestions for improvement based on industry trends.",
                },
                {
                  q: "How secure is my data with Kickresume AI?",
                  a: "Kickresume AI prioritizes data security and uses encryption to protect your personal information, complying with privacy regulations to ensure confidentiality.",
                },
                {
                  q: "How do I start using Kickresume AI?",
                  a: "Starting with Kickresume AI is simple. Just sign up, select a template, and follow the prompts to create your personalized resume.",
                },
                {
                  q: "Can Kickresume AI help me create resumes for multiple jobs?",
                  a: "Yes, Kickresume AI lets you create different versions of your resume, each tailored to a specific job role, maximizing your chances of success.",
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
                src={kick1}
                alt="kickresume"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6 ">
              <img
                src={kick2}
                alt="kickresume"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover "
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
                    Why Kickresume AI is a Top Choice for Resume Building
                  </h3>

                  <p className="text-start text-muted mb-3">
                    Kickresume AI makes resume creation effortless, offering a
                    unique approach to crafting visually stunning and
                    personalized resumes. Here's why Kickresume is ideal for job
                    seekers aiming to make a memorable impression:
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
                      <strong>Customizable Templates:</strong> Choose from a
                      variety of dynamic, professional templates that align with
                      your career goals and industry preferences.
                    </li>
                    <li className="mb-3">
                      <strong>Real-Time Personalization:</strong> Customize your
                      resume instantly with smart suggestions and adjustments
                      tailored to your experience and desired job role.
                    </li>
                    <li className="mb-3">
                      <strong>Visually Engaging Layouts:</strong> Stand out with
                      beautifully designed layouts that emphasize your skills
                      and experience while maintaining readability.
                    </li>
                    <li className="mb-3">
                      <strong>Industry-Specific Designs:</strong> Select from a
                      range of design options crafted for various professions,
                      including creative, technical, and executive roles.
                    </li>
                    <li className="mb-3">
                      <strong>ATS-Optimized Format:</strong> Ensure your resume
                      is optimized for Applicant Tracking Systems (ATS),
                      improving your chances of being noticed by employers.
                    </li>
                    <li className="mb-3">
                      <strong>Multiple Export Formats:</strong> Export your
                      resume in various formats such as PDF, DOCX, and more, so
                      it's ready for submission to potential employers.
                    </li>
                    <li className="mb-3">
                      <strong>Instant Feedback & Improvements:</strong> Get
                      real-time feedback on your resume's content, structure,
                      and design, ensuring continuous enhancement of its
                      quality.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Let Kickresume AI Help You Build a Professional Resume
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
              Why Kickresume AI is Highly Recommended
            </h4>
            <p className="text-center text-secondary mb-4">
              Kickresume AI stands out as an excellent choice for creating
              professional, tailored resumes. Below are the key advantages and
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
                    <strong>Visually Striking Templates:</strong> Kickresume AI
                    offers polished, modern templates that highlight your skills
                    and experience in a visually appealing way.
                  </li>
                  <li className="mb-2">
                    <strong>AI-Driven Resume Customization:</strong> Tailored
                    content suggestions help you align your resume with specific
                    job roles, optimizing your chances of standing out to
                    recruiters.
                  </li>
                  <li className="mb-2">
                    <strong>Real-Time Resume Preview:</strong> See instant
                    updates as you edit, ensuring a seamless creation process
                    with a ready-to-submit resume.
                  </li>
                  <li className="mb-2">
                    <strong>ATS-Optimized Formatting:</strong> Your resume is
                    designed to pass through Applicant Tracking Systems, giving
                    you an edge in automated screenings.
                  </li>
                  <li className="mb-2">
                    <strong>Highly Customizable:</strong> Easily adjust
                    sections, colors, and fonts to match your professional style
                    and preferences.
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
                    features, such as export options or access to premium
                    templates, are only available to premium users.
                  </li>
                  <li className="mb-2">
                    <strong>Limited Free Template Access:</strong> Free users
                    may have limited access to some high-quality templates that
                    could enhance your resume.
                  </li>
                  <li className="mb-2">
                    <strong>Customization Restrictions:</strong> While
                    Kickresume AI offers flexible options, more complex
                    customizations may be limited compared to other platforms.
                  </li>
                  <li className="mb-2">
                    <strong>Lack of Portfolio Hosting:</strong> Kickresume AI
                    does not provide an option to host your portfolio, which
                    might be a drawback for creative professionals.
                  </li>
                  <li className="mb-2">
                    <strong>Account Sign-Up Required:</strong> You need to
                    create an account to save and download your resume, which
                    might not suit those who prefer anonymous or guest access.
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
              Kickresume AI suggests a curated list of top resume-building
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
                    <strong>Kickresume AI</strong>: Design personalized resumes
                    with AI-driven content that reflects your experience,
                    skills, and ambitions for a standout job application.
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
                    <strong>Jobscan</strong>: Optimize your resume for ATS with
                    automated analysis and expert suggestions, improving your
                    chances of passing applicant tracking systems.
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
<<<<<<< HEAD
        <div className="row d-flex align-items-center justify-content-between mb-1">
  {/* Right side (Image Section) on mobile, left on desktop */}
  <div
    className="col-12 col-md-6 order-1 order-md-2 mb-4 mb-md-0 text-center"
  >
    <img
      src={kick}
      alt="Kickresume AI"
      style={{ maxWidth: "100%", height: "300px", objectFit: "contain" }}
    />
  </div>

  {/* Left side (Text Section) */}
  <div className="col-12 col-md-6 order-2 order-md-1">
    <p className="text-primary">Write better, faster</p>
    <h1>Kickresume AI</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      Kickresume AI is an AI-powered resume and career tool designed
      to help job seekers build, optimize, and tailor their resumes
      for the best job opportunities. It provides advanced features
      like automated resume generation, job matching, career coaching,
      and interview preparation.
    </p>
    <p>
      Kickresume also offers templates for resumes, CVs, and cover letters, 
      making it a comprehensive platform for improving your job search experience.
    </p>

    <div className="mb-3">
      <a
        href="https://www.kickresume.com"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary me-2"
      >
        Explore Tool
      </a>
    </div>
  </div>
</div>

=======
         <div className="row d-flex align-items-center justify-content-between mb-1">
  {/* Left side (Text Section) */}
  <div
    style={{ paddingRight: "30px" }}
    className="col-12 col-md-6 order-2 order-md-1"
  >
    <p className="text-primary">Write better, faster</p>
    <h1>Kickresume AI</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      Kickresume AI is an AI-powered resume and career tool designed to help job seekers build, optimize, and tailor their resumes for the best job opportunities. It provides advanced features like automated resume generation, job matching, career coaching, and interview preparation. Kickresume also offers templates for resumes, CVs, and cover letters, making it a comprehensive platform for those seeking to improve their job search experience.
    </p>
    <p>
      Kickresume AI is a versatile career platform that provides various tools to streamline the job application process. With its AI-powered features, users can generate professional resumes, optimize them for ATS (Applicant Tracking Systems), and receive personalized job recommendations. The platform is user-friendly and provides a structured approach to job applications, ensuring higher chances of success in a competitive job market.
    </p>
    <div className="mb-3">
      <a
        href="https://www.kickresume.com"
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
    className="col-12 col-md-6 order-1 order-md-2 text-center mb-3"
  >
    <img
      src={kick}
      alt="Kickresume"
      className="img-fluid rounded"
      style={{ maxWidth: "100%", height: "auto", maxHeight: "300px" }}
    />
  </div>
</div>

>>>>>>> 9732e077a94f9a43e3fcff86cd1122391726245d
          <section style={{ backgroundColor: "#0b1e3d", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">
                Create Impactful Resumes with Kickresume AI
              </p>
              <h2
                style={{
                  fontWeight: "600",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                How Kickresume AI Helps You Build a Winning Resume
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
                      Kickresume AI examines your professional journey and
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
                      Kickresume AI customizes every section of your resume,
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
      </div>
    </>
  );
};

export default KickResume;
