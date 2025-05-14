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
const Lucid = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                Enhance Your Search Experience with Lucid Search AI
              </p>
              <h3 className="">
                AI-Powered Search Engine for Privacy & Relevance
              </h3>
            </div>

            {[
              {
                icon: "🔍",
                title: "Semantic Search:",
                desc: "Lucid Search AI understands the meaning behind search queries, providing relevant and meaningful results.",
              },
              {
                icon: "🛡️",
                title: "Clustering Algorithms:",
                desc: "Lucid Search AI offers advanced clustering methods to organize documents based on semantic similarity.",
              },
              {
                icon: "⚡",
                title: "Visualization Tools:",
                desc: "Lucid Search AI provides visualizations like dendrograms and pie charts to make clustered data more interpretable.",
              },
              {
                icon: "🌐",
                title: "Customizable Settings:",
                desc: "Lucid Search AI allows users to fine-tune how documents are grouped and visualized according to their preferences.",
              },
              {
                icon: "📊",
                title: "Integration Capabilities:",
                desc: "Lucid Search AI can easily integrate with websites, CMS platforms, and other business tools via API or plugins.",
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
                  q: "What is Lucid Search?",
                  a: "Lucid Search is an AI-powered search engine that utilizes advanced semantic algorithms to provide highly relevant and organized search results, enhancing user experience with clarity and precision.",
                },
                {
                  q: "How does Lucid Search work?",
                  a: "Lucid Search uses semantic search and machine learning algorithms to understand the context behind search queries, ensuring that results are based on meaning rather than just keywords.",
                },
                {
                  q: "Is Lucid Search resource-heavy?",
                  a: "No, Lucid Search is optimized to handle large datasets efficiently, providing quick results without requiring excessive computational resources.",
                },
                {
                  q: "Can Lucid Search be customized?",
                  a: "Yes, Lucid Search offers customizable search algorithms and settings, allowing users to adjust the results and clustering parameters according to specific needs.",
                },
                {
                  q: "Does Lucid Search track personal data?",
                  a: "Lucid Search prioritizes privacy and does not track personal data unless explicitly stated, ensuring that user data is secure and anonymous.",
                },
                {
                  q: "What industries benefit from Lucid Search?",
                  a: "Lucid Search is ideal for industries like content management, e-commerce, marketing, research, and more, where fast and accurate document and data organization is essential.",
                },
                {
                  q: "Is Lucid Search suitable for small businesses?",
                  a: "Yes, Lucid Search is scalable and can be used by businesses of all sizes, making it an excellent tool for small businesses to manage and organize their data effectively.",
                },
                {
                  q: "Can Lucid Search integrate with other platforms?",
                  a: "Yes, Lucid Search offers API integration, allowing easy connections with websites, CMS platforms, and other business tools to streamline workflows.",
                },
                {
                  q: "Is Lucid Search easy to use for non-technical users?",
                  a: "Yes, Lucid Search is designed to be user-friendly, with intuitive interfaces and documentation to help both technical and non-technical users make the most of its features.",
                },
                {
                  q: "What languages does Lucid Search support?",
                  a: "Lucid Search supports multiple languages, enabling users to process and categorize documents in a wide range of languages.",
                },
                {
                  q: "Can Lucid Search handle unstructured data?",
                  a: "Yes, Lucid Search is capable of processing unstructured data, such as text, and organizes it based on semantic relevance, making it easier to analyze.",
                },
                {
                  q: "What is the primary use case for Lucid Search?",
                  a: "Lucid Search is primarily used for semantic search, clustering, and data organization, helping users organize and analyze large datasets efficiently.",
                },
                {
                  q: "How accurate is Lucid Search in clustering data?",
                  a: "Lucid Search uses advanced machine learning algorithms to ensure high accuracy in clustering and organizing documents based on their semantic meaning and similarity.",
                },
                {
                  q: "What kind of visualizations does Lucid Search provide?",
                  a: "Lucid Search offers visualizations like dendrograms and pie charts, helping users interpret the relationships and groupings in their data.",
                },
                {
                  q: "Can Lucid Search process large volumes of documents?",
                  a: "Yes, Lucid Search is designed to handle large volumes of data quickly and efficiently, making it ideal for big data applications.",
                },
                {
                  q: "How secure is Lucid Search?",
                  a: "Lucid Search follows industry-standard security practices, ensuring that user data is kept secure and private.",
                },
                {
                  q: "Is Lucid Search a cloud-based solution?",
                  a: "Yes, Lucid Search is a cloud-based solution, enabling users to access it from anywhere with an internet connection.",
                },
                {
                  q: "Can Lucid Search be used for real-time data processing?",
                  a: "Yes, Lucid Search is capable of real-time data processing, providing instant insights and document categorization as new data is introduced.",
                },
                {
                  q: "How can I integrate Lucid Search into my website?",
                  a: "Lucid Search offers an API that can be easily integrated into websites, enhancing search functionality and streamlining data processing.",
                },
                {
                  q: "Can I use Lucid Search to improve search functionality on my site?",
                  a: "Yes, Lucid Search enhances search functionality by offering semantic search, making it easier to find relevant content based on meaning rather than just keywords.",
                },
                {
                  q: "Does Lucid Search offer any machine learning capabilities?",
                  a: "Yes, Lucid Search integrates machine learning algorithms to improve clustering accuracy and semantic analysis over time.",
                },
                {
                  q: "Can Lucid Search handle multimedia content?",
                  a: "Lucid Search is primarily focused on text-based data but can be integrated with other tools to process multimedia content like images and videos.",
                },
                {
                  q: "How do I get started with Lucid Search?",
                  a: "To get started with Lucid Search, sign up for an account, configure your settings, and begin uploading or connecting your data for semantic search and clustering.",
                },
                {
                  q: "Is Lucid Search suitable for academic research?",
                  a: "Yes, Lucid Search is an excellent tool for academic research, helping researchers organize and analyze large volumes of papers, articles, and datasets.",
                },
                {
                  q: "Can I use Lucid Search to analyze customer feedback?",
                  a: "Yes, Lucid Search can analyze customer feedback, organize comments, reviews, and surveys, and provide insights into customer sentiment.",
                },
                {
                  q: "Does Lucid Search support multi-language searches?",
                  a: "Yes, Lucid Search supports multi-language searches, making it easy to organize and search documents in various languages.",
                },
                {
                  q: "What kind of clustering methods does Lucid Search offer?",
                  a: "Lucid Search offers various clustering methods, such as k-means and hierarchical clustering, to group documents based on similarity and relevance.",
                },
                {
                  q: "Can I customize the clustering results in Lucid Search?",
                  a: "Yes, Lucid Search allows users to adjust clustering parameters like the number of clusters, algorithms, and relevance criteria.",
                },
                {
                  q: "How does Lucid Search compare to other search tools?",
                  a: "Lucid Search stands out by focusing on semantic search and clustering, offering more precise and organized results compared to traditional keyword-based search tools.",
                },
                {
                  q: "Does Lucid Search offer an API for developers?",
                  a: "Yes, Lucid Search offers an API that developers can use to integrate its search and clustering capabilities into their own applications.",
                },
                {
                  q: "What are the system requirements for using Lucid Search?",
                  a: "Lucid Search is a cloud-based platform, so there are no specific system requirements other than a modern web browser and a secure internet connection.",
                },
                {
                  q: "Can Lucid Search be used on mobile devices?",
                  a: "Yes, Lucid Search is accessible through any modern web browser, making it available on both mobile and desktop devices.",
                },
                {
                  q: "How often is Lucid Search updated?",
                  a: "Lucid Search is regularly updated to improve performance, add new features, and enhance security.",
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
                    Why Use Lucid Search AI?
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
                      Lucid Search AI uses advanced semantic algorithms to
                      organize and categorize data, making it easier to explore
                      and analyze.
                    </li>
                    <li className="mb-3">
                      It offers real-time data processing, ensuring quick
                      categorization and organization of documents as new data
                      is introduced.
                    </li>
                    <li className="mb-3">
                      The platform is highly customizable, allowing users to
                      fine-tune search algorithms and settings to match their
                      specific requirements.
                    </li>
                    <li className="mb-3">
                      Lucid Search AI provides intuitive visualization tools
                      like dendrograms and pie charts to help users understand
                      complex data relationships.
                    </li>
                    <li className="mb-3">
                      With seamless API integration, Lucid Search AI can be
                      easily embedded into websites, CMS platforms, and other
                      business tools, improving overall workflow.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore Lucid Search AI
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
                    Lucid Search AI uses advanced semantic algorithms to deliver
                    highly relevant and organized search results, based on the
                    meaning behind search queries.
                  </li>
                  <li className="mb-2">
                    The platform provides real-time data processing, allowing
                    users to get quick insights and results as data is
                    continuously added.
                  </li>
                  <li className="mb-2">
                    It is highly customizable, offering users the ability to
                    fine-tune search algorithms, clustering methods, and
                    visualization tools to meet specific needs.
                  </li>
                  <li className="mb-2">
                    Lucid Search AI integrates seamlessly with websites, CMS
                    platforms, and other tools through API, streamlining
                    workflows and enhancing productivity.
                  </li>
                  <li className="mb-2">
                    Its user-friendly interface makes it easy for both technical
                    and non-technical users to navigate and use the platform
                    efficiently.
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
                    Lucid Search AI may require some technical knowledge to
                    fully customize clustering models and algorithms for
                    specific business or research needs.
                  </li>
                  <li className="mb-2">
                    Processing large-scale data may be resource-intensive,
                    requiring significant computing power to maintain
                    performance and speed.
                  </li>
                  <li className="mb-2">
                    Some specialized data types or niche use cases may require
                    further customization for optimal results.
                  </li>
                  <li className="mb-2">
                    While the platform is scalable, it might need additional
                    configuration for complex use cases or integration with
                    legacy systems.
                  </li>
                  <li className="mb-2">
                    For optimal clustering and search relevance, users need to
                    ensure high-quality, diverse input data for the best
                    results.
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
              Alternatives to Lucid Search AI
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
                    <strong>Elasticsearch</strong> – A powerful, open-source
                    search engine that provides real-time full-text search,
                    distributed search, and analytics across large datasets.
                  </li>
                  <li className="mb-2">
                    <strong>Apache Solr</strong> – A high-performance,
                    open-source search platform for building search engines,
                    offering features like advanced full-text search and faceted
                    search.
                  </li>
                  <li className="mb-2">
                    <strong>Algolia</strong> – A hosted search API that provides
                    real-time search and indexing, specializing in delivering
                    fast, relevant search results from large datasets.
                  </li>
                  <li className="mb-2">
                    <strong>Amazon CloudSearch</strong> – A scalable cloud-based
                    search service from AWS, enabling the development of search
                    applications with support for text search and multi-language
                    data processing.
                  </li>
                  <li className="mb-2">
                    <strong>Lucene</strong> – An open-source text search library
                    used by various search engines to enable fast, full-text
                    searching and data analysis.
                  </li>
                  <li className="mb-2">
                    <strong>Microsoft Azure Cognitive Search</strong> – A cloud
                    search service from Microsoft, offering AI-driven search
                    capabilities, including semantic search and automated
                    content categorization.
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
          <div className=" row d-flex align-items-center justify-content-between mb-1">
            {/* Left side (Text Section) */}
            <div
              style={{ flex: 1, paddingRight: "30px" }}
              className="col-6 col-md-12 "
            >
              <p className="text-primary">
                Create stunning visuals effortlessly
              </p>
              <h1>Lucid Search AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>

              <p>
                Lucid Search AI is an advanced, privacy-focused search engine
                that uses artificial intelligence to provide relevant search
                results while safeguarding user data. Unlike mainstream search
                engines, Lucid Search AI prioritizes user privacy and offers
                features for businesses, content creators, and marketers to
                discover information efficiently. By incorporating semantic
                search, data protection, and content optimization, Lucid Search
                AI is a powerful tool for SEO, content discovery, and web
                scraping.
              </p>

              <div className="mb-3">
                <span className="badge bg-primary me-2"> Search</span>
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
                How to Use Lucid Search AI?
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
                      Open Lucid Search AI Platform
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Navigate to the Lucid Search AI website or launch the
                      platform from your preferred environment.
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
                      Input Your Data or Text
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Upload your dataset, input text, or select options based
                      on the AI model you want to process.
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
                      Run the AI Model
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Trigger the AI model to process the input, and view or
                      download the results.
                    </p>
                    <div className="step3">3</div>
                  </div>
                </div>
              </div>
              );
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
            <h4 className="mb-3">Ready to get started with Lucid Search AI?</h4>
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

export default Lucid;
