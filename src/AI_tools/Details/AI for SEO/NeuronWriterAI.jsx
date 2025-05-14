import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import neuronWriterAI from "../../../../public/assets/Img/Ai for SEO/2.png";
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
const NeuronWriterAI = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
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
              <h3 className="">Features of NeuronWriter AI</h3>
            </div>
            {[
              {
                icon: "🧠",
                title: "AI Content Creation",
                desc: "NeuronWriter uses advanced AI to generate high-quality, SEO-optimized content tailored to your target audience and search intent.",
              },
              {
                icon: "🔍",
                title: "Semantic SEO Optimization",
                desc: "NeuronWriter’s AI analyzes your content’s semantic relevance and provides optimization suggestions to align with search engines’ ranking algorithms.",
              },
              {
                icon: "📈",
                title: "Content Scoring",
                desc: "NeuronWriter provides a detailed content scoring system that evaluates your content’s SEO performance, offering actionable suggestions for improvement.",
              },
              {
                icon: "💡",
                title: "Content Strategy Insights",
                desc: "NeuronWriter AI suggests relevant topics, keywords, and structure based on SEO data, helping you build a strong content strategy.",
              },
              {
                icon: "📊",
                title: "SEO Keyword Research",
                desc: "NeuronWriter’s AI helps you identify the most relevant and high-performing keywords for your content, boosting your content’s ranking potential.",
              },
              {
                icon: "⚙️",
                title: "AI-Driven Content Improvement",
                desc: "NeuronWriter automates content optimization by providing real-time AI-driven recommendations for improving SEO performance and engagement.",
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
      case "FAQs":
        return (
          <div className="faq-section container py-4">
            <h3 className="text-center text-white mb-4 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is NeuronWriter AI?",
                  a: "NeuronWriter AI is an advanced content creation and optimization tool that uses artificial intelligence to help users write and optimize content for SEO performance and engagement.",
                },
                {
                  q: "How does NeuronWriter AI work?",
                  a: "NeuronWriter uses NLP (Natural Language Processing) to analyze top-performing pages and generate SEO-friendly content, suggesting improvements for better ranking and engagement.",
                },
                {
                  q: "Who can use NeuronWriter AI?",
                  a: "NeuronWriter AI is designed for content creators, SEO professionals, bloggers, marketers, agencies, and businesses looking to improve their content's SEO and quality.",
                },
                {
                  q: "Is NeuronWriter AI good for beginners?",
                  a: "Yes, NeuronWriter AI is user-friendly with an intuitive interface, making it easy for beginners to optimize content without a steep learning curve.",
                },
                {
                  q: "What are the core features of NeuronWriter AI?",
                  a: "Content Generation, Content Optimization, Semantic SEO Analysis, Content Scoring, Keyword Research, and Integration with platforms like Google Docs and WordPress.",
                },
                {
                  q: "What is a content score in NeuronWriter AI?",
                  a: "The content score in NeuronWriter represents how well your content is optimized for SEO based on factors like keyword usage, readability, and semantic relevance.",
                },
                {
                  q: "Does NeuronWriter AI offer keyword research?",
                  a: "Yes, NeuronWriter AI provides keyword research tools that help identify high-performing keywords for your content to boost search engine rankings.",
                },
                {
                  q: "Is NeuronWriter AI cloud-based?",
                  a: "Yes, NeuronWriter AI is entirely cloud-based, meaning you can access it from any device without needing to download or install software.",
                },
                {
                  q: "Can NeuronWriter AI help with content structure?",
                  a: "Yes, NeuronWriter AI analyzes top-ranking pages to suggest optimal content structure, ensuring your content is relevant and well-organized.",
                },
                {
                  q: "Does NeuronWriter AI integrate with other platforms?",
                  a: "Yes, NeuronWriter AI integrates with popular platforms like Google Docs, WordPress, and other content management systems for easy editing and optimization.",
                },
                {
                  q: "Can NeuronWriter AI generate content automatically?",
                  a: "NeuronWriter AI can assist in content generation by suggesting relevant phrases, keywords, and structure, but it doesn’t generate entire articles automatically.",
                },
                {
                  q: "Does NeuronWriter AI offer a free trial?",
                  a: "Yes, NeuronWriter AI offers a free trial with limited features to help users experience its capabilities before committing to a paid plan.",
                },
                {
                  q: "How much does NeuronWriter AI cost?",
                  a: "Pricing for NeuronWriter AI starts at a subscription fee, with different plans based on the number of features and users required.",
                },
                {
                  q: "Can NeuronWriter AI optimize existing content?",
                  a: "Yes, NeuronWriter AI offers tools to optimize and enhance existing content based on real-time data and SEO insights.",
                },
                {
                  q: "What is semantic SEO in NeuronWriter AI?",
                  a: "Semantic SEO refers to optimizing content based on the context and meaning of keywords, ensuring that content is more relevant and accurate to user search intent.",
                },
                {
                  q: "Is NeuronWriter AI suitable for eCommerce websites?",
                  a: "Yes, NeuronWriter AI can optimize product descriptions, meta descriptions, and keyword usage to improve SEO for eCommerce websites.",
                },
                {
                  q: "How does NeuronWriter AI compare to SurferSEO?",
                  a: "Both NeuronWriter AI and SurferSEO are great tools, but NeuronWriter focuses more on content creation and semantic optimization, while SurferSEO excels in on-page SEO and SERP analysis.",
                },
                {
                  q: "Does NeuronWriter AI support multilingual content?",
                  a: "Yes, NeuronWriter AI supports multilingual content optimization, making it useful for businesses targeting global audiences.",
                },
                {
                  q: "Can NeuronWriter AI help with content for affiliate marketing?",
                  a: "Absolutely. NeuronWriter AI helps create SEO-optimized content targeting affiliate keywords, improving rankings and conversion rates.",
                },
                {
                  q: "What is the difference between NeuronWriter AI and Jasper?",
                  a: "NeuronWriter AI specializes in SEO content optimization, while Jasper is focused more on content generation. NeuronWriter is great for fine-tuning and enhancing content for better ranking.",
                },
                {
                  q: "How accurate is the content score in NeuronWriter AI?",
                  a: "The content score in NeuronWriter AI is highly accurate for optimizing content structure, keyword placement, and SEO performance, but human editing is still required for fine-tuning.",
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

      case "Why-We-Use":
        return (
          <div className="container">
            <div className="row g-4">
              <div className="col-12">
                <div className="custom-card text-light p-5 text-center">
                  <h3 className="fw-bold mb-4 text-start text-primary">
                    Why Use NeuronWriter AI?
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
                      <strong> Optimize Content for SEO:</strong> NeuronWriter
                      AI helps you create SEO-optimized content by analyzing
                      top-ranking pages, offering keyword suggestions, and
                      ensuring your content aligns with SEO best practices.
                    </li>
                    <li class="mb-3">
                      <strong> AI-Powered Content Generation:</strong> With
                      NeuronWriter, you can generate high-quality content ideas,
                      structure, and even paragraphs based on your target
                      keyword, helping you speed up the content creation
                      process.
                    </li>
                    <li class="mb-3">
                      <strong> Semantic SEO Analysis:</strong> NeuronWriter AI
                      goes beyond keyword usage, analyzing the semantic
                      relevance of your content and suggesting improvements to
                      match search engine intent and context.
                    </li>
                    <li class="mb-3">
                      <strong> Boost Content Relevance:</strong> NeuronWriter AI
                      ensures that your content is highly relevant to user
                      intent by identifying and suggesting high-performing
                      topics and keywords based on current search trends.
                    </li>
                    <li class="mb-3">
                      <strong> Integrate with Popular Platforms:</strong>{" "}
                      NeuronWriter integrates seamlessly with tools like Google
                      Docs, WordPress, and other content management systems,
                      streamlining the process of optimizing and publishing
                      content.
                    </li>
                    <li class="mb-3">
                      <strong> Enhance User Engagement:</strong> The AI provides
                      recommendations to improve readability, structure, and
                      engagement, ensuring that your content not only ranks well
                      but also keeps your audience engaged.
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
                    <strong>Real-Time Content Optimization:</strong>{" "}
                    NeuronWriter AI provides real-time recommendations to
                    enhance your content, ensuring it’s optimized for both SEO
                    and user intent, improving overall content performance.
                  </li>
                  <li className="mb-2">
                    <strong>AI-Driven Content Creation:</strong> NeuronWriter
                    generates well-structured content based on your target
                    keyword, helping you save time while maintaining content
                    quality and relevance.
                  </li>
                  <li className="mb-2">
                    <strong>Advanced Keyword Analysis:</strong> The AI
                    identifies the most relevant and high-performing keywords to
                    help you target the right audience and boost your content's
                    visibility on search engines.
                  </li>
                  <li className="mb-2">
                    <strong>Content Gap Identification:</strong> NeuronWriter
                    helps identify content gaps by analyzing your competitors'
                    content, allowing you to fill in missing information and
                    outrank them.
                  </li>
                  <li className="mb-2">
                    <strong>Easy-to-Use Interface:</strong> NeuronWriter
                    features an intuitive interface that makes it easy for users
                    to navigate, even for those with limited SEO experience,
                    streamlining the content optimization process.
                  </li>
                  <li className="mb-2">
                    <strong>Multilingual Content Support:</strong> NeuronWriter
                    supports multilingual content creation and optimization,
                    enabling you to target global markets and expand your reach.
                  </li>
                  <li className="mb-2">
                    <strong>Integrates with Popular Platforms:</strong>{" "}
                    NeuronWriter seamlessly integrates with popular tools like
                    Google Docs and WordPress, allowing for easy content
                    creation, optimization, and publishing within your preferred
                    platforms.
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
                <h5 className="text-warning text-start mb-4">⚠️ Cons</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Learning Curve for New Users:</strong> NeuronWriter
                    may require a learning curve for those new to AI-based
                    content creation tools, as it involves understanding how to
                    effectively utilize its features for optimal results.
                  </li>
                  <li className="mb-2">
                    <strong>Needs Manual Input for Perfection:</strong> While
                    NeuronWriter provides AI-generated content and suggestions,
                    manual input is still necessary for refining content,
                    ensuring it aligns with brand voice and messaging.
                  </li>
                  <li className="mb-2">
                    <strong>Limited AI Writing Depth:</strong> NeuronWriter is
                    mainly focused on content optimization and may not be
                    sufficient for users who need more comprehensive, fully
                    AI-generated content. It may require integration with other
                    writing tools.
                  </li>
                  <li className="mb-2">
                    <strong>Expensive for Small Businesses:</strong>{" "}
                    NeuronWriter's subscription plans, especially the premium
                    ones, may be out of reach for small businesses or those with
                    tight budgets.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "Alternative":
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
                    Best for avatar-based explainer and corporate videos.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Emerging competition with realistic scene generation but
                    still in closed beta.
                  </li>
                  <li className="mb-2">
                    Great for musicians and creators wanting visual storytelling
                    synced with audio.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Known for creative animated video styles and short-form
                    content.
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
              <h1> NeuronWriter AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                NeuronWriter is an AI-driven content optimization tool designed
                to help writers, bloggers, and marketers create SEO-friendly
                content. It leverages Natural Language Processing (NLP) and
                machine learning to provide real-time suggestions, enhancing
                content quality and search engine visibility.​
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
                src={neuronWriterAI}
                style={{ MaxWidth: "100%", height: "300px" }}
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
                How NeuronWriter AI Works?
              </h2>

              <div className="row g-4">
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
                      NeuronWriter AI Content Creation
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      NeuronWriter AI uses advanced NLP to generate
                      high-quality, SEO-optimized content tailored to your
                      target audience, based on a deep understanding of search
                      intent.
                    </p>
                    <div className="step1">1</div>
                  </div>
                </div>

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
                      Semantic SEO Optimization
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      NeuronWriter’s AI assesses the semantic relevance of your
                      content and improves its alignment with search engines’
                      ranking algorithms, ensuring your content ranks higher for
                      targeted keywords.
                    </p>
                    <div className="step2">2</div>
                  </div>
                </div>

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
                      Content Scoring & Improvement
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      The NeuronWriter AI system evaluates your content using an
                      in-depth scoring system, providing suggestions for
                      optimization to improve SEO performance and relevance.
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
            <h4 className="mb-3">Ready to get started with RunWayGen?</h4>
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

export default NeuronWriterAI;
