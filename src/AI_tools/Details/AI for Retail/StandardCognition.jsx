import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import standard from "../../../../public/assets/Img/Ai  for Retail/1.png";
import st1 from "../../../../public/assets/Img/Ai  for Retail/st-s1.png";
import st2 from "../../../../public/assets/Img/Ai  for Retail/st-s2.png"
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
const StandardCongnition = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="Standard Cognition AI Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Elevate Your Content Intelligence with Standard Cognition AI
                </p>
                <h3>Smarter Content Processing for Smarter Communication</h3>
              </div>
              {[
                {
                  icon: "🧠",
                  title: "Intelligent Clarity Enhancement",
                  desc: "Standard Cognition AI refines content for maximum clarity, helping your message come across clearly and effectively.",
                },
                {
                  icon: "🎨",
                  title: "Adaptive Writing Tones",
                  desc: "From business-professional to informal or innovative, the AI adapts its output style to fit your unique voice.",
                },
                {
                  icon: "🌍",
                  title: "Multi-Language and Format Compatibility",
                  desc: "Seamlessly create and export content in multiple languages and formats including PDF, TXT, and DOCX.",
                },
                {
                  icon: "✅",
                  title: "Authentic and Unique Results",
                  desc: "Standard Cognition AI ensures all content generated is original, verifiable, and safe from plagiarism.",
                },
                {
                  icon: "📈",
                  title: "Smart Contextual Optimization",
                  desc: "Enhances your material using context-aware logic to boost relevance, readability, and audience engagement.",
                },
                {
                  icon: "📝",
                  title: "Support for All Content Types",
                  desc: "Whether crafting emails, documentation, creative works, or research papers—AI delivers clean, ready-to-use content.",
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
                  q: "What is Standard Cognition AI?",
                  a: "Standard Cognition AI is a smart platform designed to simplify the creation of visual content, automate workflows, and transform complex data into structured, easy-to-understand diagrams and insights.",
                },
                {
                  q: "How does Standard Cognition AI work?",
                  a: "It utilizes advanced artificial intelligence to process your inputs—such as raw data or text—and intelligently generates flowcharts, mind maps, business processes, and visual documents for better communication and planning.",
                },
                {
                  q: "Is content from Standard Cognition AI safe to use?",
                  a: "Yes, all content created using Standard Cognition AI is unique and royalty-free, ensuring you can use it for commercial, academic, or creative purposes without worrying about copyright.",
                },
                {
                  q: "Can I personalize the visuals generated by Standard Cognition AI?",
                  a: "Definitely! You can fine-tune the layout, theme, complexity, and visual elements to match your project or brand identity with ease.",
                },
                {
                  q: "Can Standard Cognition AI manage large volumes of data?",
                  a: "Yes, it's engineered to process and visualize large datasets efficiently, making it ideal for data analysts, marketers, and enterprise teams.",
                },
                {
                  q: "Which formats does Standard Cognition AI support for export?",
                  a: "You can export your content in multiple formats including PDF, PNG, SVG, and CSV, depending on the type of visual you generate.",
                },
                {
                  q: "Is Standard Cognition AI free?",
                  a: "It offers a free plan with core features and paid tiers with advanced AI capabilities, team collaboration tools, and deeper customization.",
                },
                {
                  q: "Can I download or share my visuals?",
                  a: "Yes! You can instantly export or share your visuals with teammates via download links, cloud storage, or integrations.",
                },
                {
                  q: "Is it suitable for students and educators?",
                  a: "Absolutely. Standard Cognition AI can be used for educational diagrams, project mapping, and simplifying academic content through visual aids.",
                },
                {
                  q: "Does Standard Cognition AI produce original content?",
                  a: "Yes, it generates diagrams and content from scratch, ensuring uniqueness and eliminating plagiarism risks.",
                },
                {
                  q: "Is the interface beginner-friendly?",
                  a: "Yes, the platform is designed with simplicity in mind—anyone can get started without any prior technical knowledge.",
                },
                {
                  q: "Can I choose a specific visual style or theme?",
                  a: "Yes, you can pick from a wide range of design styles, including business formal, creative, modern, and minimalistic templates.",
                },
                {
                  q: "Is it useful for companies and organizations?",
                  a: "Standard Cognition AI is ideal for organizations looking to automate documentation, streamline collaboration, and visualize business strategies.",
                },
                {
                  q: "Does it store my data securely?",
                  a: "Yes, your data is processed securely and follows data protection protocols to ensure confidentiality and safety.",
                },
                {
                  q: "Can I use it on a smartphone or tablet?",
                  a: "Yes, Standard Cognition AI is mobile-friendly and can be accessed via any modern browser on desktop or mobile devices.",
                },
                {
                  q: "Do I need technical skills to use it?",
                  a: "Not at all. It’s built for all users—from beginners to professionals—requiring just basic computer literacy.",
                },
                {
                  q: "Does it only generate flowcharts?",
                  a: "No, it creates a variety of visuals including mind maps, org charts, data summaries, and idea boards.",
                },
                {
                  q: "How fast is content generation?",
                  a: "Diagrams and visuals are typically generated within seconds, even from large or unstructured data.",
                },
                {
                  q: "Is software installation needed?",
                  a: "No installation required—it's entirely cloud-based and works directly in your browser.",
                },
                {
                  q: "How can I get help if I’m stuck?",
                  a: "You can reach the support team via the help center, chat, or email for quick assistance with any feature.",
                },
                {
                  q: "Can it be used for creative and marketing purposes?",
                  a: "Yes, it's ideal for brainstorming, campaign planning, storytelling, and marketing content mapping.",
                },
                {
                  q: "Can it simplify my data visually?",
                  a: "Yes, it converts complex data into simplified, informative visuals to help you focus on insights rather than raw numbers.",
                },
                {
                  q: "Is it beneficial for project management?",
                  a: "Absolutely! Project managers can design workflows, team structures, task timelines, and more with visual clarity.",
                },
                {
                  q: "How secure is my information?",
                  a: "It employs enterprise-grade encryption and privacy standards to keep all your content secure and protected.",
                },
                {
                  q: "Does it support multiple languages?",
                  a: "Yes, the platform supports multiple languages, making it globally accessible for diverse teams.",
                },
                {
                  q: "What platforms does it integrate with?",
                  a: "Standard Cognition AI integrates with productivity tools such as Google Workspace, Slack, Microsoft 365, and more.",
                },
                {
                  q: "Is it good for eCommerce visualization?",
                  a: "Yes, you can map customer journeys, product flows, or inventory processes to streamline eCommerce operations.",
                },
                {
                  q: "Does it help with SEO workflows?",
                  a: "While it doesn’t write SEO content, it helps visualize SEO strategies, link structures, and keyword mappings.",
                },
                {
                  q: "Can I control the level of visual detail?",
                  a: "Yes, you can switch between simple, medium, or detailed views depending on your goal or audience.",
                },
                {
                  q: "Can legal professionals use it?",
                  a: "Yes, it's useful for visualizing legal processes and contract workflows, though legal accuracy should be verified by experts.",
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
                src={st1}
                alt="standardCongnition"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={st2}
                alt="standardCognition"
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
                    Why <strong>Standard Cognition AI</strong> is Your Go-To
                    Tool for Intelligent Content Interpretation and
                    Simplification
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>Standard Cognition AI</strong> helps turn intricate
                    information, scattered thoughts, and unstructured data into
                    simplified, digestible insights. Whether you're mapping
                    processes, breaking down ideas, or crafting knowledge-based
                    visuals, here's why teams trust{" "}
                    <strong>Standard Cognition AI</strong>:
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
                      <strong>Smart Content Breakdown:</strong> Transforms
                      detailed or complex input into simplified visuals or
                      summaries that are easy for diverse audiences to grasp.
                    </li>
                    <li className="mb-3">
                      <strong>Collaborative in Real Time:</strong> Multiple
                      users can simultaneously contribute, edit, and review
                      outputs—improving teamwork and accelerating feedback
                      cycles.
                    </li>
                    <li className="mb-3">
                      <strong>Custom Output Templates:</strong> A wide range of
                      ready-to-use layouts and style options makes customization
                      fast and effective for different industries and use cases.
                    </li>
                    <li className="mb-3">
                      <strong>User-Centric Interface:</strong> Designed for
                      simplicity, the intuitive drag-and-drop experience means
                      even beginners can produce structured, polished outputs
                      quickly.
                    </li>
                    <li className="mb-3">
                      <strong>AI-Powered Automation:</strong> Generates clean,
                      structured visuals from raw data inputs with minimal
                      effort, boosting productivity and consistency.
                    </li>
                    <li className="mb-3">
                      <strong>Effortless Integrations:</strong> Connects with
                      essential platforms like Google Workspace, Teams, and
                      Slack—enabling smooth sharing and operational continuity.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Explore <strong>Standard Cognition AI</strong> — Redefine
                      the Way You Visualize and Understand Information
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
              Why <strong>Standard Cognition AI</strong> Stands Out in Content
              Understanding and Simplification
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>Standard Cognition AI</strong> empowers users to simplify,
              analyze, and visually interpret complex information. It enhances
              clarity in communication and streamlines team collaboration across
              various domains.
            </p>

            {/* Standard Cognition AI Section */}
            <div className="row justify-content-center gap-2 mb-5">
              {/* Pros */}
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
                  ✅ Standard Cognition AI - Pros
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Streamlined Interpretation:</strong> Converts dense
                    or technical content into user-friendly summaries with
                    minimal effort.
                  </li>
                  <li className="mb-2">
                    <strong>Team-Oriented Collaboration:</strong> Enables
                    seamless content sharing and editing, promoting better
                    communication and idea exchange.
                  </li>
                  <li className="mb-2">
                    <strong>Multi-Format Output:</strong> Supports generating
                    simplified outputs in text, charts, or diagrams to suit
                    various presentation needs.
                  </li>
                  <li className="mb-2">
                    <strong>Template-Based Structuring:</strong> Provides
                    ready-made formats for educational, professional, and
                    technical content to speed up workflow.
                  </li>
                  <li className="mb-2">
                    <strong>Cross-Platform Sync:</strong> Compatible with
                    popular cloud tools and platforms, ensuring data is always
                    accessible and up to date.
                  </li>
                </ul>
              </div>

              {/* Cons */}
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
                  ⚠️ Standard Cognition AI - Cons
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Requires Internet Access:</strong> Features depend
                    heavily on a live connection, which can restrict use in
                    offline environments.
                  </li>
                  <li className="mb-2">
                    <strong>Advanced Features Take Time:</strong> Users may need
                    extra time or training to fully leverage the more powerful
                    capabilities.
                  </li>
                  <li className="mb-2">
                    <strong>Premium Plans for Full Access:</strong> Some
                    advanced tools and integrations are locked behind paid
                    tiers.
                  </li>
                  <li className="mb-2">
                    <strong>Interface Complexity:</strong> Non-technical users
                    might find the initial setup and customization options a bit
                    overwhelming.
                  </li>
                  <li className="mb-2">
                    <strong>Heavy Content Slows Performance:</strong> Handling
                    extremely long or media-rich files may impact system speed
                    or responsiveness.
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
              Explore Top Solutions Beyond Standard Cognition AI for Smart
              Content Simplification
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>Standard Cognition AI</strong> streamlines complex
              information into simple, actionable formats, several other
              intelligent tools offer distinct features for refining,
              organizing, and visualizing your content with ease.
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
                    <strong>ConceptEase</strong>: Simplifies layered concepts
                    into clear visuals and structured text, ideal for business
                    communication and idea sharing.
                  </li>
                  <li className="mb-2">
                    <strong>LogicSketch</strong>: Translates workflows into
                    intuitive diagrams that make even the most complicated
                    systems easy to grasp.
                  </li>
                  <li className="mb-2">
                    <strong>TextSimplix</strong>: Breaks down dense paragraphs
                    into easy-to-read language, suitable for educators,
                    trainers, and content creators.
                  </li>
                  <li className="mb-2">
                    <strong>MindStructure</strong>: Offers dynamic mind-mapping
                    tools for capturing and refining creative or analytical
                    thought processes.
                  </li>
                  <li className="mb-2">
                    <strong>VisionGrid</strong>: Provides data flow
                    visualizations and workflow simplification through
                    drag-and-drop interfaces.
                  </li>
                  <li className="mb-2">
                    <strong>ClearBrief AI</strong>: Optimizes long-form
                    documents into concise summaries that retain core messaging
                    and context.
                  </li>
                  <li className="mb-2">
                    <strong>DiagramNova</strong>: Transforms detailed content
                    into engaging visuals, supporting quick interpretation and
                    team collaboration.
                  </li>
                  <li className="mb-2">
                    <strong>InfoSqueeze</strong>: Condenses vast text into crisp
                    summaries for newsletters, briefs, and executive overviews.
                  </li>
                  <li className="mb-2">
                    <strong>SummariZen</strong>: Designed for research and
                    academia, it pulls out only the most relevant points from
                    journals and reports.
                  </li>
                  <li className="mb-2">
                    <strong>LayoutFlow</strong>: Converts abstract or technical
                    ideas into visually structured mockups for design or
                    development teams.
                  </li>
                  <li className="mb-2">
                    <strong>DocDigest</strong>: Perfect for simplifying
                    contracts, case studies, or industry papers without losing
                    key technical elements.
                  </li>
                  <li className="mb-2">
                    <strong>InsightGlow</strong>: Highlights important takeaways
                    from complex data-driven documents, enabling faster, smarter
                    decisions.
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
  <div className="row d-flex align-items-center justify-content-between mb-1">
    {/* Right side (Image Section) first on mobile */}
    <div
      className="col-12 col-md-6 order-1 order-md-2 mb-4 text-center"
      style={{ height: "auto" }}
    >
      <img
        src={standard}
        alt="Standard Cognition"
        className="img-fluid"
        style={{ maxWidth: "100%", height: "auto" }}
      />
    </div>

    {/* Left side (Text Section) second on mobile */}
    <div className="col-12 col-md-6 order-2 order-md-1">
      <p className="text-primary">Write better, faster</p>
      <h1>Standard Cognition AI:</h1>
      <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
      <p>
        Standard Cognition is a leading AI-powered retail technology
        company that offers a checkout-free shopping experience through
        advanced computer vision and deep learning. With Standard
        Cognition, customers can walk into a store, pick up items, and
        leave—without scanning or waiting in line. The system uses
        AI-powered cameras to track each customer’s actions and
        automatically charges them upon exit.
      </p>
      <div className="mb-3">
        <a
          href="https://standard.ai/"
          rel="noopener noreferrer"
          className="btn btn-primary me-2"
          target="blank"
        >
          Explore Tool
        </a>
      </div>
    </div>
  </div>
















<section style={{ backgroundColor: "", padding: "3rem 0" }}>
  <div className="container text-center">
    <p className="text-primary">
      Empower Autonomous Retail—Standard Cognition AI in Action
    </p>
    <h2
      className="text-white"
      style={{ fontWeight: "600", marginBottom: "1rem" }}
    >
      Explore How Standard Cognition AI Enables Checkout-Free Convenience
    </h2>
    <p
      style={{
        color: "#ccc",
        marginBottom: "2rem",
        fontStyle: "italic",
      }}
    >
      Standard Cognition AI delivers a seamless, cashierless experience through advanced
      computer vision—giving shoppers speed and retailers flexibility.
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
            .aifi-step1 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #c9e7f7;
              opacity: 0.7;
            }
          `}</style>
          <h5 style={{ fontWeight: "bold", color: "#fff" }}>
            AI-Powered Shopper Tracking
          </h5>
          <p style={{ color: "#fff", margin: 0 }}>
            Standard Cognition AI identifies and tracks shoppers and the items they pick
            without facial recognition—ensuring privacy and precision.
          </p>
          <div className="aifi-step1">1</div>
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
            .aifi-step2 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #c9e7f7;
              opacity: 0.7;
            }
          `}</style>
          <h5 style={{ fontWeight: "bold", color: "#fff" }}>
            Flexible Store Compatibility
          </h5>
          <p style={{ color: "#fff", margin: 0 }}>
            The system works with your current store layout—no need for shelf sensors or
            drastic redesigns—making deployment easier than ever.
          </p>
          <div className="aifi-step2">2</div>
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
            .aifi-step3 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #c9e7f7;
              opacity: 0.7;
            }
          `}</style>
          <h5 style={{ fontWeight: "bold", color: "#fff" }}>
            Fast, Contactless Checkout
          </h5>
          <p style={{ color: "#fff", margin: 0 }}>
            Once shopping is done, customers simply walk out—Standard Cognition processes
            the purchase instantly, sending digital receipts with no checkout delay.
          </p>
          <div className="aifi-step3">3</div>
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

export default StandardCongnition;
