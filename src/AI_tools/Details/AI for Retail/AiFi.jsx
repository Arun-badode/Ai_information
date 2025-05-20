import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import aifi from "../../../../public/assets/Img/Ai  for Retail/4.png";
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
const AiFi = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="AiFi AI Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">Discover the Power of AiFi AI</p>
                <h3>
                  Unlock the Potential of Your Data with Seamless Visuals for
                  Smarter Decisions
                </h3>
              </div>
              {[
                {
                  icon: "📊",
                  title: "Data-Driven Insights",
                  desc: "AiFi AI transforms your complex data into easy-to-understand visuals, such as interactive charts and graphs, to support rapid, data-backed decision-making.",
                },
                {
                  icon: "🌐",
                  title: "Multi-Language and Flexible Export Options",
                  desc: "Create and export your content in various languages and file formats like PDF, PNG, and SVG, catering to different needs and workflows.",
                },
                {
                  icon: "⚡",
                  title: "Real-Time Data Processing",
                  desc: "Instantly generate dynamic diagrams and data visuals, even with extensive datasets, ensuring fast insights and quicker decision-making.",
                },
                {
                  icon: "🔒",
                  title: "Enhanced Security Measures",
                  desc: "AiFi AI employs top-tier encryption and privacy protocols, ensuring your data is secure and kept confidential at all stages.",
                },
                {
                  icon: "📈",
                  title: "Customizable Visual Elements",
                  desc: "Personalize your visuals with adjustable layouts, themes, and data representations, aligning the output with your specific project goals.",
                },
                {
                  icon: "🖋️",
                  title: "Perfect for Creative and Professional Use",
                  desc: "AiFi AI is versatile, helping you produce polished visuals suitable for both creative projects and professional business presentations.",
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
                  q: "What is AiFi AI?",
                  a: "AiFi AI is an advanced platform designed to streamline data analysis, generate interactive visuals, and produce intuitive content, helping users enhance their decision-making and communication processes.",
                },
                {
                  q: "How does AiFi AI work?",
                  a: "AiFi AI leverages cutting-edge machine learning algorithms to analyze raw data, transforming it into clear visual formats like flowcharts, process diagrams, and concise summaries, making it easier to comprehend and collaborate.",
                },
                {
                  q: "Is the content generated by AiFi AI secure?",
                  a: "Yes, AiFi AI ensures the content it generates is secure and free from any copyright issues, making it suitable for personal, academic, or professional use.",
                },
                {
                  q: "Can I customize the visuals created by AiFi AI?",
                  a: "Absolutely! AiFi AI allows full customization of your visuals, enabling you to tailor the designs, layouts, and elements according to your unique needs and branding requirements.",
                },
                {
                  q: "Can AiFi AI handle large data sets?",
                  a: "Yes, AiFi AI is optimized to process and visualize large data sets, making it an ideal choice for data analysts, marketers, and teams looking to derive actionable insights from complex information.",
                },
                {
                  q: "Which file formats are supported for export?",
                  a: "AiFi AI supports various export formats, including PDF, PNG, SVG, and Excel, ensuring compatibility across different platforms and applications.",
                },
                {
                  q: "Is AiFi AI free to use?",
                  a: "AiFi AI offers both a free tier with essential features and premium plans that include advanced AI tools, enhanced collaboration capabilities, and more customization options.",
                },
                {
                  q: "Can I share or download my visuals from AiFi AI?",
                  a: "Yes, you can easily share or download your visuals through cloud integration or by using direct sharing options available within the platform.",
                },
                {
                  q: "Is AiFi AI suitable for educational use?",
                  a: "Definitely! AiFi AI is perfect for students and educators who need to create educational materials, diagrams, or research presentations that simplify complex concepts.",
                },
                {
                  q: "Does AiFi AI generate original content?",
                  a: "Yes, AiFi AI generates fully original content, ensuring uniqueness and significantly reducing the chances of plagiarism.",
                },
                {
                  q: "Is AiFi AI easy to use for beginners?",
                  a: "Yes, AiFi AI is designed with simplicity in mind, making it accessible and user-friendly, even for those without technical expertise.",
                },
                {
                  q: "Can I select a visual theme or style in AiFi AI?",
                  a: "Yes, AiFi AI offers a variety of customizable templates and visual styles, ranging from minimalist to creative, allowing you to select a theme that aligns with your project.",
                },
                {
                  q: "Is AiFi AI useful for businesses and organizations?",
                  a: "Yes, AiFi AI is incredibly valuable for businesses, enabling teams to automate documentation, visualize workflows, and improve collaboration with visually engaging content.",
                },
                {
                  q: "How does AiFi AI ensure data security?",
                  a: "AiFi AI uses robust encryption and adheres to stringent privacy standards to ensure that your data remains secure and confidential.",
                },
                {
                  q: "Can I use AiFi AI on my mobile device?",
                  a: "Yes, AiFi AI is fully mobile-responsive, allowing you to access and work on your visuals from any device, whether it’s a desktop or mobile.",
                },
                {
                  q: "Do I need technical skills to use AiFi AI?",
                  a: "Not at all! AiFi AI is designed to be intuitive and user-friendly, making it easy for users of all skill levels to get started.",
                },
                {
                  q: "Does AiFi AI only create flowcharts?",
                  a: "No, AiFi AI can generate a wide variety of visual content, including mind maps, process diagrams, organizational charts, data summaries, and brainstorming boards.",
                },
                {
                  q: "How fast can AiFi AI generate content?",
                  a: "AiFi AI generates visuals rapidly, with most diagrams and content ready in just a few seconds, even when working with large or unstructured data.",
                },
                {
                  q: "Is AiFi AI a cloud-based platform?",
                  a: "Yes, AiFi AI is fully cloud-based, meaning there’s no need for installation. You can access it directly via any modern browser.",
                },
                {
                  q: "What if I need help with AiFi AI?",
                  a: "AiFi AI offers extensive support options, including a help center, live chat, and email assistance, to help you with any questions or technical concerns.",
                },
                {
                  q: "Can AiFi AI be used for creative purposes?",
                  a: "Yes, AiFi AI is a great tool for creative projects, such as marketing campaigns, idea mapping, storyboarding, and planning visual content.",
                },
                {
                  q: "Can AiFi AI simplify complex data visually?",
                  a: "Yes, AiFi AI specializes in transforming complex data into visually engaging and easy-to-understand insights, allowing you to focus more on analysis rather than raw data.",
                },
                {
                  q: "Is AiFi AI helpful for project management?",
                  a: "Absolutely! Project managers can use AiFi AI to design clear workflows, team structures, timelines, and more, all visualized in a way that enhances clarity and project organization.",
                },
                {
                  q: "How secure is my data on AiFi AI?",
                  a: "AiFi AI employs state-of-the-art encryption and security protocols to ensure your data remains secure and confidential.",
                },
                {
                  q: "Does AiFi AI support multiple languages?",
                  a: "Yes, AiFi AI is available in multiple languages, making it accessible for global teams to collaborate effectively.",
                },
                {
                  q: "What integrations does AiFi AI offer?",
                  a: "AiFi AI integrates seamlessly with popular tools like Google Workspace, Microsoft Office, Slack, and more to enhance your workflow and collaboration.",
                },
                {
                  q: "Is AiFi AI suitable for eCommerce?",
                  a: "Yes, AiFi AI can help eCommerce businesses visualize customer journeys, product flows, and inventory management in an intuitive and easy-to-understand interface.",
                },
                {
                  q: "Does AiFi AI help with SEO strategies?",
                  a: "While AiFi AI doesn’t directly create SEO content, it can help you visualize SEO strategies, keyword maps, and website structures, aiding in optimizing your site effectively.",
                },
                {
                  q: "Can I adjust the level of detail in my visuals?",
                  a: "Yes, AiFi AI gives you control over the level of detail in your visuals, with options for simplified, medium, or detailed views, depending on your audience's needs.",
                },
                {
                  q: "Can AiFi AI assist legal professionals?",
                  a: "Yes, AiFi AI is valuable for legal professionals, enabling them to visualize legal processes, contract structures, and case workflows, although the accuracy of legal data should always be verified by experts.",
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
                  <h3 className="fw-bold mb-4 text-start text-info">
                    Why <strong>AiFi AI</strong> is the Perfect Tool for
                    Simplifying, Organizing, and Optimizing Your Content
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>AiFi AI</strong> empowers individuals and teams to
                    effortlessly convert raw, unorganized data into structured,
                    actionable insights. Whether you’re creating reports,
                    educational content, or summarizing key information, here’s
                    why <strong>AiFi AI</strong> is the go-to choice for many:
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
                      <strong>Efficient Content Structuring:</strong> Instantly
                      transforms complex information into clear, concise
                      summaries, visual diagrams, and actionable reports for
                      faster understanding.
                    </li>
                    <li className="mb-3">
                      <strong>Team Collaboration Tools:</strong> Equipped with
                      features that allow teams to collaborate in real time,
                      providing a smooth workflow for content creation and
                      feedback.
                    </li>
                    <li className="mb-3">
                      <strong>Customizable Templates:</strong> Choose from a
                      wide range of pre-built templates suited for different
                      content types, from professional reports to creative
                      presentations.
                    </li>
                    <li className="mb-3">
                      <strong>Intuitive Interface:</strong> Designed with a
                      focus on ease of use, <strong>AiFi AI</strong> lets you
                      concentrate on the content rather than dealing with
                      complicated software tools.
                    </li>
                    <li className="mb-3">
                      <strong>AI-Driven Content Generation:</strong>{" "}
                      Automatically generates structured outputs, including
                      summaries, infographics, and detailed reports, saving
                      valuable time and effort.
                    </li>
                    <li className="mb-3">
                      <strong>Seamless Integration with Tools:</strong>{" "}
                      Effortlessly integrates with popular tools like Google
                      Docs, Slack, and Microsoft Teams, ensuring smooth content
                      management within your existing ecosystem.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-info btn-sm">
                      Try <strong>AiFi AI</strong> — Experience Faster, Smarter
                      Content Creation and Collaboration
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
              Why Choose <strong>AiFi AI</strong> for Streamlined Data
              Structuring and Clarity
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>AiFi AI</strong> transforms complex data into clear,
              actionable insights, streamlining workflows, and enabling smarter
              decision-making. It empowers teams to work more efficiently by
              simplifying content management and enhancing communication.
            </p>

            {/* AiFi AI Section */}
            <div className="row justify-content-center gap-2 mb-5">
              {/* Pros */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #17a2b8",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#323c46",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-info text-start mb-4">✅ AiFi AI - Pros</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Instant Data Simplification:</strong> Quickly turns
                    complex datasets into understandable summaries, boosting
                    productivity and reducing manual effort.
                  </li>
                  <li className="mb-2">
                    <strong>Flexible Output Formats:</strong> Provides a variety
                    of output options such as visual reports, charts, and
                    structured text, making it adaptable to various needs.
                  </li>
                  <li className="mb-2">
                    <strong>Seamless Team Collaboration:</strong> Facilitates
                    real-time collaboration, enabling multiple users to work
                    together on projects and share insights effortlessly.
                  </li>
                  <li className="mb-2">
                    <strong>Smart Content Structuring:</strong> Suggests optimal
                    ways to structure and present data, ensuring the most
                    effective communication of information.
                  </li>
                  <li className="mb-2">
                    <strong>Easy Integration:</strong> Easily integrates with
                    existing tools and platforms, allowing smooth incorporation
                    into your workflow without disruption.
                  </li>
                </ul>
              </div>

              {/* Cons */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #17a2b8",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#323c46",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-danger text-start mb-4">
                  ⚠️ AiFi AI - Cons
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Requires Internet Connection:</strong> Many of AiFi
                    AI’s core features depend on an internet connection,
                    limiting offline access.
                  </li>
                  <li className="mb-2">
                    <strong>Learning Curve:</strong> New users might experience
                    a slight learning curve while familiarizing themselves with
                    the interface and advanced features.
                  </li>
                  <li className="mb-2">
                    <strong>Free Version Limitations:</strong> Users on the free
                    plan may face limitations on usage, with advanced features
                    locked behind a paywall.
                  </li>
                  <li className="mb-2">
                    <strong>Performance with Large Datasets:</strong> Processing
                    large files or complex datasets may lead to slower
                    performance on lower-end devices or limited bandwidth.
                  </li>
                  <li className="mb-2">
                    <strong>Overwhelming Customization Options:</strong> The
                    extensive customization options might be overwhelming for
                    new users, making it challenging to quickly get started.
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
              Discover Effective Alternatives to AiFi AI for Enhanced Data
              Structuring and Clarity
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>AiFi AI</strong> excels at transforming complex data
              into clear, actionable insights, several other tools offer
              distinct features in data visualization, simplification, and
              organization.
            </p>
            <div className="row justify-content-center gap-2">
              <div
                className="col-lg-8 col-md-8 col-sm-12"
                style={{
                  border: "1px solid #ff7b00",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#3d434b",
                  minHeight: "100%",
                }}
              >
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>VisionFlow</strong>: Transforms raw data into
                    actionable insights using intuitive charts and visual
                    representations, perfect for business teams and analysts.
                  </li>
                  <li className="mb-2">
                    <strong>ClarityVision</strong>: Simplifies complex reports
                    into digestible summaries, ideal for professionals needing
                    quick clarity without missing crucial details.
                  </li>
                  <li className="mb-2">
                    <strong>StreamlineFlow</strong>: Converts abstract concepts
                    into clear, visual diagrams, designed for project managers
                    and strategists.
                  </li>
                  <li className="mb-2">
                    <strong>MindMapPro</strong>: Organizes scattered thoughts
                    into structured mind maps, helping creative teams and
                    developers in brainstorming and planning sessions.
                  </li>
                  <li className="mb-2">
                    <strong>FlowCraft</strong>: Empowers non-technical users to
                    create and manage logic flows through a simple drag-and-drop
                    interface, streamlining content management tasks.
                  </li>
                  <li className="mb-2">
                    <strong>EssenceCraft</strong>: Condenses lengthy reports
                    into concise, impactful statements while preserving the
                    original meaning and tone.
                  </li>
                  <li className="mb-2">
                    <strong>DocSketch</strong>: Transforms detailed
                    documentation into clear, visual diagrams that promote
                    collaboration and understanding within teams.
                  </li>
                  <li className="mb-2">
                    <strong>BriefMaster</strong>: Ideal for executives, it
                    condenses long documents into easy-to-read formats,
                    retaining key details.
                  </li>
                  <li className="mb-2">
                    <strong>InsightExtract</strong>: Assists researchers in
                    pulling critical insights from large datasets or technical
                    reports, making data retrieval efficient.
                  </li>
                  <li className="mb-2">
                    <strong>WireFrameBuilder</strong>: Converts brainstorming
                    notes into organized wireframes and outlines, perfect for
                    product development and planning.
                  </li>
                  <li className="mb-2">
                    <strong>LegalEase</strong>: Simplifies legal documents,
                    contracts, and complex manuals while ensuring that all vital
                    details and clauses are maintained.
                  </li>
                  <li className="mb-2">
                    <strong>DataStream</strong>: Identifies key data points and
                    trends from large datasets, helping businesses make quick,
                    informed decisions.
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
          className="d-inline-block text-white text-decoration-none ml-3 py-3 ms-3"
        >
          <i className="bi bi-arrow-left me-2"></i>Back {" "}
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
              <h1>AiFi AI:</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                AiFi AI is an artificial intelligence-powered platform that
                enables autonomous, cashierless retail experiences. It leverages
                advanced computer vision, machine learning, and edge AI to track
                customer movements and product interactions in real time —
                removing the need for traditional checkout counters or scanners.
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
              <img src={aifi} style={{ MaxWidth: "100%", height: "300px" }} />
            </div>
          </div>

          <section style={{ backgroundColor: "#283e55", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">
                Streamline Workflows—Achieve Precision with AiFi AI
              </p>
              <h2
                className="text-white"
                style={{ fontWeight: "600", marginBottom: "1rem" }}
              >
                See How AiFi AI Transforms Complex Tasks into Seamless Solutions
              </h2>
              <p
                style={{
                  color: "#ccc",
                  marginBottom: "2rem",
                  fontStyle: "italic",
                }}
              >
                AiFi AI simplifies complex processes into actionable
                outcomes—offering intuitive, intelligent solutions that empower
                you.
              </p>

              <div className="row g-4">
                {/* Step 1 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#f7b731",
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
                      Intelligent Data Breakdown
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      AiFi AI segments data into easy-to-understand sections,
                      enhancing clarity and improving decision-making processes.
                    </p>
                    <div className="aifi-step1">1</div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#f7b731",
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
                      Tailored Communication Solutions
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      AiFi AI adapts content tone and style to meet diverse
                      needs, ensuring it resonates with the intended audience,
                      whether formal or casual.
                    </p>
                    <div className="aifi-step2">2</div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#f7b731",
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
                      Unmatched Accuracy and Authenticity
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      AiFi AI guarantees that each output is unique, free from
                      any form of duplication, and maintains the highest level
                      of accuracy.
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

          <div className="bg-primary text-center text-light rounded-4 p-5 mt-5">
            <h4 className="mb-3">Ready to get started with AiFi AI?</h4>
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

export default AiFi;
