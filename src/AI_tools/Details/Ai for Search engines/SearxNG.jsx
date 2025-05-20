import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import magisto from "../../../Images/MagistoAI.png";

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
const SearxNG = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                Enhance Your Search Experience with SearxNG AI
              </p>
              <h3 className="">
                AI-Powered Search Engine for Privacy & Relevance
              </h3>
            </div>
            {[
              {
                icon: "🔍",
                title: "Customizable Search Results:",
                desc: "SearxNG aggregates results from various search engines, allowing users to customize their search sources and filters to get the most relevant and unbiased results.",
              },
              {
                icon: "🛡️",
                title: "Privacy-Focused Search Engine:",
                desc: "SearxNG ensures no user tracking or profiling, prioritizing privacy and anonymity by not storing search history or personal data.",
              },
              {
                icon: "⚡",
                title: "Open-Source and Transparent:",
                desc: "As an open-source project, SearxNG allows users to inspect, contribute, and host their own search engines, promoting transparency and community-driven development.",
              },
              {
                icon: "🌐",
                title: "Multi-Engine Search Integration:",
                desc: "SearxNG aggregates results from multiple search engines, offering users a wider range of results while maintaining privacy and anonymity.",
              },
              {
                icon: "📊",
                title: "Advanced Customization Options:",
                desc: "SearxNG allows advanced users to configure their search engines, filters, and data sources, enabling a fully tailored search experience.",
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
                src="https://images.wondershare.com/filmora/article-images/photos-into-video-app-8.jpg"
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src="https://www.tipard.com/images/editor/free-online-video-editor/magisto.jpg"
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
                  q: "What is SearxNG?",
                  a: "SearxNG is an open-source, privacy-respecting metasearch engine that aggregates results from various search engines without tracking or profiling users.",
                },
                {
                  q: "How does SearxNG work?",
                  a: "SearxNG queries multiple search engines simultaneously and aggregates the results into one list, without tracking the user's queries or personal information.",
                },
                {
                  q: "Is SearxNG resource-heavy?",
                  a: "No, SearxNG is designed to be lightweight and efficient, offering quick search results without compromising performance or using excessive resources.",
                },
                {
                  q: "Can SearxNG filter results by content type?",
                  a: "Yes, SearxNG allows users to filter search results by content type, including images, videos, news, and more.",
                },
                {
                  q: "Does SearxNG track my searches?",
                  a: "No, SearxNG does not track user searches or collect personal data, ensuring complete privacy and anonymity for users.",
                },
                {
                  q: "What platforms support SearxNG?",
                  a: "SearxNG is available as a web-based search engine and can be used on any major web browser, as well as being self-hostable for users who prefer to run it on their own servers.",
                },
                {
                  q: "Can I customize search results with SearxNG?",
                  a: "Yes, SearxNG allows users to customize their search experience by adjusting settings such as which search engines to use and how results are displayed.",
                },
                {
                  q: "Does SearxNG offer real-time search suggestions?",
                  a: "SearxNG does not currently offer real-time search suggestions, but it does provide fast results from a variety of sources based on your query.",
                },
                {
                  q: "Is SearxNG suitable for mobile use?",
                  a: "Yes, SearxNG is mobile-friendly and can be used seamlessly on smartphones and tablets through any major web browser.",
                },
                {
                  q: "How secure is SearxNG?",
                  a: "SearxNG prioritizes user privacy and security. It does not track users or store any search data, and all searches are anonymous.",
                },
                {
                  q: "Can SearxNG be used with voice search?",
                  a: "SearxNG does not have built-in voice search support, but you can use third-party voice assistants like Google Assistant or Siri to perform voice searches that direct to SearxNG.",
                },
                {
                  q: "Is SearxNG open-source?",
                  a: "Yes, SearxNG is open-source and can be freely modified and self-hosted. Users and developers can contribute to the project.",
                },
                {
                  q: "What industries benefit from SearxNG?",
                  a: "SearxNG is ideal for privacy-conscious individuals and organizations in various sectors such as law, research, healthcare, and journalism, where data security and anonymity are crucial.",
                },
                {
                  q: "Does SearxNG offer a paid subscription for additional features?",
                  a: "No, SearxNG is completely free to use, and there are no paid subscriptions. It is open-source and maintained by a community of contributors.",
                },
                {
                  q: "Does SearxNG support custom search engines?",
                  a: "Yes, SearxNG allows users to integrate custom search engines, offering greater flexibility and allowing the addition of specific search sources.",
                },
                {
                  q: "Can I change my search settings in SearxNG?",
                  a: "Yes, SearxNG allows users to modify search settings, including preferences for language, search engine sources, and other display options.",
                },
                {
                  q: "How often is SearxNG updated?",
                  a: "SearxNG is actively maintained and regularly updated with new features, security patches, and performance improvements.",
                },
                {
                  q: "Can I use SearxNG with other browsers?",
                  a: "Yes, SearxNG can be used with any modern browser, including Chrome, Firefox, Safari, and others.",
                },
                {
                  q: "What are the privacy features of SearxNG?",
                  a: "SearxNG ensures complete privacy by not tracking user searches, not collecting personal data, and offering anonymous searches through multiple data sources.",
                },
                {
                  q: "Can I share search results from SearxNG?",
                  a: "Yes, SearxNG allows you to share search results through links, social media, or other methods, just like any other search engine.",
                },
                {
                  q: "What support does SearxNG offer?",
                  a: "SearxNG offers support through its GitHub repository, user forums, and online community where users can find FAQs, troubleshooting guides, and contribute to the project.",
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
                    Why Use SearxNG?
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
                      SearxNG is an open-source, privacy-respecting search
                      engine that aggregates results from multiple search
                      engines while ensuring no tracking or user profiling.
                    </li>
                    <li className="mb-3">
                      It provides transparent, unbiased search results by
                      allowing users to configure their search sources and
                      settings, tailoring the results to their needs.
                    </li>
                    <li className="mb-3">
                      Highly customizable, enabling advanced users to configure
                      specific search engines, results, and data sources through
                      a self-hosted instance or pre-configured public instances.
                    </li>
                    <li className="mb-3">
                      SearxNG is perfect for users who prioritize privacy and
                      want full control over their search results without
                      compromising their data.
                    </li>
                    <li className="mb-3">
                      As an open-source project, it encourages transparency and
                      trust by allowing users to inspect and contribute to the
                      code.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore SearxNG
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
              Pros & Cons of SearxNG AI
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
                    SearxNG is an open-source privacy-focused search engine,
                    ensuring no user tracking or profiling.
                  </li>
                  <li className="mb-2">
                    Allows users to aggregate results from multiple search
                    engines while keeping their data private.
                  </li>
                  <li className="mb-2">
                    Highly customizable, allowing users to configure sources and
                    search settings to their preference.
                  </li>
                  <li className="mb-2">
                    Supports advanced search features like filters and
                    integrations with third-party services.
                  </li>
                  <li className="mb-2">
                    Can be self-hosted, providing full control over data and
                    search results, adding a layer of security and privacy.
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
                    May not provide the same level of accuracy or comprehensive
                    results as larger, more established search engines.
                  </li>
                  <li className="mb-2">
                    Since it's decentralized, results may vary depending on the
                    configuration of the search instance.
                  </li>
                  <li className="mb-2">
                    Some users might find the user interface less polished
                    compared to mainstream search engines.
                  </li>
                  <li className="mb-2">
                    Performance can be slower, especially when using self-hosted
                    instances or relying on limited indexing.
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
              Alternatives to SearxNG Search AI
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
                    <strong>SearxNG</strong> – An open-source metasearch engine
                    that aggregates results from various search engines while
                    prioritizing privacy and anonymity.
                  </li>
                  <li className="mb-2">
                    <strong>DuckDuckGo</strong> – A privacy-focused search
                    engine that doesn’t track users, providing search results
                    with no personalized profiling.
                  </li>
                  <li className="mb-2">
                    <strong>Qwant</strong> – A search engine that prioritizes
                    privacy and neutrality while providing results from across
                    the web with no tracking.
                  </li>
                  <li className="mb-2">
                    <strong>Startpage</strong> – A privacy-conscious search
                    engine that serves Google results without tracking or ads,
                    ensuring user anonymity.
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
              style={{ flex: 1, paddingRight: "30px" }}
              className="col-6 col-md-12 "
            >
              <p className="text-primary">
                Create stunning visuals effortlessly
              </p>
              <h1> SearxNG AI </h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>

              <p>
                SearxNG AI is an advanced, privacy-focused, open-source search
                engine that integrates Artificial Intelligence (AI) to provide
                secure, accurate, and customizable search results. It allows
                users to search the web without sacrificing privacy, as it
                doesn't track users or personalize results based on browsing
                history. SearxNG AI works by aggregating results from various
                search engines and presenting them in an anonymized format,
                offering users a comprehensive search experience.
              </p>

              <div className="mb-3">
                <span className="badge bg-primary me-2"> Security</span>
                <span className="badge bg-success me-2">Creative</span>
                <span className="badge bg-warning text-dark">Paid</span>
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
                How to Use SearxNG?
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
                      Open SearxNG Search Engine
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Navigate to SearxNG's interface or integrate it with your
                      custom setup.
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
                      Type your query in the search bar to get aggregated
                      results from multiple search engines.
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
                      Refine Your Search Results
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      You can refine your search by using specific filters or
                      selecting different engines directly from SearxNG’s
                      interface.
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
            <h4 className="mb-3">Ready to get started with SearxNG AI?</h4>
            <p className="mb-4">
              Join thousands of professionals already boosting their
              productivity!
            </p>
            <div>
              <button className="btn btn-light me-3">Try Now for Free</button>
              <button className="btn btn-outline-light">Schedule a Demo</button>
            </div>
            <small className="d-block mt-2">
              No credit card required. free trial available.
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearxNG;
