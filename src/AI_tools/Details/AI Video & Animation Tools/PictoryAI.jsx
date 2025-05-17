import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

import pictoryAI from "../../../../public/assets/Img/AI for Animation/16.png";
import scn11 from "../../../../public/assets/Img/AI for Animation/scn11.jpg";
import scn12 from "../../../../public/assets/Img/AI for Animation/scn12.jpg";
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
const PictoryAI = () => {
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
                title: "Text-to-Video Technology",
                desc: "Synthesia allows users to create video content using AI avatars, eliminating the need for physical actors.",
              },
              {
                icon: "🎨",
                title: "Video Templates",
                desc: " Pre-made templates for a quick start.",
              },
              {
                icon: "✏",
                title: "Customizable Options",
                desc: "Customize videos with voiceovers, animations, and branding.",
              },
              {
                icon: "📦",
                title: "AI Voiceover",
                desc: " Add realistic voiceovers to your videos in multiple languages.",
              },
              {
                icon: "⚙",
                title: "Automated Video Editing",
                desc: " Save time with automatic video editing, trimming, and adding transitions.",
              },

              {
                icon: "📦",
                title: "SEO Features",
                desc: " Optimize your videos for search engines and enhance online discoverability.",
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
                src={scn11}
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={scn12}
                alt="Screenshot 2"
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
      case "FAQs":
        return (
          <div className="faq-section container py-5">
            <h3 className="text-center text-white mb-5 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is Pictory AI?",
                  a: "Pictory AI is an advanced video creation platform that uses artificial intelligence to transform written content into engaging videos.",
                },
                {
                  q: "How does Pictory AI work?",
                  a: "Pictory AI works by taking text-based content, such as blogs, articles, or scripts, and automatically converting it into videos with pre-designed templates, voiceovers, and animations.",
                },
                {
                  q: "Is Pictory AI easy to use?",
                  a: "Yes, Pictory AI is designed to be user-friendly, and no prior video editing experience is required to create high-quality videos.",
                },
                {
                  q: "Can I use Pictory for YouTube videos?",
                  a: "Yes, Pictory is excellent for creating YouTube videos from articles, blogs, or scripts.",
                },
                {
                  q: "What are the key features of Pictory AI?",
                  a: "Key features include text-to-video technology, customizable templates, voiceover options, multi-platform integration, and automated video editing.",
                },
                {
                  q: "What is the pricing for Pictory AI?",
                  a: "Pictory offers a free plan and paid plans starting at $19/month for additional features and longer video lengths.",
                },
                {
                  q: "Does Pictory AI have a free plan?",
                  a: "Yes, Pictory offers a free plan with basic features and some limitations on video length and export options.",
                },
                {
                  q: "Can I use Pictory AI for social media content?",
                  a: "Yes, Pictory AI is great for creating social media videos for platforms like Instagram, Facebook, and TikTok.",
                },
                {
                  q: "Can Pictory AI create voiceovers for videos?",
                  a: "Yes, Pictory AI has a built-in voiceover feature with realistic voices in multiple languages.",
                },
                {
                  q: "Is Pictory AI suitable for businesses?",
                  a: "Yes, Pictory AI can help businesses create videos for marketing, training, product demos, and internal communications.",
                },
                {
                  q: "How do I create a video with Pictory?",
                  a: "Upload your text, choose a template, customize the content, and Pictory AI will generate a video for you.",
                },
                {
                  q: "Does Pictory AI offer templates?",
                  a: "Yes, Pictory offers customizable video templates for different types of content like explainer videos, social media content, and ads.",
                },
                {
                  q: "Can Pictory be used for e-learning content?",
                  a: "Yes, Pictory AI is perfect for creating educational videos and online courses.",
                },
                {
                  q: "What types of videos can I create with Pictory AI?",
                  a: "You can create a variety of videos, including product demos, tutorials, explainer videos, marketing videos, and social media content.",
                },
                {
                  q: "Is Pictory AI compatible with mobile devices?",
                  a: "Pictory AI is web-based, so it can be accessed from any device with a browser, including smartphones and tablets.",
                },
                {
                  q: "Can I edit my videos after they are created?",
                  a: "Yes, Pictory provides video editing tools to modify the content, text, and visuals even after the video is generated.",
                },
                {
                  q: "Does Pictory AI support multi-language voiceovers?",
                  a: "Yes, Pictory supports multiple languages for voiceovers, making it ideal for international content creation.",
                },
                {
                  q: "Can I use Pictory for video marketing campaigns?",
                  a: "Yes, Pictory is an excellent tool for creating marketing videos for campaigns on social media and other platforms.",
                },
                {
                  q: "How long can the videos be in the free plan?",
                  a: "The free plan has limitations on video length, typically up to 1 minute of video.",
                },
                {
                  q: "Can I use Pictory for webinars?",
                  a: "Yes, Pictory can be used to create promotional videos, tutorials, and other content for webinars.",
                },
                {
                  q: "Does Pictory AI offer video customization options?",
                  a: "Yes, you can customize video elements like text, colors, animations, and transitions to match your branding.",
                },
                {
                  q: "Is Pictory AI suitable for influencers?",
                  a: "Yes, influencers can use Pictory to quickly create engaging videos for their social media platforms.",
                },
                {
                  q: "How many voiceover options does Pictory AI offer?",
                  a: "Pictory AI offers a variety of voiceover options, including male and female voices in different languages.",
                },
                {
                  q: "Can Pictory AI help with SEO?",
                  a: "Yes, Pictory helps optimize your video content for better engagement and SEO rankings.",
                },
                {
                  q: "What makes Pictory different from other video creation tools?",
                  a: "Pictory uses AI to automate the entire video creation process, making it quicker and easier compared to traditional video editing software.",
                },
                {
                  q: "Does Pictory offer integration with social media platforms?",
                  a: "Yes, Pictory allows you to export videos directly to platforms like YouTube, Facebook, and Instagram.",
                },
                {
                  q: "Can Pictory AI help with content repurposing?",
                  a: "Yes, Pictory can help repurpose blog posts and other written content into engaging video format.",
                },
                {
                  q: "Is Pictory AI suitable for product demos?",
                  a: "Yes, Pictory is ideal for creating product demo videos for businesses.",
                },
                {
                  q: "Can Pictory AI generate captions?",
                  a: "Yes, Pictory can automatically generate captions for your videos.",
                },
                {
                  q: "Can I use Pictory for creating ads?",
                  a: "Yes, Pictory is great for creating video ads for social media platforms and websites.",
                },
                {
                  q: "Can Pictory be used for explainer videos?",
                  a: "Yes, Pictory is perfect for creating explainer videos to simplify complex topics.",
                },
                {
                  q: "How does Pictory AI support team collaboration?",
                  a: "Pictory provides collaboration tools that allow multiple users to work on video creation projects together.",
                },
                {
                  q: "Does Pictory offer any AI video editing features?",
                  a: "Yes, Pictory AI includes features like automatic trimming, adding transitions, and adjusting video elements.",
                },
                {
                  q: "Can Pictory AI handle high-volume video production?",
                  a: "Yes, Pictory is designed to handle high-volume video production, making it ideal for businesses and content marketers.",
                },
                {
                  q: "Does Pictory support custom branding?",
                  a: "Yes, Pictory allows you to add logos, colors, and other brand elements to your videos.",
                },
                {
                  q: "Can I use Pictory AI for creating training videos?",
                  a: "Yes, Pictory is excellent for creating internal training videos for businesses.",
                },
                {
                  q: "What platforms can I use Pictory on?",
                  a: "Pictory is a cloud-based platform, so it can be used on any device with an internet connection and web browser.",
                },
                {
                  q: "Does Pictory offer tutorial creation features?",
                  a: "Yes, Pictory can be used to create tutorial videos on a variety of topics.",
                },
                {
                  q: "Can I export my videos from Pictory?",
                  a: "Yes, Pictory allows you to export your videos in various formats to be used on different platforms.",
                },
                {
                  q: "Can I use Pictory for creating educational videos?",
                  a: "Yes, Pictory is ideal for creating educational content, from online courses to instructional videos.",
                },
                {
                  q: "Does Pictory support interactive video creation?",
                  a: "Pictory allows you to create videos that are highly engaging, but true interactivity may require additional tools or features.",
                },
                {
                  q: "Can I create YouTube Shorts with Pictory?",
                  a: "Yes, Pictory is perfect for creating short-form video content like YouTube Shorts, TikTok, and Instagram Reels.",
                },
                {
                  q: "Can Pictory help with video storytelling?",
                  a: "Yes, Pictory provides tools and templates that make storytelling easy and visually appealing.",
                },
                {
                  q: "Can I customize Pictory’s templates?",
                  a: "Yes, Pictory allows full customization of templates, including text, images, and animations.",
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
                    <li className="mb-3">
                      Automated video creation means less editing and quicker
                      output.
                    </li>
                    <li className="mb-3">
                      Video content performs better in engagement and audience
                      retention.
                    </li>
                    <li className="mb-3">
                      Ideal for large-scale video production, particularly for
                      marketing and training.
                    </li>
                    <li className="mb-3">
                      {" "}
                      Eliminates the need for expensive video production teams
                      or tools.
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
                    No technical skills required to create high-quality videos.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Multiple pricing options make it accessible for individuals
                    and businesses.
                  </li>
                  <li className="mb-2">
                    AI-powered AutomatiFast video creation and editing.
                  </li>
                  <li className="mb-2">
                    Wide variety of templates, animations, and voiceover
                    options.
                  </li>
                  <li className="mb-2">
                    Global reach with multilingual video creation capabilities.
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
                    Compared to professional video editing software, Pictory's
                    editing options may feel limited.
                  </li>
                  <li className="mb-2">
                    {" "}
                    New users may need some time to get used to the platform’s
                    features.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Free and lower-tier plans have restrictions on video
                    duration and features.
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
                    A more straightforward tool for creating videos from images
                    and video clips.
                  </li>
                  <li className="mb-2">
                    A powerful text-to-video tool similar to Pictory, with a
                    focus on content marketing.{" "}
                  </li>
                  <li className="mb-2">
                    Another AI video creation tool that provides high-quality
                    templates for different types of videos.
                  </li>
                  <li className="mb-2">
                    Best known for creating videos with AI avatars, often used
                    for corporate training and presentations.
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
              <h1>Pictory AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Pictory AI is a powerful tool that uses artificial intelligence
                to convert text-based content into video format. It is designed
                for individuals and businesses who need to create engaging video
                content quickly and efficiently. The platform offers various
                features like automated video editing, text-to-video
                transformation, voiceovers, and more.
              </p>
              <div className="mb-3">
                <a
                  href="https://pictory.ai/"
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
                src={pictoryAI}
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
                      Upload or Paste Your Script
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Start by uploading a script or pasting your content.
                      Pictory’s AI will begin processing your text into a visual
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
                      Let AI Generate Scenes
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Pictory uses AI to select visuals, add transitions, and
                      match voiceovers automatically — no video editing needed.
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
                      Edit, Preview & Export
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Make final tweaks, preview the video, and export your
                      ready-to-share content for YouTube, social media, or
                      business use.
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

export default PictoryAI;
