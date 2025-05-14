


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
const Grammarly = () => {
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
                title: "Real-Time Grammar Checking:",
                desc: "Instantly detect and correct grammar, spelling, and punctuation errors in student writing.",
              },
              {
                icon: "💬",
                title: "Contextual Suggestions:",
                desc: "Receive context-based suggestions for sentence structure, word choice, and clarity to improve writing quality.",
              },
              {
                icon: "📚",
                title: "Personalized Writing Insights:",
                desc: "Grammarly offers personalized feedback tailored to each student's writing style and goals.",
              },
              {
                icon: "🔍",
                title: "Plagiarism Detection:",
                desc: "Ensure originality in student work by checking for plagiarism and providing suggestions for proper citation.",
              },
              {
                icon: "🎓",
                title: "Educational Tone Detection:",
                desc: "Helps students identify and maintain an appropriate tone in their writing, whether academic or casual.",
              },
              {
                icon: "📊",
                title: "Detailed Performance Reports:",
                desc: "Provide teachers and students with comprehensive reports that track writing progress and areas needing improvement.",
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
                    Why Use Grammarly for Education?
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
                      Enhances Writing Skills: Real-time suggestions for
                      grammar, punctuation, vocabulary, clarity, and tone.
                    </li>
                    <li className="mb-3">
                      Supports Academic Integrity: Built-in plagiarism
                      detection.
                    </li>
                    <li className="mb-3">
                      Saves Teacher Time: Automated feedback tools for quick
                      assignment reviews.
                    </li>
                    <li className="mb-3">
                      Boosts Student Confidence: Instant feedback improves
                      student writing without waiting for teacher reviews.
                    </li>
                    <li className="mb-3">
                      Facilitates Remote Learning: Smooth browser-based access
                      for virtual classes.
                    </li>
                    <li className="mb-3">
                      Customizable: School-wide subscriptions and admin
                      dashboards for easy management.
                    </li>
                    <li className="mb-3">
                      Cost-effective: Special education pricing and school
                      discount plans available.
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
                  q: "What is Grammarly for Education?",
                  a: "Grammarly for Education is a writing tool designed to help students, teachers, and institutions improve writing quality and maintain academic integrity.",
                },
                {
                  q: "Is Grammarly free for students?",
                  a: "Grammarly offers a free version with basic checks, but advanced features require a paid subscription.",
                },
                {
                  q: "How does Grammarly support educational institutions?",
                  a: "It provides campus-wide access, admin dashboards, and group subscriptions for better writing support.",
                },
                {
                  q: "Can teachers use Grammarly?",
                  a: "Yes, teachers use it to provide faster feedback and correct grammar easily.",
                },
                {
                  q: "Does Grammarly work with academic writing?",
                  a: "Yes, it supports essays, research papers, theses, and dissertations with grammar, clarity, and plagiarism checking.",
                },
                {
                  q: "Can Grammarly be used for essays?",
                  a: "Yes, it improves grammar, structure, and style for essays.",
                },
                {
                  q: "Is Grammarly effective for high school students?",
                  a: "Yes, it helps high school students improve their writing and grammar skills.",
                },
                {
                  q: "Does Grammarly work for college students?",
                  a: "Yes, college students use it for academic writing, essays, and research assignments.",
                },
                {
                  q: "Does Grammarly detect plagiarism?",
                  a: "Yes, Grammarly compares your text with billions of online sources to detect plagiarism.",
                },
                {
                  q: "Is Grammarly suitable for university students?",
                  a: "Yes, it’s ideal for helping university students write high-level academic content.",
                },
                {
                  q: "What are Grammarly's key features for education?",
                  a: "Grammar correction, clarity suggestions, tone detection, vocabulary improvement, and plagiarism checking.",
                },
                {
                  q: "What is Grammarly’s real-time writing feedback?",
                  a: "It gives instant suggestions to correct grammar and style as you type.",
                },
                {
                  q: "Can Grammarly improve vocabulary?",
                  a: "Yes, it suggests better words and synonyms to enhance writing.",
                },
                {
                  q: "What is tone detection in Grammarly?",
                  a: "Tone detection analyzes how your writing sounds — formal, friendly, assertive, etc.",
                },
                {
                  q: "Can Grammarly check punctuation?",
                  a: "Yes, it corrects commas, apostrophes, periods, and other punctuation errors.",
                },
                {
                  q: "Does Grammarly provide clarity suggestions?",
                  a: "Yes, it simplifies complex and wordy sentences.",
                },
                {
                  q: "Can Grammarly help with citation and references?",
                  a: "It improves clarity in citations but doesn’t generate full citations like citation managers.",
                },
                {
                  q: "How does Grammarly maintain academic integrity?",
                  a: "It detects plagiarism and encourages original writing.",
                },
                {
                  q: "What kind of writing reports does Grammarly generate?",
                  a: "Reports on grammar correctness, clarity, engagement, and delivery tone.",
                },
                {
                  q: "Does Grammarly help with thesis writing?",
                  a: "Yes, it assists with grammar, structure, and plagiarism checking in theses.",
                },
                {
                  q: "What is included in Grammarly Premium for Education?",
                  a: "Advanced grammar checks, clarity improvements, vocabulary enhancements, tone analysis, and plagiarism detection.",
                },
                {
                  q: "Is there an education discount for Grammarly Premium?",
                  a: "Yes, Grammarly offers special pricing for students and educational institutions.",
                },
                {
                  q: "Can institutions buy group licenses?",
                  a: "Yes, colleges and universities can purchase Grammarly licenses in bulk.",
                },
                {
                  q: "Is Grammarly Premium worth it for students?",
                  a: "Yes, Premium offers advanced writing suggestions and plagiarism checking, which are valuable for students.",
                },
                {
                  q: "How can a student upgrade to Grammarly Premium?",
                  a: "Students can upgrade directly through Grammarly’s website, often with student discounts.",
                },
                {
                  q: "Can students get Grammarly Premium for free?",
                  a: "Some universities provide free Premium access through institutional licenses.",
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
                    Easy integration with Canvas LMS and other EdTech platforms.
                  </li>
                  <li className="mb-2">
                    Real-time writing improvement tool for students.
                  </li>
                  <li className="mb-2">
                    Detailed analytics for students and teachers.
                  </li>
                  <li className="mb-2">
                    Cross-platform support — works on desktop, mobile, and web.
                  </li>
                  <li className="mb-2">
                    Supports plagiarism prevention and ensures academic
                    integrity.
                  </li>
                  <li className="mb-2">
                    Provides customized feedback to enhance critical thinking
                    skills.
                  </li>
                  <li className="mb-2">
                    AI writing assistant with automated feedback.
                  </li>
                  <li className="mb-2">
                    Helpful for essay checking, report writing, research papers,
                    and even thesis writing.
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
                    Free version is limited compared to premium features.
                  </li>
                  <li className="mb-2">
                    Over-reliance may reduce students' independent proofreading
                    skills.
                  </li>
                  <li className="mb-2">
                    Plagiarism checker is not as deep as Turnitin for massive
                    databases.
                  </li>
                  <li className="mb-2">
                    Slight learning curve for new users or less tech-savvy
                    educators.
                  </li>
                  <li className="mb-2">
                    Requires internet connectivity for real-time corrections.
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
                      Turnitin – Best for advanced plagiarism checking.
                    </li>
                    <li className="mb-2">
                      Quillbot – Paraphrasing and writing improvement tool.
                    </li>
                    <li className="mb-2">
                      ProWritingAid – In-depth grammar and style checking.
                    </li>
                    <li className="mb-2">
                      Hemingway App – For readability improvements.
                    </li>
                    <li className="mb-2">
                      Slick Write – Grammar checking and flow analysis.
                    </li>
                    <li className="mb-2">
                      Ginger Software – Grammar correction and translation
                      features.
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
              <h1> Grammarly for Education: Complete Guide</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                {" "}
                Grammarly for Education is an advanced AI-powered writing
                assistant designed specifically for students, teachers, and
                educational institutions. It provides real-time grammar
                corrections, plagiarism checking, academic writing support, and
                personalized feedback to improve writing quality across all
                levels of education. Whether it's helping high school students
                with their essays, assisting university students in crafting
                research papers, or offering teachers a way to deliver clearer
                feedback, Grammarly for Education enhances the learning and
                teaching experience. It integrates smoothly with LMS platforms
                like Canvas and provides a dedicated admin dashboard for schools
                and colleges to manage usage and monitor student learning
                outcomes. Grammarly for Education is ideal for virtual
                classrooms, remote learning, and traditional classrooms, making
                it a versatile tool for today's education landscape.
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
                How Grammarly for Education
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
                      Grammarly grammar checker
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      for students to correct mistakes in real time.
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
                      Grammarly API for schools
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      allows custom integrations into digital learning
                      platforms.
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
                      Grammarly originality report
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      feature helps teachers quickly detect plagiarism.
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

export default Grammarly;