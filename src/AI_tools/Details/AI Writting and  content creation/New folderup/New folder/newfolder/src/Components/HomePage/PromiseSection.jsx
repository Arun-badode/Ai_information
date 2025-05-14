import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";

const promises = [
  {
    id: 1,
    title: "You Request.",
    description: (
      <>
        500 IT Professionals <br /> 20+ Years of Experience
      </>
    ),
    icon: "https://lottie.host/8a628fee-36b1-48ee-9fdf-c52896fc1285/aw0IUnnewT.json", // 👈 Working icon
  },
  {
    id: 2,
    title: "We Respond.",
    description: (
      <>
        &lt;51 Seconds Avg Response Time <br /> 24/7 Live Support
      </>
    ),
    icon: "https://lottie.host/9c753cb7-3c8e-458f-b7be-b39f94a47d47/lLEHzPG6lv.json", // 👈 Working icon
  },
  {
    id: 3,
    title: "It Gets Done!",
    description: <>99.7% Success Rate</>,
    icon: "https://assets2.lottiefiles.com/packages/lf20_touohxv0.json", // 👈 Working icon
  },
];

const OurPromise = () => {
  return (
    <div className="container-fluid py-5 px-3" style={{ background: "#F9F6E9" }}>
      <h2
        className="text-center text-black fw-bold mb-5 fs-2"
        style={{
          background: "linear-gradient(to right, #FFD700, #333333)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Our Promise
      </h2>
      <div className="row justify-content-center g-4 ">
        {promises.map(({ id, title, description, icon }) => (
          <div key={id} className="col-12 col-md-6 col-lg-4">
            <div className="bg-white text-center rounded-4 shadow-sm p-4 h-100 d-flex flex-column align-items-center justify-content-center border-yellow-500 border-[2px]">
              <div className="mb-3">
                <Player src={icon} className="w-50" autoplay loop />
              </div>
              <div
                className="bg-primary-subtle text-black fw-semibold rounded-pill px-4 py-2 mb-3"
                style={{
                  background: "linear-gradient(to right, #FFD700, #FF8C00)",
                  border: "none",
                  color: "#333",
                }}
              >
                {title}
              </div>
              <div className="text-dark fw-semibold fs-6">{description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurPromise;
