import React from "react";
import {
  FaShieldAlt,
  FaCartPlus,
  FaLaptopCode,
  FaBullhorn,
} from "react-icons/fa";


const ServicesSection = () => {
  return (
    <div
      className="py-5 text-white d-flex flex-column justify-content-between min-vh-100"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/cJGkJzLb/Whats-App-Image-2025-05-06-at-18-35-52-c91f6a87.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container text-center">
        {/* Section Title */}
        <h2
          className="display-5 fw-bold mb-3 py-1"
          style={{
            background: "linear-gradient(to right, #FFD700, #333333)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Boost your business with smarter technology—you're in the right place
        </h2>

        {/* Service Cards */}
        <div className="row g-4">
          {/* Card 1 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 text-center border-warning shadow card-hover-1">
              <div className="card-body">
                <FaShieldAlt size={40} className="text-warning mb-3" />
                <h5 className="card-title fw-bold">
                  MANAGED IT SERVICES & SECURITY
                </h5>
                <p className="card-text">
                  We provide top-notch IT services and security solutions to
                  safeguard your business.
                </p>
                <a
                  href="#"
                  className="btn btn-warning text-dark fw-bold shadow-sm"
                  style={{
                    background: "linear-gradient(to right, #FFD700, #333333)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 text-center border-warning shadow card-hover-2">
              <div className="card-body">
                <FaCartPlus size={40} className="text-warning mb-3" />
                <h5 className="card-title fw-bold">
                  ECOMMERCE & CUSTOM WEBSITES
                </h5>
                <p className="card-text">
                  Build your online store or a custom website with our expert
                  development team.
                </p>
                <a
                  href="#"
                  className="btn btn-warning text-dark fw-bold shadow-sm"
                  style={{
                    background: "linear-gradient(to right, #FFD700, #333333)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 text-center border-warning shadow card-hover-3">
              <div className="card-body">
                <FaLaptopCode size={40} className="text-warning mb-3" />
                <h5 className="card-title fw-bold">SOFTWARE DEVELOPMENT</h5>
                <p className="card-text">
                  Transform your ideas into software solutions that work for
                  your business.
                </p>
                <a
                  href="#"
                  className="btn btn-warning text-dark fw-bold shadow-sm"
                  style={{
                    background: "linear-gradient(to right, #FFD700, #333333)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card h-100 text-center border-warning shadow card-hover-4">
              <div className="card-body">
                <FaBullhorn size={40} className="text-warning mb-3" />
                <h5 className="card-title fw-bold">DIGITAL MARKETING</h5>
                <p className="card-text">
                  Grow your business with our targeted digital marketing
                  strategies and campaigns.
                </p>
                <a
                  href="#"
                  className="btn btn-warning text-dark fw-bold shadow-sm"
                  style={{
                    background: "linear-gradient(to right, #FFD700, #333333)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-4">
            <a
              href="#"
              className="btn btn-warning btn-lg text-dark fw-bold shadow-sm"
              style={{
                background: "linear-gradient(to right, #FFD700, #333333)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              CONTACT US
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
