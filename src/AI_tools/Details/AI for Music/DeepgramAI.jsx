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
                src="https://www.gizmochina.com/wp-content/uploads/2023/06/Screenshot-2023-06-23-165608.png"
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src=""
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
          <div className=" row d-flex align-items-center justify-content-between mb-1">
            {/* Left side (Text Section) */}
            <div
              style={{ flex: 1, paddingRight: "30px" }}
              className="col-6 col-md-12 "
            >
              <p className="text-primary">Write better, faster</p>
              <h1>Deepgram AI - Information</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                {" "}
                Deepgram AI is an advanced speech recognition platform that
                leverages artificial intelligence and deep learning to provide
                powerful, accurate transcription and voice recognition
                solutions. It is designed to convert audio and speech into text
                in real time, helping businesses streamline processes like
                customer service, content creation, and data processing.
                Deepgram AI excels in various use cases including transcription
                for podcasts, videos, conference calls, interviews, and
                e-learning, offering high accuracy, multilingual support, and
                customization options to fit specific business needs.
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

          <div className="bg-primary text-center text-light rounded-4 p-5 mt-5">
            <h4 className="mb-3">Ready to get started with DeepgramAI?</h4>
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

export default DeepgramAI;
