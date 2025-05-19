import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import pensa from "../../../../public/assets/Img/Ai  for Retail/10.png";
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
const PensaSystem = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="System AI Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Unlock the Full Potential of AI-Powered Automation with System
                  AI
                </p>
                <h3>
                  Empowering Businesses with Smart Insights and Seamless
                  Automation
                </h3>
              </div>
              {[
                {
                  icon: "🤖",
                  title: "Smart Workflow Automation",
                  desc: "System AI automates repetitive tasks with precision, streamlining operations and empowering teams to focus on high-value activities.",
                },
                {
                  icon: "🌍",
                  title: "Global Accessibility & Seamless Integration",
                  desc: "System AI seamlessly integrates with various platforms and services, offering a flexible solution for teams worldwide, across different industries.",
                },
                {
                  icon: "⏱️",
                  title: "Real-Time Data Processing",
                  desc: "With its ability to process large datasets instantly, System AI delivers actionable insights in real-time, enabling rapid decision-making.",
                },
                {
                  icon: "🔒",
                  title: "Robust Data Security",
                  desc: "System AI employs advanced encryption and strict data protection standards to ensure the privacy and security of all your sensitive data.",
                },
                {
                  icon: "🎨",
                  title: "Fully Customizable Reports",
                  desc: "Design personalized reports and visualizations with System AI's flexible design tools, tailored to your specific project or business needs.",
                },
                {
                  icon: "📈",
                  title: "Comprehensive Data Analytics",
                  desc: "From marketing insights to financial performance, System AI provides in-depth analytics that help uncover key trends and opportunities for growth.",
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
                  q: "What is System AI?",
                  a: "System AI is an advanced platform designed to automate business processes, provide deep data insights, and streamline workflows using cutting-edge artificial intelligence and machine learning technologies.",
                },
                {
                  q: "How does System AI work?",
                  a: "System AI leverages sophisticated machine learning models to analyze vast datasets, automate repetitive tasks, and offer real-time insights, enabling businesses to make smarter, faster decisions.",
                },
                {
                  q: "Is the content generated by System AI secure?",
                  a: "Yes, System AI prioritizes security with robust encryption and strict adherence to industry-standard privacy protocols to protect your generated data and content.",
                },
                {
                  q: "Can I customize the visuals created by System AI?",
                  a: "Absolutely! System AI provides full customization options, allowing you to adjust design elements such as colors, themes, and layouts to fit your brand and preferences.",
                },
                {
                  q: "Can System AI handle large datasets?",
                  a: "Yes, System AI is designed to efficiently process and analyze large datasets, making it ideal for businesses that need to manage complex information at scale.",
                },
                {
                  q: "Which file formats can I export from System AI?",
                  a: "System AI supports a wide range of export formats, including PDF, PNG, CSV, and Excel, ensuring seamless integration with your existing tools for reporting and sharing.",
                },
                {
                  q: "Is System AI free to use?",
                  a: "System AI offers both free and premium plans. The free plan provides essential features, while the premium plan unlocks advanced AI tools and additional capabilities for more complex use cases.",
                },
                {
                  q: "Can I share or download my creations from System AI?",
                  a: "Yes, System AI allows you to easily share or download your creations via cloud integrations or direct file exports, making it simple to collaborate and present your work.",
                },
                {
                  q: "Is System AI suitable for educational purposes?",
                  a: "Yes, System AI is an excellent tool for education, offering interactive data visualizations and simplifying complex topics, making learning more engaging and effective.",
                },
                {
                  q: "Does System AI generate original content?",
                  a: "Yes, System AI creates original content based on your input, ensuring each output is unique and tailored to your specific needs.",
                },
                {
                  q: "Is System AI easy to use for beginners?",
                  a: "Absolutely! System AI features an intuitive, user-friendly interface that enables both technical and non-technical users to quickly generate powerful visualizations and insights.",
                },
                {
                  q: "Can I choose a visual style or theme in System AI?",
                  a: "Yes, System AI offers a variety of pre-designed themes and templates, making it easy to select a visual style that suits your business goals and brand identity.",
                },
                {
                  q: "Is System AI beneficial for businesses?",
                  a: "Definitely! System AI helps businesses automate tasks, extract key metrics, and visualize data in real-time, boosting decision-making and operational efficiency.",
                },
                {
                  q: "How does System AI protect data privacy?",
                  a: "System AI ensures data privacy with end-to-end encryption and compliance with relevant data protection regulations, keeping your data safe and secure.",
                },
                {
                  q: "Can I access System AI on my mobile device?",
                  a: "Yes, System AI is fully responsive, allowing users to access the platform from both desktop and mobile devices for maximum flexibility and convenience.",
                },
                {
                  q: "Do I need technical expertise to use System AI?",
                  a: "No, System AI is designed to be user-friendly, with a simple interface that makes it easy for anyone, regardless of their technical background, to use its features.",
                },
                {
                  q: "Does System AI only generate flowcharts?",
                  a: "No, System AI supports a wide range of visualizations, including charts, graphs, dashboards, and reports, giving you the flexibility to present data in various formats.",
                },
                {
                  q: "How quickly can System AI generate content?",
                  a: "System AI can generate reports and visualizations in seconds, even with large datasets, helping businesses make quick, data-driven decisions.",
                },
                {
                  q: "Is System AI a cloud-based platform?",
                  a: "Yes, System AI is fully cloud-based, allowing you to access it from anywhere without needing to install software or worry about updates.",
                },
                {
                  q: "What support options are available for System AI users?",
                  a: "System AI provides comprehensive support through a help center, live chat, and email, ensuring users have access to assistance whenever they need it.",
                },
                {
                  q: "Can System AI be used for creative projects?",
                  a: "Yes, System AI is perfect for creative projects, including content creation, marketing campaigns, and visual storytelling, with tools that help personalize designs and presentations.",
                },
                {
                  q: "Can System AI simplify complex data visually?",
                  a: "Yes, System AI excels at transforming complex data into clear, visually engaging reports that make it easier to understand and communicate insights.",
                },
                {
                  q: "Is System AI useful for project management?",
                  a: "Yes, System AI helps project managers visualize timelines, track progress, and collaborate more effectively, improving overall project efficiency.",
                },
                {
                  q: "How secure is my data with System AI?",
                  a: "System AI uses industry-leading security measures, including encryption and secure data storage, to ensure that your information is kept safe and confidential.",
                },
                {
                  q: "Does System AI support multiple languages?",
                  a: "Yes, System AI supports multiple languages, making it a versatile tool for global teams and projects with diverse language needs.",
                },
                {
                  q: "What integrations does System AI support?",
                  a: "System AI integrates seamlessly with popular tools like Google Workspace, Microsoft Office, Slack, and more, allowing businesses to enhance their existing workflows.",
                },
                {
                  q: "Is System AI useful for eCommerce businesses?",
                  a: "Yes, System AI helps eCommerce businesses analyze customer behavior, sales trends, and inventory data, improving operational efficiency and customer satisfaction.",
                },
                {
                  q: "Can System AI assist with SEO strategies?",
                  a: "While System AI doesn’t directly generate SEO content, it can help visualize SEO performance, track keyword trends, and organize data for optimization.",
                },
                {
                  q: "Can I adjust the detail level in my visuals?",
                  a: "Yes, System AI allows you to customize the detail level in your reports and visuals, whether you need a high-level overview or an in-depth analysis.",
                },
                {
                  q: "Can System AI be used by legal professionals?",
                  a: "Yes, System AI is ideal for legal professionals, helping them visualize case timelines, manage workflows, and streamline legal processes.",
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
                    Why <strong>System AI</strong> is the Perfect Choice for
                    Next-Generation Data Intelligence and Process Automation
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>System AI</strong> is revolutionizing the way
                    businesses handle data workflows, providing cutting-edge AI
                    tools that automate processes, extract critical insights,
                    and optimize operations. Here's why{" "}
                    <strong>System AI</strong> stands out as a leader in
                    advancing modern business workflows:
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
                      <strong>Smart Automation:</strong> Automates routine
                      tasks, freeing up valuable time for high-impact
                      activities, boosting productivity across teams.
                    </li>
                    <li className="mb-3">
                      <strong>Instant Data Insights:</strong> Provides real-time
                      intelligence, allowing businesses to act swiftly on
                      data-driven decisions and maintain a competitive edge.
                    </li>
                    <li className="mb-3">
                      <strong>Custom AI Solutions:</strong> Tailors AI models to
                      your unique business needs, ensuring workflows are
                      optimized for both precision and efficiency.
                    </li>
                    <li className="mb-3">
                      <strong>Intuitive Interface:</strong> Designed to be
                      user-friendly, <strong>System AI</strong> simplifies
                      complex processes for both technical and non-technical
                      users.
                    </li>
                    <li className="mb-3">
                      <strong>Collaborative Workflows:</strong> Enhances team
                      collaboration with real-time data sharing and seamless
                      communication tools, accelerating decision-making.
                    </li>
                    <li className="mb-3">
                      <strong>Effortless Integration:</strong> Integrates
                      seamlessly with your existing tools, such as Slack,
                      Microsoft Teams, and Google Workspace, ensuring a smooth
                      transition to more advanced automation without disrupting
                      your team's daily workflow.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-info btn-sm">
                      Explore <strong>System AI</strong> — Unlock Advanced Data
                      Intelligence and Workflow Optimization Now
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
              Why Choose <strong>System AI</strong> for Advanced Automation and
              Data Intelligence
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>System AI</strong> harnesses the power of advanced
              artificial intelligence to automate complex workflows, optimize
              data-driven decisions, and provide actionable insights. It
              empowers businesses to streamline operations, enhance efficiency,
              and stay ahead in a fast-paced digital world.
            </p>

            {/* System AI Section */}
            <div className="row justify-content-center gap-2 mb-5">
              {/* Pros */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #2980b9",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#34495e",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-primary text-start mb-4">
                  ✅ System AI - Pros
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Intelligent Workflow Automation:</strong> Automates
                    time-consuming tasks, freeing up valuable resources to focus
                    on more strategic, high-value activities.
                  </li>
                  <li className="mb-2">
                    <strong>Data-Driven Decision Making:</strong> Provides
                    actionable insights from vast amounts of data, enabling
                    businesses to make informed decisions in real-time.
                  </li>
                  <li className="mb-2">
                    <strong>Scalable & Flexible:</strong> Whether you're
                    managing a small team or a global enterprise, System AI can
                    scale with your business needs, ensuring long-term growth
                    and performance.
                  </li>
                  <li className="mb-2">
                    <strong>Simple User Experience:</strong> Despite its
                    powerful capabilities, System AI’s user-friendly interface
                    ensures that teams can get up and running quickly with
                    minimal learning curve.
                  </li>
                  <li className="mb-2">
                    <strong>Highly Customizable:</strong> Tailor the platform to
                    meet specific needs by configuring workflows and data
                    analytics features that fit your industry’s demands.
                  </li>
                </ul>
              </div>

              {/* Cons */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #2980b9",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#34495e",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-danger text-start mb-4">
                  ⚠️ System AI - Cons
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Hardware Intensive:</strong> Advanced features may
                    require substantial computing power, which could be
                    challenging for businesses with limited resources.
                  </li>
                  <li className="mb-2">
                    <strong>Complex Customization:</strong> While highly
                    adaptable, certain advanced configurations may require
                    specialized expertise and additional time to fully
                    implement.
                  </li>
                  <li className="mb-2">
                    <strong>Premium Subscription Model:</strong> Full access to
                    System AI's advanced capabilities requires a premium
                    subscription, which might be restrictive for small
                    businesses or startups.
                  </li>
                  <li className="mb-2">
                    <strong>Cloud Dependency:</strong> Built on cloud
                    infrastructure, System AI requires reliable internet
                    connectivity, which may impact performance in regions with
                    unstable or slow internet connections.
                  </li>
                  <li className="mb-2">
                    <strong>Learning Curve for Advanced Features:</strong> While
                    intuitive for basic tasks, mastering the more advanced
                    functionalities may necessitate additional training or
                    support.
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
              Explore Robust Alternatives to System AI for Enhanced Automation
              and Data Intelligence
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>System AI</strong> offers powerful capabilities for
              workflow automation and data analysis, there are other platforms
              designed to cater to specific data processing, visualization, and
              automation needs, each with its own set of unique features.
            </p>
            <div className="row justify-content-center gap-2">
              <div
                className="col-lg-8 col-md-8 col-sm-12"
                style={{
                  border: "1px solid #2980b9",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#2c3e50",
                  minHeight: "100%",
                }}
              >
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>DataFlowX</strong>: A cutting-edge platform focused
                    on transforming raw data into actionable visual reports,
                    tailored for industries that require rapid, data-driven
                    decision-making.
                  </li>
                  <li className="mb-2">
                    <strong>ClarityDash</strong>: A robust solution for
                    converting complex data into digestible, visually engaging
                    reports, enabling enhanced communication and collaboration
                    across teams.
                  </li>
                  <li className="mb-2">
                    <strong>VizionPro</strong>: A versatile tool for building
                    real-time dashboards and performance reports, empowering
                    teams to track and analyze key business metrics effectively.
                  </li>
                  <li className="mb-2">
                    <strong>MapIntelli</strong>: An intelligent platform for
                    visualizing and optimizing workflows with geospatial data,
                    helping teams streamline business operations through
                    map-based insights.
                  </li>
                  <li className="mb-2">
                    <strong>FlowMaster</strong>: A comprehensive solution for
                    automating, optimizing, and managing business workflows
                    through an intuitive, user-friendly interface.
                  </li>
                  <li className="mb-2">
                    <strong>SummarizeX</strong>: A tool that condenses extensive
                    documents and reports into clear, concise summaries,
                    providing decision-makers with quick access to key
                    information.
                  </li>
                  <li className="mb-2">
                    <strong>TechViz</strong>: Simplifies complex technical
                    content by transforming it into interactive visual formats,
                    making it easier for both technical and non-technical teams
                    to understand.
                  </li>
                  <li className="mb-2">
                    <strong>ExecView</strong>: A platform tailored for
                    executives to extract critical insights from detailed
                    business reports, with a focus on high-level metrics and
                    strategic objectives.
                  </li>
                  <li className="mb-2">
                    <strong>PatternDiscover</strong>: A powerful tool for
                    uncovering patterns within large datasets, enabling
                    businesses to make informed, data-backed decisions faster.
                  </li>
                  <li className="mb-2">
                    <strong>ProtoMaker</strong>: A design platform aimed at
                    creating and refining wireframes and prototypes for teams in
                    digital product development, helping turn ideas into
                    interactive models.
                  </li>
                  <li className="mb-2">
                    <strong>TextEase</strong>: Transforms technical
                    documentation into simple, understandable language, making
                    it accessible to a broader audience without losing its core
                    meaning.
                  </li>
                  <li className="mb-2">
                    <strong>TrendAnalyzer</strong>: An advanced tool designed to
                    analyze vast datasets for trends and patterns, providing
                    actionable insights to give businesses a competitive edge.
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
              <h1> Systems AI:</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Pensa Systems AI is an advanced AI-powered platform specializing
                in computer vision, machine learning, and deep learning to
                optimize retail operations. Pensa AI helps retailers automate
                critical tasks such as inventory management, product
                recognition, and fraud detection through real-time tracking and
                visual recognition technologies.
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
              <img src={pensa} style={{ MaxWidth: "100%", height: "300px" }} />
            </div>
          </div>

          <section style={{ backgroundColor: "#2c3e50", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">
                Revolutionize Your Operations with the Power of System AI
              </p>
              <h2
                className="text-white"
                style={{ fontWeight: "600", marginBottom: "1rem" }}
              >
                Unlock the Full Potential of Intelligent Automation and
                Real-Time Analytics with System AI
              </h2>
              <p
                style={{
                  color: "#ccc",
                  marginBottom: "2rem",
                  fontStyle: "italic",
                }}
              >
                System AI optimizes intricate workflows by providing advanced
                data intelligence, transforming the way businesses operate
                through precision, automation, and real-time insights.
              </p>

              <div className="row g-4">
                {/* Step 1 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#16a085",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
            .system-ai-step1 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #ecf0f1;
              opacity: 0.7;
            }
          `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Insightful Data Analysis
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      System AI extracts actionable insights from complex data,
                      helping businesses make smarter, data-driven decisions.
                    </p>
                    <div className="system-ai-step1">1</div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#16a085",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
            .system-ai-step2 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #ecf0f1;
              opacity: 0.7;
            }
          `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Dynamic Process Automation
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Enhance operational efficiency by leveraging System AI's
                      intelligent process automation, optimizing workflows on
                      the fly.
                    </p>
                    <div className="system-ai-step2">2</div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#16a085",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
            .system-ai-step3 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #ecf0f1;
              opacity: 0.7;
            }
          `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Unmatched Consistency and Accuracy
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      System AI ensures consistent precision, delivering
                      high-quality, reliable results that allow your business to
                      scale confidently.
                    </p>
                    <div className="system-ai-step3">3</div>
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
            <h4 className="mb-3">Ready to get started with Systems AI?</h4>
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

export default PensaSystem;
