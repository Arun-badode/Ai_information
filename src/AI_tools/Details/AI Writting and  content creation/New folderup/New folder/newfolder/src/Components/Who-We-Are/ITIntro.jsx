






// import React from "react";
// import image from "../../Images/image.png";

// const MilesITIntro = () => {
//   return (
//     <div
//       className="font-sans bg-cover bg-center bg-no-repeat"
//       style={{ backgroundImage: `url(${image})` }}
//     >
//       {/* HERO SECTION */}
//       <div className="bg-gradient-to-r from-[#d9e6f5]/90 to-[#bad3ef]/90 w-full min-h-screen flex items-center justify-center">
//         <div className="max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center gap-10">
//           {/* LEFT TEXT */}
//           <div className="md:w-1/2 z-10">
//             <p className="uppercase text-sm tracking-widest text-gray-600 mb-3">
//               An IT Company Committed To Your Success
//             </p>
//             <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
//               We Are Miles IT
//             </h1>
//             <p className="text-lg text-gray-700 mb-6 leading-relaxed">
//               A team of tech professionals focused on helping businesses succeed
//               through digital strategy, support, and technology implementation.
//             </p>
//             <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded shadow-md transition duration-300">
//               Contact Us
//             </button>
//           </div>

//           {/* RIGHT VIDEO */}
//           <div className="md:w-1/2 shadow-xl border border-gray-300 rounded overflow-hidden">
//             <iframe
//               className="w-full h-72 md:h-96"
//               src="https://player.vimeo.com/video/665811581?autoplay=1&loop=1&muted=1&background=1"
//               title="IT Office Video"
//               frameBorder="0"
//               allow="autoplay; fullscreen"
//               allowFullScreen
//             ></iframe>
//           </div>
//         </div>
//       </div>

//       {/* OUR CULTURE SECTION */}
//       <div className="bg-[#e8f2fc] py-16">
//         <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-10">
//           {/* LEFT - IMAGE/VIDEO */}
//           <div className="md:w-1/2">
//             <video
//               src="https://cdn.pixabay.com/video/2023/10/10/185769-865504771_large.mp4"
//               autoPlay
//               muted
//               loop
//               playsInline
//               className="rounded shadow-lg w-full"
//             />
//           </div>

//           {/* RIGHT - TEXT */}
//           <div className="md:w-1/2 text-gray-800">
//             <p className="uppercase text-sm tracking-widest text-gray-600 mb-2">
//               What We Believe In
//             </p>
//             <h2 className="text-3xl font-bold mb-4">Our Culture</h2>
//             <p className="text-lg leading-relaxed mb-6">
//               We are a company made up of caring friends who are as passionate
//               about technology as we are about people. Our culture is defined by
//               our 12 beliefs that help us make the right decisions quickly and
//               move as one company towards achieving a common goal.
//             </p>
//             <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-bold px-6 py-3 rounded shadow-md transition duration-300">
//               Our Beliefs
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MilesITIntro;




import React from "react";
import image from  "../../Images/image.png"

const ITIntro = () => {
  return (
    <div className="relative">
      {/* Fixed Background */}
      <div
        className="fixed top-0 left-0 w-full h-full bg-cover bg-center bg-no-repeat -z-10"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      {/* Overlay Gradient */}
      <div className="fixed top-0 left-0 w-full h-full  -z-10"></div>

      {/* SCROLLABLE CONTENT */}
      <div className="relative z-10">
        {/* HERO SECTION */}
        <div className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
            {/* LEFT TEXT */}
            <div className="md:w-1/2">
              <p className="uppercase text-sm tracking-widest text-white mb-3">
                An IT Company Committed To Your Success
              </p>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                We Are Miles IT
              </h1>
              <p className="text-lg text-white mb-6 leading-relaxed">
                A team of tech professionals focused on helping businesses
                succeed through digital strategy, support, and technology
                implementation.
              </p>
              <button className="bg-[#FADD8F] hover:bg-yellow-200 text-black font-bold px-6 py-3 rounded shadow-md transition duration-300">
                Contact Us
              </button>
            </div>

            {/* RIGHT VIDEO */}
            <div className="md:w-1/2 shadow-xl border border-gray-300 rounded overflow-hidden">
              <iframe
                className="w-full h-72 md:h-96"
                src="https://player.vimeo.com/video/665811581?autoplay=1&loop=1&muted=1&background=1"
                title="IT Office Video"
                frameBorder="0"
                allow="autoplay; fullscreen"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* OUR CULTURE SECTION */}
        <div className="py-20 px-6">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10 bg-white/80 p-8 rounded-xl shadow-lg">
            {/* LEFT - VIDEO */}
            {/* <div className="md:w-1/2">
              <video
                src="https://player.vimeo.com/video/665811581?autoplay=1&loop=1&muted=1&background=1"
                autoPlay
                muted
                loop
                playsInline
                className="rounded shadow-lg w-full"
              />
            </div> */}

            <div className="md:w-1/2">
              <video
                src="https://player.vimeo.com/video/665811581?autoplay=1&loop=1&muted=1&background=1" // Random video
                autoPlay
                muted
                loop
                playsInline
                className="rounded-lg shadow-lg w-full h-auto" // Rounded corners, shadow, and responsive
              />
            </div>

            {/* RIGHT - TEXT */}
            <div className="md:w-1/2 text-gray-800">
              <p className="uppercase text-sm tracking-widest text-gray-600 mb-2">
                What We Believe In
              </p>
              <h2 className="text-3xl font-bold mb-4">Our Culture</h2>
              <p className="text-lg leading-relaxed mb-6">
                We are a company made up of caring friends who are as passionate
                about technology as we are about people. Our culture is defined
                by our 12 beliefs that help us make the right decisions quickly
                and move as one company towards achieving a common goal.
              </p>
              <button className="bg-[#FADD8F] hover:bg-yellow-200 text-black font-bold px-6 py-3 rounded shadow-md transition duration-300">
                Our Beliefs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITIntro;





