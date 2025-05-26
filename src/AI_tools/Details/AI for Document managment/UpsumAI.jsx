import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import upsum from "../../../../public/assets/Img/AI for Document/upsum.png";
import upsumSS1 from '../../../../public/assets/Img/AI for Document/upsumSS1.png';
import upsumSS2 from '../../../../public/assets/Img/AI for Document/upsumSS2.png';


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
const UpsumAI = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="UpSum.ai Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Speed Up Your Content Consumption with UpSum.ai
                </p>
                <h3>Customizable, Copyright-Free Summaries Tailored to You</h3>
              </div>
              {[
                {
                  icon: "⚡",
                  title: "Instant Summarization",
                  desc: "UpSum.ai quickly condenses long documents, reports, or articles into clear, concise summaries in seconds.",
                },
                {
                  icon: "🛠️",
                  title: "Fully Customizable Content",
                  desc: "Adjust the depth, tone, and style of summaries to suit your personal, academic, or professional needs.",
                },
                {
                  icon: "🌐",
                  title: "Multilingual Support",
                  desc: "UpSum.ai can summarize content in multiple languages, making it accessible globally.",
                },
                {
                  icon: "✅",
                  title: "No Copyright Concerns",
                  desc: "Everything UpSum.ai generates is based on your input, ensuring all summaries are free from copyright issues.",
                },
                {
                  icon: "🧠",
                  title: "AI-Driven Precision",
                  desc: "UpSum.ai leverages cutting-edge AI to deliver clear, meaningful insights from complex content.",
                },
                {
                  icon: "📚",
                  title: "Ideal for Professionals & Researchers",
                  desc: "UpSum.ai is perfect for students, researchers, and professionals who need efficient summaries without missing key details.",
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
                  q: "What is UpSum.ai?",
                  a: "UpSum.ai is an AI-powered summarization tool designed to generate customized, copyright-free summaries based on user input, perfect for academic, business, and casual use.",
                },
                {
                  q: "How does UpSum.ai work?",
                  a: "UpSum.ai uses advanced AI algorithms to generate summaries based on the content you provide. It adapts the summary’s length, tone, and structure according to your needs.",
                },
                {
                  q: "Can UpSum.ai adjust content based on my preferences?",
                  a: "Yes, UpSum.ai allows you to customize summary tone, depth, and length to meet your specific needs, whether you're working on a brief overview or an in-depth analysis.",
                },
                {
                  q: "Is UpSum.ai content free from copyright restrictions?",
                  a: "Yes, all summaries generated by UpSum.ai are original and copyright-free, ensuring you can use and share them without concerns about plagiarism.",
                },
                {
                  q: "Can UpSum.ai summarize large documents?",
                  a: "Yes, UpSum.ai is designed to handle long, complex documents, providing concise and easy-to-read summaries of lengthy texts.",
                },
                {
                  q: "Does UpSum.ai support multiple document formats?",
                  a: "Yes, UpSum.ai supports a wide range of formats, including PDFs, Word documents, and plain text files.",
                },
                {
                  q: "Is UpSum.ai free to use?",
                  a: "UpSum.ai offers a free version with basic features, while a paid subscription unlocks advanced options like unlimited summaries, customizations, and export formats.",
                },
                {
                  q: "Can I export content from UpSum.ai?",
                  a: "Yes, you can export summaries as text files, PDFs, or other formats depending on your subscription plan.",
                },
                {
                  q: "Can I use UpSum.ai for academic purposes?",
                  a: "Absolutely. UpSum.ai is highly suitable for academic purposes, helping students and researchers to quickly digest academic papers, articles, and textbooks.",
                },
                {
                  q: "How accurate are the summaries generated by UpSum.ai?",
                  a: "UpSum.ai provides highly accurate summaries by focusing on key concepts and relevant content while adapting to the context of the input material.",
                },
                {
                  q: "Does UpSum.ai support content rewriting or paraphrasing?",
                  a: "UpSum.ai specializes in summarization and does not focus on paraphrasing or rewriting content, but it generates clear, concise summaries that capture the essence of the original text.",
                },
                {
                  q: "Can I use UpSum.ai without technical expertise?",
                  a: "Yes, UpSum.ai is designed to be user-friendly, making it accessible for users of all technical backgrounds.",
                },
                {
                  q: "What types of content can I summarize with UpSum.ai?",
                  a: "UpSum.ai can summarize a wide variety of content, including academic papers, business reports, articles, and even personal writing.",
                },
                {
                  q: "Is UpSum.ai suitable for professional use?",
                  a: "Yes, UpSum.ai is perfect for professionals who need to summarize technical reports, business documents, or any dense material.",
                },
                {
                  q: "Can I customize the tone of the output in UpSum.ai?",
                  a: "Yes, UpSum.ai allows users to adjust the tone of the summary based on the purpose, whether formal, casual, or technical.",
                },
                {
                  q: "Does UpSum.ai store my content?",
                  a: "UpSum.ai processes your content temporarily for summarization purposes but does not retain or share user data for long-term storage.",
                },
                {
                  q: "Can I collaborate with others on content using UpSum.ai?",
                  a: "UpSum.ai does not offer built-in collaboration features, but you can share exported summaries with others for review or feedback.",
                },
                {
                  q: "Is the content from UpSum.ai plagiarism-free?",
                  a: "Yes, the summaries generated by UpSum.ai are original and plagiarism-free since they are based on the content you provide.",
                },
                {
                  q: "Can I expand content using UpSum.ai?",
                  a: "No, UpSum.ai specializes in summarizing content and does not expand or add additional information beyond the original input.",
                },
                {
                  q: "How fast is UpSum.ai in generating summaries?",
                  a: "UpSum.ai generates summaries quickly, often within seconds, depending on the length and complexity of the content.",
                },
                {
                  q: "Does UpSum.ai require installation?",
                  a: "No installation is required. UpSum.ai is a web-based tool that can be accessed through any modern browser.",
                },
                {
                  q: "What makes UpSum.ai different from other summarization tools?",
                  a: "UpSum.ai is unique for its adaptability and copyright-free output, making it ideal for diverse use cases, from academic research to casual content summarization.",
                },
                {
                  q: "Does UpSum.ai have a mobile version?",
                  a: "UpSum.ai is web-based but fully responsive, meaning it can be accessed from mobile browsers with ease.",
                },
                {
                  q: "Can I use UpSum.ai for business content?",
                  a: "Yes, UpSum.ai is well-suited for summarizing business reports, market analysis, technical documents, and more.",
                },
                {
                  q: "Where can I get support for UpSum.ai?",
                  a: "Support is available through UpSum.ai’s website, including FAQs, help guides, and contact options for direct assistance.",
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
                src={upsumSS1}
                alt="upsum"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={upsumSS2}
                alt="upsum"
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
                    Why <strong>UpSum.ai</strong> is the Go-To Tool for
                    Customizable, Copyright-Free Summarization
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>UpSum.ai</strong> revolutionizes the way you
                    summarize content by delivering adaptive, copyright-free
                    summaries tailored to your specific needs. Whether you're
                    working on academic papers, business reports, or creative
                    writing, here’s why UpSum.ai should be your go-to tool:
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
                      <strong>User-Centric Summaries:</strong> UpSum.ai
                      customizes the summary length, tone, and structure based
                      on your input, whether you're looking for a brief overview
                      or detailed summary.
                    </li>
                    <li className="mb-3">
                      <strong>Highly Adaptable:</strong> Works across a variety
                      of domains, from research papers to blog posts, offering
                      tailored summaries to suit any content.
                    </li>
                    <li className="mb-3">
                      <strong>Copyright-Free Content:</strong> All summaries
                      generated by UpSum.ai are free to use and share without
                      any copyright issues, making it perfect for publishing or
                      personal projects.
                    </li>
                    <li className="mb-3">
                      <strong>Fast and Efficient:</strong> UpSum.ai provides
                      summaries in seconds, saving you valuable time while
                      maintaining the quality of content.
                    </li>
                    <li className="mb-3">
                      <strong>Supports Various Content Types:</strong> Whether
                      it's articles, papers, reports, or essays, UpSum.ai
                      efficiently handles all types of content and produces
                      high-quality summaries.
                    </li>
                    <li className="mb-3">
                      <strong>Flexible Output Options:</strong> Choose from
                      multiple formats and customization options, perfect for
                      academic, professional, or casual use.
                    </li>
                    <li className="mb-3">
                      <strong>Intuitive and Easy to Use:</strong> With a simple
                      interface, UpSum.ai makes summarizing content an easy and
                      hassle-free experience for all users.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Start Using <strong>UpSum.ai</strong> — Smart, Custom
                      Summaries for Every Need
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
              Why <strong>UpSum.ai</strong> is a Dynamic and Copyright-Free AI
              Summarization Tool
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>UpSum.ai</strong> adapts its summaries based on your input
              and preferences, delivering custom, copyright-free content suited
              for academic, business, or casual needs—without compromising
              originality or clarity.
            </p>
            <div className="row justify-content-center gap-2">
              {/* Pros Column */}
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
                <h5 className="text-success text-start mb-4">✅ Pros</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Copyright-Free Content:</strong> All outputs from
                    UpSum.ai are safe to use, share, or publish without
                    copyright concerns.
                  </li>
                  <li className="mb-2">
                    <strong>Adaptive Summarization:</strong> UpSum generates
                    summaries based on the purpose—academic, business, or
                    casual—customizing tone and length.
                  </li>
                  <li className="mb-2">
                    <strong>User-Friendly Interface:</strong> Clean UI makes it
                    easy for users of all levels to input content and get
                    results instantly.
                  </li>
                  <li className="mb-2">
                    <strong>Fast Processing:</strong> Delivers summaries in
                    seconds, improving productivity for students, writers, and
                    marketers.
                  </li>
                  <li className="mb-2">
                    <strong>Supports Diverse Content:</strong> Works with a wide
                    range of formats like essays, articles, blogs, and reports.
                  </li>
                </ul>
              </div>

              {/* Cons Column */}
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
                <h5 className="text-warning text-start mb-4">⚠️ Cons</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Limited Deep Academic Support:</strong> Not
                    specifically optimized for academic structure like citations
                    or references.
                  </li>
                  <li className="mb-2">
                    <strong>Paraphrasing Accuracy May Vary:</strong> While it
                    adapts tone well, deeper semantic rewrites may need manual
                    tweaking.
                  </li>
                  <li className="mb-2">
                    <strong>No Offline Mode:</strong> Requires internet
                    connectivity to function—no desktop version or offline
                    support.
                  </li>
                  <li className="mb-2">
                    <strong>Feature Access May Vary:</strong> Some advanced
                    controls or export options may be behind a paywall or user
                    account.
                  </li>
                  <li className="mb-2">
                    <strong>Minimal Collaboration Tools:</strong> Lacks
                    integrated team features like shared workspaces or comment
                    threads.
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
              Discover Leading Alternatives to Resoomer AI for Summarization and
              Content Refinement
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>Resoomer AI</strong> excels at summarizing and
              refining content, several other platforms offer unique
              capabilities for text analysis, summarization, and rewriting,
              helping creators produce concise, high-quality, and original
              content effortlessly.
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
                    <strong>UpSum.ai</strong>: Offers highly adaptive
                    summarization that changes according to your input, topic,
                    and purpose—whether academic, technical, or casual.
                    Summaries are completely copyright-free, customizable, and
                    safe to reuse in any form.
                  </li>
                  <li className="mb-2">
                    <strong>Resoomer AI</strong>: Specializes in summarizing and
                    refining large bodies of text, ensuring clear and concise
                    content while maintaining the original message. Customize
                    the summaries according to your needs.
                  </li>
                  <li className="mb-2">
                    <strong>SMMRY AI</strong>: Allows users to generate
                    copyright-free summaries with control over the content’s
                    length and focus. SMMRY AI adapts to your preferences,
                    offering flexibility without compromising originality or
                    ownership.
                  </li>
                  <li className="mb-2">
                    <strong>SummarizeBot AI</strong>: An adaptable AI tool that
                    tailors summaries to your exact specifications, providing
                    copyright-free content without losing important context or
                    message. Customize the length, tone, and key points to suit
                    your needs.
                  </li>
                  <li className="mb-2">
                    <strong>Scholarcy</strong>: Designed for academic and
                    technical content, Scholarcy automatically highlights key
                    facts, arguments, and contributions—fully customizable and
                    copyright-free. Ideal for researchers, students, and content
                    reviewers.
                  </li>
                  <li className="mb-2">
                    <strong>QuillBot</strong>: Offers various AI-powered writing
                    enhancements, including paraphrasing and summarization
                    tools, helping users improve the quality of their writing
                    and create clear, concise content.
                  </li>
                  <li className="mb-2">
                    <strong>Text Summarizer</strong>: An online tool that
                    condenses large texts into their most important points,
                    providing an efficient way to summarize content for research
                    or study purposes.
                  </li>
                  <li className="mb-2">
                    <strong>Copy.ai</strong>: An AI-powered writing tool that
                    aids in generating marketing copy, blog posts, and other
                    content, with capabilities for summarizing and refining text
                    for better clarity and engagement.
                  </li>
                  <li className="mb-2">
                    <strong>SummarizeThis</strong>: A simple yet effective AI
                    tool for summarizing text, ensuring users can quickly grasp
                    the essence of any content without reading through entire
                    documents.
                  </li>
                  <li className="mb-2">
                    <strong>TLDR This</strong>: Focuses on creating quick,
                    readable summaries from large articles, papers, and
                    documents, ideal for saving time while still capturing the
                    key points.
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
         <div className="row d-flex align-items-center justify-content-between mb-4">
  {/* Image: Mobile pe pehle, Desktop pe right */}
  <div
    className="col-12 col-md-6 order-1 order-md-2 text-center mb-3 mb-md-0"
    style={{ height: "250px" }}
  >
    <img
      src={upsum}
      alt="UpSum.ai"
      style={{ maxWidth: "100%", height: "300px" }}
    />
  </div>

  {/* Text: Mobile pe second, Desktop pe left */}
  <div
    className="col-12 col-md-6 order-2 order-md-1"
    style={{ paddingRight: "30px" }}
  >
    <p className="text-primary">Write better, faster</p>
    <h1>UpSum.ai:</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      UpSum.ai is an AI summarization tool designed to streamline the
      process of summarizing lengthy articles, research papers,
      content, and more. Using advanced text summarization AI,
      UpSum.ai is an automatic summarizer that efficiently distills
      the key points of any text, making it easier to consume and
      understand.
    </p>

    <a
      href="https://www.upsum.io"
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
      Simplify Content Summarization—UpSum.ai in Action
    </p>
    <h2
      className="text-white"
      style={{ fontWeight: "600", marginBottom: "1rem" }}
    >
      Discover How UpSum.ai Turns Lengthy Text into Concise Summaries
    </h2>
    <p
      style={{
        color: "#ccc",
        marginBottom: "2rem",
        fontStyle: "italic",
      }}
    >
      UpSum.ai uses AI-powered summarization to help users quickly grasp key information from articles, reports, and documents.
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
            .upsum-step1 {
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
            Intelligent Text Analysis
          </h5>
          <p style={{ color: "#fff", margin: 0 }}>
            UpSum.ai scans and understands lengthy content, identifying key points and essential details.
          </p>
          <div className="upsum-step1">1</div>
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
            .upsum-step2 {
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
            Generates Concise Summaries
          </h5>
          <p style={{ color: "#fff", margin: 0 }}>
            Produces clear, concise summaries that capture the main ideas without losing context.
          </p>
          <div className="upsum-step2">2</div>
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
            .upsum-step3 {
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
            Saves Time and Effort
          </h5>
          <p style={{ color: "#fff", margin: 0 }}>
            Helps users quickly review large volumes of text, improving productivity and decision-making.
          </p>
          <div className="upsum-step3">3</div>
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

export default UpsumAI;
