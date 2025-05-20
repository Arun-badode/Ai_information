import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import enhanev from "../../../../public/assets/Img/Ai for Resume/42.png";
import Enhancv1 from "../../../../public/assets/Img/Ai for Resume/Enhancv1.png";
import Enhancv2 from "../../../../public/assets/Img/Ai for Resume/Enhancv2.png";
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
const EnhanevAI = () => {
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
                Effortless Resume Creation with Enhancv AI
              </p>
              <h3 className="">
                AI-Powered Resume Building for Career Success
              </h3>
            </div>
            {[
              {
                icon: "📝",
                title: "Smart Resume Recommendations",
                desc: "Enhancv AI provides intelligent suggestions for your resume content, helping you craft a personalized resume that highlights your skills and achievements effectively.",
              },
              {
                icon: "🌍",
                title: "Multilingual Support",
                desc: "Create resumes in multiple languages, making it easier for job seekers to apply for positions globally across different industries and regions.",
              },
              {
                icon: "⚡",
                title: "Quick and Efficient Resume Creation",
                desc: "Enhancv AI streamlines the resume-building process, enabling you to generate a professional, polished resume in a fraction of the time.",
              },
              {
                icon: "🔍",
                title: "ATS-Friendly Optimization",
                desc: "Enhancv AI ensures your resume is ATS-compatible by suggesting relevant keywords and structuring your content to pass Applicant Tracking Systems with ease.",
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
                  q: "What is Enhancv AI?",
                  a: "Enhancv AI is a powerful tool designed to help professionals build visually impressive, personalized resumes in minutes with AI-assisted templates and suggestions.",
                },
                {
                  q: "How does Enhancv AI enhance resume creation?",
                  a: "Enhancv AI provides intelligent content suggestions, layout optimization, and role-specific keyword recommendations, enabling you to create a standout resume that highlights your strengths.",
                },
                {
                  q: "What are the key features of Enhancv AI?",
                  a: "Enhancv AI offers customizable templates, real-time feedback, ATS optimization, portfolio creation, and multiple export formats to help you create a professional and tailored resume.",
                },
                {
                  q: "Can I create a cover letter with Enhancv AI?",
                  a: "Yes, Enhancv AI includes a cover letter builder that offers content suggestions and customizable templates to help you write a personalized cover letter that complements your resume.",
                },
                {
                  q: "Is Enhancv AI compatible with Applicant Tracking Systems (ATS)?",
                  a: "Yes, Enhancv AI ensures that your resume is ATS-friendly by suggesting optimized keywords and formatting that align with current recruitment standards.",
                },
                {
                  q: "What resume formats does Enhancv AI support?",
                  a: "Enhancv AI supports popular formats such as PDF, DOCX, and TXT, allowing you to export your resume in a format that suits your needs.",
                },
                {
                  q: "Can I export my resume to LinkedIn?",
                  a: "While Enhancv AI does not have direct LinkedIn integration, you can export your resume and manually upload it to LinkedIn in seconds.",
                },
                {
                  q: "Does Enhancv AI provide job-specific recommendations?",
                  a: "Yes, Enhancv AI tailors resume suggestions, including skills and achievements, based on the job you’re targeting to increase your chances of success.",
                },
                {
                  q: "How does Enhancv AI optimize my resume for different industries?",
                  a: "Enhancv AI offers industry-specific templates and content suggestions, covering sectors like technology, marketing, finance, and healthcare, ensuring your resume aligns with industry standards.",
                },
                {
                  q: "Can I customize the design of my resume in Enhancv AI?",
                  a: "Yes, Enhancv AI provides a wide range of professional templates that can be customized to match your style and preferences while maintaining ATS compatibility.",
                },
                {
                  q: "Can Enhancv AI help me build a portfolio?",
                  a: "Yes, Enhancv AI allows you to create a portfolio to showcase your work, making it ideal for creative professionals who need to present their projects.",
                },
                {
                  q: "Is Enhancv AI cloud-based?",
                  a: "Yes, Enhancv AI is cloud-based, so you can access and update your resume from any device, anywhere with an internet connection.",
                },
                {
                  q: "Does Enhancv AI offer feedback on my resume?",
                  a: "Yes, Enhancv AI provides real-time feedback on your resume’s layout, content, and formatting, helping you refine and perfect your document before submitting it.",
                },
                {
                  q: "Can Enhancv AI suggest job titles based on my experience?",
                  a: "Yes, Enhancv AI suggests job titles that match your experience and skills, ensuring you target the most suitable positions.",
                },
                {
                  q: "Does Enhancv AI integrate with job boards?",
                  a: "Enhancv AI allows you to export your resume in formats that are compatible with major job boards like LinkedIn and Indeed, making it easy to apply for jobs.",
                },
                {
                  q: "Can I download my resume in multiple formats?",
                  a: "Yes, Enhancv AI offers various download options, including PDF, DOCX, and TXT formats, to suit your sharing and application needs.",
                },
                {
                  q: "Can Enhancv AI help me create a LinkedIn profile?",
                  a: "While Enhancv AI doesn't directly create LinkedIn profiles, it helps you craft content that can be easily transferred to your LinkedIn profile.",
                },
                {
                  q: "Is Enhancv AI suitable for beginners?",
                  a: "Yes, Enhancv AI is beginner-friendly, providing step-by-step guidance and intuitive design options for users with no prior experience in resume building.",
                },
                {
                  q: "Can Enhancv AI help me with resume maintenance?",
                  a: "Yes, Enhancv AI allows you to keep your resume up to date by easily adding new experiences, skills, and job roles, ensuring it reflects your most recent accomplishments.",
                },
                {
                  q: "Does Enhancv AI support multilingual resumes?",
                  a: "Yes, Enhancv AI supports multiple languages, allowing you to create resumes for opportunities in various regions around the world.",
                },
                {
                  q: "What industries does Enhancv AI cater to?",
                  a: "Enhancv AI provides templates and content recommendations for a wide range of industries, including tech, finance, marketing, healthcare, education, and more.",
                },
                {
                  q: "Is Enhancv AI free to use?",
                  a: "Enhancv AI offers both free and paid plans. The free plan includes basic resume building features, while the premium plan unlocks additional templates, export options, and more advanced tools.",
                },
                {
                  q: "Can Enhancv AI help me with job interview preparation?",
                  a: "Although Enhancv AI focuses primarily on resume building, it provides useful tips and blog content that can assist you in preparing for job interviews.",
                },
                {
                  q: "Does Enhancv AI provide analytics on my resume?",
                  a: "Yes, Enhancv AI offers analytics to help you gauge the effectiveness of your resume based on industry trends and hiring practices, with suggestions for improvement.",
                },
                {
                  q: "How secure is my data with Enhancv AI?",
                  a: "Enhancv AI prioritizes data security and uses encryption to protect your personal information, complying with privacy regulations such as GDPR to ensure confidentiality.",
                },
                {
                  q: "How do I start using Enhancv AI?",
                  a: "Getting started with Enhancv AI is simple. Just sign up, select a template, and follow the easy prompts to create your personalized resume.",
                },
                {
                  q: "Can Enhancv AI help me create resumes for multiple jobs?",
                  a: "Yes, Enhancv AI allows you to create multiple versions of your resume, each tailored to different job roles, so you can optimize your chances of success.",
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
                src={Enhancv1}
                alt="Enhancv "
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={Enhancv2}
                alr="Enhancv "
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
                    Why Enhancv AI is a Top Choice for Resume Building
                  </h3>

                  <p className="text-start text-muted mb-3">
                    Enhancv AI helps you create personalized, visually impactful
                    resumes with ease. Here's why Enhancv is perfect for job
                    seekers looking to make a lasting impression:
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
                      <strong>Customizable Resume Templates:</strong> Choose
                      from dynamic, professional templates that suit your career
                      goals and industry.
                    </li>
                    <li className="mb-3">
                      <strong>Real-Time Personalization:</strong> Tailor your
                      resume with real-time suggestions and adjustments based on
                      your experience and the roles you're targeting.
                    </li>
                    <li className="mb-3">
                      <strong>Visually Appealing Layouts:</strong> Stand out
                      with beautifully designed layouts that highlight your
                      strengths without compromising readability.
                    </li>
                    <li className="mb-3">
                      <strong>Industry-Specific Styles:</strong> Select from
                      multiple design options that align with your profession,
                      whether it's creative, technical, or executive.
                    </li>
                    <li className="mb-3">
                      <strong>Optimized for ATS Compatibility:</strong> Ensure
                      your resume passes Applicant Tracking Systems and stands
                      out in the recruitment process.
                    </li>
                    <li className="mb-3">
                      <strong>Multiple Export Options:</strong> Export your
                      resume in various formats like PDF, DOCX, and more, ready
                      for immediate submission to employers.
                    </li>
                    <li className="mb-3">
                      <strong>Instant Feedback and Enhancements:</strong>{" "}
                      Receive real-time feedback on your resume's content,
                      structure, and design to improve its overall quality.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Let Enhancv AI Help You Build a Stunning Resume
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
              Why Enhancv AI is Highly Recommended
            </h4>
            <p className="text-center text-secondary mb-4">
              Based on your preferences, Enhancv AI stands out as an ideal
              choice for crafting personalized, visually appealing resumes.
              Here's a breakdown of its advantages and areas to consider.
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
                    <strong>Visually Engaging Templates:</strong> Enhance your
                    resume with dynamic, eye-catching templates perfect for
                    showcasing creativity.
                  </li>
                  <li className="mb-2">
                    <strong>Personalized Content Suggestions:</strong> Get
                    tailored recommendations based on your career goals and
                    experience, making it easy to highlight your strengths.
                  </li>
                  <li className="mb-2">
                    <strong>Real-Time Resume Preview:</strong> See how your
                    resume looks as you make changes, ensuring that the final
                    version is polished and ready to impress.
                  </li>
                  <li className="mb-2">
                    <strong>ATS-Friendly Design:</strong> Your resume is
                    optimized for Applicant Tracking Systems, increasing the
                    likelihood of passing through automated filters.
                  </li>
                  <li className="mb-2">
                    <strong>Customizable Layout:</strong> Easily adjust sections
                    and visual elements to suit your profession and personal
                    style.
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
                    <strong>Premium Features Locked:</strong> Some advanced
                    features, such as downloading in multiple formats, are
                    limited to premium users.
                  </li>
                  <li className="mb-2">
                    <strong>Limited Free Template Options:</strong> Free users
                    may have limited access to premium templates that can give
                    your resume an extra edge.
                  </li>
                  <li className="mb-2">
                    <strong>Custom Layout Changes May Be Restrictive:</strong>{" "}
                    While the platform offers flexibility, extensive
                    customization options might be more limited compared to
                    fully editable platforms.
                  </li>
                  <li className="mb-2">
                    <strong>No In-Built Portfolio:</strong> Enhancv AI does not
                    offer portfolio hosting, which might be a drawback for those
                    needing to showcase a personal website or creative work.
                  </li>
                  <li className="mb-2">
                    <strong>Account Sign-Up Requirement:</strong> Creating an
                    account is necessary to save your work, which may not appeal
                    to users who prefer a more anonymous experience.
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
              Explore Smart Alternatives for Resumes
            </h4>
            <p className="text-center text-secondary mb-4">
              Enhancv AI suggests top resume-building platforms and tools to
              help you craft standout resumes tailored to your career
              aspirations.
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
                    <strong>Enhancv AI</strong>: Create visually striking,
                    personalized resumes that emphasize your strengths and
                    experiences, with AI-driven customization.
                  </li>
                  <li className="mb-2">
                    <strong>Resume.io</strong>: Offers customizable templates
                    and an intuitive interface for building professional resumes
                    quickly.
                  </li>
                  <li className="mb-2">
                    <strong>Resumake</strong>: A minimalist, easy-to-use
                    platform for creating clean and simple resumes in a matter
                    of minutes.
                  </li>
                  <li className="mb-2">
                    <strong>Standard Resume</strong>: A platform focused on
                    creating straightforward, professional resumes with an
                    emphasis on simplicity and ATS-compatibility.
                  </li>
                  <li className="mb-2">
                    <strong>VisualCV</strong>: Allows you to create visually
                    stunning resumes and portfolios while offering performance
                    analytics and tracking features.
                  </li>
                  <li className="mb-2">
                    <strong>Jobscan</strong>: Optimize your resume for ATS with
                    automated resume analysis and recommendations to boost your
                    chances of passing automated screenings.
                  </li>
                  <li className="mb-2">
                    <strong>Canva Resume Builder</strong>: Create beautifully
                    designed resumes with a drag-and-drop interface, perfect for
                    showcasing creativity and design skills.
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
              <h1>Enhancv AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Enhancv AI is an AI-powered resume builder that helps job
                seekers create professional, ATS-friendly, and industry-specific
                resumes. By leveraging advanced machine learning and deep
                learning algorithms, Enhancv AI automates key aspects of resume
                building, including resume optimization, keyword integration,
                ATS formatting, and real-time feedback. It helps individuals
                design resumes that are optimized for both ATS systems and
                recruiters.
              </p>

              <p>
                Enhancv AI leverages cutting-edge AI technology to help users
                create personalized, high-quality resumes. It automates the
                formatting, content enhancement, and job-specific tailoring of
                resumes to ensure relevance, visibility, and compatibility with
                ATS systems. Whether you're applying for a tech job, creative
                position, or executive role, Enhancv AI can generate a
                customized resume designed to help you succeed in the job
                market.
              </p>

              <div className="mb-3">
                <a
                  href=" https://enhancv.com/ai-resume-builder/"
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
                src={enhanev}
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

          <section style={{ backgroundColor: "#0b1e3d", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">
                Create Impactful Resumes with Enhancv AI
              </p>
              <h2
                style={{
                  fontWeight: "600",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                How Enhancv AI Helps You Craft a Powerful Resume
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
                      Analyzes Your Experience & Aspirations
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Enhancv AI analyzes your career journey and aspirations to
                      build a resume that resonates with your desired job role.
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
                      Tailors Content for Target Roles
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Enhancv AI customizes each resume section, from your
                      headline to experience, ensuring it aligns perfectly with
                      your target role.
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
                      Creates Professional, Ready-to-Submit Resumes
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Download a polished, job-ready resume optimized for your
                      specific job market, ready to impress employers.
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

export default EnhanevAI;
