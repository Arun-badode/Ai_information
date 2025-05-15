// import React, { useState } from "react";
// import "./Navbar.css";
// import BreadcrumbScroll from "./BreadcrumbScroll"
// import CategoriesNavbar from "./CategoriesNavbar"
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   const [activeDropdown, setActiveDropdown] = useState(null);
//   const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the mobile menu

//   const toggleDropdown = (dropdown) => {
//     setActiveDropdown((prevState) =>
//       prevState === dropdown ? null : dropdown
//     );
//   };

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen); // Toggle mobile menu visibility
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <Link to="/">
//           <div className="navbar-brand px-4">AI Tools</div>
//         </Link>

//         {/* Navbar Menu */}
//         <div className={`navbar-menu px-4 ${isMenuOpen ? "show" : ""}`}>
//           <ul className="navbar-nav nav-left">
//             <li className="nav-item">
//               <Link to="/" className="nav-link">
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <a href="#" className="nav-link">
//                 Categories
//               </a>
//             </li>
//             <li
//               className="nav-item dropdown"
//               onClick={() => toggleDropdown("tools")}
//             >
//               <Link to="/imagemindai" className="nav-link dropdown-toggle">
//                 AI Tools
//               </Link>
//             </li>
//             <li
//               className="nav-item dropdown"
//               onClick={() => toggleDropdown("news")}
//             >
//               <Link to="/AINewsPage" className="nav-link dropdown-toggle">
//                 AI News
//               </Link>
//             </li>
//             <li className="nav-item">
//               <a href="#" className="nav-link">
//                 Blog
//               </a>
//             </li>
//           </ul>
//         </div>

//         {/* Contact Button */}
//         <div className="navbar-contact">
//           <button className="contact-btn bg-[#2e3a47]">Contact</button>
//         </div>

//         {/* Hamburger Icon for Mobile */}
//         <div className="navbar-toggler" onClick={toggleMenu}>
//           <span className="bar"></span>
//           <span className="bar"></span>
//           <span className="bar"></span>
//         </div>
//       </nav>

//       <div>
//         <BreadcrumbScroll />
//         <CategoriesNavbar />
//       </div>
//     </>
//   );
// };

// export default Navbar;

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
      <nav className="navbar">
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
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Categories
              </a>
            </li>
            <li className="nav-item">
              <Link to="/imagemindai" className="nav-link">
                AI Tools
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/AINewsPage" className="nav-link">
                AI News
              </Link>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Desktop-only Contact Button */}
        <div className="navbar-contact">
          <button className="contact-btn relative overflow-hidden text-white px-4 py-2 rounded-md">
            Contact
            <span className="glowing-ring"></span>
          </button>
        </div>
      </nav>
      {/* <BreadcrumbScroll /> */}
      {/* <CategoriesNavbar /> */}
      <Chatbot />
    </>
  );
};

export default Navbar;
