import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const cardsData = [
  {
    title: "Miles Helps Initiative",
    description:
      "We believe helping people accomplish more is essential to the success and growth of our local communities. Miles Helps is designed to support the many charities our employees are passionate about through volunteer time-off, donations, and financial commitments.",
    image: "/path/to/image1.jpg", // Replace with actual image path
  },
  {
    title: "Volunteer Time-Off",
    description:
      "With Volunteer Time-Off, our team can volunteer their time without losing a day’s income. Employees can use this for any non-profit work, but we often choose to make it a team effort. We know we get more done together. We like to use that energy to help our community!",
    image: "/path/to/image2.jpg", // Replace with actual image path
  },
  {
    title: "Community Outreach",
    description:
      "Our Community Outreach Program helps local communities by offering educational workshops, technology training, and direct support to those in need. We believe in empowering others to succeed.",
    image: "/path/to/image3.jpg", // Replace with actual image path
  },
  {
    title: "Employee Volunteer Day",
    description:
      "Every year, we dedicate an entire day for our employees to volunteer at various local organizations, helping to make a real difference in our community while fostering team spirit and camaraderie.",
    image: "/path/to/image4.jpg", // Replace with actual image path
  },
];

const CardSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = () => {
    if (currentIndex < cardsData.length - 2) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-lg font-semibold font-roboto text-center mb-8">
          How We Help Others Accomplish More
        </h2>
        <h3 className="text-4xl font-roboto font-bold text-center mb-8">Giving Back</h3>
        <p className="text-center text-lg text-black mb-12">
          A business is only as good as the work it does, and we believe that
          extends to giving back. It’s important for <br/>us to contribute to our
          community’s success as much as they contribute to ours.
        </p>
        <div className="relative flex justify-center gap-8">
          {/* First Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-1/2">
            <img
              src={cardsData[currentIndex].image}
              alt={cardsData[currentIndex].title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-center mb-4">
                {cardsData[currentIndex].title}
              </h3>
              <p className="text-lg text-gray-700">
                {cardsData[currentIndex].description}
              </p>
            </div>
          </div>

          {/* Second Card */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden w-1/2">
            <img
              src={cardsData[currentIndex + 1]?.image}
              alt={cardsData[currentIndex + 1]?.title}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-center mb-4">
                {cardsData[currentIndex + 1]?.title}
              </h3>
              <p className="text-lg text-gray-700">
                {cardsData[currentIndex + 1]?.description}
              </p>
            </div>
          </div>

          {/* Left Arrow */}
          <button
            className="absolute left-[-70px] bottom-[-110px] transform -translate-y-1/2 text-blue-600 p-4"
            onClick={prevCard}
            disabled={currentIndex === 0}
          >
            <FaArrowLeft size={30} />
          </button>

          {/* Right Arrow */}
          <button
            className="absolute right-[-70px] bottom-[-110px] transform -translate-y-1/2 text-blue-600 p-4"
            onClick={nextCard}
            disabled={currentIndex === cardsData.length - 2}
          >
            <FaArrowRight size={30} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardSection;
