import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import surferSEOAI from "../../../../public/assets/Img/Ai for SEO/10.png";
import scan1 from "../../../../public/assets/Img/AI for SEO/scan21.png";
import scan2 from "../../../../public/assets/Img/AI for SEO/scan22.png";
import surferImg from '../../../../public/assets/Img/Ai for SEO/1.png';
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
const SurferSEOAI = () => {
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
              <h3 className="">Features of SurferSEO AI</h3>
            </div>
            {[
              {
                icon: "🧠",
                title: "Content Optimization",
                desc: "SurferSEO uses AI to analyze content and compare it to top-ranking pages, providing actionable recommendations for improving SEO performance.",
              },
              {
                icon: "🔍",
                title: "Keyword Research",
                desc: "SurferSEO AI identifies high-performing keywords based on real-time search data and competitor analysis to enhance content visibility and ranking.",
              },
              {
                icon: "📈",
                title: "On-Page SEO Audits",
                desc: "SurferSEO offers detailed on-page audits, analyzing factors like keyword density, backlinks, and page structure to help you optimize for search engines.",
              },
              {
                icon: "💡",
                title: "Content Strategy Insights",
                desc: "SurferSEO provides AI-powered content strategies by recommending topics, keywords, and structure based on SEO data, improving content relevance and quality.",
              },
              {
                icon: "📊",
                title: "SERP Analyzer",
                desc: "SurferSEO’s SERP Analyzer evaluates the top search engine results, helping you understand what factors contribute to the success of pages ranking in the search results.",
              },
              {
                icon: "⚙️",
                title: "Automated Optimization",
                desc: "SurferSEO’s AI-driven automation tools help streamline SEO tasks like optimizing content, managing keywords, and analyzing competition for faster and better results.",
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
                  q: "What is SurferSEO?",
                  a: "SurferSEO is an AI-powered on-page SEO tool that helps you write and optimize content to rank higher on search engines by analyzing top-performing pages.",
                },
                {
                  q: "How does SurferSEO work?",
                  a: "It uses machine learning and SERP data to provide real-time SEO suggestions while writing or editing content.",
                },
                {
                  q: "Who can use SurferSEO?",
                  a: "Anyone who creates content—bloggers, content marketers, SEO agencies, freelancers, and business owners.",
                },
                {
                  q: "Is SurferSEO good for beginners?",
                  a: "Yes, it’s beginner-friendly with a clean interface and guided suggestions.",
                },
                {
                  q: "What are the core features of SurferSEO?",
                  a: "Content Editor, SERP Analyzer, Grow Flow, Audit Tool, Content Planner, and integrations with Google Docs and Jasper.",
                },
                {
                  q: "What is a content score in SurferSEO?",
                  a: "It’s a numerical value (0-100) that represents how well your content is optimized based on Surfer’s SEO criteria.",
                },
                {
                  q: "What is SurferSEO Grow Flow?",
                  a: "Grow Flow provides weekly SEO tasks using AI to continuously improve your website content.",
                },
                {
                  q: "Is SurferSEO cloud-based?",
                  a: "Yes, it works entirely online—no downloads or installations are required.",
                },
                {
                  q: "Can SurferSEO help with keyword density?",
                  a: "Yes, it analyzes and suggests optimal keyword usage based on competitors.",
                },
                {
                  q: "Does SurferSEO work with Google Docs?",
                  a: "Yes, it offers a Chrome plugin to use the Content Editor directly in Google Docs.",
                },
                {
                  q: "Can SurferSEO generate content automatically?",
                  a: "It integrates with Jasper for AI content generation, but Surfer itself provides structure and optimization help.",
                },
                {
                  q: "Does SurferSEO offer a free trial?",
                  a: "Yes, SurferSEO often provides a free trial with limited access.",
                },
                {
                  q: "How much does SurferSEO cost?",
                  a: "Pricing starts around $29/month for the Basic plan and increases with additional features.",
                },
                {
                  q: "Can SurferSEO audit existing pages?",
                  a: "Yes, the Audit Tool gives specific on-page SEO recommendations for existing URLs.",
                },
                {
                  q: "What is the SERP Analyzer?",
                  a: "It breaks down search results for your keyword and compares factors like word count, keyword usage, and backlinks.",
                },
                {
                  q: "Can SurferSEO optimize eCommerce product pages?",
                  a: "Yes, it helps with keyword targeting, meta descriptions, and relevant content placement.",
                },
                {
                  q: "Is SurferSEO better than Clearscope?",
                  a: "Both are strong tools, but SurferSEO is often praised for real-time analysis and affordability.",
                },
                {
                  q: "Is there a lifetime deal for SurferSEO?",
                  a: "Occasionally offered via third-party platforms, but not regularly available.",
                },
                {
                  q: "Does SurferSEO support multilingual content?",
                  a: "Yes, it supports content optimization in multiple languages.",
                },
                {
                  q: "What is TF-IDF in SurferSEO?",
                  a: "Term Frequency-Inverse Document Frequency is used to analyze keyword importance and improve semantic SEO.",
                },
                {
                  q: "Can SurferSEO be used for local SEO?",
                  a: "Yes, it helps optimize content for local keywords and intent.",
                },
                {
                  q: "Does SurferSEO provide keyword research?",
                  a: "Yes, it suggests keywords based on SERP analysis and competitor content.",
                },
                {
                  q: "Can I use SurferSEO for affiliate marketing content?",
                  a: "Absolutely. It helps structure content to target affiliate keywords and improve conversion potential.",
                },
                {
                  q: "What’s the difference between SurferSEO and Ahrefs?",
                  a: "Ahrefs is more focused on backlinks and domain-level SEO; SurferSEO is centered on content optimization.",
                },
                {
                  q: "How accurate is the content score?",
                  a: "Very accurate for guiding structure and keyword placement, though human editing is still needed.",
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
                src={scan1}
                alt="SuferSeo"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={scan2}
                alt="SuferSeo"
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
                    Why Use SurferSEO AI?
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
                      <strong> Optimize Blog Content:</strong> SurferSEO helps
                      optimize your blog content by providing real-time,
                      data-driven suggestions for keyword usage, structure, and
                      content length, ensuring your posts rank higher on search
                      engines.
                    </li>
                    <li class="mb-3">
                      <strong>
                        {" "}
                        Access to Powerful SEO Content Editor Tools:
                      </strong>{" "}
                      With SurferSEO, you gain access to a comprehensive set of
                      tools like the Content Editor, SERP Analyzer, and Grow
                      Flow to fine-tune your content strategy and stay ahead of
                      competitors.
                    </li>
                    <li class="mb-3">
                      <strong> Automate Your SEO Content Strategy:</strong>{" "}
                      SurferSEO's AI-driven recommendations help automate your
                      SEO strategy, saving time on content optimization and
                      ensuring that your efforts are always aligned with the
                      latest SEO trends.
                    </li>
                    <li class="mb-3">
                      <strong>
                        {" "}
                        Stay Ahead with Google Algorithm Update Support:
                      </strong>{" "}
                      SurferSEO continuously updates its tools to support new
                      Google algorithm changes, so your content is always
                      optimized according to the latest search engine
                      requirements.
                    </li>
                    <li class="mb-3">
                      <strong>
                        {" "}
                        Create Multilingual Content for Global Outreach:
                      </strong>{" "}
                      SurferSEO helps optimize content for multiple languages,
                      allowing you to expand your reach to global audiences and
                      improve rankings in diverse markets.
                    </li>
                    <li class="mb-3">
                      <strong> Boost Authority with Topic Clusters:</strong>{" "}
                      SurferSEO enables you to create topic clusters by
                      connecting related content, which helps increase your
                      website’s authority and relevance, leading to improved
                      search engine rankings.
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
                    Real-Time Content Scoring: SurferSEO provides a content
                    score that helps you optimize your content based on the best
                    practices for SEO, ensuring it is structured to perform well
                    on search engines.
                  </li>
                  <li className="mb-2">
                    Smart SurferSEO Audit Feature: The audit tool identifies
                    issues and gives recommendations for on-page SEO
                    optimization, helping you to continuously improve your
                    website’s SEO health.
                  </li>
                  <li className="mb-2">
                    NLP Term Analysis: SurferSEO uses natural language
                    processing (NLP) to analyze the terms and phrases that are
                    most relevant for your target audience, improving the
                    semantic relevance of your content.
                  </li>
                  <li className="mb-2">
                    Keyword Surfer Extension for Chrome: This free Chrome
                    extension allows you to quickly view keyword data directly
                    in the search engine results page (SERP), making keyword
                    research faster and easier.
                  </li>
                  <li className="mb-2">
                    Easy Integrations with Jasper, Google Docs, and More:
                    SurferSEO integrates with tools like Jasper and Google Docs,
                    allowing you to work directly in your preferred platforms
                    while optimizing content in real-time.
                  </li>
                  <li className="mb-2">
                    Fast SERP Analyzer and TF-IDF Analysis: SurferSEO’s SERP
                    Analyzer provides in-depth data on search results, while its
                    TF-IDF analysis helps you optimize your content for keyword
                    relevance.
                  </li>
                  <li className="mb-2">
                    Great for Niche and Multilingual Content: SurferSEO is
                    perfect for optimizing content in multiple languages and
                    targeting niche topics, helping you reach diverse and global
                    audiences.
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
                    Learning Curve for New Users: SurferSEO has a learning
                    curve, especially for beginners who are not familiar with
                    SEO tools, as it involves understanding key metrics and
                    settings for optimization.
                  </li>
                  <li className="mb-2">
                    Needs Manual Input for Optimal Results: While SurferSEO
                    provides helpful suggestions, users still need to manually
                    adjust content and strategies to ensure optimal results.
                  </li>
                  <li className="mb-2">
                    Limited AI Writing Features (Needs Jasper or Similar):
                    SurferSEO is primarily focused on optimization, and for
                    content creation, integration with tools like Jasper is
                    required for AI-driven writing.
                  </li>
                  <li className="mb-2">
                    High-Tier Plans Can Be Expensive: SurferSEO's pricing for
                    higher-tier plans may be prohibitive for small businesses or
                    individual users looking for a budget-friendly solution.
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
          className="d-inline-block text-white text-decoration-none  mt-3 ml-3 py-1 px-2 ms-5 border rounded-sm"
        >
          <i className="bi bi-arrow-left me-2"></i>Back{" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-between mb-1 flex-md-row flex-column-reverse">
            {/* Left side (Text Section) */}
            <div className="col-md-6 col-12 mt-4 mt-md-0 pe-md-4">
              <p className="text-primary">Write better, faster</p>
              <h1>SurferSEO AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                SurferSEO is an advanced AI-powered SEO tool designed for
                on-page SEO optimization. It analyzes top-ranking pages in
                search engine results and provides actionable insights to help
                you optimize blog content, improve your content score, and rank
                higher on Google.
              </p>
              <p>
                Whether you're a blogger, digital marketer, or run an eCommerce
                store, SurferSEO combines AI, natural language processing (NLP),
                and data-driven analysis to create SEO-optimized content that
                ranks.
              </p>
              <div className="mb-3">
                <a
                  href="https://surferseo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-2"
                >
                  Explore more
                </a>
              </div>
            </div>

            {/* Right side (Image Section) */}
            <div className="col-md-6 col-12 text-center">
              <img
                src={surferImg}
                alt="SurferSEO AI"
                style={{
                  maxWidth: "100%",
                  height: "300px",
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
                How SurferSEO Works AI
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
                      SurferSEO Analysis
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      SurferSEO uses an in-depth content analysis system that
                      compares your website’s content to top-ranking pages and
                      provides actionable insights to improve on-page SEO
                      performance.
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
                      Keyword Research
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      SurferSEO provides powerful keyword research tools to
                      identify the most relevant and high-performing keywords
                      for your content, helping boost search engine rankings.
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
                      SurferSEO Content Editor
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      The content editor tool helps optimize your writing for
                      SEO by suggesting improvements based on top-ranking pages
                      for a given keyword.
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

export default SurferSEOAI;
