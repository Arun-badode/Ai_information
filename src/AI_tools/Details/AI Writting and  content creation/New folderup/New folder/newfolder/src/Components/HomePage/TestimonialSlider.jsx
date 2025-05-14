import React, { useRef } from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    quote:
      "It really has been huge... [seeing] somebody working on it helps calm the situation and gives people confidence that things are moving forward and the issue is being worked on.",
    author: "SCOTT BELIE",
    company: "MD7",
    logoColor: "#C29B00",
  },
  {
    videoUrl: "https://www.w3schools.com/html/movie.mp4",
    quote:
      "Miles IT made our lives easier. Support is fast and efficient, and the team feels like part of our own.",
    author: "JANE DOE",
    company: "ABC Corp",
    logoColor: "#AB854F",
  },
  {
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    quote:
      "Quick response, clear communication, and great results—Miles IT delivers every time.",
    author: "JOHN SMITH",
    company: "XYZ Inc.",
    logoColor: "#998A4E",
  },
];

const TestimonialCarousel = () => {
  const carouselRef = useRef(null);

  const handlePrev = () => {
    carouselRef.current.prev();
  };

  const handleNext = () => {
    carouselRef.current.next();
  };

  return (
    <section
      className="py-5 position-relative"
      style={{ backgroundColor: "#EDE5BC" }} // lightest cream tone
    >
      <div className="container">
      <h2
  className="text-center fw-bold mb-5"
  style={{
    background: "linear-gradient(to right, #FFD700, #333333)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  }}
>
  Hear what our Raving Fans have to say
</h2>

        <div className="position-relative">
          {/* Custom Arrows */}
          <button
            onClick={handlePrev}
            className="btn position-absolute top-50 start-0 translate-middle-y"
            style={{
              zIndex: 10,
              background: "linear-gradient(to right, #F1D170, #D6BB57)",
              border: "none",
              color: "#fff",
              borderRadius: "50%",
              padding: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            }}
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={handleNext}
            className="btn position-absolute top-50 end-0 translate-middle-y"
            style={{
              zIndex: 10,
              background: "linear-gradient(to right, #F1D170, #D6BB57)",
              border: "none",
              color: "#fff",
              borderRadius: "50%",
              padding: "12px",
              boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
            }}
          >
            <FaChevronRight />
          </button>

          <Carousel
            ref={carouselRef}
            indicators={false}
            controls={false}
            interval={null}
            className="mx-5"
          >
            {testimonials.map((item, index) => (
              <Carousel.Item key={index}>
                <div
                  className="row align-items-center justify-content-center"
                  style={{ minHeight: "400px" }}
                >
                  {/* Video Section */}
                  <div className="col-md-6 mb-4 mb-md-0">
                    <div
                      className="p-3 rounded h-100 d-flex align-items-center"
                      style={{
                        background:
                          "linear-gradient(to right, #FFF4D1, #F3EEC9)", // light warm gradient
                        borderRadius: "20px",
                        height: "100%",
                      }}
                    >
                      <video
                        controls
                        src={item.videoUrl}
                        className="w-100 rounded"
                        style={{
                          border: "4px solid #D6BB57",
                          borderRadius: "16px",
                          height: "300px",
                          objectFit: "cover",
                          boxShadow: "0 6px 16px rgba(0,0,0,0.1)",
                        }}
                      />
                    </div>
                  </div>

                  {/* Quote Section */}
                  <div className="col-md-6">
                    <h3 className="fw-bold mb-2" style={{ color: item.logoColor }}>
                      {item.company}
                    </h3>
                    <p className="text-muted fs-5">
                      <span
                        style={{
                          fontSize: "32px",
                          color: "#D8A31E",
                          marginRight: "10px",
                          verticalAlign: "top",
                        }}
                      >
                        “
                      </span>
                      {item.quote}
                    </p>
                    <p
                      className="fw-bold"
                      style={{
                        color: "#AB854F",
                      }}
                    >
                      {item.author} / {item.company}
                    </p>
                  </div>
                </div>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
