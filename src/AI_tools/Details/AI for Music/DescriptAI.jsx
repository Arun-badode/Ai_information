import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import DescriptAI from "../AI Video & Animation Tools/DescriptAI";

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
const DescriptAI = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="Descript Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Enhance Your Audio and Video Creation with Descript
                </p>
                <h3>
                  Unlock the Potential of AI-Powered Editing and Voiceover Tools
                </h3>
              </div>
              {[
                {
                  icon: "🎙️",
                  title: "AI-Driven Transcription and Editing",
                  desc: "Descript uses advanced AI to transcribe and edit audio and video, making it easy to create professional content by simply editing text.",
                },
                {
                  icon: "🎧",
                  title: "Custom Voice Synthesis",
                  desc: "With Descript’s Overdub feature, generate realistic voiceovers in your own voice or select from a variety of voice styles to match your content's tone.",
                },
                {
                  icon: "⚙️",
                  title: "Real-Time Editing and Feedback",
                  desc: "Get instant results as you edit, allowing you to fine-tune your audio and video in real-time to create the perfect final product.",
                },
                {
                  icon: "🌍",
                  title: "Multilingual Content Creation",
                  desc: "Create voiceovers and transcriptions in multiple languages, ensuring your content reaches a global audience with ease.",
                },
                {
                  icon: "🔄",
                  title: "Smooth Integrations with Creative Tools",
                  desc: "Descript integrates seamlessly with platforms like Google Docs, Dropbox, and other video editing tools, making it easy to manage your workflow.",
                },
                {
                  icon: "📊",
                  title: "Content Performance Insights",
                  desc: "Track the performance of your audio and video content with built-in analytics, helping you understand audience engagement and improve your projects.",
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
                  q: "What is Descript?",
                  a: "Descript is an all-in-one audio and video editing platform powered by AI. It allows you to transcribe, edit, and create high-quality content with ease, offering tools for video editing, podcasting, and voiceover creation.",
                },
                {
                  q: "How does Descript enhance audio and video content creation?",
                  a: "Descript utilizes advanced AI to transcribe audio and video, allowing users to edit content directly from the text. It also features powerful tools like overdubbing, screen recording, and multi-voice synthesis to streamline content production.",
                },
                {
                  q: "Who can benefit from using Descript?",
                  a: "Podcasters, video creators, marketers, educators, and anyone involved in media production can benefit from Descript’s innovative features that make content creation faster and more professional.",
                },
                {
                  q: "What is an Overdub in Descript?",
                  a: "Overdub in Descript is an AI-powered voice synthesis tool that allows users to create voiceovers or replace dialogue by typing text, which is then converted into speech in a natural-sounding voice.",
                },
                {
                  q: "Can I create content from existing scripts with Descript?",
                  a: "Yes, you can upload your existing scripts or content into Descript, and the platform will automatically generate voiceovers or help you edit your video/audio based on the text.",
                },
                {
                  q: "Does Descript offer voice suggestions?",
                  a: "Yes, Descript provides various voice options, including different accents, tones, and styles, so you can choose the most suitable voice for your project.",
                },
                {
                  q: "What is the audio quality in Descript?",
                  a: "Descript delivers high-quality audio output, with customizable settings for pitch, speed, and tone, ensuring that your voiceovers and recordings sound professional.",
                },
                {
                  q: "Does Descript integrate with other tools?",
                  a: "Yes, Descript integrates with popular platforms like Google Docs, Dropbox, and various video editing software, enhancing your workflow with seamless compatibility.",
                },
                {
                  q: "Can I use Descript with WordPress?",
                  a: "Yes, Descript offers integration with WordPress, enabling you to create voiceovers for your blog posts and other content easily.",
                },
                {
                  q: "Is Descript easy to use?",
                  a: "Yes, Descript is designed with an intuitive interface that allows users of all experience levels to create professional-quality audio and video content without complex technical skills.",
                },
                {
                  q: "Does Descript provide voice customization?",
                  a: "Yes, Descript allows you to adjust the pitch, speed, and tone of voices to suit the needs of your project, giving you full control over your audio output.",
                },
                {
                  q: "How accurate are Descript’s voiceovers?",
                  a: "Descript uses cutting-edge AI technology to create voiceovers that are highly accurate and realistic, closely mimicking human speech with natural cadence and tone.",
                },
                {
                  q: "Can multiple users collaborate on Descript?",
                  a: "Yes, Descript supports team collaboration, allowing multiple users to work together on audio and video projects, making edits and providing real-time feedback.",
                },
                {
                  q: "What formats does Descript support for audio input?",
                  a: "Descript accepts various input formats, including audio files and scripts, and converts them into editable text for easy content manipulation.",
                },
                {
                  q: "Does Descript assist with content scripting?",
                  a: "Descript doesn’t provide full scriptwriting, but it offers tools to help you create scripts that are optimized for voiceover generation, ensuring smooth audio output.",
                },
                {
                  q: "Can Descript help with multilingual content?",
                  a: "Yes, Descript supports multiple languages, allowing you to create voiceovers for diverse global audiences with ease.",
                },
                {
                  q: "Is Descript cloud-based?",
                  a: "Yes, Descript is fully cloud-based, allowing you to work on projects from any device with internet access and collaborate seamlessly with your team.",
                },
                {
                  q: "How often can I generate content with Descript?",
                  a: "The frequency of voiceover generation depends on your subscription plan. Different plans provide access to varying numbers of voiceovers and editing features each month.",
                },
                {
                  q: "Can Descript track content performance?",
                  a: "While Descript does not provide built-in performance analytics, you can track engagement through external tools like podcast hosting platforms or social media analytics.",
                },
                {
                  q: "Does Descript integrate with other platforms?",
                  a: "Yes, Descript integrates with a wide range of platforms, such as Google Docs, WordPress, and video editing tools, making it easier to create and manage content across different platforms.",
                },
                {
                  q: "How secure is my data on Descript?",
                  a: "Descript uses strong encryption protocols to ensure the security of your data, protecting your content and personal information from unauthorized access.",
                },
                {
                  q: "Is customer support available?",
                  a: "Yes, Descript offers comprehensive customer support through live chat, email, and a detailed help center to assist with any inquiries or issues.",
                },
                {
                  q: "Is there a free version of Descript?",
                  a: "Descript offers a free trial with limited access to its features. To unlock full functionality, a paid subscription is required.",
                },
                {
                  q: "How do I start using Descript?",
                  a: "To get started, visit descript.com, sign up for an account, and begin uploading your content to generate your first AI-powered voiceover or video edit.",
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
                    Why <strong>Descript</strong> is the Perfect Platform for
                    Audio and Video Content Creation
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>Descript</strong> revolutionizes the way audio and
                    video content is created and edited. With its AI-powered
                    transcription, voiceover tools, and intuitive editing
                    features, here's why <strong>Descript</strong> is the go-to
                    platform for content creators:
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
                      <strong>AI-Driven Transcription and Editing:</strong>{" "}
                      <strong>Descript</strong> provides highly accurate
                      transcriptions and allows for seamless audio and video
                      editing through a text-based interface.
                    </li>
                    <li className="mb-3">
                      <strong>
                        Overdub Feature for Custom Voice Generation:
                      </strong>{" "}
                      With the Overdub feature, users can generate voiceovers
                      that mimic their own voice or create unique voice profiles
                      for different tones and styles.
                    </li>
                    <li className="mb-3">
                      <strong>Multilingual Capabilities:</strong>{" "}
                      <strong>Descript</strong> supports multiple languages,
                      making it a powerful tool for global content creation and
                      expanding your reach to diverse audiences.
                    </li>
                    <li className="mb-3">
                      <strong>User-Friendly Interface:</strong> Designed for
                      both beginners and professionals,{" "}
                      <strong>Descript</strong> offers an intuitive platform
                      that simplifies complex editing tasks, allowing you to
                      focus on your content.
                    </li>
                    <li className="mb-3">
                      <strong>Fast and Efficient Production:</strong> With{" "}
                      <strong>Descript</strong>, you can speed up your content
                      creation process through automated transcription, quick
                      edits, and seamless voice synthesis.
                    </li>
                    <li className="mb-3">
                      <strong>Collaboration Features:</strong>{" "}
                      <strong>Descript</strong> makes it easy for teams to
                      collaborate on audio and video projects, enabling
                      real-time editing, feedback, and integration with other
                      creative tools.
                    </li>
                    <li className="mb-3">
                      <strong>Scalable for All Content Creators:</strong>{" "}
                      Whether you're a solo creator, a business, or an
                      enterprise, <strong>Descript</strong> offers scalable
                      solutions to meet your audio and video content needs.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Start Using <strong>Descript</strong> to Elevate Your
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
              Why <strong>Descript</strong> Stands Out in Audio and Video
              Editing
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>Descript</strong> provides an innovative, all-in-one
              platform for seamless transcription, voiceover editing, and
              content creation. Let's explore the advantages and areas for
              growth of this tool.
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
                    <strong>All-in-One Audio and Video Editing:</strong>{" "}
                    <strong>Descript</strong> simplifies editing both audio and
                    video by allowing you to edit text transcripts directly,
                    making content creation faster and more intuitive.
                  </li>
                  <li className="mb-2">
                    <strong>Voice Synthesis and Overdubbing:</strong> Descript’s
                    overdub feature allows users to generate and edit voiceovers
                    using AI, creating high-quality, personalized voice content.
                  </li>
                  <li className="mb-2">
                    <strong>Multilingual Support:</strong> Descript supports
                    multiple languages, giving users the flexibility to work
                    with diverse global audiences.
                  </li>
                  <li className="mb-2">
                    <strong>User-Friendly Interface:</strong> Descript’s
                    intuitive interface is accessible for both beginners and
                    advanced users, simplifying complex editing tasks.
                  </li>
                  <li className="mb-2">
                    <strong>Collaboration Features:</strong> The platform allows
                    multiple users to collaborate on audio and video projects,
                    facilitating seamless teamwork.
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
                    <strong>Limited Customization for Overdub Voices:</strong>{" "}
                    While Descript’s voice synthesis is impressive, users may
                    find it difficult to create highly nuanced voices or
                    specific accents with its current offerings.
                  </li>
                  <li className="mb-2">
                    <strong>Pricing Considerations:</strong> Descript’s pricing
                    can be a barrier for smaller creators or small businesses,
                    especially if advanced features are needed for large-scale
                    projects.
                  </li>
                  <li className="mb-2">
                    <strong>Learning Curve for Advanced Features:</strong> While
                    the platform is user-friendly, mastering its advanced
                    features—such as multi-layered video editing and
                    overdubbing—may take some time.
                  </li>
                  <li className="mb-2">
                    <strong>Occasional Syncing Issues:</strong> Some users
                    report occasional syncing issues between the transcript text
                    and the audio/video during real-time editing, especially
                    with large projects.
                  </li>
                  <li className="mb-2">
                    <strong>Storage Limitations:</strong> While Descript’s cloud
                    storage is convenient, users working on extensive
                    video/audio projects might run into storage constraints,
                    requiring additional management or upgrades.
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
              Explore Top Alternatives for Advanced Audio and Voiceover
              Solutions
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>Murf.ai</strong> provides outstanding AI-driven
              voiceover and audio content tools, several other platforms offer
              unique features to expand your audio content capabilities across
              different use cases.
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
                    <strong>Murf.ai</strong>: An advanced platform for
                    generating lifelike, customizable voiceovers powered by AI,
                    designed for seamless integration across various media
                    types.
                  </li>
                  <li className="mb-2">
                    <strong>Descript</strong>: A dynamic tool that combines
                    audio and video editing with powerful transcription and
                    voice synthesis, enabling easy spoken word editing and
                    content creation.
                  </li>
                  <li className="mb-2">
                    <strong>Speechelo</strong>: A user-friendly text-to-speech
                    software designed to transform written text into realistic
                    audio, suitable for a wide range of content creation needs.
                  </li>
                  <li className="mb-2">
                    <strong>Resemble AI</strong>: A voice generation platform
                    that allows for the creation of personalized voices and
                    dynamic voiceovers, tailored to various media formats for
                    unique content delivery.
                  </li>
                  <li className="mb-2">
                    <strong>Sonix</strong>: A cutting-edge transcription service
                    with high-quality audio editing features, supporting
                    multilingual capabilities for creators working with global
                    audiences.
                  </li>
                  <li className="mb-2">
                    <strong>Play.ht</strong>: A text-to-speech platform that
                    generates realistic audio with a variety of voices and
                    languages, perfect for podcasts and other voice-driven
                    content.
                  </li>
                  <li className="mb-2">
                    <strong>iSpeech</strong>: Offers high-quality text-to-speech
                    services with a broad range of voices, supporting multiple
                    file formats for both personal and commercial use.
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
              <h1>Descript:</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Descript is a powerful, AI-driven software tool designed for
                audio editing, video editing, podcasting, content creation, and
                transcription. By combining advanced AI technologies with an
                intuitive user interface, Descript enables users to quickly edit
                their audio and video files using text-based commands, making it
                a valuable tool for creators, businesses, and professionals in
                various industries.
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
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5IyEpRsYY8JsmOlBNKKmWf5jlOBFs3Ustg&s"
                style={{ MaxWidth: "100%", height: "300px" }}
              />
            </div>
          </div>

          <section style={{ backgroundColor: "#1b1f2b", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">
                Elevate Your Audio Experience with Murf.ai
              </p>
              <h2
                className="text-white"
                style={{ fontWeight: "600", marginBottom: "1rem" }}
              >
                Discover How Murf.ai Transforms Your Audio and Content Creation
                Process
              </h2>
              <p
                style={{
                  color: "#ccc",
                  marginBottom: "2rem",
                  fontStyle: "italic",
                }}
              >
                Murf.ai empowers creators by transforming text into
                high-quality, customizable voiceovers tailored to your unique
                needs, helping you craft professional audio content.
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
                      Transform Any Text into Natural-Sounding Audio
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Murf.ai effortlessly converts your text into lifelike
                      voiceovers, bringing your content to life with authentic,
                      human-like voices that perfectly suit your tone and
                      message.
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
                      Tailor Audio to Fit Your Unique Style
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Customize your voiceovers with adjustable features such as
                      pitch, speed, and tone, ensuring your audio content
                      matches the exact mood and style you envision.
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
                      Integrate Effortlessly with Your Tools
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Murf.ai seamlessly integrates with a variety of content
                      creation platforms, ensuring a smooth and efficient
                      process for generating professional-quality voiceovers for
                      your videos, podcasts, and more.
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
            <h4 className="mb-3">Ready to get started with DescriptAI?</h4>
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

export default DescriptAI;
