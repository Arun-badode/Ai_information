import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import marketMuseAI from "../../../../public/assets/Img/Ai for SEO/4.png";

import scn11 from "../../../../public/assets/Img/AI for SEO/scan11.png";
import scn12 from "../../../../public/assets/Img/AI for SEO/scan12.png";

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
const MarketMuseAI = () => {
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
              <h3 className="">Features of MarketMuse AI</h3>
            </div>
            {[
              {
                icon: "🧠",
                title: "AI-Powered Content Research",
                desc: "MarketMuse uses AI to analyze top-ranking pages and derive insights on topics, keywords, and user intent, helping you create high-quality, SEO-focused content.",
              },
              {
                icon: "🔍",
                title: "Topic Modeling & Keyword Research",
                desc: "MarketMuse identifies related keywords and topics, suggesting high-performing keywords and content ideas that boost your content's depth and SEO relevance.",
              },
              {
                icon: "📈",
                title: "Content Optimization",
                desc: "MarketMuse provides real-time content optimization suggestions based on competitive analysis, helping you refine your content for higher rankings.",
              },
              {
                icon: "💡",
                title: "Content Gap Analysis",
                desc: "MarketMuse analyzes competitor content to identify gaps, enabling you to fill missing information and create more comprehensive, authoritative content.",
              },
              {
                icon: "📊",
                title: "Content Scoring & Insights",
                desc: "MarketMuse offers content scoring to measure your content’s effectiveness against SEO metrics and provides actionable insights for further improvement.",
              },
              {
                icon: "⚙️",
                title: "AI-Powered Content Briefs",
                desc: "MarketMuse generates AI-driven content briefs that ensure your content is aligned with search intent, keyword usage, and SEO best practices.",
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
                  q: "What is MarketMuse?",
                  a: "A content intelligence and SEO platform that helps with content research, optimization, planning, and competitive analysis.",
                },
                {
                  q: "Who should use MarketMuse?",
                  a: "Content marketers, SEO professionals, bloggers, freelancers, and agencies.",
                },
                {
                  q: "Is MarketMuse beginner-friendly?",
                  a: "It has a learning curve but provides tutorials and a user-friendly interface for all skill levels.",
                },
                {
                  q: "Does MarketMuse work for niche blogs?",
                  a: "Yes, it’s highly effective for niche and authority-building content strategies.",
                },
                {
                  q: "How accurate is MarketMuse’s AI content brief?",
                  a: "It generates topically rich, search-focused outlines based on competitive SERP data.",
                },
                {
                  q: "Is MarketMuse cloud-based?",
                  a: "Yes, it runs entirely in the browser with no installation required.",
                },
                {
                  q: "Can MarketMuse generate content?",
                  a: "No, it guides and scores content but does not write full articles like Jasper.",
                },
                {
                  q: "Is there a free version of MarketMuse?",
                  a: "Yes, a free plan is available with limited queries and features.",
                },
                {
                  q: "Can I get a MarketMuse lifetime deal?",
                  a: "Occasionally available through platforms like AppSumo.",
                },
                {
                  q: "What industries benefit most from MarketMuse?",
                  a: "SaaS, healthcare, ecommerce, B2B, and online publishers.",
                },
                {
                  q: "What is a MarketMuse content score?",
                  a: "It measures how thoroughly your content covers a topic compared to competitors.",
                },
                {
                  q: "What is the Optimize app in MarketMuse?",
                  a: "A tool that provides real-time suggestions to improve your written content.",
                },
                {
                  q: "How does the content brief generator work?",
                  a: "It uses NLP and SERP analysis to generate outlines with suggested headings, keywords, and questions.",
                },
                {
                  q: "What is the MarketMuse Connect tool?",
                  a: "A feature that identifies internal linking opportunities within your website content.",
                },
                {
                  q: "Can I export briefs from MarketMuse?",
                  a: "Yes, content briefs can be exported as PDFs or Word documents.",
                },
                {
                  q: "Does MarketMuse support multiple languages?",
                  a: "It primarily focuses on English, but can analyze content in other languages to some extent.",
                },
                {
                  q: "Can I analyze competitor content with MarketMuse?",
                  a: "Yes, it benchmarks your content against top-ranking competitors in the SERP.",
                },
                {
                  q: "What is a content inventory in MarketMuse?",
                  a: "A comprehensive audit of your published content to evaluate performance, gaps, and optimization potential.",
                },
                {
                  q: "Can I build content clusters with MarketMuse?",
                  a: "Yes, it enables topic modeling and strategic content clustering for SEO.",
                },
                {
                  q: "What is the Knowledge Graph?",
                  a: "A visualization of your topical authority and content relationships within your site.",
                },
                {
                  q: "Can I use MarketMuse for ecommerce SEO?",
                  a: "Yes, it helps optimize product and category pages for better rankings.",
                },
                {
                  q: "Is MarketMuse good for B2B content?",
                  a: "Absolutely, it’s well-suited for developing comprehensive, topic-driven B2B strategies.",
                },
                {
                  q: "Can freelancers use MarketMuse?",
                  a: "Yes, it helps freelancers create well-researched, optimized briefs and audits for clients.",
                },
                {
                  q: "Does MarketMuse help with pillar page creation?",
                  a: "Yes, it supports structuring pillar pages and related cluster content for SEO.",
                },
                {
                  q: "How is MarketMuse used in agencies?",
                  a: "Agencies use it to scale SEO briefs, audits, and strategy development across multiple clients.",
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
                src={scn11}
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={scn12}
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
                    Why Use MarketMuse AI?
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
                      <strong>AI-Driven Content Research:</strong> MarketMuse
                      analyzes top-ranking content to uncover key topics,
                      subtopics, and competitive gaps, guiding you in creating
                      content that stands out.
                    </li>
                    <li className="mb-3">
                      <strong>Content Brief Creation:</strong> Automatically
                      generates SEO-focused briefs with recommended structure,
                      keywords, questions, and headers, helping streamline your
                      writing process.
                    </li>
                    <li className="mb-3">
                      <strong>Content Optimization:</strong> The Optimize tool
                      provides real-time suggestions on how to improve your
                      content’s topical depth and keyword relevance compared to
                      competitors.
                    </li>
                    <li className="mb-3">
                      <strong>Content Scoring:</strong> MarketMuse assigns
                      scores based on topic coverage and keyword use, helping
                      you understand how well your content satisfies search
                      intent.
                    </li>
                    <li className="mb-3">
                      <strong>Topic Modeling & Content Clusters:</strong> Helps
                      you plan pillar pages and supporting content using topic
                      clusters for improved authority and SEO performance.
                    </li>
                    <li className="mb-3">
                      <strong>Internal Linking with Connect:</strong>{" "}
                      Automatically identifies relevant internal link
                      opportunities across your site to improve navigation and
                      SEO.
                    </li>
                    <li className="mb-3">
                      <strong>Content Inventory & Audit:</strong> Catalogs and
                      analyzes your existing content to find optimization
                      opportunities, performance gaps, and redundant pages.
                    </li>
                    <li className="mb-3">
                      <strong>Competitive Analysis:</strong> Benchmarks your
                      content against top-ranking competitors, showing where
                      your content falls short or outperforms in specific areas.
                    </li>
                    <li className="mb-3">
                      <strong>Exportable Briefs & Reports:</strong> Allows
                      exporting content briefs and optimization reports in PDF
                      or DOC format for easy team sharing and collaboration.
                    </li>
                    <li className="mb-3">
                      <strong>Ideal for Niche & Authority Sites:</strong>{" "}
                      Perfect for building topical authority in specific subject
                      areas, especially for B2B, SaaS, healthcare, and publisher
                      websites.
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
                    <strong>Comprehensive Content Research:</strong> MarketMuse
                    analyzes top-ranking content to reveal key topics,
                    subtopics, and gaps, enabling you to create highly
                    competitive articles.
                  </li>
                  <li className="mb-2">
                    <strong>Automated SEO Briefs:</strong> Generates detailed,
                    SERP-driven content briefs that include suggested titles,
                    headers, questions, and keywords to streamline content
                    planning.
                  </li>
                  <li className="mb-2">
                    <strong>Real-Time Content Optimization:</strong> The
                    Optimize tool provides instant feedback on content
                    relevance, keyword usage, and topical depth, improving SEO
                    performance.
                  </li>
                  <li className="mb-2">
                    <strong>Topical Authority Building:</strong> Supports the
                    creation of topic clusters and pillar pages, helping you
                    establish expertise and authority in niche subject areas.
                  </li>
                  <li className="mb-2">
                    <strong>Internal Link Suggestions:</strong> The Connect tool
                    identifies smart internal linking opportunities to
                    strengthen site architecture and improve SEO signals.
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
                    <strong>High Price Point:</strong> MarketMuse is
                    significantly more expensive than many competing tools,
                    which may not be ideal for freelancers, startups, or small
                    businesses on a tight budget.
                  </li>
                  <li className="mb-2">
                    <strong>Steep Learning Curve:</strong> The platform can be
                    complex for new users, especially those unfamiliar with SEO
                    concepts or content strategy workflows.
                  </li>
                  <li className="mb-2">
                    <strong>Limited AI Writing Capabilities:</strong> Unlike
                    some AI tools that auto-generate entire articles, MarketMuse
                    focuses more on research and planning rather than full-scale
                    content writing.
                  </li>
                  <li className="mb-2">
                    <strong>Slow Processing Times:</strong> Some users report
                    longer wait times when generating briefs or analyzing large
                    sets of content, especially during peak usage hours.
                  </li>
                  <li className="mb-2">
                    <strong>English-Centric:</strong> While powerful in English,
                    MarketMuse’s effectiveness drops when used for content in
                    other languages, limiting its utility for global teams.
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
          <i className="bi bi-arrow-left me-2"></i>Back  {" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
          <div className=" row algin-items-center mb-4">
            {/* Left side (Text Section) */}
            <div
              style={{ paddingRight: "30px" }}
              className="col-md-6 col-12 order-2 order-md-1 "
            >
              <p className="text-primary">Write better, faster</p>
              <h1>MarketMuse AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                MarketMuse is an advanced AI-powered content strategy and
                optimization platform designed to help content teams research,
                plan, and execute high-performing content. Using natural
                language processing (NLP) and machine learning, MarketMuse
                provides keyword insights, content briefs, optimization scoring,
                and competitive analysis to improve search engine rankings and
                content authority.
              </p>

              <p>
                Whether you're a solo blogger or an SEO agency, MarketMuse
                streamlines the entire content lifecycle — from research and
                ideation to writing and performance tracking.
              </p>
              <div className="mb-3">
                <a
                  href="https://www.marketmuse.com"
              
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
                flex: 1,
                textAlign: "center",
                Width: "100%",
                height: "250px",
              }}
              className="col-md-6 col-12 order-md-2 order-1 text-center mb-3 mb-md-0  "
            >
              <img
                src={marketMuseAI}
                style={{ width:"100%", height:"auto", maxHeight:"300px", objectFit:"contain",}}

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
                How MarketMuse AI Works?
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
                      Content Research & Strategy
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      MarketMuse analyzes top-ranking content across the web to
                      derive insights about topics, keywords, and user intent.
                      It helps content creators understand what the target
                      audience is searching for and the type of content that is
                      performing best.
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
                      Topic Modeling & Keyword Research
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      MarketMuse identifies related keywords, phrases, and
                      subtopics that are semantically relevant to the main
                      content theme. It helps target high-performing keywords,
                      enhancing content depth and SEO relevance.
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
                      Content Optimization & Refinement
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      MarketMuse continuously evaluates your content, providing
                      real-time suggestions to optimize keyword density,
                      readability, and SEO relevance based on competitive
                      analysis, ensuring high-quality results.
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

export default MarketMuseAI;
