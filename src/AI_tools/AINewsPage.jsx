// import React from "react";

// const AINews = () => {
//   return (
//     <div className="bg-black text-light font-sans">
//       {/* AI News & Updates Section */}
//       <section className="container py-5">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="font-bold mb-0">AI News & Updates</h2>

//           <div className="input-group" style={{ maxWidth: "300px" }}>
//             <span className="input-group-text bg-dark border-0 text-gray-400">
//               <i className="bi bi-search"></i>
//             </span>
//             <input
//               type="text"
//               className="form-control bg-dark text-light border-0 text-sm"
//               placeholder="Search articles..."
//             />
//           </div>
//         </div>

//         {/* Categories */}
//         <div className="mb-4">
//           <button className="btn btn-sm btn-primary mr-2 mb-2">All</button>
//           <button className="btn btn-sm btn-dark border text-light mr-2 mb-2">
//             Language Models
//           </button>
//           <button className="btn btn-sm btn-dark border text-light mr-2 mb-2">
//             Dewell
//           </button>
//           <button className="btn btn-sm btn-dark border text-light mr-2 mb-2">
//             GPT
//           </button>
//           <button className="btn btn-sm btn-dark border text-light mr-2 mb-2">
//             Image Gen
//           </button>
//           <button className="btn btn-sm btn-dark border text-light mr-2 mb-2">
//             MidJourney
//           </button>
//           <button className="btn btn-sm btn-dark border text-light mr-2 mb-2">
//             AI Art
//           </button>
//           <button className="btn btn-sm btn-dark border text-light mr-2 mb-2">
//             Code Assistance
//           </button>
//           <button className="btn btn-sm btn-dark border text-light mr-2 mb-2">
//             Devtools
//           </button>
//         </div>

//         {/* News Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
//           <div className="card bg-dark text-light h-full border-0 rounded-xl relative">
//             <span className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs z-10">
//               AI Update
//             </span>
//             <img
//               src="https://i.ibb.co/XZ0bST0V/e15df9722ff50dac880f9a406d53156d3846ea8b.jpg"
//               alt="News"
//               className="card-img-top rounded-t-xl"
//             />
//             <div className="card-body">
//               <div className="flex items-center mb-3">
//                 <img
//                   src="https://i.ibb.co/cKyLyqDm/96a3ff5e28a999be073f9172aa28e5972a13c8e6.jpg"
//                   alt="Author"
//                   className="rounded-full w-10 h-10 mr-2"
//                 />
//                 <small>Sarah Chen</small>
//               </div>
//               <h5 className="card-title font-bold">
//                 OpenAI Releases GPT-5 with Revolutionary Multimodal Capabilities
//               </h5>
//               <p className="card-text text-sm">
//                 The latest generation of GPT-5 is introducing groundbreaking
//                 multimodal capabilities, allowing seamless integration between
//                 text, images, audio, and even video generation.
//               </p>
//               <div>
//                 <span className="badge bg-secondary">Language Models</span>
//               </div>
//             </div>
//           </div>

//           <div className="card bg-dark text-light h-full border-0 rounded-xl relative">
//             <span className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs z-10">
//               AI Update
//             </span>
//             <img
//               src="https://i.ibb.co/7tgskrnd/c530a7ad4db684c64fd1c522b7281b2ddd58d9ae.jpg"
//               alt="News"
//               className="card-img-top rounded-t-xl"
//             />
//             <div className="card-body">
//               <div className="flex items-center mb-3">
//                 <img
//                   src="https://i.ibb.co/cKyLyqDm/96a3ff5e28a999be073f9172aa28e5972a13c8e6.jpg"
//                   alt="Author"
//                   className="rounded-full w-10 h-10 mr-2"
//                 />
//                 <small>Michael Torres</small>
//               </div>
//               <h5 className="card-title font-bold">
//                 Revolutionary AI Image Generation Breakthrough by MidJourney
//               </h5>
//               <p className="card-text text-sm">
//                 MidJourney introduces AI models that produce hyper-realistic
//                 imagery, reshaping how artists and creators design visual
//                 content across industries.
//               </p>
//               <div>
//                 <span className="badge bg-secondary">Image Gen</span>
//               </div>
//             </div>
//           </div>

//           <div className="card bg-dark text-light h-full border-0 rounded-xl relative">
//             <span className="absolute top-2 left-2 bg-blue-600 text-white px-3 py-1 rounded-full text-xs z-10">
//               AI Update
//             </span>
//             <img
//               src="https://i.ibb.co/5hr4h9bH/b8ff2a91212a6c8a295fdaee625ccfb3bde54841.jpg"
//               alt="News"
//               className="card-img-top rounded-t-xl"
//             />
//             <div className="card-body">
//               <div className="flex items-center mb-3">
//                 <img
//                   src="https://i.ibb.co/cKyLyqDm/96a3ff5e28a999be073f9172aa28e5972a13c8e6.jpg"
//                   alt="Author"
//                   className="rounded-full w-10 h-10 mr-2"
//                 />
//                 <small>Alex Johnson</small>
//               </div>
//               <h5 className="card-title font-bold">
//                 GitHub Copilot Introduces Real-Time Code Review Features
//               </h5>
//               <p className="card-text text-sm">
//                 GitHub Copilot's latest evolution offers real-time, AI-driven
//                 code suggestions and reviews, revolutionizing software
//                 development workflows.
//               </p>
//               <div>
//                 <span className="badge bg-secondary">Code Assistance</span>
//                 <span className="badge bg-secondary">Devtools</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* AI Vision Pro Section */}
//       <section className="container py-5">
//         <div className="row items-center">
//           <div className="col-md-6 mb-4 mb-md-0">
//             <div className="flex items-center mb-3">
//               <img
//                 src="https://i.ibb.co/2JSVfSv/7951e3c037f7d553fed0b6ecabf3ec38465ba21f.jpg"
//                 alt="AI Vision Pro"
//                 className="mr-2 w-24 h-24"
//               />
//             </div>
//             <h3 className="font-bold mb-2">AI Vision Pro</h3>
//             <p className="opacity-80">
//               AI Vision Pro is a cutting-edge computer vision platform that
//               transforms how businesses interact with visual data. Leveraging
//               advanced machine learning models, it provides real-time insights,
//               object detection, visual search capabilities, and more.
//             </p>
//             <div className="mt-3">
//               <button className="btn btn-secondary mr-2">Try Now</button>
//               <button className="btn btn-outline-light">Visit Website</button>
//             </div>
//           </div>
//           <div className="col-md-6 text-center">
//             <img
//               src="https://i.ibb.co/gL3p4G4V/731cec57f49f0bddbdf26a5c82ba945977011392.jpg"
//               alt="AI Vision Pro"
//               className="img-fluid rounded-xl"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AINews;

import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import axios from "axios";

// const [chatHistory, setChatHistory] = useState([]);
const AINewsPage = () => {
  const featuredNews = {
    title: "OpenAI's GPT-5 Breakthrough!",
    description:
      "GPT-5 brings memory retention, multimodal learning, and dynamic personalities.",
    image: "https://i.postimg.cc/1tFh88zN/bcdfe4cf5cea4d05381c03cc20ea5db3.jpg",
    link: "/news/gpt-5-release",
    date: "April 26, 2025",
    tags: ["Featured", "Code Assistants"],
  };

  const GetLatestNews = async () => {
  
    try {
      const response = await axios.get("https://newsapi.org/v2/everything", {
        headers: {
          Authorization: `Bearer d9c1cfb73dbd4e38b1f317d430df037b`, // Ensure token is passed in the headers
        },
        params: {
          q: "artificial+intelligence",
          sortBy: "publishedAt",
          language: "en",
        },
      });

      const NEWS_D = response.data;
      console.log("Chat Data:", NEWS_D);

      // if (NEWS_D && Array.isArray(NEWS_D)) {
      //   setChatHistory(NEWS_D);
      // }
      console.log("Chat Data:", NEWS_D);
    } catch (error) {
      console.error("Error fetching chat history:", error);
    }
  };

  useEffect(() => {
    GetLatestNews(); // Fetch user data using the user_id from localStorage
  }, []);

  const latestNews = [
    {
      title: "Midjourney V7 Launches",
      description: "Hyper-realistic images with better text handling.",
      tags: ["Image Gen", "Trends"],
      image:
        "https://i.postimg.cc/zDnY5HMs/ad7686d734c12b2cb9d064d082e1ce59.jpg",
      link: "/news/midjourney-v7",
      date: "April 25, 2025",
    },
    {
      title: "Google DeepMind New AI Chip",
      description: "New chip reduces AI model training costs by 30%.",
      tags: ["Industry", "Innovation"],
      image: "https://i.postimg.cc/mkGxCTcp/5e616fe7fee23d05c93321cd.webp",
      link: "/news/deepmind-ai-chip",
      date: "April 24, 2025",
    },
    {
      title: "AI Trends 2025",
      description: "From emotional AI to personal agents — a look ahead.",
      tags: ["Trends", "Innovation"],
      image:
        "https://i.postimg.cc/KvxSYvhR/0b4fd5d5cd0393553a5c0e81499f8ca1.jpg",
      link: "/news/ai-trends-2025",
      date: "April 23, 2025",
    },
    {
      title: "Meta's New VR Headset",
      description:
        "The latest VR headset offers improved comfort and immersive experiences.",
      tags: ["Tech", "Innovation"],
      image:
        "https://i.postimg.cc/2yCcCyLY/03a8053798de1a7c9c1bd445d9f9a67f.jpg",
      link: "/news/meta-vr-headset",
      date: "April 22, 2025",
    },
  ];

  const trendingTopics = [
    {
      title: "Image Generation",
      image: "https://i.postimg.cc/NjCWb69H/1694164747539.jpg",
    },
    {
      title: "AI Coding Assistants",
      image: "https://i.postimg.cc/zvkQhKY3/AICoding-Assistant.png",
    },
    {
      title: "Open Source AI",
      image: "https://i.postimg.cc/tCXwjSF6/images-1.jpg",
    },
    {
      title: "AI in Healthcare",
      image:
        "https://i.postimg.cc/L85WqJC6/healthcare-technology-medical-data-by-metamorworks-gettyimages-1127069581-2400x1600-100837041-orig-1.webp",
    },
    {
      title: "AI Regulations",
      image: "https://i.postimg.cc/bw5B1qW0/images-2.jpg",
    },
  ];

  return (
    <>
      <div className="bg-dark p-2 mb-4">
        {/* <a href="#" className="text-info d-inline-block text-decoration-none">
          <i className="bi bi-arrow-left text-info me-2"></i>Back to Directory
        </a> */}
      </div>

      <div className=" my-5">
        <h3 className="text-black text-start text-4xl font-roboto mb-4">
          📰 Featured Newss
        </h3>
        {/* Featured News */}
        <div className="card bg-dark text-white mb-5 shadow-lg">
          <img
            src={featuredNews.image}
            alt={featuredNews.title}
            className="card-img-top"
            style={{ height: "400px", objectFit: "cover" }}
          />
          <div className="card-body">
            <h2>{featuredNews.title}</h2>
            <p>{featuredNews.description}</p>
            <div className="mb-3">
              {featuredNews.tags.map((tag, idx) => (
                <span key={idx} className="badge bg-danger me-2">
                  {tag}
                </span>
              ))}
            </div>
            <a href={featuredNews.link} className="btn btn-primary">
              Read Full Story
            </a>
          </div>
        </div>

        {/* Main Section */}
        <div className="row">
          {/* Latest News */}
          <div className="col-lg-8">
            <h3 className="text-black text-start text-4xl font-roboto mb-4">
              📰 Latest News
            </h3>
            <div className="row">
              {latestNews.map((item, index) => (
                <div className="col-md-6 mb-4" key={index}>
                  <div className="card bg-dark text-white h-100 shadow-sm">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="card-img-top"
                      style={{ height: "200px", objectFit: "cover" }}
                    />
                    <div className="card-body d-flex flex-column">
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                      <div className="mt-auto">
                        <div className="mb-2">
                          {item.tags.map((tag, idx) => (
                            <span
                              key={idx}
                              className="badge bg-primary me-2 mb-1"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <small className="text-muted">{item.date}</small>
                        <a
                          href={item.link}
                          className="btn btn-outline-info btn-sm mt-3 w-100"
                        >
                          Read More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trending Topics */}
          <div className="col-lg-4">
            <h3 className="text-white mb-4">🔥 Trending Topics</h3>
            <div className="card bg-dark text-white p-3 shadow-sm">
              {trendingTopics.map((topic, index) => (
                <div key={index} className="d-flex align-items-center mb-3">
                  <img
                    src={topic.image}
                    alt={topic.title}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      borderRadius: "8px",
                      marginRight: "10px",
                    }}
                  />
                  <h6 className="mb-0">{topic.title}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer note */}
        <div className="text-center text-muted mt-5">
          <small>Auto-updated from APIs and trusted sources.</small>
        </div>
      </div>
    </>
  );
};

export default AINewsPage;
