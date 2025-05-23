import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import magisto from "../../../Images/MagistoAI.png";
import writesonicSS1 from '../../../../public/assets/Img/AI for Writing/writesonicSS1.png';
import writesonicSS2 from '../../../../public/assets/Img/AI for Writing/writesonicSS2.png';
import writersonicImg from '../../../../public/assets/Img/AI for Writing/3.png'



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
const Writtersonic = () => {
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            <div className="text-center">
              <p className="text-primary">
                Optimize Your Time with Writesonic AI
              </p>
              <h3 className="">
                Smart Scheduling Assistant for Work-Life Balance
              </h3>
            </div>
            {[
              {
                icon: "📝",
                title: "Blog and Article Writing Tools:",
                desc: "Designed to generate blog posts, articles, and web content quickly and effectively, saving time and effort.",
              },
              {
                icon: "📚",
                title: "Long-form Content Assistant:",
                desc: "Helps users craft comprehensive, in-depth long-form content such as guides, research posts, and tutorials.",
              },
              {
                icon: "✍️",
                title: "Short-form Content Generator:",
                desc: "Specializes in producing short content like social media captions, ad headlines, taglines, and snippets.",
              },
              {
                icon: "🔍",
                title: "SEO Optimization Features:",
                desc: "Suggests keywords, meta tags, and content structure improvements to ensure high visibility in search engines.",
              },
              {
                icon: "🛒",
                title: "Product Description Generator:",
                desc: "Creates persuasive, engaging product descriptions for eCommerce platforms like Shopify, Amazon, and Etsy.",
              },
              {
                icon: "📧",
                title: "Email and Ad Copy Tools:",
                desc: "Crafts impactful marketing emails and attention-grabbing ad copy to boost engagement and conversion.",
              },
              {
                icon: "🎯",
                title: "Real-time Tone Adjustment:",
                desc: "Allows dynamic tone customization—professional, casual, friendly, or authoritative—to match your brand voice.",
              },
              {
                icon: "🧩",
                title: "Browser Extension:",
                desc: "Provides quick access to writing tools directly in your browser for seamless content generation anywhere online.",
              },
            ].map((feature, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="custom-card text-light p-4 h-100"
                  style={{ border: "1px solid #7B68EE" }}
                >
                  <div className="icon mb-3" style={{ fontSize: "1.5rem" }}>
                    {feature.icon}
                  </div>
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
                src={writesonicSS1}
                alt="writesonic"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={writesonicSS2}
                alt="writesonic"
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
                  q: "What is Writesonic AI?",
                  a: "Writesonic is an AI-powered writing assistant that helps users generate high-quality content, including blog posts, ads, emails, and more.",
                },
                {
                  q: "How does Writesonic work?",
                  a: "Writesonic uses natural language processing and machine learning to generate human-like content based on user input and selected templates.",
                },
                {
                  q: "Can Writesonic write long-form blog articles?",
                  a: "Yes, Writesonic can generate detailed long-form blog posts, including introductions, body content, and conclusions.",
                },
                {
                  q: "Is Writesonic good for short-form content?",
                  a: "Absolutely. It excels at generating ad copy, product descriptions, social media posts, and headlines.",
                },
                {
                  q: "Does Writesonic support SEO optimization?",
                  a: "Yes, it includes SEO-friendly tools like meta descriptions, keyword suggestions, and structured outlines.",
                },
                {
                  q: "Is Writesonic easy to use for beginners?",
                  a: "Yes, the interface is beginner-friendly and comes with guided prompts and templates for different content needs.",
                },
                {
                  q: "What types of templates does Writesonic offer?",
                  a: "Writesonic provides over 100 templates for blogs, ads, landing pages, product descriptions, and more.",
                },
                {
                  q: "Can Writesonic be used for marketing content?",
                  a: "Yes, it's widely used by marketers to create ad copy, emails, landing pages, and product promotions.",
                },
                {
                  q: "Does Writesonic support paraphrasing?",
                  a: "Yes, it has a built-in paraphrasing tool for rewriting and improving existing content.",
                },
                {
                  q: "Is there a free plan available?",
                  a: "Yes, Writesonic offers a free trial with limited credits so users can test the platform before upgrading.",
                },
                {
                  q: "Does Writesonic have an API?",
                  a: "Yes, but API access is only available to users on the Pro and higher-tier plans.",
                },
                {
                  q: "Can I generate product descriptions with Writesonic?",
                  a: "Yes, it includes specialized templates for creating compelling eCommerce product descriptions.",
                },
                {
                  q: "What languages does Writesonic support?",
                  a: "Writesonic supports over 25 global languages, making it useful for international content creation.",
                },
                {
                  q: "Is there a browser extension for Writesonic?",
                  a: "No, as of now, Writesonic does not offer an official browser extension, but content can be easily copied into any platform.",
                },
                {
                  q: "Can Writesonic generate headlines and titles?",
                  a: "Yes, it can create catchy headlines for blogs, ads, and social posts using headline generator tools.",
                },
                {
                  q: "Can I control the tone and style of content?",
                  a: "Yes, you can select tones like friendly, professional, witty, or casual for customized output.",
                },
                {
                  q: "Is Writesonic cloud-based?",
                  a: "Yes, it is entirely cloud-based and accessible from any modern browser with internet connectivity.",
                },
                {
                  q: "Does Writesonic support real-time editing?",
                  a: "Yes, users can edit content directly in the editor and regenerate specific sections in real time.",
                },
                {
                  q: "What industries can benefit from Writesonic?",
                  a: "Writesonic is used across industries like eCommerce, marketing, education, SaaS, finance, and more.",
                },
                {
                  q: "Does Writesonic integrate with other tools?",
                  a: "Currently, Writesonic does not offer native integrations, but content can be exported into various platforms.",
                },
                {
                  q: "Is Writesonic mobile-friendly?",
                  a: "Yes, Writesonic works on mobile browsers, but the experience is better on desktops due to the layout.",
                },
                {
                  q: "Can I use Writesonic for academic writing?",
                  a: "While not tailored for academic citations, it can help draft essays, summaries, and content outlines.",
                },
                {
                  q: "How accurate is the content generated by Writesonic?",
                  a: "The content is creative and fluent, though factual accuracy should be manually reviewed.",
                },
                {
                  q: "Is there a plagiarism checker in Writesonic?",
                  a: "No, Writesonic does not currently include a built-in plagiarism checker.",
                },
                {
                  q: "Does Writesonic offer customer support?",
                  a: "Yes, Writesonic provides support via live chat, email, and an extensive help center.",
                },
                {
                  q: "Can I collaborate with my team on Writesonic?",
                  a: "Yes, team collaboration features are available in the higher pricing tiers.",
                },
                {
                  q: "Can I export Writesonic content to Word or PDF?",
                  a: "Yes, you can copy and paste your content into Word, Google Docs, or export it manually.",
                },
                {
                  q: "Does Writesonic support A/B testing for content?",
                  a: "While not a testing tool, you can generate multiple variations of content for manual A/B testing.",
                },
                {
                  q: "How secure is Writesonic?",
                  a: "Writesonic follows industry-standard security protocols and keeps your content private and encrypted.",
                },
                {
                  q: "What is the refund policy of Writesonic?",
                  a: "Writesonic generally does not offer refunds, but users can cancel anytime to stop recurring charges.",
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
                {/* Writesonic AI Section */}
                <div className="custom-card text-light p-5 text-center">
                  <h3 className="fw-bold mb-4 text-start text-primary">
                    Why Use Writesonic AI?
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
                      <strong>Fast Content Generation:</strong> Writesonic AI
                      produces high-quality content in seconds, helping you save
                      time on writing and editing.
                    </li>
                    <li className="mb-3">
                      <strong>Supports All Content Types:</strong> Whether you
                      need blog posts, ad copy, product descriptions, or social
                      media content—Writesonic covers it all.
                    </li>
                    <li className="mb-3">
                      <strong>SEO Optimization:</strong> Integrated SEO tools
                      help you create content that ranks better by including
                      keyword suggestions and optimized structure.
                    </li>
                    <li className="mb-3">
                      <strong>User-Friendly Interface:</strong> With its
                      intuitive dashboard and over 100 pre-built templates, it’s
                      beginner-friendly and easy to navigate.
                    </li>
                    <li className="mb-3">
                      <strong>Affordable Plans:</strong> Writesonic offers
                      budget-friendly pricing, including a free trial, making it
                      accessible to freelancers, marketers, and teams.
                    </li>
                  </ul>

                  <div className="text-center mt-4">
                    <button className="btn btn-primary btn-sm">
                      Explore Writesonic AI
                    </button>
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
                    <strong>Intuitive Interface:</strong> Easy to use and
                    navigate, even for beginners with no prior writing tool
                    experience.
                  </li>
                  <li className="mb-2">
                    <strong>Wide Variety of Templates:</strong> Access to over
                    100 content templates for blog posts, ads, emails, and more.
                  </li>
                  <li className="mb-2">
                    <strong>Supports Both Long and Short Content:</strong>{" "}
                    Whether it’s a full-length article or short social copy,
                    Writesonic delivers.
                  </li>
                  <li className="mb-2">
                    <strong>Budget-friendly Pricing:</strong> Competitive
                    pricing tiers with a free trial plan to test features before
                    committing.
                  </li>
                  <li className="mb-2">
                    <strong>Strong SEO Features:</strong> Built-in tools for
                    optimizing blog and web content for search engines.
                  </li>
                  <li className="mb-2">
                    <strong>Fast and Creative Outputs:</strong> Generates
                    high-quality drafts in seconds, offering a creative head
                    start.
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
                <h5 className="text-warning text-start mb-4">❌ Cons</h5>
                <ul className="ps-3" style={{ listStyleType: "disc" }}>
                  <li className="mb-2">
                    <strong>Long-form Outputs May Need Refinement:</strong>{" "}
                    While fast, the long-form results sometimes need manual
                    polishing.
                  </li>
                  <li className="mb-2">
                    <strong>Occasional Factual Inaccuracies:</strong> As with
                    many AI writers, fact-checking is essential for accuracy.
                  </li>
                  <li className="mb-2">
                    <strong>API Limited to Premium Users:</strong> API access is
                    only available on the Pro and higher plans.
                  </li>
                  <li className="mb-2">
                    <strong>Limited Offline Support:</strong> The platform
                    requires an internet connection and doesn’t support offline
                    mode.
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
              Alternatives to Writesonic AI
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
                    <strong>Jasper AI</strong> – A leading AI writer with robust
                    tools for long-form content, ad copy, and tone
                    customization.
                  </li>
                  <li className="mb-2">
                    <strong>Copy.ai</strong> – Great for generating short-form
                    marketing content like social media posts, product
                    descriptions, and ad headlines.
                  </li>
                  <li className="mb-2">
                    <strong>ChatGPT (by OpenAI)</strong> – A conversational AI
                    ideal for content brainstorming, rewriting, and creative
                    writing.
                  </li>
                  <li className="mb-2">
                    <strong>Rytr</strong> – A cost-effective writing tool for
                    creating SEO meta tags, email copy, and brief articles.
                  </li>
                  <li className="mb-2">
                    <strong>Grammarly</strong> – Known for grammar checking but
                    also offers AI-enhanced content suggestions and rewriting
                    capabilities.
                  </li>
                  <li className="mb-2">
                    <strong>Anyword</strong> – Focused on performance-based
                    marketing copy with predictive analytics for ad text and
                    email campaigns.
                  </li>
                  <li className="mb-2">
                    <strong>Frase</strong> – Combines content generation with
                    real-time SEO guidance, perfect for blog writers.
                  </li>
                  <li className="mb-2">
                    <strong>Surfer SEO</strong> – Specializes in optimizing
                    articles for search engine ranking with keyword and
                    structure recommendations.
                  </li>
                  <li className="mb-2">
                    <strong>Quillbot</strong> – Excellent for paraphrasing,
                    summarizing, and improving sentence flow in academic or web
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
          className="d-inline-block text-white text-decoration-none ml-3 py-1"
        >
          <i className="bi bi-arrow-left me-2"></i>Back to Directory{" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
          <div className=" row align-item-center mb-4">
            {/* Left side (Text Section) */}
           <div
  className="col-12 col-md-6 order-2 order-md-1 "
  style={{ paddingRight: "30px",}}
>
  <p className="text-primary text-center text-md-start">
    Create stunning visuals effortlessly
  </p>
  <h1 className="text-center text-md-start">Writesonic AI</h1>
  <div className="text-warning mb-2 text-center text-md-start">⭐⭐⭐⭐⭐</div>

  <p className="text-center text-md-start">
    Writesonic is an AI-powered writing assistant designed to help users
    generate high-quality content in seconds. It uses advanced machine
    learning models to create various types of content, including blog
    posts, ad copy, product descriptions, email marketing, SEO-friendly
    articles, and landing pages. The tool aims to save time and enhance
    productivity for creators, marketers, and businesses by automating
    content creation.
  </p>

  <div className="text-center text-md-start">
    <a
      href="https://writesonic.com/seo-ai-agent?utm_campaignid=22272558894&utm_agid=179152461047&utm_source=google&utm_campaign=writesonic_Brand_Search_IN&utm_term=writesonic.com&utm_medium=search&d=c&placement=&network=g&gad_source=1&gad_campaignid=22272558894&gbraid=0AAAAABM1pbmo2t40kafrRwYsKo1DrS5bn&gclid=Cj0KCQjwlrvBBhDnARIsAHEQgORYyXStKzLEOoFOkAooAQ4hJiiz8_IngEC6Rb9SxOp_jOU2RlF7x34aAiCyEALw_wcB"
      rel="noopener noreferrer"
      className="btn btn-primary"
    >
      Explore Tool
    </a>
  </div>
</div>


            {/* Right side (Image Section) */}
           <div className="col-12 col-md-6 order-1 order-md-2 text-center mb-3 mb-md-0">
  <img
    src={writersonicImg}
    style={{
      maxWidth: "100%",
      height: "auto",
    }}
    alt="Responsive"
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
                How to Use Writesonic AI?
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
                      Create Your Account
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Sign up on <strong>Writesonic</strong> using your email or
                      Google account to access the dashboard and start your AI
                      writing journey.
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
                      Choose a Template
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Select from 100+ templates for blog posts, product
                      descriptions, ads, emails, and more—designed to fit your
                      content needs.
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
                      Generate and Refine
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Enter your input, click generate, and instantly receive
                      AI-written content. Edit or regenerate as needed to match
                      your tone and goals.
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

export default Writtersonic;
