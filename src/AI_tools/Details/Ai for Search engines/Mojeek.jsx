import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import magisto from "../../../Images/MagistoAI.png";
import mojeek1 from "../../../../public/assets/Img/Ai for Search engines/Mojeek1.png"
import mojeek2 from "../../../../public/assets/Img/Ai for Search engines/Mojeek2.png"


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
const Mojeek = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                Enhance Your Search Experience with Mojeek AI
              </p>
              <h3 className="">
                AI-Powered Search Engine for Privacy & Relevance
              </h3>
            </div>

            {[
              {
                icon: "🔍",
                title: "Semantic Search:",
                desc: "Mojeek AI understands the meaning behind search queries, providing relevant and meaningful results.",
              },
              {
                icon: "🛡️",
                title: "Clustering Algorithms:",
                desc: "Mojeek AI offers advanced clustering methods to organize documents based on semantic similarity.",
              },
              {
                icon: "⚡",
                title: "Visualization Tools:",
                desc: "Mojeek AI provides visualizations like dendrograms and pie charts to make clustered data more interpretable.",
              },
              {
                icon: "🌐",
                title: "Customizable Settings:",
                desc: "Mojeek AI allows users to fine-tune how documents are grouped and visualized according to their preferences.",
              },
              {
                icon: "📊",
                title: "Integration Capabilities:",
                desc: "Mojeek AI can easily integrate with websites, CMS platforms, and other business tools via API or plugins.",
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
                src={mojeek1}
                alt="mojeek1"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={mojeek2}
                alt="mojeek2"
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
                  q: "What is Mojeek AI?",
                  a: "Mojeek AI is a semantic search and clustering platform that uses advanced algorithms to organize and analyze large datasets, making it easier to discover relevant insights and patterns.",
                },
                {
                  q: "How does Mojeek AI work?",
                  a: "Mojeek AI uses semantic search and clustering methods to process and categorize documents, providing organized, relevant results based on data similarity.",
                },
                {
                  q: "Is Mojeek AI resource-heavy?",
                  a: "No, Mojeek AI is optimized for performance and scalability, allowing it to efficiently handle large datasets without excessive resource consumption.",
                },
                {
                  q: "Can Mojeek AI be customized?",
                  a: "Yes, Mojeek AI offers several customization options for clustering algorithms, search parameters, and visualization tools, allowing users to tailor the platform to specific needs.",
                },
                {
                  q: "Does Mojeek AI track personal data?",
                  a: "Mojeek AI prioritizes user privacy and does not track personal data unless explicitly stated, ensuring that user data is secure and anonymous.",
                },
                {
                  q: "What industries benefit from Mojeek AI?",
                  a: "Mojeek AI is ideal for industries such as research, content management, e-commerce, and marketing, where efficient data organization and analysis are crucial.",
                },
                {
                  q: "Is Mojeek AI suitable for small businesses?",
                  a: "Yes, Mojeek AI is highly scalable and can be used by businesses of all sizes, including small businesses looking to improve document management and data processing.",
                },
                {
                  q: "Can Mojeek AI integrate with other platforms?",
                  a: "Yes, Mojeek AI provides API integration capabilities, allowing it to seamlessly connect with websites, content management systems, and other business tools.",
                },
                {
                  q: "Is Mojeek AI easy to use for non-technical users?",
                  a: "Yes, Mojeek AI is designed with user-friendly interfaces and comprehensive documentation, making it accessible for both technical and non-technical users.",
                },
                {
                  q: "What languages does Mojeek AI support?",
                  a: "Mojeek AI supports multiple languages, enabling it to process and categorize documents in a variety of global languages.",
                },
                {
                  q: "Can Mojeek AI handle unstructured data?",
                  a: "Yes, Mojeek AI is built to handle unstructured data, such as text, and organizes it based on semantic relevance for easier analysis.",
                },
                {
                  q: "What is the primary use case for Mojeek AI?",
                  a: "Mojeek AI is primarily used for semantic search, clustering, and data organization, helping users analyze large amounts of textual data efficiently.",
                },
                {
                  q: "How accurate is Mojeek AI in clustering data?",
                  a: "Mojeek AI uses advanced algorithms to ensure high accuracy in clustering, organizing documents based on their semantic meaning and similarity.",
                },
                {
                  q: "What kind of visualizations does Mojeek AI provide?",
                  a: "Mojeek AI offers visualizations like dendrograms, pie charts, and bar charts, helping users better understand the relationships and groupings within their data.",
                },
                {
                  q: "Can Mojeek AI process large volumes of documents?",
                  a: "Yes, Mojeek AI is optimized for processing and organizing large volumes of documents quickly and efficiently, even with big data.",
                },
                {
                  q: "How secure is Mojeek AI?",
                  a: "Mojeek AI follows best practices for data security, ensuring that all user data and documents are handled with care and remain private.",
                },
                {
                  q: "Is Mojeek AI a cloud-based solution?",
                  a: "Yes, Mojeek AI is cloud-based, providing users access from any device with a secure internet connection.",
                },
                {
                  q: "Can Mojeek AI be used for real-time data processing?",
                  a: "Yes, Mojeek AI is capable of handling real-time data processing, delivering instant insights and document categorization as new data is introduced.",
                },
                {
                  q: "How can I integrate Mojeek AI into my website?",
                  a: "Mojeek AI offers an API that can be easily integrated into websites and content management systems, improving search and data processing capabilities.",
                },
                {
                  q: "Can I use Mojeek AI to improve search functionality on my site?",
                  a: "Yes, Mojeek AI enhances search functionality by offering semantic search, allowing users to find relevant content based on meaning rather than just keywords.",
                },
                {
                  q: "Does Mojeek AI offer any machine learning capabilities?",
                  a: "Yes, Mojeek AI incorporates machine learning algorithms to improve clustering accuracy and semantic analysis over time.",
                },
                {
                  q: "Can Mojeek AI handle multimedia content?",
                  a: "Mojeek AI focuses primarily on textual data but can be integrated with other tools to handle multimedia content, such as images and videos, for enhanced analysis.",
                },
                {
                  q: "How do I get started with Mojeek AI?",
                  a: "To get started with Mojeek AI, sign up for an account, configure your settings, and begin uploading or connecting your data for clustering and semantic search.",
                },
                {
                  q: "Is Mojeek AI suitable for academic research?",
                  a: "Yes, Mojeek AI is an excellent tool for academic research, helping researchers organize and categorize large volumes of papers, articles, and datasets for easier analysis.",
                },
                {
                  q: "Can I use Mojeek AI to analyze customer feedback?",
                  a: "Yes, Mojeek AI can analyze customer feedback, categorize comments, reviews, and surveys, and provide valuable insights into customer sentiment and trends.",
                },
                {
                  q: "Does Mojeek AI support multi-language searches?",
                  a: "Yes, Mojeek AI supports multi-language searches, making it easier to organize documents and search across different languages.",
                },
                {
                  q: "What kind of clustering methods does Mojeek AI offer?",
                  a: "Mojeek AI offers various clustering methods, including k-means and hierarchical clustering, to group documents based on similarity and relevance.",
                },
                {
                  q: "Can I customize the clustering results in Mojeek AI?",
                  a: "Yes, Mojeek AI provides customizable clustering parameters, such as the number of clusters and algorithms, allowing users to tailor results.",
                },
                {
                  q: "How does Mojeek AI compare to other search tools?",
                  a: "Mojeek AI stands out by focusing on semantic search and clustering, offering more organized and relevant results than traditional keyword-based search tools.",
                },
                {
                  q: "Does Mojeek AI offer an API for developers?",
                  a: "Yes, Mojeek AI provides an API that developers can use to integrate its search and clustering capabilities into their applications.",
                },
                {
                  q: "What are the system requirements for using Mojeek AI?",
                  a: "Mojeek AI is cloud-based, so there are no specific system requirements other than a modern web browser and a secure internet connection.",
                },
                {
                  q: "Can Mojeek AI be used on mobile devices?",
                  a: "Yes, Mojeek AI is accessible via any modern web browser, making it available on mobile devices as well as desktops.",
                },
                {
                  q: "How often is Mojeek AI updated?",
                  a: "Mojeek AI is regularly updated to improve performance, add new features, and enhance security.",
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
                    Why Use Mojeek AI?
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
                      Mojeek AI uses advanced clustering algorithms to organize
                      large datasets based on semantic similarity, making it
                      easier to analyze and explore data.
                    </li>
                    <li className="mb-3">
                      It offers real-time data processing, allowing users to
                      quickly categorize and organize documents as new data is
                      added.
                    </li>
                    <li className="mb-3">
                      The platform is highly customizable, offering users the
                      ability to adjust clustering models and search settings to
                      suit their specific needs.
                    </li>
                    <li className="mb-3">
                      Mojeek AI provides intuitive visualization tools to help
                      users better understand the data structure, including
                      advanced visual representations like dendrograms.
                    </li>
                    <li className="mb-3">
                      With seamless API integration capabilities, Mojeek AI can
                      be easily embedded into websites, content management
                      systems, and other platforms, improving workflow
                      efficiency.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore Mojeek AI
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
                    Mojeek AI offers highly efficient clustering algorithms that
                    automatically group large datasets based on semantic
                    similarity, making it easier to explore and analyze.
                  </li>
                  <li className="mb-2">
                    The platform is designed for scalability, ensuring that it
                    can handle large amounts of data without compromising
                    performance.
                  </li>
                  <li className="mb-2">
                    It provides real-time clustering and search capabilities,
                    offering immediate results and insights for users working
                    with dynamic data.
                  </li>
                  <li className="mb-2">
                    Mojeek AI supports seamless integration with various tools
                    and platforms via API, enabling users to embed its
                    functionality into their existing workflows.
                  </li>
                  <li className="mb-2">
                    The platform's user-friendly interface allows both technical
                    and non-technical users to leverage its clustering features
                    with minimal setup.
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
                    Mojeek AI may require some technical knowledge to optimize
                    clustering models for specific business or research needs.
                  </li>
                  <li className="mb-2">
                    Large-scale data processing can be resource-intensive,
                    requiring significant computing power to maintain speed and
                    performance.
                  </li>
                  <li className="mb-2">
                    The platform may need further customization for highly
                    specialized data types or certain niche areas.
                  </li>
                  <li className="mb-2">
                    While the platform is scalable, it might require additional
                    configuration for more complex use cases or integrations
                    with older systems.
                  </li>
                  <li className="mb-2">
                    For best results, users must ensure the quality and
                    diversity of their input data to achieve optimal clustering
                    and search relevance.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "alternative":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-4">Alternatives </h4>
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
              style={{ flex: 1, paddingRight: "30px" }}
              className="col-6 col-md-12 "
            >
              <p className="text-primary">
                Create stunning visuals effortlessly
              </p>
              <h1> Mojeek AI </h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>

              <p>
                Mojeek AI is an advanced, privacy-focused search engine that
                uses artificial intelligence to provide relevant search results
                while safeguarding user data. Unlike mainstream search engines,
                Mojeek AI prioritizes user privacy and offers features for
                businesses, content creators, and marketers to discover
                information efficiently. By incorporating semantic search, data
                protection, and content optimization, Mojeek AI is a powerful
                tool for SEO, content discovery, and web scraping.
              </p>

            <div className="d-flex flex-wrap gap-3 mb-4 mb-lg-0">
        <a
          href="https://www.mojeek.com/"
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
                alt="mojeek"
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
                How to Use Mojeek AI?
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
                      Open Mojeek AI Platform
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Navigate to the Mojeek AI website or launch the platform
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
        </div>
      </div>
    </>
  );
};

export default Mojeek;
