// import React, { useState, useEffect, useRef } from "react";
// import { Link } from "react-router-dom";

// const Featured = () => {
//   const canvasRef = useRef(null);
//   const [featuredTools] = useState([
//     {
//       id: 1,
//       name: "AI Writer Pro",
//       category: "Writing",
//       rating: 4.8,
//       image:
//         "https://readdy.ai/api/search-image?query=modern%20AI%20writing%20assistant%20interface%20with%20glowing%20text%20elements%2C%20professional%20dark%20theme%20UI%20design%2C%20futuristic%20text%20editor%20concept%2C%20clean%20minimalist%20layout%20with%20blue%20accents&width=400&height=300&seq=13&orientation=landscape",
//     },
//     {
//       id: 2,
//       name: "ImageMaster AI",
//       category: "Image",
//       rating: 4.9,
//       image:
//         "https://readdy.ai/api/search-image?query=AI%20image%20generation%20interface%20with%20artistic%20elements%2C%20professional%20dark%20theme%20UI%20design%2C%20creative%20digital%20art%20workspace%2C%20modern%20tool%20layout%20with%20purple%20accents&width=400&height=300&seq=14&orientation=landscape",
//     },
//     {
//       id: 3,
//       name: "CodeGenius",
//       category: "Coding",
//       rating: 4.7,
//       image:
//         "https://readdy.ai/api/search-image?query=AI%20code%20generation%20interface%20with%20programming%20elements%2C%20professional%20dark%20theme%20IDE%20design%2C%20futuristic%20coding%20workspace%2C%20modern%20development%20environment%20with%20green%20accents&width=400&height=300&seq=15&orientation=landscape",
//     },
//   ]);

//   return (
//     <div className="min-h-screen bg-[#042b54] text-white">
//       {/* Featured AI Tools Section */}
//       <section className="py-20 bg-gradient-to-r from-[#1E3D59] to-[#84bcf8]">
//         <div className="container mx-auto px-8 text-center">
//           <h2 className="text-4xl font-bold mb-10 text-white">
//             Featured AI Tools
//           </h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
//             {featuredTools.map((tool) => (
//               <div
//                 key={tool.id}
//                 className="bg-[#0f172a] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
//               >
//                 <img
//                   src={tool.image}
//                   alt={tool.name}
//                   className="w-full h-48 object-cover mb-6 rounded-md"
//                 />
//                 <h3 className="text-2xl font-bold text-white mb-2">
//                   {tool.name}
//                 </h3>
//                 <p className="text-gray-400 mb-4">{tool.category}</p>
//                 <p className="text-yellow-500">
//                   {"★".repeat(Math.round(tool.rating))} ({tool.rating})
//                 </p>
//                 <Link to="/Aitools">
//                   <button className="mt-4 text-white bg-[#1E3D59] py-2 px-6 rounded-full font-semibold hover:bg-blue-600 transition">
//                     Try Now
//                   </button>
//                 </Link>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Featured;




import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const Featured = () => {
  const canvasRef = useRef(null);
  const scrollRef = useRef(null);

  const [featuredTools] = useState([
    {
      id: 1,
      name: "AI Writer Pro",
      category: "Writing",
      rating: 4.8,
      image:
        "https://readdy.ai/api/search-image?query=modern%20AI%20writing%20assistant%20interface%20with%20glowing%20text%20elements%2C%20professional%20dark%20theme%20UI%20design%2C%20futuristic%20text%20editor%20concept%2C%20clean%20minimalist%20layout%20with%20blue%20accents&width=400&height=300&seq=13&orientation=landscape",
    },
    {
      id: 2,
      name: "ImageMaster AI",
      category: "Image",
      rating: 4.9,
      image:
        "https://readdy.ai/api/search-image?query=AI%20image%20generation%20interface%20with%20artistic%20elements%2C%20professional%20dark%20theme%20UI%20design%2C%20creative%20digital%20art%20workspace%2C%20modern%20tool%20layout%20with%20purple%20accents&width=400&height=300&seq=14&orientation=landscape",
    },
    {
      id: 3,
      name: "CodeGenius",
      category: "Coding",
      rating: 4.7,
      image:
        "https://readdy.ai/api/search-image?query=AI%20code%20generation%20interface%20with%20programming%20elements%2C%20professional%20dark%20theme%20IDE%20design%2C%20futuristic%20coding%20workspace%2C%20modern%20development%20environment%20with%20green%20accents&width=400&height=300&seq=15&orientation=landscape",
    },
    {
      id: 1,
      name: "AI Writer Pro",
      category: "Writing",
      rating: 4.8,
      image:
        "https://readdy.ai/api/search-image?query=modern%20AI%20writing%20assistant%20interface%20with%20glowing%20text%20elements%2C%20professional%20dark%20theme%20UI%20design%2C%20futuristic%20text%20editor%20concept%2C%20clean%20minimalist%20layout%20with%20blue%20accents&width=400&height=300&seq=13&orientation=landscape",
    },
    {
      id: 2,
      name: "ImageMaster AI",
      category: "Image",
      rating: 4.9,
      image:
        "https://readdy.ai/api/search-image?query=AI%20image%20generation%20interface%20with%20artistic%20elements%2C%20professional%20dark%20theme%20UI%20design%2C%20creative%20digital%20art%20workspace%2C%20modern%20tool%20layout%20with%20purple%20accents&width=400&height=300&seq=14&orientation=landscape",
    },
    {
      id: 3,
      name: "CodeGenius",
      category: "Coding",
      rating: 4.7,
      image:
        "https://readdy.ai/api/search-image?query=AI%20code%20generation%20interface%20with%20programming%20elements%2C%20professional%20dark%20theme%20IDE%20design%2C%20futuristic%20coding%20workspace%2C%20modern%20development%20environment%20with%20green%20accents&width=400&height=300&seq=15&orientation=landscape",
    },
  ]);
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <div className=" bg-[#042b54] text-white">
      <section className="py-20 bg-gradient-to-r from-[#1E3D59] to-[#84bcf8] relative">
        <div className="container mx-auto px-8 text-center">
          <h2 className="text-4xl font-bold mb-10 text-white">
            Featured AI Tools
          </h2>

          {/* Arrows */}
          <button
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-[#1E3D59] p-3 rounded-full hover:bg-blue-700 z-10"
            onClick={scrollLeft}
          >
            ❮
          </button>
          <button
            className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-[#1E3D59] p-3 rounded-full hover:bg-blue-700 z-10"
            onClick={scrollRight}
          >
            ❯
          </button>

          {/* Scrollable Cards */}
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto scrollbar-hide px-2"
            style={{ scrollSnapType: "x mandatory", scrollBehavior: "smooth" }}
          >
            {featuredTools.map((tool) => (
              <div
                key={tool.id}
                className="min-w-[300px] flex-shrink-0 bg-[#0f172a] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
              >
                <img
                  src={tool.image}
                  alt={tool.name}
                  className="w-full h-48 object-cover mb-6 rounded-md"
                />
                <h3 className="text-2xl font-bold text-white mb-2">
                  {tool.name}
                </h3>
                <p className="text-gray-400 "  style={{margin:"0px"}}>{tool.category}</p>
                <p className="text-yellow-500" style={{margin:"0px"}}>
                  {"★".repeat(Math.round(tool.rating))} ({tool.rating})
                </p>
                <Link to="/Aitools">
                  <button className="mt-4 text-white bg-[#1E3D59] py-2 px-6 rounded-full font-semibold hover:bg-blue-600 transition">
                    Try Now
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Featured;
