
import React from "react";

// Client logos array with company names
const clientLogos = [
  { logo: "/path/to/armand.png", name: "Armand" },
  { logo: "/path/to/cornelis.png", name: "Cornelis Networks" },
  { logo: "/path/to/emmloans.png", name: "Emmloans" },
  { logo: "/path/to/empowor.png", name: "EmpowOR" },
  { logo: "/path/to/bcg.png", name: "BCG" },
  { logo: "/path/to/factor4.png", name: "Factor4" },
  { logo: "/path/to/gsa.png", name: "GSA National" },
  { logo: "/path/to/culturewise.png", name: "CultureWise" },
  { logo: "/path/to/western_union.png", name: "Western Union" },
  { logo: "/path/to/imedview.png", name: "Imedview" },
  { logo: "/path/to/gsl.png", name: "GSL" },
  { logo: "/path/to/gpsn.png", name: "GPSN" },
];

const LogoSection = () => {
  // Split logos into two groups
  const firstSet = clientLogos.slice(0, 6);
  const secondSet = clientLogos.slice(6);

  return (
    <div className="py-12 bg-gray-100"style={{ background: "linear-gradient(to right, #FFD700, #333333)"}}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold font-roboto text-black mb-8"  style={{
                    background: "linear-gradient(to right, #FFD700, #333333)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
          Our Clients
        </h2>
        {/* Scrolling Logo Container */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll gap-12">
            {/* First Section */}
            <div className="flex-shrink-0 flex gap-12">
              {firstSet.map((client, index) => (
                <div key={index} className="flex-shrink-0 text-center">
                  <img
                    src={client.logo}
                    alt={`Client Logo ${index}`}
                    className="w-32 h-auto mx-auto"
                  />
                  {/* <p className="text-sm text-gray-600 mt-2">{client.name}</p> */}
                </div>
              ))}
            </div>

            {/* Second Section */}
            <div className="flex-shrink-0 flex gap-12">
              {secondSet.map((client, index) => (
                <div key={index} className="flex-shrink-0 text-center">
                  <img
                    src={client.logo}
                    alt={`Client Logo ${index + 6}`}
                    className="w-32 h-auto mx-auto"
                  />
                  {/* <p className="text-sm text-gray-600 mt-2">{client.name}</p> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
