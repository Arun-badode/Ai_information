import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import scholarcySS1 from '../../../../public/assets/Img/AI for Document/scholarcySS1.png';
import scholarcySS2 from '../../../../public/assets/Img/AI for Document/scholarcySS2.png';


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
const Scholarcy = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="Scholarcy Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Speed Up Your Reading with Scholarcy
                </p>
                <h3>Customizable, Copyright-Free Summaries Tailored to You</h3>
              </div>
              {[
                {
                  icon: "⚡",
                  title: "Rapid Summarization",
                  desc: "Scholarcy condenses complex research papers, reports, or articles into digestible summaries within seconds.",
                },
                {
                  icon: "🛠️",
                  title: "Adaptive Content Customization",
                  desc: "Change the focus, tone, and depth of summaries to match your academic or professional goals—no limitations.",
                },
                {
                  icon: "🌐",
                  title: "Supports Multiple Languages",
                  desc: "Scholarcy handles a variety of languages, making it a globally accessible summarization companion.",
                },
                {
                  icon: "✅",
                  title: "No Copyright Concerns",
                  desc: "Everything Scholarcy generates is based on your input and free from copyright issues—safe for all uses.",
                },
                {
                  icon: "🧠",
                  title: "AI-Powered Clarity",
                  desc: "Scholarcy uses intelligent extraction and restructuring techniques to deliver clear, concise insights.",
                },
                {
                  icon: "📚",
                  title: "Built for Learning & Research",
                  desc: "Ideal for students, researchers, and professionals who need quick overviews without sacrificing key details.",
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
                  q: "What is Scholarcy?",
                  a: "Scholarcy is an intelligent summarization tool designed to quickly condense research papers, reports, and articles into clear, structured summaries.",
                },
                {
                  q: "How does Scholarcy work?",
                  a: "Scholarcy uses AI to identify key findings, arguments, and references in documents, creating structured flashcards and summaries tailored to your reading goals.",
                },
                {
                  q: "Can Scholarcy adjust content based on my preferences?",
                  a: "Yes, Scholarcy allows you to customize summary depth, extract figures and tables, and focus on specific sections like methods or conclusions.",
                },
                {
                  q: "Is Scholarcy content free from copyright restrictions?",
                  a: "Yes, the summaries generated by Scholarcy are based on your input and are copyright-free for your personal and educational use.",
                },
                {
                  q: "Can Scholarcy summarize large academic papers?",
                  a: "Absolutely. Scholarcy is specifically designed to handle long, complex academic documents and break them into manageable summaries.",
                },
                {
                  q: "Does Scholarcy support multiple document formats?",
                  a: "Yes, Scholarcy supports PDFs, Word documents, and other text formats commonly used in academic writing.",
                },
                {
                  q: "Is Scholarcy free to use?",
                  a: "Scholarcy offers a free version with limited features and a paid subscription for advanced capabilities like batch uploads and reference management.",
                },
                {
                  q: "Can I export content from Scholarcy?",
                  a: "Yes, summaries and flashcards can be exported as Word documents, Excel files, or RIS citations.",
                },
                {
                  q: "Can I use Scholarcy for academic research?",
                  a: "Definitely. Scholarcy is widely used by students, researchers, and educators to speed up literature reviews and content digestion.",
                },
                {
                  q: "How accurate are the summaries generated by Scholarcy?",
                  a: "Scholarcy uses AI to deliver accurate, section-based summaries, highlighting core concepts, claims, and referenced studies.",
                },
                {
                  q: "Does Scholarcy support content rewriting?",
                  a: "No, Scholarcy focuses on summarization and reference extraction but does not rewrite or paraphrase content.",
                },
                {
                  q: "Can I use Scholarcy even without research experience?",
                  a: "Yes, Scholarcy is intuitive and ideal for anyone who needs to understand complex texts more quickly and easily.",
                },
                {
                  q: "What types of content can I summarize with Scholarcy?",
                  a: "Scholarcy works best with academic papers, journal articles, technical reports, and white papers.",
                },
                {
                  q: "Is Scholarcy suitable for professionals?",
                  a: "Yes, professionals in law, science, and education use Scholarcy to process dense material efficiently.",
                },
                {
                  q: "Can I customize the tone of the output in Scholarcy?",
                  a: "No, Scholarcy maintains a neutral academic tone based on the source document’s original context.",
                },
                {
                  q: "Does Scholarcy store my content?",
                  a: "Scholarcy may temporarily store content for processing but does not retain or share user data for long-term storage.",
                },
                {
                  q: "Can I collaborate with others on content using Scholarcy?",
                  a: "While it doesn't have built-in collaboration, you can share exported summaries with your peers or team members.",
                },
                {
                  q: "Is the content from Scholarcy plagiarism-free?",
                  a: "Yes, the summaries are derived from your uploaded material, ensuring that output is original and plagiarism-free.",
                },
                {
                  q: "Can I expand content using Scholarcy?",
                  a: "Scholarcy does not expand content; it specializes in reduction and clarity through summarization.",
                },
                {
                  q: "How fast is Scholarcy in generating summaries?",
                  a: "Scholarcy processes documents and generates structured summaries in just a few seconds.",
                },
                {
                  q: "Does Scholarcy require installation?",
                  a: "No installation is required—Scholarcy runs entirely in the browser and also offers a Chrome extension.",
                },
                {
                  q: "What makes Scholarcy different from other tools?",
                  a: "Scholarcy stands out for its academic focus, structured summaries, citation linking, and smart flashcard generation.",
                },
                {
                  q: "Does Scholarcy have a mobile version?",
                  a: "Scholarcy is web-based but responsive, allowing access from mobile browsers with ease.",
                },
                {
                  q: "Can I use Scholarcy for business or technical content?",
                  a: "Yes, Scholarcy is suitable for summarizing business white papers, technical manuals, and reports.",
                },
                {
                  q: "Where can I get support for Scholarcy?",
                  a: "Support is available via their website through FAQs, help guides, and direct contact for assistance.",
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
                src={scholarcySS1}
                alt="scholarcySS"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={scholarcySS2}
                alt="scholarcySS"
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
                    Why <strong>Scholarcy</strong> is the Go-To Tool for
                    Dynamic, Copyright-Free Academic Summarization
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>Scholarcy</strong> simplifies the process of
                    digesting academic and technical documents by producing
                    smart, customizable summaries that adapt to your needs—all
                    without copyright limitations. Whether you're a student,
                    researcher, or professional, here’s why Scholarcy stands
                    out:
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
                      <strong>User-Adaptive Output:</strong> Scholarcy adjusts
                      summaries based on your focus areas—whether you need
                      concise overviews or in-depth abstracts.
                    </li>
                    <li className="mb-3">
                      <strong>Academic & Research-Oriented:</strong> Designed to
                      extract key arguments, results, and citations from
                      scholarly content with precision.
                    </li>
                    <li className="mb-3">
                      <strong>Copyright-Free Content:</strong> Summaries are
                      yours to use and share freely—no restrictions, perfect for
                      academic publishing or personal notes.
                    </li>
                    <li className="mb-3">
                      <strong>PDF & Docx Compatibility:</strong> Easily works
                      with complex documents like PDFs, Word files, and academic
                      papers.
                    </li>
                    <li className="mb-3">
                      <strong>Reference Highlighting:</strong> Automatically
                      identifies and links to references, helping streamline
                      literature reviews.
                    </li>
                    <li className="mb-3">
                      <strong>Smart Flashcards:</strong> Creates summary
                      flashcards for each section—great for revision, teaching,
                      or content mapping.
                    </li>
                    <li className="mb-3">
                      <strong>Time-Saving and Intuitive:</strong> Cuts hours of
                      manual skimming by giving you focused summaries in
                      seconds.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Start Using <strong>Scholarcy</strong> — Smart Summaries
                      for Smarter Study
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Pros & Cons Scholarcy":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-2">
              Why <strong>Scholarcy</strong> is a Smart, Copyright-Free Tool for
              Academic Summarization
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>Scholarcy</strong> excels in summarizing academic and
              technical documents with precision and flexibility. It adapts its
              output based on user preferences and ensures content remains
              copyright-free, making it ideal for students, researchers, and
              content creators.
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
                    <strong>Copyright-Free Summaries:</strong> All generated
                    content is free to use and distribute, perfect for academic
                    and research-based tasks.
                  </li>
                  <li className="mb-2">
                    <strong>Custom Output Options:</strong> Users can tweak the
                    length, structure, and style of summaries to fit their
                    needs—ideal for creating abstracts or literature reviews.
                  </li>
                  <li className="mb-2">
                    <strong>Supports Complex Documents:</strong> Handles PDFs,
                    Word docs, and academic papers efficiently with accurate
                    parsing and extraction.
                  </li>
                  <li className="mb-2">
                    <strong>Research-Friendly:</strong> Automatically identifies
                    key findings, contributions, and references from scholarly
                    articles.
                  </li>
                  <li className="mb-2">
                    <strong>Time-Saving Automation:</strong> Scholarcy cuts down
                    time spent on reading by instantly summarizing lengthy and
                    technical content.
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
                    <strong>Subscription Limitations:</strong> Full access to
                    advanced features requires a paid plan, which may not suit
                    all budgets.
                  </li>
                  <li className="mb-2">
                    <strong>Less Suitable for Casual Users:</strong> Tailored
                    for academic use, which may be overwhelming for users
                    looking for simpler summarization.
                  </li>
                  <li className="mb-2">
                    <strong>Internet Dependency:</strong> Scholarcy relies
                    heavily on cloud processing and requires a stable internet
                    connection.
                  </li>
                  <li className="mb-2">
                    <strong>Limited Paraphrasing:</strong> While great at
                    summarizing, Scholarcy doesn't focus as much on rewriting or
                    paraphrasing content like some competitors.
                  </li>
                  <li className="mb-2">
                    <strong>Minimal Collaboration Features:</strong> Doesn’t
                    offer real-time collaboration or sharing tools for team
                    environments.
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
        <div className="row align-items-center justify-content-between mb-4">
  {/* Image First on Mobile, Right Side on Desktop */}
  <div className="col-12 col-md-6 order-1 order-md-2 text-center mb-3 mb-md-0">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5IyEpRsYY8JsmOlBNKKmWf5jlOBFs3Ustg&s"
      alt="Scholarcy AI"
      style={{ maxWidth: "100%", height: "300px" }}
    />
  </div>

  {/* Text Second on Mobile, Left Side on Desktop */}
  <div className="col-12 col-md-6 order-2 order-md-1" style={{ paddingRight: "30px" }}>
    <p className="text-primary">Write better, faster</p>
    <h1>Scholarcy:</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      SummarizeBot is an AI-powered summarization tool designed to condense long-form content into
      concise summaries. Leveraging sophisticated natural language processing (NLP) algorithms,
      this tool provides users with the ability to automatically summarize articles, documents,
      research papers, blog posts, and other text content. Whether you're a student, researcher,
      content creator, or business professional, SummarizeBot simplifies your workflow by saving you
      time and improving productivity.
    </p>
    <a
      href="https://www.scholarcy.com"
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
                Your AI Assistant for Academic and Technical Summaries
              </p>
              <h2
                className="text-white"
                style={{ fontWeight: "600", marginBottom: "1rem" }}
              >
                Discover How Scholarcy Adapts to Your Needs, Instantly and
                Safely
              </h2>
              <p
                style={{
                  color: "#ccc",
                  marginBottom: "2rem",
                  fontStyle: "italic",
                }}
              >
                Scholarcy transforms research papers, articles, and lengthy
                documents into bite-sized, customizable summaries—ready to use
                without worrying about copyright issues.
              </p>

              <div className="row g-4">
                {/* Step 1 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#0b6d63",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
          .scholarcy-step1 {
            position: absolute;
            bottom: 10px;
            right: 15px;
            font-size: 4rem;
            font-weight: bold;
            color: #4ce1b6;
            opacity: 0.6;
          }
        `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Extract Key Findings from Research
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Scholarcy scans your documents and highlights key
                      insights, methods, and outcomes, giving you a quick grasp
                      of academic content.
                    </p>
                    <div className="scholarcy-step1">1</div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#0b6d63",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
          .scholarcy-step2 {
            position: absolute;
            bottom: 10px;
            right: 15px;
            font-size: 4rem;
            font-weight: bold;
            color: #4ce1b6;
            opacity: 0.6;
          }
        `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Customize Summary Format and Scope
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Adjust the summary output to focus on conclusions,
                      references, or data—perfect for tailored reviews and
                      annotated bibliographies.
                    </p>
                    <div className="scholarcy-step2">2</div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#0b6d63",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
          .scholarcy-step3 {
            position: absolute;
            bottom: 10px;
            right: 15px;
            font-size: 4rem;
            font-weight: bold;
            color: #4ce1b6;
            opacity: 0.6;
          }
        `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Reuse Freely with No Copyright Worries
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      All summaries are editable and safe to reuse in
                      presentations, learning notes, and content briefs—without
                      violating any copyright.
                    </p>
                    <div className="scholarcy-step3">3</div>
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

export default Scholarcy;
