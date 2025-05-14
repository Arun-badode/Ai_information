import React, { useState } from "react";

const FAQ = () => {
  // State to track open questions
  const [activeIndex, setActiveIndex] = useState(null);

  // Toggle function to open/close answers
  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // FAQ data (questions and answers)
  const faqData = [
    {
      question: "What is AI Tools?",
      answer:
        "AI Tools is a collection of applications powered by artificial intelligence designed to make tasks more efficient and automated.",
    },
    {
      question: "How do I use AI Tools?",
      answer:
        "You can use AI Tools by signing up on our platform, choosing the tool you need, and following the simple instructions provided.",
    },
    {
      question: "Is AI Tools free to use?",
      answer:
        "AI Tools offers both free and premium plans, with more advanced features available in the premium plan.",
    },
    {
      question: "How can I contact customer support?",
      answer:
        "You can contact customer support by clicking on the 'Contact' link in the footer, or by sending an email to support@aitools.com.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Yes, you can cancel your subscription anytime through your account settings.",
    },
  ];

  return (
    <div
      className="mx-auto p-5 bg-[#1A202C] rounded-lg text-white"
      style={{ maxWidth: "1000px" }}
    >
      <h2 className="text-4xl font-roboto font-semibold text-center mb-6 text-[#84bcf8]">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border-b border-[#84bcf8] mb-4 bg-[#2D3748] rounded-lg"
          >
            <button
              onClick={() => handleToggle(index)}
              className={`w-full text-left text-xl py-3 px-4 ${
                activeIndex === index
                  ? "bg-gradient-to-r from-sky-400 to-blue-1000 text-[#1A202C]"
                  : "bg-[#2D3748] text-[#E2E8F0]"
              } hover:bg-gradient-to-r hover:from-[#84bcf8] hover:to-[#6A0DAD] hover:text-white transition-colors rounded-md`}
            >
              {item.question}
            </button>
            {/* Display answer only if this question is active */}
            <div
              className={`transition-all duration-300 ease-in-out max-h-0 overflow-hidden ${
                activeIndex === index ? "max-h-[1000px] py-4" : ""
              }`}
              style={activeIndex === index ? { maxHeight: "1000px" } : {}}
            >
              <p className="px-4 py-2 text-[#E2E8F0]">{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
