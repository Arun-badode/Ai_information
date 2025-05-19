import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import character from "../../../../public/assets/Img/AI Chatbots & Assistants/32.png";


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

const CharacterAI = () => {
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
                title: "AI Chatbots",
                desc: "Character.AI leverages advanced conversational AI to simulate intelligent interactions with virtual characters that respond in real time.",
              },
              {
                icon: "🎯",
                title: "Conversational Design",
                desc: "Using machine learning and NLP, Character.AI allows for the creation of custom AI personalities tailored for creative writing, customer service, and storytelling.",
              },
              {
                icon: "🌍",
                title: "Character.AI API",
                desc: "Developers can integrate Character.AI’s capabilities into their apps, websites, or platforms using a robust API that enables smart conversations and automation.",
              },
              {
                icon: "🤝",
                title: "Text-to-Speech",
                desc: "Character.AI includes text-to-speech functionality to turn text-based messages into spoken audio, enhancing the user experience through voice interaction.",
              },
              {
                icon: "🤝",
                title: "Custom Personality Creation",
                desc: "Users and developers can design and deploy their own AI characters with distinct personalities, voices, and purposes, making interactions highly personalized.",
              },
              {
                icon: "⚡",
                title: "Real-Time Engagement",
                desc: "Character.AI responds instantly, allowing for dynamic conversations and interactive storytelling in real-time, perfect for entertainment or support roles.",
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
                src=""
                alt="Screenshot 1"
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-md-6">
              <img
                src=""
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
                <h3 className="fw-bold mb-4">Why Use Character.AI?</h3>

                <h5>Overview:</h5>
                <p className="fs-5">
                  Character.AI is a powerful conversational AI platform designed
                  to create lifelike virtual personalities. It enhances
                  engagement, streamlines support, and enables creative,
                  intelligent conversations for businesses and individuals
                  alike.
                </p>

                <h5>Enhanced Customer Experience:</h5>
                <p className="fs-5 mt-3">
                  By delivering real-time, personalized responses, Character.AI
                  improves customer satisfaction and builds stronger
                  relationships with your audience.
                </p>

                <h5>Scalability:</h5>
                <p className="fs-5 mt-3">
                  Character.AI allows businesses to manage unlimited customer
                  interactions simultaneously without sacrificing quality,
                  making it ideal for high-traffic periods.
                </p>

                <h5>Cost Efficiency:</h5>
                <p className="fs-5 mt-3">
                  Automating repetitive customer interactions reduces the need
                  for large support teams, lowering operational costs while
                  maintaining high service levels.
                </p>

                <h5>Versatility Across Industries:</h5>
                <p className="fs-5 mt-3">
                  Whether you're in e-commerce, healthcare, education, or
                  entertainment, Character.AI can be tailored to fit your
                  industry needs and workflow.
                </p>

                <h5>Real-Time Engagement:</h5>
                <p className="fs-5 mt-3">
                  The platform supports instant communication, allowing users to
                  interact dynamically with AI characters in real time, boosting
                  engagement and responsiveness.
                </p>

                <h5>Personalized Communication:</h5>
                <p className="fs-5 mt-3">
                  Character.AI uses past interactions and user data to craft
                  customized replies that make every interaction feel unique and
                  relevant.
                </p>

                <Button variant="primary" size="lg" className="mt-4">
                  Try Character.AI Now
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
                    <h3 className="mb-4 text-center">Pros of Character.AI</h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <h6>Highly Customizable:</h6>
                        <p>
                          Character.AI enables the creation of distinct virtual
                          personalities with tailored responses, allowing
                          businesses to match their brand tone and needs.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Multi-Functionality:</h6>
                        <p>
                          Beyond customer service, Character.AI supports use
                          cases in content creation, social media, lead
                          generation, and automated sales interactions.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>24/7 Availability:</h6>
                        <p>
                          AI-powered assistants are always online, ensuring
                          continuous support and engagement with users no matter
                          the time zone.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Natural Interactions:</h6>
                        <p>
                          Advanced NLP allows for human-like conversations,
                          improving user engagement and delivering more lifelike
                          dialogue experiences.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Ease of Integration:</h6>
                        <p>
                          With the Character.AI API, businesses can easily embed
                          AI chatbots into their websites, apps, or support
                          systems.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Data-Driven Insights:</h6>
                        <p>
                          Character.AI provides valuable analytics on user
                          interactions, helping businesses optimize
                          communication strategies and improve service.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cons Section */}
                <div className="col-md-10 offset-md-1">
                  <div style={styles.card}>
                    <h3 className="mb-4 text-center">Cons of Character.AI</h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <h6>Lack of Emotional Intelligence:</h6>
                        <p>
                          While conversational, Character.AI cannot truly
                          understand emotions, making it less effective in
                          emotionally sensitive or nuanced situations.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Requires Regular Updates:</h6>
                        <p>
                          Continuous monitoring and refinement are needed to
                          maintain response quality and ensure relevance in
                          changing business environments.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Limited by Training Data:</h6>
                        <p>
                          Like most AI systems, Character.AI’s performance is
                          tied to its training data. Poor data may lead to
                          biased, incomplete, or inaccurate replies.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Not Always Suitable for Complex Inquiries:</h6>
                        <p>
                          For tasks requiring critical thinking or deep subject
                          matter expertise, human intervention may still be
                          necessary.
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
                      Alternatives to Character.AI
                    </h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <h6>Replika:</h6>
                        <p>
                          A well-known AI chatbot designed for emotional
                          companionship, personal reflection, and casual
                          conversation with lifelike responses.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>ChatGPT (OpenAI):</h6>
                        <p>
                          A powerful language model known for generating
                          coherent, context-aware text across a variety of use
                          cases, including chat, education, and productivity.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Mitsuku (Kuki):</h6>
                        <p>
                          A fun, award-winning conversational AI focused on
                          engaging and humorous dialogue, ideal for
                          entertainment and casual interaction.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Botpress:</h6>
                        <p>
                          An open-source conversational platform aimed at
                          developers and enterprises looking for scalable,
                          customizable chatbot frameworks with control over
                          data.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Inworld AI:</h6>
                        <p>
                          Specializes in building AI characters for gaming,
                          virtual worlds, and immersive experiences, with strong
                          emotional and personality-based dialogue simulation.
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
                  q: "What is Character AI?",
                  a: "Character AI is an AI chatbot platform that allows users to create and interact with fictional or real-life character personas powered by large language models.",
                },
                {
                  q: "How does Character AI work?",
                  a: "Character AI uses deep learning and neural language models to simulate conversations based on a character’s predefined personality, history, and behavior.",
                },
                {
                  q: "Is Character AI free to use?",
                  a: "Yes, Character AI has a free tier with limited access. Premium plans offer enhanced features like faster responses, early access to updates, and priority support.",
                },
                {
                  q: "Can I create my own characters on Character AI?",
                  a: "Yes, users can create custom characters by defining their name, traits, backstory, and dialogue examples, making interactions more personalized.",
                },
                {
                  q: "Is Character AI safe for kids?",
                  a: "Character AI is intended for users 13 and older. Parental guidance is recommended, especially for younger users, as some characters may have mature content.",
                },
                {
                  q: "Can I use Character AI for writing or roleplay?",
                  a: "Absolutely. Many users leverage Character AI for creative writing, storytelling, and immersive roleplay with AI-powered characters.",
                },
                {
                  q: "Do Character AI chats get saved?",
                  a: "Yes, Character AI saves chat histories to your account, allowing you to revisit or continue conversations at any time.",
                },
                {
                  q: "Is Character AI available on mobile?",
                  a: "Character AI is accessible through mobile browsers and also has official iOS and Android apps for convenient chatting on the go.",
                },
                {
                  q: "Can Character AI speak other languages?",
                  a: "Yes, Character AI supports multiple languages depending on the character's design and language model capabilities.",
                },
                {
                  q: "Is there a filter on Character AI?",
                  a: "Yes, Character AI uses a moderation filter to prevent harmful, explicit, or unsafe content from being generated during chats.",
                },
                {
                  q: "Can I delete a conversation on Character AI?",
                  a: "Yes, users can delete their chat history with specific characters through their account settings or chat interface.",
                },
                {
                  q: "Is Character AI open source?",
                  a: "No, Character AI is not open source. It is a proprietary platform developed by Character Technologies, Inc.",
                },
                {
                  q: "Can I interact with other users on Character AI?",
                  a: "Character AI is primarily designed for one-on-one AI chats. However, some community features allow users to share characters and chat experiences.",
                },
                {
                  q: "What makes Character AI different from ChatGPT?",
                  a: "Character AI focuses on personality-driven conversations with fictional characters, while ChatGPT is a general-purpose assistant for a broad range of tasks.",
                },
                {
                  q: "Does Character AI use GPT technology?",
                  a: "Character AI uses its own proprietary language models and does not rely on OpenAI's GPT for its core AI functionalities.",
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
        <Link
          to="/Aitools"
          className="d-inline-block text-white text-decoration-none ml-3 py-1"
        >
          <i className="bi bi-arrow-left me-2"></i>Back to Directory
        </Link>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between mb-5">
            {/* Left side (Text Section) */}
            <div style={{ flex: 1, paddingRight: "30px" }}>
              <h2>CharacterAI</h2>
              <div className="text-warning mb-1">
                ⭐⭐⭐⭐⭐ 95% Satisfaction
              </div>
              <p>
                Character.AI is an advanced conversational AI platform designed
                to create virtual characters powered by AI chatbots. These
                chatbots can engage in interactive and meaningful conversations
                with users, simulate personality traits, and respond with
                human-like intelligence. Built on advanced machine learning
                algorithms, Character.AI is capable of understanding natural
                language and offering personalized responses based on context.
                The tool has been widely adopted across industries for its user
                engagement, content generation, and business automation
                capabilities.
              </p>
            </div>

            {/* Right side (Image Section) */}
            <div style={{ flex: 1, textAlign: "center" }}>
              <img
                src={character}
                alt="character"
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

          <div className="bg-primary text-center text-light rounded-4 p-5 mt-5">
            <h4 className="mb-3">Ready to get started with CharacterAI?</h4>
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

export default CharacterAI;