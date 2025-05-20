import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import you1 from "../../../../public/assets/Img/AI For Chatbots/you1.png";
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

const YouchatAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            {[
              {
                icon: "🤖",
                title: "AI-Powered Answer Engine",
                desc: "YouChat AI provides real-time, precise answers using web sources and natural language processing, making it great for fast factual insights.",
              },
              {
                icon: "🧠",
                title: "Conversational AI",
                desc: "Uses advanced conversational AI that understands multi-turn dialogues, ensuring smooth, natural interactions for users.",
              },
              {
                icon: "🔍",
                title: "Real-Time Web Sources",
                desc: "YouChat AI pulls answers from live web sources, ensuring the most up-to-date and accurate responses.",
              },
              {
                icon: "📚",
                title: "Academic & Research Support",
                desc: "Perfect for students and researchers by providing precise answers with citations to relevant sources.",
              },
              {
                icon: "💬",
                title: "Simple Chat Interface",
                desc: "YouChat AI integrates with chat interfaces, providing quick answers while maintaining a friendly conversation style.",
              },
              {
                icon: "🌍",
                title: "Global Knowledge Base",
                desc: "Supports worldwide knowledge, pulling from a vast range of data to give users answers from any domain or region.",
              },
              {
                icon: "📱",
                title: "Multi-Device Support",
                desc: "Accessible from any device, whether mobile, tablet, or desktop, making YouChat AI highly versatile.",
              },
              {
                icon: "⚡",
                title: "Fast Response Time",
                desc: "Delivers answers almost instantly, enabling real-time engagement and quick access to required information.",
              },
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div className="custom-card text-light p-4 h-100">
                  <div className="icon mb-3">{feature.icon}</div>
                  <h5 className="fw-bold">{feature.title}</h5>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        );

     case "screenshots":
  return (
    <div className="row g-4">
      <div className="col-md-6 col-12">
        <img
          src={you1}
          alt="Screenshot 1"
          className="img-fluid rounded-3 shadow-sm"
          loading="lazy"
        />
      </div>
      <div className="col-md-6 col-12">
        <img
          src=""// Fixed typo in variable name
          alt="Screenshot 2"
          className="img-fluid rounded-3 shadow-sm"
          loading="lazy"
        />
      </div>
    </div>
  );

      case "reviews":
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

      case "technical":
        return (
          <div style={styles.section}>
            <div className="container">
              <div className="row g-4">
                <div className="col-md-8">
                  <div style={styles.card}>
                    <h5 className="mb-4">System Requirements</h5>
                    <div className="row">
                      <div className="col-md-6">
                        <h6>Supported Platforms</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>🪟 Windows 10/11</li>
                          <li>🍎 macOS 11+</li>
                          <li>🐧 Linux (Ubuntu, Debian)</li>
                          <li>🌐 Web-based access</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h6>Hardware Requirements</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>⚡ 2.0 GHz processor or higher</li>
                          <li>🧠 4 GB RAM minimum (8 GB recommended)</li>
                          <li>💾 500 MB available disk space</li>
                          <li>📶 Broadband internet connection</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div style={styles.card}>
                    <h5 className="mb-4">Resources</h5>
                    <ul className="list-unstyled mb-4" style={styles.smallText}>
                      <li>📄 Documentation</li>
                      <li>💻 API Reference</li>
                      <li>🎥 Video Tutorials</li>
                      <li>🎓 Learning Center</li>
                      <li>💬 Community Forum</li>
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
                      24/7 support for paid plans
                    </small>
                  </div>
                </div>

                <div className="col-12">
                  <div style={styles.card}>
                    <h5 className="mb-4">Integration Capabilities</h5>
                    <div className="row">
                      <div className="col-md-4">
                        <h6>Productivity</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>🧰 Google Workspace</li>
                          <li>🧰 Microsoft 365</li>
                          <li>🧰 Slack</li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <h6>Development</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>💻 GitHub</li>
                          <li>💻 Jira</li>
                          <li>💻 GitLab</li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <h6>Marketing</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>📢 HubSpot</li>
                          <li>📢 Mailchimp</li>
                          <li>📢 Salesforce</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "alternative":
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
                    ChatGPT – Conversational AI built on GPT-4, used for
                    writing, problem-solving, and more.
                  </li>
                  <li className="mb-2">
                    Google Bard – AI assistant by Google with internet-backed
                    responses and creative tools.
                  </li>
                  <li className="mb-2">
                    Perplexity AI – Real-time AI answer engine with citations
                    and source transparency.
                  </li>
                  <li className="mb-2">
                    Bing AI – Microsoft’s AI chatbot with internet access and
                    image capabilities.
                  </li>
                  <li className="mb-2">
                    Claude – An AI assistant focused on safe, helpful responses,
                    and document-based reasoning.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "pros & Cons":
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
                    Provides fast and accurate answers backed by real-time web
                    sources.
                  </li>
                  <li className="mb-2">
                    No login required for easy and instant access to answers.
                  </li>
                  <li className="mb-2">
                    Perfect for researchers, students, and professionals needing
                    up-to-date information.
                  </li>
                  <li className="mb-2">
                    Maintains context over multi-turn conversations for a smooth
                    interaction.
                  </li>
                  <li className="mb-2">
                    Simple, clean user interface with minimal distractions.
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
                <h5 className="text-warning text-start mb-4">⚠ Cons</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    Limited functionality compared to more fully-featured
                    platforms like ChatGPT.
                  </li>
                  <li className="mb-2">
                    Can sometimes provide generic responses, especially for
                    complex queries.
                  </li>
                  <li className="mb-2">
                    Requires internet access to work, as it pulls data from web
                    sources.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "why-we-use":
        return (
          <div className="container">
            <div className="row g-4">
              <div className="col-12">
                <div className="custom-card text-light p-5 text-center">
                  <h3 className="fw-bold mb-4 text-start text-primary">
                    Why Use YouChat AI?
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
                      YouChat AI combines the power of search with
                      conversational AI for quick and accurate answers.
                    </li>
                    <li className="mb-3">
                      Great for students, researchers, and professionals needing
                      real-time web-cited results.
                    </li>
                    <li className="mb-3">
                      Provides natural chat-style interaction while delivering
                      up-to-date, source-backed content.
                    </li>
                    <li className="mb-3">
                      No login or setup required—accessible directly from the
                      browser.
                    </li>
                    <li className="mb-3">
                      Supports multi-turn dialogue, allowing deeper, follow-up
                      discussions with context awareness.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Try YouChat Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      case "FAQs":
        return (
          <div className="faq-section container py-5">
            <h3 className="text-center text-white mb-5 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is YouChat AI?",
                  a: "YouChat AI is a conversational AI platform powered by NLP and machine learning, enabling businesses to automate customer service, sales and content creation.",
                },
                {
                  q: "How does YouChat work?",
                  a: "YouChat processes user inputs and generates context-aware responses using its language model. It can learn from previous interactions to improve future responses.",
                },
                {
                  q: "Can YouChat help with customer service?",
                  a: "Yes, YouChat can automate customer support, provide real-time solutions, and offer 24/7 assistance through conversational AI.",
                },
                {
                  q: "How can businesses use YouChat for content creation?",
                  a: "YouChat generates SEO-friendly content, including blog posts, social media posts, and marketing copy, saving businesses time and effort.",
                },
                {
                  q: "What industries can benefit from YouChat?",
                  a: "Industries like e-commerce, healthcare, finance, education, and customer service benefit from YouChat's versatile applications.",
                },
                {
                  q: "How does YouChat help in sales automation?",
                  a: "YouChat engages leads, qualifies them, and automates sales follow-ups, improving lead conversion rates and sales efficiency.",
                },
                {
                  q: "Can YouChat be used for SEO optimization?",
                  a: "Yes, YouChat generates SEO-optimized content, helping businesses rank higher on search engines by integrating relevant keywords and structured data.",
                },
                {
                  q: "Can YouChat analyze customer feedback?",
                  a: "Yes, YouChat analyzes customer feedback, categorizing sentiments and providing actionable insights into customer satisfaction.",
                },
                {
                  q: "Is YouChat customizable for specific business needs?",
                  a: "Yes, YouChat is fully customizable to suit your brand tone, industry jargon, and specific business requirements.",
                },
                {
                  q: "Can YouChat integrate with other business systems?",
                  a: "Yes, YouChat integrates with CRM systems, e-commerce platforms, and other business tools through its API.",
                },
                {
                  q: "Can YouChat handle multi-turn conversations?",
                  a: "Yes, YouChat excels in managing multi-turn conversations, understanding context and providing coherent responses throughout the interaction.",
                },
                {
                  q: "How does YouChat improve customer engagement?",
                  a: "YouChat provides personalized responses and immediate solutions, which keeps customers engaged and enhances overall user experience.",
                },
                {
                  q: "How does YouChat integrate with websites?",
                  a: "YouChat can be easily integrated into websites via its API, enabling live chat and automated customer support directly on your platform.",
                },
                {
                  q: "Does YouChat provide text-to-speech functionality?",
                  a: "Yes, YouChat can integrate with text-to-speech tools, enabling voice-based interactions for a more dynamic customer experience.",
                },
                {
                  q: "How secure is YouChat?",
                  a: "YouChat follows best practices in data security to ensure compliance with privacy regulations such as GDPR and CCPA.",
                },
                {
                  q: "How does YouChat help with content curation?",
                  a: "YouChat automatically curates relevant content based on user preferences, helping businesses maintain up-to-date content across their platforms.",
                },
                {
                  q: "Can YouChat improve marketing campaigns?",
                  a: "Yes, YouChat automates marketing tasks such as email campaigns, lead generation, and customer segmentation, optimizing campaign performance.",
                },
                {
                  q: "Can YouChat help with product launches?",
                  a: "Yes, YouChat assists with product launches by generating promotional content, scheduling posts, and engaging with customers to create awareness.",
                },
                {
                  q: "How does YouChat assist with social media engagement?",
                  a: "YouChat generates engaging social media posts, responds to comments, and keeps your audience engaged on platforms like Facebook, Instagram, and Twitter.",
                },
                {
                  q: "Can YouChat be used for virtual product demos?",
                  a: "Yes, YouChat can guide customers through virtual product demonstrations, explaining features and answering questions in real-time.",
                },
                {
                  q: "How does YouChat handle user data?",
                  a: "YouChat processes user data following the highest security standards. Businesses using YouChat must ensure that data privacy laws like GDPR are adhered to when handling sensitive user information.",
                },
                {
                  q: "Can YouChat be integrated with third-party platforms like Salesforce or Shopify?",
                  a: "Yes, YouChat can be seamlessly integrated with CRM systems like Salesforce, Shopify, and other third-party platforms through its API, enhancing the overall functionality and support capabilities.",
                },
                {
                  q: "What programming languages does YouChat support for integration?",
                  a: "YouChat provides an API that supports integration with a variety of programming languages, including JavaScript, Python, Ruby, and PHP.",
                },
                {
                  q: "Is YouChat capable of handling audio or video interactions?",
                  a: "While YouChat is primarily text-based, it can be integrated with text-to-speech (TTS) tools for voice interactions. It can also work with video platforms for multimedia-based customer support.",
                },
                {
                  q: "Can YouChat integrate with other AI models?",
                  a: "Yes, YouChat can be integrated with other AI models and tools, such as image recognition models, AI-based data analysis tools, and more, expanding its capabilities for advanced use cases.",
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

      default:
        return null;
    }
  };

  return (
    <>
      <div className="bg-dark">
        {/* <Link
          to="/Aitools"
          className="d-inline-block text-white text-decoration-none ml-3 py-1"
        >
          <i className="bi bi-arrow-left me-2"></i>Back to Directory
        </Link> */}
        <a
          href="/Aitools"
          className="d-inline-block text-white text-decoration-none  mt-3 ml-3 py-1 px-2 ms-5 border rounded-sm"
        >
          <i className="bi bi-arrow-left me-2"></i>Back  {" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between mb-5 lovaaiflex">
            {/* Left side (Text Section) */}
            <div style={{ flex: 1, paddingRight: "30px" }}>
              <h2>Comprehensive Guide to YouChat AI and Its Capabilities</h2>
              <div className="text-warning mb-1">
                ⭐⭐⭐⭐⭐ 95% Satisfaction
              </div>
              <p>
                YouChat AI is an advanced AI-powered chatbot designed to offer
                conversational AI solutions across various industries. Built
                upon a language model that leverages Natural Language Processing
                (NLP), YouChat AI is capable of engaging in fluid, human-like
                conversations. It is designed to automate tasks, assist with
                content creation, streamline customer service operations, and
                facilitate business automation. YouChat is used for a range of
                applications, from customer support to e-commerce solutions,
                making it a versatile tool for both small businesses and
                enterprise-level operations.
              </p>
              
              <div className="d-flex flex-wrap gap-3 mb-4 mb-lg-0">
        <a
          href="https://you.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg px-4"
        >
          Explore Tool
        </a>
      </div>
            </div>

            {/* Right side (Image Section) */}
            <div style={{ flex: 1, textAlign: "center" }}>
              <img
                src="https://media.licdn.com/dms/image/v2/D5612AQHWntWHSokJuA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1726640143001?e=2147483647&v=beta&t=2GzNPQMOGcjV0VXbbMKnwSPDgkGhf2gyrOLDCQ_3Qew"
                className="img-fluid rounded-3"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
          <section style={{ backgroundColor: "", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">
                Create Conversations with YouChat AI in 3 Easy Steps
              </p>
              <h2
                style={{
                  fontWeight: "semibold",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                How does YouChat work?
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
                      Ask a Question or Share an Idea
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Start by typing a question or an idea. YouChat AI
                      processes it using advanced NLP to understand the context
                      and intent.
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
                      YouChat Processes with AI
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Using advanced language models, YouChat analyzes your
                      input and provides context-aware responses instantly.
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
                      Review, Refine & Share
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      You can refine the conversation, save it, or share it
                      directly for personal, academic, or business use.
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
              "features",
              "screenshot",
              "reviews",
              "FAQs",
              "technical",
              "why-we-use",
              "pros & Cons",
              "alternative",
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

export default YouchatAI;