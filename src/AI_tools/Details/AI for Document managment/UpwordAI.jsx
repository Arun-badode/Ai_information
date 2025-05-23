import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import upwordSS1 from '../../../../public/assets/Img/AI for Document/upwordSS1.png';
import upwordSS2 from '../../../../public/assets/Img/AI for Document/upwordSS2.png';


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
const UpwordAI = () => {
  const [activeTab, setActiveTab] = useState("Features"); // Set the default
  //  active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <section aria-label="Ecrett Music AI Features">
            <div className="row g-4">
              <div className="text-center mb-4">
                <p className="text-primary">
                  Revolutionize Your Music Creation with Ecrett Music AI
                </p>
                <h3>
                  Personalized, License-Free Music Crafted for Your Projects
                </h3>
              </div>
              {[
                {
                  icon: "🎶",
                  title: "Instant Track Generation",
                  desc: "With Ecrett Music AI, you can quickly generate one-of-a-kind, royalty-free music tracks. Select from a wide range of genres, moods, and instruments to ensure that your track is perfectly aligned with your creative needs.",
                },
                {
                  icon: "🔄",
                  title: "Complete Customization",
                  desc: "Tailor every aspect of your music with Ecrett Music AI. Adjust the tempo, instruments, and arrangement to bring your ideal sound to life, making it a perfect fit for any project.",
                },
                {
                  icon: "🎚️",
                  title: "Effortless Integration",
                  desc: "Ecrett Music AI enables you to easily integrate your tracks into your videos, games, podcasts, and more. With our royalty-free music, there’s no need to worry about licensing complications.",
                },
                {
                  icon: "🌍",
                  title: "A World of Musical Diversity",
                  desc: "Create music that reflects diverse global genres and styles. Whether it's Western pop, Latin rhythms, or Asian fusion, Ecrett Music AI offers the tools to match your project’s cultural atmosphere.",
                },
                {
                  icon: "📊",
                  title: "AI-Driven Insights",
                  desc: "Leverage the power of AI to receive real-time suggestions and improvements. Ecrett Music AI helps you refine your track until it perfectly matches your project’s vision.",
                },
                {
                  icon: "🤝",
                  title: "Collaborative Music Creation",
                  desc: "Ecrett Music AI makes it easy for multiple users to work together on music projects, enabling smooth collaboration and real-time adjustments to your tracks.",
                },
              ].map((feature, index) => (
                <div className="col-md-4" key={index}>
                  <div className="custom-card text-light p-4 h-100 border border-primary rounded">
                    <div
                      className="icon mb-3 fs-3"
                      role="img"
                      aria-label="Feature Icon"
                    >
                      {feature.icon}
                    </div>
                    <h5 className="fw-bold">{feature.title}</h5>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
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
                  q: "What is Upword AI?",
                  a: "Upword AI is an advanced AI-powered platform designed to help users create high-quality, customized written content for various projects. Whether you’re writing articles, blogs, product descriptions, or social media posts, Upword AI provides you with the tools to generate unique, copyright-free text.",
                },
                {
                  q: "How does Upword AI work?",
                  a: "Upword AI uses sophisticated machine learning algorithms to generate content based on your inputs. Users can specify topics, tone, style, and word count, allowing the AI to create a piece of writing that fits their needs.",
                },
                {
                  q: "Can Upword AI create content for different types of projects?",
                  a: "Absolutely! Upword AI can generate content for blogs, websites, email campaigns, product descriptions, social media posts, and more, offering flexibility for any writing project.",
                },
                {
                  q: "Is Upword AI free to use?",
                  a: "Upword AI offers a free plan with basic features. To unlock premium tools and advanced customization options, users can opt for a paid subscription.",
                },
                {
                  q: "Can I use content created by Upword AI commercially?",
                  a: "Yes, all content created with Upword AI is royalty-free, making it ideal for commercial use in projects like blogs, advertising, websites, and more, as long as you follow the platform's terms of service.",
                },
                {
                  q: "How does Upword AI handle copyright issues?",
                  a: "Upword AI ensures that the content it generates is unique and free from copyright concerns, providing you with original, plagiarism-free writing that can be used for both personal and commercial projects.",
                },
                {
                  q: "Can I modify the content created by Upword AI?",
                  a: "Yes! Upword AI allows you to customize various aspects of the content, including the tone, style, and structure. After generating the text, you can further edit it to meet your specific needs.",
                },
                {
                  q: "What customization options are available in Upword AI?",
                  a: "Upword AI offers extensive customization options, such as tone selection (e.g., formal, casual, professional), writing style, word count, and more, allowing you to create content that suits your specific requirements.",
                },
                {
                  q: "Does Upword AI support multi-language content?",
                  a: "Yes, Upword AI supports multiple languages, enabling users to generate content in various languages to cater to diverse audiences.",
                },
                {
                  q: "Can I export content from Upword AI?",
                  a: "Yes, you can export your generated content from Upword AI in formats such as TXT, DOCX, and PDF, making it easy to use in your projects.",
                },
                {
                  q: "Does Upword AI have a mobile app?",
                  a: "Currently, Upword AI is a web-based platform. While there isn't a dedicated mobile app, you can access it through your mobile browser for on-the-go content creation.",
                },
                {
                  q: "How accurate is Upword AI’s content generation?",
                  a: "Upword AI uses advanced algorithms that ensure the generated content is of high quality and relevant to your input. The accuracy largely depends on the details you provide, such as the topic, tone, and style.",
                },
                {
                  q: "Can multiple users collaborate on a project in Upword AI?",
                  a: "Currently, Upword AI does not support real-time collaboration. However, you can share the generated content with others for review and collaboration via external platforms.",
                },
                {
                  q: "What is the Upword AI workflow?",
                  a: "The Upword AI workflow is simple: select your preferred topic, tone, and style, let the AI generate the content, and then download or export the text to use in your project.",
                },
                {
                  q: "What makes Upword AI different from other content creation tools?",
                  a: "Upword AI sets itself apart with its highly customizable AI-driven content creation process. It generates unique, plagiarism-free content quickly, making it an excellent choice for both beginners and professionals.",
                },
                {
                  q: "How do I start using Upword AI?",
                  a: "To get started with Upword AI, visit the website, sign up for an account, and select a plan. Once registered, you can start generating content by specifying your desired settings.",
                },
                {
                  q: "Does Upword AI offer a free trial?",
                  a: "Yes, Upword AI offers a free plan with basic features. To unlock more customization and premium features, you can upgrade to a paid plan.",
                },
                {
                  q: "Can I use Upword AI for personal projects?",
                  a: "Yes, Upword AI is perfect for personal projects, such as creating custom articles, blogs, and other written content for personal use or smaller-scale projects.",
                },
                {
                  q: "Is Upword AI suitable for professional use?",
                  a: "Definitely! Upword AI is widely used by professionals in various industries, including content marketing, blogging, and copywriting, to generate high-quality, customizable content quickly.",
                },
                {
                  q: "Can I adjust the length of the content generated in Upword AI?",
                  a: "Yes, you can specify the desired word count for your content, and Upword AI will adjust the length accordingly. If you need further edits, you can adjust the content manually after generation.",
                },
                {
                  q: "How does Upword AI handle content creation and structuring?",
                  a: "Upword AI generates content based on the parameters you set, including topic, tone, and style. You can further structure and edit the text as needed to fit your project’s requirements.",
                },
                {
                  q: "Can Upword AI create unique content every time?",
                  a: "Yes, Upword AI ensures that each piece of content is unique by using AI algorithms that generate text based on your specific inputs, so no two pieces of content are alike.",
                },
                {
                  q: "Can I create content with no prior writing knowledge on Upword AI?",
                  a: "Yes, Upword AI is designed to be user-friendly, allowing anyone to generate high-quality content without prior writing or technical knowledge. The AI takes care of the complex aspects of content creation.",
                },
                {
                  q: "What file formats can I export content to from Upword AI?",
                  a: "Upword AI allows you to export content in various formats, including TXT, DOCX, and PDF, making it compatible with most text editing and publishing tools.",
                },
                {
                  q: "What types of projects can benefit from Upword AI?",
                  a: "Upword AI is ideal for a wide range of projects, including content marketing, blogging, website copywriting, social media campaigns, and more, where high-quality, customized written content is needed.",
                },
                {
                  q: "Does Upword AI have customer support?",
                  a: "Yes, Upword AI offers customer support via email and an extensive help center to assist with any issues or queries you may have while using the platform.",
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
                src={upwordSS1}
                alt="upword"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={upwordSS2}
                alt="upword"
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
                    <small className="text-muted d- text-center">
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
                    Why <strong>Upword AI</strong> is the Ultimate Tool for
                    Effortless, Personalized Content Creation
                  </h3>

                  <p className="text-start text-white mb-3">
                    <strong>Upword AI</strong> empowers writers, marketers, and
                    content creators with a powerful platform to generate
                    unique, high-quality written content. Whether you're writing
                    articles, blogs, product descriptions, or social media
                    posts, here’s why Upword AI is the best choice for your
                    content creation needs:
                  </p>

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
                      <strong>AI-Enhanced Content Creation:</strong>{" "}
                      <strong>Upword AI</strong> leverages advanced AI
                      technology to generate written content tailored to your
                      specific needs, ensuring high-quality, plagiarism-free
                      text every time.
                    </li>
                    <li className="mb-3">
                      <strong>Quick and Easy to Use:</strong> Create
                      personalized content in minutes with an intuitive
                      interface, designed for both beginners and experienced
                      content creators.
                    </li>
                    <li className="mb-3">
                      <strong>Free from Copyright Concerns:</strong> All content
                      created with <strong>Upword AI</strong> is free from
                      copyright issues, making it ideal for content creators,
                      bloggers, and marketers who need safe and original
                      material.
                    </li>
                    <li className="mb-3">
                      <strong>Complete Customization:</strong> Adjust the tone,
                      style, and length of the generated content to fit your
                      specific requirements, offering complete flexibility over
                      your text.
                    </li>
                    <li className="mb-3">
                      <strong>Cloud-Based Accessibility:</strong> Access{" "}
                      <strong>Upword AI</strong> on any device with an internet
                      connection—no downloads or installations required.
                    </li>
                    <li className="mb-3">
                      <strong>Versatile for Various Projects:</strong> Whether
                      you need blogs, website content, email campaigns, or
                      social media posts, <strong>Upword AI</strong> can help
                      you generate quality content for any platform.
                    </li>
                    <li className="mb-3">
                      <strong>Seamless Integration with Editing Tools:</strong>{" "}
                      After generating your content, easily export and refine it
                      with your preferred text editing software for further
                      enhancement.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Start Creating with <strong>Upword AI</strong> for
                      Personalized, Copyright-Free Content
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
              Why <strong>Upword AI</strong> is Revolutionizing AI-Powered
              Content Creation
            </h4>
            <p className="text-center text-secondary mb-4">
              <strong>Upword AI</strong> transforms the content creation
              landscape by providing intuitive, AI-powered tools that allow
              creators to generate and customize written content quickly,
              without any copyright concerns. Let's dive into its key benefits
              and potential drawbacks.
            </p>
            <div className="row justify-content-center gap-2">
              {/* Pros Column */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #7b68ee",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-success text-start mb-4">✅ Pros</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>AI-Powered Content Generation:</strong> Upword AI
                    generates personalized, high-quality written content
                    instantly, ensuring original and copyright-free text across
                    various topics.
                  </li>
                  <li className="mb-2">
                    <strong>Fast Content Creation:</strong> Users can generate
                    well-crafted written content in a matter of minutes, helping
                    content creators meet tight deadlines.
                  </li>
                  <li className="mb-2">
                    <strong>Easy to Use:</strong> With an intuitive and
                    user-friendly interface, Upword AI is accessible to
                    everyone, from novice writers to professional content
                    creators.
                  </li>
                  <li className="mb-2">
                    <strong>Complete Customization:</strong> Users can fine-tune
                    the generated content by adjusting tone, style, length, and
                    structure, providing full control over the final output.
                  </li>
                  <li className="mb-2">
                    <strong>Copyright-Free Content:</strong> All text generated
                    with Upword AI is free from copyright issues, ensuring users
                    can use the content for commercial purposes without
                    concerns.
                  </li>
                </ul>
              </div>

              {/* Cons Column */}
              <div
                className="col-lg-5 col-md-6 col-sm-12"
                style={{
                  border: "1px solid #7b68ee",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <h5 className="text-warning text-start mb-4">⚠️ Cons</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Limited Free Features:</strong> Upword AI offers a
                    free version with limited features, and more advanced
                    functionalities are only available through a paid
                    subscription.
                  </li>
                  <li className="mb-2">
                    <strong>Template-Based Creation:</strong> While the platform
                    offers customization, its reliance on predefined templates
                    might restrict users looking for complete creative freedom.
                  </li>
                  <li className="mb-2">
                    <strong>Basic Writing Style:</strong> For more complex or
                    nuanced writing, the AI-generated content might lack the
                    depth or emotional tone that a human writer can provide.
                  </li>
                  <li className="mb-2">
                    <strong>Internet Connection Required:</strong> As a
                    cloud-based service, a stable internet connection is
                    necessary to use Upword AI, which could be limiting in areas
                    with unreliable connectivity.
                  </li>
                  <li className="mb-2">
                    <strong>Potential Similarity in Content:</strong> Depending
                    on the AI’s algorithm, some users may find that the
                    generated content is somewhat repetitive or lacks uniqueness
                    across different projects.
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
              Explore Top Alternatives to Upword AI for Content Creation and
              Customization
            </h4>
            <p className="text-center text-secondary mb-4">
              While <strong>Upword AI</strong> provides powerful tools for
              generating and customizing written content, several other
              platforms offer unique features for AI-driven text creation,
              rewriting, and refinement, enabling creators to produce
              high-quality and original content quickly.
            </p>
            <div className="row justify-content-center gap-2">
              <div
                className="col-lg-8 col-md-8 col-sm-12"
                style={{
                  border: "1px solid #7b68ee",
                  borderRadius: "12px",
                  padding: "20px",
                  backgroundColor: "#1e1e1e",
                  minHeight: "100%",
                }}
              >
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Upword AI</strong>: A platform designed to generate
                    high-quality, original written content instantly. It allows
                    users to customize writing styles, tone, and structure while
                    ensuring complete copyright safety for any project.
                  </li>
                  <li className="mb-2">
                    <strong>Copy.ai</strong>: An AI-driven copywriting tool that
                    helps users generate engaging marketing copy, blog posts,
                    and other forms of written content with ease.
                  </li>
                  <li className="mb-2">
                    <strong>Writesonic</strong>: A versatile AI writing
                    assistant that can produce everything from blog articles to
                    landing page copy, offering customizable templates and a
                    wide range of writing styles.
                  </li>
                  <li className="mb-2">
                    <strong>Jasper AI</strong>: A powerful AI tool for
                    generating content across various niches, including blog
                    writing, advertising, and social media posts, providing
                    personalized and tailored content.
                  </li>
                  <li className="mb-2">
                    <strong>Quillbot</strong>: A tool that enhances the quality
                    of your writing by offering grammar correction,
                    paraphrasing, and style improvements, suitable for content
                    creators and students alike.
                  </li>
                  <li className="mb-2">
                    <strong>INK for All</strong>: An AI-powered content creation
                    platform designed to improve SEO rankings and optimize your
                    content for better visibility, with tools for generating and
                    refining text.
                  </li>
                  <li className="mb-2">
                    <strong>Frase</strong>: A content creation tool that uses AI
                    to help create SEO-optimized articles and research, making
                    it ideal for content marketers and SEO experts.
                  </li>
                  <li className="mb-2">
                    <strong>WriteSonic</strong>: An advanced tool for generating
                    blog posts, product descriptions, and social media content
                    using AI-powered writing capabilities, making content
                    creation faster and more efficient.
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
          <div className="row d-flex align-items-center justify-content-between mb-4">
  {/* Image first on mobile, second on desktop */}
  <div
    className="col-12 col-md-6 order-1 order-md-2 text-center mb-3 mb-md-0"
    style={{ height: "250px" }}
  >
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSl5IyEpRsYY8JsmOlBNKKmWf5jlOBFs3Ustg&s"
      alt="Upword AI"
      style={{ maxWidth: "100%", height: "300px" }}
    />
  </div>

  {/* Text second on mobile, first on desktop */}
  <div
    className="col-12 col-md-6 order-2 order-md-1"
    style={{ paddingRight: "30px" }}
  >
    <p className="text-primary">Write better, faster</p>
    <h1>Upword AI:</h1>
    <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
    <p>
      Upword AI is an excellent choice for anyone looking to enhance
      their research productivity and streamline their content
      management workflow. Whether you're a student needing help with
      your thesis, a business professional generating reports, or a
      journalist looking for efficient content summarization, Upword
      AI helps you focus on the critical aspects of your work.
    </p>

    <a
      href="https://www.upword.ai"
      rel="noopener noreferrer"
      className="btn btn-primary me-2"
    >
      Explore Tool
    </a>
  </div>
</div>


          <section style={{ backgroundColor: "#1b1f2b", padding: "3rem 0" }}>
            <div className="container text-center">
              <p className="text-primary">
                Enhance Your Content Creation with Upword AI
              </p>
              <h2
                className="text-white"
                style={{ fontWeight: "600", marginBottom: "1rem" }}
              >
                Discover How Upword AI Revolutionizes Content Generation and
                Customization
              </h2>
              <p
                style={{
                  color: "#ccc",
                  marginBottom: "2rem",
                  fontStyle: "italic",
                }}
              >
                Upword AI empowers creators to effortlessly generate and refine
                written content, producing unique and original text without any
                copyright concerns.
              </p>

              <div className="row g-4">
                {/* Step 1 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#1034a6",
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
              color: #7b61ff;
              opacity: 0.6;
            }
          `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Instantly Generate High-Quality Content
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Upword AI enables you to create high-quality, original
                      written content instantly. Select your topic, tone, and
                      style, and let Upword AI do the rest, ensuring
                      copyright-free text.
                    </p>
                    <div className="step1">1</div>
                  </div>
                </div>

                {/* Step 2 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#1034a6",
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
              color: #7b61ff;
              opacity: 0.6;
            }
          `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Full Customization of Written Content
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Upword AI gives you complete control over your content,
                      enabling you to adjust writing style, tone, length, and
                      more, so you can fine-tune your output to match your exact
                      needs.
                    </p>
                    <div className="step2">2</div>
                  </div>
                </div>

                {/* Step 3 */}
                <div className="col-md-4">
                  <div
                    style={{
                      position: "relative",
                      backgroundColor: "#1034a6",
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
              color: #7b61ff;
              opacity: 0.6;
            }
          `}</style>
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}>
                      Seamless Integration into Your Workflow
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Upword AI allows you to integrate your generated content
                      into blogs, social media posts, newsletters, and more
                      without the hassle of copyright infringement.
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

export default UpwordAI;
