import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../../Images/logo[2].png";
import deatilimage from "../../../Images/DetailImage.png";
import otter from "../../../../public/assets/Img/AI for Business/5.png";
import  otter1 from "../../../../public/assets/Img/AI for Business/otter1.png";
import  otter2 from "../../../../public/assets/Img/AI for Business/otter2.png";

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

const OtterAI = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [openIndex, setOpenIndex] = useState(null);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const toggleReadMore = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };
  const renderTabContent = () => {
    switch (activeTab) {
      case "Features":
        return (
          <div className="row g-4">
            {[
              {
                title: " Otter.ai Transcription Software:",
                desc: "Otter.ai provides a fully automated transcription service powered by AI. It supports various audio and video formats and converts them into editable text in real-time. It’s highly accurate in detecting words, punctuation, and tone. This makes it ideal for meetings, interviews, content creation, and podcasts.",
              },
              {
                title: "  Otter.ai Voice Recognition:",
                desc: "Otter.ai uses advanced voice recognition algorithms that differentiate between multiple speakers. This feature is essential for meetings and conferences with multiple people, as Otter.ai automatically labels and assigns the text to the correct speaker, making it easy to track conversations.",
              },
              {
                title: " Otter.ai for Business:",
                desc: " Otter.ai helps businesses by providing transcription services for meetings, interviews, and conferences. With real-time transcription, teams can keep track of what’s discussed during meetings and collaborate efficiently. The transcriptions can be shared among team members, stored securely in the cloud, and accessed anytime.",
              },
              {
                title: " Otter.ai for Students:",
                desc: "Students use Otter.ai to transcribe lectures, take notes during class, and create a written record of group discussions. The software allows users to edit and highlight key points, making it a great tool for study sessions and assignments.",
              },
              {
                title: "Otter.ai for Podcasts:",
                desc: "Otter.ai is incredibly useful for podcast creators, as it converts podcast episodes into text format. This makes it easier for content creators to create written articles, show notes, and even optimize the content for SEO purposes by adding transcriptions on the website.",
              },
              {
                title: "Otter.ai Collaboration Features:",
                desc: "Recognizes the tone of your writing and suggests adjustments to ensure it matches your intended message, whether formal, casual, or persuasive.​",
              },
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div className="custom-card text-light p-4 h-100">
                  <div className="icon mb-3">{feature.icon}</div>
                  <h5 className="fw-bold">{feature.title}</h5>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        );

      case "Screenshots":
        return (
          <div className="row g-4">
            <div className="col-md-6">
              <img
                src={otter1}
                alt="Screenshot 1"
                className="img-fluid rounded-3"
              />
            </div>
            <div className="col-md-6">
              <img
                src={ otter2}
                alt="Screenshot 2"
                className="img-fluid rounded-3"
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

      case "Why-we-use":
        return (
          <div className="row g-4">
            <div className="col-12">
              <div className="custom-card text-light p-5 text-center">
                <h3 className="fw-bold mb-4">Why Choose Otter.ai? </h3>

                <p className="fs-5 mt-3">
                  <b>Ease of Use:</b> The interface is designed for ease of use,
                  even for those unfamiliar with transcription software. It’s
                  intuitive, quick to set up, and simple to use.
                </p>
                <p className="fs-5 mt-3">
                  <b>Multilingual Support:</b> Otter.ai is also expanding its
                  multilingual capabilities, allowing users to transcribe in
                  multiple languages, which is a plus for global teams and
                  businesses.
                </p>
                <p className="fs-5 mt-3">
                  <b>Affordable Pricing Plans: </b> Otter.ai offers both free
                  and premium plans, providing flexibility to individuals,
                  students, and businesses. The free plan gives you basic
                  transcription features, while the premium plan offers advanced
                  features like custom vocabulary and more transcription
                  minutes.
                </p>
                <p className="fs-5 mt-3">
                  <b>Security:</b>Otter.ai offers secure storage in the cloud
                  for all transcriptions. This is important for businesses that
                  handle sensitive data and require secure access to their
                  files.
                </p>

                <Button variant="primary" size="lg" className="mt-4">
                  Try Otter.ai Now
                </Button>
              </div>
            </div>
          </div>
        );

      case "Pro&Const":
        return (
          <div style={styles.section}>
            <div className="container">
              <div className="row g-4">
                {/* Pros Section */}
                <div className="col-md-10 offset-md-1">
                  <div style={styles.card}>
                    <h3 className="mb-4 text-center">Pros of Otter.ai</h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <p>
                          <b>Real-Time Transcription: </b> Instant transcription
                          during meetings, interviews, and webinars makes it
                          easier to follow conversations and capture important
                          details.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b>Speaker Identification:</b> Otter.ai's ability to
                          distinguish between different speakers makes it
                          perfect for multi-participant meetings.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b>Cloud Storage and Easy Sharing:</b>Transcriptions
                          are stored securely in the cloud, making them
                          accessible anywhere, and easily shareable with team
                          members or collaborators.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b>Real-Time Collaboration: </b> Team members can
                          collaborate on transcriptions, providing input, making
                          changes, and sharing notes, all in real-time.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b>Integration with Major Platforms:</b> Otter.ai
                          integrates with Google Drive, Dropbox, Microsoft
                          Teams, and Zoom, simplifying workflows and sharing
                          files with minimal effort.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cons Section */}
                <div className="col-md-10 offset-md-1">
                  <div style={styles.card}>
                    <h3 className="mb-4 text-center">Cons of Otter.ai:</h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <p>
                          <b> No Subtitle Generation for Videos:</b>Although
                          Otter.ai can transcribe audio from video files, it
                          doesn’t generate subtitles automatically, which could
                          be a dealbreaker for users needing this specific
                          functionality.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b>Accuracy with Accents:</b> While Otter.ai does a
                          great job of transcription, there are occasional
                          accuracy issues with strong accents, especially in
                          noisy environments.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b>Pricing:</b>The premium version offers many more
                          features, but some users may find the cost a bit steep
                          if they are only transcribing a small amount of
                          content.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p>
                          <b>Limited Editing Features:</b>While Otter.ai is good
                          for transcription, it doesn’t provide advanced editing
                          features that some users may require, such as more
                          in-depth formatting options.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Alternative":
        return (
          <div className="container my-5">
            <h4 className="text-center text-light mb-4">
              Alternatives to Otter.ai
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
                  <li className="mb-3">
                    <strong> Sonix: –</strong> Known for its transcription
                    accuracy, Sonix also provides support for multiple languages
                    and is ideal for media professionals.
                  </li>
                  <li className="mb-3">
                    <strong>Trint: –</strong> Trint offers powerful
                    transcription features, as well as an intuitive editing
                    interface for more control over the text.
                  </li>
                  <li className="mb-3">
                    <strong>Descript: – </strong> Descript stands out as a
                    transcription tool that combines both transcription and
                    video editing, making it unique for content creators.
                  </li>
                  <li className="mb-3">
                    <strong> Rev: – </strong> Rev provides human-powered
                    transcription services that guarantee high accuracy,
                    although it comes at a higher price point than Otter.ai.
                  </li>

                  <li className="mb-3">
                    <strong>Temi: – </strong> Temi offers a highly affordable
                    transcription service with automated features, though it
                    lacks some of the collaboration features that Otter.ai
                    provides.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );

      case "FAQs":
        return (
          <div className="faq-section container py-5">
            <h3 className="text-center  text-white mb-5 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is Otter.ai?",
                  a: "Otter.ai is an AI-powered transcription tool that converts speech into text in real-time.",
                },
                {
                  q: "How accurate is Otter.ai’s transcription?",
                  a: " Otter.ai’s accuracy is generally high but depends on factors such as audio quality, accents, and background noise.",
                },
                {
                  q: "Can I use Otter.ai for podcasts?",
                  a: " Yes, Otter.ai is great for transcribing podcasts, creating show notes, and generating articles.",
                },
                {
                  q: "Does Otter.ai support live transcription?",
                  a: "Yes, Otter.ai supports live transcription, allowing real-time text capture during meetings and webinars.",
                },
                {
                  q: " Can Otter.ai transcribe video content?",
                  a: "Yes, Otter.ai can transcribe audio from video files.",
                },
                {
                  q: "Does Otter.ai work with multiple speakers?",
                  a: " Yes, Otter.ai identifies and differentiates between multiple speakers in a transcription.",
                },
                {
                  q: "Is Otter.ai suitable for meetings?",
                  a: " Yes, Otter.ai is ideal for transcribing meeting discussions and generating summaries",
                },
                {
                  q: " Can Otter.ai transcribe webinars?",
                  a: "Yes, Otter.ai transcribes webinars, enabling accurate records of presentations and discussions",
                },
                {
                  q: " Does Otter.ai integrate with Zoom?",
                  a: "Yes, Otter.ai integrates with Zoom to provide automatic transcription of Zoom meetings.",
                },
                {
                  q: " What is included in the free plan?",
                  a: " The free plan includes 600 minutes of transcription per month and basic features",
                },
                {
                  q: "Does Otter.ai offer a free trial?",
                  a: " Yes, Otter.ai offers a 7-day free trial for premium features.",
                },
              ]
                .map((item, i) => ({ ...item, id: `faq${i}` }))
                .filter((item, i, arr) => showAllFaqs || i < 4)
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

              {/* Read More / Read Less Button */}
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

      default:
        return null;
    }
  };

  return (
    <>
      <div className="bg-dark">
        {/* <Link
          to="/Aitools"
          className="d-inline-block text-white text-decoration-none ml-3 py-1"
        >
          <i className="bi bi-arrow-left me-2"></i>Back to Directory
        </Link> */}
       <a
          href="/Aitools"
          className="d-inline-block text-white text-decoration-none  mt-3 ml-3 py-1 px-2 ms-5 border rounded-sm"
        >
          <i className="bi bi-arrow-left me-2"></i>Back  {" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
        <div className="d-flex align-items-center justify-content-between mb-5">
  {/* Left side (Text Section) */}
  <div style={{ flex: 1, paddingRight: "30px" }}>
 
    <h2>Otter.ai</h2>
    <div className="text-warning mb-1">
      ⭐⭐⭐⭐⭐ 95% Satisfaction
    </div>
    <p>
      Otter.ai provides a fully automated transcription service
      powered by AI. It supports various audio and video formats and
      converts them into editable text in real-time. It’s highly
      accurate in detecting words, punctuation, and tone. This makes
      it ideal for meetings, interviews, content creation, and
      podcasts.
    </p>
    <div className="mb-3">
      <a
        href="https://otter.ai/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary me-2"
      >
        Explore Tool
      </a>
    </div>
  </div>

  {/* Right side (Image Section) */}
  <div style={{ flex: 1, textAlign: "center" }}>
    <img
      src={otter}
      alt="Otter.ai interface"
      className="img-fluid rounded-3"
      style={{ maxWidth: "80%", height: "auto" }}
      loading="lazy"
    />
  </div>
</div>


          {/* Tab Navigation */}
          <ul className="nav nav-tabs custom-tabs mb-4">
            {[
              "Features",
              "Screenshots",
              "Reviews",
              "FAQs",
              // "technical",
              "Why-we-use",
              "Pro&Const",
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

export default OtterAI;
