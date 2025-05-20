import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import scalenutAI from "../../../../public/assets/Img/Ai for SEO/8.png";
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
const ScalenutAI = () => {
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
                Powerful Content Optimization with Scalenut AI
              </p>
              <h3 className="">
                Maximize Your SEO Success with AI-Driven Content Insights
              </h3>
            </div>
            {[
              {
                icon: "🔍",
                title: "Comprehensive Keyword Recommendations",
                desc: "Scalenut AI offers a comprehensive set of keyword suggestions, helping you select the most relevant keywords for enhanced SEO impact.",
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
                desc: "Scalenut AI focuses on content optimization, while providing valuable insights to track the SEO performance of your content across platforms.",
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
                  q: "What is Scalenut AI?",
                  a: "Scalenut AI is an advanced content optimization platform that uses AI to provide creators with insights, keyword suggestions, and recommendations to enhance content performance and search engine rankings.",
                },
                {
                  q: "How does Scalenut AI enhance SEO?",
                  a: "Scalenut AI leverages AI-powered insights, keyword suggestions, and real-time content analysis to optimize your content according to SEO best practices, improving your content’s visibility in search engines.",
                },
                {
                  q: "Who can benefit from using Scalenut AI?",
                  a: "Content creators, digital marketers, SEO professionals, agencies, and marketing teams can all benefit from Scalenut AI’s powerful optimization tools.",
                },
                {
                  q: "What is a Scalenut AI report?",
                  a: "A Scalenut AI report analyzes a specific keyword and offers actionable suggestions on keyword relevance, content structure, and SEO improvements to help optimize your content.",
                },
                {
                  q: "Can I optimize existing blog posts with Scalenut AI?",
                  a: "Yes, you can optimize existing blog posts with Scalenut AI by generating new reports and applying the AI-driven recommendations to refresh and enhance your content.",
                },
                {
                  q: "Does Scalenut AI provide keyword suggestions?",
                  a: "Yes, Scalenut AI provides keyword recommendations based on real-time data, helping you improve your content’s SEO targeting.",
                },
                {
                  q: "What is the content score in Scalenut AI?",
                  a: "The content score in Scalenut AI reflects how well your content aligns with SEO best practices, considering factors like keyword usage, readability, and content structure.",
                },
                {
                  q: "Does Scalenut AI support Google Docs?",
                  a: "Yes, Scalenut AI integrates seamlessly with Google Docs, allowing you to optimize content directly within the document editor.",
                },
                {
                  q: "Can I use Scalenut AI with WordPress?",
                  a: "Yes, Scalenut AI integrates with WordPress, enabling easy optimization directly within the platform you use for content publishing.",
                },
                {
                  q: "Is Scalenut AI easy to use?",
                  a: "Yes, Scalenut AI is designed with an intuitive interface, providing real-time suggestions and clear guidance for content creators with little to no SEO experience.",
                },
                {
                  q: "Does Scalenut AI provide readability scores?",
                  a: "Yes, Scalenut AI evaluates the readability of your content, ensuring it is optimized for both SEO and human audiences.",
                },
                {
                  q: "How accurate is Scalenut AI’s data?",
                  a: "Scalenut AI uses reliable search engine data and sophisticated algorithms to provide accurate and up-to-date content recommendations and insights.",
                },
                {
                  q: "Can multiple users collaborate on Scalenut AI?",
                  a: "Yes, Scalenut AI supports team collaboration, enabling shared reports, user-specific access, and seamless collaboration between team members.",
                },
                {
                  q: "What formats does Scalenut AI support for content input?",
                  a: "Scalenut AI supports content input directly into its editor, and works well with integrations like Google Docs and WordPress for easy optimization.",
                },
                {
                  q: "Does Scalenut AI assist with content outlines?",
                  a: "While Scalenut AI doesn’t generate full content outlines, it provides keyword and structural suggestions to help create a well-organized content layout.",
                },
                {
                  q: "Can Scalenut AI help with international SEO?",
                  a: "Scalenut AI primarily focuses on English content, but it can assist with strategies and best practices for targeting English-speaking global audiences.",
                },
                {
                  q: "Is Scalenut AI cloud-based?",
                  a: "Yes, Scalenut AI is a cloud-based platform, allowing you to access it from any device with an internet connection.",
                },
                {
                  q: "How often can I run reports in Scalenut AI?",
                  a: "The frequency of running reports depends on your subscription plan, with most plans offering a set number of reports per month.",
                },
                {
                  q: "Can Scalenut AI track keyword rankings?",
                  a: "Scalenut AI specializes in content optimization, not rank tracking. For tracking keyword rankings, tools like Ahrefs or SEMrush are recommended.",
                },
                {
                  q: "Does Scalenut AI integrate with other tools?",
                  a: "Yes, Scalenut AI integrates with Google Docs, WordPress, and other platforms, providing additional workflow automations through tools like Zapier.",
                },
                {
                  q: "Can I track the performance of my optimized content?",
                  a: "While Scalenut AI doesn’t provide direct performance analytics, you can use tools like Google Analytics to monitor how your optimized content performs.",
                },
                {
                  q: "How secure is my data on Scalenut AI?",
                  a: "Scalenut AI follows strict data security protocols to ensure your content and personal information are kept safe and secure.",
                },
                {
                  q: "Is customer support available?",
                  a: "Yes, Scalenut AI offers customer support via email, live chat, and a comprehensive help center with tutorials and FAQs.",
                },
                {
                  q: "Is there a free version of Scalenut AI?",
                  a: "Currently, Scalenut AI does not offer a free version, but you can request a demo or trial to explore its features.",
                },
                {
                  q: "How do I start using Scalenut AI?",
                  a: "Visit scalenut.com, sign up for an account, and begin by entering a keyword to generate your first content optimization report.",
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
                    Why **Scalenut AI** is the Ideal Platform for Content
                    Optimization and SEO Success
                  </h3>

                  <p className="text-start text-muted mb-3">
                    **Scalenut AI** simplifies the process of creating
                    high-quality, SEO-optimized content using AI-driven insights
                    and recommendations. Whether you're a content creator or
                    part of a marketing team, here's why professionals trust
                    **Scalenut AI** to elevate their content strategy:
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
                      <strong>AI-Powered Content Optimization:</strong>{" "}
                      **Scalenut AI** offers actionable insights and keyword
                      suggestions, ensuring your content is perfectly optimized
                      for higher search rankings.
                    </li>
                    <li className="mb-3">
                      <strong>Real-Time SEO Scoring:</strong> Get immediate
                      feedback on your content’s SEO performance, keyword use,
                      and readability to refine and optimize your content on the
                      spot.
                    </li>
                    <li className="mb-3">
                      <strong>Intuitive and User-Friendly Interface:</strong>{" "}
                      **Scalenut AI** is designed to be user-friendly, making
                      content optimization accessible for creators with minimal
                      SEO experience.
                    </li>
                    <li className="mb-3">
                      <strong>Seamless Integrations:</strong> Easily integrate
                      **Scalenut AI** with platforms like Google Docs and
                      WordPress to streamline your content optimization wherever
                      you work most.
                    </li>
                    <li className="mb-3">
                      <strong>AI-Assisted Content Generation:</strong> In
                      addition to optimizing existing content, **Scalenut AI**
                      supports content creation with AI-driven assistance,
                      enabling you to generate SEO-optimized drafts
                      effortlessly.
                    </li>
                    <li className="mb-3">
                      <strong>Boost Organic Search Performance:</strong> By
                      recommending the best keywords and content structure,
                      **Scalenut AI** helps improve your content’s visibility in
                      search engine rankings.
                    </li>
                    <li className="mb-3">
                      <strong>Collaborative Workflow for Teams:</strong>{" "}
                      **Scalenut AI** enhances team collaboration by allowing
                      real-time sharing of optimization insights and reports,
                      ensuring seamless teamwork.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Use **Scalenut AI** to Supercharge Your Content Strategy
                      and SEO Results
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
              Why **Scalenut AI** is a Leading Tool for Content Optimization
            </h4>
            <p className="text-center text-secondary mb-4">
              **Scalenut AI** delivers powerful content optimization
              capabilities, empowering marketers and content creators with
              data-driven insights to enhance SEO rankings. Here are its
              strengths and limitations to consider.
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
                    <strong>AI-Powered Content Optimization:</strong> **Scalenut
                    AI** provides detailed insights on keyword strategy, content
                    structuring, and readability to boost SEO rankings.
                  </li>
                  <li className="mb-2">
                    <strong>Real-Time Feedback:</strong> Offers instant content
                    scoring and suggestions for improving keyword density,
                    readability, and overall SEO optimization.
                  </li>
                  <li className="mb-2">
                    <strong>Intuitive User Interface:</strong> Designed with
                    ease of use in mind, the platform is perfect for both
                    newcomers and seasoned marketers.
                  </li>
                  <li className="mb-2">
                    <strong>AI Writing Assistance:</strong> In addition to
                    content optimization, **Scalenut AI** includes tools for
                    AI-assisted content creation, improving efficiency in
                    writing and content generation.
                  </li>
                  <li className="mb-2">
                    <strong>Affordable for Small Businesses:</strong> The
                    pricing model is ideal for small teams and freelancers
                    seeking affordable, high-quality content optimization tools.
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
                    <strong>Limited Non-English Language Support:</strong> While
                    **Scalenut AI** excels with English-language content, it
                    still has room for improvement with non-English languages.
                  </li>
                  <li className="mb-2">
                    <strong>Inconsistent AI Content Quality:</strong> While
                    helpful, the AI content generation may require manual
                    refinement, especially for more complex or creative writing
                    tasks.
                  </li>
                  <li className="mb-2">
                    <strong>Missing Advanced SEO Tools:</strong> The platform
                    lacks features such as backlink analysis and detailed
                    competitor insights, which might be needed for advanced SEO
                    strategies.
                  </li>
                  <li className="mb-2">
                    <strong>Occasional Performance Glitches:</strong> Users may
                    experience bugs or glitches at times, although updates often
                    address these issues.
                  </li>
                  <li className="mb-2">
                    <strong>No Live Content Preview:</strong> Unlike some
                    competitors, **Scalenut AI** does not offer a live preview
                    feature for how the content will appear once published.
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
              While **Scalenut AI** provides powerful content optimization
              tools, there are other platforms offering valuable features to
              enhance your content strategy across different industries.
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
                    <strong>Scalenut AI</strong>: Leverage AI-powered keyword
                    analysis, content suggestions, and SEO insights to optimize
                    your content and improve rankings.
                  </li>
                  <li className="mb-2">
                    <strong>Surfer SEO</strong>: Comprehensive SERP analysis
                    tool offering actionable SEO suggestions and page structure
                    optimization for improved search visibility.
                  </li>
                  <li className="mb-2">
                    <strong>Frase</strong>: AI-driven content creation platform
                    providing SEO-optimized content briefs and search intent
                    analysis to enhance content relevance.
                  </li>
                  <li className="mb-2">
                    <strong>MarketMuse</strong>: AI-powered content optimization
                    tool that offers predictive content scoring and topic
                    modeling to refine content strategy.
                  </li>
                  <li className="mb-2">
                    <strong>SEMrush Content Template</strong>: A comprehensive
                    tool providing expert on-page SEO recommendations and
                    competitive insights to create high-performing content.
                  </li>
                  <li className="mb-2">
                    <strong>Dashword</strong>: A minimalist yet effective tool
                    for creating content outlines, tracking keyword coverage,
                    and simplifying SEO efforts.
                  </li>
                  <li className="mb-2">
                    <strong>WriterZen</strong>: An intelligent platform for
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
          <i className="bi bi-arrow-left me-2"></i>Back  {" "}
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
              <h1>Scalenut AI:</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Scalenut is a powerful AI-driven content creation and SEO
                optimization platform designed to help writers, marketers, and
                agencies generate high-performing content. With features like AI
                blog writing, keyword planning, SEO scoring, and Cruise Mode for
                guided content creation, Scalenut AI simplifies the entire
                content marketing process—from idea to ranking.
              </p>
              <p>
                Scalenut combines the power of AI copywriting with data-backed
                SEO optimization, enabling users to write SEO-optimized blog
                posts, create content briefs, conduct SERP analysis, and
                organize content strategies through topic clusters.
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
                src={scalenutAI}
                style={{ MaxWidth: "100%", height: "300px" }}
              />
            </div>
          </div>

          <section style={{ backgroundColor: "#1b1f2b", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">
                Transform Your Content Strategy with Scalenut AI
              </p>
              <h2
                style={{
                  fontWeight: "600",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                How Scalenut AI Powers Your Content Creation
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
                      Discovers High-Impact Keywords
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Scalenut AI identifies trending keywords that help target
                      high-demand topics for improving content ranking.
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
                      Generates Relevant Content Ideas
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Get curated content ideas based on trending topics,
                      ensuring that your content remains fresh and relevant to
                      your audience.
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
                      Optimizes Content with Real-Time SEO Suggestions
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Scalenut AI provides real-time SEO recommendations to
                      ensure your content is optimized for search engines, with
                      tips on keyword usage, readability, and backlinks.
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

export default ScalenutAI;
