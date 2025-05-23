import React from "react";
import WhatWeDoSection from "./WhatWeDoSection";
import Featured from "./Featured";
import ServiceCard from "./ServiceCard";

import StatsSection from "./StatsSection";
import SubscribeSection from "./SubscribeSection";
import Header from "./Header";
import FAQ from "./FAQ";
import AllAboutAITools from "./AllAboutAITools";
import TrendingAITools from "./TrendingAITools";

import ToolsHub from "./ToolsHub";
import ToolTabs from "./ToolTabs";

import ReviewData from "./ReviewsData";
import AIAssistant from "./AIAssistant";


const HomePage = () => {
  return (
    <>
      <Header />
    <AIAssistant/>
      <AllAboutAITools />
      <TrendingAITools />
      <ToolTabs />

      {/* <ToolsHub/> */}
      <ServiceCard />
      {/* <NewsCard /> */}
      <FAQ />
      <WhatWeDoSection />
      <Featured />
      <ReviewData />
      <StatsSection />
      <SubscribeSection />
    </>
  );
};

export default HomePage;
