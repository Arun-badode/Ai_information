import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import scite from "../../../../public/assets/Img/AI for Document/scite.png";
import sciteSS1 from '../../../../public/assets/Img/AI for Document/sciteSS1.png';
import sciteSS2 from '../../../../public/assets/Img/AI for Document/sciteSS2.png';


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
const SciteAI = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="Scite AI Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Simplify and Customize Content Effortlessly with Scite AI
                </p>
                <h3>Smart, Copyright-Free Rewriting Tailored to You</h3>
              </div>
              {[
                {
                  icon: "⚙️",
                  title: "Adaptive Content Rewriting",
                  desc: "Scite AI reshapes your content based on your goals—whether simplifying, clarifying, or rewording for different audiences—without copying the original.",
                },
                {
                  icon: "🎯",
                  title: "User-Centered Customization",
                  desc: "Change tone, detail level, and complexity to match academic, business, or casual needs—no writing or technical expertise required.",
                },
                {
                  icon: "🌍",
                  title: "Supports Multiple Formats & Languages",
                  desc: "Upload PDFs, DOCX, or plain text files in different languages and get readable, localized paraphrases instantly.",
                },
                {
                  icon: "🛡️",
                  title: "100% Copyright-Free Output",
                  desc: "Every rewrite is original, giving you peace of mind to use the content for publishing, submission, or sharing.",
                },
                {
                  icon: "🧠",
                  title: "Clarity with Context",
                  desc: "Scite AI understands your content and delivers concise rewrites that preserve meaning—perfect for dense or technical material.",
                },
                {
                  icon: "📖",
                  title: "Designed for Students & Experts",
                  desc: "From school reports to academic research, Scite AI saves time by rewriting complex documents into understandable language.",
                },
              ].map((feature, index) => (
                <div className="col-md-4" key={index}>
                  <div className="custom-card text-light p-4 h-100 border border-primary rounded">
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
                  q: "What is Scite AI?",
                  a: "Scite AI is an advanced AI tool that helps users adapt and rephrase content according to their needs, ensuring 100% copyright-free output for academic, professional, or everyday use.",
                },
                {
                  q: "How does Scite AI work?",
                  a: "Scite AI analyzes your content and rewrites it to match your desired tone, complexity, or context—without copying any original content.",
                },
                {
                  q: "Is Scite AI content truly copyright-free?",
                  a: "Yes, Scite AI ensures that every rephrased version is entirely original and free from copyright and plagiarism concerns.",
                },
                {
                  q: "Can I customize how Scite AI paraphrases my content?",
                  a: "Absolutely. You can control the tone, complexity, and length of the output, ensuring it fits your specific needs and preferences.",
                },
                {
                  q: "Does Scite AI support large documents?",
                  a: "Yes, Scite AI is optimized to handle long documents and complex materials with ease and efficiency.",
                },
                {
                  q: "What formats does Scite AI support?",
                  a: "Scite AI works with common formats such as PDF, DOCX, and plain text files.",
                },
                {
                  q: "Is Scite AI free?",
                  a: "Scite AI offers a free version with basic features, with additional functionalities and export options available through paid plans.",
                },
                {
                  q: "Can I export my rephrased content?",
                  a: "Yes, Scite AI allows you to download or copy your rephrased content in various formats, depending on your subscription.",
                },
                {
                  q: "Is Scite AI good for academic use?",
                  a: "Definitely. It’s perfect for students and researchers who need a reliable tool for paraphrasing academic papers, while maintaining the original meaning.",
                },
                {
                  q: "Does Scite AI produce plagiarism-free text?",
                  a: "Yes, every rephrased output is unique and free from plagiarism, ensuring originality.",
                },
                {
                  q: "Is Scite AI easy to use?",
                  a: "Yes, Scite AI offers an intuitive interface that is user-friendly for both beginners and advanced users.",
                },
                {
                  q: "Can I change the tone of paraphrased content?",
                  a: "Yes, Scite AI lets you choose from a variety of tones, including formal, neutral, or casual, depending on your needs.",
                },
                {
                  q: "Is Scite AI suitable for business use?",
                  a: "Yes, Scite AI is great for rephrasing business documents, reports, emails, and other professional communications.",
                },
                {
                  q: "Does Scite AI store user data?",
                  a: "No, Scite AI processes your content securely and does not store or reuse any uploaded material.",
                },
                {
                  q: "Does Scite AI work on mobile?",
                  a: "Yes, Scite AI is fully web-based and mobile-friendly, allowing you to use it on any device with an internet connection.",
                },
                {
                  q: "Can I use Scite AI without technical skills?",
                  a: "Absolutely. Scite AI is designed for ease of use, requiring no technical expertise.",
                },
                {
                  q: "Does Scite AI offer rewriting or just paraphrasing?",
                  a: "Scite AI focuses on paraphrasing, rephrasing content meaningfully while keeping the original context and ideas intact.",
                },
                {
                  q: "Is Scite AI fast?",
                  a: "Yes, Scite AI delivers rephrased content within seconds for most inputs.",
                },
                {
                  q: "Do I need to install anything?",
                  a: "No, Scite AI is web-based, so there’s no need to install anything. Simply use it directly in your browser.",
                },
                {
                  q: "Where can I get support for Scite AI?",
                  a: "You can contact support and find help directly through the Scite AI website.",
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
                src={sciteSS1}
                alt="scite"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={sciteSS2}
                alt="scite"
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
                    Why <strong>Scite AI</strong> and{" "}
                    <strong>Explainpaper AI</strong> Are the Go-To Tools for
                    Effortless, Copyright-Free Rewording
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>Scite AI</strong> and{" "}
                    <strong>Explainpaper AI</strong> make paraphrasing smarter
                    by adapting content to your needs while ensuring 100%
                    copyright-free output. Whether you're simplifying research,
                    writing essays, or explaining complex topics, here’s why
                    these AI tools are the smart choice:
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
                      <strong>Adaptive Output:</strong> Automatically rephrases
                      content based on your intent and audience—making it ideal
                      for both casual and academic use.
                    </li>
                    <li className="mb-3">
                      <strong>Copyright-Free Results:</strong> Every rewritten
                      version is free from copyright concerns, making it safe to
                      use, publish, or distribute.
                    </li>
                    <li className="mb-3">
                      <strong>Simplifies Complex Language:</strong> Ideal for
                      breaking down dense papers or technical material into
                      understandable language.
                    </li>
                    <li className="mb-3">
                      <strong>Fast and Accurate:</strong> Delivers results in
                      seconds without compromising on context or clarity.
                    </li>
                    <li className="mb-3">
                      <strong>Great for Academic Readers:</strong> Especially
                      helpful for students or researchers who want a quick,
                      simplified view of scholarly articles.
                    </li>
                    <li className="mb-3">
                      <strong>Minimal Interface:</strong> Easy to use with a
                      clean, distraction-free experience focused entirely on
                      input and output.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Try <strong>Scite AI</strong> and{" "}
                      <strong>Explainpaper AI</strong> — Simplify and Reword
                      Without Copyright Worries
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
              Why <strong>Humata AI</strong>, <strong>Explainpaper AI</strong>,
              and <strong>Scite AI</strong> Are Effective and Copyright-Free
              Tools
            </h4>
            <p className="text-center text-secondary mb-4">
              Both <strong>Humata AI</strong>, <strong>Explainpaper AI</strong>,
              and <strong>Scite AI</strong> offer intelligent paraphrasing and
              explanation tools that adapt content according to your needs
              without copyright concerns — ideal for learning, summarizing, and
              repurposing content.
            </p>

            {/* Humata AI Section */}
            <div className="row justify-content-center gap-2 mb-5">
              {/* Humata Pros */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #7b68ee",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-success text-start mb-4">
                  ✅ Humata AI - Pros
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Copyright-Free Content:</strong> All outputs from
                    Humata AI are completely copyright-free.
                  </li>
                  <li className="mb-2">
                    <strong>Content Customization:</strong> Adapts paraphrased
                    text to your goals while keeping original meaning.
                  </li>
                  <li className="mb-2">
                    <strong>User-Friendly Interface:</strong> Easy to use for
                    all levels of users.
                  </li>
                  <li className="mb-2">
                    <strong>Speedy Results:</strong> Fast processing and output.
                  </li>
                  <li className="mb-2">
                    <strong>Supports Many Content Types:</strong> Blogs,
                    academic papers, reports, etc.
                  </li>
                </ul>
              </div>

              {/* Humata Cons */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #7b68ee",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-warning text-start mb-4">
                  ⚠️ Humata AI - Cons
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Limited Academic Features:</strong> Doesn’t support
                    citations or deep referencing.
                  </li>
                  <li className="mb-2">
                    <strong>May Require Refinement:</strong> Some paraphrased
                    content may need tweaking.
                  </li>
                  <li className="mb-2">
                    <strong>Internet Required:</strong> No offline mode.
                  </li>
                  <li className="mb-2">
                    <strong>Premium Features Locked:</strong> Some tools are
                    behind a paywall.
                  </li>
                  <li className="mb-2">
                    <strong>No Team Collaboration:</strong> No shared documents
                    or team access features.
                  </li>
                </ul>
              </div>
            </div>

            {/* Explainpaper AI Section */}
            <div className="row justify-content-center gap-2">
              {/* Explainpaper Pros */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #7b68ee",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-success text-start mb-4">
                  ✅ Explainpaper AI - Pros
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Content Simplification:</strong> Breaks down complex
                    academic content for easier understanding.
                  </li>
                  <li className="mb-2">
                    <strong>Copyright-Free Output:</strong> Lets you use and
                    repurpose content freely.
                  </li>
                  <li className="mb-2">
                    <strong>Reader-Friendly:</strong> Makes technical research
                    more accessible to students and general users.
                  </li>
                  <li className="mb-2">
                    <strong>Context-Aware Rewriting:</strong> Understands and
                    simplifies without losing meaning.
                  </li>
                </ul>
              </div>

              {/* Explainpaper Cons */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #7b68ee",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-warning text-start mb-4">
                  ⚠️ Explainpaper AI - Cons
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Limited Use Cases:</strong> Best for academic
                    content, not general writing.
                  </li>
                  <li className="mb-2">
                    <strong>No Editing Tools:</strong> Lacks advanced rewriting
                    or stylistic editing features.
                  </li>
                  <li className="mb-2">
                    <strong>Online Only:</strong> Requires an internet
                    connection.
                  </li>
                  <li className="mb-2">
                    <strong>Not Creative-Focused:</strong> Doesn’t suit creative
                    tone adjustments or narrative writing.
                  </li>
                </ul>
              </div>
            </div>

            {/* Scite AI Section */}
            <div className="row justify-content-center gap-2">
              {/* Scite Pros */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #7b68ee",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-success text-start mb-4">
                  ✅ Scite AI - Pros
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Adaptive Content Transformation:</strong> Changes
                    content according to user needs and context.
                  </li>
                  <li className="mb-2">
                    <strong>Contextual Rewriting:</strong> Preserves meaning
                    while offering multiple rewriting options.
                  </li>
                  <li className="mb-2">
                    <strong>Fully Copyright-Free:</strong> Ensures all generated
                    content is free from copyright issues.
                  </li>
                  <li className="mb-2">
                    <strong>Effective for Research:</strong> Tailored for
                    academic and research contexts, offering accurate citations.
                  </li>
                  <li className="mb-2">
                    <strong>Time-Saving:</strong> Allows for quick content
                    generation and summarization.
                  </li>
                </ul>
              </div>

              {/* Scite Cons */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #7b68ee",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-warning text-start mb-4">
                  ⚠️ Scite AI - Cons
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Specialized for Research:</strong> Best suited for
                    academic and research contexts; less effective for casual
                    content.
                  </li>
                  <li className="mb-2">
                    <strong>Requires Internet:</strong> No offline functionality
                    available.
                  </li>
                  <li className="mb-2">
                    <strong>Limited Creative Flexibility:</strong> Not ideal for
                    creative writing or narrative adjustments.
                  </li>
                  <li className="mb-2">
                    <strong>May Need Refining:</strong> Some outputs might need
                    additional tweaks for clarity and tone.
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
              Discover Leading Alternatives to Humata AI for Paraphrasing and
              Content Refinement
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>Humata AI</strong> excels at transforming text into
              unique, original content, several other platforms offer
              specialized capabilities for paraphrasing, rewriting, and content
              refinement—helping creators produce high-quality and
              copyright-free content effortlessly.
            </p>
            <div className="row justify-content-center gap-2">
              <div
                className="col-lg-8 col-md-8 col-sm-12"
                style={{
                  border: "1px solid #7b68ee",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Humata AI</strong>: Specializes in rephrasing and
                    paraphrasing content to ensure uniqueness, while maintaining
                    the original meaning. It’s customizable and ideal for a
                    variety of purposes—academic, business, or casual—while
                    being completely copyright-free.
                  </li>
                  <li className="mb-2">
                    <strong>UpSum.ai</strong>: Provides adaptive summarization
                    based on your input, tailoring content to fit academic,
                    technical, or casual needs. Its summaries are fully
                    customizable and copyright-free, allowing for unlimited
                    reuse.
                  </li>
                  <li className="mb-2">
                    <strong>Resoomer AI</strong>: Known for summarizing long
                    texts into concise formats, Resoomer offers easy
                    customization options to tailor summaries to specific needs,
                    keeping the core message intact.
                  </li>
                  <li className="mb-2">
                    <strong>SMMRY AI</strong>: Lets users control the length and
                    focus of their summaries, providing copyright-free content
                    that adapts to user preferences without sacrificing
                    originality.
                  </li>
                  <li className="mb-2">
                    <strong>SummarizeBot AI</strong>: This adaptable tool allows
                    for summary customization in terms of length, tone, and
                    emphasis, ensuring that the paraphrased or summarized
                    content is suitable for various needs while remaining
                    copyright-free.
                  </li>
                  <li className="mb-2">
                    <strong>Scholarcy</strong>: Ideal for academic and
                    research-focused content, Scholarcy highlights key facts and
                    arguments, offering a fully customizable and copyright-free
                    paraphrasing tool for researchers and students.
                  </li>
                  <li className="mb-2">
                    <strong>QuillBot</strong>: An AI-powered writing enhancement
                    tool, QuillBot includes paraphrasing and summarization
                    features that help improve text quality and generate
                    concise, original content.
                  </li>
                  <li className="mb-2">
                    <strong>Text Summarizer</strong>: A simple tool for
                    condensing large texts into key points, Text Summarizer is
                    perfect for research, study materials, or quick content
                    consumption.
                  </li>
                  <li className="mb-2">
                    <strong>Copy.ai</strong>: Designed to help with writing
                    content such as marketing copy, blog posts, and more,
                    Copy.ai offers paraphrasing and content refinement
                    capabilities to enhance clarity and engagement.
                  </li>
                  <li className="mb-2">
                    <strong>SummarizeThis</strong>: A user-friendly AI tool that
                    condenses texts into short, clear summaries, ideal for
                    quickly extracting key insights from content.
                  </li>
                  <li className="mb-2">
                    <strong>TLDR This</strong>: Focuses on producing quick,
                    digestible summaries from large documents, papers, or
                    articles, saving users time while ensuring key points are
                    captured.
                  </li>
                  <li className="mb-2">
                    <strong>Explainpaper AI</strong>: Offers adaptive content
                    transformation tailored to your understanding, making
                    complex documents easier to grasp—while ensuring the
                    rephrased content remains completely copyright-free and
                    ready for use in academic or professional contexts.
                  </li>
                  <li className="mb-2">
                    <strong>Scite AI</strong>: Combines citation-based context
                    with paraphrasing and rewriting functionality. Scite adapts
                    content to your intent while preserving academic accuracy,
                    ensuring all output is user-aligned and copyright-free—great
                    for research, analysis, and publication use.
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
          <i className="bi bi-arrow-left me-2"></i>Back  {" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
         <div className="row align-items-center justify-content-between mb-4">
  {/* Image First on Mobile, Right on Desktop */}
  <div className="col-12 col-md-6 order-1 order-md-2 text-center mb-3 mb-md-0">
    <img
      src={scite}
      alt="Scite AI"
      style={{ maxWidth: "100%", height: "300px" }}
    />
  </div>

  {/* Text Second on Mobile, Left on Desktop */}
  <div className="col-12 col-md-6 order-2 order-md-1" style={{ paddingRight: "30px" }}>
    <p className="text-primary">Write better, faster</p>
    <h1>Scite AI:</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      Scite AI is an advanced AI-powered citation analysis tool that enhances the way researchers,
      students, and professionals interact with academic content. Unlike traditional search engines,
      Scite AI not only helps users find scholarly articles but also shows how those articles have
      been cited — with context. Known for its smart citations, Scite AI identifies whether a paper
      supports, mentions, or contrasts another publication, making it a comprehensive academic
      writing and citation management platform.
    </p>
    <a
      href="https://scite.ai"
      rel="noopener noreferrer"
      className="btn btn-primary me-2"
       
       
        target="_blank"
    >
      Explore Tool
    </a>
  </div>
</div>

    <section style={{ backgroundColor: "#0b1e3d", padding: "3rem 0" }}>
  <div className="container text-center">
    <p className="text-primary">
      Enhance Research Integrity—Scite AI in Action
    </p>
    <h2
      className="text-white"
      style={{ fontWeight: "600", marginBottom: "1rem" }}
    >
      Discover How Scite AI Validates Scientific Claims
    </h2>
    <p
      style={{
        color: "#ccc",
        marginBottom: "2rem",
        fontStyle: "italic",
      }}
    >
      Scite AI provides smart citation analysis to help researchers understand the context and reliability of scientific papers.
    </p>

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
          <style>{`
            .scite-step1 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #7b61ff;
              opacity: 0.6;
            }
          `}</style>
          <h5 style={{ fontWeight: "bold", color: "#fff" }}>
            Contextual Citation Analysis
          </h5>
          <p style={{ color: "#fff", margin: 0 }}>
            Scite AI analyzes how papers are cited, distinguishing supportive, contrasting, or mentioning contexts.
          </p>
          <div className="scite-step1">1</div>
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
          <style>{`
            .scite-step2 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #7b61ff;
              opacity: 0.6;
            }
          `}</style>
          <h5 style={{ fontWeight: "bold", color: "#fff" }}>
            Research Paper Evaluation
          </h5>
          <p style={{ color: "#fff", margin: 0 }}>
            Helps researchers assess the reliability and impact of scientific studies through citation context.
          </p>
          <div className="scite-step2">2</div>
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
          <style>{`
            .scite-step3 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #7b61ff;
              opacity: 0.6;
            }
          `}</style>
          <h5 style={{ fontWeight: "bold", color: "#fff" }}>
            Citation-Based Insights
          </h5>
          <p style={{ color: "#fff", margin: 0 }}>
            Gain insights from citation patterns to support evidence-based research decisions.
          </p>
          <div className="scite-step3">3</div>
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

export default SciteAI;
