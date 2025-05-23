// import React, { useState, useEffect } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../App.css";
// import axios from "axios";

// const AINewsPage = () => {
//   const [latestNews, setLatestNews] = useState([]);
//   const [visibleNewsCount, setVisibleNewsCount] = useState(10); // Number of items to show initially

//   const featuredNews = {
//     title: "OpenAI's GPT-5 Breakthrough!",
//     description:
//       "GPT-5 brings memory retention, multimodal learning, and dynamic personalities.",
//     image: "https://i.postimg.cc/1tFh88zN/bcdfe4cf5cea4d05381c03cc20ea5db3.jpg",
//     link: "/news/gpt-5-release",
//     date: "April 26, 2025",
//     tags: ["Featured", "Code Assistants"],
//   };

//   const GetLatestNews = async () => {
//     try {
//       const response = await axios.get("https://newsapi.org/v2/everything", {
//         headers: {
//           Authorization: `Bearer d9c1cfb73dbd4e38b1f317d430df037b`,
//         },
//         params: {
//           q: "artificial+intelligence",
//           sortBy: "publishedAt",
//           language: "en",
//           pageSize: 100, // Fetch all items
//         },
//       });

//       const articles = response.data.articles;
//       setLatestNews(articles);
//     } catch (error) {
//       console.error("Error fetching latest news:", error);
//     }
//   };

//   useEffect(() => {
//     GetLatestNews();
//   }, []);

//   // Function to load more items
//   const loadMoreNews = () => {
//     setVisibleNewsCount((prevCount) => prevCount + 10); // Show 10 more items
//   };

//   const trendingTopics = [
//     {
//       title: "Image Generation",
//       image: "https://i.postimg.cc/NjCWb69H/1694164747539.jpg",
//     },
//     {
//       title: "AI Coding Assistants",
//       image: "https://i.postimg.cc/zvkQhKY3/AICoding-Assistant.png",
//     },
//     {
//       title: "Open Source AI",
//       image: "https://i.postimg.cc/tCXwjSF6/images-1.jpg",
//     },
//     {
//       title: "AI in Healthcare",
//       image:
//         "https://i.postimg.cc/L85WqJC6/healthcare-technology-medical-data-by-metamorworks-gettyimages-1127069581-2400x1600-100837041-orig-1.webp",
//     },
//     {
//       title: "AI Regulations",
//       image: "https://i.postimg.cc/bw5B1qW0/images-2.jpg",
//     },
//   ];

//   return (
//     <>
//       <div className="bg-dark p-2 mb-4"></div>

//       <div className="my-5">
//         <h3 className="text-black text-start text-4xl font-roboto mb-4">
//           📰 Featured News
//         </h3>
//         <div className="card bg-dark text-white mb-5 shadow-lg">
//           <img
//             src={featuredNews.image}
//             alt={featuredNews.title}
//             className="card-img-top"
//             style={{ height: "400px", objectFit: "cover" }}
//           />
//           <div className="card-body">
//             <h2>{featuredNews.title}</h2>
//             <p>{featuredNews.description}</p>
//             <div className="mb-3">
//               {featuredNews.tags.map((tag, idx) => (
//                 <span key={idx} className="badge bg-danger me-2">
//                   {tag}
//                 </span>
//               ))}
//             </div>
//             <a href={featuredNews.link} className="btn btn-primary">
//               Read Full Story
//             </a>
//           </div>
//         </div>

//         <div className="row">
//           <div className="col-lg-8">
//             <h3 className="text-black text-start text-4xl font-roboto mb-4">
//               📰 Latest News
//             </h3>

//             <div className="row">
//               {latestNews.slice(0, visibleNewsCount).map((item, index) => (
//                 <div className="col-md-6 mb-4" key={index}>
//                   <div className="card bg-dark text-white h-100 shadow-sm">
//                     <img
//                       src={item.urlToImage || "https://via.placeholder.com/400x200"}
//                       alt={item.title}
//                       className="card-img-top"
//                       style={{ height: "200px", objectFit: "cover" }}
//                     />
//                     <div className="card-body d-flex flex-column">
//                       <h5>{item.title}</h5>
//                       <p>
//                         <strong>Author:</strong> {item.author || "Unknown"}
//                       </p>
//                       <p>{item.description}</p>
//                       <p>
//                         {item.content?.slice(0, 150)}
//                         {item.content && item.content.length > 150 ? "..." : ""}
//                       </p>
//                       <div className="mt-auto">
//                         <small className="text-muted">
//                           {new Date(item.publishedAt).toLocaleDateString()} •{" "}
//                           {item.source.name}
//                         </small>
//                         <a
//                           href={item.url}
//                           className="btn btn-outline-info btn-sm mt-3 w-100"
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           Read More
//                         </a>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             {visibleNewsCount < latestNews.length && (
//               <div className="text-center mt-4">
//                 <button
//                   className="btn btn-primary"
//                   onClick={loadMoreNews}
//                 >
//                   Load More
//                 </button>
//               </div>
//             )}
//           </div>

//           <div className="col-lg-4">
//             <h3 className="text-white mb-4">🔥 Trending Topics</h3>
//             <div className="card bg-dark text-white p-3 shadow-sm">
//               {trendingTopics.map((topic, index) => (
//                 <div key={index} className="d-flex align-items-center mb-3">
//                   <img
//                     src={topic.image}
//                     alt={topic.title}
//                     style={{
//                       width: "50px",
//                       height: "50px",
//                       objectFit: "cover",
//                       borderRadius: "8px",
//                       marginRight: "10px",
//                     }}
//                   />
//                   <h6 className="mb-0">{topic.title}</h6>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>

//         <div className="text-center text-muted mt-5">
//           <small>Auto-updated from APIs and trusted sources.</small>
//         </div>
//       </div>
//     </>
//   );
// };

// export default AINewsPage;





import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";
import "./AINewsPage.css";
import axios from "axios";

const AINewsPage = () => {
  const [latestNews, setLatestNews] = useState([]);
  const [visibleNewsCount, setVisibleNewsCount] = useState(10); // Number of items to show initially
  const [trendingApiArticles, setTrendingApiArticles] = useState([]);

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
          Authorization: `Bearer d9c1cfb73dbd4e38b1f317d430df037b`,
        },
        params: {
          q: "artificial+intelligence",
          sortBy: "publishedAt",
          language: "en",
          pageSize: 100,
        },
      });

      const articles = response.data.articles;
      setLatestNews(articles);
    } catch (error) {
      console.error("Error fetching latest news:", error);
    }
  };

  useEffect(() => {
    GetLatestNews();
  }, []);

  const loadMoreNews = () => {
    setVisibleNewsCount((prevCount) => prevCount + 10);
    setTimeout(() => {
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    }, 100);
  };


  const GetTrending = async () => {
    try {
      const response = await axios.get("https://newsapi.org/v2/everything", {
        headers: {
          Authorization: `Bearer d9c1cfb73dbd4e38b1f317d430df037b`,
        },
        params: {
          q: "technology AND AI", // fixed query
          sources: "techcrunch,the-verge,wired,ars-technica", // corrected source names
          sortBy: "publishedAt",
          language: "en",
          pageSize: 10, // limit for performance
        },
      });

      // response.data.articles contains the articles array
      setTrendingApiArticles(response.data.articles);
    } catch (error) {
      console.error("Error fetching latest news:", error);
    }
  };

  useEffect(() => {
    GetTrending();
  }, []);
  const staticTrendingTopics = [
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
    <div className="container py-5">
      <div className="row">
        <div className="col-lg-8">
          <h2 className="section-title mb-4 text-white font-bold font-roboto">📰 Latest AI News</h2>

          <div className="row">
            {latestNews.slice(0, visibleNewsCount).map((item, index) => (
              <div className="col-md-6 mb-4" key={index}>
                <div className="card ainp-news-card h-100 shadow-sm">
                  <img
                    src={
                      item.urlToImage || "https://via.placeholder.com/400x200"
                    }
                    alt={item.title}
                    className="card-img-top"
                  />
                  <div className="card-body d-flex flex-column">
                    <h5 className="news-title">{item.title}</h5>
                    <p className="news-meta">
                      {item.author || "Unknown"} •{" "}
                      {new Date(item.publishedAt).toLocaleDateString()}
                    </p>
                    <p className="news-description">{item.description}</p>
                    <div className="mt-auto">
                      <a
                        href={item.url}
                        className="btn btn-outline-primary btn-sm w-100"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Read More
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* <div className="col-lg-4">
      <h3 className="text-white mb-4">🔥 Trending Topics</h3>
      <div className="card bg-dark text-white p-3 shadow-sm" style={{ maxHeight: "600px", overflowY: "auto" }}>
        {trendingTopics.length === 0 && <p>Loading...</p>}
        {trendingTopics.map((topic, index) => (
          <div key={index} className="d-flex align-items-center mb-3">
            <img
              src={topic.urlToImage || "https://via.placeholder.com/50"}
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
    </div> */}

          {visibleNewsCount < latestNews.length && (
            <div className="text-center mt-4">
              <button
                className="btn btn-primary"
                onClick={loadMoreNews}
              >
                Load More
              </button>
            </div>
          )}
        </div>

        <div className="col-lg-4">
          <h2 className="section-title mb-4">🔥Trending Topics</h2>
          <div className="card p-3 ainp-trending shadow-sm">
            {trendingApiArticles.length > 0 ? trendingApiArticles.map((topic, index) => (
              <div
                key={index}
                className="d-flex align-items-center mb-3 trending-item"
              >
                <img
                  src={topic.urlToImage}
                  alt={topic.title}
                  className="rounded"
                  style={{
                    width: "50px",
                    height: "50px",
                    objectFit: "cover",
                    marginRight: "12px",
                  }}
                />
                <h6 className="mb-0">{topic.title}</h6>
              </div>
            ))
            : trendingApiArticles.map((article, index) => (
            <div
              key={index}
              className="d-flex align-items-center mb-3 trending-item"
            >
              <img
                src={article.urlToImage}
                alt={article.title}
                className="rounded"
                style={{
                  width: "50px",
                  height: "50px",
                  objectFit: "cover",
                  marginRight: "12px",
                }}
              />
              <h6 className="mb-0">{article.title}</h6>
            </div>
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-muted mt-5">
        <small>News powered by trusted AI sources • Updated regularly</small>
      </div>
    </div>
  );
};

export default AINewsPage;
