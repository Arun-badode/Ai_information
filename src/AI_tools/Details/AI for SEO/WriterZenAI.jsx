import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import writerZenAI from "../../../../public/assets/Img/Ai for SEO/12.png";
import scan1 from "../../../../public/assets/Img/AI for SEO/scan23.png";
import scan2 from "../../../../public/assets/Img/AI for SEO/scan24.png";
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
const WriterZenAI = () => {
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
                Create Studio-Quality Videos with AI
              </p>
              <h3 className="">Features of WriterZen AI</h3>
            </div>
            {[
              {
                icon: "🔑",
                title: "Keyword Explorer",
                desc: "WriterZen helps you discover high-performing keywords using real-time Google keyword data, making it easy to find profitable and relevant content opportunities.",
              },
              {
                icon: "🧩",
                title: "Topic Discovery & Clustering",
                desc: "It groups keywords into topical clusters based on intent and relevance, allowing you to plan content in silos and improve topical authority.",
              },
              {
                icon: "📝",
                title: "Content Creator",
                desc: "WriterZen’s content editor provides AI-generated outlines, keyword suggestions, and SEO guidelines to streamline your writing and ensure optimized content.",
              },
              {
                icon: "📚",
                title: "Plagiarism Checker",
                desc: "Built-in plagiarism detection helps ensure originality by checking your content against a vast database to prevent duplication issues.",
              },
              {
                icon: "🎯",
                title: "SERP Analysis",
                desc: "WriterZen analyzes top search results to help you understand competitor strategies and align your content with what Google prioritizes.",
              },
              {
                icon: "📈",
                title: "Content Scoring & Optimization",
                desc: "The platform scores your content based on keyword usage, SEO structure, and relevance, offering optimization tips for better ranking potential.",
              },
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="custom-card text-light p-4 h-100  "
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
      case "FAQs":
        return (
          <div className="faq-section container py-4">
            <h3 className="text-center text-white mb-4 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is MarketMuse?",
                  a: "A content intelligence and SEO platform that helps with content research, optimization, planning, and competitive analysis.",
                },
                {
                  q: "Who should use MarketMuse?",
                  a: "Content marketers, SEO professionals, bloggers, freelancers, and agencies.",
                },
                {
                  q: "Is MarketMuse beginner-friendly?",
                  a: "It has a learning curve but provides tutorials and a user-friendly interface for all skill levels.",
                },
                {
                  q: "Does MarketMuse work for niche blogs?",
                  a: "Yes, it’s highly effective for niche and authority-building content strategies.",
                },
                {
                  q: "How accurate is MarketMuse’s AI content brief?",
                  a: "It generates topically rich, search-focused outlines based on competitive SERP data.",
                },
                {
                  q: "Is MarketMuse cloud-based?",
                  a: "Yes, it runs entirely in the browser with no installation required.",
                },
                {
                  q: "Can MarketMuse generate content?",
                  a: "No, it guides and scores content but does not write full articles like Jasper.",
                },
                {
                  q: "Is there a free version of MarketMuse?",
                  a: "Yes, a free plan is available with limited queries and features.",
                },
                {
                  q: "Can I get a MarketMuse lifetime deal?",
                  a: "Occasionally available through platforms like AppSumo.",
                },
                {
                  q: "What industries benefit most from MarketMuse?",
                  a: "SaaS, healthcare, ecommerce, B2B, and online publishers.",
                },
                {
                  q: "What is a MarketMuse content score?",
                  a: "It measures how thoroughly your content covers a topic compared to competitors.",
                },
                {
                  q: "What is the Optimize app in MarketMuse?",
                  a: "A tool that provides real-time suggestions to improve your written content.",
                },
                {
                  q: "How does the content brief generator work?",
                  a: "It uses NLP and SERP analysis to generate outlines with suggested headings, keywords, and questions.",
                },
                {
                  q: "What is the MarketMuse Connect tool?",
                  a: "A feature that identifies internal linking opportunities within your website content.",
                },
                {
                  q: "Can I export briefs from MarketMuse?",
                  a: "Yes, content briefs can be exported as PDFs or Word documents.",
                },
                {
                  q: "Does MarketMuse support multiple languages?",
                  a: "It primarily focuses on English, but can analyze content in other languages to some extent.",
                },
                {
                  q: "Can I analyze competitor content with MarketMuse?",
                  a: "Yes, it benchmarks your content against top-ranking competitors in the SERP.",
                },
                {
                  q: "What is a content inventory in MarketMuse?",
                  a: "A comprehensive audit of your published content to evaluate performance, gaps, and optimization potential.",
                },
                {
                  q: "Can I build content clusters with MarketMuse?",
                  a: "Yes, it enables topic modeling and strategic content clustering for SEO.",
                },
                {
                  q: "What is the Knowledge Graph?",
                  a: "A visualization of your topical authority and content relationships within your site.",
                },
                {
                  q: "Can I use MarketMuse for ecommerce SEO?",
                  a: "Yes, it helps optimize product and category pages for better rankings.",
                },
                {
                  q: "Is MarketMuse good for B2B content?",
                  a: "Absolutely, it’s well-suited for developing comprehensive, topic-driven B2B strategies.",
                },
                {
                  q: "Can freelancers use MarketMuse?",
                  a: "Yes, it helps freelancers create well-researched, optimized briefs and audits for clients.",
                },
                {
                  q: "Does MarketMuse help with pillar page creation?",
                  a: "Yes, it supports structuring pillar pages and related cluster content for SEO.",
                },
                {
                  q: "How is MarketMuse used in agencies?",
                  a: "Agencies use it to scale SEO briefs, audits, and strategy development across multiple clients.",
                },
                {
                  q: "What is WriterZen AI used for?",
                  a: "WriterZen AI is used for content creation, SEO optimization, keyword research, and content strategy planning.",
                },
                {
                  q: "Is there a free trial for WriterZen?",
                  a: "Yes, WriterZen offers a free trial to let you test its features before subscribing.",
                },
                {
                  q: "How does WriterZen help with SEO?",
                  a: "WriterZen offers keyword research, on-page SEO optimization, and content scoring to help improve your content's SEO performance.",
                },
                {
                  q: "Can WriterZen generate content?",
                  a: "Yes, WriterZen can generate SEO-optimized articles, blog posts, and content briefs based on your target keywords.",
                },
                {
                  q: "What are the pricing plans for WriterZen?",
                  a: "WriterZen offers several pricing plans based on the number of users and features required, including a free trial and discounted lifetime deals.",
                },
                {
                  q: "How accurate is WriterZen’s keyword research?",
                  a: "WriterZen’s keyword research tools are accurate and provide valuable insights to help optimize your content for high-ranking keywords.",
                },
                {
                  q: "Does WriterZen support long-form content creation?",
                  a: "Yes, WriterZen can generate long-form content optimized for SEO, making it ideal for blogs, articles, and other extensive writing tasks.",
                },
                {
                  q: "Can WriterZen help with competitive analysis?",
                  a: "Yes, WriterZen analyzes competitor content and offers insights to help you create better-performing content.",
                },
                {
                  q: "Is WriterZen suitable for agencies?",
                  a: "Yes, WriterZen is highly suitable for agencies due to its content collaboration features and scalability.",
                },
                {
                  q: "Can I use WriterZen for keyword optimization?",
                  a: "Yes, WriterZen provides real-time keyword optimization suggestions to improve your content’s search engine visibility.",
                },
                {
                  q: "Can WriterZen generate content for blogs?",
                  a: "Yes, WriterZen can generate high-quality, SEO-optimized blog posts based on your target keywords and topics.",
                },
                {
                  q: "How does WriterZen help with content planning?",
                  a: "WriterZen helps with content planning by generating content briefs, outlining key topics, and suggesting relevant keywords to target.",
                },
                {
                  q: "Does WriterZen offer keyword tracking?",
                  a: "No, WriterZen focuses on keyword research and optimization, but does not provide real-time keyword tracking. However, it integrates with tools like Google Search Console for performance insights.",
                },
                {
                  q: "Can I use WriterZen for social media content?",
                  a: "Yes, WriterZen can generate SEO-optimized social media content, including posts, captions, and hashtags.",
                },
                {
                  q: "How does WriterZen compare to SurferSEO?",
                  a: "WriterZen is focused on content creation and strategy, while SurferSEO specializes in on-page SEO optimization and analysis of SERP data.",
                },
                {
                  q: "Can WriterZen help with content for eCommerce websites?",
                  a: "Yes, WriterZen is ideal for creating product descriptions, category pages, and SEO-optimized content for eCommerce websites.",
                },
                {
                  q: "Can WriterZen help with article summaries?",
                  a: "Yes, WriterZen offers summary generation features to help you condense long-form articles into shorter, SEO-friendly summaries.",
                },
                {
                  q: "Does WriterZen help with blog post SEO?",
                  a: "Yes, WriterZen provides SEO suggestions for blog posts, including keyword density, header tags, and readability improvements.",
                },
                {
                  q: "Is WriterZen suitable for beginners?",
                  a: "Yes, WriterZen is user-friendly and suitable for both beginners and advanced content creators.",
                },
                {
                  q: "How does WriterZen improve content quality?",
                  a: "WriterZen improves content quality by offering AI-driven suggestions for keyword integration, readability, and SEO optimization.",
                },
                {
                  q: "Can I collaborate with my team in WriterZen?",
                  a: "Yes, WriterZen supports collaboration, allowing teams to work together on creating, editing, and optimizing content.",
                },
                {
                  q: "Does WriterZen integrate with WordPress?",
                  a: "Yes, WriterZen integrates with WordPress, enabling you to create and optimize content directly within the platform.",
                },
                {
                  q: "Can I use WriterZen for SEO audits?",
                  a: "While WriterZen doesn't provide a full SEO audit, it helps optimize individual content pieces for SEO by providing keyword suggestions and performance insights.",
                },
                {
                  q: "How does WriterZen help with content structuring?",
                  a: "WriterZen offers content outlines and suggests the best structure for your content, including headers, subheaders, and paragraph organization for better readability and SEO.",
                },
                {
                  q: "Does WriterZen offer content templates?",
                  a: "Yes, WriterZen provides customizable content templates to help you create SEO-optimized articles, blog posts, and product descriptions quickly.",
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
                src={scan1}
                alt="WriteZen"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={scan2}
                alt="WriteZen"
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
                    Why Use WriterZen AI?
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
                      <strong>Keyword Research:</strong> Discover
                      high-performing, low-competition keywords to improve your
                      content’s SEO visibility.
                    </li>
                    <li className="mb-3">
                      <strong>Content Brief Generation:</strong> Automatically
                      create SEO-focused content briefs with structured
                      outlines, keyword suggestions, and topic relevance.
                    </li>
                    <li className="mb-3">
                      <strong>AI Content Creation:</strong> Generate long-form,
                      SEO-optimized content for blogs, product pages, and more
                      using AI-driven tools.
                    </li>
                    <li className="mb-3">
                      <strong>Content Optimization:</strong> Get real-time
                      feedback on keyword usage, readability, and SEO best
                      practices as you write.
                    </li>
                    <li className="mb-3">
                      <strong>Competitor Analysis:</strong> Analyze competing
                      content to identify gaps, strengths, and strategic
                      opportunities for outperforming them.
                    </li>
                    <li className="mb-3">
                      <strong>Content Planning:</strong> Organize a complete
                      content strategy with topic clustering and roadmap
                      generation.
                    </li>
                    <li className="mb-3">
                      <strong>Collaboration Tools:</strong> Collaborate with
                      team members efficiently on content creation, editing, and
                      workflow management.
                    </li>
                    <li className="mb-3">
                      <strong>Content Templates:</strong> Use pre-built or
                      custom templates to speed up the content creation process
                      for various formats.
                    </li>
                    <li className="mb-3">
                      <strong>Summarization and Repurposing:</strong> Summarize
                      long articles or repurpose content into new formats for
                      different platforms like social media or email.
                    </li>
                    <li className="mb-3">
                      <strong>
                        Ideal for Bloggers, Agencies, and Ecommerce:
                      </strong>{" "}
                      Perfect for scalable content creation across personal
                      blogs, agency portfolios, and ecommerce platforms.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <Button variant="primary" size="sm">
                      Start Creating Now
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Pros & Cons":
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
                    <strong>All-in-One SEO Toolkit:</strong> Combines keyword
                    research, content creation, and optimization in a single
                    platform.
                  </li>
                  <li className="mb-2">
                    <strong>AI-Powered Content Generation:</strong> Quickly
                    create long-form, SEO-optimized content tailored to your
                    target keywords and topics.
                  </li>
                  <li className="mb-2">
                    <strong>Effective Keyword Discovery:</strong> Helps uncover
                    untapped keyword opportunities with accurate search volume
                    and competition data.
                  </li>
                  <li className="mb-2">
                    <strong>Beginner-Friendly Interface:</strong> Intuitive
                    design with helpful tutorials makes it easy for new users to
                    get started.
                  </li>
                  <li className="mb-2">
                    <strong>Content Briefs and Structuring:</strong> Generates
                    clear, actionable content outlines with headings, keyword
                    guidance, and subtopic suggestions.
                  </li>
                  <li className="mb-2">
                    <strong>Competitor Content Analysis:</strong> Compares your
                    content against competitors to identify improvement
                    opportunities.
                  </li>
                  <li className="mb-2">
                    <strong>Team Collaboration:</strong> Built-in tools for team
                    sharing and workflow management make it ideal for agencies
                    and content teams.
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
                <h5 className="text-warning text-start mb-4">⚠️ Cons</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Limited Keyword Tracking:</strong> While it offers
                    keyword research and optimization, WriterZen does not
                    provide real-time keyword tracking or performance metrics.
                  </li>
                  <li className="mb-2">
                    <strong>Content Generation Limitations:</strong> While it
                    excels at generating SEO-optimized content, it may not
                    always produce content that matches the nuanced tone or
                    style of human writers.
                  </li>
                  <li className="mb-2">
                    <strong>
                      Focus on Content Strategy Over Deep SEO Audits:
                    </strong>{" "}
                    WriterZen lacks full SEO audit capabilities, which may be a
                    drawback for users seeking comprehensive site-wide
                    optimization.
                  </li>
                  <li className="mb-2">
                    <strong>
                      Requires Subscription for Advanced Features:
                    </strong>{" "}
                    Some of the more powerful features, such as long-form
                    content generation, are only available in the premium plans.
                  </li>
                  <li className="mb-2">
                    <strong>Occasional Data Inaccuracy:</strong> Users have
                    reported minor inaccuracies in keyword research and content
                    recommendations, especially for highly competitive niches.
                  </li>
                  <li className="mb-2">
                    <strong>Learning Curve for New Users:</strong> While it is
                    beginner-friendly, getting the most out of the platform can
                    take time, particularly for users unfamiliar with SEO and
                    content strategy.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "Alternative":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-4">Alternatives</h4>
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
                    Best for avatar-based explainer and corporate videos.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Emerging competition with realistic scene generation but
                    still in closed beta.
                  </li>
                  <li className="mb-2">
                    Great for musicians and creators wanting visual storytelling
                    synced with audio.
                  </li>
                  <li className="mb-2">
                    {" "}
                    Known for creative animated video styles and short-form
                    content.
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
          <i className="bi bi-arrow-left me-2"></i>Back{" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-between mb-1 flex-md-row flex-column-reverse">
            {/* Left side (Text Section) */}
            <div className="col-md-6 col-12 mt-4 mt-md-0 pe-md-4">
              <p className="text-primary">Write better, faster</p>
              <h1>WriterZen AI</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                WriterZen AI is an innovative AI-powered content creation and
                SEO optimization tool designed to help content creators, SEO
                professionals, and digital marketers streamline their content
                strategies. This tool combines AI writing, keyword research,
                content optimization, and planning to enhance the overall
                content production process. Whether you're a blogger, agency, or
                eCommerce business, WriterZen helps you generate high-quality,
                SEO-optimized content faster and more efficiently.
              </p>
              <div className="mb-3">
                <a
                  href="https://writerzen.net/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-2"
                >
                  Explore more
                </a>
              </div>
            </div>

            {/* Right side (Image Section) */}
            <div className="col-md-6 col-12 text-center">
              <img
                src={writerZenAI}
                alt="WriterZen AI"
                style={{
                  maxWidth: "100%",
                  height: "300px",
                  objectFit: "contain",
                }}
              />
            </div>
          </div>

          <section style={{ backgroundColor: "", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">Create Videos in 3 Simple Steps</p>
              <h2
                style={{
                  fontWeight: "semibold",
                  color: "#fff",
                  marginBottom: "1rem",
                }}
              >
                How WriterZen AI Works?
              </h2>
              <div className="row g-4">
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
                      Keyword Discovery & Topic Research
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      WriterZen starts with identifying golden keywords using
                      its Keyword Explorer. It evaluates search volume, trends,
                      and competition while clustering related keywords to form
                      solid topic foundations.
                    </p>
                    <div className="step1">1</div>
                  </div>
                </div>

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
                      Content Brief & Outline Creation
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      After selecting keywords, WriterZen builds a content brief
                      with headings, related questions, and key phrases. This
                      guides writers in creating structured,
                      search-intent-aligned content.
                    </p>
                    <div className="step2">2</div>
                  </div>
                </div>

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
                      Content Writing & Optimization
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Writers use the built-in editor with real-time SEO
                      suggestions, competitor comparisons, and a content score
                      to refine their drafts for better SERP performance.
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

export default WriterZenAI;
