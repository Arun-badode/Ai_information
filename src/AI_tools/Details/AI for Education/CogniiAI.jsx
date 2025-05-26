import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import img5 from "../../../../public/assets/Img/AI for Education/img-5.jpg"
import img6 from "../../../../public/assets/Img/AI for Education/img-6.png"
import d from "../../../../public/assets/Img/AI for Education/AI For Education/4.png"

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

const CogniiAI = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default active tab as 'features'
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
                title: " Cognii Virtual Tutor",
                desc: "  This AI-powered virtual tutor helps students with real-time, personalized guidance on a range of subjects including math, science, reading comprehension, and more. It adapts to the learner's needs and provides responses that foster critical thinking and problem-solving.",
              },
              {
                title: "Cognii Assessment Tool",
                desc: " A major feature of the Cognii platform, the AI-driven assessment tool helps educators evaluate student performance through adaptive testing, which tailors the difficulty level based on previous answers. This ensures that assessments are personalized and accurately reflect the student’s knowledge. ",
              },
              {
                title: "Cognii Personalized Feedback",
                desc: " Using advanced machine learning algorithms, Cognii delivers personalized feedback to students on their strengths and areas for improvement. This feedback is designed to help students understand their mistakes and guide them on how to improve.",
              },
              {
                title: "AI-Powered Education ",
                desc: "  With the integration of AI in education, Cognii offers an innovative approach to student engagement, making learning more effective. Its interactive learning features ensure that students are constantly challenged, motivated, and supported in their educational journey.",
              },
              // {
              //   title: " ",
              //   desc: " ",
              // },
              // {
              //   title: " ",
              //   desc: " ",
              // },
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
                src={img5}
                alt="cognii"
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-md-6">
              <img
                src={img6}
                alt="cognii
                "
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
                <h3 className="fw-bold mb-4">Why Use Cognii AI?</h3>

                <h5>Personalized Learning</h5>
                <p className="fs-5">
                  Cognii offers adaptive learning technologies that create a
                  personalized study plan tailored to each student's needs.
                  Whether you are struggling with a subject or looking for
                  advanced challenges, Cognii adjusts its content delivery to
                  match your learning style.
                </p>

                <h5>Real-Time Feedback</h5>
                <p className="fs-5 mt-3">
                  Cognii provides instant, AI-powered feedback, allowing
                  students to understand their mistakes and make improvements
                  immediately.
                </p>

                <h5>Engaging Learning Experience</h5>
                <p className="fs-5 mt-3">
                  With interactive assessments, virtual tutoring, and cognitive
                  learning technology, Cognii makes learning more engaging and
                  less monotonous. Students can enjoy a more dynamic educational
                  experience.
                </p>

                <h5>Scalable Solution for Schools</h5>
                <p className="fs-5 mt-3">
                  Schools, educational institutions, and online learning
                  platforms can easily integrate Cognii’s technology into their
                  classrooms, benefiting from its AI-driven educational tools to
                  enhance teaching and learning.
                </p>

                <h5>Adaptive Learning for All Ages</h5>
                <p className="fs-5 mt-3">
                  From K-12 education to higher education, Cognii serves
                  students of all age groups and provides adaptive learning
                  resources that meet their varying needs.
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
                    Personalization: Cognii offers an unmatched level of
                    personalization in learning, allowing students to receive
                    custom learning plans, making it perfect for students with
                    varying abilities and needs.
                  </li>
                  <li className="mb-2">
                    AI-Powered Feedback: Real-time feedback helps students to
                    progress quickly and better understand their learning
                    patterns.
                  </li>
                  <li className="mb-2">
                    Engagement: The interactive nature of the platform makes
                    learning engaging and enjoyable for students, enhancing
                    motivation and retention.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Comprehensive Subject Coverage: Cognii covers a wide range
                    of subjects, including math, science, language learning, and
                    more, making it a versatile tool for students.
                  </li>
                  <li className="mb-2">
                    Scalable for Educational Institutions: Ideal for schools and
                    universities, Cognii can be implemented across large
                    educational systems, providing consistent, high-quality
                    learning support.
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
                    Limited Offline Support: Cognii’s platform requires internet
                    access, which could be a limitation for students in areas
                    with unreliable or no internet access.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Learning Dependency: While AI is an amazing tool, it may not
                    replace the value of human interaction in certain
                    educational environments, especially for younger learners or
                    students needing more hands-on support.
                  </li>
                  <li className="mb-2">
                    Platform Accessibility: Some users might face accessibility
                    issues with the platform’s interface, especially if they are
                    not technologically savvy.
                  </li>
                  <li className="mb-2">
                    Subscription Costs: Depending on the specific features and
                    level of use, Cognii might come with costs that some schools
                    or individuals may find prohibitive.
                  </li>
                  {/* <li className="mb-2">
                   
                  </li> */}
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
              Alternatives to Cognii AI
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
                    <strong>Knewton:</strong>Another AI-powered adaptive
                    learning platform offering personalized education tools, but
                    with a greater focus on data analytics and curriculum
                    integration.
                  </li>
                  <li className="mb-3">
                    <strong>Socratic by Google:</strong> An AI-based homework
                    help app that helps students with questions by providing
                    relevant explanations and answers.
                  </li>
                  <li className="mb-3">
                    <strong>Khan Academy:</strong> Offers free interactive
                    lessons, exercises, and personalized learning paths, though
                    without the same depth of AI-powered assessments and
                    feedback that Cognii offers.
                  </li>
                  <li className="mb-3">
                    <strong>Quizlet:</strong> A study app offering personalized
                    learning through flashcards and practice tests, but lacking
                    AI-driven real-time feedback.
                  </li>
                  <li className="mb-3">
                    <strong>Duolingo:</strong>Focuses on language learning with
                    personalized, AI-driven language exercises, providing an
                    alternative for students focusing on language subjects.
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
                  q: " Is Cognii AI a real-time virtual tutor?",
                  a: "  Yes, Cognii AI offers a real-time virtual tutor that interacts with students, providing personalized feedback and guidance.",
                },
                {
                  q: " How does Cognii AI assess student responses?",
                  a: " Cognii AI uses natural language processing (NLP) and machine learning algorithms to assess student responses and provide accurate feedback.",
                },
                {
                  q: " Can Cognii AI understand multiple subjects?",
                  a: " Yes, Cognii AI is capable of understanding and tutoring in multiple subjects, including math, science, and language arts.",
                },
                {
                  q: " How personalized is the learning experience? ",
                  a: " The learning experience is highly personalized, with Cognii AI adapting its responses and suggestions based on each student's learning style and progress.",
                },
                {
                  q: " Can students ask Cognii AI questions directly?",
                  a: " Yes, students can ask Cognii AI questions, and it will respond with relevant explanations and feedback.",
                },
                {
                  q: "Does Cognii AI provide feedback on written responses? ",
                  a: " Yes, Cognii AI provides detailed feedback on written responses, helping students improve their writing skills.",
                },
                {
                  q: " Can Cognii AI help with homework?",
                  a: " Yes, Cognii AI can assist students with homework by providing explanations and guiding them through problem-solving processes.",
                },
                {
                  q: " Is Cognii AI suitable for different age groups?",
                  a: " Yes, Cognii AI is designed to cater to different age groups, from elementary school students to college learners.",
                },
                {
                  q: " How does Cognii AI improve student learning?",
                  a: " Cognii AI improves learning by offering real-time feedback, personalized tutoring, and customized learning paths based on the student's progress.",
                },
                {
                  q: " Does Cognii AI support multimedia content?",
                  a: "  Yes, Cognii AI supports multimedia content, allowing students to engage with videos, images, and interactive lessons.",
                },
                {
                  q: " How can I access Cognii AI?",
                  a: "  Cognii AI can be accessed through its web platform or integrated into existing Learning Management Systems (LMS).",
                },
                {
                  q: "Is there a mobile version of Cognii AI? ",
                  a: "Yes, Cognii AI offers a mobile app for easy access to its features on smartphones and tablets. ",
                },
                {
                  q: "Does Cognii AI integrate with other platforms?   ",
                  a: " Yes, Cognii AI integrates with various platforms and tools commonly used in educational environments.",
                },
                {
                  q: " Is Cognii AI available in multiple languages?",
                  a: " Yes, Cognii AI supports multiple languages, making it accessible to a global audience.",
                },
                {
                  q: "What kind of feedback does Cognii AI provide? ",
                  a: " Cognii AI provides feedback on accuracy, reasoning, and overall performance to help students improve their understanding of the subject matter.",
                },
                {
                  q: " Does Cognii AI offer progress tracking?",
                  a: " Yes, Cognii AI tracks student progress over time, providing detailed reports on their learning achievements and areas that need improvement.",
                },
                {
                  q: " Can Cognii AI be used for exam preparation?",
                  a: " Yes, Cognii AI can be used to prepare students for exams by offering practice questions, mock exams, and tailored feedback.",
                },
                {
                  q: " Is Cognii AI suitable for self-paced learning?",
                  a: " Yes, Cognii AI allows students to learn at their own pace, with lessons and assessments available on-demand.",
                },
                {
                  q: " Does Cognii AI offer personalized study plans?",
                  a: " Yes, Cognii AI creates personalized study plans based on individual student needs, learning goals, and progress.",
                },
                {
                  q: " Is Cognii AI effective for remote learning?",
                  a: " Yes, Cognii AI is an excellent tool for remote learning, providing a virtual tutor that can guide students without needing in-person instruction.",
                },
                {
                  q: "What is the cost of Cognii AI? ",
                  a: "Cognii AI offers various pricing plans based on the number of users and features needed. Pricing may vary depending on the specific use case (individual, school, or district). ",
                },
                {
                  q: " Does Cognii AI offer a free trial?",
                  a: " Yes, Cognii AI typically offers a free trial to give users a chance to experience its features before committing to a subscription.",
                },
                {
                  q: " Can I cancel my Cognii AI subscription anytime?",
                  a: " Yes, Cognii AI allows users to cancel their subscription at any time, with no long-term commitment required.",
                },
                {
                  q: " Is there customer support available for Cognii AI?",
                  a: "  Yes, Cognii AI provides customer support via email, phone, or live chat to assist with any issues or questions.",
                },
                {
                  q: "Can I get a refund for Cognii AI? ",
                  a: " Refund policies for Cognii AI may vary depending on the subscription plan. It's best to consult the terms of service for specific details. ",
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
           <div style={{ flex: 1, paddingRight: "30px" }} className="order-2 order-md-1">

              <h2>Cognii AI – Comprehensive Overview</h2>
              <div className="text-warning mb-1">
                ⭐⭐⭐⭐⭐ 95% Satisfaction
              </div>
              <p>
                Cognii is a cutting-edge AI-powered learning platform that is
                revolutionizing how students and educators approach personalized
                education. It combines natural language processing (NLP) and
                advanced machine learning techniques to create an interactive
                and adaptive learning experience. Whether it's for K-12
                education, higher education, or remote learning, Cognii offers
                tailored solutions to optimize learning outcomes. It leverages
                its virtual tutor and AI-driven assessment tools to enhance
                student engagement, provide personalized feedback, and track
                progress over time. Cognii’s platform is designed to support a
                wide variety of educational needs, including smart learning,
                personalized tutoring, interactive learning experiences, and
                real-time feedback. Its AI capabilities are built to address the
                unique needs of each learner, creating a customized learning
                journey that ensures optimal performance.
              </p>
              <div className="mb-3">
                <a
                  href="https://www.cognii.com/"
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
  className="col-12 col-md-6 d-flex justify-content-center align-items-center order-1 order-md-2 mb-4 mb-md-0"
  style={{ textAlign: "center" }}
>
  <img
    src={d}
    alt="Quizlet AI platform illustration"
    className="img-fluid rounded-3"
    style={{ maxWidth: "80%", height: "auto" }}
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
      How to Use Cognii AI?
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
            Ask Open-Ended Questions
          </h5>
          <p style={{ color: "#fff", margin: 0 }}>
            Submit your responses to conceptual or essay-style questions, and
            Cognii AI will evaluate your answers just like a human tutor—no
            multiple choice needed.
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
            Receive Real-Time Feedback
          </h5>
          <p style={{ color: "#fff", margin: 0 }}>
            Cognii provides immediate feedback on your written responses,
            identifying strengths, misconceptions, and ways to improve your
            answers effectively.
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
            Strengthen Critical Thinking
          </h5>
          <p style={{ color: "#fff", margin: 0 }}>
            By encouraging deeper explanations and self-correction, Cognii helps
            you build strong reasoning skills and long-term understanding of
            complex topics.
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

export default CogniiAI;
