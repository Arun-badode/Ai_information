import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import tidio1 from "../../../../public/assets/Img/AI Chatbots & Assistants/tidio1.png";
import tidio2 from "../../../../public/assets/Img/AI For Chatbots/Tidio2.png";
import tidio3 from "../../../../public/assets/Img/AI For Chatbots/Tidio3.png";


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

const Tidio = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'

  const [showAllFaqs, setShowAllFaqs] = useState(false);


  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            {[
              {
                icon: "🧠",
        
                title: "Conversational AI",
                desc: "ChatGPT mimics human conversations by interpreting text input, processing it with advanced NLP, and generating context-aware responses for fluid and natural dialogue.",
              },
              {
                icon: "🎯",
                title: "Text Generation AI",
                desc: "Utilizing GPT-3 and GPT-4, ChatGPT creates coherent, relevant, and human-like text for various purposes such as FAQs, support chats, and creative writing.",
              },
              {
                icon: "🌍",
                title: "AI Writing Assistant",
                desc: "ChatGPT excels at writing blogs, articles, product descriptions, and social media content, helping users and businesses save time on content creation.",
              },
              {
                icon: "⚡",
                title: "GPT-Based Chatbot",
                desc: "At its core, ChatGPT is a GPT-powered chatbot capable of understanding complex inputs, maintaining context, and adapting conversations over time.",
              },
              {
                icon: "🤝",
                title: "AI in Education",
                desc: "Acts as a personal tutor by answering academic questions, explaining topics, solving problems, and assisting in homework across multiple subjects.",
              },
              {
                icon: "📦",
                title: "Multi-Use Virtual Assistant",
                desc: "Beyond chat, ChatGPT assists in scheduling, reminders, business automation, product suggestions, and personalized learning.",
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
                src={tidio2}
                alt="Screenshot 1"
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-md-6">
              <img
                src={tidio3}
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

      case "why-we-use":
        return (
          <div className="row g-4">
            <div className="col-12">
              <div className="custom-card text-light p-5 text-center">
                <h3 className="fw-bold mb-4">Why Use Tidio?</h3>

                <h5>Overview:</h5>
                <p className="fs-5">
                  Tidio is an all-in-one customer communication platform
                  combining live chat and AI-powered chatbots. It's designed to
                  help businesses provide real-time support, increase sales, and
                  automate customer interactions across multiple channels.
                </p>

                <h5>Cost-Effective:</h5>
                <p className="fs-5 mt-3">
                  Tidio offers a generous free plan and flexible premium
                  options, making it an affordable choice for startups, small
                  businesses, and growing enterprises looking for automation
                  without breaking the bank.
                </p>

                <h5>Improved Efficiency:</h5>
                <p className="fs-5 mt-3">
                  Automate responses to common questions and streamline
                  workflows with smart chatbots, allowing your support team to
                  focus on complex or high-value customer needs.
                </p>

                <h5>Easy Setup:</h5>
                <p className="fs-5 mt-3">
                  Tidio integrates seamlessly with popular platforms like
                  Shopify, WordPress, and Wix, with no coding required. The
                  onboarding process is quick and user-friendly for any business
                  owner.
                </p>

                <h5>Enhanced Customer Experience:</h5>
                <p className="fs-5 mt-3">
                  By offering instant responses and proactive support via live
                  chat or chatbots, Tidio helps you engage customers more
                  effectively and reduce response times.
                </p>

                <h5>Multi-Channel Integration:</h5>
                <p className="fs-5 mt-3">
                  Manage Facebook Messenger, Instagram, email, and website chat
                  in a single dashboard to ensure unified communication across
                  all touchpoints.
                </p>

                <h5>Analytics & Insights:</h5>
                <p className="fs-5 mt-3">
                  Tidio provides valuable customer data, chat history, and
                  performance metrics to help you monitor performance, optimize
                  support, and improve sales funnels.
                </p>

                <Button variant="primary" size="lg" className="mt-4">
                  Get Started with Tidio
                </Button>
              </div>
            </div>
          </div>
        );

      case "pro&Cons":
        return (
          <div style={styles.section}>
            <div className="container">
              <div className="row g-4">
                {/* Pros Section */}
                <div className="col-md-10 offset-md-1">
                  <div style={styles.card}>
                    <h3 className="mb-4 text-center">Pros of Tidio</h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <h6>AI-Driven Automation:</h6>
                        <p>
                          Tidio's AI-powered chatbots automate responses to
                          common customer inquiries, reducing workload and
                          ensuring consistent support.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Multi-Channel Support:</h6>
                        <p>
                          Integrates with email, Facebook Messenger, Instagram,
                          and live chat—allowing you to manage all channels from
                          a single dashboard.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Real-Time Support:</h6>
                        <p>
                          Tidio offers live chat features that allow agents to
                          assist customers instantly for more complex or
                          high-priority queries.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>User-Friendly Interface:</h6>
                        <p>
                          The dashboard is clean, easy to use, and designed for
                          both beginners and advanced users, with drag-and-drop
                          chatbot builder.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Flexible Pricing:</h6>
                        <p>
                          Offers a free plan with essential features and
                          scalable premium plans suitable for startups and
                          larger businesses alike.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cons Section */}
                <div className="col-md-10 offset-md-1">
                  <div style={styles.card}>
                    <h3 className="mb-4 text-center">Cons of Tidio</h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <h6>Limited Features in Free Plan:</h6>
                        <p>
                          The free version lacks some advanced automation and
                          reporting features needed by mid to large-scale
                          businesses.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Basic Analytics:</h6>
                        <p>
                          While Tidio provides basic stats, it may not be robust
                          enough for deep performance analysis or
                          enterprise-level insights.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Requires Internet Connection:</h6>
                        <p>
                          Both the chatbot and live chat require an active
                          internet connection; offline customer engagement isn't
                          supported.
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
                    <h3 className="mb-4 text-center">
                      Alternatives to ChatGPT
                    </h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <h6>Google Bard:</h6>
                        <p>
                          A conversational AI developed by Google, integrated
                          with Google Search and services, offering real-time
                          information and context-aware conversations.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Jasper AI:</h6>
                        <p>
                          An AI writing assistant focused on content generation
                          for marketing, blog writing, and copywriting with
                          high-quality outputs.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Mitsuku (Kuki):</h6>
                        <p>
                          An award-winning chatbot known for its lifelike and
                          witty conversations, primarily used for entertainment
                          rather than business applications.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Replika:</h6>
                        <p>
                          A personal AI companion designed for emotional
                          support, ideal for users seeking conversation and
                          mental well-being interactions.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Rasa:</h6>
                        <p>
                          An open-source conversational AI framework for
                          building fully customizable, privacy-focused chatbots
                          suited for enterprise environments.
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
                  q: "What is Tidio AI?",
                  a: "Tidio AI is a customer service automation platform that combines live chat and AI-powered chatbots to help businesses engage with visitors, answer questions, and improve support efficiency.",
                },
                {
                  q: "How does Tidio AI work?",
                  a: "Tidio AI uses artificial intelligence and machine learning to understand user queries and respond with automated messages or direct them to a live support agent if needed.",
                },
                {
                  q: "Is Tidio AI easy to integrate?",
                  a: "Yes, Tidio AI offers simple integration options with most websites through a plugin or script, and supports platforms like Shopify, WordPress, and Wix.",
                },
                {
                  q: "Can I train Tidio AI on my business FAQs?",
                  a: "Yes, you can train Tidio AI by feeding it your business FAQs, allowing it to respond accurately to customer inquiries based on your content.",
                },
                {
                  q: "Does Tidio AI support multilingual chats?",
                  a: "Yes, Tidio AI supports multiple languages, enabling businesses to communicate with customers across different regions effectively.",
                },
                {
                  q: "Is Tidio AI suitable for small businesses?",
                  a: "Absolutely. Tidio AI is designed to support businesses of all sizes, and its easy setup and affordable pricing make it ideal for small and medium enterprises.",
                },
                {
                  q: "Can I use Tidio AI with my CRM?",
                  a: "Yes, Tidio AI integrates with various CRM and marketing tools like HubSpot, Mailchimp, and Zapier to streamline customer relationship management.",
                },
                {
                  q: "Does Tidio AI offer mobile support?",
                  a: "Yes, Tidio provides mobile apps for iOS and Android so you can manage chats and respond to customers on the go.",
                },
                {
                  q: "Is Tidio AI secure?",
                  a: "Tidio takes user data protection seriously and implements strict security protocols, including encryption and GDPR compliance.",
                },
                {
                  q: "What is the pricing structure for Tidio AI?",
                  a: "Tidio AI offers a free plan with limited features and premium plans with advanced AI capabilities, chatbot automations, and team support.",
                },
                {
                  q: "Can I customize the Tidio chat widget?",
                  a: "Yes, the Tidio widget is fully customizable to match your brand’s look and feel, including colors, greetings, and positioning.",
                },
                {
                  q: "How does Tidio AI handle multiple chats?",
                  a: "Tidio allows simultaneous conversations with automated routing, so multiple users can be helped at once without losing context.",
                },
                {
                  q: "What kind of analytics does Tidio AI provide?",
                  a: "Tidio includes analytics and reports to help you monitor chatbot performance, user engagement, and overall customer support effectiveness.",
                },
                {
                  q: "Can Tidio AI reduce support workload?",
                  a: "Yes, by automating repetitive tasks and common questions, Tidio AI significantly reduces the burden on human agents and speeds up response times.",
                },
                {
                  q: "Does Tidio AI support e-commerce platforms?",
                  a: "Yes, Tidio integrates seamlessly with major e-commerce platforms like Shopify, WooCommerce, and BigCommerce to help convert visitors into customers.",
                },
              ]
                .map((item, i) => ({ ...item, id: `faq${i}` }))
                .filter((item, i) => showAllFaqs || i < 4)
                .map((item, i) => (
                  <div className="accordion-item mb-3" key={item.id}>
                    <h2 className="accordion-header" id={`heading${item.id}`}>
                      <button
                        className={`accordion-button ${i !== 0 ? "collapsed" : ""}`}
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
                      className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
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
             
              <h2>Tidio</h2>
              <div className="text-warning mb-1">
                ⭐⭐⭐⭐⭐ 95% Satisfaction
              </div>
              <p>
                Tidio is an AI-powered customer service and engagement platform
                that provides businesses with a chatbot, live chat, and
                automation features. It’s designed to streamline customer
                interactions, making it easier for businesses to engage with
                their customers in real time. With Tidio, companies can manage
                communications across various channels, including websites,
                social media platforms, and email, all in one place.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4 mb-lg-0">
        <a
          href="https://www.tidio.com/"
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
                src={tidio1}
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
              "pro&Cons",
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

export default Tidio;