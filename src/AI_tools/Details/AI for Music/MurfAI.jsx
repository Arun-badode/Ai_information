import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import murf from "../../../../public/assets/Img/Ai for Music/2.png";
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
const MurfAI = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="Murf.ai Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Elevate Your Audio Creation with Murf.ai
                </p>
                <h3>
                  Unlock the Power of AI-Driven Voiceovers and Audio Content
                </h3>
              </div>
              {[
                {
                  icon: "🎙️",
                  title: "AI-Powered Voice Generation",
                  desc: "Murf.ai leverages cutting-edge AI technology to create natural, high-quality voiceovers in multiple languages, ideal for podcasts, videos, and more.",
                },
                {
                  icon: "🎧",
                  title: "Customizable Voice Options",
                  desc: "Choose from a wide range of voices with adjustable pitch, tone, and speed to perfectly match the style and mood of your content.",
                },
                {
                  icon: "⚙️",
                  title: "Real-Time Audio Feedback",
                  desc: "Receive instant feedback on your audio quality, allowing you to fine-tune your voiceovers in real time for optimal results.",
                },
                {
                  icon: "🌎",
                  title: "Multilingual Audio Support",
                  desc: "Create voiceovers in multiple languages and accents to target a global audience, ensuring your content resonates internationally.",
                },
                {
                  icon: "🔄",
                  title: "Seamless Integrations",
                  desc: "Murf.ai integrates with popular tools like Google Docs, WordPress, and video editing software, streamlining your workflow and boosting productivity.",
                },
                {
                  icon: "📊",
                  title: "Voiceover Analytics and Insights",
                  desc: "Gain valuable insights into your voiceover’s performance and audience engagement through integrated analytics tools.",
                },
              ].map((feature, index) => (
                <div className="col-md-4" key={index}>
                  <div className="custom-card text-light p-4 h-100 border border-success rounded">
                    <div
                      className="icon mb-3 fs-3"
                      role="img"
                      aria-label="Feature Icon"
                    >
                      {feature.icon}
                    </div>
                    <h5 className="fw-bold">{feature.title}</h5>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        );

      case "FAQs":
        return (
          <div className="faq-section container py-4">
            <h3 className="text-center text-white mb-4 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is Murf.ai?",
                  a: "Murf.ai is an AI-powered voiceover and audio content creation platform that generates high-quality, natural-sounding voiceovers in multiple languages for a variety of use cases, including podcasts, videos, and audiobooks.",
                },
                {
                  q: "How does Murf.ai enhance audio content creation?",
                  a: "Murf.ai uses advanced AI to generate human-like voiceovers, offering a wide range of voices and customization options to ensure your audio content sounds professional and matches your desired tone and style.",
                },
                {
                  q: "Who can benefit from using Murf.ai?",
                  a: "Podcasters, content creators, marketers, educators, and businesses looking to create high-quality voiceovers and audio content can benefit from Murf.ai's AI-driven audio solutions.",
                },
                {
                  q: "What is a Murf.ai voiceover?",
                  a: "A Murf.ai voiceover is a professionally generated AI-powered audio file that mimics human speech, useful for creating narrations, podcasts, and other audio-based content.",
                },
                {
                  q: "Can I create voiceovers for existing content with Murf.ai?",
                  a: "Yes, you can upload existing scripts or content, and Murf.ai will generate voiceovers in various styles and voices, making it easy to convert text-based content into audio.",
                },
                {
                  q: "Does Murf.ai provide voice suggestions?",
                  a: "Yes, Murf.ai offers a range of voice options with different accents, tones, and languages to ensure your content aligns with your target audience.",
                },
                {
                  q: "What is the audio quality in Murf.ai?",
                  a: "Murf.ai produces high-quality, natural-sounding audio with adjustable voice parameters like pitch, speed, and tone to customize your voiceover output.",
                },
                {
                  q: "Does Murf.ai support integration with other tools?",
                  a: "Yes, Murf.ai integrates seamlessly with platforms like Google Docs, video editing software, and podcast tools, allowing for a smooth workflow.",
                },
                {
                  q: "Can I use Murf.ai with WordPress?",
                  a: "Yes, Murf.ai supports integration with WordPress, enabling you to generate voiceovers directly for your blog posts or other content.",
                },
                {
                  q: "Is Murf.ai easy to use?",
                  a: "Yes, Murf.ai is designed with an intuitive interface, allowing users from all experience levels to create professional-quality voiceovers with ease.",
                },
                {
                  q: "Does Murf.ai provide voice customization?",
                  a: "Yes, Murf.ai allows you to adjust the pitch, speed, and tone of voices to match your project's needs, providing complete control over the audio output.",
                },
                {
                  q: "How accurate are Murf.ai’s voices?",
                  a: "Murf.ai uses the latest AI and machine learning models to generate accurate and realistic voiceovers that closely resemble human speech, ensuring high fidelity and naturalness.",
                },
                {
                  q: "Can multiple users collaborate on Murf.ai?",
                  a: "Yes, Murf.ai supports team collaboration, enabling users to share projects, edit voiceovers, and provide feedback in real time.",
                },
                {
                  q: "What formats does Murf.ai support for audio input?",
                  a: "Murf.ai accepts various text inputs such as scripts and documents, which can be converted into voiceovers in multiple audio formats.",
                },
                {
                  q: "Does Murf.ai assist with content scripting?",
                  a: "While Murf.ai primarily focuses on voiceover generation, you can create voice-friendly scripts within the platform to ensure smooth, engaging audio content.",
                },
                {
                  q: "Can Murf.ai help with multilingual voiceovers?",
                  a: "Yes, Murf.ai supports multiple languages and accents, making it ideal for creating voiceovers for global audiences.",
                },
                {
                  q: "Is Murf.ai cloud-based?",
                  a: "Yes, Murf.ai is fully cloud-based, allowing you to create and manage voiceovers from any device with internet access.",
                },
                {
                  q: "How often can I generate voiceovers in Murf.ai?",
                  a: "The frequency of voiceover generation depends on your subscription plan, which provides access to a set number of voiceovers per month.",
                },
                {
                  q: "Can Murf.ai track voiceover performance?",
                  a: "While Murf.ai doesn’t provide direct analytics for voiceover performance, you can track user engagement through external tools like podcast platforms or social media analytics.",
                },
                {
                  q: "Does Murf.ai integrate with other platforms?",
                  a: "Yes, Murf.ai supports integrations with a variety of platforms such as Google Docs, WordPress, and other content creation tools for a streamlined experience.",
                },
                {
                  q: "How secure is my data on Murf.ai?",
                  a: "Murf.ai takes data security seriously and uses strong encryption protocols to ensure that your content and personal information are safe and protected.",
                },
                {
                  q: "Is customer support available?",
                  a: "Yes, Murf.ai offers dedicated customer support through live chat, email, and a comprehensive help center to assist with any inquiries.",
                },
                {
                  q: "Is there a free version of Murf.ai?",
                  a: "Currently, Murf.ai offers a free trial, but a paid subscription is required for continued access to its full range of features and capabilities.",
                },
                {
                  q: "How do I start using Murf.ai?",
                  a: "Visit murf.ai, sign up, and start by uploading your script or content to generate your first AI-powered voiceover.",
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

      case "Screenshots":
        return (
          <div className="row g-4">
            <div className="col-md-6">
              <img
                src="https://www.testingcatalog.com/content/images/size/w2000/2024/06/screenshot-app.runwayml.com-2024.06.24-00_36_32--1-.png"
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src="https://www.techspot.com/articles-info/2720/images/2023-08-17-image.jpg"
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

      case "Technical":
        return (
          <div style={styles.section}>
            <div className="container">
              <div className="row g-4">
                {/* System Requirements */}
                <div className="col-md-8">
                  <div style={styles.card}>
                    <h5 className="mb-4">System Requirements</h5>
                    <div className="row">
                      <div className="col-md-6">
                        <h6>Supported Platforms</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>🪟 Windows 10/11 (Web App)</li>
                          <li>🍎 macOS 11+ (Chrome or Safari)</li>
                          <li>📱 Android & iOS (Mobile Browser)</li>
                          <li>🌐 Modern browsers (Chrome, Firefox, Edge)</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h6>Hardware Requirements</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>⚡ Intel i3 or equivalent (2.0 GHz+)</li>
                          <li>🧠 4 GB RAM (8 GB preferred for HD rendering)</li>
                          <li>💾 300 MB disk space for cache</li>
                          <li>📶 Stable high-speed internet (4 Mbps+)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Resources & Support */}
                <div className="col-md-4">
                  <div style={styles.card}>
                    <h5 className="mb-4">Resources</h5>
                    <ul className="list-unstyled mb-4" style={styles.smallText}>
                      <li>📄 Getting Started with Pictory</li>
                      <li>💻 API Documentation</li>
                      <li>🎥 Video Tutorials</li>
                      <li>🎓 AI Video Academy</li>
                      <li>💬 Support Community</li>
                    </ul>
                    <h5>Support</h5>
                    <button
                      className="btn w-100 my-2"
                      style={styles.button}
                      onMouseOver={(e) => {
                        e.target.style.backgroundColor =
                          styles.buttonHover.backgroundColor;
                        e.target.style.borderColor =
                          styles.buttonHover.borderColor;
                      }}
                      onMouseOut={(e) => {
                        e.target.style.backgroundColor =
                          styles.button.backgroundColor;
                        e.target.style.borderColor = styles.button.borderColor;
                      }}
                    >
                      🎧 Contact Support
                    </button>
                    <small className="text-muted d- text-center">
                      24/7 technical support for premium users
                    </small>
                  </div>
                </div>

                {/* Integrations */}
                <div className="col-12">
                  <div style={styles.card}>
                    <h5 className="mb-4">Integration Capabilities</h5>
                    <div className="row">
                      <div className="col-md-4">
                        <h6>Content Sources</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>🧰 Google Docs</li>
                          <li>🧰 Microsoft Word</li>
                          <li>🧰 Blog URLs for video summarization</li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <h6>Export Tools</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>💻 MP4 Video Export</li>
                          <li>💻 SRT/VTT Subtitles</li>
                          <li>💻 Social media formats</li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <h6>Marketing Tools</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>📢 Hootsuite Integration</li>
                          <li>📢 HubSpot</li>
                          <li>📢 LinkedIn & Facebook Upload</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
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
                    Why <strong>Murf.ai</strong> is the Ideal Platform for
                    AI-Driven Voice and Audio Content Creation
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>Murf.ai</strong> transforms voiceover creation by
                    offering AI-driven voice synthesis that delivers
                    natural-sounding voiceovers with ease. Whether you're
                    producing podcasts, audiobooks, or video narrations, here's
                    why professionals trust <strong>Murf.ai</strong> for their
                    audio content needs:
                  </p>

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
                      <strong>AI-Powered Voice Synthesis:</strong>{" "}
                      <strong>Murf.ai</strong> uses state-of-the-art AI
                      technology to generate high-quality voiceovers in a
                      variety of natural-sounding voices, ideal for a wide range
                      of content.
                    </li>
                    <li className="mb-3">
                      <strong>Multilingual Voice Support:</strong> With support
                      for multiple languages, <strong>Murf.ai</strong> makes it
                      easy to create content for diverse audiences across the
                      globe.
                    </li>
                    <li className="mb-3">
                      <strong>Customizable Voice Profiles:</strong>{" "}
                      <strong>Murf.ai</strong> allows users to create
                      personalized voices, making it easier to tailor the tone,
                      pitch, and style to match your brand's unique voice.
                    </li>
                    <li className="mb-3">
                      <strong>Easy-to-Use Interface:</strong> The platform is
                      designed for ease of use, allowing content creators and
                      professionals to generate voiceovers without needing
                      advanced technical skills.
                    </li>
                    <li className="mb-3">
                      <strong>Fast Audio Generation:</strong>{" "}
                      <strong>Murf.ai</strong> ensures quick turnaround times,
                      enabling content creators to produce high-quality audio
                      content in less time.
                    </li>
                    <li className="mb-3">
                      <strong>Seamless Integration:</strong> Easily integrate{" "}
                      <strong>Murf.ai</strong> into your existing content
                      workflows with support for tools like video editing
                      software and podcast platforms.
                    </li>
                    <li className="mb-3">
                      <strong>Scalable for Different Needs:</strong> Whether
                      you're a freelancer, a small business, or a large
                      enterprise, <strong>Murf.ai</strong> provides scalable
                      solutions for all types of audio content creation.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Use <strong>Murf.ai</strong> to Revolutionize Your Audio
                      Content Creation
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Pros & Cons":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-2">
              Why <strong>Murf.ai</strong> is a Leading Tool for Voice and Audio
              Content Creation
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>Murf.ai</strong> offers cutting-edge AI-driven voice
              synthesis, allowing users to easily generate high-quality
              voiceovers and audio content. Here are its strengths and areas for
              improvement.
            </p>
            <div className="row justify-content-center gap-2">
              {/* Pros Column */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #3fcf8e",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-success text-start mb-4">✅ Pros</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>AI-Powered Voice Synthesis:</strong>{" "}
                    <strong>Murf.ai</strong> enables high-quality, customizable
                    voiceovers with a variety of natural-sounding voices,
                    streamlining audio content creation.
                  </li>
                  <li className="mb-2">
                    <strong>Multilingual Support:</strong> The platform supports
                    multiple languages, allowing creators to generate voiceovers
                    in various languages for a global audience.
                  </li>
                  <li className="mb-2">
                    <strong>Easy-to-Use Interface:</strong> Murf.ai’s
                    user-friendly design makes it simple for both beginners and
                    experienced content creators to generate professional-grade
                    audio.
                  </li>
                  <li className="mb-2">
                    <strong>Custom Voice Creation:</strong> Users can create and
                    fine-tune personalized voices, adding a unique touch to
                    their content.
                  </li>
                  <li className="mb-2">
                    <strong>Quick Turnaround:</strong> Murf.ai provides fast
                    voiceover generation, allowing content creators to save time
                    and improve productivity.
                  </li>
                </ul>
              </div>

              {/* Cons Column */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #3fcf8e",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-warning text-start mb-4">⚠️ Cons</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Voice Customization Limits:</strong> While custom
                    voices are supported, creating highly nuanced voices with
                    specific accents or tones may require additional
                    fine-tuning.
                  </li>
                  <li className="mb-2">
                    <strong>Pricing Structure:</strong> For advanced features
                    and higher usage limits, Murf.ai can be relatively expensive
                    for smaller creators or small businesses.
                  </li>
                  <li className="mb-2">
                    <strong>Occasional Audio Artifacts:</strong> In some cases,
                    especially with rapid speech generation, slight artifacts or
                    unnatural pauses can occur in the voiceover output.
                  </li>
                  <li className="mb-2">
                    <strong>Limited Integration Options:</strong> Compared to
                    other platforms, Murf.ai’s integrations with third-party
                    apps may be more limited, which could be an issue for users
                    seeking a more connected workflow.
                  </li>
                  <li className="mb-2">
                    <strong>Advanced Features Availability:</strong> Some
                    advanced features, such as extensive voice modulation or
                    emotion-based voice generation, may not yet be fully
                    available.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "Alternative":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-2">
              Discover Leading Alternatives for Enhanced Voice and Audio Content
              Creation
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>Murf.ai</strong> provides powerful AI-driven
              voiceover and audio content creation tools, several other
              platforms offer complementary features to enhance your audio
              content strategy across different use cases.
            </p>
            <div className="row justify-content-center gap-2">
              <div
                className="col-lg-8 col-md-8 col-sm-12"
                style={{
                  border: "1px solid #3fcf8e",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Murf.ai</strong>: An AI-powered platform offering
                    high-quality, customizable voiceovers that bring your
                    content to life with realistic voices and seamless
                    integration.
                  </li>
                  <li className="mb-2">
                    <strong>Descript</strong>: A comprehensive audio and video
                    editing tool that allows users to edit spoken words with
                    text and provides AI-powered transcription and voiceover
                    features.
                  </li>
                  <li className="mb-2">
                    <strong>Speechelo</strong>: An easy-to-use text-to-speech
                    software that converts written content into
                    realistic-sounding audio, suitable for various content
                    creation needs.
                  </li>
                  <li className="mb-2">
                    <strong>Resemble AI</strong>: A voice synthesis platform
                    that allows users to create custom voices and generate
                    dynamic voiceovers for different media, ensuring
                    personalized content delivery.
                  </li>
                  <li className="mb-2">
                    <strong>Sonix</strong>: An automatic transcription service
                    that also offers high-quality audio editing and multilingual
                    support for content creators working with diverse audiences.
                  </li>
                  <li className="mb-2">
                    <strong>Play.ht</strong>: A platform that converts text into
                    lifelike audio with multiple voices and languages, ideal for
                    podcasting and other audio-based content.
                  </li>
                  <li className="mb-2">
                    <strong>iSpeech</strong>: Provides high-quality
                    text-to-speech services with a range of voices for personal
                    and commercial use, supporting a variety of file formats.
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
              <h1>Murf.ai:</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Murf.ai is an innovative AI-powered platform that specializes in
                voice synthesis, text-to-speech, and AI-driven content creation.
                This platform provides businesses, creators, and educators with
                the ability to generate realistic voiceovers and narrations, all
                powered by advanced machine learning and AI voice models.
                Whether you're creating podcasts, e-learning content, or
                marketing materials, Murf.ai is your go-to solution for
                transforming text into natural, expressive voice.
              </p>

              {/* <div className="mb-3">
                <span className="badge bg-primary me-2">Image Generation</span>
                <span className="badge bg-success me-2">Creative</span>
                <span className="badge bg-warning text-dark">Paid</span>
              </div> */}
              <div className="mb-3">
                <a
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-2"
                >
                  Explore Tool
                </a>
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
              <img src={murf} style={{ MaxWidth: "100%", height: "300px" }} />
            </div>
          </div>

          <section style={{ backgroundColor: "#1b1f2b", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">
                Transform Your Voice and Content with Murf.ai
              </p>
              <h2
                className="text-white"
                style={{ fontWeight: "600", marginBottom: "1rem" }}
              >
                How Murf.ai Revolutionizes Your Audio and Content Creation
              </h2>
              <p
                style={{
                  color: "#ccc",
                  marginBottom: "2rem",
                  fontStyle: "italic",
                }}
              >
                Murf.ai adapts voiceovers and content according to your specific
                needs, creating high-quality, customizable audio experiences
                without any copyright issues.
              </p>

              <div className="row g-4">
                {/* Step 1 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#2d3b62",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
            .step1 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #3fcf8e;
              opacity: 0.6;
            }
          `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Transforms Text to Life-like Audio
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Murf.ai creates realistic voiceovers from any text,
                      helping you bring your content to life with human-like
                      voices that adapt to your tone and style.
                    </p>
                    <div className="step1">1</div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#2d3b62",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
            .step2 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #3fcf8e;
              opacity: 0.6;
            }
          `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Personalizes Audio for Your Content
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Murf.ai allows you to customize your voiceovers with
                      dynamic features like pitch, speed, and tone to match the
                      specific needs of your content.
                    </p>
                    <div className="step2">2</div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#2d3b62",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
            .step3 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #3fcf8e;
              opacity: 0.6;
            }
          `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Provides Seamless Integration for Content Creation
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Murf.ai easily integrates with your content creation
                      tools, providing smooth workflows for generating
                      high-quality audio for videos, podcasts, and more.
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
              "Technical",
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

          {/* <div className="bg-primary text-center text-light rounded-4 p-5 mt-5">
            <h4 className="mb-3">Ready to get started with MurfAI?</h4>
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

export default MurfAI;
