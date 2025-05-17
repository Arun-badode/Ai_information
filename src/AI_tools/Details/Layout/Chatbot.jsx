import { useState } from "react";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "10px",
        right: "20px",
        zIndex: 1000,
      }}
    >
      <button
        className="btn rounded-circle p-3 shadow-lg"
        onClick={toggleChatbot}
        title={isOpen ? "Close Chatbot" : "Open Chatbot"}
        style={{
          width: "50px",
          height: "50px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#005A9C",
        }}
      >
        💬
      </button>

      {isOpen && (
        <div
          style={{
            position: "absolute",
            bottom: "70px",
            right: "0",
            width: "400px",
            height: "260px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              background: "#005A9C",
              color: "white",
              padding: "5px",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Chatbot
          </div>
          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto",
            }}
          >
            <p>Welcome! How can I help you?</p>
          </div>
          <div
            style={{
              padding: "10px",
              borderTop: "1px solid #ddd",
              display: "flex",
            }}
          >
            
            <div className="input-group">
              <button className="btn btn-outline-secondary bg-white btn-sm">
                <i className="fas fa-microphone"></i>
              </button>
              <input
                type="text"
                className="form-control"
                placeholder="Type a message..."
                style={{ flex: 1 }}
              />
              {/* Yahan aapka send button agar hai to woh input ke right side rahega */}
            </div>

            <button
              className="btn btn ms-2 text-white"
              style={{ backgroundColor: "#005A9C" }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
