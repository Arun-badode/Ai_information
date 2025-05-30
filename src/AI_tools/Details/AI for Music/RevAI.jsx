import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import rev from "../../../../public/assets/Img/Ai for Music/10.png";
import screen1 from "../../../../public/assets/Img/Ai for Music/reva-screenshot1.jpg";
import screen2 from "../../../../public/assets/Img/Ai for Music/rev-screenshot2.jpg";
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
const RevAI = () => {
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
                desc: "Speechify provides highly accurate speech-to-text transcription, converting your audio content into text with lifelike, human-like voices.",
              },
              {
                icon: "📝",
                title: "Real-Time Transcription:",
                desc: "Speechify allows you to transcribe live events, meetings, webinars, podcasts, and more in real-time, providing fast and reliable results.",
              },
              {
                icon: "🗣",
                title: "Voice Cloning:",
                desc: "With Speechify, you can create personalized voice models by recording a brief 20-second sample, ensuring consistency and a custom voice for your content.",
              },
              {
                icon: "🌍",
                title: "Multilingual Support:",
                desc: "Speechify supports transcription and speech output in multiple languages, ideal for global businesses and content creators.",
              },
              {
                icon: "🎤",
                title: "Text-to-Speech (TTS):",
                desc: "Speechify offers advanced text-to-speech technology, converting text into high-quality, human-like voices with customizable tones, pitch, and speed.",
              },
              {
                icon: "🔌",
                title: "API Integration:",
                desc: "Speechify provides a powerful API to integrate its speech recognition, transcription, and TTS features into your own applications and services.",
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
                    Why Use Rev.ai?
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
                        High Accuracy: Rev.ai offers exceptional accuracy in
                        transcription, providing natural, clear, and reliable
                        results, even in complex audio environments.
                      </li>
                      <li className="mb-3">
                        Real-Time Transcription: Rev.ai provides real-time
                        transcription, making it ideal for live events,
                        webinars, meetings, podcasts, and other time-sensitive
                        applications.
                      </li>
                      <li className="mb-3">
                        Multilingual Support: Rev.ai supports multiple languages
                        and various accents, making it the perfect solution for
                        global businesses and multilingual content creators.
                      </li>
                      <li className="mb-3">
                        Speaker Diarization: With Rev.ai, you can differentiate
                        and label multiple speakers in a conversation, providing
                        accurate transcriptions for interviews, meetings, and
                        multi-speaker events.
                      </li>
                      <li className="mb-3">
                        Scalable: Rev.ai is scalable for businesses of all
                        sizes, from small startups to large enterprises,
                        offering flexible pricing and robust functionality for a
                        variety of use cases.
                      </li>
                      <li className="mb-3">
                        Seamless Integrations: Rev.ai integrates seamlessly into
                        your existing business systems using its API, enabling
                        smooth workflows and enhancing productivity across
                        platforms like Zoom, Slack, and more.
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
                  q: "What is Rev.ai?",
                  a: "Rev.ai is an AI-powered speech recognition platform that offers real-time and asynchronous speech-to-text transcription services. It is designed to convert audio and video content into accurate, structured text data using advanced AI technology.",
                },
                {
                  q: "How does Rev.ai work?",
                  a: "Rev.ai works by processing audio or video files through its API, converting them into transcribed text. The platform supports both real-time transcription for live events and asynchronous transcription for pre-recorded content, with the option to return results in structured formats.",
                },
                {
                  q: "How accurate is Rev.ai’s transcription?",
                  a: "Rev.ai provides highly accurate transcriptions, particularly for clear speech and standard language. It is optimized for noisy environments and can handle different accents, making it versatile for a global audience.",
                },
                {
                  q: "Can Rev.ai handle multiple languages?",
                  a: "Yes, Rev.ai supports multiple languages for transcription, making it an ideal choice for global businesses and content creators who require multilingual transcription and speech-to-text services.",
                },
                {
                  q: "What file formats does Rev.ai support?",
                  a: "Rev.ai supports various audio and video formats, including common formats like .mp3, .wav, .mp4, and .flac, ensuring compatibility with most media sources for transcription.",
                },
                {
                  q: "Does Rev.ai offer real-time transcription?",
                  a: "Yes, Rev.ai provides real-time transcription for live events such as meetings, webinars, podcasts, and broadcasts, enabling fast and reliable results.",
                },
                {
                  q: "Can I integrate Rev.ai into my applications?",
                  a: "Yes, Rev.ai offers a powerful API that allows businesses and developers to integrate its transcription and speech recognition capabilities into their applications, websites, and systems.",
                },
                {
                  q: "How does Rev.ai handle noisy environments?",
                  a: "Rev.ai is optimized to provide accurate transcriptions even in noisy environments, making it a robust solution for challenging audio scenarios such as customer service calls and interviews.",
                },
                {
                  q: "Does Rev.ai support speaker identification?",
                  a: "Yes, Rev.ai supports speaker diarization (speaker identification), which allows you to distinguish between multiple speakers in the same audio recording, ideal for interviews and multi-speaker events.",
                },
                {
                  q: "What are the pricing plans for Rev.ai?",
                  a: "Rev.ai offers flexible pricing plans based on usage, with options for pay-as-you-go models and subscription-based plans. Pricing is determined by factors such as the volume of transcription and specific feature needs.",
                },
                {
                  q: "Can I use Rev.ai for legal transcription?",
                  a: "Yes, Rev.ai is suitable for legal transcription and can handle specialized terminology, making it an excellent choice for legal proceedings and other industries that require high accuracy in transcription.",
                },
                {
                  q: "How does Rev.ai compare to other speech-to-text services?",
                  a: "Rev.ai stands out for its accuracy, speaker identification, real-time transcription capabilities, and multilingual support. Additionally, it provides a user-friendly API for easy integration and offers highly customizable transcription models.",
                },
                {
                  q: "Can Rev.ai be used for podcast transcription?",
                  a: "Yes, Rev.ai is frequently used for podcast transcription, providing accurate and searchable transcripts for podcast episodes, helping content creators and businesses improve accessibility and reach.",
                },
                {
                  q: "Does Rev.ai offer automated captions and subtitles?",
                  a: "Yes, Rev.ai can automatically generate captions and subtitles for videos, enhancing accessibility and making content more discoverable on platforms like YouTube, Vimeo, and more.",
                },
                {
                  q: "Can I use Rev.ai for conference call transcription?",
                  a: "Yes, Rev.ai is ideal for transcribing conference calls, meetings, and interviews, providing accurate transcriptions with speaker identification to distinguish between participants.",
                },
                {
                  q: "How does Rev.ai handle different accents?",
                  a: "Rev.ai is capable of accurately transcribing speech with various regional accents, making it suitable for users worldwide, including those from different linguistic backgrounds.",
                },
                {
                  q: "Can Rev.ai be used in customer service applications?",
                  a: "Yes, Rev.ai is ideal for transcribing customer service calls, providing businesses with valuable insights into customer interactions and allowing for better service quality through analysis of transcribed calls.",
                },
                {
                  q: "How accurate is Rev.ai for transcription in noisy environments?",
                  a: "Rev.ai is designed to work effectively in noisy environments, ensuring high-quality transcriptions for recordings that might include background noise, such as customer service interactions or street interviews.",
                },
                {
                  q: "Can Rev.ai transcribe video content?",
                  a: "Yes, Rev.ai can transcribe video content, providing accurate text for subtitles, captions, and transcripts. This is ideal for video creators, educators, and businesses needing video content analysis.",
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
                alt="rev"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={screen2}
                alt="rev"
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
                    High Accuracy: Rev.ai delivers one of the most accurate
                    speech-to-text transcription services, ensuring clear,
                    precise results even with complex content or diverse
                    accents.
                  </li>
                  <li className="mb-2">
                    Real-Time Transcription: Rev.ai supports live transcription
                    for webinars, podcasts, meetings, and customer calls, making
                    it ideal for fast-paced, time-sensitive content.
                  </li>
                  <li className="mb-2">
                    Multilingual Support: Rev.ai provides transcription and
                    speech-to-text services in multiple languages, making it a
                    perfect solution for global businesses and multilingual
                    audiences.
                  </li>
                  <li className="mb-2">
                    Speaker Diarization: With Rev.ai, you can differentiate and
                    label multiple speakers in a conversation, ideal for
                    interviews, meetings, and multi-speaker events.
                  </li>
                  <li className="mb-2">
                    Fast Processing: Rev.ai quickly converts audio to text with
                    high accuracy, ensuring efficient workflows and rapid
                    content production for users across various sectors.
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
                    Pricing: While Rev.ai offers a wide range of powerful
                    features, its pricing can be on the higher side for smaller
                    businesses, especially as usage increases.
                  </li>
                  <li className="mb-2">
                    Learning Curve: Setting up and customizing some advanced
                    features may require technical knowledge, which could be
                    challenging for users without a technical background.
                  </li>
                  <li className="mb-2">
                    Limited Features in Lower Tiers: Some advanced
                    functionalities, such as speaker diarization and custom
                    transcription models, are only available in higher-tier
                    plans.
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
                      Google Cloud Speech-to-Text: A powerful and scalable
                      speech recognition service from Google, offering high
                      accuracy, multilingual support, and integration with other
                      Google Cloud services, ideal for large-scale transcription
                      and speech analysis applications.
                    </li>
                    <li className="mb-2">
                      Amazon Transcribe: Amazon's speech recognition service
                      that provides real-time and batch transcription, speaker
                      identification, and custom vocabulary support, making it
                      suitable for a wide range of industries, including
                      healthcare and customer service.
                    </li>
                    <li className="mb-2">
                      Microsoft Azure Speech to Text: A comprehensive
                      speech-to-text service from Microsoft Azure, offering
                      real-time transcription, speaker diarization, and strong
                      customization options, widely used in enterprise
                      environments and voice-enabled applications.
                    </li>
                    <li className="mb-2">
                      Deepgram: An AI-based speech recognition platform with
                      real-time transcription capabilities, noise reduction, and
                      industry-specific models, ideal for companies needing high
                      accuracy and fast processing at scale.
                    </li>
                    <li className="mb-2">
                      Speechmatics: A speech-to-text service offering
                      high-quality transcription with support for multiple
                      languages, speaker identification, and automatic
                      punctuation, suitable for business applications, media
                      production, and more.
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
          <i className="bi bi-arrow-left me-2"></i>Back{" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
          <div className="row align-items-center mb-4">
            {/* Image Section - mobile pehle, desktop right */}
            <div className="col-12 col-md-6 order-1 order-md-2 text-center mb-3 mb-md-0">
              <img
                src={rev}
                alt="Rev.ai"
                className="img-fluid"
                style={{ maxHeight: "300px", objectFit: "contain" }}
              />
            </div>

            {/* Text Section - mobile baad me, desktop left */}
            <div className="col-12 col-md-6 order-2 order-md-1">
              <p className="text-primary">Write better, faster</p>
              <h1>Rev.ai</h1>
              <div className="text-warning mb-2">⭐⭐⭐⭐⭐</div>
              <p>
                Rev.ai is developed by Rev.com to serve customers who require
                automated, scalable transcription via RESTful APIs. It supports
                various use cases like live meeting captioning, content
                indexing, podcast transcripts, and video subtitling. It stands
                out for its real-time streaming capabilities, speaker
                diarization, word-level timestamps, and HIPAA-compliant
                offerings.
              </p>
              <a
                href="https://www.rev.ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Explore Tool
              </a>
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
                How To Use Rev.ai
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
                      Set Up an API Key
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Sign up for Rev.ai and create an account. Obtain your API
                      key from the Rev.ai dashboard to authenticate your
                      requests.
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
                      Integrate the API
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Use Rev.ai’s API endpoints to upload audio or video files
                      for transcription. Choose between real-time transcription
                      or asynchronous processing based on your needs.
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
                      Retrieve Transcriptions
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Once the transcription process is complete, retrieve the
                      text data via the API. The transcriptions will be returned
                      in a structured format, ready for use in your application
                      or system. Let me know if you need more in-depth
                      instructions or code examples for integrating Rev.ai!
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

          {/* <div className="bg-primary text-center text-light rounded-4 p-5 mt-5">
            <h4 className="mb-3">Ready to get started with RevAI?</h4>
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
          </div> */}
        </div>
      </div>
    </>
  );
};

export default RevAI;
