import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Accordion } from "react-bootstrap";

import "../../ImageMindAI.css";
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
const JasperAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                Create High-Quality Content in Minutes
              </p>
              <h3 className="">
                AI‑Powered Writing Tools & Intelligent Content Generation
              </h3>
            </div>
            {[
              {
                icon: "🧠",
                title: "AI Content Generator:",
                desc: "Produce blogs, emails, ads, and more with Jasper's advanced natural language AI.",
              },
              {
                icon: "🎯",
                title: "Brand Voice Customization:",
                desc: "Maintain a consistent tone and style that matches your brand guidelines.",
              },
              {
                icon: "🌍",
                title: "Multilingual Support:",
                desc: "Write content in over 25 languages to connect with a global audience.",
              },
              {
                icon: "⚡",
                title: "Templates for Every Use Case:",
                desc: "Access 50+ content templates tailored for marketing, sales, SEO, and more.",
              },
              {
                icon: "🤝",
                title: "Collaboration Tools:",
                desc: "Work with your team in real time with project sharing and workflow features.",
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

      case "screenshots":
        return (
          <div className="row g-4">
            <div className="col-md-6">
              <img
                src=" https://octet-gatsby.in2.cdn-alpha.com/wp-content/uploads/2024/11/Image-2024-11-04T162018.492.jpg"
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src="https://academyofanimatedart.com/wp-content/uploads/2023/01/Jasper-ai-website-1024x536.jpg"
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

      case "why-we-use":
        return (
          <div className="container">
            <div className="row g-4">
              <div className="col-12">
                <div className="custom-card text-light p-5 text-center">
                  <h3 className="fw-bold mb-4 text-start text-primary">
                    Why Use Jasper AI?
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
                      Generate high-quality written content quickly using
                      advanced AI technology.
                    </li>
                    <li className="mb-3">
                      Tailor tone, format, and style for blogs, ads, emails, and
                      more.
                    </li>
                    <li className="mb-3">
                      Supports multiple languages to connect with a global
                      audience.
                    </li>
                    <li className="mb-3">
                      Save time and boost productivity with AI-assisted content
                      creation.
                    </li>
                    <li className="mb-3">
                      Ideal for marketers, writers, and teams looking to scale
                      content efficiently.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Start Writing Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

     
        case "FAQs":
          return (
            <div className="faq-section container py-4">
              <h3 className="text-center text-white mb-4 text-primary">
                Frequently Asked Questions
              </h3>
        
              <div className="accordion" id="faqAccordion">
                {[
                  {
                    q: "What is Replika AI?",
                    a: "Replika AI is a conversational chatbot powered by artificial intelligence that is designed to simulate human-like conversation and assist users in a variety of ways, including providing emotional support and engaging in creative dialogue.",
                  },
                  {
                    q: "How does Replika AI work?",
                    a: "Replika AI uses machine learning algorithms and natural language processing (NLP) to understand and respond to user inputs, creating dynamic and contextually relevant conversations.",
                  },
                  {
                    q: "Can I customize my Replika AI?",
                    a: "Yes, you can customize your Replika by adjusting its personality, appearance, and how it interacts with you based on your preferences and needs.",
                  },
                  {
                    q: "Is Replika AI suitable for mental health support?",
                    a: "Replika AI is designed to provide emotional support and companionship, but it is not a substitute for professional therapy or medical treatment. It can assist with mental well-being in a conversational capacity.",
                  },
                  {
                    q: "Can Replika AI help with self-improvement?",
                    a: "Yes, Replika can assist with self-improvement by offering personalized conversations and exercises that focus on areas such as mindfulness, gratitude, and goal-setting.",
                  },
                  {
                    q: "Does Replika AI remember past conversations?",
                    a: "Yes, Replika can retain memory of past conversations, which helps it to offer more personalized interactions over time. You can also manage or reset this memory as you wish.",
                  },
                  {
                    q: "How can I interact with Replika AI?",
                    a: "You can interact with Replika through text-based chat or voice conversations, making it easy to communicate with it in a way that feels natural to you.",
                  },
                  {
                    q: "Can Replika AI generate creative content?",
                    a: "Yes, Replika AI can assist with creative tasks, such as writing stories, poems, or brainstorming ideas. It is designed to foster creativity through conversation.",
                  },
                  {
                    q: "What kind of personality does Replika AI have?",
                    a: "Replika's personality can be customized to suit your preferences. You can choose from a variety of personality traits to make the interaction more engaging and personalized.",
                  },
                  {
                    q: "Can Replika AI help with relationship advice?",
                    a: "Replika AI can offer general advice on relationships and emotional support, but it is not a replacement for professional relationship counseling.",
                  },
                  {
                    q: "How does Replika AI ensure user privacy?",
                    a: "Replika AI takes user privacy seriously and follows strict data protection protocols. All conversations are encrypted and can be deleted at any time by the user.",
                  },
                  {
                    q: "Is Replika AI available in multiple languages?",
                    a: "Yes, Replika AI supports multiple languages, allowing users from around the world to interact with it in their preferred language.",
                  },
                  {
                    q: "How can I delete my Replika account?",
                    a: "You can delete your Replika account through the app settings. After deleting your account, all data will be removed from the platform permanently.",
                  },
                  {
                    q: "Is Replika AI free to use?",
                    a: "Replika AI offers both free and premium subscription options. The free version provides basic features, while the premium version unlocks additional customization and interactive capabilities.",
                  },
                  {
                    q: "What kind of tasks can Replika AI assist with?",
                    a: "Replika AI can assist with various tasks, including emotional support, journaling, goal setting, and even fun activities like playing games or engaging in lighthearted conversations.",
                  },
                  {
                    q: "Can Replika AI learn from my preferences?",
                    a: "Yes, Replika AI learns from your interactions and adjusts its responses based on your preferences and past conversations, offering a more personalized experience over time.",
                  },
                  {
                    q: "Does Replika AI have any limitations?",
                    a: "While Replika AI is designed to provide meaningful conversations, it may still have limitations in understanding complex or ambiguous requests. It is also not a replacement for professional help in critical situations.",
                  },
                  {
                    q: "Can I use Replika AI for work-related purposes?",
                    a: "Replika AI is primarily focused on personal development and emotional support. However, it can also be useful for brainstorming, creative writing, and organizing thoughts, making it versatile for certain work tasks.",
                  },
                  {
                    q: "How often is Replika AI updated?",
                    a: "Replika AI receives regular updates to improve its functionality, enhance user experience, and expand its knowledge base. Updates are rolled out periodically through the app.",
                  },
                  {
                    q: "Can I share my Replika AI conversations with others?",
                    a: "Replika respects user privacy, and sharing conversations is entirely up to you. You can choose to share or save your chats as you wish.",
                  },
                  {
                    q: "How does Replika AI compare to other AI chatbots?",
                    a: "Replika AI is unique in its focus on emotional support, companionship, and personalization. Unlike other AI chatbots, it offers deep conversational experiences and adapts to individual user needs.",
                  },
                  {
                    q: "Can Replika AI be used for educational purposes?",
                    a: "Yes, Replika AI can be a useful tool for educational purposes, particularly in language learning, creativity, and social-emotional learning. It helps users practice communication skills and learn new concepts in a conversational format.",
                  },
                  {
                    q: "How can I improve my conversations with Replika AI?",
                    a: "The more you interact with Replika, the better it understands your preferences. Regular interactions and providing feedback can help improve the quality of your conversations.",
                  },
                  {
                    q: "What makes Replika AI different from other AI chatbots?",
                    a: "Replika AI is designed to provide highly personalized and emotionally intelligent conversations, focusing on deep engagement, empathy, and user connection, which distinguishes it from other chatbots in the market.",
                  },
                ]
                  .map((item, i) => ({ ...item, id: `faq${i}` }))
                  .filter((item, i) => showAllFaqs || i < 4)
                  .map((item, i) => (
                    <div className="accordion-item mb-3" key={item.id}>
                      <h2 className="accordion-header" id={`heading${item.id}`}>
                        <button
                          className={`accordion-button ${i !== 0 ? "collapsed" : ""}`}
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
                        className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
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
                    Generates high-quality marketing and blog content quickly.
                  </li>
                  <li className="mb-2">
                    Offers multiple tones and templates for various writing
                    styles.
                  </li>
                  <li className="mb-2">
                    Easy-to-use interface suitable for both beginners and
                    professionals.
                  </li>
                  <li className="mb-2">
                    Integration with tools like Surfer SEO for optimized
                    content.
                  </li>
                  <li className="mb-2">
                    Supports over 25+ languages for global reach.
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
                    Can get expensive for teams or heavy users.
                  </li>
                  <li className="mb-2">
                    Occasional generic or repetitive outputs.
                  </li>
                  <li className="mb-2">
                    Needs human editing for complex or creative writing tasks.
                  </li>
                  <li className="mb-2">
                    Limited offline accessibility—cloud-based only.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "alternative":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-4">
              Alternatives to Jasper AI
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
                  <li className="mb-2">
                    Copy.ai: An AI writing tool for generating high-quality
                    content, but it lacks Jasper's advanced personalization and
                    templates.
                  </li>
                  <li className="mb-2">
                    Writesonic: Good for basic blog content and ads, yet has
                    fewer features for long-form content compared to Jasper.
                  </li>
                  <li className="mb-2">
                    Rytr: An affordable AI content generator offering simple
                    writing assistance but falls short on Jasper’s creativity
                    and tone options.
                  </li>
                  <li className="mb-2">
                    Copysmith: Best suited for eCommerce content writing,
                    though not as versatile in handling multiple content types
                    like Jasper.
                  </li>
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
              <h1> Jasper AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Jasper AI is an AI-powered content generation platform that
                helps individuals and businesses create high-quality written
                content in seconds. Using advanced natural language processing
                (NLP) and machine learning, Jasper can generate human-like text
                based on prompts you provide. Formerly known as Jarvis, the
                platform is designed to save time and enhance creativity for
                content creators, marketers, bloggers, agencies, and more.
                Jasper learns from vast amounts of data to understand tone,
                context, and structure, making it one of the most advanced AI
                writing assistants on the market.
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6-i71Gg0MXCtMNEP6dn_xXIWE28jSgDuDJw&s"
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
                How to Use Jasper AI?
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
                      Choose a Content Template
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Select from various content creation templates such as
                      blog posts, ads, emails, and more tailored to your needs.
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
                      Enter Your Keywords or Brief
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Provide a short brief or keywords to guide Jasper in
                      generating high-quality, relevant content instantly.
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
                      Get AI-Written Content Instantly
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Receive ready-to-use content tailored to your input,
                      perfect for blogs, ads, emails, and more—all created by
                      Jasper AI.
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
    "FAQs",
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
            <h4 className="mb-3">Ready to get started with Jasper?</h4>
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

export default JasperAI;