import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-dark position-relative pt-5">
      {/* Background Wave Image */}
      <div
        style={{
          backgroundImage:
            "url('https://i.postimg.cc/Hk5CC6DF/Whats-App-Image-2025-05-06-at-18-36-01-7ab0b10c.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.3,
        }}
      />

      <div className="container position-relative" style={{ zIndex: 1 }}>
        {/* CTA Section */}
        <div className="text-center mb-4">
          <h4
            className="fw-bold"
            style={{
              background: "linear-gradient(to right, #FFD700, #333333)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Let’s build something great together
          </h4>
          <button
            className="btn btn-warning fw-semibold px-4 py-2 mt-3"
            style={{
              background: "linear-gradient(to right, #FFD700, #FF8C00)",
              border: "none",
              color: "#333",
            }}
          >
            Contact Us
          </button>
        </div>

        {/* Logo & Sections */}
        <div className="row text-start mt-5">
          {/* Logo & Company */}
          <div className="col-md-3 mb-4">
            <img
              src="https://www.milesit.com/themes/custom/miles/logo.svg"
              alt="Miles IT"
              style={{ width: "100px", marginBottom: "10px" }}
            />
            <h6 className="fw-bold mt-3">Company</h6>
            <ul className="list-unstyled small">
              <li>Who We Are</li>
              <li>Careers</li>
              <li>Refer a Friend</li>
              <li>Logos</li>
              <li>Fonts</li>
              <li>Colors</li>
              <li>Templates</li>
            </ul>
            <h6 className="fw-bold mt-3">Resources</h6>
            <ul className="list-unstyled small">
              <li>Case Studies</li>
              <li>Blog</li>
              <li>Cybersecurity Alerts</li>
              <li>Ultimate Guides</li>
            </ul>
          </div>

          {/* Services */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Services</h6>
            <ul className="list-unstyled small">
              <li>Managed IT Services</li>
              <li>Co-Managed IT Services</li>
              <li>Software Development</li>
              <li>Custom Websites</li>
              <li>Digital Marketing</li>
              <li>IT Support</li>
              <li>Cybersecurity</li>
              <li>Systems Integration</li>
              <li>Cloud Computing & Migrations</li>
              <li>Striven</li>
            </ul>
          </div>

          {/* Consulting */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Consulting</h6>
            <ul className="list-unstyled small">
              <li>IT Consulting</li>
              <li>Business Transformation</li>
              <li>Growth & Strategy Planning</li>
              <li>IT Regulatory Compliance</li>
              <li>Mergers & Acquisitions</li>
              <li>Technology Risk Assessment</li>
              <li>Operations</li>
              <li>Marketing Brand Strategy</li>
              <li>Sales</li>
              <li>Recruiting & Staffing</li>
            </ul>
          </div>

          {/* Industries */}
          <div className="col-md-3 mb-4">
            <h6 className="fw-bold">Industries</h6>
            <ul className="list-unstyled small">
              <li>Healthcare & Medical</li>
              <li>Logistics & Distribution</li>
              <li>Finance & Insurance</li>
              <li>Professional Services</li>
              <li>Manufacturing</li>
              <li>Real Estate</li>
              <li>Retail & Ecommerce</li>
              <li>Construction & Contracting</li>
              <li>Engineering & Architecture</li>
              <li>Legal & Law Firms</li>
              <li>Private Equity</li>
              <li>Education</li>
              <li>Non-Profit & Government</li>
              <li>Science & Research</li>
              <li>Entertainment & Hospitality</li>
            </ul>
          </div>
        </div>

        {/* Contact & Social */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center py-3 border-top">
          <div className="mb-2">
            <button
              className="btn btn-outline-secondary text-dark fw-bold"
              style={{
                background: "linear-gradient(to right, #FFD700, #FF8C00)",
                border: "none",
                color: "#333",
              }}
            >
              CONTACT US
            </button>
            <div className="small mt-1">
              866-955-1787 |{" "}
              <a href="#" className="text-dark text-decoration-none">
                Login
              </a>
            </div>
          </div>
          <div className="d-flex gap-3 text-dark">
            <FaFacebookF size={18} />
            <FaTwitter size={18} />
            <FaInstagram size={18} />
            <FaLinkedinIn size={18} />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-dark text-white text-center py-2 small border-top">
        © 2025 Miles IT Company. All Rights Reserved.{" "}
        <span className="text-primary">
          Sitemap | Terms of Use | Privacy Policy
        </span>
      </div>
    </footer>
  );
};

export default Footer;
