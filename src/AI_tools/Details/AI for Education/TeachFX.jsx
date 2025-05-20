import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import h from "../../../../public/assets/Img/AI for Education/AI For Education/10.png"
// import img15 from "../../../../public/assets/Img/AI for Education/img-15.jpg"
// import img16 from "../../../../public/assets/Img/AI for Education/img-16.jpg"
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
const TeachFX= () => {
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
                icon: "🎓",
                title: "AI-Powered Classroom Insights:",
                desc: "TeachFX uses AI to analyze classroom interactions, providing teachers with real-time insights into student engagement and participation.",
              },
              {
                icon: "📊",
                title: "Engagement Tracking:",
                desc: "The platform tracks student participation, allowing teachers to monitor engagement levels and identify students who may need more support.",
              },
              {
                icon: "🔍",
                title: "Real-Time Feedback:",
                desc: "Teachers receive instant feedback on classroom dynamics, including speaking times, interaction patterns, and areas for improvement.",
              },
              {
                icon: "📈",
                title: "Data-Driven Insights:",
                desc: "TeachFX generates actionable data about student engagement, helping educators improve their teaching strategies and foster better learning outcomes.",
              },
              {
                icon: "🧑‍🏫",
                title: "Personalized Learning Support:",
                desc: "By analyzing classroom discussions, TeachFX offers insights that allow educators to personalize their teaching methods for each student.",
              },
              {
                icon: "💬",
                title: "Speech Pattern Analysis:",
                desc: "The AI listens to classroom interactions, analyzing speech patterns to determine student engagement and comprehension levels.",
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
                    Why Use TeachFX?
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
                      Enhance Classroom Engagement: Through real-time data,
                      TeachFX provides insights on how engaged students are
                      during the lesson. It helps teachers identify when
                      students are disengaged, allowing them to alter their
                      approach to maintain interest and interaction.
                    </li>
                    <li className="mb-3">
                      Support for Hybrid and Remote Classrooms: TeachFX is
                      perfect for the evolving educational landscape, where many
                      classrooms are hybrid or fully online. With its AI-driven
                      tools, teachers can track and enhance student engagement
                      in virtual or mixed settings.
                    </li>
                    <li className="mb-3">
                      Improved Teacher Effectiveness: TeachFX acts as a
                      classroom assistant, providing actionable feedback on
                      teaching methods, tone, student interaction, and class
                      structure. Teachers can identify areas where they might be
                      over-explaining, not giving enough opportunities for
                      student input, or struggling with classroom management.
                    </li>
                    <li className="mb-3">
                      Continuous Professional Development: With features that
                      assess teacher performance, TeachFX helps educators refine
                      their skills, offering them data-driven insights to inform
                      their professional development. This is particularly
                      valuable for new teachers or those seeking to improve
                      specific aspects of their teaching practice.
                    </li>
                    <li className="mb-3">
                      Better Student Outcomes: TeachFX enhances the learning
                      experience by ensuring teachers are delivering
                      high-quality, interactive, and engaging lessons. When
                      teachers are better informed about their own practices and
                      classroom dynamics, students benefit from a more engaging
                      and effective learning environment.
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
                  q: "What is TeachFX?",
                  a: "TeachFX is an AI-powered classroom assistant that analyzes classroom conversations to provide teachers with real-time feedback on student engagement and lesson delivery.",
                },
                {
                  q: "How does TeachFX work?",
                  a: "TeachFX uses voice recognition technology to analyze teacher and student speech during lessons, providing insights on participation, engagement, and teacher effectiveness.",
                },
                {
                  q: "What are the main features of TeachFX?",
                  a: "Key features include real-time classroom analysis, voice recognition, feedback on teacher-student interactions, and engagement analytics.",
                },
                {
                  q: "Is TeachFX suitable for online classrooms?",
                  a: "Yes, TeachFX works well in online, hybrid, and in-person classrooms by tracking student participation and engagement in real-time.",
                },
                {
                  q: "Can TeachFX be used for hybrid learning environments?",
                  a: "Yes, TeachFX is specifically designed to support hybrid classrooms by providing feedback on both in-person and virtual student interactions.",
                },
                {
                  q: "How does TeachFX improve classroom engagement?",
                  a: "TeachFX provides data on student talk time, teacher talk time, and overall classroom interaction, helping teachers improve student engagement strategies.",
                },
                {
                  q: "Can TeachFX analyze teacher talk time?",
                  a: "Yes, TeachFX tracks the amount of time teachers spend speaking and provides feedback to balance teacher and student contributions.",
                },
                {
                  q: "Is TeachFX a speech-to-text tool?",
                  a: "TeachFX uses voice recognition but does not solely convert speech to text. It analyzes speech patterns and classroom dynamics for feedback.",
                },
                {
                  q: "Can TeachFX be used in any subject area?",
                  a: "Yes, TeachFX is applicable across all subject areas, from math and science to language arts and social studies.",
                },
                {
                  q: "Does TeachFX provide feedback on teacher performance?",
                  a: "Yes, TeachFX provides actionable feedback on teacher speech, tone, and classroom management techniques.",
                },
                {
                  q: "How does TeachFX benefit remote teaching?",
                  a: "TeachFX offers valuable insights for remote teachers by tracking student engagement and participation in virtual classrooms.",
                },
                {
                  q: "Is TeachFX easy to use?",
                  a: "Yes, TeachFX is designed to be user-friendly, offering simple navigation for teachers to access feedback and analysis.",
                },
                {
                  q: "Does TeachFX provide feedback on student participation?",
                  a: "Yes, TeachFX tracks student participation and provides feedback on who is engaging and who may need additional support.",
                },
                {
                  q: "How can TeachFX help with lesson improvement?",
                  a: "TeachFX analyzes how lessons are delivered and provides feedback on pacing, engagement, and student interaction, helping teachers refine their approach.",
                },
                {
                  q: "Can TeachFX track student progress?",
                  a: "TeachFX tracks student participation, engagement, and verbal responses, providing insights into progress during lessons.",
                },
                {
                  q: "Does TeachFX integrate with other learning management systems (LMS)?",
                  a: "Yes, TeachFX can integrate with popular LMS platforms like Google Classroom, making it easier to track and analyze classroom data.",
                },
                {
                  q: "Can TeachFX be used for professional development?",
                  a: "Yes, TeachFX is an excellent tool for teacher development, offering insights into teaching methods and areas for improvement.",
                },
                {
                  q: "What type of feedback does TeachFX provide?",
                  a: "TeachFX provides real-time feedback on teacher-student interactions, participation levels, and classroom dynamics, offering suggestions for improvement.",
                },
                {
                  q: "Is TeachFX effective for large classrooms?",
                  a: "Yes, TeachFX can handle classrooms of various sizes, providing valuable feedback regardless of the number of students.",
                },
                {
                  q: "Does TeachFX provide speech analysis for teachers?",
                  a: "Yes, TeachFX provides detailed speech analysis, including tone, clarity, and volume, helping teachers improve their communication skills.",
                },
                {
                  q: "How does TeachFX help with classroom management?",
                  a: "TeachFX tracks classroom interactions and identifies when students are disengaged, helping teachers adjust their teaching style or activities to maintain focus.",
                },
                {
                  q: "Can TeachFX be used in K-12 education?",
                  a: "Yes, TeachFX is suitable for K-12 classrooms, providing feedback on student engagement, teacher effectiveness, and classroom dynamics.",
                },
                {
                  q: "Can TeachFX be used in higher education?",
                  a: "Yes, TeachFX is also suitable for higher education settings, helping professors monitor student participation and improve classroom effectiveness.",
                },
                {
                  q: "Does TeachFX track both student and teacher voices?",
                  a: "Yes, TeachFX analyzes both teacher and student voices to assess engagement and the quality of classroom interactions.",
                },
                {
                  q: "Is TeachFX available as a mobile app?",
                  a: "Yes, TeachFX offers a mobile app that allows teachers to access feedback and classroom analysis on the go.",
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
                src="https://www.gizmochina.com/wp-content/uploads/2023/06/Screenshot-2023-06-23-165608.png"
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={Rephrase}
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
                    Real-Time Feedback: TeachFX gives immediate feedback during
                    or after lessons, allowing teachers to adjust their teaching
                    strategies in real-time.
                  </li>
                  <li className="mb-2">
                    Voice Analytics: The AI-driven voice analysis helps teachers
                    monitor their speech and identify patterns that might hinder
                    communication with students.
                  </li>
                  <li className="mb-2">
                    Student Engagement Insights: Teachers receive detailed
                    insights into student participation, helping them determine
                    which students are engaged and which may need additional
                    attention.
                  </li>
                  <li className="mb-2">
                    Supports Online and Hybrid Classrooms: Whether you're
                    teaching in-person, remotely, or in a hybrid classroom,
                    TeachFX adapts to your needs and provides valuable data
                    regardless of your teaching format.
                  </li>
                  <li className="mb-2">
                    Customizable Feedback: TeachFX offers tailored feedback
                    based on the teacher's teaching style, providing suggestions
                    that align with their unique strengths and weaknesses.
                  </li>
                  <li className="mb-2">
                    Teacher Training: TeachFX helps teachers in their
                    professional development by providing ongoing suggestions
                    and improvement strategies for lesson delivery and classroom
                    management.
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
                    Data Privacy Concerns: Since TeachFX records classroom
                    conversations, there may be concerns around student and
                    teacher privacy. Schools and teachers should ensure they
                    have proper consent before using the tool in their
                    classrooms.
                  </li>
                  <li className="mb-2">
                    Over-Reliance on Technology: While TeachFX offers valuable
                    feedback, there’s a risk that teachers might become overly
                    dependent on the tool and not use their own instincts or
                    creativity in lesson planning.
                  </li>
                  <li className="mb-2">
                    Initial Learning Curve: Some teachers may find the interface
                    or AI-powered features challenging to use initially. There
                    may be a need for training to fully utilize TeachFX’s
                    capabilities.
                  </li>
                  <li className="mb-2">
                    Limited Language Support: TeachFX currently works best in
                    English-speaking classrooms, and its voice recognition
                    features may not be as effective in other languages, which
                    could limit its applicability in non-English classrooms.
                  </li>
                  <li className="mb-2">
                    Cost: Depending on the subscription model, TeachFX can be
                    relatively expensive, especially for schools or individual
                    teachers with limited budgets.
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
                      Classcraft: A gamified classroom management tool designed
                      to enhance student engagement and behavior through rewards
                      and challenges.
                    </li>
                    <li className="mb-2">
                      Kahoot!: An interactive quiz-based platform that can be
                      used to create a fun, engaging learning environment for
                      students while providing teachers with instant feedback.
                    </li>
                    <li className="mb-2">
                      Google Classroom: A popular learning management system
                      that allows teachers to create assignments, communicate
                      with students, and track progress in one unified platform.
                    </li>
                    <li className="mb-2">
                      Edmodo: A social learning platform that enables teachers
                      and students to collaborate in an online environment,
                      offering tools for communication, assignment submission,
                      and grading.
                    </li>
                    <li className="mb-2">
                      Flipgrid: An innovative video discussion platform where
                      students can respond to prompts via video, enhancing
                      interaction in the classroom.
                    </li>
                    <li className="mb-2">
                      Socrative: An assessment tool designed for teachers to
                      create quizzes, polls, and exercises to track student
                      understanding and engagement in real-time.
                    </li>
                    <li className="mb-2">
                      Nearpod: A tool for creating interactive lessons, quizzes,
                      and polls that engage students and provide real-time
                      feedback to teachers.
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
              <p className="text-primary">Write better, faster</p>
              <h1>TeachFX: AI-Powered Classroom Insights</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                {" "}
                TeachFX is an innovative AI-powered classroom assistant designed
                to enhance the teaching experience for educators. By leveraging
                artificial intelligence (AI) and machine learning (ML), TeachFX
                provides real-time feedback to educators, analyzing classroom
                interactions, voice conversations, and student engagement
                levels. This tool serves as an effective companion for both
                in-person and remote learning environments, giving teachers
                valuable insights to improve their lesson delivery and classroom
                management.
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
                src={h}
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
                How To TeachFX
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
                      AI-Powered Classroom Analysis
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      TeachFX listens to the classroom conversation and
                      processes the audio data using sophisticated voice
                      recognition algorithms to understand the communication
                      dynamics in the classroom. This tool gives teachers
                      detailed reports on their classroom’s activity and
                      highlights areas where interaction can be improved.
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
                      Voice Recognition Technology
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      The tool tracks verbal interactions between teachers and
                      students, measuring how much the teacher talks versus how
                      much students are participating. It also identifies speech
                      patterns that indicate disengagement, allowing teachers to
                      make real-time adjustments to increase student
                      involvement.
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
                      Real-Time Feedback for Teachers
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      During or after a lesson, TeachFX provides immediate
                      insights into the effectiveness of the session. This
                      feedback is centered around metrics such as classroom
                      engagement, the amount of teacher talk time, and how well
                      students are interacting with the lesson material.
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

export default TeachFX;