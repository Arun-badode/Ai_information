import React from "react";
import { Link } from "react-router-dom";

const CategoryCard = ({ imgSrc, title, subtitle, subtitleLinks, link }) => {
  let subtitleItems = [];

  if (subtitleLinks && Array.isArray(subtitleLinks)) {
    // If subtitleLinks is passed, we use it
    subtitleItems = subtitleLinks.map((item) => (
      <Link
        key={item.label}
        to={item.route}
        style={{ textDecoration: "none", color: "#007bff" }}
      >
        {item.label}
      </Link>
    ));
  } else if (subtitle) {
    // If subtitle is a string, split it by comma
    subtitleItems = subtitle.split(",").map((item, index) => (
      <span key={index}>
        {item.trim()}
        <br />
      </span>
    ));
  }

  return (
    <div className="col-12 col-md-6 mb-4">
      <div
        className="category-card d-flex flex-column flex-md-row"
        style={{
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          padding: "10px",
          backgroundColor: "#f8f9fa",
          transition: "transform 0.3s ease",
          display: "flex",
          alignItems: "center",
          height: "auto",
        }}
      >
        {/* Image Column */}
        <div className="col-12 col-md-4" style={{ padding: "0" }}>
          <img
            src={imgSrc}
            alt={title}
            className="img-fluid rounded"
            style={{
              width: "100%",
              height: "180px",
              objectFit: "cover",
              borderRadius: "10px",
            }}
          />
        </div>

        {/* Content Column */}
        <div
          className="col-12 col-md-8 d-flex flex-column justify-content-center"
          style={{
            padding: "10px 20px",
          }}
        >
          <h3
            className="category-card-title"
            style={{
              fontSize: "1.5rem",
              fontWeight: "600",
            }}
          >
            {title}
          </h3>
          <div
            className="category-card-subtitle"
            style={{ fontSize: "1rem", color: "gray" }}
          >
            {subtitleItems}
          </div>

          <Link
            to={link}
            className="category-card-button"
            style={{
              color: "#007bff",
              textDecoration: "none",
              fontSize: "0.9rem",
            }}
          >
            Show all {title}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
