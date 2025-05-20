import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../AI_tools/ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import gemini from "../../../../public/assets/Img/AI For Chatbots/gemini.png"


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

const Gemini = () => {
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
                title: "AI-Powered Chatbot",
                desc: "Google Gemini is designed to simulate human-like conversations, perfect for automating customer service, content creation, and business operations.",
              },
              {
                icon: "🧠",
                title: "Machine Learning Models",
                desc: "By leveraging machine learning, Google Gemini continuously improves its performance, enhancing its ability to understand context and user queries over time.",
              },
              {
                icon: "💬",
                title: "Conversational AI",
                desc: "Google Gemini uses conversational AI to understand multi-turn conversations, making interactions smoother and more natural.",
              },
              {
                icon: "🔍",
                title: "SEO Optimization",
                desc: "Generate SEO-optimized content and improve readability to help rank better on search engines.",
              },
              {
                icon: "🛒",
                title: "AI for E-Commerce",
                desc: "Google Gemini's AI-powered features help provide personalized product recommendations and offer 24/7 customer support.",
              },
              {
                icon: "📚",
                title: "AI for Education",
                desc: "Gemini can serve as an AI-powered tutor, answering questions and explaining concepts to students, enhancing personalized learning.",
              },
              {
                icon: "📈",
                title: "Business Automation",
                desc: "Streamline repetitive business tasks with Google Gemini, automating processes like responding to emails, handling customer inquiries, and sales automation.",
              },
              {
                icon: "🌍",
                title: "Multilingual Support",
                desc: "Google Gemini supports multiple languages, making it perfect for global customer engagement and automating customer service across borders.",
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
            <div className="col-md-6">
              <img
                // src=""
                alt="Screenshot 1"
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-md-6">
              <img
                // src=""
                alt="Screenshot 2"
                className="img-fluid rounded-3"
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
                    Offers powerful multimodal AI that understands text, image,
                    and audio inputs.
                  </li>
                  <li className="mb-2">
                    Seamless integration with Google products like Docs, Gmail,
                    and Sheets.
                  </li>
                  <li className="mb-2">
                    Fast, accurate, and context-aware responses powered by
                    Gemini 1.5 Pro.
                  </li>
                  <li className="mb-2">
                    Available on web, Android, and iOS with voice, image, and
                    text support.
                  </li>
                  <li className="mb-2">
                    Provides coding, writing, and task assistance with real-time
                    updates.
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
                    Some advanced features are only available through Google One
                    subscription.
                  </li>
                  <li className="mb-2">
                    May not support as many third-party integrations as
                    competitors like ChatGPT.
                  </li>
                  <li className="mb-2">
                    Output can vary depending on the task complexity and prompt
                    clarity.
                  </li>
                </ul>
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
                    ChatGPT – A powerful conversational AI for coding, writing,
                    and research tasks.
                  </li>
                  <li className="mb-2">
                    Claude – Helpful for document understanding, summarizing,
                    and safer AI interactions.
                  </li>
                  <li className="mb-2">
                    Copilot – Microsoft’s AI tool integrated into Office apps
                    and coding environments.
                  </li>
                  <li className="mb-2">
                    Perplexity – AI-powered search assistant ideal for quick and
                    accurate answers.
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
                    Why Use Gemini AI?
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
                      Gemini is ideal for generating high-quality text, code,
                      and ideas using AI.
                    </li>
                    <li className="mb-3">
                      Perfect for developers, content creators, and students
                      looking for smart assistance.
                    </li>
                    <li className="mb-3">
                      Combines search, chat, and creation tools into one
                      seamless experience.
                    </li>
                    <li className="mb-3">
                      Enables fast brainstorming, coding help, writing, and
                      productivity without technical complexity.
                    </li>
                    <li className="mb-3">
                      Gemini offers a versatile, cloud-based solution that works
                      across devices and Google products.
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

      case "FAQs":
        return (
          <div className="faq-section container py-5">
            <h3 className="text-center text-white mb-5 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is Google Gemini?",
                  a: "Google Gemini is an advanced AI chatbot developed by Google AI. It uses GPT-4 and NLP to generate human-like responses for applications like customer support, content generation, and automation.",
                },
                {
                  q: "How does Google Gemini work?",
                  a: "Google Gemini uses GPT-4 and machine learning to analyze user input, understand context, and generate accurate responses using natural language processing.",
                },
                {
                  q: "Can Google Gemini be used for customer service?",
                  a: "Yes, it can automate responses, handle inquiries, and provide 24/7 customer support.",
                },
                {
                  q: "How do I integrate Google Gemini into my website?",
                  a: "You can use the Google Gemini API to connect the chatbot to your website, CRM, or platform.",
                },
                {
                  q: "What industries benefit from Google Gemini?",
                  a: "Industries like e-commerce, education, healthcare, finance, and marketing benefit from AI-powered automation and support.",
                },
                {
                  q: "Does Google Gemini support multiple languages?",
                  a: "Yes, it supports multiple languages for global communication and multilingual support.",
                },
                {
                  q: "Can Google Gemini be customized for different business needs?",
                  a: "Yes, the API allows customization of tone, behavior, and functionality per business needs.",
                },
                {
                  q: "What is the difference between Google Gemini and other AI chatbots?",
                  a: "Gemini uses GPT-4 for smarter responses, while others may rely on simpler or older models.",
                },
                {
                  q: "Can Google Gemini generate content?",
                  a: "Yes, it can write blogs, product descriptions, marketing content, and more.",
                },
                {
                  q: "Is Google Gemini suitable for e-commerce?",
                  a: "Absolutely, it can support customers, suggest products, and improve shopping experiences.",
                },
                {
                  q: "How accurate is Google Gemini?",
                  a: "It’s highly accurate due to GPT-4 and continuous learning.",
                },
                {
                  q: "Can Google Gemini handle complex queries?",
                  a: "Yes, it understands complex queries and maintains context over conversations.",
                },
                {
                  q: "How can Google Gemini assist with business automation?",
                  a: "It automates tasks like lead generation, support, and workflows for better efficiency.",
                },
                {
                  q: "Does Google Gemini work on mobile devices?",
                  a: "Yes, it integrates with mobile apps for chat and content features.",
                },
                {
                  q: "How does Google Gemini handle data privacy and security?",
                  a: "It follows industry standards, but businesses must ensure GDPR and data compliance.",
                },
                {
                  q: "Can Google Gemini integrate with CRM systems?",
                  a: "Yes, it can track interactions and generate insights through CRM integration.",
                },
                {
                  q: "What is the Google Gemini API?",
                  a: "It’s an interface to embed Gemini into sites, apps, and systems for AI services.",
                },
                {
                  q: "What are the benefits of using Google Gemini for customer engagement?",
                  a: "It offers fast replies, personalization, and high scalability to boost engagement.",
                },
                {
                  q: "Can Google Gemini replace human customer service agents?",
                  a: "It complements humans by handling routine tasks but complex issues may need humans.",
                },
                {
                  q: "How does Google Gemini compare with ChatGPT?",
                  a: "Both use GPT models, but Gemini integrates more tightly with Google’s ecosystem.",
                },
                {
                  q: "How secure is the data with Google Gemini?",
                  a: "It follows Google security practices; businesses must also handle data securely.",
                },
                {
                  q: "Can Google Gemini assist with SEO?",
                  a: "Yes, it generates SEO-friendly content for improved visibility.",
                },
                {
                  q: "How does Google Gemini improve sales automation?",
                  a: "It qualifies leads, automates follow-ups, and boosts conversions.",
                },
                {
                  q: "How can I train Google Gemini for specific tasks?",
                  a: "Provide domain-specific data and fine-tune it for tailored results.",
                },
                {
                  q: "How fast is Google Gemini in generating responses?",
                  a: "It responds almost instantly, enabling real-time interaction.",
                },
                {
                  q: "Does Google Gemini integrate with social media platforms?",
                  a: "Yes, it automates posts, comments, and DMs on platforms like Facebook and Twitter.",
                },
                {
                  q: "How does Google Gemini handle multiple users at once?",
                  a: "It supports many users simultaneously with real-time response handling.",
                },
                {
                  q: "What are the best practices for using Google Gemini in business?",
                  a: "Customize it, monitor its performance, and keep it updated with relevant data.",
                },
                {
                  q: "Can Google Gemini work with voice assistants?",
                  a: "Yes, it supports voice-enabled platforms with text-to-speech capabilities.",
                },
                {
                  q: "Can Google Gemini be used for lead generation?",
                  a: "Yes, it captures leads and transfers them to sales teams automatically.",
                },
                {
                  q: "How can Google Gemini assist with workflow automation?",
                  a: "It can manage data entry, emails, and reporting tasks automatically.",
                },
                {
                  q: "How is Google Gemini deployed?",
                  a: "Via the Google Gemini API integrated into your systems.",
                },
                {
                  q: "What is the cost of using Google Gemini?",
                  a: "Pricing is based on usage volume, such as API calls or data processed.",
                },
                {
                  q: "Can Google Gemini assist in healthcare?",
                  a: "Yes, it can help with patient queries and scheduling, but not for critical decisions.",
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

              {/* Read More / Read Less Button */}
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
          <div className="d-flex align-items-center justify-content-between mb-5">
            {/* Left side (Text Section) */}
            <div style={{ flex: 1, paddingRight: "30px" }}>
       
              <h2>Google Gemini</h2>
              <div className="text-warning mb-1">
                ⭐⭐⭐⭐⭐ 95% Satisfaction
              </div>
              <p>
                Google Gemini is an advanced AI chatbot developed by Google AI
                that uses cutting-edge technologies like GPT-4 and natural
                language processing (NLP) to engage in meaningful, human-like
                conversations. This chatbot integrates seamlessly into various
                systems, providing real-time conversational experiences across
                websites, applications, and business workflows.
              </p>
              <div className="mb-3">
                <span className="badge bg-primary me-2">Image Generation</span>
                <span className="badge bg-success me-2">Creative</span>
                <span className="badge bg-warning text-dark">Paid</span>
              </div>
              <div>
                <button className="btn btn-primary me-2">Try Now</button>
                <button className="btn btn-outline-light">Watch Demo</button>
              </div>
            </div>

            {/* Right side (Image Section) */}
            <div style={{ flex: 1, textAlign: "center" }}>
              <img
                src={gemini}
                alt="Dashboard Preview"
                className="img-fluid rounded-3"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
          <section style={{ backgroundColor: "", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">Create AI Content in 3 Easy Steps</p>
              <h2
                style={{
                  fontWeight: "semibold",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                How does Gemini work?
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
                      Input Your Prompt or Idea
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Start by writing a question, idea, or topic. Gemini’s AI
                      understands natural language and prepares to create your
                      content.
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
                      Gemini Processes with AI
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Using advanced models, Gemini analyzes your input,
                      generates insights, writes responses, and can even create
                      code or images.
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
                      Refine the content if needed, copy it, export it, or share
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
              "screenshots",
              "reviews",
              "FAQs",
              "pros & Cons",
              "why-we-use",
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

          <div className="bg-primary text-center text-light rounded-4 p-5 mt-5">
            <h4 className="mb-3">Ready to get started with GeminiAI?</h4>
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

export default Gemini;