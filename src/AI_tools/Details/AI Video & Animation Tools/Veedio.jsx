import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

import veedio from "../../../../public/assets/Img/AI for Animation/11.png";

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
const Veedio = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                Create Studio-Quality Videos with AI
              </p>
              <h3 className=""> Diverse AI Avatars & Multilingual Support</h3>
            </div>
            {[
              {
                icon: "🖼",
                title: "AI Video Editing",
                desc: "Automate the video editing process with Veed.io’s AI-powered tools.",
              },
              {
                icon: "🎨",
                title: "Text-to-Video",
                desc: " Convert text or scripts into fully edited videos.  ",
              },
              {
                icon: "✏",
                title: " Voiceover Feature",
                desc: "Add voiceovers directly to videos with AI-generated voice models.",
              },
              {
                icon: "📦",
                title: "Subtitles & Transcription",
                desc: " Generate subtitles and transcriptions automatically.",
              },
              {
                icon: "⚙",
                title: "Collaboration",
                desc: " Share your video projects with team members for collaborative editing.",
              },

              {
                icon: "📦",
                title: "Captions and Subtitles",
                desc: "Automatically generates captions and subtitles for accessibility and better engagement.",
              },
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="custom-card text-light p-4 h-100  "
                  style={{ border: "1px solid #7B68EE" }}
                >
                  <div className="icon mb-3">{feature.icon}</div>
                  <h5 className="fw-bold">{feature.title}</h5>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case "Screenshots":
        return (
          <div className="row g-4">
            <div className="col-md-6">
              <img
                src="https://blog.media.io/images/kinemaster-video-background-editor-farhan/green-screen-editor.jpg"
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={veedio}
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
      case "FAQs":
        return (
          <div className="faq-section container py-5">
            <h3 className="text-center text-white mb-5 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is Veed.io?",
                  a: "Veed.io is an online video editing tool powered by AI. It allows users to create, edit, and enhance videos with minimal effort, catering to content creators, marketers, and businesses.",
                },
                {
                  q: "Is Veed.io free?",
                  a: "Veed.io offers a free plan with limited features. The free plan includes watermarked videos and fewer export options, while the paid plans offer additional features.",
                },
                {
                  q: "How much does Veed.io cost?",
                  a: "Veed.io offers several pricing tiers, starting from $12/month for Pro and $24/month for Business plans.",
                },
                {
                  q: "What features does Veed.io offer?",
                  a: "Features include video editing, text-to-video, AI-powered voiceovers, automatic subtitles, customizable templates, and more.",
                },
                {
                  q: "Can I upload my own video to Veed.io?",
                  a: "Yes, you can upload your own video files to Veed.io and start editing them right away.",
                },
                {
                  q: "Can Veed.io be used for YouTube videos?",
                  a: "Yes, Veed.io is ideal for YouTube, offering video templates, automatic subtitles, and simple export options.",
                },
                {
                  q: "Does Veed.io have video templates?",
                  a: "Yes, Veed.io includes customizable templates for social media, ads, tutorials, and more.",
                },
                {
                  q: "Is Veed.io good for video editing beginners?",
                  a: "Yes, it's user-friendly with drag-and-drop tools, AI features, and intuitive templates.",
                },
                {
                  q: "Can I remove the watermark in the free version?",
                  a: "No, watermarks are present in the free plan. To remove them, upgrade to Pro or Business.",
                },
                {
                  q: "Does Veed.io offer real-time video collaboration?",
                  a: "Yes, Veed.io supports team collaboration for simultaneous project editing.",
                },
                {
                  q: "Can I create explainer videos with Veed.io?",
                  a: "Yes, tools and templates are available for creating explainer videos with overlays and animations.",
                },
                {
                  q: "Does Veed.io support voiceovers?",
                  a: "Yes, you can add AI-generated or manually recorded voiceovers.",
                },
                {
                  q: "How can I add subtitles to videos in Veed.io?",
                  a: "Veed.io uses AI to generate subtitles, which you can edit or add manually.",
                },
                {
                  q: "Can I create a video ad with Veed.io?",
                  a: "Yes, Veed.io offers ad templates for Facebook, Instagram, YouTube, and more.",
                },
                {
                  q: "Does Veed.io have a mobile app?",
                  a: "Currently, Veed.io does not have a mobile app but works in browsers on mobile devices.",
                },
                {
                  q: "How does Veed.io compare to Adobe Premiere Pro?",
                  a: "Veed.io is simpler and beginner-friendly, while Premiere Pro is for advanced professional editing.",
                },
                {
                  q: "Can I resize videos with Veed.io?",
                  a: "Yes, you can resize videos for platforms like Instagram, TikTok, and YouTube.",
                },
                {
                  q: "Does Veed.io support 4K video export?",
                  a: "Yes, 4K export is available in higher-tier plans.",
                },
                {
                  q: "Can I add music to my videos in Veed.io?",
                  a: "Yes, use Veed.io's royalty-free music library or upload your own.",
                },
                {
                  q: "Does Veed.io offer AI video editing?",
                  a: "Yes, AI is used for trimming, subtitles, voiceovers, and more.",
                },
                {
                  q: "Can I use Veed.io for Instagram videos?",
                  a: "Yes, it's optimized for Instagram with templates and vertical video support.",
                },
                {
                  q: "Does Veed.io support video exports in different formats?",
                  a: "Yes, formats like MP4, MOV, and more are supported depending on the plan.",
                },
                {
                  q: "How does Veed.io handle video transcriptions?",
                  a: "It automatically transcribes videos with editable AI-generated captions.",
                },
                {
                  q: "Can I use Veed.io for TikTok videos?",
                  a: "Yes, Veed.io is great for editing vertical videos with music and effects.",
                },
                {
                  q: "Is Veed.io good for small businesses?",
                  a: "Yes, it's ideal for businesses to create marketing videos without needing advanced skills.",
                },
                {
                  q: "Can I use Veed.io to remove background noise?",
                  a: "Yes, noise removal tools are included to enhance audio quality.",
                },
                {
                  q: "Does Veed.io offer live streaming features?",
                  a: "Yes, you can live stream to YouTube, Facebook, and more.",
                },
                {
                  q: "Can I add text animations in Veed.io?",
                  a: "Yes, it offers a range of animated text effects.",
                },
                {
                  q: "Can I use Veed.io for creating training videos?",
                  a: "Yes, it's useful for eLearning content with subtitles and annotations.",
                },
                {
                  q: "Does Veed.io have a video script generator?",
                  a: "Yes, it helps create scripts and supports AI voiceovers from text.",
                },
                {
                  q: "Does Veed.io support green screen effects?",
                  a: "Yes, background removal and green screen tools are available.",
                },
                {
                  q: "Can I create animated videos with Veed.io?",
                  a: "Yes, basic animations and motion graphics are supported.",
                },
                {
                  q: "Does Veed.io have an API for developers?",
                  a: "Yes, Veed.io provides an API to integrate video editing in apps.",
                },
                {
                  q: "Can I export videos without watermarks?",
                  a: "Yes, upgrade to Pro or Business to export without watermarks.",
                },
                {
                  q: "Can I add logos to videos in Veed.io?",
                  a: "Yes, you can add logos and brand elements easily.",
                },
                {
                  q: "Can Veed.io create customer engagement videos?",
                  a: "Yes, Veed.io is used for dynamic, branded customer videos.",
                },
              ]
                .map((item, i) => `{ ...item, id: faq${i} }`)
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
                    <small className="text-muted d-block text-center">
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
      case "Alternative":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-4">
              Alternatives to Veed.io
            </h4>
            <div className="row justify-content-center gap-2">
              <div
                className="col-lg-8 col-md-8 col-sm-12"
                style={{
                  border: "1px solid #7B68EE",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Kapwing:</strong> Online video editor with
                    collaboration tools, ideal for teams but with some feature
                    limitations on the free plan.
                  </li>
                  <li className="mb-2">
                    <strong>InVideo:</strong> Offers a wide range of templates
                    and is great for marketing videos, but has a steeper
                    learning curve for beginners.
                  </li>
                  <li className="mb-2">
                    <strong>Clipchamp:</strong> Microsoft-backed editor with
                    cloud syncing and integrations, but may feel limited for
                    professional-level editing.
                  </li>
                  <li className="mb-2">
                    <strong>Canva Video Editor:</strong> Easy to use with rich
                    design tools and video support, but less flexible for
                    detailed timeline editing.
                  </li>
                </ul>
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
                    Why Use Veed.io?
                  </h3>

                  <ul
                    className="text-start"
                    style={{
                      listStyleType: "disc",
                      paddingLeft: "1.5rem",
                      fontSize: "1rem",
                      lineHeight: "1.5",
                    }}
                  >
                    <li class="mb-3">
                      Veed.io offers an intuitive interface for quick and easy
                      video editing without requiring prior experience.
                    </li>
                    <li class="mb-3">
                      Great for creating social media content, marketing videos,
                      and product demos.
                    </li>
                    <li class="mb-3">
                      Built-in features like subtitles, screen recording, and
                      audio cleanup streamline your workflow.
                    </li>
                    <li class="mb-3">
                      Cloud-based editing means you can access and edit videos
                      from any device.
                    </li>
                    <li class="mb-3">
                      Teams can collaborate in real-time, making it ideal for
                      remote work and content collaboration.
                    </li>
                    <li class="mb-3">
                      Supports exporting in various formats optimized for
                      different platforms.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Start Creating Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Pros & Cons":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-4">Pros & Cons</h4>
            <div className="row justify-content-center gap-2">
              {/* Pros Column */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #7B68EE",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-success text-start mb-4">✅ Pros</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    User-friendly interface suitable for beginners.
                  </li>
                  <li className="mb-2">
                    AI-powered tools for faster video creation.
                  </li>
                  <li className="mb-2">
                    Extensive library of templates for various types of videos.
                  </li>
                  <li className="mb-2">Real-time collaboration features.</li>
                  <li className="mb-2">Affordable pricing plans.</li>
                </ul>
              </div>

              {/* Cons Column */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #7B68EE",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-warning text-start mb-4">⚠ Cons</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    The free plan comes with watermarks on videos.
                  </li>
                  <li className="mb-2">
                    Some advanced features are only available in higher-tier
                    plans.
                  </li>
                  <li className="mb-2">
                    Limited storage and export options on lower plans.
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
              <h1>Veed.io</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Veed.io is an AI-powered online video editing platform designed
                for ease of use and accessibility. It simplifies video creation
                and editing by offering a wide range of intuitive tools that
                cater to content creators, marketers, businesses, and educators.
                Whether you're a YouTuber, a small business, or a marketing
                agency, Veed.io allows users to create high-quality videos
                effortlessly, with minimal technical expertise.
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
              <img src={veedio} style={{ MaxWidth: "100%", height: "300px" }} />
            </div>
          </div>
          <section style={{ backgroundColor: "", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">Create Videos in 3 Simple Steps</p>
              <h2
                style={{
                  fontWeight: "semibold",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                How does it work?
              </h2>

              <div className="row g-4">
                {/* Step 1 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#1034A6",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>
                      {`
              .step1 {
                position: absolute;
                bottom: 10px;
                right: 15px;
                font-size: 4rem;
                font-weight: bold;
                color: #7b61ff;
                opacity: 0.6;
              }
            `}
                    </style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Upload or Describe Your Vision
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Start by uploading an image, video clip, or simply
                      describe your idea in text. Runway Gen-2 understands your
                      creative intent.
                    </p>
                    <div className="step1">1</div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#1034A6",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>
                      {`
              .step2 {
                position: absolute;
                bottom: 10px;
                right: 15px;
                font-size: 4rem;
                font-weight: bold;
                color: #7b61ff;
                opacity: 0.6;
              }
            `}
                    </style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Let AI Generate Video
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Runway Gen-2 processes your input using advanced AI models
                      to generate cinematic-quality video content with dynamic
                      motion.
                    </p>
                    <div className="step2">2</div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#1034A6",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>
                      {`
              .step3 {
                position: absolute;
                bottom: 10px;
                right: 15px;
                font-size: 4rem;
                font-weight: bold;
                color: #7b61ff;
                opacity: 0.6;
              }
            `}
                    </style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Refine and Download
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Review the output, make any adjustments with intuitive
                      editing tools, and download your AI-generated video ready
                      for sharing.
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
            <h4 className="mb-3">Ready to get started with Veed.io?</h4>
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

export default Veedio;
