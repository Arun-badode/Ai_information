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
const LegalZoomAI = () => {
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
                icon: "📄",
                title: "AI-Powered Legal Document Automation:",
                desc: "LegalZoom simplifies the creation of legal documents. From business formation documents to contract drafts, the AI quickly generates customized legal papers based on user inputs.",
              },
              {
                icon: "🏢",
                title: "Business Formation Services:",
                desc: "LegalZoom AI assists in setting up businesses with services such as company formation, business incorporation, and LLC setup. It automates the filing process to ensure users meet all legal requirements.",
              },
              {
                icon: "🔑",
                title: "Trademark Registration and Protection:",
                desc: "LegalZoom AI provides AI for trademark registration, ensuring your intellectual property is protected. The AI also assists with trademark search and filing, making it easier for users to secure their brand.",
              },
              {
                icon: "📜",
                title: "Online Will Creation:",
                desc: "LegalZoom AI enables users to draft wills and estate planning documents, ensuring that users’ wishes are legally binding and properly executed. The AI-powered will creation is particularly helpful for individuals looking for an affordable option to prepare for the future.",
              },
              {
                icon: "📑",
                title: "Contract Management:",
                desc: "The platform allows users to create, manage, and review contracts with AI-driven document review and AI-powered contract management tools. This ensures that contracts are legally sound and complete.",
              },
              {
                icon: "🧑‍⚖",
                title: "AI Legal Research:",
                desc: "LegalZoom AI utilizes algorithms to conduct legal research quickly, providing businesses with legal insights and helping entrepreneurs navigate complex legal landscapes.",
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
                src="public\assets\Img\AI for legal\LegalZoom-s2.jpg"
                alt="Legal Zoom"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src="public\assets\Img\AI for legal\LegalZoom-s3.jpg"
                alt="Legal Zoom"
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
                  q: "What is LegalZoom AI?",
                  a: "LegalZoom AI is an artificial intelligence-powered platform that automates legal services, helping users create legal documents, form businesses, register trademarks, and more, all online.",
                },
                {
                  q: "How does LegalZoom AI work?",
                  a: "LegalZoom AI uses algorithms to automate the creation of legal documents, business formation, and provide AI-powered legal advice and research to simplify legal processes.",
                },
                {
                  q: "Can LegalZoom AI help with business formation?",
                  a: "Yes, LegalZoom AI assists with the formation of businesses, offering services such as LLC formation, incorporation, and filing business documents.",
                },
                {
                  q: "Does LegalZoom AI offer online legal consultations?",
                  a: "Yes, LegalZoom AI provides access to online legal consultations with licensed attorneys, allowing users to get professional advice without visiting a law firm.",
                },
                {
                  q: "What types of documents can LegalZoom AI help create?",
                  a: "LegalZoom AI can help create a wide range of legal documents, including contracts, business formation papers, trademarks, wills, and estate planning documents.",
                },
                {
                  q: "How much does LegalZoom AI cost?",
                  a: "LegalZoom AI offers various pricing plans depending on the services you need. Prices range from basic document creation to more advanced services like legal consultations and business incorporation.",
                },
                {
                  q: "Is LegalZoom AI secure?",
                  a: "Yes, LegalZoom follows industry-standard security measures to protect personal and business information, including encryption for online transactions.",
                },
                {
                  q: "Can LegalZoom AI help with trademark registration?",
                  a: "Yes, LegalZoom AI helps users with trademark registration, providing search tools, filing, and protection services for intellectual property.",
                },
                {
                  q: "What is the process for forming a business with LegalZoom AI?",
                  a: "The process involves selecting your business type, filling out required information about your business, and having LegalZoom automatically file the necessary documents for you.",
                },
                {
                  q: "Can LegalZoom AI create a will for me?",
                  a: "Yes, LegalZoom AI allows you to create a legally binding will with customizable options to ensure your estate is handled according to your wishes.",
                },
                {
                  q: "Can LegalZoom AI help with divorce papers?",
                  a: "Yes, LegalZoom AI provides automated templates for divorce papers, making the process easier for individuals seeking a divorce.",
                },
                {
                  q: "What is LegalZoom AI’s pricing structure?",
                  a: "LegalZoom AI offers different pricing tiers based on the services you select, such as business formation, trademark registration, and legal consultations.",
                },
                {
                  q: "Can I cancel my LegalZoom AI subscription?",
                  a: "Yes, you can cancel your LegalZoom AI subscription at any time. Refunds may depend on the specific terms of the service you purchased.",
                },
                {
                  q: "Does LegalZoom AI offer services for non-profits?",
                  a: "Yes, LegalZoom AI provides services for non-profits, including business formation, tax-exempt status filing, and other related legal services.",
                },
                {
                  q: "Does LegalZoom AI offer legal research services?",
                  a: "Yes, LegalZoom AI offers AI-driven legal research to help businesses and individuals find relevant case law, statutes, and regulations for their needs.",
                },
                {
                  q: "Can I register my business name with LegalZoom AI?",
                  a: "Yes, LegalZoom AI offers services to register your business name and ensure it complies with legal naming requirements in your jurisdiction.",
                },
                {
                  q: "How long does it take for LegalZoom AI to form a business?",
                  a: "The business formation process with LegalZoom AI typically takes a few days, depending on the service selected and jurisdiction.",
                },
                {
                  q: "Can LegalZoom AI help with tax filing?",
                  a: "Yes, LegalZoom AI offers assistance with tax filings for businesses and individuals, including the preparation of tax documents and filings.",
                },
                {
                  q: "Does LegalZoom AI have a money-back guarantee?",
                  a: "LegalZoom offers a satisfaction guarantee, but terms vary depending on the service. Refund eligibility is subject to specific conditions.",
                },
                {
                  q: "Can I use LegalZoom AI for employee agreements?",
                  a: "Yes, LegalZoom AI offers templates and customizable options for creating employee agreements, contracts, and other business-related documents.",
                },
                {
                  q: "Does LegalZoom AI provide customer support?",
                  a: "Yes, LegalZoom AI offers customer support via chat, phone, and email to assist users with any issues or questions they may have about the platform.",
                },
                {
                  q: "How does LegalZoom AI protect my data?",
                  a: "LegalZoom AI uses encryption, secure servers, and other data protection measures to ensure that your personal and business information remains safe.",
                },
                {
                  q: "Can LegalZoom AI help with intellectual property?",
                  a: "Yes, LegalZoom AI offers services for intellectual property protection, including trademark registration, patent services, and copyright filings.",
                },
                {
                  q: "Is LegalZoom AI suitable for small businesses?",
                  a: "Yes, LegalZoom AI is ideal for small businesses, offering affordable and efficient services for business formation, legal document creation, and trademark registration.",
                },
                {
                  q: "Can I create a partnership agreement with LegalZoom AI?",
                  a: "Yes, LegalZoom AI provides customizable templates for creating partnership agreements, ensuring that all necessary terms are included.",
                },
              ]
                .map((item, i) => ({ ...item, id: `faq${i} ` }))
                .filter((item, i, arr) => showAllFaqs || i < 4)
                .map((item, i) => (
                  <div className="accordion-item mb-3" key={item.id}>
                    <h2 className="accordion-header" id={`heading ${item.id}`}>
                      <button
                        className={`accordion-button ${i !== 0 ? "collapsed" : ""
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
                      className={`accordion-collapse collapse ${i === 0 ? "show" : ""
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
                    Why Use LegalZoom AI?
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
                      Accessibility and Convenience: LegalZoom AI offers a
                      comprehensive suite of legal tools that are easily
                      accessible online. You don’t have to schedule appointments
                      with lawyers, wait for hours, or deal with paperwork
                      manually. Everything is streamlined, allowing you to
                      handle legal tasks quickly.
                    </li>
                    <li className="mb-3">
                      Cost-Effective Solution: LegalZoom’s AI-powered services
                      are more affordable compared to hiring traditional lawyers
                      or law firms. Users can save on legal fees by using the
                      automated services that are offered at a fixed cost, with
                      no hidden fees.
                    </li>
                    <li className="mb-3">
                      Fast Legal Document Creation: Whether you need legal
                      contracts, a will, or business formation documents,
                      LegalZoom AI generates customized documents in a fraction
                      of the time it would take a lawyer to create them
                      manually.
                    </li>
                    <li className="mb-3">
                      Comprehensive Coverage: LegalZoom AI provides an array of
                      services that cover many legal aspects, such as
                      intellectual property law, business incorporation, estate
                      planning, and dispute resolution, all in one place.
                    </li>
                    <li className="mb-3">
                      User-Friendly: The platform is designed to be intuitive,
                      making it easy for even non-legal professionals to
                      navigate and create legal documents. Whether you are an
                      entrepreneur, small business owner, or individual, the
                      tools are easy to understand and use.
                    </li>
                    <li className="mb-3">
                      Legal Compliance: LegalZoom AI ensures that all documents
                      meet legal standards and comply with relevant laws,
                      minimizing the risk of errors that could lead to legal
                      trouble.
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
                    Cost-Effective: LegalZoom offers affordable pricing plans
                    that make it accessible for individuals and businesses to
                    get professional legal services without breaking the bank.
                  </li>
                  <li className="mb-2">
                    Convenience: Users can access LegalZoom AI from anywhere, at
                    any time, making it easier to complete legal tasks without
                    the need for in-person meetings or phone calls.
                  </li>
                  <li className="mb-2">
                    Efficient and Fast: The AI-powered tools reduce the time
                    spent on legal document creation, making it faster to file
                    business papers, draft contracts, or register trademarks.
                  </li>
                  <li className="mb-2">
                    Wide Range of Legal Services: Whether you’re creating a
                    will, forming a business, or seeking intellectual property
                    protection, LegalZoom offers a diverse set of tools that
                    cover many legal needs.
                  </li>
                  <li className="mb-2">
                    Customer Support: LegalZoom provides strong customer support
                    to help users through every stage of the legal process,
                    whether they need help with document preparation or seeking
                    clarification on legal terms.
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
                    Limited Human Interaction: While LegalZoom AI is an
                    efficient tool, it lacks the personalized touch of
                    consulting with a human lawyer. Some users may feel
                    uncomfortable with the AI-based advice and prefer human
                    input.
                  </li>
                  <li className="mb-2">
                    Premium Features at Extra Cost: Certain services like
                    advanced consultations, online notarization, and priority
                    customer support are available at an additional cost.
                  </li>
                  <li className="mb-2">
                    Limited Legal Jurisdictions: Some services offered by
                    LegalZoom AI might be restricted to certain regions or
                    jurisdictions. Users may not have access to all services
                    depending on where they are located.
                  </li>
                  <li className="mb-2">
                    Generic Templates: While the templates provided are legally
                    sound, some users may find them too generic for more complex
                    legal situations. Customization may be required for unique
                    needs.
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
                    Rocket Lawyer: Rocket Lawyer provides similar online legal
                    tools, including business incorporation, contract
                    management, and trademark registration. It also offers
                    online legal consultations with attorneys.
                  </li>
                  <li className="mb-2">
                    LawDepot: LawDepot offers customizable legal document
                    templates for individuals and businesses, making it an
                    affordable alternative to LegalZoom.
                  </li>
                  <li className="mb-2">
                    UpCounsel: UpCounsel connects businesses with experienced
                    attorneys for a more hands-on, personalized legal
                    experience. This is a good choice if you need specialized
                    legal advice or representation.
                  </li>
                  <li className="mb-2">
                    LegalNature: LegalNature provides a wide range of legal
                    documents for business formation, contracts, and more. It is
                    a straightforward, no-frills option for users who need basic
                    legal documents.
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
          <div className="row align-items-center justify-content-between mb-1">
            {/* Text Section */}
            <div className="col-12 col-md-6 mb-4 mb-md-0 pe-md-4">
              <p className="text-primary">Write better, faster</p>
              <h1>
                LegalZoom AI: Revolutionizing Legal Services with Artificial Intelligence
              </h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                LegalZoom AI is transforming the way individuals and businesses handle
                their legal needs. This platform leverages artificial intelligence to
                offer affordable and accessible online legal tools, legal document
                automation, and more. Whether you are starting a business, drafting
                contracts, creating a will, or dealing with intellectual property,
                LegalZoom’s AI-powered legal services make the process simpler and
                faster. The platform provides everything from business incorporation to
                legal research, ensuring that users can get the legal support they need
                without hiring an expensive attorney. With its user-friendly interface
                and AI-powered document creation, LegalZoom AI is designed to handle a
                variety of tasks while ensuring compliance and accuracy.
              </p>
              <div className="mb-3">
                <a
                  href="https://www.legalzoom.com/country/in"
                  rel="noopener noreferrer"
                  className="btn btn-primary me-2"
                >
                  Explore Tool
                </a>
              </div>
            </div>

            {/* Image Section */}
            <div className="col-12 col-md-6 text-center">
              <img
                src="public\assets\Img\AI for legal\AiForLegal\legalzoom.png"
                alt="LegalZoom AI"
                className="img-fluid"
                style={{ height: "300px", objectFit: "contain" }}
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
                How to Use LegalZoom AI?
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
                      {" "}
                      Sign Up or Log In
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      To get started, visit the LegalZoom website and sign up
                      for an account, or log in if you already have one.
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
                      Select Your Service
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Choose from a range of legal services like business
                      formation, trademark registration, or legal document
                      preparation.
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
                      Use the AI-Powered Tools
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      LegalZoom AI assists by providing step-by-step guidance to
                      complete your legal documents. It uses AI to auto-fill
                      forms based on the information you provide.
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

export default LegalZoomAI;
