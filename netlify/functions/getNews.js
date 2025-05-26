// const fetch = require("node-fetch");

// exports.handler = async function (event, context) {
//   const API_KEY = process.env.VITE_NEWS_API_KEY;

//   const res = await fetch(`https://newsapi.org/v2/everything?q=artificial+intelligence&sortBy=publishedAt&language=en&pageSize=100`, {
//     headers: {
//       Authorization: API_KEY,
//     },
//   });

//   const data = await res.json();

//   return {
//     statusCode: 200,
//     body: JSON.stringify(data),
//   };
// };
