import React, { useState } from "react";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";

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
const DoNotPay = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">Create Stunning Videos in Minutes</p>
              <h3 className=""> Drag-and-Drop Simplicity & Custom Branding</h3>
            </div>
            {[
              {
                icon: "💼",
                title: "DoNotPay Legal Assistance AI:",
                desc: "DoNotPay leverages AI to provide legal assistance for various tasks like suing companies, filing complaints, and canceling subscriptions.",
              },
              {
                icon: "📑",
                title: "DoNotPay AI-Powered Document Creation:",
                desc: "DoNotPay helps users create customized legal documents, including contracts, claims, and legal letters, with AI-generated templates.",
              },
              {
                icon: "⚖",
                title: "DoNotPay AI for Consumer Protection:",
                desc: "DoNotPay uses AI to assist users in challenging unfair charges, obtaining compensation for delayed flights, and filing claims for data breaches.",
              },
              {
                icon: "💡",
                title: "DoNotPay AI for Legal Research:",
                desc: "DoNotPay's AI helps users by providing insights and resources related to legal questions, improving access to legal information.",
              },
              {
                icon: "✉",
                title: "DoNotPay AI for Legal Correspondence:",
                desc: "DoNotPay's AI can automate the generation of legal correspondence, such as letters and notifications, reducing manual effort for legal teams.",
              },
              {
                icon: "🌍",
                title: "DoNotPay AI for Global Legal Challenges:",
                desc: "DoNotPay's AI-powered platform is designed to help users handle legal issues across different regions, including international consumer rights and disputes.",
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
                  q: "What is DoNotPay?",
                  a: "DoNotPay is an AI-powered legal automation tool designed to assist with a wide range of legal and consumer-related issues, such as canceling subscriptions, fighting parking tickets, claiming refunds, and handling legal disputes.",
                },
                {
                  q: "How does DoNotPay work?",
                  a: "DoNotPay uses AI algorithms to automate legal processes. Users can interact with the app, which guides them through creating legal documents, filing disputes, and more.",
                },
                {
                  q: "Is DoNotPay a real lawyer?",
                  a: "No, DoNotPay is not a licensed lawyer. It provides automated legal assistance and tools, but it is not a substitute for legal advice from a licensed attorney.",
                },
                {
                  q: "How do I use DoNotPay?",
                  a: "You can download the DoNotPay app or access it through a web browser, answer a series of questions, and let the AI help you with your legal or consumer needs.",
                },
                {
                  q: "Is DoNotPay free to use?",
                  a: "No, DoNotPay operates on a subscription-based model, but it is significantly more affordable than hiring a lawyer.",
                },
                {
                  q: "What legal issues can DoNotPay help with?",
                  a: "DoNotPay helps with a wide variety of legal issues, including parking tickets, subscription cancellations, small claims court, lawsuit filing, tenant disputes, and more.",
                },
                {
                  q: "Can DoNotPay help with subscription cancellations?",
                  a: "Yes, DoNotPay can automatically cancel subscriptions such as gym memberships, streaming services, and more.",
                },
                {
                  q: "Does DoNotPay help with parking tickets?",
                  a: "Yes, DoNotPay can help you appeal parking tickets by generating automated appeal letters.",
                },
                {
                  q: "Can I use DoNotPay for lawsuits?",
                  a: "Yes, DoNotPay can help you generate the paperwork needed to file small claims court lawsuits and other legal claims.",
                },
                {
                  q: "Does DoNotPay provide legal advice?",
                  a: "No, DoNotPay does not offer legal advice. It provides automated tools to help you handle legal tasks, but for personalized advice, you should consult a licensed attorney.",
                },
                {
                  q: "How do I appeal a parking ticket using DoNotPay?",
                  a: "Through the app, you can provide details about your ticket, and DoNotPay will generate an appeal letter that you can submit to the relevant authorities.",
                },
                {
                  q: "Does DoNotPay help with refund claims?",
                  a: "Yes, DoNotPay can assist with refund claims for defective products, flight delays, hotel bookings, and more.",
                },
                {
                  q: "Can DoNotPay assist with consumer service disputes?",
                  a: "Yes, DoNotPay can generate automated letters to resolve customer service disputes, such as for faulty products or unsatisfactory services.",
                },
                {
                  q: "How does DoNotPay help with flight delays?",
                  a: "DoNotPay can help you claim compensation for flight delays by generating the necessary documents and communicating with airlines on your behalf.",
                },
                {
                  q: "Can DoNotPay assist with tenant disputes?",
                  a: "Yes, DoNotPay provides tools for resolving landlord-tenant disputes, including issues related to eviction, security deposits, and maintenance requests.",
                },
                {
                  q: "Does DoNotPay handle legal templates?",
                  a: "Yes, DoNotPay provides templates for demand letters, cease and desist letters, and more, which can be customized for your specific needs.",
                },
                {
                  q: "Can DoNotPay help with immigration cases?",
                  a: "Yes, DoNotPay can assist with visa applications, green card support, and other immigration-related services.",
                },
                {
                  q: "Can I use DoNotPay to deal with identity theft?",
                  a: "Yes, DoNotPay provides tools for reporting identity theft and protecting your personal information.",
                },
                {
                  q: "Does DoNotPay offer assistance with student loan disputes?",
                  a: "Yes, DoNotPay can help you dispute issues with student loans, including incorrect charges or problems with servicers.",
                },
                {
                  q: "How does DoNotPay help with bank fee refunds?",
                  a: "DoNotPay can automatically generate letters to request refunds for unnecessary or incorrect bank fees.",
                },
                {
                  q: "What is DoNotPay’s approach to subscription refund help?",
                  a: "DoNotPay helps users get subscription refunds by providing automated tools to contact the companies, file disputes, and resolve issues.",
                },
                {
                  q: "How does DoNotPay assist with defamation claims?",
                  a: "DoNotPay can help generate demand letters for defamation claims, either online or offline.",
                },
                {
                  q: "Can DoNotPay help with lawsuits against big companies?",
                  a: "Yes, DoNotPay can assist with filing small claims court lawsuits against large companies for consumer-related issues.",
                },
                {
                  q: "What types of legal disputes can DoNotPay handle?",
                  a: "DoNotPay can handle issues such as small claims court cases, consumer disputes, tenant disputes, copyright claims, and more.",
                },
                {
                  q: "How does DoNotPay work for dispute resolutions?",
                  a: "DoNotPay automates dispute resolution by creating legal documents and submitting them to the relevant parties, such as businesses or government agencies.",
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
                    Why Use DoNotPay?
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
                      ⚡ Fast: Handle legal paperwork and disputes in minutes.
                    </li>
                    <li className="mb-3">
                      💰 Affordable: No need to pay expensive lawyer fees.
                    </li>
                    <li className="mb-3">
                      🧠 AI Automation: Smart technology for hassle-free
                      services.
                    </li>
                    <li className="mb-3">
                      🌍 Convenient: Available anywhere, anytime via the app.
                    </li>
                    <li className="mb-3">
                      📜 Extensive Services: Offers help in 200+ legal and
                      consumer areas.
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
                    Affordable alternative to hiring a traditional lawyer
                  </li>
                  <li className="mb-2">
                    User-friendly interface—no legal expertise needed
                  </li>
                  <li className="mb-2">
                    Wide range of services from legal claims to consumer refunds
                  </li>
                  <li className="mb-2">
                    Quick and automated solutions—no waiting for appointments
                  </li>
                  <li className="mb-2">
                    Available 24/7—solve problems at your convenience
                  </li>
                  <li className="mb-2">
                    Pre-built legal templates to save time
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
                    Limited for complex cases (e.g., serious criminal defense)
                  </li>
                  <li className="mb-2">
                    Jurisdiction-specific limitations (laws differ by region)
                  </li>
                  <li className="mb-2">
                    Subscription required—it's not completely free
                  </li>
                  <li className="mb-2">
                    Lacks human expertise for critical legal strategy
                  </li>
                  <li className="mb-2">
                    Possible delays in receiving some refunds or compensations
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      case "alternative":
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
                    Rocket Lawyer – Legal templates and consultations
                  </li>
                  <li className="mb-2">
                    LegalZoom – Document preparation and business formation
                  </li>
                  <li className="mb-2">
                    UpCounsel – On-demand legal help from real attorneys
                  </li>
                  <li className="mb-2">
                    LawDepot – DIY legal forms and contracts
                  </li>
                  <li className="mb-2">
                    Avvo – Find a lawyer and get free legal advice
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
              <p className="text-primary">Write better, faster</p>
              <h1>Information About DoNotPay</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                DoNotPay is a revolutionary AI-powered "Robot Lawyer" app
                designed to help users tackle everyday legal and consumer issues
                quickly, easily, and affordably. Whether it's canceling
                subscriptions, fighting parking tickets, claiming flight
                compensation, handling small claims court, or even filing
                lawsuits, DoNotPay offers automated assistance across a wide
                range of services. Founded by Joshua Browder, DoNotPay is today
                one of the world's most popular legal automation platforms,
                aiming to make legal services accessible to everyone.
              </p>

              <div className="mb-3">
                <span className="badge bg-primary me-2">Image Generation</span>
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
              <img src="" style={{ MaxWidth: "100%", height: "300px" }} />
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
                How to Use DoNotPay?
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
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}> </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      File legal claims with the help of the DoNotPay AI lawyer
                      and robot lawyer services
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
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}></h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Get refunds for flight delays, hotel bookings, cable
                      bills, or defective products
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
                    <h5 style={{ fontWeight: "bold", color: "#fff" }}></h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Handle copyright claims, trademark registrations, and
                      patent applications
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
            <h4 className="mb-3">Ready to get started with DoNotPay?</h4>
            <p className="mb-4">
              Join thousands of professionals already boosting their
              productivity!
            </p>
            <div>
              <button className="btn btn-light me-3">Try Now for Free</button>
              <button className="btn btn-outline-light">Schedule a Demo</button>
            </div>
            <small className="d-block mt-2">
              No credit card required. 14-day free trial available.
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default DoNotPay;
