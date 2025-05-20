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
const ArtbreederAI = () => {
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
                icon: "🖌",
                title: "Genetic Image Creation:",
                desc: "Combine and evolve images using AI-powered genetic algorithms to create unique art pieces.",
              },
              {
                icon: "🔬",
                title: "Customizable Art Styles:",
                desc: "Adjust and blend various art styles to create your own artistic vision with full control.",
              },
              {
                icon: "🖼",
                title: "High-Resolution Image Generation:",
                desc: "Generate detailed and high-resolution artwork for professional use or prints.",
              },
              {
                icon: "🌐",
                title: "Collaborative Community:",
                desc: "Collaborate with other artists and share your creations within the Artbreeder community.",
              },
              {
                icon: "⚙",
                title: "Fine-Tuning Parameters:",
                desc: "Modify specific parameters to control the evolution and blending of images for personalized outputs.",
              },
              {
                icon: "🚀",
                title: "Real-Time Image Evolution:",
                desc: "Watch images evolve in real-time as you make adjustments and explore endless possibilities.",
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
                  q: "What should I do if I want to sell an Artbreeder image commercially?",
                  a: "Ensure that you have the appropriate rights and licenses for the image, especially if it includes elements that you did not create yourself.",
                },
                {
                  q: "Are Artbreeder images royalty-free for commercial use?",
                  a: "Artbreeder provides images under a license that allows commercial use with some limitations. Be sure to check the specific licensing terms for each image.",
                },
                {
                  q: "Can I use Artbreeder images for book illustrations?",
                  a: "Yes, Artbreeder images can be used for book illustrations, provided you have the proper licensing and the images fit within the scope of your project.",
                },
                {
                  q: "What is Artbreeder?",
                  a: "Artbreeder is an AI-based platform that allows users to create and edit images by blending and evolving them using machine learning. It uses Generative Adversarial Networks (GANs) to facilitate the creation of various types of art, from portraits to landscapes.",
                },
                {
                  q: "How does Artbreeder work?",
                  a: "Artbreeder works by using GANs to 'breed' images by mixing different attributes. Users can manipulate genes, layers, and styles to evolve images. Artbreeder takes an existing image and allows you to adjust various aspects (such as age, gender, or facial features) to generate new images based on those alterations.",
                },
                {
                  q: "Is Artbreeder free?",
                  a: "Yes, Artbreeder offers free access with some restrictions. Users can create a limited number of images and access lower-quality downloads without paying. Paid plans allow for higher-resolution downloads, more creations, and access to additional features.",
                },
                {
                  q: "Do I need to download software to use Artbreeder?",
                  a: "No, Artbreeder is a web-based platform, so you don’t need to download any software. You can access it through your browser.",
                },
                {
                  q: "How do I sign up for Artbreeder?",
                  a: "You can sign up for Artbreeder by visiting their website and clicking on the 'Sign Up' button. You can register using your email or log in through Google or Facebook.",
                },
                {
                  q: "Can I use Artbreeder without creating an account?",
                  a: "You can browse and view some artworks on Artbreeder without an account, but to create or save images, you will need to sign up for a free or paid account.",
                },
                {
                  q: "How do I log into Artbreeder?",
                  a: "To log into Artbreeder, click on the 'Log In' button at the top right corner of the website. You can log in using your email or third-party accounts like Google or Facebook.",
                },
                {
                  q: "Is Artbreeder available on mobile devices?",
                  a: "Artbreeder is accessible through mobile browsers, but there is no dedicated mobile app. The website is responsive and works well on mobile, though a desktop might be better for full functionality.",
                },
                {
                  q: "How do I reset my password on Artbreeder?",
                  a: "To reset your password, go to the login page and click on 'Forgot Password?' Enter your registered email address, and you’ll receive instructions to reset your password.",
                },
                {
                  q: "Does Artbreeder offer a mobile app?",
                  a: "No, as of now, Artbreeder does not have a dedicated mobile app. It is entirely web-based.",
                },
                {
                  q: "What are the categories available in Artbreeder?",
                  a: "Artbreeder allows you to create portraits, landscapes, anime, and other custom art. These categories can be explored through the platform’s features and tools.",
                },
                {
                  q: "Can I create both realistic and fantasy art on Artbreeder?",
                  a: "Yes, Artbreeder supports the creation of both realistic portraits and fantasy or abstract art. You can adjust parameters to mix styles and create unique results.",
                },
                {
                  q: "Can I create anime characters on Artbreeder?",
                  a: "Yes, Artbreeder offers specific features and models for generating anime characters. The platform allows users to generate and customize anime-style characters using its tools.",
                },
                {
                  q: "How do I start a new creation on Artbreeder?",
                  a: "After logging in, click on the 'Create' button to begin. You can start with a random image or one of your previous creations to modify.",
                },
                {
                  q: "What is the 'Splicer' feature in Artbreeder?",
                  a: "The 'Splicer' is a tool in Artbreeder that lets you mix two or more images together. You can control how much influence each image has over the final result.",
                },
                {
                  q: "How do I use the 'Remix' feature on Artbreeder?",
                  a: "The 'Remix' feature allows you to take an existing image and make adjustments to it, such as changing features or blending different elements. This is useful for iterating and exploring new versions of an image.",
                },
                {
                  q: "Can I upload my own images to Artbreeder?",
                  a: "Yes, you can upload your own images to Artbreeder, but there are size and format restrictions. Once uploaded, you can edit the image by adjusting the 'genes' or attributes.",
                },
                {
                  q: "Can I share my Artbreeder creations with others?",
                  a: "Yes, Artbreeder allows you to share your creations publicly or with specific users via direct links or by embedding them on websites.",
                },
                {
                  q: "How do I save an image I created on Artbreeder?",
                  a: "You can save your work by creating an account. Once logged in, you can store your creations in your Artbreeder gallery.",
                },
                {
                  q: "Can I download high-resolution images from Artbreeder?",
                  a: "Yes, you can download high-resolution images, but this requires a premium subscription. Free users have access to lower-resolution downloads.",
                },
                {
                  q: "Is Artbreeder free to use?",
                  a: "Artbreeder offers both free and premium versions. The free version comes with limited features, while the premium version offers more advanced tools, higher resolution downloads, and priority support.",
                },
                {
                  q: "What are the different Artbreeder pricing plans?",
                  a: "Artbreeder offers a tiered pricing model, including a free plan and premium plans that range from basic to pro, offering different levels of access to features, image resolution, and storage.",
                },
                {
                  q: "What does the 'Creator' plan offer?",
                  a: "The 'Creator' plan includes unlimited creations, high-resolution downloads, and access to advanced editing features. It’s ideal for professional use.",
                },
                {
                  q: "Can I get a refund for my Artbreeder subscription?",
                  a: "Artbreeder offers refunds within a limited time frame based on their terms and conditions. You should contact customer support for any refund requests.",
                },
                {
                  q: "How do I upgrade my Artbreeder account?",
                  a: "To upgrade, visit your account settings and select the plan you want to switch to. You will be prompted to provide payment details.",
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
                    Why Use Artbreeder?
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
                      Unlimited Creativity: Users can create endless variations
                      of images by manipulating the gene sliders. Whether you're
                      creating portraits, landscapes, or surreal art, you can
                      push the boundaries of traditional creativity.
                    </li>
                    <li className="mb-3">
                      AI-Powered: Unlike traditional drawing or photo editing,
                      Artbreeder uses deep learning to "imagine" and generate
                      images. This means you can generate highly detailed and
                      unique creations without having advanced artistic skills.
                    </li>
                    <li className="mb-3">
                      Collaboration: Artbreeder encourages collaboration. Users
                      can remix each other's images, making it a
                      community-driven tool. This social aspect creates an
                      engaging and supportive space for creators.
                    </li>
                    <li className="mb-3">
                      Commercial Use: Artbreeder provides a CC0 license for all
                      of its images, meaning you can use and even sell your
                      generated artwork commercially. This makes it an excellent
                      resource for creators and small businesses.
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
                    Versatility: Artbreeder supports a wide variety of art
                    genres, from hyper-realistic portraits to abstract and
                    surreal landscapes. The platform’s versatility makes it
                    useful for different creators, such as:
                    <ul>
                      <li>
                        Artists looking to generate inspiration or backgrounds.
                      </li>
                      <li>
                        Game developers needing characters or environments.
                      </li>
                      <li>Writers visualizing book covers or characters.</li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    High-Quality Outputs: Images generated on Artbreeder are
                    often of high quality, suitable for various applications,
                    from concept art to final illustrations. The platform
                    provides users with tools to adjust resolution and save
                    images in formats like PNG or JPEG.
                  </li>
                  <li className="mb-2">
                    Ease of Use: Artbreeder’s interface is user-friendly, even
                    for beginners. The platform simplifies the often complex
                    task of image generation, allowing anyone with little
                    technical knowledge to create professional-quality artwork.
                  </li>
                  <li className="mb-2">
                    No Drawing Skills Needed: One of the biggest benefits of
                    Artbreeder is that it allows you to create professional
                    artwork without needing any drawing or painting skills. The
                    AI does the heavy lifting, enabling anyone to produce
                    beautiful images.
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
                    Limited Free Features: While Artbreeder is free to use, the
                    free version has limitations:
                    <ul>
                      <li>Limited number of downloads per month.</li>
                      <li>Lower resolution images.</li>
                      <li>
                        Some features and tools (like high-resolution downloads)
                        are locked behind paid plans.
                      </li>
                    </ul>
                  </li>
                  <li className="mb-2">
                    Learning Curve: Although Artbreeder is relatively easy to
                    use, mastering the intricacies of gene manipulation can take
                    time. Understanding how different sliders and parameters
                    affect the image requires experimentation.
                  </li>
                  <li className="mb-2">
                    Requires Internet Connection: Artbreeder is an online tool,
                    meaning it requires a stable internet connection to access
                    and use. This can be a limitation for those who prefer
                    offline creative software.
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
                    Midjourney: An AI-based tool that generates images from
                    natural language prompts. It’s known for producing highly
                    imaginative and detailed artworks, similar to Artbreeder's
                    offerings, but focused more on text-to-image generation.
                  </li>
                  <li className="mb-2">
                    DALL·E 2: DALL·E, developed by OpenAI, generates images
                    based on textual descriptions. Unlike Artbreeder, it doesn’t
                    require user-driven input like gene mixing but instead uses
                    machine learning to create images directly from text
                    prompts.
                  </li>
                  <li className="mb-2">
                    Stable Diffusion: An open-source AI model that allows users
                    to create detailed images from text. It gives users more
                    control over their creations and is commonly used for deep
                    learning and fine-tuning.
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
         <div className="row align-items-center g-4 mb-4">
  {/* Left side (Text Section) */}
  <div className="col-lg-6 col-12 order-lg-1 order-2 pe-lg-4">
    <p className="text-primary mb-2">Write better, faster</p>
    <h1 className="mb-3">Artbreeder: The Complete AI Art Breeding Guide</h1>
    <div className="text-warning mb-3">⭐⭐⭐⭐⭐</div>
    <p className="mb-3">
      Artbreeder is an innovative platform that uses AI and machine
      learning to facilitate the creation of art. By blending and
      modifying images using a genetic algorithm, users can generate
      new and unique artworks. The platform operates based on the
      StyleGAN architecture (from NVIDIA), allowing users to alter
      images by manipulating "genes." These genes represent various
      traits or attributes of the image (e.g., color, shape, texture).
      The result is the creation of entirely new images with highly
      personalized elements.
    </p>
    <p className="mb-4">
      Artbreeder democratizes image creation, making it accessible to artists, 
      designers, writers, and anyone looking to create something visually 
      appealing with little technical expertise. By manipulating visual DNA, 
      it offers a playground for those looking to create art, especially in 
      the genres of portraiture, fantasy, anime, and landscapes.
    </p>

    <div className="mb-3">
      <a
        href="https://www.artbreeder.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-lg px-4"
      >
        Explore Tool
      </a>
    </div>
  </div>

  {/* Right side (Image Section) */}
  <div className="col-lg-6 col-12 order-lg-2 order-1 text-center">
    <img
      src="https://www.artbreeder.com/static/images/artbreeder-collage.jpg"
      alt="Artbreeder AI Art Examples"
      className="img-fluid rounded shadow-lg"
      style={{
        maxHeight: "400px",
        width: "auto",
        objectFit: "cover"
      }}
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
                How to Use Artbreeder?
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
                      To begin creating with Artbreeder, visit the Artbreeder
                      website and sign up for a free account or log in if you
                      already have one. The platform allows users to explore
                      various categories, including portraits, landscapes,
                      anime, and other creative assets.
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
                      Choose a Category
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Artbreeder offers multiple categories to cater to
                      different types of artists and creators: Portraits: Create
                      realistic or fantasy portraits, adjusting features like
                      age, gender, ethnicity, and more. Landscapes: Generate
                      breathtaking landscapes by mixing genes and controlling
                      the visual elements of nature like mountains, water, and
                      skies. Anime: A popular category for creating unique anime
                      characters and scenes. Other Categories: Fantasy, abstract
                      art, and various creative visualizations.
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
                      Save and Share
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Once you are satisfied with your creation, you can save it
                      to your profile and share it with others. Artbreeder
                      allows you to export high-resolution images for personal
                      or commercial use. If you’re using a paid plan, you can
                      download images in higher resolutions.
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

export default ArtbreederAI;
