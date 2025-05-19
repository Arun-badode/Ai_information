import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import img9 from "../../../../public/assets/Img/AI for Education/img-9.avif"
import img10 from "../../../../public/assets/Img/AI for Education/img-10.png"
import f from "../../../../public/assets/Img/AI for Education/AI For Education/6.png"
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
const BrainlyAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                Create Personalized Videos in Minutes
              </p>
              <h3 className=""> AI-Powered Video Generation & Customization</h3>
            </div>
            {[
              {
                icon: "📝",
                title: "AI-Based Homework Solution:",
                desc: "With the Brainly AI homework helper, students can get assistance in solving difficult assignments, from math questions to science problems. The AI-powered platform helps break down complex problems into manageable steps, providing clarity and better comprehension.",
              },
              {
                icon: "💬",
                title: "Study Help Across Subjects:",
                desc: "Brainly AI supports a wide range of subjects, such as AI for solving math problems, AI in science, and AI-driven study help for languages, history, and other academic areas. Its vast database includes solutions to academic questions from textbooks and past academic papers.",
              },
              {
                icon: "📚",
                title: "Enhanced Exam Preparation:",
                desc: "Brainly AI helps students prepare for exams by offering targeted practice questions and comprehensive study guides on Brainly. These guides are aligned with the curriculum and use AI in solving questions effectively, ensuring that students are ready for any test.",
              },
              {
                icon: "🔍",
                title: "AI for Faster Homework Solutions:",
                desc: "Brainly AI allows students to get their homework done faster by offering quick, reliable, and accurate solutions. Its instant feedback mechanism improves learning efficiency and boosts student confidence.",
              },
              {
                icon: "🎓",
                title: "Brainly AI Learning Assistant:",
                desc: "Acting as a personalized AI study assistant, the platform offers feedback on assignments, helping students improve their grades over time. It’s a one-stop solution for homework help, exam prep, and ongoing academic support.",
              },
              {
                icon: "📊",
                title: "Integration with Learning Tools:",
                desc: "Brainly AI seamlessly integrates with other educational apps, creating a holistic study experience. It offers additional support via AI learning apps that guide students through challenging concepts and homework.",
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
      case "why-we-use":
        return (
          <div className="container">
            <div className="row g-4">
              <div className="col-12">
                <div className="custom-card text-light p-5 text-center">
                  <h3 className="fw-bold mb-4 text-start text-primary">
                    Why Should You Use Brainly AI?
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
                      Instant Help for Homework: With Brainly AI homework
                      assistance, students can get immediate solutions to their
                      problems anytime, making it a great resource for
                      last-minute study sessions or urgent homework help.
                    </li>
                    <li className="mb-3">
                      Personalized Feedback for Every Student: The AI-powered
                      platform offers personalized study paths based on the
                      student's strengths and weaknesses, ensuring that learning
                      is tailored to individual needs. This is crucial for
                      improving student performance.
                    </li>
                    <li className="mb-3">
                      Supports All Learning Styles: Brainly’s AI-assisted
                      learning adapts to various learning preferences, whether
                      visual, auditory, or kinesthetic. It allows students to
                      interact with content in a way that suits their preferred
                      learning style.
                    </li>
                    <li className="mb-3">
                      24/7 Availability: Unlike human tutors who are restricted
                      by time zones, Brainly’s AI tutor is available at all
                      hours. This constant availability is a huge advantage for
                      students who need support outside traditional study hours.
                    </li>
                    <li className="mb-3">
                      Quality Content and Reliable Answers: As the platform uses
                      AI-powered search algorithms to find relevant and
                      high-quality answers from verified sources, students can
                      trust the provided content to be both accurate and
                      helpful.
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
      case "FAQ":
        return (
          <div className="faq-section container py-5">
            <h3 className="text-center text-white mb-5 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is Brainly AI?",
                  a: "Brainly AI is an artificial intelligence-powered platform designed to assist students with their homework and academic questions. It uses AI algorithms to provide quick, accurate answers and personalized learning support.",
                },
                {
                  q: "How does Brainly AI work?",
                  a: "Brainly AI works by using advanced algorithms to process student queries, providing detailed answers and explanations based on its large database of academic content.",
                },
                {
                  q: "Is Brainly AI free to use?",
                  a: "Brainly offers both free and premium subscription options. The free version provides limited access to answers and solutions, while the premium version unlocks advanced features like personalized feedback and detailed explanations.",
                },
                {
                  q: "How does Brainly AI help students?",
                  a: "Brainly AI helps students by providing instant answers to academic questions, offering step-by-step explanations, and giving personalized feedback on homework.",
                },
                {
                  q: "Can Brainly AI solve math problems?",
                  a: "Yes, Brainly AI can solve a wide range of math problems, including algebra, geometry, calculus, and other mathematical disciplines.",
                },
                {
                  q: "Does Brainly AI support multiple subjects?",
                  a: "Yes, Brainly AI provides support for various subjects such as math, science, history, language arts, and many others.",
                },
                {
                  q: "Is Brainly AI helpful for exam preparation?",
                  a: "Yes, Brainly AI offers practice questions, study guides, and other resources designed to help students prepare for exams effectively.",
                },
                {
                  q: "How accurate are the answers provided by Brainly AI?",
                  a: "Brainly AI strives for accuracy by providing answers based on verified sources. However, for more complex queries, human assistance may be required to ensure complete accuracy.",
                },
                {
                  q: "Can Brainly AI explain the solutions step by step?",
                  a: "Yes, Brainly AI provides step-by-step solutions for problems, ensuring students understand the process behind the answers.",
                },
                {
                  q: "How does Brainly AI personalize learning?",
                  a: "Brainly AI uses machine learning to track a student’s progress and learning habits, providing tailored feedback and study resources based on the student’s individual needs.",
                },
                {
                  q: "Can Brainly AI help with science questions?",
                  a: "Yes, Brainly AI can assist with various science topics including biology, chemistry, physics, and more.",
                },
                {
                  q: "How does Brainly AI compare to traditional tutoring?",
                  a: "Brainly AI provides instant, on-demand assistance, whereas traditional tutoring requires scheduling sessions and may not be available immediately.",
                },
                {
                  q: "Can Brainly AI help with language arts assignments?",
                  a: "Yes, Brainly AI can assist with grammar, writing, reading comprehension, and other language arts-related assignments.",
                },
                {
                  q: "How does Brainly AI handle complex questions?",
                  a: "Brainly AI breaks down complex questions into simpler steps, providing detailed explanations and guiding the student through the solution.",
                },
                {
                  q: "Does Brainly AI offer 24/7 assistance?",
                  a: "Yes, Brainly AI is available 24/7, allowing students to get help anytime, regardless of their time zone or study schedule.",
                },
                {
                  q: "What subjects does Brainly AI cover?",
                  a: "Brainly AI covers a wide range of subjects, including math, science, history, geography, language arts, and more.",
                },
                {
                  q: "Can Brainly AI help with homework assignments?",
                  a: "Yes, Brainly AI is specifically designed to help with homework assignments by providing solutions, explanations, and guidance.",
                },
                {
                  q: "How do I access Brainly AI?",
                  a: "Brainly AI can be accessed via the Brainly website or through its mobile app, available for both Android and iOS devices.",
                },
                {
                  q: "Can Brainly AI help me with my homework instantly?",
                  a: "Yes, Brainly AI provides immediate answers and explanations, making it easy to get quick help with your homework.",
                },
                {
                  q: "Does Brainly AI integrate with other educational tools?",
                  a: "Yes, Brainly AI integrates with various educational apps and tools to provide a comprehensive learning experience.",
                },
                {
                  q: "Can Brainly AI help me with my essay writing?",
                  a: "Yes, Brainly AI can assist with essay writing by helping with structure, grammar, style, and even topic suggestions.",
                },
                {
                  q: "Is Brainly AI suitable for all grade levels?",
                  a: "Yes, Brainly AI is designed to assist students from elementary to higher education levels.",
                },
                {
                  q: "How does Brainly AI compare to other homework help platforms?",
                  a: "Brainly AI offers personalized feedback, real-time answers, and step-by-step explanations, setting it apart from other platforms that may not provide the same level of detail.",
                },
                {
                  q: "Can Brainly AI solve problems in multiple languages?",
                  a: "Yes, Brainly AI supports multiple languages, making it accessible to students worldwide.",
                },
                {
                  q: "How does Brainly AI enhance student learning?",
                  a: "Brainly AI enhances learning by providing instant help, personalized study paths, and detailed explanations, improving student understanding and retention.",
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

              {/* Read More / Show Less Button */}
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

      case "screenshots":
        return (
          <div className="row g-4">
            <div className="col-md-6">
              <img
                src={img9}
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={img10}
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
        );

      case "reviews":
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

      case "pros & cons":
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
                    Instant Feedback: Get real-time answers and feedback for
                    your questions, making learning more efficient.
                  </li>
                  <li className="mb-2">
                    Access to Diverse Subjects: Receive assistance with
                    homework, assignments, and study materials across a broad
                    range of subjects.
                  </li>
                  <li className="mb-2">
                    Personalized Learning Experience: Brainly AI tailors the
                    learning experience to the individual student's needs.
                  </li>
                  <li className="mb-2">
                    Improved Academic Performance: With continuous support and
                    learning, students see marked improvements in their academic
                    success.
                  </li>
                  <li className="mb-2">
                    Availability Anytime, Anywhere: Whether at home or on the
                    go, Brainly AI is available 24/7 on various devices.
                  </li>
                </ul>
              </div>

              {/*  */}
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
                    Dependence on Technology: Students may become overly reliant
                    on AI, possibly neglecting the development of critical
                    thinking and problem-solving skills.
                  </li>
                  <li className="mb-2">
                    Occasional Answer Limitations: For more complex or niche
                    questions, AI answers may not always be perfect and may
                    require additional human oversight.
                  </li>
                  <li className="mb-2">
                    Quality Variance: While the platform’s AI algorithm is
                    efficient, some answers may need to be further reviewed for
                    clarity and accuracy.
                  </li>
                  <li className="mb-2">
                    Limited Support for Highly Advanced Topics: Brainly AI
                    shines with basic and intermediate topics but might fall
                    short with highly advanced academic subjects or highly
                    specific queries.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "alternative":
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
                  <ul className="ps-3" style={{ listStyleType: "disc" }}>
                    <li className="mb-2">
                      Chegg Study: Offers step-by-step solutions for homework
                      questions and personalized tutoring for students at
                      various levels.
                    </li>
                    <li className="mb-2">
                      Socratic by Google: A free app powered by Google AI that
                      helps students solve problems across a wide range of
                      subjects.
                    </li>
                    <li className="mb-2">
                      Quizlet: A platform that enables students to create study
                      sets and practice exams, providing a personalized learning
                      experience.
                    </li>
                    <li className="mb-2">
                      Khan Academy: A widely-used free platform that offers
                      comprehensive learning materials and practice exercises
                      across subjects.
                    </li>
                  </ul>
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
          <div className="d-flex flex-column flex-md-row align-items-center justify-content-between mb-5">
            {/* Left side (Text Section) */}
           <div style={{ flex: 1, paddingRight: "30px" }} className="order-2 order-md-1">
              <p className="text-primary">Write better, faster</p>
              <h1>
                {" "}
                Brainly AI: Revolutionizing Education with Artificial
                Intelligence
              </h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                {" "}
                Introduction: Brainly is a leading global platform providing
                academic assistance to students through a community-driven
                model, but now with the introduction of AI features in Brainly,
                it has taken its educational support system to the next level.
                Brainly AI combines the power of artificial intelligence with
                the expertise of human educators to offer personalized,
                efficient, and smart learning experiences for students across
                the globe. This AI-powered platform enables learners to get
                real-time, contextually relevant solutions to their academic
                challenges in a range of subjects like math, science, language
                arts, and more.
              </p>

              <div className="mb-3">
                <span className="badge bg-primary me-2">Image Generation</span>
                <span className="badge bg-success me-2">Creative</span>
                <span className="badge bg-warning text-dark">Paid</span>
              </div>
            </div>

            {/* Right side (Image Section) */}
           <div
              style={{ flex: 1, textAlign: "center" }}
              className="order-1 order-md-2 mb-4 mb-md-0"
            >
              <img
                src={f}
                className="img-fluid rounded-3"
                style={{ maxWidth: "80%", height: "auto" }}
                alt="Quizlet AI platform illustration"
              />
            </div>
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
                How Brainly AI Works
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
                      AI-Powered Answers
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Brainly AI uses advanced machine learning algorithms to
                      understand a student’s question and offer precise,
                      step-by-step answers. It not only solves problems but also
                      explains the reasoning behind the answers. This ensures
                      that students learn
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
                      Personalized Feedback
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Brainly AI assesses a student's previous interactions,
                      learning style, and progress to deliver personalized AI
                      learning. Whether it's solving math problems,
                      understanding scientific concepts, or practicing writing,
                      Brainly's AI tailors its feedback for every student’s
                      unique needs.
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
                      Real-Time Assistance
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Unlike traditional tutoring, Brainly AI offers AI-powered
                      tutoring services that provide answers instantly. This
                      reduces the time spent waiting for help, enabling students
                      to stay on track with their homework or study routine.
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
              "screenshots",
              "reviews",
              "FAQ",

              "why-we-use",
              "pros & cons",
              "alternative",
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

export default BrainlyAI;