import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import boomy from "../../../../public/assets/Img/Ai for Music/21.png";

import screen1 from "../../../../public/assets/Img/Ai for Music/boomy-screenshot1.jpg";
import screen2 from "../../../../public/assets/Img/Ai for Music/boomy-screenshot2.jpg";
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
const BoomyAI = () => {
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
                  desc: "Boomy AI lets you create unique, royalty-free music instantly. Simply customize genre, mood, and tempo to generate your perfect track without any copyright issues.",
                },
                {
                  icon: "🔄",
                  title: "Effortless Customization",
                  desc: "Boomy AI gives you complete control over your music. Easily adjust instruments, tempo, and mood to align with your project needs and vision.",
                },
                {
                  icon: "🎚",
                  title: "Easy Integration with Projects",
                  desc: "Boomy AI seamlessly integrates with your creative workflow. Add your AI-generated music to videos, apps, podcasts, and more, all without worrying about licensing.",
                },
                {
                  icon: "🌍",
                  title: "Global Music Style Adaptability",
                  desc: "Create music that resonates with a worldwide audience. Boomy AI allows you to generate music in a variety of cultural and stylistic genres, perfect for any project.",
                },
                {
                  icon: "📊",
                  title: "Smart Music Suggestions",
                  desc: "Boomy AI provides real-time suggestions for improving your music. Get feedback and fine-tune your tracks to perfection as you go.",
                },
                {
                  icon: "🤝",
                  title: "Collaborative Music Creation",
                  desc: "Collaborate with others in real time. Boomy AI supports team efforts, allowing multiple users to edit and refine music tracks together.",
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
                  q: "What is Boomy AI?",
                  a: "Boomy AI is an innovative AI-powered music generation platform that enables users to create original, royalty-free music tailored to their specific needs. It provides creators complete control over the composition, mood, and instruments without any copyright concerns.",
                },
                {
                  q: "How does Boomy AI work?",
                  a: "Boomy AI leverages deep learning models to generate music based on user preferences. You can choose the genre, tempo, mood, and structure, and the AI will produce a track that aligns with your specifications.",
                },
                {
                  q: "Can Boomy AI create music in different genres?",
                  a: "Yes, Boomy AI can generate music across a wide variety of genres, including pop, electronic, cinematic, rock, and more. The platform allows users to select their desired genre and musical style.",
                },
                {
                  q: "Is Boomy AI free to use?",
                  a: "Boomy AI offers a free plan with basic access to its features. However, to unlock the full range of customization options and premium music tracks, a paid subscription is required.",
                },
                {
                  q: "Can I use Boomy AI's music commercially?",
                  a: "Yes, Boomy AI provides royalty-free music, which means you can use the generated tracks in commercial projects such as videos, advertisements, games, and more, without any copyright concerns.",
                },
                {
                  q: "How does Boomy AI prevent copyright issues?",
                  a: "Boomy AI generates completely original music with a royalty-free license, ensuring you can use the tracks without worrying about copyright issues. It guarantees that the music is free to use for personal and commercial purposes.",
                },
                {
                  q: "Can I modify the music generated by Boomy AI?",
                  a: "Yes, Boomy AI allows users to modify various elements of the generated music, such as tempo, instruments, and structure. You can adjust the track’s mood, style, and composition in real-time.",
                },
                {
                  q: "What customization options are available in Boomy AI?",
                  a: "Boomy AI offers several customization features, including mood, tempo, genre, and instrument selection. You can adjust the structure of the music and personalize it to suit your specific project needs.",
                },
                {
                  q: "Does Boomy AI support multi-instrument tracks?",
                  a: "Yes, Boomy AI supports multi-instrument compositions, allowing you to select the instruments for your music and control their presence in the final arrangement.",
                },
                {
                  q: "Can I export the music created with Boomy AI?",
                  a: "Yes, you can export your music in formats such as MP3 and WAV, which are compatible with various video editing software, audio production tools, and game development platforms.",
                },
                {
                  q: "Does Boomy AI have a mobile app?",
                  a: "Currently, Boomy AI is a web-based platform and does not have a standalone mobile app. However, you can access and use the platform via a mobile browser.",
                },
                {
                  q: "How accurate is Boomy AI's music creation?",
                  a: "Boomy AI’s deep learning algorithms are trained to generate music that closely matches your specified parameters, ensuring that the final tracks align with your creative vision.",
                },
                {
                  q: "Can multiple users collaborate on a project in Boomy AI?",
                  a: "Yes, Boomy AI supports collaboration, allowing teams to work together on music creation and editing in real-time, making it ideal for group projects and creative teams.",
                },
                {
                  q: "What is the Boomy AI workflow?",
                  a: "The Boomy AI workflow is simple: select your desired genre, mood, and tempo, let the AI generate the track, then customize it further by editing structure, instruments, and arrangement before exporting.",
                },
                {
                  q: "What makes Boomy AI different from other music generators?",
                  a: "Boomy AI stands out with its user-friendly interface, extensive customization options, and its ability to generate royalty-free, original music tailored to your exact needs, all in real-time.",
                },
                {
                  q: "How do I start using Boomy AI?",
                  a: "To start using Boomy AI, simply visit their website, sign up for an account, and choose a subscription plan. After that, you can start creating music and customizing it for your projects.",
                },
                {
                  q: "Does Boomy AI offer a free trial?",
                  a: "Yes, Boomy AI offers a free plan, giving users basic access to music generation features. To unlock all features, a premium subscription is required.",
                },
                {
                  q: "Can I use Boomy AI for personal projects?",
                  a: "Yes, Boomy AI is perfect for personal projects such as YouTube videos, podcasts, and other creative works. It allows you to easily generate and customize music to suit your style and needs.",
                },
                {
                  q: "Is Boomy AI suitable for professional use?",
                  a: "Yes, Boomy AI is widely used by professionals in industries like video production, marketing, gaming, and advertising. It provides high-quality, customizable, royalty-free music that’s perfect for commercial projects.",
                },
                {
                  q: "Can I adjust the length of the generated music in Boomy AI?",
                  a: "Yes, Boomy AI lets you adjust the length of the music, whether you need a short jingle or a full-length track, making it versatile for different types of projects.",
                },
                {
                  q: "How does Boomy AI handle music composition and arrangement?",
                  a: "Boomy AI uses advanced algorithms to generate music based on learned patterns and structures. You can adjust the arrangement and instruments to personalize the composition.",
                },
                {
                  q: "Can Boomy AI create unique music every time?",
                  a: "Yes, Boomy AI creates unique tracks each time based on your chosen parameters, ensuring fresh and original music for every project.",
                },
                {
                  q: "Can I create music without any music knowledge on Boomy AI?",
                  a: "Yes, Boomy AI is designed to be user-friendly, allowing creators with no music background to generate high-quality music quickly. The platform’s interface is simple and intuitive.",
                },
                {
                  q: "What file formats can I export music to from Boomy AI?",
                  a: "Boomy AI allows you to export your tracks in MP3 and WAV formats, which are compatible with a variety of creative and editing software.",
                },
                {
                  q: "What types of projects can benefit from Boomy AI?",
                  a: "Boomy AI is ideal for YouTube videos, podcasts, advertisements, games, apps, and any other creative work that requires custom music.",
                },
                {
                  q: "Does Boomy AI have customer support?",
                  a: "Yes, Boomy AI offers customer support via email and provides a comprehensive help center to assist with any issues or inquiries about using the platform.",
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
                src={screen1}
                alt="boomyai"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={screen2}
                alt="boomyai"
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
                    Why <strong>Boomy AI</strong> is the Perfect Companion for
                    Effortless, Copyright-Free Music Creation
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>Boomy AI</strong> empowers creators to generate
                    personalized, royalty-free music tracks in minutes. Whether
                    you’re producing content for YouTube, games, ads, or
                    presentations, here’s why it’s the go-to tool for modern
                    creators:
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
                      <strong>AI-Driven, Copyright-Free Music:</strong>{" "}
                      <strong>Boomy AI</strong> generates unique tracks with a
                      built-in royalty-free license—ideal for both personal and
                      commercial use without licensing concerns.
                    </li>
                    <li className="mb-3">
                      <strong>Instant Music Customization:</strong> Easily
                      modify mood, genre, and length of your tracks in
                      real-time—Boomy adapts quickly to your creative
                      preferences.
                    </li>
                    <li className="mb-3">
                      <strong>No Music Skills Required:</strong> Designed for
                      everyone, from beginners to pros,{" "}
                      <strong>Boomy AI</strong> lets anyone craft high-quality
                      music with no prior experience or musical training.
                    </li>
                    <li className="mb-3">
                      <strong>Perfect for All Creators:</strong> Whether you're
                      a YouTuber, marketer, game developer, or podcaster,{" "}
                      <strong>Boomy AI</strong> helps you create the perfect
                      soundtrack for your content.
                    </li>
                    <li className="mb-3">
                      <strong>Cloud-Based and Accessible:</strong> Create,
                      preview, and export music from any device with internet
                      access—no software installation necessary.
                    </li>
                    <li className="mb-3">
                      <strong>Quick Music Creation:</strong> Generate music in
                      minutes to keep your projects moving forward without long
                      wait times for production.
                    </li>
                    <li className="mb-3">
                      <strong>Wide Genre Selection:</strong> Choose from a vast
                      and ever-expanding library of genres and moods to suit
                      your specific creative needs.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Start Using <strong>Boomy AI</strong> to Power Your Music
                      Projects
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
              Why <strong>Boomy AI</strong> is Revolutionizing AI Music Creation
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>Boomy AI</strong> enables creators to generate original,
              royalty-free music in minutes, with intuitive customization.
              Explore the powerful benefits and a few limitations for content
              creators, musicians, and developers.
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
                    <strong>Instant Music Creation:</strong> Boomy AI allows
                    users to create fully original music in just minutes by
                    selecting preferred styles, genres, and moods.
                  </li>
                  <li className="mb-2">
                    <strong>Royalty-Free Tracks:</strong> All generated music is
                    copyright-free, giving creators the freedom to use the
                    tracks commercially without worrying about licensing issues.
                  </li>
                  <li className="mb-2">
                    <strong>Beginner-Friendly:</strong> The platform is designed
                    for ease of use, making music production accessible even for
                    those without musical experience or training.
                  </li>
                  <li className="mb-2">
                    <strong>Versatile for Content Creation:</strong> Boomy AI is
                    perfect for content creators, streamers, marketers, and even
                    game developers who need quick, customizable music tracks
                    for projects.
                  </li>
                  <li className="mb-2">
                    <strong>Wide Genre Selection:</strong> From EDM to lo-fi
                    beats, Boomy offers a variety of music genres, ensuring it
                    can suit different content types and creative needs.
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
                    <strong>Limited Customization:</strong> While Boomy allows
                    some customization, it may not offer the deep,
                    professional-level control that more advanced users or music
                    producers require.
                  </li>
                  <li className="mb-2">
                    <strong>Basic Music Output:</strong> The music generated by
                    Boomy AI might not always capture the complex emotional
                    depth of compositions created by professional musicians.
                  </li>
                  <li className="mb-2">
                    <strong>Subscription-Based Model:</strong> Access to
                    advanced features requires a subscription, which might be a
                    barrier for casual users or those on a budget.
                  </li>
                  <li className="mb-2">
                    <strong>Algorithmic Limitations:</strong> Although
                    versatile, the music is generated based on predefined
                    algorithms, which means users are somewhat constrained by
                    the platform's templates.
                  </li>
                  <li className="mb-2">
                    <strong>Requires Internet Access:</strong> Boomy AI is a
                    cloud-based platform, so a stable internet connection is
                    required, which could be inconvenient in low-connectivity
                    areas.
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
              Explore Top Alternatives to Boomy AI for Music Generation
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>Boomy AI</strong> offers powerful music creation
              tools that help users effortlessly generate original, royalty-free
              music, several other platforms provide unique features for
              AI-driven sound creation and audio customization.
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
                    <strong>Boomy AI</strong>: A quick and easy platform to
                    create royalty-free music tracks with full control over
                    genre, mood, and style. Perfect for content creators,
                    marketers, and influencers.
                  </li>
                  <li className="mb-2">
                    <strong>Soundraw AI</strong>: An intuitive platform that
                    provides real-time customization of AI-generated music.
                    Ideal for creators looking for deep customization and
                    effortless track generation.
                  </li>
                  <li className="mb-2">
                    <strong>Amper Music</strong>: A straightforward tool for
                    generating original music tracks based on user-selected
                    parameters such as genre, mood, and length. Best for those
                    in need of quick, high-quality music.
                  </li>
                  <li className="mb-2">
                    <strong>AIVA</strong>: Known for its classical music
                    creation capabilities, AIVA uses deep learning to compose
                    emotionally resonant pieces for films, games, and
                    commercials.
                  </li>
                  <li className="mb-2">
                    <strong>Soundful</strong>: A tool designed for fast creation
                    of royalty-free background music, particularly useful for
                    YouTubers, podcasters, and social media creators.
                  </li>
                  <li className="mb-2">
                    <strong>Beatoven.ai</strong>: Tailored for video producers
                    and podcasters, it offers AI-generated music that adapts
                    based on scene mood and emotional transitions.
                  </li>
                  <li className="mb-2">
                    <strong>Ecrett Music</strong>: With a simple interface,
                    Ecrett Music allows users to generate custom music based on
                    scene, mood, and genre—ideal for beginners and video
                    editors.
                  </li>
                  <li className="mb-2">
                    <strong>Melobytes</strong>: A creative platform that
                    transforms text, images, and data into experimental sound
                    and music, perfect for those interested in generative art
                    and music.
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
          <section style={{ backgroundColor: "#1b1f2b", padding: "3rem 0" }}>
            <div className="container text-start">
              <div className="row d-flex align-items-center justify-content-between mb-4">
                {/* Image Section - mobile pe pehle dikhana, desktop pe baad me */}
                <div
                  className="col-12 col-md-6 mb-2 mb-md-0 order-1 order-md-2"
                  style={{ textAlign: "center" }}
                >
                  <img
                    src={boomy}
                    alt="Boomy AI"
                    className="img-fluid"
                    style={{
                      maxWidth: "100%",
                      height: "300px",
                      objectFit: "contain",
                    }}
                  />
                </div>

                {/* Text Section - mobile pe baad me, desktop pe pehle */}
                <div
                  className="col-md-6 col-12 order-2 order-md-1"
                 
                >
                  <p className="text-primary mb-1">Write better, faster</p>
                  <h1>Boomy AI</h1>
                  <div className="text-warning mb-2">⭐⭐⭐⭐⭐</div>
                  <p className="mb-3">
                    Boomy is an AI music generator that allows users to create
                    unique, royalty-free music in just a few clicks. The
                    platform harnesses advanced artificial intelligence to
                    produce custom music tracks without requiring any prior
                    knowledge of music theory or composition. Whether you’re a
                    content creator, YouTuber, filmmaker, or social media
                    influencer, Boomy offers an accessible, fast, and
                    cost-effective way to generate high-quality music for
                    various projects, including videos, podcasts, games, and
                    more.
                  </p>

                  <div className="mb-3">
                    <a
                      href="https://boomy.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary me-2"
                    >
                      Explore Tool
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-primary">
                Elevate Your Music Creation with Boomy AI
              </p>
              <h2
                className="text-white"
                style={{ fontWeight: "600", marginBottom: "1rem" }}
              >
                Discover How Boomy AI Transforms Your Music Creation and
                Composition Process
              </h2>
              <p
                style={{
                  color: "#ccc",
                  marginBottom: "2rem",
                  fontStyle: "italic",
                }}
              >
                Boomy AI empowers creators to instantly generate unique,
                royalty-free music, adapting to your preferences and style in
                real-time.
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
                      Create Music Instantly, No Experience Required
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Boomy AI allows anyone, regardless of experience, to
                      create unique music in minutes. Select your genre, mood,
                      and style, and let AI handle the rest, all while ensuring
                      the track is 100% royalty-free.
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
                      Personalize Your Music with Complete Flexibility
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Boomy AI gives you full control to fine-tune your tracks.
                      Adjust tempo, instrumentation, and more to match your
                      exact creative vision. Customize your music as much as you
                      want.
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
                      Effortlessly Integrate Across All Platforms
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      With Boomy AI, you can integrate your music seamlessly
                      into videos, podcasts, games, and commercials, ensuring
                      that your creations are ready for all platforms.
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
        </div>
      </div>
    </>
  );
};

export default BoomyAI;
