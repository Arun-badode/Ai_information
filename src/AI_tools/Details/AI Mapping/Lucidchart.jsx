import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";

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
const Lucidchart = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="Lucidchart AI Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Transform Your Content with Precision and Innovation Using
                  Lucidchart AI
                </p>
                <h3>
                  Effortless and Intelligent Content Enhancement for Every Need
                </h3>
              </div>
              {[
                {
                  icon: "🔍",
                  title: "Clear and Concise Content Refinement",
                  desc: "Lucidchart AI enhances the clarity of your content, ensuring that your ideas are communicated with precision and impact.",
                },
                {
                  icon: "🖌️",
                  title: "Versatile Writing Styles",
                  desc: "Whether you need a formal, casual, or creative tone, Lucidchart AI can tailor the writing style to meet your specific needs.",
                },
                {
                  icon: "🌐",
                  title: "Global Language and Format Support",
                  desc: "Lucidchart AI supports multiple languages and file formats (DOCX, PDF, TXT), making it adaptable for diverse content requirements.",
                },
                {
                  icon: "✍️",
                  title: "Plagiarism-Free and Original Output",
                  desc: "Lucidchart AI guarantees that every piece of content is unique and free of plagiarism, ensuring the integrity of your work.",
                },
                {
                  icon: "🎯",
                  title: "Context-Aware Content Enhancement",
                  desc: "Lucidchart AI refines your content based on its context, making it more relevant and compelling to your audience.",
                },
                {
                  icon: "📚",
                  title: "Ideal for Various Content Forms",
                  desc: "Whether you're working on reports, academic papers, articles, or creative writing, Lucidchart AI produces polished and professional content.",
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
                  q: "What is Lucidchart AI?",
                  a: "Lucidchart AI is a powerful tool designed to help users visualize complex data, workflows, and ideas by automatically generating diagrams, flowcharts, and other visual content. It simplifies the process of creating clear and professional visuals for various purposes.",
                },
                {
                  q: "How does Lucidchart AI work?",
                  a: "Lucidchart AI uses advanced machine learning algorithms to analyze data and concepts, transforming them into easy-to-understand visual diagrams. It automatically suggests diagram layouts, icons, and designs that best represent your content.",
                },
                {
                  q: "Is the content from Lucidchart AI free of copyright issues?",
                  a: "Yes, all visuals created by Lucidchart AI are free of copyright concerns. The platform ensures that the generated content is unique and safe for use across a variety of platforms.",
                },
                {
                  q: "Can I customize how Lucidchart AI generates diagrams?",
                  a: "Absolutely! Lucidchart AI allows you to adjust the style, layout, and level of detail in your diagrams, offering flexibility for different needs, from simple flowcharts to complex process maps.",
                },
                {
                  q: "Can Lucidchart AI handle large datasets?",
                  a: "Yes, Lucidchart AI is optimized to handle large datasets, making it ideal for creating diagrams from complex data sources such as spreadsheets and databases.",
                },
                {
                  q: "What file formats are supported by Lucidchart AI?",
                  a: "Lucidchart AI supports a wide range of file formats, including CSV, PNG, SVG, PDF, and more, enabling seamless export of your diagrams in various formats.",
                },
                {
                  q: "Is Lucidchart AI free to use?",
                  a: "Lucidchart AI offers both free and premium versions. The free version provides access to basic features, while the premium version includes advanced diagramming tools, integrations, and additional customization options.",
                },
                {
                  q: "Can I export my diagrams after creating them?",
                  a: "Yes, once your diagram is complete, you can export it in various formats such as PNG, PDF, SVG, and more, depending on your subscription.",
                },
                {
                  q: "Is Lucidchart AI suitable for students?",
                  a: "Definitely! Students can use Lucidchart AI to visualize concepts, create mind maps, and design flowcharts, enhancing learning and understanding of complex topics.",
                },
                {
                  q: "Does Lucidchart AI ensure plagiarism-free content?",
                  a: "Yes, all diagrams and visuals generated by Lucidchart AI are original, ensuring that your work remains free from plagiarism and is unique.",
                },
                {
                  q: "Is Lucidchart AI user-friendly?",
                  a: "Yes, Lucidchart AI features a simple, intuitive interface, making it easy for users with varying levels of experience to create professional diagrams without technical expertise.",
                },
                {
                  q: "Can I set a specific style for my diagrams?",
                  a: "Absolutely! Lucidchart AI offers a range of templates and customizable options to match your desired style, whether it's formal, creative, technical, or casual.",
                },
                {
                  q: "Can businesses use Lucidchart AI?",
                  a: "Yes, Lucidchart AI is perfect for businesses looking to streamline their visual content creation. It's ideal for creating process flows, organizational charts, presentations, and much more.",
                },
                {
                  q: "Does Lucidchart AI store my diagrams or data?",
                  a: "Lucidchart AI does not retain any of your diagrams or data after processing. Your content is securely handled and stored in compliance with privacy regulations.",
                },
                {
                  q: "Can I access Lucidchart AI from my mobile device?",
                  a: "Yes, Lucidchart AI is fully responsive and accessible from any device with an internet connection, allowing you to work on diagrams and flowcharts from anywhere.",
                },
                {
                  q: "Is technical knowledge required to use Lucidchart AI?",
                  a: "No, Lucidchart AI is designed to be user-friendly, requiring no technical expertise. Anyone can easily create and customize diagrams with just a few clicks.",
                },
                {
                  q: "Does Lucidchart AI only generate diagrams?",
                  a: "No, Lucidchart AI goes beyond diagram creation. It helps visualize data, generate mind maps, flowcharts, organizational charts, and more, to help you communicate ideas clearly.",
                },
                {
                  q: "How quickly does Lucidchart AI generate diagrams?",
                  a: "Lucidchart AI can generate diagrams in just seconds, offering quick results even for large or complex datasets.",
                },
                {
                  q: "Do I need to install anything to use Lucidchart AI?",
                  a: "No installation is required! Lucidchart AI is a cloud-based tool, accessible directly through any modern web browser for easy, hassle-free usage.",
                },
                {
                  q: "Where can I get support for Lucidchart AI?",
                  a: "You can contact Lucidchart AI support through their help center or contact form on the website, where the support team is available to assist with any questions or issues.",
                },
                {
                  q: "Can Lucidchart AI be used for creative projects?",
                  a: "Yes, Lucidchart AI is great for creative projects like brainstorming sessions, story mapping, and idea visualizations, making it a versatile tool for various creative endeavors.",
                },
                {
                  q: "Can I use Lucidchart AI to summarize complex data?",
                  a: "Yes, Lucidchart AI can take complex data and represent it visually in simplified diagrams, making it easier to understand and present key information.",
                },
                {
                  q: "Is Lucidchart AI useful for project managers?",
                  a: "Definitely! Project managers can use Lucidchart AI to create Gantt charts, workflows, and team structures, helping them visualize and manage projects more effectively.",
                },
                {
                  q: "How secure is Lucidchart AI?",
                  a: "Lucidchart AI prioritizes the security of your data by implementing strong encryption and privacy measures to ensure the protection of your diagrams and information.",
                },
                {
                  q: "Can Lucidchart AI handle multilingual content?",
                  a: "Yes, Lucidchart AI supports multiple languages, making it a great choice for international teams or projects requiring localization.",
                },
                {
                  q: "Does Lucidchart AI offer any integrations with other tools?",
                  a: "Yes, Lucidchart AI integrates with popular tools such as Google Drive, Microsoft Teams, and Slack, allowing for seamless sharing and collaboration on visual content.",
                },
                {
                  q: "Is Lucidchart AI suitable for eCommerce content?",
                  a: "Yes, Lucidchart AI can help create product diagrams, flowcharts, and visual content for eCommerce sites, enhancing the presentation of your products and services.",
                },
                {
                  q: "Can Lucidchart AI assist with SEO content?",
                  a: "While Lucidchart AI doesn't directly assist with SEO content, it can help visualize SEO strategies, keyword maps, and other important processes to improve your website's performance.",
                },
                {
                  q: "Can I adjust the complexity of my diagrams with Lucidchart AI?",
                  a: "Yes, Lucidchart AI allows you to adjust the complexity of your diagrams, from simple flowcharts to intricate multi-layered diagrams, based on your specific needs.",
                },
                {
                  q: "Can I use Lucidchart AI for legal documentation?",
                  a: "Lucidchart AI can assist in visualizing legal processes, contracts, and workflows, but we recommend consulting legal experts for precise legal language and details.",
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
                  <h3 className="fw-bold mb-4 text-start text-primary">
                    Why <strong>Lucidchart AI</strong> is the Ultimate Tool for
                    Visual Content Clarity and Simplification
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>Lucidchart AI</strong> transforms complex workflows,
                    ideas, and data into intuitive, visual representations that
                    enhance clarity. Whether you’re designing a process flow,
                    brainstorming ideas, or creating detailed diagrams, here's
                    why <strong>Lucidchart AI</strong> is the go-to tool for
                    visual content creation:
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
                      <strong>Streamlined Visual Mapping:</strong> Effortlessly
                      converts complex concepts and data into clear,
                      easy-to-understand diagrams, making it easier to
                      communicate ideas visually.
                    </li>
                    <li className="mb-3">
                      <strong>Collaborative Experience:</strong> Facilitates
                      real-time collaboration, enabling teams to work together,
                      edit, and refine visuals simultaneously, enhancing team
                      productivity and communication.
                    </li>
                    <li className="mb-3">
                      <strong>Customizable Design Options:</strong> Offers a
                      variety of templates and diagramming tools that allow you
                      to tailor visuals to match your specific project needs,
                      ensuring maximum flexibility.
                    </li>
                    <li className="mb-3">
                      <strong>Intuitive and User-Friendly Interface:</strong>{" "}
                      With a simple, drag-and-drop interface,{" "}
                      <strong>Lucidchart AI</strong> makes it easy for
                      anyone—regardless of technical experience—to create
                      professional-quality diagrams.
                    </li>
                    <li className="mb-3">
                      <strong>Advanced Automation Features:</strong> Quickly
                      generates accurate, automated diagrams based on data
                      inputs, saving time and ensuring consistency across your
                      visual content.
                    </li>
                    <li className="mb-3">
                      <strong>Integration with Popular Platforms:</strong>{" "}
                      Seamlessly integrates with platforms like Google Drive,
                      Microsoft Teams, and Slack, allowing for effortless
                      sharing and collaboration across teams and organizations.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Explore <strong>Lucidchart AI</strong> — Unlock the Power
                      of Visual Communication and Efficiency
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
              Why <strong>Lucidchart AI</strong> is a Leading Solution for
              Content Visualization and Simplification
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>Lucidchart AI</strong> simplifies complex ideas, diagrams,
              and workflows, making them easy to understand and communicate
              effectively. It enhances collaboration by transforming abstract
              concepts into clear, visual content.
            </p>

            {/* Lucidchart AI Section */}
            <div className="row justify-content-center gap-2 mb-5">
              {/* Lucidchart AI Pros */}
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
                  ✅ Lucidchart AI - Pros
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Visual Clarity:</strong> Transforms complex data and
                    ideas into clear, easily digestible diagrams, making it
                    easier to present to different audiences.
                  </li>
                  <li className="mb-2">
                    <strong>Collaboration-Friendly:</strong> Facilitates
                    real-time collaboration, enabling teams to work together and
                    make decisions based on shared visual data.
                  </li>
                  <li className="mb-2">
                    <strong>Interactive Diagrams:</strong> Allows users to
                    create interactive, clickable diagrams that enhance
                    understanding by enabling deeper exploration of content.
                  </li>
                  <li className="mb-2">
                    <strong>Versatile Design Tools:</strong> Offers a wide
                    variety of templates and diagramming tools, making it
                    suitable for diverse use cases like process mapping,
                    brainstorming, and project management.
                  </li>
                  <li className="mb-2">
                    <strong>Cloud Integration:</strong> Seamlessly integrates
                    with other cloud-based platforms such as Google Drive,
                    Microsoft Teams, and Slack for smooth workflow.
                  </li>
                </ul>
              </div>

              {/* Lucidchart AI Cons */}
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
                  ⚠️ Lucidchart AI - Cons
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Dependence on Internet Connection:</strong> Requires
                    a stable internet connection to work, limiting its usability
                    in offline scenarios.
                  </li>
                  <li className="mb-2">
                    <strong>Learning Curve:</strong> While powerful, the tool
                    can have a learning curve for new users, especially when it
                    comes to mastering advanced features and diagram
                    customization.
                  </li>
                  <li className="mb-2">
                    <strong>Subscription Costs:</strong> Some advanced features,
                    like extensive template libraries and team collaboration
                    tools, are only available with a premium subscription.
                  </li>
                  <li className="mb-2">
                    <strong>
                      Limited Customization for Non-Technical Users:
                    </strong>{" "}
                    While the platform is versatile, users without technical
                    backgrounds may find it challenging to fully leverage all
                    customization options.
                  </li>
                  <li className="mb-2">
                    <strong>Performance Issues with Large Files:</strong> Users
                    may experience lag or performance issues when working with
                    large, complex diagrams, particularly with heavy graphics or
                    data.
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
              Discover Leading Alternatives to Lucidchart AI for Efficient
              Content Simplification
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>Lucidchart AI</strong> excels in simplifying complex
              concepts and making them clear and actionable, there are other
              remarkable tools available, each offering unique capabilities for
              content refinement, paraphrasing, and summarization.
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
                    <strong>Lucidchart AI</strong>: Ideal for simplifying
                    intricate ideas into clear, concise diagrams and text while
                    maintaining the original meaning and structure.
                  </li>
                  <li className="mb-2">
                    <strong>FlowchartPro</strong>: Specializes in visualizing
                    complex processes through easy-to-understand flowcharts,
                    making it a great choice for process mapping and
                    brainstorming.
                  </li>
                  <li className="mb-2">
                    <strong>ClearText</strong>: Focuses on simplifying textual
                    content, breaking down jargon-heavy documents into more
                    reader-friendly language, ideal for educational and training
                    materials.
                  </li>
                  <li className="mb-2">
                    <strong>MindFlow</strong>: A tool designed for organizing
                    ideas visually, transforming complex thoughts into organized
                    mind maps that help users see the bigger picture.
                  </li>
                  <li className="mb-2">
                    <strong>Visio AI</strong>: Offers powerful diagramming
                    capabilities for simplifying workflows, processes, and data
                    visualization, providing a user-friendly interface for
                    complex concepts.
                  </li>
                  <li className="mb-2">
                    <strong>ClarityPro</strong>: Helps refine and streamline
                    business communications by simplifying documents and
                    reports, making them more concise and easier to understand.
                  </li>
                  <li className="mb-2">
                    <strong>DiagramMaster</strong>: Specializes in turning
                    data-heavy content into visually appealing and
                    easy-to-understand diagrams, helping users digest and share
                    key information quickly.
                  </li>
                  <li className="mb-2">
                    <strong>SmartSynth</strong>: A tool for summarizing and
                    synthesizing large volumes of information, ensuring that the
                    essential content is highlighted without unnecessary detail.
                  </li>
                  <li className="mb-2">
                    <strong>BriefBot</strong>: Efficiently condenses lengthy
                    articles, research papers, and reports, maintaining only the
                    most relevant points for quicker consumption and
                    decision-making.
                  </li>
                  <li className="mb-2">
                    <strong>DesignFlow AI</strong>: Offers a unique approach to
                    simplifying design concepts, creating visually appealing
                    layouts and wireframes from complex ideas in no time.
                  </li>
                  <li className="mb-2">
                    <strong>DocClear</strong>: Ideal for simplifying legal,
                    medical, or technical documents, ensuring clarity while
                    preserving essential technical details for professionals.
                  </li>
                  <li className="mb-2">
                    <strong>Insightify</strong>: Focuses on turning complex
                    reports into easily digestible summaries with key insights,
                    making it easier to extract actionable information from
                    detailed documents.
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
        <a
          href="/Aitools"
          className="d-inline-block text-white text-decoration-none ml-3 py-1"
        >
          <i className="bi bi-arrow-left me-2"></i>Back to Directory{" "}
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
              <h1>Lucidchart AI:</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Lucidchart AI is a powerful mind mapping and diagramming tool
                that integrates artificial intelligence to help users streamline
                their workflows, visualize tasks, and collaborate effectively.
                With Lucidchart, users can create visually appealing mind maps,
                diagrams, and flowcharts, making it an essential tool for
                brainstorming, project planning, content creation, task
                management, and decision-making. The AI-powered features enhance
                productivity by automatically prioritizing tasks, providing
                insights, and optimizing task organization. Whether you’re
                managing a project, brainstorming ideas, or planning a business
                strategy, Lucidchart AI is a versatile solution that improves
                efficiency and clarity.
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
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5IyEpRsYY8JsmOlBNKKmWf5jlOBFs3Ustg&s"
                style={{ MaxWidth: "100%", height: "300px" }}
              />
            </div>
          </div>

          <section style={{ backgroundColor: "#283e55", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">
                Unlock the Potential of Simplicity—Transform Complex Ideas with
                Lucidchart AI
              </p>
              <h2
                className="text-white"
                style={{ fontWeight: "600", marginBottom: "1rem" }}
              >
                Discover How Lucidchart AI Simplifies Complex Concepts into
                Clear, Actionable Insights
              </h2>
              <p
                style={{
                  color: "#ccc",
                  marginBottom: "2rem",
                  fontStyle: "italic",
                }}
              >
                Lucidchart AI breaks down intricate ideas into structured,
                digestible content, ensuring clarity and impact while
                maintaining full originality.
              </p>

              <div className="row g-4">
                {/* Step 1 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#2f9fd4",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
            .lucidchart-step1 {
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
                      Deep Content Analysis
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Lucidchart AI examines your content thoroughly,
                      simplifying complex ideas and highlighting key points for
                      easy comprehension and improved communication.
                    </p>
                    <div className="lucidchart-step1">1</div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#2f9fd4",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
            .lucidchart-step2 {
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
                      Tailored Content Refinement
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Customize your content’s tone, structure, and style to
                      suit any audience or purpose, from professional to
                      creative communication.
                    </p>
                    <div className="lucidchart-step2">2</div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#2f9fd4",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
            .lucidchart-step3 {
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
                      Seamless, Original Output
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Lucidchart AI ensures that the content generated is
                      completely original, free from plagiarism, and ready for
                      immediate use.
                    </p>
                    <div className="lucidchart-step3">3</div>
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
            <h4 className="mb-3">Ready to get started with Lucidchart AI?</h4>
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

export default Lucidchart;
