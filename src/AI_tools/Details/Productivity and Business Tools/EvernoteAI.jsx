import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

import evernote from "../../../../public/assets/Img/AI for Business/2.png";
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
const EvernoteAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">Smart Note-Taking & Organization</p>
              <h3 className=""> Drag-and-Drop Simplicity & Custom Branding</h3>
            </div>
            {[
              {
                icon: "📝",
                title: "Smart Note Organization:",
                desc: "Automatically organizes and categorizes your notes based on content and context.",
              },
              {
                icon: "🔍",
                title: "Advanced Search Functionality:",
                desc: "Quickly find notes, documents, and images using Evernote AI’s powerful search engine.",
              },
              {
                icon: "📱",
                title: "Cross-Platform Syncing:",
                desc: "Seamlessly sync your notes across devices for access anywhere, anytime.",
              },
              {
                icon: "⚡",
                title: "Task Automation:",
                desc: "Use AI to create tasks, reminders, and to-do lists based on your notes and calendar events.",
              },
              {
                icon: "🔗",
                title: "Integration with Other Apps:",
                desc: "Connect Evernote AI with other productivity tools like Google Drive, Slack, and Trello.",
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
                src="https://images.wondershare.com/filmora/article-images/photos-into-video-app-8.jpg"
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src="https://www.tipard.com/images/editor/free-online-video-editor/magisto.jpg"
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

      case "FAQs":
        return (
          <div className="faq-section container py-5">
            <h3 className="text-center text-white mb-5 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is Evernote AI?",
                  a: "Evernote AI is an intelligent assistant designed to help you organize, search, and manage your notes and content using machine learning and natural language processing.",
                },
                {
                  q: "How does Evernote AI work?",
                  a: "Evernote AI scans your notes and suggests relevant tags, organizes content, and helps with smart searching based on context, keywords, and categories.",
                },
                {
                  q: "Is Evernote AI free to use?",
                  a: "Evernote AI features are available to both free and premium users, with additional functionality available in the paid plans.",
                },
                {
                  q: "Can Evernote AI automatically organize my notes?",
                  a: "Yes, Evernote AI helps categorize your notes and tags them based on content, helping you to easily organize and retrieve information.",
                },
                {
                  q: "How do I enable Evernote AI in my account?",
                  a: "To enable Evernote AI, simply go to the settings in your Evernote account and activate the AI features from the 'AI Settings' section.",
                },
                {
                  q: "Can Evernote AI search handwritten notes?",
                  a: "Yes, Evernote AI can recognize text in your scanned handwritten notes and make them searchable.",
                },
                {
                  q: "What devices can I use Evernote AI on?",
                  a: "Evernote AI is available on all devices where Evernote is available, including web, iOS, and Android.",
                },
                {
                  q: "Can Evernote AI recommend content to me?",
                  a: "Yes, Evernote AI can analyze your notes and suggest relevant articles, documents, and content from your saved notes.",
                },
                {
                  q: "Does Evernote AI learn from my notes?",
                  a: "Yes, Evernote AI uses machine learning to improve its ability to organize, search, and recommend content based on your usage patterns.",
                },
                {
                  q: "Is Evernote AI suitable for teams?",
                  a: "Yes, Evernote AI helps teams collaborate efficiently by suggesting shared content, managing projects, and assisting in note categorization.",
                },
                {
                  q: "How accurate is Evernote AI’s search feature?",
                  a: "Evernote AI’s search is highly accurate, utilizing context and keyword analysis to return the most relevant results from your notes.",
                },
                {
                  q: "Can Evernote AI translate my notes?",
                  a: "Yes, Evernote AI can help translate notes and text written in other languages, making them accessible across different languages.",
                },
                {
                  q: "Does Evernote AI offer voice recognition?",
                  a: "Yes, Evernote AI can transcribe audio and voice memos into searchable text, helping you convert spoken notes into written content.",
                },
                {
                  q: "How does Evernote AI suggest tags for my notes?",
                  a: "Evernote AI analyzes the content of your notes and suggests the most relevant tags to help you organize and categorize your content efficiently.",
                },
                {
                  q: "Can Evernote AI create to-do lists for me?",
                  a: "Yes, Evernote AI can help you organize tasks, set reminders, and create to-do lists based on your notes and projects.",
                },
                {
                  q: "Does Evernote AI integrate with other apps?",
                  a: "Yes, Evernote AI integrates with other productivity tools like Google Drive, Slack, and Microsoft Teams to enhance workflow efficiency.",
                },
                {
                  q: "Can Evernote AI summarize long notes?",
                  a: "Yes, Evernote AI can summarize long notes and provide concise highlights, making it easier to focus on key information.",
                },
                {
                  q: "Does Evernote AI have security features?",
                  a: "Yes, Evernote AI uses the same security protocols as Evernote to ensure that your data is safe and secure.",
                },
                {
                  q: "Can Evernote AI create reminders for my tasks?",
                  a: "Yes, Evernote AI can set reminders based on the content of your notes, ensuring you stay on top of your tasks and deadlines.",
                },
                {
                  q: "Can Evernote AI sync my notes across devices?",
                  a: "Yes, Evernote AI automatically syncs your notes across all devices, ensuring that your content is always up to date.",
                },
                {
                  q: "Does Evernote AI analyze my note-taking habits?",
                  a: "Yes, Evernote AI learns from your note-taking habits to offer more personalized recommendations and improvements over time.",
                },
                {
                  q: "Can I disable Evernote AI features?",
                  a: "Yes, you can disable specific AI features in the settings if you prefer to manage your notes manually.",
                },
                {
                  q: "How can I use Evernote AI for content creation?",
                  a: "Evernote AI can help you gather and organize research, create outlines, and suggest relevant content, making it a useful tool for content creators.",
                },
                {
                  q: "Does Evernote AI help with project management?",
                  a: "Yes, Evernote AI can assist with project management by organizing tasks, setting deadlines, and creating action plans based on your notes.",
                },
                {
                  q: "How does Evernote AI help with team collaboration?",
                  a: "Evernote AI makes it easier for teams to share notes, assign tasks, and collaborate on projects by suggesting relevant content and organizing shared resources.",
                },
                {
                  q: "Can Evernote AI handle different types of media?",
                  a: "Yes, Evernote AI can handle text, images, PDFs, and even handwritten notes, making it versatile for all types of media.",
                },
                {
                  q: "What are the advantages of using Evernote AI?",
                  a: "Evernote AI helps you work more efficiently by automating note organization, smart searching, and content recommendations, saving you time and effort.",
                },
                {
                  q: "Is Evernote AI available in multiple languages?",
                  a: "Yes, Evernote AI supports multiple languages, including English, Spanish, French, and others, making it accessible to users worldwide.",
                },
                {
                  q: "Does Evernote AI support cloud storage?",
                  a: "Yes, all notes processed by Evernote AI are stored securely in the cloud, ensuring that your data is always accessible.",
                },
                {
                  q: "What are the system requirements for using Evernote AI?",
                  a: "Evernote AI is available on all devices where Evernote is supported, including web browsers, Windows, macOS, iOS, and Android.",
                },
                {
                  q: "Can I import data into Evernote AI from other platforms?",
                  a: "Yes, you can import data from platforms like Google Drive, Dropbox, and OneDrive into Evernote AI for seamless content management.",
                },
                {
                  q: "How can I get started with Evernote AI?",
                  a: "Simply sign up for Evernote, enable AI features in the settings, and start using Evernote AI to organize and manage your notes more efficiently.",
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

      case "why-we-use":
        return (
          <div className="container">
            <div className="row g-4">
              <div className="col-12">
                <div className="custom-card text-light p-5 text-center">
                  <h3 className="fw-bold mb-4 text-start text-primary">
                    Why Use Evernote AI?
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
                      Evernote AI helps you organize your notes more efficiently
                      using machine learning.
                    </li>
                    <li className="mb-3">
                      It simplifies searching through notes and content by
                      providing smart search capabilities.
                    </li>
                    <li className="mb-3">
                      With Evernote AI, you can automatically categorize and tag
                      your notes for better organization.
                    </li>
                    <li className="mb-3">
                      Evernote AI makes your workflow more productive by
                      offering suggestions for your notes.
                    </li>
                    <li className="mb-3">
                      It's perfect for individuals and teams who want to stay
                      organized and collaborate more efficiently.
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
                    Smart automation – AI organizes and tags notes
                    automatically.
                  </li>
                  <li className="mb-2">
                    Time-saving features – Faster searches, automated task
                    reminders.
                  </li>
                  <li className="mb-2">
                    OCR & handwriting recognition – Converts handwritten notes
                    into searchable text.
                  </li>
                  <li className="mb-2">
                    AI-driven workflow – Automates note sorting and scheduling.
                  </li>
                  <li className="mb-2">
                    Seamless integrations – Connects with Google, Slack, and
                    productivity tools.
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
                    Advanced AI features are paid – Free version has limited
                    automation.
                  </li>
                  <li className="mb-2">
                    Limited AI writing assistance – Not as powerful as dedicated
                    AI writing tools.
                  </li>
                  <li className="mb-2">
                    Learning curve – Some automation settings require setup.
                  </li>
                  <li className="mb-2">
                    Integration issues – Some AI-powered features don’t sync
                    well across all devices.
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
                  <li className="mb-2">
                    Notion AI – AI-powered note-taking, document creation, and
                    project management.
                  </li>
                  <li className="mb-2">
                    ClickUp AI – AI-driven task automation and workflow
                    organization.
                  </li>
                  <li className="mb-2">
                    OneNote AI – Great handwriting recognition and smart
                    categorization.
                  </li>
                  <li className="mb-2">
                    Google Keep AI – Smart reminders, tagging, and voice-to-text
                    conversion.
                  </li>
                  <li className="mb-2">
                    Roam Research AI – AI-powered bidirectional linking for idea
                    organization.
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
        {/* <a
          href="/Aitools"
          className="d-inline-block text-white text-decoration-none ml-3 py-1"
        >
          <i className="bi bi-arrow-left me-2"></i>Back to Directory{" "}
        </a> */}
       <a
          href="/Aitools"
          className="d-inline-block text-white text-decoration-none  mt-3 ml-3 py-1 px-2 ms-5 border rounded-sm"
        >
          <i className="bi bi-arrow-left me-2"></i>Back  {" "}
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
              <h1>Evernote AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Evernote has evolved from a simple note-taking app to an
                AI-powered productivity tool. With Evernote AI features, users
                can automate organization, improve search capabilities, and
                enhance note-taking efficiency. This guide will explore how AI
                in Evernote works, its benefits, and how professionals,
                students, and businesses can leverage its smart notes, AI
                integrations, and automation features.
              </p>

              <p>
                Evernote uses artificial intelligence (AI) and machine learning
                to enhance productivity, streamline workflows, and optimize
                note-taking. Features like Evernote AI organization, AI-powered
                notes, and AI content categorization help users manage large
                amounts of information with minimal effort.
              </p>
              <div className="mb-3">
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
                src={evernote}
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
                How to Use Evernote AI?
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
                      Enable AI Features
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Open Evernote and go to settings to enable AI features
                      like smart search, auto-organization, and text
                      recognition.
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
                      Create & Organize Notes
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Start creating notes by typing or adding images. Evernote
                      AI will automatically suggest tags, organize notes, and
                      offer relevant content.
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
                      Leverage AI for Search & Reminders
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Use Evernote AI’s enhanced search to find notes quickly,
                      and set reminders for tasks or deadlines based on your
                      notes.
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
            <h4 className="mb-3">Ready to get started with Evernote AI?</h4>
            <p className="mb-4">
              Join thousands of professionals already boosting their
              productivity!
            </p>
            <div>
              <button className="btn btn-light me-3">Try Now for Free</button>
              <button className="btn btn-outline-light">Schedule a Demo</button>
            </div>
            <small className="d-block mt-2">
              No credit card required. free trial available.
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default EvernoteAI;
