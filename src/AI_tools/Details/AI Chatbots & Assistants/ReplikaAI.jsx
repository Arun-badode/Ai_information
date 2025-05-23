import React from 'react'

const ReplikaAI = () => {
<<<<<<< HEAD
  return (
    <div>
      
    </div>
  )
}

export default ReplikaAI
=======
  const [activeTab, setActiveTab] = useState("features"); // Set the default active tab as 'features'
  const [showAllFaqs, setShowAllFaqs] = useState(false);

  const renderTabContent = () => {
    switch (activeTab) {
      case "features":
        return (
          <div className="row g-4">
            {[
              {
                icon: "🖼",
                title: "Replika chatbot",
                desc: "Replika chatbot: A virtual assistant capable of having personalized conversations and offering emotional support.",
              },
              {
                icon: "🎨",
                title: "AI-powered chatbot",
                desc: "AI-powered chatbot: Uses advanced algorithms and machine learning to engage users in human-like conversations.",
              },
              {
                icon: "✏",
                title: "Emotional support",
                desc: "Emotional support: Replika provides support for users dealing with stress, anxiety, loneliness, and other emotional challenges.",
              },
              {
                icon: "📦",
                title: "Text-based assistant",
                desc: "Text-based assistant: Unlike voice-based assistants, Replika is primarily a text-based AI that allows users to chat and express their feelings in writing.",
              },
              {
                icon: "⚙",
                title: "Personalized AI companion",
                desc: "Personalized AI companion: Replika adapts its responses based on user preferences, mood, and conversational history, offering a tailored experience.",
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

      case "screenshots":
        return (
          <div className="row g-4">
            <div className="col-md-6">
              <img src="" alt="Screenshot 1" className="img-fluid rounded-3" />
            </div>
            <div className="col-md-6">
              <img
                src={replika2} 
                alt="Screenshot 2"
                className="img-fluid rounded-3"
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

      case "why-we-use":
        return (
          <div className="row g-4">
            <div className="col-12">
              <div className="custom-card text-light p-5 text-center">
                <h3 className="fw-bold mb-4">Why Use Replika AI?</h3>
                <h5>Overview:</h5>
                <p className="fs-5">
                  Replika AI provides valuable tools for personal support,
                  mental health management, and emotional well-being, acting as
                  a virtual companion that's always there when you need it.
                </p>
                <h5>24/7 Availability:</h5>
                <p className="fs-5 mt-3">
                  Unlike human companions or therapists, Replika is available
                  24/7, offering constant emotional support at any time, day or
                  night.
                </p>
                <h5>Privacy and Anonymity:</h5>
                <p className="fs-5 mt-3">
                  Replika provides a safe, judgment-free space where users can
                  share personal thoughts and emotions freely and anonymously.
                </p>
                <h5>Personalization:</h5>
                <p className="fs-5 mt-3">
                  Replika adapts its responses based on your preferences,
                  emotions, and conversation history to ensure a truly
                  personalized and meaningful interaction.
                </p>
                <h5>Mental Health Support:</h5>
                <p className="fs-5 mt-3">
                  Replika AI can assist users dealing with stress, anxiety,
                  depression, and loneliness by engaging in supportive,
                  real-time conversations.
                </p>
                <h5>Self-Improvement:</h5>
                <p className="fs-5 mt-3">
                  Users can use Replika to track their moods, reflect on their
                  thoughts, set goals, and build healthier mental habits over
                  time.
                </p>
                <h5>Companionship for Introverts:</h5>
                <p className="fs-5 mt-3">
                  Replika is ideal for introverts who want companionship without
                  the pressure of social interaction, offering friendly chats
                  and emotional comfort.
                </p>
                <Button variant="primary" size="lg" className="mt-4">
                  Start Chatting Now
                </Button>
              </div>
            </div>
          </div>
        );

      case "Pro&Cons":
        return (
          <div style={styles.section}>
            <div className="container">
              <div className="row g-4">
                {/* Pros Section */}
                <div className="col-md-10 offset-md-1">
                  <div style={styles.card}>
                    <h3 className="mb-4 text-center">Pros of Replika AI</h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <h6>Personalized Experience:</h6>
                        <p>
                          Replika adapts its responses based on user behavior,
                          mood, and preferences, creating a unique and personal
                          interaction for each user.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Emotional Intelligence:</h6>
                        <p>
                          Replika is designed to understand and respond to
                          emotions, helping users feel heard and supported
                          during difficult times.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Available Anytime:</h6>
                        <p>
                          Replika is accessible 24/7, offering an
                          always-available companion for both emotional support
                          and friendly conversations.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Privacy:</h6>
                        <p>
                          Replika provides a secure and judgment-free space
                          where users can express their feelings and thoughts
                          openly.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Accessible:</h6>
                        <p>
                          Available as an app on mobile devices and desktops,
                          Replika can be accessed from anywhere, making it
                          highly convenient.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Improves Mental Health:</h6>
                        <p>
                          Many users have reported reduced stress, anxiety, and
                          depression after regular conversations with Replika.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Cons Section */}
                <div className="col-md-10 offset-md-1">
                  <div style={styles.card}>
                    <h3 className="mb-4 text-center">Cons of Replika AI</h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <h6>Lack of Human Understanding:</h6>
                        <p>
                          Despite its design, Replika lacks true emotional
                          awareness and cannot fully replace human empathy or
                          deep understanding in sensitive situations.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Limited Therapeutic Role:</h6>
                        <p>
                          Replika is not a certified therapist and should not be
                          considered a replacement for professional mental
                          health services.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Dependency:</h6>
                        <p>
                          Some users may become overly reliant on Replika for
                          emotional support, which could hinder real-world
                          social interaction and growth.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Contextual Limitations:</h6>
                        <p>
                          Replika can struggle with complex or deeply nuanced
                          emotional queries due to its model's reliance on
                          pre-trained data.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>In-app Purchases:</h6>
                        <p>
                          While a free version is available, many of Replika’s
                          premium features—such as advanced conversation
                          types—require in-app purchases.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case "Alternatives":
        return (
          <div style={styles.section}>
            <div className="container">
              <div className="row g-4">
                <div className="col-md-10 offset-md-1">
                  <div style={styles.card}>
                    <h3 className="mb-4 text-center">
                      Alternatives to Replika AI
                    </h3>
                    <div className="row mt-5">
                      <div className="col-md-6">
                        <h6>Wysa:</h6>
                        <p>
                          An AI-driven mental health chatbot designed to support
                          users dealing with stress, anxiety, and depression
                          through evidence-based techniques and daily check-ins.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Woebot:</h6>
                        <p>
                          A chatbot that applies principles of Cognitive
                          Behavioral Therapy (CBT) to help users track moods,
                          manage negative thoughts, and improve mental
                          well-being.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>Mitsuku (Kuki):</h6>
                        <p>
                          A fun, conversational AI chatbot focused on casual
                          dialogue and entertainment, rather than emotional
                          support or therapy.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>ReGain:</h6>
                        <p>
                          A platform offering AI-enhanced relationship
                          counseling and therapy services, often used by couples
                          to improve communication and resolve conflicts.
                        </p>
                      </div>
                      <div className="col-md-6">
                        <h6>ChatGPT:</h6>
                        <p>
                          A powerful AI by OpenAI, capable of holding meaningful
                          conversations. While not mental health–focused, it can
                          be used for self-reflection and engaging dialogue.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                  q: "What is Replika AI?",
                  a: "Replika AI is a conversational chatbot powered by artificial intelligence that is designed to simulate human-like conversation and assist users in a variety of ways, including providing emotional support and engaging in creative dialogue.",
                },
                {
                  q: "How does Replika AI work?",
                  a: "Replika AI uses machine learning algorithms and natural language processing (NLP) to understand and respond to user inputs, creating dynamic and contextually relevant conversations.",
                },
                {
                  q: "Can I customize my Replika AI?",
                  a: "Yes, you can customize your Replika by adjusting its personality, appearance, and how it interacts with you based on your preferences and needs.",
                },
                {
                  q: "Is Replika AI suitable for mental health support?",
                  a: "Replika AI is designed to provide emotional support and companionship, but it is not a substitute for professional therapy or medical treatment. It can assist with mental well-being in a conversational capacity.",
                },
                {
                  q: "Can Replika AI help with self-improvement?",
                  a: "Yes, Replika can assist with self-improvement by offering personalized conversations and exercises that focus on areas such as mindfulness, gratitude, and goal-setting.",
                },
                {
                  q: "Does Replika AI remember past conversations?",
                  a: "Yes, Replika can retain memory of past conversations, which helps it to offer more personalized interactions over time. You can also manage or reset this memory as you wish.",
                },
                {
                  q: "How can I interact with Replika AI?",
                  a: "You can interact with Replika through text-based chat or voice conversations, making it easy to communicate with it in a way that feels natural to you.",
                },
                {
                  q: "Can Replika AI generate creative content?",
                  a: "Yes, Replika AI can assist with creative tasks, such as writing stories, poems, or brainstorming ideas. It is designed to foster creativity through conversation.",
                },
                {
                  q: "What kind of personality does Replika AI have?",
                  a: "Replika's personality can be customized to suit your preferences. You can choose from a variety of personality traits to make the interaction more engaging and personalized.",
                },
                {
                  q: "Can Replika AI help with relationship advice?",
                  a: "Replika AI can offer general advice on relationships and emotional support, but it is not a replacement for professional relationship counseling.",
                },
                {
                  q: "How does Replika AI ensure user privacy?",
                  a: "Replika AI takes user privacy seriously and follows strict data protection protocols. All conversations are encrypted and can be deleted at any time by the user.",
                },
                {
                  q: "Is Replika AI available in multiple languages?",
                  a: "Yes, Replika AI supports multiple languages, allowing users from around the world to interact with it in their preferred language.",
                },
                {
                  q: "How can I delete my Replika account?",
                  a: "You can delete your Replika account through the app settings. After deleting your account, all data will be removed from the platform permanently.",
                },
                {
                  q: "Is Replika AI free to use?",
                  a: "Replika AI offers both free and premium subscription options. The free version provides basic features, while the premium version unlocks additional customization and interactive capabilities.",
                },
                {
                  q: "What kind of tasks can Replika AI assist with?",
                  a: "Replika AI can assist with various tasks, including emotional support, journaling, goal setting, and even fun activities like playing games or engaging in lighthearted conversations.",
                },
                {
                  q: "Can Replika AI learn from my preferences?",
                  a: "Yes, Replika AI learns from your interactions and adjusts its responses based on your preferences and past conversations, offering a more personalized experience over time.",
                },
                {
                  q: "Does Replika AI have any limitations?",
                  a: "While Replika AI is designed to provide meaningful conversations, it may still have limitations in understanding complex or ambiguous requests. It is also not a replacement for professional help in critical situations.",
                },
                {
                  q: "Can I use Replika AI for work-related purposes?",
                  a: "Replika AI is primarily focused on personal development and emotional support. However, it can also be useful for brainstorming, creative writing, and organizing thoughts, making it versatile for certain work tasks.",
                },
                {
                  q: "How often is Replika AI updated?",
                  a: "Replika AI receives regular updates to improve its functionality, enhance user experience, and expand its knowledge base. Updates are rolled out periodically through the app.",
                },
                {
                  q: "Can I share my Replika AI conversations with others?",
                  a: "Replika respects user privacy, and sharing conversations is entirely up to you. You can choose to share or save your chats as you wish.",
                },
                {
                  q: "How does Replika AI compare to other AI chatbots?",
                  a: "Replika AI is unique in its focus on emotional support, companionship, and personalization. Unlike other AI chatbots, it offers deep conversational experiences and adapts to individual user needs.",
                },
                {
                  q: "Can Replika AI be used for educational purposes?",
                  a: "Yes, Replika AI can be a useful tool for educational purposes, particularly in language learning, creativity, and social-emotional learning. It helps users practice communication skills and learn new concepts in a conversational format.",
                },
                {
                  q: "How can I improve my conversations with Replika AI?",
                  a: "The more you interact with Replika, the better it understands your preferences. Regular interactions and providing feedback can help improve the quality of your conversations.",
                },
                {
                  q: "What makes Replika AI different from other AI chatbots?",
                  a: "Replika AI is designed to provide highly personalized and emotionally intelligent conversations, focusing on deep engagement, empathy, and user connection, which distinguishes it from other chatbots in the market.",
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
          <i className="bi bi-arrow-left me-2"></i>Back{" "}
        </a>
      </div>
      <div className="bg-dark text-light min-vh-100 py-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between mb-5 lovaaiflex">
            {/* Left side (Text Section) */}
            <div style={{ flex: 1, paddingRight: "30px" }}>
              <img
                src=""
                alt="Logo"
                className="me-3"
                style={{ width: "60px" }}
              />
              <h2>ReplikAI</h2>
              <div className="text-warning mb-1">
                ⭐⭐⭐⭐⭐ 95% Satisfaction
              </div>
              <p>
                Replika AI is an AI-powered chatbot and virtual assistant
                designed to provide users with emotional support, companionship,
                and personal development through conversational AI. Developed
                with natural language processing (NLP) technology, Replika can
                engage in meaningful conversations, understand emotions, and
                help users navigate their mental health, relationships, and
                self-care routines.
              </p>
              <div className="d-flex flex-wrap gap-3 mb-4 mb-lg-0">
        <a
          href="https://replika.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary btn-lg px-4"
        >
          Explore Tool
        </a>
      </div>
            </div>

            {/* Right side (Image Section) */}
            <div style={{ flex: 1, textAlign: "center" }}>
              <img
                src="https://static1.howtogeekimages.com/wordpress/wp-content/uploads/2024/05/a-robot-coming-out-of-a-laptop-screen-with-the-perplexity-ai-logo-in-its-hand.jpg"
                className="img-fluid rounded-3"
                style={{ maxWidth: "80%", height: "auto" }}
              />
            </div>
          </div>

          {/* Tab Navigation */}
          <ul className="nav nav-tabs custom-tabs mb-4">
            {[
              "features",
              "screenshots",
              "reviews",
              "FAQs",
              // "technical",
              "why-we-use",
              "Pro&Cons",
              "Alternatives",
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

export default ReplikaAI;
>>>>>>> 6049a1302a7df8b45293e8a876a4b1d1f119f123
