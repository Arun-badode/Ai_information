import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import motion from "../../../../public/assets/Img/AI for Meeting/1.png";
import scn1 from "../../../../public/assets/Img/AI for Meeting/motionS1.png";
import scn2 from "../../../../public/assets/Img/AI for Meeting/motionS2.png";

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
const Motion = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">Revolutionize Search with Motion AI</p>
              <h3 className="">AI-Powered Search Engine for Personalized Results</h3>
            </div>
            {[
              {
                icon: "🔍",
                title: "Personalized Search Results:",
                desc: "Motion AI uses advanced machine learning to deliver tailored search results based on user preferences, ensuring more accurate and relevant answers."
              },
              {
                icon: "💬",
                title: "AI-Powered Natural Language Processing:",
                desc: "Motion AI understands natural language queries, allowing users to search conversationally and receive more precise, context-aware responses."
              },
              {
                icon: "🌐",
                title: "Ad-Free Search Experience:",
                desc: "With Motion AI, users can enjoy an ad-free search experience, focusing solely on relevant content without distractions from advertisements."
              },
              {
                icon: "⚡",
                title: "Real-Time Search Suggestions:",
                desc: "Get immediate, AI-powered suggestions as you type, helping users refine searches and find relevant results faster."
              },
              {
                icon: "🧠",
                title: "Smart Search Algorithms:",
                desc: "Motion AI leverages powerful algorithms to adapt to individual user needs, delivering smarter and more contextually aware search results."
              }
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="custom-card text-light p-4 h-100"
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
                src={scn1}
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={scn2}
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
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
                q: "What is Motion AI?",
                a: "Motion AI is an AI-powered search engine that uses advanced machine learning and natural language processing to provide personalized, context-aware search results."
              },
              {
                q: "How does Motion AI work?",
                a: "Motion AI understands the meaning behind search queries, using machine learning to deliver highly relevant, accurate, and personalized results."
              },
              {
                q: "Can Motion AI handle complex queries?",
                a: "Yes, Motion AI is capable of processing complex, multi-layered queries, providing accurate and detailed results based on user intent."
              },
              {
                q: "Is Motion AI beginner-friendly?",
                a: "Yes, Motion AI is designed to offer a simple, intuitive user interface, making it accessible for both beginners and advanced users."
              },
              {
                q: "What platforms support Motion AI?",
                a: "Motion AI is available across all major web browsers and is also optimized for use on mobile devices for a seamless search experience."
              },
              {
                q: "Can I customize my search results in Motion AI?",
                a: "Yes, Motion AI offers personalized search preferences that allow users to tailor the results based on their interests and previous search history."
              },
              {
                q: "Does Motion AI support voice search?",
                a: "Yes, Motion AI integrates with voice assistants, providing a hands-free, conversational search experience."
              },
              {
                q: "Can Motion AI be used as a Chrome extension?",
                a: "Yes, Motion AI offers a browser extension for Chrome, enabling users to access its features directly from the browser."
              },
              {
                q: "Is Motion AI cloud-based?",
                a: "Yes, Motion AI is cloud-based, providing users with scalable and responsive search capabilities across multiple devices."
              },
              {
                q: "Does Motion AI have an API?",
                a: "Yes, Motion AI provides an API for businesses and developers to integrate its AI-powered search capabilities into their own platforms."
              },
              {
                q: "Can I automate responses with Motion AI?",
                a: "Yes, Motion AI can be integrated with other tools and platforms to automate the retrieval of personalized search results and streamline workflows."
              },
              {
                q: "What is the Motion AI dashboard?",
                a: "The Motion AI dashboard gives users a centralized view of their search preferences, results, and suggestions, offering a personalized experience."
              },
              {
                q: "How is Motion AI different from traditional search engines?",
                a: "Unlike traditional search engines, Motion AI focuses on privacy, personalization, and context-aware results, providing a more tailored search experience."
              },
              {
                q: "Can Motion AI protect cloud environments?",
                a: "While Motion AI is not a cloud security service, it does enhance the search experience across cloud environments, ensuring privacy and relevance in search results."
              },
              {
                q: "Does Motion AI support identity protection?",
                a: "Motion AI focuses on protecting user privacy by eliminating ads and offering secure data handling practices. It does not offer direct identity protection services."
              },
              {
                q: "How often is Motion AI updated?",
                a: "Motion AI continuously updates its algorithms and features to improve the search experience, enhance personalization, and address user needs."
              },
              {
                q: "Does Motion AI offer mobile protection?",
                a: "Motion AI is optimized for mobile devices, offering a responsive and efficient search experience but does not provide mobile protection services."
              },
              {
                q: "Can I run forensics with Motion AI?",
                a: "Motion AI is designed for personalized search results and does not provide forensic analysis tools."
              },
              {
                q: "Does Motion AI work offline?",
                a: "Motion AI requires an internet connection to provide real-time search results and personalized suggestions, and does not offer offline functionality."
              },
              {
                q: "What kind of support does Motion AI offer?",
                a: "Motion AI offers customer support through its website, knowledge base, and dedicated customer service to help users make the most of its features."
              },
              {
                q: "Is Motion AI customizable?",
                a: "Yes, Motion AI allows users to adjust their search preferences, refine results, and tailor the search experience to meet specific needs."
              },
              {
                q: "How do I contact Motion AI support?",
                a: "You can contact Motion AI support through their website's contact form or by reaching out via email or live chat for assistance."
              }
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
        

      case "why-we-use":
        return (
          <div className="container">
          <div className="row g-4">
            <div className="col-12">
              <div className="custom-card text-light p-5 text-center">
                <h3 className="fw-bold mb-4 text-start text-primary">
                  Why Use Motion AI?
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
                    Motion AI uses advanced machine learning and natural language processing to deliver personalized, context-aware search results.
                  </li>
                  <li className="mb-3">
                    The AI understands user intent and context, offering more accurate, relevant, and tailored search results based on individual needs.
                  </li>
                  <li className="mb-3">
                    Motion AI adapts over time, improving search relevance and creating a personalized experience with every search.
                  </li>
                  <li className="mb-3">
                    Seamlessly integrates with various platforms and devices, providing a consistent and smarter search experience across web and mobile applications.
                  </li>
                  <li className="mb-3">
                    Designed for both personal users and businesses, Motion AI delivers intuitive, fast, and privacy-focused search functionality with advanced filters.
                  </li>
                </ul>
        
                <div className="text-center mt-4">
                  <Button variant="primary" size="sm">
                    Explore Motion AI
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        );
        
        
                
                
        
        

      case "pros & cons":
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
                  AI-powered search engine that provides highly personalized, context-aware, and ad-free search results based on user intent.
                </li>
                <li className="mb-2">
                  Uses advanced natural language processing (NLP) to allow conversational search, improving the relevance of results.
                </li>
                <li className="mb-2">
                  Seamless integration with various platforms and devices, delivering a unified and smarter search experience across web and mobile.
                </li>
                <li className="mb-2">
                  Real-time search suggestions to help users refine queries and find relevant options faster.
                </li>
                <li className="mb-2">
                  Continuously learns from user interactions, offering increasingly accurate and contextually aware search results over time.
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
                  May not handle very niche or specific search queries as efficiently as traditional search engines.
                </li>
                <li className="mb-2">
                  Dependent on cloud connectivity, which could affect performance in areas with unreliable internet connections.
                </li>
                <li className="mb-2">
                  Limited customization for search result formatting compared to more specialized search engines.
                </li>
                <li className="mb-2">
                  Requires ongoing user interactions to refine search results, which may take time to perfect for new users.
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        );
        
        
                
        
        
        
        
        
      case "alternative":
        return (
          <div className="container my-5">
          <h4 className="text-center text-light mb-4">Alternatives to Motion AI</h4>
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
                  **Google Search** – The most popular search engine powered by AI, delivering fast and accurate results with powerful algorithms.
                </li>
                <li className="mb-2">
                  **Bing Search** – A Microsoft-powered search engine that uses AI to deliver personalized results and visual search features.
                </li>
                <li className="mb-2">
                  **DuckDuckGo** – A privacy-focused search engine that doesn't track users, providing AI-driven results without compromising user data.
                </li>
                <li className="mb-2">
                  **Ecosia** – An environmentally friendly search engine that uses AI for results and plants trees with revenue generated from search ads.
                </li>
                <li className="mb-2">
                  **Yahoo Search** – A search engine powered by AI that integrates various services like news, finance, and email alongside search results.
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
         <div className="row d-flex align-items-center justify-content-between mb-1">
  {/* Right side (Image Section) - shows first on mobile */}
  <div
    className="col-12 col-md-6 order-1 order-md-2 text-center mb-3 mb-md-0"
    style={{ height: "250px" }}
  >
    <img
      src={motion}
      style={{ maxWidth: "100%", height: "300px", objectFit: "contain" }}
      alt="Motion AI"
    />
  </div>

  {/* Left side (Text Section) - shows second on mobile */}
  <div className="col-12 col-md-6 order-2 order-md-1" style={{ paddingRight: "30px" }}>
    <p className="text-primary">Create stunning visuals effortlessly</p>
    <h1>Motion AI</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>

    <p>
      Motion AI is an advanced AI-driven platform designed to automate customer engagement, enhance user interactions, and drive business productivity through AI-powered tools. It specializes in creating automated solutions such as AI-powered chatbots, lead generation, customer service automation, and much more, aimed at boosting business operations and streamlining customer interactions.
    </p>

    <div className="mb-3">
  <a
  href="https://www.usemotion.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="btn btn-primary me-2"
>
  Explore Motion
</a>



    </div>
  </div>
</div>

          <section style={{ backgroundColor: "", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">Explore in 3 Simple Steps</p>
              <h2
                style={{
                  fontWeight: "semibold",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
How to Use Motion AI?</h2>

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
        Start Your Search
      </h5>
      <p style={{ color: "#fff", margin: 0 }}>
        Open **Motion AI** and enter your search query naturally, just like you would ask a question.
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
        Refine Your Search Results
      </h5>
      <p style={{ color: "#fff", margin: 0 }}>
        **Motion AI** will refine your results by understanding the context and intent of your search, providing personalized results tailored to your needs.
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
        Explore and Take Action on Results
      </h5>
      <p style={{ color: "#fff", margin: 0 }}>
        Review your results, refine your search with filters, and take action by interacting with the most relevant results.
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

              "why-we-use",
              "pros & cons",
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
            <h4 className="mb-3">Ready to get started with Motion AI?</h4>
            <p className="mb-4">
              Join thousands of professionals already boosting their
              productivity!
            </p>
            <div>
              <button className="btn btn-light me-3">Try Now for Free</button>
              <button className="btn btn-outline-light">Schedule a Demo</button>
            </div>
            <small className="d-block mt-2">
              No credit card required.  free trial available.
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Motion;