import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import img2 from "../../../../public/assets/Img/AI for Education/img-2.png"
import img from "../../../../public/assets/Img/AI for Education/image_1.png"
import b from "../../../../public/assets/Img/AI for Education/AI For Education/2.png"
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

const Socratic = () => {
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
                title: "Socratic Homework Help",
                desc: "Socratic allows students to take pictures of homework problems or type in questions. It then uses AI to provide clear, step-by-step solutions, helping students learn while they work on assignments.",
              },
              {
                title: "AI-Powered Study Guide",
                desc: " The app offers personalized study guides by analyzing the subjects students are working on, enabling them to focus on areas where they need the most help.",
              },
              {
                title: "Math, Science, and More",
                desc: "Socratic helps with a range of subjects from math, science, and history, to English and literature. It includes math solvers for solving algebra, geometry, calculus, and even physics problems.",
              },
              {
                title: "Language and Literature Assistance",
                desc: " Socratic supports language learning, including vocabulary, grammar, and sentence structure analysis, making it an all-in-one educational tool.",
              },
              {
                title: "Real-time Learning Feedback",
                desc: "The app provides immediate feedback on students' work, helping them understand their mistakes and improve over time.",
              },
              // {
              //   title: "Quizlet for Vocabulary Building",
              //   desc: "Quizlet AI helps learners expand their vocabulary by offering smart flashcards that adapt based on individual learning patterns and progress.",
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
                src={img2}
                alt="Screenshot 1"
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-md-6">
              <img
                src={img}
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
                <h3 className="fw-bold mb-4">Why Use Socratic by Google:</h3>

                <h5>AI-Powered Learning Assistance</h5>
                <p className="fs-5">
                  Socratic by Google employs cutting-edge AI to provide precise
                  and accurate learning aids. Whether you're stuck on a math
                  equation or need help solving a physics problem, Socratic uses
                  AI to break it down and explain it in a simple, digestible
                  manner.
                </p>

                <h5>Subject Variety</h5>
                <p className="fs-5 mt-3">
                  From math to literature, Socratic covers a broad range of
                  subjects. It's a versatile tool for any student needing help
                  across different academic fields.
                </p>

                <h5>Personalized Learning</h5>
                <p className="fs-5 mt-3">
                  Socratic tailors its help to your individual learning needs,
                  whether you need help with homework or preparation for exams.
                </p>

                <h5>Free and Easy to Use</h5>
                <p className="fs-5 mt-3">
                  Socratic is a free app available on iOS and Android, making it
                  easily accessible for students everywhere.
                </p>

                <h5>Supports Visual Learning</h5>
                <p className="fs-5 mt-3">
                  By taking pictures of problems, students can instantly get
                  solutions. This visual approach is particularly helpful for
                  students who need to see examples in order to understand
                  better.
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
                  AI-Powered Solutions: AI simplifies difficult problems, providing step-by-step solutions.

                  </li>
                  <li className="mb-2">
                  Subject Coverage: Assists with a variety of subjects including math, science, history, and languages.

                  </li>
                  <li className="mb-2">
                  Personalized Learning: Offers personalized learning paths, helping students focus on areas where they need the most improvement.

                  </li>
                  <li className="mb-2">
                    {" "}
                    Free and Accessible: Socratic is free to download and use on both iOS and Android devices.

                  </li>
                  <li className="mb-2">
                  Step-by-Step Learning: Provides clear explanations of answers to problems.
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
                  Limited to Certain Subjects: Although it covers many subjects, Socratic may not be helpful for niche or highly specialized academic fields.

                  </li>
                  <li className="mb-2">
                    {" "}
                    Dependency on Technology: The reliance on AI for problem-solving might limit some students' ability to tackle problems on their own, leading to over-dependence.
                  </li>
                  <li className="mb-2">
                  No Teacher Interaction: Socratic offers no direct interaction with educators, which can be a downside for students who need more personalized guidance.

                  </li>
                  <li className="mb-2">
                  Needs Internet Access: Socratic requires an internet connection to fetch answers and explanations, so it's not ideal for offline use.

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
            Alternatives to Socratic by Google:

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
                    <strong>Khan Academy:</strong> Provides free educational resources, including lessons, practice exercises, and instructional videos for a variety of subjects.

                  </li>
                  <li className="mb-3">
                    <strong>Photomath:</strong>  An AI-powered math app that helps students solve equations and problems by taking pictures of them.

                  </li>
                  <li className="mb-3">
                    <strong>Wolfram Alpha:</strong> Known for solving complex mathematical problems, Wolfram Alpha is another great resource for students who need help with math and science. 
                  </li>
                  <li className="mb-3">
                    <strong>Chegg Study:</strong>  Offers textbook solutions, expert Q&A, and online tutoring for students seeking homework help.

                  </li>
                  <li className="mb-3">
                    <strong>Quizlet:</strong> A study tool that offers flashcards, quizzes, and study sets for various subjects, ideal for exam preparation.

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
                  q: "What is Socratic by Google? ",
                  a: "Socratic is a free, AI-powered learning app that helps students solve homework problems, understand complex concepts, and access study resources across multiple subjects.",
                },
                {
                  q: "How does Socratic work?",
                  a: "Socratic uses artificial intelligence to analyze a student's question and provide step-by-step explanations and resources to help them understand the material better.",
                },
                {
                  q: "Is Socratic free to use? ",
                  a: "Yes, Socratic is completely free to download and use on iOS and Android devices.",
                },
                {
                  q: "What subjects does Socratic cover?",
                  a: " Socratic supports subjects like math, science, history, English, language arts, and more, providing solutions and explanations for a variety of topics.",
                },
                {
                  q: "Can I use Socratic for math homework?",
                  a: "Yes, Socratic provides solutions and step-by-step explanations for various math problems, including algebra, geometry, and calculus.",
                },
                {
                  q: "Does Socratic work for chemistry problems?",
                  a: " Yes, Socratic can solve and explain chemistry problems, including chemical equations, balancing reactions, and other concepts.",
                },
                {
                  q: "How do I use Socratic?",
                  a: "Simply open the app, take a picture of your homework problem, or type it in. Socratic will instantly provide a solution and explanation.",
                },
                {
                  q: "Can Socratic help with writing assignments?",
                  a: "While Socratic is great for grammar, vocabulary, and literature-related queries, it is not a full-fledged writing tool for essays or long assignments.",
                },
                {
                  q: "Does Socratic provide video explanations?",
                  a: " Yes, Socratic includes video tutorials and explanations to help reinforce learning and provide different ways of understanding topics.",
                },
                {
                  q: "Is Socratic suitable for high school students? ",
                  a: "Yes, Socratic is ideal for high school students, helping them with subjects like math, science, and language arts.",
                },
                {
                  q: "Can Socratic help with history homework?",
                  a: " Yes, Socratic offers assistance with history questions, including historical facts, dates, and major events.",
                },
                {
                  q: "Is Socratic good for exam preparation?",
                  a: "Yes, Socratic is a great tool for reviewing and practicing concepts in preparation for exams.",
                },
                {
                  q: "Can I use Socratic to study for the SAT?",
                  a: "Yes, Socratic can help students prepare for the SAT by solving practice problems and providing resources on key subjects like math and reading comprehension.",
                },
                {
                  q: "What features are available in the Socratic app?",
                  a: "Socratic provides features like instant homework help, step-by-step solutions, video tutorials, and subject-specific study materials.",
                },
                {
                  q: "How accurate are Socratic’s solutions?",
                  a: " Socratic’s AI provides accurate, step-by-step solutions to homework problems, but it's always a good idea to double-check with a teacher or textbook.",
                },
                {
                  q: "Can Socratic help with foreign languages?",
                  a: "Yes, Socratic can help with basic language learning, including grammar, vocabulary, and sentence structure.",
                },
                {
                  q: "Does Socratic work offline?",
                  a: "Socratic requires an internet connection to fetch results and resources from its AI, so it does not work offline.",
                },
                {
                  q: "Can Socratic be used by college students?",
                  a: " Yes, Socratic is beneficial for college students, particularly for subjects like math, chemistry, and physics.",
                },
                {
                  q: "What is the best way to use Socratic for homework help? ",
                  a: "Simply scan the homework problem, and Socratic will provide an explanation along with additional study materials or video tutorials if needed.",
                },
                {
                  q: "Is Socratic suitable for elementary students? ",
                  a: "Socratic is better suited for middle and high school students, but younger students can also benefit from the app with adult supervision.",
                },
                {
                  q: "Does Socratic have a feature to solve word problems?",
                  a: "Yes, Socratic can help solve word problems in math and other subjects by breaking them down and providing a step-by-step approach.",
                },
                {
                  q: "How can I improve my study habits using Socratic?",
                  a: "You can use Socratic to reinforce understanding, practice problems, and explore new topics through videos and explanations.",
                },
                {
                  q: "Does Socratic provide help for calculus problems?",
                  a: " Yes, Socratic can help with calculus problems by providing solutions and step-by-step explanations.",
                },
                {
                  q: "Can Socratic assist with solving algebra problems?",
                  a: "Yes, Socratic is very helpful for solving algebra problems and explaining the concepts involved.",
                },
                {
                  q: "How do I scan homework problems with Socratic?",
                  a: " To scan a homework problem, simply open the Socratic app, click the camera icon, and take a picture of the problem you need help with.",
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
              <h2>Socratic by Google: The Ultimate AI-powered Learning Tool</h2>
              <div className="text-warning mb-1">
                ⭐⭐⭐⭐⭐ 95% Satisfaction
              </div>
              <p>
                Introduction to Socratic by Google: Socratic by Google is an
                AI-powered learning app designed to provide students with
                homework help, subject mastery, and personalized educational
                experiences. This smart learning app uses advanced artificial
                intelligence to break down complex problems, solve math
                equations, assist with science questions, and even support
                language learning. With the help of Google’s robust AI
                capabilities, Socratic aims to enhance learning, making it more
                accessible and interactive for students of all ages.
              </p>
                 <div className="mb-3">
                <a
                  href="https://coderbyte.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-2"
                >
                  Explore Tool
                </a>
              </div>
            </div>

            {/* Right side (Image Section) */}
            <div style={{ flex: 1, textAlign: "center" }}>
              <img
                src={b}
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
        </div>
      </div>
    </>
  );
};

export default Socratic;