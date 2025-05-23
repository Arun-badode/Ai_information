import React, { useState } from "react";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import nightcafeSS1 from '../../../../public/assets/Img/AI from Image/nightcafeSS1.png';
import nightcafeSS2 from '../../../../public/assets/Img/AI from Image/nightcafeSS2.png';


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
const NightCafeAI = () => {
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
                icon: "🎨",
                title: "AI-Powered Art Generation:",
                desc: "Generate stunning, high-quality artwork with AI from text prompts and style customization.",
              },
              {
                icon: "🖼",
                title: "Multiple Art Styles:",
                desc: "Choose from a wide variety of styles, from painting to photography, or create a custom style for your artwork.",
              },
              {
                icon: "🎨",
                title: "Style Transfer:",
                desc: "Apply the unique style of famous artists or visual trends to your own images, creating distinctive new artworks.",
              },
              {
                icon: "🌐",
                title: "Social Sharing:",
                desc: "Easily share your AI-generated art with friends, family, or on social media platforms directly from the app.",
              },
              {
                icon: "⚡",
                title: "Fast Processing:",
                desc: "Generate high-quality artworks quickly with NightCafe's efficient AI processing capabilities.",
              },
              {
                icon: "🔧",
                title: "Customization and Control:",
                desc: "Adjust and fine-tune various settings for more control over your creative process and final results.",
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
                src={nightcafeSS1}
                alt="nightcafe"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={nightcafeSS2}
                alt="nightcafe"
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
                  q: "What is NightCafe?",
                  a: "NightCafe is an AI-powered art generation platform that creates unique artworks using deep learning models. It offers various features, including text-to-image generation, style transfer, and more.",
                },
                {
                  q: "How can I use NightCafe for free?",
                  a: "NightCafe provides free daily credits, allowing users to create a limited number of images each day. For more usage, you can opt for the paid plan.",
                },
                {
                  q: "Is NightCafe easy to use?",
                  a: "Yes, NightCafe has an intuitive interface that makes it accessible to both beginners and advanced users.",
                },
                {
                  q: "Can I create AI art on NightCafe without any experience?",
                  a: "Yes, NightCafe is beginner-friendly, and you don’t need any prior art experience to generate high-quality artwork.",
                },
                {
                  q: "What is the best plan for NightCafe?",
                  a: "The best plan depends on your usage needs. The paid plans offer more features, higher resolution, and unlimited credits.",
                },
                {
                  q: "Does NightCafe offer an app?",
                  a: "As of now, NightCafe is web-based and does not have a mobile app.",
                },
                {
                  q: "How do I register on NightCafe?",
                  a: "Go to the NightCafe website, click on 'Sign Up,' and create an account using your email or a social media profile.",
                },
                {
                  q: "What is the NightCafe pricing model?",
                  a: "NightCafe offers both free and paid plans. The free plan comes with limited credits, while the paid plans offer additional credits, higher resolutions, and more advanced features.",
                },
                {
                  q: "Can I make money selling my NightCafe creations?",
                  a: "Yes, you can sell your AI-generated artwork, and NightCafe allows commercial licensing of the generated art.",
                },
                {
                  q: "How does NightCafe compare to other AI art tools?",
                  a: "NightCafe offers a unique blend of ease of use, flexibility, and affordability, but tools like Deep Dream Generator or DALL-E might offer different features suited for specific needs.",
                },
                {
                  q: "Can I download the images generated on NightCafe?",
                  a: "Yes, you can download the images you create on NightCafe, although higher resolution images may require additional credits or a paid plan.",
                },
                {
                  q: "How do I earn free credits on NightCafe?",
                  a: "NightCafe offers free daily credits, and you can also earn credits by participating in challenges or engaging with the community.",
                },
                {
                  q: "Can NightCafe generate realistic portraits?",
                  a: "Yes, NightCafe can generate realistic portraits based on your prompts, using advanced AI algorithms like StyleGAN.",
                },
                {
                  q: "How do I create an account on NightCafe?",
                  a: "To create an account, visit the NightCafe website, click on 'Sign Up,' and enter your details, or sign up using your social media account.",
                },
                {
                  q: "Can I sell my NightCafe-generated art?",
                  a: "Yes, NightCafe allows users to sell their creations, including digital prints and NFT artwork, with full commercial rights.",
                },
                {
                  q: "Is there a mobile version of NightCafe?",
                  a: "Currently, NightCafe is only available as a web-based platform and does not offer a dedicated mobile app.",
                },
                {
                  q: "What kind of art can I create on NightCafe?",
                  a: "NightCafe allows you to create various types of art, including portraits, landscapes, abstract art, surrealism, fantasy art, and more.",
                },
                {
                  q: "How long does it take to generate an image on NightCafe?",
                  a: "The generation time depends on the complexity and size of the image. Simpler artworks may take minutes, while high-resolution or more complex images might take longer.",
                },
                {
                  q: "Can NightCafe create fantasy or sci-fi art?",
                  a: "Yes, you can generate fantasy or sci-fi art using NightCafe’s versatile AI art generation tools, especially by adjusting prompts and selecting the appropriate style.",
                },
                {
                  q: "How many images can I generate with the free plan?",
                  a: "With the free plan, you get a limited number of credits daily, which allows you to generate several images each day, depending on the style and resolution.",
                },
                {
                  q: "Can I upload my own images to NightCafe?",
                  a: "Yes, NightCafe allows you to upload your own images for style transfer or image-to-image generation.",
                },
                {
                  q: "Can I use NightCafe to create AI-generated NFTs?",
                  a: "Yes, you can create AI-generated artwork on NightCafe and use it to create NFTs or sell your art on NFT marketplaces.",
                },
                {
                  q: "Does NightCafe provide high-resolution images?",
                  a: "Yes, NightCafe offers high-resolution image options, but these typically require a paid plan or credits for download.",
                },
                {
                  q: "Is the AI on NightCafe based on deep learning?",
                  a: "Yes, NightCafe uses deep learning algorithms like VQGAN+CLIP, StyleGAN2, and other neural networks to generate art based on user inputs.",
                },
                {
                  q: "How do I manage my NightCafe credits?",
                  a: "You can view and manage your credits from your account dashboard. Credits are replenished daily for free users, and additional credits can be purchased through the paid plans.",
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
                    Why Use NightCafe?
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
                      Accessibility: NightCafe is easy to use for both beginners
                      and advanced users, making it an ideal choice for anyone
                      looking to explore AI art generation.
                    </li>
                    <li className="mb-3">
                      Creative Freedom: With features like style transfer,
                      text-to-image generation, and image-to-image
                      transformations, NightCafe provides creative flexibility
                      to produce a variety of art forms from abstract to
                      realistic.
                    </li>
                    <li className="mb-3">
                      High-Quality Output: NightCafe uses powerful machine
                      learning models like VQGAN+CLIP and StyleGAN2, ensuring
                      that the art generated is of high quality and visually
                      appealing.
                    </li>
                    <li className="mb-3">
                      Free and Paid Plans: NightCafe offers a free version with
                      limited daily credits and paid plans for those who require
                      more powerful features, access to high-resolution images,
                      and additional credits.
                    </li>
                    <li className="mb-3">
                      Wide Range of Styles: Users can create art in various
                      genres, including fantasy, surrealism, landscapes,
                      portraits, and abstract art, offering endless
                      possibilities for creative expression.
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
                    User-Friendly Interface: The platform is intuitive, with
                    easy navigation for both beginners and experienced artists.
                  </li>
                  <li className="mb-2">
                    Multiple Art Styles and Generation Options: From
                    AI-generated portraits to psychedelic art, NightCafe
                    supports multiple types of art generation. It also allows
                    image and text prompts to create artwork from scratch or
                    transform existing images.
                  </li>
                  <li className="mb-2">
                    Community Engagement: NightCafe features a gallery where
                    users can share their creations and gain inspiration from
                    others.
                  </li>
                  <li className="mb-2">
                    Affordable Plans: NightCafe offers a free version, and the
                    premium plans are competitively priced for users who require
                    additional features and credits.
                  </li>
                  <li className="mb-2">
                    AI Model Flexibility: Users can experiment with different
                    models and styles, making it possible to create unique and
                    diverse art.
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
                    Limited Free Credits: While NightCafe offers a free plan,
                    users are limited in the number of credits they can use per
                    day, which may not be enough for users who wish to create
                    multiple artworks.
                  </li>
                  <li className="mb-2">
                    Processing Time: Depending on the complexity and resolution
                    of the generated art, processing may take some time,
                    especially on free plans.
                  </li>
                  <li className="mb-2">
                    Quality Dependence on Prompt: The quality of AI-generated
                    art highly depends on the input prompts and parameters set
                    by the user, meaning results can vary.
                  </li>
                  <li className="mb-2">
                    No Mobile App (as of now): While there is a web-based
                    platform, NightCafe does not yet offer a dedicated mobile
                    app, which could limit on-the-go use for some users.
                  </li>
                  <li className="mb-2">
                    Limited Customization: While there are several styles and
                    options, advanced customization might be less flexible
                    compared to some other high-end AI art platforms.
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
                    Deep Dream Generator: Another popular AI art tool, Deep
                    Dream Generator uses a neural network to generate
                    psychedelic and surreal art based on simple prompts.
                  </li>
                  <li className="mb-2">
                    MidJourney: Known for its high-quality, stylistic image
                    outputs, MidJourney is a competitive alternative for those
                    looking to generate artistic imagery from prompts.
                  </li>
                  <li className="mb-2">
                    DALL-E: Created by OpenAI, DALL-E is an advanced AI that
                    generates images from text descriptions, similar to
                    NightCafe but with its own unique artistic styles and
                    capabilities.
                  </li>
                  <li className="mb-2">
                    Artbreeder: A tool that allows users to mix and evolve
                    images using genetic algorithms, offering more control over
                    the creation process.
                  </li>
                  <li className="mb-2">
                    Runway ML: A robust AI platform with various creative tools,
                    including image generation, video editing, and real-time
                    collaboration.
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
         <div className="row align-items-center justify-content-between mb-4">
  {/* Left side (Text Section) */}
  <div className="col-lg-6 col-md-12 mb-4 mb-lg-0 pe-lg-4">
    <p className="text-primary">Write better, faster</p>
    <h1>NightCafe Creator AI</h1>
    <div className="text-warning mb-2">⭐⭐⭐⭐⭐</div>

    <p>
      NightCafe is an AI-powered art generation tool that leverages advanced neural
      networks to create stunning visual artworks from simple text prompts or images.
      It allows users to transform their ideas into unique, artistic images by using
      deep learning models and algorithms such as StyleGAN and VQGAN. Whether you're
      a beginner, digital artist, or a seasoned professional, NightCafe provides a
      versatile platform to experiment with AI-based art creation.
    </p>
    <p>
      NightCafe offers several options, including generating artwork from text
      descriptions, using existing images for style transfer, and more. The platform
      features easy-to-use tools for creating digital portraits, landscapes, abstract
      art, and fantasy illustrations.
    </p>

    <div className="mb-3">
      <a
        href="https://creator.nightcafe.studio/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary me-2"
      >
        Explore Tool
      </a>
    </div>
  </div>

  {/* Right side (Image Section) */}
  <div className="col-lg-6 col-md-12 text-center">
    <img
      src="https://i.postimg.cc/NFzTVkZm/nightcafe-example.jpg"
      alt="NightCafe Artwork"
      className="img-fluid"
      style={{ maxHeight: "300px", objectFit: "contain" }}
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
                How to Use NightCafe?
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
                      Sign Up/Log In
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Visit the NightCafe website and create an account using
                      your email or social media accounts. If you're returning,
                      simply log in.
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
                      Choose a Creation Method:
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Text-to-Image Generation: Enter a text prompt, and
                      NightCafe will generate an artwork based on the
                      description. Image-to-Image Generation: Upload your own
                      image and transform it using one of the artistic styles
                      offered. Style Transfer: You can apply the style of famous
                      artists to your image using NightCafe’s style transfer
                      model.
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
                      Select Style and Parameters:
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Choose from various artistic styles such as Surrealism,
                      Abstract, Fantasy, etc. Customize the image's resolution,
                      style strength, and more.
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

export default NightCafeAI;
