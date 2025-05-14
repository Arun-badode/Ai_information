import React from "react";

const promises = [
  {
    title: "No more vacation problems.",
    description:
      "Miles’ team approach to providing services allows for uninterrupted support regardless of any specific individual’s availability.",
  },
  {
    title: "We only bill the exact amount you approve.",
    description:
      "Our pricing is agreed on prior to providing our services, while most of our industry bills by the hour.",
  },
  {
    title: "50.15 seconds.",
    description:
      "In the IT industry it is typical to sit on hold for 20 to 30 minutes. At Miles, your phone calls and emails are expedited through Miles Expert Connect.",
  },
  {
    title: "Vendor neutrality.",
    description:
      "We don’t believe bias helps your business. Our recommendations are always based on customer need alone.",
  },
  {
    title: "The buck stops here.",
    description:
      "With our multiple service offerings and Miles Vendor Management, we can be responsible for ALL of your business technology needs.",
  },
  {
    title: "We have your stuff.",
    description:
      "By design, we maintain a strategic inventory reserve that allows us to fulfill 95% of the emergency equipment needs of our customers.",
  },

];

const OurPromises = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-[#1C3D5D] mb-8">
          A Commitment to Our Customers
        </h2>
        <h3 className="text-3xl font-semibold text-[#1C3D5D] mb-12">
          Our Promises
        </h3>

        {/* Flexbox layout for cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {promises.map((promise, index) => (
            <div
              key={index}
              className=" bg-[#FAF4DE] border-yellow-500 border-[1px] shadow-lg rounded-lg p-6 hover:scale-105 transition-transform bg[#FADD8F]"
            >
              <h4 className="text-xl font-semibold text-[#1C3D5D] mb-4">
                {promise.title}
              </h4>
              <p className="text-lg text-gray-700">{promise.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurPromises;
