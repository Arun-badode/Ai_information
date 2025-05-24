import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import py1 from "../../../../public/assets/Img/AI for Recruitment/py-s1.png";
import py2 from "../../../../public/assets/Img/AI for Recruitment/py-s2.png";

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
const Pymetrics = () => {
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
              <h3 className="">Features of Pymetrics AI </h3>
            </div>
            {[
              {
                icon: "🧠",
                title: "Neuroscience-Based Games",
                desc: "Pymetrics uses engaging, scientifically designed games to assess cognitive, social, and emotional traits of candidates in a bias-free way.",
              },
              {
                icon: "📊",
                title: "AI-Driven Trait Analysis",
                desc: "Behavioral data from games is analyzed using AI to map each candidate’s strengths against success profiles for specific roles.",
              },
              {
                icon: "🔁",
                title: "Role Matching Algorithm",
                desc: "Pymetrics recommends best-fit roles for candidates by matching their unique profiles to jobs where similar traits have led to success.",
              },
              {
                icon: "🌍",
                title: "Bias Reduction Tools",
                desc: "Built-in fairness auditing and ethical AI standards help minimize bias in the hiring process and promote diverse candidate pipelines.",
              },
              {
                icon: "📬",
                title: "Personalized Feedback",
                desc: "Candidates receive detailed feedback on their strengths and soft skills, enhancing the experience even if they aren’t selected.",
              },
              {
                icon: "👥",
                title: "Soft Skill Benchmarking",
                desc: "Pymetrics measures traits like risk tolerance, focus, and emotional intelligence, providing employers with deep insights beyond résumés.",
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
                  q: "What is Pymetrics?",
                  a: "Pymetrics is an AI-driven platform using neuroscience-based games to assess candidates' cognitive, emotional, and social traits.",
                },
                {
                  q: "How does Pymetrics use AI?",
                  a: "Pymetrics uses AI to analyze data from neuroscience-based games, matching candidates' cognitive and emotional profiles with job success indicators.",
                },
                {
                  q: "What kind of games are used in Pymetrics assessments?",
                  a: "Pymetrics uses short, neuroscience-based games designed to evaluate cognitive skills, memory, attention, risk tolerance, and other emotional traits.",
                },
                {
                  q: "How accurate is Pymetrics AI?",
                  a: "Pymetrics AI is validated by scientific research and is effective in predicting job success, although it depends on the quality and diversity of training data.",
                },
                {
                  q: "What does Pymetrics AI evaluate?",
                  a: "Pymetrics AI evaluates cognitive abilities, emotional intelligence, and behavioral patterns through the performance in neuroscience-based games.",
                },
                {
                  q: "Is Pymetrics a test?",
                  a: "No, Pymetrics isn't a test. It’s a set of gamified assessments designed to understand candidates' soft skills and behavioral tendencies.",
                },
                {
                  q: "Can Pymetrics match me to a job?",
                  a: "Yes, Pymetrics AI analyzes your behavioral data and matches you to roles where you're most likely to succeed based on your cognitive and emotional profile.",
                },
                {
                  q: "What is the purpose of Pymetrics games?",
                  a: "The games are designed to assess key cognitive and emotional traits such as attention, risk-taking, problem-solving, and adaptability.",
                },
                {
                  q: "How long does a Pymetrics assessment take?",
                  a: "A typical Pymetrics assessment lasts between 25-30 minutes, depending on the number of games involved.",
                },
                {
                  q: "Can Pymetrics predict job success?",
                  a: "Yes, Pymetrics uses AI and behavioral analysis to predict the likelihood of a candidate's success in a given role.",
                },
                {
                  q: "What kind of roles can Pymetrics help me with?",
                  a: "Pymetrics helps match candidates to various roles across industries, particularly those requiring strong interpersonal, cognitive, and emotional skills.",
                },
                {
                  q: "Is Pymetrics AI bias-free?",
                  a: "Pymetrics is designed to minimize bias, but like all AI systems, it depends on the quality and diversity of the training data used to train the models.",
                },
                {
                  q: "How does Pymetrics' algorithm work?",
                  a: "Pymetrics' algorithm uses behavioral similarity analysis to compare candidates' game performance with successful employees' profiles in similar roles.",
                },
                {
                  q: "What is Pymetrics' employer dashboard?",
                  a: "The employer dashboard allows companies to view candidate profiles, detailed reports, and matching scores to help make informed hiring decisions.",
                },
                {
                  q: "What are cognitive games in Pymetrics?",
                  a: "Cognitive games in Pymetrics test mental processing skills, including memory, attention, problem-solving, and other cognitive abilities.",
                },
                {
                  q: "What is career matching in Pymetrics?",
                  a: "Career matching is the process of aligning candidates' cognitive, emotional, and social traits with job roles they are most likely to excel in.",
                },
                {
                  q: "Does Pymetrics use behavioral science?",
                  a: "Yes, Pymetrics is based on behavioral science, including principles from neuroscience, psychology, and behavioral economics.",
                },
                {
                  q: "How does Pymetrics improve the hiring process?",
                  a: "Pymetrics improves hiring by using data-driven insights to identify candidates with the right cognitive and emotional traits for specific roles, reducing bias.",
                },
                {
                  q: "What kind of reports does Pymetrics generate?",
                  a: "Pymetrics generates detailed reports on candidates' behavioral traits, strengths, and areas of development, helping employers make data-driven decisions.",
                },
                {
                  q: "How does Pymetrics ensure fairness in hiring?",
                  a: "Pymetrics ensures fairness by using unbiased AI models trained on diverse data sets, and by continuously monitoring and improving model performance.",
                },
                {
                  q: "Can candidates retake the Pymetrics assessment?",
                  a: "Typically, candidates cannot retake the Pymetrics assessment. However, some employers may allow retakes depending on their recruitment process.",
                },
                {
                  q: "What industries use Pymetrics?",
                  a: "Pymetrics is used across various industries, including finance, healthcare, technology, consulting, and more, to help with talent acquisition.",
                },
                {
                  q: "What is predictive hiring in Pymetrics?",
                  a: "Predictive hiring in Pymetrics refers to using AI models to analyze candidates' behaviors and predict their potential job success and performance.",
                },
                {
                  q: "Is Pymetrics suitable for all job levels?",
                  a: "Yes, Pymetrics is suitable for a wide range of job levels, from entry-level positions to senior leadership roles, depending on the role's cognitive and emotional demands.",
                },
                {
                  q: "How does Pymetrics assess emotional intelligence?",
                  a: "Pymetrics assesses emotional intelligence through games that measure adaptability, empathy, self-control, and other emotional traits.",
                },
                {
                  q: "What types of candidates benefit from Pymetrics?",
                  a: "Candidates who possess strong emotional intelligence, cognitive agility, and adaptability benefit from Pymetrics assessments, particularly for roles requiring these traits.",
                },
                {
                  q: "Can Pymetrics be used for internal promotions?",
                  a: "Yes, Pymetrics can be used to assess internal candidates for promotions, ensuring they have the right cognitive and emotional traits for the new role.",
                },
                {
                  q: "What is the science behind Pymetrics?",
                  a: "The science behind Pymetrics is based on neuroscience, psychology, and behavioral economics, ensuring that the games measure real cognitive and emotional traits.",
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
                src={py1}
                alt="pyetrics"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={py2}
                alt="pymetrics"
                
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
                    Why Use Pymetrics AI?
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
                      <strong>AI-Powered Behavioral Analysis:</strong> Assess
                      candidates' cognitive, emotional, and social traits using
                      data from neuroscience-based games.
                    </li>
                    <li className="mb-3">
                      <strong>Career Matching:</strong> Use AI to match
                      candidates to roles where their cognitive and emotional
                      profiles align with job success.
                    </li>
                    <li className="mb-3">
                      <strong>Cognitive Skills Assessment:</strong> Analyze
                      memory, attention, problem-solving, and other cognitive
                      abilities through AI-driven evaluations.
                    </li>
                    <li className="mb-3">
                      <strong>Emotional Intelligence Evaluation:</strong>{" "}
                      Evaluate emotional traits such as adaptability, empathy,
                      and self-control through AI analysis of game performance.
                    </li>
                    <li className="mb-3">
                      <strong>Predictive Hiring:</strong> Use machine learning
                      models to predict which candidates are most likely to
                      succeed in specific roles based on their game performance.
                    </li>
                    <li className="mb-3">
                      <strong>Personalized Career Pathways:</strong> Provide
                      candidates with insights and recommendations on career
                      paths based on their behavioral profile.
                    </li>
                    <li className="mb-3">
                      <strong>Bias Reduction:</strong> AI models are designed to
                      minimize bias and ensure fair evaluations by using diverse
                      and representative training data.
                    </li>
                    <li className="mb-3">
                      <strong>Candidate Insights:</strong> Offer detailed
                      reports on candidates' strengths, weaknesses, and
                      behavioral tendencies, helping recruiters make informed
                      decisions.
                    </li>
                    <li className="mb-3">
                      <strong>Gamified Assessments:</strong> Use engaging and
                      scientifically designed games to assess candidates'
                      cognitive and emotional abilities.
                    </li>
                    <li className="mb-3">
                      <strong>Data-Driven Decision-Making:</strong> Support
                      hiring decisions with AI-backed insights and predictive
                      analytics on candidates' suitability for roles.
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
                    <strong>Improved Hiring Speed:</strong> Automates
                    assessments and reduces time-to-hire by streamlining
                    candidate evaluations.
                  </li>
                  <li className="mb-2">
                    <strong>Increased Objectivity:</strong> AI-driven insights
                    provide a more objective evaluation based on behavior,
                    reducing the influence of human biases.
                  </li>
                  <li className="mb-2">
                    <strong>Enhanced Candidate Experience:</strong> Provides a
                    gamified and engaging experience that can improve candidate
                    satisfaction and reduce stress during assessments.
                  </li>
                  <li className="mb-2">
                    <strong>Behavioral Insights:</strong> Offers deep insights
                    into candidates' cognitive, emotional, and behavioral traits
                    through neuroscience-based games.
                  </li>
                  <li className="mb-2">
                    <strong>Scalable Solution:</strong> Enables companies to
                    assess large volumes of candidates without significantly
                    increasing resource needs.
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
                    <strong>Privacy Concerns:</strong> As with any AI-driven
                    platform, there are concerns about the collection and use of
                    personal data, especially when assessing cognitive and
                    emotional traits.
                  </li>
                  <li className="mb-2">
                    <strong>Potential for Bias:</strong> Despite efforts to
                    reduce bias, AI models may still inherit biases from the
                    data they were trained on, which can affect fairness in
                    hiring.
                  </li>
                  <li className="mb-2">
                    <strong>Over-Reliance on AI:</strong> Some employers might
                    overly rely on AI insights, potentially neglecting human
                    judgment and the importance of personal interactions in
                    hiring.
                  </li>
                  <li className="mb-2">
                    <strong>Limited Understanding of Context:</strong> While
                    Pymetrics provides behavioral insights, it may not always
                    account for external factors affecting candidate
                    performance, such as stress or technical issues.
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
         <div className="row align-items-center g-4 mb-4">
  {/* Left side (Text Section) */}
  <div className="col-lg-6 col-md-12 order-lg-1 order-2 pe-lg-4">
    <p className="text-primary mb-2 fs-5">Write better, faster</p>
    <h1 className="mb-3 display-5 fw-bold">Pymetrics AI</h1>
    <div className="text-warning mb-3 fs-4">⭐⭐⭐⭐⭐</div>
    <p className="mb-3 fs-6">
      Pymetrics is an AI-driven recruitment platform that uses
      behavioral science and neuroscience-based games to match
      candidates to suitable careers. Instead of traditional resumes,
      Pymetrics assessments evaluate cognitive, emotional, and social
      traits to provide data-driven career recommendations and
      bias-free hiring decisions.
    </p>
    <p className="mb-4 fs-6">
      It's trusted by major companies to hire smarter, faster, and
      fairer by using insights beyond a candidate's work history.
    </p>
    <div className="d-flex flex-wrap gap-3">
      <a
        href="https://www.hrlineup.com/pymetrics/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-lg px-4 py-2 fs-6"
      >
        Explore Tool
      </a>
    </div>
  </div>

  {/* Right side (Image Section) */}
  <div className="col-lg-6 col-md-12 order-lg-2 order-1">
    <div className="ratio ratio-16x9">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5IyEpRsYY8JsmOlBNKKmWf5jlOBFs3Ustg&s"
        className="img-fluid rounded-3 object-fit-cover"
        alt="Pymetrics AI Assessment Platform"
        loading="lazy"
      />
    </div>
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
                How Pymetrics AI Works?
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
          .step1 {
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
                      Step 1: Game-Based Assessments
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Candidates complete a series of neuroscience-based games
                      designed to evaluate cognitive, social, and emotional
                      traits.
                    </p>
                    <div className="step1">1</div>
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
          .step2 {
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
                      Step 2: AI Trait Mapping
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Pymetrics AI analyzes gameplay patterns to map personality
                      traits and behavioral strengths aligned with success
                      metrics.
                    </p>
                    <div className="step2">2</div>
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
          .step3 {
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
                      Step 3: Role Matching & Insights
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      The system compares candidate traits with ideal profiles
                      for different roles, recommending best-fit positions and
                      providing feedback.
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

export default Pymetrics;
