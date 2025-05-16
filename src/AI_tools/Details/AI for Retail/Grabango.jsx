import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import grabango from "../../../../public/assets/Img/Ai  for Retail/8.png";
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
const Grabango = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="Grabango AI Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Unlock the Future of Automation with Grabango AI
                </p>
                <h3>
                  Effortless Automation, Data Insights, and Real-Time Actionable
                  Intelligence
                </h3>
              </div>
              {[
                {
                  icon: "🤖",
                  title: "AI-Powered Automation",
                  desc: "Grabango AI integrates machine learning to automate routine tasks and processes, ensuring efficiency and reducing human intervention.",
                },
                {
                  icon: "🌐",
                  title: "Global Accessibility & Seamless Integration",
                  desc: "Whether you're across the globe or collaborating remotely, Grabango AI connects with multiple platforms and supports various languages for diverse teams.",
                },
                {
                  icon: "⏱️",
                  title: "Real-Time Data Processing",
                  desc: "Grabango AI processes and analyzes data in real-time, enabling swift decision-making based on up-to-the-minute insights.",
                },
                {
                  icon: "🔐",
                  title: "Top-Tier Data Security",
                  desc: "With cutting-edge encryption and compliance to industry standards, Grabango AI ensures your data is always safe and protected from unauthorized access.",
                },
                {
                  icon: "🎨",
                  title: "Customizable Reports & Dashboards",
                  desc: "Personalize the look and feel of your data dashboards, selecting themes and layouts that align with your organizational needs.",
                },
                {
                  icon: "📊",
                  title: "Versatile Data Analytics",
                  desc: "From business metrics to creative projects, Grabango AI adapts to various industries, providing intuitive analytics and actionable insights.",
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
                  q: "What is Grabango AI?",
                  a: "Grabango AI is an innovative platform designed to optimize data processing, streamline workflows, and deliver actionable insights using advanced AI and machine learning technologies.",
                },
                {
                  q: "How does Grabango AI work?",
                  a: "Grabango AI leverages powerful machine learning algorithms to analyze vast datasets, automate routine tasks, and generate real-time insights, providing businesses with clear and actionable visual reports.",
                },
                {
                  q: "Is the content generated by Grabango AI secure?",
                  a: "Yes, Grabango AI ensures your data remains secure by employing robust encryption methods and complying with industry-standard privacy regulations to protect all generated content.",
                },
                {
                  q: "Can I customize the visuals created by Grabango AI?",
                  a: "Yes, Grabango AI provides full customization options, allowing you to adjust design elements such as layouts, colors, and visuals to match your brand or specific needs.",
                },
                {
                  q: "Can Grabango AI handle large datasets?",
                  a: "Yes, Grabango AI is built to efficiently process and analyze large-scale datasets, making it an ideal solution for teams and businesses dealing with complex data.",
                },
                {
                  q: "Which file formats can I export from Grabango AI?",
                  a: "Grabango AI supports multiple export formats including PDF, PNG, CSV, and Excel, enabling seamless integration with various tools and platforms for reporting and sharing.",
                },
                {
                  q: "Is Grabango AI free to use?",
                  a: "Grabango AI offers both free and premium subscription plans. The free plan provides access to basic features, while the premium plan unlocks advanced AI functionalities and more powerful tools.",
                },
                {
                  q: "Can I share or download my creations from Grabango AI?",
                  a: "Yes, Grabango AI allows users to share or download their content via cloud integration or direct file export, making collaboration and presentation easy.",
                },
                {
                  q: "Is Grabango AI suitable for educational purposes?",
                  a: "Yes, Grabango AI is a great tool for educational environments. It simplifies complex concepts, enhances learning experiences, and supports interactive data visualizations.",
                },
                {
                  q: "Does Grabango AI generate original content?",
                  a: "Yes, Grabango AI produces unique, tailored content based on your input, ensuring originality and minimizing duplication in your visual reports.",
                },
                {
                  q: "Is Grabango AI easy to use for beginners?",
                  a: "Yes, Grabango AI is designed with ease of use in mind, offering an intuitive user interface that doesn’t require technical expertise to create powerful data visualizations.",
                },
                {
                  q: "Can I choose a visual style or theme in Grabango AI?",
                  a: "Yes, Grabango AI provides a variety of pre-built themes and templates, so you can easily select the visual style that fits your project's goals.",
                },
                {
                  q: "Is Grabango AI beneficial for businesses?",
                  a: "Definitely! Grabango AI helps businesses automate processes, visualize key data, and generate insights, improving decision-making and operational efficiency.",
                },
                {
                  q: "How does Grabango AI protect data privacy?",
                  a: "Grabango AI follows strict data privacy protocols, using end-to-end encryption and ensuring compliance with relevant privacy laws to keep your information confidential.",
                },
                {
                  q: "Can I access Grabango AI on my mobile device?",
                  a: "Yes, Grabango AI is fully responsive, allowing you to access and manage your data from both desktop and mobile devices for ultimate convenience.",
                },
                {
                  q: "Do I need technical expertise to use Grabango AI?",
                  a: "No, Grabango AI is designed to be user-friendly, with a simple interface that allows users of all experience levels to effectively use its features.",
                },
                {
                  q: "Does Grabango AI only generate flowcharts?",
                  a: "No, Grabango AI supports a variety of visualizations, including charts, graphs, reports, dashboards, and process maps, offering versatility in presenting data.",
                },
                {
                  q: "How quickly can Grabango AI generate content?",
                  a: "Grabango AI processes data and generates visual reports within seconds, even for large datasets, ensuring fast and efficient decision-making.",
                },
                {
                  q: "Is Grabango AI a cloud-based platform?",
                  a: "Yes, Grabango AI operates entirely in the cloud, giving you the flexibility to access it from anywhere, without the need to install any software locally.",
                },
                {
                  q: "What support options are available for Grabango AI users?",
                  a: "Grabango AI provides support through a comprehensive help center, live chat, and email support, ensuring a seamless experience and assistance when needed.",
                },
                {
                  q: "Can Grabango AI be used for creative projects?",
                  a: "Yes, Grabango AI is ideal for creative projects such as marketing campaigns, content creation, and visual storytelling, offering tools for custom designs and presentations.",
                },
                {
                  q: "Can Grabango AI simplify complex data visually?",
                  a: "Yes, Grabango AI excels at transforming intricate data into clear and engaging visuals, making it easier to analyze and communicate key insights.",
                },
                {
                  q: "Is Grabango AI useful for project management?",
                  a: "Yes, Grabango AI can assist project managers by visualizing timelines, workflows, and team collaboration, helping to organize and track project progress more effectively.",
                },
                {
                  q: "How secure is my data with Grabango AI?",
                  a: "Grabango AI employs advanced encryption techniques and security measures to ensure your data remains protected against unauthorized access or breaches.",
                },
                {
                  q: "Does Grabango AI support multiple languages?",
                  a: "Yes, Grabango AI supports multiple languages, making it accessible for global teams and international projects.",
                },
                {
                  q: "What integrations does Grabango AI support?",
                  a: "Grabango AI integrates with popular platforms like Google Workspace, Microsoft Office, Slack, and more, helping you to enhance your existing workflows.",
                },
                {
                  q: "Is Grabango AI useful for eCommerce businesses?",
                  a: "Yes, Grabango AI provides eCommerce businesses with insights into customer behavior, sales trends, and inventory management, helping them optimize their operations and improve customer satisfaction.",
                },
                {
                  q: "Can Grabango AI assist with SEO strategies?",
                  a: "Although Grabango AI doesn’t generate SEO content directly, it can help visualize SEO strategies, monitor keyword performance, and organize content for optimization.",
                },
                {
                  q: "Can I adjust the detail level in my visuals?",
                  a: "Yes, Grabango AI allows you to customize the level of detail in your visuals, whether you need a high-level overview or a detailed, in-depth report.",
                },
                {
                  q: "Can Grabango AI be used by legal professionals?",
                  a: "Yes, Grabango AI can support legal professionals by visualizing legal workflows, case management, and organizational structures, making it easier to understand and manage legal processes.",
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
                    Why <strong>Grabango AI</strong> is the Ultimate Solution
                    for Data Automation and Workflow Optimization
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>Grabango AI</strong> is revolutionizing how
                    businesses handle data, offering tools for workflow
                    automation, real-time insights, and process optimization.
                    Here’s why <strong>Grabango AI</strong> is a game-changer
                    for modern businesses:
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
                      <strong>Smart Automation:</strong> Automates mundane tasks
                      across various business processes, freeing up valuable
                      time for teams to focus on critical tasks and enhancing
                      overall productivity.
                    </li>
                    <li className="mb-3">
                      <strong>Instant Data Insights:</strong> Grabango AI
                      delivers real-time data analysis, giving teams the ability
                      to make faster, data-driven decisions in fast-paced
                      environments.
                    </li>
                    <li className="mb-3">
                      <strong>Customizable AI Models:</strong> Leverages
                      adaptable AI models that can be tailored to meet the
                      unique requirements of any business, ensuring maximum
                      performance and efficiency for specific workflows.
                    </li>
                    <li className="mb-3">
                      <strong>Simple, Intuitive Interface:</strong> Designed for
                      users of all technical backgrounds, Grabango AI offers an
                      intuitive interface that makes it easy to navigate and
                      use, reducing the learning curve for teams.
                    </li>
                    <li className="mb-3">
                      <strong>Seamless Collaboration:</strong> Facilitates
                      real-time collaboration, ensuring all team members can
                      access and update data simultaneously, leading to quicker
                      and more accurate decision-making.
                    </li>
                    <li className="mb-3">
                      <strong>Easy Integration with Existing Tools:</strong>{" "}
                      Works effortlessly with a wide range of business tools
                      like Microsoft Teams, Slack, and Google Workspace,
                      enabling smooth integration into your existing workflow
                      without disruptions.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-info btn-sm">
                      Explore <strong>Grabango AI</strong> — Transform Your Data
                      Automation and Workflow Efficiency Today
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
              Why Choose <strong>Grabango AI</strong> for Smarter Automation and
              Data Processing
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>Grabango AI</strong> is built to optimize operations by
              automating complex workflows, providing actionable insights, and
              enabling efficient decision-making through intelligent analytics.
              It helps organizations streamline processes and remain competitive
              in today’s fast-moving digital world.
            </p>

            {/* Grabango AI Section */}
            <div className="row justify-content-center gap-2 mb-5">
              {/* Pros */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #3498db",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#34495e",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-info text-start mb-4">
                  ✅ Grabango AI - Pros
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Efficient Automation:</strong> Automates
                    time-consuming tasks, boosting productivity and allowing
                    teams to focus on higher-value activities.
                  </li>
                  <li className="mb-2">
                    <strong>Instant Analytics:</strong> Delivers real-time data
                    insights, empowering businesses to act quickly and make
                    informed decisions with confidence.
                  </li>
                  <li className="mb-2">
                    <strong>Highly Scalable:</strong> Whether you're a small
                    business or a global enterprise, Grabango AI adapts and
                    scales to your needs without losing performance.
                  </li>
                  <li className="mb-2">
                    <strong>Easy-to-Use Interface:</strong> Designed for ease of
                    use, the platform’s interface is intuitive, helping teams
                    adopt the solution without a steep learning curve.
                  </li>
                  <li className="mb-2">
                    <strong>Tailored Solutions:</strong> Customizable features
                    ensure that the platform meets the specific needs of your
                    industry, offering maximum impact and value.
                  </li>
                </ul>
              </div>

              {/* Cons */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #3498db",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#34495e",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-danger text-start mb-4">
                  ⚠️ Grabango AI - Cons
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Resource Intensive:</strong> Some advanced features
                    require significant computing resources, which may pose
                    challenges for businesses with limited hardware capacity.
                  </li>
                  <li className="mb-2">
                    <strong>Customization Complexity:</strong> While the
                    platform offers extensive customization, setting up advanced
                    features can be complex and may require additional time for
                    configuration.
                  </li>
                  <li className="mb-2">
                    <strong>Premium Features Subscription:</strong> Access to
                    the full suite of tools and features requires a
                    subscription, which might be a barrier for smaller
                    organizations with tighter budgets.
                  </li>
                  <li className="mb-2">
                    <strong>Cloud Dependency:</strong> Grabango AI is reliant on
                    cloud infrastructure and a stable internet connection, which
                    may limit offline functionality for certain users.
                  </li>
                  <li className="mb-2">
                    <strong>Learning Curve:</strong> While the platform is
                    user-friendly, mastering its more advanced capabilities may
                    require training or support, particularly for non-technical
                    users.
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
              Discover Powerful Alternatives to Grabango AI for Seamless Data
              Optimization and Automation
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>Grabango AI</strong> excels in automating workflows
              and delivering intelligent data insights, several other platforms
              offer specialized features for different needs in data processing,
              visualization, and optimization.
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
                    <strong>DataFlowX</strong>: An intuitive platform that turns
                    raw data into impactful visualizations, designed for rapid
                    decision-making across diverse industries.
                  </li>
                  <li className="mb-2">
                    <strong>InsightBridge</strong>: Ideal for creating visual
                    reports from complex data sets, enabling businesses to
                    communicate insights clearly and effectively.
                  </li>
                  <li className="mb-2">
                    <strong>VisualPro</strong>: A versatile tool for crafting
                    dynamic visualizations and interactive dashboards, perfect
                    for business intelligence and data storytelling.
                  </li>
                  <li className="mb-2">
                    <strong>AutoMap</strong>: Transforms unstructured data into
                    organized visual maps, helping teams manage and optimize
                    workflows for increased efficiency.
                  </li>
                  <li className="mb-2">
                    <strong>FlowMapper</strong>: A workflow management platform
                    with easy drag-and-drop functionality for creating, editing,
                    and optimizing business processes.
                  </li>
                  <li className="mb-2">
                    <strong>SummaryGen</strong>: Specializes in condensing
                    lengthy reports into actionable, digestible summaries,
                    helping decision-makers stay informed without the overload.
                  </li>
                  <li className="mb-2">
                    <strong>DocFlow</strong>: Converts complex technical content
                    into easily understandable visual representations, making
                    collaboration between technical and non-technical teams
                    easier.
                  </li>
                  <li className="mb-2">
                    <strong>ExecSum</strong>: A tool designed for executives to
                    quickly extract high-level insights from detailed reports,
                    focusing on key performance metrics and strategies.
                  </li>
                  <li className="mb-2">
                    <strong>TrendRadar</strong>: A platform that analyzes large
                    datasets to uncover hidden trends, helping businesses make
                    informed decisions based on real-time data insights.
                  </li>
                  <li className="mb-2">
                    <strong>BlueprintMaster</strong>: A design tool for quickly
                    creating and refining wireframes and prototypes, ideal for
                    teams working on product development and digital
                    experiences.
                  </li>
                  <li className="mb-2">
                    <strong>ClearText</strong>: Simplifies complicated technical
                    documentation into easily readable formats, making
                    information accessible to a wider audience.
                  </li>
                  <li className="mb-2">
                    <strong>PatternHunter</strong>: A tool for identifying and
                    visualizing trends in massive datasets, helping companies
                    leverage data to gain competitive advantages.
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
              <h1>Grabango AI:</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Everseen AI is a cutting-edge visual AI platform that leverages
                machine learning and deep learning to prevent shrinkage and
                improve operational efficiency in retail environments. It helps
                stores monitor transactions in real-time, detect anomalies, and
                reduce retail theft by using computer vision integrated into
                smart checkout systems.
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
                src={grabango}
                style={{ MaxWidth: "100%", height: "300px" }}
              />
            </div>
          </div>

          <section style={{ backgroundColor: "#2c3e50", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">
                Streamline Your Operations—Achieve Excellence with Grabango AI
              </p>
              <h2
                className="text-white"
                style={{ fontWeight: "600", marginBottom: "1rem" }}
              >
                Revolutionize Your Workflow with Grabango AI's Seamless
                Automation and Optimization
              </h2>
              <p
                style={{
                  color: "#ccc",
                  marginBottom: "2rem",
                  fontStyle: "italic",
                }}
              >
                Grabango AI simplifies complex processes, providing precise
                analytics and automated workflows that enhance productivity and
                support smarter decision-making.
              </p>

              <div className="row g-4">
                {/* Step 1 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#2980b9",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
            .grabango-step1 {
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
                      Grabango AI analyzes your data effortlessly, providing
                      clear and actionable insights that support faster,
                      data-driven decisions.
                    </p>
                    <div className="grabango-step1">1</div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#2980b9",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
            .grabango-step2 {
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
                      Dynamic Communication Personalization
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Customize your communication strategies with Grabango AI’s
                      dynamic capabilities, adjusting tone and format to suit
                      any audience or situation.
                    </p>
                    <div className="grabango-step2">2</div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#2980b9",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
            .grabango-step3 {
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
                      Accuracy and Dependability
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Grabango AI ensures precise, reliable results
                      consistently, empowering businesses to scale operations
                      without compromising quality.
                    </p>
                    <div className="grabango-step3">3</div>
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
            <h4 className="mb-3">Ready to get started with Grabango AI?</h4>
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

export default Grabango;
