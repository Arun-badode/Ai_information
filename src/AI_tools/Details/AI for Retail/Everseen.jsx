import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import everseen from "../../../../public/assets/Img/Ai  for Retail/7.png";
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
const Everseen = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="Everseen AI Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Discover the Power of Everseen AI
                </p>
                <h3>
                  Transform Data into Smart Insights with Cutting-Edge Visual
                  Analytics
                </h3>
              </div>
              {[
                {
                  icon: "📈",
                  title: "Advanced Data Visualization",
                  desc: "Everseen AI converts complex datasets into clear, interactive visual representations, making it easier to uncover insights and trends.",
                },
                {
                  icon: "🌍",
                  title: "Global Reach & Seamless Export",
                  desc: "Everseen AI supports multiple languages and offers export options in various formats like PDF, PNG, and SVG for easy sharing and integration.",
                },
                {
                  icon: "⚡",
                  title: "Instant Data Analysis",
                  desc: "Generate data visualizations within moments, even from large-scale datasets, ensuring quick insights and real-time decision-making.",
                },
                {
                  icon: "🔒",
                  title: "Robust Security Measures",
                  desc: "Everseen AI ensures your data's safety with industry-leading encryption, keeping your information protected throughout the process.",
                },
                {
                  icon: "🎨",
                  title: "Fully Customizable Design",
                  desc: "Tailor the design of your visuals to your brand's aesthetic, with full control over layout, color schemes, and components.",
                },
                {
                  icon: "💼",
                  title: "Versatile for Any Industry",
                  desc: "Everseen AI is perfect for businesses, teams, and creative professionals, whether you’re working on analytics, presentations, or collaboration.",
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
                  q: "What is Everseen AI?",
                  a: "Everseen AI is an advanced platform designed to streamline data automation, provide real-time insights, and enhance decision-making through powerful AI algorithms and intuitive visualizations.",
                },
                {
                  q: "How does Everseen AI work?",
                  a: "Everseen AI uses cutting-edge machine learning and AI-driven processes to analyze large datasets, automate workflows, and generate actionable insights through easy-to-understand visual reports.",
                },
                {
                  q: "Is the content generated by Everseen AI secure?",
                  a: "Yes, Everseen AI ensures your data is secure by implementing robust encryption standards and adhering to strict privacy regulations to safeguard all generated content.",
                },
                {
                  q: "Can I personalize the visuals created by Everseen AI?",
                  a: "Absolutely! Everseen AI provides full customization options, allowing you to personalize the visual elements, such as layout, color schemes, and design components, to fit your specific requirements.",
                },
                {
                  q: "Can Everseen AI handle large datasets?",
                  a: "Yes, Everseen AI is optimized to process and analyze vast amounts of data efficiently, making it an ideal solution for businesses and teams dealing with complex datasets.",
                },
                {
                  q: "Which file formats can I export from Everseen AI?",
                  a: "Everseen AI supports various export formats, including PDF, PNG, CSV, and Excel, enabling seamless integration with other tools and platforms for easy sharing and reporting.",
                },
                {
                  q: "Is Everseen AI free to use?",
                  a: "Everseen AI offers both free and premium plans. The free plan provides access to essential features, while the premium plan unlocks advanced AI capabilities, real-time collaboration, and more powerful tools.",
                },
                {
                  q: "Can I share or download my creations from Everseen AI?",
                  a: "Yes, Everseen AI allows you to share or download your generated content via cloud integration or direct file export, making it easy to collaborate or present your work.",
                },
                {
                  q: "Is Everseen AI suitable for educational purposes?",
                  a: "Yes, Everseen AI is a great tool for educators and students. It simplifies complex topics, enhances presentations, and supports data-driven learning through intuitive visualizations.",
                },
                {
                  q: "Does Everseen AI create original content?",
                  a: "Yes, Everseen AI generates unique and customizable content, ensuring originality and minimizing the risk of duplication or plagiarism in your visual reports.",
                },
                {
                  q: "Is Everseen AI easy to use for beginners?",
                  a: "Yes, Everseen AI is designed with user-friendliness in mind, offering an intuitive interface that requires no prior technical expertise to start creating impactful visualizations.",
                },
                {
                  q: "Can I select a visual theme or style in Everseen AI?",
                  a: "Yes, Everseen AI offers a variety of pre-built themes and templates, allowing you to select the perfect visual style for your data presentations or reports.",
                },
                {
                  q: "Is Everseen AI beneficial for businesses?",
                  a: "Absolutely! Everseen AI helps businesses automate data-driven processes, visualize key metrics, and generate insights that support better decision-making, increasing operational efficiency.",
                },
                {
                  q: "How does Everseen AI ensure data privacy?",
                  a: "Everseen AI adheres to strict data privacy standards, using end-to-end encryption and compliance with privacy laws to protect your information and keep it confidential.",
                },
                {
                  q: "Can I access Everseen AI on my mobile device?",
                  a: "Yes, Everseen AI is fully responsive and accessible on both desktop and mobile devices, so you can manage your data and collaborate on the go.",
                },
                {
                  q: "Do I need technical expertise to use Everseen AI?",
                  a: "No, Everseen AI is designed to be simple and intuitive, enabling both beginners and professionals to easily utilize its features without requiring technical knowledge.",
                },
                {
                  q: "Does Everseen AI only create flowcharts?",
                  a: "No, Everseen AI supports a wide range of visualizations, including charts, graphs, dashboards, reports, and process maps, making it versatile for various data presentation needs.",
                },
                {
                  q: "How quickly can Everseen AI generate content?",
                  a: "Everseen AI processes data and generates visualizations within seconds, even for large datasets, ensuring rapid results and quick decision-making.",
                },
                {
                  q: "Is Everseen AI a cloud-based platform?",
                  a: "Yes, Everseen AI operates in the cloud, allowing users to access the platform from any device, without needing to install any software locally.",
                },
                {
                  q: "What support options are available for Everseen AI users?",
                  a: "Everseen AI provides comprehensive support through a help center, live chat, and email assistance to ensure a smooth user experience and resolve any issues promptly.",
                },
                {
                  q: "Can Everseen AI be used for creative projects?",
                  a: "Yes, Everseen AI is ideal for creative projects such as content creation, marketing campaigns, and visual storytelling, offering advanced features for custom design and presentation.",
                },
                {
                  q: "Can Everseen AI simplify complex data visually?",
                  a: "Yes, Everseen AI excels in transforming complex data into clear and engaging visual insights, making it easier for teams to analyze and communicate information.",
                },
                {
                  q: "Is Everseen AI useful for project management?",
                  a: "Yes, Everseen AI is great for project managers, enabling them to visualize timelines, workflows, and team collaboration, improving project organization and progress tracking.",
                },
                {
                  q: "How secure is my data with Everseen AI?",
                  a: "Everseen AI employs robust encryption and follows strict security protocols to ensure your data is protected against unauthorized access and breaches.",
                },
                {
                  q: "Does Everseen AI support multiple languages?",
                  a: "Yes, Everseen AI supports multiple languages, making it a great tool for global teams and international collaboration.",
                },
                {
                  q: "What integrations does Everseen AI support?",
                  a: "Everseen AI integrates with popular platforms such as Google Workspace, Microsoft Office, Slack, and others, enhancing your existing workflow and improving productivity.",
                },
                {
                  q: "Is Everseen AI useful for eCommerce businesses?",
                  a: "Yes, Everseen AI provides eCommerce businesses with valuable insights into customer behavior, sales trends, and inventory management, helping businesses optimize operations and enhance customer experiences.",
                },
                {
                  q: "Can Everseen AI assist with SEO strategies?",
                  a: "While Everseen AI does not directly generate SEO content, it can be used to visualize SEO strategies, track keyword performance, and organize website content for better optimization.",
                },
                {
                  q: "Can I adjust the detail level in my visuals?",
                  a: "Yes, Everseen AI allows you to customize the level of detail in your visuals, from high-level summaries to in-depth reports tailored to your audience's needs.",
                },
                {
                  q: "Can Everseen AI be used by legal professionals?",
                  a: "Yes, Everseen AI can assist legal professionals by visualizing legal processes, case workflows, and organizational structures, enhancing understanding and collaboration in legal tasks.",
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
                    Why <strong>Everseen AI</strong> is the Leading Solution for
                    Data Automation, Optimization, and Collaboration
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>Everseen AI</strong> is transforming the way
                    businesses process and interpret data. From automating
                    workflows to providing real-time insights, here’s why{" "}
                    <strong>Everseen AI</strong> is a must-have for modern
                    teams:
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
                      <strong>Efficient Data Automation:</strong> Automates
                      repetitive tasks, significantly reducing manual input and
                      improving overall productivity across departments.
                    </li>
                    <li className="mb-3">
                      <strong>Advanced Real-Time Insights:</strong> Provides
                      instant access to valuable data insights, helping
                      businesses make quicker, more informed decisions in
                      dynamic environments.
                    </li>
                    <li className="mb-3">
                      <strong>Tailored AI Models:</strong> Leverages custom AI
                      models that adapt to specific business needs, ensuring
                      maximum relevance and optimization for your unique
                      workflows.
                    </li>
                    <li className="mb-3">
                      <strong>Intuitive User Experience:</strong> Designed with
                      user-friendliness in mind, Everseen AI offers an interface
                      that’s easy to navigate, making it accessible for teams of
                      all technical backgrounds.
                    </li>
                    <li className="mb-3">
                      <strong>Collaboration in Real-Time:</strong> Facilitates
                      seamless collaboration among team members, ensuring all
                      stakeholders can access and update data in real-time,
                      improving decision-making speed.
                    </li>
                    <li className="mb-3">
                      <strong>Seamless Integration with Existing Tools:</strong>{" "}
                      Integrates effortlessly with a range of popular business
                      applications, like Google Workspace, Microsoft Teams, and
                      more, ensuring minimal disruption to current processes.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-info btn-sm">
                      Explore <strong>Everseen AI</strong> — Enhance Your
                      Automation and Collaboration Today
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
              Why Opt for <strong>Everseen AI</strong> for Smarter Automation
              and Data Insights
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>Everseen AI</strong> is designed to empower businesses by
              transforming data into valuable insights, automating critical
              tasks, and optimizing workflows. By enhancing decision-making with
              real-time analytics, it helps organizations stay ahead in today’s
              fast-paced digital landscape.
            </p>

            {/* Everseen AI Section */}
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
                  ✅ Everseen AI - Pros
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Advanced Automation:</strong> Streamlines repetitive
                    tasks with intelligent automation, freeing up valuable time
                    for teams to focus on high-priority projects.
                  </li>
                  <li className="mb-2">
                    <strong>Real-Time Insights:</strong> Provides
                    up-to-the-minute analytics, helping organizations make
                    informed decisions quickly and efficiently.
                  </li>
                  <li className="mb-2">
                    <strong>Scalability:</strong> Everseen AI is designed to
                    scale effortlessly, accommodating businesses of all sizes,
                    from small teams to large enterprises.
                  </li>
                  <li className="mb-2">
                    <strong>Intuitive Interface:</strong> Offers a user-friendly
                    interface that simplifies complex tasks, making it easy for
                    teams to adopt without extensive training.
                  </li>
                  <li className="mb-2">
                    <strong>Customizable Solutions:</strong> Tailors its tools
                    and features to meet specific industry needs, ensuring
                    relevance and maximum value for diverse sectors.
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
                  ⚠️ Everseen AI - Cons
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Heavy Resource Requirements:</strong> Some advanced
                    features may demand high computing power, making it less
                    ideal for businesses with limited resources or older
                    systems.
                  </li>
                  <li className="mb-2">
                    <strong>Complex Customization:</strong> While highly
                    customizable, the extensive configuration options may
                    overwhelm new users, leading to longer setup times.
                  </li>
                  <li className="mb-2">
                    <strong>Subscription Costs:</strong> Full access to premium
                    features requires a subscription, which could be costly for
                    smaller businesses or startups with tight budgets.
                  </li>
                  <li className="mb-2">
                    <strong>Dependence on Cloud Connectivity:</strong> Everseen
                    AI’s performance is closely tied to stable internet and
                    cloud access, limiting offline functionality for certain
                    tools.
                  </li>
                  <li className="mb-2">
                    <strong>Learning Curve for Advanced Features:</strong>{" "}
                    Although the interface is intuitive, mastering its more
                    advanced capabilities may require dedicated time and
                    training, especially for non-technical users.
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
              Explore Robust Alternatives to Everseen AI for Advanced Data
              Visualization and Workflow Optimization
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>Everseen AI</strong> leads in streamlining processes
              and delivering high-quality data analysis, several other platforms
              provide specialized features that cater to unique needs in data
              structuring, automation, and visualization.
            </p>
            <div className="row justify-content-center gap-2">
              <div
                className="col-lg-8 col-md-8 col-sm-12"
                style={{
                  border: "1px solid #1abc9c",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#34495e",
                  minHeight: "100%",
                }}
              >
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>GraphMaster</strong>: A powerful solution for
                    turning intricate data into interactive graphs and charts,
                    offering quick insights for decision-makers in business and
                    research.
                  </li>
                  <li className="mb-2">
                    <strong>ReportSnap</strong>: A perfect tool for
                    professionals, transforming long reports into short,
                    impactful summaries without losing key information.
                  </li>
                  <li className="mb-2">
                    <strong>ProjectVisualizer</strong>: A tool designed to
                    simplify abstract concepts into clear visual frameworks,
                    helping teams and leaders visualize strategic initiatives.
                  </li>
                  <li className="mb-2">
                    <strong>MindFlow</strong>: Transforms ideas into structured
                    visual representations, assisting teams with brainstorming,
                    planning, and organizing complex workflows.
                  </li>
                  <li className="mb-2">
                    <strong>WorkflowCraft</strong>: A drag-and-drop interface
                    that enables users to create and visualize workflows,
                    empowering content creators and teams to streamline
                    processes without technical expertise.
                  </li>
                  <li className="mb-2">
                    <strong>DocSummarizer</strong>: Converts dense documents
                    into succinct, actionable insights, enabling quick
                    decision-making while maintaining core details.
                  </li>
                  <li className="mb-2">
                    <strong>VisualDocs</strong>: Converts complex technical
                    documents into easy-to-read visual formats, enhancing
                    collaboration and understanding among teams working on
                    intricate projects.
                  </li>
                  <li className="mb-2">
                    <strong>BriefPro</strong>: Tailored for executives, this
                    tool distills detailed reports into concise, high-level
                    summaries, focusing on key findings and strategic insights.
                  </li>
                  <li className="mb-2">
                    <strong>DataSpotter</strong>: A tool that automatically
                    identifies key trends and anomalies within large datasets,
                    helping businesses make data-driven decisions faster and
                    more accurately.
                  </li>
                  <li className="mb-2">
                    <strong>WireframeMaster</strong>: Helps design teams convert
                    concepts into professional wireframes, making it easy to
                    visualize initial app or website designs and prototypes.
                  </li>
                  <li className="mb-2">
                    <strong>ClearLegal</strong>: Simplifies complex legal jargon
                    into plain language, making legal documents more accessible
                    without compromising their integrity.
                  </li>
                  <li className="mb-2">
                    <strong>TrendAnalyzer</strong>: A data-driven platform that
                    extracts key patterns and trends from large data sets,
                    providing businesses with actionable insights for strategic
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
          className="d-inline-block text-white text-decoration-none ml-3 py-3 ms-3"
        >
          <i className="bi bi-arrow-left me-2"></i>Back {" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-between mb-1">
            {/* Right side (Image Section) first on mobile */}
            <div
              className="col-md-6 order-1 order-md-2 text-center mb-3 mb-md-0"
              style={{ width: "100%", height: "250px" }}
            >
              <img
                src={everseen}
                alt="Everseen AI"
                style={{
                  maxWidth: "100%",
                  height: "300px",
                  objectFit: "contain",
                }}
              />
            </div>

            {/* Left side (Text Section) second on mobile */}
            <div
              className="col-md-6 order-2 order-md-1"
              style={{ paddingRight: "30px" }}
            >
              <p className="text-primary">Write better, faster</p>
              <h1>Everseen AI:</h1>
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
          </div>

          <section style={{ backgroundColor: "#34495e", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">
                Elevate Your Operations—Achieve Excellence with Everseen AI
              </p>
              <h2
                className="text-white"
                style={{ fontWeight: "600", marginBottom: "1rem" }}
              >
                Experience the Seamless Optimization Everseen AI Brings to
                Complex Workflows
              </h2>
              <p
                style={{
                  color: "#ccc",
                  marginBottom: "2rem",
                  fontStyle: "italic",
                }}
              >
                Everseen AI simplifies even the most complicated processes,
                providing actionable insights and intelligent automation that
                boost productivity and decision-making.
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
            .everseen-step1 {
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
                      Smart Data Breakdown
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Everseen AI intelligently analyzes your data, providing
                      clear and actionable insights, enabling swift and informed
                      decision-making.
                    </p>
                    <div className="everseen-step1">1</div>
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
            .everseen-step2 {
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
                      Adaptive Communication Strategies
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Tailor your communication style with Everseen AI’s ability
                      to adjust tone, format, and content to suit diverse
                      audiences and contexts.
                    </p>
                    <div className="everseen-step2">2</div>
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
            .everseen-step3 {
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
                      Precision and Consistency
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Everseen AI delivers highly accurate results every time,
                      ensuring consistency and reliability across all processes,
                      no matter the scale.
                    </p>
                    <div className="everseen-step3">3</div>
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
            <h4 className="mb-3">Ready to get started with Everseen AI?</h4>
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

export default Everseen;
