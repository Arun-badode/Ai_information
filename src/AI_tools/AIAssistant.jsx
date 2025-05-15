import React, { useState } from "react";

const AIAssistant = () => {
  const [message, setMessage] = useState("");
  const [showOptions, setShowOptions] = useState(false);

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <>
      <style>{`
        .bg-ai {
          background:"black;
        }

        .text-vgear {
          color: #00bcd4;
        }

        .btn-vgear {
          background-color: #00bcd4;
          color: white;
          font-weight: 600;
          border: none;
          transition: 0.3s ease;
        }

        .btn-vgear:hover {
          background-color: #007b8a;
        }

        .btn-outline-vgear {
          border-color: #00bcd4;
          color: #00bcd4;
          font-weight: 500;
        }

        .btn-outline-vgear:hover {
          background-color: #00bcd4;
          color: white;
        }

        .feature-card:hover {
          transform: translateY(-4px);
          transition: 0.3s ease;
          box-shadow: 0 0 12px rgba(0, 188, 212, 0.2);
        }

        .chat-card {
          border-radius: 16px;
          max-width: 500px;
          width: 100%;
          padding: 1rem;
          background: white;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }

        .center-screen {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
        }

        textarea::placeholder {
          color: #aaa;
        }
      `}</style>

      <div className="bg-ai center-screen px-6">
        <div className="chat-card">
          <div className="text-center mb-3">
            <h4 className="fw-bold text-vgear"> AI Assistant</h4>
            <p className="text-muted small m-0">Ask me anything.</p>
          </div>

          <div className="d-flex align-items-center mb-3">
            <button
              onClick={toggleOptions}
              className="btn btn-outline-vgear btn-sm"
            >
              <i className="fas fa-sliders-h me-2"></i> Options
            </button>
            {showOptions && (
              <div className="ms-2 d-flex gap-2 flex-wrap">
                <button className="btn btn-outline-secondary btn-sm">
                  <i className="fas fa-image me-1"></i> Image
                </button>
                <button className="btn btn-outline-secondary btn-sm">
                  <i className="fas fa-code me-1"></i> Code
                </button>
                <button className="btn btn-outline-secondary btn-sm">
                  <i className="fas fa-book me-1"></i> Writing
                </button>
              </div>
            )}
          </div>

          <textarea
            className="form-control mb-3"
            rows={3}
            value={message}
            onChange={handleMessageChange}
            placeholder="Type your message here..."
          />

          <div className="d-flex justify-content-between align-items-center">
            <div>
              <button className="btn btn-outline-secondary btn-sm me-2">
                <i className="fas fa-microphone"></i>
              </button>
              <button className="btn btn-outline-secondary btn-sm">
                <i className="fas fa-paperclip"></i>
              </button>
            </div>
            <button className="btn btn-vgear btn-sm">
              <i className="fas fa-paper-plane me-2"></i> Send
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAssistant;
