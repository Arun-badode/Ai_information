import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import speechify from "../../../../public/assets/Img/Ai for Music/8.png";
import screen1 from "../../../../public/assets/Img/Ai for Music/speechify-sctreenshot1.jpg";
import screen2 from "../../../../public/assets/Img/Ai for Music/speechifySS2.png";


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
const SpeechifyAI = () => {
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
              {
                icon: "🛠",
                title: "Customization:",
                desc: "Create custom voices and improve transcription accuracy with Speechify's customizable models, perfect for industries like healthcare, legal, and financial.",
              },
              {
                icon: "📊",
                title: "Sentiment Analysis:",
                desc: "Speechify's sentiment analysis feature helps businesses understand the emotional tone of transcribed content, valuable for customer feedback, social media monitoring, and more.",
              },
              {
                icon: "💡",
                title: "Summarization:",
                desc: "Speechify offers summarization of long-form content, extracting key points and creating concise summaries for quick understanding and analysis.",
              },
              {
                icon: "📑",
                title: "Keyword Extraction:",
                desc: "The platform includes keyword extraction capabilities, helping users identify key phrases and terms within transcribed content for search optimization and analysis.",
              },
              {
                icon: "💬",
                title: "Automated Captions & Subtitles:",
                desc: "Speechify can automatically generate captions and subtitles for videos, making your content more accessible and searchable on various platforms.",
              },
              {
                icon: "🔒",
                title: "Data Security:",
                desc: "Speechify prioritizes security with robust encryption and compliance with GDPR, ensuring that all data and transcriptions are securely handled.",
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
                    Why Use Speechify AI?
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
                        High Accuracy: Speechify AI offers exceptional accuracy
                        in text-to-speech and transcription, ensuring natural,
                        clear, and reliable results, even in complex
                        environments.
                      </li>
                      <li className="mb-3">
                        Real-Time Transcription: Speechify AI provides real-time
                        transcription, making it perfect for live events,
                        webinars, meetings, podcasts, and other time-sensitive
                        applications.
                      </li>
                      <li className="mb-3">
                        Multilingual Support: Speechify AI supports over 60
                        languages and various accents, making it an ideal tool
                        for global businesses and multilingual content creators.
                      </li>
                      <li className="mb-3">
                        Customization: With Speechify AI, you can customize
                        voice options, speech speed, pitch, and tone to suit
                        your specific needs, whether for education, customer
                        support, or content creation.
                      </li>
                      <li className="mb-3">
                        Scalable: Speechify AI is scalable for businesses of all
                        sizes, from small startups to large enterprises,
                        offering flexible pricing and robust functionality for
                        any use case.
                      </li>
                      <li className="mb-3">
                        Integrations: Speechify AI seamlessly integrates into
                        your existing business systems using its API, enabling
                        smooth workflows and enhancing productivity across
                        platforms.
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
      case "FAQs":
        return (
          <div className="faq-section container py-5">
            <h3 className="text-center text-white mb-5 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is Speechify AI?",
                  a: "Speechify is an AI-powered text-to-speech platform that converts written content into natural-sounding audio. It supports real-time transcription, multilingual voices, and high-quality text-to-speech conversion.",
                },
                {
                  q: "How does Speechify AI work?",
                  a: "Speechify uses advanced AI models to process text and convert it into high-quality, lifelike speech. It offers customization options such as pitch, speed, and voice selection, making it versatile for various applications.",
                },
                {
                  q: "How accurate is Speechify AI’s transcription?",
                  a: "Speechify AI offers highly accurate transcription, especially for clear text and standard language. It also handles different accents, making it suitable for a wide range of global users.",
                },
                {
                  q: "Can I clone my own voice with Speechify AI?",
                  a: "Yes, Speechify AI offers voice cloning features, allowing you to create a personalized voice model by recording a brief sample.",
                },
                {
                  q: "What are the pricing plans for Speechify AI?",
                  a: "Speechify AI offers various pricing plans, including pay-as-you-go and subscription-based options. Pricing depends on the volume of usage, the features you require, and the frequency of usage.",
                },
                {
                  q: "Can Speechify AI handle multiple languages?",
                  a: "Yes, Speechify AI supports transcription and text-to-speech in multiple languages, making it ideal for global businesses and content creators.",
                },
                {
                  q: "Is Speechify AI suitable for content creators?",
                  a: "Yes, Speechify AI is perfect for content creators, such as podcasters, YouTubers, and bloggers, who need fast and accurate transcription and text-to-speech services for their content.",
                },
                {
                  q: "Does Speechify AI support real-time transcription?",
                  a: "Yes, Speechify AI offers real-time transcription for live events, webinars, podcasts, and meetings, ensuring quick and accurate results.",
                },
                {
                  q: "How does Speechify AI compare to other text-to-speech services?",
                  a: "Speechify AI stands out with its lifelike voices, customization options, and multilingual support. It also offers a user-friendly API for integration and personalized voice cloning capabilities.",
                },
                {
                  q: "Can I integrate Speechify AI with my business applications?",
                  a: "Yes, Speechify AI provides a robust API for seamless integration with your business applications, enabling text-to-speech and transcription features.",
                },
                {
                  q: "How do I get started with Speechify AI?",
                  a: "To get started, sign up for an account on the Speechify website, choose a pricing plan, and begin using its transcription and text-to-speech features.",
                },
                {
                  q: "Can Speechify AI transcribe podcasts?",
                  a: "Yes, Speechify AI is widely used for podcast transcription, providing accurate and searchable transcripts for podcast episodes.",
                },
                {
                  q: "Does Speechify AI offer live captioning?",
                  a: "Yes, Speechify AI supports live captioning for events, webinars, and broadcasts, providing real-time transcription and caption generation.",
                },
                {
                  q: "How can I use Speechify AI for voice analytics?",
                  a: "Speechify AI can be used to analyze transcribed text and speech patterns, providing valuable insights into customer feedback, sentiment, and engagement.",
                },
                {
                  q: "Can Speechify AI identify different speakers in audio?",
                  a: "Yes, Speechify AI offers speaker identification features, making it easy to distinguish between multiple speakers in your audio recordings.",
                },
                {
                  q: "Does Speechify AI support audio-to-text conversion?",
                  a: "Yes, Speechify AI excels at converting audio into text, providing quick and accurate transcription for various applications.",
                },
                {
                  q: "How accurate is Speechify AI for legal transcription?",
                  a: "Speechify AI offers high accuracy for legal transcription, with the ability to handle specialized terminology and complex vocabulary commonly used in legal proceedings.",
                },
                {
                  q: "Can Speechify AI handle customer service calls?",
                  a: "Yes, Speechify AI can transcribe customer service calls, allowing businesses to gain insights into customer interactions and improve service quality.",
                },
                {
                  q: "Can Speechify AI be used for conference call transcription?",
                  a: "Yes, Speechify AI works well for transcribing conference calls, meetings, and interviews, offering accurate transcriptions with speaker identification.",
                },
                {
                  q: "Does Speechify AI offer customizable transcription models?",
                  a: "Yes, Speechify AI allows users to create custom transcription models to improve accuracy for specialized industries like healthcare, finance, and legal.",
                },
                {
                  q: "How does Speechify AI handle accents?",
                  a: "Speechify AI is designed to accurately transcribe audio with various regional accents, making it effective for a global user base.",
                },
                {
                  q: "Can I use Speechify AI for transcription in noisy environments?",
                  a: "Yes, Speechify AI is built to work effectively in noisy environments, making it ideal for challenging audio scenarios.",
                },
                {
                  q: "What file formats does Speechify AI support?",
                  a: "Speechify AI supports a wide range of audio and video file formats, including MP3, WAV, MP4, and FLAC, ensuring compatibility with most media sources.",
                },
                {
                  q: "Can I use Speechify AI for video transcription?",
                  a: "Yes, Speechify AI can transcribe video content, providing accurate text for subtitles, captions, and transcriptions.",
                },
                {
                  q: "Does Speechify AI support transcription of audio recordings?",
                  a: "Yes, Speechify AI supports transcription for both live and pre-recorded audio, including phone calls, meetings, podcasts, and other recordings.",
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
                alt="speechify"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={screen2}
                alt="speechify"
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
                    High Accuracy: Speechify AI delivers one of the most
                    accurate text-to-speech and transcription services, ensuring
                    clear, precise results even with complex content or diverse
                    accents.
                  </li>
                  <li className="mb-2">
                    Real-Time Transcription: Speechify AI supports live
                    transcription for webinars, podcasts, meetings, and customer
                    calls, making it ideal for fast-paced, time-sensitive
                    content.
                  </li>
                  <li className="mb-2">
                    Multilingual Support: Speechify AI provides transcription
                    and text-to-speech services in multiple languages, making it
                    a perfect solution for global businesses and multilingual
                    audiences.
                  </li>
                  <li className="mb-2">
                    Customizable Voices: With Speechify AI, you can adjust the
                    speech tone, pitch, and speed, or even create custom voice
                    models, offering flexibility for various industries and use
                    cases.
                  </li>
                  <li className="mb-2">
                    Fast Processing: Speechify AI quickly converts text into
                    high-quality, lifelike speech, ensuring efficient workflows
                    and rapid content production for users in diverse sectors.
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
                    Pricing: While Speechify AI offers a wide range of powerful
                    features, its pricing might be a bit high for smaller
                    businesses, especially as usage increases.
                  </li>
                  <li className="mb-2">
                    Learning Curve: Setting up and customizing some features may
                    require technical knowledge, which could be challenging for
                    users without a technical background.
                  </li>
                  <li className="mb-2">
                    Limited Features in Free Plans: Some advanced
                    functionalities, such as custom voice creation and enhanced
                    transcription models, are only available in the paid plans.
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
                      Google Cloud Text-to-Speech: A comprehensive speech
                      synthesis platform from Google that offers lifelike
                      voices, supports multiple languages, and is suitable for
                      large-scale applications, especially in enterprise
                      environments.
                    </li>
                    <li className="mb-2">
                      Amazon Polly: Amazon’s AI-driven text-to-speech service
                      that provides high-quality, natural-sounding voices, along
                      with customization options for speech, making it ideal for
                      a variety of industries and use cases.
                    </li>
                    <li className="mb-2">
                      IBM Watson Text to Speech: A highly accurate AI-powered
                      speech synthesis tool from IBM, perfect for creating
                      realistic, lifelike audio from text with customization
                      options, widely used in customer support and e-learning.
                    </li>
                    <li className="mb-2">
                      ResponsiveVoice: An AI-based text-to-speech solution
                      offering a wide range of voices and language support,
                      suitable for web applications, e-learning, and mobile
                      platforms.
                    </li>
                    <li className="mb-2">
                      iSpeech: A cloud-based text-to-speech platform offering
                      high-quality audio and advanced customization options,
                      ideal for applications ranging from content creation to
                      voice-driven interfaces.
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
          <i className="bi bi-arrow-left me-2"></i>Back  {" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-between mb-1">
            {/* Right side (Image Section) */}
            <div
              className="col-12 col-md-6 mb-5 text-center order-1 order-md-2"
              style={{ height: "250px" }}
            >
              <img
                src={speechify}
                alt="Speechify AI Illustration"
                style={{ maxWidth: "100%", height: "300px" }}
              />
            </div>

            {/* Left side (Text Section) */}
            <div
              className="col-12 col-md-6 order-2 order-md-1"
              style={{ paddingRight: "30px" }}
            >
              <p className="text-primary">Write better, faster</p>
              <h1>Speechify AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Speechify uses cutting-edge speech synthesis and voice cloning
                technology to provide human-like narration for any kind of text.
                With support for multiple platforms, languages, and use cases,
                it’s ideal for students, professionals, and users with reading
                disabilities.
              </p>
              <div className="mb-3">
                <a
                  href="https://speechify.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-2"
                >
                  Explore Tool
                </a>
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
                How To Use Speechify AI
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
                      Choose a Platform
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Access Speechify on its web app, mobile app (iOS and
                      Android), or use the Chrome extension for seamless
                      reading.
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
                      Input Your Content
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Upload your documents (PDF, Word, eBooks), paste text
                      directly, or use the Chrome extension to highlight and
                      read text on websites.
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
                      Customize the Experience
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Choose from various voices, adjust reading speed and
                      pitch, and use the offline mode for MP3 downloads to
                      listen anywhere.
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
        </div>
      </div>
    </>
  );
};

export default SpeechifyAI;
