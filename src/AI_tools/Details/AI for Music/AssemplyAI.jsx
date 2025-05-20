import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import play from "../../../../public/assets/Img/Ai for Music/3.png";
import screen1 from "../../../../public/assets/Img/Ai for Music/play-screenshot1.jpg";
import screen2 from "../../../../public/assets/Img/Ai for Music/play-screenshot2.jpg";
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
const AssemblyAI = () => {
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
                desc: "AssemblyAI provides highly accurate speech-to-text transcription for both audio and video content, using advanced AI models to ensure fast and reliable transcriptions.",
              },
              {
                icon: "📝",
                title: "Real-Time Transcription:",
                desc: "AssemblyAI allows you to quickly transcribe live events, meetings, webinars, podcasts, and more in real-time, providing fast and accurate results.",
              },
              {
                icon: "🗣",
                title: "Speaker Identification:",
                desc: "The platform can identify and distinguish between different speakers in audio content, providing detailed transcriptions with speaker labels for multi-speaker environments.",
              },
              {
                icon: "🌍",
                title: "Multilingual Support:",
                desc: "AssemblyAI supports transcription in several languages, making it suitable for global businesses, content creators, and multilingual applications.",
              },
              {
                icon: "🎤",
                title: "Text-to-Speech (TTS):",
                desc: "AssemblyAI offers high-quality text-to-speech conversion, turning text into lifelike, human-like voices with customizable options for tone, pitch, and more.",
              },
              {
                icon: "🔌",
                title: "API Integration:",
                desc: "AssemblyAI provides a powerful API that allows developers to integrate its speech recognition, transcription, and TTS features into their own applications and services.",
              },
              {
                icon: "🛠",
                title: "Customization:",
                desc: "AssemblyAI allows users to create custom models for specific industry needs like healthcare, legal, or financial transcription, ensuring improved accuracy for niche applications.",
              },
              {
                icon: "📊",
                title: "Sentiment Analysis:",
                desc: "AssemblyAI's sentiment analysis feature helps businesses understand the emotional tone of transcribed content, valuable for customer feedback, social media monitoring, and more.",
              },
              {
                icon: "💡",
                title: "Summarization:",
                desc: "AssemblyAI offers summarization of long-form content, extracting key points and creating concise summaries for quick understanding and analysis.",
              },
              {
                icon: "📑",
                title: "Keyword Extraction:",
                desc: "The platform includes keyword extraction capabilities, helping users identify key phrases and terms within transcribed content for search optimization and analysis.",
              },
              {
                icon: "💬",
                title: "Automated Captions & Subtitles:",
                desc: "AssemblyAI can automatically generate captions and subtitles for videos, making your content more accessible and searchable on various platforms.",
              },
              {
                icon: "🔒",
                title: "Data Security:",
                desc: "AssemblyAI prioritizes security with robust encryption and compliance with GDPR, ensuring that all data and transcriptions are securely handled.",
              },
              {
                icon: "⚙",
                title: "Custom Vocabulary:",
                desc: "The platform allows you to customize your vocabulary, ensuring better transcription accuracy for industry-specific jargon or uncommon terms.",
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
                    Why Use AssemblyAI?
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
                        High Accuracy: AssemblyAI uses state-of-the-art deep
                        learning technology to provide highly accurate
                        transcription and speech recognition, even in noisy
                        environments.
                      </li>
                      <li className="mb-3">
                        Real-Time Transcription: It offers real-time
                        transcription services, making it ideal for live events,
                        meetings, webinars, and other time-sensitive
                        applications.
                      </li>
                      <li className="mb-3">
                        Multilingual Support: AssemblyAI supports multiple
                        languages, making it a powerful tool for global
                        businesses and multilingual content creators.
                      </li>
                      <li className="mb-3">
                        Customization: AssemblyAI allows you to customize
                        transcription models for specific industries, ensuring
                        better accuracy for niche applications like legal,
                        medical, and technical fields.
                      </li>
                      <li className="mb-3">
                        Scalable: Whether you're a small business or a large
                        enterprise, AssemblyAI can scale to meet your needs,
                        from individual podcast transcriptions to
                        enterprise-level services.
                      </li>
                      <li className="mb-3">
                        Integrations: AssemblyAI can easily integrate into
                        existing business systems and applications using its
                        powerful API, enabling seamless workflow integration.
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
                  q: "What is AssemblyAI?",
                  a: "AssemblyAI is an advanced AI-powered speech recognition platform that converts audio into text. It provides real-time transcription, speaker recognition, and support for various use cases like podcasts, webinars, and meetings.",
                },
                {
                  q: "How does AssemblyAI work?",
                  a: "AssemblyAI works by using deep learning models to process audio and convert speech to text. It can identify different speakers, handle complex speech patterns, and deliver accurate results even in noisy environments.",
                },
                {
                  q: "How accurate is AssemblyAI’s transcription?",
                  a: "AssemblyAI provides high accuracy in transcription, especially when processing clean audio. Its performance is further enhanced with the ability to recognize various accents and handle noisy environments effectively.",
                },
                {
                  q: "Can I clone my own voice with AssemblyAI?",
                  a: "No, AssemblyAI does not offer voice cloning features. It specializes in transcription and speech recognition for audio and video files.",
                },
                {
                  q: "What are the pricing plans for AssemblyAI?",
                  a: "AssemblyAI offers a range of pricing plans, including pay-as-you-go options and subscription-based plans, depending on the features and volume of transcription required.",
                },
                {
                  q: "Can AssemblyAI handle multiple languages?",
                  a: "Yes, AssemblyAI supports transcription in multiple languages, allowing for global usage in various industries.",
                },
                {
                  q: "Is AssemblyAI suitable for content creators?",
                  a: "Yes, AssemblyAI is ideal for content creators such as podcasters, YouTubers, and vloggers who need accurate and fast transcription services for their content.",
                },
                {
                  q: "Does AssemblyAI support real-time transcription?",
                  a: "Yes, AssemblyAI offers real-time transcription services, making it perfect for live events, webinars, and customer service applications.",
                },
                {
                  q: "How does AssemblyAI compare to other transcription services?",
                  a: "AssemblyAI stands out with its high accuracy, fast processing speed, and customization options, including speaker identification and custom vocabulary models for industry-specific needs.",
                },
                {
                  q: "Can I integrate AssemblyAI with my business applications?",
                  a: "Yes, AssemblyAI provides a robust API that allows seamless integration with your business applications, enabling speech recognition and transcription features.",
                },
                {
                  q: "How do I get started with AssemblyAI?",
                  a: "To get started, sign up for an account on the AssemblyAI website, explore the available pricing plans, and integrate the API into your system to begin using its speech recognition and transcription services.",
                },
                {
                  q: "Can AssemblyAI transcribe podcasts?",
                  a: "Yes, AssemblyAI is widely used for podcast transcription, providing accurate and searchable transcripts for episodes.",
                },
                {
                  q: "Does AssemblyAI offer live captioning?",
                  a: "Yes, AssemblyAI supports live captioning for events, webinars, and broadcasts, offering real-time transcription and caption generation.",
                },
                {
                  q: "How can I use AssemblyAI for voice analytics?",
                  a: "AssemblyAI can be used to analyze transcribed text and speech patterns, providing valuable insights for customer feedback, sentiment analysis, and engagement tracking.",
                },
                {
                  q: "Can AssemblyAI identify different speakers in audio?",
                  a: "Yes, AssemblyAI has speaker diarization capabilities, which help it identify and distinguish between different speakers in audio files.",
                },
                {
                  q: "Does AssemblyAI support audio-to-text conversion?",
                  a: "Yes, AssemblyAI specializes in converting audio into text, providing quick and accurate transcription for various applications.",
                },
                {
                  q: "How accurate is AssemblyAI for legal transcription?",
                  a: "AssemblyAI is highly accurate for legal transcription, capable of handling specialized terminology and complex vocabulary commonly used in legal proceedings.",
                },
                {
                  q: "Can AssemblyAI handle customer service calls?",
                  a: "Yes, AssemblyAI is suitable for transcribing customer service calls, enabling businesses to gain insights into customer interactions.",
                },
                {
                  q: "Can AssemblyAI be used for conference call transcription?",
                  a: "Yes, AssemblyAI works well for transcribing conference calls, meetings, and interviews, providing accurate transcriptions and speaker identification.",
                },
                {
                  q: "Does AssemblyAI offer customizable transcription models?",
                  a: "Yes, AssemblyAI allows users to create custom transcription models to improve accuracy for specialized industries like healthcare, finance, and legal.",
                },
                {
                  q: "How does AssemblyAI handle accents?",
                  a: "AssemblyAI can accurately transcribe audio with various regional accents, making it effective for a global user base.",
                },
                {
                  q: "Can I use AssemblyAI for transcription in noisy environments?",
                  a: "Yes, AssemblyAI is designed to work effectively in noisy environments, making it an ideal solution for challenging audio scenarios.",
                },
                {
                  q: "What file formats does AssemblyAI support?",
                  a: "AssemblyAI supports popular audio and video formats such as MP3, WAV, MP4, and FLAC, ensuring compatibility with a wide range of media sources.",
                },
                {
                  q: "Can I use AssemblyAI for video transcription?",
                  a: "Yes, AssemblyAI can transcribe video content, generating accurate text for subtitles, captions, and transcription.",
                },
                {
                  q: "Does AssemblyAI support transcription of audio recordings?",
                  a: "Yes, AssemblyAI supports transcription for both live and pre-recorded audio, including phone calls, meetings, podcasts, and other recordings.",
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
                    High Accuracy: Provides one of the most accurate
                    speech-to-text services available, ensuring precise
                    transcriptions even with complex audio.
                  </li>
                  <li className="mb-2">
                    Real-Time Transcription: Supports live transcription of
                    webinars, podcasts, meetings, and customer calls, making it
                    perfect for time-sensitive content.
                  </li>
                  <li className="mb-2">
                    Multilingual Support: AssemblyAI supports transcription in
                    multiple languages, making it a great solution for global
                    businesses and multilingual content creators.
                  </li>
                  <li className="mb-2">
                    Customizable Models: Allows the creation of custom
                    transcription models tailored to specific industries, like
                    legal, medical, or customer service, ensuring better
                    accuracy.
                  </li>
                  <li className="mb-2">
                    Fast Processing: Quickly converts audio into text in
                    real-time, providing fast access to transcriptions for
                    efficient workflow integration.
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
                    Pricing: While AssemblyAI offers powerful features, its
                    pricing can be on the higher side for smaller businesses,
                    especially as usage scales up.
                  </li>
                  <li className="mb-2">
                    Learning Curve: Setting up custom models and integrations
                    might require some technical knowledge, which can be
                    challenging for non-technical users.
                  </li>
                  <li className="mb-2">
                    Limited Features in Free Plans: Some advanced features are
                    only available in paid plans, which might restrict
                    functionality for users on the free plan.
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
                      platform from Google that offers transcription, speaker
                      diarization, and multilingual support, ideal for
                      large-scale transcription projects.
                    </li>
                    <li className="mb-2">
                      Amazon Transcribe: Amazon’s speech-to-text service
                      providing real-time transcription, speaker identification,
                      and custom vocabulary support, suitable for businesses
                      with specific needs.
                    </li>
                    <li className="mb-2">
                      IBM Watson Speech to Text: A highly accurate
                      speech-to-text service from IBM, perfect for real-time
                      transcription and business analytics, offering
                      customizable features for enterprise use.
                    </li>
                    <li className="mb-2">
                      Sonix.ai: An AI-powered transcription service that
                      supports over 30 languages, offering transcription,
                      translation, and editing tools, making it a good option
                      for multilingual transcription.
                    </li>
                    <li className="mb-2">
                      Rev.com: Provides both AI-generated and human-edited
                      transcriptions, ensuring higher accuracy and suitability
                      for a wide range of professional uses, including legal and
                      medical.
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
          <div className="row align-items-center justify-content-between mb-4">
            {/* Left Side - Text Section */}
            <div className="col-md-6 col-12 mb-3 mb-md-0 pe-md-4  order-2 order-md-1 ">
              <p className="text-primary mb-1">Write better, faster</p>
              <h1 className="h3">AssemblyAI</h1>
              <div className="text-warning mb-2">⭐⭐⭐⭐⭐</div>
              <p>
                AssemblyAI offers enterprise-grade transcription and audio
                analysis through a simple API. Built with developers in mind, it
                supports real-time streaming, batch transcription, speaker
                labeling, and multiple language models optimized for accuracy.
              </p>

              {/* <div className="mb-3">
                <span className="badge bg-primary me-2">Image Generation</span>
                <span className="badge bg-success me-2">Creative</span>
                <span className="badge bg-warning text-dark">Paid</span>
              </div> */}
              <div className="mb-3">
                <a
                  href=" https://www.assemblyai.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-2"
                >
                  Explore Tool
                </a>
              </div>
            </div>

            {/* Right Side - Image Section */}
            <div className="col-md-6 col-12   order-1 order-md-2  text-center">
              <img
                src="data:image/png;base64,iVBORw0K..." // shortened for readability
                className="img-fluid"
                alt="AssemblyAI"
                style={{ maxHeight: "300px", objectFit: "contain" }}
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
                How To Use AssemblyAI
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
                      Sign Up and Get API Key
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      First, create an account on the AssemblyAI website. Once
                      you're registered, you can access your unique API key from
                      the dashboard. This API key will be used to authenticate
                      your requests when interacting with the API.
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
                      Upload Audio or Video File
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      After getting your API key, the next step is to upload
                      your audio or video file. You can do this by using the
                      AssemblyAI API, or you can link to a file hosted
                      elsewhere. The API allows you to send the file for
                      transcription.
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
                      Transcribe Audio/Video and Retrieve Results
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Once your file is uploaded, use the API to request a
                      transcription of the audio or video content. AssemblyAI
                      will process the file and return a transcription in text
                      format. You can also receive additional metadata, such as
                      timestamps or speaker identification, depending on the
                      options you choose.
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
            <h4 className="mb-3">Ready to get started with AssemblyAI?</h4>
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

export default AssemblyAI;
