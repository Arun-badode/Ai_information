import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaBookOpen, FaStar, FaSyncAlt } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className=" text-light px-12 " style={{ background: " #000000" }}>
      {/* Header Section */}
      <header
        className="d-flex justify-content-between align-items-center px-4"
        style={{ height: "60px", backgroundColor: "#000" }}
      >
        {/* <div className="h4 mb-0" style={{ color: "white" }}>
          QARTOA
        </div> */}
        {/* <nav className="d-flex">
          <a
            href="/about"
            className="mx-3"
            style={{
              color: "white",
              textDecoration: "none",
              outline: "none",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#0d6efd")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            About Us
          </a>
          <a
            href="/contact"
            className="mx-3"
            style={{
              color: "white",
              textDecoration: "none",
              outline: "none",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#0d6efd")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Contact
          </a>
          <a
            href="/privacy-policy"
            className="mx-3"
            style={{
              color: "white",
              textDecoration: "none",
              outline: "none",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#0d6efd")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Privacy Policy
          </a>
          <a
            href="/terms-of-service"
            className="mx-3"
            style={{
              color: "white",
              textDecoration: "none",
              outline: "none",
            }}
            onMouseEnter={(e) => (e.target.style.color = "#0d6efd")}
            onMouseLeave={(e) => (e.target.style.color = "white")}
          >
            Terms of Service
          </a>
        </nav> */}
      </header>

      {/* Mission Section */}
      <section
        className="py-5"
        style={{
          background: "linear-gradient(90deg, #4b6cb7 0%, #182848 100%)", // Blue to Light Blue
        }}
      >
        <div className="container ">
          <h2 className="text-start mb-4">Our Mission</h2>
          <p className="text-start mb-5" style={{ maxWidth: "600px" }}>
            Empowering individuals and businesses through comprehensive AI
            education, expert reviews, and the latest updates in artificial
            intelligence technology.
          </p>
        </div>
      </section>

      {/* Feature Boxes Section */}
      <section className="py-5 mt-3" style={{ background: "#000000" }}>
        <div className="container">
          <div className="row text-center">
            {/* AI Education */}
            <div className="col-md-4 mb-4">
              <div
                className="card text-start bg-dark text-light h-100"
                style={{
                  border: "1px solid #66CCFF", // Light Blue border
                  borderRadius: "10px",
                }}
              >
                <div className="card-body">
                  <FaBookOpen size={30} className="mb-3" />
                  <h4>AI Education</h4>
                  <p className="text-light">
                    We provide accessible, comprehensive education about AI
                    technologies, helping everyone understand and utilize these
                    powerful tools effectively.
                  </p>
                </div>
              </div>
            </div>

            {/* Expert Reviews */}
            <div className="col-md-4 mb-4">
              <div
                className="card text-start bg-dark text-light h-100"
                style={{
                  border: "1px solid #66CCFF", // Light Blue border
                  borderRadius: "10px",
                }}
              >
                <div className="card-body">
                  <FaStar size={30} className="mb-3" />
                  <h4>Expert Reviews</h4>
                  <p className="text-light">
                    Our team thoroughly tests and reviews AI tools to help you
                    make informed decisions about which solutions best fit your
                    needs.
                  </p>
                </div>
              </div>
            </div>

            {/* Latest Updates */}
            <div className="col-md-4 mb-4">
              <div
                className="card text-start bg-dark text-light h-100"
                style={{
                  border: "1px solid #66CCFF", // Light Blue border
                  borderRadius: "10px",
                }}
              >
                <div
                  className="card-body"
                  style={{
                    border: "1px solid #66CCFF", // Light Blue border
                    borderRadius: "10px",
                  }}
                >
                  <FaSyncAlt size={30} className="mb-3" />
                  <h4>Latest Updates</h4>
                  <p className="text-light">
                    Stay current with the rapidly evolving AI landscape through
                    our regular updates on new technologies and industry trends.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-5">
        <div
          className="container"
          style={{
            border: "1px solid #66CCFF", // Light Blue border
            borderRadius: "10px",
          }}
        >
          <h3 className="text-start m-4">Our Team</h3>
          <div className="row text-center">
            <div className="col-md-3 mb-4">
              <div
                className="card  text-light "
                style={{ background: "#000000" }}
              >
                <div
                  className="card-body   d-flex flex-column align-items-center justify-content-center text-center 
  "
                >
                  <img
                    src="https://i.pravatar.cc/150?img=1"
                    alt="Sarah Chen"
                    className="rounded-circle mb-3 "
                    style={{ width: "100px", height: "100px" }}
                  />
                  <h4>Sarah Chen</h4>
                  <p>AI Research Director</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div
                className="card  text-light"
                style={{ background: "#000000" }}
              >
                <div className="card-body d-flex flex-column align-items-center justify-content-center text-center ">
                  <img
                    src="https://i.pravatar.cc/150?img=2"
                    alt="Michael Rodriguez"
                    className="rounded-circle mb-3"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <h4>Michael Rodriguez</h4>
                  <p>Technical Lead</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div
                className="card  text-light"
                style={{ background: "#000000" }}
              >
                <div className="card-body d-flex flex-column align-items-center justify-content-center text-center ">
                  <img
                    src="https://i.pravatar.cc/150?img=3"
                    alt="Emily Thompson"
                    className="rounded-circle mb-3"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <h4>Emily Thompson</h4>
                  <p>Content Director</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div
                className="card  text-light"
                style={{ background: "#000000" }}
              >
                <div className="card-body d-flex flex-column align-items-center justify-content-center text-center ">
                  <img
                    src="https://i.pravatar.cc/150?img=4"
                    alt="David Park"
                    className="rounded-circle mb-3"
                    style={{ width: "100px", height: "100px" }}
                  />
                  <h4>David Park</h4>
                  <p>Product Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className=" text-white text-center py-3">
        <p>&copy; 2025 QARTOA. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutPage;
