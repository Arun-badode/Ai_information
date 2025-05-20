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



// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// const Chatbot = () => {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);
//   const [botResponse, setBotResponse] = useState({});
//   const [human_message, sethuman_message] = useState("");
//   const [audioFile, setAudioFile] = useState(null);
//   const [audioUrl, setAudioUrl] = useState("");
//   const [transcription, setTranscription] = useState("");
//   const [isRecording, setIsRecording] = useState(false);
//   const mediaRecorderRef = useRef(null);
//   const audioChunksRef = useRef([]);

//   const toggleChatbot = () => setIsOpen(!isOpen);

//   const handleChange = (e) => sethuman_message(e.target.value);

//   // Handle text message send
//   const handleSend = async () => {
//     if (!human_message.trim()) return;
//     try {
//       const response = await fetch("https://ai-tools-assistant-production.up.railway.app/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ human_message }),
//       });
//       const data = await response.json();
//       setBotResponse(data || { response: "No response from bot." });
//       sethuman_message("");
//     } catch (error) {
//       setBotResponse({ response: "Error: " + error.message });
//     }
//   };

//   // Handle audio file upload
//   const handleAudioUpload = async (file) => {
//     const formData = new FormData();
//     formData.append("audio_file", file);
//     try {
//       const response = await fetch("https://ai-tools-assistant-production.up.railway.app/voice_assistant", {
//         method: "POST",
//         body: formData,
//       });
//       const data = await response.json();
//       setTranscription(data.transcription || "");
//       console.log(data)
//       setBotResponse(data);
//       if (data.audio_url) {
//         setAudioUrl("https://ai-tools-assistant-production.up.railway.app" + data.audio_url);
//       }
//     } catch (error) {
//       setBotResponse({ response: "Error: " + error.message });
//     }
//   };

//   // Handle file input change
//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setAudioFile(file);
//       handleAudioUpload(file);
//     }
//   };

//   // Handle recording
//   const handleRecord = async () => {
//     if (isRecording) {
//       mediaRecorderRef.current.stop();
//       setIsRecording(false);
//     } else {
//       if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
//         const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//         mediaRecorderRef.current = new window.MediaRecorder(stream);
//         audioChunksRef.current = [];
//         mediaRecorderRef.current.ondataavailable = (e) => {
//           audioChunksRef.current.push(e.data);
//         };
//         mediaRecorderRef.current.onstop = () => {
//           const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
//           setAudioFile(audioBlob);
//           handleAudioUpload(audioBlob);
//         };
//         mediaRecorderRef.current.start();
//         setIsRecording(true);
//       }
//     }
//   };

//   // Redirect if redirect_url exists
//   useEffect(() => {
//     if (botResponse?.redirect_url) {
//       navigate(botResponse.redirect_url);
//     }
//   }, [botResponse, navigate]);

//   return (
//     <div style={{ position: "fixed", bottom: "10px", right: "20px", zIndex: 1000 }}>
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
//             height: "360px",
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
//           <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
//             <p>Welcome! How can I help you?</p>
//             {botResponse?.response && (
//               <div style={{ marginTop: "10px", color: "#005A9C" }}>
//                 <strong>Bot:</strong> {botResponse.response}
//               </div>
//             )}
//             {transcription && (
//               <div style={{ marginTop: "10px", color: "#333" }}>
//                 <strong>Transcription:</strong> {transcription}
//               </div>
//             )}
//             {audioUrl && (
//               <audio controls src={audioUrl} style={{ marginTop: "10px" }} />
//             )}
//           </div>
//           <div style={{ padding: "10px", borderTop: "1px solid #ddd", display: "flex", flexDirection: "column", gap: "8px" }}>
//             <div style={{ display: "flex", gap: "8px" }}>
//               <button
//                 className={`btn btn-outline-secondary bg-white btn-sm ${isRecording ? "text-danger" : ""}`}
//                 onClick={handleRecord}
//                 title={isRecording ? "Stop Recording" : "Record Audio"}
//               >
//                 <i className="fas fa-microphone"></i> {isRecording ? "Stop" : "Record"}
//               </button>
//               <input
//                 type="file"
//                 accept="audio/*"
//                 onChange={handleFileChange}
//                 style={{ flex: 1 }}
//               />
//             </div>
//             <div style={{ display: "flex", gap: "8px" }}>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Type a message..."
//                 value={human_message || ""}
//                 onChange={handleChange}
//                 style={{ flex: 1 }}
//               />

//               { (audioUrl || audioFile) ?  <button
//                 className="btn btn ms-2 text-white"
//                 style={{ backgroundColor: "#005A9C" }}
                
//                 onClick={handleAudioUpload}
//               >
//                 Send Audio
//               </button> :  
//               <button
//                 className="btn btn ms-2 text-white"
//                 style={{ backgroundColor: "#005A9C" }}
                
//                 onClick={handleSend}
//               >
//                 Send
//               </button> }

//               <button
//                 className="btn btn ms-2 text-white"
//                 style={{ backgroundColor: "#005A9C" }}
                
//                 onClick={handleSend}
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;


// import { useState, useRef, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import Recorder from "recorder-js";

// const Chatbot = () => {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);
//   const [botResponse, setBotResponse] = useState({});
//   const [human_message, sethuman_message] = useState("");
//   const [audioFile, setAudioFile] = useState(null);
//   const [audioUrl, setAudioUrl] = useState("");
//   const [transcription, setTranscription] = useState("");
//   const [isRecording, setIsRecording] = useState(false);

//   const recorderRef = useRef(null);
//   const audioContextRef = useRef(null);

//   const toggleChatbot = () => setIsOpen(!isOpen);

//   const handleChange = (e) => sethuman_message(e.target.value);

//   // Handle send for both text and audio
//   const handleSend = async () => {
//     if (audioFile) {
//       await handleAudioUpload(audioFile);
//       setAudioFile(null);
//     } else if (human_message.trim()) {
//       try {
//         const response = await fetch("https://ai-tools-assistant-production.up.railway.app/chat", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify({ human_message }),
//         });
//         const data = await response.json();
//         setBotResponse(data || { response: "No response from bot." });
//         sethuman_message("");
//       } catch (error) {
//         setBotResponse({ response: "Error: " + error.message });
//       }
//     }
//   };

//   // Handle audio file upload
//   const handleAudioUpload = async (file) => {
//     const formData = new FormData();
//     formData.append("audio_file", file, "recording.wav");
//     try {
//       const response = await fetch("https://ai-tools-assistant-production.up.railway.app/voice_assistant", {
//         method: "POST",
//          headers: { "Content-Type": "multipart/form-data" },
//         body: formData,
//       });
//       const data = await response.json();
//       setTranscription(data.transcription || "");
//       setBotResponse(data);
//       if (data.audio_url) {
//         setAudioUrl("https://ai-tools-assistant-production.up.railway.app" + data.audio_url);
//       }
//     } catch (error) {
//       setBotResponse({ response: "Error: " + error.message });
//     }
//   };

//   // Handle recording with recorder-js
//   const handleRecord = async () => {
//     if (isRecording) {
//       recorderRef.current.stop().then(({ blob }) => {
//         setAudioFile(blob); // This is a 16-bit mono PCM WAV file
//         setIsRecording(false);
//       });
//     } else {
//       try {
//         if (!audioContextRef.current) {
//           audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
//         }
//         const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//         recorderRef.current = new Recorder(audioContextRef.current, {
//           // 16-bit mono PCM WAV is default
//         });
//         recorderRef.current.init(stream);
//         recorderRef.current.start();
//         setIsRecording(true);
//       } catch (err) {
//         alert("Microphone access denied or not supported.");
//       }
//     }
//   };

//   // Redirect if redirect_url exists
//   useEffect(() => {
//     if (botResponse?.redirect_url) {
//       navigate(botResponse.redirect_url);
//     }
//   }, [botResponse, navigate]);

//   return (
//     <div style={{ position: "fixed", bottom: "10px", right: "20px", zIndex: 1000 }}>
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
//             height: "360px",
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
//           <div style={{ flex: 1, padding: "10px", overflowY: "auto" }}>
//             <p>Welcome! How can I help you?</p>
//             {botResponse?.response && (
//               <div style={{ marginTop: "10px", color: "#005A9C" }}>
//                 <strong>Bot:</strong> {botResponse.response}
//               </div>
//             )}
//             {transcription && (
//               <div style={{ marginTop: "10px", color: "#333" }}>
//                 <strong>Transcription:</strong> {transcription}
//               </div>
//             )}
//             {audioUrl && (
//               <audio controls src={audioUrl} style={{ marginTop: "10px" }} />
//             )}
//           </div>
//           <div style={{ padding: "10px", borderTop: "1px solid #ddd", display: "flex", flexDirection: "column", gap: "8px" }}>
//             <div style={{ display: "flex", gap: "8px" }}>
//               <button
//                 className={`btn btn-outline-secondary bg-white btn-sm ${isRecording ? "text-danger" : ""}`}
//                 onClick={handleRecord}
//                 title={isRecording ? "Stop Recording" : "Record Audio"}
//               >
//                 <i className="fas fa-microphone"></i> {isRecording ? "Stop" : "Record"}
//               </button>
//             </div>
//             <div style={{ display: "flex", gap: "8px" }}>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Type a message..."
//                 value={human_message || ""}
//                 onChange={handleChange}
//                 style={{ flex: 1 }}
//               />
//               <button
//                 className="btn btn ms-2 text-white"
//                 style={{ backgroundColor: "#005A9C" }}
//                 onClick={handleSend}
//                 disabled={!human_message.trim() && !audioFile}
//               >
//                 Send
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Chatbot;


import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// ...paste encodeWAV function here...


// Add this utility above your Chatbot component or in a separate file

function encodeWAV(samples, sampleRate) {
  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);

  function writeString(view, offset, string) {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }

  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + samples.length * 2, true);
  writeString(view, 8, 'WAVE');
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true); // mono
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeString(view, 36, 'data');
  view.setUint32(40, samples.length * 2, true);

  // PCM samples
  let offset = 44;
  for (let i = 0; i < samples.length; i++, offset += 2) {
    let s = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
  }
  return new Blob([view], { type: 'audio/wav' });
}

const Chatbot = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [botResponse, setBotResponse] = useState({});
  const [human_message, sethuman_message] = useState("");
  const [audioFile, setAudioFile] = useState(null);
  const [audioUrl, setAudioUrl] = useState("");
  const [transcription, setTranscription] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const mediaStreamRef = useRef(null);
  const audioContextRef = useRef(null);
  const scriptProcessorRef = useRef(null);
  const audioDataRef = useRef([]);
  const sampleRateRef = useRef(16000); // 16kHz is common for speech

  const toggleChatbot = () => setIsOpen(!isOpen);

  const handleChange = (e) => sethuman_message(e.target.value);

  // Handle send for both text and audio
  const handleSend = async () => {
    if (audioFile) {
      await handleAudioUpload(audioFile);
      setAudioFile(null);
    } else if (human_message.trim()) {
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
    formData.append("audio_file", file, "recording.wav");
    try {
      const response = await fetch("https://ai-tools-assistant-production.up.railway.app/voice_assistant", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      setTranscription(data.transcription || "");
      setBotResponse(data);
      if (data.audio_url) {
        setAudioUrl("https://ai-tools-assistant-production.up.railway.app" + data.audio_url);
      }
    } catch (error) {
      setBotResponse({ response: "Error: " + error.message });
    }
  };

  // Handle recording (start/stop)
const handleRecord = async () => {
  if (isRecording) {
    // Stop recording
    scriptProcessorRef.current.disconnect();
    audioContextRef.current.close();
    mediaStreamRef.current.getTracks().forEach(track => track.stop());
    setIsRecording(false);

    // Flatten audio data correctly
    const audioChunks = audioDataRef.current;
    const length = audioChunks.reduce((acc, chunk) => acc + chunk.length, 0);
    const flatData = new Float32Array(length);
    let offset = 0;
    for (const chunk of audioChunks) {
      flatData.set(chunk, offset);
      offset += chunk.length;
    }

    // Encode as WAV
    const wavBlob = encodeWAV(flatData, sampleRateRef.current);
    setAudioFile(wavBlob);
    audioDataRef.current = [];
  } else {
    // Start recording
    audioDataRef.current = [];
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)({ sampleRate: sampleRateRef.current });
      const source = audioContextRef.current.createMediaStreamSource(stream);
      scriptProcessorRef.current = audioContextRef.current.createScriptProcessor(4096, 1, 1);
      source.connect(scriptProcessorRef.current);
      scriptProcessorRef.current.connect(audioContextRef.current.destination);

      scriptProcessorRef.current.onaudioprocess = (e) => {
        const channelData = e.inputBuffer.getChannelData(0);
        audioDataRef.current.push(new Float32Array(channelData));
      };

      setIsRecording(true);
    } catch (err) {
      alert("Microphone access denied or not supported.");
    }
  }
};

  // Redirect if redirect_url exists
  useEffect(() => {
    if (botResponse?.redirect_url) {
      navigate(botResponse.redirect_url);
    }
  }, [botResponse, navigate]);

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
                <button
                className={`btn btn-outline-secondary bg-white btn-sm ${isRecording ? "text-danger" : ""}`}
                onClick={handleRecord}
                title={isRecording ? "Stop Recording" : "Record Audio"}
              >
                <i className="fas fa-microphone"></i> {isRecording ? "Stop" : "Record"}
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
                disabled={!human_message.trim() && !audioFile}
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