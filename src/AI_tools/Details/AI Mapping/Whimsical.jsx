import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import whimsicalSS1 from '../../../../public/assets/Img/Ai for Mind Mapping/whimsicalSS1.png';
import whimsicalSS2 from '../../../../public/assets/Img/Ai for Mind Mapping/whimsicalSS2.png';
import whimsicalImg from '../../../../public/assets/Img/Ai for Mind Mapping/3.png';

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
const Whimsica = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="Whimsical AI Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Seamlessly Transform and Personalize Your Content with
                  Whimsical AI
                </p>
                <h3>
                  Advanced, Unique Rewriting Engine Designed to Meet Your
                  Content Needs
                </h3>
              </div>
              {[
                {
                  icon: "🔄",
                  title: "Smart Content Rewriting",
                  desc: "Whimsical AI intelligently rewords and rephrases your text, whether it’s for simplicity, reorganization, or tailoring to different audiences.",
                },
                {
                  icon: "🎨",
                  title: "Customizable Writing Styles",
                  desc: "Adapt your content to any tone, complexity, or format you need—whether formal, casual, technical, or creative—with no advanced skills required.",
                },
                {
                  icon: "🌐",
                  title: "Cross-Format & Language Support",
                  desc: "Works seamlessly with file types like DOCX, PDF, and plain text, supporting multiple languages and ensuring contextually accurate results.",
                },
                {
                  icon: "✅",
                  title: "100% Original Content",
                  desc: "Each output is freshly generated, fully unique, and free from any copyright concerns, ensuring your content is ready to publish.",
                },
                {
                  icon: "🧩",
                  title: "Contextually Accurate Rewriting",
                  desc: "Whimsical AI preserves the core meaning of your content while enhancing clarity, making it more accessible and easier to understand.",
                },
                {
                  icon: "📚",
                  title: "Perfect for Both Learners and Professionals",
                  desc: "Whether for academic papers or business reports, turn complex content into clear, concise, and readable versions in moments.",
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
                  q: "What is Whimsical AI?",
                  a: "Whimsical AI is a cutting-edge platform designed to transform, simplify, and enhance your content while ensuring originality, making it ideal for both personal and professional use.",
                },
                {
                  q: "How does Whimsical AI work?",
                  a: "Whimsical AI analyzes your input text, then modifies it based on your preferences—whether by adjusting tone, summarizing key points, or rewording entire sections, all while keeping it fresh and compliant.",
                },
                {
                  q: "Is the content from Whimsical AI free of copyright issues?",
                  a: "Yes, all content generated by Whimsical AI is 100% original, so you can use it without concerns about copyright infringement.",
                },
                {
                  q: "Can I customize how Whimsical AI edits my content?",
                  a: "Absolutely. You can fine-tune aspects like tone, complexity, and writing style to meet your specific goals and audience needs.",
                },
                {
                  q: "Can Whimsical AI handle large documents?",
                  a: "Yes, Whimsical AI is built to process long-form content efficiently, making it perfect for handling complex papers or articles.",
                },
                {
                  q: "What file formats are supported by Whimsical AI?",
                  a: "Whimsical AI works with a variety of file types, including DOCX, PDF, TXT, and others, ensuring compatibility with your content.",
                },
                {
                  q: "Is Whimsical AI free to use?",
                  a: "Whimsical AI offers both a free and premium version. The free version includes basic tools, while the premium version unlocks advanced features and customization options.",
                },
                {
                  q: "Can I export my content after editing it?",
                  a: "Yes, you can easily download or copy your rewritten content in your preferred format, based on the subscription level you have.",
                },
                {
                  q: "Is Whimsical AI suitable for students?",
                  a: "Yes, students can benefit greatly from Whimsical AI, especially for rewriting essays, summarizing academic articles, and improving scholarly writing.",
                },
                {
                  q: "Does Whimsical AI ensure plagiarism-free output?",
                  a: "Definitely. Every piece of rewritten content is 100% original, eliminating the risk of plagiarism.",
                },
                {
                  q: "Is Whimsical AI user-friendly?",
                  a: "Yes, the platform is designed with simplicity in mind, making it easy for anyone—regardless of their technical expertise—to use.",
                },
                {
                  q: "Can I set a specific tone for my content?",
                  a: "Yes, Whimsical AI allows you to choose from a variety of tones, such as formal, casual, academic, or conversational, depending on your needs.",
                },
                {
                  q: "Can businesses use Whimsical AI?",
                  a: "Absolutely. Whimsical AI is perfect for businesses needing to rewrite proposals, emails, reports, and marketing materials in a polished and professional tone.",
                },
                {
                  q: "Does Whimsical AI store my text or files?",
                  a: "No, Whimsical AI ensures privacy by processing your content without storing any data after use.",
                },
                {
                  q: "Can I access Whimsical AI from my mobile device?",
                  a: "Yes, the platform is fully responsive, allowing you to use it on any device with internet access.",
                },
                {
                  q: "Is technical knowledge required to use Whimsical AI?",
                  a: "No, the interface is straightforward and designed for ease of use, so you don’t need any technical skills.",
                },
                {
                  q: "Does Whimsical AI only paraphrase content?",
                  a: "No, Whimsical AI can both paraphrase and fully restructure content to improve clarity and coherence while retaining the original meaning.",
                },
                {
                  q: "How quickly does Whimsical AI rewrite content?",
                  a: "Whimsical AI works at lightning speed, with most content revisions completed in just a few seconds.",
                },
                {
                  q: "Do I need to install anything to use Whimsical AI?",
                  a: "No installation is required. Whimsical AI operates entirely in your browser, so you can access it anytime from any device.",
                },
                {
                  q: "Where can I get support for Whimsical AI?",
                  a: "You can reach out to our support team through the help center or contact form available on the Whimsical AI website.",
                },
                {
                  q: "Can Whimsical AI be used for creative writing?",
                  a: "Yes, while Whimsical AI is great for professional and academic writing, it can also be helpful for rewording creative texts like blog posts and articles.",
                },
                {
                  q: "Can I use Whimsical AI to summarize long texts?",
                  a: "Yes, Whimsical AI is highly effective at summarizing lengthy content while preserving key ideas and essential points.",
                },
                {
                  q: "Is Whimsical AI useful for content marketers?",
                  a: "Yes, content marketers can leverage Whimsical AI to quickly create unique versions of marketing content, social media posts, and advertisements.",
                },
                {
                  q: "How secure is Whimsical AI?",
                  a: "Whimsical AI takes security seriously, ensuring that all content processing is done securely, and your data is never exposed.",
                },
                {
                  q: "Can Whimsical AI handle multilingual content?",
                  a: "Yes, Whimsical AI can rewrite and simplify content in multiple languages, making it an excellent choice for international content creation.",
                },
                {
                  q: "Does Whimsical AI offer any integrations with other tools?",
                  a: "Whimsical AI is integrated with several popular content management and document processing tools to streamline your workflow.",
                },
                {
                  q: "Is Whimsical AI suitable for eCommerce content?",
                  a: "Yes, it’s great for rewriting product descriptions, reviews, and other eCommerce content to keep it fresh and engaging.",
                },
                {
                  q: "Can Whimsical AI help with SEO content?",
                  a: "Absolutely. Whimsical AI can help generate SEO-friendly content that’s optimized for search engines while maintaining readability.",
                },
                {
                  q: "Can I adjust the complexity of my content with Whimsical AI?",
                  a: "Yes, you can modify the complexity of the output, making it simpler or more advanced based on your audience.",
                },
                {
                  q: "Can I use Whimsical AI for content rephrasing in legal documents?",
                  a: "While Whimsical AI is great for general content rewriting, legal documents may require professional legal expertise for precision.",
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


                src={whimsicalSS1}

                alt="whimsical"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img

                src={whimsicalSS2}

                alt="whimsical"
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
                    Why <strong>Whimsical AI</strong> Is the Go-To Choice for
                    Quick, Clear, and Original Content Transformation
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>Whimsical AI</strong> makes rewording, simplifying,
                    and personalizing content easy and worry-free. Whether
                    you're updating web copy, breaking down technical documents,
                    or adjusting tone for different readers, here’s why
                    Whimsical AI stands out:
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
                      <strong>Intelligent Text Transformation:</strong>{" "}
                      Refreshes your existing content with clarity and
                      originality, tailored to your goals.
                    </li>
                    <li className="mb-3">
                      <strong>No Copyright Headaches:</strong> Creates clean,
                      unique outputs that are safe for professional and public
                      use.
                    </li>
                    <li className="mb-3">
                      <strong>Custom Tone Matching:</strong> Effortlessly aligns
                      with formal, casual, academic, or promotional styles.
                    </li>
                    <li className="mb-3">
                      <strong>Lightning-Fast Results:</strong> Saves time by
                      generating polished versions of your text in a flash.
                    </li>
                    <li className="mb-3">
                      <strong>Beginner-Friendly Interface:</strong> Simple
                      design that makes rewriting accessible—even for non-tech
                      users.
                    </li>
                    <li className="mb-3">
                      <strong>Perfect for Many Scenarios:</strong> Ideal for
                      editing emails, product descriptions, blogs, internal
                      docs, and more.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Try <strong>Whimsical AI</strong> — Write Better, Faster,
                      and Freely
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
              What Makes <strong>Whimsical AI</strong> a Trusted and
              Refreshingly Creative Writing Companion
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>Whimsical AI</strong> transforms your thoughts into
              well-crafted text—offering clarity, originality, and effortless
              rephrasing with no copyright concerns.
            </p>

            {/* Whimsical AI Section */}
            <div className="row justify-content-center gap-2 mb-5">
              {/* Whimsical AI Pros */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #5f9ea0",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-success text-start mb-4">
                  ✅ Whimsical AI - Pros
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Style-Flexible Rewriting:</strong> Reframes your
                    content in formal, casual, or creative tones with ease.
                  </li>
                  <li className="mb-2">
                    <strong>Authentic & Original Output:</strong> Generates
                    fresh, plagiarism-free text every time.
                  </li>
                  <li className="mb-2">
                    <strong>Real-Time Suggestions:</strong> Instant feedback for
                    smoother phrasing and clearer structure.
                  </li>
                  <li className="mb-2">
                    <strong>Meaning-Preserving Engine:</strong> Keeps your
                    original message intact while enhancing readability.
                  </li>
                  <li className="mb-2">
                    <strong>Useful for All Contexts:</strong> Ideal for emails,
                    blogs, reports, presentations, and more.
                  </li>
                </ul>
              </div>

              {/* Whimsical AI Cons */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #5f9ea0",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-warning text-start mb-4">
                  ⚠️ Whimsical AI - Cons
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Requires Online Access:</strong> Not usable when
                    offline or during low-connectivity periods.
                  </li>
                  <li className="mb-2">
                    <strong>Not Built for Fiction:</strong> Best suited for
                    factual or professional rewriting, not imaginative
                    storytelling.
                  </li>
                  <li className="mb-2">
                    <strong>Sometimes Over-Simplifies:</strong> May reduce depth
                    in highly technical or academic content.
                  </li>
                  <li className="mb-2">
                    <strong>No Source Citation:</strong> Doesn’t cite
                    references—users must fact-check academic rewrites.
                  </li>
                  <li className="mb-2">
                    <strong>Premium Perks Locked:</strong> Some powerful
                    features like batch rewriting require a paid version.
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
              Discover Popular Alternatives to Whimsical AI for Smarter Text
              Transformation
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>Whimsical AI</strong> offers intuitive and
              intelligent rewriting features, several other tools also stand out
              in the realm of content optimization—each bringing their own
              strengths in simplifying, rewording, and summarizing content
              across different domains.
            </p>
            <div className="row justify-content-center gap-2">
              <div
                className="col-lg-8 col-md-8 col-sm-12"
                style={{
                  border: "1px solid #6c5ce7",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Whimsical AI</strong>: Streamlines your writing with
                    intelligent rewording and tone adjustment, ensuring your
                    message is clear, concise, and personalized.
                  </li>
                  <li className="mb-2">
                    <strong>ClearText AI</strong>: Ideal for simplifying complex
                    text, it helps convert jargon-heavy material into
                    understandable content for wider audiences.
                  </li>
                  <li className="mb-2">
                    <strong>SharpWrite</strong>: Focused on academic and
                    professional content, it sharpens your arguments and
                    improves sentence flow.
                  </li>
                  <li className="mb-2">
                    <strong>BriefBot</strong>: Perfect for quick summaries, it
                    condenses long paragraphs into compact, insightful
                    overviews.
                  </li>
                  <li className="mb-2">
                    <strong>Rephrasely</strong>: Offers multiple rewriting
                    modes—from casual to formal—suiting different writing goals
                    or audience types.
                  </li>
                  <li className="mb-2">
                    <strong>Scribe AI</strong>: Built for content creators, it
                    polishes ideas, rewrites headlines, and adapts tones to
                    match brand voices.
                  </li>
                  <li className="mb-2">
                    <strong>ConciseMind</strong>: Balances brevity with clarity,
                    ideal for crafting executive summaries or simplifying
                    reports.
                  </li>
                  <li className="mb-2">
                    <strong>LexiRefine</strong>: Helps ESL writers rewrite
                    sentences fluently while maintaining original intent.
                  </li>
                  <li className="mb-2">
                    <strong>NoteFold</strong>: Designed for students, this tool
                    restructures lecture notes or articles into easy-to-follow
                    formats.
                  </li>
                  <li className="mb-2">
                    <strong>Summify Now</strong>: Instantly shortens online
                    articles and papers into bite-sized explanations.
                  </li>
                  <li className="mb-2">
                    <strong>RewriteMate</strong>: A flexible rewriter that gives
                    users control over complexity, creativity, and sentence
                    structure.
                  </li>
                  <li className="mb-2">
                    <strong>ThinkSimplify</strong>: Breaks down technical or
                    legal documents into simpler language for better
                    accessibility.
                  </li>
                  <li className="mb-2">
                    <strong>InsightWriter</strong>: Ideal for researchers, it
                    rewrites findings or arguments with clarity and academic
                    tone intact.
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
      src={whimsicalImg}
      alt="Whimsical AI"
      style={{ width: "100%", height: "300px", objectFit: "cover" }}
    />
  </div>

  {/* Text Section - Mobile me baad me dikhayega */}
  <div className="col-12 col-md-6 order-2 order-md-1" style={{ paddingRight: "30px" }}>
    <p className="text-primary">Write better, faster</p>
    <h1>Whimsical AI:</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      Whimsical AI is a cutting-edge tool designed for creative teams,
      businesses, and individuals who want to organize ideas,
      collaborate effectively, and streamline workflows. Combining the
      power of mind mapping, wireframing, flowchart creation, and
      AI-driven task automation, Whimsical AI helps teams visualize
      projects, manage tasks, and improve overall productivity. It’s a
      go-to solution for brainstorming, project management, and
      creating visual representations of complex ideas.
    </p>
    <a
      href="https://whimsical.com/ai"
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
                Precision-Powered Rewriting Crafted by Whimsical AI
              </p>
              <h2
                className="text-white"
                style={{ fontWeight: "600", marginBottom: "1rem" }}
              >
                Experience How Whimsical AI Reimagines Complex Text into Clear,
                Custom Copy
              </h2>
              <p
                style={{
                  color: "#ccc",
                  marginBottom: "2rem",
                  fontStyle: "italic",
                }}
              >
                Whimsical AI empowers you to refine dense or technical writing
                into approachable, user-focused language—preserving intent,
                style, and originality with no copyright concerns.
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
            .whimsical-step1 {
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
                      Smart Meaning Extraction
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Whimsical AI dives deep into your content, detecting the
                      full context to provide accurate and meaningful
                      transformations tailored to your intent.
                    </p>
                    <div className="whimsical-step1">1</div>
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
            .whimsical-step2 {
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
                      Personalized Rewriting Modes
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Choose the style and depth that fits your goals—Whimsical
                      AI lets you adjust tone and complexity for education,
                      work, or casual sharing.
                    </p>
                    <div className="whimsical-step2">2</div>
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
            .whimsical-step3 {
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
                      Fully Authentic, Ready-to-Use Results
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      All content generated by Whimsical AI is uniquely crafted
                      and free from duplication risks—ready to use in academic,
                      corporate, or creative settings.
                    </p>
                    <div className="whimsical-step3">3</div>
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

export default Whimsica;
