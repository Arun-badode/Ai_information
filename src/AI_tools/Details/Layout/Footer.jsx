import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../../public/assets/Img/Wenbear-Logo.jpeg"

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-light rounded-t-lg pt-5 pb-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Logo & About */}
          <div className="mb-4 text-left">
            <img src={logo} alt="Ai Tool Design Logo" className="mb-3 w-15" />
            <p>
              Creating exceptional design experiences since 2020. Innovate,
              inspire, and impress with Ai Tool Design.
            </p>
          </div>

          {/* Services - Centered and starting from the same position */}
          <div className="text-left md:text-center">
            <h5 className="text-white mb-3 pb-2">Featurs</h5>
            <ul className="list-none space-y-2">
              <li>
                <Link
                  to="/AIComparisonPage"
                  href="#"
                  className=" hover:text-yellow-500 text-white no-underline"
                >
                  AI Comparison Page
                </Link>
              </li>
              <li>
                <Link
                  to="/Aitools"
                  className="text-white hover:text-yellow-500 no-underline"
                >
                  Ai Tools
                </Link>
              </li>
              <li>
                <Link
                  to="/AINewsPage"
                  className="text-white hover:text-yellow-500 no-underline"
                >
                  Ai News
                </Link>
              </li>
              <li>
                <Link
                  to="/ailearninghub"
                  className="text-white hover:text-yellow-500 no-underline"
                >
                  Ai Learning Hub
                </Link>
              </li>
              <li>
                <a
                  href="/imagemindai"
                  className="text-white hover:text-yellow-500 no-underline"
                >
                  Ai Tools Details
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="text-left">
            <h5 className="text-white font-bold mb-3 pb-2">Services</h5>
            <ul className="list-none space-y-2">
              <li>
                <Link
                  to="/AboutUs"
                  className="text-white hover:text-yellow-500 no-underline"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  to="/PrivacyPolicy"
                  className="text-white hover:text-yellow-500 no-underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/AIContact"
                  className="text-white hover:text-yellow-500 no-underline"
                >
                  Contact ai
                </Link>
              </li>
              <li>
                <Link
                  to="/TermsOfService"
                  className="text-white hover:text-yellow-500 no-underline"
                >
                  Terms&Condition
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="text-left">
            <h5 className="text-white font-bold mb-3  pb-2">Connect</h5>
            <div className="mb-3">
              <a
                href="#"
                className="text-white hover:text-yellow-500 text-2xl mr-3 no-underline"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-500 text-2xl mr-3 no-underline"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-500 text-2xl mr-3 no-underline"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a
                href="#"
                className="text-white hover:text-yellow-500 text-2xl no-underline"
              >
                <i className="fab fa-behance"></i>
              </a>
            </div>
            <p>
              <i className="fas fa-envelope mr-2"></i>
              <a
                href="mailto:info@aitooldesign.com"
                className="text-white hover:text-yellow-500 no-underline"
              >
                info@aitooldesign.com
              </a>
            </p>
            <p>
              <i className="fas fa-phone-alt mr-2"></i>
              <a
                href="tel:+15551234567"
                className="text-white hover:text-yellow-500 no-underline"
              >
                +1 (555) 123-4567
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 small pt-3 mt-3 border-t-2 border-gray-600">
        © 2025 Ai Tool Design. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
