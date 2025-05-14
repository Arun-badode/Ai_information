import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    name: "Robert M.",
    date: "5 months ago",
    review:
      "Miles IT has worked with our company for a couple of years now and has always provided superb service. All assistance is prompt and direct – whether it is to help you set up your technology or diagnose a problem. Shout out to Gabe! Very much appreciate your assistance with our last issue, thank you sir.",
  },
  {
    name: "Kevin McCarthy",
    date: "10 months ago",
    review:
      "Outstanding experience! Very professional and thorough and I couldn’t be more impressed with Miles and their recommendations! John Horner is a rockstar. Look forward to continuing to work with miles tech on future projects!",
  },
  {
    name: "Gina Thiesfeldt",
    date: "a year ago",
    review:
      "The tech’s at Miles IT are knowledgeable, friendly and helpful. I can’t say enough good about them. They always seem to go above and beyond and not only fix my issues but also explain things so we don’t have future issues. They are patient and thorough. I highly recommend working with the Miles IT team!",
  },
];

const Reviews = () => {
  return (
    <div className=" py-5 text-center" style={{ backgroundColor: "#F9F6E9" }}>
      <h2
        className="fw-bold fs-3 mb-3"
        style={{
          background: "linear-gradient(to right, #FFD700, #333333)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Check out our Google reviews!
      </h2>

      <div className="d-flex justify-content-center align-items-center mb-2">
        <span className="fs-2 fw-semibold text-warning">4.8</span>
        <FaStar className="text-warning mx-1 fs-4" />
        <span className="fs-6 text-primary">278 reviews</span>
      </div>
      <div className="d-flex justify-content-center align-items-center mb-4">
        <div className="d-flex align-items-center">
          <small className="text-muted me-1">powered by</small>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" // Replace with your image
            alt="Google"
            style={{ height: "16px", objectFit: "contain" }}
          />
        </div>
      </div>

      <div className="container">
        <div className="row">
          {reviews.map((review, idx) => (
            <div key={idx} className="col-lg-4 mb-4">
              <div className="card h-100 shadow-sm border-0 rounded">
                <div className="card-body border-yellow-500 border-[2px]  rounded-4">
                  <h5 className="card-title fw-semibold">{review.name}</h5>
                  <div className="d-flex align-items-center mb-2 text-warning">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                  <div className="d-flex align-items-center mb-2 text-muted">
                    <img
                      src="https://i.postimg.cc/fLqTG4zN/Google-Symbol.png" // Google G Logo again
                      alt="Google"
                      width="25"
                      height="25"
                      className="me-2"
                    />
                    <small>{review.date}</small>
                  </div>
                  <p className="card-text text-start text-muted">
                    {review.review}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button className="btn btn-warning fw-semibold px-4 py-2 mt-3" style={{
    background: "linear-gradient(to right, #FFD700, #FF8C00)",
    border: "none",
    color: "black",
  }}>
          View More
        </button>
      </div>
    </div>
  );
};

export default Reviews;
