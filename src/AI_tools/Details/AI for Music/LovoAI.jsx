import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import lovo from "../../../../public/assets/Img/Ai for Music/6.png";
import screen1 from "../../../../public/assets/Img/Ai for Music/lovo-screenshot1.jpg";
import screen2 from "../../../../public/assets/Img/Ai for Music/lovo-screenshot2.png";
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
const LovoAi = () => {
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
                title: "Text-to-Speech (TTS):",
                desc: "Convert written text into realistic speech with customizable voice options.",
              },
              {
                icon: "🗣",
                title: "Voice Cloning:",
                desc: "Clone voices based on high-quality audio samples, enabling personalized voiceovers.",
              },
              {
                icon: "🎤",
                title: "Voice Customization:",
                desc: "Adjust pitch, tone, speed, and emotional tone to match your project’s needs.",
              },
              {
                icon: "🌍",
                title: "Multilingual Support:",
                desc: "Generate voiceovers in over 20 languages, making it ideal for global content.",
              },
              {
                icon: "🎧",
                title: "AI-Powered Voice Cloning:",
                desc: "Clone voices quickly with AI, creating custom voices for unique use cases.",
              },
              {
                icon: "🎥",
                title: "Real-Time Voice Generation:",
                desc: "Produce voiceovers instantly, suitable for podcasts, e-learning, or customer service applications.",
              },
              {
                icon: "🔌",
                title: "API Integration:",
                desc: "Seamlessly integrate LOVO.ai's TTS and voice cloning features into your existing software or platform.",
              },
              {
                icon: "💼",
                title: "Voiceover Tool:",
                desc: "Provides easy-to-use tools for generating professional voiceovers for videos, advertisements, and other media.",
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
                    Why Use LOVO.ai?
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
                        High-Quality, Realistic Voices: LOVO.ai’s AI-generated
                        voices are clear, expressive, and lifelike, making it
                        ideal for professional projects.
                      </li>
                      <li className="mb-3">
                        Customizable Voices: Users can adjust the voices in
                        terms of pitch, tone, speed, and emotional tone, giving
                        them full control over the voiceovers.
                      </li>
                      <li className="mb-3">
                        Multilingual Support: With over 20 languages, LOVO.ai is
                        perfect for creating voiceovers for global audiences.
                      </li>
                      <li className="mb-3">
                        Cost-Effective and Time-Saving: By automating voiceover
                        production, LOVO.ai eliminates the need for professional
                        voice actors, saving both time and money.
                      </li>
                      <li className="mb-3">
                        Scalable Solution: Whether you're an individual creator
                        or a large corporation, LOVO.ai can scale to meet your
                        needs with various pricing plans and voice models.
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
                  q: "What is LOVO.ai?",
                  a: "LOVO.ai is an AI-powered text-to-speech (TTS) platform that enables users to generate lifelike, natural-sounding voices for various applications such as content creation, e-learning, customer service, and more.",
                },
                {
                  q: "How does LOVO.ai work?",
                  a: "LOVO.ai works by using deep learning algorithms to convert written text into speech. Users can also clone voices by uploading high-quality audio samples, which are then analyzed by the AI for voice generation.",
                },
                {
                  q: "Can I clone my own voice with LOVO.ai?",
                  a: "Yes, LOVO.ai allows users to clone their own voice by uploading an audio sample, which the system uses to create a voice model.",
                },
                {
                  q: "How much does LOVO.ai cost?",
                  a: "LOVO.ai offers a variety of pricing plans, including a free trial with limited features and several paid plans based on usage volume and advanced features like voice cloning and multilingual support.",
                },
                {
                  q: "Is LOVO.ai suitable for content creators?",
                  a: "Yes, LOVO.ai is ideal for content creators like podcasters, YouTubers, and audiobook narrators who need professional-quality voiceovers.",
                },
                {
                  q: "How accurate is the voice cloning?",
                  a: "The accuracy of voice cloning on LOVO.ai depends on the quality of the audio sample provided. High-quality samples will result in more accurate and lifelike voice models.",
                },
                {
                  q: "Does LOVO.ai support multilingual voiceovers?",
                  a: "Yes, LOVO.ai supports over 20 languages, making it an ideal tool for global content creators and businesses that need multilingual voiceovers.",
                },
                {
                  q: "Can I use LOVO.ai for podcasting?",
                  a: "Yes, LOVO.ai is widely used by podcasters for creating realistic voiceovers for episodes, intros, and outros.",
                },
                {
                  q: "How quickly can LOVO.ai generate voiceovers?",
                  a: "LOVO.ai can generate voiceovers almost instantly or within minutes, depending on the length and complexity of the script.",
                },
                {
                  q: "Does LOVO.ai offer a free trial?",
                  a: "Yes, LOVO.ai offers a free trial with limited access to features so users can explore the platform before committing to a subscription.",
                },
                {
                  q: "Can LOVO.ai create voiceovers for videos?",
                  a: "Yes, LOVO.ai is ideal for generating voiceovers for video scripts, including narrations, character voices, and more.",
                },
                {
                  q: "How do I create a custom voice on LOVO.ai?",
                  a: "To create a custom voice, you need to upload a high-quality audio sample of the voice you want to clone. LOVO.ai will process it to generate a voice model.",
                },
                {
                  q: "Can LOVO.ai generate voices for video games?",
                  a: "Yes, LOVO.ai is perfect for game developers to generate character voices, in-game dialogues, and narration.",
                },
                {
                  q: "Can LOVO.ai generate voices in different accents?",
                  a: "Yes, LOVO.ai offers various regional accents, enabling you to create voiceovers that match specific geographical locations or audience preferences.",
                },
                {
                  q: "Can I use LOVO.ai for video marketing?",
                  a: "Yes, LOVO.ai is suitable for creating professional voiceovers for video marketing, such as promotional videos, explainer videos, and product demos.",
                },
                {
                  q: "Does LOVO.ai offer API integration?",
                  a: "Yes, LOVO.ai provides an API for developers to integrate TTS and voice cloning features into their applications.",
                },
                {
                  q: "How does LOVO.ai handle voice data privacy?",
                  a: "LOVO.ai uses secure encryption methods to protect user data, including voice samples and generated voices, ensuring privacy and data security.",
                },
                {
                  q: "Can I adjust the pitch and speed of the generated voices?",
                  a: "Yes, LOVO.ai allows users to adjust the pitch, speed, and tone of the generated voices to suit their content needs.",
                },
                {
                  q: "Does LOVO.ai support real-time voice generation?",
                  a: "Yes, LOVO.ai supports real-time voice generation, making it suitable for live events, podcasts, or webinars.",
                },
                {
                  q: "Can LOVO.ai generate voices for customer service applications?",
                  a: "Yes, LOVO.ai is used to create voiceovers for virtual assistants and customer service chatbots, offering lifelike voice responses.",
                },
                {
                  q: "Can I use LOVO.ai for voiceovers in films?",
                  a: "Yes, LOVO.ai can be used to generate voiceovers for films, including character voices and narration for movies or documentaries.",
                },
                {
                  q: "How does LOVO.ai compare to other TTS services?",
                  a: "LOVO.ai provides highly realistic voices, customizable options for pitch, speed, and tone, and includes both voice cloning and multilingual support, setting it apart from many other TTS services.",
                },
                {
                  q: "Can I create voice models for multiple voices on LOVO.ai?",
                  a: "Yes, you can create multiple custom voice models by uploading different high-quality audio samples.",
                },
                {
                  q: "Does LOVO.ai provide a voiceover tool for businesses?",
                  a: "Yes, LOVO.ai offers voiceover tools tailored for businesses to generate voice responses for customer service, e-learning, and marketing materials.",
                },
                {
                  q: "Can I use LOVO.ai for creating audiobooks?",
                  a: "Yes, LOVO.ai is an excellent choice for generating voiceovers for audiobooks, ensuring engaging and professional narration.",
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
                alt="lovo"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={screen2}
                alt="lovo"
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
                    Natural-Sounding Voices: The AI voices sound natural and
                    human-like, ensuring a smooth listening experience.
                  </li>
                  <li className="mb-2">
                    Highly Customizable: Full control over voice parameters,
                    including pitch, speed, and tone.
                  </li>
                  <li className="mb-2">
                    Quick Voice Generation: Generate voiceovers instantly or
                    within minutes, making it ideal for time-sensitive projects.
                  </li>
                  <li className="mb-2">
                    Multilingual Capabilities: Supports multiple languages,
                    which is perfect for content creators targeting
                    international markets.
                  </li>
                  <li className="mb-2">
                    Integration-Friendly: LOVO.ai integrates seamlessly with
                    other platforms and applications through its API.
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
                    Pricing: While there is a free version, advanced features
                    such as voice cloning and multilingual support are only
                    available in paid plans.
                  </li>
                  <li className="mb-2">
                    Voice Sample Quality: High-quality voice cloning depends on
                    the clarity and quality of the audio sample provided.
                  </li>
                  <li className="mb-2">
                    Voice Limitations in Free Plan: The free plan offers limited
                    voice models and usage, requiring a subscription for full
                    access to all features.
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
                      Descript Overdub: Another AI voice generation tool with
                      features for podcasting, voice cloning, and editing.
                    </li>
                    <li className="mb-2">
                      Murf.ai: A TTS and voice cloning platform that provides
                      voiceovers for various industries, including content
                      creation and business.
                    </li>
                    <li className="mb-2">
                      Play.ht: Offers high-quality TTS voices and voice cloning
                      with multilingual capabilities for content creators and
                      businesses.
                    </li>
                    <li className="mb-2">
                      Resemble.ai: Provides AI-generated voices with the ability
                      to clone voices for personalized use.
                    </li>
                    <li className="mb-2">
                      WellSaid Labs: A voice synthesis tool for creating
                      professional-quality voiceovers, widely used in media and
                      content production.
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
            {/* Left side (Text Section) */}
            <div
             className="col-12 col-md-6 order-2 order-md-1"
              style={{ paddingRight: "30px" }}
            >
              <p className="text-primary">Write better, faster</p>
              <h1>LOVO.ai</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                LOVO.ai is an advanced AI-powered text-to-speech (TTS) and voice
                cloning platform designed to provide users with
                natural-sounding, lifelike voices for various applications. With
                its deep learning algorithms, LOVO.ai offers cutting-edge voice
                generation technology, enabling businesses, content creators,
                educators, and developers to create professional-quality
                voiceovers quickly and efficiently. Whether it's for podcasts,
                e-learning, advertising, or customer service, LOVO.ai delivers
                customizable and scalable AI-generated voices in multiple
                languages.
              </p>

              <div className="mb-3">
                <a
                  href="https://www.lovo.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-2"
                >
                  Explore Tool
                </a>
              </div>
            </div>

            {/* Right side (Image Section) */}
                 <div className="col-12 col-md-6 order-1 order-md-2 text-center mb-3 mb-md-0">
                          <img
                            src={lovo}
                            alt="lovo"
                            style={{
                              width: "100%",
                              height: "auto",
                              maxHeight: "300px",
                              objectFit: "contain",
                            }}
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
                How To Use LOVO.ai
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
                      Podcasters, YouTubers, and audiobook creators use LOVO.ai
                      to generate high-quality, natural-sounding voiceovers for
                      their content.
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
                      Advertising
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Marketing agencies and businesses create voiceovers for
                      ads, explainer videos, and promotional content.
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
                      Game Development
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Game developers use the platform for generating character
                      voices, dialogues, and in-game narration.
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

export default LovoAi;
