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
const EcrettMusicAI = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="Ecrett Music AI Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Transform Your Music Creation Process with Ecrett Music AI
                </p>
                <h3>Dynamic, Copyright-Free Music Tailored to Your Needs</h3>
              </div>
              {[
                {
                  icon: "🎶",
                  title: "Instant Music Generation",
                  desc: "Ecrett Music AI allows you to instantly create unique, royalty-free music tracks. Tailor your music by selecting genre, mood, and instrumentation, ensuring your track is customized to fit your project perfectly.",
                },
                {
                  icon: "🔄",
                  title: "Endless Customization",
                  desc: "Ecrett Music AI offers full control over your tracks. Modify elements like tempo, instrumentation, and structure to create the exact sound you envision for your project.",
                },
                {
                  icon: "🎚️",
                  title: "Easy Integration into Projects",
                  desc: "With Ecrett Music AI, seamlessly incorporate your royalty-free music into videos, games, podcasts, and more—without worrying about copyright issues or licensing.",
                },
                {
                  icon: "🌍",
                  title: "Versatile Global Music Styles",
                  desc: "Create music in a variety of global genres with Ecrett Music AI. No matter the style, you can generate music that fits the cultural context of your project.",
                },
                {
                  icon: "📊",
                  title: "AI-Powered Suggestions",
                  desc: "Ecrett Music AI uses AI to suggest real-time improvements, helping you refine and enhance your music. Fine-tune your track to achieve the perfect sound for your project.",
                },
                {
                  icon: "🤝",
                  title: "Collaborative Music Creation",
                  desc: "Collaborate seamlessly with others on your music projects. Ecrett Music AI allows multiple users to work together, making it easy to co-create and refine your tracks in real-time.",
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
                  q: "What is Ecrett Music AI?",
                  a: "Ecrett Music AI is a cutting-edge platform powered by artificial intelligence, designed to help users easily create custom music for a variety of projects. Whether you're working on videos, podcasts, games, or advertisements, Ecrett Music AI provides you with the tools to craft unique, royalty-free music.",
                },
                {
                  q: "How does Ecrett Music AI work?",
                  a: "Ecrett Music AI utilizes advanced machine learning algorithms to generate music based on your preferences. Users can select genres, moods, tempos, and instrumentation, allowing the AI to create a track that aligns with your needs.",
                },
                {
                  q: "Can Ecrett Music AI create music for different types of projects?",
                  a: "Absolutely! Ecrett Music AI can generate music for a variety of uses, including background tracks for videos, podcasts, games, and advertising. It offers flexibility and high customization for any creative project.",
                },
                {
                  q: "Is Ecrett Music AI free to use?",
                  a: "Ecrett Music AI offers a free plan with basic features. To unlock premium features and full access to advanced customization, users can subscribe to a paid plan.",
                },
                {
                  q: "Can I use music created by Ecrett Music AI commercially?",
                  a: "Yes, all music created with Ecrett Music AI is royalty-free, making it ideal for commercial use in projects like videos, games, and advertisements, as long as you follow the platform's terms of service.",
                },
                {
                  q: "How does Ecrett Music AI handle copyright issues?",
                  a: "Ecrett Music AI generates unique, AI-created music, ensuring that there are no copyright concerns. The music is royalty-free, allowing users to utilize it for both personal and commercial projects.",
                },
                {
                  q: "Can I modify the music created by Ecrett Music AI?",
                  a: "Yes! Ecrett Music AI lets you adjust various elements of the music, including tempo, instrumentation, and genre. If you need further editing, you can download the tracks and refine them using your preferred DAW (Digital Audio Workstation).",
                },
                {
                  q: "What customization options are available in Ecrett Music AI?",
                  a: "Ecrett Music AI offers comprehensive customization features, including genre selection, mood settings, tempo control, and instrument choice. These options enable you to create music that fits your project's exact requirements.",
                },
                {
                  q: "Does Ecrett Music AI support multi-track projects?",
                  a: "Yes, Ecrett Music AI supports multi-track compositions, allowing users to create layered, complex musical arrangements that meet their specific needs.",
                },
                {
                  q: "Can I export the music from Ecrett Music AI?",
                  a: "Yes, you can export your music from Ecrett Music AI in formats such as MP3 and WAV, which are compatible with most audio production tools and software.",
                },
                {
                  q: "Does Ecrett Music AI have a mobile app?",
                  a: "Currently, Ecrett Music AI is a web-based platform. There isn't a dedicated mobile app, but the platform can be accessed through mobile browsers for on-the-go music creation.",
                },
                {
                  q: "How accurate is Ecrett Music AI's music generation?",
                  a: "Ecrett Music AI utilizes sophisticated machine learning algorithms that ensure the music it generates is of high quality. The accuracy of the music largely depends on the specific preferences you provide, such as genre, mood, and instruments.",
                },
                {
                  q: "Can multiple users collaborate on a project in Ecrett Music AI?",
                  a: "Currently, Ecrett Music AI does not support real-time collaboration. However, you can download the generated music and share it with others for collaboration in external platforms.",
                },
                {
                  q: "What is the Ecrett Music AI workflow?",
                  a: "The Ecrett Music AI workflow is simple: choose your preferred genre, mood, and features, let the AI generate a custom track, and then download the music to use in your project.",
                },
                {
                  q: "What makes Ecrett Music AI different from other music creation tools?",
                  a: "Ecrett Music AI distinguishes itself with its AI-powered music generation process, offering customizable tracks that are royalty-free. It streamlines the music creation process, making it easy for both beginners and professionals to generate high-quality music quickly.",
                },
                {
                  q: "How do I start using Ecrett Music AI?",
                  a: "To begin with Ecrett Music AI, visit the website, sign up for an account, and choose a plan. After that, you can start creating customized music by selecting your desired settings.",
                },
                {
                  q: "Does Ecrett Music AI offer a free trial?",
                  a: "Yes, Ecrett Music AI provides a free plan that includes basic features. To access premium features and unlock more customization options, a paid subscription is required.",
                },
                {
                  q: "Can I use Ecrett Music AI for personal projects?",
                  a: "Yes, Ecrett Music AI is perfect for personal projects such as creating custom background music for videos, podcasts, or any creative work that requires original music.",
                },
                {
                  q: "Is Ecrett Music AI suitable for professional use?",
                  a: "Definitely! Ecrett Music AI is widely used by professionals in industries like video production, podcasting, game development, and advertising. Its customizable, royalty-free music makes it an excellent tool for high-quality professional projects.",
                },
                {
                  q: "Can I adjust the length of the music generated in Ecrett Music AI?",
                  a: "Ecrett Music AI doesn't allow direct length adjustments, but you can modify the track's length and arrangement once you download it into your DAW for further editing.",
                },
                {
                  q: "How does Ecrett Music AI handle music creation and arrangement?",
                  a: "Ecrett Music AI generates music based on the parameters you choose, such as genre, mood, and tempo. Once the track is created, you can further arrange and mix it in your preferred DAW for final production.",
                },
                {
                  q: "Can Ecrett Music AI create unique music every time?",
                  a: "Yes, Ecrett Music AI ensures that each track is unique, as the music is generated based on the specific inputs provided by the user. No two tracks are identical.",
                },
                {
                  q: "Can I create music with no prior music knowledge on Ecrett Music AI?",
                  a: "Yes, Ecrett Music AI is designed to be user-friendly, allowing anyone to create music without needing any prior music production knowledge. The AI handles the technical aspects, making music creation accessible to all.",
                },
                {
                  q: "What file formats can I export music to from Ecrett Music AI?",
                  a: "Ecrett Music AI allows you to export music in MP3 and WAV formats, both of which are widely compatible with audio production software.",
                },
                {
                  q: "What types of projects can benefit from Ecrett Music AI?",
                  a: "Ecrett Music AI is ideal for a wide range of projects, including video production, podcasting, game development, and advertising, where custom, royalty-free music is needed.",
                },
                {
                  q: "Does Ecrett Music AI have customer support?",
                  a: "Yes, Ecrett Music AI offers customer support through email and an extensive help center to address any issues or questions related to the platform.",
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
                    Why <strong>Ecrett Music AI</strong> is the Ultimate Tool
                    for Effortless, Personalized Music Creation
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>Ecrett Music AI</strong> equips content creators,
                    filmmakers, and musicians with an intuitive platform to
                    craft fully customizable music. Whether you’re producing
                    background music for videos, podcasts, or games, here’s why
                    Ecrett Music AI is your go-to tool for creative projects:
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
                      <strong>AI-Enhanced Music Creation:</strong>{" "}
                      <strong>Ecrett Music AI</strong> uses cutting-edge AI
                      technology to generate music tailored to your exact
                      preferences, adjusting elements like tempo, mood, and
                      instruments effortlessly.
                    </li>
                    <li className="mb-3">
                      <strong>Quick and Easy to Use:</strong> Create
                      personalized music in no time with a straightforward
                      interface, making it accessible for both novices and
                      professionals alike.
                    </li>
                    <li className="mb-3">
                      <strong>Free from Royalty Concerns:</strong> All tracks
                      created with <strong>Ecrett Music AI</strong> are
                      royalty-free, making it ideal for content creators,
                      filmmakers, and YouTubers who need hassle-free music for
                      their projects.
                    </li>
                    <li className="mb-3">
                      <strong>Complete Customization:</strong> From choosing the
                      musical style to adjusting the arrangement and mood,{" "}
                      <strong>Ecrett Music AI</strong> offers full control over
                      your music creation process.
                    </li>
                    <li className="mb-3">
                      <strong>Cloud-Based Accessibility:</strong> Access{" "}
                      <strong>Ecrett Music AI</strong> on any device with an
                      internet connection—no downloads or installations
                      required.
                    </li>
                    <li className="mb-3">
                      <strong>Versatile for Various Projects:</strong> Whether
                      you need background scores, jingles, or theme music for
                      videos, podcasts, or games,{" "}
                      <strong>Ecrett Music AI</strong> can help you bring your
                      musical ideas to life.
                    </li>
                    <li className="mb-3">
                      <strong>Seamless Integration with Creative Tools:</strong>{" "}
                      After generating your music, easily export and integrate
                      it with your favorite editing software or DAWs for further
                      refinement and enhancement.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Start Creating with <strong>Ecrett Music AI</strong> for
                      Personalized, Royalty-Free Music
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
              Why <strong>Ecrett Music AI</strong> is Revolutionizing AI-Powered
              Music Creation
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>Ecrett Music AI</strong> transforms the music production
              landscape by providing intuitive, AI-powered tools that allow
              creators to generate and customize music tracks quickly. Let's
              dive into its key benefits and some potential drawbacks.
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
                    <strong>AI-Powered Music Generation:</strong> Ecrett Music
                    AI generates personalized music tracks with full control
                    over tempo, mood, and genre, making it an excellent tool for
                    a wide range of creators.
                  </li>
                  <li className="mb-2">
                    <strong>Fast Music Creation:</strong> The platform allows
                    users to generate tracks in a matter of minutes, helping
                    content creators, filmmakers, and musicians meet tight
                    deadlines.
                  </li>
                  <li className="mb-2">
                    <strong>Easy to Use:</strong> With an intuitive and
                    user-friendly interface, Ecrett Music AI is accessible to
                    everyone, from novice creators to experienced music
                    producers.
                  </li>
                  <li className="mb-2">
                    <strong>Royalty-Free Music:</strong> All music created with
                    Ecrett Music AI is fully royalty-free, making it safe for
                    commercial use in videos, films, and other creative
                    projects.
                  </li>
                  <li className="mb-2">
                    <strong>Highly Customizable Tracks:</strong> Users can
                    tailor their tracks by adjusting various elements, such as
                    tempo, instruments, and key, allowing for creative
                    flexibility.
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
                    <strong>Limited Free Features:</strong> Ecrett Music AI
                    offers a limited free version, with access to more advanced
                    features requiring a subscription.
                  </li>
                  <li className="mb-2">
                    <strong>Template Reliance:</strong> While the platform
                    offers customization, its reliance on predefined templates
                    might limit users seeking complete creative freedom.
                  </li>
                  <li className="mb-2">
                    <strong>Basic Music Composition:</strong> For more complex
                    projects, the generated music may lack the sophistication
                    and depth that a professional composer could provide.
                  </li>
                  <li className="mb-2">
                    <strong>Internet Connection Required:</strong> As a
                    cloud-based service, a stable internet connection is
                    necessary, which could be limiting in areas with slow or
                    unreliable connectivity.
                  </li>
                  <li className="mb-2">
                    <strong>Potential Repetition:</strong> Depending on the AI’s
                    algorithm, some users may find the generated music to be
                    repetitive or similar across different tracks.
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
              Explore Top Alternatives to Ecrett Music AI for Music Creation and
              Customization
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>Ecrett Music AI</strong> provides powerful tools for
              creating and customizing music, several other platforms offer
              unique features for AI-driven music production, remixing, and
              music generation, enabling creators to realize their musical
              vision.
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
                    <strong>Ecrett Music AI</strong>: An AI-driven platform that
                    empowers users to generate royalty-free, custom music tracks
                    based on mood, genre, and tempo. It's a great tool for
                    content creators and musicians looking for quick,
                    customizable music solutions.
                  </li>
                  <li className="mb-2">
                    <strong>Amper Music</strong>: A versatile AI music creation
                    tool that allows users to create and customize tracks with
                    ease, designed for creators seeking royalty-free music for
                    videos, podcasts, and other media.
                  </li>
                  <li className="mb-2">
                    <strong>Aiva</strong>: A powerful AI composer that
                    specializes in generating orchestral music. It’s perfect for
                    film scores, video games, and large-scale musical projects.
                  </li>
                  <li className="mb-2">
                    <strong>Soundraw</strong>: An intuitive AI-powered music
                    generator that creates royalty-free music tracks tailored to
                    specific moods and themes, ideal for marketers and content
                    creators.
                  </li>
                  <li className="mb-2">
                    <strong>Booth</strong>: A creative platform that uses AI to
                    manipulate genres, tempos, and instruments, allowing for
                    rapid customization and creation of music tracks.
                  </li>
                  <li className="mb-2">
                    <strong>Endlesss</strong>: A real-time collaborative music
                    creation tool that integrates AI for remixing and music
                    generation, ideal for interactive and live music production.
                  </li>
                  <li className="mb-2">
                    <strong>Soundation</strong>: A cloud-based studio featuring
                    AI-driven music tools that enable users to create and remix
                    music tracks, catering to both beginners and professional
                    music producers.
                  </li>
                  <li className="mb-2">
                    <strong>Moises.ai</strong>: An AI-powered platform that
                    offers stem separation and remixing tools, perfect for
                    creators looking to work with isolated tracks and enhance
                    their music production workflow.
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
              <h1>Ecrett Music AI:</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Ecrett Music AI is an innovative artificial intelligence
                platform that enables users to create original, royalty-free
                music with just a few clicks. Designed for creators of all kinds
                — YouTubers, filmmakers, podcasters, advertisers, and game
                developers — Ecrett Music offers a simple yet powerful way to
                generate professional-quality soundtracks without any prior
                musical knowledge.
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
                Elevate Your Music with Ecrett Music AI
              </p>
              <h2
                className="text-white"
                style={{ fontWeight: "600", marginBottom: "1rem" }}
              >
                Discover How Ecrett Music AI Transforms Music Creation and
                Customization
              </h2>
              <p
                style={{
                  color: "#ccc",
                  marginBottom: "2rem",
                  fontStyle: "italic",
                }}
              >
                Ecrett Music AI empowers creators to effortlessly generate and
                customize music, producing original tracks instantly without
                worrying about copyright.
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
                      Effortlessly Generate Unique Music Tracks
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Ecrett Music AI helps you create custom music tracks
                      instantly with your desired genre, mood, and tempo, all
                      while ensuring originality and copyright safety.
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
                      Full Customization of Music Elements
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      With Ecrett Music AI, gain full control over every element
                      of your music, from instruments to structure and tempo,
                      giving you complete freedom to shape your tracks.
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
                      Simple Integration with Creative Projects
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Ecrett Music AI makes it easy to integrate your music into
                      your creative workflows, whether you're working on video
                      editing, apps, or any other media projects without the
                      hassle of licensing.
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
            <h4 className="mb-3">Ready to get started with EcrettMusicAI?</h4>
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

export default EcrettMusicAI;
