


import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

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
const SmartSparrow = () => {
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
                title: "Personalized Learning Paths:",
                desc: "Create adaptive learning paths tailored to each student's needs, ensuring an individualized educational experience.",
              },
              {
                icon: "📊",
                title: "Real-Time Feedback:",
                desc: "Provide instant feedback to students based on their performance, helping them improve continuously.",
              },
              {
                icon: "🧑‍🏫",
                title: "Interactive Simulations:",
                desc: "Engage students with immersive simulations that allow them to apply their knowledge in realistic scenarios.",
              },
              {
                icon: "📈",
                title: "Data-Driven Insights:",
                desc: "Track and analyze student performance with real-time analytics, enabling teachers to adjust teaching strategies.",
              },
              {
                icon: "💡",
                title: "Scalable Learning Solutions:",
                desc: "Easily scale learning experiences to accommodate any size classroom, from small groups to large universities.",
              },
              {
                icon: "🔗",
                title: "Integration with LMS & Tools:",
                desc: "Seamlessly integrate with existing Learning Management Systems (LMS) and other tools for an enhanced educational environment.",
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
                    Why Use Smart Sparrow
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
                      Personalization: One of the biggest advantages of Smart
                      Sparrow is its ability to provide personalized education.
                      The platform adapts to each student's learning style,
                      helping them progress at their own pace.
                    </li>
                    <li className="mb-3">
                      Scalability: Whether you are a teacher managing a class of
                      20 students or a university with thousands of learners,
                      Smart Sparrow scales easily to meet the needs of different
                      educational environments.
                    </li>
                    <li className="mb-3">
                      Interactive Learning: By offering interactive simulations
                      and dynamic learning paths, students are engaged in the
                      learning process, which increases knowledge retention.
                    </li>
                    <li className="mb-3">
                      Data-Driven Insights: Teachers can use learning analytics
                      and student progress tracking to make informed decisions
                      about curriculum and instruction.
                    </li>
                    <li className="mb-3">
                      Real-Time Feedback: Smart Sparrow provides real-time
                      feedback to both students and teachers, making learning
                      more effective.
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
                  q: "What is Smart Sparrow?",
                  a: "Smart Sparrow is an adaptive learning platform that personalizes education using AI-driven technologies.",
                },
                {
                  q: "Who created Smart Sparrow?",
                  a: "Smart Sparrow was founded by Dror Ben-Naim and his team from the University of New South Wales, Australia.",
                },
                {
                  q: "How does Smart Sparrow personalize learning?",
                  a: "It adjusts content based on student performance, learning speed, and engagement.",
                },
                {
                  q: "Is Smart Sparrow suitable for schools?",
                  a: "Yes, it’s widely used in K-12 and higher education.",
                },
                {
                  q: "Can Smart Sparrow be integrated into LMS systems?",
                  a: "Yes, it integrates with popular LMS like Canvas, Moodle, and Blackboard.",
                },
                {
                  q: "What makes Smart Sparrow different from other EdTech tools?",
                  a: "Its AI-driven adaptive learning and interactive content creation stand out.",
                },
                {
                  q: "What subjects does Smart Sparrow support?",
                  a: "It supports STEM subjects, humanities, and more through customizable courses.",
                },
                {
                  q: "Is Smart Sparrow good for STEM education?",
                  a: "Yes, it is particularly strong in creating adaptive STEM simulations and lessons.",
                },
                {
                  q: "Can instructors create their own content on Smart Sparrow?",
                  a: "Yes, it offers powerful content creation and customization tools.",
                },
                {
                  q: "Does Smart Sparrow provide learning analytics?",
                  a: "Yes, it provides real-time data and analytics about student performance.",
                },
                {
                  q: "Is Smart Sparrow suitable for remote learning?",
                  a: "Yes, it works well for distance and online education.",
                },
                {
                  q: "Does Smart Sparrow offer interactive simulations?",
                  a: "Yes, it allows educators to design and integrate interactive simulations.",
                },
                {
                  q: "Can Smart Sparrow help with adaptive testing?",
                  a: "Yes, it offers adaptive assessments that adjust based on learner performance.",
                },
                {
                  q: "Is Smart Sparrow mobile-friendly?",
                  a: "Yes, students can access lessons on smartphones and tablets.",
                },
                {
                  q: "Does Smart Sparrow offer real-time feedback?",
                  a: "Yes, it provides instant feedback to students based on their inputs.",
                },
                {
                  q: "Is Smart Sparrow beneficial for higher education?",
                  a: "Yes, many universities use Smart Sparrow to improve learning outcomes.",
                },
                {
                  q: "Can Smart Sparrow be used for blended learning?",
                  a: "Yes, it supports both in-person and online learning models.",
                },
                {
                  q: "What is Smart Sparrow’s pricing model?",
                  a: "Pricing is customized based on institution size and needs.",
                },
                {
                  q: "Is there a free trial for Smart Sparrow?",
                  a: "Institutions can request a demo or pilot project with Smart Sparrow.",
                },
                {
                  q: "Can Smart Sparrow be used in corporate training?",
                  a: "Yes, it's adaptable for professional and corporate education.",
                },
                {
                  q: "Is Smart Sparrow a learning management system (LMS)?",
                  a: "No, but it integrates easily with existing LMS platforms.",
                },
                {
                  q: "Does Smart Sparrow support course authoring?",
                  a: "Yes, it includes powerful course authoring tools for educators.",
                },
                {
                  q: "How does Smart Sparrow track student performance?",
                  a: "Through detailed learning analytics and performance metrics.",
                },
                {
                  q: "What types of assessments are available on Smart Sparrow?",
                  a: "It offers adaptive quizzes, interactive exercises, and simulations.",
                },
                {
                  q: "Can Smart Sparrow customize learning paths?",
                  a: "Yes, it dynamically creates learning paths for individual students.",
                },
                {
                  q: "Does Smart Sparrow support personalized tutoring?",
                  a: "Yes, it acts as an AI-powered learning assistant.",
                },
                {
                  q: "What are adaptive learning algorithms in Smart Sparrow?",
                  a: "These algorithms adjust content delivery based on student behavior.",
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
                    Highly Personalized: Customizes content to individual
                    learning needs, which is especially beneficial for students
                    who require extra help or advanced challenges.
                  </li>
                  <li className="mb-2">
                    Adaptive Learning Models: Uses AI algorithms to adjust the
                    pace and difficulty of lessons based on student progress.
                  </li>
                  <li className="mb-2">
                    Improved Engagement: Interactive learning tools and
                    simulations make lessons more engaging, encouraging students
                    to stay focused.
                  </li>
                  <li className="mb-2">
                    Data Analytics: Provides teachers with in-depth learning
                    outcomes and performance metrics, helping them optimize
                    instruction.
                  </li>
                  <li className="mb-2">
                    Integration: Seamlessly integrates with Learning Management
                    Systems (LMS) and existing educational frameworks.
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
                    Cost: Smart Sparrow’s pricing can be a concern for smaller
                    institutions or independent tutors. It may not be as
                    affordable for all.
                  </li>
                  <li className="mb-2">
                    Technical Requirements: The platform requires a stable
                    internet connection and certain hardware specifications,
                    which might be limiting in some educational settings.
                  </li>
                  <li className="mb-2">
                    Complexity for New Users: Some users might find the system
                    complex initially, especially educators without technical
                    expertise.
                  </li>
                  <li className="mb-2">
                    Dependency on AI: Relying on AI might overlook some human
                    elements of teaching, such as emotional intelligence or
                    relationship-building between students and teachers.
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
                      Knewton: Offers adaptive learning solutions similar to
                      Smart Sparrow, focusing on personalized study paths and
                      content delivery.
                    </li>
                    <li className="mb-2">
                      DreamBox: Provides a personalized adaptive learning
                      experience, particularly for K-8 education in subjects
                      like math.
                    </li>
                    <li className="mb-2">
                      Squirrel AI: Focuses on personalized learning for K-12 and
                      uses AI to adjust content in real-time.
                    </li>
                    <li className="mb-2">
                      McGraw-Hill Education: Provides adaptive learning tools
                      for both K-12 and higher education settings.
                    </li>
                    <li className="mb-2">
                      Duolingo: A popular AI-powered language learning app that
                      customizes lessons based on user performance.
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
          <div className=" row d-flex align-items-center justify-content-between mb-1">
            {/* Left side (Text Section) */}
            <div
              style={{ flex: 1, paddingRight: "30px" }}
              className="col-6 col-md-12 "
            >
              <p className="text-primary">Write better, faster</p>
              <h1>
                {" "}
                Smart Sparrow – Adaptive Learning Technology for Personalized
                Education
              </h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                {" "}
                Smart Sparrow is an innovative AI-powered adaptive learning
                platform designed to offer personalized education to students.
                The platform leverages cutting-edge AI technology to provide
                personalized learning experiences tailored to the needs of each
                individual learner. From K-12 education to higher education,
                Smart Sparrow helps educators and students with dynamic,
                real-time feedback, adaptive assessments, and AI-driven learning
                analytics. The AI algorithms used in Smart Sparrow allow for the
                creation of interactive learning content, engaging students in
                more meaningful ways. It’s an integral tool for personalized
                tutoring, offering a customized approach that addresses specific
                learning styles and needs. With its smart learning features, it
                has become one of the leading EdTech tools, revolutionizing both
                classroom integration and online education by offering scalable
                solutions suitable for various educational settings, from
                universities to corporate training.
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
                src="data:image/png;base64,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"
                style={{ MaxWidth: "100%", height: "300px" }}
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
                How Smart Sparrow Works
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
                      Interactive Simulations
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Helps students understand complex concepts by interacting
                      with real-world scenarios in a virtual environment.
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
                      Real-time, AI-powered feedback adapts to the student's
                      performance, guiding them to success.
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
                      Seamless LMS Integration
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Whether you use Moodle, Blackboard, or Canvas, Smart
                      Sparrow integrates effortlessly with these systems,
                      streamlining the learning process.
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

          <div className="bg-primary text-center text-light rounded-4 p-5 mt-5">
            <h4 className="mb-3">Ready to get started with RephraseAI?</h4>
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

export default SmartSparrow;
