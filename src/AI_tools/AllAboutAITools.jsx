import React from "react";
import "./AllAboutAITools.css";

const AllAboutAITools = () => {
  return (
    <div className="bg-[#042b54] text-white min-h-screen">
      <div className="container mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-center mb-4 text-cyan-400 drop-shadow-lg">
          All About AI Tools
        </h1>
        <p className="text-center text-lg mb-14 text-slate-300 max-w-3xl mx-auto">
          Explore the evolving world of AI tools—from their benefits to detailed
          reviews. Stay current with the latest innovations in software,
          creative AI, and practical implementations.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
          {cardData.map((card, index) => (
            <div className="card" key={index}>
              <div className="card-inner">
                <div className="card-front bg-gradient-to-br from-slate-800 to-slate-900 border border-cyan-400/30 shadow-cyan-400 shadow-md">
                  <div className="flex items-center justify-center mb-3 ">
                    <img
                      src={card.icon}
                      alt={card.title}
                      className="w-10 h-10"
                    />
                  </div>
                  <h2 className="text-xl font-semibold mb-3 text-cyan-300 text-center">
                    {card.title}
                  </h2>
                  <p className="text-sm text-slate-300">{card.front}</p>
                </div>
                <div
                  key={index}
                  className="text-center card-back bg-cover bg-center text-white border border-slate-200 shadow-inner h-64 flex items-center justify-center p-4"
                  style={{ backgroundImage: `url(${card.backImage})` }}
                >
                  <p className="bg-black/50 border border-white/30 px-4 py-2 rounded-lg text-base font-medium shadow-md backdrop-blur-sm">
                    {card.back}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const cardData = [
  {
    title: "Why Use AI?",
    front:
      "AI boosts productivity, accuracy, and innovation across industries.",
    back: "Discover why AI adoption is key to modern business success.",
    backImage: "https://i.postimg.cc/d39kf4q4/1688369553748.jpg",
    icon: "https://img.icons8.com/ios-filled/50/38BDF8/artificial-intelligence.png",
  },
  {
    title: "Benefits",
    front: "Automate tasks, gain insights, and enhance user experience.",
    back: "Save time and reduce costs with smart AI solutions.",
    backImage: "https://i.postimg.cc/q7k3sf4g/Untitled-design-1.png",
    icon: "https://img.icons8.com/ios-filled/50/38BDF8/positive-dynamic.png",
  },
  {
    title: "Comparison",
    front: "Compare leading AI tools by features, pricing, and feedback.",
    back: "Choose the right AI tool with confidence.",
    backImage: "https://i.postimg.cc/tRLDhgfT/Untitled-design-2.png",
    icon: "https://img.icons8.com/color/48/bar-chart.png",
  },
  {
    title: "Latest AI Software",
    front: "GPT-4, Claude, and more—latest advances in AI software.",
    back: "Explore how GPT-4 is setting new standards.",
    backImage: "https://i.postimg.cc/c18B4SHN/Untitled-design-3.png",
    icon: "https://img.icons8.com/ios-filled/50/38BDF8/cloud-computing.png",
  },
  {
    title: "DALL·E 2",
    front: "Generate images from text using OpenAI’s powerful model.",
    back: "Revolutionizing creativity through image generation.",
    backImage: "https://i.postimg.cc/TP7Jh2gT/Untitled-design-4.png",
    icon: "https://img.icons8.com/ios-filled/50/38BDF8/image.png",
  },
  {
    title: "AI in Healthcare",
    front: "AI enhances diagnosis, treatment, and research capabilities.",
    back: "AI improves outcomes and personalizes patient care.",
    backImage: "https://i.postimg.cc/pVZzdLH4/Untitled-design-11.png",
    icon: "https://img.icons8.com/ios-filled/50/38BDF8/health-checkup.png",
  },
  {
    title: "AI Tool Reviews",
    front: "In-depth reviews of popular AI tools for every need.",
    back: "Get insights before you invest in a tool.",
    backImage: "https://i.postimg.cc/Y0m35c4M/Untitled-design-6.png",
    icon: "https://img.icons8.com/ios-filled/50/38BDF8/rating.png",
  },
  {
    title: "User Feedback",
    front: "What real users are saying about AI tools.",
    back: "Unfiltered experiences and ratings from professionals.",
    backImage: "https://i.postimg.cc/59YW46LN/Untitled-design-7.png",
    icon: "https://img.icons8.com/ios-filled/50/38BDF8/feedback.png",
  },
  {
    title: "Code Translation",
    front: "AI translates code across languages with ease.",
    back: "Accelerate cross-platform development using AI.",
    backImage: "https://i.postimg.cc/RVwrtygk/Untitled-design-8.png",
    icon: "https://img.icons8.com/ios-filled/50/38BDF8/source-code.png",
  },
  {
    title: "Image Generation",
    front: "Create stunning images with just a text prompt.",
    back: "AI design tools are redefining visual storytelling.",
    backImage: "https://i.postimg.cc/t4bKNkfY/Untitled-design-9.png",
    icon: "https://img.icons8.com/ios-filled/50/38BDF8/design.png",
  },
  {
    title: "AI in Marketing",
    front: "Automate campaigns, personalize content, track engagement.",
    back: "Boost your digital marketing with smart AI tools.",
    backImage: "https://i.postimg.cc/xdxBY2dz/Untitled-design-10.png",
    icon: " https://img.icons8.com/fluency/48/marketing.png",
  },
];

export default AllAboutAITools;
