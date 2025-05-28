import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import wellsaid from "../../../../public/assets/Img/Ai for Music/5.png";
import screen1 from "../../../../public/assets/Img/Ai for Music/wellsaid-screenshot1.jpg";
import screen2 from "../../../../public/assets/Img/Ai for Music/wellsaid-screenshot2.jpg";
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
const WallsaidAI = () => {
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
                title: "AI-Generated Voices:",
                desc: "Generates lifelike, natural-sounding voices using deep learning models.",
              },
              {
                icon: "🗣",
                title: "Voice Cloning:",
                desc: "Allows users to clone voices from audio samples to create custom voices for various applications.",
              },
              {
                icon: "🎤",
                title: "Voice Customization:",
                desc: "Offers flexibility in adjusting pitch, tone, speed, and emotional expression.",
              },
              {
                icon: "🌍",
                title: "Multilingual Support:",
                desc: "WellSaid Labs supports multiple languages and accents, enabling voiceovers for global audiences.",
              },
              {
                icon: "🎧",
                title: "Real-Time Voiceover Generation:",
                desc: "Instantly generate voiceovers for live events, podcasts, or video narrations.",
              },
              {
                icon: "🎥",
                title: "Integration with Media Production:",
                desc: "Easily integrates into media production pipelines, making voiceover generation seamless for video editing, gaming, and more.",
              },
              {
                icon: "🔌",
                title: "API Integration:",
                desc: "Provides an API to integrate voice generation into apps, websites, and other digital platforms.",
              },
              {
                icon: "💼",
                title: "Voice AI for Businesses:",
                desc: "Includes voice solutions tailored for customer service, virtual assistants, and e-learning content.",
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
                    Why Use WellSaid Labs?
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
                        High-Quality, Lifelike Voices: WellSaid Labs uses deep
                        learning to create voices that sound incredibly natural,
                        making it perfect for professional content creation.
                      </li>
                      <li className="mb-3">
                        Customizable Voices: The platform allows for full
                        customization of voices, including tone, pitch, speed,
                        and emotional expression, to match your specific needs.
                      </li>
                      <li className="mb-3">
                        Cost and Time Efficient: Eliminates the need for
                        professional voice actors, saving both time and money in
                        content creation.
                      </li>
                      <li className="mb-3">
                        Multilingual Support: Supports over 30 languages and
                        regional accents, allowing you to create content for
                        global audiences.
                      </li>
                      <li className="mb-3">
                        Integration-Friendly: The API integration allows easy
                        incorporation into existing systems, making it a
                        scalable solution for businesses.
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
                  q: "What is WellSaid Labs?",
                  a: "WellSaid Labs is an AI-powered text-to-speech (TTS) and voice cloning platform that provides high-quality, realistic voiceovers for content creators, businesses, marketers, and developers.",
                },
                {
                  q: "How does WellSaid Labs work?",
                  a: "WellSaid Labs uses advanced deep learning models to create lifelike, human-like voices by analyzing and cloning audio samples. These voices can be used to generate voiceovers from text.",
                },
                {
                  q: "Can I clone my own voice with WellSaid Labs?",
                  a: "Yes, you can upload a high-quality audio sample, and WellSaid Labs will create a cloned voice based on that sample.",
                },
                {
                  q: "How much does WellSaid Labs cost?",
                  a: "WellSaid Labs offers various pricing plans, including a free trial. Paid plans vary based on features such as voice cloning, multilingual support, and high-volume usage.",
                },
                {
                  q: "Is WellSaid Labs suitable for content creators?",
                  a: "Yes, WellSaid Labs is ideal for podcasters, YouTubers, audiobook narrators, and other content creators who need high-quality voiceovers.",
                },
                {
                  q: "How accurate is WellSaid Labs’ voice cloning?",
                  a: "WellSaid Labs provides highly accurate voice cloning, with the quality depending on the clarity and quality of the audio sample you provide.",
                },
                {
                  q: "Does WellSaid Labs support multiple languages?",
                  a: "Yes, WellSaid Labs supports over 30 languages, making it ideal for global content creation and multilingual voiceover projects.",
                },
                {
                  q: "Can I use WellSaid Labs for voiceovers in podcasts?",
                  a: "Yes, WellSaid Labs is widely used by podcasters to generate professional-quality voiceovers for their episodes.",
                },
                {
                  q: "How long does it take to clone a voice on WellSaid Labs?",
                  a: "Voice cloning typically takes a few minutes to a couple of hours depending on the audio sample's quality and complexity.",
                },
                {
                  q: "Does WellSaid Labs offer a free trial?",
                  a: "Yes, WellSaid Labs offers a free trial with limited features, allowing users to test the platform before committing to a paid plan.",
                },
                {
                  q: "Can WellSaid Labs create voiceovers for videos?",
                  a: "Yes, WellSaid Labs is perfect for generating voiceovers for video scripts, providing professional narration for various types of videos.",
                },
                {
                  q: "How do I get started with WellSaid Labs?",
                  a: "Simply sign up on the WellSaid Labs platform, upload your audio sample to clone your voice, and start generating voiceovers by entering text.",
                },
                {
                  q: "Can WellSaid Labs generate real-time voiceovers?",
                  a: "Yes, WellSaid Labs can generate voiceovers in real-time, making it suitable for live events and interactive sessions.",
                },
                {
                  q: "Can I adjust the tone and pitch of the generated voices?",
                  a: "Yes, WellSaid Labs allows full customization of voice parameters, including pitch, tone, speed, and emotional expression.",
                },
                {
                  q: "Can I use WellSaid Labs for video game voiceovers?",
                  a: "Yes, WellSaid Labs is ideal for video game developers to create character voices, in-game dialogue, and narration.",
                },
                {
                  q: "Does WellSaid Labs provide an API?",
                  a: "Yes, WellSaid Labs offers an API for developers to integrate its TTS and voice cloning capabilities into other applications or platforms.",
                },
                {
                  q: "How does WellSaid Labs ensure voice data privacy?",
                  a: "WellSaid Labs uses encrypted storage and secure access protocols to ensure the privacy and safety of user data, including audio samples and generated voices.",
                },
                {
                  q: "Can I create voices with different accents using WellSaid Labs?",
                  a: "Yes, WellSaid Labs offers various accents and regional dialects to suit different linguistic and cultural needs.",
                },
                {
                  q: "Can WellSaid Labs be used for customer service applications?",
                  a: "Yes, WellSaid Labs can be integrated into virtual assistants and customer support systems, providing natural-sounding responses for automated services.",
                },
                {
                  q: "How does WellSaid Labs compare to other voice cloning tools?",
                  a: "WellSaid Labs offers highly realistic voices, advanced AI technology, and customizable voice parameters, making it a leading solution for TTS and voice cloning.",
                },
                {
                  q: "Does WellSaid Labs offer editing features for generated voices?",
                  a: "Yes, WellSaid Labs offers basic editing tools to modify and refine generated voiceovers, such as adjusting timing or removing unwanted pauses.",
                },
                {
                  q: "Can I use WellSaid Labs for creating virtual assistants?",
                  a: "Yes, WellSaid Labs is ideal for generating lifelike voices for virtual assistants, providing an engaging and human-like user experience.",
                },
                {
                  q: "Can WellSaid Labs be used for creating voiceovers in multiple languages?",
                  a: "Yes, WellSaid Labs supports multiple languages, making it suitable for creating multilingual voiceovers for global content.",
                },
                {
                  q: "How do I upload an audio sample to clone my voice?",
                  a: "To upload an audio sample, sign up for an account on WellSaid Labs, navigate to the voice cloning section, and upload a clean, high-quality audio sample.",
                },
                {
                  q: "Can WellSaid Labs create voiceovers for TV commercials?",
                  a: "Yes, WellSaid Labs is perfect for creating voiceovers for TV ads, radio spots, and other marketing materials.",
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
                alt="wallsaid"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={screen2}
                alt="wallsaid"
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
                    Realistic and Natural Voices: The generated voices are
                    clear, human-like, and expressive, ensuring a high-quality
                    listening experience.
                  </li>
                  <li className="mb-2">
                    Easy to Use: WellSaid Labs offers an intuitive platform that
                    is easy to navigate, even for users without technical
                    expertise.
                  </li>
                  <li className="mb-2">
                    Customizable Voice Options: Users can fully adjust the
                    voices, from pitch to emotional tone, to perfectly suit
                    their content.
                  </li>
                  <li className="mb-2">
                    Multilingual Capabilities: WellSaid Labs supports over 30
                    languages, making it ideal for creating international
                    content.
                  </li>
                  <li className="mb-2">
                    Quick and Scalable: The platform allows for fast voiceover
                    generation, making it suitable for large-scale projects or
                    high-volume content production.
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
                    Pricing: While WellSaid Labs offers high-quality features,
                    its pricing might be on the higher end, especially for
                    small-scale users or creators with limited budgets.
                  </li>
                  <li className="mb-2">
                    Limited Free Plan: The free plan offers limited
                    functionality, and you’ll need to upgrade to access more
                    advanced features like custom voice cloning and premium
                    voices.
                  </li>
                  <li className="mb-2">
                    Voice Sample Quality: The quality of voice cloning depends
                    on the clarity and quality of the audio sample provided,
                    which could be an issue if the sample isn’t ideal.
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
                      Descript Overdub: Offers voice cloning and TTS services
                      with a focus on podcasting and content creation, allowing
                      for voiceover editing and voice cloning.
                    </li>
                    <li className="mb-2">
                      Murf.ai: Provides voice cloning and AI-powered voice
                      generation, with customization options for tone and pitch.
                    </li>
                    <li className="mb-2">
                      Resemble.ai: A voice cloning platform that focuses on
                      creating custom voices for content creators, businesses,
                      and developers.
                    </li>
                    <li className="mb-2">
                      Play.ht: A text-to-speech platform with voice cloning
                      capabilities, offering multilingual support and voice
                      customization.
                    </li>
                    <li className="mb-2">
                      Speechify: A TTS tool that converts text to speech in
                      various languages and voices, with a focus on
                      accessibility.
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
            {/* Right side (Image Section) - mobile pe pehle dikhayega */}
          <div
  className="col-12 col-md-6 mb-4 mb-md-0 text-center order-1 order-md-2"
>
  <div
    style={{
      width: "100%",
      height: "auto",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <img
      src={wellsaid}
      alt="Speechify AI Illustration"
      className="img-fluid"
      style={{ maxWidth: "100%", height: "auto" }}
    />
  </div>
</div>


            {/* Left side (Text Section) - mobile pe second */}
            <div
              className="col-12 col-md-6 order-2 order-md-1"
              style={{ paddingRight: "30px" }}
            >
              <p className="text-primary">Write better, faster</p>
              <h1>WellSaid Labs - Information</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                WellSaid Labs is an AI-powered text-to-speech (TTS) and voice
                synthesis platform that enables users to generate highly
                realistic, lifelike voices for a variety of applications. It
                leverages deep learning models to clone voices and generate
                high-quality speech, making it a powerful tool for content
                creators, businesses, marketers, and developers. WellSaid Labs
                provides the ability to create custom voices, offering voiceover
                services for videos, podcasts, e-learning, games, virtual
                assistants, and more. The platform’s advanced AI technology
                ensures voices sound natural and expressive, enhancing the user
                experience across different industries.
              </p>

              <div className="mb-3">
                <a
                  href="https://wellsaidlabs.com/"
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
                How To Use Descript Overdub
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
                      Ideal for podcasters, YouTubers, and audiobook narrators
                      who need high-quality voiceovers for their content.
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
                      Used by video editors, filmmakers, and game developers for
                      character voices, narration, and dubbing.
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
                      WellSaid Labs powers virtual assistants, automated phone
                      systems, and chatbots, enhancing user interaction with
                      AI-driven voice responses.
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

export default WallsaidAI;
