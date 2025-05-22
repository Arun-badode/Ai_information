import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "animate.css";
import CategoriesNavbar from "./AI_tools/Details/Layout/CategoriesNavbar";
import BreadcrumbScroll from "./AI_tools/Details/Layout/BreadcrumbScroll";
import Footer from "./AI_tools/Details/Layout/Footer";
import HomePage from "./AI_tools/HomePage";
import Aitools from "./AI_tools/AiTools";
import ImageMindAI from "./AI_tools/ImageMindAI";
import AiLearningHub from "./AI_tools/AiLearningHub";
import AIComparisonPage from "./AI_tools/AIComparisonPage";
import AboutPage from "./AI_tools/AboutUs";

import AIContact from "./AI_tools/AIContact";
import TermsOfService from "./AI_tools/TermsOfService";
import PrivacyPolicy from "./AI_tools/PrivacyPolicy";
import ScrollToTopButton from "./AI_tools/ScrollToTopButton";

// import AINewsDetail from "./AI_tools/AINewsDetai";
import AINewsPage from "./AI_tools/AINewsPage";
// import AICategories from "./AI_tools/AICategories";

/* AI Chatbots & Assistants */

import Gemini from "./AI_tools/Details/AI Chatbots & Assistants/Gemini";
import SnatchBot from "./AI_tools/Details/AI Chatbots & Assistants/SnatchBot";
import AllAboutAITools from "./AI_tools/AllAboutAITools";
import Navbar from "./AI_tools/Details/Layout/Navbar";
import ClaudeAI from "./AI_tools/Details/AI Chatbots & Assistants/ClaudeAI";
import PerplexityAI from "./AI_tools/Details/AI Chatbots & Assistants/PerplexityAI";
import YouchatAI from "./AI_tools/Details/AI Chatbots & Assistants/YouchatAI";
import PoeAI from "./AI_tools/Details/AI Chatbots & Assistants/PoeAI";
import ReplikaAI from "./AI_tools/Details/AI Chatbots & Assistants/ReplikaAI";
import JasperAI from "./AI_tools/Details/AI Chatbots & Assistants/JasperAI";
import Chatgpt from "./AI_tools/Details/AI Chatbots & Assistants/Chatgpt";
import Tidio from "./AI_tools/Details/AI Chatbots & Assistants/Tidio";
import CharacterAI from "./AI_tools/Details/AI Chatbots & Assistants/CharacterAI";
import PiAI from "./AI_tools/Details/AI Chatbots & Assistants/PiAI";
import DriftAI from "./AI_tools/Details/AI Chatbots & Assistants/DriftAI";
import FlowXO from "./AI_tools/Details/AI Chatbots & Assistants/FlowXO";
import Botsify from "./AI_tools/Details/AI Chatbots & Assistants/Botsify";
import AivoAI from "./AI_tools/Details/AI Chatbots & Assistants/AivoAI";
import MobileMonkey from "./AI_tools/Details/AI Chatbots & Assistants/MobileMonkey";

/* AI Video & Animation Tools */
import RunWayGen from "./AI_tools/Details/AI Video & Animation Tools/RunWayGen";
import DescriptAI from "./AI_tools/Details/AI Video & Animation Tools/DescriptAI";
import Veedio from "./AI_tools/Details/AI Video & Animation Tools/Veedio";
import Lumen5 from "./AI_tools/Details/AI Video & Animation Tools/Lumen5";
import HeyGen from "./AI_tools/Details/AI Video & Animation Tools/HeyGen";
import PictoryAI from "./AI_tools/Details/AI Video & Animation Tools/PictoryAI";
import Animoto from "./AI_tools/Details/AI Video & Animation Tools/Animoto";
import RephraseAI from "./AI_tools/Details/AI Video & Animation Tools/RephraseAI";
import Magisto from "./AI_tools/Details/AI Video & Animation Tools/Magisto";
import SynthesiaAI from "./AI_tools/Details/AI Video & Animation Tools/SynthesiaAI";
import { ChartColumnDecreasing, CopySlashIcon } from "lucide-react";
import CopyAI from "./AI_tools/Details/Ai for Writter/CopyAI";

/* Productivity and Business Tools */
import MicrosoftCopilot from "./AI_tools/Details/Productivity and Business Tools/MicrosoftCopilot";
import ZapierAI from "./AI_tools/Details/Productivity and Business Tools/ZapierAI";
import Notion from "./AI_tools/Details/Productivity and Business Tools/Notion";
import ClickupAI from "./AI_tools/Details/Productivity and Business Tools/ClickupAI";

/* AI for Education */
import QuizletAI from "./AI_tools/Details/AI for Education/QuizletAI";
import Socratic from "./AI_tools/Details/AI for Education/Socratic";
import Knewton from "./AI_tools/Details/AI for Education/Knewton";
import CogniiAI from "./AI_tools/Details/AI for Education/CogniiAI";

/* AI Image And Art Generation */
import MidJourney from "./AI_tools/Details/AI for image/MidJourney";

// AI for Software Testing
import RainforestQA from "./AI_tools/Details/AI for Software Testing/RainforestQA";
import LambdaTestAI from "./AI_tools/Details/AI for Software Testing/LambdaTestAI";
import PerfectoAI from "./AI_tools/Details/AI for Software Testing/PerfectoAI";
import FunctionizeAI from "./AI_tools/Details/AI for Software Testing/FunctionizeAI";
import Testimio from "./AI_tools/Details/AI for Software Testing/Testimio";
import BrowserStackAI from "./AI_tools/Details/AI for Software Testing/BrowserStackAI";
import AppvanceIQ from "./AI_tools/Details/AI for Software Testing/AppvanceIQ";
import TricentisToscaAI from "./AI_tools/Details/AI for Software Testing/TricentisToscaAI";
import SmartSparrow from "./AI_tools/Details/AI for Education/SmartSparrow";
import BrainlyAI from "./AI_tools/Details/AI for Education/BrainlyAI";

/* AI in E-commerce */
import AlgoliaAI from "./AI_tools/Details/AI for E-commerce/AlgoliaAI";
import BoldMetricsAI from "./AI_tools/Details/AI for E-commerce/BoldMetricsAI";
import ClarifaiAI from "./AI_tools/Details/AI for E-commerce/ClarifaiAI";
import ClerkioAI from "./AI_tools/Details/AI for E-commerce/ClerkioAI";
import FindMineAI from "./AI_tools/Details/AI for E-commerce/FindMineAI";
import LilyAI from "./AI_tools/Details/AI for E-commerce/LilyAI";
import StyleAI from "./AI_tools/Details/AI for E-commerce/StyleAI";
import PhraseeAI from "./AI_tools/Details/AI for E-commerce/PhraseeAI";
import ViSenzeAI from "./AI_tools/Details/AI for E-commerce/ViSenzeAI";
import DuolingoAI from "./AI_tools/Details/AI for Education/DuolingoAI";
import Grammarly from "./AI_tools/Details/AI for Education/Grammarly";
import TeachFX from "./AI_tools/Details/AI for Education/TeachFX";
import MoocLab from "./AI_tools/Details/AI for Education/MoocLab";

// AI for Resume //
import JobScanAI from "./AI_tools/Details/AI for Resume/JobScanAI";

import RessumeAI from "./AI_tools/Details/AI for Resume/ResumeAI";

import ReZiAI from "./AI_tools/Details/AI for Resume/ReziAI";
import EnhanevAI from "./AI_tools/Details/AI for Resume/EnhanevAI";
import KickResume from "./AI_tools/Details/AI for Resume/KickResume";
import ZetyAI from "./AI_tools/Details/AI for Resume/ZetyAI";
import VisualAI from "./AI_tools/Details/AI for Resume/VisualAI";
import ResunateAI from "./AI_tools/Details/AI for Resume/ResunateAI";
// import TealHQAI from "./AI_tools/Details/AI for Resume/TealHQAI";
import HirationAI from "./AI_tools/Details/AI for Resume/HirationAI";

// AI for SEO//

import ClearScopeAI from "./AI_tools/Details/AI for SEO/ClearScopeAI";
import DashWordAI from "./AI_tools/Details/AI for SEO/DashWordAI";
import FraseAI from "./AI_tools/Details/AI for SEO/FraseAI";
import GrowthBarAI from "./AI_tools/Details/AI for SEO/GrowthBarAI";
import MarketMuseAI from "./AI_tools/Details/AI for SEO/MarketMuseAI";
import NeuronWriterAI from "./AI_tools/Details/AI for SEO/NeuronWriterAI";
import OutrankingAI from "./AI_tools/Details/AI for SEO/OutrankingAI";
import PageOptimizerProAI from "./AI_tools/Details/AI for SEO/PageOptimizerProAI";
import ScalenutAI from "./AI_tools/Details/AI for SEO/ScalenutAI";
import SurferSEOAI from "./AI_tools/Details/AI for SEO/SurferSEOAI";
import WriterZenAI from "./AI_tools/Details/AI for SEO/WriterZenAI";
import ContentHarmanyAI from "./AI_tools/Details/AI for SEO/ContentHarmanyAI";
import AmperMusicAI from "./AI_tools/Details/AI for Music/AmperMusic";
import AviaAI from "./AI_tools/Details/AI for Music/AviaAI";
import BoomyAI from "./AI_tools/Details/AI for Music/BoomyAI";
import EcrettMusicAI from "./AI_tools/Details/AI for Music/EcrettMusicAI";
import ElevenlabsAI from "./AI_tools/Details/AI for Music/ElevenlabsAI";
import JukedeckAI from "./AI_tools/Details/AI for Music/JukedeckAI";
import LalalAI from "./AI_tools/Details/AI for Music/LalalAI";
import MurfAI from "./AI_tools/Details/AI for Music/MurfAI";
import ResembleAI from "./AI_tools/Details/AI for Music/ResembleAI";
import SoundrawAI from "./AI_tools/Details/AI for Music/SoundrawAI";
import VoiceModAI from "./AI_tools/Details/AI for Music/VoiceModAI";
import PlayHiAI from "./AI_tools/Details/AI for Music/PlayHtAI";
import DescriptOverdub from "./AI_tools/Details/AI for Music/DescriptOverdubAI";
import WallsaidAI from "./AI_tools/Details/AI for Music/WallsaidAI";
import LovoAi from "./AI_tools/Details/AI for Music/LovoAI";
import DeepgramAI from "./AI_tools/Details/AI for Music/DeepgramAI";
import AssemblyAI from "./AI_tools/Details/AI for Music/AssemplyAI";
import SpeechifyAI from "./AI_tools/Details/AI for Music/SpeechifyAI";
import RevAI from "./AI_tools/Details/AI for Music/RevAI";
import TrelloAI from "./AI_tools/Details/Productivity and Business Tools/TrelloAI";
import EvernoteAI from "./AI_tools/Details/Productivity and Business Tools/EvernoteAI";

import RescueAI from "./AI_tools/Details/Productivity and Business Tools/RescueAI";

import AdobeFireflyAI from "./AI_tools/Details/AI for image/AdobeFireflyAI";
import CanvaAI from "./AI_tools/Details/AI for image/CanvaAI";
import DeepDreamGeneratorAI from "./AI_tools/Details/AI for image/DeepDreamGeneratorAI";
import RunwayMLAI from "./AI_tools/Details/AI for image/RunwayMLAI";
import DreambyWombo from "./AI_tools/Details/AI for image/DreambyWombo";
import ArtbreederAI from "./AI_tools/Details/AI for image/ArtbreederAI";
import NightCafeAI from "./AI_tools/Details/AI for image/NightCafeAI";

// AI for Documnet managment//
import BrieflyAI from "./AI_tools/Details/AI for Document managment/BrieflyAI";
import DeepDyveAI from "./AI_tools/Details/AI for Document managment/DeepDyveAI";

import Paraphraser from "./AI_tools/Details/AI for Document managment/Paraphraser";

import Explainpaper from "./AI_tools/Details/AI for Document managment/Explainpaper";
import HumataAI from "./AI_tools/Details/AI for Document managment/HumataAI";
import Resoomer from "./AI_tools/Details/AI for Document managment/Resoomer";
import Scholarcy from "./AI_tools/Details/AI for Document managment/Scholarcy";
import SciteAI from "./AI_tools/Details/AI for Document managment/SciteAI";
import Smmry from "./AI_tools/Details/AI for Document managment/Smmry";
import Summarizebot from "./AI_tools/Details/AI for Document managment/Summarizebot";
import UpsumAI from "./AI_tools/Details/AI for Document managment/UpsumAI";
import UpwordAI from "./AI_tools/Details/AI for Document managment/UpwordAI";

// Ai for Mapping//
import Ayoa from "./AI_tools/Details/AI Mapping/Ayoa";
import Coggle from "./AI_tools/Details/AI Mapping/Coggle";
import FreeMind from "./AI_tools/Details/AI Mapping/FreeMind";
import Lucidchart from "./AI_tools/Details/AI Mapping/Lucidchart";
import MindMeister from "./AI_tools/Details/AI Mapping/MindMeister";
import MindNode from "./AI_tools/Details/AI Mapping/MindNode";
import Scapple from "./AI_tools/Details/AI Mapping/Scapple";
import SimpleMind from "./AI_tools/Details/AI Mapping/SimpleMind";
import XMind from "./AI_tools/Details/AI Mapping/XMind";
import Whimsical from "./AI_tools/Details/AI Mapping/Whimsical";
import AiFi from "./AI_tools/Details/AI for Retail/AiFi";
import Everseen from "./AI_tools/Details/AI for Retail/Everseen";
import Govison from "./AI_tools/Details/AI for Retail/Govison";
import Grabango from "./AI_tools/Details/AI for Retail/Grabango";
import Malong from "./AI_tools/Details/AI for Retail/Malong";
import PensaSystem from "./AI_tools/Details/AI for Retail/PensaSystem";
import Sensei from "./AI_tools/Details/AI for Retail/Sensei";
import StandardCongnition from "./AI_tools/Details/AI for Retail/StandardCognition";
import Trigo from "./AI_tools/Details/AI for Retail/Trigo";
import Zippin from "./AI_tools/Details/AI for Retail/Zippin";
import CodaAI from "./AI_tools/Details/Productivity and Business Tools/CodaAi";
import OtterAI from "./AI_tools/Details/Productivity and Business Tools/OtterAI";

import MiroAi from "./AI_tools/Details/Productivity and Business Tools/MiroAi";
import DomoAI from "./AI_tools/Details/Productivity and Business Tools/DomoAi";
import GoogleAnalyticsAI from "./AI_tools/Details/Productivity and Business Tools/GoogleAnalyticsAI";
import HeapAnalytics from "./AI_tools/Details/Productivity and Business Tools/HeapAnalytics";
import OracleAI from "./AI_tools/Details/Productivity and Business Tools/Oracle";
import PowerBI from "./AI_tools/Details/Productivity and Business Tools/PowerBI";
import QlikSenseAI from "./AI_tools/Details/Productivity and Business Tools/QlikSenseAI";
import Qubole from "./AI_tools/Details/Productivity and Business Tools/Qubole";
import SASAI from "./AI_tools/Details/Productivity and Business Tools/SasAI";
import TableauAI from "./AI_tools/Details/Productivity and Business Tools/TableauAI";
import ThoughtSpot from "./AI_tools/Details/Productivity and Business Tools/ThoughtSpot";
import ZohoAnalyticsAI from "./AI_tools/Details/Productivity and Business Tools/ZohoAnalytics";
import ClipDropAI from "./AI_tools/Details/AI for image/ClipDropAI";
import FotorAI from "./AI_tools/Details/AI for image/FotorAI";
import ReminiAI from "./AI_tools/Details/AI for image/ReminiAI";
import LuminarAI from "./AI_tools/Details/AI for image/LuminarAI";
import RemoveBg from "./AI_tools/Details/AI for image/Removebg";

// AI for Mapping  end //

import AIPowered from "./AI_tools/Details/AI for Legal/AIPowered";

import DoNotPay from "./AI_tools/Details/AI for Legal/DoNotPay";

import LawGeex from "./AI_tools/Details/AI for Legal/LawGeex";

import LegalRobot from "./AI_tools/Details/AI for Legal/LegalRobot";

import LegalZoomAI from "./AI_tools/Details/AI for Legal/LegalZoomAI";

import Legatics from "./AI_tools/Details/AI for Legal/Legatics";

import Luminance from "./AI_tools/Details/AI for Legal/Luminance";

import Rivetz from "./AI_tools/Details/AI for Legal/Rivetz";

import RossIntelligence from "./AI_tools/Details/AI for Legal/RossIntelligence";
import Hiretual from "./AI_tools/Details/AI for Recruitment/Hiretual";
import HireVue from "./AI_tools/Details/AI for Recruitment/HireVue";
import Pymetrics from "./AI_tools/Details/AI for Recruitment/Pymetrics";
import Xor from "./AI_tools/Details/AI for Recruitment/Xor";
import Icims from "./AI_tools/Details/AI for Recruitment/Icims";
import MyInterview from "./AI_tools/Details/AI for Recruitment/MyInterview";
import Seekout from "./AI_tools/Details/AI for Recruitment/Seekout";
import Vervoe from "./AI_tools/Details/AI for Recruitment/Vervoe";
import Zoho from "./AI_tools/Details/AI for Recruitment/Zoho";

import CheckPoint from "./AI_tools/Details/Ai for Cyber security/CheckPoint";
import CrowdStrike from "./AI_tools/Details/Ai for Cyber security/CrowdStrike";
import Cylance from "./AI_tools/Details/Ai for Cyber security/Cylance";
import Cynet from "./AI_tools/Details/Ai for Cyber security/Cynet";
import Darktrace from "./AI_tools/Details/Ai for Cyber security/Darktrace";
import Fortinet from "./AI_tools/Details/Ai for Cyber security/Fortinet";
import Palo from "./AI_tools/Details/Ai for Cyber security/Palo";
import Vectra from "./AI_tools/Details/Ai for Cyber security/Vectra";
import ShieldAI from "./AI_tools/Details/Ai for Cyber security/ShieldAI";
import SonicWall from "./AI_tools/Details/Ai for Cyber security/SonicWall";
import Private from "./AI_tools/Details/Ai for Privacy/Private";
import Andi from "./AI_tools/Details/Ai for Search engines/Andi";
import Neeva from "./AI_tools/Details/Ai for Search engines/Neeva";
import AnonosAI from "./AI_tools/Details/Ai for Privacy/AnonosAI";
import VaultreeAI from "./AI_tools/Details/Ai for Privacy/VaulTree";
import DualityAI from "./AI_tools/Details/Ai for Privacy/Duality";
import Carrot from "./AI_tools/Details/Ai for Search engines/Carrot";
import Lucid from "./AI_tools/Details/Ai for Search engines/Lucid";

import SearxNG from "./AI_tools/Details/Ai for Search engines/SearxNG";
import BraveSearch from "./AI_tools/Details/Ai for Search engines/BraveSearch";
import Komo from "./AI_tools/Details/Ai for Search engines/Komo";
import MetaPhor from "./AI_tools/Details/Ai for Search engines/MetaPhor";
import Mojeek from "./AI_tools/Details/Ai for Search engines/Mojeek";
import Applitool from "./AI_tools/Details/AI for Education/Applitoo";
import Apheris from "./AI_tools/Details/Ai for Privacy/Apheris";
import Evervault from "./AI_tools/Details/Ai for Privacy/Evervault";
import Inpher from "./AI_tools/Details/Ai for Privacy/Inpher";
import Enveil from "./AI_tools/Details/Ai for Privacy/Enveil";
import Skyflow from "./AI_tools/Details/Ai for Privacy/Skyflow";
import Writtersonic from "./AI_tools/Details/Ai for Writter/Writtersonic";
import Ryter from "./AI_tools/Details/Ai for Writter/Ryter";
import Hyperwriter from "./AI_tools/Details/Ai for Writter/Hyperwriter";
import Sudowriter from "./AI_tools/Details/Ai for Writter/Sudowriter";
import Wordtune from "./AI_tools/Details/Ai for Writter/Wordtune";
import Spingboat from "./AI_tools/Details/Ai for Writter/Spingboat";
import Longshot from "./AI_tools/Details/Ai for Writter/Longshot";
import Contentbot from "./AI_tools/Details/Ai for Writter/Contentbot";
import Clara from "./AI_tools/Details/Ai for meeting/Clara";
import Clockwise from "./AI_tools/Details/Ai for meeting/Clockwise";
import Kronologic from "./AI_tools/Details/Ai for meeting/Kronologic";
import Motion from "./AI_tools/Details/Ai for meeting/Motion";
import Reclaim from "./AI_tools/Details/Ai for meeting/Reclaim";
import Schedular from "./AI_tools/Details/Ai for meeting/Scheduler";
import Adam from "./AI_tools/Details/Ai for meeting/Adam";
import Trevor from "./AI_tools/Details/Ai for meeting/Trevor";
import Sidekick from "./AI_tools/Details/Ai for meeting/Sidekick";
import AIBlog from "./AI_tools/AiBlog";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <BreadcrumbScroll />
      <CategoriesNavbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aitools" element={<Aitools />} />
        <Route path="/imagemindai" element={<ImageMindAI />} />
        <Route path="/ailearninghub" element={<AiLearningHub />} />
        <Route path="/aicomparisonpage" element={<AIComparisonPage />} />
        <Route path="/aboutus" element={<AboutPage />} />
        <Route path="/ainewspage" element={<AINewsPage />} />
        <Route path="/aiblog" element={<AIBlog />} />
        {/* <Route path="/news/:id" element={<AINewsDetail />} /> */}
        <Route path="/aicontact" element={<AIContact />} />
        <Route path="/termsofservice" element={<TermsOfService />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        {/* <Route path="/ainewsdetail" element={<AINewsDetail />} /> */}
        {/* <Route path="/aicategories" element={<AICategories />} /> */}
        {/* <Route path="/ainewsdetail" element={<AINewsDetail />} /> */}
        <Route path="/allaboutaitools" element={<AllAboutAITools />}></Route>
        {/* AI Chatbots & Assistants */}
        <Route path="/gemini" element={<Gemini />}></Route>
        <Route path="/snatchbot" element={<SnatchBot />}></Route>
        <Route path="/perplexityai" element={<PerplexityAI />}></Route>
        <Route path="/ClaudeAI" element={<ClaudeAI />}></Route>
        <Route path="/youchatai" element={<YouchatAI />}></Route>
        <Route path="/poeai" element={<PoeAI />}></Route>
        <Route path="/replikaai" element={<ReplikaAI />}></Route>
        <Route path="/jasperai" element={<JasperAI />}></Route>
        <Route path="/chatgpt" element={<Chatgpt />}></Route>
        <Route path="/tidio" element={<Tidio />}></Route>
        <Route path="/characterai" element={<CharacterAI />}></Route>
        <Route path="/piai" element={<PiAI />}></Route>
        <Route path="/driftai" element={<DriftAI />}></Route>
        <Route path="/flowxo" element={<FlowXO />}></Route>
        <Route path="/Botsify" element={<Botsify />}></Route>
        <Route path="/aivoai" element={<AivoAI />}></Route>
        <Route path="/mobilemonkey" element={<MobileMonkey />}></Route>
        {/* AI Video & Animation Tools */}
        <Route path="/runwaygen" element={<RunWayGen />}></Route>
        <Route path="/DescriptAI" element={<DescriptAI />}></Route>
        <Route path="/Veedio" element={<Veedio />}></Route>
        <Route path="/Lumen5" element={<Lumen5 />}></Route>
        <Route path="/HeyGen" element={<HeyGen />}></Route>
        <Route path="/PictoryAI" element={<PictoryAI />}></Route>
        <Route path="/Animoto" element={<Animoto />}></Route>
        <Route path="/RephraseAI" element={<RephraseAI />}></Route>
        <Route path="/Magisto" element={<Magisto />}></Route>
        <Route path="/SynthesiaAI" element={<SynthesiaAI />}></Route>
        {/* AI Writting and content creation */}
        <Route path="/CopyAI" element={<CopyAI />}></Route>
        <Route path="/Writtersonic" element={<Writtersonic />}></Route>
        <Route path="/Ryter" element={<Ryter />}></Route>
        <Route path="/Hyperwriter" element={<Hyperwriter />}></Route>
        <Route path="/Sudowriter" element={<Sudowriter />}></Route>
        <Route path="/Wordtune" element={<Wordtune />}></Route>
        <Route path="/Spingboat" element={<Spingboat />}></Route>
        <Route path="/Longshot" element={<Longshot />}></Route>
        <Route path="/Contentbot" element={<Contentbot />}></Route>
        {/* Productivity and Business Tools */}
        <Route path="/MicrosoftCopilot" element={<MicrosoftCopilot />}></Route>
        <Route path="/ZapierAI" element={<ZapierAI />}></Route>
        <Route path="/Notion" element={<Notion />}></Route>
        <Route path="/ClickupAI" element={<ClickupAI />}></Route>
        <Route path="/EvernoteAI" element={<EvernoteAI />}></Route>
        <Route path="/TrelloAI" element={<TrelloAI />}></Route>
        <Route path="/RescueAI" element={<RescueAI />}></Route>
        <Route path="/CodaAI" element={<CodaAI />}></Route>
        <Route path="/OtterAI" element={<OtterAI />}></Route>
        <Route path="/Grammarly" element={<Grammarly />}></Route>
        <Route path="/MiroAI" element={<MiroAi />}></Route>
        <Route path="/CodaAI" element={<CodaAI />}></Route>
        <Route path="/DomoAI" element={<DomoAI />}></Route>
        <Route
          path="/GoogleAnalyticsAI"
          element={<GoogleAnalyticsAI />}
        ></Route>
        <Route path="/HeapAnalytics" element={<HeapAnalytics />}></Route>
        <Route path="/OracleAI" element={<OracleAI />}></Route>
        <Route path="/PowerBI" element={<PowerBI />}></Route>
        <Route path="/QlikSenseAI" element={<QlikSenseAI />}></Route>
        <Route path="/Qubole" element={<Qubole />}></Route>
        <Route path="/SASAI" element={<SASAI />}></Route>
        <Route path="/TableauAI" element={<TableauAI />}></Route>
        <Route path="/ThoughtSpot" element={<ThoughtSpot />}></Route>
        <Route path="/ZohoAnalyticsAI" element={<ZohoAnalyticsAI />}></Route>
        {/* AI for Education */}
        <Route path="/QuizletAI" element={<QuizletAI />}></Route>
        <Route path="/Socratic" element={<Socratic />}></Route>
        <Route path="/Knewton" element={<Knewton />}></Route>
        <Route path="/CogniiAI" element={<CogniiAI />}></Route>
        <Route path="/SmartSparrow" element={<SmartSparrow />}></Route>
        <Route path="/BrainlyAI" element={<BrainlyAI />}></Route>
        <Route path="/DuolingoAI" element={<DuolingoAI />}></Route>
        <Route path="/Grammarly" element={<Grammarly />}></Route>
        <Route path="/TeachFX" element={<TeachFX />}></Route>
        <Route path="/MoocLab" element={<MoocLab />}></Route>
        {/* AI Image And Art Generation */}
        <Route path="/MidJourney" element={<MidJourney />}></Route>
        <Route path="/AdobeFireflyAI" element={<AdobeFireflyAI />}></Route>
        <Route path="/ArtbreederAI" element={<ArtbreederAI />}></Route>
        <Route path="/CanvaAI" element={<CanvaAI />}></Route>
        <Route
          path="/DeepDreamGeneratorAI"
          element={<DeepDreamGeneratorAI />}
        ></Route>
        <Route path="/DreambyWombo" element={<DreambyWombo />}></Route>{" "}
        <Route path="/NightCafeAI" element={<NightCafeAI />}></Route>
        <Route path="/RunwayMLAI" element={<RunwayMLAI />}></Route>
        <Route path="/ClipDropAI" element={<ClipDropAI />}></Route>
        <Route path="/FotorAI" element={<FotorAI />}></Route>
        <Route path="/ReminiAI" element={<ReminiAI />}></Route>
        <Route path="/RemoveBg" element={<RemoveBg />}></Route>
        <Route path="/uminarAI" element={<LuminarAI />}></Route>
        {/* AI for Software Testing */}
        <Route path="/RainforestQA" element={<RainforestQA />}></Route>
        <Route path="/LambdaTestAI" element={<LambdaTestAI />}></Route>
        <Route path="/PerfectoAI" element={<PerfectoAI />}></Route>
        <Route path="/FunctionizeAI" element={<FunctionizeAI />}></Route>
        <Route path="/Testimio" element={<Testimio />}></Route>
        <Route path="/BrowserStackAI" element={<BrowserStackAI />}></Route>
        <Route path="/AppvanceIQ" element={<AppvanceIQ />}></Route>
        <Route path="/TricentisToscaAI" element={<TricentisToscaAI />}></Route>
        <Route path="/ApplitoolsAI" element={<Applitool />}></Route>
        {/* AI in E-commerce */}
        <Route path="/AlgoliaAI" element={<AlgoliaAI />}></Route>
        <Route path="/BoldMetricsAI" element={<BoldMetricsAI />}></Route>
        <Route path="/ClarifaiAI" element={<ClarifaiAI />}></Route>
        <Route path="/ClerkioAI" element={<ClerkioAI />}></Route>
        <Route path="/FindMineAI" element={<FindMineAI />}></Route>
        <Route path="/LilyAI" element={<LilyAI />}></Route>
        <Route path="/StyleAI" element={<StyleAI />}></Route>
        <Route path="/PhraseeAI" element={<PhraseeAI />}></Route>
        <Route path="/ViSenzeAI" element={<ViSenzeAI />}></Route>
        {/* AI for resume  */}
        <Route path="/JobScanAI" element={<JobScanAI />}></Route>
        <Route path="/RessumeAI" element={<RessumeAI />}></Route>
        <Route path="/ReZiAI" element={<ReZiAI />}></Route>
        <Route path="/EnhanevAI" element={<EnhanevAI />}></Route>
        <Route path="/KickResume" element={<KickResume />}></Route>
        <Route path="/ZetyAI" element={<ZetyAI />}></Route>
        <Route path="/VisualAI" element={<VisualAI />}></Route>
        <Route path="/ResunateAI" element={<ResunateAI />}></Route>
        {/* <Route path="/TealHQAI" element={<TealHQAI />}></Route> */}
        <Route path="/HirationAI" element={<HirationAI />}></Route>
        {/* AI for resume   end */}
        {/* Ai for SEO  */}
        <Route path="/ClearScopeAI" element={<ClearScopeAI />}></Route>
        <Route path="/ContentHarmanyAI" element={<ContentHarmanyAI />}></Route>
        <Route path="/DashWordAI" element={<DashWordAI />}></Route>
        <Route path="/FraseAI" element={<FraseAI />}></Route>
        <Route path="/GrowthBarAI" element={<GrowthBarAI />}></Route>
        <Route path="/MarketMuseAI" element={<MarketMuseAI />}></Route>
        <Route path="/NeuronWriter" element={<NeuronWriterAI />}></Route>
        <Route path="/OutrankingAI" element={<OutrankingAI />}></Route>
        <Route
          path="/PageOptimizerProAI"
          element={<PageOptimizerProAI />}
        ></Route>
        <Route path="/ScalenutAI" element={<ScalenutAI />}></Route>
        <Route path="/SurferSEOAI" element={<SurferSEOAI />}></Route>
        <Route path="/WriterZenAI " element={<WriterZenAI />}></Route>
        {/* Ai for SEO   ENd  */}
        {/* Ai for Music */}
        <Route path="/AmperMusicAI" element={<AmperMusicAI />}></Route>
        <Route path="/AviaAI" element={<AviaAI />}></Route>
        <Route path="/BoomyAI" element={<BoomyAI />}></Route>
        <Route path="/EcrettMusicAI" element={<EcrettMusicAI />}></Route>
        <Route path="/ElevenlabsAI" element={<ElevenlabsAI />}></Route>
        <Route path="/JukedeckAI" element={<JukedeckAI />}></Route>
        <Route path="/LalalAI" element={<LalalAI />}></Route>
        <Route path="/MurfAI" element={<MurfAI />}></Route>
        <Route path="/ResembleAI" element={<ResembleAI />}></Route>
        <Route path="/SoundrawAI" element={<SoundrawAI />}></Route>
        <Route path="/VoiceModAI" element={<VoiceModAI />}></Route>
        <Route path="/PlayHiAI" element={<PlayHiAI />}></Route>
        <Route path="/DescriptOverdub" element={<DescriptOverdub />}></Route>
        <Route path="/WallsaidAI" element={<WallsaidAI />}></Route>
        <Route path="/LovoAi" element={<LovoAi />}></Route>
        <Route path="/DeepgramAI" element={<DeepgramAI />}></Route>
        <Route path="/AssemblyAI" element={<AssemblyAI />}></Route>
        <Route path="/SpeechifyAI" element={<SpeechifyAI />}></Route>
        <Route path="/RevAI" element={<RevAI />}></Route>
        {/* Ai for Document managment   start */}
        <Route path="/BrieflyAI" element={<BrieflyAI />}></Route>
        <Route path="/DeepDyveAI" element={<DeepDyveAI />}></Route>
        <Route path="/Explainpaper" element={<Explainpaper />}></Route>
        <Route path="/HumataAI" element={<HumataAI />}></Route>
        <Route path="/Parapharser" element={<Paraphraser />}></Route>
        <Route path="/Resoomer" element={<Resoomer />}></Route>
        <Route path="/Scholarcy" element={<Scholarcy />}></Route>
        <Route path="/Scite" element={<SciteAI />}></Route>
        <Route path="/Smmry" element={<Smmry />}></Route>
        <Route path="/Summarizebot" element={<Summarizebot />}></Route>
        <Route path="/UpsumAI" element={<UpsumAI />}></Route>
        <Route path="/UpwordAI" element={<UpwordAI />}></Route>
        {/* Ai for Document managment   end */}
        {/* Ai for Mapping */}
        <Route path="/AyoaAI" element={<Ayoa />}></Route>
        <Route path="/CoggleAI" element={<Coggle />}></Route>
        <Route path="/FreeMindAI" element={<FreeMind />}></Route>
        <Route path="/LucidchartAI" element={<Lucidchart />}></Route>
        <Route path="/MindMeisteAI" element={<MindMeister />}></Route>
        <Route path="/MindNodeAI" element={<MindNode />}></Route>
        <Route path="/ScappleAI" element={<Scapple />}></Route>
        <Route path="/SimpleMindAI" element={<SimpleMind />}></Route>
        <Route path="/WhimsicalAI" element={<Whimsical />}></Route>
        <Route path="/XMindAI" element={<XMind />}></Route>
        {/* Ai for Mapping   end  */}
        {/* Ai for Retail */}
        <Route path="/AiFi" element={<AiFi />}></Route>
        <Route path="/Everseen" element={<Everseen />}></Route>
        <Route path="/Govison" element={<Govison />}></Route>
        <Route path="/Grabango" element={<Grabango />}></Route>
        <Route path="/Malong" element={<Malong />}></Route>
        <Route path="/ensaSystem" element={<PensaSystem />}></Route>
        <Route path="/Sensei" element={<Sensei />}></Route>
        <Route
          path="/StandardCognition"
          element={<StandardCongnition />}
        ></Route>
        <Route path="/Trigo" element={<Trigo />}></Route>
        <Route path="/Zippin" element={<Zippin />}></Route>
        {/* Ai for Retail  end */}
        {/* AI for legal */}
        <Route path="/AIPowered" element={<AIPowered />}></Route>
        <Route path="/DoNotPay" element={<DoNotPay />}></Route>
        <Route path="/LawGeex" element={<LawGeex />}></Route>
        <Route path="/LegalRobot" element={<LegalRobot />}></Route>
        <Route path="/LegalZoomAI" element={<LegalZoomAI />}></Route>
        <Route path="/Legatics" element={<Legatics />}></Route>
        <Route path="/Luminance" element={<Luminance />}></Route>
        <Route path="/Rivetz" element={<Rivetz />}></Route>
        <Route path="/RossIntelligence" element={<RossIntelligence />}></Route>
        {/* AI for legal end  */}
        {/*  Ai for Recruitment */}
        <Route path="/Hiretual" element={<Hiretual />}></Route>
        <Route path="/HireVue" element={<HireVue />}></Route>
        <Route path="/Icims" element={<Icims />}></Route>
        <Route path="/MyInterview" element={<MyInterview />}></Route>
        <Route path="/Pymetrics" element={<Pymetrics />}></Route>
        <Route path="/Seekout" element={<Seekout />}></Route>
        <Route path="/Vervoe" element={<Vervoe />}></Route>
        <Route path="/Xor" element={<Xor />}></Route>
        <Route path="/Zoho" element={<Zoho />}></Route>
        {/*  Ai for Recruitment  end */}
        {/*  Ai for  cyber security */}
        <Route path="/CheckPoint" element={<CheckPoint />}></Route>
        <Route path="/CrowdStrike" element={<CrowdStrike />}></Route>
        <Route path="/Cylance" element={<Cylance />}></Route>
        <Route path="/Cynet" element={<Cynet />}></Route>
        <Route path="/Darktrace" element={<Darktrace />}></Route>
        <Route path="/Fortinet" element={<Fortinet />}></Route>
        <Route path="/Palo" element={<Palo />}></Route>
        <Route path="/ShieldAI" element={<ShieldAI />}></Route>
        <Route path="/SonicWall" element={<SonicWall />}></Route>
        <Route path="/Vectra" element={<Vectra />}></Route>
        {/*  Ai for  cyber security end  */}\{/* Ai for Privacy */}
        <Route path="/Private" element={<Private />}></Route>
        <Route path="/AnonosAI" element={<AnonosAI />}></Route>
        <Route path="/Vaultree" element={<VaultreeAI />}></Route>
        <Route path="/Duality" element={<DualityAI />}></Route>
        <Route path="/Apheris" element={<Apheris />}></Route>
        <Route path="/Enveil" element={<Enveil />}></Route>
        <Route path="/Evervault" element={<Evervault />}></Route>
        <Route path="/Inpher" element={<Inpher />}></Route>
        <Route path="/Skyflow" element={<Skyflow />}></Route>
        {/* Ai for Privacy end  */}
        {/* Ai for Seacrh Engine  */}
        <Route path="/Andi" element={<Andi />}></Route>
        <Route path="/Neeva" element={<Neeva />}></Route>
        <Route path="/BraveSearch" element={<BraveSearch />}></Route>
        <Route path="/Carrot" element={<Carrot />}></Route>
        <Route path="/Komo" element={<Komo />}></Route>
        <Route path="/Lucid" element={<Lucid />}></Route>
        <Route path="/MetaPhor" element={<MetaPhor />}></Route>
        <Route path="/Mojeek" element={<Mojeek />}></Route>
        <Route path="/SearxNG" element={<SearxNG />}></Route>
        {/* Ai for Seacrh Engine end   */}

{/* Ai for Metting */}

                  <Route path="/Clara" element={<Clara/>}></Route>
                   <Route path="/Clockwise" element={<Clockwise/>}></Route>
                    <Route path="/Kronologic" element={<Kronologic/>}></Route>
                     <Route path="/Motion" element={<Motion/>}></Route>
                      <Route path="/Reclaim" element={<Reclaim/>}></Route>
                       <Route path="/Schedular" element={<Schedular/>}></Route>
                        <Route path="/Adam" element={<Adam/>}></Route>
                          <Route path="/Trevor" element={<Trevor/>}></Route>
                              <Route path="/Sidekick" element={<Sidekick/>}></Route>
                        
                    

{/* Ai for Metting  end  */}

        {/*  */}
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </BrowserRouter>
  );
};

export default App;
