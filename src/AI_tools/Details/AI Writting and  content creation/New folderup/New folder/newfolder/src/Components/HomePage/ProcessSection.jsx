// import React, { useState } from "react";
// import { FaShieldAlt, FaCogs, FaHandsHelping } from "react-icons/fa";

// const ProcessSection = () => {
//   const [activeTab, setActiveTab] = useState(1);

//   return (
//     <div className="bg-white py-16">
//       <div className="max-w-7xl mx-auto px-6">
//         <h2 className="text-4xl font-extrabold font-roboto text-center mb-8">
//           We make technology simple.
//         </h2>

//         {/* Tabs for the steps */}
//         <div className="flex justify-center gap-16 mb-8">
//           <button
//             className={`text-xl font-semibold py-2 px-6 ${
//               activeTab === 1
//                 ? "text-blue-700 border-b-2 border-blue-700"
//                 : "text-gray-600"
//             }`}
//             onClick={() => setActiveTab(1)}
//           >
//             1. Consulting
//           </button>
//           <button
//             className={`text-xl font-semibold py-2 px-6 ${
//               activeTab === 2
//                 ? "text-blue-700 border-b-2 border-blue-700"
//                 : "text-gray-600"
//             }`}
//             onClick={() => setActiveTab(2)}
//           >
//             2. Implementation
//           </button>
//           <button
//             className={`text-xl font-semibold py-2 px-6 ${
//               activeTab === 3
//                 ? "text-blue-700 border-b-2 border-blue-700"
//                 : "text-gray-600"
//             }`}
//             onClick={() => setActiveTab(3)}
//           >
//             3. Support
//           </button>
//         </div>

//         {/* Content under the active tab */}
//         {activeTab === 1 && (
//           <div className="text-center">
//             <FaShieldAlt className="mx-auto text-blue-700 mb-6" size={50} />
//             <h3 className="text-2xl font-bold  font-roboto mb-4">Consulting</h3>
//             {/* <p className="text-lg text-gray-700 mb-8">
//               It starts with a friendly introduction. We get to know your
//               business, its processes, and the underlying causes for your needs.
//             </p> */}
//             <p className="text-lg text-black mb-8">
//               It all starts with an in-depth and friendly introduction, where we
//               prioritize truly understanding your business. Our team takes the
//               time to listen to your goals, challenges, and vision for the
//               future. We engage with you through collaborative discussions,
//               learning about your existing processes, workflows, and any pain
//               points you're experiencing. Our goal is to build a strong
//               foundation of trust and transparency, so we can work together
//               toward a common objective.
//             </p>
//             <p className="text-lg text-black  mb-8">
//               As part of this initial phase, we conduct a thorough analysis of
//               your current systems and practices. This includes understanding
//               your technology stack, your team dynamics, and how your business
//               interacts with customers, partners, and internal processes. We
//               evaluate both the technical and operational aspects of your
//               organization to identify gaps or areas that need improvement.
//             </p>
//           </div>
//         )}

//         {activeTab === 2 && (
//           <div className="text-center">
//             <FaCogs className="mx-auto text-blue-700 mb-6" size={50} />
//             <h3 className="text-2xl font-bold font-roboto mb-4">
//               Implementation
//             </h3>
//             {/* <p className="text-lg text-gray-700 mb-8">
//               After understanding your needs, we move to implementation. Our
//               team works closely with you to ensure everything runs smoothly and
//               efficiently.
//             </p> */}
//             <p className="text-lg text-black mb-8">
//               After gaining a clear understanding of your needs and business
//               objectives, we move into the implementation phase. This is where
//               the strategy we’ve developed starts to take shape. Our experienced
//               team works hand-in-hand with you to ensure that each step of the
//               plan is executed flawlessly. We focus on clear communication and
//               seamless collaboration throughout the entire process, ensuring
//               that everyone involved is aligned and working toward the same
//               goal.
//             </p>
//             <p className="text-lg text-black mb-8">
//               Our team takes a methodical approach to implementation, starting
//               with setting up the necessary infrastructure, configuring your
//               systems, and deploying the right technologies tailored to your
//               needs. We prioritize efficiency, making sure that the project
//               stays on track with well-defined milestones and deadlines. Whether
//               it’s developing custom software, integrating new systems, or
//               optimizing existing infrastructure, we ensure that all components
//               are implemented with precision and care.
//             </p>
//           </div>
//         )}

//         {activeTab === 3 && (
//           <div className="text-center">
//             <FaHandsHelping className="mx-auto text-blue-700 mb-6" size={50} />
//             <h3 className="text-2xl font-bold font-roboto mb-4">Support</h3>
//             {/* <p className="text-lg text-gray-700 mb-8">
//               We offer continuous support, ensuring your systems are always up
//               to date and running at peak performance. We're here for you
//               whenever you need help.
//             </p> */}
//             <p className="text-lg text-black mb-8">
//               Our commitment to you doesn’t stop after implementation. We offer
//               continuous, proactive support to ensure that your systems remain
//               fully operational and optimized for the long term. Our dedicated
//               support team is always available to assist you with any issues,
//               updates, or changes that arise. We provide round-the-clock
//               monitoring, system health checks, and troubleshooting to address
//               potential problems before they affect your business operations.
//             </p>
//             <p className="text-lg text-black mb-8">
//               In addition to proactive monitoring, we regularly update your
//               systems to ensure they are running the latest security patches,
//               software versions, and performance optimizations. As technology
//               evolves, we ensure that your business stays ahead of the curve by
//               implementing the latest advancements and best practices. This
//               helps mitigate risks and maintain a secure, future-proof
//               infrastructure.
//             </p>

//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ProcessSection;

import React, { useState } from "react";
import { FaShieldAlt, FaCogs, FaHandsHelping } from "react-icons/fa";
import "animate.css";

const ProcessSection = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className=" py-16" style={{ backgroundColor: "#E2D9A6" }}>
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-4xl font-extrabold font-roboto text-center mb-8"
          style={{
            background: "linear-gradient(to right, #FFD700, #333333)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          We make technology simple.
        </h2>

        {/* Tabs for the steps */}
        <div className="flex justify-center gap-16 mb-8">
          <button
            className={`text-xl font-semibold py-2 px-6 ${
              activeTab === 1
                ? "text-blue-700 border-b-2 border-blue-700"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(1)}
          >
            1. Consulting
          </button>
          <button
            className={`text-xl font-semibold py-2 px-6 ${
              activeTab === 2
                ? "text-blue-700 border-b-2 border-blue-700"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(2)}
          >
            2. Implementation
          </button>
          <button
            className={`text-xl font-semibold py-2 px-6 ${
              activeTab === 3
                ? "text-blue-700 border-b-2 border-blue-700"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab(3)}
          >
            3. Support
          </button>
        </div>

        {/* Content under the active tab */}
        {activeTab === 1 && (
          <div className="text-center animate__animated animate__fadeInUp animate__delay-0.5s">
            <FaShieldAlt className="mx-auto text-warning  mb-6" size={50} />
            <h3 className="text-2xl font-bold  font-roboto mb-4">Consulting</h3>
            <p className="text-lg text-black mb-8">
              It all starts with an in-depth and friendly introduction, where we
              prioritize truly understanding your business. Our team takes the
              time to listen to your goals, challenges, and vision for the
              future. We engage with you through collaborative discussions,
              learning about your existing processes, workflows, and any pain
              points you're experiencing. Our goal is to build a strong
              foundation of trust and transparency, so we can work together
              toward a common objective.
            </p>
            <p className="text-lg text-black  mb-8">
              As part of this initial phase, we conduct a thorough analysis of
              your current systems and practices. This includes understanding
              your technology stack, your team dynamics, and how your business
              interacts with customers, partners, and internal processes. We
              evaluate both the technical and operational aspects of your
              organization to identify gaps or areas that need improvement.
            </p>
          </div>
        )}

        {activeTab === 2 && (
          <div className="text-center animate__animated animate__fadeInUp animate__delay-0.5s">
            <FaCogs className="mx-auto text-warning mb-6" size={50} />
            <h3 className="text-2xl font-bold font-roboto mb-4">
              Implementation
            </h3>
            <p className="text-lg text-black mb-8">
              After gaining a clear understanding of your needs and business
              objectives, we move into the implementation phase. This is where
              the strategy we’ve developed starts to take shape. Our experienced
              team works hand-in-hand with you to ensure that each step of the
              plan is executed flawlessly. We focus on clear communication and
              seamless collaboration throughout the entire process, ensuring
              that everyone involved is aligned and working toward the same
              goal.
            </p>
            <p className="text-lg text-black mb-8">
              Our team takes a methodical approach to implementation, starting
              with setting up the necessary infrastructure, configuring your
              systems, and deploying the right technologies tailored to your
              needs. We prioritize efficiency, making sure that the project
              stays on track with well-defined milestones and deadlines. Whether
              it’s developing custom software, integrating new systems, or
              optimizing existing infrastructure, we ensure that all components
              are implemented with precision and care.
            </p>
          </div>
        )}

        {activeTab === 3 && (
          <div className="text-center animate__animated animate__fadeInUp animate__delay-0.5s">
            <FaHandsHelping className="mx-auto text-warning mb-6" size={50} />
            <h3 className="text-2xl font-bold font-roboto mb-4">Support</h3>
            <p className="text-lg text-black mb-8">
              Our commitment to you doesn’t stop after implementation. We offer
              continuous, proactive support to ensure that your systems remain
              fully operational and optimized for the long term. Our dedicated
              support team is always available to assist you with any issues,
              updates, or changes that arise. We provide round-the-clock
              monitoring, system health checks, and troubleshooting to address
              potential problems before they affect your business operations.
            </p>
            <p className="text-lg text-black mb-8">
              In addition to proactive monitoring, we regularly update your
              systems to ensure they are running the latest security patches,
              software versions, and performance optimizations. As technology
              evolves, we ensure that your business stays ahead of the curve by
              implementing the latest advancements and best practices. This
              helps mitigate risks and maintain a secure, future-proof
              infrastructure.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProcessSection;
