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
const PlayHiAI = () => {
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
                icon: "🎤",
                title: "Text-to-Speech (TTS) Technology:",
                desc: "Converts written text into lifelike speech with customizable voices.",
              },
              {
                icon: "🗣",
                title: "Voice Cloning:",
                desc: "Allows users to upload audio samples and clone voices for personalized use.",
              },
              {
                icon: "🌍",
                title: "Multilingual Support:",
                desc: "Supports over 30 languages, ideal for global content creation.",
              },
              {
                icon: "🎧",
                title: "Customizable Voices:",
                desc: "Users can adjust pitch, tone, speed, and emotional expression of the generated voices.",
              },
              {
                icon: "🎬",
                title: "AI Dubbing:",
                desc: "Dubs content in multiple languages, preserving original tone and emotion.",
              },
              {
                icon: "🎥",
                title: "Voiceover Tool:",
                desc: "Generate voiceovers for podcasts, videos, advertisements, and more.",
              },
              {
                icon: "🎧",
                title: "Speech Synthesis:",
                desc: "AI-driven speech generation that sounds natural and human-like.",
              },
              {
                icon: "🎙",
                title: "Voice AI Integration:",
                desc: "Easily integrates into apps, websites, or customer service platforms.",
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
                    Why Use Play.ht?
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
                        High-Quality Voice Generation: Play.ht produces some of
                        the most natural-sounding voices, making it ideal for
                        projects that require professional-grade audio.
                      </li>
                      <li className="mb-3">
                        Customization Options: Offers full control over voice
                        customization, including pitch, tone, and emotional
                        expression, allowing users to create voices that fit
                        their specific needs.
                      </li>
                      <li className="mb-3">
                        Scalable Solution: Whether you're an individual creator
                        or a business, Play.ht can scale to fit your needs with
                        flexible pricing plans.
                      </li>
                      <li className="mb-3">
                        Multilingual: Supports multiple languages, making it
                        suitable for international content creation and
                        localization.
                      </li>
                      <li className="mb-3">
                        Easy Integration: With API and SDK access, Play.ht can
                        be easily integrated into various apps, websites, and
                        platforms for voice AI functionality.
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
                  q: "What is Play.ht?",
                  a: "Play.ht is an AI-powered text-to-speech (TTS) and voice cloning platform that enables users to generate natural-sounding voices for a variety of applications such as podcasts, videos, audiobooks, and customer service.",
                },
                {
                  q: "How does Play.ht voice cloning work?",
                  a: "Play.ht clones voices by analyzing a short audio sample and then generating a digital replica of that voice, which can be used for future speech synthesis.",
                },
                {
                  q: "Is Play.ht suitable for content creators?",
                  a: "Yes, Play.ht is ideal for podcasters, YouTubers, and audiobook creators who need high-quality, realistic voiceovers for their content.",
                },
                {
                  q: "What pricing plans does Play.ht offer?",
                  a: "Play.ht offers various pricing plans based on the features and usage volume. It includes a free trial and paid subscription options.",
                },
                {
                  q: "How does Play.ht generate text-to-speech?",
                  a: "Play.ht uses deep learning models to convert written text into lifelike speech with customizable features like pitch, speed, tone, and emotion.",
                },
                {
                  q: "Can I use Play.ht for podcasts?",
                  a: "Yes, Play.ht is great for generating professional voiceovers for podcasts, offering high-quality voices with multiple customization options.",
                },
                {
                  q: "Does Play.ht support multiple languages?",
                  a: "Yes, Play.ht supports over 30 languages, making it ideal for global content creators.",
                },
                {
                  q: "How long does it take to clone a voice on Play.ht?",
                  a: "Voice cloning typically takes from a few minutes to a couple of hours depending on the quality of the provided audio sample.",
                },
                {
                  q: "How do I create a custom voice on Play.ht?",
                  a: "To create a custom voice, you upload an audio sample of the voice you wish to clone, and Play.ht’s AI will process it to create a voice model.",
                },
                {
                  q: "Can Play.ht generate voices for customer service applications?",
                  a: "Yes, Play.ht can be used to create virtual assistants and automate customer service responses.",
                },
                {
                  q: "What file formats does Play.ht support for audio output?",
                  a: "Play.ht supports common audio formats such as MP3, WAV, and OGG for generated voices.",
                },
                {
                  q: "Does Play.ht offer a free trial?",
                  a: "Yes, Play.ht offers a free trial with limited features to help users explore its capabilities before subscribing to a plan.",
                },
                {
                  q: "Can Play.ht generate voices in real-time?",
                  a: "Yes, Play.ht offers real-time voice synthesis, making it suitable for live interactions like customer support or virtual assistants.",
                },
                {
                  q: "Can Play.ht create voices for video games?",
                  a: "Yes, Play.ht is perfect for generating character voices, dialogues, and narrations for video games.",
                },
                {
                  q: "Can I customize the voice speed and pitch in Play.ht?",
                  a: "Yes, Play.ht allows you to adjust the speed, pitch, and tone of the voices to suit your content needs.",
                },
                {
                  q: "Does Play.ht offer integration with other software?",
                  a: "Yes, Play.ht provides API and SDK integration, allowing you to easily add its voice AI capabilities to your website, app, or platform.",
                },
                {
                  q: "Is Play.ht suitable for audiobooks?",
                  a: "Yes, Play.ht is widely used for generating voiceovers for audiobooks, offering clear and engaging narration.",
                },
                {
                  q: "Can Play.ht handle complex pronunciations and jargon?",
                  a: "Yes, Play.ht’s TTS technology handles complex pronunciations, technical terms, and specific names with high accuracy.",
                },
                {
                  q: "How does Play.ht ensure the ethical use of voice cloning?",
                  a: "Play.ht follows ethical guidelines, including verifying user identity, to prevent the misuse of cloned voices for deepfakes or impersonations.",
                },
                {
                  q: "Can I use Play.ht for video narration?",
                  a: "Yes, Play.ht is ideal for creating voiceovers and narration for videos, making it a powerful tool for content creators.",
                },
                {
                  q: "How secure is my data on Play.ht?",
                  a: "Play.ht uses encryption and secure storage for user data, including audio samples and generated voices, to protect your privacy.",
                },
                {
                  q: "Can I create multiple voices for a single project on Play.ht?",
                  a: "Yes, you can create multiple voices by uploading different audio samples for cloning or using various voice presets provided by Play.ht.",
                },
                {
                  q: "Can Play.ht generate voices in multiple accents?",
                  a: "Yes, Play.ht offers various accents and dialects to suit the tone and style of your content, whether regional or international.",
                },
                {
                  q: "How do I get started with Play.ht?",
                  a: "Simply sign up for an account on Play.ht, upload your text or audio samples, and begin generating voices with the available features.",
                },
                {
                  q: "What types of voices can Play.ht generate?",
                  a: "Play.ht generates both male and female voices, with a variety of accents, tones, and emotional expressions to match your content.",
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
                src=""
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
                    Realistic Voice Quality: Play.ht provides lifelike voices
                    that are expressive and natural-sounding.
                  </li>
                  <li className="mb-2">
                    Customizable: Users can tailor voices to their project’s
                    specific needs, adjusting parameters like speed, tone, and
                    emotional expression.
                  </li>
                  <li className="mb-2">
                    Multilingual Support: The platform supports more than 30
                    languages, catering to a global audience.
                  </li>
                  <li className="mb-2">
                    Fast and Scalable: Play.ht generates voiceovers quickly,
                    making it ideal for large-scale projects or time-sensitive
                    content.
                  </li>
                  <li className="mb-2">
                    Cloud-Based: As a cloud service, Play.ht is accessible from
                    anywhere and eliminates the need for expensive software or
                    hardware.
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
                    Pricing: Play.ht can be expensive for individual users or
                    small-scale projects, especially for advanced features like
                    voice cloning and multilingual support.
                  </li>
                  <li className="mb-2">
                    Voice Cloning Limitations: High-quality voice cloning
                    requires clean, high-quality audio samples, which can be a
                    limitation for some users.
                  </li>
                  <li className="mb-2">
                    Ethical Concerns: Voice cloning technology can raise ethical
                    concerns, such as potential misuse for deepfakes or
                    impersonation.
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
                      Murf.ai: Offers similar text-to-speech and voice cloning
                      capabilities with customization options for content
                      creators and businesses.
                    </li>
                    <li className="mb-2">
                      Resemble.ai: Provides advanced voice cloning and TTS with
                      multilingual support and deep customization for diverse
                      use cases.
                    </li>
                    <li className="mb-2">
                      Speechelo: A text-to-speech software designed for content
                      creators that offers various voice types and accents.
                    </li>
                    <li className="mb-2">
                      Descript Overdub: Specializes in voice cloning, offering
                      TTS and editing tools for audio and video creators.
                    </li>
                    <li className="mb-2">
                      iSpeech: A simpler TTS provider focused on generating
                      voices with basic functionality for businesses.
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
          <div className="row align-items-center mb-4">
            {/* Image Section - mobile me pehle dikhaye, desktop me right side */}
            <div className="col-12 col-md-6 order-1 order-md-2 text-center mb-3 mb-md-0">
              <img
                src="https://play.ht/_next/static/media/dashboard_img.2d2eb95b.png" // Image link, customize kar sakte ho
                alt="Play.ht AI"
                className="img-fluid"
                style={{ maxHeight: "300px", objectFit: "contain" }}
              />
            </div>

            {/* Text Section - mobile me baad me, desktop me left side */}
            <div className="col-12 col-md-6 order-2 order-md-1">
              <p className="text-primary">Write better, faster</p>
              <h1>Play.ht</h1>
              <div className="text-warning mb-2">⭐⭐⭐⭐⭐</div>
              <p>
                Play.ht is an advanced AI-powered text-to-speech (TTS) and voice
                cloning platform that enables users to generate high-quality,
                realistic voices. Play.ht uses state-of-the-art AI and machine
                learning models to convert text into natural-sounding speech in
                various languages, with customization options for tone, pitch,
                and speed. It also offers features like voice cloning, dubbing,
                and voice synthesis, making it an essential tool for content
                creators, businesses, and media production.
              </p>
              <a
                href="https://play.ht/"
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
                How To Use Play.ht
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
                      Content Creators
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Podcasters, YouTubers, and audiobook creators use Play.ht
                      to generate high-quality, natural-sounding voiceovers
                      quickly and efficiently.
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
                      Media Production
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Play.ht is used by filmmakers, advertisers, and content
                      producers for dubbing, narration, and voiceovers in films,
                      commercials, and videos.
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
                      Customer Service
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Play.ht powers virtual assistants and automated customer
                      service systems, offering natural and responsive AI-driven
                      voices.
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

          {/* <div className="bg-primary text-center text-light rounded-4 p-5 mt-5">
            <h4 className="mb-3">Ready to get started with PlayHiAI?</h4>
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

export default PlayHiAI;
