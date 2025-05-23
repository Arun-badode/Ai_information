import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import pageOptimizerProAI from "../../../../public/assets/Img/Ai for SEO/7.png";
import scan1 from "../../../../public/assets/Img/AI for SEO/scan17.png";
import scan2 from "../../../../public/assets/Img/AI for SEO/scan18.png";

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
const PageOptimizerProAI = () => {
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
                Powerful Content Optimization with PageOptimizer Pro AI
              </p>
              <h3 className="">
                Maximize Your SEO Success with AI-Driven Content Insights
              </h3>
            </div>
            {[
              {
                icon: "🔍",
                title: "Comprehensive Keyword Recommendations",
                desc: "PageOptimizer Pro AI offers a comprehensive set of keyword suggestions, helping you select the most relevant keywords for enhanced SEO impact.",
              },
              {
                icon: "📊",
                title: "AI-Driven Content Enhancement",
                desc: "Improve your content quality using AI-powered suggestions based on data from high-ranking pages, ensuring higher search engine rankings.",
              },
              {
                icon: "⚙️",
                title: "Instant Content Feedback",
                desc: "Get real-time feedback and a content score, allowing you to assess your content’s alignment with SEO best practices as you write.",
              },
              {
                icon: "🌍",
                title: "Global SEO Optimization",
                desc: "Tailor your content for international audiences with AI-driven recommendations customized for various regions and languages.",
              },
              {
                icon: "📝",
                title: "Effective Content Structuring",
                desc: "Ensure your content is SEO-friendly by structuring it optimally, with AI suggestions on keyword placement, headings, and overall readability.",
              },
              {
                icon: "📈",
                title: "Actionable SEO Insights",
                desc: "PageOptimizer Pro AI focuses on content optimization, while providing valuable insights to track the SEO performance of your content across platforms.",
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
                  q: "What is PageOptimizer Pro AI?",
                  a: "PageOptimizer Pro AI is an advanced SEO optimization platform that leverages AI to provide content creators with insights, keyword suggestions, and recommendations for boosting content ranking.",
                },
                {
                  q: "How does PageOptimizer Pro AI enhance SEO?",
                  a: "PageOptimizer Pro AI utilizes AI-powered insights and real-time keyword suggestions to align your content with SEO best practices, helping improve search engine rankings.",
                },
                {
                  q: "Who can benefit from using PageOptimizer Pro AI?",
                  a: "Digital marketers, content creators, SEO professionals, agencies, and marketing teams can all benefit from PageOptimizer Pro AI’s advanced optimization tools.",
                },
                {
                  q: "What is a PageOptimizer Pro AI report?",
                  a: "A PageOptimizer Pro AI report analyzes a specific keyword and provides AI-powered suggestions on keyword relevance, content structure, and SEO improvements to help refine your content.",
                },
                {
                  q: "Can I optimize existing blog posts with PageOptimizer Pro AI?",
                  a: "Yes, you can optimize old blog posts with PageOptimizer Pro AI by generating new reports and applying the AI recommendations to refresh and enhance your content.",
                },
                {
                  q: "Does PageOptimizer Pro AI provide keyword suggestions?",
                  a: "Yes, PageOptimizer Pro AI offers data-driven keyword recommendations, helping you improve your content’s SEO performance and targeting.",
                },
                {
                  q: "What is the content score in PageOptimizer Pro AI?",
                  a: "The content score measures how well your content aligns with SEO best practices, taking into account keyword integration, readability, and overall structure.",
                },
                {
                  q: "Does PageOptimizer Pro AI support Google Docs?",
                  a: "Yes, PageOptimizer Pro AI integrates seamlessly with Google Docs, allowing you to optimize your content directly within the document editor.",
                },
                {
                  q: "Can I use PageOptimizer Pro AI with WordPress?",
                  a: "Yes, PageOptimizer Pro AI integrates with WordPress, enabling you to optimize your content directly within the platform you use for publishing.",
                },
                {
                  q: "Is PageOptimizer Pro AI easy to use?",
                  a: "Yes, PageOptimizer Pro AI is designed with ease of use in mind, providing real-time suggestions and clear instructions to help even beginners optimize their content efficiently.",
                },
                {
                  q: "Does PageOptimizer Pro AI provide readability scores?",
                  a: "Yes, PageOptimizer Pro AI provides readability assessments to ensure your content is optimized for both search engines and human readers.",
                },
                {
                  q: "How accurate is PageOptimizer Pro AI’s data?",
                  a: "PageOptimizer Pro AI uses reliable search engine data and algorithms to provide accurate, up-to-date content insights and recommendations.",
                },
                {
                  q: "Can multiple users collaborate on PageOptimizer Pro AI?",
                  a: "Yes, PageOptimizer Pro AI supports team collaboration, with features for shared reports and user-specific access permissions.",
                },
                {
                  q: "What formats does PageOptimizer Pro AI support for content input?",
                  a: "You can input content directly into the editor or paste from other sources. It also works well with Google Docs and WordPress integrations.",
                },
                {
                  q: "Does PageOptimizer Pro AI assist with content outlines?",
                  a: "While it doesn't generate full outlines, its keyword and structure recommendations can help you craft a well-organized content layout.",
                },
                {
                  q: "Can PageOptimizer Pro AI help with international SEO?",
                  a: "PageOptimizer Pro AI focuses on English content but can assist with strategies for international SEO targeting English-speaking audiences.",
                },
                {
                  q: "Is PageOptimizer Pro AI cloud-based?",
                  a: "Yes, PageOptimizer Pro AI is a cloud-based tool, allowing you to access it from any device with an internet connection.",
                },
                {
                  q: "How often can I run reports in PageOptimizer Pro AI?",
                  a: "The number of reports you can run depends on your subscription plan. Most plans offer a set number of reports per month.",
                },
                {
                  q: "Can PageOptimizer Pro AI track keyword rankings?",
                  a: "No, PageOptimizer Pro AI specializes in content optimization, not rank tracking. For rank tracking, tools like Ahrefs or SEMrush can be used.",
                },
                {
                  q: "Does PageOptimizer Pro AI integrate with other tools?",
                  a: "Yes, it integrates with Google Docs, WordPress, and supports additional workflow automations through platforms like Zapier.",
                },
                {
                  q: "Can I track the performance of my optimized content?",
                  a: "While PageOptimizer Pro AI doesn’t offer performance analytics, you can use Google Analytics or other tools to track how your optimized content performs.",
                },
                {
                  q: "How secure is my data on PageOptimizer Pro AI?",
                  a: "PageOptimizer Pro AI follows best practices for data security, ensuring that your content and personal information are protected.",
                },
                {
                  q: "Is customer support available?",
                  a: "Yes, PageOptimizer Pro AI offers customer support through email, live chat, and a comprehensive help center with tutorials and FAQs.",
                },
                {
                  q: "Is there a free version of PageOptimizer Pro AI?",
                  a: "Currently, PageOptimizer Pro AI does not offer a free version, but you can request a demo or trial to explore its features.",
                },
                {
                  q: "How do I start using PageOptimizer Pro AI?",
                  a: "Visit pageoptimizerpro.com, sign up for an account, and begin by entering a keyword to generate your first content optimization report.",
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
                alt="PageOptimizerPro"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={scan2}
                alt="PageOptimizerPro"
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
                    Why **PageOptimizer Pro AI** is the Ideal Platform for
                    Content Optimization and SEO Success
                  </h3>

                  <p className="text-start text-muted mb-3">
                    **PageOptimizer Pro AI** simplifies the process of creating
                    high-quality SEO-friendly content using AI-driven
                    recommendations and actionable insights. Whether you're a
                    content creator or part of a larger marketing team, here's
                    why professionals choose **PageOptimizer Pro AI** to boost
                    their content strategy:
                  </p>

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
                      <strong>AI-Driven Content Optimization:</strong>{" "}
                      **PageOptimizer Pro AI** offers actionable insights and
                      keyword suggestions, helping you create content that ranks
                      higher in search engines.
                    </li>
                    <li className="mb-3">
                      <strong>Instant SEO Scoring:</strong> Receive real-time
                      feedback on your content's SEO effectiveness, readability,
                      and keyword integration, enabling on-the-fly optimization.
                    </li>
                    <li className="mb-3">
                      <strong>Simple Interface for Content Creators:</strong>{" "}
                      Designed to be intuitive, **PageOptimizer Pro AI** makes
                      content optimization easy for writers and marketers, even
                      with little SEO experience.
                    </li>
                    <li className="mb-3">
                      <strong>Seamless Integrations:</strong> Integrate
                      effortlessly with platforms like Google Docs and WordPress
                      to optimize your content where you work most often.
                    </li>
                    <li className="mb-3">
                      <strong>AI-Powered Content Creation:</strong> Beyond
                      optimization, **PageOptimizer Pro AI** aids in content
                      generation, helping you draft SEO-optimized copy quickly.
                    </li>
                    <li className="mb-3">
                      <strong>Boost Organic Search Performance:</strong> By
                      suggesting the best keywords and content structure,
                      **PageOptimizer Pro AI** helps your content perform better
                      in search engine rankings.
                    </li>
                    <li className="mb-3">
                      <strong>Collaborative Workflow for Teams:</strong>{" "}
                      **PageOptimizer Pro AI** streamlines collaboration by
                      allowing teams to share reports and real-time optimization
                      insights, enhancing teamwork.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Use **PageOptimizer Pro AI** to Supercharge Your Content
                      Strategy and SEO Results
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
              Why **PageOptimizer Pro AI** is a Leading Tool for Content
              Optimization
            </h4>
            <p className="text-center text-secondary mb-4">
              **PageOptimizer Pro AI** provides comprehensive insights for
              content optimization, helping marketers and content creators boost
              rankings with data-backed strategies. Here are its main strengths
              and limitations to consider.
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
                    <strong>AI-Driven Content Optimization:</strong>{" "}
                    **PageOptimizer Pro AI** offers deep insights on keyword
                    usage, content structure, and readability to enhance your
                    SEO performance.
                  </li>
                  <li className="mb-2">
                    <strong>Real-Time Content Scoring:</strong> Provides live
                    feedback on content quality, helping you adjust keyword
                    density, readability, and SEO optimization instantly.
                  </li>
                  <li className="mb-2">
                    <strong>User-Friendly Interface:</strong> The platform is
                    designed with simplicity in mind, making it easy for both
                    beginners and advanced users to utilize without a steep
                    learning curve.
                  </li>
                  <li className="mb-2">
                    <strong>AI-Powered Writing Tools:</strong> Beyond
                    optimization, the tool includes features to assist with
                    AI-assisted content generation, improving overall writing
                    efficiency.
                  </li>
                  <li className="mb-2">
                    <strong>Affordable for Small Teams:</strong> The pricing
                    structure makes it a viable option for small teams and
                    freelancers looking for high-quality content optimization
                    tools at a competitive rate.
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
                    <strong>English-Centric Features:</strong> While it excels
                    with English-language content, **PageOptimizer Pro AI**'s
                    performance with non-English content is still a work in
                    progress.
                  </li>
                  <li className="mb-2">
                    <strong>Variable AI Content Quality:</strong> Although the
                    AI content generation tool is helpful, it may require manual
                    refinement for more complex or creative writing tasks.
                  </li>
                  <li className="mb-2">
                    <strong>Lacks Some Advanced SEO Features:</strong> The
                    platform doesn’t offer advanced tools like backlink analysis
                    or in-depth competitor insights, which some users may need
                    for comprehensive SEO strategies.
                  </li>
                  <li className="mb-2">
                    <strong>Occasional Bugs and Glitches:</strong> While updates
                    often fix these issues, users may encounter occasional bugs
                    or performance hiccups that can disrupt the workflow.
                  </li>
                  <li className="mb-2">
                    <strong>No Content Visualizer:</strong> Unlike some
                    competitors, **PageOptimizer Pro AI** doesn’t provide a live
                    content preview feature for how articles will appear once
                    published.
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
              Discover Leading Alternatives for Enhanced Content Optimization
            </h4>
            <p className="text-center text-secondary mb-4">
              While **PageOptimizer Pro AI** offers advanced content
              optimization features, there are other platforms that also provide
              valuable tools to elevate your content strategy across various
              industries.
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
                    <strong>PageOptimizer Pro AI</strong>: Harness the power of
                    AI-driven keyword insights, SEO recommendations, and content
                    analysis to boost your rankings and engagement.
                  </li>
                  <li className="mb-2">
                    <strong>Surfer SEO</strong>: Comprehensive SERP analysis
                    that offers actionable suggestions on keyword optimization
                    and page structure for superior SEO performance.
                  </li>
                  <li className="mb-2">
                    <strong>Frase</strong>: Use AI to generate SEO-optimized
                    content briefs and assist with drafting content tailored to
                    search intent and relevance.
                  </li>
                  <li className="mb-2">
                    <strong>MarketMuse</strong>: AI-backed content optimization
                    tool that enables predictive scoring and topic modeling to
                    plan and refine your content strategy.
                  </li>
                  <li className="mb-2">
                    <strong>SEMrush Content Template</strong>: Get expert-level
                    on-page SEO guidance and competitive insights to create
                    content that outperforms in search engines.
                  </li>
                  <li className="mb-2">
                    <strong>Dashword</strong>: A minimalist yet effective tool
                    for building content outlines, tracking keyword coverage,
                    and streamlining SEO efforts.
                  </li>
                  <li className="mb-2">
                    <strong>WriterZen</strong>: A smart tool designed for
                    long-form content creation, offering keyword discovery,
                    topic clustering, and SEO insights for seamless content
                    optimization.
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
            <div className="col-md-6 col-12 mt-4 mt-md-0">
              <p className="text-primary">Write better, faster</p>
              <h1>PageOptimizer Pro AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                PageOptimizer Pro (commonly known as POP) is an on-page SEO tool
                that helps digital marketers, content creators, and SEO
                professionals optimize their content for higher search engine
                rankings. Leveraging AI and NLP (Natural Language Processing),
                it analyzes your pages against top-ranking competitors and
                provides actionable insights for improvement.
              </p>
              <div className="mb-3">
                <a
                  href="https://pageoptimizer.pro/"
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
                src={pageOptimizerProAI}
                alt="PageOptimizer Pro AI"
                style={{
                  maxWidth: "100%",
                  height: "300px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          <section style={{ backgroundColor: "#1b1f2b", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">
                Transform Your Content Strategy with PageOptimizer Pro AI
              </p>
              <h2
                style={{
                  fontWeight: "600",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                How PageOptimizer Pro AI Powers Your Content Creation
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
                      Unveils High-Impact Keywords
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      PageOptimizer Pro AI detects the latest keyword trends,
                      allowing you to strategically target high-demand topics
                      for better content ranking.
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
                      Curates Relevant Content Ideas
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Get tailored content ideas based on trending topics,
                      ensuring your content remains fresh, engaging, and
                      valuable for your audience.
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
                      Optimizes Content with Real-Time SEO Tips
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      PageOptimizer Pro AI offers real-time SEO optimization,
                      ensuring that your content is optimized for search engines
                      with suggestions on keyword density, readability, and
                      backlinks.
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

export default PageOptimizerProAI;
