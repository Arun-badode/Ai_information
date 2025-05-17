import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

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

const QuillBotAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            {[
              {
                desc: "AI-powered Chatbot for Websites: Jasper can be integrated into business websites to offer real-time support, answer customer queries, and automate responses for a more efficient customer experience.",
              },
              {
                desc: "Conversational AI for Marketing: Jasper assists marketers by generating content, managing social media, and creating email campaigns with personalized messages based on user data and engagement.",
              },
              {
                desc: "AI Assistant for Businesses: Jasper functions as a virtual assistant capable of scheduling, setting reminders, and providing timely responses to business inquiries.",
              },
              {
                desc: "Text Generation for Content Creation: Jasper excels in generating blog posts, articles, and social media content, making it ideal for businesses producing high-quality written materials at scale.",
              },
              {
                desc: "Lead Generation and Qualification: Jasper engages with potential customers, qualifies leads, and nurtures relationships to help businesses capture and convert prospects.",
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
                <h3 className="fw-bold mb-4">Why Use Jasper AI?</h3>

                <h5>Overview:</h5>
                <p className="fs-5">
                  Jasper AI offers numerous advantages for businesses, content
                  creators, and marketers. It automates and enhances
                  communication, content, and customer engagement processes at
                  scale.
                </p>

                <h5>Boost Efficiency:</h5>
                <p className="fs-5 mt-3">
                  Jasper automates repetitive tasks like content creation,
                  customer support, and social media engagement, allowing teams
                  to focus on strategy and innovation.
                </p>

                <h5>Scale Operations:</h5>
                <p className="fs-5 mt-3">
                  Jasper can manage multiple interactions simultaneously, making
                  it easy for businesses to scale operations without
                  compromising quality or response time.
                </p>

                <h5>24/7 Availability:</h5>
                <p className="fs-5 mt-3">
                  Jasper is available round the clock, ensuring consistent
                  support, content generation, and business continuity—even
                  outside working hours.
                </p>

                <h5>Cost Reduction:</h5>
                <p className="fs-5 mt-3">
                  By replacing manual work with automation, Jasper significantly
                  reduces costs associated with human labor in customer service,
                  content production, and marketing.
                </p>

                <h5>Customizable Experience:</h5>
                <p className="fs-5 mt-3">
                  Jasper can be fine-tuned to align with your brand tone,
                  industry-specific needs, and preferred communication style,
                  delivering personalized and contextual responses.
                </p>

                <h5>Data-Driven Insights:</h5>
                <p className="fs-5 mt-3">
                  Jasper tracks and analyzes interactions to provide actionable
                  insights, helping businesses understand customer behavior and
                  refine their strategies.
                </p>

                <Button variant="primary" size="lg" className="mt-4">
                  Start Creating with Jasper
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
                    <h3 className="mb-4 text-center">Pros of Jasper AI</h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <h6>Highly Scalable:</h6>
                        <p>
                          Jasper can handle an unlimited number of users and
                          conversations simultaneously, making it suitable for
                          businesses of all sizes and support volumes.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Fast and Accurate Responses:</h6>
                        <p>
                          Jasper delivers quick and precise responses, improving
                          customer satisfaction and reducing resolution times.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Supports Multiple Languages:</h6>
                        <p>
                          Jasper enables global engagement with multilingual
                          capabilities, helping businesses cater to diverse
                          audiences.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Seamless Integration:</h6>
                        <p>
                          Jasper integrates easily with CRM tools, websites, and
                          marketing systems, allowing effortless adoption into
                          existing workflows.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>High-Quality Content Generation:</h6>
                        <p>
                          Jasper is known for creating SEO-optimized blog posts,
                          articles, and marketing content with speed and
                          consistency.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cons Section */}
                <div className="col-md-10 offset-md-1">
                  <div style={styles.card}>
                    <h3 className="mb-4 text-center">Cons of Jasper AI</h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <h6>Lack of Emotional Intelligence:</h6>
                        <p>
                          Jasper can simulate natural conversations but lacks
                          the emotional depth of human interaction, which can be
                          limiting in sensitive contexts.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Dependence on Data Quality:</h6>
                        <p>
                          Jasper’s effectiveness depends on the quality and
                          accuracy of the training data; poor data can lead to
                          biased or irrelevant outputs.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Requires Ongoing Maintenance:</h6>
                        <p>
                          Jasper needs regular updates to stay aligned with
                          business goals, user feedback, and evolving AI trends.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Not Suitable for All Complex Issues:</h6>
                        <p>
                          Jasper may struggle with complex, domain-specific
                          tasks and could require human oversight for accurate
                          handling.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Limited Personalization:</h6>
                        <p>
                          While customizable, deep personalization of Jasper’s
                          tone, voice, and logic may need technical resources
                          and manual fine-tuning.
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
                      Alternatives to Replika AI
                    </h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <h6>Wysa:</h6>
                        <p>
                          An AI-driven mental health chatbot designed to support
                          users dealing with stress, anxiety, and depression
                          through evidence-based techniques and daily check-ins.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Woebot:</h6>
                        <p>
                          A chatbot that applies principles of Cognitive
                          Behavioral Therapy (CBT) to help users track moods,
                          manage negative thoughts, and improve mental
                          well-being.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Mitsuku (Kuki):</h6>
                        <p>
                          A fun, conversational AI chatbot focused on casual
                          dialogue and entertainment, rather than emotional
                          support or therapy.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>ReGain:</h6>
                        <p>
                          A platform offering AI-enhanced relationship
                          counseling and therapy services, often used by couples
                          to improve communication and resolve conflicts.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>ChatGPT:</h6>
                        <p>
                          A powerful AI by OpenAI, capable of holding meaningful
                          conversations. While not mental health–focused, it can
                          be used for self-reflection and engaging dialogue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
        

      case "faq":
        return (
          <div className="faq-section container py-4">
            <h3 className="text-center mb-4">Frequently Asked Questions</h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  question: "What is Jasper AI?",
                  answer:
                    "Jasper AI is a conversational AI tool that assists with customer service, content creation, sales automation, and more.",
                },
                {
                  question: "How does Jasper AI work?",
                  answer:
                    "Jasper uses Natural Language Processing (NLP) and machine learning to understand user input and generate real-time, relevant responses.",
                },
                {
                  question: "Is Jasper AI suitable for small businesses?",
                  answer:
                    "Yes, Jasper offers scalable solutions perfect for small businesses to automate customer support, marketing, and content writing tasks.",
                },
                {
                  question: "Can Jasper AI create SEO content?",
                  answer:
                    "Absolutely. Jasper is designed to create SEO-optimized content that helps websites rank better on search engines.",
                },
                {
                  question: "Can Jasper generate creative writing?",
                  answer:
                    "Yes, Jasper can generate stories, poems, scripts, and other creative writing to support content creators.",
                },
                {
                  question: "Can Jasper AI improve its responses?",
                  answer:
                    "Jasper can be fine-tuned and trained over time to provide more accurate and business-specific responses.",
                },
                {
                  question: "Does Jasper AI offer sentiment analysis?",
                  answer:
                    "Yes, it includes sentiment analysis features to tailor its responses based on the user's emotional tone.",
                },
                {
                  question: "Can Jasper AI be trained on my business content?",
                  answer:
                    "Yes, Jasper can be trained using your own data so it provides accurate responses aligned with your products and services.",
                },
                {
                  question: "How can I integrate Jasper AI into my CRM?",
                  answer:
                    "Jasper AI offers API access, making it easy to integrate with platforms like Salesforce or HubSpot.",
                },
                {
                  question: "Can Jasper handle live chat on websites?",
                  answer:
                    "Yes, Jasper can integrate with live chat platforms to provide instant customer support and automate FAQs.",
                },
                {
                  question: "Is Jasper AI multi-channel?",
                  answer:
                    "Yes, Jasper supports web, email, social media, and messaging platforms like WhatsApp for consistent engagement.",
                },
                {
                  question: "Does Jasper support WhatsApp chatbots?",
                  answer:
                    "Yes, Jasper can be configured to handle automated conversations on WhatsApp for customer service or lead generation.",
                },
                {
                  question: "How scalable is Jasper AI?",
                  answer:
                    "Jasper is designed for scalability and can handle thousands of simultaneous interactions without slowing down.",
                },
                {
                  question: "Does Jasper provide analytics?",
                  answer:
                    "Yes, Jasper includes analytics features to track user behavior, conversation performance, and engagement trends.",
                },
                {
                  question: "Is Jasper accurate?",
                  answer:
                    "Jasper is highly accurate for most queries, but for complex or specialized topics, human fine-tuning is recommended.",
                },
                {
                  question: "Can Jasper do predictive analytics?",
                  answer:
                    "Yes, Jasper can identify patterns and trends, enabling predictive insights for marketing and user behavior.",
                },
                {
                  question: "Is Jasper user-friendly?",
                  answer:
                    "Jasper is designed for ease of use and can be managed by both technical and non-technical users.",
                },
                {
                  question: "Can Jasper manage multiple users at once?",
                  answer:
                    "Yes, Jasper handles concurrent conversations seamlessly, making it ideal for busy businesses.",
                },
                {
                  question: "Does Jasper improve over time?",
                  answer:
                    "Yes, with regular updates and training, Jasper's responses become more refined and accurate.",
                },
                {
                  question: "How reliable is Jasper for customer support?",
                  answer:
                    "Jasper is highly reliable for customer support, with quick and relevant responses for common queries.",
                },
              ].map((faq, index) => (
                <div className="accordion-item" key={index}>
                  <h2 className="accordion-header" id={`heading${index}`}>
                    <button
                      className={`accordion-button ${
                        index !== 0 ? "collapsed" : ""
                      }`}
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded={index === 0 ? "true" : "false"}
                      aria-controls={`collapse${index}`}
                    >
                      {faq.question}
                    </button>
                  </h2>
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse ${
                      index === 0 ? "show" : ""
                    }`}
                    aria-labelledby={`heading${index}`}
                    data-bs-parent="#faqAccordion"
                  >
                    <div className="accordion-body">{faq.answer}</div>
                  </div>
                </div>
              ))}
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
              <img
                src=""
                alt="Logo"
                className="me-3"
                style={{ width: "60px" }}
              />
              <h2>QuillBotAI</h2>
              <div className="text-warning mb-1">
                ⭐⭐⭐⭐⭐ 95% Satisfaction
              </div>
              <p>
                Jasper AI is a cutting-edge chatbot and virtual assistant that
                uses Natural Language Processing (NLP) and Machine Learning (ML)
                to offer a wide range of conversational capabilities. Developed
                to streamline operations, enhance customer engagement, and
                generate high-quality content, Jasper is used by businesses,
                marketers, and content creators to improve workflow and
                efficiency.
              </p>
              <p>
                Jasper AI stands out from other AI-powered chatbots due to its
                ability to not only engage in conversational AI but also assist
                in various other areas, including content creation, sales
                automation, and customer service.
                <br />
                GPT-3 and GPT-4 Models: These state-of-the-art language models
                enable Jasper to understand and generate human-like text with
                high accuracy and context awareness.
                <br />
                Customizable Responses: Businesses can tailor Jasper’s responses
                to reflect their brand voice, ensuring personalized interactions
                that resonate with customers.
                <br />
                Real-time Communication: Jasper can interact with users in
                real-time, making it ideal for live chat support and instant
                content generation.
              </p>
            </div>

            {/* Right side (Image Section) */}
            <div style={{ flex: 1, textAlign: "center" }}>
              <img
                src="https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/a-robot-coming-out-of-a-laptop-screen-with-the-perplexity-ai-logo-in-its-hand.jpg"
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
              "faq",
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

          <div className="bg-primary text-center text-light rounded-4 p-5 mt-5">
            <h4 className="mb-3">Ready to get started with QuillBotAI ?</h4>
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

export default QuillBotAI;