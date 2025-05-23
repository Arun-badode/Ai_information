import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import magisto from "../../../Images/MagistoAI.png";
import brave1 from "../../../../public/assets/Img/Ai for Search engines/Brave1.png";
import brave2 from "../../../../public/assets/Img/Ai for Search engines/Brave2.png";

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
const BraveSearch = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                Enhance Your Search Experience with Brave Search AI
              </p>
              <h3 className="">
                AI-Powered Search Engine for Privacy & Relevance
              </h3>
            </div>
            {[
              {
                icon: "🔍",
                title: "AI-Powered Search Results:",
                desc: "Brave Search AI uses advanced machine learning to provide more relevant and unbiased search results based on context, without tracking users' data.",
              },
              {
                icon: "🛡️",
                title: "Privacy-First Search Engine:",
                desc: "Unlike traditional search engines, Brave Search AI prioritizes user privacy, ensuring no tracking of search history or personal data.",
              },
              {
                icon: "⚡",
                title: "Real-Time Search Suggestions:",
                desc: "Get immediate, AI-generated search suggestions as you type, optimizing your search experience and helping you refine queries quickly.",
              },
              {
                icon: "🌐",
                title: "Cross-Platform Integration:",
                desc: "Brave Search AI is fully integrated across platforms, offering a consistent and seamless experience on desktop and mobile devices.",
              },
              {
                icon: "📊",
                title: "Search Filtering & Customization:",
                desc: "Brave Search AI lets users filter search results by categories such as images, news, and videos, allowing for a more tailored search experience.",
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
                src={brave1}
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={brave2}
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
                  q: "What is Brave Search AI?",
                  a: "Brave Search AI is a privacy-focused search engine powered by artificial intelligence, offering unbiased and private search results without tracking users' data.",
                },
                {
                  q: "How does Brave Search AI work?",
                  a: "Brave Search AI uses machine learning algorithms to deliver unbiased and relevant search results based on user queries while ensuring privacy and anonymity.",
                },
                {
                  q: "Is Brave Search AI resource-heavy?",
                  a: "No, Brave Search AI is designed to be lightweight and fast, providing efficient search results without compromising performance.",
                },
                {
                  q: "Can Brave Search AI filter results by content type?",
                  a: "Yes, Brave Search AI can filter search results by content types such as images, news, videos, etc., enhancing the search experience.",
                },
                {
                  q: "Does Brave Search AI track my searches?",
                  a: "No, Brave Search AI is privacy-focused and does not track users' search history, ensuring anonymous and secure browsing.",
                },
                {
                  q: "What platforms support Brave Search AI?",
                  a: "Brave Search AI is available on all major web browsers and is also integrated with the Brave browser for enhanced privacy.",
                },
                {
                  q: "Can I customize search results with Brave Search AI?",
                  a: "Yes, Brave Search AI allows users to adjust search settings, including customizing preferences for content and results filtering.",
                },
                {
                  q: "Does Brave Search AI offer real-time search suggestions?",
                  a: "Yes, Brave Search AI provides real-time search suggestions based on your query and browsing behavior, ensuring relevant and immediate results.",
                },
                {
                  q: "Is Brave Search AI suitable for mobile use?",
                  a: "Yes, Brave Search AI is mobile-friendly and works seamlessly on smartphones and tablets, ensuring a smooth experience for mobile users.",
                },
                {
                  q: "How secure is Brave Search AI?",
                  a: "Brave Search AI is built with user privacy in mind, ensuring that searches are secure and not tracked or stored for advertising purposes.",
                },
                {
                  q: "Can Brave Search AI be used with voice search?",
                  a: "Yes, Brave Search AI supports voice search, providing users with the ability to search using voice commands through compatible devices.",
                },
                {
                  q: "Is Brave Search AI open-source?",
                  a: "Yes, Brave Search AI is open-source, allowing users and developers to contribute to the project and inspect its code for transparency.",
                },
                {
                  q: "What industries benefit from Brave Search AI?",
                  a: "Brave Search AI is suitable for various industries, especially those focused on privacy, security, and data protection, such as law, healthcare, and research.",
                },
                {
                  q: "Does Brave Search AI offer a paid subscription for additional features?",
                  a: "Brave Search AI is free to use, but there is a Brave premium subscription that offers additional features like faster search and ad-free browsing.",
                },
                {
                  q: "Does Brave Search AI support custom search engines?",
                  a: "Yes, Brave Search AI allows users to integrate custom search engines, offering greater flexibility for developers and advanced users.",
                },
                {
                  q: "Can I change my search settings in Brave Search AI?",
                  a: "Yes, users can modify their search settings, including preferences for language, content filtering, and search result sources.",
                },
                {
                  q: "How often is Brave Search AI updated?",
                  a: "Brave Search AI is regularly updated with the latest features, privacy enhancements, and security measures to improve the user experience.",
                },
                {
                  q: "Can I use Brave Search AI with other browsers?",
                  a: "Yes, although Brave Search AI is integrated with the Brave browser, it can also be used with other browsers such as Chrome, Firefox, and Safari.",
                },
                {
                  q: "What are the privacy features of Brave Search AI?",
                  a: "Brave Search AI does not track users, store search history, or collect personal data, ensuring complete privacy and anonymity.",
                },
                {
                  q: "Can I share search results from Brave Search AI?",
                  a: "Yes, Brave Search AI allows users to share search results directly through social media or email, ensuring ease of sharing relevant information.",
                },
                {
                  q: "What support does Brave Search AI offer?",
                  a: "Brave Search AI offers support through its website, including FAQs, troubleshooting guides, and user forums to help resolve issues.",
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
                    Why Use Brave Search AI?
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
                      Brave Search AI provides a privacy-focused search engine
                      that does not track or profile users, offering enhanced
                      privacy and anonymity.
                    </li>
                    <li className="mb-3">
                      It uses transparent, unbiased algorithms to deliver
                      accurate, relevant search results, free from the influence
                      of ad-targeting algorithms.
                    </li>
                    <li className="mb-3">
                      Offers a seamless search experience through integration
                      with the Brave Browser, which emphasizes speed and
                      privacy.
                    </li>
                    <li className="mb-3">
                      As an open-source search engine, Brave Search AI gives
                      users the ability to inspect its code, ensuring trust and
                      transparency.
                    </li>
                    <li className="mb-3">
                      Ideal for users who value privacy and wish to avoid
                      traditional search engines that collect and sell user
                      data.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore Brave Search AI
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
              Pros & Cons of Brave Search AI
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
                    Brave Search AI offers privacy-focused search with no
                    tracking or user profiling, ensuring user anonymity.
                  </li>
                  <li className="mb-2">
                    Provides accurate, relevant search results with an emphasis
                    on unbiased and transparent algorithms.
                  </li>
                  <li className="mb-2">
                    Integrates with the Brave Browser for seamless, fast search
                    experience with enhanced privacy features.
                  </li>
                  <li className="mb-2">
                    Open-source search engine, which means users can inspect its
                    code, ensuring transparency and trustworthiness.
                  </li>
                  <li className="mb-2">
                    Excellent for users who are conscious about privacy and
                    prefer avoiding traditional search engines that track data.
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
                    Still relatively new compared to giants like Google, which
                    may result in some search results being less comprehensive.
                  </li>
                  <li className="mb-2">
                    Lacks some advanced features found in traditional search
                    engines, such as in-depth results for niche topics.
                  </li>
                  <li className="mb-2">
                    Limited integration with third-party tools and services
                    compared to more established search engines.
                  </li>
                  <li className="mb-2">
                    Search experience may vary in certain regions due to limited
                    indexing and regional data availability.
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
              Alternatives to Brave Search AI
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
                    <strong>DuckDuckGo</strong> – A privacy-focused search
                    engine that doesn't track users, providing search results
                    with no personalized profiling.
                  </li>
                  <li className="mb-2">
                    <strong>Qwant</strong> – A search engine that prioritizes
                    privacy and neutrality while providing results from across
                    the web with no tracking.
                  </li>
                  <li className="mb-2">
                    <strong>Startpage</strong> – A privacy-conscious search
                    engine that serves Google results without the tracking and
                    ads, ensuring user anonymity.
                  </li>
                  <li className="mb-2">
                    <strong>Swisscows</strong> – A privacy-centric search engine
                    that combines semantic search capabilities and AI to provide
                    highly relevant results.
                  </li>
                  <li className="mb-2">
                    <strong>Mojeek</strong> – An independent search engine that
                    focuses on privacy and delivering unbiased search results
                    without personal data collection.
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

              className="col-lg-6"
            >
              <p className="text-primary">
                Create stunning visuals effortlessly
              </p>
              <h1>Brave Search AI </h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>

              <p>
                Brave Search AI is an advanced AI-powered search engine designed
                to provide privacy-focused, personalized search results. Unlike
                traditional search engines, Brave Search AI integrates machine
                learning and AI tools to help users find more relevant content
                while maintaining high standards of privacy and security. Brave
                Search AI provides more accurate results for users by learning
                from their search patterns, offering an optimized search
                experience that is tailored to individual needs.
              </p>

            <div className="d-flex flex-wrap gap-3 mb-4 mb-lg-0">
        <a
          href="https://brave.com/ai/"
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
                How to Use Brave Search AI?
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
                      Open Brave Search
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Visit the Brave Search website or use it directly from the
                      Brave browser for a privacy-focused search experience.
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
                      Enter Your Search Query
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Simply type your search query in the search bar and let
                      Brave Search AI deliver unbiased and privacy-respecting
                      search results.
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
                      Refine Your Results
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Review the AI-generated results, and refine your search by
                      using filters or advanced search options for more specific
                      results.
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

export default BraveSearch;
