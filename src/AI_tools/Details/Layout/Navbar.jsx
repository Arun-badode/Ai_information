import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Chatbot from "./Chatbot";
// import CategoriesNavbar from "./CategoriesNavbar";
// import BreadcrumbScroll from "./BreadcrumbScroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="navbar" style={{ zIndex: "10000" }}>
        {/* Left side - Brand */}
        <Link to="/">
          <div className="navbar-brand px-2">AI Tools</div>
        </Link>

        {/* Right side - Hamburger for mobile */}
        <button className="navbar-toggler" onClick={toggleMenu}>
          &#9776;
        </button>

        {/* Middle Menu */}
        <div className={`navbar-menu ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav nav-left px-4">
            <li className="nav-item">
              <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            {/* <li className="nav-item">
              <a href="#" className="nav-link">
                Categories
              </a>
            </li> */}
            {/* <li className="nav-item">
              <Link to="/imagemindai" className="nav-link">
                AI Tools
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/AINewsPage" className="nav-link" onClick={() => setIsMenuOpen(false)}>  
                AI News
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/AiBlog" className="nav-link" onClick={() => setIsMenuOpen(false)}>
                AI Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop-only Contact Button */}
        <div className="navbar-contact-desktop">
          <Link
            to="/aicontact"
            className="contact-btn relative overflow-hidden text-white px-4 py-3 rounded-md"
          >
            Contact
            <span className="glowing-ring"></span>
          </Link>
        </div>





      </nav>
      {/* <BreadcrumbScroll /> */}
      {/* <CategoriesNavbar /> */}
      < Chatbot />
    </>
  );
};

export default Navbar;
