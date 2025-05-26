import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import a from "../../../../public/assets/Img/AI for Education/AI For Education/1.png";
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

const QuizletAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [openIndex, setOpenIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            {[
              {
                title: "Quizlet AI-Powered Learning",
                desc: "This feature adapts to the learner's pace and abilities, offering personalized study plans, smart quizzes, and study tools designed for efficient learning.",
              },
              {
                title: "Quizlet AI Flashcards",
                desc: " The flashcards are customized to each learner's needs. Quizlet’s AI automatically suggests cards that will help with difficult subjects based on the user’s past performance.",
              },
              {
                title: "Quizlet AI Study Assistant",
                desc: "This tool helps students stay on track by providing reminders, personalized study suggestions, and tips for improving learning strategies.",
              },
              {
                title: "Quizlet Adaptive Learning",
                desc: "Quizlet uses machine learning algorithms to adapt to the learning speed of each student, ensuring that no one is left behind.",
              },
              {
                title: "Quizlet AI for Exam Preparation",
                desc: "Quizlet's AI helps prepare students for exams by analyzing common questions, providing targeted review material, and offering practice tests to test readiness.",
              },
              {
                title: "Quizlet for Vocabulary Building",
                desc: "Quizlet AI helps learners expand their vocabulary by offering smart flashcards that adapt based on individual learning patterns and progress.",
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
                src="https://i.ibb.co/j9zpZBhP/image.png"
                alt="quizlet"
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-md-6">
              <img
                src="https://i.ibb.co/ynzzQJmC/image.png"
                alt="quizlet"
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
                <h3 className="fw-bold mb-4">Why Use Quizlet AI?</h3>

                <h5>Personalization</h5>
                <p className="fs-5">
                  Quizlet AI tailors the learning experience to each
                  individual’s needs, making studying more efficient and
                  effective.
                </p>

                <h5>Efficiency:</h5>
                <p className="fs-5 mt-3">
                  The AI-powered study tools are designed to focus on areas that
                  need improvement, allowing students to spend more time
                  learning and less time on content they already know.
                </p>

                <h5>Smart Study Plans</h5>
                <p className="fs-5 mt-3">
                  Quizlet generates smart study schedules based on the user’s
                  goals, ensuring optimal study sessions.
                </p>

                <h5>Data-Driven Insights</h5>
                <p className="fs-5 mt-3">
                  Teachers and students gain valuable insights from detailed
                  learning reports, identifying trends and areas for
                  improvement.
                </p>

                <h5>Enhanced Engagement</h5>
                <p className="fs-5 mt-3">
                  Interactive learning modes and gamified study sessions keep
                  students motivated.
                </p>

                <h5>Adaptive Learning Paths</h5>
                <p className="fs-5 mt-3">
                  With AI, the platform continuously adapts study paths
                  according to performance, ensuring that no student is left
                  behind.
                </p>

                <h5>Continuous Learning Adaptation</h5>
                <p className="fs-5 mt-3">
                  Quizlet AI constantly adapts to your study habits, updating
                  learning paths and presenting material that ensures steady
                  progress.
                </p>

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
                    Customizable Learning: Quizlet AI adapts to each learner’s
                    pace, creating a more personalized and efficient learning
                    experience.
                  </li>
                  <li className="mb-2">
                    Comprehensive Learning Tools: It combines flashcards,
                    quizzes, and study sessions, all designed to improve
                    retention and understanding.
                  </li>
                  <li className="mb-2">
                    Engaging Interface: The platform uses gamification to keep
                    students motivated with points, levels, and achievements.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Progress Tracking: Both students and teachers can monitor
                    progress and identify areas for improvement.
                  </li>
                  <li className="mb-2">
                    Collaboration: Quizlet supports peer-to-peer learning with
                    group study modes and collaborative assignments.
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
                    Subscription Costs: Some advanced features and tools require
                    a paid subscription, which might not be affordable for all
                    users.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Limited for Advanced Topics: While great for basic learning,
                    Quizlet may not have the depth required for more advanced,
                    niche subjects.
                  </li>
                  <li className="mb-2">
                    Requires Internet: Quizlet’s AI features are
                    internet-dependent, making it less useful in offline
                    environments.
                  </li>
                  <li className="mb-2">
                    May Over-Optimize: Some learners may feel that the AI’s
                    suggestions are too repetitive or narrowly focused on
                    certain types of content.
                  </li>
                  <li className="mb-2">
                    Learning Dependency: Some students may become too reliant on
                    Quizlet and not develop their own learning techniques.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "Alternative":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-4">
              Alternatives to Quizlet AI
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
                    <strong>Anki:</strong> A popular flashcard app that uses
                    spaced repetition algorithms to help learners memorize
                    information.
                  </li>
                  <li className="mb-3">
                    <strong>Kahoot!:</strong> An interactive quiz platform that
                    is widely used in classrooms, offering gamified learning
                    experiences.
                  </li>
                  <li className="mb-3">
                    <strong>Duolingo:</strong> A language learning app that uses
                    AI to create personalized learning paths for users.
                  </li>
                  <li className="mb-3">
                    <strong>Cram.com:</strong> Another flashcard tool with
                    features similar to Quizlet but with additional study modes.
                  </li>
                  <li className="mb-3">
                    <strong>Brainscape</strong> A flashcard platform that uses
                    cognitive science to enhance the learning experience.
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
                  q: "What is Quizlet AI?",
                  a: "Quizlet AI is an advanced learning tool that uses artificial intelligence to personalize and enhance your study experience. It helps generate flashcards, quizzes, and study plans tailored to your needs.",
                },
                {
                  q: "How does Quizlet AI work?",
                  a: "Quizlet AI analyzes your learning patterns and adapts study materials to suit your strengths and weaknesses. It creates smart study plans, quizzes, and flashcards to optimize your learning.",
                },
                {
                  q: " Can Quizlet AI be used for multiple subjects?",
                  a: "Yes, Quizlet AI supports various subjects, including languages, science, history, and math, offering study tools and flashcards for each subject.",
                },
                {
                  q: "Does Quizlet AI help with exam preparation?",
                  a: "Yes, Quizlet AI is designed to help students prepare for exams by offering personalized quizzes and study tools focused on test topics.",
                },
                {
                  q: "Is Quizlet AI free to use?",
                  a: "Quizlet offers both free and paid versions. The free version gives access to basic study tools, while the paid version unlocks advanced AI features.",
                },
                {
                  q: " What are the benefits of using Quizlet AI for learning?",
                  a: "Quizlet AI offers personalized study paths, adaptive quizzes, and real-time feedback, making learning more efficient and tailored to individual needs.",
                },
                {
                  q: "How can I track my progress with Quizlet AI?",
                  a: "Quizlet AI provides detailed performance tracking, showing progress over time, highlighting strengths and areas needing improvement.",
                },
                {
                  q: "Can Quizlet AI help with vocabulary building?",
                  a: "Yes, Quizlet AI is excellent for vocabulary building, especially for language learners. It generates personalized flashcards and quizzes based on your learning progress.",
                },
                {
                  q: "Does Quizlet AI support language learning?",
                  a: "Yes, Quizlet AI is ideal for language learners, offering customized flashcards and quizzes to help with vocabulary and grammar practice.",
                },
                {
                  q: "Can I create custom study sets with Quizlet AI?",
                  a: "Yes, Quizlet allows you to create your own flashcard sets and customize them with text, images, and audio for personalized learning.",
                },
                {
                  q: "Is Quizlet AI available on mobile devices?",
                  a: "Yes, Quizlet AI is available on both iOS and Android devices, allowing you to study on the go.",
                },
                {
                  q: "Does Quizlet AI provide feedback on my study performance?",
                  a: "Yes, Quizlet AI provides real-time feedback on your performance, helping you identify areas where you need to focus more attention.",
                },
                {
                  q: " Can Quizlet AI help with test prep?",
                  a: "Yes, Quizlet AI is great for test prep, offering study tools and quizzes tailored to specific exams like SAT, GRE, or ACT.",
                },
                {
                  q: "How do Quizlet AI-powered flashcards work?",
                  a: "Quizlet AI-powered flashcards adapt to your learning by showing you more difficult questions based on your performance while repeating easier ones less often.",
                },
                {
                  q: "Can I share my Quizlet AI study sets with others?",
                  a: "Yes, Quizlet allows you to share your study sets with others, making it ideal for collaborative learning.",
                },
                {
                  q: "Does Quizlet AI provide smart study plans?",
                  a: "Yes, Quizlet AI generates smart study plans that adapt to your learning pace and goals.",
                },
                {
                  q: " Can Quizlet AI help with subject mastery?",
                  a: "Yes, Quizlet AI can help you master subjects by focusing on your weak areas and offering more practice in those topics.",
                },
                {
                  q: " How does Quizlet AI improve learning efficiency?",
                  a: "Quizlet AI improves learning efficiency by focusing on weak areas and minimizing repetition of known material.",
                },
                {
                  q: "Can Quizlet AI track my learning patterns?",
                  a: "Yes, Quizlet AI tracks your learning patterns and adapts the content to suit your needs.",
                },
                {
                  q: "How does Quizlet AI make quizzes smarter?",
                  a: "Quizlet AI uses machine learning algorithms to analyze your quiz results and adjust the difficulty of future quizzes based on your performance.",
                },
                {
                  q: "Does Quizlet AI offer personalized study sessions?",
                  a: "Yes, Quizlet AI personalizes your study sessions by adapting the content to your performance, strengths, and weaknesses.",
                },
                {
                  q: " Can Quizlet AI help me with homework?",
                  a: "Yes, Quizlet AI can generate quizzes and flashcards based on your homework assignments, helping you understand and retain the material.",
                },
                {
                  q: " Is Quizlet AI good for group study?",
                  a: "Yes, Quizlet AI supports group study by allowing multiple users to access and collaborate on shared study sets and quizzes.",
                },
                {
                  q: " Can Quizlet AI assist in cognitive learning?",
                  a: "Yes, Quizlet AI uses advanced algorithms to improve cognitive learning by providing spaced repetition and focused practice on difficult concepts.",
                },
                {
                  q: " Does Quizlet AI offer learning analytics?",
                  a: "Yes, Quizlet AI provides learning analytics that give you detailed insights into your progress and areas needing improvement.",
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
       <a
          href="/Aitools"
          className="d-inline-block text-white text-decoration-none  mt-3 ml-3 py-1 px-2 ms-5 border rounded-sm"
        >
          <i className="bi bi-arrow-left me-2"></i>Back  {" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mb-5">
            {/* Left side (Text Section) */}
            <div
              style={{ flex: 1, paddingRight: "30px" }}
              className="order-2 order-md-1"
            >
              <h2>Quizlet AI Overview</h2>
              <div className="text-warning mb-1">
                ⭐⭐⭐⭐⭐ 95% Satisfaction
              </div>
              <p>
                Quizlet AI is an advanced AI-powered learning platform that uses
                artificial intelligence to enhance the study experience for both
                students and teachers. Quizlet is known for its study tools,
                including flashcards, personalized learning paths, adaptive
                learning algorithms, and more. It allows learners to engage in
                smart study plans, track progress, and improve retention through
                data-driven techniques. The integration of AI ensures that
                learners receive personalized study experiences and insights
                based on their performance.
              </p>
              <div className="mb-3">
                <a
                  href="https://quizlet.com/in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-2"
                >
                  Explore Tool
                </a>
              </div>
            </div>

            {/* Right side (Image Section) */}
<<<<<<< HEAD
          <div
  className="col-12 col-md-6 d-flex justify-content-center align-items-center order-1 order-md-2 mb-4 mb-md-0"
  style={{ textAlign: "center" }}
>
  <img
    src={a}
    alt="Quizlet"
    className="img-fluid rounded-3"
    style={{ maxWidth: "100%", height: "auto" }}
  />
</div>

=======
           <div className="col-lg-6 col-12 order-lg-2 order-1">
                <div className="ratio ratio-16x9">
                  <img
                    src={a}
                    alt="Quizlet"
                    className="img-fluid rounded-3 shadow-sm object-fit-cover"
                  />
                </div>
              </div>
>>>>>>> 9732e077a94f9a43e3fcff86cd1122391726245d
          </div>


          <section style={{ backgroundColor: "", padding: "3rem 0" }}>
  <div className="container text-center">
    <p className="text-primary">Explore in 3 Simple Steps</p>
    <h2
      style={{
        fontWeight: "semibold",
        color: "#fff",
        marginBottom: "1rem",
      }}
    >
      How to Use Quizlet AI?
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
            Smart Study Set Generation
          </h5>
          <p style={{ color: "#fff", margin: 0 }}>
            Quizlet AI transforms your notes, textbooks, or documents into
            intelligent flashcards and quizzes, making it easy to start studying
            instantly without manual entry.
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
            Personalized Learning Experience
          </h5>
          <p style={{ color: "#fff", margin: 0 }}>
            With adaptive AI, Quizlet personalizes your learning journey by
            focusing on what you need most, boosting memory through smart review
            sessions and targeted questions.
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
            Track Progress & Master Topics
          </h5>
          <p style={{ color: "#fff", margin: 0 }}>
            Quizlet AI gives you insights into your strengths and weak points,
            helping you review smarter, reinforce knowledge, and retain
            information more effectively.
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
              "features",
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
        </div>
      </div>
    </>
  );
};

export default QuizletAI;
