import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import carrot from "../../../../public/assets/Img/Ai for Search engines/carrot.png";
import magisto from "../../../Images/MagistoAI.png";
import carrot2 from "../../../../public/assets/Img/Ai for Search engines/Carrot2.png";

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
const Carrot = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                Enhance Your Search Experience with Carrot2 AI
              </p>
              <h3 className="">
                AI-Powered Search Engine for Privacy & Relevance
              </h3>
            </div>
            {[
              {
                icon: "🔍",
                title: "Semantic Search:",
                desc: "Carrot2 AI understands the meaning behind the search queries to provide more relevant results.",
              },
              {
                icon: "🛡️",
                title: "Clustering Algorithms:",
                desc: "Carrot2 AI offers multiple clustering methods to organize documents by similarity.",
              },
              {
                icon: "⚡",
                title: "Visualization Tools:",
                desc: "Carrot2 AI provides visualizations like dendrograms and pie charts to make the clustered data more understandable.",
              },
              {
                icon: "🌐",
                title: "Customizable Settings:",
                desc: "Carrot2 AI allows users to fine-tune how documents are grouped and presented.",
              },
              {
                icon: "📊",
                title: "Integration Capabilities:",
                desc: "Carrot2 AI easily integrates with websites, CMS platforms, and other tools via API or plugins.",
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
                src={carrot2}
                alt="carrot"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={carrot2}
                alt="carrot"
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
                  q: "What is Carrot2 AI?",
                  a: "Carrot2 AI is an advanced semantic search and clustering platform that helps organize large sets of documents by relevance and similarity, offering powerful tools for data analysis and insight generation.",
                },
                {
                  q: "How does Carrot2 AI work?",
                  a: "Carrot2 AI uses semantic search algorithms and clustering methods to process and categorize documents, presenting results through visualizations and advanced filtering capabilities.",
                },
                {
                  q: "Is Carrot2 AI resource-heavy?",
                  a: "No, Carrot2 AI is optimized for performance and scalability, allowing it to handle large datasets without demanding excessive computational resources.",
                },
                {
                  q: "Can Carrot2 AI be customized?",
                  a: "Yes, Carrot2 AI offers various customization options for clustering algorithms, search preferences, and visualization tools, allowing users to tailor the platform to their specific needs.",
                },
                {
                  q: "Does Carrot2 AI track personal data?",
                  a: "Carrot2 AI prioritizes user privacy and does not track personal data unless explicitly stated. User data is kept secure and anonymous.",
                },
                {
                  q: "What industries benefit from Carrot2 AI?",
                  a: "Carrot2 AI is useful for industries like research, content management, e-commerce, and marketing, where organizing large datasets and documents efficiently is crucial.",
                },
                {
                  q: "Is Carrot2 AI suitable for small businesses?",
                  a: "Yes, Carrot2 AI is highly scalable, making it suitable for businesses of all sizes. Small businesses can use the platform for document management and improving their data processing workflows.",
                },
                {
                  q: "Can Carrot2 AI integrate with other platforms?",
                  a: "Yes, Carrot2 AI provides API integration capabilities, allowing it to be easily connected with websites, content management systems, and other business tools.",
                },
                {
                  q: "Is Carrot2 AI easy to use for non-technical users?",
                  a: "Yes, Carrot2 AI is designed with user-friendly interfaces and detailed documentation to ensure that both technical and non-technical users can leverage its full potential.",
                },
                {
                  q: "What languages does Carrot2 AI support?",
                  a: "Carrot2 AI supports multiple languages, allowing it to process and categorize documents in a variety of global languages.",
                },
                {
                  q: "Can Carrot2 AI handle unstructured data?",
                  a: "Yes, Carrot2 AI is designed to handle unstructured data, such as textual content, and can efficiently process and categorize it based on semantic relevance.",
                },
                {
                  q: "What is the primary use case for Carrot2 AI?",
                  a: "Carrot2 AI is primarily used for semantic search, clustering, and data organization, helping businesses and organizations categorize and analyze large amounts of textual data.",
                },
                {
                  q: "How accurate is Carrot2 AI in clustering data?",
                  a: "Carrot2 AI uses advanced algorithms to ensure high accuracy in clustering data, organizing documents based on semantic meaning and similarity.",
                },
                {
                  q: "What kind of visualizations does Carrot2 AI provide?",
                  a: "Carrot2 AI offers various visualizations such as dendrograms, pie charts, and bar charts to help users understand the relationships and groupings within their data.",
                },
                {
                  q: "Can Carrot2 AI process large volumes of documents?",
                  a: "Yes, Carrot2 AI is optimized for processing and organizing large volumes of documents quickly and efficiently, even with big data.",
                },
                {
                  q: "How secure is Carrot2 AI?",
                  a: "Carrot2 AI follows best practices for data security, ensuring that user data and documents are handled with the utmost care and privacy.",
                },
                {
                  q: "Is Carrot2 AI a cloud-based solution?",
                  a: "Yes, Carrot2 AI is cloud-based, enabling users to access the platform from any device with a secure internet connection.",
                },
                {
                  q: "Can Carrot2 AI be used for real-time data processing?",
                  a: "Yes, Carrot2 AI can handle real-time data processing, providing immediate insights and document categorization as new data is introduced.",
                },
                {
                  q: "How can I integrate Carrot2 AI into my website?",
                  a: "Carrot2 AI offers API access that can be easily integrated into your website or CMS, allowing you to enhance your site's search and data processing capabilities.",
                },
                {
                  q: "Can I use Carrot2 AI to improve search functionality on my site?",
                  a: "Yes, Carrot2 AI enhances search functionality by providing semantic search capabilities, allowing users to find relevant content more efficiently based on meaning rather than just keywords.",
                },
                {
                  q: "Does Carrot2 AI offer any machine learning capabilities?",
                  a: "Yes, Carrot2 AI incorporates machine learning algorithms for clustering and semantic analysis, continuously improving its results over time.",
                },
                {
                  q: "Can Carrot2 AI handle multimedia content?",
                  a: "Carrot2 AI primarily focuses on textual data, but it can be integrated with other tools to handle multimedia content such as images and videos for enhanced analysis.",
                },
                {
                  q: "How do I get started with Carrot2 AI?",
                  a: "To get started, simply sign up for an account on the Carrot2 AI platform, configure your settings, and start uploading or connecting your data to begin using the semantic search and clustering features.",
                },
                {
                  q: "Is Carrot2 AI suitable for academic research?",
                  a: "Yes, Carrot2 AI is perfect for academic research, helping researchers organize and categorize large volumes of papers, articles, and datasets for easier analysis.",
                },
                {
                  q: "Can I use Carrot2 AI to analyze customer feedback?",
                  a: "Yes, Carrot2 AI can be used to analyze customer feedback, organize comments, reviews, and surveys, and provide insights into customer sentiment and trends.",
                },
                {
                  q: "Does Carrot2 AI support multi-language searches?",
                  a: "Yes, Carrot2 AI supports multi-language searches, enabling users to search and organize documents in various languages.",
                },
                {
                  q: "What kind of clustering methods does Carrot2 AI offer?",
                  a: "Carrot2 AI offers a variety of clustering methods, such as k-means and hierarchical clustering, to organize documents based on their similarity and relevance.",
                },
                {
                  q: "Can I customize the clustering results in Carrot2 AI?",
                  a: "Yes, Carrot2 AI provides options to adjust the clustering parameters, including the number of clusters, algorithms, and relevance criteria.",
                },
                {
                  q: "How does Carrot2 AI compare to other search tools?",
                  a: "Carrot2 AI stands out by focusing on semantic search and clustering, offering more relevant and organized results than traditional keyword-based search tools.",
                },
                {
                  q: "Does Carrot2 AI offer an API for developers?",
                  a: "Yes, Carrot2 AI offers an API that allows developers to integrate its clustering and search capabilities into their own applications.",
                },
                {
                  q: "What are the system requirements for using Carrot2 AI?",
                  a: "Carrot2 AI is a cloud-based platform, so there are no specific system requirements other than a modern web browser and a secure internet connection.",
                },
                {
                  q: "Can Carrot2 AI be used on mobile devices?",
                  a: "Yes, Carrot2 AI is accessible through any modern web browser, making it available for use on mobile devices as well as desktops.",
                },
                {
                  q: "How often is Carrot2 AI updated?",
                  a: "Carrot2 AI is regularly updated to improve its performance, add new features, and enhance security.",
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
                    Why Use Carrot2 AI?
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
                      Carrot2 AI uses advanced semantic search and clustering
                      algorithms to efficiently organize large sets of
                      documents, providing relevant results based on meaning
                      rather than just keywords.
                    </li>
                    <li className="mb-3">
                      It offers real-time data processing, enabling users to
                      quickly analyze and categorize documents as new data is
                      introduced.
                    </li>
                    <li className="mb-3">
                      The platform is highly customizable, allowing users to
                      fine-tune clustering parameters and search criteria to
                      meet specific business needs.
                    </li>
                    <li className="mb-3">
                      Carrot2 AI provides advanced visualization tools like
                      dendrograms and pie charts to help users understand the
                      data structure and clustering results more effectively.
                    </li>
                    <li className="mb-3">
                      With robust API integration capabilities, Carrot2 AI can
                      easily be embedded into websites, content management
                      systems, and other platforms, streamlining workflows and
                      improving data organization.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore Carrot2 AI
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
            <h4 className="text-center text-light mb-4">Pros & Cons </h4>
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
                    Uses advanced semantic search and clustering algorithms to
                    deliver highly relevant and organized document results.
                  </li>
                  <li className="mb-2">
                    Provides real-time data processing, ensuring immediate
                    results and insights for large datasets.
                  </li>
                  <li className="mb-2">
                    Allows advanced customization of clustering algorithms and
                    search criteria for tailored outputs.
                  </li>
                  <li className="mb-2">
                    Offers powerful visualization tools like dendrograms and pie
                    charts to better understand clustered data.
                  </li>
                  <li className="mb-2">
                    Seamlessly integrates with websites, CMS platforms, and
                    other tools via API, improving workflow automation.
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
                    Carrot2 AI may require technical expertise to fully utilize
                    advanced customization features.
                  </li>
                  <li className="mb-2">
                    Complex data processing tasks might require significant
                    computing resources for large-scale operations.
                  </li>
                  <li className="mb-2">
                    Results may occasionally need further refinement, especially
                    in highly specialized or niche topics.
                  </li>
                  <li className="mb-2">
                    While customizable, the platform may have limitations when
                    it comes to handling certain types of data or integration
                    with legacy systems.
                  </li>
                  <li className="mb-2">
                    Users may need to ensure high-quality, diverse datasets for
                    optimal clustering accuracy and relevance.
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
              Alternatives to Carrot2 AI
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
              
              className=" col-lg-6 "
            >
              <p className="text-primary">
                Create stunning visuals effortlessly
              </p>
              <h1> Carrot2 AI </h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>

              <p>
                Carrot2 AI is an advanced, open-source software designed to help
                users organize and analyze large sets of unstructured data. It
                specializes in search clustering, allowing users to group search
                results into topics or clusters for easier exploration and
                analysis. By leveraging semantic search and machine learning
                techniques, Carrot2 AI helps businesses, researchers, and
                content creators find patterns and insights within vast
                collections of data.
              </p>
              <p>
                Carrot2 AI is a powerful tool that helps users automate data
                clustering, making it easier to work with large datasets. It
                analyzes content and groups it into clusters based on semantic
                similarity, improving search and content discovery.
              </p>

            <div className="d-flex flex-wrap gap-3 mb-4 mb-lg-0">
        <a
          href="https://search.carrot2.org/#/search/web"
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
                src={carrot}
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
                How to Use Carrot2 AI?
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
                      Open Carrot2 AI Platform
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Navigate to the Carrot2 AI website or launch the platform
                      from your preferred environment.
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

export default Carrot;
