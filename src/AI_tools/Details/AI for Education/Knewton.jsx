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

const Knewton  = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [openIndex, setOpenIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <div className="row g-4">
            {[
              {
                title: "Knewton Adaptive Learning Technology",
                desc: " Knewton utilizes cutting-edge adaptive learning algorithms to continuously track a student’s progress, identify strengths and weaknesses, and provide personalized learning content. This adaptive approach is designed to ensure that students stay engaged and make continuous improvements.",
              },
              {
                title: "AI-Powered Content Delivery",
                desc: " The platform's artificial intelligence analyzes how students interact with content, making real-time adjustments to optimize their learning journey. Whether it's adjusting the difficulty of a math problem or suggesting targeted resources for reading comprehension, Knewton ensures that content is always aligned with the student's needs.",
              },
              {
                title: "Real-Time Analytics for Educators",
                desc: " Knewton offers in-depth analytics to help educators make data-driven decisions. Teachers can easily track student progress, identify areas for improvement, and provide timely interventions where necessary. This feedback loop is critical for improving student outcomes.",
              },
              {
                title: "Learning Path Customization",
                desc: "  Knewton allows for the creation of personalized learning paths based on each student’s progress and needs. Students are presented with content that matches their ability level, enabling them to progress at their own pace.",
              },
              {
                title: "Knewton for Math, Science, and Language Learning",
                desc: " Knewton’s content spans a wide range of subjects, but it is particularly effective for STEM (Science, Technology, Engineering, and Mathematics) education. Through personalized lessons, students can master complex mathematical concepts or explore scientific principles in an engaging way.",
              },
              {
                title: "Knewton for Test and Exam Preparation",
                desc: " Knewton’s adaptive learning system can be used to prepare students for high-stakes exams, such as standardized tests or college entrance exams. The platform provides personalized study materials and tracks progress, helping students focus on areas that need the most attention.",
              },
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div className="custom-card text-light p-4 h-100">
                  <div className="icon mb-3">{feature.icon}</div>
                  <h5 className="fw-bold">{feature.title}</h5>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case "Screenshots":
        return (
          <div className="row g-4">
            <div className="col-md-6">
              <img
                src={deatilimage}
                alt="Screenshot 1"
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-md-6">
              <img
                src={deatilimage}
                alt="Screenshot 2"
                className="img-fluid rounded-3"
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

      case "Why-we-use":
        return (
          <div className="row g-4">
            <div className="col-12">
              <div className="custom-card text-light p-5 text-center">
                <h3 className="fw-bold mb-4">Why Use Knewton</h3>

                <h5>Increased Engagement</h5>
                <p className="fs-5">
                  With its adaptive learning technology, Knewton helps students
                  stay engaged by presenting content that is at the appropriate
                  level for their current skills, avoiding frustration or
                  boredom.
                </p>

                <h5>Customized Learning Experiences</h5>
                <p className="fs-5 mt-3">
                  Each learner receives a unique educational experience.
                  Knewton’s AI-driven platform adapts in real-time to ensure
                  that students receive content that aligns with their learning
                  pace, improving comprehension and retention.
                </p>

                <h5>Improved Academic Performance</h5>
                <p className="fs-5 mt-3">
                  By using personalized study plans and feedback systems,
                  Knewton has been shown to help students achieve better
                  academic results. The platform ensures that students master
                  foundational concepts before moving on to more advanced
                  material.
                </p>

                <h5>Data-Driven Learning Pathways</h5>
                <p className="fs-5 mt-3">
                  Knewton provides detailed insights that help educators and
                  students understand the learning progress. Teachers can use
                  this data to adjust instructional methods and give targeted
                  help to students who need it most.
                </p>

                <h5>Support for Diverse Learners</h5>
                <p className="fs-5 mt-3">
                  Whether for students in K-12, higher education, or those
                  pursuing professional certifications, Knewton can be tailored
                  to fit a variety of learning environments and requirements.
                </p>

                {/* <h5></h5>
                <p className="fs-5 mt-3">
                

                </p>

                <h5></h5>
                <p className="fs-5 mt-3">
              

                </p> */}

                <Button variant="primary" size="lg" className="mt-4">
                  Try ChatGPT Now
                </Button>
              </div>
            </div>
          </div>
        );

      case "Pro&Const":
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
                    Knewton’s ability to create customized learning paths for
                    each student is a significant advantage. It ensures that
                    students always engage with content that matches their
                    current learning needs, leading to more efficient learning.
                  </li>
                  <li className="mb-2">
                    Comprehensive Analytics: Teachers can track the performance
                    of each student through detailed reports. This helps
                    identify areas for improvement and optimize lesson plans
                  </li>
                  <li className="mb-2">
                    Scalable and Flexible: Knewton works well across various
                    education levels, from K-12 to higher education, and can
                    scale for use in corporate training programs. It’s
                    versatile, meeting the needs of different learners in
                    various settings.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Real-Time Adjustments: The platform adapts to each learner’s
                    responses, ensuring that every interaction contributes to
                    their growth, providing a truly individualized learning
                    experience.
                  </li>
                  <li className="mb-2">
                    Focus on Continuous Improvement: Knewton is designed to
                    track and improve a student’s learning progress continually,
                    which can increase retention rates and reduce dropout rates
                    in educational institutions.
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
                <h5 className="text-warning text-start mb-4">⚠ Cons</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    Cost: Knewton operates on a subscription model, which may be
                    costly for some educational institutions, especially smaller
                    ones or individual learners.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Limited Subject Variety: While Knewton excels in STEM
                    subjects and reading, it may not offer the same level of
                    depth in other specialized subjects such as arts or
                    humanities.
                  </li>
                  <li className="mb-2">
                    Dependency on Internet Access: Being an online platform,
                    Knewton requires constant internet access, which can limit
                    its use in areas with poor internet connectivity.
                  </li>
                  <li className="mb-2">
                    Learning Curve for Educators: Some educators might find it
                    challenging to initially set up and integrate Knewton with
                    existing learning management systems or teaching strategies.
                  </li>
                  <li className="mb-2">
                    Not Always Suitable for Non-Traditional Learning: Although
                    Knewton is ideal for structured learning environments, its
                    effectiveness in unstructured or non-traditional learning
                    settings may be limited.
                  </li>
                  {/* <li className="mb-2">
                   
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        );

      case "Alternative":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-4">
            Alternatives to Knewton:
            </h4>
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
                  <li className="mb-3">
                    <strong>DreamBox:</strong> DreamBox offers adaptive math lessons for K-8 students. It provides a personalized learning experience using data-driven algorithms similar to Knewton but focuses mainly on mathematics.

                  </li>
                  <li className="mb-3">
                    <strong>Smart Sparrow:</strong>  This platform offers personalized, adaptive learning for higher education and corporate training. It features rich analytics, but Smart Sparrow is especially popular in STEM courses.
                  </li>
                  <li className="mb-3">
                    <strong>Socratic by Google:</strong> An AI-powered learning tool that uses machine learning to assist students with their homework and study, Socratic is a great alternative for students looking for support in multiple subjects:
                  </li>
                  <li className="mb-3">
                    <strong>Edmentum:</strong> A comprehensive K-12 education tool, Edmentum provides personalized learning solutions for schools, including tools for assessments, curriculum, and interventions.
                  </li>
                  <li className="mb-3">
                    <strong>Khan Academy:</strong>A free online learning platform, Khan Academy offers interactive lessons in a range of subjects and could be used as an alternative or complementary tool to Knewton for students.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "FAQs":
        return (
          <div className="faq-section container py-5">
            <h3 className="text-center  text-white mb-5 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is Knewton?",
                  a: "Knewton is an adaptive learning platform powered by AI, offering personalized education through real-time content adjustment based on student needs.",
                },
                {
                  q: "How does Knewton work?",
                  a: " Knewton uses AI algorithms to monitor student progress and adapt lessons to their learning pace, strengths, and weaknesses, ensuring a tailored learning experience.",
                },
                {
                  q: "What are the benefits of using Knewton?",
                  a: "The key benefits include personalized learning paths, real-time feedback, data-driven insights for teachers, and better student engagement and performance",
                },
                {
                  q: "Is Knewton suitable for K-12 education?",
                  a: " Yes, Knewton is ideal for K-12 education, offering personalized learning in various subjects like math, science, and reading ",
                },
                {
                  q: "Can Knewton be used in higher education?",
                  a: " Yes, Knewton is also effective for higher education, particularly in STEM courses, offering tailored learning paths and study materials for college students.",
                },
                {
                  q: "How does Knewton personalize learning?",
                  a: " Knewton personalizes learning by analyzing student performance and adjusting content in real time to match their specific learning needs. ",
                },
                {
                  q: "Can Knewton help with exam preparation?",
                  a: "Yes, Knewton offers personalized study materials, practice tests, and insights to help students prepare effectively for exams.",
                },
                {
                  q: "Does Knewton offer real-time feedback?",
                  a: " Yes, Knewton provides immediate feedback to both students and teachers, helping students stay on track and teachers adjust their instruction.",
                },
                {
                  q: "How does Knewton support teachers?",
                  a: " Knewton offers teachers detailed analytics on student progress, allowing them to identify areas of improvement and customize learning experiences.",
                },
                {
                  q: "Is Knewton available globally?",
                  a: " Yes, Knewton is accessible worldwide, with content available in various languages and regions, depending on the institution's needs.",
                },
                {
                  q: "What subjects does Knewton cover?",
                  a: " Knewton offers personalized learning across various subjects, including math, science, language arts, and test preparation. ",
                },
                {
                  q: " Can Knewton be used for remote learning?",
                  a: "Yes, Knewton is perfect for remote learning, providing personalized learning paths that students can follow from anywhere.",
                },
                {
                  q: "How does Knewton compare to traditional learning methods?",
                  a: " Unlike traditional learning, Knewton adapts content dynamically to meet the needs of each student, ensuring a personalized experience.",
                },
                {
                  q: "What is Knewton’s pricing model?",
                  a: " Knewton operates on a subscription-based model, offering various pricing plans for both educational institutions and individual users.",
                },
                {
                  q: "Can Knewton integrate with other learning management systems (LMS)?",
                  a: " Yes, Knewton integrates with popular LMS platforms, such as Google Classroom, Moodle, and others, enhancing the learning experience.",
                },
                {
                  q: "Is Knewton useful for STEM education?",
                  a: " Yes, Knewton is highly effective for STEM subjects, providing personalized learning paths for math, science, engineering, and technology courses.",
                },
                {
                  q: "What makes Knewton different from other learning platforms?",
                  a: "Knewton stands out for its use of AI to provide deeply personalized learning experiences, whereas other platforms may offer more generalized content.",
                },
                {
                  q: "Can Knewton be used for language learning?",
                  a: " Yes, Knewton offers adaptive learning paths for language learning, helping students progress at their own pace.",
                },
                {
                  q: "Does Knewton offer support for students with learning disabilities?",
                  a: "Yes, Knewton’s adaptive learning technology helps accommodate students with learning disabilities by providing personalized support.",
                },
                {
                  q: " Can Knewton be used in corporate training?",
                  a: " Yes, Knewton is suitable for corporate training, providing personalized learning experiences to improve employee skills.",
                },
                {
                  q: "How does Knewton track student performance?",
                  a: " Knewton tracks student progress through data analytics, adjusting content based on how students interact with lessons.",
                },
                {
                  q: "Does Knewton offer a mobile app?",
                  a: " Yes, Knewton can be accessed through a mobile app, enabling students to continue learning anywhere, anytime.",
                },
                {
                  q: "How does Knewton use AI in learning?",
                  a: "Knewton employs AI to assess student performance and adjust learning content in real time to optimize the learning experience. ",
                },
                {
                  q: "Can Knewton be used for personalized tutoring?",
                  a: "Yes, Knewton can serve as a personalized tutor, adapting its content to suit each student’s learning style and pace.",
                },
                {
                  q: "How does Knewton improve student engagement?",
                  a: "  Knewton engages students by providing a customized learning journey that keeps them challenged without overwhelming them.",
                },
              ]
                .map((item, i) => ({ ...item, id: `faq${i}` }))
                .filter((item, i, arr) => showAllFaqs || i < 4)
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

              {/* Read More / Read Less Button */}
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

      default:
        return null;
    }
  };

  return (
    <>
      <div className="bg-dark">
        <Link
          to="/Aitools"
          className="d-inline-block text-white text-decoration-none ml-3 py-1"
        >
          <i className="bi bi-arrow-left me-2"></i>Back to Directory
        </Link>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between mb-5">
            {/* Left side (Text Section) */}
            <div style={{ flex: 1, paddingRight: "30px" }}>
              <img
                src={Logo}
                alt="Logo"
                className="me-3"
                style={{ width: "60px" }}
              />
              <h2>Knewton: Extended Content on Adaptive Learning Technology</h2>
              <div className="text-warning mb-1">
                ⭐⭐⭐⭐⭐ 95% Satisfaction
              </div>
              <p>
                Knewton is at the forefront of educational innovation with its
                adaptive learning platform that leverages artificial
                intelligence to provide personalized learning experiences. With
                a primary focus on helping students in diverse educational
                settings, Knewton’s AI-powered technology adapts in real-time to
                meet the unique learning needs of each student, making it a
                transformative tool for educators and learners alike. Whether
                you're in K-12 education, higher education, or corporate
                learning, Knewton’s dynamic approach supports better engagement,
                retention, and academic success.
              </p>
            </div>

            {/* Right side (Image Section) */}
            <div style={{ flex: 1, textAlign: "center" }}>
              <img
                src="https://images.indianexpress.com/2023/05/ChatGPT-Code-Interpreter.jpg"
                className="img-fluid rounded-3"
                style={{ maxWidth: "80%", height: "auto" }}
              />
            </div>
          </div>

          {/* Tab Navigation */}
          <ul className="nav nav-tabs custom-tabs mb-4">
            {[
              "Features",
              "Screenshots",
              "Reviews",
              "FAQs",
              // "technical",
              "Why-we-use",
              "Pro&Const",
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
            <h4 className="mb-3">Ready to get started with ChatGPTI?</h4>
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

export default Knewton;