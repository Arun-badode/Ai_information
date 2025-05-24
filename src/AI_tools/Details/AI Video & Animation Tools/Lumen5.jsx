import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import "../../ImageMindAI.css"; // <-- custom CSS file import

import lumen5 from "../../../../public/assets/Img/AI for Animation/9.png";
import scn7 from "../../../../public/assets/Img/AI for Animation/scn7.jpg";
import scn8 from "../../../../public/assets/Img/AI for Animation/scn8.jpg";

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
const Lumen5 = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);
  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
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
                title: "AI Video Editing:",
                desc: "Lumen5’s AI-driven video editor can automatically select relevant images, video clips, and music based on the provided text.",
              },
              {
                icon: "🎨",
                title: "Text-to-Video Technology:",
                desc: " Transform blog posts, articles, and scripts into compelling videos.",
              },
              {
                icon: "✏",
                title: "Voiceover Feature",
                desc: "Lumen5 includes an AI-powered voiceover option to enhance the storytelling of your videos.",
              },
              {
                icon: "📦",
                title: "Customizable Video Templates",
                desc: " Users can choose from a wide range of templates to suit different needs like social media videos, YouTube content, or business presentations.",
              },
              {
                icon: "⚙",
                title: "Content Repurposing",
                desc: " Lumen5 helps users repurpose blog posts and articles into video format, making it easy to reach new audiences.",
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

      case "screenshots":
        return (
          <div className="row g-4">
            <div className="col-md-6">
              <img
                src={scn7}
                alt="lumen"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={scn8}
                alt="lumen5"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
          </div>
        );

      case "reviews":
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

      case "technical":
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
      case "FAQs":
        return (
          <div className="faq-section container py-5">
            <h3 className="text-center text-white mb-5 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is Lumen5?",
                  a: "Lumen5 is an AI-powered video creation platform that helps users turn written content like blog posts, articles, and scripts into engaging videos quickly and easily.",
                },
                {
                  q: "How does Lumen5 work?",
                  a: "Lumen5 analyzes the text you provide, automatically matching it with relevant visuals, music, and transitions to create a video that aligns with your content.",
                },
                {
                  q: "Is Lumen5 free to use?",
                  a: "Yes, Lumen5 offers a free plan with limited features, including watermarked videos and access to fewer templates and customization options.",
                },
                {
                  q: "What is the Lumen5 free plan?",
                  a: "The free plan allows users to create basic videos with limited features, watermarked videos, and a 720p resolution.",
                },
                {
                  q: "How much does Lumen5 cost?",
                  a: "Lumen5 has several paid plans starting at $19 per month. Pricing varies based on the features, video quality, and resolution you require.",
                },
                {
                  q: "Can I remove the watermark in Lumen5?",
                  a: "Yes, you can remove the watermark by subscribing to one of the paid plans.",
                },
                {
                  q: "Does Lumen5 offer a free trial?",
                  a: "Yes, Lumen5 offers a free trial so you can test out its features before committing to a paid plan.",
                },
                {
                  q: "Can I create YouTube videos with Lumen5?",
                  a: "Yes, Lumen5 is optimized for creating YouTube videos with templates tailored for the platform's format and style.",
                },
                {
                  q: "What video formats does Lumen5 support?",
                  a: "Lumen5 supports multiple formats, including vertical, square, and horizontal videos, optimized for platforms like YouTube, Instagram, and Facebook.",
                },
                {
                  q: "What features are available in the Lumen5 free plan?",
                  a: "The free plan includes limited video templates, a watermark, lower resolution, and limited video editing tools.",
                },
                {
                  q: "Can I upload my own images and videos to Lumen5?",
                  a: "Yes, you can upload your own images, video clips, and music to Lumen5 to use in your projects.",
                },
                {
                  q: "How does Lumen5 create videos from text?",
                  a: "Lumen5 uses AI to analyze the text you input and then selects relevant media, such as images, video clips, and background music, to create a video based on the script.",
                },
                {
                  q: "Can I add voiceovers to Lumen5 videos?",
                  a: "Yes, Lumen5 allows you to add AI-generated or custom voiceovers to your videos.",
                },
                {
                  q: "Does Lumen5 provide voiceover options?",
                  a: "Yes, Lumen5 offers a range of voiceover options, including male and female voices with different accents.",
                },
                {
                  q: "How do I customize videos in Lumen5?",
                  a: "You can customize videos in Lumen5 by adjusting the text, images, fonts, colors, and adding logos, captions, and music.",
                },
                {
                  q: "Can I add subtitles to my Lumen5 videos?",
                  a: "Yes, Lumen5 can automatically generate subtitles for your videos, which can be customized and edited.",
                },
                {
                  q: "Does Lumen5 support multi-language videos?",
                  a: "Yes, Lumen5 supports multiple languages, making it possible to create videos for a global audience.",
                },
                {
                  q: "Can I upload my own music to Lumen5?",
                  a: "Yes, you can upload your own music, or you can use the royalty-free music available within Lumen5’s library.",
                },
                {
                  q: "How many templates does Lumen5 offer?",
                  a: "Lumen5 provides a wide range of templates designed for different use cases, including social media videos, YouTube videos, product demos, and more.",
                },
                {
                  q: "Can I create explainer videos with Lumen5?",
                  a: "Yes, Lumen5 is ideal for creating explainer videos with its AI-powered templates and automatic media selection.",
                },
                {
                  q: "What’s the difference between Lumen5 and Animoto?",
                  a: "Lumen5 offers AI-powered video creation from text, while Animoto focuses more on providing manual video editing controls.",
                },
                {
                  q: "How long can videos be in Lumen5?",
                  a: "The video length depends on the plan you choose. Free users are limited to shorter videos, while premium plans allow longer videos with higher resolutions.",
                },
                {
                  q: "Can Lumen5 help with video marketing?",
                  a: "Yes, Lumen5 is an excellent tool for video marketing, with features that make it easy to create videos for advertising, social media, and brand promotion.",
                },
                {
                  q: "Can I collaborate with my team on Lumen5?",
                  a: "Yes, Lumen5 provides team collaboration features, allowing multiple users to work together on video projects.",
                },
                {
                  q: "What video resolutions are available in Lumen5?",
                  a: "Lumen5 supports resolutions up to 1080p, depending on the subscription plan you choose.",
                },
                {
                  q: "How can I use Lumen5 for social media?",
                  a: "Lumen5’s templates are optimized for creating videos for various social media platforms, including Instagram, LinkedIn, and Facebook.",
                },
                {
                  q: "Can I make product demo videos using Lumen5?",
                  a: "Yes, Lumen5 is great for creating product demo videos, allowing you to showcase your products with engaging visuals and animations.",
                },
                {
                  q: "What makes Lumen5’s AI technology unique?",
                  a: "Lumen5’s AI technology automatically analyzes your text and selects relevant visuals, audio, and transitions to create cohesive and engaging videos.",
                },
                {
                  q: "Can I use Lumen5 to create training videos?",
                  a: "Yes, Lumen5 is suitable for creating corporate training videos, educational tutorials, and online course content.",
                },
                {
                  q: "Does Lumen5 offer customer support?",
                  a: "Yes, Lumen5 offers customer support via live chat, email, and a comprehensive knowledge base.",
                },
                {
                  q: "Can I change my Lumen5 subscription plan?",
                  a: "Yes, you can upgrade or downgrade your subscription plan at any time.",
                },
                {
                  q: "How long does it take to create a video in Lumen5?",
                  a: "Lumen5 can generate a video in a matter of minutes, depending on the length and complexity of the script.",
                },
                {
                  q: "What kind of videos can I create with Lumen5?",
                  a: "Lumen5 supports a variety of video types, including promotional videos, explainer videos, product demos, educational content, and social media videos.",
                },
                {
                  q: "Can I create videos for my business with Lumen5?",
                  a: "Yes, Lumen5 is designed for businesses of all sizes, providing features that make it easy to create professional-quality videos for marketing and communication.",
                },
                {
                  q: "Can Lumen5 be used for influencer marketing?",
                  a: "Yes, influencers can use Lumen5 to create branded video content for their social media platforms and campaigns.",
                },
              ]
                .map((item, i) => ({ ...item, id: `faq${i} ` }))
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

      case "why-we-use":
        return (
          <div className="container">
            <div className="row g-4">
              <div className="col-12">
                <div className="custom-card text-light p-5 text-center">
                  <h3 className="fw-bold mb-4 text-start text-primary">
                    Why Use Pictory AI?
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
                      Lumen5 is ideal for users who need to produce high-quality
                      videos quickly.
                    </li>
                    <li class="mb-3">
                      Whether you're a marketer, business owner, content
                      creator, or educator, it caters to all.
                    </li>
                    <li class="mb-3">
                      The platform provides essential tools to engage your
                      audience with professional-grade videos.
                    </li>
                    <li class="mb-3">
                      It saves time and increases productivity by automating the
                      video creation process.
                    </li>
                    <li class="mb-3">
                      Lumen5 enhances your content strategy by converting
                      written material into visually appealing video content.
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

      case "pros & cons":
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
                    {" "}
                    User-friendly interface that makes video creation accessible
                    for beginners.
                  </li>
                  <li className="mb-2">
                    Automates the video creation process, allowing users to
                    produce videos faster.{" "}
                  </li>
                  <li className="mb-2">
                    Wide selection of templates, fonts, music, and branding
                    options.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Smart AI suggestions based on your text input.
                  </li>
                  <li className="mb-2">
                    Easily transform blog posts, articles, or any written
                    content into videos .
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
                    The free plan comes with limitations such as watermarked
                    videos and fewer features.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Although customizable, some users may find the template
                    options a bit restrictive for advanced video editing needs.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Some of the best features like higher resolution videos,
                    advanced templates, and removal of the watermark are only
                    available in the paid plans.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "alternative":
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
                    Another popular video creation tool that offers
                    drag-and-drop simplicity and a variety of customizable
                    options for professional-grade videos.
                  </li>
                  <li className="mb-2">
                    Provides an easy-to-use platform for creating social media
                    videos and other visual content with more manual
                    customization options.
                  </li>
                  <li className="mb-2">
                    {" "}
                    A versatile tool for creating videos from scratch or
                    templates, offering more advanced editing features than
                    Lumen5.
                  </li>
                  <li className="mb-2">
                    Another popular video creation tool that offers
                    drag-and-drop simplicity and a variety of customizable
                    options for professional-grade videos.
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
          <div className=" row d-flex align-items-center justify-content-between mb-1">
            {/* Left side (Text Section) */}
            <div
              style={{ paddingRight: "30px" }}
              className="col-md-6  col-12 order-2 order-md-1 "
            >
              <p className="text-primary">Write better, faster</p>
              <h1>Lumen5</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Lumen5 is an AI-powered video creation platform that allows
                users to easily convert text into engaging videos. It is
                designed for businesses, marketers, content creators, and
                educators looking to generate video content quickly and
                efficiently. Lumen5 leverages artificial intelligence to
                automate the video creation process, making it easier for users
                to produce professional-looking videos with minimal effort.
              </p>

              <div className="mb-3">
                <a
                  href="https://lumen5.com/"
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
                src={lumen5}
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
                      Add Your Blog or Script
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Simply paste your blog post, article, or script. Lumen5
                      will analyze the content and begin turning it into video
                      format.
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
                      Let Lumen5 Design Scenes
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      The AI engine picks the right visuals, animations, and
                      text layouts to match your message for maximum impact.
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
                      Customize and Publish
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Tweak the visuals, change fonts or music, then export your
                      video for use on social media, websites, or marketing
                      campaigns.
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
              "features",
              "screenshots",
              "reviews",
              "FAQs",
              "technical",
              "why-we-use",
              "pros & cons",
              "alternative",
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

export default Lumen5;
