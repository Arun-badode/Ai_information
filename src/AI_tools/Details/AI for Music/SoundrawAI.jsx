import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import sound from "../../../../public/assets/Img/Ai for Music/8.png";
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
const SoundrawAI = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="Soundraw AI Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Revolutionize Your Music Creation with Soundraw AI's Adaptive
                  Features
                </p>
                <h3>
                  Endless Possibilities for Dynamic, Copyright-Free Music
                  Creation
                </h3>
              </div>
              {[
                {
                  icon: "🎶",
                  title: "Dynamic Music Creation",
                  desc: "Soundraw AI generates unique, customizable music tracks tailored to your specific needs, all without any copyright concerns. Adjust genre, mood, tempo, and more for a personalized composition.",
                },
                {
                  icon: "🔄",
                  title: "Unlimited Content Customization",
                  desc: "Easily modify every aspect of your tracks. Whether it's changing instruments, tempo, or the overall feel, Soundraw AI gives you the freedom to adapt your music to fit your project perfectly.",
                },
                {
                  icon: "🎚️",
                  title: "Seamless Integration with Creative Platforms",
                  desc: "Soundraw AI integrates effortlessly with your existing creative tools and software. Add your dynamic, copyright-free music directly to videos, games, podcasts, and more.",
                },
                {
                  icon: "🌍",
                  title: "Global Collaboration and Adaptability",
                  desc: "Create music for audiences worldwide. Soundraw AI adapts to various cultural and stylistic preferences, ensuring your music resonates with a global audience.",
                },
                {
                  icon: "📊",
                  title: "Real-Time Adaptive Feedback",
                  desc: "Receive immediate suggestions for refining your music. Soundraw AI helps you optimize tracks in real-time, ensuring the final product meets your creative vision.",
                },
                {
                  icon: "🤝",
                  title: "Collaborative Music Creation",
                  desc: "Soundraw AI facilitates real-time collaboration with team members, enabling seamless sharing and editing of music projects, perfect for collaborative creative endeavors.",
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
                  q: "What is Soundraw AI?",
                  a: "Soundraw AI is an AI-powered music generation platform that allows users to create royalty-free, original music tailored to their specific needs. It gives creators full control over the music's structure, mood, and instruments without worrying about copyright issues.",
                },
                {
                  q: "How does Soundraw AI work?",
                  a: "Soundraw AI uses deep learning models to generate music based on user inputs. Users can select parameters like genre, tempo, mood, and structure, and the AI will produce a fully composed track that matches those specifications.",
                },
                {
                  q: "Can Soundraw AI create music in different genres?",
                  a: "Yes, Soundraw AI is capable of generating music across various genres such as pop, electronic, cinematic, rock, and more. The platform allows users to customize the genre and musical style to suit their project needs.",
                },
                {
                  q: "Is Soundraw AI free to use?",
                  a: "Soundraw AI offers a free trial, which provides limited access to features. To unlock the full range of features and music customization options, users need to subscribe to one of Soundraw’s premium plans.",
                },
                {
                  q: "Can I use Soundraw AI's music commercially?",
                  a: "Yes, Soundraw AI generates royalty-free music that can be used for commercial purposes, including in videos, games, advertisements, and other projects, without worrying about copyright claims.",
                },
                {
                  q: "How does Soundraw AI prevent copyright issues?",
                  a: "Soundraw AI generates original music that is fully licensed for commercial use. This eliminates any copyright concerns, ensuring creators can use the tracks in their projects without any legal complications.",
                },
                {
                  q: "Can I modify the music generated by Soundraw AI?",
                  a: "Absolutely! Soundraw AI allows users to modify various elements of the generated music, including the structure, tempo, and instrumentation. You can edit parts of the track such as intros, choruses, and verses in real-time.",
                },
                {
                  q: "What are the customization options in Soundraw AI?",
                  a: "Soundraw AI offers several customization options, allowing users to change the mood, tempo, genre, instrument selection, and even the structure of the track. You can also adjust the arrangement to create a more personalized music piece.",
                },
                {
                  q: "Does Soundraw AI support multi-instrument tracks?",
                  a: "Yes, Soundraw AI supports multi-instrument tracks. You can customize which instruments are used in the music and adjust their presence in the composition, creating a rich and dynamic musical arrangement.",
                },
                {
                  q: "Can I export the music created with Soundraw AI?",
                  a: "Yes, once you've created your music, you can export it in multiple formats such as MP3 and WAV, which are compatible with various video editing, game development, and audio software.",
                },
                {
                  q: "Does Soundraw AI have a mobile app?",
                  a: "Currently, Soundraw AI is a web-based platform. There is no standalone mobile app, but you can access and use the platform through a browser on your mobile device.",
                },
                {
                  q: "How accurate are Soundraw AI's music creations?",
                  a: "Soundraw AI is designed to create highly accurate music based on your inputs. The AI is trained to understand musical structures and patterns, ensuring that the generated tracks match your specified requirements.",
                },
                {
                  q: "Can multiple users collaborate on a project in Soundraw AI?",
                  a: "Yes, Soundraw AI supports collaboration, allowing multiple users to work together on a music project. This feature is ideal for creative teams who want to create, edit, and fine-tune music in real-time.",
                },
                {
                  q: "What is the Soundraw AI workflow like?",
                  a: "The Soundraw AI workflow is straightforward: select your desired genre, mood, and tempo, let the AI generate a music track, then customize the structure, instruments, and arrangement as needed. You can then export the final track for use in your projects.",
                },
                {
                  q: "What makes Soundraw AI different from other music generators?",
                  a: "Soundraw AI stands out for its high degree of customization, allowing users to modify the structure and arrangement of the generated music in real-time. This, combined with royalty-free music, makes it a unique tool for creators.",
                },
                {
                  q: "How do I start using Soundraw AI?",
                  a: "To get started with Soundraw AI, simply visit their website, sign up for an account, and choose your subscription plan. After that, you can begin creating and customizing music for your projects.",
                },
                {
                  q: "Does Soundraw AI offer a free trial?",
                  a: "Yes, Soundraw AI offers a free trial, giving users limited access to their music generation and customization features. A paid subscription is required to unlock full access.",
                },
                {
                  q: "Can I use Soundraw AI for personal projects?",
                  a: "Yes, Soundraw AI is perfect for personal projects such as YouTube videos, podcasts, and other creative endeavors. It provides an easy and efficient way to generate music that suits your personal style and needs.",
                },
                {
                  q: "Is Soundraw AI suitable for professional use?",
                  a: "Yes, Soundraw AI is widely used by professionals in various industries, including video production, advertising, gaming, and marketing. It provides high-quality, customizable, royalty-free music ideal for commercial projects.",
                },
                {
                  q: "Can I adjust the length of the generated music in Soundraw AI?",
                  a: "Yes, Soundraw AI allows users to customize the length of the generated track, whether you need a short jingle or a full-length song. You can adjust the duration to fit your project's specific requirements.",
                },
                {
                  q: "How does Soundraw AI handle music composition and arrangement?",
                  a: "Soundraw AI generates music based on pre-learned musical structures and patterns, allowing you to customize the arrangement, length, and instrument arrangement to create a fully personalized track.",
                },
                {
                  q: "Can Soundraw AI create unique music every time?",
                  a: "Yes, every time you create a track on Soundraw AI, the AI generates a unique composition based on your chosen parameters. No two tracks are identical, ensuring fresh and original music for each project.",
                },
                {
                  q: "Can I create music without any music knowledge on Soundraw AI?",
                  a: "Yes, Soundraw AI is designed to be user-friendly, enabling creators without any music background to easily generate high-quality music. The platform’s intuitive interface makes it simple to create and customize music.",
                },
                {
                  q: "What file formats can I export music to from Soundraw AI?",
                  a: "Soundraw AI allows users to export their tracks in multiple formats, including MP3 and WAV, making it easy to integrate the music into various creative projects, whether in video editing software, games, or audio production.",
                },
                {
                  q: "What type of projects can benefit from Soundraw AI?",
                  a: "Soundraw AI is ideal for a wide range of projects, including YouTube videos, podcasts, commercials, video games, mobile apps, and any other creative work that requires custom music.",
                },
                {
                  q: "Does Soundraw AI have customer support?",
                  a: "Yes, Soundraw AI offers customer support through email and a comprehensive help center. They provide assistance with technical issues, subscription inquiries, and general guidance on using the platform.",
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
                    Why <strong>Soundraw AI</strong> is the Perfect Companion
                    for Effortless, Copyright-Free Music Creation
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>Soundraw AI</strong> empowers creators by generating
                    personalized, royalty-free music tracks in real-time.
                    Whether you're producing content for YouTube, games, ads, or
                    presentations, here's why it’s the go-to tool for modern
                    creatives:
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
                      <strong>Soundraw AI</strong> generates unique tracks that
                      come with a built-in royalty-free license—perfect for
                      hassle-free use in commercial and personal projects.
                    </li>
                    <li className="mb-3">
                      <strong>Real-Time Music Customization:</strong> Seamlessly
                      modify mood, genre, length, and instrumentation on the
                      fly—Soundraw adapts instantly to match your creative
                      vision.
                    </li>
                    <li className="mb-3">
                      <strong>No Music Skills Required:</strong> Designed for
                      both amateurs and professionals,{" "}
                      <strong>Soundraw AI</strong> lets anyone create polished,
                      production-ready tracks with zero musical training.
                    </li>
                    <li className="mb-3">
                      <strong>Perfect for Modern Creators:</strong> Whether
                      you're a YouTuber, marketer, developer, or podcaster,{" "}
                      <strong>Soundraw AI</strong> helps you build the ideal
                      sonic backdrop for any medium.
                    </li>
                    <li className="mb-3">
                      <strong>Cloud-Based and Accessible:</strong> Use{" "}
                      <strong>Soundraw AI</strong> from any device with internet
                      access—create, preview, and export tracks without software
                      installation.
                    </li>
                    <li className="mb-3">
                      <strong>Fast Turnaround:</strong> Skip lengthy production
                      processes—generate and refine music in minutes to keep
                      your creative workflow moving.
                    </li>
                    <li className="mb-3">
                      <strong>Ever-Expanding Styles:</strong> Choose from a
                      growing library of moods and genres to fit your evolving
                      creative needs.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Start Using <strong>Soundraw AI</strong> to Power Your
                      Music Projects
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
              Why <strong>Soundraw AI</strong> is Revolutionizing AI Music
              Creation
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>Soundraw AI</strong> empowers creators to generate
              completely original, copyright-free music with real-time
              customization. Explore its powerful benefits and a few limitations
              for content creators, musicians, and developers.
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
                    <strong>Copyright-Free Music Generation:</strong> All music
                    created with <strong>Soundraw AI</strong> is royalty-free,
                    allowing creators to use it in commercial projects without
                    worrying about licensing or copyright strikes.
                  </li>
                  <li className="mb-2">
                    <strong>Real-Time Customization:</strong> Users can adjust
                    the mood, instruments, length, and tempo of generated tracks
                    instantly, offering dynamic control over every part of the
                    composition.
                  </li>
                  <li className="mb-2">
                    <strong>No Musical Experience Needed:</strong> With its
                    intuitive interface, <strong>Soundraw AI</strong> makes
                    music production accessible even to those without any
                    musical background.
                  </li>
                  <li className="mb-2">
                    <strong>Fast and Efficient Workflow:</strong> Ideal for
                    video creators, streamers, and marketers who need
                    high-quality background music in minutes without hiring a
                    composer or spending hours editing.
                  </li>
                  <li className="mb-2">
                    <strong>Wide Genre Selection:</strong> From cinematic to
                    lo-fi beats, <strong>Soundraw AI</strong> offers a diverse
                    range of genres, ensuring relevance across various creative
                    domains.
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
                    <strong>Limited Emotional Nuance:</strong> While it
                    generates technically accurate music, it may lack the human
                    emotional depth found in hand-composed tracks.
                  </li>
                  <li className="mb-2">
                    <strong>Restricted Advanced Editing:</strong> Customization
                    is user-friendly, but some users may find it limited for
                    deep, professional-level mixing or mastering.
                  </li>
                  <li className="mb-2">
                    <strong>Subscription Required for Full Access:</strong> Many
                    of Soundraw’s best features are locked behind a paid
                    subscription, which might deter hobbyists or students on a
                    tight budget.
                  </li>
                  <li className="mb-2">
                    <strong>Creative Boundaries:</strong> Although versatile,
                    users are still composing within the constraints of
                    algorithm-defined options and templates.
                  </li>
                  <li className="mb-2">
                    <strong>Cloud-Only Platform:</strong> Soundraw AI requires
                    an internet connection, which could be problematic for users
                    in low-connectivity regions.
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
              Explore Top Alternatives to Soundraw AI for Music Generation
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>Soundraw AI</strong> offers intuitive, royalty-free
              music composition tailored to your needs, several other platforms
              provide unique features for AI-driven sound creation and audio
              customization.
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
                    <strong>Soundraw AI</strong>: An innovative platform that
                    enables creators to generate original, royalty-free music
                    tracks with full customization. Ideal for content creators,
                    marketers, and developers seeking flexible audio without
                    copyright concerns.
                  </li>
                  <li className="mb-2">
                    <strong>Amper Music</strong>: A user-friendly tool that
                    allows fast generation of original music by selecting mood,
                    genre, and length. Great for those looking for stock-music
                    alternatives.
                  </li>
                  <li className="mb-2">
                    <strong>AIVA</strong>: Originally built for classical
                    composition, AIVA uses deep learning to create emotionally
                    resonant scores for films, games, and ads.
                  </li>
                  <li className="mb-2">
                    <strong>Soundful</strong>: Designed to generate royalty-free
                    background music, Soundful caters to YouTubers, streamers,
                    and social media creators needing fast musical outputs.
                  </li>
                  <li className="mb-2">
                    <strong>Beatoven.ai</strong>: Tailored for podcasters and
                    video producers, it lets users customize AI-generated tracks
                    based on scene mood and emotion transitions.
                  </li>
                  <li className="mb-2">
                    <strong>Ecrett Music</strong>: Offers an intuitive interface
                    where users choose scene, mood, and genre to get original
                    music, perfect for beginners and video editors.
                  </li>
                  <li className="mb-2">
                    <strong>Melobytes</strong>: A quirky and creative AI tool
                    that turns text, images, and data into experimental sound
                    and music — ideal for generative art and music enthusiasts.
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
              <h1>Soundraw AI:</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Soundraw is an AI-powered music generation tool that allows
                users to create unique, royalty-free music tracks quickly and
                easily. Whether you are a content creator, video editor, or
                music enthusiast, Soundraw leverages machine learning algorithms
                and neural networks to produce high-quality music without
                needing professional music production skills. This makes it an
                ideal tool for creators in need of custom tracks for videos,
                podcasts, ads, games, and much more.
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
              <img src={sound} style={{ MaxWidth: "100%", height: "300px" }} />
            </div>
          </div>

          <section style={{ backgroundColor: "#1b1f2b", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">
                Elevate Your Music Creation with Soundraw AI
              </p>
              <h2
                className="text-white"
                style={{ fontWeight: "600", marginBottom: "1rem" }}
              >
                Discover How Soundraw AI Transforms Your Music Creation and
                Composition Process
              </h2>
              <p
                style={{
                  color: "#ccc",
                  marginBottom: "2rem",
                  fontStyle: "italic",
                }}
              >
                Soundraw AI empowers musicians and creators to compose unique,
                royalty-free tracks, providing an intuitive assistant that
                adapts to your musical style and preferences in real-time.
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
                      Compose Unique Music Instantly
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Soundraw AI helps you create completely original music
                      tracks in just minutes. Choose your genre, mood, and
                      instruments, and let AI generate a customized composition.
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
                      Fine-Tune Your Tracks with Full Control
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Soundraw AI gives you complete control over your
                      creations. Adjust tempo, instrumentation, and style to
                      refine each track until it perfectly matches your vision.
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
                      Integrate and Use Across Platforms
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Seamlessly integrate Soundraw AI-created music into your
                      projects, from videos and podcasts to games and
                      commercials, with support for all major multimedia
                      platforms.
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
            <h4 className="mb-3">Ready to get started with SoundrawAI?</h4>
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

export default SoundrawAI;
