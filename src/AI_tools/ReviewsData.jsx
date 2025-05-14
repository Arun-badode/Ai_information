import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Nav,
  Modal,
  Form,
  Button,
} from "react-bootstrap";
import { BsStarFill, BsStar } from "react-icons/bs";
import "bootstrap/dist/css/bootstrap.min.css";

const allReviewsData = [
  {
    name: "Kevin Wang",
    initial: "K",
    daysAgo: "1 day ago",
    rating: 5,
    text: "Absolutely amazing experience! The platform is incredibly informative and offers AI tools that are truly game-changers.",
    source: "Google",
  },
  {
    name: "Vinh Le Van",
    initial: "V",
    daysAgo: "2 days ago",
    rating: 4,
    text: "A must-visit AI platform! Everything from tutorials to tools is thoughtfully designed. Great job!",
    source: "Your Website",
  },
  {
    name: "Halide Ebcinoglu",
    initial: "H",
    daysAgo: "2 days ago",
    rating: 5,
    text: "Very helpful site for anyone exploring AI tools. The experience was smooth and very informative.",
    source: "Facebook",
  },
  {
    name: "Jane Laboissiere",
    initial: "J",
    daysAgo: "4 days ago",
    rating: 4,
    text: "Loved using this site to compare different AI writing tools. The layout is clean and simple!",
    source: "Trustpilot",
  },
  {
    name: "Amit Patel",
    initial: "A",
    daysAgo: "5 days ago",
    rating: 5,
    text: "Fantastic AI resources in one place. Helped me save hours researching different tools.",
    source: "Your Website",
  },
];

const StarRating = ({ count }) => (
  <div className="d-flex gap-1">
    {[...Array(5)].map((_, i) =>
      i < count ? (
        <BsStarFill key={i} color="gold" size={18} />
      ) : (
        <BsStar key={i} color="#ccc" size={18} />
      )
    )}
  </div>
);

const Review = () => {
  const [selectedTab, setSelectedTab] = useState("All");
  const [reviews, setReviews] = useState(allReviewsData);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    name: "",
    text: "",
    rating: 5,
    source: "Your Website",
  });

  const getAverageRating = (source) => {
    const filtered =
      source === "All" ? reviews : reviews.filter((r) => r.source === source);
    const total = filtered.reduce((sum, r) => sum + r.rating, 0);
    const avg = total / (filtered.length || 1);
    return parseFloat(avg.toFixed(1));
  };

  const platforms = [
    { name: "All", rating: getAverageRating("All") },
    { name: "Your Website", rating: getAverageRating("Your Website") },
    { name: "Google", rating: getAverageRating("Google") },
    { name: "Facebook", rating: getAverageRating("Facebook") },
    { name: "Trustpilot", rating: getAverageRating("Trustpilot") },
  ];

  const filterReviews =
    selectedTab === "All"
      ? reviews
      : reviews.filter((r) => r.source === selectedTab);

  const handleSubmit = () => {
    if (!form.name || !form.text) return;
    const newReview = {
      ...form,
      initial: form.name.charAt(0).toUpperCase(),
      daysAgo: "just now",
    };
    setReviews([newReview, ...reviews]);
    setShowModal(false);
    setForm({ name: "", text: "", rating: 5, source: "Your Website" });
  };

  return (
    <div className="bg-gradient-to-r from-sky-400 to-blue-900 text-white py-5">
      <Container>
        {/* Header */}
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold text-white">
            What People Say About Our AI Platform
          </h2>

          <Button
            variant="info"
            className="mt-3 px-4 py-2 rounded-pill"
            onClick={() => setShowModal(true)}
            style={{ backgroundColor: "#38BDF8", color: "#1A202C" }}
          >
            ✍ Write a Review
          </Button>
        </div>

        {/* Tabs with ratings */}
        <Nav
          variant="pills"
          className="justify-content-center flex-wrap gap-3 mb-5"
          onSelect={(selectedKey) => setSelectedTab(selectedKey)}
        >
          {platforms.map((platform) => (
            <Nav.Item key={platform.name}>
              <Nav.Link
                eventKey={platform.name}
                className="px-4 py-2 rounded-pill d-flex align-items-center justify-content-center"
                style={{
                  backgroundColor:
                    selectedTab === platform.name ? "#38BDF8" : "#2D3748",
                  color: selectedTab === platform.name ? "#1A202C" : "#E2E8F0",
                  border: "1px solid #555",
                  transition: "0.3s",
                  cursor: "pointer",
                }}
              >
                <span>{platform.name}</span>
                <span className="ms-2 text-warning fw-bold">
                  ({platform.rating})
                </span>
              </Nav.Link>
            </Nav.Item>
          ))}
        </Nav>

        {/* Reviews Grid */}
        <Row className="g-4">
          {filterReviews.map((rev, idx) => (
            <Col key={idx} md={6} lg={4}>
              <Card
                className="rounded-4 shadow-sm h-100 border-0"
                style={{
                  backgroundColor: "#2D3748",
                  color: "#E2E8F0",
                  boxShadow: "0 4px 15px rgba(0, 0, 0, 0.3)",
                }}
              >
                <Card.Body className="p-3">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="rounded-circle d-flex justify-content-center align-items-center"
                      style={{
                        backgroundColor: "#38BDF8",
                        color: "#1A202C",
                        width: 42,
                        height: 42,
                        fontWeight: "bold",
                      }}
                    >
                      {rev.initial}
                    </div>
                    <div className="ms-3">
                      <div className="fw-bold" style={{ color: "#38BDF8" }}>
                        {rev.name}{" "}
                        <img
                          src="https://img.icons8.com/color/16/verified-badge.png"
                          alt="verified"
                        />
                      </div>
                      <small className="text-[#A0AEC0]">{rev.daysAgo}</small>
                    </div>
                  </div>
                  <div className="mb-2">
                    <StarRating count={rev.rating} />
                  </div>
                  <p className="small" style={{ color: "#E2E8F0" }}>
                    {rev.text}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Modal */}
        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Write a Review</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Your Name</Form.Label>
                <Form.Control
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Your Review</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  value={form.text}
                  onChange={(e) => setForm({ ...form, text: e.target.value })}
                />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Rating</Form.Label>
                <Form.Select
                  value={form.rating}
                  onChange={(e) =>
                    setForm({ ...form, rating: parseInt(e.target.value) })
                  }
                >
                  {[5, 4, 3, 2, 1].map((r) => (
                    <option key={r} value={r}>
                      {r} Star{r > 1 && "s"}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Source</Form.Label>
                <Form.Select
                  value={form.source}
                  onChange={(e) => setForm({ ...form, source: e.target.value })}
                >
                  <option>Your Website</option>
                  <option>Google</option>
                  <option>Facebook</option>
                  <option>Trustpilot</option>
                </Form.Select>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button
              variant="info"
              onClick={handleSubmit}
              style={{ backgroundColor: "#38BDF8", color: "#1A202C" }}
            >
              Submit Review
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
};

export default Review;
