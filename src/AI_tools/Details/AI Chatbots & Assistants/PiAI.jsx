import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import piaiImg from '../../../../public/assets/Img/AI For Chatbots/pi.png'
import piaiSS from '../../../../public/assets/Img/AI Chatbots & Assistants/piaiSS.png'
import piaiSS1 from '../../../../public/assets/Img/AI Chatbots & Assistants/piaiSS1.png'



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

const PiAI = () => {
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
                desc: "PoeAI provides accurate, real-time answers powered by advanced AI, perfect for generating insightful, factual content.",
              },
              {
                icon: "🧠",
                title: "Conversational AI",
                desc: "Leverages advanced conversational models to handle multi-turn dialogues, ensuring seamless and natural communication.",
              },
              {
                icon: "🔍",
                title: "Real-Time Web Sources",
                desc: "PoeAI pulls its data from real-time web sources, providing the most current and accurate responses.",
              },
              {
                icon: "📚",
                title: "Academic & Research Support",
                desc: "Ideal for students and researchers, offering precise, citation-backed answers for research and academic purposes.",
              },
              {
                icon: "💬",
                title: "Simple Chat Interface",
                desc: "PoeAI integrates with easy-to-use chat interfaces, making information retrieval effortless while maintaining a conversational flow.",
              },
              {
                icon: "🌍",
                title: "Global Knowledge Base",
                desc: "Draws from a wide range of global data, offering answers across diverse fields and regions.",
              },
              {
                icon: "📱",
                title: "Multi-Device Support",
                desc: "Accessible on various devices like mobiles, tablets, and desktops, offering great flexibility in usage.",
              },
              {
                icon: "⚡",
                title: "Fast Response Time",
                desc: "PoeAI delivers instant responses, ensuring rapid interaction and easy access to necessary information.",
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
      case "why-we-use":
        return (
          <div className="container">
            <div className="row g-4">
              <div className="col-12">
                <div className="custom-card text-light p-5 text-center">
                  <h3 className="fw-bold mb-4 text-start text-primary">
                    Why Use PoeAI?
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
                      PoeAI combines the power of AI-driven language models with
                      conversational AI to provide fast and context-aware
                      responses.
                    </li>
                    <li className="mb-3">
                      Perfect for businesses, content creators, and individuals
                      needing real-time, intelligent interactions and content
                      generation.
                    </li>
                    <li className="mb-3">
                      Offers natural chat-style interactions while delivering
                      high-quality, relevant, and coherent content.
                    </li>
                    <li className="mb-3">
                      Accessible directly through the platform—no setup or login
                      required.
                    </li>
                    <li className="mb-3">
                      Supports complex multi-turn conversations, allowing users
                      to engage in deeper, context-aware discussions.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Try PoeAI Now
                    </Button>
                  </div>
                </div>
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
                    Provides intelligent, context-aware responses with the power
                    of advanced AI.
                  </li>
                  <li className="mb-2">
                    Efficient in multi-turn conversations, making it perfect for
                    deeper interactions.
                  </li>
                  <li className="mb-2">
                    Seamlessly integrates with various business applications and
                    APIs for a smooth workflow.
                  </li>
                  <li className="mb-2">
                    Learns from past interactions, making it better over time
                    for improved customer engagement.
                  </li>
                  <li className="mb-2">
                    Can be customized to suit specific business needs, including
                    tone, behavior, and appearance.
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
                    May require substantial customization for advanced use cases
                    or specific business tasks.
                  </li>
                  <li className="mb-2">
                    Can have occasional inaccuracies or misinterpretations of
                    complex queries.
                  </li>
                  <li className="mb-2">
                    Requires consistent internet access to function properly and
                    retrieve updated data.
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
                    ChatGPT – A powerful AI for conversation, content creation,
                    and problem-solving, built on GPT-4.
                  </li>
                  <li className="mb-2">
                    Google Bard – Google's AI assistant with internet access,
                    offering creative tools and web-backed responses.
                  </li>
                  <li className="mb-2">
                    Perplexity AI – Real-time answer engine that provides
                    citations and references for accuracy and transparency.
                  </li>
                  <li className="mb-2">
                    Bing AI – Microsoft’s chatbot integrated with internet
                    search capabilities and image generation.
                  </li>
                  <li className="mb-2">
                    Claude – An AI assistant with a focus on safe and helpful
                    responses, suitable for document-based tasks.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "screenshots":
        return (
          <div className="row g-4">
            <div className="col-md-6">
              <img
                src={piaiSS}
                alt="piai"
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-md-6">
              <img
                src={piaiSS1}
                alt="piai"
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

      case "FAQs":
        return (
          <div className="faq-section container py-5">
            <h3 className="text-center text-white mb-5 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is Pi AI?",
                  a: "Pi AI is an advanced conversational AI system that leverages natural language processing (NLP) and machine learning to create intelligent chatbots and virtual assistants. It is designed to understand, process, and respond to user inputs in a natural and engaging way, helping businesses automate tasks, improve customer support, and enhance content creation.",
                },
                {
                  q: "How does Pi AI work?",
                  a: "Pi AI works by using machine learning models that are trained on vast datasets to understand the context and nuances of conversations. It processes input text, identifies intent, and generates contextually relevant responses. It operates using NLP techniques to engage users in dynamic conversations, and can be easily integrated into websites, mobile apps, and CRM systems via its API.",
                },
                {
                  q: "What industries benefit from Pi AI?",
                  a: "Pi AI can be applied to a wide range of industries, including:\nE-commerce (for customer service and product recommendations)\nHealthcare (for patient interaction and appointment scheduling)\nEducation (for personalized learning and tutoring)\nFinance (for customer queries and support)\nMarketing (for campaign automation and customer engagement)\nCustomer Service (for automated support and lead generation)",
                },
                {
                  q: "Can Pi AI help with customer service?",
                  a: "Yes, Pi AI can automate customer support, handle frequent queries, provide real-time assistance, and escalate complex issues to human agents when necessary. It can also help in lead generation and sales automation, making customer service more efficient.",
                },
                {
                  q: "How does Pi AI assist in content creation?",
                  a: "Pi AI excels in generating SEO-friendly content, writing articles, creating social media posts, and even crafting marketing copy. It can also help with content curation and provide creative writing assistance, making it a valuable tool for content marketers.",
                },
                {
                  q: "Can Pi AI assist with social media management?",
                  a: "Yes, Pi AI can be used to automate social media content creation, schedule posts, engage with followers, and analyze audience sentiment. It can also assist in managing social media campaigns and help with content distribution to increase engagement.",
                },
                {
                  q: "Can Pi AI be integrated with websites?",
                  a: "Absolutely! Pi AI offers an API that allows businesses to integrate its chatbot functionality into websites for real-time customer support, product recommendations, and lead generation. It can also be integrated with CRM systems to automate customer interaction workflows.",
                },
                {
                  q: "How does Pi AI support sales automation?",
                  a: "Pi AI can automate the sales process by interacting with leads, nurturing them through personalized communication, and offering relevant product recommendations based on the user’s browsing behavior. It can also handle follow-ups and provide insights for improving sales strategies.",
                },
                {
                  q: "What makes Pi AI different from other AI tools?",
                  a: "Pi AI differentiates itself with its ability to engage in personalized, empathetic conversations. It is built to understand emotional cues, making it suitable for tasks requiring emotional intelligence, such as mental health support and relationship building. Unlike general-purpose AI, Pi AI is highly customizable for specific business needs.",
                },
                {
                  q: "How secure is Pi AI when handling sensitive data?",
                  a: "Pi AI follows industry-standard security practices, including encryption, to protect sensitive data. It complies with data protection regulations such as GDPR, ensuring that all data is handled securely and responsibly.",
                },
                {
                  q: "Can Pi AI be used for personalized marketing?",
                  a: "Yes, Pi AI can be used to create personalized marketing campaigns, offer targeted product recommendations, and engage customers with tailored messaging based on their previous interactions and preferences.",
                },
                {
                  q: "How does Pi AI improve e-commerce experiences?",
                  a: "Pi AI can provide real-time support for customers, offer product suggestions, assist with order tracking, and help businesses convert visitors into customers by guiding them through the shopping journey.",
                },
                {
                  q: "Does Pi AI support multilingual conversations?",
                  a: "Yes, Pi AI supports multiple languages, enabling businesses to provide global support and engage customers in different regions. It can understand and respond in various languages, making it a great tool for international markets.",
                },
                {
                  q: "Can Pi AI be used for text prediction?",
                  a: "Yes, Pi AI uses text prediction models to anticipate user inputs and generate responses before the user finishes typing, enhancing the real-time conversation experience and reducing response time.",
                },
                {
                  q: "How does Pi AI handle complex queries?",
                  a: "Pi AI uses contextual understanding and machine learning to handle complex or multi-step queries. However, for very specialized or ambiguous topics, it may require human intervention or escalation.",
                },
                {
                  q: "Can Pi AI automate workflows?",
                  a: "Yes, Pi AI can automate business processes such as customer feedback collection, content distribution, lead nurturing, and sales follow-up. It can streamline tasks, improve efficiency, and reduce manual effort.",
                },
                {
                  q: "Is Pi AI suitable for small businesses?",
                  a: "Yes, Pi AI is an affordable and scalable solution suitable for small businesses. It can help automate key business functions like customer support, content creation, and marketing, allowing small businesses to operate more efficiently.",
                },
                {
                  q: "Can Pi AI help with project management?",
                  a: "Pi AI can assist in task management, providing reminders, status updates, and automated follow-ups to ensure projects stay on track and deadlines are met. It can also facilitate team collaboration and communication.",
                },
                {
                  q: "How does Pi AI improve customer retention?",
                  a: "By providing personalized experiences, real-time support, and proactive communication, Pi AI can enhance customer satisfaction, reduce churn, and increase long-term customer loyalty.",
                },
                {
                  q: "What kind of content can Pi AI generate?",
                  a: "Pi AI can generate a wide range of content, including blog posts, product descriptions, social media updates, email newsletters, and SEO-optimized articles. It helps businesses maintain consistent content production with minimal effort.",
                },
                {
                  q: "Can Pi AI be used for lead nurturing?",
                  a: "Yes, Pi AI can help nurture leads by providing personalized communication and guiding prospects through the sales funnel with relevant product information, follow-ups, and reminders.",
                },
                {
                  q: "How accurate is Pi AI in its responses?",
                  a: "Pi AI's responses are highly accurate, especially when used for tasks like customer service, sales automation, and content generation. Its accuracy improves over time as it continues to learn from interactions.",
                },
                {
                  q: "How does Pi AI handle customer feedback?",
                  a: "Pi AI can automatically collect customer feedback, analyze it for sentiment, and generate actionable insights to improve products, services, and customer experiences.",
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
          <div className="d-flex align-items-center justify-content-between mb-2 lovaaiflex">
            {/* Left side (Text Section) */}
            <div style={{ flex: 1, paddingRight: "30px" }}>
              <h2>PI AI</h2>
              <div className="text-warning mb-1">
                ⭐⭐⭐⭐⭐ 95% Satisfaction
              </div>
              <p>
                Pi AI is a state-of-the-art conversational AI platform that uses
                advanced machine learning and natural language processing (NLP)
                techniques to create intelligent and contextually aware virtual
                assistants. These AI-powered chatbots are designed to engage in
                human-like conversations, offering personalized experiences for
                users across various applications. From customer service and
                sales automation to content creation and marketing, Pi AI has
                versatile use cases. At its core, Pi AI leverages a robust
                language model to understand the context of conversations and
                generate responses that feel both natural and intuitive. It is
                capable of engaging with users, automating business processes,
                providing personalized recommendations, and offering insights to
                improve decision-making.
              </p>
              <a
                                 href="https://pi.ai"
                                 rel="noopener noreferrer"
                                 className="btn btn-primary me-2"
                               >
                                 Explore Tool
                               </a>
            </div>

            {/* Right side (Image Section) */}
            <div style={{ flex: 1, textAlign: "center" }}>
              <img
                src={piaiImg}
                className="img-fluid rounded-3"
                style={{ maxWidth: "80%", height: "auto" }}
              />
            </div>
          </div>
          <section style={{ backgroundColor: "", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">
                Create Conversations with Pi AI in 3 Easy Steps
              </p>
              <h2
                style={{
                  fontWeight: "semibold",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                How does Pi AI work?
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
                      Start by typing a question, idea, or topic. Pi AI
                      processes it using advanced NLP to understand the context
                      and provide relevant responses.
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
                      Pi AI Processes with NLP
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Using advanced natural language models, Pi AI analyzes
                      your input, processes it, and generates context-aware
                      responses instantly.
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
                      Pi AI allows you to refine the responses, save them, or
                      share them directly for personal, business, or academic
                      use.
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
              // "technical",
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

export default PiAI;