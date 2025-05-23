import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import poe1 from "../../../../public/assets/Img/AI For Chatbots/poe1.png";
import poeai from '../../../../public/assets/Img/AI Chatbots & Assistants/28.png'

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

const PoeAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'

  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
              Process text inputs and generate human-like responses
              </p>
              <h3 className=""> Diverse AI Avatars & Multilingual Support</h3>
            </div>
            {[
              {
                icon: "🖼",
                title: "Poe AI chatbot",
                desc: "Automates customer support through conversational agents . ",
              },
              {
                icon: "🎨",
                title: "AI-powered content creation",
                desc: "   Assists in generating content for social media, websites, blogs, and more.",
              },
              {
                icon: "✏",
                title: "Poe language model",
                desc: " Advanced NLP for dynamic text generation.",
              },
              {
                icon: "📦",
                title: "Poe AI for businesses",
                desc: "Solutions for business automation, CRM integration, and marketing  ",
              },
              {
                icon: "⚙",
                title: "Poe API",
                desc: " Seamlessly integrates Poe AI into existing platforms for various business solutions ",
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

      case "screenshots":
        return (
          <div className="row g-4">
            <div className="col-md-6">
              <img
                src={poe1}
                alt="screenshots 1"
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-md-6">
              <img
                src={poe1}
                alt="screenshots 2"
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

      case "why-we-use":
        return (
          <div className="row g-4">
            <div className="col-12">
              <div className="custom-card text-light p-5 text-center">
                <h3 className="fw-bold mb-4">Why Use Poe AI?</h3>
                <h5>Overview:</h5>
                <p className="fs-5">
                  Poe AI offers a variety of benefits that can transform how
                  businesses interact with customers, manage workflows, and
                  generate content.
                </p>
                <h5>Efficiency:</h5>
                <p className="fs-5 mt-3">
                  Poe AI automates repetitive tasks such as customer service,
                  sales inquiries, and content generation, saving time and
                  resources for businesses.
                </p>
                <h5>Scalability:</h5>
                <p className="fs-5 mt-3">
                  It scales easily to handle thousands of simultaneous
                  conversations or content creation tasks without compromising
                  performance.
                </p>
                <h5>24/7 Availability:</h5>
                <p className="fs-5 mt-3">
                  Poe AI never needs rest and provides always-on support,
                  ensuring businesses can serve their customers at any time of
                  the day or night.
                </p>
                <h5>Cost Reduction:</h5>
                <p className="fs-5 mt-3">
                  By reducing the need for manual intervention in routine tasks,
                  businesses can lower their operational costs significantly.
                </p>
                <h5>Seamless Integration:</h5>
                <p className="fs-5 mt-3">
                  Poe AI integrates effortlessly with CRM platforms, e-commerce
                  websites, and business operations, providing businesses with
                  powerful tools for enhancing customer engagement.
                </p>
                <Button variant="primary" size="lg" className="mt-4">
                  Start Writing Now
                </Button>
              </div>
            </div>
          </div>
        );

      case "pro&Const":
        return (
          <div style={styles.section}>
            <div className="container">
              <div className="row g-4">
                {/* Pros Section */}
                <div className="col-md-10 offset-md-1">
                  <div style={styles.card}>
                    <h3 className="mb-4 text-center">Pros of Poe AI</h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <h6>Accuracy:</h6>
                        <p>
                          Poe AI delivers highly accurate responses using
                          advanced NLP that understands context and intent,
                          ensuring customer interactions are clear and helpful.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Real-time Responses:</h6>
                        <p>
                          Poe AI responds instantly, making it highly effective
                          for live chat, customer support, and other
                          time-sensitive communications.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Customizable:</h6>
                        <p>
                          Poe AI can be tailored to match a company’s tone of
                          voice, branding, and specific business use cases like
                          marketing or help desk support.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Multi-Language Support:</h6>
                        <p>
                          Poe AI supports multiple languages, allowing
                          businesses to serve diverse audiences across different
                          regions with ease.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Powerful API Integration:</h6>
                        <p>
                          The Poe AI API allows seamless integration with
                          websites, CRMs, e-commerce systems, and internal tools
                          to power automation and AI features.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Versatility Across Use Cases:</h6>
                        <p>
                          Poe AI can be used for customer support, content
                          creation, lead generation, feedback collection, and
                          more, making it a flexible business tool.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cons Section */}
                <div className="col-md-10 offset-md-1">
                  <div style={styles.card}>
                    <h3 className="mb-4 text-center">Cons of Poe AI</h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <h6>Limited Emotional Intelligence:</h6>
                        <p>
                          Although Poe AI simulates human conversation, it lacks
                          true emotional awareness, which can be limiting in
                          sensitive or empathetic situations.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Dependence on Training Data:</h6>
                        <p>
                          Poe AI's effectiveness depends on the quality of its
                          training data. Poor or biased data may result in
                          inaccurate or non-inclusive outputs.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Handling Complex Queries:</h6>
                        <p>
                          Poe AI may struggle with ambiguous or highly technical
                          queries unless fine-tuned for specific industries or
                          domains.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Security Considerations:</h6>
                        <p>
                          As a cloud-based solution, Poe AI requires strict data
                          protection and compliance with regulations like GDPR
                          when handling sensitive business or customer data.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Customization Requires Planning:</h6>
                        <p>
                          While Poe AI is flexible, businesses may need
                          strategic planning and some technical effort to
                          properly align the AI with their workflows and
                          objectives.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Alternatives":
        return (
          <div style={styles.section}>
            <div className="container">
              <div className="row g-4">
                <div className="col-md-10 offset-md-1">
                  <div style={styles.card}>
                    <h3 className="mb-4 text-center">Alternatives to Poe AI</h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <h6>ChatGPT:</h6>
                        <p>
                          Developed by OpenAI, ChatGPT is another advanced
                          conversational AI powered by GPT-3 and GPT-4 models,
                          ideal for content creation, customer service, and
                          more.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Google Bard:</h6>
                        <p>
                          A conversational AI developed by Google that offers
                          natural interactions and is deeply integrated with
                          Google Search and other Google services.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Jasper AI:</h6>
                        <p>
                          A content generation-focused AI platform used for
                          writing marketing copy, blog content, and social media
                          posts, especially useful for marketing teams.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Rasa:</h6>
                        <p>
                          An open-source AI platform that allows developers to
                          build fully customizable chatbots with strong control
                          over workflows and on-premise deployment.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Mitsuku (Kuki):</h6>
                        <p>
                          A rule-based chatbot known for its engaging,
                          human-like conversations, typically used for casual
                          interaction and entertainment rather than business.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Replika:</h6>
                        <p>
                          A conversational AI designed for personal use, focused
                          on emotional companionship, mindfulness, and
                          self-reflection through interactive dialogue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                    q: "How does Poe AI work?",
                    a: "Poe AI uses natural language processing (NLP) and machine learning models to understand text inputs and generate relevant, human-like responses.                    .",
                  },
                  {
                    q: "How can I integrate Poe AI into my business?",
                    a: "Poe AI can be integrated into your business systems through its API, which allows you to add chatbots, customer support, and content generation tools to your website, CRM, or mobile apps.     s.",
                  },
                  {
                    q: "Is Poe AI suitable for content generation",
                    a: "Yes, Poe AI can generate SEO-friendly content, blog posts, marketing copy, and more, making it a valuable tool for content marketing.",
                  },
                  {
                    q: "What industries can benefit from Poe AI? ",
                    a: "Poe AI benefits industries such as e-commerce, healthcare, financial services, education, and customer service.                    .",
                  },
                  {
                    q: "How secure is Poe AI? ",
                    a: "Poe AI follows best practices in data security and complies with privacy regulations such as GDPR, ensuring that user data is protected.                    .",
                  },
                  {
                    q: "Does Poe AI support multilingual communication? ",
                    a: "Yes, Poe AI supports multiple languages, allowing businesses to communicate with global customers in their preferred language.",
                  },
                  {
                    q: "How does Poe AI handle real-time text processing?",
                    a: "Poe AI can process and respond to text in real-time, providing instant solutions for customer inquiries, live chat support, and sales automation    .",
                  },
                  {
                    q: "What is the primary purpose of Poe AI ?",
                    a: "Poe AI is designed to enhance business operations by providing AI-powered chatbots, content creation, customer service automation, and sales support .",
                  },
                  {
                    q: "How does Poe AI handle different languages? ",
                    a: "Poe AI supports multiple languages, allowing businesses to engage with global customers and provide multi-language support for customer service, marketing, and sales.",
                  },
                  {
                    q: "How accurate are Poe AI’s responses?",
                    a: "Poe AI delivers accurate responses based on its extensive training and data sets, but the accuracy may vary depending on the context and data quality it has been trained on.",
                  },
                  {
                    q: "How does Poe AI handle sensitive data ?",
                    a: "Poe AI adheres to industry-standard security protocols to protect sensitive data. However, businesses must ensure compliance with privacy regulations (e.g., GDPR, CCPA) when using AI-powered solutions.",
                  },
                  {
                    q: "Is Poe AI compliant with data protection laws?",
                    a: "Yes, Poe AI follows data protection laws, ensuring compliance with regulations like GDPR and CCPA, making it secure for businesses handling personal data.",
                  },
                  {
                    q:"How can businesses ensure data privacy when using Poe AI? ",
                    a: "Businesses can ensure data privacy by implementing encryption, ensuring compliance with data protection laws, and restricting access to sensitive information processed by Poe AI. ",
                  },
                  {
                    q: "How scalable is Poe AI?",
                    a: "Poe AI is highly scalable, capable of handling high volumes of interactions across multiple channels simultaneously, making it suitable for businesses of all sizes, from small enterprises to large corporations.",
                  },
                  {
                    q: "What is the future of Poe AI ?",
                    a: "The future of Poe AI includes continued advancements in language generation, contextual understanding, and business automation. As technology evolves, it will become even more adaptable and capable of tackling complex tasks.",
                  },
                  {
                    q: "What are Poe AI’s safety features?           ",
                    a: " Poe AI has built-in safety features to prevent harmful responses, ensure data privacy, and comply with ethical guidelines when interacting with users.",
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
              
              <h2>Poe AI</h2>
              <div className="text-warning mb-1">
                ⭐⭐⭐⭐⭐ 95% Satisfaction
              </div>
              <p>
                Poe AI is an advanced AI language model and conversational AI
                designed by OpenAI to power a variety of AI-powered tools. It
                utilizes cutting-edge Natural Language Processing (NLP) to
                understand and generate human-like text, making it an invaluable
                resource for business automation, content creation, customer
                service, and much more. Poe AI is engineered for applications
                ranging from chatbots for websites, virtual assistants, to sales
                automation, providing businesses with seamless automation
                solutions that enhance customer experience and operational
                efficiency. Its text generation abilities, powered by machine
                learning, are leveraged for a wide range of use cases including
                SEO, content optimization, and even project management.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4 mb-lg-0">
        <a
          href="https://poe.com/login"
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
                src={poeai}
                className="img-fluid rounded-3"
                style={{ maxWidth: "80%", height: "auto" }}
              />
            </div>
          </div>

          {/* Tab Navigation */}
          <ul className="nav nav-tabs custom-tabs mb-4">
            {[
              "features",
              "screenshots",
              "reviews",
              "FAQs",
              // "technical",
              "why-we-use",
              "pro&Const",
              "Alternatives",
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

export default PoeAI;