const WhatWeDoSection = () => {
  return (
    <section
      className="relative text-white py-36 px-4 text-center bg-cover bg-center min-h-[90vh]"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/5t0t9ff5/Whats-App-Image-2025-05-10-at-12-24-53-f623c4d9.jpg')",
      }}
    >
      {/* Top left-side border bar */}
      <div className="absolute top-0 left-0 h-1 w-40 bg-[#38BDF8] rounded-r-md z-20"></div>

      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm z-0"></div>

      {/* Content Box */}
      <div className="relative z-10 max-w-4xl mx-auto border border-white/30 bg-white/10 backdrop-blur-md p-10 rounded-xl shadow-lg">
        <h1 className="text-5xl font-semibold mb-4 font-roboto text-[#38BDF8] drop-shadow-md">
          What we do
        </h1>
        <h2 className="text-3xl sm:text-4xl font-semibold font-roboto mb-6 text-[#E2E8F0] drop-shadow">
          in <span className="text-[#84bcf8]">AI Tools</span>.
        </h2>
        <p className="text-lg text-[#E2E8F0] leading-relaxed mt-4 drop-shadow-sm">
          Our platform offers cutting-edge AI tools designed to enhance your
          productivity, creativity, and efficiency. Discover the perfect AI
          solutions for your unique needs.
        </p>
      </div>
    </section>
  );
};

export default WhatWeDoSection;
