import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./AiLearningHub.css"

const AiLearningHub = () => {
  const styles = {
    body: { backgroundColor: "#0D0D12", color: "#FFFFFF", minHeight: "100vh", fontFamily: "'Poppins', sans-serif", paddingBottom: "60px" },
    navButton: { backgroundColor: "#1F2937", color: "#9CA3AF", border: "1px solid #374151", fontSize: "14px", padding: "6px 14px", borderRadius: "8px", transition: "all 0.3s ease" },
    activeButton: { backgroundColor: "#3B82F6", color: "#fff", border: "none" },
    searchInput: { backgroundColor: "#1F2937", border: "1px solid #374151", color: "#9CA3AF", borderRadius: "8px", padding: "8px 16px", transition: "all 0.3s ease" },
    cardBg: { backgroundColor: "#111827", borderRadius: "16px", padding: "20px", transition: "transform 0.3s ease, box-shadow 0.3s ease" },
    tag: { backgroundColor: "#1F2937", color: "#60A5FA", fontSize: "12px", padding: "2px 8px", borderRadius: "8px", transition: "background-color 0.3s ease" },
    featureCard: { backgroundColor: "#111827", borderRadius: "16px", padding: "20px", minHeight: "130px", transition: "transform 0.3s ease, box-shadow 0.3s ease" },
    learningPathBlue: { backgroundColor: "#2563EB", color: "#fff", borderRadius: "16px", padding: "30px", transition: "transform 0.3s ease, box-shadow 0.3s ease" },
    learningPathPurple: { backgroundColor: "#8B5CF6", color: "#fff", borderRadius: "16px", padding: "30px", transition: "transform 0.3s ease, box-shadow 0.3s ease" },
    smallText: { fontSize: "12px", color: "#9CA3AF" },
    heroImage: { width: "100%", borderTopLeftRadius: "16px", borderTopRightRadius: "16px", height: "auto", objectFit: "cover", transition: "transform 0.5s ease" }
  };

  // Hover Effects through CSS classes
  const hoverable = {
    transform: "scale(1.03)",
    boxShadow: "0 8px 24px rgba(0,0,0,0.3)"
  };

  const hoverImage = {
    transform: "scale(1.05)"
  };

  return (
    <div style={styles.body}>
      <div className="container py-5">

        {/* Top Filters */}
        <div className="d-flex flex-wrap gap-2 mb-4">
          <button style={{ ...styles.navButton, ...styles.activeButton }}>All</button>
          <button style={styles.navButton}>Tutorials</button>
          <button style={styles.navButton}>Comparisons</button>
          <button style={styles.navButton}>Case Studies</button>
          <button style={styles.navButton}>Workflow</button>
        </div>

        {/* Header Title and Search */}
        <div className="d-flex flex-wrap justify-content-between align-items-center mb-5">
          <div>
            <h2 className="fw-bold">AI Learning Hub</h2>
            <p className="" style={{ fontSize: "14px" }}>Master AI tools and transform your workflow</p>
          </div>
          <div>
            <input type="text" placeholder="Search tutorials and guides..." style={styles.searchInput} />
          </div>
        </div>

        {/* Hero Card */}
        <div className="mb-5" style={{ ...styles.cardBg, padding: 0, overflow: "hidden" }}>
          <img src="https://i.postimg.cc/PJR2k4WG/IMG-19.png" alt="Hero" style={styles.heroImage} className="hover-zoom" />
          <div className="p-4">
            <span style={styles.tag}>Featured</span>
            <h3 className="fw-bold mt-3 mb-2" style={{ fontSize: "22px" }}>Getting Started with ChatGPT: A Beginner's Guide</h3>
            <p className="" style={{ fontSize: "14px" }}>Learn how to leverage ChatGPT for enhanced productivity and creativity.</p>
            <button className="btn btn-primary btn-sm mt-3" style={{ backgroundColor: "#3B82F6", border: "none", padding: "8px 20px", borderRadius: "8px" }}>Start Learning</button>
          </div>
        </div>

        {/* Features */}
        <div className="row g-4 mb-5">
          {["📘 Tutorials", "🛠️ Integration Guides", "📚 Case Studies"].map((feature, idx) => (
            <div className="col-md-4" key={idx}>
              <div style={styles.featureCard} className="hoverable">
                <h5 className="fw-semibold mb-2">{feature}</h5>
                <p className="small ">Step-by-step guides to master AI tools.</p>
              </div>
            </div>
          ))}
        </div>

        {/* Latest Articles */}
        <h4 className="fw-bold mb-4">Latest Articles</h4>
        <div className="row g-4 mb-5">
          {[
            {
              title: "ChatGPT vs Jasper AI: In-depth Comparison",
              tags: ["Comparison", "AI"],
              time: "8 min read",
              img: "https://i.postimg.cc/zvMfzhhp/IMG-162.png",
            },
            {
              title: "10 AI Tools to Boost Your Productivity",
              tags: ["Tools", "Productivity"],
              time: "6 min read",
              img: "https://i.postimg.cc/d0YnvDy0/IMG-67.png",
            },
            {
              title: "Understanding AI Image Generation",
              tags: ["Tutorial", "Advanced"],
              time: "10 min read",
              img: "https://i.postimg.cc/1tRHnTMh/IMG-86.png",
            },
            {
              title: "AI in Content Creation: Best Practices",
              tags: ["Tutorial", "Content"],
              time: "7 min read",
              img: "https://i.postimg.cc/GtVJfpRd/IMG-105.png",
            },
            {
              title: "Getting Started with Stable Diffusion",
              tags: ["Beginner", "Stable Diffusion"],
              time: "12 min read",
              img: "https://i.postimg.cc/WpHnz5kC/IMG-124.png",
            },
            {
              title: "AI Tools for Business Automation",
              tags: ["Business", "Automation"],
              time: "9 min read",
              img: "https://i.postimg.cc/GhTjyvP2/IMG-143.png",
            },
          ].map((article, idx) => (
            <div className="col-md-4" key={idx}>
              <div style={styles.cardBg} className="hoverable">
                <img src={article.img} alt="Article" className="img-fluid rounded mb-3 hover-zoom" />
                <div className="d-flex gap-2 mb-2">
                  {article.tags.map((tag, tagIdx) => (
                    <span key={tagIdx} style={styles.tag}>{tag}</span>
                  ))}
                </div>
                <h6 className="fw-semibold mb-1">{article.title}</h6>
                <p style={styles.smallText}>{article.time}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Paths */}
        <h4 className="fw-bold mb-4">Learning Paths</h4>
        <div className="row g-4">
          <div className="col-md-6">
            <div style={styles.learningPathBlue} className="hoverable">
              <h5 className="fw-bold">AI for Beginners</h5>
              <p className="small">Start your AI journey with fundamental concepts and basic tools.</p>
              <button className="btn btn-light btn-sm mt-3" style={{ borderRadius: "8px" }}>Start Path</button>
            </div>
          </div>
          <div className="col-md-6">
            <div style={styles.learningPathPurple} className="hoverable">
              <h5 className="fw-bold">Advanced AI Implementation</h5>
              <p className="small">Master complex AI tools and create advanced workflows.</p>
              <button className="btn btn-light btn-sm mt-3" style={{ borderRadius: "8px" }}>Start Path</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AiLearningHub;
