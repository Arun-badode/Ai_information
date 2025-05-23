import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import mindmeisterSS1 from '../../../../public/assets/Img/Ai for Mind Mapping/mindmeisterSS1.png';
import mindmeisterSS2 from '../../../../public/assets/Img/Ai for Mind Mapping/mindmeisterSS2.png';


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
const MindMeister = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="MindMeister AI Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Effortlessly Refine and Personalize Content with MindMeister
                  AI
                </p>
                <h3>
                  Smart, Authentic Rewriting Engine Built for Your Content Goals
                </h3>
              </div>
              {[
                {
                  icon: "🔄",
                  title: "Intelligent Text Refinement",
                  desc: "MindMeister AI reshapes your text by analyzing your goals—whether it's simplifying, restructuring, or adapting for different contexts—without mirroring the original.",
                },
                {
                  icon: "🎨",
                  title: "Flexible Customization Options",
                  desc: "Easily modify tone, language level, and format to suit academic, business, or informal content needs—no writing or tech skills needed.",
                },
                {
                  icon: "🌐",
                  title: "Multi-Format & Language Compatibility",
                  desc: "Handle content in formats like PDF, DOCX, or plain text, with support for multilingual inputs and localized, accurate outputs.",
                },
                {
                  icon: "✅",
                  title: "Completely Original Output",
                  desc: "Each version is newly generated, free from copyright concerns, so you're safe to publish or distribute with confidence.",
                },
                {
                  icon: "🧩",
                  title: "Meaning-Preserving Clarity",
                  desc: "MindMeister AI understands the context and keeps your core message intact while offering clearer, reader-friendly rewrites.",
                },
                {
                  icon: "📚",
                  title: "Ideal for Learners and Professionals",
                  desc: "From essays to executive summaries, transform dense content into readable and accessible formats in seconds.",
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
                  q: "What is MindMeister AI?",
                  a: "MindMeister AI is an intelligent platform that rewrites, simplifies, and reshapes your content in a unique and copyright-free manner, making it perfect for personal, professional, and academic use.",
                },
                {
                  q: "How does MindMeister AI function?",
                  a: "MindMeister AI scans your text and modifies it based on your input — whether it's changing tone, summarizing ideas, or rewording sections — all while keeping the content original and compliant.",
                },
                {
                  q: "Is the content from MindMeister AI copyright-safe?",
                  a: "Yes, MindMeister AI ensures all output is completely free from copyright restrictions, giving you the freedom to reuse or republish confidently.",
                },
                {
                  q: "Can I control how MindMeister AI edits my content?",
                  a: "Definitely. You can fine-tune style, tone, and complexity to match your intent and audience.",
                },
                {
                  q: "Does MindMeister AI support long-form content?",
                  a: "Yes, it efficiently processes lengthy documents and complex material without performance issues.",
                },
                {
                  q: "Which file types are compatible with MindMeister AI?",
                  a: "MindMeister AI accepts various file formats such as DOCX, PDF, and plain text to provide maximum flexibility.",
                },
                {
                  q: "Is MindMeister AI free to use?",
                  a: "It offers both free and premium versions. The free version includes basic tools, while advanced customization and export options are available in paid plans.",
                },
                {
                  q: "Can I export my content after editing?",
                  a: "Yes, your edited content can be downloaded or copied in your preferred format, based on your access level.",
                },
                {
                  q: "Is MindMeister AI suitable for students and researchers?",
                  a: "Yes, it’s excellent for rewriting academic papers, summarizing articles, and refining scholarly writing.",
                },
                {
                  q: "Does MindMeister AI ensure plagiarism-free output?",
                  a: "Absolutely. Every piece of transformed text is original and avoids duplication or plagiarism.",
                },
                {
                  q: "Is MindMeister AI easy to learn and use?",
                  a: "Yes, it features a clean, intuitive interface designed for users of all skill levels.",
                },
                {
                  q: "Can I set a specific tone for the rewritten content?",
                  a: "Yes, MindMeister AI allows you to choose a tone — from formal to conversational — to fit your needs.",
                },
                {
                  q: "Can businesses benefit from MindMeister AI?",
                  a: "Absolutely. It’s great for rewriting reports, proposals, and emails in a professional style.",
                },
                {
                  q: "Does MindMeister AI store my files or text?",
                  a: "No, all processing is done securely and privately. Your data is never stored or reused.",
                },
                {
                  q: "Can I use MindMeister AI on my mobile device?",
                  a: "Yes, it’s fully responsive and accessible through any device with an internet connection.",
                },
                {
                  q: "Is technical knowledge required to use MindMeister AI?",
                  a: "No technical skills are needed. The platform is designed to be as user-friendly as possible.",
                },
                {
                  q: "Does MindMeister AI only paraphrase or also rewrite?",
                  a: "MindMeister AI does both — it rephrases content and can fully restructure it while preserving meaning.",
                },
                {
                  q: "Is the rewriting process quick?",
                  a: "Yes, MindMeister AI delivers fast results, with most edits completed in seconds.",
                },
                {
                  q: "Do I need to install anything?",
                  a: "No installation required. MindMeister AI works directly in your browser, anytime, anywhere.",
                },
                {
                  q: "Where can I get help with MindMeister AI?",
                  a: "Support is available through the official MindMeister AI help center or contact form on the website.",
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
                src={mindmeisterSS1}                alt="mindmeister"
                
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={mindmeisterSS2}
                alt="mindmeister"
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
                    Why <strong>MindMeister AI</strong> Is Your Ideal Companion
                    for Fast, Clear, and Copyright-Free Content Rewriting
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>MindMeister AI</strong> simplifies the task of
                    rewriting and refining content without any copyright
                    worries. Whether you're revamping blog posts, simplifying
                    complex reports, or tailoring content for a new audience,
                    here’s why MindMeister AI makes sense:
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
                      <strong>Smart Content Rewriting:</strong> Transforms your
                      existing material into fresh and unique output, ready to
                      use instantly.
                    </li>
                    <li className="mb-3">
                      <strong>Zero Copyright Issues:</strong> Generates content
                      that's fully original and safe for any type of
                      distribution.
                    </li>
                    <li className="mb-3">
                      <strong>Flexible Tone & Style:</strong> Adapts writing
                      style to match business, educational, or casual needs
                      effortlessly.
                    </li>
                    <li className="mb-3">
                      <strong>Time-Saving Performance:</strong> Delivers refined
                      text results in seconds, boosting your workflow
                      efficiency.
                    </li>
                    <li className="mb-3">
                      <strong>User-Friendly Design:</strong> Simple interface
                      makes it easy for anyone to paraphrase or restructure
                      content without technical know-how.
                    </li>
                    <li className="mb-3">
                      <strong>Wide Range of Applications:</strong> Works great
                      for rewriting emails, marketing content, articles, and
                      more.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Try <strong>MindMeister AI</strong> — Rewrite Smarter,
                      Faster, and Copyright-Free
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
              Why <strong>MindMeister AI</strong> Stands Out as a Reliable and
              Copyright-Free Tool
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>MindMeister AI</strong> helps you rephrase, restructure,
              and simplify content with precision— delivering original,
              user-tailored results that are free of copyright restrictions.
            </p>

            {/* MindMeister AI Section */}
            <div className="row justify-content-center gap-2 mb-5">
              {/* MindMeister Pros */}
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
                  ✅ MindMeister AI - Pros
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Fully Customizable Output:</strong> Adjusts language
                    and tone to your style or audience.
                  </li>
                  <li className="mb-2">
                    <strong>Plagiarism-Free:</strong> Generates unique content
                    that’s safe for both academic and commercial use.
                  </li>
                  <li className="mb-2">
                    <strong>Fast and Responsive:</strong> Provides quick text
                    rewrites and summaries with minimal delay.
                  </li>
                  <li className="mb-2">
                    <strong>Context-Aware:</strong> Understands the meaning
                    behind your input for smarter rephrasing.
                  </li>
                  <li className="mb-2">
                    <strong>Versatile Use:</strong> Works well for blogs,
                    reports, study notes, or business content.
                  </li>
                </ul>
              </div>

              {/* MindMeister Cons */}
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
                  ⚠️ MindMeister AI - Cons
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Online-Only Tool:</strong> Doesn’t work without an
                    internet connection.
                  </li>
                  <li className="mb-2">
                    <strong>Limited in Creative Writing:</strong> Not ideal for
                    poetry or fictional storytelling.
                  </li>
                  <li className="mb-2">
                    <strong>Tone Adjustments Needed:</strong> May need manual
                    tweaks to match brand voice.
                  </li>
                  <li className="mb-2">
                    <strong>Not Meant for Original Research:</strong> Designed
                    for rewriting existing material, not generating novel ideas.
                  </li>
                  <li className="mb-2">
                    <strong>Advanced Features May Require Upgrade:</strong> Some
                    premium options may not be free.
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
              Explore Top MindMeister AI Alternatives for Smarter Rewriting &
              Summarization
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>MindMeister AI</strong> leads in smart content
              transformation, a variety of other tools also offer powerful
              features for refining, paraphrasing, and summarizing content—each
              bringing unique advantages for creators and professionals alike.
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
                    <strong>MindMeister AI</strong>: Provides adaptive
                    paraphrasing and idea structuring tools for academic,
                    business, or personal use—ensuring outputs are fresh,
                    original, and tailored to your voice.
                  </li>
                  <li className="mb-2">
                    <strong>UpSum.ai</strong>: Creates condensed and
                    context-aware summaries from longer texts, ideal for study
                    notes, reports, or simplified rewrites.
                  </li>
                  <li className="mb-2">
                    <strong>Resoomer AI</strong>: Simplifies detailed content
                    into digestible summaries, helping you retain essential
                    ideas without the fluff.
                  </li>
                  <li className="mb-2">
                    <strong>SMMRY</strong>: Focuses on brevity and clarity,
                    enabling users to fine-tune summaries by importance, tone,
                    or content length.
                  </li>
                  <li className="mb-2">
                    <strong>SummarizeBot</strong>: Supports real-time
                    summarization with customizable formatting and tone—suitable
                    for casual users and professionals.
                  </li>
                  <li className="mb-2">
                    <strong>Scholarcy</strong>: Designed for academic readers,
                    it highlights arguments, citations, and key points, speeding
                    up comprehension.
                  </li>
                  <li className="mb-2">
                    <strong>QuillBot</strong>: A multi-tool AI for improving
                    grammar, structure, and phrasing while offering several
                    writing modes to suit different needs.
                  </li>
                  <li className="mb-2">
                    <strong>Text Summarizer</strong>: A user-friendly option for
                    condensing large paragraphs into essential takeaways,
                    perfect for quick skimming.
                  </li>
                  <li className="mb-2">
                    <strong>Copy.ai</strong>: Excellent for marketing
                    professionals and content creators needing paraphrasing
                    tools for branding, clarity, and persuasion.
                  </li>
                  <li className="mb-2">
                    <strong>SummarizeThis</strong>: Delivers simplified content
                    versions instantly, making it easier to digest technical or
                    lengthy material.
                  </li>
                  <li className="mb-2">
                    <strong>TLDR This</strong>: Offers quick overviews of
                    articles, papers, or documents—ideal for professionals short
                    on time.
                  </li>
                  <li className="mb-2">
                    <strong>Explainpaper AI</strong>: Breaks down complex
                    writing into easy-to-understand language for students and
                    readers seeking clarity.
                  </li>
                  <li className="mb-2">
                    <strong>Scite AI</strong>: Combines citation tracking with
                    paraphrasing tools, helping researchers understand and
                    communicate scholarly insights more clearly.
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
          <div className="row d-flex align-items-center justify-content-between mb-1 flex-column flex-md-row">
  {/* Image Section - Mobile me pehle dikhayega */}
  <div className="col-12 col-md-6 order-1 order-md-2 mb-3 mb-md-0 text-center">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5IyEpRsYY8JsmOlBNKKmWf5jlOBFs3Ustg&s"
      alt="MindMeister AI"
      style={{ width: "100%", height: "300px", objectFit: "cover" }}
    />
  </div>

  {/* Text Section - Mobile me baad me dikhayega */}
  <div className="col-12 col-md-6 order-2 order-md-1" style={{ paddingRight: "30px" }}>
    <p className="text-primary">Write better, faster</p>
    <h1>MindMeister AI:</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      MindMeister AI is a powerful tool designed to enhance productivity and
      creativity. It combines the art of mind mapping with artificial
      intelligence, making it a great tool for brainstorming, project
      management, task management, and team collaboration. Whether you’re
      planning a project, organizing ideas, or creating workflows,
      MindMeister provides a comprehensive solution with its easy-to-use
      interface and AI-powered features.
    </p>
    <a
      href="https://www.mindmeister.com"
      rel="noopener noreferrer"
      className="btn btn-primary me-2"
    >
      Explore Tool
    </a>
  </div>
</div>


          <section style={{ backgroundColor: "#1b1f2b", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">
                Intelligent Rewording with Context-Aware Precision by
                MindMeister AI
              </p>
              <h2
                className="text-white"
                style={{ fontWeight: "600", marginBottom: "1rem" }}
              >
                Discover How MindMeister AI Transforms Complex Text Into Clear,
                Custom Language
              </h2>
              <p
                style={{
                  color: "#ccc",
                  marginBottom: "2rem",
                  fontStyle: "italic",
                }}
              >
                MindMeister AI helps you simplify technical or academic writing
                by adapting it to your voice— all while preserving originality
                and ensuring proper usage rights.
              </p>

              <div className="row g-4">
                {/* Step 1 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#0a58ca",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
            .mindmeister-step1 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color:#87b6f8;
              opacity: 0.6;
            }
          `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Deep Context Analysis
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      MindMeister AI reads between the lines—grasping the full
                      meaning of your input to deliver rewrites that are
                      contextually aware and crystal-clear.
                    </p>
                    <div className="mindmeister-step1">1</div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#0a58ca",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
            .mindmeister-step2 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #87b6f8;
              opacity: 0.6;
            }
          `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Rewrite the Way You Want
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Customize rewrites to suit different tones, styles, or
                      levels of complexity—ideal for professional communication,
                      learning, or publishing.
                    </p>
                    <div className="mindmeister-step2">2</div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#0a58ca",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
            .mindmeister-step3 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color:#87b6f8;
              opacity: 0.6;
            }
          `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Original, Rights-Safe Output
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Every piece of text created by MindMeister AI is original,
                      plagiarism-free, and legally safe to use in any academic
                      or professional setting.
                    </p>
                    <div className="mindmeister-step3">3</div>
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

export default MindMeister;
