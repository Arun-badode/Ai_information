import React from "react";
import ItTeam from "../../Images/ITTeam.png";

const teamData = [
  {
    title: "Team Member 1",
    description:
      "Meet the dedicated team member who helps keep our systems running smoothly and ensures excellent service delivery.",
    image: ItTeam, // Replace with actual image path
  },
  {
    title: "Team Member 2",
    description:
      "Our team member working hard behind the scenes to ensure top-notch service and client satisfaction.",
    image: ItTeam, // Replace with actual image path
  },
  {
    title: "Team Member 3",
    description:
      "Another key part of our team that ensures the success and smooth operation of our technology infrastructure.",
    image: ItTeam, // Replace with actual image path
  },
  {
    title: "Team Member 3",
    description:
      "Another key part of our team that ensures the success and smooth operation of our technology infrastructure.",
    image: ItTeam, // Replace with actual image path
  },
  {
    title: "Team Member 3",
    description:
      "Another key part of our team that ensures the success and smooth operation of our technology infrastructure.",
    image: ItTeam, // Replace with actual image path
  },
  {
    title: "Team Member 3",
    description:
      "Another key part of our team that ensures the success and smooth operation of our technology infrastructure.",
    image: ItTeam, // Replace with actual image path
  },
  {
    title: "Team Member 3",
    description:
      "Another key part of our team that ensures the success and smooth operation of our technology infrastructure.",
    image: ItTeam, // Replace with actual image path
  },
  {
    title: "Team Member 3",
    description:
      "Another key part of our team that ensures the success and smooth operation of our technology infrastructure.",
    image: ItTeam, // Replace with actual image path
  },
];

const ITTeamSection = () => {
  return (
    <div className="py-12 bg-[#FAF4DE]">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold font-roboto text-center mb-2">
          We Thrive Because of Our People
        </h2>
        <p className="text-center text-3xl text-black mb-12">Our People</p>

        <h2 className="text-4xl font-bold font-roboto text-start text-blue-700">
          IT Teams
        </h2>
        <p className="text-start text-lg text-black mb-12">
          Meet some of the people who keep your systems up and running and
          secure.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamData.map((team, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={team.image}
                alt={team.title}
                className="w-full h-84 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold font-roboto text-end text-blue-700 mt-20">
          SoftWare Teams
        </h2>
        <p className="text-end text-lg text-black mb-12">
          See some of the faces behind the innovative solutions
          <br /> that transform your vision into reality.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamData.map((team, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={team.image}
                alt={team.title}
                className="w-full h-84 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold font-roboto text-start text-blue-700 mt-20">
          Marketing Teams
        </h2>
        <p className="text-start text-lg text-black mb-12">
          Here are a few of the creative folks that communicate your unique
          brand, delight your customers, and get your message in front of the
          right audience at the right time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamData.map((team, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={team.image}
                alt={team.title}
                className="w-full h-84 object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold font-roboto text-end text-blue-700 mt-20">
          India Teams
        </h2>
        <p className="text-end text-lg text-black mb-12">
          Our India team is growing! Meet some of the team members dedicated to
          delivering the <br />
          best IT, software, and marketing solutions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamData.map((team, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <img
                src={team.image}
                alt={team.title}
                className="w-full h-84 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ITTeamSection;
