import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file importimport "./SynthesiaAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import scn15 from "../../../../public/assets/Img/AI for Animation/scn15.jpg";
import scn16 from "../../../../public/assets/Img/AI for Animation/scn16.jpg";


import Synthesia from "../../../../public/assets/Img/AI for Animation/15.png";

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
const SynthesiaAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
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
                title: "AI Video Creation",
                desc: "Synthesia allows users to create video content using AI avatars, eliminating the need for physical actors.",
              },
              {
                icon: "🎨",
                title: "Text-to-Video Technology",
                desc: "This feature converts text scripts into engaging video content automatically.",
              },
              {
                icon: "✏",
                title: "Customizable Avatars",
                desc: " Personalize AI avatars to represent your brand or message.",
              },
              {
                icon: "📦",
                title: "AI-Powered Video Editing",
                desc: "Automates video editing, making it easy to produce professional-looking videos without experience.",
              },
              {
                icon: "⚙",
                title: "Real-time Video Creation",
                desc: "Create videos on-demand and share them immediately.",
              },
              {
                icon: " 📦",
                title: "Video Templates",
                desc: "A variety of templates for different use cases like marketing, product demos, and corporate training.",
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
                src={scn15}
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={scn16}
                alt="Screenshot 2"
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
                          <li>🪟 Windows 10/11 (Web Browser)</li>
                          <li>🍎 macOS 11+ (Safari, Chrome)</li>
                          <li>📱 Android & iOS (Browser access)</li>
                          <li>🌐 Any modern browser (Chrome, Firefox, Edge)</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h6>Hardware Requirements</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>⚡ Dual-core 2.0 GHz processor or higher</li>
                          <li>🧠 4 GB RAM (8 GB recommended)</li>
                          <li>💾 200 MB of free disk space</li>
                          <li>📶 Reliable broadband internet connection</li>
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
                      <li>📄 Getting Started Guide</li>
                      <li>💻 API & Developer Docs</li>
                      <li>🎥 Walkthrough Videos</li>
                      <li>🎓 AI Content Training Center</li>
                      <li>💬 Community & User Forum</li>
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
                        <h6>Productivity Tools</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>🧰 Google Docs</li>
                          <li>🧰 Microsoft Word</li>
                          <li>🧰 Notion</li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <h6>Developer Tools</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>💻 Zapier Integration</li>
                          <li>💻 RESTful API Access</li>
                          <li>💻 Webhooks for automation</li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <h6>Marketing Tools</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>📢 Mailchimp</li>
                          <li>📢 HubSpot</li>
                          <li>📢 WordPress Plugins</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Why-we-use":
        return (
          <div className="row g-4">
            <div className="col-12">
              <div className="custom-card text-light p-5 text-center">
                <h3 className="fw-bold mb-4 text-start text-primary">
                  Why Use Synthesia AI?
                </h3>

                <ul
                  className="text-start"
                  style={{
                    listStyleType: "disc",
                    paddingLeft: "1.5rem",
                    fontSize: "1rem", // paragraph-style font size
                    lineHeight: "1.5",
                  }}
                >
                  <li className="mb-3">
                    Synthesia eliminates the need for expensive video production
                    crews and equipment.
                  </li>
                  <li className="mb-3">
                    Create high-quality videos in a fraction of the time
                    compared to traditional methods.
                  </li>
                  <li className="mb-3">
                    Synthesia's AI platform allows for easy customization of
                    video avatars, voiceovers, and subtitles.
                  </li>
                  <li className="mb-3">
                    It is easy to scale video production for businesses, making
                    it ideal for large-scale content needs.
                  </li>
                  <li className="mb-3">
                    With AI-generated translations and subtitles, Synthesia is
                    ideal for global audiences.
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
                  q: "What is Synthesia AI?",
                  a: "Synthesia is an AI-powered platform that allows users to create professional videos by converting text scripts into videos with lifelike avatars and voiceovers.",
                },
                {
                  q: "How does Synthesia work?",
                  a: "Synthesia uses AI technology to generate videos from text input. It uses avatars that can speak multiple languages, creating realistic and dynamic video content.",
                },
                {
                  q: "Is Synthesia a video editing tool?",
                  a: "While it includes basic editing features, Synthesia is primarily designed for video creation using AI avatars rather than advanced video editing.",
                },
                {
                  q: "Can I use Synthesia for free?",
                  a: "Yes, Synthesia offers a free trial so you can test its features before subscribing to a paid plan.",
                },
                {
                  q: "What are the pricing plans for Synthesia?",
                  a: "Synthesia offers various pricing tiers, with a free trial available. Paid plans start at $30/month for individuals, and enterprise pricing is customized based on business needs.",
                },
                {
                  q: "Can Synthesia create videos in different languages?",
                  a: "Yes, Synthesia supports multiple languages and offers voiceovers in several accents and languages.",
                },
                {
                  q: "How fast can I create a video with Synthesia?",
                  a: "Videos can be created in just a few minutes depending on the length and complexity of the script.",
                },
                {
                  q: "Can I customize avatars in Synthesia?",
                  a: "Yes, Synthesia allows you to create and customize avatars to reflect your brand's image or personal preferences.",
                },
                {
                  q: "What are the use cases for Synthesia?",
                  a: "Synthesia is ideal for marketing videos, corporate training, e-learning, customer support videos, social media content, and more.",
                },
                {
                  q: "How does Synthesia compare to other AI video tools?",
                  a: "Synthesia stands out for its high-quality AI avatars, text-to-video capabilities, and multiple language support. Some competitors may offer fewer features or lower-quality outputs.",
                },
                {
                  q: "Can I create training videos with Synthesia?",
                  a: "Yes, Synthesia is widely used for corporate training, onboarding, and educational videos.",
                },
                {
                  q: "Is Synthesia useful for content creators?",
                  a: "Absolutely! Content creators use Synthesia for creating YouTube videos, social media content, and tutorials without the need for cameras or complex setups.",
                },
                {
                  q: "How can businesses use Synthesia?",
                  a: "Businesses use Synthesia for creating marketing videos, internal communications, product demos, and customer support content.",
                },
                {
                  q: "Does Synthesia offer voiceovers in different languages?",
                  a: "Yes, Synthesia offers AI-generated voiceovers in multiple languages, including English, Spanish, French, German, and many more.",
                },
                {
                  q: "What types of videos can I create with Synthesia?",
                  a: "You can create explainer videos, corporate training videos, product demos, tutorials, social media content, and more.",
                },
                {
                  q: "Can I upload my own voiceover to Synthesia?",
                  a: "No, Synthesia uses AI-generated voiceovers, and you cannot upload your own voice. However, you can select from a variety of voice models and languages.",
                },
                {
                  q: "Can Synthesia be used for marketing videos?",
                  a: "Yes, Synthesia is ideal for creating personalized marketing videos, video ads, and social media videos.",
                },
                {
                  q: "Can I add subtitles to my Synthesia videos?",
                  a: "Yes, Synthesia automatically generates subtitles in multiple languages.",
                },
                {
                  q: "How realistic are the avatars in Synthesia?",
                  a: "The avatars in Synthesia are highly realistic, with natural facial expressions and lip-syncing that make them appear lifelike.",
                },
                {
                  q: "Can I use Synthesia for explainer videos?",
                  a: "Yes, Synthesia is an excellent tool for creating explainer videos, thanks to its easy-to-use platform and customizable avatars.",
                },
                {
                  q: "Does Synthesia support video editing?",
                  a: "While it’s not an advanced video editing tool, Synthesia allows for basic video edits such as adding text, changing scenes, and adjusting audio.",
                },
                {
                  q: "Is Synthesia suitable for educational content?",
                  a: "Yes, Synthesia is widely used by educators and institutions for creating engaging educational videos, online courses, and tutorials.",
                },
                {
                  q: "Can I integrate Synthesia with other platforms?",
                  a: "Yes, Synthesia can be integrated with various platforms, such as video hosting services, LMS (Learning Management Systems), and social media platforms.",
                },
                {
                  q: "Is there an API available for Synthesia?",
                  a: "Yes, Synthesia offers an API for integrating its video creation capabilities into third-party applications.",
                },
                {
                  q: "What is the target audience for Synthesia?",
                  a: "Synthesia is aimed at businesses, marketers, educators, content creators, and HR departments looking to create professional videos easily and quickly.",
                },
                {
                  q: "How does Synthesia handle video localization?",
                  a: "Synthesia allows for localization of videos by adding translated subtitles and generating voiceovers in different languages.",
                },
                {
                  q: "Can I use Synthesia to create videos for social media?",
                  a: "Yes, Synthesia is perfect for creating engaging video content for platforms like Instagram, YouTube, Facebook, and TikTok.",
                },
                {
                  q: "Does Synthesia provide analytics for videos?",
                  a: "No, Synthesia focuses on video creation and does not provide analytics. You would need to use third-party tools for video performance tracking.",
                },
                {
                  q: "What’s the difference between Synthesia’s free and paid versions?",
                  a: "The free version offers limited access to features, while the paid plans unlock additional features, such as advanced avatars, additional language options, and high-resolution videos.",
                },
                {
                  q: "How can I create personalized videos with Synthesia?",
                  a: "You can personalize videos by customizing avatars, adjusting voiceovers, and including your brand's visual elements in the videos.",
                },
                {
                  q: "Does Synthesia allow for real-time video creation?",
                  a: "Yes, Synthesia allows you to create videos in real time once you input the script and select the necessary settings.",
                },
                {
                  q: "What file formats does Synthesia support for video export?",
                  a: "Synthesia supports standard video formats like MP4 for exporting videos.",
                },
                {
                  q: "Can I use Synthesia for live presentations?",
                  a: "While Synthesia is not designed for live streaming, it can be used to create pre-recorded virtual presentations that appear live.",
                },
                {
                  q: "How do I get started with Synthesia?",
                  a: "Sign up for an account on the Synthesia website, choose your plan, and start creating videos by uploading scripts or choosing from the video templates.",
                },
                {
                  q: "Can Synthesia generate video scripts for me?",
                  a: "No, Synthesia doesn’t generate video scripts; it requires a script to be uploaded in order to create a video.",
                },
                {
                  q: "What industries can benefit from using Synthesia?",
                  a: "Synthesia is beneficial for marketing, education, HR, e-learning, customer support, corporate training, and more.",
                },
                {
                  q: "Does Synthesia support virtual events?",
                  a: "Yes, Synthesia can be used to create content for virtual events, providing professional-looking videos with AI avatars as hosts or speakers.",
                },
                {
                  q: "Can I upload my own images or logos in Synthesia?",
                  a: "Yes, you can upload logos and brand assets to make the videos more personalized and aligned with your branding.",
                },
                {
                  q: "Is there a limit to how many videos I can create with Synthesia?",
                  a: "The number of videos you can create depends on your subscription plan. Higher-tier plans allow for more videos.",
                },
                {
                  q: "How secure is Synthesia’s platform?",
                  a: "Synthesia follows industry standards for data security, ensuring that user data and videos are protected.",
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
                    Eliminates the need to hire actors or film crews.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Produce professional-looking videos without needing
                    technical expertise.
                  </li>
                  <li className="mb-2">
                    Offers multiple languages and voiceovers for global reach.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Tailor avatars to reflect your brand’s identity or specific
                    needs.
                  </li>
                  <li className="mb-2">
                    Create videos in minutes instead of weeks.
                  </li>
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
                    The pricing may be steep for smaller businesses or
                    individual content creators.
                  </li>
                  <li className="mb-2">
                    More complex, interactive, or dynamic videos may not be
                    possible using Synthesia’s current capabilities.
                  </li>
                  <li className="mb-2">
                    While Synthesia is great for straightforward videos,
                    creative control may be limited compared to fully custom
                    video production.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "Alternatives":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-4">Alternatives</h4>
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
                    Another AI video creation tool focused on automatic video
                    generation and text-to-video.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Offers a similar text-to-video transformation but with a
                    broader focus on social media content.
                  </li>
                  <li className="mb-2">
                    Offers AI-based video content creation using avatars for
                    corporate communication and education.
                  </li>
                  <li className="mb-2">
                    A video editing software that offers AI-based voice cloning
                    and transcription features.
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
              style={{ paddingRight: "30px" }}
              className="col-md-6  col-12 order-2 order-md-1 "
            >
              <p className="text-primary">Write better, faster</p>
              <h1>Synthesia AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                {" "}
                Synthesia is a leading AI-powered video creation platform that
                allows users to produce high-quality videos using synthetic
                avatars and realistic voiceovers. The platform leverages deep
                learning and natural language processing to generate lifelike
                video content without the need for cameras, actors, or
                complicated production setups. It’s widely used by businesses,
                content creators, and educational institutions to streamline
                video creation for marketing, training, and communication
                purposes
              </p>

              <div className="mb-3">
                <a
                  href="https://www.veed.io/"
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
                textAlign: "center",
                Width: "100%",
                height: "250px",
              }}
              className="col-md-6 col-12 order-md-2 order-1 text-center mb-3 mb-md-0  "
            >
              <img
                src={Synthesia}
                style={{
                  Width: "100%",
                  height: "auto",
                  maxHeight: "300px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>
          <section style={{ backgroundColor: "", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">Create AI Videos in 3 Easy Steps</p>
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
                      Choose an Avatar and Template
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Pick from a wide range of AI avatars and professional
                      video templates that suit your purpose.
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
                      Type or Paste Your Script
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Write your script or use a prompt to generate one.
                      Synthesia will convert it into voice and video
                      automatically.
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
                      Generate and Download Your Video
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      In just minutes, your AI video will be ready. You can
                      preview, download, or share it instantly.
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
              "Why-we-use",
              "Pros & Cons",
              "Alternatives",
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

export default SynthesiaAI;
