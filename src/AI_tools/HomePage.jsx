import React from "react";
import WhatWeDoSection from "./WhatWeDoSection";
import Featured from "./Featured";
import ServiceCard from "./ServiceCard";
import NewsCard from "./NewsCard";
import StatsSection from "./StatsSection";
import SubscribeSection from "./SubscribeSection";
import Header from "./Header";
import FAQ from "./FAQ";
import AllAboutAITools from "./AllAboutAITools";
import TrendingAITools from "./TrendingAITools";
import ToolsComparison from "./AIComparisonPage";
import ToolsHub from "./ToolsHub";
import ToolTabs from "./ToolTabs";
import { BsReverseLayoutTextWindowReverse } from "react-icons/bs";
import ReviewData from "./ReviewsData";
import AIAssistant from "./AIAssistant";

const HomePage = () => {
  return (
    <>
      {/* <AIAssistant /> */}
      <Header />
      <AllAboutAITools />
      <TrendingAITools />
      <ToolTabs />
      <ReviewData />
      {/* <ToolsHub/> */}
      <ServiceCard />
      {/* <NewsCard /> */}
      <FAQ />
      <WhatWeDoSection />
      <Featured />
      <StatsSection />
      <SubscribeSection />
    </>
  );
};

export default HomePage;
