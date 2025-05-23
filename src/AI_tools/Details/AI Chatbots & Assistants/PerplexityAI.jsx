
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import perplexity from "../../../../public/assets/Img/AI For Chatbots/perplexity.png"
import perplexity1 from "../../../../public/assets/Img/AI For Chatbots/perplexity1.png"


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

const PerplexityAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
   const [showAllFaqs, setShowAllFaqs] = useState(false);


  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <div className="row g-4">
            {[
              {
                title: "AI-powered tools for businesses",
                desc: "AI-powered tools that enable businesses to automate tasks, enhance decision-making, and improve overall efficiency.",
              },
              {
                title: "Text generation capabilities",
                desc: "Text generation capabilities that assist in content creation for blogs, articles, social media posts, and more.",
              },
              {
                title: "Conversational AI",
                desc: "Conversational AI for real-time communication and customer support, helping businesses engage with customers instantly.",
              },
              {
                title: "AI models for CRM integration",
                desc: "AI models that integrate into CRM systems and websites to improve customer relationship management and streamline workflows.",
              },
              {
                title: "Personalized customer experiences",
                desc: "Personalized customer experiences through tailored product recommendations and content curation, enhancing user engagement and satisfaction.",
              },
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div className="custom-card text-light p-4 h-100">
                  <div className="icon mb-3">
                    {/* You can add an icon here if needed */}
                  </div>
                  <h5 className="fw-bold">{feature.title}</h5>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case "Screenshots":
        return (
          <div className="row g-4">
            <div className="col-md-6">
              <img
                src={perplexity1}
                alt="Screenshot 1"
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-md-6">
              <img
                src={perplexity1}
                alt="Screenshot 2"
                className="img-fluid rounded-3"
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
      case "Why-we-use":
        return (
          <div className="row g-4">
            <div className="col-12">
              <div className="custom-card text-light p-5 text-center">
                <h3 className="fw-bold mb-4">Why Use Perplexity AI?</h3>
                <h5> Efficiency:</h5>
                <p className="fs-5">
                  Perplexity AI offers a variety of benefits that make it a
                  valuable tool for businesses and organizations across
                  industries:
                </p>
                <h5>Efficiency:</h5>
                <p className="fs-5 mt-3">
                  Automates tasks like customer service, content creation, and
                  data analysis, allowing businesses to save time and resources
                  by reducing manual labor.
                </p>
                <h5>Scalability:</h5>
                <p className="fs-5 mt-3">
                  Perplexity AI can handle thousands of simultaneous
                  interactions without any performance degradation, making it
                  ideal for businesses that require high scalability.
                </p>
                <h5>24/7 Availability:</h5>
                <p className="fs-5 mt-3">
                  Perplexity AI can work around the clock, offering AI-powered
                  support to customers or employees without the need for breaks,
                  making it an excellent solution for global and time-sensitive
                  operations.
                </p>
                <h5>Content Creation:</h5>
                <p className="fs-5 mt-3">
                  Generate high-quality content like blog posts, marketing copy,
                  social media content, and SEO-friendly articles at scale,
                  reducing the need for human writers and improving
                  productivity.
                </p>
                <h5>Personalization:</h5>
                <p className="fs-5 mt-3">
                  Perplexity AI can deliver personalized experiences by
                  providing product recommendations, tailored marketing
                  messages, and customized content based on user interactions.
                </p>
                <h5>Integration:</h5>
                <p className="fs-5 mt-3">
                  The Perplexity AI API makes it easy to integrate into existing
                  websites, CRM systems, and e-commerce platforms, enhancing
                  automation without disrupting workflows.
                </p>
                <Button variant="primary" size="lg" className="mt-4">
                  Start Writing Now
                </Button>
              </div>
            </div>
          </div>
        );
      case "Pro&Const":
        return (
          <div style={styles.section}>
            <div className="container">
              <div className="row g-4">
                <div className="col-md-10 offset-md-1">
                  <div style={styles.card}>
                    <h3 className="mb-4 text-center">Pros of Perplexity AI</h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <h6>High Accuracy:</h6>
                        <p>
                          Perplexity AI generates responses based on contextual
                          understanding, ensuring high-quality output with
                          relevant answers and personalized recommendations.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Fast Processing:</h6>
                        <p>
                          With real-time responses, Perplexity AI improves user
                          experience, ensuring that customer inquiries are
                          handled almost instantly.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Customizability:</h6>
                        <p>
                          Claude AI can be customized to suit specific needs,
                          from language style to the tone of the responses,
                          providing a more personalized experience for
                          customers.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Multilingual Support:</h6>
                        <p>
                          Perplexity AI can handle multiple languages, making it
                          a versatile tool for businesses operating in global
                          markets.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Seamless Integration:</h6>
                        <p>
                          With its API, Perplexity AI can be easily integrated
                          with CRM platforms, websites, and marketing tools,
                          providing businesses with powerful automation.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Wide Range of Applications:</h6>
                        <p>
                          From AI-powered chatbots to content generation and
                          lead generation, Perplexity AI can be utilized in many
                          different business operations.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-10 offset-md-1">
                  <div style={styles.card}>
                    <h3 className="mb-4 text-center">Cons of Perplexity AI</h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <h6>Limited Contextual Understanding:</h6>
                        <p>
                          While Perplexity AI is powerful, it may struggle with
                          highly complex, ambiguous, or multi-step queries that
                          require deeper domain expertise.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Data Privacy Concerns:</h6>
                        <p>
                          As Perplexity AI processes personal data, businesses
                          need to ensure that they comply with privacy
                          regulations (e.g., GDPR) to avoid mishandling of
                          sensitive data.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Dependency on Training Data:</h6>
                        <p>
                          The performance of Perplexity AI is highly reliant on
                          the quality of the data it is trained on, which means
                          that biased or poor-quality training data could affect
                          its outputs.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Emotional Intelligence Limitations:</h6>
                        <p>
                          While Perplexity AI can simulate empathy and respond
                          appropriately, it does not truly understand human
                          emotions and may struggle with more emotionally
                          sensitive situations.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Requires Technical Expertise for Integration:</h6>
                        <p>
                          For businesses to maximize Perplexity AI's potential,
                          they may need some technical expertise to integrate
                          and customize the tool for their specific use cases.
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
                      Alternatives to Perplexity AI
                    </h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <h6>Google Bard:</h6>
                        <p>
                          Google’s AI chatbot that uses Google's language models
                          for natural conversations and is integrated with
                          Google services.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Jasper AI:</h6>
                        <p>
                          A content creation-focused AI tool designed for
                          generating marketing copy, blog posts, and social
                          media content.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>ChatGPT:</h6>
                        <p>
                          Developed by OpenAI, ChatGPT is a conversational AI
                          model that excels in customer support, content
                          creation, and conversational tasks.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Mitsuku:</h6>
                        <p>
                          A chatbot developed by Pandorabots, known for its
                          human-like interaction and used for entertainment and
                          casual conversations.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Replika:</h6>
                        <p>
                          A conversational AI focused on emotional
                          companionship, often used for personal growth and
                          social interaction.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Rasa:</h6>
                        <p>
                          An open-source conversational AI platform designed for
                          developers to build custom chatbots and conversational
                          agents on-premise.
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
          <div className="faq-section container py-5">
            <h3 className="text-center text-white mb-5 text-primary">
              Frequently Asked Questions (FAQs) About Perplexity AI
            </h3>

            <div className="accordion" id="faqAccordion">
              {/* FAQ Item 1 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button
                    className="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    What is Perplexity AI?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingOne"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Perplexity AI is an AI-powered chatbot and language model
                    developed for a variety of tasks, including content
                    generation, customer service, sales automation, and more.
                  </div>
                </div>
              </div>

              {/* FAQ Item 2 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How does Perplexity AI work?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Perplexity AI works by using machine learning and NLP to
                    understand input text and generate relevant, coherent
                    responses based on the given context.
                  </div>
                </div>
              </div>

              {/* FAQ Item 3 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Can Perplexity AI be integrated with my business’s website?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Yes, you can easily integrate Perplexity AI into your
                    business's website or CRM platform using its API, allowing
                    you to automate tasks and improve customer engagement.
                  </div>
                </div>
              </div>

              {/* FAQ Item 4 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    Is Perplexity AI capable of generating creative content?
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Yes, Perplexity AI can generate creative content, such as
                    blog posts, marketing copy, and social media content, by
                    understanding your brand's tone and style.
                  </div>
                </div>
              </div>

              {/* FAQ Item 5 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    How accurate is Perplexity AI in customer service?
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Perplexity AI is highly accurate in responding to customer
                    queries, providing contextually relevant answers and
                    personalized interactions based on previous conversations.
                  </div>
                </div>
              </div>

              {/* FAQ Item 6 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingsix">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsesix"
                    aria-expanded="false"
                    aria-controls="collapsesix"
                  >
                    Can Perplexity AI be used for content optimization?
                  </button>
                </h2>
                <div
                  id="collapsesix"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingsix"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Yes, Perplexity AI can assist with SEO, content curation,
                    and optimization, making it an essential tool for businesses
                    seeking to improve their online visibility.
                  </div>
                </div>
              </div>

              {/* FAQ Item 7 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingseven">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseseven"
                    aria-expanded="false"
                    aria-controls="collapseseven"
                  >
                    How secure is Perplexity AI when handling sensitive data?
                  </button>
                </h2>
                <div
                  id="collapseseven"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingseven"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Perplexity AI complies with industry standards for data
                    privacy and security, ensuring that your business and
                    customer data is handled securely.
                  </div>
                </div>
              </div>

              {/* FAQ Item 8 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingeight">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseeight"
                    aria-expanded="false"
                    aria-controls="collapseeight"
                  >
                    Can Perplexity AI automate customer feedback collection?
                  </button>
                </h2>
                <div
                  id="collapseeight"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingeight"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Yes, Perplexity AI can automatically collect and analyze
                    customer feedback, providing insights into customer
                    satisfaction and areas for improvement.
                  </div>
                </div>
              </div>

              {/* FAQ Item 9 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingnine">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsenine"
                    aria-expanded="false"
                    aria-controls="collapsenine"
                  >
                    How does Perplexity AI compare to other AI chatbots like
                    ChatGPT?
                  </button>
                </h2>
                <div
                  id="collapsenine"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingnine"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Perplexity AI and ChatGPT both utilize GPT models, but
                    Perplexity AI is more focused on business automation,
                    content generation, and scalable customer support.
                  </div>
                </div>
              </div>

              {/* FAQ Item 10 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingten">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseten"
                    aria-expanded="false"
                    aria-controls="collapseten"
                  >
                    Can Perplexity AI help with lead generation?
                  </button>
                </h2>
                <div
                  id="collapseten"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingten"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    Yes, Perplexity AI can engage visitors on your website,
                    qualify leads, and provide personalized product
                    recommendations, streamlining the lead generation process.
                  </div>

                  {/* FAQ Item 11 */}
<div className="accordion-item">
  <h2 className="accordion-header" id="headingeleven">
    <button
      className="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseeleven"
      aria-expanded="false"
      aria-controls="collapseeleven"
    >
      What industries can benefit from using Perplexity AI?
    </button>
  </h2>
  <div
    id="collapseeleven"
    className="accordion-collapse collapse"
    aria-labelledby="headingeleven"
    data-bs-parent="#faqAccordion"
  >
    <div className="accordion-body">
      Perplexity AI can benefit various industries, including e-commerce, healthcare, finance, marketing, education, sales, and customer service. Its versatility in text generation, customer support, and automation makes it applicable to almost any industry that deals with large volumes of data and customer interactions.
    </div>
  </div>
</div>

{/* FAQ Item 12 */}
<div className="accordion-item">
  <h2 className="accordion-header" id="headingtwelve">
    <button
      className="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapsetwelve"
      aria-expanded="false"
      aria-controls="collapsetwelve"
    >
      Can Perplexity AI be used for personalized learning in education?
    </button>
  </h2>
  <div
    id="collapsetwelve"
    className="accordion-collapse collapse"
    aria-labelledby="headingtwelve"
    data-bs-parent="#faqAccordion"
  >
    <div className="accordion-body">
      Yes, Perplexity AI can act as a personalized tutor, offering real-time assistance, explaining complex concepts, and answering student queries in a tailored manner.
    </div>
  </div>
</div>

{/* FAQ Item 13 */}
<div className="accordion-item">
  <h2 className="accordion-header" id="headingthirteen">
    <button
      className="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapsethirteen"
      aria-expanded="false"
      aria-controls="collapsethirteen"
    >
      Can Perplexity AI assist with legal documentation?
    </button>
  </h2>
  <div
    id="collapsethirteen"
    className="accordion-collapse collapse"
    aria-labelledby="headingthirteen"
    data-bs-parent="#faqAccordion"
  >
    <div className="accordion-body">
      Perplexity AI can help generate basic legal documents, summarize contracts, and answer legal queries based on templates, but it should not replace professional legal advice.
    </div>
  </div>
</div>

{/* FAQ Item 14 */}
<div className="accordion-item">
  <h2 className="accordion-header" id="headingfourteen">
    <button
      className="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapsefourteen"
      aria-expanded="false"
      aria-controls="collapsefourteen"
    >
      How does Perplexity AI handle multi-turn conversations?
    </button>
  </h2>
  <div
    id="collapsefourteen"
    className="accordion-collapse collapse"
    aria-labelledby="headingfourteen"
    data-bs-parent="#faqAccordion"
  >
    <div className="accordion-body">
      Perplexity AI is designed to maintain context across multiple interactions, making it capable of engaging in multi-turn conversations where previous exchanges inform subsequent responses.
    </div>
  </div>
</div>

{/* FAQ Item 15 */}
<div className="accordion-item">
  <h2 className="accordion-header" id="headingfifteen">
    <button
      className="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapsefifteen"
      aria-expanded="false"
      aria-controls="collapsefifteen"
    >
      How does Perplexity AI improve customer service?
    </button>
  </h2>
  <div
    id="collapsefifteen"
    className="accordion-collapse collapse"
    aria-labelledby="headingfifteen"
    data-bs-parent="#faqAccordion"
  >
    <div className="accordion-body">
      By providing instant responses, personalized interactions, and 24/7 availability, Perplexity AI enhances customer support and improves response time, allowing human agents to focus on more complex tasks.
    </div>
  </div>
</div>

{/* FAQ Item 16 */}
<div className="accordion-item">
  <h2 className="accordion-header" id="headingsixteen">
    <button
      className="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapsesixteen"
      aria-expanded="false"
      aria-controls="collapsesixteen"
    >
      Can Perplexity AI be used for product recommendations on e-commerce websites?
    </button>
  </h2>
  <div
    id="collapsesixteen"
    className="accordion-collapse collapse"
    aria-labelledby="headingsixteen"
    data-bs-parent="#faqAccordion"
  >
    <div className="accordion-body">
      Yes, Perplexity AI can recommend products to customers based on their preferences, browsing behavior, and past purchases, improving conversion rates and enhancing the shopping experience.
    </div>
  </div>
</div>

{/* FAQ Item 17 */}
<div className="accordion-item">
  <h2 className="accordion-header" id="headingseventeen">
    <button
      className="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseseventeen"
      aria-expanded="false"
      aria-controls="collapseseventeen"
    >
      How does Perplexity AI assist in sales automation?
    </button>
  </h2>
  <div
    id="collapseseventeen"
    className="accordion-collapse collapse"
    aria-labelledby="headingseventeen"
    data-bs-parent="#faqAccordion"
  >
    <div className="accordion-body">
      Perplexity AI can automate lead qualification, follow-up communications, and product recommendations, reducing manual effort and increasing sales efficiency.
    </div>
  </div>
</div>

{/* FAQ Item 18 */}
<div className="accordion-item">
  <h2 className="accordion-header" id="headingeighteen">
    <button
      className="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseeighteen"
      aria-expanded="false"
      aria-controls="collapseeighteen"
    >
      Can Perplexity AI be used to create engaging social media content?
    </button>
  </h2>
  <div
    id="collapseeighteen"
    className="accordion-collapse collapse"
    aria-labelledby="headingeighteen"
    data-bs-parent="#faqAccordion"
  >
    <div className="accordion-body">
      Yes, Perplexity AI can generate engaging posts, captions, hashtags, and other social media content that resonates with the target audience.
    </div>
  </div>
</div>

{/* FAQ Item 19 */}
<div className="accordion-item">
  <h2 className="accordion-header" id="headingnineteen">
    <button
      className="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapsenineteen"
      aria-expanded="false"
      aria-controls="collapsenineteen"
    >
      Can Perplexity AI help with email marketing campaigns?
    </button>
  </h2>
  <div
    id="collapsenineteen"
    className="accordion-collapse collapse"
    aria-labelledby="headingnineteen"
    data-bs-parent="#faqAccordion"
  >
    <div className="accordion-body">
      Yes, Perplexity AI can help create personalized and effective email content, design subject lines, and automate email responses, making email marketing campaigns more efficient.
    </div>
  </div>
</div>

{/* FAQ Item 20 */}
<div className="accordion-item">
  <h2 className="accordion-header" id="headingtwenty">
    <button
      className="accordion-button collapsed"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapsetwenty"
      aria-expanded="false"
      aria-controls="collapsetwenty"
    >
      Can Perplexity AI generate SEO-friendly content?
    </button>
  </h2>
  <div
    id="collapsetwenty"
    className="accordion-collapse collapse"
    aria-labelledby="headingtwenty"
    data-bs-parent="#faqAccordion"
  >
    <div className="accordion-body">
      Perplexity AI can create SEO-optimized articles by incorporating relevant keywords, structuring content properly, and generating meta descriptions to improve search engine rankings.
    </div>
  </div>
     </div>

                </div>
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
            
              <h2>Perplexity AI</h2>
              <div className="text-warning mb-1">
                ⭐⭐⭐⭐⭐ 95% Satisfaction
              </div>
              <p>
                Perplexity AI is an advanced AI language model designed for a
                variety of applications, from content generation to customer
                service. Powered by Natural Language Processing (NLP) and
                machine learning, Perplexity AI is equipped with capabilities
                such as text generation, AI-powered chatbots, and conversational
                AI.
              </p>
              <p>
                With its strong AI capabilities, Perplexity AI can process and
                understand text, engage in dynamic conversations, provide
                real-time support, and create high-quality written content. It
                serves multiple industries, including businesses, healthcare,
                marketing, sales, and e-commerce, helping improve operational
                efficiency, customer interactions, and content creation
                processes.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4 mb-lg-0">
        <a
          href="https://www.perplexity.ai/"
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
                src={perplexity}
                className="img-fluid rounded-3"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>

          {/* Tab Navigation */}
          <ul className="nav nav-tabs custom-tabs mb-4">
            {[
              "Features",
              "Screenshots",
              "Reviews",
              "FAQs",
              "Technical",
              "Why-we-use",
              "Pro&Const",
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

export default PerplexityAI;