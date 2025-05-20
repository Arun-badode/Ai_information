// import axios from "axios";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

// const Chatbot = () => {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);
//     const [botResponse, setBotResponse] = useState("");

//   const toggleChatbot = () => {
//     setIsOpen(!isOpen);
//   };

//   const [human_message ,sethuman_message] = useState(null)

  
//   const handleChange = (e) => {
//     sethuman_message(e.target.value);
//   };

// const handleSend = async () => {
//     if (!human_message.trim()) return;
//     try {
//       const response = await fetch("https://ai-tools-assistant-production.up.railway.app/chat", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ human_message }),
//       });
//       const data = await response.json();
//       console.log(data);
//       setBotResponse(data || "No response from bot.");

//       // data?.redirect_url && navigate(`${redirect_url}`)
//       sethuman_message(""); // Clear input after sending
//     } catch (error) {
//       setBotResponse("Error: " + error.message);
//       console.error("Error sending message:", error);
//     }
//   };

//   useEffect(() => {
//     if (botResponse?.redirect_url) {
//       navigate(botResponse.redirect_url);
//     }
//   }, [botResponse, navigate]);
//   return (
//     <div
//       style={{
//         position: "fixed",
//         bottom: "10px",
//         right: "20px",
//         zIndex: 1000,
//       }}
//     >
//       <button
//         className="btn rounded-circle p-3 shadow-lg"
//         onClick={toggleChatbot}
//         title={isOpen ? "Close Chatbot" : "Open Chatbot"}
//         style={{
//           width: "50px",
//           height: "50px",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           backgroundColor: "#005A9C",
//         }}
//       >
//         💬
//       </button>

//       {isOpen && (
//         <div
//           style={{
//             position: "absolute",
//             bottom: "70px",
//             right: "0",
//             width: "400px",
//             height: "260px",
//             backgroundColor: "#fff",
//             borderRadius: "10px",
//             boxShadow: "0px 4px 10px rgba(0,0,0,0.2)",
//             display: "flex",
//             flexDirection: "column",
//             overflow: "hidden",
//           }}
//         >
//           <div
//             style={{
//               background: "#005A9C",
//               color: "white",
//               padding: "5px",
//               textAlign: "center",
//               fontWeight: "bold",
//             }}
//           >
//             Chatbot
//           </div>
//           <div
//             style={{
//               flex: 1,
//               padding: "10px",
//               overflowY: "auto",
//             }}
//           >
//             <p>Welcome! How can I help you?</p>

//             {/* <p>{data?.response}</p> */}
//           </div>
//           <div
//             style={{
//               padding: "10px",
//               borderTop: "1px solid #ddd",
//               display: "flex",
//             }}
//           >
            
//             <div className="input-group">
//               <button className="btn btn-outline-secondary bg-white btn-sm">
//                 <i className="fas fa-microphone"></i>
//               </button>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Type a message..."
//                 value={human_message}
//                 onChange={handleChange}
//                 style={{ flex: 1 }}
//               />
//               {/* Yahan aapka send button agar hai to woh input ke right side rahega */}
//             </div>

//             <button
//               className="btn btn ms-2 text-white"
//               style={{ backgroundColor: "#005A9C" }}
//               onClick={handleSend}
//             >
//               Send
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;



import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Chatbot = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [botResponse, setBotResponse] = useState({});
  const [human_message, sethuman_message] = useState("");
  const [audioFile, setAudioFile] = useState(null);
  const [audioUrl, setAudioUrl] = useState("");
  const [transcription, setTranscription] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const toggleChatbot = () => setIsOpen(!isOpen);

  const handleChange = (e) => sethuman_message(e.target.value);


   const handleSend = async () => {
    if (audioFile) {
      // Send audio if available
      await handleAudioUpload(audioFile);
      setAudioFile(null); // Clear after sending
    } else if (human_message.trim()) {
      // Otherwise send text
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
  };

  // Handle audio file upload
  const handleAudioUpload = async (file) => {
    const formData = new FormData();
    formData.append("audio_file", file);
    try {
      const response = await fetch("https://ai-tools-assistant-production.up.railway.app/voice_assistant", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setTranscription(data.transcription || "");
      console.log(data)
      setBotResponse(data);
      if (data.audio_url) {
        setAudioUrl("https://ai-tools-assistant-production.up.railway.app" + data.audio_url);
      }
    } catch (error) {
      setBotResponse({ response: "Error: " + error.message });
    }
  };

  // Handle file input change
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAudioFile(file);
      handleAudioUpload(file);
    }
  };

  // Handle recording
 const handleRecord = async () => {
  if (isRecording) {
    mediaRecorderRef.current.stop();
    setIsRecording(false);
  } else {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      // Try to use audio/wav, fallback to default if not supported
      let options = { mimeType: "audio/wav" };
      if (!MediaRecorder.isTypeSupported("audio/wav")) {
        options = {};
      }
      mediaRecorderRef.current = new window.MediaRecorder(stream, options);
      audioChunksRef.current = [];
      mediaRecorderRef.current.ondataavailable = (e) => {
        audioChunksRef.current.push(e.data);
      };
      mediaRecorderRef.current.onstop = () => {
        // Check type, convert if not wav
        let audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
        if (audioBlob.type !== "audio/wav") {
          // fallback: use webm and show error
          alert("Your browser does not support recording in WAV format. Please use Chrome or convert the file to WAV before uploading.");
          return;
        }
        setAudioFile(audioBlob);
        handleAudioUpload(audioBlob);
      };
      mediaRecorderRef.current.start();
      setIsRecording(true);
    }
  }
};

  // Redirect if redirect_url exists
  useEffect(() => {
    if (botResponse?.redirect_url) {
      navigate(botResponse.redirect_url);
    }
  }, [botResponse,navigate]);

  return (
    <div style={{ position: "fixed", bottom: "10px", right: "20px", zIndex: 1000 }}>
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
            height: "360px",
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
          <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
            <p>Welcome! How can I help you?</p>
            {botResponse?.response && (
              <div style={{ marginTop: "10px", color: "#005A9C" }}>
                <strong>Bot:</strong> {botResponse.response}
              </div>
            )}
            {transcription && (
              <div style={{ marginTop: "10px", color: "#333" }}>
                <strong>Transcription:</strong> {transcription}
              </div>
            )}
            {audioUrl && (
              <audio controls src={audioUrl} style={{ marginTop: "10px" }} />
            )}
          </div>
                  <div style={{ padding: "10px", borderTop: "1px solid #ddd", display: "flex", flexDirection: "column", gap: "8px" }}>
            <div style={{ display: "flex", gap: "8px" }}>
         
              {/* Removed file input for upload */}
              
            </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <button
                className={`btn btn-outline-secondary bg-white btn-sm ${isRecording ? "text-danger" : ""}`}
                onClick={handleRecord}
                title={isRecording ? "Stop Recording" : "Record Audio"}
              >
                <i className="fas fa-microphone"></i> {isRecording ? "Stop" : ""}
              </button>
              <input
                type="text"
                className="form-control"
                placeholder="Type a message..."
                value={human_message || ""}
                onChange={handleChange}
                style={{ flex: 1 }}
              />
              <button
                className="btn btn ms-2 text-white"
                style={{ backgroundColor: "#005A9C" }}
                onClick={handleSend}
                // disabled={!human_message.trim() && !audioFile}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;