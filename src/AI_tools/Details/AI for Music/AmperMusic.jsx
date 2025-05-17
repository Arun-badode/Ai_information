import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
// import Logo from "../../../Images/logo[2].png";
// import deatilimage from "../../../Images/DetailImage.png";
import amper from "../../../../public/assets/Img/Ai for Music/7.png";
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
const AmperMusicAI = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="Amper Music AI Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Transform Your Music Creation Process with Amper Music AI's
                  Customizable Tools
                </p>
                <h3>
                  Unlock the Power of AI-Driven Music Composition and
                  Customization
                </h3>
              </div>
              {[
                {
                  icon: "🎶",
                  title: "AI-Powered Music Composition",
                  desc: "Amper Music AI enables you to create unique, royalty-free music tracks effortlessly. Customize compositions based on your preferred mood, genre, and length.",
                },
                {
                  icon: "🔄",
                  title: "Endless Customization Options",
                  desc: "With Amper Music AI, you can tweak and modify each track to your liking. Adjust tempo, instruments, and layers to craft the perfect sound for your project.",
                },
                {
                  icon: "🎚️",
                  title: "Seamless Integration with Creative Tools",
                  desc: "Amper Music AI integrates with your existing creative software and platforms, allowing you to seamlessly add customized music to videos, podcasts, and other multimedia projects.",
                },
                {
                  icon: "🌍",
                  title: "Global Access and Collaboration",
                  desc: "Create music for a global audience. Amper Music AI supports multiple languages and cultural influences, allowing you to produce diverse tracks that resonate worldwide.",
                },
                {
                  icon: "📊",
                  title: "Real-Time Feedback and Optimization",
                  desc: "Amper Music AI offers instant feedback on your music creations. Get suggestions and optimize your tracks in real-time, ensuring your music aligns with your creative vision.",
                },
                {
                  icon: "🤝",
                  title: "Collaborative Music Creation",
                  desc: "Amper Music AI allows you to collaborate with teams in real-time, providing a platform for sharing and refining music projects together, ensuring the best possible outcome.",
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
                  q: "What is Amper Music AI?",
                  a: "Amper Music AI is an AI-powered platform designed for music creation. It allows users to generate original music tracks across various genres and styles quickly and efficiently, making it accessible for creators without requiring a background in music composition.",
                },
                {
                  q: "How does Amper Music AI enhance music creation?",
                  a: "Amper Music AI uses artificial intelligence to compose music based on user inputs like genre, mood, tempo, and instruments. This technology enables creators to produce custom soundtracks effortlessly, optimizing the music creation process while reducing the time and effort involved.",
                },
                {
                  q: "Who can benefit from using Amper Music AI?",
                  a: "Amper Music AI is ideal for content creators, video producers, game developers, marketers, and businesses that need custom music for their projects. Whether you’re creating background music for videos, games, or advertisements, Amper Music AI offers a quick and efficient solution.",
                },
                {
                  q: "What is Real-Time Music Generation in Amper Music AI?",
                  a: "Real-time music generation in Amper Music AI allows users to create custom tracks instantly, offering a seamless way to adjust elements like tempo, mood, and instrumentation. This feature is especially useful for creators who need music quickly, whether for time-sensitive projects or iterative work.",
                },
                {
                  q: "Can I automate music creation with Amper Music AI?",
                  a: "Yes, Amper Music AI allows for automation in the music creation process. Users can set parameters, and the AI will generate tracks according to those specifications, saving time on manual music composition and offering tailored results for various needs.",
                },
                {
                  q: "Does Amper Music AI offer music customization?",
                  a: "Absolutely! Amper Music AI provides extensive customization options, enabling users to modify tempo, instrumentation, mood, and more. Whether you need a serene background piece or an energetic anthem, you can adjust the generated music to fit your project perfectly.",
                },
                {
                  q: "What is the sound quality in Amper Music AI?",
                  a: "Amper Music AI ensures high-quality sound by using sophisticated AI models trained to create professional-grade music. The platform is optimized for generating clear, polished tracks that meet industry standards for audio production.",
                },
                {
                  q: "Does Amper Music AI integrate with other tools?",
                  a: "Yes, Amper Music AI integrates with various content creation tools and platforms, allowing users to export tracks into their video editing software, game engines, or other creative applications. This streamlines the workflow and enhances overall productivity.",
                },
                {
                  q: "Can I use Amper Music AI with other creative tools like video editing software?",
                  a: "Definitely! Amper Music AI works seamlessly with popular video editing software, game development platforms, and content creation tools, making it easy to import and synchronize music with your creative projects.",
                },
                {
                  q: "Is Amper Music AI easy to use?",
                  a: "Yes, Amper Music AI is designed to be user-friendly, with an intuitive interface that allows creators of all skill levels to quickly generate and customize music. No prior music composition experience is necessary to get started.",
                },
                {
                  q: "Does Amper Music AI support multiple languages?",
                  a: "Currently, Amper Music AI focuses on providing music generation in various styles and genres but does not focus on language-specific content like text. However, the platform is global and can be used by creators from all over the world.",
                },
                {
                  q: "How accurate are Amper Music AI's music creations?",
                  a: "Amper Music AI offers highly accurate music generation, producing tracks that align with the user’s specified parameters like genre, mood, and instrumentation. The AI models are trained to understand the nuances of music production to ensure high-quality results.",
                },
                {
                  q: "Can multiple users collaborate on Amper Music AI?",
                  a: "Yes, Amper Music AI supports collaboration, allowing multiple users to work together on the same project. This makes it ideal for creative teams who need to create and refine music together in real time.",
                },
                {
                  q: "What formats does Amper Music AI support for output?",
                  a: "Amper Music AI supports multiple output formats, including WAV, MP3, and other industry-standard audio file types, making it easy to export and use the generated music in a variety of applications.",
                },
                {
                  q: "Does Amper Music AI assist with music composition?",
                  a: "While Amper Music AI does not directly compose music in the traditional sense, it uses AI to generate fully composed tracks based on user inputs, which can be further customized. It is a tool designed to simplify the music creation process.",
                },
                {
                  q: "Can Amper Music AI help with music in different genres?",
                  a: "Yes, Amper Music AI is capable of generating music across a wide range of genres, from cinematic orchestral tracks to electronic beats and rock music, providing flexibility for various types of creative projects.",
                },
                {
                  q: "Is Amper Music AI cloud-based?",
                  a: "Yes, Amper Music AI is a cloud-based platform, enabling users to access their projects from anywhere with an internet connection. This ensures easy collaboration and scalability, no matter the size of the project.",
                },
                {
                  q: "How often can I create music with Amper Music AI?",
                  a: "With Amper Music AI, you can generate music as often as needed. Depending on your subscription plan, you can create an unlimited number of tracks and customize them to suit different projects or requirements.",
                },
                {
                  q: "Can Amper Music AI track the performance of music projects?",
                  a: "Yes, Amper Music AI provides analytics and performance tracking tools to measure how well your music fits your project goals. This feature can help you assess the effectiveness of the music in different contexts, like video or game production.",
                },
                {
                  q: "How secure is my data on Amper Music AI?",
                  a: "Amper Music AI uses industry-standard encryption and secure access protocols to ensure that your projects, data, and personal information remain safe and protected. The platform complies with privacy and security standards to ensure user safety.",
                },
                {
                  q: "Is customer support available for Amper Music AI?",
                  a: "Yes, Amper Music AI offers customer support through live chat, email assistance, and an extensive help center to address any questions or technical issues you may encounter.",
                },
                {
                  q: "Is there a free version of Amper Music AI?",
                  a: "Amper Music AI offers a free trial with limited features. For full access to advanced music generation, customization options, and additional features, users can subscribe to a premium plan.",
                },
                {
                  q: "How do I start using Amper Music AI?",
                  a: "To get started with Amper Music AI, simply visit the official website, create an account, and choose the appropriate subscription plan. Once you’re set up, you can start generating custom music tracks for your projects.",
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
                    Why <strong>Amper Music AI</strong> is the Ideal Solution
                    for Music Creation and Production
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>Amper Music AI</strong> revolutionizes the music
                    creation process by providing an intuitive, AI-powered
                    platform that enables creators to produce high-quality
                    tracks without prior music composition skills. Here's why
                    it's the go-to tool for both amateurs and professionals:
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
                      <strong>AI-Powered Music Creation:</strong> With{" "}
                      <strong>Amper Music AI</strong>, users can effortlessly
                      generate original music in various genres and styles,
                      empowering them to produce custom soundtracks in minutes.
                    </li>
                    <li className="mb-3">
                      <strong>Customizable Soundscapes:</strong> Adjust every
                      aspect of the music, including mood, tempo,
                      instrumentation, and structure, giving you the freedom to
                      create the perfect track for your project.
                    </li>
                    <li className="mb-3">
                      <strong>Real-Time Collaboration:</strong> Whether you're
                      working on a solo project or collaborating with a team,{" "}
                      <strong>Amper Music AI</strong> facilitates seamless
                      collaboration, making it easy to share and refine music
                      tracks in real-time.
                    </li>
                    <li className="mb-3">
                      <strong>Versatile Usage for Multiple Industries:</strong>{" "}
                      Ideal for video producers, game developers, content
                      creators, and advertisers, <strong>Amper Music AI</strong>{" "}
                      provides high-quality background music for diverse use
                      cases.
                    </li>
                    <li className="mb-3">
                      <strong>Royalty-Free Licensing:</strong> All music
                      generated through <strong>Amper Music AI</strong> comes
                      with a royalty-free license, meaning you can use it for
                      commercial purposes without worrying about additional fees
                      or legal concerns.
                    </li>
                    <li className="mb-3">
                      <strong>No Musical Expertise Required:</strong> Even if
                      you have no background in music,{" "}
                      <strong>Amper Music AI</strong> allows anyone to create
                      professional-level compositions effortlessly, making it
                      accessible to all users.
                    </li>
                    <li className="mb-3">
                      <strong>Cloud-Based Platform:</strong> As a cloud-based
                      tool, <strong>Amper Music AI</strong> is easily accessible
                      from anywhere, allowing you to create music on the go and
                      from any device.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Start Using <strong>Amper Music AI</strong> to Elevate
                      Your Music Production
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
              Why <strong>Amper Music AI</strong> is a Game-Changer in Music
              Creation
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>Amper Music AI</strong> transforms the music creation
              process by leveraging artificial intelligence to generate
              personalized tracks. Let's explore its strengths and potential
              limitations for musicians, creators, and businesses.
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
                    <strong>AI-Powered Music Creation:</strong>{" "}
                    <strong>Amper Music AI</strong> enables users to generate
                    fully original music compositions in various styles,
                    reducing the time spent on traditional music creation.
                  </li>
                  <li className="mb-2">
                    <strong>Highly Customizable Tracks:</strong> Users can tweak
                    the generated music, adjusting elements such as tempo, mood,
                    instrumentation, and structure, offering flexibility for
                    diverse creative needs.
                  </li>
                  <li className="mb-2">
                    <strong>Streamlined Production Process:</strong> Ideal for
                    content creators, <strong>Amper Music AI</strong> simplifies
                    the music production process, providing a quick and
                    efficient way to produce background music for videos, games,
                    and more.
                  </li>
                  <li className="mb-2">
                    <strong>No Musical Expertise Required:</strong> The
                    platform's user-friendly interface allows anyone to create
                    professional-grade music without needing specialized musical
                    knowledge or skills.
                  </li>
                  <li className="mb-2">
                    <strong>Royalty-Free Music:</strong> All tracks generated
                    through <strong>Amper Music AI</strong> come with a
                    royalty-free license, making it perfect for commercial use
                    without additional legal concerns.
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
                    <strong>
                      Limited Creativity Compared to Human Composers:
                    </strong>{" "}
                    While the AI is highly capable, it may lack the nuanced
                    creativity and emotional depth that human composers bring to
                    music.
                  </li>
                  <li className="mb-2">
                    <strong>Subscription-Based Access:</strong> Advanced
                    features of <strong>Amper Music AI</strong> are gated behind
                    a subscription model, which may be prohibitive for smaller
                    creators or those with limited budgets.
                  </li>
                  <li className="mb-2">
                    <strong>Complexity in Advanced Customizations:</strong>{" "}
                    While basic functionalities are easy to use, more advanced
                    customizations of the music may require some learning and
                    experimentation to get the desired results.
                  </li>
                  <li className="mb-2">
                    <strong>Dependence on Predefined Styles:</strong> While
                    there are many style options, users may find the music to be
                    somewhat limited to the predefined genres, making it
                    challenging to achieve highly unique compositions.
                  </li>
                  <li className="mb-2">
                    <strong>Cloud-Based Platform:</strong> As a cloud-based
                    tool, access to <strong>Amper Music AI</strong> is dependent
                    on a stable internet connection, which could be a drawback
                    in areas with unreliable connectivity.
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
              Discover Leading Alternatives for AI-Driven Workflow Optimization
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>AIVA AI</strong> offers comprehensive task
              automation and intelligent assistant features, several other
              platforms provide specialized capabilities to boost productivity
              and streamline your workflows.
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
                    <strong>AIVA AI</strong>: A dynamic AI-driven assistant
                    designed to automate workflows, streamline task management,
                    and deliver insightful analytics, enhancing overall business
                    productivity.
                  </li>
                  <li className="mb-2">
                    <strong>Zapier</strong>: A robust automation tool that
                    connects apps and automates tasks, improving workflows
                    without needing coding expertise. Ideal for integrating
                    various business tools.
                  </li>
                  <li className="mb-2">
                    <strong>IFTTT</strong>: A service that lets you create
                    automated workflows based on conditional triggers across
                    apps and devices, making it easier to manage various online
                    services.
                  </li>
                  <li className="mb-2">
                    <strong>Notion AI</strong>: An AI-enhanced productivity
                    workspace that helps with project management, content
                    creation, and task automation, offering a flexible and
                    personalized environment.
                  </li>
                  <li className="mb-2">
                    <strong>Microsoft Power Automate</strong>: A cloud platform
                    for automating workflows within the Microsoft 365 ecosystem
                    and third-party tools, empowering users to build efficient
                    task flows.
                  </li>
                  <li className="mb-2">
                    <strong>Monday.com</strong>: A collaborative work operating
                    system with built-in automation that aids teams in project
                    tracking, communication, and efficient workflow management
                    across platforms.
                  </li>
                  <li className="mb-2">
                    <strong>UiPath</strong>: A leading robotic process
                    automation (RPA) platform that automates routine tasks and
                    integrates AI for optimizing business processes, increasing
                    productivity at scale.
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
          <div className="row align-items-center mb-4">
            {/* Left side (Text Section) */}
            <div
              className="col-12 col-md-6 order-2 order-md-1"
              style={{ paddingRight: "30px" }}
            >
              <p className="text-primary">Write better, faster</p>
              <h1>Amper Music AI:</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Amper Music is an AI-powered music generation platform that
                enables users to create unique, royalty-free tracks in just
                minutes. Whether you’re a beginner or an experienced music
                producer, Amper’s intuitive interface and machine learning
                technology make music creation easy, fast, and accessible.
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
            <div className="col-12 col-md-6 order-1 order-md-2 text-center mb-3 mb-md-0">
              <img
                src={amper}
                alt="Amper Music AI"
                style={{
                  width: "100%",
                  height: "auto",
                  maxHeight: "300px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          <section style={{ backgroundColor: "#1b1f2b", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">Enhance Your Workflow with AIVA AI</p>
              <h2
                className="text-white"
                style={{ fontWeight: "600", marginBottom: "1rem" }}
              >
                Discover How AIVA AI Revolutionizes Your Workflow and
                Productivity
              </h2>
              <p
                style={{
                  color: "#ccc",
                  marginBottom: "2rem",
                  fontStyle: "italic",
                }}
              >
                AIVA AI empowers users to automate tasks, enhance
                decision-making, and streamline operations, offering an
                intelligent assistant that adapts to your needs in real time.
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
                      Automate Routine Tasks with Ease
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      AIVA AI helps automate everyday tasks like scheduling,
                      data entry, and email responses, allowing you to focus on
                      high-priority work.
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
                      Improve Decision-Making with Real-Time Insights
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      AIVA AI processes data to generate actionable insights
                      that empower faster, smarter decision-making for your
                      business or team.
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
                      Integrate and Optimize Across Tools
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      AIVA AI integrates effortlessly with your existing
                      productivity tools, enhancing collaboration,
                      communication, and task management across platforms.
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
            <h4 className="mb-3">Ready to get started with AmperMusicAI?</h4>
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

export default AmperMusicAI;
