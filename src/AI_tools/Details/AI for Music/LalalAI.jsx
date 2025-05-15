import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import lala from "../../../../public/assets/Img/Ai for Music/10.png";
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
const LalalAI = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="Boomy AI Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Transform Your Music with Boomy AI's Innovative Features
                </p>
                <h3>
                  Instant, Copyright-Free Music Creation at Your Fingertips
                </h3>
              </div>
              {[
                {
                  icon: "🎶",
                  title: "Instant Music Generation",
                  desc: "Boomy AI lets you create unique, royalty-free music instantly. Customize the genre, mood, and tempo to generate your perfect track without any copyright concerns.",
                },
                {
                  icon: "🔄",
                  title: "Effortless Customization",
                  desc: "With Boomy AI, you have full control over your music. Adjust instruments, tempo, and mood to match your project's needs and creative vision.",
                },
                {
                  icon: "🎚️",
                  title: "Seamless Integration with Projects",
                  desc: "Easily integrate Boomy AI's royalty-free music into your videos, apps, podcasts, and more without any licensing issues.",
                },
                {
                  icon: "🌍",
                  title: "Global Music Style Adaptability",
                  desc: "Create music that resonates globally. Boomy AI lets you generate music in diverse cultural and stylistic genres for any project.",
                },
                {
                  icon: "📊",
                  title: "Smart Music Suggestions",
                  desc: "Boomy AI provides real-time suggestions to help refine your tracks. Get feedback and fine-tune your compositions as you work.",
                },
                {
                  icon: "🤝",
                  title: "Collaborative Music Creation",
                  desc: "Boomy AI supports collaboration, allowing multiple users to edit and refine music tracks together in real-time.",
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
                  q: "What is LALAL.AI?",
                  a: "LALAL.AI is a cutting-edge AI-powered audio separation platform that enables users to extract individual stems from mixed audio tracks. Whether you're remixing, karaoke creation, or analyzing music, LALAL.AI gives you control over your audio elements.",
                },
                {
                  q: "How does LALAL.AI work?",
                  a: "LALAL.AI uses deep learning models to separate vocals, instruments, and other elements from a mixed audio track. Simply upload your audio, and the AI will process the stems for you in just minutes.",
                },
                {
                  q: "Can LALAL.AI separate music into different stems?",
                  a: "Yes, LALAL.AI can separate audio into multiple stems such as vocals, drums, bass, piano, and more. It offers a high-quality separation process that ensures precise extraction.",
                },
                {
                  q: "Is LALAL.AI free to use?",
                  a: "LALAL.AI offers a free plan with limited access to audio separation. For unlimited access and higher-quality output, a paid subscription is required.",
                },
                {
                  q: "Can I use LALAL.AI's separated audio commercially?",
                  a: "Yes, the separated audio can be used for commercial purposes, including music production, remixing, and any other creative projects, as long as the source material is licensed or original.",
                },
                {
                  q: "How does LALAL.AI prevent copyright issues?",
                  a: "LALAL.AI separates tracks based on the existing audio, but it doesn't create new content. Copyright concerns are handled by ensuring users have the right to use the original material or by using royalty-free audio.",
                },
                {
                  q: "Can I modify the separated audio using LALAL.AI?",
                  a: "LALAL.AI offers users the ability to separate the elements of a track, but any further modifications, such as editing, mixing, or arrangement, will need to be done in a separate digital audio workstation (DAW).",
                },
                {
                  q: "What customization options are available in LALAL.AI?",
                  a: "LALAL.AI allows users to choose the audio track to process and select from multiple separation options based on the desired stems (e.g., vocals, drums, etc.).",
                },
                {
                  q: "Does LALAL.AI support multi-instrument tracks?",
                  a: "Yes, LALAL.AI can process multi-instrument tracks and separate them into individual stems such as vocals, guitar, bass, drums, and others.",
                },
                {
                  q: "Can I export the separated audio from LALAL.AI?",
                  a: "Yes, LALAL.AI allows you to export the separated audio stems in formats such as MP3 and WAV, which are compatible with most audio production software and platforms.",
                },
                {
                  q: "Does LALAL.AI have a mobile app?",
                  a: "Currently, LALAL.AI is a web-based platform, and there is no standalone mobile app. However, you can access and use the platform through a mobile browser.",
                },
                {
                  q: "How accurate is LALAL.AI's audio separation?",
                  a: "LALAL.AI uses advanced AI algorithms that provide high accuracy in separating vocals and instruments from mixed tracks, but the effectiveness may vary depending on the quality and complexity of the audio.",
                },
                {
                  q: "Can multiple users collaborate on a project in LALAL.AI?",
                  a: "LALAL.AI currently does not support multi-user collaboration directly within the platform. However, you can download and share separated stems with collaborators for use in other software.",
                },
                {
                  q: "What is the LALAL.AI workflow?",
                  a: "The LALAL.AI workflow is simple: upload your mixed audio track, select the type of separation you need, let the AI process it, and then download the separated stems to use in your projects.",
                },
                {
                  q: "What makes LALAL.AI different from other audio separation tools?",
                  a: "LALAL.AI stands out with its high-quality stem separation powered by deep learning, its user-friendly interface, and fast processing time, making it perfect for both beginners and professionals.",
                },
                {
                  q: "How do I start using LALAL.AI?",
                  a: "To start using LALAL.AI, visit their website, sign up for an account, and choose a subscription plan. After that, you can upload your audio and start separating tracks.",
                },
                {
                  q: "Does LALAL.AI offer a free trial?",
                  a: "Yes, LALAL.AI offers a free plan with limited access. To access premium features such as higher-quality outputs and larger file sizes, a subscription is required.",
                },
                {
                  q: "Can I use LALAL.AI for personal projects?",
                  a: "Yes, LALAL.AI is ideal for personal projects such as remixing music, creating karaoke tracks, or analyzing audio for creative works like podcasts and video production.",
                },
                {
                  q: "Is LALAL.AI suitable for professional use?",
                  a: "Yes, LALAL.AI is widely used by professionals in industries such as music production, film scoring, DJing, and remixing. It provides high-quality audio separation for commercial projects.",
                },
                {
                  q: "Can I adjust the length of the separated audio in LALAL.AI?",
                  a: "LALAL.AI does not allow you to adjust the length of the separated stems directly. However, you can trim or loop the stems in a separate DAW after downloading them.",
                },
                {
                  q: "How does LALAL.AI handle audio separation and arrangement?",
                  a: "LALAL.AI uses advanced algorithms to separate audio into individual stems. You can then use a DAW to arrange, mix, and produce the final track.",
                },
                {
                  q: "Can LALAL.AI create unique stems every time?",
                  a: "Yes, LALAL.AI creates stems based on the audio uploaded by the user, ensuring each separation is tailored to the specific track for unique and accurate results.",
                },
                {
                  q: "Can I separate audio without any music knowledge on LALAL.AI?",
                  a: "Yes, LALAL.AI is designed to be easy to use, even for those with no music knowledge. Simply upload your track and let the AI do the work for you.",
                },
                {
                  q: "What file formats can I export stems to from LALAL.AI?",
                  a: "LALAL.AI allows you to export stems in MP3 and WAV formats, which are compatible with most audio editing software.",
                },
                {
                  q: "What types of projects can benefit from LALAL.AI?",
                  a: "LALAL.AI is perfect for remixing music, creating karaoke tracks, analyzing audio, and any project that requires high-quality stem separation.",
                },
                {
                  q: "Does LALAL.AI have customer support?",
                  a: "Yes, LALAL.AI offers customer support via email and provides a comprehensive help center to assist with any issues or questions related to using the platform.",
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
                    Why <strong>LALAL.AI</strong> is the Perfect Companion for
                    Effortless, High-Quality Music Separation
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>LALAL.AI</strong> provides the most advanced audio
                    separation technology to extract vocals, instruments, and
                    other elements from music tracks. Whether you're remixing
                    songs, creating karaoke versions, or performing audio
                    analysis, here’s why it’s the go-to tool for music
                    professionals and creators:
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
                      <strong>Advanced Stem Separation:</strong>{" "}
                      <strong>LALAL.AI</strong> uses state-of-the-art AI
                      algorithms to deliver the highest-quality vocal and
                      instrumental stems from your tracks.
                    </li>
                    <li className="mb-3">
                      <strong>Fast and Efficient Processing:</strong> Separate
                      your tracks in just a few minutes, allowing you to quickly
                      move forward with your project without waiting long for
                      results.
                    </li>
                    <li className="mb-3">
                      <strong>Easy to Use:</strong> With a simple, intuitive
                      interface, <strong>LALAL.AI</strong> makes
                      professional-grade audio separation accessible to anyone,
                      no technical expertise required.
                    </li>
                    <li className="mb-3">
                      <strong>Ideal for Remixing and Karaoke:</strong> Perfect
                      for music producers, DJs, remixers, and karaoke creators
                      looking for high-quality stems to work with.
                    </li>
                    <li className="mb-3">
                      <strong>Cloud-Based and Accessible:</strong> Use{" "}
                      <strong>LALAL.AI</strong> from any device with an internet
                      connection—no installation required.
                    </li>
                    <li className="mb-3">
                      <strong>Supports a Wide Range of Formats:</strong>{" "}
                      <strong>LALAL.AI</strong> works with various audio
                      formats, making it versatile and easy to integrate into
                      your existing music production workflow.
                    </li>
                    <li className="mb-3">
                      <strong>High Compatibility with Other Tools:</strong>{" "}
                      After separating your stems, you can easily import them
                      into your favorite DAWs (Digital Audio Workstations) for
                      further editing or mixing.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Start Using <strong>LALAL.AI</strong> for High-Quality
                      Audio Separation
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
              Why <strong>LALAL.AI</strong> is Revolutionizing AI-Powered Music
              Separation
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>LALAL.AI</strong> offers cutting-edge stem separation
              technology that helps creators and music professionals easily
              extract vocals, instruments, and other elements from tracks. Let's
              explore the powerful benefits and a few limitations of this tool
              for music producers, remixers, and content creators.
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
                    <strong>High-Quality Separation:</strong> LALAL.AI provides
                    exceptional stem separation, allowing you to accurately
                    isolate vocals, instruments, and other audio elements.
                  </li>
                  <li className="mb-2">
                    <strong>Fast Processing:</strong> The platform processes
                    audio tracks quickly, delivering separated stems in just a
                    few minutes, making it perfect for fast-paced projects.
                  </li>
                  <li className="mb-2">
                    <strong>Easy to Use:</strong> LALAL.AI’s user-friendly
                    interface ensures that even those with minimal technical
                    expertise can easily separate stems without complex setups.
                  </li>
                  <li className="mb-2">
                    <strong>High Compatibility:</strong> The tool supports a
                    wide range of audio formats and integrates well with other
                    music production software, enhancing workflow efficiency.
                  </li>
                  <li className="mb-2">
                    <strong>Cloud-Based:</strong> As a cloud-based solution,
                    LALAL.AI enables users to access the platform from any
                    device, anywhere with an internet connection.
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
                    <strong>Limited Free Usage:</strong> LALAL.AI offers a
                    limited number of free tracks for separation, and users may
                    need to purchase credits for additional usage.
                  </li>
                  <li className="mb-2">
                    <strong>Not Suitable for Complex Mixes:</strong> While the
                    platform performs well on simple tracks, it might struggle
                    with more complex mixes where different elements overlap
                    extensively.
                  </li>
                  <li className="mb-2">
                    <strong>Cloud Dependency:</strong> As a cloud-based tool,
                    LALAL.AI requires a stable internet connection, which may be
                    an issue for users in low-connectivity regions.
                  </li>
                  <li className="mb-2">
                    <strong>Limited Control Over Separation:</strong> Users have
                    limited control over the algorithms used for separation,
                    meaning results may not always meet professional-grade
                    expectations.
                  </li>
                  <li className="mb-2">
                    <strong>Subscription-Based:</strong> Some advanced features
                    and higher-quality separation are locked behind a paywall,
                    which could be a barrier for casual users or those on a
                    tight budget.
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
              Explore Top Alternatives to LALAL.AI for Music Separation and
              Creation
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>LALAL.AI</strong> provides advanced stem separation
              technology, several other platforms offer unique features for
              AI-driven audio separation and music creation, helping creators
              achieve seamless results.
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
                    <strong>LALAL.AI</strong>: An AI-powered stem separation
                    tool that allows users to separate vocals, instruments, and
                    other audio components with unparalleled precision. Ideal
                    for music producers, remixers, and video editors.
                  </li>
                  <li className="mb-2">
                    <strong>iZotope RX</strong>: A professional audio repair and
                    separation tool that helps isolate individual elements in a
                    mix, perfect for audio engineers and sound designers looking
                    for precise control over their tracks.
                  </li>
                  <li className="mb-2">
                    <strong>Demucs</strong>: A deep learning-based tool designed
                    for vocal and instrumental separation. It offers
                    high-quality results for users seeking to extract clear
                    vocals or isolated instruments for remixing or reworking
                    music.
                  </li>
                  <li className="mb-2">
                    <strong>Stem Separation by Spleeter</strong>: Developed by
                    Deezer, Spleeter is an open-source tool that provides fast
                    and efficient vocal/instrument separation, making it popular
                    for musicians and audio engineers.
                  </li>
                  <li className="mb-2">
                    <strong>AudioDenoise</strong>: Focused on reducing noise and
                    isolating vocals from tracks, AudioDenoise is ideal for
                    cleaning up audio recordings and improving the clarity of
                    your music projects.
                  </li>
                  <li className="mb-2">
                    <strong>PhonicMind</strong>: A powerful tool for stem
                    separation and remixing, PhonicMind allows you to isolate
                    vocals and instruments with remarkable accuracy, offering
                    flexibility for music producers and remix artists.
                  </li>
                  <li className="mb-2">
                    <strong>VocalRemover.org</strong>: A straightforward
                    platform for separating vocals from music tracks, providing
                    users with a simple interface for quick stem separation
                    without the need for complex software.
                  </li>
                  <li className="mb-2">
                    <strong>Moises.ai</strong>: An AI-powered platform for
                    separating stems and remixing music tracks, Moises.ai is
                    especially useful for musicians, content creators, and
                    educators seeking an easy way to work with separated audio
                    elements.
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
              <h1>LALAL.AI:</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                LALAL.AI is an advanced AI-powered music separation tool that
                uses machine learning to separate vocals, instruments, and other
                stems in audio files. With its deep learning capabilities,
                LALAL.AI allows users to extract individual elements of a song,
                such as vocals, drums, bass, and other instruments, with high
                precision and quality. This makes it an essential tool for music
                producers, video editors, and content creators who need clean
                and separate audio tracks for various projects.
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
              <img src={lala} style={{ MaxWidth: "100%", height: "300px" }} />
            </div>
          </div>

          <section style={{ backgroundColor: "#1b1f2b", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">Elevate Your Music with LALAL.AI</p>
              <h2
                className="text-white"
                style={{ fontWeight: "600", marginBottom: "1rem" }}
              >
                Discover How LALAL.AI Revolutionizes Music Separation and
                Creation
              </h2>
              <p
                style={{
                  color: "#ccc",
                  marginBottom: "2rem",
                  fontStyle: "italic",
                }}
              >
                LALAL.AI empowers creators to separate stems, remix, and
                customize music instantly, adapting to your needs in real-time,
                all without any copyright issues.
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
                      Instantly Separate Music Stems with Precision
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      LALAL.AI allows you to separate vocal and instrumental
                      tracks with unmatched accuracy, providing you with
                      complete control over your audio for remixing and
                      repurposing.
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
                      Remix and Customize Music with Full Control
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      LALAL.AI gives you the flexibility to adjust and remix
                      individual audio stems, allowing you to personalize tracks
                      to fit your unique creative vision.
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
                      Seamless Integration for Any Project
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      With LALAL.AI, you can effortlessly integrate your
                      separated stems into music production software, video
                      editing tools, and other creative platforms, ensuring a
                      smooth workflow.
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
            <h4 className="mb-3">Ready to get started with LalalAI?</h4>
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

export default LalalAI;
