import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import contentHarmanyAI from "../../../../public/assets/Img/Ai for SEO/11.png";


import scan3 from "../../../../public/assets/Img/AI for SEO/scan3.png";
import scan4 from "../../../../public/assets/Img/AI for SEO/scan4.png";

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
const ContentHarmanyAI = () => {
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
              <h3 className="">Features of Content Harmony AI </h3>
            </div>
            {[
              {
                icon: "🔍",
                title: "Keyword Research & Intent Analysis",
                desc: "Content Harmony helps identify high-priority keywords by analyzing search intent and competition, ensuring that your content strategy targets the right audience and search queries.",
              },
              {
                icon: "📚",
                title: "Topic Clustering & Content Planning",
                desc: "It groups related keywords into topic clusters and guides content planning to cover all relevant aspects of a subject, building a strong foundation for SEO and authority.",
              },
              {
                icon: "✍️",
                title: "Content Creation Support",
                desc: "Content Harmony provides AI-driven content outlines, topic suggestions, and keyword recommendations, ensuring your content is both structured and optimized for search engines.",
              },
              {
                icon: "📊",
                title: "Competitive Analysis",
                desc: "By analyzing top-ranking competitors, Content Harmony helps you understand what works in your niche, offering insights to enhance your own content and beat the competition.",
              },
              {
                icon: "⚙️",
                title: "Content Optimization & Grading",
                desc: "It offers real-time SEO feedback during content creation, providing optimization suggestions and grading your content based on keyword usage, structure, and search intent.",
              },
              {
                icon: "🔗",
                title: "Internal Linking Suggestions",
                desc: "Content Harmony automatically suggests internal links, helping improve site architecture and SEO signals by connecting relevant content within your website.",
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
                  q: "What is Content Harmony AI used for?",
                  a: "Content Harmony AI is used for content creation, SEO optimization, content strategy, and keyword research.",
                },
                {
                  q: "Is there a free trial for Content Harmony?",
                  a: "Yes, Content Harmony offers a free trial for new users to test its features.",
                },
                {
                  q: "Can Content Harmony help with SEO?",
                  a: "Yes, Content Harmony is specifically designed to help with SEO, offering on-page optimization, keyword suggestions, and content scoring.",
                },
                {
                  q: "Does Content Harmony help with content creation?",
                  a: "Yes, Content Harmony helps generate content, outlines, and blog posts based on your SEO strategy.",
                },
                {
                  q: "Can Content Harmony generate content briefs?",
                  a: "Yes, Content Harmony can automatically generate detailed content briefs based on keyword research and top-performing content.",
                },
                {
                  q: "Is Content Harmony good for digital marketers?",
                  a: "Yes, Content Harmony is excellent for digital marketers looking to optimize content and improve SEO rankings.",
                },
                {
                  q: "Can Content Harmony be used for content teams?",
                  a: "Yes, Content Harmony supports collaboration, making it ideal for content teams to work together efficiently.",
                },
                {
                  q: "What is the pricing for Content Harmony?",
                  a: "Content Harmony offers various pricing plans depending on the size of your team and the features you need.",
                },
                {
                  q: "Does Content Harmony integrate with WordPress?",
                  a: "Yes, Content Harmony integrates seamlessly with WordPress for content creation and optimization.",
                },
                {
                  q: "Is there a discount for Content Harmony?",
                  a: "Occasionally, Content Harmony offers discounts, especially during major sales events.",
                },
                {
                  q: "Can Content Harmony help with long-form writing?",
                  a: "Yes, Content Harmony can assist with generating long-form content and optimizing it for SEO.",
                },
                {
                  q: "What features does Content Harmony provide for SEO optimization?",
                  a: "Content Harmony provides keyword research, on-page optimization, content scoring, and SERP analysis to improve your content’s SEO.",
                },
                {
                  q: "Does Content Harmony support content collaboration?",
                  a: "Yes, Content Harmony allows teams to collaborate on content creation, editing, and optimization.",
                },
                {
                  q: "Can Content Harmony help with keyword research?",
                  a: "Yes, Content Harmony offers robust keyword research tools to help you identify the best keywords for your content.",
                },
                {
                  q: "Can Content Harmony track content performance?",
                  a: "Yes, Content Harmony includes content performance tracking to monitor how your content is performing in search engines.",
                },
                {
                  q: "Does Content Harmony offer content templates?",
                  a: "Yes, Content Harmony provides content templates to help you streamline the writing process.",
                },
                {
                  q: "How does Content Harmony AI work for content optimization?",
                  a: "Content Harmony AI analyzes your content and offers suggestions to optimize it for SEO, including keyword usage, content structure, and readability.",
                },
                {
                  q: "Can Content Harmony generate content outlines?",
                  a: "Yes, Content Harmony can automatically generate detailed content outlines based on target keywords and competitor analysis.",
                },
                {
                  q: "What is the content scoring system in Content Harmony?",
                  a: "Content Harmony uses an AI-powered content scoring system that grades your content based on its SEO optimization and overall quality.",
                },
                {
                  q: "How does Content Harmony improve content quality?",
                  a: "Content Harmony helps improve content quality by providing real-time feedback on keyword integration, readability, and SEO optimization.",
                },
                {
                  q: "Can Content Harmony help with content ideas?",
                  a: "Yes, Content Harmony can suggest content ideas based on keyword research and competitive analysis.",
                },
                {
                  q: "Does Content Harmony integrate with other tools?",
                  a: "Yes, Content Harmony integrates with tools like WordPress, Google Docs, Google Search Console, and more to enhance your content creation process.",
                },
                {
                  q: "What is the best way to use Content Harmony for SEO?",
                  a: "The best way to use Content Harmony for SEO is to start with keyword research, create a content brief, optimize the content using AI recommendations, and track performance.",
                },
                {
                  q: "Can Content Harmony be used for B2B content?",
                  a: "Yes, Content Harmony is highly effective for B2B content, helping create optimized articles, blog posts, and product descriptions.",
                },
                {
                  q: "Is Content Harmony AI suitable for eCommerce websites?",
                  a: "Yes, Content Harmony is great for optimizing product pages, category pages, and blog posts for eCommerce sites.",
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
                src={scan3}
                alt="Harmanya"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={scan4}
                alt="Harmanya"
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
                    Why Use Content Harmony AI?
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
                      <strong>Keyword Research:</strong> Discover
                      high-performing, low-competition keywords to improve your
                      content’s SEO visibility.
                    </li>
                    <li className="mb-3">
                      <strong>Content Strategy Planning:</strong> Develop a
                      comprehensive content strategy based on topic clustering
                      and keyword intent.
                    </li>
                    <li className="mb-3">
                      <strong>Competitive Content Analysis:</strong> Gain
                      insights into competitors' strategies and identify areas
                      where your content can outperform theirs.
                    </li>
                    <li className="mb-3">
                      <strong>Content Optimization:</strong> Receive real-time
                      optimization suggestions for improving content structure,
                      keyword usage, and readability.
                    </li>
                    <li className="mb-3">
                      <strong>Content Creation Assistance:</strong> Generate
                      content outlines and get keyword-driven suggestions to
                      enhance the quality and relevance of your content.
                    </li>
                    <li className="mb-3">
                      <strong>Internal Linking Suggestions:</strong> Improve
                      content navigation and SEO by receiving smart internal
                      linking recommendations.
                    </li>
                    <li className="mb-3">
                      <strong>Topic Clustering:</strong> Organize content around
                      key themes and clusters, helping to build topical
                      authority and improve SEO performance.
                    </li>
                    <li className="mb-3">
                      <strong>Collaboration Features:</strong> Seamlessly
                      collaborate with team members to create, edit, and
                      optimize content.
                    </li>
                    <li className="mb-3">
                      <strong>Content Audits:</strong> Conduct thorough audits
                      of existing content to identify optimization opportunities
                      and improve performance.
                    </li>
                    <li className="mb-3">
                      <strong>SEO Performance Tracking:</strong> Track and
                      analyze the SEO performance of your content to make
                      data-driven improvements.
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
                    <strong>All-in-One SEO Toolkit:</strong> Combines keyword
                    research, content creation, and optimization in a single
                    platform.
                  </li>
                  <li className="mb-2">
                    <strong>AI-Powered Content Generation:</strong> Quickly
                    create long-form, SEO-optimized content tailored to your
                    target keywords and topics.
                  </li>
                  <li className="mb-2">
                    <strong>Effective Keyword Discovery:</strong> Helps uncover
                    untapped keyword opportunities with accurate search volume
                    and competition data.
                  </li>
                  <li className="mb-2">
                    <strong>Beginner-Friendly Interface:</strong> Intuitive
                    design with helpful tutorials makes it easy for new users to
                    get started.
                  </li>
                  <li className="mb-2">
                    <strong>Content Briefs and Structuring:</strong> Generates
                    clear, actionable content outlines with headings, keyword
                    guidance, and subtopic suggestions.
                  </li>
                  <li className="mb-2">
                    <strong>Competitor Content Analysis:</strong> Compares your
                    content against competitors to identify improvement
                    opportunities.
                  </li>
                  <li className="mb-2">
                    <strong>Team Collaboration:</strong> Built-in tools for team
                    sharing and workflow management make it ideal for agencies
                    and content teams.
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
                    <strong>Expensive Pricing:</strong> Content Harmony’s
                    subscription plans can be quite costly, especially for
                    smaller businesses or startups with limited budgets.
                  </li>
                  <li className="mb-2">
                    <strong>Limited Integrations:</strong> The platform has
                    fewer third-party integrations compared to some other SEO
                    tools, which may limit its compatibility with other
                    software.
                  </li>
                  <li className="mb-2">
                    <strong>Complex Learning Curve:</strong> Although it
                    provides advanced features, new users may find the platform
                    overwhelming and challenging to master quickly.
                  </li>
                  <li className="mb-2">
                    <strong>Focus on Strategy, Not Execution:</strong> Content
                    Harmony excels in strategy and planning but does not provide
                    full content creation or automation, requiring additional
                    manual work from users.
                  </li>
                  <li className="mb-2">
                    <strong>Not Ideal for Small-Scale Projects:</strong> The
                    features may be overkill for small-scale content projects,
                    and users with minimal content needs may not benefit from
                    its robust tools.
                  </li>
                  <li className="mb-2">
                    <strong>Data Accuracy Issues:</strong> Some users have
                    reported discrepancies in keyword and competition data,
                    which could lead to less precise recommendations for content
                    strategies.
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
      <div className="bg-dark d-flex  justify-content-between align-items-center">
        <a
          href="/Aitools"
          className="d-inline-block text-white text-decoration-none ml-3 py-1"
        >
          <i className="bi bi-arrow-left me-2"></i>Back to Directory{" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
          <div className="row align-items-center  mb-4">
            {/* Left side (Text Section) */}
            <div
              style={{  paddingRight: "30px" }}
              className="col-md-6 col-12 order-2 order-md-1"
            >
              <p className="text-primary">Write better, faster</p>
              <h1>Content Harmony AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Content Harmony AI is a cutting-edge content optimization and
                strategy tool designed to help marketers, content creators, and
                SEO professionals improve content quality and relevance. It
                combines AI-driven capabilities for content generation, on-page
                optimization, and SEO strategies, making it a powerful tool for
                boosting rankings and creating high-performing content.
              </p>
              <div className="mb-3">
                <a
                  href="https://www.contentharmony.com/"
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
            
              className="col-md-6 col-12 order-md-2 order1  text-center mb-3  mb-md-0 "
            >
              <img
                src={contentHarmanyAI}
                style={{ width:"100%", height:"auto", maxHeight:"300px", objectFit:"contain",}}              />
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
                How Content Harmony AI Works?
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
                      Keyword Research & Intent Analysis
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Content Harmony starts by analyzing the search intent of
                      keywords, helping you select terms that align with your
                      content goals and target audience. It evaluates volume,
                      competition, and intent type to identify high-priority
                      keywords.
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
                      Topic Clustering & Content Planning
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Content Harmony helps you create topic clusters by
                      grouping related keywords and creating a strategy for
                      content silos, ensuring you cover the full topic breadth
                      to improve your SEO.
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
                      Content Creation & Optimization
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      The platform assists with content creation by recommending
                      the best structure and providing keyword-rich headings. It
                      also offers optimization tools, such as real-time SEO
                      feedback and content grading, to improve rankings.
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

export default ContentHarmanyAI;
