import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import growthBarAI from "../../../../public/assets/Img/Ai for SEO/6.png";
import scn9 from "../../../../public/assets/Img/AI for SEO/scan9.png";
import scn10 from "../../../../public/assets/Img/AI for SEO/scan10.png";



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
const GrowthBarAI = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                Powerful Content Optimization with GrowthBar AI
              </p>
              <h3 className="">
                Maximize SEO Performance with AI-Driven Insights
              </h3>
            </div>
            {[
              {
                icon: "🔍",
                title: "Comprehensive Keyword Suggestions",
                desc: "GrowthBar AI provides a list of high-performing related keywords to enhance content relevance and SEO impact.",
              },
              {
                icon: "📊",
                title: "AI-Powered Content Optimization",
                desc: "Optimize your content using AI-driven suggestions based on top-ranking pages to improve search engine rankings.",
              },
              {
                icon: "⚙️",
                title: "Real-Time Content Scoring",
                desc: "Get immediate feedback and a content grade to see how well your content aligns with SEO best practices.",
              },
              {
                icon: "🌎",
                title: "Global SEO Content Targeting",
                desc: "Optimize content for global audiences, with AI-driven suggestions tailored to different regions and languages.",
              },
              {
                icon: "📝",
                title: "Efficient Content Structuring",
                desc: "Organize your content effectively with guidance on keyword placement, headings, and readability for SEO optimization.",
              },
              {
                icon: "📈",
                title: "SEO Performance Insights",
                desc: "While GrowthBar AI focuses on content optimization, you can track the performance of optimized content through integrated SEO tools.",
              },
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="custom-card text-light p-4 h-100"
                  style={{ border: "1px solid #00796B" }}
                >
                  <div className="icon mb-3">{feature.icon}</div>
                  <h5 className="fw-bold">{feature.title}</h5>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case "FAQs":
        return (
          <div className="faq-section container py-4">
            <h3 className="text-center text-white mb-4 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is GrowthBar AI?",
                  a: "GrowthBar AI is an SEO content optimization platform that helps writers create high-ranking, AI-powered content using data-driven keyword and readability suggestions.",
                },
                {
                  q: "How does GrowthBar AI improve SEO?",
                  a: "It uses AI-driven insights and real-time keyword recommendations to help align your content with SEO best practices, improving visibility and search engine rankings.",
                },
                {
                  q: "Who can benefit from using GrowthBar AI?",
                  a: "Content marketers, SEO professionals, writers, agencies, and in-house marketing teams can all benefit from GrowthBar AI's powerful optimization tools.",
                },
                {
                  q: "What is a GrowthBar AI report?",
                  a: "A GrowthBar AI report analyzes a target keyword and provides AI-powered content suggestions, keyword relevance, and structure tips to guide content creation.",
                },
                {
                  q: "Can I optimize old blog posts with GrowthBar AI?",
                  a: "Yes, you can use GrowthBar AI to refresh and optimize existing content by generating new reports and applying the AI-powered suggestions.",
                },
                {
                  q: "Does GrowthBar AI provide keyword suggestions?",
                  a: "Yes, it provides relevant keyword suggestions based on search engine data, helping improve your content's SEO performance.",
                },
                {
                  q: "What is the content grade in GrowthBar AI?",
                  a: "The content grade reflects how well your content aligns with top-ranking pages, considering keyword usage, readability, and structure.",
                },
                {
                  q: "Does GrowthBar AI support Google Docs?",
                  a: "Yes, GrowthBar AI offers a seamless integration with Google Docs, enabling you to optimize your content without leaving the platform.",
                },
                {
                  q: "Can I use GrowthBar AI with WordPress?",
                  a: "Yes, GrowthBar AI integrates with WordPress, allowing you to optimize content directly within the CMS.",
                },
                {
                  q: "Is GrowthBar AI beginner-friendly?",
                  a: "Yes, GrowthBar AI is easy to use, with real-time suggestions and clear instructions that help even beginners optimize their content.",
                },
                {
                  q: "Does GrowthBar AI provide readability scores?",
                  a: "Yes, it provides readability feedback to ensure your content is optimized both for search engines and human readers.",
                },
                {
                  q: "How accurate is GrowthBar AI’s data?",
                  a: "GrowthBar AI pulls data from reliable search engine sources, ensuring that you receive actionable and up-to-date content insights.",
                },
                {
                  q: "Can multiple users collaborate on GrowthBar AI?",
                  a: "Yes, GrowthBar AI supports team collaboration with shared reports and access permissions for multiple users.",
                },
                {
                  q: "What formats does GrowthBar AI support for content input?",
                  a: "You can type directly into the editor or paste text from other sources, and it works well with Google Docs and WordPress integrations.",
                },
                {
                  q: "Does GrowthBar AI help with content outlines?",
                  a: "While it doesn't generate full outlines, its keyword and structure suggestions can help shape an optimized content layout.",
                },
                {
                  q: "Can GrowthBar AI help with international SEO?",
                  a: "GrowthBar AI primarily supports English content but can assist with international SEO strategies targeting English-speaking audiences.",
                },
                {
                  q: "Is GrowthBar AI cloud-based?",
                  a: "Yes, GrowthBar AI is a cloud-based tool accessible from any device with an internet connection.",
                },
                {
                  q: "How often can I run reports in GrowthBar AI?",
                  a: "The number of reports you can run depends on your subscription plan. Most plans offer a set number of monthly reports.",
                },
                {
                  q: "Can GrowthBar AI track keyword rankings?",
                  a: "No, GrowthBar AI focuses on content optimization, not rank tracking. For rank tracking, you can use other tools like Ahrefs or SEMrush.",
                },
                {
                  q: "Does GrowthBar AI integrate with other tools?",
                  a: "Yes, it integrates with tools like Google Docs and WordPress and supports additional workflow automation through Zapier.",
                },
                {
                  q: "Can I get analytics on how my optimized content performs?",
                  a: "GrowthBar AI doesn’t provide performance analytics, but you can use tools like Google Analytics to track the results of your optimized content.",
                },
                {
                  q: "How secure is my data on GrowthBar AI?",
                  a: "GrowthBar AI uses modern security practices to protect your content and account information.",
                },
                {
                  q: "Is there customer support available?",
                  a: "Yes, GrowthBar AI offers customer support through email, chat, and a comprehensive help center with tutorials and FAQs.",
                },
                {
                  q: "Is there a free version of GrowthBar AI?",
                  a: "GrowthBar AI doesn’t currently offer a free plan, but you can request a demo or trial through their sales team.",
                },
                {
                  q: "How do I start using GrowthBar AI?",
                  a: "Visit growthbar.io, sign up, and start by entering a keyword to generate your first optimization report.",
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

      case "Screenshots":
        return (
          <div className="row g-4">
            <div className="col-md-6">
              <img
                src={scn9}
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={scn10}
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
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
                {/* System Requirements */}
                <div className="col-md-8">
                  <div style={styles.card}>
                    <h5 className="mb-4">System Requirements</h5>
                    <div className="row">
                      <div className="col-md-6">
                        <h6>Supported Platforms</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>🪟 Windows 10/11 (Web App)</li>
                          <li>🍎 macOS 11+ (Chrome or Safari)</li>
                          <li>📱 Android & iOS (Mobile Browser)</li>
                          <li>🌐 Modern browsers (Chrome, Firefox, Edge)</li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <h6>Hardware Requirements</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>⚡ Intel i3 or equivalent (2.0 GHz+)</li>
                          <li>🧠 4 GB RAM (8 GB preferred for HD rendering)</li>
                          <li>💾 300 MB disk space for cache</li>
                          <li>📶 Stable high-speed internet (4 Mbps+)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Resources & Support */}
                <div className="col-md-4">
                  <div style={styles.card}>
                    <h5 className="mb-4">Resources</h5>
                    <ul className="list-unstyled mb-4" style={styles.smallText}>
                      <li>📄 Getting Started with Pictory</li>
                      <li>💻 API Documentation</li>
                      <li>🎥 Video Tutorials</li>
                      <li>🎓 AI Video Academy</li>
                      <li>💬 Support Community</li>
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
                      24/7 technical support for premium users
                    </small>
                  </div>
                </div>

                {/* Integrations */}
                <div className="col-12">
                  <div style={styles.card}>
                    <h5 className="mb-4">Integration Capabilities</h5>
                    <div className="row">
                      <div className="col-md-4">
                        <h6>Content Sources</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>🧰 Google Docs</li>
                          <li>🧰 Microsoft Word</li>
                          <li>🧰 Blog URLs for video summarization</li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <h6>Export Tools</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>💻 MP4 Video Export</li>
                          <li>💻 SRT/VTT Subtitles</li>
                          <li>💻 Social media formats</li>
                        </ul>
                      </div>
                      <div className="col-md-4">
                        <h6>Marketing Tools</h6>
                        <ul className="list-unstyled" style={styles.smallText}>
                          <li>📢 Hootsuite Integration</li>
                          <li>📢 HubSpot</li>
                          <li>📢 LinkedIn & Facebook Upload</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Why-We-Use":
        return (
          <div className="container">
            <div className="row g-4">
              <div className="col-12">
                <div className="custom-card text-light p-5 text-center">
                  <h3 className="fw-bold mb-4 text-start text-primary">
                    Why GrowthBar AI Is the Ideal Platform for Content
                    Optimization and SEO Success
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
                      <strong>AI-Powered Content Optimization:</strong>{" "}
                      GrowthBar AI offers real-time keyword suggestions and
                      optimization tips, helping you craft content that ranks
                      higher in search engines.
                    </li>
                    <li className="mb-3">
                      <strong>Real-Time Content Scoring:</strong> Get immediate
                      feedback on your content's SEO performance, readability,
                      and keyword usage as you write, making it easier to
                      optimize on the go.
                    </li>
                    <li className="mb-3">
                      <strong>User-Friendly for Writers:</strong> Designed with
                      simplicity in mind, GrowthBar helps writers and marketers
                      enhance their content without requiring deep SEO
                      knowledge.
                    </li>
                    <li className="mb-3">
                      <strong>Seamless Integrations:</strong> Easily integrate
                      with Google Docs and WordPress, so you can optimize your
                      content directly in the platforms you use most.
                    </li>
                    <li className="mb-3">
                      <strong>AI-Driven Content Creation:</strong> Beyond
                      optimization, GrowthBar also assists with content
                      generation, allowing you to create SEO-friendly drafts
                      with AI support.
                    </li>
                    <li className="mb-3">
                      <strong>Improves Organic Search Results:</strong> By
                      suggesting the right keywords and content structure,
                      GrowthBar increases the chances of your content performing
                      well on search engines.
                    </li>
                    <li className="mb-3">
                      <strong>Collaborative Content Workflow:</strong> GrowthBar
                      AI makes collaboration easy, enabling teams to share
                      content reports and real-time optimization results for
                      seamless teamwork.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Use GrowthBar AI to Supercharge Your Content Strategy and
                      SEO Results
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Pros & Cons":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-2">
              Why GrowthBar AI is a Leading Tool for Content Optimization
            </h4>
            <p className="text-center text-secondary mb-4">
              GrowthBar AI empowers marketers, writers, and SEO professionals
              with data-backed insights to create high-ranking content. Here are
              the primary strengths and limitations to consider.
            </p>
            <div className="row justify-content-center gap-2">
              {/* Pros Column */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #3fcf8e",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-success text-start mb-4">✅ Pros</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>AI-Powered Content Insights:</strong> GrowthBar AI
                    offers comprehensive keyword suggestions, content
                    recommendations, and SEO insights to improve content
                    ranking.
                  </li>
                  <li className="mb-2">
                    <strong>Content Score and Real-Time Analysis:</strong>{" "}
                    Similar to Clearscope, GrowthBar provides live content
                    scoring to help users optimize keyword usage, readability,
                    and SEO performance.
                  </li>
                  <li className="mb-2">
                    <strong>Intuitive Interface:</strong> GrowthBar features an
                    easy-to-use interface, making it accessible for users
                    without extensive SEO experience.
                  </li>
                  <li className="mb-2">
                    <strong>AI Writing Assistant:</strong> In addition to
                    optimization, GrowthBar offers AI-assisted content creation
                    tools to help generate copy for your projects.
                  </li>
                  <li className="mb-2">
                    <strong>Affordable for Small Teams:</strong> GrowthBar
                    offers pricing plans that are often more accessible for
                    smaller teams or freelancers compared to competitors.
                  </li>
                </ul>
              </div>

              {/* Cons Column */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #3fcf8e",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-warning text-start mb-4">⚠️ Cons</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Limited to English Content:</strong> While it excels
                    in English, GrowthBar's capabilities for non-English content
                    are still developing.
                  </li>
                  <li className="mb-2">
                    <strong>AI Content Quality Can Vary:</strong> The AI content
                    generation feature is helpful but can sometimes require
                    refinement, especially for more complex writing tasks.
                  </li>
                  <li className="mb-2">
                    <strong>Missing Some Advanced SEO Tools:</strong> GrowthBar
                    lacks certain advanced SEO audit features such as backlink
                    analysis and more extensive competitor research tools.
                  </li>
                  <li className="mb-2">
                    <strong>Occasional Technical Glitches:</strong> Some users
                    report minor bugs or technical issues, though these are
                    typically addressed with updates.
                  </li>
                  <li className="mb-2">
                    <strong>No Built-In Content Visualizer:</strong> GrowthBar
                    does not offer a live preview of how content will appear on
                    the web, unlike some competitors.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "Alternative":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-2">
              Explore Leading Alternatives for Smarter Content Optimization
            </h4>
          
            <div className="row justify-content-center gap-2">
              <div
                className="col-lg-8 col-md-8 col-sm-12"
                style={{
                  border: "1px solid #3fcf8e",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                
                  <li className="mb-2">
                    <strong>Surfer SEO</strong>: Analyze SERPs and generate
                    actionable suggestions to improve keyword usage, structure,
                    and overall SEO performance.
                  </li>
                  <li className="mb-2">
                    <strong>Frase</strong>: Create SEO-optimized content briefs
                    and generate AI-assisted drafts based on topic relevance and
                    search intent.
                  </li>
                  <li className="mb-2">
                    <strong>MarketMuse</strong>: Plan, research, and optimize
                    content with predictive scoring and topic modeling backed by
                    machine learning.
                  </li>
                  <li className="mb-2">
                    <strong>SEMrush Content Template</strong>: Get on-page SEO
                    guidance and competitive insights to craft content that
                    ranks.
                  </li>
                  <li className="mb-2">
                    <strong>Dashword</strong>: Easily build outlines, track
                    keyword coverage, and optimize articles with a minimal and
                    fast interface.
                  </li>
                  <li className="mb-2">
                    <strong>WriterZen</strong>: Streamline keyword discovery and
                    topic clustering with intuitive tools for long-form content
                    creation.
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
          className="d-inline-block text-white text-decoration-none  mt-3 ml-3 py-1 px-2 ms-5 border rounded-sm"
        >
          <i className="bi bi-arrow-left me-2"></i>Back  {" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
          <div className=" row align-items-center  mb-4">
            {/* Left side (Text Section) */}
            <div
              style={{  paddingRight: "30px" }}
              className="col-md-6 col-12 order-2 order-md-1 "
            >
              <p className="text-primary">Write better, faster</p>
              <h1>GrowthBar AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                GrowthBar AI is a powerful AI-driven SEO and content writing
                tool designed for marketers, bloggers, and agencies. It offers a
                seamless combination of SEO optimization, AI writing, and
                content strategy, making it a go-to solution for anyone looking
                to grow their online visibility with less manual work.
              </p>

              <div className="mb-3">
                <a
                  href="https://www.growthbarseo.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-2"
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
              className="col-md-6 col-12 order-md-2 order-1  text-center mb-3 mb-md-0"
            >
              <img
                src={growthBarAI}
                style={{ width:"100%", height:"auto", maxHeight:"300px", objectFit:"contain",}}
              />
            </div>
          </div>

          <section style={{ backgroundColor: "#1b1f2b", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">
                Boost Your Content Strategy with GrowthBar AI
              </p>
              <h2
                style={{
                  fontWeight: "600",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                How GrowthBar AI Supercharges Your Content Creation
              </h2>

              <div className="row g-4">
                {/* Step 1 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#2d3b62",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
            .step1 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #3fcf8e;
              opacity: 0.6;
            }
          `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Analyzes Keyword Trends
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      GrowthBar AI scans the latest search trends to provide
                      keyword insights, ensuring your content ranks higher by
                      tapping into high-demand topics.
                    </p>
                    <div className="step1">1</div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#2d3b62",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
            .step2 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #3fcf8e;
              opacity: 0.6;
            }
          `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Suggests Top Content Ideas
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      GrowthBar AI helps generate content ideas based on
                      trending topics, so you never run out of valuable and
                      engaging subjects to write about.
                    </p>
                    <div className="step2">2</div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#2d3b62",
                      borderRadius: "12px",
                      boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
                      padding: "2rem",
                      height: "100%",
                    }}
                  >
                    <style>{`
            .step3 {
              position: absolute;
              bottom: 10px;
              right: 15px;
              font-size: 4rem;
              font-weight: bold;
              color: #3fcf8e;
              opacity: 0.6;
            }
          `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Provides Real-Time SEO Recommendations
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Get live SEO suggestions, including keyword density,
                      readability, and backlink strategies to ensure your
                      content ranks effectively.
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
              "Features",
              "Screenshots",
              "Reviews",
              "FAQs",
              "Technical",
              "Why-We-Use",
              "Pros & Cons",
              "Alternative",
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

export default GrowthBarAI;
