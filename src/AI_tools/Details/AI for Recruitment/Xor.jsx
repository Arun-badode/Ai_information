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
const Xor = () => {
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
              <h3 className="">Features of XOR AI </h3>
            </div>
            {[
              {
                icon: "🎮",
                title: "Interactive AI Games",
                desc: "XOR AI uses interactive games to assess cognitive abilities, emotional intelligence, and personality traits in candidates, providing a comprehensive profile.",
              },
              {
                icon: "🔍",
                title: "Data-Driven Insights",
                desc: "XOR AI analyzes vast amounts of candidate data from resumes, interviews, and assessments to provide deep insights into job suitability.",
              },
              {
                icon: "🤖",
                title: "AI-Powered Screening",
                desc: "Automated candidate screening powered by AI allows XOR AI to evaluate candidates quickly and efficiently based on key traits and behavior patterns.",
              },
              {
                icon: "📈",
                title: "Predictive Analytics",
                desc: "XOR AI uses predictive algorithms to assess which candidates are most likely to succeed in a given role, enhancing hiring accuracy.",
              },
              {
                icon: "⚖️",
                title: "Fairness Auditing",
                desc: "Built-in fairness and bias auditing features help ensure that the recruitment process remains impartial and promotes diversity.",
              },
              {
                icon: "🧑‍💼",
                title: "Customized Role Matching",
                desc: "XOR AI uses a proprietary role-matching algorithm to suggest the best-fit roles for candidates based on their strengths and behavior patterns.",
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
                  q: "What is XOR AI?",
                  a: "XOR AI is an AI-driven recruitment platform that automates the hiring process, using chatbots, video interviews, and AI-powered screening tools to improve recruitment efficiency.",
                },
                {
                  q: "How does XOR AI help with hiring?",
                  a: "XOR AI helps automate candidate sourcing, screening, interviewing, and selection using AI algorithms, reducing manual effort and speeding up the hiring process.",
                },
                {
                  q: "What types of assessments does XOR AI use?",
                  a: "XOR AI uses automated chatbots, video interviews, and skill-based assessments to evaluate candidates' qualifications, communication skills, and personality traits.",
                },
                {
                  q: "Can XOR AI conduct video interviews?",
                  a: "Yes, XOR AI can conduct video interviews with automated questions, allowing candidates to complete them on their own time, and the AI analyzes their responses.",
                },
                {
                  q: "How does XOR AI evaluate candidates?",
                  a: "XOR AI uses AI algorithms to analyze candidates' answers, both verbal and non-verbal, as well as their interaction with the system to assess cognitive abilities and personality traits.",
                },
                {
                  q: "What is the role of AI in XOR's candidate screening process?",
                  a: "XOR AI uses AI to screen resumes, analyze responses from interviews, and match candidates to the most suitable roles based on their skills, experience, and behavioral traits.",
                },
                {
                  q: "Does XOR AI integrate with applicant tracking systems (ATS)?",
                  a: "Yes, XOR AI integrates with popular ATS systems to streamline candidate management and improve recruitment workflows.",
                },
                {
                  q: "How does XOR AI reduce bias in recruitment?",
                  a: "XOR AI uses structured algorithms and data-driven models that minimize unconscious bias by focusing on candidate qualifications and behavior, not personal attributes.",
                },
                {
                  q: "What industries use XOR AI?",
                  a: "XOR AI is used across various industries, including healthcare, retail, technology, finance, and more, to streamline recruitment and improve hiring accuracy.",
                },
                {
                  q: "How fast can XOR AI process applications?",
                  a: "XOR AI can process thousands of applications in a fraction of the time it would take a human recruiter, automating initial screenings and providing insights almost instantly.",
                },
                {
                  q: "Can XOR AI help with remote hiring?",
                  a: "Yes, XOR AI supports fully remote recruitment processes, allowing candidates from anywhere in the world to participate in video interviews and assessments.",
                },
                {
                  q: "How accurate are XOR AI's hiring predictions?",
                  a: "XOR AI's hiring predictions are based on advanced machine learning models that analyze candidates' past performance, behavioral patterns, and cognitive traits, providing a high level of accuracy.",
                },
                {
                  q: "What types of roles can XOR AI help hire for?",
                  a: "XOR AI can help hire for roles across various job levels, from entry-level positions to senior management and executive roles.",
                },
                {
                  q: "Can candidates get feedback from XOR AI?",
                  a: "Yes, candidates can receive detailed feedback from XOR AI on their performance during video interviews, including areas for improvement and strengths.",
                },
                {
                  q: "Does XOR AI use facial recognition?",
                  a: "XOR AI uses facial recognition technology as part of its video interview analysis to assess non-verbal cues such as engagement, emotional response, and authenticity.",
                },
                {
                  q: "How customizable is XOR AI for different companies?",
                  a: "XOR AI offers customization options such as branded interfaces, personalized questions for assessments, and role-specific evaluation metrics to fit the needs of different companies.",
                },
                {
                  q: "What security measures does XOR AI have in place?",
                  a: "XOR AI follows strict data privacy regulations, encrypting candidate information and ensuring compliance with GDPR, CCPA, and other relevant laws.",
                },
                {
                  q: "Can XOR AI be used for internal promotions?",
                  a: "Yes, XOR AI can be used to assess internal candidates for promotions, ensuring they have the right skills and qualifications for the new role.",
                },
                {
                  q: "How does XOR AI handle language diversity?",
                  a: "XOR AI supports multiple languages, allowing candidates from different linguistic backgrounds to engage with the platform and complete assessments in their preferred language.",
                },
                {
                  q: "Does XOR AI assess soft skills?",
                  a: "Yes, XOR AI evaluates a range of soft skills, including communication, emotional intelligence, adaptability, and problem-solving, through AI-powered interviews and assessments.",
                },
                {
                  q: "How does XOR AI engage with candidates during the hiring process?",
                  a: "XOR AI engages with candidates through automated chatbots and video interviews, guiding them through the process, answering their questions, and providing feedback.",
                },
                {
                  q: "Can XOR AI detect candidates' motivations?",
                  a: "Yes, XOR AI analyzes candidates' responses and behavioral patterns during assessments to infer their motivations, personality traits, and cultural fit for a role.",
                },
                {
                  q: "What types of candidates are best suited for XOR AI assessments?",
                  a: "Candidates who are comfortable with technology, video interviews, and online assessments are most likely to excel with XOR AI, especially those in tech-savvy and fast-paced industries.",
                },
                {
                  q: "Is XOR AI suitable for high-volume hiring?",
                  a: "Yes, XOR AI is highly effective for high-volume hiring, allowing organizations to process large numbers of candidates quickly and efficiently.",
                },
                {
                  q: "Can XOR AI help reduce time-to-hire?",
                  a: "Yes, XOR AI automates key parts of the hiring process, speeding up candidate screenings, interviews, and assessments, which can significantly reduce time-to-hire.",
                },
                {
                  q: "How does XOR AI handle candidate privacy?",
                  a: "XOR AI prioritizes candidate privacy by ensuring that all candidate data is encrypted, stored securely, and used in compliance with relevant privacy regulations.",
                },
                {
                  q: "What is XOR AI's role in diversity and inclusion?",
                  a: "XOR AI plays a role in promoting diversity and inclusion by providing unbiased assessments, reducing human bias, and ensuring fair evaluations for all candidates.",
                },
                {
                  q: "Does XOR AI use machine learning?",
                  a: "Yes, XOR AI uses machine learning to continuously improve its algorithms based on new data, optimizing candidate evaluations and matching accuracy over time.",
                },
                {
                  q: "How does XOR AI integrate with other HR software?",
                  a: "XOR AI integrates seamlessly with most HR software and applicant tracking systems (ATS), allowing for smooth data transfer and streamlined recruitment processes.",
                },
                {
                  q: "Can XOR AI assist with onboarding?",
                  a: "XOR AI focuses on the recruitment and hiring processes, but its data insights can be used to help improve onboarding by matching candidates to the right roles and company culture.",
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
                    Why Use XOR AI?
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
                      <strong>Automated Candidate Screening:</strong> XOR AI
                      automates the initial candidate screening process by using
                      AI to analyze resumes, applications, and interview
                      responses.
                    </li>
                    <li className="mb-3">
                      <strong>Video Interview Analysis:</strong> XOR AI conducts
                      asynchronous video interviews and analyzes candidates'
                      responses, including their emotional and cognitive
                      behaviors, to assess job fit.
                    </li>
                    <li className="mb-3">
                      <strong>Job Matching:</strong> XOR AI matches candidates
                      with roles based on cognitive and emotional traits
                      identified through AI analysis of interview data, ensuring
                      a better fit.
                    </li>
                    <li className="mb-3">
                      <strong>Enhanced Candidate Experience:</strong> By
                      providing automated feedback and real-time engagement, XOR
                      AI improves the candidate experience during the
                      recruitment process.
                    </li>
                    <li className="mb-3">
                      <strong>Reducing Human Bias:</strong> XOR AI minimizes the
                      influence of human bias during hiring by relying on
                      data-driven decisions, promoting fairness in candidate
                      evaluations.
                    </li>
                    <li className="mb-3">
                      <strong>Predictive Analytics for Hiring Success:</strong>{" "}
                      XOR AI uses machine learning models to predict the success
                      of candidates in specific roles based on their behavioral
                      data.
                    </li>
                    <li className="mb-3">
                      <strong>Candidate Engagement:</strong> XOR AI engages with
                      candidates throughout the hiring process using AI-powered
                      chatbots to answer questions, schedule interviews, and
                      provide updates.
                    </li>
                    <li className="mb-3">
                      <strong>Internal Talent Management:</strong> XOR AI is
                      used for internal promotions by evaluating current
                      employees' suitability for new roles based on their
                      behavioral and cognitive profiles.
                    </li>
                    <li className="mb-3">
                      <strong>Gamified Assessments:</strong> XOR AI offers
                      gamified assessments to evaluate candidates'
                      problem-solving abilities, memory, attention, and
                      emotional intelligence in an engaging way.
                    </li>
                    <li className="mb-3">
                      <strong>Real-Time Feedback:</strong> XOR AI provides
                      real-time feedback to candidates about their performance
                      in assessments and interviews, allowing them to understand
                      their strengths and areas for improvement.
                    </li>
                    <li className="mb-3">
                      <strong>Continuous Improvement through Data:</strong> XOR
                      AI uses collected data to continuously refine and improve
                      its algorithms for better accuracy in future hiring
                      processes.
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
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Increased Efficiency:</strong> XOR AI automates key
                    stages of the hiring process, reducing manual effort and
                    speeding up recruitment timelines.
                  </li>
                  <li className="mb-2">
                    <strong>Improved Accuracy:</strong> By leveraging AI
                    algorithms, XOR AI provides data-driven, consistent
                    evaluations of candidates, leading to more accurate hiring
                    decisions.
                  </li>
                  <li className="mb-2">
                    <strong>Enhanced Candidate Engagement:</strong> XOR AI
                    offers a personalized and engaging experience for
                    candidates, keeping them informed and involved throughout
                    the process.
                  </li>
                  <li className="mb-2">
                    <strong>Bias Reduction:</strong> XOR AI’s data-driven
                    approach helps minimize human biases in hiring decisions,
                    promoting fairness and diversity.
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
                    <strong>Privacy Concerns:</strong> As with any AI-powered
                    platform, there are concerns about the collection and
                    management of sensitive candidate data, especially regarding
                    personal and behavioral information.
                  </li>
                  <li className="mb-2">
                    <strong>Potential for Bias:</strong> Despite efforts to
                    minimize bias, XOR AI’s algorithms may still inherit biases
                    from the data they are trained on, which could affect the
                    fairness of evaluations and recruitment decisions.
                  </li>
                  <li className="mb-2">
                    <strong>Over-Reliance on AI:</strong> There's a risk that
                    employers may become too reliant on AI insights, potentially
                    sidelining the value of human judgment, empathy, and
                    personal interaction in the hiring process.
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
          <div className=" row d-flex align-items-center justify-content-between mb-1">
            {/* Left side (Text Section) */}
            <div
              style={{ flex: 1, paddingRight: "30px" }}
              className="col-6 col-md-12 "
            >
              <p className="text-primary">Write better, faster</p>
              <h1>XOR AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                XOR AI is an advanced AI-powered platform designed to automate
                and streamline recruitment processes. It uses a blend of
                artificial intelligence, machine learning, and natural language
                processing (NLP) to provide smarter hiring solutions for
                businesses across industries. XOR AI integrates seamlessly with
                existing systems, enabling companies to conduct automated
                candidate screening, resume evaluation, video interviews, and
                candidate engagement — all in one unified platform.
              </p>

              <p>
                Key features include AI chatbots, pre-screening, interview
                scheduling, and predictive analytics, making it an
                all-encompassing solution for companies looking to optimize
                their talent acquisition processes.
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
                How XOR AI Works?
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
        .xor1 {
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
                      Step 1: Data Collection & Input
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      XOR AI collects candidate data through various inputs,
                      such as resumes, interviews, and surveys, to create a
                      comprehensive profile.
                    </p>
                    <div className="xor1">1</div>
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
        .xor2 {
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
                      Step 2: AI-Powered Analysis & Pattern Recognition
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      XOR AI utilizes advanced algorithms to analyze collected
                      data and recognize patterns related to job performance,
                      behaviors, and skill sets.
                    </p>
                    <div className="xor2">2</div>
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
        .xor3 {
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
                      Step 3: Predictive Outcome & Recommendations
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Based on the AI analysis, XOR generates predictive
                      outcomes regarding the candidate's suitability for
                      specific roles, offering valuable insights to recruiters.
                    </p>
                    <div className="xor3">3</div>
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
            <h4 className="mb-3">Ready to get started with Xor AI?</h4>
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

export default Xor;
