import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
// import img11 from "../../../../public/assets/Img/AI for Education/img-11.jpg"
// import img12 from "../../../../public/assets/Img/AI for Education/img_12.jpeg"
import e from "../../../../public/assets/Img/AI for Education/AI For Education/7.png"
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
const DuolingoAI= () => {
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
                title: "AI-Based Personalization:",
                desc: "Duolingo’s AI-driven learning adapts lessons based on your performance. As you interact with the app, it analyzes your strengths and weaknesses and suggests personalized learning paths to improve your language skills.",
              },
              {
                icon: "💬",
                title: "Speech Recognition AI:",
                desc: "One of Duolingo’s standout features is its AI-powered speech recognition system. This feature listens to your pronunciation and provides real-time feedback on how accurate your pronunciation is. Whether it’s a single word or a complex sentence, the AI helps you improve your speaking skills by correcting pronunciation and guiding you to sound more native.",
              },
              {
                icon: "🎮",
                title: "Adaptive Learning Technology:",
                desc: "Duolingo’s adaptive learning system ensures that the difficulty level adjusts automatically as you progress. If you’re breezing through lessons, the AI increases the difficulty to keep you challenged, while if you struggle, it will reduce the difficulty and provide extra practice where needed.",
              },
              {
                icon: "📚",
                title: "AI-Generated Quizzes and Tests:",
                desc: "With Duolingo, the quizzes and tests aren’t just standard assessments. They are AI-powered quizzes that adapt to your learning pace, strengths, and weaknesses. This ensures that you are constantly tested on the areas where you need the most improvement, helping reinforce vocabulary, grammar, and sentence structures.",
              },
              {
                icon: "⏳",
                title: "Vocabulary Building with AI:",
                desc: "Duolingo integrates AI to enhance vocabulary acquisition. The AI-assisted vocabulary building feature helps learners expand their vocabulary effectively, through repetitive practice and personalized recommendations based on your learning pace.",
              },
              {
                icon: "🌐",
                title: "Real-Time Feedback:",
                desc: "The app’s automated learning feedback mechanism ensures that every lesson, quiz, or test provides you with immediate feedback on mistakes or incorrect answers. This system helps learners to identify errors and correct them in real-time, ensuring a deeper understanding of language rules.",
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
                    Why Should You Use Duolingo’s
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
                      Personalized Learning: Duolingo’s AI personalizes the
                      lessons based on your progress and needs, ensuring that
                      you’re always learning at your optimal pace.
                    </li>
                    <li className="mb-3">
                      Instant Feedback: With the AI-powered feedback, you get
                      real-time corrections for your pronunciation, grammar, and
                      vocabulary, which accelerates the learning process.
                    </li>
                    <li className="mb-3">
                      Gamification: Duolingo uses gamification techniques
                      powered by AI, which helps keep learners engaged and
                      motivated by earning rewards, completing levels, and
                      competing with others.
                    </li>
                    <li className="mb-3">
                      Flexible Learning: Duolingo adapts to your schedule,
                      allowing you to learn at your own pace and giving you
                      flexibility in your learning journey.
                    </li>
                    <li className="mb-3">
                      Multi-Language Learning: Duolingo supports learning
                      multiple languages simultaneously, which is perfect for
                      users interested in bilingual or multilingual learning.
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
                  q: "What is Duolingo?",
                  a: "Duolingo is an AI-powered language learning app designed to make learning languages fun and interactive.",
                },
                {
                  q: "How does Duolingo use AI?",
                  a: "Duolingo uses AI to personalize lessons, provide feedback, adapt content based on user performance, and track progress.",
                },
                {
                  q: "Is Duolingo free to use?",
                  a: "Yes, Duolingo is free with basic features. There is also a premium version, Duolingo Plus, which offers extra features.",
                },
                {
                  q: "How many languages can I learn on Duolingo?",
                  a: "Duolingo offers over 30 languages, including popular ones like Spanish, French, and German.",
                },
                {
                  q: "How accurate is Duolingo's pronunciation feedback?",
                  a: "Duolingo's AI-powered speech recognition provides accurate pronunciation feedback, though accents may sometimes affect recognition.",
                },
                {
                  q: "Does Duolingo offer grammar lessons?",
                  a: "Yes, Duolingo includes grammar lessons, which are customized and adjusted using AI to fit your level.",
                },
                {
                  q: "Can Duolingo help with fluency?",
                  a: "Yes, Duolingo offers fluency exercises through its AI-powered conversational practice and grammar lessons.",
                },
                {
                  q: "How does Duolingo personalize lessons?",
                  a: "Duolingo uses AI algorithms to track your progress and customize lessons based on areas where you need improvement.",
                },
                {
                  q: "Does Duolingo provide real-time feedback?",
                  a: "Yes, Duolingo provides real-time corrections and personalized feedback on pronunciation, grammar, and vocabulary.",
                },
                {
                  q: "Is Duolingo suitable for beginners?",
                  a: "Yes, Duolingo is excellent for beginners, providing basic lessons and step-by-step progression.",
                },
                {
                  q: "Can I use Duolingo offline?",
                  a: "Yes, Duolingo Plus users can access lessons offline.",
                },
                {
                  q: "How does Duolingo gamify learning?",
                  a: "Duolingo uses gamification by awarding points, unlocking levels, and offering rewards to motivate users to keep learning.",
                },
                {
                  q: "What is Duolingo’s AI quiz feature?",
                  a: "Duolingo offers AI-generated quizzes to assess your language skills, adjusting difficulty according to your performance.",
                },
                {
                  q: "How does Duolingo’s speech recognition work?",
                  a: "Duolingo’s speech recognition AI listens to your pronunciation and offers real-time feedback for improvement.",
                },
                {
                  q: "Can I learn multiple languages at once on Duolingo?",
                  a: "Yes, Duolingo allows you to learn multiple languages simultaneously, with tailored lessons for each.",
                },
                {
                  q: "Does Duolingo offer listening practice?",
                  a: "Yes, Duolingo provides listening comprehension exercises to help improve your ability to understand spoken language.",
                },
                {
                  q: "How does Duolingo recommend lessons?",
                  a: "Duolingo’s AI tracks your progress and suggests lessons based on areas where you need more practice.",
                },
                {
                  q: "Does Duolingo teach cultural context?",
                  a: "Duolingo teaches some cultural context, though it focuses primarily on language skills.",
                },
                {
                  q: "Is Duolingo effective for advanced learners?",
                  a: "Duolingo is best suited for beginners and intermediate learners, though it has some content for advanced students.",
                },
                {
                  q: "Can Duolingo help with conversational skills?",
                  a: "Yes, Duolingo has chatbot interactions and practice conversations to help users improve speaking and comprehension.",
                },
                {
                  q: "Does Duolingo assist with vocabulary building?",
                  a: "Yes, Duolingo uses AI to help you build and reinforce vocabulary through interactive exercises.",
                },
                {
                  q: "Does Duolingo track my learning progress?",
                  a: "Yes, Duolingo provides detailed progress tracking, showing how much you’ve learned and what areas need more attention.",
                },
                {
                  q: "What are Duolingo’s AI-powered reminders?",
                  a: "Duolingo sends AI-generated reminders to review content and reinforce lessons, helping you stay on track.",
                },
                {
                  q: "Can Duolingo help with pronunciation?",
                  a: "Yes, Duolingo provides pronunciation feedback powered by AI to help you speak more accurately.",
                },
                {
                  q: "Does Duolingo have writing exercises?",
                  a: "Yes, Duolingo offers writing exercises where you can practice forming sentences and improving your written skills.",
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
                src={img11}
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={img12}
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
                    Free Access: Duolingo offers a free plan with the essential
                    AI features, allowing users to get started with no financial
                    commitment.
                  </li>
                  <li className="mb-2">
                    Instant Pronunciation Correction: The speech recognition AI
                    gives real-time feedback on pronunciation, helping you speak
                    more naturally.
                  </li>
                  <li className="mb-2">
                    Highly Engaging: The gamified experience powered by AI keeps
                    learners motivated with rewards, levels, and challenges.
                  </li>
                  <li className="mb-2">
                    Adaptive Learning Path: The AI-driven learning path ensures
                    that lessons evolve according to your progress, making sure
                    you're always at the right level.
                  </li>
                  <li className="mb-2">
                    Multi-Language Support: With over 30 languages available,
                    Duolingo is one of the most versatile language-learning apps
                    powered by AI.
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
                    Limited Deep Learning: Duolingo is best suited for beginners
                    and intermediate learners. Advanced learners may find it
                    lacks in-depth content for mastering complex language
                    structures.
                  </li>
                  <li className="mb-2">
                    Repetitive Content: Some users might find the repetitive
                    nature of the lessons less stimulating after a certain
                    point.
                  </li>
                  <li className="mb-2">
                    Offline Limitations: While Duolingo is available for offline
                    use in the premium version, the free version does not allow
                    full offline access.
                  </li>
                  <li className="mb-2">
                    Occasional Translation Errors: Although AI is highly
                    beneficial, Duolingo’s translations might occasionally be
                    inaccurate, especially for complex sentences or idiomatic
                    expressions.
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
                      Babbel: Focuses on real-world conversations and grammar,
                      with a more structured learning path.
                    </li>
                    <li className="mb-2">
                      Memrise: Uses AI-driven algorithms for immersive
                      vocabulary learning and contextual exercises.
                    </li>
                    <li className="mb-2">
                      Rosetta Stone: Focuses on full immersion, leveraging
                      speech recognition to help users improve fluency.
                    </li>
                    <li className="mb-2">
                      Busuu: A community-based learning app with AI-driven
                      lessons, designed for both beginners and advanced
                      learners.
                    </li>
                    <li className="mb-2">
                      Lingvist: Specializes in AI-powered vocabulary expansion
                      and personalized learning paths.
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
              <h1> Duolingo AI – The Future of Language Learning</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                {" "}
                Duolingo is a revolutionary language learning tool that
                integrates AI-powered features to make learning languages more
                accessible, engaging, and personalized. Whether you're learning
                a new language for travel, career advancement, or personal
                growth, Duolingo offers an intelligent, AI-driven approach that
                caters to learners of all levels. Let's dive deeper into
                Duolingo’s AI-powered platform, its features, and how it can
                enhance your learning experience.
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
                src={e}
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
                How To Duolingo AI?
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
                      AI-powered platform
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      that continuously improves the way people learn languages.
                      With its AI algorithm, Duolingo adapts to the learner’s
                      progress.
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
                      personalized lessons
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      tailored to individual needs and learning styles. The app
                      leverages AI language models and machine learning to
                      create a custom learning path for each user, ensuring that
                      no two experiences are exactly the same.
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
                      beginner learners to advanced users
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Duolingo provides the tools and features to enhance every
                      step of the language-learning process. Here are some of
                      the powerful features Duolingo offers.
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

export default DuolingoAI;