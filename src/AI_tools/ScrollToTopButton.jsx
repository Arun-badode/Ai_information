import React, { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Check the scroll position to show/hide the button
  const checkScrollPosition = () => {
    if (window.scrollY > 300) {
      setIsVisible(true); // Show the button if the scroll position is more than 300px
    } else {
      setIsVisible(false); // Hide the button if less than 300px
    }
  };

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scroll effect
    });
  };

  useEffect(() => {
    // Add scroll event listener when the component mounts
    window.addEventListener("scroll", checkScrollPosition);

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", checkScrollPosition);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-4 left-4  text-white shadow-lg transition-opacity ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{
        display: isVisible ? "block" : "none",
        width: "48px", // Equal width
        height: "48px", // Equal height
        borderRadius: "50%", // Makes it circular
        fontSize: "20px", // Bigger arrow
        textAlign: "center", // Centers content
        lineHeight: "48px", // Vertical center
        backgroundColor: "#005A9C",
      }}
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
