import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";

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
const VoiceModAI = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="Voicemod AI Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Transform Your Audio Content with Voicemod AI's Real-Time
                  Voice Modulation
                </p>
                <h3>
                  Unlock the Power of AI-Powered Voice Effects and Modulation
                  Tools
                </h3>
              </div>
              {[
                {
                  icon: "🎙️",
                  title: "Real-Time Voice Modulation",
                  desc: "Voicemod AI allows you to instantly change your voice during live streaming or gaming, applying effects like pitch changes, robotic voices, and more in real time.",
                },
                {
                  icon: "🎧",
                  title: "Customizable Voice Effects",
                  desc: "With a wide array of customizable voice effects, you can create unique voices to match your project's style, whether for live streams, gaming, or content creation.",
                },
                {
                  icon: "⚙️",
                  title: "Seamless Integration with Popular Platforms",
                  desc: "Voicemod AI integrates smoothly with platforms like Discord, OBS, and Twitch, making it easy to enhance your streaming and content creation experience.",
                },
                {
                  icon: "🌍",
                  title: "Global Accessibility",
                  desc: "Voicemod AI supports multiple languages and provides a diverse range of voice effects, allowing you to engage audiences from different linguistic backgrounds.",
                },
                {
                  icon: "🔄",
                  title: "Real-Time Collaboration",
                  desc: "Collaborate with your team on voice content projects, refine your effects together, and provide immediate feedback for fast, efficient content production.",
                },
                {
                  icon: "📊",
                  title: "Content Optimization",
                  desc: "Gain insights into how your voice content is performing, whether it’s through engagement metrics from streaming platforms or feedback from your audience.",
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
                  q: "What is Voicemod AI?",
                  a: "Voicemod AI is a real-time voice modulation platform powered by artificial intelligence. It enables users to modify their voice in real-time, offering a wide range of customizable effects and voices for content creators, streamers, and more.",
                },
                {
                  q: "How does Voicemod AI enhance voice content creation?",
                  a: "Voicemod AI leverages cutting-edge AI technology to provide real-time voice transformations, offering users the ability to create unique, expressive voices for live streaming, gaming, voiceovers, and more. The platform features tools for pitch adjustment, tone variation, and applying various sound effects.",
                },
                {
                  q: "Who can benefit from using Voicemod AI?",
                  a: "Voicemod AI is perfect for streamers, gamers, content creators, podcasters, and video producers. It’s also ideal for developers looking to integrate real-time voice modulation into their applications or platforms.",
                },
                {
                  q: "What is Real-Time Voice Modulation in Voicemod AI?",
                  a: "Real-time voice modulation in Voicemod AI allows users to instantly transform their voice during live sessions, including streaming and gaming. You can apply effects like pitch changes, robotic voices, and more while speaking.",
                },
                {
                  q: "Can I create content from existing scripts with Voicemod AI?",
                  a: "Yes, Voicemod AI allows users to upload scripts and apply voice effects to the generated audio, simplifying the process of creating voiceovers or podcasts from written content.",
                },
                {
                  q: "Does Voicemod AI offer voice customization?",
                  a: "Absolutely! Voicemod AI provides extensive voice customization options, including altering pitch, speed, tone, and effects, ensuring the voice perfectly matches your creative vision.",
                },
                {
                  q: "What is the audio quality in Voicemod AI?",
                  a: "Voicemod AI ensures high-quality audio with realistic voice transformations. You can customize and fine-tune the audio output for professional-grade results in real-time.",
                },
                {
                  q: "Does Voicemod AI integrate with other tools?",
                  a: "Yes, Voicemod AI integrates seamlessly with platforms like OBS, Discord, and Twitch, allowing users to enhance their streaming and content creation workflows with ease.",
                },
                {
                  q: "Can I use Voicemod AI with Discord?",
                  a: "Definitely! Voicemod AI works with Discord, enabling you to transform your voice in real-time during chats, calls, or gaming sessions.",
                },
                {
                  q: "Is Voicemod AI easy to use?",
                  a: "Yes, Voicemod AI is user-friendly with an intuitive interface, making it easy for both beginners and professionals to start using voice modulation and create engaging audio content right away.",
                },
                {
                  q: "Does Voicemod AI support multiple languages?",
                  a: "Voicemod AI currently supports multiple languages, allowing users to apply voice effects to content in different languages and reach a broader, more diverse audience.",
                },
                {
                  q: "How accurate are Voicemod AI’s voice modulations?",
                  a: "Voicemod AI’s voice modulations are highly accurate, offering natural-sounding transformations that maintain the tone, pitch, and cadence of human speech while adding creative effects.",
                },
                {
                  q: "Can multiple users collaborate on Voicemod AI?",
                  a: "Yes, Voicemod AI supports collaboration, allowing multiple users to work together in real-time to create and modify voice content.",
                },
                {
                  q: "What formats does Voicemod AI support for audio input?",
                  a: "Voicemod AI accepts a variety of input formats, including microphone audio, pre-recorded files, and scripts, which can be processed and modulated in real-time.",
                },
                {
                  q: "Does Voicemod AI assist with content scripting?",
                  a: "Voicemod AI doesn’t provide scriptwriting services, but it offers tools for transforming existing content into engaging voiceovers with various effects and modulation.",
                },
                {
                  q: "Can Voicemod AI help with content in different languages?",
                  a: "Yes, Voicemod AI supports content creation in multiple languages, enabling users to create voiceovers and live audio content for a global audience.",
                },
                {
                  q: "Is Voicemod AI cloud-based?",
                  a: "Yes, Voicemod AI is cloud-based, meaning users can access and modify their audio projects from any device with an internet connection, making collaboration easier.",
                },
                {
                  q: "How often can I generate content with Voicemod AI?",
                  a: "Content generation with Voicemod AI depends on your subscription plan, with different plans offering varying access to voice modulations, customization options, and integration tools.",
                },
                {
                  q: "Can Voicemod AI track content performance?",
                  a: "Voicemod AI doesn’t offer built-in analytics, but you can track the performance of your content on external platforms such as social media, streaming services, or hosting platforms.",
                },
                {
                  q: "How secure is my data on Voicemod AI?",
                  a: "Voicemod AI uses encryption to protect user data and audio projects, ensuring your content remains secure from unauthorized access or misuse.",
                },
                {
                  q: "Is customer support available?",
                  a: "Yes, Voicemod AI offers customer support through various channels, including live chat, email, and a help center with resources to assist you with any issues.",
                },
                {
                  q: "Is there a free version of Voicemod AI?",
                  a: "Voicemod AI offers a free version with limited access to features. To unlock the full range of customization and voice modulation tools, users can subscribe to a premium plan.",
                },
                {
                  q: "How do I start using Voicemod AI?",
                  a: "To start using Voicemod AI, simply visit voicemod.com, create an account, download the software, and start modifying your voice in real-time with the available effects.",
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
                    Why <strong>Voicemod AI</strong> is the Ideal Platform for
                    Voice Modulation and Real-Time Audio Creation
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>Voicemod AI</strong> revolutionizes the way you
                    create and modify voiceovers with its cutting-edge real-time
                    voice modulation and synthesis tools. Here’s why it stands
                    out as the go-to choice for creators looking to enhance
                    their audio projects:
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
                      <strong>Real-Time Voice Modulation:</strong>{" "}
                      <strong>Voicemod AI</strong> allows for seamless,
                      real-time voice transformations, making it perfect for
                      live streaming, gaming, and creating dynamic voiceovers
                      during broadcasts or recordings.
                    </li>
                    <li className="mb-3">
                      <strong>Customizable Voice Effects:</strong> From changing
                      pitch to adding unique sound effects,{" "}
                      <strong>Voicemod AI</strong> offers complete customization
                      to suit your project’s needs, enhancing audio content with
                      creative flair.
                    </li>
                    <li className="mb-3">
                      <strong>Wide Variety of Voices and Styles:</strong>{" "}
                      <strong>Voicemod AI</strong> includes an extensive library
                      of voice styles, from robotic and cartoonish to more
                      natural and human-like tones, giving creators the
                      flexibility to choose the perfect voice for any context.
                    </li>
                    <li className="mb-3">
                      <strong>User-Friendly Interface:</strong> Whether you're
                      an experienced professional or a beginner,{" "}
                      <strong>Voicemod AI</strong> boasts an intuitive and
                      easy-to-navigate interface, allowing for quick access to
                      voice modulation features.
                    </li>
                    <li className="mb-3">
                      <strong>
                        Instant Voice Customization for Fast Turnaround:
                      </strong>{" "}
                      With <strong>Voicemod AI</strong>, you can generate and
                      modify voiceovers quickly, enabling a faster content
                      creation process, especially useful for real-time use like
                      gaming or streaming.
                    </li>
                    <li className="mb-3">
                      <strong>
                        Integrates with Streaming and Content Creation
                        Platforms:
                      </strong>{" "}
                      Seamlessly integrate with popular tools like OBS, Discord,
                      and more to add dynamic voice effects and modifications to
                      your live streams and recordings.
                    </li>
                    <li className="mb-3">
                      <strong>Scalable for Different Needs:</strong> Whether
                      you're a casual user creating fun content or a
                      professional stream team, <strong>Voicemod AI</strong>{" "}
                      offers scalable options to suit both small and large-scale
                      projects.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Start Using <strong>Voicemod AI</strong> to Transform Your
                      Audio Content
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
              Why <strong>Voicemod AI</strong> Stands Out as a Leading
              AI-Powered Audio Solution
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>Voicemod AI</strong> is a cutting-edge platform designed
              for real-time voice modulation and synthesis. Let's dive into the
              key advantages and potential drawbacks of using this tool for
              content creators and streamers.
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
                    <strong>Real-Time Voice Transformation:</strong>{" "}
                    <strong>Voicemod AI</strong> offers dynamic, real-time voice
                    modulation, making it perfect for streamers, gamers, and
                    content creators who need instant voice changes during live
                    broadcasts or recordings.
                  </li>
                  <li className="mb-2">
                    <strong>Extensive Sound Effects Library:</strong> The
                    platform includes a broad array of sound effects, allowing
                    users to add personality and depth to their voiceovers,
                    podcasts, and gaming sessions.
                  </li>
                  <li className="mb-2">
                    <strong>Customization for Unique Voices:</strong>{" "}
                    <strong>Voicemod AI</strong> allows for deep customization
                    of voice characteristics, such as pitch, tone, speed, and
                    modulation, enabling users to create unique audio
                    experiences.
                  </li>
                  <li className="mb-2">
                    <strong>High-Quality Audio Output:</strong> Despite its
                    real-time processing, the platform delivers clear, lifelike
                    audio, ensuring that voiceovers and sound effects remain
                    professional-grade.
                  </li>
                  <li className="mb-2">
                    <strong>Easy Integration with Popular Platforms:</strong>{" "}
                    <strong>Voicemod AI</strong> integrates seamlessly with
                    major streaming and content creation tools, enhancing
                    workflow and reducing friction for creators.
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
                    <strong>Limited Accent and Language Options:</strong> While{" "}
                    <strong>Voicemod AI</strong> offers diverse voice
                    modulation, the selection of accents and languages may not
                    fully cater to all regional or niche content needs.
                  </li>
                  <li className="mb-2">
                    <strong>Subscription Costs for Advanced Features:</strong>{" "}
                    Users may find the pricing for premium features and voice
                    effects a bit steep, especially for heavy usage or
                    larger-scale projects.
                  </li>
                  <li className="mb-2">
                    <strong>Requires Learning Curve for Customization:</strong>{" "}
                    Advanced voice customization and sound effect use can take
                    time to master, particularly for beginners who might find
                    the controls complex at first.
                  </li>
                  <li className="mb-2">
                    <strong>Dependence on Stable Internet Connection:</strong>{" "}
                    As with most cloud-based services, a strong internet
                    connection is needed for real-time processing, which can be
                    a limitation in areas with connectivity issues.
                  </li>
                  <li className="mb-2">
                    <strong>Storage Limitations for Extensive Projects:</strong>{" "}
                    For users working on long-term or large-scale audio
                    projects, storage space can become a constraint, requiring
                    additional upgrades for higher storage capacity.
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
              Explore Top Alternatives for Innovative Voiceover and Audio
              Solutions
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>Voicemod AI</strong> offers advanced voice
              modulation and synthesis capabilities, there are several other
              platforms that provide specialized tools for different audio
              content creation needs.
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
                    <strong>Voicemod AI</strong>: A leading platform for
                    real-time voice transformation, offering voice modulation,
                    sound effects, and voiceover generation for content
                    creators, gamers, and streamers.
                  </li>
                  <li className="mb-2">
                    <strong>Descript</strong>: A robust tool combining
                    transcription, audio editing, and voice synthesis, enabling
                    creators to seamlessly edit both video and audio with
                    AI-powered features.
                  </li>
                  <li className="mb-2">
                    <strong>Speechelo</strong>: A beginner-friendly
                    text-to-speech software that transforms text into realistic
                    voiceovers, perfect for instructional content, video
                    narration, and podcasts.
                  </li>
                  <li className="mb-2">
                    <strong>Murf.ai</strong>: An AI-driven platform designed to
                    generate high-quality voiceovers quickly, with a strong
                    focus on professional-grade voice synthesis for creators in
                    various industries.
                  </li>
                  <li className="mb-2">
                    <strong>Sonix</strong>: A cutting-edge transcription service
                    with integrated audio editing tools, multilingual support,
                    and advanced features for creators seeking top-quality
                    voiceovers and transcriptions.
                  </li>
                  <li className="mb-2">
                    <strong>Play.ht</strong>: A flexible text-to-speech service
                    offering a broad range of voices and languages, ideal for
                    generating engaging voiceovers for podcasts, audiobooks, and
                    other audio content.
                  </li>
                  <li className="mb-2">
                    <strong>iSpeech</strong>: A high-quality text-to-speech
                    platform with multiple voice options and file format
                    support, catering to both personal and commercial use for
                    audio creation and voiceover work.
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
              <h1>Voicemod AI:</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Voicemod AI is an advanced voice modulation tool that allows
                users to change their voice in real time. Whether you're a
                gamer, a content creator, a streamer, or a business looking to
                engage your audience, Voicemod provides a broad range of
                customizable voice effects, making it one of the most popular
                tools in the voice modulation market. It uses AI-powered voice
                synthesis technology, allowing users to apply voice changes,
                effects, and transformations for both entertainment and
                professional use. Voicemod supports a variety of platforms,
                including Discord, Twitch, YouTube, and many others.
              </p>

              <div className="mb-3">
                <span className="badge bg-primary me-2">Image Generation</span>
                <span className="badge bg-success me-2">Creative</span>
                <span className="badge bg-warning text-dark">Paid</span>
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
                Transform Your Audio Experience with Voicemod AI
              </p>
              <h2
                className="text-white"
                style={{ fontWeight: "600", marginBottom: "1rem" }}
              >
                Discover How Voicemod AI Transforms Your Voiceover and Audio
                Creation Process
              </h2>
              <p
                style={{
                  color: "#ccc",
                  marginBottom: "2rem",
                  fontStyle: "italic",
                }}
              >
                Voicemod AI enables creators to craft high-quality, dynamic
                voiceovers with complete control over the audio tone and
                effects, offering endless creative possibilities for all types
                of media.
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
                      Create Unique Voiceovers in Real-Time
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Voicemod AI instantly transforms your text into
                      expressive, high-quality voiceovers, designed for seamless
                      content creation across diverse platforms.
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
                      Customize Your Voice with Precision
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Voicemod AI provides full customization over voice tone,
                      pitch, and speed, allowing you to align voiceovers with
                      your project’s unique style and messaging.
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
                      Integrate with Leading Platforms Seamlessly
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Voicemod AI integrates smoothly with popular content
                      creation tools, from podcasts to video platforms, enabling
                      you to generate voiceovers and effects effortlessly.
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

          <div className="bg-primary text-center text-light rounded-4 p-5 mt-5">
            <h4 className="mb-3">Ready to get started with VoiceModAI?</h4>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default VoiceModAI;
