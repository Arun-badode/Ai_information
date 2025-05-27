import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deep from "../../../../public/assets/Img/AI for Document/deep.png";
import deepdyveSS1 from '../../../../public/assets/Img/AI for Document/deepdyveSS1.png';
import deepdyveSS2 from '../../../../public/assets/Img/AI for Document/deepdyveSS2.png';


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
const DeepDyveAI = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="DeepDyve AI Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Transform and Customize Content Seamlessly with DeepDyve AI
                </p>
                <h3>Unique, Copyright-Free Rewriting Tailored to Your Needs</h3>
              </div>
              {[
                {
                  icon: "⚙️",
                  title: "Adaptive Content Transformation",
                  desc: "DeepDyve AI reshapes your content according to your objectives—whether simplifying, rewording, or adjusting for various audiences—without copying the original.",
                },
                {
                  icon: "🎯",
                  title: "User-Centric Customization",
                  desc: "Adjust tone, detail, and complexity for academic, business, or casual needs—no technical expertise or writing skills required.",
                },
                {
                  icon: "🌍",
                  title: "Supports Multiple Formats & Languages",
                  desc: "Upload PDFs, DOCX, or plain text files in multiple languages and receive instantly localized paraphrases.",
                },
                {
                  icon: "🛡️",
                  title: "100% Copyright-Free Output",
                  desc: "Every rephrased version is fully original, ensuring you can use the content freely for publishing or sharing.",
                },
                {
                  icon: "🧠",
                  title: "Contextual Clarity",
                  desc: "DeepDyve AI comprehends your content and delivers concise rewrites while preserving the original meaning—ideal for complex or technical materials.",
                },
                {
                  icon: "📖",
                  title: "Perfect for Students & Professionals",
                  desc: "Whether for school reports or professional documents, DeepDyve AI saves time by transforming dense material into easily understandable text.",
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
                  q: "What is DeepDyve AI?",
                  a: "DeepDyve AI is a tool designed to transform content according to user preferences while ensuring 100% copyright-free output, making it ideal for academic, professional, and everyday use.",
                },
                {
                  q: "How does DeepDyve AI work?",
                  a: "DeepDyve AI analyzes your content and adapts it to suit your specific needs, whether for rephrasing, summarizing, or modifying tone, all while ensuring the output is unique and copyright-free.",
                },
                {
                  q: "Is DeepDyve AI content truly copyright-free?",
                  a: "Yes, DeepDyve AI guarantees that all generated content is free from copyright issues, making it safe to reuse without any restrictions.",
                },
                {
                  q: "Can I customize how DeepDyve AI modifies my content?",
                  a: "Absolutely. You can control various aspects, including the tone, complexity, and style, to ensure the output matches your requirements perfectly.",
                },
                {
                  q: "Does DeepDyve AI support large documents?",
                  a: "Yes, DeepDyve AI is optimized to handle large documents and complex content with ease, offering efficient processing.",
                },
                {
                  q: "What formats does DeepDyve AI support?",
                  a: "DeepDyve AI works with a variety of formats, including PDF, DOCX, and plain text files, ensuring versatility in content handling.",
                },
                {
                  q: "Is DeepDyve AI free?",
                  a: "DeepDyve AI offers both free and paid versions, with advanced features and export options available through paid plans.",
                },
                {
                  q: "Can I export my transformed content?",
                  a: "Yes, you can download or copy your modified content in different formats, depending on your subscription and needs.",
                },
                {
                  q: "Is DeepDyve AI good for academic use?",
                  a: "Yes, DeepDyve AI is ideal for academic purposes, including rephrasing research papers, articles, and other scholarly documents, while preserving the original meaning.",
                },
                {
                  q: "Does DeepDyve AI produce plagiarism-free text?",
                  a: "Yes, all rephrased outputs are unique, ensuring no plagiarism and maintaining originality in the content.",
                },
                {
                  q: "Is DeepDyve AI easy to use?",
                  a: "Yes, DeepDyve AI offers an intuitive, user-friendly interface that requires no technical expertise, making it suitable for all users.",
                },
                {
                  q: "Can I change the tone of the transformed content?",
                  a: "Yes, you can customize the tone of the output, whether formal, neutral, or casual, depending on your requirements.",
                },
                {
                  q: "Is DeepDyve AI suitable for business use?",
                  a: "Yes, DeepDyve AI is excellent for rephrasing business reports, emails, presentations, and other professional content.",
                },
                {
                  q: "Does DeepDyve AI store user data?",
                  a: "No, DeepDyve AI processes your content securely without storing or reusing any of the materials you upload.",
                },
                {
                  q: "Does DeepDyve AI work on mobile?",
                  a: "Yes, DeepDyve AI is web-based and fully mobile-friendly, allowing you to use it across different devices with an internet connection.",
                },
                {
                  q: "Can I use DeepDyve AI without technical skills?",
                  a: "Absolutely. DeepDyve AI is designed for ease of use, so no technical knowledge is required to get the best results.",
                },
                {
                  q: "Does DeepDyve AI offer rewriting or just paraphrasing?",
                  a: "DeepDyve AI focuses on content transformation, ensuring that the original ideas are maintained while adapting the structure and language as needed.",
                },
                {
                  q: "Is DeepDyve AI fast?",
                  a: "Yes, DeepDyve AI provides rapid processing, delivering transformed content within seconds for most inputs.",
                },
                {
                  q: "Do I need to install anything?",
                  a: "No, DeepDyve AI is entirely web-based, meaning you don’t need to install any software—simply use it directly in your browser.",
                },
                {
                  q: "Where can I get support for DeepDyve AI?",
                  a: "You can find support and contact customer service through the DeepDyve AI website.",
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
                src={deepdyveSS1}
                alt="deepdyve"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={deepdyveSS2}
                alt="deepdyve"
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
                    Why <strong>DeepDyve AI</strong> Is the Go-To Tool for
                    Effortless, Copyright-Free Content Transformation
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>DeepDyve AI</strong> adapts content based on your
                    needs while ensuring 100% copyright-free output. Whether you
                    need to rephrase an article, summarize a report, or rewrite
                    content for different audiences, here’s why this tool is the
                    smart choice:
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
                      <strong>Adaptive Content:</strong> Automatically adjusts
                      content to suit your needs, whether for professional,
                      academic, or casual purposes.
                    </li>
                    <li className="mb-3">
                      <strong>Copyright-Free Output:</strong> Ensures that all
                      generated content is free from any copyright concerns,
                      making it safe to share or publish.
                    </li>
                    <li className="mb-3">
                      <strong>Highly Customizable:</strong> Tailors paraphrased
                      content to fit various contexts, industries, or content
                      styles.
                    </li>
                    <li className="mb-3">
                      <strong>Quick and Efficient:</strong> Provides fast,
                      accurate results, ensuring high productivity with minimal
                      effort.
                    </li>
                    <li className="mb-3">
                      <strong>Easy to Use:</strong> The interface is simple and
                      user-friendly, allowing quick transformation without
                      unnecessary complexity.
                    </li>
                    <li className="mb-3">
                      <strong>Perfect for Diverse Content:</strong> Works well
                      for everything from technical documents to creative
                      writing, ensuring versatility.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Try <strong>DeepDyve AI</strong> — Transform Content with
                      No Copyright Worries
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
              Why <strong>DeepDyve AI</strong> is an Effective and
              Copyright-Free Tool
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>DeepDyve AI</strong> adapts content based on your input,
              ensuring flexibility while maintaining copyright-free output. It's
              an ideal tool for those seeking dynamic content transformation.
            </p>

            {/* DeepDyve AI Section */}
            <div className="row justify-content-center gap-2 mb-5">
              {/* DeepDyve Pros */}
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
                  ✅ DeepDyve AI - Pros
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Adaptive Content:</strong> Changes content based on
                    your needs, ensuring no copyright issues.
                  </li>
                  <li className="mb-2">
                    <strong>Highly Customizable:</strong> Offers flexible
                    paraphrasing and summarization tailored to various
                    industries.
                  </li>
                  <li className="mb-2">
                    <strong>Speed:</strong> Delivers results quickly, helping
                    users save time in content generation.
                  </li>
                  <li className="mb-2">
                    <strong>Copyright-Free:</strong> All generated content is
                    free from copyright concerns.
                  </li>
                  <li className="mb-2">
                    <strong>Comprehensive Use Cases:</strong> Suitable for
                    business, research, and casual content.
                  </li>
                </ul>
              </div>

              {/* DeepDyve Cons */}
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
                  ⚠️ DeepDyve AI - Cons
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Internet Dependency:</strong> Requires a stable
                    internet connection for optimal performance.
                  </li>
                  <li className="mb-2">
                    <strong>Limited Creative Flexibility:</strong> Less suitable
                    for highly creative writing like novels or storytelling.
                  </li>
                  <li className="mb-2">
                    <strong>May Require Refining:</strong> Outputs might need
                    minor adjustments for tone or clarity.
                  </li>
                  <li className="mb-2">
                    <strong>No Offline Mode:</strong> Lacks the ability to
                    function without an internet connection.
                  </li>
                  <li className="mb-2">
                    <strong>Premium Features:</strong> Some advanced features
                    are locked behind a paywall.
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
              Discover Leading Alternatives to DeepDyve AI for Paraphrasing and
              Content Refinement
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>DeepDyve AI</strong> excels at transforming text
              into unique, original content, several other platforms offer
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
                    <strong>DeepDyve AI</strong>: Specializes in rephrasing and
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
  {/* Image Section - first on mobile, second on desktop */}
  <div className="col-12 col-md-6 order-1 order-md-2 text-center mb-3 mb-md-0">
    <img
      src={deep}
      alt="DeepDyve AI"
      style={{ maxWidth: "100%", height: "300px" }}
    />
  </div>

  {/* Text Section - second on mobile, first on desktop */}
  <div className="col-12 col-md-6 order-2 order-md-1" style={{ paddingRight: "30px" }}>
    <p className="text-primary">Write better, faster</p>
    <h1>DeepDyve AI:</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      DeepDyve is an innovative, AI-powered research platform designed to assist
      academics, researchers, and professionals in accessing a vast collection of
      scientific articles, peer-reviewed journals, and research tools. With its
      advanced AI capabilities, DeepDyve offers unparalleled features like citation
      analysis, full-text access, article rental, and research collaboration. It
      has transformed the landscape of academic research, providing users with a
      seamless experience to explore, manage, and extract insights from extensive
      databases.
    </p>
    <a
    
      href="https://www.deepdyve.com"
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
      Smarter Research Made Simple—DeepDyve AI in Action
    </p>
    <h2
      className="text-white"
      style={{ fontWeight: "600", marginBottom: "1rem" }}
    >
      Discover How DeepDyve AI Transforms Academic Literature Access
    </h2>
    <p
      style={{
        color: "#ccc",
        marginBottom: "2rem",
        fontStyle: "italic",
      }}
    >
      DeepDyve AI streamlines academic research by surfacing relevant papers,
      summarizing key findings, and making full-text discovery fast and easy.
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
            .deepdyve-step1 {
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
            Intelligent Article Discovery
          </h5>
          <p style={{ color: "#fff", margin: 0 }}>
            DeepDyve AI finds the most relevant journal articles by analyzing
            your research queries and preferences across fields.
          </p>
          <div className="deepdyve-step1">1</div>
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
            .deepdyve-step2 {
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
            AI-Powered Summaries
          </h5>
          <p style={{ color: "#fff", margin: 0 }}>
            It summarizes complex papers into key points, saving time and helping
            researchers grasp essential findings without reading the full text.
          </p>
          <div className="deepdyve-step2">2</div>
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
            .deepdyve-step3 {
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
            Full-Text Access & Collaboration
          </h5>
          <p style={{ color: "#fff", margin: 0 }}>
            DeepDyve AI provides seamless access to full-text PDFs and supports
            collaboration tools for organizing and sharing academic insights.
          </p>
          <div className="deepdyve-step3">3</div>
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

export default DeepDyveAI;
