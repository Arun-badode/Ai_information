import React, { useState } from "react";

import "../../ImageMindAI.css"; // <-- custom CSS file import
import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";

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
const MidJourney = () => {
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
                Create Studio-Quality Videos & Art with MidJourney AI
              </p>
              <h3 className=""> Diverse AI Avatars, Image & Video Generation, and Multilingual Support</h3>
            </div>
            {[
              {
                icon: "🖼",
                title: "Text-to-Image & Video Generation with MidJourney AI",
                desc: "Transform your words into entire video clips or detailed images with MidJourney AI. Simply describe your vision and let the AI generate cinematic video or artwork.",
              },
              {
                icon: "🎨",
                title: "Image-to-Video Conversion with MidJourney AI",
                desc: "Upload a single image and watch it come to life with motion. MidJourney AI adds depth and creativity, turning still images into vibrant, dynamic animations.",
              },
              {
                icon: "✏",
                title: "Cinematic Motion & VFX with MidJourney AI",
                desc: "Enhance your video with stunning transitions, realistic camera movements, and visual effects. MidJourney AI elevates your content with intricate artistic style and visual sophistication.",
              },
              {
                icon: "📦",
                title: "AI-Powered Storyboarding with MidJourney AI",
                desc: "Plan your scenes with precision and consistency. MidJourney AI helps generate storyboards with artistic visuals and intelligent transitions for seamless storytelling.",
              },
              {
                icon: "⚙",
                title: "Multi-format Export with MidJourney AI",
                desc: "Supports various formats like MP4, MOV, and social media-optimized outputs. MidJourney AI ensures your content retains its high quality across multiple platforms and formats.",
              },
              {
                icon: "📦",
                title: "Automatic Captions & Subtitles with MidJourney AI",
                desc: "MidJourney AI automatically generates captions and subtitles for your video or artwork, improving accessibility and viewer engagement with seamless integration.",
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
      
      case "FAQs":
        return (
          <div className="faq-section container py-4">
            <h3 className="text-center text-white mb-4 text-primary">
              Frequently Asked Questions
            </h3>

            <div className="accordion" id="faqAccordion">
              {[
                {
                  q: "What is MidJourney AI?",
                  a: "MidJourney AI is a powerful artificial intelligence tool that generates high-quality images, videos, and animations based on text descriptions, transforming your ideas into creative visual content.",
                },
                {
                  q: "How does MidJourney AI work?",
                  a: "MidJourney AI uses deep learning models, particularly transformer-based networks, to interpret textual input and convert it into realistic visual representations, including images, animations, and videos.",
                },
                {
                  q: "What makes MidJourney AI unique?",
                  a: "MidJourney AI is known for its ability to generate highly detailed, photorealistic images and videos with a wide variety of artistic styles, from realism to surrealism, and its ease of use for both beginners and professionals.",
                },
                {
                  q: "Who can use MidJourney AI?",
                  a: "MidJourney AI is designed for creators, artists, filmmakers, marketers, game designers, and anyone interested in producing unique visual content. Its intuitive interface makes it accessible to both beginners and experienced users.",
                },
                {
                  q: "What are the key features of MidJourney AI?",
                  a: "Key features include text-to-image generation, text-to-video conversion, support for multi-format exports, cinematic quality visuals, VFX and motion effects, and an easy-to-use interface with customization options.",
                },
                {
                  q: "Can I generate videos with MidJourney AI?",
                  a: "Yes, MidJourney AI allows you to create dynamic videos from text prompts, incorporating animations, camera movements, transitions, and visual effects.",
                },
                {
                  q: "Does MidJourney AI support text-to-image generation?",
                  a: "Yes, MidJourney AI excels at generating high-quality images from textual descriptions, making it a great tool for artists, designers, and creative professionals.",
                },
                {
                  q: "Is MidJourney AI free to use?",
                  a: "MidJourney AI offers a free plan with basic features. For more advanced capabilities and higher-quality outputs, users need to subscribe to one of the premium plans.",
                },
                {
                  q: "What pricing plans does MidJourney AI offer?",
                  a: "MidJourney AI provides a range of pricing plans, starting with a free version and offering several paid tiers that provide access to more advanced features, higher quality outputs, and faster rendering speeds.",
                },
                {
                  q: "Can I use MidJourney AI for commercial projects?",
                  a: "Yes, you can use the generated content from MidJourney AI for commercial purposes, but you should check the platform’s terms of service for licensing details related to your subscription plan.",
                },
                {
                  q: "Does MidJourney AI offer templates?",
                  a: "Yes, MidJourney AI includes a variety of templates for quick generation of content such as images, promotional videos, and animations, tailored to specific use cases.",
                },
                {
                  q: "How is the video quality in MidJourney AI?",
                  a: "The videos generated by MidJourney AI are of high quality, with cinematic-level visuals, realistic lighting, motion effects, and smooth transitions, suitable for professional projects.",
                },
                {
                  q: "Can MidJourney AI be used for YouTube content?",
                  a: "Yes, MidJourney AI is perfect for creating unique intros, explainer videos, and other YouTube content, enhancing your video library with stunning AI-generated visuals.",
                },
                {
                  q: "Is MidJourney AI available on mobile devices?",
                  a: "MidJourney AI is currently optimized for desktop use, but mobile compatibility is being actively developed to cater to on-the-go creators.",
                },
                {
                  q: "What platforms can integrate with MidJourney AI?",
                  a: "MidJourney AI can be integrated with a variety of creative platforms, including Adobe Premiere Pro, Final Cut Pro, Canva, and social media platforms like Instagram and TikTok.",
                },
                {
                  q: "Can I add audio or voiceovers in MidJourney AI?",
                  a: "Yes, MidJourney AI supports adding audio, including voiceovers, background music, and sound effects, to enhance the visual content you generate.",
                },
                {
                  q: "Is MidJourney AI suitable for creating short films?",
                  a: "Absolutely! MidJourney AI can generate entire scenes for short films, offering flexibility in style, motion effects, and cinematic quality.",
                },
                {
                  q: "Can educators use MidJourney AI?",
                  a: "Yes, educators can leverage MidJourney AI to create engaging instructional videos, animated lectures, and other educational content that brings lessons to life.",
                },
                {
                  q: "Does MidJourney AI support image-to-video generation?",
                  a: "Yes, you can upload reference images to MidJourney AI, and it will create dynamic videos, adding motion and effects to the still images.",
                },
                {
                  q: "How fast is MidJourney AI?",
                  a: "MidJourney AI is fast and can generate content in a matter of minutes, depending on the complexity of the input and desired output length.",
                },
                {
                  q: "What video formats does MidJourney AI support?",
                  a: "MidJourney AI supports various formats, including MP4, MOV, and social media-friendly formats for platforms like Instagram, TikTok, and YouTube.",
                },
                {
                  q: "Does MidJourney AI include a video editing feature?",
                  a: "Yes, MidJourney AI has a built-in editor that allows you to fine-tune generated videos, including adding transitions, visual effects, and text overlays.",
                },
                {
                  q: "Can MidJourney AI handle video ads?",
                  a: "Yes, MidJourney AI is an excellent tool for creating video ads with customizable templates and high-quality visuals that can engage and captivate your audience.",
                },
                {
                  q: "Does MidJourney AI offer collaboration features?",
                  a: "Yes, MidJourney AI allows for real-time collaboration, enabling multiple users to work together on the same project and share resources efficiently.",
                },
                {
                  q: "Is MidJourney AI suitable for social media content creation?",
                  a: "Definitely. MidJourney AI is optimized for quick content creation and can generate images, videos, and animations specifically tailored for social media platforms.",
                },
                {
                  q: "How does MidJourney AI compare to other AI art generators?",
                  a: "MidJourney AI stands out due to its ability to generate highly detailed and customizable visual content with cinematic effects and motion, making it a preferred choice for creative professionals.",
                },
                {
                  q: "Can MidJourney AI create 3D visuals?",
                  a: "While MidJourney AI is primarily focused on 2D imagery and video, it can create depth and perspective effects that mimic 3D visuals.",
                },
                {
                  q: "What industries use MidJourney AI?",
                  a: "MidJourney AI is used across a variety of industries, including film production, marketing, gaming, advertising, e-learning, and content creation, to produce visually striking content.",
                },
                {
                  q: "Does MidJourney AI support green screen effects?",
                  a: "Yes, MidJourney AI supports green screen effects, enabling you to replace backgrounds or create special effects with ease.",
                },
                {
                  q: "Is there a tutorial for using MidJourney AI?",
                  a: "Yes, MidJourney AI offers tutorials and guides to help you get started and maximize the platform’s capabilities, making it easy for new users to dive in.",
                },
                {
                  q: "Can MidJourney AI create animated videos?",
                  a: "Yes, MidJourney AI is capable of creating both realistic and stylized animated videos, from short clips to full-length projects.",
                },
                {
                  q: "Does MidJourney AI support motion graphics?",
                  a: "Yes, MidJourney AI includes motion graphics tools, allowing you to add dynamic visuals, text animations, and other creative effects to your videos.",
                },
                {
                  q: "Is MidJourney AI compatible with other AI tools?",
                  a: "Yes, MidJourney AI supports integration with other creative tools like Adobe Photoshop, Illustrator, and video editing software to streamline the content creation process.",
                },
                {
                  q: "Can MidJourney AI create high-definition videos?",
                  a: "Yes, MidJourney AI supports high-definition video output, including 4K resolutions, delivering top-tier quality for professional-grade projects.",
                },
                {
                  q: "Does MidJourney AI offer continuous AI improvements?",
                  a: "Yes, MidJourney AI frequently updates its AI models to enhance video generation capabilities, realism, and user experience, ensuring better results over time.",
                },
                {
                  q: "Can MidJourney AI be used for video production automation?",
                  a: "Yes, MidJourney AI automates aspects of video production, such as scene generation, animation, and rendering, allowing creators to focus on the creative process.",
                },
                {
                  q: "Does MidJourney AI support multi-language content creation?",
                  a: "Yes, MidJourney AI supports multi-language capabilities, allowing you to create content in various languages and localize captions for global audiences.",
                },
                {
                  q: "How does MidJourney AI enhance video storytelling?",
                  a: "MidJourney AI enhances storytelling by offering cinematic visuals, fluid transitions, and advanced VFX, helping creators craft compelling and immersive narratives.",
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
                src="https://www.testingcatalog.com/content/images/size/w2000/2024/06/screenshot-app.runwayml.com-2024.06.24-00_36_32--1-.png"
                alt=""
                className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
              />
            </div>
            <div className="col-md-6">
              <img
                src="https://www.techspot.com/articles-info/2720/images/2023-08-17-image.jpg"
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
                        <li>⚡ Intel i5 or equivalent (3.0 GHz+)</li>
                        <li>🧠 8 GB RAM (16 GB recommended for intensive rendering)</li>
                        <li>💾 500 MB disk space for cache and temporary files</li>
                        <li>📶 Stable high-speed internet (10 Mbps+)</li>
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
                    <li>📄 Getting Started with MidJourney</li>
                    <li>💻 API Documentation</li>
                    <li>🎥 Video Tutorials</li>
                    <li>🎓 AI Art Academy</li>
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
                        <li>🧰 Blog URLs for text-to-image generation</li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <h6>Export Tools</h6>
                      <ul className="list-unstyled" style={styles.smallText}>
                        <li>💻 PNG/JPEG Image Export</li>
                        <li>💻 PSD for further editing</li>
                        <li>💻 High-quality artwork for prints</li>
                      </ul>
                    </div>
                    <div className="col-md-4">
                      <h6>Marketing Tools</h6>
                      <ul className="list-unstyled" style={styles.smallText}>
                        <li>📢 Twitter & Instagram Integration</li>
                        <li>📢 Pinterest Image Sharing</li>
                        <li>📢 Creative Portfolios for Artists</li>
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
                    Why Use MidJourney AI?
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
                      MidJourney AI is a powerful tool for creating stunning digital art, illustrations, and visual concepts.
                    </li>
                    <li className="mb-3">
                      Artists and designers can quickly generate highly detailed and unique artwork using just text prompts.
                    </li>
                    <li className="mb-3">
                      MidJourney AI enables rapid prototyping of visual ideas, making it easier to visualize and refine creative concepts.
                    </li>
                    <li className="mb-3">
                      Graphic designers can use it to generate marketing materials, social media content, and website visuals.
                    </li>
                    <li className="mb-3">
                      The AI-driven tool is also used in the entertainment industry for concept art, movie visuals, and game asset creation.
                    </li>
                    <li className="mb-3">
                      MidJourney AI is a valuable resource for content creators and influencers who need eye-catching visuals for their online presence.
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
                <li className="mb-2">Generates stunning and highly detailed digital art</li>
                <li className="mb-2">Can create a variety of art styles and concepts from text prompts</li>
                <li className="mb-2">Very fast results, allowing for quick iterations of creative ideas</li>
                <li className="mb-2">Constantly improving with regular updates to its AI models</li>
                <li className="mb-2">Great for artists, designers, and content creators seeking inspiration</li>
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
                <li className="mb-2">Free version has limited access and lower priority in processing</li>
                <li className="mb-2">Generated content may require manual refinement or adjustment</li>
                <li className="mb-2">Dependence on internet speed and cloud computing for processing</li>
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
          Best for generating highly detailed and creative visual art from text descriptions.
        </li>
        <li className="mb-2">
          Competing with other AI art generators in terms of quality and variety of art styles.
        </li>
        <li className="mb-2">
          Great for artists and designers seeking unique visual concepts and inspiration.
        </li>
        <li className="mb-2">
          Known for its ability to generate surreal, fantasy, and abstract visualizations.
        </li>
        <li className="mb-2">
          Offers different tiers of access, with premium features available for higher quality outputs.
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
              <h1>MidJourney</h1>
              <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
              <p>
                MidJourney is a revolutionary AI-powered art generation tool
                that converts text descriptions into visually captivating images
                using deep learning algorithms. Unlike traditional image editors
                or design apps, MidJourney leverages powerful generative models
                to interpret a user's text prompt and deliver a unique visual
                composition that reflects the described scene, style, or mood.
              </p>

              <div className="mb-3">
                <span className="badge bg-primary me-2">Image Generation</span>
                <span className="badge bg-danger me-2">Art & Design</span>
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
              <img
                src="https://i.postimg.cc/VkYdWXzC/1-tj5-Fgl-HTik-HW-u-TJm-E2qg.jpg"
                style={{ MaxWidth: "100%", height: "300px" }}
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
                How does it work?
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
                      Describe or Upload Your Vision with MidJourney AI
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Begin by describing your creative vision in text,
                      uploading an image, or providing a reference. MidJourney
                      AI interprets your input and generates stunning visual
                      concepts for your project.
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
                      Let MidJourney AI Create Art or Video
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      With MidJourney AI, your descriptions or images are
                      transformed into breathtaking art or cinematic video
                      content. The AI applies artistic styles, creating visually
                      engaging results that exceed expectations.
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
                      Refine and Finalize Your Creation with MidJourney AI
                    </h5>
                    <p style={{ color: "#fff", margin: 0 }}>
                      Fine-tune the artistic details and style using MidJourney
                      AI’s creative refinement tools. Once satisfied, download
                      your high-quality artwork or video, ready for any use.
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

          <div className="bg-primary text-center text-light rounded-4 p-5 mt-5">
            <h4 className="mb-3">Ready to get started with MidJourney?</h4>
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

export default MidJourney;
