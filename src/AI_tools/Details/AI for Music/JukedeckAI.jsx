import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

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
const JukedeckAI = () => {
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
                  q: "What is Jukedeck AI?",
                  a: "Jukedeck AI is an innovative AI-driven music creation platform designed to help users generate custom music tracks for various creative projects. Whether you're working on videos, podcasts, games, or ads, Jukedeck AI allows you to craft unique, royalty-free music.",
                },
                {
                  q: "How does Jukedeck AI work?",
                  a: "Jukedeck AI uses artificial intelligence to compose music tailored to your specific preferences. Users can choose genres, moods, tempos, and instrumentation, and the AI generates a fully customizable track based on these inputs.",
                },
                {
                  q: "Can Jukedeck AI create music for different types of projects?",
                  a: "Yes, Jukedeck AI can generate music for a wide variety of applications, including background music for videos, podcasts, games, and advertising, offering versatility and customization.",
                },
                {
                  q: "Is Jukedeck AI free to use?",
                  a: "Jukedeck AI offers a free plan with limited access to music creation features. For full access to premium music outputs and additional customization options, a paid subscription is required.",
                },
                {
                  q: "Can I use music created by Jukedeck AI commercially?",
                  a: "Yes, music created with Jukedeck AI is royalty-free and can be used in commercial projects such as videos, games, ads, and more, as long as you comply with the platform’s terms of service.",
                },
                {
                  q: "How does Jukedeck AI handle copyright issues?",
                  a: "Jukedeck AI creates original music, eliminating copyright concerns. The platform ensures that the generated music is unique and royalty-free, giving users full rights for commercial and personal use.",
                },
                {
                  q: "Can I modify the music created by Jukedeck AI?",
                  a: "Yes, Jukedeck AI allows users to adjust various aspects of the music, such as tempo, instrumentation, and genre. For more advanced editing, users can download the track and edit it in their preferred DAW (Digital Audio Workstation).",
                },
                {
                  q: "What customization options are available in Jukedeck AI?",
                  a: "Jukedeck AI offers extensive customization options, including genre selection, mood settings, tempo adjustments, and instrument choices, allowing you to create music that perfectly fits your project.",
                },
                {
                  q: "Does Jukedeck AI support multi-track projects?",
                  a: "Yes, Jukedeck AI supports multi-track compositions, enabling users to create complex arrangements with different layers and elements tailored to their specific needs.",
                },
                {
                  q: "Can I export the music from Jukedeck AI?",
                  a: "Yes, Jukedeck AI allows you to export your created music in various formats such as MP3 and WAV, which are compatible with most audio production tools.",
                },
                {
                  q: "Does Jukedeck AI have a mobile app?",
                  a: "Currently, Jukedeck AI is a web-based platform. While there is no standalone mobile app, you can access and use it via a mobile browser.",
                },
                {
                  q: "How accurate is Jukedeck AI's music generation?",
                  a: "Jukedeck AI uses advanced machine learning algorithms that ensure high-quality music generation. The accuracy and relevance of the music depend on the inputs provided, such as genre, mood, and instrumentation.",
                },
                {
                  q: "Can multiple users collaborate on a project in Jukedeck AI?",
                  a: "Jukedeck AI currently doesn't offer direct multi-user collaboration within the platform. However, you can download your generated music and share it with others for further collaboration in external tools.",
                },
                {
                  q: "What is the Jukedeck AI workflow?",
                  a: "The Jukedeck AI workflow is straightforward: choose your genre, mood, and desired features, let the AI generate a track, then download the music to use in your projects.",
                },
                {
                  q: "What makes Jukedeck AI different from other music creation tools?",
                  a: "Jukedeck AI stands out with its AI-driven approach, offering fully customizable music tracks that are royalty-free. It simplifies the music creation process, allowing creators of all skill levels to produce high-quality music quickly and easily.",
                },
                {
                  q: "How do I start using Jukedeck AI?",
                  a: "To get started with Jukedeck AI, visit the website, sign up for an account, and select a subscription plan. Afterward, you can start creating custom music tracks by selecting your desired settings.",
                },
                {
                  q: "Does Jukedeck AI offer a free trial?",
                  a: "Yes, Jukedeck AI offers a free plan with basic features. For full access to advanced customization options and higher-quality music outputs, a paid subscription is necessary.",
                },
                {
                  q: "Can I use Jukedeck AI for personal projects?",
                  a: "Yes, Jukedeck AI is ideal for personal projects such as creating custom background music for videos, podcasts, or any creative work requiring original music.",
                },
                {
                  q: "Is Jukedeck AI suitable for professional use?",
                  a: "Yes, Jukedeck AI is widely used by professionals in fields such as video production, podcasting, game development, and advertising. Its customizable, royalty-free music makes it an excellent choice for professional-grade projects.",
                },
                {
                  q: "Can I adjust the length of the music generated in Jukedeck AI?",
                  a: "Jukedeck AI does not allow you to adjust the length of the music directly, but you can modify the track length and arrangement after downloading the music in your DAW.",
                },
                {
                  q: "How does Jukedeck AI handle music creation and arrangement?",
                  a: "Jukedeck AI generates music based on the parameters you set, such as genre, mood, and tempo. Once the track is generated, you can further arrange and mix it in a DAW for final production.",
                },
                {
                  q: "Can Jukedeck AI create unique music every time?",
                  a: "Yes, each track created by Jukedeck AI is unique, generated based on your custom inputs. The AI ensures that no two tracks are the same.",
                },
                {
                  q: "Can I create music with no prior music knowledge on Jukedeck AI?",
                  a: "Yes, Jukedeck AI is designed to be user-friendly, allowing anyone to create music without needing prior music knowledge. The AI takes care of the complex aspects of music production.",
                },
                {
                  q: "What file formats can I export music to from Jukedeck AI?",
                  a: "Jukedeck AI allows you to export your music in MP3 and WAV formats, which are compatible with most audio production software.",
                },
                {
                  q: "What types of projects can benefit from Jukedeck AI?",
                  a: "Jukedeck AI is ideal for a wide range of projects, including video production, podcast creation, advertising, and game development, where custom music is needed.",
                },
                {
                  q: "Does Jukedeck AI have customer support?",
                  a: "Yes, Jukedeck AI offers customer support through email and a comprehensive help center to assist with any issues or questions related to using the platform.",
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
                    Why <strong>Jukedeck AI</strong> is the Ideal Tool for
                    Effortless, Customizable Music Creation
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>Jukedeck AI</strong> empowers content creators,
                    musicians, and filmmakers by offering an intuitive platform
                    for generating fully customizable music. Whether you're
                    creating background music for videos, podcasts, or games,
                    here's why it's the perfect tool for your creative projects:
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
                      <strong>AI-Powered Music Creation:</strong>{" "}
                      <strong>Jukedeck AI</strong> leverages artificial
                      intelligence to generate music tailored to your specific
                      needs, adjusting tempo, genre, and instrumentation with
                      ease.
                    </li>
                    <li className="mb-3">
                      <strong>Fast and Easy to Use:</strong> Create custom music
                      in minutes with a user-friendly interface, making it
                      accessible to both beginners and professionals alike.
                    </li>
                    <li className="mb-3">
                      <strong>Royalty-Free Tracks:</strong> All music generated
                      by <strong>Jukedeck AI</strong> is royalty-free, making it
                      a perfect solution for content creators, YouTubers, and
                      filmmakers who need music without licensing concerns.
                    </li>
                    <li className="mb-3">
                      <strong>Highly Customizable:</strong> From selecting the
                      style to tweaking the mood and arrangement,{" "}
                      <strong>Jukedeck AI</strong> allows for maximum creativity
                      and control in the music creation process.
                    </li>
                    <li className="mb-3">
                      <strong>Cloud-Based and Accessible Anywhere:</strong> Use{" "}
                      <strong>Jukedeck AI</strong> from any device with an
                      internet connection—no software installations are
                      necessary.
                    </li>
                    <li className="mb-3">
                      <strong>Perfect for Various Projects:</strong> Whether
                      you're making background scores, jingles, or theme music
                      for videos, podcasts, or games,{" "}
                      <strong>Jukedeck AI</strong> can meet all your music
                      needs.
                    </li>
                    <li className="mb-3">
                      <strong>Supports Integration with Creative Tools:</strong>{" "}
                      Once you've generated your music, it's easy to export and
                      integrate it into your preferred editing software or DAW
                      for further enhancement.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Start Creating with <strong>Jukedeck AI</strong> for
                      Customized, Royalty-Free Music
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
              Why <strong>Jukedeck AI</strong> is Transforming AI-Powered Music
              Creation
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>Jukedeck AI</strong> revolutionizes music production by
              providing intuitive AI-powered tools for creating and customizing
              music. Let's explore the powerful benefits and a few limitations
              of this innovative tool for content creators, musicians, and
              filmmakers.
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
                    <strong>AI-Driven Music Creation:</strong> Jukedeck AI
                    enables users to generate fully customized music tracks in
                    minutes, with control over tempo, genre, and instruments.
                  </li>
                  <li className="mb-2">
                    <strong>Fast and Efficient:</strong> The platform delivers
                    music creations quickly, making it perfect for content
                    creators and filmmakers who need instant music for their
                    projects.
                  </li>
                  <li className="mb-2">
                    <strong>User-Friendly Interface:</strong> With its intuitive
                    design, Jukedeck AI is accessible to users of all technical
                    levels, from beginners to professionals.
                  </li>
                  <li className="mb-2">
                    <strong>Royalty-Free Music:</strong> Jukedeck AI generates
                    tracks that are fully royalty-free, making it ideal for
                    content creators, video producers, and filmmakers.
                  </li>
                  <li className="mb-2">
                    <strong>Highly Customizable:</strong> Users have
                    fine-grained control over the elements of their music, from
                    style and mood to instruments and arrangement.
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
                    <strong>Limited Free Access:</strong> Jukedeck AI offers
                    limited access to its features for free, with more advanced
                    options requiring a paid subscription.
                  </li>
                  <li className="mb-2">
                    <strong>Dependency on Templates:</strong> While the platform
                    offers customization, the underlying templates may restrict
                    full originality and may not suit all creative needs.
                  </li>
                  <li className="mb-2">
                    <strong>Basic Music Structures:</strong> Although great for
                    quick projects, the generated music might lack complexity or
                    depth that a professional composer could provide.
                  </li>
                  <li className="mb-2">
                    <strong>Internet Requirement:</strong> As a cloud-based
                    service, Jukedeck AI requires a stable internet connection,
                    which could be limiting in areas with poor connectivity.
                  </li>
                  <li className="mb-2">
                    <strong>Potential for Generic Sounding Tracks:</strong> Due
                    to the AI's reliance on algorithms, some users may find the
                    generated music to be somewhat repetitive or formulaic.
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
              Explore Top Alternatives to Jukedeck AI for Music Creation and
              Customization
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>Jukedeck AI</strong> offers seamless music creation
              and customization tools, several other platforms provide unique
              features for AI-driven music production and remixing, helping
              creators bring their vision to life.
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
                    <strong>Jukedeck AI</strong>: An AI-powered platform that
                    enables creators to instantly generate and customize music,
                    with full control over genres, tempo, and instruments,
                    perfect for content creators, filmmakers, and musicians.
                  </li>
                  <li className="mb-2">
                    <strong>Amper Music</strong>: A comprehensive music creation
                    tool that allows users to create and customize original
                    tracks with ease, making it an ideal choice for content
                    creators looking for royalty-free music.
                  </li>
                  <li className="mb-2">
                    <strong>Aiva</strong>: A sophisticated AI composer that
                    helps creators generate emotional and orchestral music with
                    precision. Aiva is perfect for film scores, game
                    soundtracks, and other large-scale projects.
                  </li>
                  <li className="mb-2">
                    <strong>Soundraw</strong>: An AI-powered music generator
                    that creates unique, royalty-free music tracks tailored to
                    specific moods, making it an ideal choice for marketers and
                    creators in need of personalized music.
                  </li>
                  <li className="mb-2">
                    <strong>Booth</strong>: A versatile AI-driven platform that
                    assists in creating custom music tracks by manipulating
                    genres, tempos, and instrument choices. Ideal for music
                    creators seeking quick results and high customization.
                  </li>
                  <li className="mb-2">
                    <strong>Endlesss</strong>: A collaborative music creation
                    tool that uses AI to help users generate and remix tracks in
                    real-time, with a strong focus on interactive and live music
                    creation.
                  </li>
                  <li className="mb-2">
                    <strong>Soundation</strong>: A cloud-based music studio with
                    powerful AI-driven features that allow users to create and
                    remix music tracks, making it an excellent choice for both
                    novice and professional music producers.
                  </li>
                  <li className="mb-2">
                    <strong>Moises.ai</strong>: An AI-powered platform for
                    separating stems and remixing music, Moises.ai provides an
                    easy-to-use interface for creators looking to work with
                    isolated tracks and improve their music production workflow.
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
          <div className="row d-flex align-items-center justify-content-between mb-1">
            {/* Image - mobile pe pehle, desktop pe right side */}
            <div
              className="col-12 col-md-6 order-1 order-md-2 mb-3 mb-md-0"
              style={{ textAlign: "center", height: "250px" }}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5IyEpRsYY8JsmOlBNKKmWf5jlOBFs3Ustg&s"
                alt="Jukedeck AI"
                style={{ maxWidth: "100%", height: "300px" }}
              />
            </div>

            {/* Text - mobile pe baad mein, desktop pe left side */}
            <div
              className="col-12 col-md-6 order-2 order-md-1"
              style={{ paddingRight: "30px" }}
            >
              <p className="text-primary">Write better, faster</p>
              <h1>Jukedeck AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Jukedeck AI is an innovative music generation platform that uses
                artificial intelligence to create original, royalty-free music
                tracks automatically. Founded in the United Kingdom by Ed Rex,
                Jukedeck was among the first AI platforms focused entirely on
                composing personalized music at scale. The tool is widely loved
                by content creators, indie filmmakers, YouTubers, and businesses
                looking for quick, customized, affordable music solutions
                without needing traditional musical skills. Later, Jukedeck was
                acquired by ByteDance, the parent company of TikTok, in 2019,
                indicating its strong influence on the future of AI-powered
                music.
              </p>

              <div className="mb-3">
                <a
                  href="https://jukedeck.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-2"
                >
                  Explore Tool
                </a>
              </div>
            </div>
          </div>

          <section style={{ backgroundColor: "#1b1f2b", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">
                Elevate Your Music with Jukedeck AI
              </p>
              <h2
                className="text-white"
                style={{ fontWeight: "600", marginBottom: "1rem" }}
              >
                Discover How Jukedeck AI Transforms Music Creation and
                Customization
              </h2>
              <p
                style={{
                  color: "#ccc",
                  marginBottom: "2rem",
                  fontStyle: "italic",
                }}
              >
                Jukedeck AI empowers creators to generate music, customize
                soundscapes, and produce original tracks instantly, all without
                the concern of copyright.
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
                      Generate Custom Music Tracks Instantly
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Jukedeck AI allows you to generate custom music tracks
                      with your desired genre, tempo, and mood—created uniquely
                      for your project, free from any copyright concerns.
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
                      Full Control over Music Customization
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      With Jukedeck AI, you have full control over each track
                      element. Tweak instruments, tempo, and structure to
                      perfectly align with your project’s vision.
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
                      Effortless Integration into Your Creative Workflow
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Jukedeck AI seamlessly integrates with your production
                      tools, allowing you to add the generated music to video
                      editing software, apps, or other creative projects with no
                      licensing hassle.
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

export default JukedeckAI;
