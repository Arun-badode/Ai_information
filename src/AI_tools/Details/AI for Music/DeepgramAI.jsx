import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import deepgram from "../../../../public/assets/Img/Ai for Music/7.png";
import screen1 from "../../../../public/assets/Img/Ai for Music/deepgram-screenshot1.jpg";
import screen2 from "../../../../public/assets/Img/Ai for Music/deepgram-screenshot2.jpg";
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
const DeepgramAI = () => {
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
                icon: "🎙",
                title: "Speech Recognition:",
                desc: "Deepgram AI offers highly accurate speech-to-text conversion with the ability to process audio in real time.",
              },
              {
                icon: "📝",
                title: "Real-Time Transcription:",
                desc: "Quickly transcribe live events, meetings, and webinars in real-time.",
              },
              {
                icon: "🗣",
                title: "Voice Recognition:",
                desc: "Identifies and distinguishes between different speakers in audio content.",
              },
              {
                icon: "🌍",
                title: "Multilingual Support:",
                desc: "Supports transcription in multiple languages, catering to global audiences.",
              },
              {
                icon: "🎤",
                title: "Text-to-Speech (TTS):",
                desc: "Converts text back into speech with lifelike, natural-sounding voices.",
              },
              {
                icon: "🔌",
                title: "API Integration:",
                desc: "Deepgram AI offers a powerful API that allows developers to integrate speech recognition and transcription capabilities into their own applications.",
              },
              {
                icon: "🛠",
                title: "Customization:",
                desc: "Offers the ability to build custom models to cater to specific industry needs like legal or healthcare transcription.",
              },
              {
                icon: "📊",
                title: "Sentiment Analysis:",
                desc: "Provides sentiment analysis of spoken content, valuable for customer feedback and engagement.",
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
                    Why Use Deepgram AI?
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
                    <ul>
                      <li className="mb-3">
                        High Accuracy: Deepgram AI leverages state-of-the-art
                        deep learning technology to provide highly accurate
                        transcription and speech recognition, even in noisy
                        environments.
                      </li>
                      <li className="mb-3">
                        Real-Time Transcription: It offers real-time
                        transcription services, making it ideal for live events,
                        meetings, and webinars.
                      </li>
                      <li className="mb-3">
                        Multilingual Support: The platform supports multiple
                        languages, making it a powerful tool for global
                        businesses and multilingual content creators.
                      </li>
                      <li className="mb-3">
                        Customization: Deepgram AI offers the ability to
                        customize transcription models for specific industries,
                        ensuring better accuracy for niche applications.
                      </li>
                      <li className="mb-3">
                        Scalable: Whether you're a small business or a large
                        enterprise, Deepgram AI can scale to meet your needs,
                        from individual podcasts to enterprise-level
                        transcription services.
                      </li>
                      <li className="mb-3">
                        Integrations: Deepgram AI can easily integrate into
                        existing business systems and applications using its
                        powerful API.
                      </li>
                    </ul>
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
                  q: "What is Deepgram AI?",
                  a: "Deepgram AI is a speech recognition platform that uses advanced artificial intelligence and deep learning to convert audio into text. It provides accurate, real-time transcription, voice recognition, and analytics services for a wide range of applications.",
                },
                {
                  q: "How does Deepgram AI work?",
                  a: "Deepgram AI works by processing audio files using deep learning models. It converts speech to text, recognizing different speakers and complex speech patterns, even in noisy environments.",
                },
                {
                  q: "How accurate is Deepgram AI’s transcription?",
                  a: "Deepgram AI provides highly accurate transcription, even in noisy environments. Its accuracy depends on the quality of the audio, but it is designed to handle complex vocabulary and various accents effectively.",
                },
                {
                  q: "Can I clone my own voice with Deepgram AI?",
                  a: "No, Deepgram AI focuses on speech recognition and transcription, and does not offer voice cloning features.",
                },
                {
                  q: "What are the pricing plans for Deepgram AI?",
                  a: "Deepgram AI offers a variety of pricing plans, including a pay-as-you-go model, and subscription plans based on features like custom models, high-volume transcription, and API access.",
                },
                {
                  q: "Can Deepgram AI handle multiple languages?",
                  a: "Yes, Deepgram AI supports multiple languages, enabling transcription and voice recognition in a range of languages for global use.",
                },
                {
                  q: "Is Deepgram AI suitable for content creators?",
                  a: "Yes, Deepgram AI is ideal for content creators such as podcasters, YouTubers, and vloggers who need transcription services for their content.",
                },
                {
                  q: "Does Deepgram AI support real-time transcription?",
                  a: "Yes, Deepgram AI offers real-time transcription, making it perfect for live events, webinars, and customer service applications.",
                },
                {
                  q: "How does Deepgram AI compare to other transcription services?",
                  a: "Deepgram AI stands out due to its high accuracy, customization options, and its ability to handle noisy environments and specialized terminology, such as in legal and medical transcription.",
                },
                {
                  q: "Can I integrate Deepgram AI with my business applications?",
                  a: "Yes, Deepgram AI offers API integration, allowing businesses to incorporate speech recognition and transcription into their own software and workflows.",
                },
                {
                  q: "How do I get started with Deepgram AI?",
                  a: "To get started, sign up for an account on the Deepgram website, explore their pricing plans, and integrate the API into your systems to start using their speech recognition and transcription services.",
                },
                {
                  q: "Can Deepgram AI transcribe podcasts?",
                  a: "Yes, Deepgram AI is commonly used for podcast transcription, enabling podcasters to generate accurate, searchable transcripts for their episodes.",
                },
                {
                  q: "Does Deepgram AI offer live captioning?",
                  a: "Yes, Deepgram AI supports live captioning for events, webinars, and broadcasts, offering real-time transcription and caption generation.",
                },
                {
                  q: "How can I use Deepgram AI for voice analytics?",
                  a: "Deepgram AI provides analytics for audio files, helping businesses understand customer interactions, sentiments, and trends by analyzing transcribed text and speech patterns.",
                },
                {
                  q: "Can Deepgram AI identify different speakers in audio?",
                  a: "Yes, Deepgram AI has speaker diarization capabilities, allowing it to distinguish between different speakers in audio files and provide accurate transcriptions for multi-speaker environments.",
                },
                {
                  q: "Does Deepgram AI support audio-to-text conversion?",
                  a: "Yes, Deepgram AI specializes in converting audio into text, providing accurate and fast transcriptions for various use cases.",
                },
                {
                  q: "How accurate is Deepgram AI for legal transcription?",
                  a: "Deepgram AI is highly accurate for legal transcription, especially with its ability to handle complex vocabulary and technical legal terms.",
                },
                {
                  q: "Can Deepgram AI handle customer service calls?",
                  a: "Yes, Deepgram AI is perfect for transcribing customer service calls, providing businesses with actionable insights into customer interactions.",
                },
                {
                  q: "Can Deepgram AI be used for conference call transcription?",
                  a: "Yes, Deepgram AI is suitable for transcribing conference calls, meetings, and interviews, providing accurate transcriptions and speaker identification.",
                },
                {
                  q: "Does Deepgram AI offer customizable transcription models?",
                  a: "Yes, Deepgram AI offers custom models for specialized transcription needs, such as legal, medical, and business terminology.",
                },
                {
                  q: "How does Deepgram AI handle accents?",
                  a: "Deepgram AI supports various accents and dialects, making it accurate for transcribing speech from people with different regional backgrounds.",
                },
                {
                  q: "Can I use Deepgram AI for transcription in noisy environments?",
                  a: "Yes, Deepgram AI is designed to work effectively in noisy environments, making it ideal for transcribing audio with background noise.",
                },
                {
                  q: "What file formats does Deepgram AI support?",
                  a: "Deepgram AI supports popular audio formats such as MP3, WAV, FLAC, and more, making it compatible with a wide range of audio sources.",
                },
                {
                  q: "Can I use Deepgram AI for video transcription?",
                  a: "Yes, Deepgram AI is suitable for video transcription, generating text from video content, and creating captions and subtitles for accessibility.",
                },
                {
                  q: "Does Deepgram AI support transcription of audio recordings?",
                  a: "Yes, Deepgram AI supports the transcription of both live and pre-recorded audio, including phone calls, meetings, and podcasts.",
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
                src={screen1}
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={screen2}
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
                    High Accuracy: Provides one of the most accurate
                    speech-to-text services on the market.
                  </li>
                  <li className="mb-2">
                    Real-Time Transcription: Supports live transcription of
                    webinars, podcasts, and customer calls.
                  </li>
                  <li className="mb-2">
                    Multilingual Support: Deepgram AI supports transcription in
                    several languages, making it suitable for global
                    applications.
                  </li>
                  <li className="mb-2">
                    Customizable Models: Offers the ability to create custom
                    models for niche industries, including legal, healthcare,
                    and customer service.
                  </li>
                  <li className="mb-2">
                    Fast Processing: Quickly converts audio to text in
                    real-time, enabling fast access to transcriptions.
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
                    Pricing: While Deepgram AI offers powerful features, its
                    pricing might be on the higher side for smaller businesses,
                    especially when scaling up usage.
                  </li>
                  <li className="mb-2">
                    Learning Curve: Setting up custom models and integrations
                    might require some technical knowledge, especially for
                    non-technical users.
                  </li>
                  <li className="mb-2">
                    Limited Features in Free Plans: Some advanced features are
                    only available in paid plans, which might limit
                    functionality in the free version.
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
                      Google Cloud Speech-to-Text: A robust speech recognition
                      platform from Google that provides transcription, speaker
                      diarization, and multilingual support.
                    </li>
                    <li className="mb-2">
                      Amazon Transcribe: Amazon’s speech-to-text service
                      offering real-time transcription, speaker identification,
                      and custom vocabulary support.
                    </li>
                    <li className="mb-2">
                      IBM Watson Speech to Text: A highly accurate
                      speech-to-text service from IBM, ideal for real-time
                      transcription and business analytics.
                    </li>
                    <li className="mb-2">
                      Sonix.ai: An AI-powered transcription service that
                      supports over 30 languages and offers transcription,
                      translation, and editing tools.
                    </li>
                    <li className="mb-2">
                      Rev.com: Offers both AI-generated and human-edited
                      transcriptions, suitable for a range of professional uses.
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
          <div className="container">
            <div className="row align-items-center mb-4">
              {/* Image Section - mobile: first, desktop: second (right side) */}
              <div className="col-12 col-md-6 order-1 order-md-2 mb-3 mb-md-0 text-center">
                <img
                  src={deepgram}
                  alt="Deepgram AI"
                  className="img-fluid"
                  style={{
                    maxWidth: "100%",
                    height: "300px",
                    objectFit: "contain",
                  }}
                />
              </div>

              {/* Text Section - mobile: second, desktop: first (left side) */}
              <div
                className="col-12 col-md-6 order-2 order-md-1"
                style={{ paddingRight: "30px" }}
              >
                <p className="text-primary">Transcribe smarter, faster</p>
                <h1>Deepgram AI</h1>
                <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
                <p>
                  Deepgram is an AI-powered speech recognition platform that
                  enables fast and accurate transcription of audio and video
                  content. Using end-to-end deep learning models, Deepgram
                  delivers high-performance speech-to-text solutions for
                  enterprises, call centers, podcasts, meetings, and real-time
                  applications.
                </p>
                <div className="mb-3">
                  <a
                    href="https://deepgram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary me-2"
                  >
                    Explore Tool
                  </a>
                </div>
              </div>
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
                How To Use Deepgram AI
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
                      Media & Content Creation
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Podcasters and YouTubers use Deepgram AI for transcription
                      services, generating captions for videos, and creating
                      transcriptions for podcasts.
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
                      Education
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Used in e-learning platforms for transcribing lectures,
                      webinars, and interviews for accessibility purposes.
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
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>Legal</h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Lawyers and legal firms use Deepgram AI to transcribe
                      meetings, depositions, and court hearings with high
                      accuracy.
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

export default DeepgramAI;
