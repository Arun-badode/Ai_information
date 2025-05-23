import React, { useState } from "react";
import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import dreambywomboSS1 from '../../../../public/assets/Img/AI from Image/dreambywomboSS1.png';
import dreambywomboSS2 from '../../../../public/assets/Img/AI from Image/dreambywomboSS2.png';


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
const DreambyWombo = () => {
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
                title: "Multiple Art Styles:",
                desc: "Choose from presets like surreal, cartoon, fantasy, anime, and more.",
              },
              {
                icon: "🖼",
                title: "Customization Options:",
                desc: "Adjust the color palette, detail level, and other settings to personalize your creations.",
              },
              {
                icon: "⚡",
                title: "Ease of Use:",
                desc: "A simple interface that doesn't require advanced knowledge of digital art, making it accessible to everyone.",
              },
              {
                icon: "🌐",
                title: "Text-to-Image Capabilities:",
                desc: "Create realistic, artistic, or even abstract visuals with just a few words. You can also create 3D art and fantasy-themed designs based on prompts.",
              },
              {
                icon: "🎨",
                title: "Fantasy Art:",
                desc: "Generate mythological or imaginative scenes, bringing your fantasy ideas to life.",
              },
              {
                icon: "🖌",
                title: "Cartoon Art:",
                desc: "Create whimsical, colorful characters and scenes inspired by cartoon-style visuals.",
              },
              {
                icon: "🌀",
                title: "Abstract Art:",
                desc: "Generate surreal and abstract visuals that challenge traditional art perspectives.",
              },
              {
                icon: "🌈",
                title: "Surreal Art:",
                desc: "Create dream-like, abstract images that push the boundaries of reality.",
              },
              {
                icon: "👾",
                title: "Anime Style:",
                desc: "Produce anime-inspired artwork effortlessly with predefined settings for style and tone.",
              },
              {
                icon: "🎨",
                title: "Painting Styles:",
                desc: "Choose from a variety of painting styles like Impressionism, Cyberpunk, and Retro design to match your artistic vision.",
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
                src={dreambywomboSS1}
                alt="dreambywombo"
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src={dreambywomboSS2}
                alt="dreambywombo"
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
                  q: "What is Dream by Wombo?",
                  a: "Dream by Wombo is a powerful AI art generator that turns text prompts into stunning artworks using neural networks and deep learning.",
                },
                {
                  q: "Who created Dream by Wombo?",
                  a: "It was developed by Wombo Studios, a Canadian AI company known for creating accessible and creative AI applications.",
                },
                {
                  q: "Is Dream by Wombo an AI?",
                  a: "Yes, it uses artificial intelligence, particularly a form of generative neural networks, to produce digital artworks.",
                },
                {
                  q: "How does Dream by Wombo work?",
                  a: "It converts written text prompts into visual art using deep learning models trained on millions of images and styles.",
                },
                {
                  q: "What platforms is Dream by Wombo available on?",
                  a: "Dream is available as a mobile app for Android and iOS, and as a web application on wombo.art.",
                },

                {
                  q: "What art styles does Dream by Wombo support?",
                  a: "It includes fantasy, anime, cartoon, 3D, surreal, cyberpunk, oil painting, and many more styles.",
                },
                {
                  q: "Can I mix art styles in Dream by Wombo?",
                  a: "Yes, you can experiment with prompt wording and style combinations to mix aesthetics.",
                },
                {
                  q: "Does Dream by Wombo create 3D images?",
                  a: "While it doesn’t generate 3D models, it offers 3D-like effects and rendering options in certain styles.",
                },
                {
                  q: "What is Dream by Wombo’s fantasy art style?",
                  a: "It creates imaginative worlds, characters, and magical scenes with a vivid, dreamlike aesthetic.",
                },
                {
                  q: "Can I create anime-style art with Dream?",
                  a: "Yes, simply select the anime style in the app before generating your artwork.",
                },

                {
                  q: "What are text prompts in Dream by Wombo?",
                  a: "These are short descriptions or sentences that the AI uses as the foundation for generating artwork.",
                },
                {
                  q: "How do I write better prompts for Dream?",
                  a: "Use detailed, descriptive language and include style or mood keywords for more accurate results.",
                },
                {
                  q: "Can I use famous artists in prompts?",
                  a: "Yes, phrases like “in the style of Van Gogh” can help guide the output (use responsibly for fair use).",
                },
                {
                  q: "Are there any prompt limits?",
                  a: "There’s no word limit, but overly long prompts may reduce clarity. Aim for concise and descriptive.",
                },
                {
                  q: "Where can I get ideas for prompts?",
                  a: "The app offers suggestions, and you can find inspiration on Reddit, Discord, or prompt databases.",
                },

                {
                  q: "How do I use Dream by Wombo?",
                  a: "Simply open the app or website, type your prompt, select a style, and hit 'Create.'",
                },
                {
                  q: "Is there a tutorial for Dream by Wombo?",
                  a: "Yes, a basic tutorial is built into the app, and many YouTubers offer detailed guides.",
                },
                {
                  q: "Can beginners use Dream easily?",
                  a: "Absolutely. It’s known for being user-friendly and requires no design or technical experience.",
                },
                {
                  q: "Can I use Dream by Wombo on desktop?",
                  a: "Yes, visit wombo.art to use it online without downloading.",
                },
                {
                  q: "How long does it take to generate an image?",
                  a: "Usually between 5 to 20 seconds, depending on the complexity of the prompt and internet speed.",
                },

                {
                  q: "Can I download my creations?",
                  a: "Yes, after generating, you can download the artwork in HD to your device.",
                },
                {
                  q: "Is there a watermark on free downloads?",
                  a: "Free users may see a small watermark; premium users get watermark-free images.",
                },
                {
                  q: "Can I share Dream by Wombo art?",
                  a: "Yes, the app lets you share directly to social platforms or download for custom sharing.",
                },
                {
                  q: "Can I print Dream art?",
                  a: "Yes! Many users print AI artworks as posters, gifts, or even on merchandise.",
                },
                {
                  q: "Does Dream by Wombo store my images?",
                  a: "If logged in, yes. If not, the images may be lost once the session ends.",
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
                        data-bs-target={`#collapse${item.id}``}
                        aria-expanded={i === 0 ? "true" : "false"}
                        aria-controls={collapse${item.id}`}
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
                    Why Use Dream by Wombo?
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
                      Accessibility: Dream by Wombo is extremely user-friendly,
                      making it easy for beginners and advanced users alike to
                      generate AI art with minimal effort.
                    </li>
                    <li className="mb-3">
                      Creative Freedom: With a wide variety of art styles
                      including fantasy, surrealism, and anime, Dream by Wombo
                      offers users the ability to generate diverse and
                      imaginative artworks directly from text prompts.
                    </li>
                    <li className="mb-3">
                      High-Quality Output: Dream by Wombo produces high-quality
                      images with vibrant colors and intricate details, thanks
                      to its advanced AI models.
                    </li>
                    <li className="mb-3">
                      Free and Paid Plans: Dream by Wombo offers a free plan
                      with limited features and a premium plan for users who
                      need additional credits, higher-resolution images, and
                      more customization options.
                    </li>
                    <li className="mb-3">
                      Wide Range of Styles: Dream by Wombo supports a wide array
                      of art styles such as fantasy art, cartoon art,
                      surrealism, and anime, allowing users to explore various
                      visual aesthetics and create unique art.
                    </li>
                    <li className="mb-3">
                      Why Use Dream by Wombo?: Dream by Wombo is a versatile and
                      accessible AI art generator that allows anyone to create
                      stunning artwork in just a few simple steps. Whether
                      you're looking to generate fantasy scenes, anime
                      characters, or surreal images, Dream provides an
                      easy-to-use platform that gives you creative freedom with
                      no artistic experience required.
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
                    User-Friendly Interface: Dream by Wombo is incredibly easy
                    to use, with a simple interface that makes generating
                    artwork accessible to everyone, even those with no prior
                    experience in art or design.
                  </li>
                  <li className="mb-2">
                    Multiple Art Styles and Generation Options: Dream by Wombo
                    offers a variety of art styles, from surrealism and fantasy
                    art to anime and cartoon. Users can create artwork from
                    scratch using text prompts or transform existing images into
                    something new.
                  </li>
                  <li className="mb-2">
                    Creative Freedom: Dream by Wombo allows you to experiment
                    with different combinations of prompts and styles, offering
                    endless possibilities to generate truly unique artworks.
                  </li>
                  <li className="mb-2">
                    Fast Generation: Dream by Wombo generates high-quality
                    artwork quickly, typically in a matter of seconds, which is
                    ideal for users looking for quick creative results.
                  </li>
                  <li className="mb-2">
                    Free and Paid Options: Dream by Wombo offers a free version
                    with limited features, and the premium plan gives users
                    access to higher-quality images, additional features, and
                    more customization options.
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
                    Limited Free Features: While Dream by Wombo offers a free
                    version, it comes with limitations such as lower resolution
                    and fewer style options compared to the premium version.
                  </li>
                  <li className="mb-2">
                    Processing Time: Depending on the complexity of the prompt
                    and server load, generating art can take a few seconds to
                    several minutes.
                  </li>
                  <li className="mb-2">
                    Quality Dependence on Prompt: The quality of AI-generated
                    art highly depends on the input prompts. Vague or unclear
                    prompts may lead to less desirable results.
                  </li>
                  <li className="mb-2">
                    No Advanced Customization: While Dream by Wombo offers
                    various styles, it lacks some of the advanced customization
                    options available in other AI art platforms.
                  </li>
                  <li className="mb-2">
                    Limited Features for Free Users: Free users have limited
                    access to certain features, such as higher resolution
                    downloads, and might see watermarks on their images.
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
                    generates images from text descriptions, offering unique
                    artistic styles and capabilities compared to Dream by Wombo.
                  </li>
                  <li className="mb-2">
                    Artbreeder: A tool that allows users to mix and evolve
                    images using genetic algorithms, offering more control over
                    the creation process and enabling more personalized
                    artworks.
                  </li>
                  <li className="mb-2">
                    Runway ML: A robust AI platform with various creative tools,
                    including image generation, video editing, and real-time
                    collaboration, making it suitable for complex projects
                    beyond basic art creation.
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
              <p className="text-primary">Write better, faster</p>
              <h1>
                Dream by Wombo{" "}
              </h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                Dream by Wombo is an AI-powered art generator that allows users
                to create stunning artworks simply by providing a text prompt.
                This revolutionary tool uses advanced deep learning algorithms
                to turn text descriptions into visually striking images. Whether
                you are an artist, content creator, or just someone looking to
                explore the potential of AI in the world of art, Dream by Wombo
                offers an easy and fun way to create digital artwork.
              </p>

             <div className="mb-3">
                <a
                  href="https://dream.ai/metamask"
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
                How to Use Dream by Wombo?
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
                      Enter a text prompt
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      into the input box.
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
                      Hit generate
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      generate and let the AI create your artwork.
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
                      Download or share
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      your image once it’s ready.
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

export default DreambyWombo;
