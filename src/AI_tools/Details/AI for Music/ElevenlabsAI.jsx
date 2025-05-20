import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import eleven from "../../../../public/assets/Img/Ai for Music/13.png";
import screen1 from "../../../../public/assets/Img/Ai for Music/eleventlabs-screenshot1.jpg";
import screen2 from "../../../../public/assets/Img/Ai for Music/eleventlabs-screenshot2.jpg";

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
const ElevenlabsAI = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="Frase Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Powerful Content Optimization with Frase.io
                </p>
                <h3>
                  Maximize Your SEO Success with AI-Driven Content Insights
                </h3>
              </div>
              {[
                {
                  icon: "🔍",
                  title: "Comprehensive Keyword Recommendations",
                  desc: "Frase.io offers a comprehensive set of keyword suggestions, helping you select the most relevant keywords for enhanced SEO impact.",
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
                  desc: "Frase.io focuses on content optimization, while providing valuable insights to track the SEO performance of your content across platforms.",
                },
              ].map((feature, index) => (
                <div className="col-md-4" key={index}>
                  <div className="custom-card text-light p-4 h-100 border border-success rounded">
                    <div
                      className="icon mb-3 fs-3"
                      role="img"
                      aria-label="Feature Icon"
                    >
                      {feature.icon}
                    </div>
                    <h5 className="fw-bold">{feature.title}</h5>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
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
                  q: "What is ElevenLabs AI?",
                  a: "ElevenLabs AI is an advanced AI-driven content creation and optimization platform that helps creators and teams produce high-quality, SEO-friendly content with smart insights and automated assistance.",
                },
                {
                  q: "How does ElevenLabs AI enhance SEO?",
                  a: "ElevenLabs AI uses AI-powered insights, keyword recommendations, and real-time content analysis to ensure your content follows SEO best practices and performs better in search rankings.",
                },
                {
                  q: "Who can benefit from using ElevenLabs AI?",
                  a: "Content creators, marketers, SEO specialists, agencies, and editorial teams can all benefit from ElevenLabs AI’s powerful AI-assisted writing and optimization tools.",
                },
                {
                  q: "What is an ElevenLabs AI report?",
                  a: "An ElevenLabs AI report analyzes your topic or keyword and provides data-driven suggestions to improve structure, keyword use, and SEO effectiveness.",
                },
                {
                  q: "Can I optimize existing blog posts with ElevenLabs AI?",
                  a: "Yes, you can analyze and enhance existing content using ElevenLabs AI’s smart suggestions to refresh and improve SEO performance.",
                },
                {
                  q: "Does ElevenLabs AI provide keyword suggestions?",
                  a: "Yes, ElevenLabs AI offers keyword suggestions based on real-time data, helping you align content with what audiences are searching for.",
                },
                {
                  q: "What is the content score in ElevenLabs AI?",
                  a: "The content score reflects how well your content adheres to SEO and readability standards, guiding you toward higher-performing content.",
                },
                {
                  q: "Does ElevenLabs AI support Google Docs?",
                  a: "Yes, ElevenLabs AI integrates with Google Docs so you can edit and optimize content seamlessly within your existing workflow.",
                },
                {
                  q: "Can I use ElevenLabs AI with WordPress?",
                  a: "Yes, ElevenLabs AI offers WordPress integration to help you optimize and publish directly to your website.",
                },
                {
                  q: "Is ElevenLabs AI easy to use?",
                  a: "Absolutely. ElevenLabs AI is designed with a user-friendly interface that makes AI-assisted writing and optimization accessible to beginners and pros alike.",
                },
                {
                  q: "Does ElevenLabs AI provide readability scores?",
                  a: "Yes, ElevenLabs AI checks readability to ensure your content is clear and effective for your target audience.",
                },
                {
                  q: "How accurate is ElevenLabs AI’s data?",
                  a: "ElevenLabs AI uses up-to-date search data and AI models to generate accurate and actionable insights for content creation and SEO.",
                },
                {
                  q: "Can multiple users collaborate on ElevenLabs AI?",
                  a: "Yes, team members can collaborate in real-time, share projects, and work together on content optimization using ElevenLabs AI.",
                },
                {
                  q: "What formats does ElevenLabs AI support for content input?",
                  a: "You can create or paste content directly in the editor, and also use integrations with tools like Google Docs and WordPress.",
                },
                {
                  q: "Does ElevenLabs AI assist with content outlines?",
                  a: "Yes, ElevenLabs AI helps structure your content by providing keyword-based headings and topic suggestions for better flow.",
                },
                {
                  q: "Can ElevenLabs AI help with international SEO?",
                  a: "While optimized primarily for English content, ElevenLabs AI can assist with SEO strategies targeting global English-speaking audiences.",
                },
                {
                  q: "Is ElevenLabs AI cloud-based?",
                  a: "Yes, it’s fully cloud-based, allowing you to work from any device with internet access.",
                },
                {
                  q: "How often can I run reports in ElevenLabs AI?",
                  a: "Report frequency depends on your subscription plan. Most plans include a set number of reports per month.",
                },
                {
                  q: "Can ElevenLabs AI track keyword rankings?",
                  a: "ElevenLabs AI focuses on content creation and optimization. For keyword tracking, use dedicated SEO tools like Ahrefs or SEMrush.",
                },
                {
                  q: "Does ElevenLabs AI integrate with other tools?",
                  a: "Yes, ElevenLabs AI supports integrations with platforms like Google Docs, WordPress, and others via tools like Zapier.",
                },
                {
                  q: "Can I track the performance of my optimized content?",
                  a: "While ElevenLabs AI doesn’t provide analytics, you can track content performance using platforms like Google Analytics after optimization.",
                },
                {
                  q: "How secure is my data on ElevenLabs AI?",
                  a: "ElevenLabs AI prioritizes user privacy and employs strong data security protocols to protect your content and information.",
                },
                {
                  q: "Is customer support available?",
                  a: "Yes, ElevenLabs AI offers responsive customer support through live chat, email, and a robust help center.",
                },
                {
                  q: "Is there a free version of ElevenLabs AI?",
                  a: "Currently, ElevenLabs AI does not offer a free version, but you can explore it through a demo or trial.",
                },
                {
                  q: "How do I start using ElevenLabs AI?",
                  a: "Visit elevenlabs.io, sign up, and begin by entering a topic or keyword to start generating optimized content.",
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
                src={screen1}
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={screen2}
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
                    <small className="text-muted d- text-center">
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
                    Why <strong>ElevenLabs AI</strong> is the Ideal Platform for
                    Content Creation and SEO Success
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>ElevenLabs AI</strong> simplifies the process of
                    creating high-quality, SEO-optimized content using AI-driven
                    insights and recommendations. Whether you're a content
                    creator or part of a marketing team, here's why
                    professionals trust <strong>ElevenLabs AI</strong> to
                    enhance their content strategy:
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
                      <strong>AI-Powered Content Creation:</strong>{" "}
                      <strong>ElevenLabs AI</strong> offers actionable insights
                      and keyword suggestions to ensure your content is
                      perfectly optimized for higher search rankings.
                    </li>
                    <li className="mb-3">
                      <strong>Real-Time SEO Scoring:</strong> Receive immediate
                      feedback on your content’s SEO performance, keyword usage,
                      and readability, enabling you to optimize your content on
                      the spot.
                    </li>
                    <li className="mb-3">
                      <strong>User-Friendly and Intuitive Interface:</strong>{" "}
                      <strong>ElevenLabs AI</strong> is designed for ease of
                      use, making content optimization accessible to creators
                      with minimal SEO experience.
                    </li>
                    <li className="mb-3">
                      <strong>Seamless Integrations:</strong> Easily integrate{" "}
                      <strong>ElevenLabs AI</strong> with tools like Google Docs
                      and WordPress to streamline your content optimization
                      workflow.
                    </li>
                    <li className="mb-3">
                      <strong>AI-Assisted Content Generation:</strong> Beyond
                      optimization, <strong>ElevenLabs AI</strong> helps you
                      create new content by assisting with AI-driven drafts that
                      are SEO-friendly.
                    </li>
                    <li className="mb-3">
                      <strong>Boost Organic Search Rankings:</strong> By
                      recommending optimal keywords and content structure,{" "}
                      <strong>ElevenLabs AI</strong> helps improve the
                      visibility of your content in search engine results.
                    </li>
                    <li className="mb-3">
                      <strong>Collaborative Team Workflow:</strong>{" "}
                      <strong>ElevenLabs AI</strong> enables real-time sharing
                      of optimization insights and reports, fostering smooth
                      collaboration among teams.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Use <strong>ElevenLabs AI</strong> to Supercharge Your
                      Content Strategy and SEO Results
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
              Why <strong>ElevenLabs AI</strong> is a Leading Tool for Content
              Optimization
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>ElevenLabs AI</strong> offers advanced content creation
              and optimization capabilities, enabling content creators and
              marketers to streamline their SEO efforts. Here are its strengths
              and areas for improvement.
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
                    <strong>AI-Powered Content Creation:</strong>{" "}
                    <strong>ElevenLabs AI</strong> streamlines content
                    development by using cutting-edge AI to generate relevant,
                    high-quality material efficiently.
                  </li>
                  <li className="mb-2">
                    <strong>Real-Time SEO Assistance:</strong> Provides instant
                    suggestions to optimize keyword usage, improve structure,
                    and enhance overall SEO readiness.
                  </li>
                  <li className="mb-2">
                    <strong>Clean and Intuitive UI:</strong> Designed for
                    simplicity, the platform suits both beginners and
                    professionals looking for a smooth content workflow.
                  </li>
                  <li className="mb-2">
                    <strong>Flexible Content Structuring:</strong> Offers tools
                    to organize outlines and format writing in a structured and
                    SEO-friendly way.
                  </li>
                  <li className="mb-2">
                    <strong>Competitive Pricing:</strong> ElevenLabs AI delivers
                    premium functionality at a cost-effective rate, ideal for
                    freelancers, startups, and small agencies.
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
                    <strong>Language Limitations:</strong> Although powerful in
                    English, performance may vary across less common or regional
                    languages.
                  </li>
                  <li className="mb-2">
                    <strong>Varied Output Quality:</strong> Complex or niche
                    topics might need manual fine-tuning beyond the AI’s default
                    output.
                  </li>
                  <li className="mb-2">
                    <strong>Limited Advanced SEO Tools:</strong> Lacks deep
                    competitor insights or backlink analysis that are found in
                    more comprehensive SEO suites.
                  </li>
                  <li className="mb-2">
                    <strong>Occasional Performance Hiccups:</strong> Users may
                    encounter rare bugs or slowdowns, especially during high
                    traffic.
                  </li>
                  <li className="mb-2">
                    <strong>No Native Live Preview:</strong> Unlike some
                    competitors, it doesn’t yet include a real-time visual
                    preview of content changes.
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
              While <strong>ElevenLabs AI</strong> offers powerful content
              creation and optimization tools, other platforms provide valuable
              features to elevate your content strategy across various
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
                    <strong>ElevenLabs AI</strong>: Offers AI-powered content
                    creation and real-time optimization, helping you craft
                    high-quality, SEO-friendly content with ease.
                  </li>
                  <li className="mb-2">
                    <strong>Surfer SEO</strong>: A comprehensive SERP analysis
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
                    <strong>Scalenut AI</strong>: AI-powered platform offering
                    content creation, keyword analysis, and SEO insights to
                    enhance your content strategy and rankings.
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
          <i className="bi bi-arrow-left me-2"></i>Back{" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
          <div className="row d-flex align-items-center mb-4">
            {/* Image Section - mobile pe first, desktop pe second */}
            <div className="col-12 col-md-6 order-1 order-md-2 text-center mb-3 mb-md-0">
              <img
                src={eleven}
                alt="ElevenLabs AI"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>

            {/* Text Section - mobile pe second, desktop pe first */}
            <div className="col-12 col-md-6 order-2 order-md-1 pe-md-4">
              <p className="text-primary">Write better, faster</p>
              <h1>ElevenLabs AI:</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                ElevenLabs AI is not just another chatbot solution – it's a
                revolutionary platform designed to transform the way businesses
                interact with their customers. With state-of-the-art
                conversational AI and text generation capabilities, it offers
                everything you need to automate and enhance your customer
                interactions, content creation, and much more. Let's dive into
                how ElevenLabs AI can empower your business with cutting-edge
                technology.
              </p>

              <div className="mb-3">
                <a
                  href="https://elevenlabs.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Explore Tool
                </a>
              </div>
            </div>
          </div>

          <section style={{ backgroundColor: "#1b1f2b", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">
                Transform Your Content Strategy with Frase.io
              </p>
              <h2
                style={{
                  fontWeight: "600",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                How ElevenLabs AI Powers Your Content Creation
              </h2>
              <p
                style={{
                  color: "#ccc",
                  marginBottom: "2rem",
                  fontStyle: "italic",
                }}
              >
                ElevenLabs AI adapts content to your needs — copyright-free and
                fully flexible.
              </p>

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
                      Frase.io identifies trending keywords that help target
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
                      ElevenLabs AI provides real-time SEO recommendations to
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
        </div>
      </div>
    </>
  );
};

export default ElevenlabsAI;
