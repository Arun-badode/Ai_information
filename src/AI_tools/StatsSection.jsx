import React, { useEffect, useState } from "react";

const StatsSection = () => {
  const [counts, setCounts] = useState({ tools: 0, categories: 0, updates: 0 });

  useEffect(() => {
    const toolsTarget = 76;
    const categoriesTarget = 16;
    const updatesTarget = 12;

    const interval = 30; // Interval in milliseconds
    const incrementTools = Math.ceil(toolsTarget / 50);
    const incrementCategories = Math.ceil(categoriesTarget / 50);
    const incrementUpdates = Math.ceil(updatesTarget / 50);

    const intervalId = setInterval(() => {
      setCounts((prev) => {
        const newCounts = {
          tools: Math.min(prev.tools + incrementTools, toolsTarget),
          categories: Math.min(
            prev.categories + incrementCategories,
            categoriesTarget
          ),
          updates: Math.min(prev.updates + incrementUpdates, updatesTarget),
        };

        if (
          newCounts.tools === toolsTarget &&
          newCounts.categories === categoriesTarget &&
          newCounts.updates === updatesTarget
        ) {
          clearInterval(intervalId);
        }

        return newCounts;
      });
    }, interval);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="bg-[#042b54] py-20 px-6">
      <div className="container mx-auto text-center">
        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
          <div className="text-white">
            <div
              className="text-6xl font-extrabold mx-auto flex items-center justify-center"
              style={{
                textShadow:
                  "5px 5px 15px rgba(0, 0, 0, 0.5), -5px -5px 15px #38BDF8",
              }}
            >
              {counts.tools}
            </div>
            <p className="text-xl font-semibold mt-4">AI Tools</p>
          </div>
          <div className="text-white">
            <div
              className="text-6xl font-extrabold mx-auto flex items-center justify-center"
              style={{
                textShadow:
                  "5px 5px 15px rgba(0, 0, 0, 0.5), -5px -5px 15px #38BDF8",
              }}
            >
              {counts.categories}
            </div>
            <p className="text-xl font-semibold mt-4">Categories</p>
          </div>
          <div className="text-white">
            <div
              className="text-6xl font-extrabold mx-auto flex items-center justify-center"
              style={{
                textShadow:
                  "5px 5px 15px rgba(0, 0, 0, 0.5), -5px -5px 15px #38BDF8",
              }}
            >
              {counts.updates}
            </div>
            <p className="text-xl font-semibold mt-4">Updates Monthly</p>
          </div>
        </div>

        {/* Testimonial */}
        <blockquote className="text-white text-lg max-w-3xl mx-auto italic">
          "It was a pleasure working with AI Tools Explorer. I found my
          experience exceeded all my expectations & is worth it to be explored."
          <footer className="mt-4 text-sm text-gray-400">
            — AI Enthusiast
          </footer>
        </blockquote>
      </div>
    </section>
  );
};

export default StatsSection;
