import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import zippin from "../../../../public/assets/Img/Ai  for Retail/3.png";
import zi1 from "../../../../public/assets/Img/Ai  for Retail/zi-s1.png";
import zi2 from "../../../../public/assets/Img/Ai  for Retail/zi-s2.png";
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
const Zippin = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="Zippin AI Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Unlock Powerful Visual Insights with Zippin AI
                </p>
                <h3>
                  Transform Your Data into Meaningful Visualizations for Smarter
                  Choices
                </h3>
              </div>
              {[
                {
                  icon: "📊",
                  title: "Data-Driven Visualization",
                  desc: "Zippin AI allows you to convert complex data into intuitive visuals such as charts, graphs, and diagrams, helping you make informed decisions quickly.",
                },
                {
                  icon: "🌐",
                  title: "Multilingual and Multi-Format Export Options",
                  desc: "Easily create and export your visuals in a variety of languages and file formats, such as PDF, PNG, and SVG, ensuring they meet diverse needs.",
                },
                {
                  icon: "⚡",
                  title: "Lightning-Fast Data Processing",
                  desc: "Generate high-quality diagrams and visuals in real-time, even when working with large datasets, for instant insights and faster decision-making.",
                },
                {
                  icon: "🔒",
                  title: "Robust Data Security",
                  desc: "Zippin AI takes data privacy seriously, employing encryption and rigorous security protocols to protect your sensitive information.",
                },
                {
                  icon: "📈",
                  title: "Customizable Visual Outputs",
                  desc: "Personalize your visuals by adjusting layouts, color schemes, and data complexity to match your project's specific requirements.",
                },
                {
                  icon: "🖋️",
                  title: "Ideal for Creative and Business Use",
                  desc: "From reports and presentations to creative brainstorming sessions, Zippin AI produces polished visuals ready for professional or personal use.",
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
                  q: "What is Zippin AI?",
                  a: "Zippin AI is a cutting-edge platform designed to simplify complex data analysis, generate interactive diagrams, and produce intuitive content that helps users enhance communication and decision-making.",
                },
                {
                  q: "How does Zippin AI work?",
                  a: "Zippin AI uses advanced machine learning algorithms to process and analyze input data, transforming it into visual formats such as flowcharts, process diagrams, and summaries to improve understanding and collaboration.",
                },
                {
                  q: "Is the content generated by Zippin AI secure?",
                  a: "Yes, Zippin AI ensures that all generated content is secure and free from copyright issues, offering flexibility for personal, academic, or business use.",
                },
                {
                  q: "Can I customize the visuals created by Zippin AI?",
                  a: "Absolutely! Zippin AI allows you to fully personalize the designs, layouts, and elements of your visuals, ensuring they align with your specific needs and branding.",
                },
                {
                  q: "Can Zippin AI handle large data sets?",
                  a: "Yes, Zippin AI is optimized to handle and visualize large volumes of data, making it ideal for data analysts, marketers, and teams looking to extract actionable insights from complex datasets.",
                },
                {
                  q: "Which file formats are supported for export?",
                  a: "Zippin AI supports a wide range of export formats, including PDF, PNG, SVG, and Excel, ensuring compatibility with various applications and use cases.",
                },
                {
                  q: "Is Zippin AI free to use?",
                  a: "Zippin AI offers both a free tier with essential features and premium plans that provide advanced AI tools, team collaboration, and more customization options.",
                },
                {
                  q: "Can I share or download my visuals from Zippin AI?",
                  a: "Yes, you can easily share or download your visuals through various methods, including cloud integration and direct sharing options within the platform.",
                },
                {
                  q: "Is Zippin AI suitable for educational use?",
                  a: "Definitely! Zippin AI is an excellent tool for students and educators who need to create educational materials, diagrams, or research presentations to simplify complex concepts.",
                },
                {
                  q: "Does Zippin AI generate original content?",
                  a: "Yes, Zippin AI generates fully original content, ensuring uniqueness and reducing the risk of plagiarism.",
                },
                {
                  q: "Is Zippin AI easy to use for beginners?",
                  a: "Yes, Zippin AI is designed to be user-friendly, enabling beginners to get started quickly without needing advanced technical skills.",
                },
                {
                  q: "Can I select a visual theme or style in Zippin AI?",
                  a: "Yes, Zippin AI offers a variety of customizable templates and design styles, from minimalist to creative, so you can select one that best fits your project.",
                },
                {
                  q: "Is Zippin AI useful for businesses and organizations?",
                  a: "Yes, Zippin AI is highly beneficial for businesses, enabling teams to automate documentation, visualize workflows, and enhance collaboration through intuitive visual content.",
                },
                {
                  q: "How does Zippin AI ensure data security?",
                  a: "Zippin AI employs strong encryption and follows strict privacy protocols to ensure that your data is secure and kept confidential.",
                },
                {
                  q: "Can I use Zippin AI on my mobile device?",
                  a: "Yes, Zippin AI is fully mobile-responsive, so you can access and work on your visuals from any device, whether desktop or mobile.",
                },
                {
                  q: "Do I need technical skills to use Zippin AI?",
                  a: "Not at all! Zippin AI is designed to be intuitive, making it accessible to users of all experience levels.",
                },
                {
                  q: "Does Zippin AI only create flowcharts?",
                  a: "No, Zippin AI can create a wide range of visual content, including mind maps, process diagrams, organizational charts, data summaries, and brainstorming boards.",
                },
                {
                  q: "How fast can Zippin AI generate content?",
                  a: "Zippin AI generates visuals quickly, with most diagrams and content ready in seconds, even when working with large or unstructured data.",
                },
                {
                  q: "Is Zippin AI a cloud-based platform?",
                  a: "Yes, Zippin AI is fully cloud-based, so there is no need for installation. You can access it directly through any modern browser.",
                },
                {
                  q: "What if I need help with Zippin AI?",
                  a: "Zippin AI offers extensive support, including a help center, live chat, and email assistance to address any questions or technical concerns.",
                },
                {
                  q: "Can Zippin AI be used for creative purposes?",
                  a: "Yes, Zippin AI is great for creative projects such as marketing campaigns, idea mapping, storyboarding, and planning visual content.",
                },
                {
                  q: "Can Zippin AI simplify complex data visually?",
                  a: "Yes, Zippin AI specializes in turning complex data into visually engaging, easy-to-understand insights, allowing you to focus on analysis rather than raw data.",
                },
                {
                  q: "Is Zippin AI helpful for project management?",
                  a: "Absolutely! Project managers can use Zippin AI to design clear workflows, team structures, timelines, and more, all visualized in a way that enhances project clarity.",
                },
                {
                  q: "How secure is my data on Zippin AI?",
                  a: "Zippin AI uses state-of-the-art encryption and security practices to protect your data and ensure it remains confidential.",
                },
                {
                  q: "Does Zippin AI support multiple languages?",
                  a: "Yes, Zippin AI is available in multiple languages, making it easy for global teams to collaborate and communicate.",
                },
                {
                  q: "What integrations does Zippin AI offer?",
                  a: "Zippin AI integrates with popular tools like Google Workspace, Microsoft Office, Slack, and more to ensure a seamless workflow and enhanced collaboration.",
                },
                {
                  q: "Is Zippin AI suitable for eCommerce?",
                  a: "Yes, Zippin AI can help eCommerce businesses visualize customer journeys, product flows, and inventory management, all within an intuitive interface.",
                },
                {
                  q: "Does Zippin AI help with SEO strategies?",
                  a: "While Zippin AI doesn’t directly generate SEO content, it can help you visualize SEO strategies, keyword maps, and website structures to optimize your site effectively.",
                },
                {
                  q: "Can I adjust the level of detail in my visuals?",
                  a: "Yes, Zippin AI lets you control the level of detail in your visuals, offering simplified, medium, or detailed views based on your audience’s needs.",
                },
                {
                  q: "Can Zippin AI assist legal professionals?",
                  a: "Yes, Zippin AI is valuable for legal professionals, allowing them to visualize legal processes, contract structures, and case workflows, although accuracy should be verified by experts.",
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
                src={zi1}
                alt="trogo"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={zi2}
                alt="trigo"
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
                    Why <strong>Zippin AI</strong> is the Ideal Tool for
                    Simplifying, Organizing, and Streamlining Your Content
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>Zippin AI</strong> enables individuals and teams to
                    quickly transform raw, disorganized data into structured,
                    actionable insights. Whether you’re drafting reports,
                    creating educational content, or summarizing key points,
                    here’s why <strong>Zippin AI</strong> is trusted by so many:
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
                      <strong>Quick Content Organization:</strong> Instantly
                      converts dense information into easy-to-read summaries,
                      visual diagrams, or charts to accelerate understanding.
                    </li>
                    <li className="mb-3">
                      <strong>Collaborative Features:</strong> Built-in tools
                      enable teams to co-edit, share feedback, and refine
                      content in real time, ensuring smoother teamwork.
                    </li>
                    <li className="mb-3">
                      <strong>Customizable Templates:</strong> Offers a variety
                      of pre-designed layouts and formats for different use
                      cases, from business reports to creative projects.
                    </li>
                    <li className="mb-3">
                      <strong>User-Friendly Interface:</strong> Designed with
                      simplicity in mind, <strong>Zippin AI</strong> allows you
                      to focus on the content, not the technology.
                    </li>
                    <li className="mb-3">
                      <strong>AI-Powered Content Generation:</strong>{" "}
                      Automatically generates structured outputs like summaries,
                      infographics, and reports from your raw text, saving you
                      time and effort.
                    </li>
                    <li className="mb-3">
                      <strong>Seamless Integrations:</strong> Syncs effortlessly
                      with popular tools like Google Docs, Slack, and Microsoft
                      Teams, allowing for seamless content management within
                      your existing workflow.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-info btn-sm">
                      Try <strong>Zippin AI</strong> — Unlock Faster, Smarter
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
              Why Choose <strong>Zippin AI</strong> for Streamlined Content
              Simplification and Efficiency
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>Zippin AI</strong> simplifies content management by
              transforming complex data into easily digestible formats. It
              enhances team collaboration, accelerates decision-making, and
              optimizes communication for various business needs.
            </p>

            {/* Zippin AI Section */}
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
                <h5 className="text-info text-start mb-4">
                  ✅ Zippin AI - Pros
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Fast Content Breakdown:</strong> Converts complex
                    topics into simple, actionable insights in seconds,
                    enhancing workflow efficiency.
                  </li>
                  <li className="mb-2">
                    <strong>Customizable Output Formats:</strong> Offers a
                    variety of output types—such as summaries, charts, and
                    infographics—tailored to different use cases.
                  </li>
                  <li className="mb-2">
                    <strong>Collaborative Workflows:</strong> Enables teams to
                    edit and refine content together in real time, improving
                    collaboration and idea exchange.
                  </li>
                  <li className="mb-2">
                    <strong>Contextual Recommendations:</strong> Suggests the
                    best ways to present or structure content, ensuring clarity
                    and purpose in all deliverables.
                  </li>
                  <li className="mb-2">
                    <strong>Effortless Integration:</strong> Connects seamlessly
                    with popular tools and platforms, making it easy to
                    incorporate into existing workflows.
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
                  ⚠️ Zippin AI - Cons
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Dependence on Internet:</strong> Many core features
                    require an active internet connection, limiting offline
                    capabilities.
                  </li>
                  <li className="mb-2">
                    <strong>Initial Learning Curve:</strong> New users might
                    need some time to get accustomed to the interface and fully
                    utilize advanced features.
                  </li>
                  <li className="mb-2">
                    <strong>Limitations on Free Plans:</strong> Heavy users may
                    face restrictions in the free version and need to upgrade
                    for full functionality.
                  </li>
                  <li className="mb-2">
                    <strong>Challenges with Large Files:</strong> Processing
                    large documents or datasets may cause slowdowns or delays in
                    performance, especially on lower-spec devices.
                  </li>
                  <li className="mb-2">
                    <strong>Excessive Customization Options:</strong> The wide
                    range of customization features can overwhelm users,
                    particularly those new to content editing tools.
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
              Explore Powerful Alternatives to Zippin AI for Seamless Data
              Structuring and Clarity
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>Zippin AI</strong> is designed to simplify complex
              workflows into streamlined solutions, other tools offer unique
              capabilities in data visualization, simplification, and content
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
                    <strong>InsightFlow</strong>: Transforms raw data into
                    actionable insights with intuitive flowcharts and
                    visualizations, ideal for business teams and analysts.
                  </li>
                  <li className="mb-2">
                    <strong>ClarityForge</strong>: Breaks down complex reports
                    into easy-to-digest summaries, tailored for professionals
                    seeking quick clarity without losing key information.
                  </li>
                  <li className="mb-2">
                    <strong>FlowSynth</strong>: Converts abstract ideas into
                    simple, visual flow diagrams, perfect for project managers
                    and strategists.
                  </li>
                  <li className="mb-2">
                    <strong>PureMap</strong>: Creates structured mind maps from
                    disjointed thoughts, assisting creative teams and developers
                    in brainstorming and planning.
                  </li>
                  <li className="mb-2">
                    <strong>LogicGrid</strong>: Allows non-technical users to
                    create and manage logic flows with a drag-and-drop
                    interface, simplifying content management tasks.
                  </li>
                  <li className="mb-2">
                    <strong>ConciseCraft</strong>: Takes lengthy reports and
                    distills them into brief, impactful statements while
                    maintaining the original tone and context.
                  </li>
                  <li className="mb-2">
                    <strong>SketchFlow</strong>: Turns complex documentation
                    into visual diagrams that facilitate collaboration and
                    understanding within teams.
                  </li>
                  <li className="mb-2">
                    <strong>SnapBrief</strong>: Perfect for executives, it
                    summarizes long documents into quick-read formats without
                    losing critical details.
                  </li>
                  <li className="mb-2">
                    <strong>ResearchSharp</strong>: Helps researchers extract
                    key insights from large datasets or technical reports,
                    streamlining the information retrieval process.
                  </li>
                  <li className="mb-2">
                    <strong>WireFrameGen</strong>: Converts brainstorming notes
                    into structured wireframes and outlines, ideal for product
                    development and planning.
                  </li>
                  <li className="mb-2">
                    <strong>LegalSimplify</strong>: Simplifies legal texts,
                    contracts, and dense manuals while ensuring that all
                    critical details and clauses are preserved.
                  </li>
                  <li className="mb-2">
                    <strong>DataPulse</strong>: Identifies important data points
                    and trends from large datasets to help businesses make
                    faster, informed decisions.
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
        <div className="container">
  <div className="row align-items-center mb-4">

    {/* Image Section - appears first on mobile, second on desktop */}
    <div className="col-12 col-md-6 order-1 order-md-2 text-center mb-3 mb-md-0">
      <img
        src={zippin}
        alt="Zippin AI"
        className="img-fluid"
        style={{ maxHeight: "300px", objectFit: "contain" }}
      />
    </div>

    {/* Text Section - appears second on mobile, first on desktop */}
    <div className="col-12 col-md-6 order-2 order-md-1">
      <p className="text-primary">Write better, faster</p>
      <h1>Zippin AI:</h1>
      <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
      <p>
        Zippin AI is a revolutionary retail technology platform that powers
        checkout-free stores using AI, computer vision, sensor fusion, and deep
        learning. It eliminates the need for traditional checkouts, allowing
        customers to enter, pick their items, and leave — while the system
        automatically tracks and charges them.
      </p>
      <div className="mb-3">
        <a
          href="https://www.getzippin.com/"
          rel="noopener noreferrer"
          className="btn btn-primary me-2"
        >
          Explore Tool
        </a>
      </div>
    </div>

  </div>
</div>


          <section style={{ backgroundColor: "", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="">
                Simplify Complex Workflows—Achieve Precision with Zippin AI
              </p>
              <h2
                className="text-white"
                style={{ fontWeight: "600", marginBottom: "1rem" }}
              >
                Experience How Zippin AI Transforms Complex Tasks into
                Effortless Solutions
              </h2>
              <p
                style={{
                  color: "#ccc",
                  marginBottom: "2rem",
                  fontStyle: "italic",
                }}
              >
                Zippin AI streamlines intricate processes into actionable, clear
                results—empowering you with smart, intuitive solutions every
                time.
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
            .zippin-step1 {
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
                      Dynamic Data Segmentation
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Zippin AI breaks down complex data into structured,
                      digestible segments, ensuring clarity and efficient
                      decision-making.
                    </p>
                    <div className="zippin-step1">1</div>
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
            .zippin-step2 {
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
                      Seamless Communication Tailoring
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Whether professional or casual, Zippin AI adjusts tone and
                      style to match your communication needs and audience
                      expectations.
                    </p>
                    <div className="zippin-step2">2</div>
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
            .zippin-step3 {
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
                      Guaranteed Originality and Precision
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Zippin AI ensures that each output is one-of-a-kind, free
                      from plagiarism, and accurately reflects your core
                      insights.
                    </p>
                    <div className="zippin-step3">3</div>
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
            <h4 className="mb-3">Ready to get started with Zippin AI?</h4>
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

export default Zippin;
