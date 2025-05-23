import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import descriptoverdub from "../../../../public/assets/Img/Ai for Music/4.png";
import screen1 from "../../../../public/assets/Img/Ai for Music/descriptOverdub-screenshot1.jpg";
import screen2 from "../../../../public/assets/Img/Ai for Music/descriptOverdub-screenshot2.jpg";
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
const DescriptOverdub = () => {
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
                icon: "🗣",
                title: "Voice Cloning:",
                desc: "Allows users to clone their own voice or another voice based on a short audio sample.",
              },
              {
                icon: "🎤",
                title: "Text-to-Speech (TTS) Technology:",
                desc: "Converts written text into realistic speech with customizable pitch, tone, and emotion.",
              },
              {
                icon: "🎧",
                title: "Customizable Voices:",
                desc: "Adjust voice parameters such as tone, pitch, speed, and emotional expression to fit your content.",
              },
              {
                icon: "🌍",
                title: "Multilingual Support:",
                desc: "Generate voiceovers in multiple languages, enabling content creators to cater to global audiences.",
              },
              {
                icon: "🎬",
                title: "Audio Editing Software:",
                desc: "Descript offers a built-in audio editor, making it easy to edit and tweak generated voiceovers.",
              },
              {
                icon: "🎙",
                title: "AI-Powered Voice Cloning:",
                desc: "Uses deep learning models to create high-fidelity cloned voices for various projects.",
              },
              {
                icon: "🎧",
                title: "Real-Time Voiceover Generation:",
                desc: "Instantly generate voiceovers in real-time or within minutes based on the text provided.",
              },
              {
                icon: "🎥",
                title: "Integration with Podcasts and Video Editing:",
                desc: "Seamlessly integrates with podcast production and video editing, saving time and enhancing content.",
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
                    Why Use Descript Overdub?
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
                        High-Quality Voice Generation: Descript Overdub produces
                        voices that sound natural and lifelike, making it
                        perfect for professional content.
                      </li>
                      <li className="mb-3">
                        Time and Cost Efficient: It saves time and money by
                        eliminating the need for professional voice actors,
                        allowing for faster content creation.
                      </li>
                      <li className="mb-3">
                        Customization: The ability to adjust pitch, tone, speed,
                        and emotion ensures the generated voices perfectly match
                        your content.
                      </li>
                      <li className="mb-3">
                        Multilingual Support: With over 30 languages supported,
                        you can create global content and reach audiences
                        worldwide.
                      </li>
                      <li className="mb-3">
                        Real-Time Generation: Generate voiceovers instantly or
                        in real-time for live events, podcasts, or webinars.
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
                  q: "What is Descript Overdub?",
                  a: "Descript Overdub is an AI-powered text-to-speech (TTS) and voice cloning tool that enables users to create lifelike voiceovers, clone voices, and generate high-quality audio from text.",
                },
                {
                  q: "How does Descript Overdub work?",
                  a: "Descript Overdub works by analyzing an audio sample and then creating a digital replica of that voice. This voice model can be used to generate realistic voiceovers from any given text.",
                },
                {
                  q: "Can I clone my own voice with Descript Overdub?",
                  a: "Yes, Descript Overdub allows you to clone your own voice by providing a clean audio sample for the system to process.",
                },
                {
                  q: "How much does Descript Overdub cost?",
                  a: "Descript Overdub offers different pricing plans, including a free version with basic features and paid plans for full access to voice cloning and advanced voice generation capabilities.",
                },
                {
                  q: "What types of voices can Descript Overdub generate?",
                  a: "Descript Overdub can generate both male and female voices, with customizable accents, emotional tone, pitch, and speed.",
                },
                {
                  q: "Is Descript Overdub suitable for content creators?",
                  a: "Yes, Descript Overdub is widely used by podcasters, YouTubers, audiobook narrators, and other content creators for generating high-quality voiceovers.",
                },
                {
                  q: "Can Descript Overdub be used for podcasts?",
                  a: "Yes, Descript Overdub is an excellent tool for podcasters to create realistic voiceovers, edit audio, and generate content quickly.",
                },
                {
                  q: "How accurate is Descript Overdub’s voice cloning?",
                  a: "Descript Overdub provides highly accurate voice cloning, creating voices that sound natural and expressive. However, the quality depends on the clarity and quality of the provided audio sample.",
                },
                {
                  q: "Can I use Descript Overdub for video editing?",
                  a: "Yes, Descript Overdub is great for video editing, providing voiceovers for video scripts and narration for various types of content.",
                },
                {
                  q: "Can Descript Overdub generate multilingual voiceovers?",
                  a: "Yes, Descript Overdub supports multiple languages, allowing users to generate voiceovers in different languages for global audiences.",
                },
                {
                  q: "How long does it take to clone a voice on Descript Overdub?",
                  a: "It typically takes a few minutes to a couple of hours to clone a voice, depending on the audio sample quality and complexity.",
                },
                {
                  q: "Does Descript Overdub support real-time voice generation?",
                  a: "Yes, Descript Overdub supports real-time voice generation, allowing for instant voiceovers and quick audio content creation.",
                },
                {
                  q: "How do I get started with Descript Overdub?",
                  a: "To get started, you need to sign up for an account on Descript, upload an audio sample to create your voice model, and begin generating voiceovers from text.",
                },
                {
                  q: "Can I adjust the speed and pitch of the generated voice?",
                  a: "Yes, Descript Overdub provides customization options to adjust the speed, pitch, tone, and emotional expression of the voiceovers.",
                },
                {
                  q: "Can I use Descript Overdub for video game voiceovers?",
                  a: "Yes, Descript Overdub is ideal for generating voiceovers for video games, including character voices, dialogues, and in-game narration.",
                },
                {
                  q: "Does Descript Overdub offer any integration options?",
                  a: "Yes, Descript Overdub offers API and SDK integration, making it easy to incorporate voice generation and voice cloning into other applications or platforms.",
                },
                {
                  q: "Can Descript Overdub handle complex pronunciations or names?",
                  a: "Yes, Descript Overdub can handle complex pronunciations and specialized terms, including jargon and names.",
                },
                {
                  q: "How does Descript Overdub ensure the quality of generated voices?",
                  a: "Descript Overdub uses advanced deep learning models and AI technologies to generate voices that sound lifelike, with proper emotional tone, intonation, and pronunciation.",
                },
                {
                  q: "Does Descript Overdub offer editing features for generated voiceovers?",
                  a: "Yes, Descript Overdub includes audio editing tools, allowing you to tweak and refine generated voiceovers to meet your needs.",
                },
                {
                  q: "Is Descript Overdub suitable for educational content?",
                  a: "Yes, Descript Overdub is widely used for creating educational voiceovers, making learning content more engaging and accessible.",
                },
                {
                  q: "Can Descript Overdub create voices for virtual assistants?",
                  a: "Yes, Descript Overdub is perfect for creating voices for virtual assistants, providing human-like speech for customer service or interactive experiences.",
                },
                {
                  q: "Can Descript Overdub be used for audiobook narration?",
                  a: "Yes, Descript Overdub is a popular tool for audiobook creators, providing clear and engaging narration for books, stories, and articles.",
                },
                {
                  q: "Does Descript Overdub offer a free trial?",
                  a: "Yes, Descript Overdub offers a free trial version with limited features so that users can test the platform before subscribing.",
                },
                {
                  q: "Can Descript Overdub be used in live broadcasts?",
                  a: "Yes, Descript Overdub supports real-time voice generation, making it suitable for live broadcasts, webinars, and other live events.",
                },
                {
                  q: "Can I use Descript Overdub for voiceover ads?",
                  a: "Yes, Descript Overdub can generate professional-quality voiceovers for ads, whether for TV, radio, or online promotions.",
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
                alt="DescriptionOverDub"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={screen2}
                alt="DescriptionOverDub"
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
                    Highly Realistic Voices: The voices generated by Descript
                    Overdub are incredibly lifelike, providing a human-like
                    experience for listeners.
                  </li>
                  <li className="mb-2">
                    Easy to Use: The user-friendly interface makes it accessible
                    to both beginners and professionals.
                  </li>
                  <li className="mb-2">
                    Speed: Generates voiceovers quickly, saving users time on
                    their projects.
                  </li>
                  <li className="mb-2">
                    Customizable Voices: Offers complete control over voice
                    style, emotion, and pace, allowing for tailored voiceovers.
                  </li>
                  <li className="mb-2">
                    Scalable: Ideal for both small-scale creators and large
                    businesses with high-volume content needs.
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
                    Pricing: While there is a free version, access to advanced
                    features like voice cloning and unlimited voice generation
                    can be costly for individual users or small businesses.
                  </li>
                  <li className="mb-2">
                    Voice Cloning Limitations: High-quality voice cloning
                    requires clean, high-quality audio samples, which can be a
                    challenge if the provided sample is not ideal.
                  </li>
                  <li className="mb-2">
                    Dependence on Audio Samples: To clone a voice, you need to
                    provide a substantial amount of high-quality audio to ensure
                    accuracy.
                  </li>
                  <li className="mb-2">
                    Ethical Concerns: The ability to clone voices raises ethical
                    concerns regarding potential misuse, such as deepfakes or
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
                      Murf.ai: Another voice cloning and text-to-speech platform
                      that offers similar features for content creators and
                      businesses.
                    </li>
                    <li className="mb-2">
                      Resemble.ai: Provides AI-generated voiceovers with highly
                      customizable voices and multilingual support.
                    </li>
                    <li className="mb-2">
                      Play.ht: Focuses on text-to-speech generation and voice
                      cloning, with an easy-to-use platform for content
                      creators.
                    </li>
                    <li className="mb-2">
                      Speechelo: A text-to-speech software that offers lifelike
                      voices and is specifically aimed at creators looking for
                      high-quality audio for videos.
                    </li>
                    <li className="mb-2">
                      iSpeech: A simpler alternative for TTS services, though
                      lacking the advanced customization options of Descript
                      Overdub.
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
          <div className="row align-items-center mb-1">
            {/* Image Section - Mobile me row 1, Desktop me column 2 */}
            <div
              className="col-12 col-md-6 order-1 order-md-2 text-center mb-3 mb-md-0"
              style={{ height: "250px" }}
            >
              <img
                src={descriptoverdub}
                alt="Descript Overdub"
                style={{ maxWidth: "100%", height: "300px" }}
              />
            </div>

            {/* Text Section - Mobile me row 2, Desktop me column 1 */}
            <div
              className="col-12 col-md-6 order-2 order-md-1"
              style={{ paddingRight: "30px" }}
            >
              <p className="text-primary">Write better, faster</p>
              <h1>Descript Overdub</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Descript Overdub is an advanced AI-powered text-to-speech (TTS)
                and voice cloning tool designed to help content creators,
                podcasters, video editors, and marketers generate
                natural-sounding AI voices. Overdub uses cutting-edge deep
                learning algorithms to produce highly customizable voiceovers
                from text input. It enables users to clone their own voice or
                any other voice they wish to create, allowing them to generate
                lifelike, human-like audio content for various applications,
                including podcasts, videos, and more. The tool is perfect for
                individuals and businesses looking to produce high-quality voice
                content quickly and affordably.
              </p>

              <div className="mb-3">
                <a
                  href="https://www.descript.com/overdub"
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
                    Content Creators:
                  </h5>
                  <p style={{ color: "#fff", margin: 0 }}>
                    Podcasters, YouTubers, and audiobook narrators use Descript
                    Overdub to quickly generate high-quality voiceovers without
                    the need for a professional voice actor.
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
                    Video Production
                  </h5>
                  <p style={{ color: "#fff", margin: 0 }}>
                    Video editors can create voiceovers for video scripts,
                    allowing for more efficient video editing.
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
                    Customer Support:
                  </h5>
                  <p style={{ color: "#fff", margin: 0 }}>
                    Businesses use it to create virtual assistants and automated
                    phone systems that provide accurate and human-like
                    responses.
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
            <h4 className="mb-3">Ready to get started with DescriptOverdub?</h4>
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
    </>
  );
};

export default DescriptOverdub;
