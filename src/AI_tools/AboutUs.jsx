import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBookOpen, FaStar, FaSyncAlt } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="bg-black text-light">
      {/* Hero Section */}
      <section
        className="d-flex align-items-center justify-content-center text-center py-5"
        style={{
          background: "linear-gradient(90deg, #1f1c29 0%, #040404 100%)",
        }}
      >
        <div className="container">
          <h1 className="display-4 mb-3 text-warning">About Kiaan Technology</h1>
          <p className="lead">
            Pioneering innovative digital solutions that drive business growth and empower success.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container py-5">
        <div className="row gy-4">
          <div className="col-md-6">
            <div className="p-4 bg-secondary bg-opacity-10 rounded">
              <h3 className="h4 text-warning mb-3">
                <FaBookOpen className="me-2" /> Our Mission
              </h3>
              <p>
                To empower businesses with cutting-edge technology that enhances productivity,
                drives efficiency, and unlocks new opportunities in a digital-first world.
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="p-4 bg-secondary bg-opacity-10 rounded">
              <h3 className="h4 text-warning mb-3">
                <FaStar className="me-2" /> Our Vision
              </h3>
              <p>
                To be a global leader in intelligent solutions, enabling organizations to
                thrive through innovation and strategic digital transformation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-5" style={{ background: "#111" }}>
        <div className="container">
          <h2 className="mb-4 text-center text-warning">What We Do</h2>
          <div className="row gy-4">
            <div className="col-md-4">
              <div className="p-4 bg-secondary bg-opacity-10 rounded h-100">
                <FaSyncAlt size={32} className="text-warning mb-3" />
                <h5>AI Tools & Automation</h5>
                <p>
                  Develop powerful AI-based solutions that streamline processes and drive automation,
                  keeping you ahead in your industry.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-secondary bg-opacity-10 rounded h-100">
                <FaBookOpen size={32} className="text-warning mb-3" />
                <h5>Custom Software Development</h5>
                <p>
                  Craft tailor-made applications—from web platforms to enterprise systems—that address
                  your unique business challenges.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="p-4 bg-secondary bg-opacity-10 rounded h-100">
                <FaStar size={32} className="text-warning mb-3" />
                <h5>Consulting & Strategy</h5>
                <p>
                  Provide expert guidance to optimize operations, leverage data insights, and implement
                  smart digital strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container py-5">
        <h2 className="mb-4 text-center text-warning">Our Values</h2>
        <ul className="list-group list-group-flush mx-auto" style={{ maxWidth: "600px" }}>
          <li className="list-group-item bg-transparent text-light">
            <strong>Integrity:</strong> Honesty and transparency in every interaction.
          </li>
          <li className="list-group-item bg-transparent text-light">
            <strong>Collaboration:</strong> Partnering closely with clients to deliver tailored outcomes.
          </li>
          <li className="list-group-item bg-transparent text-light">
            <strong>Excellence:</strong> Striving for the highest standards across all projects.
          </li>
          <li className="list-group-item bg-transparent text-light">
            <strong>Innovation:</strong> Continuously exploring new technologies to drive value.
          </li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="py-3 text-center text-muted" style={{ background: "#000" }}>
        <p>&copy; {new Date().getFullYear()} Kiaan Technology Pvt. Ltd. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
