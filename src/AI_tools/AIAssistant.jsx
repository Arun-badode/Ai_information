import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const AIAssistant = () => {
const [human_message, sethuman_message] = useState("");
  const [botResponse, setBotResponse] = useState({});
  const [showOptions, setShowOptions] = useState(false);

   const navigate = useNavigate();
  const handleMessageChange = (e) => {
   sethuman_message(e.target.value);
  };


  const handleSend = async () => {
     try {
        const response = await fetch("https://ai-tools-assistant-production.up.railway.app/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ human_message }),
        });
        const data = await response.json();
        setBotResponse(data || { response: "No response from bot." });
        sethuman_message("");
      } catch (error) {
        setBotResponse({ response: "Error: " + error.message });
      }
  }
  

  const toggleOptions = () => {
    setShowOptions(!showOptions);
  };

  return (
    <>
      <style>{`
        .text-vgear {
          color: white;
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
          color: black;
          font-weight: 500;
        }

        .btn-outline-vgear:hover {
          background-color: #00bcd4;
          color: black;
        }

        .chat-card {
          border-radius: 16px;
          width: 90%;
          padding: 1rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }

        textarea::placeholder {
          color: #aaa;
        }

        /* Fix for hover text color on white background */
        .btn-outline-secondary.bg-white:hover {
          color: black !important;
        }
      `}</style>

      <div
        style={{
          padding: "40px 0px ",
          background: "#1A202C",
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          margin: "0 auto",
        }}
      >
        <div className="chat-card bg-gradient-to-r from-sky-400 to-blue-1000">
          <div className="text-center mb-3">
            <h4 className="fw-bold text-vgear"> AI Assistant</h4>
            <p className="text-muted small m-0">Ask me anything.</p>
          </div>

          <div className="d-flex align-items-center mb-3">
            {/* <button
              onClick={toggleOptions}
              className="btn btn-outline-vgear btn-sm bg-white"
            >
              <i className="fas fa-sliders-h me-2"></i> Options
            </button> */}
            {showOptions && (
              <div className="ms-2 d-flex gap-2 flex-wrap">
                <button className="btn btn-outline-secondary btn-sm bg-white">
                  <i className="fas fa-image me-1"></i> Image
                </button>
                <button className="btn btn-outline-secondary btn-sm bg-white">
                  <i className="fas fa-code me-1"></i> Code
                </button>
                <button className="btn btn-outline-secondary btn-sm bg-white">
                  <i className="fas fa-book me-1"></i> Writing
                </button>
              </div>
            )}
          </div>

          <textarea
            className="form-control mb-3"
            rows={3}
            value={human_message}
            onChange={handleMessageChange}
            placeholder="Type your message here..."
            onKeyDown={(e) => {
              if (e.key === "Enter" && (human_message.trim() )) {
                handleSend();
              }
            }}
          />

          { botResponse.redirect_url && (
            navigate(botResponse.redirect_url)
          )}

          { botResponse?.response && (
            <div className="card bg-white">
              <div className="card-body">
                <p className="card-text">{botResponse.response}</p>
              </div>
            </div>
          )}


          <div className="d-flex justify-content-between align-items-center">
            <div>
              {/* <button className="btn btn-outline-secondary bg-white btn-sm me-2">
                <i className="fas fa-microphone"></i>
              </button> */}
              {/* <button className="btn btn-outline-secondary btn-sm bg-white">
                <i className="fas fa-paperclip"></i>
              </button> */}
            </div>
            <button className="btn btn-vgear btn-sm bg-white" onClick={handleSend}>
              <i className="fas fa-paper-plane me-2 text-black"> Send</i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AIAssistant;
