import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import "../../ImageMindAI.css"; // <-- custom CSS file import

import descript from "../../../../public/assets/Img/AI for Animation/8.png";

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
const DescriptAI = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                Create Studio-Quality Videos with AI
              </p>
              <h3 className=""> Diverse AI Avatars & Multilingual Support</h3>
            </div>
            {[
              {
                icon: "🖼",
                title: "Transcription: ",
                desc: "Accurate AI-driven transcription from audio or video files.",
              },
              {
                icon: "🎨",
                title: "Video Editing",
                desc: " Robust tools for video trimming, cutting, and editing. ",
              },
              {
                icon: "✏",
                title: "Podcasting:",
                desc: " Ideal for editing and publishing podcasts with AI-powered features.",
              },
              {
                icon: "📦",
                title: "  Text-to-Speech:",
                desc: "Convert text into natural-sounding speech with Descript’s advanced AI models.",
              },
              {
                icon: "⚙",
                title: "Voice Cloning: ",
                desc: "Create voiceovers with a custom AI-generated voice model. ",
              },
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="custom-card text-light p-4 h-100  "
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

      case "Screenshots":
        return (
          <div className="row g-4">
            <div className="col-md-6">
              <img
                src="https://voicebot.ai/wp-content/uploads/2019/09/descript-image-2.jpg"
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src="https://10web.io/wp-content/uploads/2024/07/Descript_screenshot.png"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
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
      case "FAQs":
        return (
          <div className="faq-section container py-5">
            <h3 className="text-center text-white mb-5 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is Descript AI?",
                  a: "Descript AI is an all-in-one audio and video editing tool that uses AI to simplify editing through transcription, overdubbing, and screen recording.",
                },
                {
                  q: "How does Descript's transcription feature work?",
                  a: "Descript automatically converts audio or video content into editable text using AI-powered speech recognition.",
                },
                {
                  q: "What is Overdub in Descript?",
                  a: "Overdub lets you create a digital voice clone and generate audio just by typing text—perfect for correcting spoken mistakes.",
                },
                {
                  q: "Can Descript be used for podcast editing?",
                  a: "Yes, Descript is widely used for editing podcasts thanks to its text-based editing, multitrack support, and studio sound features.",
                },
                {
                  q: "Is Descript free to use?",
                  a: "Descript offers a free plan with limited transcription minutes and features. Premium plans unlock more editing tools and usage limits.",
                },
                {
                  q: "Does Descript support video editing?",
                  a: "Yes, Descript supports full video editing including cuts, transitions, captions, screen recording, and exporting.",
                },
                {
                  q: "What is Studio Sound in Descript?",
                  a: "Studio Sound is an AI tool that enhances audio quality by removing background noise and improving voice clarity.",
                },
                {
                  q: "Does Descript support screen recording?",
                  a: "Yes, Descript has a built-in screen recorder that captures both screen and webcam along with audio.",
                },
                {
                  q: "Can I use Descript on mobile?",
                  a: "Currently, Descript is designed for macOS and Windows. A mobile app is in development for viewing and reviewing.",
                },
                {
                  q: "Is Descript good for YouTubers?",
                  a: "Yes, YouTubers use Descript for creating and editing video content, adding captions, and producing fast-turnaround content.",
                },
                {
                  q: "Does Descript support team collaboration?",
                  a: "Yes, Descript allows real-time collaboration with team members and shared project access.",
                },
                {
                  q: "How accurate is Descript’s transcription?",
                  a: "Descript’s AI transcription is highly accurate, though results may vary based on audio quality and speaker accents.",
                },
                {
                  q: "Can I export captions from Descript?",
                  a: "Yes, you can export captions in formats like SRT or embed them directly in videos.",
                },
                {
                  q: "What languages does Descript support?",
                  a: "Descript primarily supports English, with limited support for other languages in beta.",
                },
                {
                  q: "What export formats does Descript support?",
                  a: "Descript supports exporting video (MP4), audio (MP3, WAV), and subtitle (SRT) formats.",
                },
                {
                  q: "Can Descript remove filler words?",
                  a: "Yes, Descript can automatically detect and remove filler words like 'um', 'uh', and 'you know' from your content.",
                },
                {
                  q: "Is Overdub available on all plans?",
                  a: "Overdub is available on paid plans and requires voice training to create your voice model.",
                },
                {
                  q: "Can I edit audio by editing text in Descript?",
                  a: "Yes, Descript's core feature is text-based editing—editing the transcript edits the actual audio/video.",
                },
                {
                  q: "How secure is my data in Descript?",
                  a: "Descript uses encrypted storage and secure cloud infrastructure to protect your files and voice data.",
                },
                {
                  q: "Can Descript integrate with other tools?",
                  a: "Yes, it integrates with platforms like Slack, Zapier, and allows embedding videos directly into web pages.",
                },
                {
                  q: "Does Descript have a learning curve?",
                  a: "Descript is beginner-friendly with drag-and-drop tools, text editing, and plenty of tutorials for new users.",
                },
                {
                  q: "Is Descript useful for course creators?",
                  a: "Yes, educators and course creators use Descript to edit videos, enhance audio, and add captions easily.",
                },
                {
                  q: "Can I add music and sound effects in Descript?",
                  a: "Yes, Descript lets you add background music, sound effects, and manage multitrack audio layers.",
                },
                {
                  q: "Does Descript offer automatic highlights?",
                  a: "Yes, it can detect highlights, key moments, and speaker changes to help with editing and reviewing.",
                },
                {
                  q: "Is Descript suitable for agencies?",
                  a: "Yes, agencies use Descript for team-based editing, client reviews, and efficient production workflows.",
                },
                {
                  q: "Can I generate audiograms in Descript?",
                  a: "Yes, Descript can generate audiograms—visual audio snippets for promoting podcasts on social media.",
                },
                {
                  q: "Does Descript support templates?",
                  a: "Descript offers templates for podcast intros, outros, captions, and branded layouts.",
                },
                {
                  q: "What’s the difference between Descript and Premiere Pro?",
                  a: "Descript is optimized for fast, script-based editing. Premiere is more advanced for high-end film production.",
                },
                {
                  q: "Can Descript translate videos?",
                  a: "Not directly, but you can export transcripts and use translation tools to localize content.",
                },
                {
                  q: "Does Descript have version control?",
                  a: "Yes, Descript automatically saves versions and allows you to restore or compare previous edits.",
                },
                {
                  q: "Is Descript good for Zoom call editing?",
                  a: "Yes, you can import Zoom recordings and edit them with transcripts, highlights, and visuals.",
                },
                {
                  q: "Does Descript support green screen effects?",
                  a: "Basic green screen and background removal are supported for screen recordings, but not full VFX.",
                },
                {
                  q: "Can I collaborate live with others in Descript?",
                  a: "Yes, real-time multi-user editing and commenting are supported for teams.",
                },
                {
                  q: "Is Descript used by professionals?",
                  a: "Yes, it’s trusted by podcasters, YouTubers, journalists, and content creators at all levels.",
                },
                {
                  q: "Does Descript offer analytics?",
                  a: "Descript does not provide detailed analytics but can be paired with other platforms for performance tracking.",
                },
                {
                  q: "Can I schedule content in Descript?",
                  a: "No, Descript doesn’t include scheduling features. You can export and schedule using other tools.",
                },
                {
                  q: "Can I clone other voices with Overdub?",
                  a: "No, Overdub is only for voices you own or have consent to use. Cloning others' voices is prohibited.",
                },
                {
                  q: "Does Descript support AI-generated summaries?",
                  a: "Yes, Descript can summarize transcripts and key moments using built-in AI features.",
                },
                {
                  q: "What platforms support Descript exports?",
                  a: "You can export to YouTube, social media, Dropbox, and most video/audio platforms.",
                },
                {
                  q: "Does Descript offer offline editing?",
                  a: "Descript is primarily cloud-based, but some features work offline with desktop app support.",
                },
              ]
                .map((item, i) => ({ ...item, id: `faq${i}` }))
                .filter((item, i) => showAllFaqs || i < 4)
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

      case "Why-We-Use":
        return (
          <div className="container">
            <div className="row g-4">
              <div className="col-12">
                <div className="custom-card text-light p-5 text-center">
                  <h3 className="fw-bold mb-4 text-start text-primary">
                    Why Use Descript AI?
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
                      Descript is perfect for creators needing fast audio and
                      video editing with AI support.
                    </li>
                    <li className="mb-3">
                      It's great for podcasters, YouTubers, marketers, and
                      educators looking for an all-in-one editing platform.
                    </li>
                    <li className="mb-3">
                      The tool offers powerful features like overdub, screen
                      recording, and multitrack editing in a simple interface.
                    </li>
                    <li className="mb-3">
                      It boosts productivity by allowing you to edit audio and
                      video just like a doc.
                    </li>
                    <li className="mb-3">
                      Descript streamlines collaboration and helps teams create
                      professional content with ease.
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

      case "Pros & Cons":
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
                    {" "}
                    Edit videos and podcasts like a text document.
                  </li>
                  <li className="mb-2">
                    Create your own voice model for personalized voiceovers.
                  </li>
                  <li className="mb-2">
                    Easy-to-use platform, even for beginners.
                  </li>
                  <li className="mb-2">
                    Perfect for teams working on video or podcast projects.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Supports transcription in multiple languages.
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
                    The Pro plan can be pricey for occasional users.
                  </li>
                  <li className="mb-2">
                    Some advanced features might require time to master.
                  </li>
                  <li className="mb-2">
                    {" "}
                    The free plan has limited features and transcription hours.
                  </li>
                  <li className="mb-2">
                    Some features may lack the advanced controls of fully manual
                    editing tools.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "Alternative":
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
                    {" "}
                    A transcription service with human-editing options, though
                    it lacks Descript’s video features.
                  </li>
                  <li className="mb-2">
                    {" "}
                    An AI transcription tool with advanced features, but less
                    focused on video editing.
                  </li>
                  <li className="mb-2">
                    {" "}
                    A powerful editing tool for Mac users, perfect for
                    professional video projects.
                  </li>
                  <li className="mb-2">
                    Industry-standard for video editing with a comprehensive
                    suite of tools.
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
              <h1>Descript AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Descript AI is an advanced audio and video editing platform that
                allows users to transcribe, edit, and produce content with ease.
                It combines features such as voice cloning, video editing,
                text-to-speech, and much more, making it an all-in-one tool for
                creators, businesses, and educators alike.
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
                src={descript}
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
                How to Use Our AI Tools?
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
                      Choose an AI Tool
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Browse from a variety of AI tools like text generators,
                      image creators, chatbots, and more.
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
                      Input Your Query or Data
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Enter your text, prompt, or document — the AI will analyze
                      and process it instantly.
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
                      Get Results Instantly
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      View or download your AI-generated result in seconds and
                      use it for your personal or business needs.
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

              "Why-We-Use",
              "Pros & Cons",
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

          <div className="bg-primary text-center text-light rounded-4 p-5 mt-5">
            <h4 className="mb-3">Ready to get started with DescriptAI?</h4>
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

export default DescriptAI;
