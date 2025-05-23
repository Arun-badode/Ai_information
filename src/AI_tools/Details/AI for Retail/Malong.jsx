import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import malong from "../../../../public/assets/Img/Ai  for Retail/9.png";
import m1 from "../../../../public/assets/Img/Ai  for Retail/m-s1.png";
import m2 from "../../../../public/assets/Img/Ai  for Retail/m-s2.png";
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
const Malong = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="Malong AI Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Embrace the Power of Intelligent Automation with Malong AI
                </p>
                <h3>
                  Transforming Data Into Actionable Insights with Advanced AI
                  Solutions
                </h3>
              </div>
              {[
                {
                  icon: "🤖",
                  title: "AI-Driven Automation",
                  desc: "Malong AI leverages advanced machine learning algorithms to automate complex workflows, enhancing productivity and minimizing manual efforts.",
                },
                {
                  icon: "🌍",
                  title: "Universal Accessibility & Easy Integration",
                  desc: "Malong AI ensures global reach and seamless integration with various platforms, making it an ideal solution for teams across different regions and industries.",
                },
                {
                  icon: "⏱️",
                  title: "Instant Data Analysis",
                  desc: "Malong AI processes large datasets in real-time, delivering immediate insights that empower teams to make faster, data-driven decisions.",
                },
                {
                  icon: "🔒",
                  title: "Uncompromising Data Security",
                  desc: "Malong AI uses state-of-the-art encryption techniques and adheres to strict privacy protocols, safeguarding your data against unauthorized access.",
                },
                {
                  icon: "🎨",
                  title: "Customizable Visualizations",
                  desc: "Tailor the appearance of your reports and dashboards with Malong AI’s flexible design options, ensuring they meet the specific needs of your projects.",
                },
                {
                  icon: "📈",
                  title: "Comprehensive Data Insights",
                  desc: "From financial analytics to creative designs, Malong AI offers robust analytics tools to uncover actionable insights in any domain.",
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
                  q: "What is Malong AI?",
                  a: "Malong AI is a cutting-edge platform built to automate data workflows, deliver valuable insights, and optimize business processes using advanced machine learning and AI technologies.",
                },
                {
                  q: "How does Malong AI work?",
                  a: "Malong AI uses sophisticated machine learning algorithms to process large datasets, automate repetitive tasks, and provide real-time insights, empowering businesses to make data-driven decisions quickly.",
                },
                {
                  q: "Is the content generated by Malong AI secure?",
                  a: "Yes, Malong AI prioritizes data security, employing strong encryption and adhering to industry-standard privacy protocols to safeguard your generated content.",
                },
                {
                  q: "Can I customize the visuals created by Malong AI?",
                  a: "Yes, Malong AI offers full customization capabilities, allowing you to modify design elements such as colors, layouts, and styles to match your preferences or brand guidelines.",
                },
                {
                  q: "Can Malong AI handle large datasets?",
                  a: "Absolutely! Malong AI is designed to efficiently process and analyze large datasets, making it suitable for businesses that work with big data and complex information.",
                },
                {
                  q: "Which file formats can I export from Malong AI?",
                  a: "Malong AI supports multiple export options, including PDF, PNG, CSV, and Excel, ensuring seamless integration with various tools and platforms for reporting and sharing.",
                },
                {
                  q: "Is Malong AI free to use?",
                  a: "Malong AI offers both free and premium plans. The free plan gives access to essential features, while the premium plan unlocks advanced AI capabilities and additional tools for more comprehensive use.",
                },
                {
                  q: "Can I share or download my creations from Malong AI?",
                  a: "Yes, you can easily share or download your creations through cloud-based integrations or direct file export, making collaboration and presentation straightforward.",
                },
                {
                  q: "Is Malong AI suitable for educational purposes?",
                  a: "Yes, Malong AI is an excellent tool for education, simplifying complex topics and offering interactive data visualizations to enhance learning experiences.",
                },
                {
                  q: "Does Malong AI generate original content?",
                  a: "Yes, Malong AI generates original, customized content based on user input, ensuring uniqueness and minimizing any redundancy in your visual reports.",
                },
                {
                  q: "Is Malong AI easy to use for beginners?",
                  a: "Yes, Malong AI features an intuitive user interface that doesn’t require technical expertise, allowing users at all skill levels to quickly create powerful visualizations.",
                },
                {
                  q: "Can I choose a visual style or theme in Malong AI?",
                  a: "Yes, Malong AI provides a variety of pre-designed themes and templates, making it easy for you to choose a visual style that aligns with your goals and branding.",
                },
                {
                  q: "Is Malong AI beneficial for businesses?",
                  a: "Definitely! Malong AI helps businesses automate processes, visualize key metrics, and extract insights, leading to improved decision-making and greater operational efficiency.",
                },
                {
                  q: "How does Malong AI protect data privacy?",
                  a: "Malong AI uses end-to-end encryption and adheres to rigorous privacy standards, ensuring that all data is handled securely and in compliance with relevant privacy laws.",
                },
                {
                  q: "Can I access Malong AI on my mobile device?",
                  a: "Yes, Malong AI is fully responsive, offering easy access from both desktop and mobile devices for maximum flexibility and convenience.",
                },
                {
                  q: "Do I need technical expertise to use Malong AI?",
                  a: "No, Malong AI is designed to be user-friendly, with a simple interface that allows anyone, regardless of technical background, to easily use its features.",
                },
                {
                  q: "Does Malong AI only generate flowcharts?",
                  a: "No, Malong AI supports various visualizations, including charts, graphs, dashboards, reports, and process maps, offering flexibility in presenting and analyzing data.",
                },
                {
                  q: "How quickly can Malong AI generate content?",
                  a: "Malong AI can generate reports and visualizations in seconds, even for large datasets, enabling businesses to make quick and informed decisions.",
                },
                {
                  q: "Is Malong AI a cloud-based platform?",
                  a: "Yes, Malong AI operates entirely in the cloud, allowing you to access it from anywhere without the need for local installations or software updates.",
                },
                {
                  q: "What support options are available for Malong AI users?",
                  a: "Malong AI offers comprehensive support through a help center, live chat, and email, ensuring that users have access to assistance whenever they need it.",
                },
                {
                  q: "Can Malong AI be used for creative projects?",
                  a: "Yes, Malong AI is ideal for creative applications such as content creation, marketing campaigns, and visual storytelling, offering tools for personalized designs and presentations.",
                },
                {
                  q: "Can Malong AI simplify complex data visually?",
                  a: "Yes, Malong AI specializes in transforming complex datasets into clear, engaging visuals that make it easier to understand and communicate key insights.",
                },
                {
                  q: "Is Malong AI useful for project management?",
                  a: "Yes, Malong AI can help project managers visualize timelines, workflows, and collaboration, providing tools to manage and track project progress more effectively.",
                },
                {
                  q: "How secure is my data with Malong AI?",
                  a: "Malong AI uses state-of-the-art security measures, including encryption and secure data storage, to protect your information and maintain confidentiality.",
                },
                {
                  q: "Does Malong AI support multiple languages?",
                  a: "Yes, Malong AI supports multiple languages, making it a versatile tool for global teams and international projects.",
                },
                {
                  q: "What integrations does Malong AI support?",
                  a: "Malong AI integrates seamlessly with popular tools like Google Workspace, Microsoft Office, Slack, and more, helping businesses enhance their existing workflows.",
                },
                {
                  q: "Is Malong AI useful for eCommerce businesses?",
                  a: "Yes, Malong AI helps eCommerce businesses gain insights into customer behavior, sales trends, and inventory management, improving operational efficiency and customer satisfaction.",
                },
                {
                  q: "Can Malong AI assist with SEO strategies?",
                  a: "While Malong AI doesn’t directly generate SEO content, it can help visualize SEO performance, track keyword progress, and organize content for optimization.",
                },
                {
                  q: "Can I adjust the detail level in my visuals?",
                  a: "Yes, Malong AI allows you to customize the detail level in your visual reports, whether you need an overview or an in-depth analysis.",
                },
                {
                  q: "Can Malong AI be used by legal professionals?",
                  a: "Yes, Malong AI is suitable for legal professionals, helping them visualize workflows, case management, and legal processes more efficiently.",
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
                src={m1}
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={m2}
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
                    Why <strong>Malong AI</strong> is the Ideal Solution for
                    Advanced Data Processing and Workflow Automation
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>Malong AI</strong> is reshaping how businesses
                    optimize data workflows, offering powerful AI tools to
                    automate processes, extract insights, and streamline
                    operations. Here’s why <strong>Malong AI</strong> is a key
                    player in modernizing business workflows:
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
                      <strong>Advanced Automation:</strong> Automates repetitive
                      tasks, enabling teams to focus on value-adding activities
                      and boosting operational efficiency.
                    </li>
                    <li className="mb-3">
                      <strong>Real-Time Data Intelligence:</strong> Delivers
                      instant, actionable insights to empower businesses to make
                      informed decisions quickly and stay competitive.
                    </li>
                    <li className="mb-3">
                      <strong>Tailored AI Models:</strong> Offers customizable
                      AI models that adapt to the specific needs of your
                      business, optimizing workflows for maximum impact and
                      precision.
                    </li>
                    <li className="mb-3">
                      <strong>User-Friendly Experience:</strong> Designed with
                      an intuitive interface, <strong>Malong AI</strong> ensures
                      a seamless experience, making it accessible to both
                      technical and non-technical users.
                    </li>
                    <li className="mb-3">
                      <strong>Enhanced Collaboration:</strong> Promotes teamwork
                      by allowing real-time access and updates on data,
                      improving communication and accelerating decision-making.
                    </li>
                    <li className="mb-3">
                      <strong>Seamless Integration:</strong> Easily integrates
                      with popular tools like Slack, Microsoft Teams, and Google
                      Workspace, allowing your teams to work with the tools they
                      already use.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-info btn-sm">
                      Explore <strong>Malong AI</strong> — Unlock Advanced Data
                      Processing and Workflow Efficiency Today
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
              Why Choose <strong>Malong AI</strong> for Advanced Automation and
              Data Intelligence
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>Malong AI</strong> is a robust platform that leverages
              artificial intelligence to automate complex business processes,
              optimize data workflows, and generate actionable insights. Its
              powerful analytics capabilities help organizations enhance
              efficiency and make data-driven decisions with ease.
            </p>

            {/* Malong AI Section */}
            <div className="row justify-content-center gap-2 mb-5">
              {/* Pros */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #27ae60",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#2c3e50",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-success text-start mb-4">
                  ✅ Malong AI - Pros
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Powerful Automation:</strong> Streamlines repetitive
                    tasks, freeing up resources for higher-priority projects and
                    driving productivity across the organization.
                  </li>
                  <li className="mb-2">
                    <strong>Advanced Data Analysis:</strong> Provides in-depth
                    data insights, enabling businesses to uncover hidden
                    patterns and trends that can influence strategic decisions.
                  </li>
                  <li className="mb-2">
                    <strong>Flexible Scalability:</strong> Whether you're a
                    startup or a multinational corporation, Malong AI can grow
                    with your business and continue to deliver high performance.
                  </li>
                  <li className="mb-2">
                    <strong>User-Friendly Interface:</strong> Designed to be
                    intuitive, the platform allows teams to quickly learn and
                    use the system, minimizing onboarding time and effort.
                  </li>
                  <li className="mb-2">
                    <strong>Customizable Solutions:</strong> With a variety of
                    adaptable features, Malong AI ensures the platform can meet
                    the specific needs of your industry or use case.
                  </li>
                </ul>
              </div>

              {/* Cons */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #27ae60",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#2c3e50",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-danger text-start mb-4">
                  ⚠️ Malong AI - Cons
                </h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>High Resource Demand:</strong> Some of Malong AI’s
                    advanced features may require powerful hardware, which can
                    be an issue for businesses with limited computing
                    capabilities.
                  </li>
                  <li className="mb-2">
                    <strong>Complex Customization:</strong> While highly
                    customizable, configuring some of the platform's advanced
                    features may require technical expertise and additional
                    time.
                  </li>
                  <li className="mb-2">
                    <strong>Subscription Fees:</strong> Accessing the full range
                    of Malong AI's tools requires a premium subscription, which
                    may be a limiting factor for smaller organizations or those
                    with tight budgets.
                  </li>
                  <li className="mb-2">
                    <strong>Cloud-Dependent:</strong> Malong AI is built on
                    cloud infrastructure, so it requires a reliable internet
                    connection, which may hinder functionality in areas with
                    poor connectivity.
                  </li>
                  <li className="mb-2">
                    <strong>Learning Curve for Advanced Features:</strong>{" "}
                    Although the platform is user-friendly for basic tasks,
                    mastering its more advanced capabilities may require
                    additional training or support.
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
              Explore Robust Alternatives to Malong AI for Advanced Data
              Optimization and Process Automation
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>Malong AI</strong> provides powerful automation and
              data intelligence tools, other platforms cater to specific data
              processing, visualization, and workflow optimization needs, each
              offering its own set of specialized features.
            </p>
            <div className="row justify-content-center gap-2">
              <div
                className="col-lg-8 col-md-8 col-sm-12"
                style={{
                  border: "1px solid #27ae60",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#34495e",
                  minHeight: "100%",
                }}
              >
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>DataVisionX</strong>: A cutting-edge platform
                    designed to turn raw data into insightful visualizations,
                    ideal for industries needing quick and effective
                    decision-making.
                  </li>
                  <li className="mb-2">
                    <strong>InsightCraft</strong>: Perfect for transforming
                    complex datasets into clear, actionable reports,
                    facilitating improved communication and understanding across
                    teams.
                  </li>
                  <li className="mb-2">
                    <strong>DashPro</strong>: A versatile solution for building
                    interactive dashboards and detailed reports, empowering
                    organizations to monitor and analyze business metrics
                    seamlessly.
                  </li>
                  <li className="mb-2">
                    <strong>MapMaster</strong>: An intelligent tool for
                    converting unstructured data into actionable visual maps,
                    aiding teams in optimizing workflows and business
                    operations.
                  </li>
                  <li className="mb-2">
                    <strong>WorkFlowPro</strong>: A dynamic platform that allows
                    teams to design, optimize, and manage their workflows
                    through intuitive drag-and-drop features.
                  </li>
                  <li className="mb-2">
                    <strong>QuickSummarize</strong>: A tool that condenses
                    lengthy documents and reports into digestible summaries,
                    helping decision-makers focus on the most relevant
                    information.
                  </li>
                  <li className="mb-2">
                    <strong>TechDocFlow</strong>: Simplifies the conversion of
                    intricate technical content into user-friendly visual
                    formats, bridging the gap between technical and
                    non-technical stakeholders.
                  </li>
                  <li className="mb-2">
                    <strong>ExecInsight</strong>: A platform designed for
                    executives to swiftly pull out critical insights from
                    detailed business reports, focusing on KPIs and high-level
                    strategies.
                  </li>
                  <li className="mb-2">
                    <strong>TrendSpy</strong>: A powerful tool that helps
                    businesses uncover hidden patterns within large datasets,
                    allowing for more informed and timely business decisions.
                  </li>
                  <li className="mb-2">
                    <strong>ProtoCraft</strong>: A design platform that
                    specializes in creating and refining prototypes and
                    wireframes, ideal for teams involved in product development
                    and digital solutions.
                  </li>
                  <li className="mb-2">
                    <strong>TextSimplify</strong>: Transforms complex technical
                    documentation into clear, simple, and accessible language,
                    making technical information understandable for a broader
                    audience.
                  </li>
                  <li className="mb-2">
                    <strong>PatternSeeker</strong>: An innovative tool for
                    spotting and visualizing trends in massive datasets, helping
                    businesses leverage data insights to gain a competitive
                    edge.
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
  <div className="row align-items-center justify-content-between mb-5">
  {/* Image Section – comes first on mobile, second on desktop */}
  <div className="col-12 col-lg-6 order-1 order-lg-2 text-center mb-4 mb-lg-0">
    <img
      src={malong}
      alt="Malong AI"
      className="img-fluid"
      style={{ maxHeight: "300px", objectFit: "contain" }}
    />
  </div>

  {/* Text Section – comes second on mobile, first on desktop */}
  <div className="col-12 col-lg-6 order-2 order-lg-1">
    <p className="text-primary">Write better, faster</p>
    <h1>Malong AI:</h1>
    <div className="text-warning mb-2">⭐⭐⭐⭐⭐</div>
    <p>
      Malong AI is an advanced visual recognition platform powered by AI and
      machine learning. It enables retailers and ecommerce platforms to optimize
      inventory management, improve product categorization, and enhance
      operational efficiency.
    </p>
    <p>
      Malong AI uses deep learning and computer vision technology to automate
      the identification, classification, and tracking of products in real-time.
    </p>
    <a
      href="https://malongtech.com/en/home.html"
      target="_blank"
      rel="noopener noreferrer"
      className="btn btn-primary mt-3"
    >
      Explore Tool
    </a>
  </div>
</div>

  {/* Feature Section */}
  <section style={{ backgroundColor: "#34495e", padding: "3rem 0" }}>
    <div className="container text-center text-white">
      <p className="text-primary">
        Transform Your Business with the Power of Malong AI
      </p>
      <h2 className="fw-bold mb-3">
        Unleash the Potential of Smart Automation and Data Intelligence with Malong AI
      </h2>
      <p className="text-muted fst-italic mb-5">
        Malong AI streamlines complex processes, delivering precision-driven analytics
        and automation that boosts productivity and enhances decision-making at every level.
      </p>

      <div className="row g-4">
        {/* Step 1 */}
        {[1, 2, 3].map((num) => {
          const titles = [
            "Data-Driven Insights",
            "Adaptive Workflow Automation",
            "Consistent Precision & Reliability",
          ];
          const descriptions = [
            "Malong AI extracts meaningful insights from your data, helping you make informed decisions that drive business growth.",
            "Optimize your workflows with Malong AI’s automation features, adjusting processes and tasks dynamically to improve efficiency.",
            "Malong AI guarantees reliable, accurate outputs, allowing your business to scale without sacrificing quality or performance.",
          ];
          return (
            <div className="col-md-4" key={num}>
              <div
                className="position-relative"
                style={{
                  backgroundColor: "#1abc9c",
                  borderRadius: "12px",
                  boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                  padding: "2rem",
                  height: "100%",
                }}
              >
                <h5 className="fw-bold text-white">{titles[num - 1]}</h5>
                <p className="text-white m-0">{descriptions[num - 1]}</p>
                <div
                  className="position-absolute"
                  style={{
                    bottom: "10px",
                    right: "15px",
                    fontSize: "4rem",
                    fontWeight: "bold",
                    color: "#ecf0f1",
                    opacity: 0.7,
                  }}
                >
                  {num}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  </section>

  {/* Tab Navigation */}
  <ul className="nav nav-tabs custom-tabs my-4 flex-wrap">
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
          {tab}
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

export default Malong;
