import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import outrankingAI from "../../../../public/assets/Img/Ai for SEO/3.png";
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
const OutrankingAI = () => {
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
              <h3 className="">Features of Outranking.io AI</h3>
            </div>
            {[
              {
                icon: "🧠",
                title: "AI-Powered Content Strategy",
                desc: "Outranking.io uses AI to analyze top-ranking pages and derive data-driven content strategies that align with search intent, improving SEO performance.",
              },
              {
                icon: "🔍",
                title: "Content Briefs & Outlines",
                desc: "Outranking.io generates AI-powered content briefs and outlines, ensuring your content is structured with SEO-friendly elements for better rankings.",
              },
              {
                icon: "📈",
                title: "Content Scoring & Optimization",
                desc: "Outranking.io provides real-time content scoring, assessing SEO relevance and offering suggestions for optimization, ensuring higher search engine rankings.",
              },
              {
                icon: "💡",
                title: "Competitor Analysis",
                desc: "Outranking.io leverages AI to perform competitor analysis, identifying what’s working for top-ranking pages and offering insights to improve your own content.",
              },
              {
                icon: "📊",
                title: "SEO Keyword Research",
                desc: "Outranking.io helps identify high-performing keywords using AI, boosting your content’s SEO potential by targeting the right keywords for maximum visibility.",
              },
              {
                icon: "⚙️",
                title: "AI Content Refinement",
                desc: "Outranking.io automates content refinement through AI-driven suggestions, improving readability, keyword usage, and overall SEO performance.",
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
                  q: "What is Outranking.io?",
                  a: "An AI-powered SEO content platform that helps you research, write, and optimize content based on SERP data.",
                },
                {
                  q: "Who should use Outranking.io?",
                  a: "Bloggers, SEO professionals, content marketers, and agencies.",
                },
                {
                  q: "Is there a free trial for Outranking?",
                  a: "Yes, you can try it free without a credit card.",
                },
                {
                  q: "Does Outranking offer a lifetime deal?",
                  a: "Occasionally available via platforms like AppSumo.",
                },
                {
                  q: "What does the content brief generator do?",
                  a: "It creates detailed outlines including titles, headings, keywords, and competitor insights.",
                },
                {
                  q: "Can I use Outranking for blog content?",
                  a: "Yes, it's optimized for long-form blog content creation.",
                },
                {
                  q: "How does Outranking compare to Jasper?",
                  a: "Jasper is more creative; Outranking is more SEO-focused.",
                },
                {
                  q: "Is it suitable for affiliate marketing?",
                  a: "Yes, you can use it to rank product reviews and buying guides.",
                },
                {
                  q: "Does it integrate with Google Docs?",
                  a: "Yes, you can push content directly to Google Docs.",
                },
                {
                  q: "Can it write meta descriptions?",
                  a: "Yes, Outranking offers AI-powered meta title and description generators.",
                },
                {
                  q: "Does Outranking support keyword clustering?",
                  a: "Yes, it organizes keywords by intent to help you target effectively.",
                },
                {
                  q: "Can I use Outranking for ecommerce SEO?",
                  a: "Absolutely, it’s great for optimizing product descriptions and category pages.",
                },
                {
                  q: "What languages does Outranking support?",
                  a: "It supports multiple languages, though English is the most robust.",
                },
                {
                  q: "Is Outranking suitable for YouTube SEO?",
                  a: "Yes, you can use it to write optimized titles and descriptions.",
                },
                {
                  q: "How does the content scoring system work?",
                  a: "It grades your content based on keyword usage, structure, and relevance.",
                },
                {
                  q: "Does it help with internal linking?",
                  a: "Yes, Outranking offers automatic suggestions for internal links.",
                },
                {
                  q: "Can I collaborate with my team inside Outranking?",
                  a: "Yes, the platform includes multi-user support and task assignments.",
                },
                {
                  q: "Is there a plagiarism checker in Outranking?",
                  a: "Yes, it checks for duplicate content before publishing.",
                },
                {
                  q: "Can I schedule content using Outranking?",
                  a: "You can plan and assign content, though direct publishing schedules may need integrations.",
                },
                {
                  q: "Is Outranking better than SurferSEO?",
                  a: "For some users, yes — especially those looking for AI + brief generation in one tool.",
                },
                {
                  q: "Does Outranking support team collaboration?",
                  a: "Yes, multiple users can collaborate on content creation and review.",
                },
                {
                  q: "Can Outranking help with SEO audits?",
                  a: "Yes, it performs on-page SEO checks and gives recommendations.",
                },
                {
                  q: "How often is Outranking updated?",
                  a: "Regular feature updates are released monthly based on user feedback.",
                },
                {
                  q: "Can I use Outranking for multilingual content?",
                  a: "Yes, although best results are seen with English content.",
                },
                {
                  q: "Does Outranking.io offer customer support?",
                  a: "Yes, via live chat and email support on business days.",
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
                    Why Use Outranking.io AI?
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
                      <strong> SEO Content Research:</strong> Outranking.io
                      helps you research and analyze the top-ranking pages for
                      your target keywords, providing insights into structure,
                      keywords, and content themes to help you outrank
                      competitors.
                    </li>
                    <li class="mb-3">
                      <strong> Content Brief Generation:</strong> Outranking.io
                      automatically generates content briefs, including titles,
                      headings, keywords, and suggested structure based on
                      competitive analysis, helping you streamline content
                      creation.
                    </li>
                    <li class="mb-3">
                      <strong> AI-Powered Content Writing:</strong> The platform
                      assists in writing SEO-optimized content by using AI to
                      suggest relevant keywords, phrases, and content structure
                      to ensure maximum SEO performance.
                    </li>
                    <li class="mb-3">
                      <strong> Keyword Research & Clustering:</strong>{" "}
                      Outranking.io helps you discover high-performing keywords
                      and organizes them by intent, improving your content
                      targeting and increasing your ranking potential.
                    </li>
                    <li class="mb-3">
                      <strong> Meta Title & Description Generation:</strong>{" "}
                      Outranking.io generates optimized meta titles and
                      descriptions that are SEO-friendly, ensuring better
                      click-through rates (CTR) in search engine results.
                    </li>
                    <li class="mb-3">
                      <strong> On-Page SEO Recommendations:</strong> The
                      platform provides on-page SEO checks and offers actionable
                      recommendations, such as internal linking, keyword
                      density, and readability improvements.
                    </li>
                    <li class="mb-3">
                      <strong> Integration with Google Docs:</strong>{" "}
                      Outranking.io integrates with Google Docs, allowing
                      seamless content editing and optimization directly within
                      the platform.
                    </li>
                    <li class="mb-3">
                      <strong> Content Performance Scoring:</strong>{" "}
                      Outranking.io assigns performance scores to your content
                      based on keyword usage, relevance, and structure, helping
                      you fine-tune your content for optimal SEO impact.
                    </li>
                    <li class="mb-3">
                      <strong> Supports Multilingual Content:</strong>{" "}
                      Outranking.io supports multilingual content, making it a
                      great choice for businesses targeting global audiences
                      with different language requirements.
                    </li>
                    <li class="mb-3">
                      <strong> Team Collaboration:</strong> Outranking.io allows
                      multiple users to collaborate on content creation, making
                      it ideal for teams working together on large-scale content
                      projects.
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
                    <strong>AI-Powered Content Research:</strong> Outranking.io
                    provides in-depth analysis of top-ranking pages and
                    competitor content, helping you identify the best content
                    strategies and optimize your writing for better SEO results.
                  </li>
                  <li className="mb-2">
                    <strong>Content Brief Generation:</strong> The platform
                    generates detailed content briefs with suggested titles,
                    headings, keywords, and competitor insights, streamlining
                    the content creation process and ensuring better alignment
                    with SEO best practices.
                  </li>
                  <li className="mb-2">
                    <strong>Comprehensive Keyword Research:</strong>{" "}
                    Outranking.io helps you identify and organize
                    high-performing keywords through keyword clustering,
                    improving content targeting and boosting ranking potential.
                  </li>
                  <li className="mb-2">
                    <strong>On-Page SEO Optimization:</strong> The platform
                    offers actionable on-page SEO recommendations, such as
                    internal linking, keyword usage, and content structure,
                    ensuring your content is well-optimized for search engines.
                  </li>
                  <li className="mb-2">
                    <strong>Content Performance Scoring:</strong> Outranking.io
                    provides a scoring system to evaluate content based on its
                    SEO performance, helping you fine-tune your content for
                    optimal rankings.
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
                    <strong>Learning Curve for New Users:</strong> Outranking.io
                    may have a steep learning curve for beginners, especially
                    those unfamiliar with SEO and content optimization tools, as
                    it requires understanding various features and how to
                    effectively utilize them.
                  </li>
                  <li className="mb-2">
                    <strong>Primarily SEO-Focused:</strong> Outranking.io is
                    more focused on SEO and optimization, which may not be
                    sufficient for users who are looking for content generation
                    capabilities without the need for further content writing.
                  </li>
                  <li className="mb-2">
                    <strong>Limited Creativity in Content Generation:</strong>{" "}
                    While Outranking.io excels in SEO and optimization, it
                    doesn't provide the same level of creative, fully automated
                    content generation that other AI tools like Jasper might
                    offer.
                  </li>
                  <li className="mb-2">
                    <strong>Pricing for Premium Plans:</strong> Outranking.io’s
                    higher-tier subscription plans can be pricey, which may be a
                    barrier for small businesses or individual users with
                    limited budgets.
                  </li>
                  <li className="mb-2">
                    <strong>Overwhelming for Small Projects:</strong>{" "}
                    Outranking.io’s robust features might be overkill for users
                    with smaller projects or simpler content needs, making it
                    less cost-effective for them.
                  </li>
                  <li className="mb-2">
                    <strong>
                      Occasional Need for Third-Party Integrations:
                    </strong>{" "}
                    Some users may find the need for third-party integrations
                    (like Google Docs) to be inconvenient if they prefer working
                    in a single platform.
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
              <h1>Outranking.io AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Outranking.io is a powerful AI-driven SEO tool that assists
                writers, marketers, and agencies in crafting high-ranking
                content. It combines AI writing capabilities with real-time SERP
                analysis and NLP optimization to help users research, plan,
                write, and optimize content more effectively.
              </p>

              <p>
                Outranking offers features such as automated content briefs,
                keyword clustering, meta tag generation, content scoring, and
                internal linking suggestions, all within a collaborative content
                workflow.
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
                src={outrankingAI}
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
                How Outranking.io Works?
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
                      Outranking.io AI Content Strategy
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Outranking.io uses AI to analyze top-ranking pages and
                      derive SEO-driven content strategies that help you create
                      optimized content based on search intent.
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
                      AI-Powered Content Briefs & Outlines
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Outranking.io generates comprehensive AI-powered content
                      briefs and outlines that streamline your writing process,
                      ensuring it’s structured to meet SEO requirements.
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
                      The AI continuously evaluates your content, providing
                      real-time suggestions to optimize for keyword density,
                      readability, and SEO relevance based on competitive
                      analysis.
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

export default OutrankingAI;
