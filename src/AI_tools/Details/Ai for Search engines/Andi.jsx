import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import magisto from "../../../Images/MagistoAI.png";
import andi1 from "../../../../public/assets/Img/Ai for Search engines/Andi1.png";
import andi2 from "../../../../public/assets/Img/Ai for Search engines/Andi2.png";

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
const Andi = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                Revolutionize Search with Andi Search AI
              </p>
              <h3 className="">AI-Powered Search Engine for Smarter Results</h3>
            </div>
            {[
              {
                icon: "🔍",
                title: "AI-Enhanced Search Results:",
                desc: "Andi Search AI uses advanced machine learning to refine and personalize search results, delivering more relevant and accurate answers based on context and intent.",
              },
              {
                icon: "💬",
                title: "Natural Language Understanding:",
                desc: "Leverage AI's ability to understand natural language queries, enabling users to search with conversational terms and get precise, context-driven responses.",
              },
              {
                icon: "🌐",
                title: "Cross-Platform Search Integration:",
                desc: "Andi Search AI integrates seamlessly across different platforms, providing users with a consistent and efficient search experience across devices and websites.",
              },
              {
                icon: "⚡",
                title: "Instant Search Suggestions:",
                desc: "Get real-time, AI-powered suggestions as you type, allowing for quicker search results and helping users refine queries based on their preferences.",
              },
              {
                icon: "🧠",
                title: "Contextual Search Algorithms:",
                desc: "Andi Search AI uses powerful contextual algorithms to better understand the user's search intent and provide smarter search results that adapt to individual needs.",
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
                src={andi1}
                alt="andi"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={andi2}
                alt="andi"
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
                  q: "What is Andi Search AI?",
                  a: "Andi Search AI is an AI-powered search engine that leverages natural language processing and machine learning to deliver more relevant and accurate search results based on context and intent.",
                },
                {
                  q: "How does Andi Search AI work?",
                  a: "Andi Search AI uses advanced algorithms to understand the user's natural language query, process it, and return relevant results by analyzing context, intent, and user preferences.",
                },
                {
                  q: "Can Andi Search AI handle complex queries?",
                  a: "Yes, Andi Search AI is designed to process complex queries, including conversational and context-driven searches, providing more accurate and relevant results.",
                },
                {
                  q: "Is Andi Search AI beginner-friendly?",
                  a: "Yes, Andi Search AI is built to be user-friendly and intuitive, allowing users to ask questions naturally without needing advanced search skills or syntax.",
                },
                {
                  q: "What platforms support Andi Search AI?",
                  a: "Andi Search AI is available on all major web browsers and is optimized for use on desktop and mobile platforms.",
                },
                {
                  q: "Can I customize my search results in Andi Search AI?",
                  a: "Yes, Andi Search AI allows users to customize search results based on their preferences, providing a personalized search experience.",
                },
                {
                  q: "Does Andi Search AI support voice search?",
                  a: "Yes, Andi Search AI integrates with voice assistants, enabling users to perform searches using voice commands for hands-free browsing.",
                },
                {
                  q: "Can Andi Search AI be used as a Chrome extension?",
                  a: "Yes, Andi Search AI offers a browser extension for Chrome, providing seamless integration and enhancing your search experience directly from the browser.",
                },
                {
                  q: "Is Andi Search AI cloud-based?",
                  a: "Yes, Andi Search AI is a cloud-native solution that leverages the cloud for scalability, ensuring quick and efficient search responses regardless of the user's location.",
                },
                {
                  q: "Does Andi Search AI support integration with third-party tools?",
                  a: "Yes, Andi Search AI offers APIs and integration capabilities with various third-party tools and platforms, enabling businesses to integrate AI-powered search into their applications.",
                },
                {
                  q: "Can Andi Search AI be customized for different industries?",
                  a: "Yes, Andi Search AI can be tailored to suit the needs of different industries, offering industry-specific search capabilities to improve relevance and accuracy.",
                },
                {
                  q: "How fast is Andi Search AI?",
                  a: "Andi Search AI provides fast and efficient search results, offering near-instantaneous responses powered by its AI algorithms.",
                },
                {
                  q: "Does Andi Search AI offer a mobile app?",
                  a: "Yes, Andi Search AI has a mobile app that allows users to search on the go and access personalized results from their mobile devices.",
                },
                {
                  q: "Can Andi Search AI detect and filter spam or irrelevant results?",
                  a: "Yes, Andi Search AI uses machine learning to filter out irrelevant and spammy results, ensuring users get high-quality, accurate search results.",
                },
                {
                  q: "What kind of data does Andi Search AI collect?",
                  a: "Andi Search AI collects minimal data to improve search relevance and user experience. All data is anonymized and stored securely.",
                },
                {
                  q: "Is Andi Search AI secure?",
                  a: "Yes, Andi Search AI follows industry-standard security protocols to ensure that user data is protected and privacy is maintained.",
                },
                {
                  q: "How is Andi Search AI different from traditional search engines?",
                  a: "Andi Search AI offers more contextual and personalized results by understanding user intent and natural language, while traditional search engines rely more on keywords and ranking algorithms.",
                },
                {
                  q: "Can Andi Search AI be used for business purposes?",
                  a: "Yes, Andi Search AI can be utilized by businesses to enhance customer search experiences on their websites or applications, providing AI-powered search capabilities.",
                },
                {
                  q: "Does Andi Search AI offer real-time updates?",
                  a: "Yes, Andi Search AI continuously updates its algorithms and search results in real time to provide users with the most accurate and relevant information.",
                },
                {
                  q: "Can Andi Search AI be integrated into existing systems?",
                  a: "Yes, Andi Search AI offers APIs and integration options, allowing businesses to integrate it into their existing systems for enhanced search capabilities.",
                },
                {
                  q: "How is Andi Search AI licensed?",
                  a: "Andi Search AI is licensed based on usage and scale, with flexible pricing options available for both individual and business users.",
                },
                {
                  q: "What support does Andi Search AI offer?",
                  a: "Andi Search AI provides customer support through email, a knowledge base, and a community forum to help users get the most out of the platform.",
                },
                {
                  q: "Is Andi Search AI free?",
                  a: "Andi Search AI offers a free version with limited features, and paid versions with advanced features are available for users who need enhanced functionality.",
                },
                {
                  q: "Does Andi Search AI support advanced search filters?",
                  a: "Yes, Andi Search AI supports advanced search filters, allowing users to refine search results based on specific parameters or preferences.",
                },
                {
                  q: "Can Andi Search AI be used for academic research?",
                  a: "Yes, Andi Search AI can be used by researchers to find relevant academic papers, articles, and other scholarly resources based on specific topics.",
                },
                {
                  q: "How can I contact Andi Search AI support?",
                  a: "You can contact Andi Search AI support through their website's contact form, or by engaging with their support team via email or live chat.",
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
                    Why Use Andi Search AI?
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
                      Andi Search AI uses advanced machine learning and natural
                      language processing to deliver more relevant and
                      personalized search results.
                    </li>
                    <li className="mb-3">
                      The AI understands the user's intent and context, ensuring
                      that search queries yield more precise and accurate
                      answers.
                    </li>
                    <li className="mb-3">
                      Andi Search AI adapts over time, learning from user
                      queries to improve results and tailor the experience for
                      individual preferences.
                    </li>
                    <li className="mb-3">
                      Seamlessly integrates with various platforms and
                      applications, offering smarter search functionality across
                      websites and mobile apps.
                    </li>
                    <li className="mb-3">
                      Designed for both casual users and businesses, Andi Search
                      AI provides an intuitive and fast search experience with
                      advanced filtering options.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Explore Andi Search AI
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
              Pros & Cons of Andi Search AI
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
                    AI-powered search engine that delivers more relevant and
                    personalized results based on user intent and context.
                  </li>
                  <li className="mb-2">
                    Natural language processing (NLP) allows users to search
                    with conversational queries, improving the accuracy of
                    results.
                  </li>
                  <li className="mb-2">
                    Seamless integration with various platforms, providing
                    smarter search functionality across different devices and
                    applications.
                  </li>
                  <li className="mb-2">
                    Real-time results and faster search suggestions that make
                    searching more efficient and intuitive.
                  </li>
                  <li className="mb-2">
                    Continuously adapts to user behavior, learning over time to
                    offer more accurate and context-aware search results.
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
                    May not be as effective with niche or highly specific search
                    queries compared to traditional search engines.
                  </li>
                  <li className="mb-2">
                    Dependent on cloud connectivity, which can affect
                    performance in areas with unstable internet access.
                  </li>
                  <li className="mb-2">
                    Limited customization for specific search result formatting
                    compared to some specialized search platforms.
                  </li>
                  <li className="mb-2">
                    It requires consistent learning from user interactions,
                    which could take time to perfect results for new users.
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
              Alternatives to Andi Search AI
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
                    Google Search – The most popular search engine powered by
                    AI, delivering fast and accurate results with powerful
                    algorithms.
                  </li>
                  <li className="mb-2">
                    Bing Search – A Microsoft-powered search engine that uses AI
                    to deliver personalized results and visual search features.
                  </li>
                  <li className="mb-2">
                    DuckDuckGo – A privacy-focused search engine that doesn't
                    track users, providing AI-driven results without
                    compromising user data.
                  </li>
                  <li className="mb-2">
                    Ecosia – An environmentally friendly search engine that uses
                    AI for results and plants trees with revenue generated from
                    search ads.
                  </li>
                  <li className="mb-2">
                    Yahoo Search – A search engine powered by AI that integrates
                    various services like news, finance, and email alongside
                    search results.
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
              <h1>Andi Search</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>

              <p>
                Andi Search AI is an advanced AI-powered search engine designed
                to provide users with more relevant, context-driven search
                results. It leverages artificial intelligence and natural
                language processing to understand user intent and deliver
                accurate search answers across websites and platforms.
                <br />
                <br />
                With features like personalized search, real-time suggestions,
                and contextual query understanding, Andi Search AI empowers
                users to get smarter, more relevant search results. Whether
                you’re looking for detailed answers, performing research, or
                just browsing, Andi Search AI offers an intuitive, fast, and
                effective way to search the web and find exactly what you need,
                with minimal effort.
              </p>

            <div className="d-flex flex-wrap gap-3 mb-4 mb-lg-0">
        <a
          href="https://andisearch.com/"
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
                How to Use Andi Search AI?
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
                      Open Andi Search AI and start by typing your search query
                      naturally, just like you're asking a question.
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
                      Refine Search Results
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Andi Search AI will analyze your query and present the
                      most relevant and personalized search results based on
                      context and intent.
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
                      Explore Results and Take Action
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Review your search results, select the most relevant ones,
                      and use filters or suggestions for further refinement.
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

export default Andi;
