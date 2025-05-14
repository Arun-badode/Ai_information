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
const PhraseeAI = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                Create Studio-Quality Videos with AI
              </p>
              <h3 className="">Features of Phrasee AI</h3>
            </div>
            {[
              {
                icon: "🧠",
                title: "AI-Powered Copywriting",
                desc: "Phrasee uses advanced Natural Language Processing (NLP) to create high-quality, engaging, and brand-consistent marketing copy for emails, SMS, and ads.",
              },
              {
                icon: "📈",
                title: "Data-Driven Optimization",
                desc: "Phrasee continuously analyzes marketing data to optimize the performance of generated copy, ensuring better engagement and conversion rates.",
              },
              {
                icon: "📝",
                title: "Multichannel Support",
                desc: "Phrasee delivers AI-generated copy across multiple marketing channels, including email, social media, and SMS, maintaining consistency and effectiveness.",
              },
              {
                icon: "⚙️",
                title: "Customizable Copy Models",
                desc: "Allows businesses to tailor Phrasee's AI models to their unique voice, style, and brand requirements, ensuring content that feels authentic and personalized.",
              },
              {
                icon: "📊",
                title: "Real-Time A/B Testing",
                desc: "Phrasee provides real-time A/B testing for email subject lines and other marketing content, helping businesses understand what resonates most with their audience.",
              },
              {
                icon: "💡",
                title: "AI-Driven Insights",
                desc: "Phrasee delivers actionable insights into marketing performance, enabling businesses to make data-driven decisions that enhance future campaigns.",
              },
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="custom-card text-light p-4 h-100  "
                  style={{ border: "1px solid #7B68EE" }}
                >
                  <div className="icon mb-3">{feature.icon}</div>
                  <h5 className="fw-bold">{feature.title}</h5>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
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
                  q: "What is Phrasee AI?",
                  a: "Phrasee AI is an AI-powered tool designed to optimize marketing content, generate personalized email subject lines, ad copy, and product descriptions to boost conversion rates and improve customer engagement.",
                },
                {
                  q: "How does Phrasee AI work?",
                  a: "Phrasee AI uses machine learning and natural language generation (NLG) to analyze customer data and create high-converting marketing copy tailored to the target audience's preferences and behaviors.",
                },
                {
                  q: "What are the key features of Phrasee AI?",
                  a: "Key features include AI-powered content generation, personalized email subject lines, ad copy optimization, A/B testing, and real-time marketing insights.",
                },
                {
                  q: "How much does Phrasee AI cost?",
                  a: "Phrasee AI offers custom pricing depending on the business needs, the number of channels, and the features required. You can contact Phrasee directly for a personalized quote.",
                },
                {
                  q: "Does Phrasee AI offer a free trial?",
                  a: "Yes, Phrasee AI offers a free trial for users to explore its features and capabilities before committing to a paid plan.",
                },
                {
                  q: "How does Phrasee AI help in email marketing?",
                  a: "Phrasee AI enhances email marketing by generating personalized subject lines, optimized email copy, and automated content variations that increase open rates and click-through rates.",
                },
                {
                  q: "Can Phrasee AI be used for social media campaigns?",
                  a: "Yes, Phrasee AI can generate optimized ad copy for social media platforms, ensuring higher engagement and conversion rates for Facebook, Instagram, and other social media ads.",
                },
                {
                  q: "Does Phrasee AI help with SEO?",
                  a: "Yes, Phrasee AI generates SEO-friendly content that helps improve organic search rankings and increases visibility for e-commerce and digital marketing campaigns.",
                },
                {
                  q: "Can Phrasee AI automate content creation?",
                  a: "Yes, Phrasee AI automates content generation for multiple channels, including email, ads, product descriptions, and more, saving time and improving marketing efficiency.",
                },
                {
                  q: "How does Phrasee AI improve customer engagement?",
                  a: "Phrasee AI improves customer engagement by delivering personalized content that resonates with customers' needs, increasing interactions and customer satisfaction.",
                },
                {
                  q: "How accurate are the predictions made by Phrasee AI?",
                  a: "Phrasee AI’s predictions are highly accurate because it uses machine learning to continuously analyze customer data and improve content relevance and effectiveness over time.",
                },
                {
                  q: "How does Phrasee AI optimize ad copy?",
                  a: "Phrasee AI optimizes ad copy by testing multiple variations, analyzing customer interactions, and choosing the most effective versions to improve ad performance and ROI.",
                },
                {
                  q: "Can Phrasee AI be used for SMS marketing?",
                  a: "Yes, Phrasee AI can generate optimized SMS marketing content, ensuring higher engagement and increased conversion rates for SMS campaigns.",
                },
                {
                  q: "How does Phrasee AI personalize content?",
                  a: "Phrasee AI personalizes content by analyzing customer data and preferences to create tailored messages that resonate with individual users, improving relevance and conversion.",
                },
                {
                  q: "What kind of data does Phrasee AI use to generate content?",
                  a: "Phrasee AI uses customer behavior data, past purchase history, email interactions, and product preferences to create personalized marketing messages.",
                },
                {
                  q: "Can Phrasee AI be used for product descriptions?",
                  a: "Yes, Phrasee AI can automatically generate optimized product descriptions that are SEO-friendly and designed to increase conversions by highlighting key features and benefits.",
                },
                {
                  q: "How does Phrasee AI help in A/B testing?",
                  a: "Phrasee AI offers A/B testing tools that allow marketers to test multiple versions of subject lines, copy, and ad text to identify which version drives the highest engagement.",
                },
                {
                  q: "How does Phrasee AI work for e-commerce?",
                  a: "Phrasee AI enhances e-commerce by providing personalized product recommendations, size predictions, and tailored ad copy, improving the shopping experience and increasing sales.",
                },
                {
                  q: "Can Phrasee AI be used for website copy?",
                  a: "Yes, Phrasee AI generates engaging website copy that drives higher conversion rates through personalized messaging, optimized call-to-action (CTA) buttons, and improved user engagement.",
                },
                {
                  q: "Does Phrasee AI integrate with marketing automation tools?",
                  a: "Yes, Phrasee AI integrates with popular marketing automation platforms, such as HubSpot, Mailchimp, and Salesforce, allowing for streamlined content creation and campaign management.",
                },
                {
                  q: "What type of businesses can benefit from Phrasee AI?",
                  a: "Phrasee AI is beneficial for e-commerce businesses, fashion retailers, brands, digital marketers, and anyone who needs to create personalized marketing content at scale.",
                },
                {
                  q: "Does Phrasee AI optimize customer journeys?",
                  a: "Yes, Phrasee AI enhances customer journeys by offering personalized content based on each step of the journey, from awareness to conversion, improving engagement and satisfaction.",
                },
                {
                  q: "How does Phrasee AI personalize email subject lines?",
                  a: "Phrasee AI generates personalized email subject lines based on customer behavior and preferences, increasing the likelihood of email opens and driving higher click-through rates.",
                },
                {
                  q: "Can Phrasee AI be used for content variation?",
                  a: "Yes, Phrasee AI generates multiple content variations to test which messages perform best, ensuring that marketing content resonates with the target audience.",
                },
                {
                  q: "Does Phrasee AI offer customer insights?",
                  a: "Yes, Phrasee AI provides in-depth customer insights based on data analysis and behavioral patterns, enabling businesses to make more informed decisions about their marketing strategies.",
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
                    <small className="text-muted d-block text-center">
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
                    Why Use Phrasee AI ?
                  </h3>

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
                      <strong>AI-Generated Personalized Content:</strong>{" "}
                      Phrasee AI uses natural language generation (NLG) to
                      create tailored email subject lines, ad copy, and product
                      descriptions based on customer preferences and behaviors.
                    </li>
                    <li className="mb-3">
                      <strong>Optimized Marketing Campaigns:</strong> Phrasee AI
                      optimizes marketing messages by testing multiple content
                      variations, helping brands drive better engagement and
                      higher conversion rates.
                    </li>
                    <li className="mb-3">
                      <strong>Real-Time A/B Testing:</strong> Phrasee AI offers
                      advanced A/B testing tools that help businesses identify
                      the most effective content variations, improving campaign
                      performance and ROI.
                    </li>
                    <li className="mb-3">
                      <strong>Cross-Channel Content Automation:</strong> Phrasee
                      AI automates content creation across multiple marketing
                      channels, including email, social media, and ads, ensuring
                      consistent messaging and improved efficiency.
                    </li>
                    <li className="mb-3">
                      <strong>Enhanced Customer Engagement:</strong> By
                      generating highly relevant and personalized content,
                      Phrasee AI improves customer interactions and boosts brand
                      loyalty, increasing overall engagement and satisfaction.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Start Creating Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Pros & Cons":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-4">Pros & Cons</h4>
            <div className="row justify-content-center gap-2">
              {/* Pros Column */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #7B68EE",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-success text-start mb-4">✅ Pros</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>AI-Powered Content Optimization:</strong> Phrasee AI
                    uses natural language generation (NLG) to optimize email
                    subject lines, ad copy, and product descriptions for higher
                    engagement and conversion rates.
                  </li>
                  <li className="mb-2">
                    <strong>Personalized Marketing Messages:</strong> Uses
                    machine learning to create personalized marketing content
                    based on customer data and behavior, enhancing the relevance
                    of communications and boosting customer engagement.
                  </li>
                  <li className="mb-2">
                    <strong>Easy Integration with Marketing Tools:</strong>{" "}
                    Phrasee AI seamlessly integrates with popular marketing
                    platforms like Mailchimp, HubSpot, and Salesforce,
                    simplifying the content generation process.
                  </li>
                  <li className="mb-2">
                    <strong>Scalable and Customizable AI:</strong> Designed to
                    support businesses of all sizes, from startups to large
                    enterprises, offering custom solutions for content
                    generation across multiple channels.
                  </li>
                  <li className="mb-2">
                    <strong>Real-Time A/B Testing:</strong> Phrasee AI’s A/B
                    testing capabilities allow businesses to test different
                    variations of content to optimize performance and maximize
                    ROI in real time.
                  </li>
                </ul>
              </div>

              {/* Cons Column */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #7B68EE",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-warning text-start mb-4">⚠️ Cons</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Complex Integration:</strong> Phrasee AI may require
                    technical expertise for integration, particularly for
                    businesses without in-house development teams, which could
                    delay deployment.
                  </li>
                  <li className="mb-2">
                    <strong>Cost for High-Volume Use:</strong> Pricing can scale
                    with usage, and for businesses with high email volumes or
                    extensive campaigns, costs may rise significantly, affecting
                    the overall ROI.
                  </li>
                  <li className="mb-2">
                    <strong>Limited Customization:</strong> The pre-built
                    content generation models may not fully align with specific
                    branding needs or unique business requirements without
                    additional customization or training.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "Alternative":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-4">Alternatives</h4>
            <div className="row justify-content-center gap-2">
              <div
                className="col-lg-8 col-md-8 col-sm-12"
                style={{
                  border: "1px solid #7B68EE",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    Best for avatar-based explainer and corporate videos.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Emerging competition with realistic scene generation but
                    still in closed beta.
                  </li>
                  <li className="mb-2">
                    Great for musicians and creators wanting visual storytelling
                    synced with audio.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Known for creative animated video styles and short-form
                    content.
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
              <h1>Phrasee AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Phrasee AI is an AI-powered marketing platform that specializes
                in generating high-converting marketing copy for email
                campaigns, social media ads, product descriptions, SMS
                marketing, and more. Using natural language generation (NLG) and
                machine learning, Phrasee helps businesses create engaging,
                data-driven content that resonates with customers, driving
                conversion rates and customer engagement.
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
          <section style={{ backgroundColor: "", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">Create Videos in 3 Simple Steps</p>
              <h2
                style={{
                  fontWeight: "semibold",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                How Does Phrasee AI Works?
              </h2>

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
                    <style>
                      {`
  .step1 {
    position: absolute;
    bottom: 10px;
    right: 15px;
    font-size: 4rem;
    font-weight: bold;
    color: #7b61ff;
    opacity: 0.6;
  }
`}
                    </style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Natural Language Processing (NLP)
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Phrasee uses NLP to understand the nuances of language,
                      enabling it to craft compelling, brand-consistent copy for
                      marketing campaigns.
                    </p>
                    <div className="step1">1</div>
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
                    <style>
                      {`
  .step2 {
    position: absolute;
    bottom: 10px;
    right: 15px;
    font-size: 4rem;
    font-weight: bold;
    color: #7b61ff;
    opacity: 0.6;
  }
`}
                    </style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      AI-Driven Copy Generation
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Phrasee's AI creates highly effective marketing messages,
                      including subject lines, email content, and
                      advertisements, all optimized for performance.
                    </p>
                    <div className="step2">2</div>
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
                    <style>
                      {`
  .step3 {
    position: absolute;
    bottom: 10px;
    right: 15px;
    font-size: 4rem;
    font-weight: bold;
    color: #7b61ff;
    opacity: 0.6;
  }
`}
                    </style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Continuous Optimization
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Phrasee continuously learns from performance data,
                      improving its ability to generate high-converting copy for
                      email, SMS, and other marketing channels.
                    </p>
                    <div className="step3">3</div>
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
            <h4 className="mb-3">Ready to get started with RunWayGen?</h4>
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

export default PhraseeAI;
