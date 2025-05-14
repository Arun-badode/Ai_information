import React from "react";

const AILandingPage = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://i.postimg.cc/5thq877r/pp.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        color: "#E2E8F0",
        minHeight: "100vh",
      }}
    >
      {/* Hero Section */}
      <div className="container text-center py-5 position-relative">
        <div className="hero-overlay rounded p-4">
          <div className="mb-3 px-3 py-1 rounded-pill bg-gradient-to-r from-purple-500 to-blue-500 text-white fw-semibold shadow-sm d-inline-block">
            🌟 Trusted by AI Professionals Worldwide 🌍
          </div>

          <h1
            className="fw-bold display-5 px-4 mt-3"
            style={{ color: "#F8FAFC" }}
          >
            Discover the smartest and fastest way to{" "}
            <span
              style={{
                background: "linear-gradient(to right, #F56565, #38BDF8)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              explore, compare, and choose AI tools
            </span>
          </h1>

          <p className="lead mt-3 px-5" style={{ color: "#CBD5E0" }}>
            Get insights, reviews, and tutorials on the latest AI-powered apps
            and platforms for your business and creativity.
          </p>

          <div className="mt-4 d-flex gap-3 flex-wrap justify-content-center">
            <div className="position-relative">
              <span className="glow-ring-fixed"></span>
              <button className="bg-gradient-to-r from-blue-500 to-teal-400 px-4 py-2 rounded-full shadow-sm text-white position-relative">
                Visit AI Info Hub
              </button>
            </div>
            <div className="position-relative">
              <span className="glow-ring-fixed"></span>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full shadow-sm position-relative">
                Browse Learning Guides
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-5">
        <div className="row text-center">
          <div className="col-md-4 mb-4">
            <i className="bi bi-search fs-2 text-blue-400 mb-2"></i>
            <h5 className="fw-bold text-white">AI Tool Discovery</h5>
            <p style={{ color: "#A0AEC0" }}>
              Search and compare 1000+ AI tools across categories.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-lightbulb fs-2 text-yellow-400 mb-2"></i>
            <h5 className="fw-bold text-white">Real-World Use Cases</h5>
            <p style={{ color: "#A0AEC0" }}>
              See how others are applying AI in business, design, and more.
            </p>
          </div>
          <div className="col-md-4 mb-4">
            <i className="bi bi-bar-chart-line fs-2 text-teal-400 mb-2"></i>
            <h5 className="fw-bold text-white">Up-to-Date Insights</h5>
            <p style={{ color: "#A0AEC0" }}>
              Stay ahead with the latest AI trends, updates, and tips.
            </p>
          </div>
        </div>
      </div>

      {/* Extra Styles */}
      <style>
        {`
          .hero-overlay {
            background: rgba(0, 0, 0, 0.5);
            display: inline-block;
            max-width: 960px;
            margin: auto;
          }

          .glow-ring-fixed {
            position: absolute;
            top: -4px;
            left: -4px;
            right: -4px;
            bottom: -4px;
            border-radius: 9999px;
            border: 2px solid rgba(0, 255, 255, 0.5);
            box-shadow: 0 0 15px rgba(0, 255, 255, 0.7);
            animation: glowPulse 2s infinite ease-in-out;
            z-index: 0;
          }

          @keyframes glowPulse {
            0% {
              box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
            }
            50% {
              box-shadow: 0 0 20px rgba(0, 255, 255, 1);
            }
            100% {
              box-shadow: 0 0 10px rgba(0, 255, 255, 0.5);
            }
          }
        `}
      </style>
    </div>
  );
};

export default AILandingPage;
