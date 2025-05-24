import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import simplemindSS1 from '../../../../public/assets/Img/Ai for Mind Mapping/simplemindSS1.png';
import simplemindSS2 from '../../../../public/assets/Img/Ai for Mind Mapping/simplemindSS2.png';
import simplemindImg from '../../../../public/assets/Img/Ai for Mind Mapping/8.png';

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
const SimpleMind = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="SimpleMind AI Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Effortlessly Optimize and Personalize Your Content with
                  SimpleMind AI
                </p>
                <h3>
                  Flexible, Intelligent Content Enhancement for Every Need
                </h3>
              </div>
              {[
                {
                  icon: "🔧",
                  title: "Intelligent Content Refinement",
                  desc: "SimpleMind AI enhances your content for clarity, structure, and tone, ensuring your ideas are communicated effectively.",
                },
                {
                  icon: "🖋️",
                  title: "Customizable Writing Style",
                  desc: "Adjust the tone, voice, and complexity of your content to fit professional, casual, or creative contexts.",
                },
                {
                  icon: "📄",
                  title: "Comprehensive Format and Language Compatibility",
                  desc: "Supports various file formats (DOCX, PDF, TXT) and refines content in multiple languages for diverse needs.",
                },
                {
                  icon: "💎",
                  title: "Original, Plagiarism-Free Content",
                  desc: "Rest assured that every piece of content generated is completely unique and free of plagiarism.",
                },
                {
                  icon: "🎯",
                  title: "Context-Aware Enhancement",
                  desc: "Tailors content to match its context, making it more concise, engaging, and suited to your specific goals.",
                },
                {
                  icon: "📝",
                  title: "Versatile Across Content Types",
                  desc: "Perfect for transforming anything from professional reports to creative writing into polished, readable content.",
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
                  q: "What is SimpleMind AI?",
                  a: "SimpleMind AI is an innovative platform designed to elevate content quality effortlessly, offering smart enhancements that cater to professional, academic, and personal writing projects.",
                },
                {
                  q: "How does SimpleMind AI work?",
                  a: "SimpleMind AI utilizes advanced algorithms to analyze your content, improving tone, structure, and readability while maintaining the original message and context.",
                },
                {
                  q: "Is the content from SimpleMind AI free of copyright issues?",
                  a: "Yes, SimpleMind AI ensures all generated content is original and free from copyright concerns, providing you with safe-to-use materials.",
                },
                {
                  q: "Can I customize how SimpleMind AI edits my content?",
                  a: "Absolutely! You can adjust the tone, style, and complexity of your content to align with your needs, whether for reports, emails, or creative writing.",
                },
                {
                  q: "Can SimpleMind AI handle large documents?",
                  a: "Yes, SimpleMind AI is optimized for processing large documents efficiently, making it ideal for lengthy reports, research papers, and comprehensive content.",
                },
                {
                  q: "What file formats are supported by SimpleMind AI?",
                  a: "SimpleMind AI supports various file formats such as DOCX, PDF, TXT, and more, ensuring seamless content editing and enhancement.",
                },
                {
                  q: "Is SimpleMind AI free to use?",
                  a: "SimpleMind AI offers a free version with core features, alongside a premium version that unlocks advanced customization options and extra tools for greater flexibility.",
                },
                {
                  q: "Can I export my content after editing it?",
                  a: "Yes, SimpleMind AI allows you to export your refined content in the desired format, based on your subscription plan.",
                },
                {
                  q: "Is SimpleMind AI suitable for students?",
                  a: "Yes, students can benefit from SimpleMind AI by refining essays, summarizing study materials, and enhancing their academic writing with ease.",
                },
                {
                  q: "Does SimpleMind AI ensure plagiarism-free output?",
                  a: "Yes, all content produced by SimpleMind AI is guaranteed to be original and free from plagiarism, ensuring its authenticity.",
                },
                {
                  q: "Is SimpleMind AI user-friendly?",
                  a: "Yes, SimpleMind AI is designed to be intuitive and easy to use, making it accessible to users of all experience levels.",
                },
                {
                  q: "Can I set a specific tone for my content?",
                  a: "Yes, SimpleMind AI allows you to choose from a variety of tones, including formal, casual, professional, and conversational styles to match your content's purpose.",
                },
                {
                  q: "Can businesses use SimpleMind AI?",
                  a: "Definitely! SimpleMind AI is a great tool for businesses to quickly generate high-quality reports, marketing materials, emails, and proposals.",
                },
                {
                  q: "Does SimpleMind AI store my text or files?",
                  a: "No, SimpleMind AI values your privacy and does not retain any content after processing. All data is securely handled and not stored.",
                },
                {
                  q: "Can I access SimpleMind AI from my mobile device?",
                  a: "Yes, SimpleMind AI is fully responsive and accessible from any mobile device with internet access, providing flexibility and convenience.",
                },
                {
                  q: "Is technical knowledge required to use SimpleMind AI?",
                  a: "No, SimpleMind AI is built to be user-friendly, requiring no technical expertise, so anyone can use it effectively.",
                },
                {
                  q: "Does SimpleMind AI only paraphrase content?",
                  a: "No, SimpleMind AI goes beyond paraphrasing by improving the structure, flow, and clarity of content, while maintaining its original meaning.",
                },
                {
                  q: "How quickly does SimpleMind AI rewrite content?",
                  a: "SimpleMind AI works at lightning speed, refining your content in just a few seconds for quick, efficient results.",
                },
                {
                  q: "Do I need to install anything to use SimpleMind AI?",
                  a: "No installation required! SimpleMind AI is fully cloud-based and can be accessed through any web browser, ensuring a hassle-free experience.",
                },
                {
                  q: "Where can I get support for SimpleMind AI?",
                  a: "You can reach our support team via the help center or contact form on the SimpleMind AI website for any assistance or inquiries.",
                },
                {
                  q: "Can SimpleMind AI be used for creative writing?",
                  a: "Yes, SimpleMind AI is ideal for creative writing, whether you need help brainstorming ideas, drafting stories, or refining articles while staying true to your creative direction.",
                },
                {
                  q: "Can I use SimpleMind AI to summarize long texts?",
                  a: "Yes, SimpleMind AI can summarize lengthy content into concise, easy-to-read summaries while retaining the key information and essence.",
                },
                {
                  q: "Is SimpleMind AI useful for content marketers?",
                  a: "Absolutely! Content marketers can leverage SimpleMind AI to craft engaging copy, social media posts, ads, and more, ensuring their content is compelling and resonates with the target audience.",
                },
                {
                  q: "How secure is SimpleMind AI?",
                  a: "SimpleMind AI takes security seriously, ensuring that all content is processed securely with strong data protection measures in place.",
                },
                {
                  q: "Can SimpleMind AI handle multilingual content?",
                  a: "Yes, SimpleMind AI can process content in multiple languages, making it a versatile tool for international projects and diverse audiences.",
                },
                {
                  q: "Does SimpleMind AI offer any integrations with other tools?",
                  a: "Yes, SimpleMind AI integrates with popular content management systems and productivity tools, streamlining workflows and boosting productivity.",
                },
                {
                  q: "Is SimpleMind AI suitable for eCommerce content?",
                  a: "Yes, SimpleMind AI is perfect for refining eCommerce content, including product descriptions, customer reviews, and promotional materials.",
                },
                {
                  q: "Can SimpleMind AI help with SEO content?",
                  a: "Yes, SimpleMind AI can optimize content for SEO, helping it rank higher in search engines while maintaining engagement with your target audience.",
                },
                {
                  q: "Can I adjust the complexity of my content with SimpleMind AI?",
                  a: "Yes, SimpleMind AI allows you to adjust content complexity, whether you want it simplified for a broad audience or made more technical for an expert level.",
                },
                {
                  q: "Can I use SimpleMind AI for content rephrasing in legal documents?",
                  a: "While SimpleMind AI can help with general content editing, we recommend consulting legal professionals for documents requiring precise legal language.",
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
                src={simplemindSS1}

                alt="simplemind"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img

                src={simplemindSS2}

                alt="simplemind"
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
                    Why <strong>SimpleMind AI</strong> is the Perfect Solution
                    for Effortless Content Improvement and Enhancement
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>SimpleMind AI</strong> transforms the way content is
                    refined, offering an efficient and creative approach to
                    enhancing various types of written material. Whether you’re
                    polishing a report, composing a professional email, or
                    refining a blog post, here’s why SimpleMind AI is the
                    ultimate tool for content optimization:
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
                      <strong>Quick and Effective Refinement:</strong> Enhance
                      your content swiftly without losing the essence of your
                      message—achieving polished results in just moments.
                    </li>
                    <li className="mb-3">
                      <strong>100% Original and Custom Content:</strong>{" "}
                      Generates unique, plagiarism-free material, perfect for
                      various applications, from blogs to professional
                      documentation.
                    </li>
                    <li className="mb-3">
                      <strong>Customizable Writing Style:</strong> Adjusts the
                      tone to suit any need—be it formal, casual, persuasive, or
                      technical—SimpleMind AI tailors your content perfectly.
                    </li>
                    <li className="mb-3">
                      <strong>Fast and Reliable Output:</strong> Provides
                      consistent and quick content refinement, ensuring
                      high-quality results to meet tight deadlines.
                    </li>
                    <li className="mb-3">
                      <strong>User-Friendly Interface:</strong> With an
                      intuitive and easy-to-use design, SimpleMind AI makes
                      content enhancement accessible for all levels of
                      experience.
                    </li>
                    <li className="mb-3">
                      <strong>Highly Versatile Tool:</strong> Ideal for various
                      content formats, including emails, academic papers,
                      marketing materials, and creative writing projects.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Try <strong>SimpleMind AI</strong> — Unlock Effortless and
                      Creative Content Enhancement Today
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
              Why <strong>SimpleMind AI</strong> is a Powerful and Innovative
              Tool for Content Enhancement
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>SimpleMind AI</strong> revolutionizes content creation by
              streamlining complex ideas, improving clarity, and ensuring
              originality with minimal effort.
            </p>

            {/* SimpleMind AI Section */}
            <div className="row justify-content-center gap-2 mb-5">
              {/* SimpleMind AI Pros */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #28a745",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#2c353f",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-success text-start mb-4">
                  ✅ SimpleMind AI - Pros
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Flexible Writing Styles:</strong> Adjusts writing
                    tone to suit any context, whether formal, casual, or
                    technical, offering tailored content for various audiences.
                  </li>
                  <li className="mb-2">
                    <strong>High-Quality, Original Output:</strong> Ensures all
                    content is unique, maintaining both originality and clarity
                    without compromising structure.
                  </li>
                  <li className="mb-2">
                    <strong>Swift Content Refinement:</strong> Enhances content
                    quickly, making it more organized and easy to digest in real
                    time without sacrificing quality.
                  </li>
                  <li className="mb-2">
                    <strong>Context-Aware Adjustments:</strong> Retains the
                    original meaning of the content while enhancing its
                    presentation, making it more engaging and reader-friendly.
                  </li>
                  <li className="mb-2">
                    <strong>Wide Compatibility:</strong> Ideal for a wide range
                    of content, from blog posts and academic papers to business
                    reports and professional emails.
                  </li>
                </ul>
              </div>

              {/* SimpleMind AI Cons */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #28a745",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#2c353f",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-warning text-start mb-4">
                  ⚠️ SimpleMind AI - Cons
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Requires Stable Internet:</strong> As an online
                    tool, SimpleMind AI relies on internet connectivity,
                    limiting its use in offline or low-connectivity
                    environments.
                  </li>
                  <li className="mb-2">
                    <strong>Not Ideal for Creative Fiction:</strong> While
                    effective for academic, technical, and business writing,
                    SimpleMind AI may not suit creative writing or
                    narrative-heavy tasks.
                  </li>
                  <li className="mb-2">
                    <strong>Risk of Over-Simplification:</strong> For highly
                    detailed or complex topics, the tool may simplify content to
                    the point of losing critical information or nuance.
                  </li>
                  <li className="mb-2">
                    <strong>Manual Citation Handling:</strong> SimpleMind AI
                    doesn’t generate citations or references, so users will need
                    to manage these elements separately.
                  </li>
                  <li className="mb-2">
                    <strong>Advanced Features Locked Behind Paywall:</strong>{" "}
                    Certain advanced features, like batch content editing and
                    personalized tone adjustments, are only available in the
                    premium version.
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
              Discover the Best Alternatives to SimpleMind AI for Effortless
              Content Simplification
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>SimpleMind AI</strong> excels at transforming
              complex concepts into clear, concise, and readable content, there
              are several other tools that provide unique features for content
              clarification, paraphrasing, and summarization.
            </p>
            <div className="row justify-content-center gap-2">
              <div
                className="col-lg-8 col-md-8 col-sm-12"
                style={{
                  border: "1px solid #0062cc",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#2c353f",
                  minHeight: "100%",
                }}
              >
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>SimpleMind AI</strong>: Specializes in simplifying
                    complex information, breaking it down into clear and
                    digestible content while retaining its core meaning.
                  </li>
                  <li className="mb-2">
                    <strong>ClarityPro</strong>: Focuses on making dense,
                    jargon-heavy content more accessible by converting it into
                    straightforward and clear language suitable for a wide
                    audience.
                  </li>
                  <li className="mb-2">
                    <strong>ClearWrite</strong>: Tailored for educational
                    content, ClearWrite refines complex academic texts and
                    research papers, making them more approachable without
                    losing the technical depth.
                  </li>
                  <li className="mb-2">
                    <strong>ConciseText</strong>: A summarization tool designed
                    to condense lengthy documents and articles into bite-sized
                    summaries, highlighting the key points without unnecessary
                    details.
                  </li>
                  <li className="mb-2">
                    <strong>WriteAdjust</strong>: Offers the ability to modify
                    the tone and style of writing to fit any purpose—be it
                    formal, casual, or technical—ensuring the content matches
                    the target audience.
                  </li>
                  <li className="mb-2">
                    <strong>Brandify</strong>: Ideal for marketers, Brandify
                    helps customize content to align with brand voice and
                    identity, ensuring consistent and engaging messaging across
                    platforms.
                  </li>
                  <li className="mb-2">
                    <strong>Shortify</strong>: Specializes in reducing large
                    documents or reports to their essence, creating shorter,
                    more concise versions while preserving the essential
                    information.
                  </li>
                  <li className="mb-2">
                    <strong>FlexWrite</strong>: A versatile tool for adjusting
                    writing complexity, style, and creativity, providing users
                    with the ability to fully control the tone and structure of
                    their content.
                  </li>
                  <li className="mb-2">
                    <strong>DocSimplify</strong>: Perfect for simplifying legal
                    and technical documents, DocSimplify ensures that even the
                    most specialized content remains accessible to a broader
                    audience without losing accuracy.
                  </li>
                  <li className="mb-2">
                    <strong>SwiftWrite</strong>: Known for its rapid
                    summarization capabilities, SwiftWrite condenses large
                    blocks of text into easy-to-read summaries, perfect for
                    quick content digestion.
                  </li>
                  <li className="mb-2">
                    <strong>StreamlineWrite</strong>: This tool enhances content
                    flow and readability, making it perfect for improving
                    business communications, reports, and creative writing
                    projects.
                  </li>
                  <li className="mb-2">
                    <strong>PrecisionEditor</strong>: Designed for
                    professionals, PrecisionEditor refines intricate technical
                    content, ensuring clarity and precision without sacrificing
                    technical accuracy.
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
  {/* Image First on Mobile, Right Side on Desktop */}
  <div className="col-12 col-md-6 order-1 order-md-2 mb-3 mb-md-0 text-center">
    <img
      src={simplemindImg}
      alt="SimpleMind AI"
      style={{ width: "100%", height: "300px", objectFit: "cover" }}
    />
  </div>

  {/* Text Second on Mobile, Left Side on Desktop */}
  <div className="col-12 col-md-6 order-2 order-md-1" style={{ paddingRight: "30px" }}>
    <p className="text-primary">Write better, faster</p>
    <h1>SimpleMind AI:</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      SimpleMind AI is a powerful and versatile mind mapping tool
      designed to help users organize ideas, prioritize tasks, and
      manage projects visually. By integrating artificial
      intelligence, SimpleMind AI enables individuals and teams to
      enhance productivity, improve decision-making, and streamline
      task management. This intuitive platform is ideal for creative
      professionals, business planners, and project managers who need
      to structure complex ideas and workflows. Whether you're
      brainstorming new ideas, planning a project, or managing tasks,
      SimpleMind AI offers all the necessary tools to turn concepts
      into actionable tasks.
    </p>
    <a
      href="https://simplemind.eu/"
      rel="noopener noreferrer"
      className="btn btn-primary me-2"
    >
      Explore Tool
    </a>
  </div>
</div>


          <section style={{ backgroundColor: "#3a4a62", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">
                Harness the Power of Simplicity—Transform Complex Ideas with
                SimpleMind AI
              </p>
              <h2
                className="text-white"
                style={{ fontWeight: "600", marginBottom: "1rem" }}
              >
                Discover How SimpleMind AI Converts Complicated Concepts into
                Clear, Concise Content
              </h2>
              <p
                style={{
                  color: "#ccc",
                  marginBottom: "2rem",
                  fontStyle: "italic",
                }}
              >
                SimpleMind AI simplifies complex information into digestible and
                clear content, ensuring your message is straightforward,
                impactful, and 100% original.
              </p>

              <div className="row g-4">
                {/* Step 1 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#1e72d5",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
            .simplemind-step1 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #d1e5f1;
              opacity: 0.6;
            }
          `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Comprehensive Content Breakdown
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      SimpleMind AI carefully analyzes your content, extracting
                      essential ideas and simplifying complex jargon for better
                      understanding and clarity.
                    </p>
                    <div className="simplemind-step1">1</div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#1e72d5",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
            .simplemind-step2 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #d1e5f1;
              opacity: 0.6;
            }
          `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Tailored Content Customization
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Adjust the tone, voice, and structure of your content to
                      match specific needs, whether it’s formal, conversational,
                      or creative.
                    </p>
                    <div className="simplemind-step2">2</div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#1e72d5",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
            .simplemind-step3 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #d1e5f1;
              opacity: 0.6;
            }
          `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Ready-to-Use, Plagiarism-Free Content
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Every content piece generated by SimpleMind AI is 100%
                      original and free from plagiarism, ensuring it's ready to
                      be used right away.
                    </p>
                    <div className="simplemind-step3">3</div>
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

export default SimpleMind;
