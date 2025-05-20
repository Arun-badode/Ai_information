import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

import deatilimage from "../../../Images/DetailImage.png";
import clearscope from "../../../../public/assets/Img/Ai for SEO/5.png";

import scan1 from "../../../../public/assets/Img/AI for SEO/scan1.png";
import scan2 from "../../../../public/assets/Img/AI for SEO/scan2.png";

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
const ClearScopeAI = () => {
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
                Powerful Content Optimization with Clearscope
              </p>
              <h3 className="">
                Maximize SEO Performance with Data-Driven Insights
              </h3>
            </div>
            {[
              {
                icon: "🔍",
                title: "Comprehensive Keyword Suggestions",
                desc: "Clearscope provides a list of high-performing related keywords to enhance content relevance and SEO impact.",
              },
              {
                icon: "📊",
                title: "Data-Driven Content Optimization",
                desc: "Optimize your content using data-backed suggestions based on top-ranking pages to improve search engine rankings.",
              },
              {
                icon: "⚙️",
                title: "Real-Time Content Scoring",
                desc: "Get immediate feedback and a content grade to see how well your content aligns with SEO best practices.",
              },
              {
                icon: "🌎",
                title: "Content Targeting for Global Audiences",
                desc: "Optimize content to reach global audiences, with suggestions tailored to different regions and languages.",
              },
              {
                icon: "📝",
                title: "Efficient Content Structuring",
                desc: "Organize your content effectively with guidance on keyword placement, headings, and readability for SEO optimization.",
              },
              {
                icon: "📈",
                title: "SEO Performance Tracking",
                desc: "While Clearscope focuses on optimization, you can easily track the performance of optimized content with integrated SEO tools.",
              },
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="custom-card text-light p-4 h-100"
                  style={{ border: "1px solid #00796B" }}
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
                  q: "What is Clearscope?",
                  a: "Clearscope is a content optimization platform that helps writers create SEO-friendly content using data-backed keyword and readability suggestions.",
                },
                {
                  q: "How does Clearscope improve SEO?",
                  a: "It analyzes top-ranking pages for a target keyword and provides guidance to align your content with SEO best practices, improving visibility and ranking potential.",
                },
                {
                  q: "Who can benefit from using Clearscope?",
                  a: "Content marketers, SEO professionals, writers, agencies, and in-house marketing teams can all benefit from Clearscope’s optimization tools.",
                },
                {
                  q: "What is a Clearscope report?",
                  a: "A Clearscope report analyzes a keyword and provides suggestions on related terms, content grade, and structure to guide content creation.",
                },
                {
                  q: "Can I optimize old blog posts with Clearscope?",
                  a: "Yes, you can use Clearscope to refresh and optimize existing content by running a report and applying the suggestions.",
                },
                {
                  q: "Does Clearscope provide keyword suggestions?",
                  a: "Yes, it gives a list of relevant keywords based on search engine data to help improve your content’s relevance.",
                },
                {
                  q: "What is the content grade in Clearscope?",
                  a: "The content grade reflects how well your content aligns with top-ranking pages in terms of keyword usage and structure.",
                },
                {
                  q: "Does Clearscope support Google Docs?",
                  a: "Yes, Clearscope offers an add-on for Google Docs, allowing you to optimize content without leaving your document.",
                },
                {
                  q: "Can I use Clearscope with WordPress?",
                  a: "Yes, Clearscope integrates with WordPress to help you optimize your posts directly within the CMS.",
                },
                {
                  q: "Is Clearscope beginner-friendly?",
                  a: "Yes, the platform is easy to navigate, with clear instructions and real-time suggestions that help even new users improve their content.",
                },
                {
                  q: "Does Clearscope provide readability scores?",
                  a: "Yes, it offers readability feedback so your content is not only optimized for search engines but also easy for humans to read.",
                },
                {
                  q: "How accurate is Clearscope’s data?",
                  a: "Clearscope pulls data from reliable search engine sources, ensuring you get actionable and up-to-date content insights.",
                },
                {
                  q: "Can multiple users collaborate on Clearscope?",
                  a: "Yes, Clearscope supports team collaboration with shared reports and access permissions.",
                },
                {
                  q: "What formats does Clearscope support for content input?",
                  a: "You can type directly into the editor or paste text from other sources, and it works well with Google Docs and WordPress integrations.",
                },
                {
                  q: "Does Clearscope help with content outlines?",
                  a: "While it doesn’t generate outlines, its keyword and structure suggestions can help shape a clear, optimized content layout.",
                },
                {
                  q: "Can Clearscope help with international SEO?",
                  a: "Clearscope primarily supports English content, but it can still assist with global SEO strategies when targeting English-speaking audiences.",
                },
                {
                  q: "Is Clearscope cloud-based?",
                  a: "Yes, Clearscope is a cloud-based tool accessible from any device with an internet connection and a browser.",
                },
                {
                  q: "How often can I run reports in Clearscope?",
                  a: "The number of reports you can run depends on your subscription plan. Most plans include a set number of monthly reports.",
                },
                {
                  q: "Can Clearscope track keyword rankings?",
                  a: "No, Clearscope focuses on content optimization rather than rank tracking. You can use other tools like Ahrefs or SEMrush for that purpose.",
                },
                {
                  q: "Does Clearscope integrate with other tools?",
                  a: "Yes, it integrates with tools like Google Docs and WordPress, and it also supports Zapier for additional workflow automations.",
                },
                {
                  q: "Can I get analytics on how my optimized content performs?",
                  a: "Clearscope doesn’t provide performance analytics, but you can use Google Analytics or other SEO tools to track outcomes.",
                },
                {
                  q: "How secure is my data on Clearscope?",
                  a: "Clearscope uses modern security practices to protect your content and account information.",
                },
                {
                  q: "Is there customer support available?",
                  a: "Yes, Clearscope offers support via email, chat, and a comprehensive help center with tutorials and FAQs.",
                },
                {
                  q: "Is there a free version of Clearscope?",
                  a: "Clearscope doesn’t currently offer a free plan, but you can request a demo or trial through their sales team.",
                },
                {
                  q: "How do I start using Clearscope?",
                  a: "Visit clearscope.io, sign up, and start by entering a keyword to generate your first optimization report.",
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
                alt="clearscope"
              
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={scan2}
                alt="clearscope"
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
                    Why Clearscope Is the Ideal Platform for Content
                    Optimization and SEO Success
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
                      <strong>Data-Backed Content Recommendations:</strong>{" "}
                      Clearscope analyzes top-performing pages to provide
                      powerful keyword suggestions, helping you align your
                      writing with search intent.
                    </li>
                    <li className="mb-3">
                      <strong>Content Grading in Real Time:</strong> Receive
                      live content scores based on readability, topic relevance,
                      and keyword usage, enabling smarter edits as you write.
                    </li>
                    <li className="mb-3">
                      <strong>Simplifies SEO for Writers:</strong> Designed for
                      usability, Clearscope helps writers and marketers optimize
                      content without needing deep SEO expertise.
                    </li>
                    <li className="mb-3">
                      <strong>Workflow Integrations:</strong> Seamlessly
                      integrates with Google Docs and WordPress so you can
                      optimize content where you work best.
                    </li>
                    <li className="mb-3">
                      <strong>Supports Strategic Planning:</strong> Ideal for
                      creating briefs, aligning teams on content goals, and
                      maintaining consistency in tone and structure.
                    </li>
                    <li className="mb-3">
                      <strong>Boosts Organic Performance:</strong> By helping
                      you target the right terms and structure your content
                      well, Clearscope increases the likelihood of ranking on
                      search engines.
                    </li>
                    <li className="mb-3">
                      <strong>Collaborative-Friendly:</strong> Multiple team
                      members can contribute and optimize content efficiently
                      with shared reports and scoring visibility.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Use Clearscope to Elevate Your Content and Improve SEO
                      Outcomes
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
              Why Clearscope is a Go-To Tool for Content Optimization
            </h4>
            <p className="text-center text-secondary mb-4">
              Clearscope equips marketers, writers, and SEO professionals with
              data-backed insights to create high-ranking content. Here are the
              primary strengths and limitations to consider.
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
                    <strong>Content Grading with Clarity:</strong> Clearscope
                    assigns real-time content scores based on keyword coverage,
                    readability, and structure, making it easy to optimize
                    efficiently.
                  </li>
                  <li className="mb-2">
                    <strong>Rich Keyword Insights:</strong> Provides in-depth
                    keyword suggestions derived from top-performing pages,
                    helping you align content with search intent.
                  </li>
                  <li className="mb-2">
                    <strong>User-Friendly Interface:</strong> The intuitive
                    editor allows writers to see optimization suggestions
                    without overwhelming complexity.
                  </li>
                  <li className="mb-2">
                    <strong>Google Docs & WordPress Integration:</strong>{" "}
                    Streamline your workflow by editing directly within tools
                    your team already uses.
                  </li>
                  <li className="mb-2">
                    <strong>Reliable Support and Documentation:</strong>{" "}
                    Detailed guides and responsive customer support help teams
                    quickly adopt the platform.
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
                    <strong>High Cost for Small Teams:</strong> Pricing may be
                    restrictive for freelancers or small businesses looking for
                    budget-friendly SEO tools.
                  </li>
                  <li className="mb-2">
                    <strong>No Built-In AI Writer:</strong> Clearscope doesn’t
                    generate full content like some competitors; it's best
                    suited for optimizing human-written drafts.
                  </li>
                  <li className="mb-2">
                    <strong>Limited Competitive Analysis:</strong> Lacks broader
                    SEO auditing features like backlink tracking or domain
                    comparisons.
                  </li>
                  <li className="mb-2">
                    <strong>Focuses Mainly on English:</strong> Best results are
                    achieved in English; support for other languages is limited
                    or less refined.
                  </li>
                  <li className="mb-2">
                    <strong>No Visual Preview:</strong> While highly functional,
                    Clearscope doesn’t provide a WYSIWYG-style preview of how
                    content appears on the web.
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
              Explore Leading Alternatives for Smarter Content Optimization
            </h4>
            <p className="text-center text-secondary mb-4">
              Clearscope offers advanced SEO and content intelligence, but there
              are several robust tools out there that can help you research,
              plan, and enhance your content strategy across industries.
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
                    <strong>Clearscope</strong>: Optimize content with AI-driven
                    keyword suggestions, real-time scoring, and insights from
                    top-ranking pages.
                  </li>
                  <li className="mb-2">
                    <strong>Surfer SEO</strong>: Analyze SERPs and generate
                    actionable suggestions to improve keyword usage, structure,
                    and overall SEO performance.
                  </li>
                  <li className="mb-2">
                    <strong>Frase</strong>: Create SEO-optimized content briefs
                    and generate AI-assisted drafts based on topic relevance and
                    search intent.
                  </li>
                  <li className="mb-2">
                    <strong>MarketMuse</strong>: Plan, research, and optimize
                    content with predictive scoring and topic modeling backed by
                    machine learning.
                  </li>
                  <li className="mb-2">
                    <strong>SEMrush Content Template</strong>: Get on-page SEO
                    guidance and competitive insights to craft content that
                    ranks.
                  </li>
                  <li className="mb-2">
                    <strong>Dashword</strong>: Easily build outlines, track
                    keyword coverage, and optimize articles with a minimal and
                    fast interface.
                  </li>
                  <li className="mb-2">
                    <strong>WriterZen</strong>: Streamline keyword discovery and
                    topic clustering with intuitive tools for long-form content
                    creation.
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
          <div className=" row align-item-center mb-4">
            {/* Left side (Text Section) */}
            <div
            
              className="col-12 col-md-6 order-2 order-md-1 "
              style={{paddingRight:"30px"}}

            >
              <p className="text-primary">Write better, faster</p>
              <h1>Clearscope</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Clearscope is a premium SEO content optimization tool designed
                to help marketers, content creators, and agencies produce
                high-ranking, high-quality content. It leverages AI, natural
                language processing (NLP), and real-time keyword data to provide
                actionable recommendations that enhance content relevance and
                performance on search engines.
              </p>

              <p>
                Often used by SEO professionals and editorial teams, Clearscope
                delivers content grading, keyword suggestions, readability
                analysis, and integrations with platforms like Google Docs and
                WordPress.
              </p>

              <div className="mb-3">
                <a
                  href="https://www.clearscope.io/"
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
                src={clearscope}
                alt="clearscope"
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
              <p className="text-primary">
                Optimize Your Content Strategy with Clearscope
              </p>
              <h2
                style={{
                  fontWeight: "600",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                How Clearscope Enhances Your Content Creation Workflow
              </h2>

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
                      Analyzes Search Intent
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Clearscope scans top-performing content to help you
                      understand what your audience is searching for, providing
                      a roadmap to craft relevant articles.
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
                      Suggests Data-Driven Keywords
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Clearscope recommends high-impact keywords to naturally
                      incorporate into your content, boosting its SEO value
                      without compromising readability.
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
                      Scores Your Content in Real-Time
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      With a live optimization score, Clearscope helps you
                      enhance readability, keyword balance, and topical
                      authority — all as you write.
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

export default ClearScopeAI;
