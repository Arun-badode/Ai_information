import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import resemble from "../../../../public/assets/Img/Ai for Music/4.png";
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
const ResembleAI = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="Resemble.ai Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Revolutionize Your Audio and Voiceover Creation with
                  Resemble.ai
                </p>
                <h3>
                  Unleash the Power of AI-Driven Voice Synthesis and Editing
                  Tools
                </h3>
              </div>
              {[
                {
                  icon: "🎙",
                  title: "AI-Powered Voice Cloning and Editing",
                  desc: "Resemble.ai leverages state-of-the-art AI technology to clone voices and create realistic audio, making editing effortless by directly manipulating the text of your recordings.",
                },
                {
                  icon: "🎧",
                  title: "Customizable Voiceover Generation",
                  desc: "With Resemble.ai’s versatile voice synthesis feature, create lifelike voiceovers in your own voice or choose from a wide range of voices to align with your content’s personality.",
                },
                {
                  icon: "⚙",
                  title: "Instant Feedback and Refinements",
                  desc: "Edit audio and voiceovers in real-time, receiving immediate results, allowing you to refine your content and get it just right for your project.",
                },
                {
                  icon: "🌍",
                  title: "Global Content Creation",
                  desc: "Easily generate voiceovers and transcriptions in various languages, making your content accessible and relevant to audiences worldwide.",
                },
                {
                  icon: "🔄",
                  title: "Seamless Integration with Creative Software",
                  desc: "Resemble.ai integrates effortlessly with popular tools like Dropbox, Google Docs, and video editing platforms, streamlining your content creation and management process.",
                },
                {
                  icon: "📊",
                  title: "Advanced Content Insights",
                  desc: "Gain actionable insights into the performance of your content, with analytics that help you understand engagement and optimize your audio and video strategies.",
                },
              ].map((feature, index) => (
                <div className="col-md-4" key={index}>
                  <div className="custom-card text-light p-4 h-100 border border-primary rounded">
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
                  q: "What is Resemble.ai?",
                  a: "Resemble.ai is an advanced AI platform for creating and customizing high-quality voiceovers. It enables users to generate realistic, synthetic voices for audio and video content creation, including voice cloning, overdubbing, and multilingual support.",
                },
                {
                  q: "How does Resemble.ai enhance voice content creation?",
                  a: "Resemble.ai leverages cutting-edge AI to generate natural-sounding voiceovers, allowing creators to customize voices, edit speech, and automate the production of audio content efficiently. It also features tools for voice synthesis, speech editing, and voice cloning.",
                },
                {
                  q: "Who can benefit from using Resemble.ai?",
                  a: "Content creators, podcasters, video producers, marketers, educators, and developers can all benefit from Resemble.ai’s powerful AI-driven tools to enhance their audio content creation process.",
                },
                {
                  q: "What is Voice Cloning in Resemble.ai?",
                  a: "Voice Cloning in Resemble.ai allows users to replicate their own voice or create a completely new synthetic voice, which can be used to generate voiceovers, edit audio, or produce personalized content.",
                },
                {
                  q: "Can I create content from existing scripts with Resemble.ai?",
                  a: "Yes, you can upload your scripts or written content into Resemble.ai, and the platform will generate voiceovers or audio based on the text, simplifying the content creation process.",
                },
                {
                  q: "Does Resemble.ai offer voice customization?",
                  a: "Yes, Resemble.ai provides various customization options, allowing users to adjust the pitch, tone, and speed of voices, as well as choose from a variety of accents and styles to match the project's requirements.",
                },
                {
                  q: "What is the audio quality in Resemble.ai?",
                  a: "Resemble.ai ensures high-quality audio with clear and lifelike voice synthesis. Users can also fine-tune the output for pitch, pace, and other characteristics to achieve professional-quality results.",
                },
                {
                  q: "Does Resemble.ai integrate with other tools?",
                  a: "Yes, Resemble.ai integrates seamlessly with popular platforms such as video editing software, WordPress, and cloud storage services, allowing you to streamline your workflow and content production.",
                },
                {
                  q: "Can I use Resemble.ai with WordPress?",
                  a: "Absolutely, Resemble.ai works with WordPress, enabling you to generate voiceovers for blog posts, podcasts, or any other audio content directly within the WordPress platform.",
                },
                {
                  q: "Is Resemble.ai easy to use?",
                  a: "Yes, Resemble.ai offers an intuitive interface designed for users at any skill level. Whether you're a beginner or an advanced creator, you can start generating high-quality voice content in minutes.",
                },
                {
                  q: "Does Resemble.ai provide multilingual support?",
                  a: "Yes, Resemble.ai supports multiple languages, allowing users to create voiceovers for global audiences, helping content creators reach a diverse and international user base.",
                },
                {
                  q: "How accurate are Resemble.ai's voiceovers?",
                  a: "Resemble.ai utilizes state-of-the-art machine learning models to generate voiceovers that are highly realistic, with natural speech patterns, cadence, and tone, closely mimicking human voices.",
                },
                {
                  q: "Can multiple users collaborate on Resemble.ai?",
                  a: "Yes, Resemble.ai supports collaborative features, allowing teams to work together on voice content projects, share edits, and provide real-time feedback, enhancing productivity.",
                },
                {
                  q: "What formats does Resemble.ai support for audio input?",
                  a: "Resemble.ai accepts various audio formats, including pre-recorded voice files and scripts, which can be converted into text for editing and voice synthesis.",
                },
                {
                  q: "Does Resemble.ai help with content scripting?",
                  a: "Resemble.ai doesn’t provide full scriptwriting, but it offers tools to optimize existing scripts for voiceover generation, ensuring smooth and coherent audio output.",
                },
                {
                  q: "Can Resemble.ai help with content in different languages?",
                  a: "Yes, Resemble.ai supports multiple languages, enabling users to create voiceovers and audio content for a wide range of languages, making it ideal for international projects.",
                },
                {
                  q: "Is Resemble.ai cloud-based?",
                  a: "Yes, Resemble.ai is a fully cloud-based platform, meaning you can access your projects from any device with an internet connection and collaborate with team members seamlessly.",
                },
                {
                  q: "How often can I generate content with Resemble.ai?",
                  a: "The frequency of voice generation depends on your subscription plan. Different plans offer varying levels of access to voiceover generation, editing features, and voice customizations.",
                },
                {
                  q: "Can Resemble.ai track content performance?",
                  a: "While Resemble.ai doesn’t offer built-in analytics, you can track the performance of your content through external platforms such as social media, podcast hosting services, or video hosting platforms.",
                },
                {
                  q: "How secure is my data on Resemble.ai?",
                  a: "Resemble.ai uses advanced encryption techniques to protect your content and personal data, ensuring that all your voice and project files are kept safe from unauthorized access.",
                },
                {
                  q: "Is customer support available?",
                  a: "Yes, Resemble.ai offers excellent customer support through live chat, email, and an extensive help center, where users can find solutions to common issues or ask for assistance.",
                },
                {
                  q: "Is there a free version of Resemble.ai?",
                  a: "Resemble.ai offers a free trial with limited access to its features. To access the full range of functionality, users can subscribe to one of the paid plans.",
                },
                {
                  q: "How do I start using Resemble.ai?",
                  a: "To begin, visit resemble.ai, create an account, and upload your content or script to start generating your first AI-powered voiceover or audio project.",
                },
              ]

                .map((item, i) => `{...item, id: faq${i} }`)
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
                    Why <strong>Resemble.ai</strong> is the Ideal Platform for
                    Custom Voiceovers and Audio Content Creation
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>Resemble.ai</strong> transforms the way you create
                    audio content with its advanced AI-driven voice synthesis
                    and customization tools. Here’s why it’s a top choice for
                    creators looking to elevate their audio projects:
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
                      <strong>High-Quality, Realistic Voice Generation:</strong>{" "}
                      <strong>Resemble.ai</strong> produces high-fidelity,
                      lifelike voiceovers that sound natural and expressive,
                      making it perfect for professional-level content creation.
                    </li>
                    <li className="mb-3">
                      <strong>Fully Customizable Voice Profiles:</strong> With
                      the ability to fine-tune voice attributes such as pitch,
                      speed, and tone, <strong>Resemble.ai</strong> allows you
                      to create personalized voiceovers that perfectly match
                      your brand or project.
                    </li>
                    <li className="mb-3">
                      <strong>Supports Multiple Languages:</strong>{" "}
                      <strong>Resemble.ai</strong> offers multilingual
                      capabilities, making it a versatile choice for creators
                      working on global projects and reaching diverse audiences.
                    </li>
                    <li className="mb-3">
                      <strong>Easy-to-Use Platform:</strong> Whether you're a
                      beginner or an experienced content creator,{" "}
                      <strong>Resemble.ai</strong> features an intuitive
                      interface that simplifies the process of generating and
                      editing voiceovers.
                    </li>
                    <li className="mb-3">
                      <strong>
                        Fast Voice Synthesis for Quick Turnaround:
                      </strong>{" "}
                      With <strong>Resemble.ai</strong>, you can efficiently
                      create high-quality voiceovers in no time, helping you
                      speed up your content production.
                    </li>
                    <li className="mb-3">
                      <strong>Collaboration and Integration Tools:</strong>{" "}
                      Collaborate seamlessly with your team by sharing
                      voiceovers and editing projects in real time, and
                      integrate with other content creation platforms for a
                      smooth workflow.
                    </li>
                    <li className="mb-3">
                      <strong>Scalable for Any Project Size:</strong> Whether
                      you're a solo creator or part of a large production team,{" "}
                      <strong>Resemble.ai</strong> offers scalable solutions
                      tailored to meet the demands of your audio content
                      creation process.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        );

      case "Pros & Cons":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-2">
              Why <strong>Resemble.ai</strong> Is a Leading Choice for
              AI-Generated Voiceovers
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>Resemble.ai</strong> offers an innovative AI-powered
              platform for generating high-quality, natural-sounding voiceovers.
              Let's explore the benefits and potential limitations of using this
              tool for content creators.
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
                    <strong>High-Quality Voice Generation:</strong>{" "}
                    <strong>Resemble.ai</strong> produces lifelike voiceovers
                    with remarkable accuracy, ideal for content creators who
                    require professional-grade audio.
                  </li>
                  <li className="mb-2">
                    <strong>Customizable Voices:</strong> The platform allows
                    users to personalize voices, adjusting tone, pitch, and
                    pace, ensuring the generated voice aligns with specific
                    brand or project needs.
                  </li>
                  <li className="mb-2">
                    <strong>Quick Voice Synthesis:</strong> Generate
                    high-quality audio quickly, which is essential for
                    fast-paced content creation, including podcasts, video
                    narration, and more.
                  </li>
                  <li className="mb-2">
                    <strong>Wide Application Flexibility:</strong>{" "}
                    <strong>Resemble.ai</strong> is suitable for a variety of
                    content formats, from video and podcasts to voiceovers for
                    advertisements and digital media.
                  </li>
                  <li className="mb-2">
                    <strong>Seamless Integration with Tools:</strong> The
                    platform integrates easily with popular content creation
                    tools, allowing users to generate and incorporate voiceovers
                    smoothly into their projects.
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
                <h5 className="text-warning text-start mb-4">⚠ Cons</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Limited Accent Diversity:</strong> While{" "}
                    <strong>Resemble.ai</strong> provides high-quality voices,
                    some users may find the range of accents and dialects
                    available somewhat limited, especially for more niche needs.
                  </li>
                  <li className="mb-2">
                    <strong>Pricing for High Volume Usage:</strong> For heavy
                    users or large-scale projects, the pricing structure can be
                    a consideration, especially if advanced features are
                    necessary for extensive voiceover work.
                  </li>
                  <li className="mb-2">
                    <strong>Advanced Customization Requires Expertise:</strong>{" "}
                    Fine-tuning voices for specific styles or complex projects
                    may require a bit of learning, making it challenging for
                    beginners to fully leverage all customization features.
                  </li>
                  <li className="mb-2">
                    <strong>Dependence on Internet Connection:</strong> As with
                    many cloud-based services, a reliable internet connection is
                    essential for accessing <strong>Resemble.ai</strong>, which
                    could affect the user experience in regions with
                    connectivity issues.
                  </li>
                  <li className="mb-2">
                    <strong>Storage and File Management:</strong> Users with
                    large audio projects may encounter storage limitations,
                    requiring additional management or investment in higher
                    storage tiers.
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
              Discover Leading Alternatives for Next-Level Audio and Voiceover
              Solutions
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>Resemble.ai</strong> offers powerful AI-driven voice
              generation tools, there are several other platforms that provide
              unique features to enhance your audio content creation across
              diverse use cases.
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
                    <strong>Resemble.ai</strong>: A sophisticated platform for
                    creating highly customizable voiceovers, offering
                    personalized voice generation for various media formats and
                    content creation needs.
                  </li>
                  <li className="mb-2">
                    <strong>Descript</strong>: A versatile tool that combines
                    audio and video editing with powerful transcription and
                    voice synthesis, enabling easy spoken word editing and
                    content creation.
                  </li>
                  <li className="mb-2">
                    <strong>Speechelo</strong>: A beginner-friendly
                    text-to-speech software that converts text into realistic,
                    natural-sounding voiceovers, ideal for creating diverse
                    content like tutorials and podcasts.
                  </li>
                  <li className="mb-2">
                    <strong>Murf.ai</strong>: Known for its high-quality,
                    AI-generated voiceovers that provide seamless integration
                    for creators looking to add lifelike audio to their content
                    quickly.
                  </li>
                  <li className="mb-2">
                    <strong>Sonix</strong>: An innovative transcription service
                    with top-notch audio editing tools and multilingual support,
                    perfect for global content creators seeking quality
                    transcriptions and audio features.
                  </li>
                  <li className="mb-2">
                    <strong>Play.ht</strong>: A reliable text-to-speech platform
                    that delivers a wide selection of voices and languages,
                    ideal for generating voiceovers for podcasts and voice-based
                    content.
                  </li>
                  <li className="mb-2">
                    <strong>iSpeech</strong>: Provides high-quality
                    text-to-speech services with a broad selection of voices and
                    file formats, catering to both personal and commercial use.
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
              <h1>Resemble.ai:</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Resemble.ai is a cutting-edge AI-powered platform specializing
                in voice synthesis and voice cloning. The platform offers a
                range of services, including text-to-speech conversion, AI voice
                generation, voiceovers, and much more. It is widely used across
                industries for content creation, customer engagement, marketing,
                and customer support automation. Resemble.ai utilizes advanced
                machine learning algorithms and natural language processing
                (NLP) techniques to create highly realistic and customizable
                voice models, empowering businesses and content creators to
                leverage AI for voice-related applications.
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
              <img
                src={resemble}
                style={{ MaxWidth: "100%", height: "300px" }}
              />
            </div>
          </div>

          <section style={{ backgroundColor: "#1b1f2b", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">
                Transform Your Audio Creation with Resemble.ai
              </p>
              <h2
                className="text-white"
                style={{ fontWeight: "600", marginBottom: "1rem" }}
              >
                Explore How Resemble.ai Revolutionizes Your Voiceover and Audio
                Production Workflow
              </h2>
              <p
                style={{
                  color: "#ccc",
                  marginBottom: "2rem",
                  fontStyle: "italic",
                }}
              >
                Resemble.ai empowers creators to generate high-quality, lifelike
                voiceovers from text, offering customizable features for precise
                control over audio, tone, and style.
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
                      Turn Text Into Natural Voiceovers Instantly
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Resemble.ai converts text into expressive,
                      natural-sounding voiceovers in real-time, perfect for
                      content creation across various platforms.
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
                      Personalize Your Voiceovers to Match Your Brand
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      With Resemble.ai, you can fine-tune voices with features
                      like pitch, pace, and tone to create audio that reflects
                      your brand's personality and message.
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
                      Seamless Integration with Your Favorite Platforms
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Resemble.ai integrates effortlessly with leading platforms
                      for video, podcasting, and content creation, allowing you
                      to generate voiceovers quickly and efficiently.
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
            <h4 className="mb-3">Ready to get started with ResembleAI?</h4>
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

export default ResembleAI;
