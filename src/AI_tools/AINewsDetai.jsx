import React from 'react';
import { useParams, Link } from 'react-router-dom';
import newsData from "../AI_tools/newsData";
import 'bootstrap/dist/css/bootstrap.min.css';

const AINewsDetail = () => {
  const { id } = useParams();
  const article = newsData.find((item) => item.id === id);

  if (!article) {
    return (
      <div className="container text-light py-5">
        <h3>404 - Article Not Found</h3>
        <Link to="/" className="btn btn-outline-info mt-3">Back to News</Link>
      </div>
    );
  }

  return (
    <div className=" text-white">
      {/* <Link to="/" className="text-info  text-decoration-none d-inline-block">
        <i className="bi bi-arrow-left me-2"></i>Back to News
      </Link> */}

      <Link
        to="/AINewsPage"
        className="bg-dark text-light text-decoration-none d-block w-100 p-3"
      >
        <i className="bi bi-arrow-left me-2"></i>
        Back to News
      </Link>

      <div className="card bg-dark text-white shadow-lg mb-4">
        <img
          src={article.image}
          className="card-img-top"
          alt={article.title}
          style={{ height: "400px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h1>{article.title}</h1>
          {article.subtitle && (
            <h5 className="text-info">{article.subtitle}</h5>
          )}
          <div className="d-flex flex-wrap align-items-center mb-3 mt-2">
            <span className="me-3 text-muted">{article.date}</span>
            {article.author && (
              <span className="text-muted">By {article.author}</span>
            )}
          </div>

          <div className="mb-3">
            {article.tags?.map((tag, idx) => (
              <span key={idx} className="badge bg-primary me-2 mb-1">
                {tag}
              </span>
            ))}
          </div>

          {article.highlights && (
            <div className="mb-4">
              <h5 className="text-warning">🔍 Key Highlights</h5>
              <ul className="list-unstyled">
                {article.highlights.map((point, idx) => (
                  <li key={idx} className="mb-2">
                    ✅ {point}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mb-4">
            <p style={{ lineHeight: "1.8", fontSize: "1.1rem" }}>
              {article.content}
            </p>
          </div>

          {article.sources?.length > 0 && (
            <div className="mb-4">
              <h6 className="text-secondary">📚 Sources</h6>
              <ul>
                {article.sources.map((source, i) => (
                  <li key={i}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-info text-decoration-none"
                    >
                      {source.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="d-flex gap-3">
            <button className="btn btn-outline-info">
              <i className="bi bi-share"></i> Share
            </button>
            <button className="btn btn-outline-light">
              <i className="bi bi-bookmark"></i> Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AINewsDetail;







