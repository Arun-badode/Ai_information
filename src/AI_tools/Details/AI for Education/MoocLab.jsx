import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import k from "../../../../public/assets/Img/AI for Education/AI For Education/11.png"
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
const MoocLab= () => {
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
                icon: "🌐",
                title: "Global Community of Learners:",
                desc: "MoocLab connects students and educators from all over the world, fostering a diverse and interactive learning environment.",
              },
              {
                icon: "📚",
                title: "Access to Free and Paid Courses:",
                desc: "The platform provides access to a wide range of both free and premium online courses from top universities and institutions.",
              },
              {
                icon: "💬",
                title: "Discussion Forums:",
                desc: "MoocLab offers discussion forums where learners can collaborate, ask questions, and engage in meaningful conversations on various topics.",
              },
              {
                icon: "🔍",
                title: "Course Recommendations:",
                desc: "Using AI, MoocLab recommends courses tailored to individual learning goals, helping learners find the best courses to suit their needs.",
              },
              {
                icon: "🎓",
                title: "Certification Options:",
                desc: "MoocLab partners with educational providers to offer certifications upon completing certain courses, which can enhance career opportunities.",
              },
              {
                icon: "📈",
                title: "Learning Progress Tracking:",
                desc: "The platform tracks your learning progress, helping you stay on track and motivated as you complete courses and modules.",
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
                    Why Use MoocLab?
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
                      Global Learning Community: MoocLab connects learners from
                      all around the world, offering a diverse and rich
                      community. You can find peers from different backgrounds,
                      creating a dynamic and vibrant learning environment.
                    </li>
                    <li className="mb-3">
                      Collaborative Learning: With study groups, forums, and
                      peer learning opportunities, MoocLab encourages a
                      collaborative approach to education. This can help you
                      grasp complex concepts more easily.
                    </li>
                    <li className="mb-3">
                      Informed Course Decisions: The course reviews and ratings
                      from other learners help you make educated decisions when
                      choosing online courses. You can assess the quality,
                      difficulty level, and relevance of a course before
                      enrolling.
                    </li>
                    <li className="mb-3">
                      Access to Valuable Learning Resources: MoocLab is a
                      one-stop shop for educational materials, which can enhance
                      your knowledge beyond what’s offered in your courses.
                    </li>
                    <li className="mb-3">
                      Motivation and Support: Whether you're struggling with a
                      challenging course or looking for motivation, MoocLab’s
                      community of learners can provide the support you need to
                      stay on track and achieve your goals.
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
                  q: "What is MoocLab?",
                  a: "MoocLab is an online learning community that helps learners find study buddies, read course reviews, join study groups, and access learning resources to improve their online education experience.",
                },
                {
                  q: "Is MoocLab free to use?",
                  a: "Yes, most features of MoocLab, including access to course reviews, study groups, and resources, are free to use.",
                },
                {
                  q: "How do I find courses on MoocLab?",
                  a: "MoocLab provides a directory of online courses that can be filtered by category, provider, and ratings to help you find the best course for your needs.",
                },
                {
                  q: "Can I write reviews on courses?",
                  a: "Yes, you can write reviews for the courses you have taken to help others make informed decisions.",
                },
                {
                  q: "What are study groups on MoocLab?",
                  a: "Study groups on MoocLab are virtual communities where learners collaborate, discuss course material, and support each other’s learning journey.",
                },
                {
                  q: "What is a study buddy system?",
                  a: "The study buddy system connects learners with similar academic goals, allowing them to study together, share resources, and motivate each other.",
                },
                {
                  q: "Can I join multiple study groups?",
                  a: "Yes, you can join as many study groups as you like based on your interests and learning goals.",
                },
                {
                  q: "What types of courses can I find on MoocLab?",
                  a: "MoocLab offers a wide range of courses in subjects like technology, business, personal development, arts, and more.",
                },
                {
                  q: "Can I track my learning progress on MoocLab?",
                  a: "MoocLab does not track your learning progress directly but offers tools like study groups and peer networks to keep you motivated and on track.",
                },
                {
                  q: "Does MoocLab offer certifications?",
                  a: "MoocLab itself does not offer certifications but provides recommendations for courses that offer certifications and degrees.",
                },
                {
                  q: "What are course reviews on MoocLab?",
                  a: "Course reviews are user-generated feedback that help learners evaluate the quality, difficulty, and relevance of courses before enrolling.",
                },
                {
                  q: "Can I rate courses on MoocLab?",
                  a: "Yes, you can rate the courses you've completed to help others choose the right course for them.",
                },
                {
                  q: "How do I find study buddies on MoocLab?",
                  a: "MoocLab matches you with study buddies who have similar learning goals and interests based on your profile and preferences.",
                },
                {
                  q: "What are learning resources on MoocLab?",
                  a: "MoocLab offers a variety of learning resources, including study guides, articles, books, and video tutorials, to help enhance your learning experience.",
                },
                {
                  q: "Are there peer learning opportunities on MoocLab?",
                  a: "Yes, MoocLab encourages peer learning through forums, study groups, and collaborative projects.",
                },
                {
                  q: "Can I share my learning resources on MoocLab?",
                  a: "Yes, MoocLab encourages users to share educational resources with the community to help others succeed in their learning journey.",
                },
                {
                  q: "Does MoocLab have a mobile app?",
                  a: "Currently, MoocLab is primarily a web-based platform, but it is mobile-friendly and can be accessed through any browser on your smartphone.",
                },
                {
                  q: "How do I find study groups on MoocLab?",
                  a: "You can search for study groups by course, subject, or interest area, and join those that match your goals.",
                },
                {
                  q: "How do I join MoocLab’s learning communities?",
                  a: "Simply sign up for MoocLab, complete your profile, and start participating in study groups, forums, and discussions.",
                },
                {
                  q: "Does MoocLab have online tutoring?",
                  a: "While MoocLab does not offer direct tutoring services, it connects you to study groups and peer-to-peer learning opportunities where you can ask questions and get help.",
                },
                {
                  q: "What is MoocLab’s course recommendation engine?",
                  a: "MoocLab’s course recommendation engine suggests courses based on your preferences, goals, and course feedback from other users.",
                },
                {
                  q: "Can I compare online courses on MoocLab?",
                  a: "Yes, MoocLab offers tools to compare courses based on ratings, reviews, providers, and learning outcomes.",
                },
                {
                  q: "Does MoocLab offer personalized learning paths?",
                  a: "While MoocLab does not create personalized learning paths directly, you can curate your own learning journey based on course recommendations and reviews.",
                },
                {
                  q: "Can I participate in webinars on MoocLab?",
                  a: "Yes, MoocLab hosts webinars on various educational topics where you can interact with experts and other learners.",
                },
                {
                  q: "What is the MoocLab course directory?",
                  a: "The course directory is a comprehensive list of online courses offered by various platforms, allowing you to find the courses that best fit your needs.",
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
                    Comprehensive Learning Support: MoocLab offers a variety of
                    learning tools, including study buddies, learning resources,
                    and course directories, making it a well-rounded platform
                    for learners of all kinds.
                  </li>
                  <li className="mb-2">
                    Easy Navigation: MoocLab’s user interface is designed to be
                    intuitive, making it easy to find courses, join study
                    groups, and access reviews.
                  </li>
                  <li className="mb-2">
                    Flexible Learning Options: Whether you prefer self-paced
                    learning, collaborative study, or a structured course path,
                    MoocLab offers a range of options to suit your learning
                    style.
                  </li>
                  <li className="mb-2">
                    Global Community Access: Join a global network of learners,
                    making it possible to interact with people from different
                    cultures and backgrounds.
                  </li>
                  <li className="mb-2">
                    Free and Accessible: Most of MoocLab’s features, including
                    course reviews and study groups, are available for free,
                    making it accessible to a wide range of learners.
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
                    No Direct Courses Offered: MoocLab itself doesn't offer
                    courses directly, which means it relies on external course
                    providers. You will still need to sign up on other platforms
                    (like Coursera, edX, or Udemy) to access actual courses.
                  </li>
                  <li className="mb-2">
                    Limited Course Selection: While MoocLab offers a directory
                    of online courses, it might not have the same breadth of
                    options as larger platforms dedicated to online learning.
                  </li>
                  <li className="mb-2">
                    Mentorship Access: Although there is an active community,
                    some users may struggle to find personalized mentorship or
                    expert guidance.
                  </li>
                  <li className="mb-2">
                    Overwhelming Information: With so many reviews, resources,
                    and course recommendations, some learners may find it
                    overwhelming to navigate and select the right options.
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
                      Coursera: A leading MOOC platform offering courses from
                      top universities and institutions worldwide.
                    </li>
                    <li className="mb-2">
                      EdX: Another MOOC platform that provides high-quality
                      online courses, certifications, and degree programs.
                    </li>
                    <li className="mb-2">
                      Udemy: Offers a wide range of affordable online courses
                      with lifetime access, ideal for practical skills.
                    </li>
                    <li className="mb-2">
                      LinkedIn Learning: Focuses on professional development and
                      skill-building, offering video courses taught by industry
                      experts.
                    </li>
                    <li className="mb-2">
                      FutureLearn: Provides university-led online courses with a
                      focus on collaborative learning.
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
              <h1>MoocLab: Revolutionizing Online Learning Communities</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                {" "}
                MoocLab is a community-driven platform designed to enhance
                online learning experiences by connecting learners with study
                buddies, providing course reviews, offering a variety of
                learning resources, and promoting peer-to-peer support. It
                serves as an online educational community where users can
                collaborate, share knowledge, and engage in self-directed
                learning. MoocLab features a unique blend of tools that help
                learners make informed decisions about the courses they choose,
                track their progress, and stay motivated throughout their
                learning journey. Whether you're looking to find the best online
                courses, collaborate with like-minded individuals, or improve
                your study techniques, MoocLab has something to offer.
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
                src={k}
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
                How To Use MoocLab
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
                      Study Buddies
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      MoocLab's Study Buddy system matches learners with
                      partners who share similar academic interests, allowing
                      them to collaborate, share knowledge, and keep each other
                      motivated.
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
                      Course Reviews
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      One of MoocLab's core features is its detailed course
                      review system. You can read honest reviews of online
                      courses, written by people who have completed them,
                      helping you make better decisions about which courses to
                      pursue.
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
                      Learning Resources
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      MoocLab provides access to a wealth of learning materials,
                      including textbooks, videos, articles, and study guides.
                      These resources are carefully curated to help learners
                      succeed.
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

export default MoocLab;