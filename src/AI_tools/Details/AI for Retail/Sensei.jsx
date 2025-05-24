import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import sensei from "../../../../public/assets/Img/Ai  for Retail/6.png";
import se1 from "../../../../public/assets/Img/Ai  for Retail/se-s2.png";
import se2 from "../../../../public/assets/Img/Ai  for Retail/se-s1.png";



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
const Sensei = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="Sensei AI Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Unlock the Potential of Sensei AI
                </p>
                <h3>
                  Transform Your Data into Actionable Insights with Intelligent
                  Visualizations
                </h3>
              </div>
              {[
                {
                  icon: "📊",
                  title: "Powerful Data Visualizations",
                  desc: "Sensei AI turns raw data into visually engaging formats like interactive graphs and charts, enabling faster and smarter decisions.",
                },
                {
                  icon: "🌐",
                  title: "Global Accessibility & Export Flexibility",
                  desc: "Easily work in multiple languages and export visuals in formats like PDF, PNG, and SVG, ensuring effortless sharing and integration.",
                },
                {
                  icon: "⚡",
                  title: "Lightning-Fast Data Processing",
                  desc: "Generate visualizations instantly, even from large datasets, ensuring that insights are delivered without any wait time.",
                },
                {
                  icon: "🛡",
                  title: "Top-Tier Security",
                  desc: "Sensei AI implements advanced encryption protocols, guaranteeing that your data is secure and protected throughout the process.",
                },
                {
                  icon: "🎨",
                  title: "Customizable Design Options",
                  desc: "Modify layouts, themes, and components of your visuals to align them with your branding or personal preferences.",
                },
                {
                  icon: "🏢",
                  title: "Ideal for Diverse Applications",
                  desc: "Whether for marketing, presentations, or team collaboration, Sensei AI’s versatile platform is suitable for all types of professional and creative projects.",
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
                  q: "What is Sensei AI?",
                  a: "Sensei AI is an advanced platform that streamlines data management, generates powerful insights, and simplifies decision-making through interactive visuals and AI-powered analytics.",
                },
                {
                  q: "How does Sensei AI work?",
                  a: "Sensei AI leverages sophisticated machine learning algorithms to analyze raw data and transform it into actionable insights, offering visual reports and summaries that are easy to interpret.",
                },
                {
                  q: "Is the content generated by Sensei AI secure?",
                  a: "Yes, Sensei AI prioritizes data security by using encryption and adhering to strict privacy policies to ensure that all generated content is safe for professional and personal use.",
                },
                {
                  q: "Can I personalize the visuals created by Sensei AI?",
                  a: "Absolutely! Sensei AI offers full customization options, allowing you to adjust the layout, color schemes, and components to match your desired look and feel.",
                },
                {
                  q: "Can Sensei AI handle large datasets?",
                  a: "Yes, Sensei AI is optimized for handling large and complex datasets, making it an ideal tool for businesses, analysts, and teams working with massive amounts of data.",
                },
                {
                  q: "Which file formats can I export from Sensei AI?",
                  a: "Sensei AI supports various export options, including PDF, PNG, SVG, and CSV, ensuring compatibility with multiple platforms and software for easy sharing and presentation.",
                },
                {
                  q: "Is Sensei AI free to use?",
                  a: "Sensei AI offers both free and premium plans. The free plan provides essential features, while the premium plan unlocks advanced functionalities, including AI-driven insights and expanded collaboration tools.",
                },
                {
                  q: "Can I share or download my creations from Sensei AI?",
                  a: "Yes, you can easily share or download your visuals through cloud integration or direct export options available within the platform.",
                },
                {
                  q: "Is Sensei AI suitable for educational purposes?",
                  a: "Definitely! Sensei AI is an excellent tool for educators and students, providing intuitive ways to visualize concepts, create presentations, and simplify complex topics.",
                },
                {
                  q: "Does Sensei AI create original content?",
                  a: "Yes, Sensei AI generates original content that is both unique and customizable, reducing the risk of duplication or plagiarism.",
                },
                {
                  q: "Is Sensei AI easy to use for beginners?",
                  a: "Yes, Sensei AI is designed to be user-friendly, so even beginners can create and modify data visualizations without any prior technical knowledge.",
                },
                {
                  q: "Can I select a visual theme or style in Sensei AI?",
                  a: "Yes, Sensei AI offers a variety of pre-designed themes and templates, allowing you to choose the perfect style for your visual content.",
                },
                {
                  q: "Is Sensei AI beneficial for businesses?",
                  a: "Yes, Sensei AI helps businesses automate processes, visualize workflows, and generate clear reports that aid in decision-making, improving overall efficiency and communication.",
                },
                {
                  q: "How does Sensei AI ensure data privacy?",
                  a: "Sensei AI uses industry-standard encryption and complies with strict data privacy regulations to protect your information and ensure it remains confidential.",
                },
                {
                  q: "Can I access Sensei AI on my mobile device?",
                  a: "Yes, Sensei AI is fully responsive and can be accessed via any modern web browser on both desktop and mobile devices.",
                },
                {
                  q: "Do I need technical expertise to use Sensei AI?",
                  a: "No, Sensei AI is designed to be intuitive and easy to use, so you don’t need technical expertise to get started.",
                },
                {
                  q: "Does Sensei AI only create flowcharts?",
                  a: "No, Sensei AI can create a variety of visualizations, including infographics, organizational charts, data reports, mind maps, and more.",
                },
                {
                  q: "How quickly can Sensei AI generate content?",
                  a: "Sensei AI can generate visuals in seconds, even when processing large datasets, ensuring quick and efficient results.",
                },
                {
                  q: "Is Sensei AI a cloud-based platform?",
                  a: "Yes, Sensei AI operates entirely in the cloud, so you can access it from any device without the need for installations.",
                },
                {
                  q: "What support options are available for Sensei AI users?",
                  a: "Sensei AI provides comprehensive customer support through a help center, live chat, and email assistance to resolve any issues or answer questions.",
                },
                {
                  q: "Can Sensei AI be used for creative projects?",
                  a: "Yes, Sensei AI is perfect for creative tasks like designing marketing materials, creating content strategies, and visual storytelling.",
                },
                {
                  q: "Can Sensei AI simplify complex data visually?",
                  a: "Yes, Sensei AI specializes in transforming complex data into clear, visually engaging insights that are easy to analyze and share.",
                },
                {
                  q: "Is Sensei AI useful for project management?",
                  a: "Yes, Sensei AI is ideal for project managers, allowing them to visualize timelines, tasks, and team structures, which enhances project organization and tracking.",
                },
                {
                  q: "How secure is my data with Sensei AI?",
                  a: "Sensei AI ensures the highest level of security, using strong encryption and compliance with privacy standards to protect your data.",
                },
                {
                  q: "Does Sensei AI support multiple languages?",
                  a: "Yes, Sensei AI supports multiple languages, making it accessible to global teams and users.",
                },
                {
                  q: "What integrations does Sensei AI support?",
                  a: "Sensei AI integrates with popular tools like Google Workspace, Microsoft Office, Slack, and others to streamline your workflow.",
                },
                {
                  q: "Is Sensei AI useful for eCommerce businesses?",
                  a: "Yes, Sensei AI helps eCommerce businesses visualize customer journeys, sales trends, and inventory management with clear and actionable insights.",
                },
                {
                  q: "Can Sensei AI assist with SEO strategies?",
                  a: "While Sensei AI does not directly generate SEO content, it can help visualize SEO strategies, track keyword performance, and structure website content.",
                },
                {
                  q: "Can I adjust the detail level in my visuals?",
                  a: "Yes, Sensei AI lets you customize the level of detail in your visuals to match the needs of your audience, from simple overviews to detailed reports.",
                },
                {
                  q: "Can Sensei AI be used by legal professionals?",
                  a: "Yes, Sensei AI is beneficial for legal professionals, enabling them to visualize processes, case workflows, and legal structures, though data accuracy should always be confirmed by experts.",
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
                src={se1}
                alt="sensei"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={se2}
                alt="sensei"
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
                    Why <strong>Sensei AI</strong> is the Ultimate Tool for
                    Smart Data Visualization, Optimization, and Collaboration
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>Sensei AI</strong> revolutionizes the way data is
                    managed, organized, and visualized. Whether you're dealing
                    with large datasets, complex reports, or creative project
                    planning, here’s why <strong>Sensei AI</strong> is a
                    game-changer:
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
                      <strong>Intelligent Data Structuring:</strong>{" "}
                      Automatically organizes complex data into clear,
                      accessible formats, ensuring that you can make informed
                      decisions quickly.
                    </li>
                    <li className="mb-3">
                      <strong>Real-Time Collaboration Features:</strong>{" "}
                      Designed to foster teamwork, Sensei AI enables real-time
                      collaboration, making it easy for teams to review and edit
                      documents simultaneously.
                    </li>
                    <li className="mb-3">
                      <strong>Highly Customizable Templates:</strong> Choose
                      from a wide variety of templates that cater to different
                      content needs, from professional reports to innovative
                      presentations.
                    </li>
                    <li className="mb-3">
                      <strong>Simple and Intuitive Interface:</strong> Focus on
                      the task at hand with a user-friendly interface that makes
                      it easy to navigate without requiring complex training or
                      knowledge.
                    </li>
                    <li className="mb-3">
                      <strong>AI-Driven Content Generation:</strong> Leverages
                      powerful AI algorithms to generate summaries, charts, and
                      reports, saving time and reducing manual effort.
                    </li>
                    <li className="mb-3">
                      <strong>Smooth Integration with Popular Tools:</strong>{" "}
                      Integrates seamlessly with widely-used tools like Google
                      Drive, Microsoft Office, and Slack, improving your
                      workflow without disrupting existing systems.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-info btn-sm">
                      Discover <strong>Sensei AI</strong> — Streamline Your Data
                      Management and Collaboration Today
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
              Why Choose <strong>Sensei AI</strong> for Smarter Data Management
              and Insights
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>Sensei AI</strong> specializes in transforming intricate
              datasets into clear, actionable insights, simplifying workflows,
              and facilitating informed decision-making. By automating key
              processes and fostering seamless collaboration, it allows teams to
              operate more effectively and efficiently.
            </p>

            {/* Sensei AI Section */}
            <div className="row justify-content-center gap-2 mb-5">
              {/* Pros */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #00b894",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#2c3e50",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-info text-start mb-4">
                  ✅ Sensei AI - Pros
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Smart Data Simplification:</strong> Transforms
                    complex datasets into easily understandable summaries,
                    allowing teams to focus on key insights rather than getting
                    bogged down in details.
                  </li>
                  <li className="mb-2">
                    <strong>Customizable Output Formats:</strong> Provides
                    various output options, such as interactive dashboards,
                    visual reports, and dynamic summaries, offering flexibility
                    for different business requirements.
                  </li>
                  <li className="mb-2">
                    <strong>Boosted Team Efficiency:</strong> Facilitates smooth
                    team collaboration by providing real-time data sharing,
                    enabling seamless updates and communication among team
                    members.
                  </li>
                  <li className="mb-2">
                    <strong>Optimized Data Organization:</strong> Offers
                    intelligent suggestions for data structuring, ensuring
                    consistency and clarity in how data is presented across
                    teams and departments.
                  </li>
                  <li className="mb-2">
                    <strong>Easy Integration:</strong> Integrates smoothly with
                    a variety of existing tools and platforms, minimizing
                    disruption and ensuring efficient adoption within
                    organizations.
                  </li>
                </ul>
              </div>

              {/* Cons */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #00b894",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#2c3e50",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-danger text-start mb-4">
                  ⚠ Sensei AI - Cons
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Dependence on Internet Connectivity:</strong> Sensei
                    AI’s performance relies heavily on a stable internet
                    connection, limiting offline access to certain features.
                  </li>
                  <li className="mb-2">
                    <strong>Learning Curve for Beginners:</strong> Users new to
                    AI-driven tools may experience a steep learning curve,
                    especially when navigating advanced features and interfaces.
                  </li>
                  <li className="mb-2">
                    <strong>Limitations in Free Tier:</strong> The free version
                    has certain feature restrictions, with premium capabilities
                    only accessible through paid subscriptions.
                  </li>
                  <li className="mb-2">
                    <strong>
                      Performance Constraints with Large Datasets:
                    </strong>{" "}
                    Working with very large datasets may result in slower
                    processing times, particularly on devices with limited
                    computing power or slower internet speeds.
                  </li>
                  <li className="mb-2">
                    <strong>Overwhelming Customization Options:</strong> The
                    wealth of customization settings can be overwhelming for new
                    users, making the setup process potentially more
                    time-consuming.
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
              Discover Powerful Alternatives to Sensei AI for Enhanced Data
              Visualization and Automation
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>Sensei AI</strong> excels in optimizing workflows
              and providing intelligent data insights, there are other tools in
              the market that specialize in unique aspects of data structuring,
              visualization, and automation.
            </p>
            <div className="row justify-content-center gap-2">
              <div
                className="col-lg-8 col-md-8 col-sm-12"
                style={{
                  border: "1px solid #3498db",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#34495e",
                  minHeight: "100%",
                }}
              >
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>InsightForge</strong>: A powerful tool for
                    visualizing complex data through customized graphs and
                    infographics, providing rapid insights for business leaders.
                  </li>
                  <li className="mb-2">
                    <strong>QuickReport</strong>: Ideal for professionals, it
                    turns detailed reports into brief, digestible summaries that
                    maintain essential context and key takeaways.
                  </li>
                  <li className="mb-2">
                    <strong>ConceptVisualizer</strong>: Converts abstract
                    concepts and ideas into clear visual models, perfect for
                    strategists and team leaders managing projects.
                  </li>
                  <li className="mb-2">
                    <strong>MindMapGenius</strong>: Helps teams and individuals
                    visualize ideas and processes by transforming them into
                    structured mind maps, making brainstorming and planning
                    easier.
                  </li>
                  <li className="mb-2">
                    <strong>FlowBuilder</strong>: A user-friendly tool for
                    non-technical users to design and visualize workflows
                    through drag-and-drop interfaces, ideal for content
                    creators.
                  </li>
                  <li className="mb-2">
                    <strong>DocSynthesis</strong>: Summarizes lengthy documents
                    and reports into concise, actionable insights, preserving
                    the core information while reducing complexity.
                  </li>
                  <li className="mb-2">
                    <strong>Diagrammatic</strong>: Turns complex documentation
                    and data into easy-to-understand diagrams, improving team
                    collaboration and understanding of technical subjects.
                  </li>
                  <li className="mb-2">
                    <strong>ExecutiveBrief</strong>: A tool designed for
                    executives, transforming detailed reports into clear,
                    concise summaries focusing on the most crucial points.
                  </li>
                  <li className="mb-2">
                    <strong>QuickInsights</strong>: Empowers researchers and
                    analysts by extracting key patterns and insights from large
                    datasets, streamlining data analysis and interpretation.
                  </li>
                  <li className="mb-2">
                    <strong>WireframeGen</strong>: Converts concepts and ideas
                    into structured wireframes, aiding product teams in
                    developing initial design prototypes for web or app
                    development.
                  </li>
                  <li className="mb-2">
                    <strong>LegalSimplify</strong>: Makes legal documents more
                    accessible by simplifying complicated terms and jargon,
                    while retaining the document's full integrity.
                  </li>
                  <li className="mb-2">
                    <strong>TrendSpotter</strong>: A data-driven tool that
                    identifies patterns and trends within large datasets,
                    helping businesses make informed decisions quickly and
                    accurately.
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
  <div className="row d-flex align-items-center justify-content-between mb-1 flex-column-reverse flex-md-row">
    {/* Left side (Text Section) */}
    <div className="col-md-6 col-12 mt-4 mt-md-0">
      <p className="text-primary">Write better, faster</p>
      <h1>Sensei AI:</h1>
      <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
      <p>
        Adobe Sensei AI is Adobe’s artificial intelligence and machine
        learning platform that powers intelligent features across Adobe
        Creative Cloud, Experience Cloud, and Document Cloud. It enables
        real-time personalization, automated creative workflows,
        predictive analytics, and smart content recommendations, helping
        businesses optimize their digital experiences.
      </p>
      <div className="mb-3">
        <a
          href="https://www.senseicopilot.com/"
          rel="noopener noreferrer"
          className="btn btn-primary me-2"
        >
          Explore Tool
        </a>
      </div>
    </div>

    {/* Right side (Image Section) */}
    <div className="col-md-6 col-12 text-center">
      <img
        src={sensei}
        alt="Sensei AI"
        style={{ maxWidth: "100%", height: "auto", maxHeight: "300px" }}
        className="img-fluid mb-4 mb-md-0"
      />
    </div>
  </div>

  {/* Keep rest of your sections here unchanged */}
</div>

      </div>
    </>
  );
};

export default Sensei;