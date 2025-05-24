import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import magisto from "../../../Images/MagistoAI.png";
import neeva1 from "../../../../public/assets/Img/Ai for Search engines/neeva1.png";
import neeva2 from "../../../../public/assets/Img/Ai for Search engines/neeva2.png";

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
const Neeva = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">Revolutionize Search with Neeva AI</p>
              <h3 className="">
                AI-Powered Search Engine for Personalized Results
              </h3>
            </div>
            {[
              {
                icon: "🔍",
                title: "Personalized Search Results:",
                desc: "Neeva AI uses advanced machine learning to deliver tailored search results based on user preferences, ensuring more accurate and relevant answers.",
              },
              {
                icon: "💬",
                title: "AI-Powered Natural Language Processing:",
                desc: "Neeva AI understands natural language queries, allowing users to search conversationally and receive more precise, context-aware responses.",
              },
              {
                icon: "🌐",
                title: "Ad-Free Search Experience:",
                desc: "With Neeva AI, users can enjoy an ad-free search experience, focusing solely on relevant content without distractions from advertisements.",
              },
              {
                icon: "⚡",
                title: "Real-Time Search Suggestions:",
                desc: "Get immediate, AI-powered suggestions as you type, helping users refine searches and find relevant results faster.",
              },
              {
                icon: "🧠",
                title: "Smart Search Algorithms:",
                desc: "Neeva AI leverages powerful algorithms to adapt to individual user needs, delivering smarter and more contextually aware search results.",
              },
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
                src={neeva1}
                alt="neeva"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={neeva2}
                alt="neeva"
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
                  q: "What is Neeva AI?",
                  a: "Neeva AI is an AI-powered search engine that focuses on providing personalized, ad-free, and context-driven search results, offering an optimized and privacy-focused search experience.",
                },
                {
                  q: "How does Neeva AI work?",
                  a: "Neeva AI uses machine learning and natural language processing to analyze your search queries and deliver results that are highly relevant to your needs, without relying on ads or traditional ranking algorithms.",
                },
                {
                  q: "Can Neeva AI handle complex queries?",
                  a: "Yes, Neeva AI can understand complex, conversational queries, providing highly accurate answers even for niche or multi-faceted searches.",
                },
                {
                  q: "Is Neeva AI beginner-friendly?",
                  a: "Yes, Neeva AI offers a simple and intuitive search experience that makes it easy for both beginners and advanced users to find what they're looking for quickly.",
                },
                {
                  q: "What platforms support Neeva AI?",
                  a: "Neeva AI is available on all major web browsers and offers apps for both iOS and Android, providing a seamless experience across devices.",
                },
                {
                  q: "Can I customize my search results in Neeva AI?",
                  a: "Yes, Neeva AI allows you to customize your search preferences, offering personalized results based on your search history and interests.",
                },
                {
                  q: "Does Neeva AI support voice search?",
                  a: "Yes, Neeva AI integrates with voice assistants, allowing you to perform voice-driven searches for a hands-free experience.",
                },
                {
                  q: "Can Neeva AI be used as a Chrome extension?",
                  a: "Yes, Neeva AI offers a browser extension for Chrome, making it easy to access personalized search results directly from your browser.",
                },
                {
                  q: "Is Neeva AI cloud-based?",
                  a: "Yes, Neeva AI is a cloud-native platform that leverages the cloud for scalable and responsive search, ensuring fast and efficient results across various environments.",
                },
                {
                  q: "Does Neeva AI have an API?",
                  a: "Yes, Neeva AI offers an API for businesses and developers to integrate personalized AI-powered search into their own applications.",
                },
                {
                  q: "Can I automate responses with Neeva AI?",
                  a: "Yes, Neeva AI integrates with other platforms and tools, allowing for automated search result retrieval and enhanced workflows.",
                },
                {
                  q: "What is the Neeva AI dashboard?",
                  a: "The Neeva AI dashboard provides a centralized view of your search preferences, results, and recommendations, offering deeper control and personalization.",
                },
                {
                  q: "Does Neeva AI include threat intelligence?",
                  a: "While Neeva AI is focused on search, it integrates privacy-focused features, ensuring safe browsing and secure results without compromising user data.",
                },
                {
                  q: "How is Neeva AI different from traditional search engines?",
                  a: "Unlike traditional search engines, Neeva AI focuses on ad-free, personalized, and privacy-oriented search, offering results based on context and intent rather than ad-driven algorithms.",
                },
                {
                  q: "Can Neeva AI protect cloud environments?",
                  a: "Neeva AI is not a cloud security service, but it integrates with cloud platforms to provide relevant search results across cloud-based resources and environments.",
                },
                {
                  q: "Does Neeva AI support identity protection?",
                  a: "Neeva AI focuses on privacy protection by eliminating ads and using secure data practices. However, it does not offer dedicated identity protection services.",
                },
                {
                  q: "Can Neeva AI isolate compromised endpoints?",
                  a: "Neeva AI is not designed for endpoint protection, but it focuses on delivering personalized, secure, and privacy-conscious search results.",
                },
                {
                  q: "How often is Neeva AI updated?",
                  a: "Neeva AI continuously updates its algorithms and features to enhance search capabilities, keeping up with evolving user needs and privacy standards.",
                },
                {
                  q: "Does Neeva AI offer mobile protection?",
                  a: "Neeva AI provides mobile-friendly search experiences but does not offer direct mobile protection services.",
                },
                {
                  q: "Can I run forensics with Neeva AI?",
                  a: "Neeva AI is a search engine and does not provide forensic analysis tools. It is designed for more personalized and context-aware search results.",
                },
                {
                  q: "Does Neeva AI work offline?",
                  a: "Neeva AI requires an internet connection to provide personalized search results in real-time, and it does not offer offline functionality.",
                },
                {
                  q: "What kind of support does Neeva AI offer?",
                  a: "Neeva AI offers support through its website, knowledge base, and customer service to help users maximize their experience with the platform.",
                },
                {
                  q: "What’s included in Neeva AI’s Managed Detection and Response (MDR)?",
                  a: "Neeva AI does not offer MDR services. It focuses on providing a privacy-first, ad-free search experience with AI-powered results.",
                },
                {
                  q: "Is Neeva AI compliant with industry regulations?",
                  a: "Yes, Neeva AI adheres to privacy regulations such as GDPR, providing a secure and privacy-conscious search experience for users.",
                },
                {
                  q: "Does Neeva AI offer training or certification?",
                  a: "Neeva AI does not offer formal training or certifications, but it provides extensive documentation and user guides for users to learn how to maximize its features.",
                },
                {
                  q: "Can I test Neeva AI before purchasing?",
                  a: "Yes, Neeva AI offers free trials and demos for users to evaluate its features before committing to a subscription.",
                },
                {
                  q: "Does Neeva AI offer reporting features?",
                  a: "Neeva AI provides user activity reports and search trends but is not designed for advanced business reporting needs.",
                },
                {
                  q: "Is Neeva AI customizable?",
                  a: "Yes, Neeva AI allows users to customize their search preferences and filters, tailoring search results to specific needs and interests.",
                },
                {
                  q: "Does Neeva AI detect insider threats?",
                  a: "Neeva AI does not focus on threat detection. It is designed for delivering context-based, personalized search results.",
                },
                {
                  q: "How is Neeva AI licensed?",
                  a: "Neeva AI offers flexible pricing models based on subscription plans for individual users and businesses.",
                },
                {
                  q: "How do I contact Neeva AI support?",
                  a: "You can contact Neeva AI support through their website’s contact form or by reaching out via email or live chat for assistance.",
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

      case "why-we-use":
        return (
          <div className="container">
            <div className="row g-4">
              <div className="col-12">
                <div className="custom-card text-light p-5 text-center">
                  <h3 className="fw-bold mb-4 text-start text-primary">
                    Why Use Neeva AI?
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
                      Neeva AI uses advanced machine learning and natural
                      language processing to deliver personalized, ad-free
                      search results.
                    </li>
                    <li className="mb-3">
                      The AI understands user intent and context, providing more
                      relevant, accurate, and tailored search results for
                      individuals.
                    </li>
                    <li className="mb-3">
                      Neeva AI adapts to user preferences over time, improving
                      search relevance and creating a more personalized
                      experience with every search.
                    </li>
                    <li className="mb-3">
                      Seamlessly integrates with various platforms and devices,
                      offering a consistent and smarter search experience across
                      web and mobile apps.
                    </li>
                    <li className="mb-3">
                      Designed for both personal users and businesses, Neeva AI
                      provides intuitive, fast, and privacy-focused search
                      functionality with advanced filters.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore Neeva AI
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
            <h4 className="text-center text-light mb-4">
              Pros & Cons of Neeva AI
            </h4>
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
                    AI-powered search engine that delivers highly personalized,
                    ad-free results based on user context and intent.
                  </li>
                  <li className="mb-2">
                    Advanced natural language processing (NLP) enables users to
                    search conversationally, improving the relevance of results.
                  </li>
                  <li className="mb-2">
                    Seamless integration with multiple platforms and devices,
                    providing a unified and smarter search experience across web
                    and mobile.
                  </li>
                  <li className="mb-2">
                    Real-time search suggestions that speed up queries and
                    provide users with relevant options faster.
                  </li>
                  <li className="mb-2">
                    Continuously learns from user interactions, offering
                    increasingly accurate and context-aware results over time.
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
                    May not handle highly niche or specific search queries as
                    effectively as traditional search engines.
                  </li>
                  <li className="mb-2">
                    Dependent on cloud connectivity, which may impact
                    performance in regions with unstable internet connections.
                  </li>
                  <li className="mb-2">
                    Limited customization for search result formatting,
                    especially compared to more specialized search engines.
                  </li>
                  <li className="mb-2">
                    Requires ongoing user interactions to refine and improve
                    results, which might take time to perfect for new users.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "alternative":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-4">
              Alternatives to Neeva AI
            </h4>
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
                    **Google Search** – The most popular search engine powered
                    by AI, delivering fast and accurate results with powerful
                    algorithms.
                  </li>
                  <li className="mb-2">
                    **Bing Search** – A Microsoft-powered search engine that
                    uses AI to deliver personalized results and visual search
                    features.
                  </li>
                  <li className="mb-2">
                    **DuckDuckGo** – A privacy-focused search engine that
                    doesn't track users, providing AI-driven results without
                    compromising user data.
                  </li>
                  <li className="mb-2">
                    **Ecosia** – An environmentally friendly search engine that
                    uses AI for results and plants trees with revenue generated
                    from search ads.
                  </li>
                  <li className="mb-2">
                    **Yahoo Search** – A search engine powered by AI that
                    integrates various services like news, finance, and email
                    alongside search results.
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
        {/* <a
          href="/Aitools"
          className="d-inline-block text-white text-decoration-none ml-3 py-1"
        >
          <i className="bi bi-arrow-left me-2"></i>Back to Directory{" "}
        </a> */}
        <a
          href="/Aitools"
          className="d-inline-block text-white text-decoration-none  mt-3 ml-3 py-1 px-2 ms-5 border rounded-sm"
        >
          <i className="bi bi-arrow-left me-2"></i>Back  {" "}
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
              <p className="text-primary">
                Create stunning visuals effortlessly
              </p>
              <h1>Neeva AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>

              <p>
                Neeva AI is an advanced AI-powered tool designed to help users
                create SEO-optimized content, conduct keyword research, and
                improve content strategy. Whether you’re a content creator, SEO
                professional, or digital marketer, Neeva AI offers tools for
                content generation, on-page optimization, keyword analysis, and
                content performance tracking. Its goal is to streamline the
                content creation process while ensuring high-quality,
                search-engine-friendly output.
              </p>

              <div className="d-flex flex-wrap gap-3 mb-4 mb-lg-0">
        <a
          href="https://ww7.neeva.com/?usid=25&utid=10953275578"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg px-4"
        >
          Explore Tool
        </a>
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
                src={magisto}
                alt="neeva"
                style={{ MaxWidth: "100%", height: "300px" }}
              />
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
                How to Use Neeva AI?
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
                      Start Your Search
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Open **Neeva AI** and enter your search query naturally,
                      just like you would ask a question.
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
                      **Neeva AI** will refine your results by filtering out ads
                      and presenting highly personalized results based on your
                      query's context.
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
                      Review your results, refine your search with filters, and
                      take action by interacting with the most relevant results.
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

         
        </div>
      </div>
    </>
  );
};

export default Neeva;
