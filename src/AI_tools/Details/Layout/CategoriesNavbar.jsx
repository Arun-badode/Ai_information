import React, { useState, useRef, useEffect } from "react";
import { FaSearch, FaPencilAlt } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import { IoIosSearch } from "react-icons/io";
import { AiOutlineProduct } from "react-icons/ai";
import { BiNews } from "react-icons/bi";
import { PiArticleFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "./Categories.css";

const CategoriesNavbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navbarRef = useRef(null);
  const dropdownRefs = useRef({});
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // Toggle dropdown visibility on button click
  const toggleDropdown = (dropdown, event) => {
    // Stop event from bubbling to prevent immediate close
    if (event) {
      event.stopPropagation();
    }

    setActiveDropdown((prevState) =>
      prevState === dropdown ? null : dropdown
    );
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="categories-navbar-container">
      <nav
        ref={navbarRef}
        className="categories-navbar"
        style={{
          background: "linear-gradient(135deg, #3a7bd5, #7f53ac)",
          borderRadius: "10px",
          marginTop: "0.1rem",
          position: "sticky",
          top: 100,
          width: "100%",
          zIndex: 1000,
          overflow: "visible",
        }}
      >
        <ul className="nav-list flex">
          {/* AI Video & Animation Tools*/}
          <li
            className="nav-item dropdown"
            onClick={(e) => toggleDropdown("ai-video", e)}
          >
            <span className="dropdown-toggle text-white">AI for Animation</span>
            {activeDropdown === "ai-video" && (
              <div
                className="dropdown-card show"
                style={{
                  maxWidth: "400px",
                  left: "0",
                  marginTop: "3rem",
                  position: "absolute",
                  zIndex: 1000,
                  overflow:
                    "visible" /* Ensure dropdown content is fully visible */,
                }}
              >
                <div
                  className={`dropdown-grid ${
                    window.innerWidth <= 991 ? "single-column" : ""
                  }`}
                >
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/RunWayGen">RunWayGen </Link>
                    <Link to="/DescriptAI">Descript AI</Link>
                    <Link to="/Veedio">Veedio</Link>
                    <Link to="/Lumen5">Lumen 5</Link>
                    <Link to="/HeyGen">HeyGen</Link>
                  </div>
                  {/* Design Tools Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Design Tools <SiAntdesign size={20} />
                    </h6>
                    <Link to="/Animoto">Animoto</Link>
                    <Link to="/RephraseAI">Rephrase AI</Link>
                    <Link to="/Magisto">Magisto</Link>
                    <Link to="/SynthesiaAI">SynthesiaAI</Link>
                    <Link to="/PictoryAI">PictoryAI</Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Ai for Music */}

          <li
            className="nav-item dropdown "
            onClick={() => toggleDropdown("music")}
          >
            <span className="dropdown-toggle text-white">AI For Music</span>
            {activeDropdown === "music" && (
              <div
                className="dropdown-card show"
                style={{
                  maxWidth: "800px",
                  left: "0rem",
                  marginTop: "3rem",
                  position: "absolute",
                  zIndex: 1000,
                }}
              >
                <div
                  className={`dropdown-grid ${
                    window.innerWidth <= 991 ? "single-column" : ""
                  }`}
                >
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/AmperMusicAI">AmperMusicAI</Link>
                    <Link to="/AviaAI">AviaAI</Link>
                    <Link to="/BoomyAI">BoomyAI</Link>
                    <Link to="/DescriptAI">DescriptAI</Link>
                    <Link to="/EcrettMusicAI">EcrettMusicAI</Link>
                  </div>
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/JukedeckAI">JukedeckAI</Link>

                    <Link to="/ResembleAI">ResembleAI</Link>
                    <Link to="/SoundrawAI">SoundrawAI</Link>
                    <Link to="/VoiceModAI">VoiceModAI</Link>
                    <Link to="/LalalAI">LalalAI</Link>
                  </div>

                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Voice <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/PlayHiAI">PlayHiAI</Link>
                    <Link to="/DescriptOverdub">DescriptOverdub</Link>
                    <Link to="/WallsaidAI">WallsaidAI</Link>
                    <Link to="/LovoAi">LovoAi</Link>
                    <Link to="/DeepgramAI">DeepgramAI</Link>
                  </div>
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Voice <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/SpeechifyAI">SpeechifyAI</Link>
                    <Link to="/AssemblyAI">AssemblyAI</Link>
                    <Link to="/RevAI">RevAI</Link>
                    <Link to="/MurfAI">MurfAI</Link>
                    <Link to="/ElevenlabsAI">ElevenlabsAI</Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/*   AI For  Resume */}
          <li
            className="nav-item dropdown "
            onClick={() => toggleDropdown("resume")}
          >
            <span className="dropdown-toggle text-white">AI for Resume</span>
            {activeDropdown === "resume" && (
              <div
                className="dropdown-card show"
                style={{
                  maxWidth: "800px",
                  left: "0rem",
                  marginTop: "3rem",
                  position: "absolute",
                  zIndex: 1000,
                }}
              >
                <div
                  className={`dropdown-grid ${
                    window.innerWidth <= 991 ? "single-column" : ""
                  }`}
                >
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="JobScanAI/">JobScanAI</Link>
                    <Link to="TestimA/">TestimA</Link>
                    <Link to="FunctionizeAI/">FunctionizeAI</Link>
                    <Link to="TricentisAI/">TricentisAI</Link>
                    <Link to="PerfectoAI/">PerfectoAI</Link>
                  </div>
                  {/* Design Tools Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Design Tools <SiAntdesign size={20} />
                    </h6>
                    <Link to="RessumeAI/">RessumeAI</Link>
                    <Link to="ApplitoolsAI/">ApplitoolsAI</Link>
                    <Link to="AppvanceAI/">AppvanceAI</Link>
                    <Link to="RainForestAI/">RainForestAI</Link>
                    <Link to="LambdaTestAI/">LambdaTestAI</Link>
                  </div>
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="ReZiAI/">ReZiAI</Link>
                    <Link to="EnhanevA/">EnhanevA</Link>
                    <Link to="KickResume/">KickResume</Link>
                    <Link to="ZetyAI/">ZetyAI</Link>
                    <Link to="VisualAI/">VisualAI</Link>
                  </div>
                  {/* Design Tools Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Design Tools <SiAntdesign size={20} />
                    </h6>
                    <Link to="ResunateAI/">ResunateAI</Link>
                    <Link to="TealHQAI/">TealHQAI</Link>
                    <Link to="HirationAI/">HirationAI</Link>
                    <Link to="BrowserStackAI/">BrowserStackAI</Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/*AI Chatbots & Assistants  */}
          <li
            className="nav-item dropdown"
            onClick={(e) => toggleDropdown("Chatbots", e)}
          >
            <span className="dropdown-toggle dropdown-toggle-hover text-white">
              AI For Chatbots
            </span>
            {activeDropdown === "Chatbots" && (
              <div
                className="dropdown-card show"
                style={{
                  maxWidth: "520px",
                  left: "0rem",
                  marginTop: "3rem",
                  position: "absolute",
                  zIndex: 1000,
                }}
              >
                <div
                  className={`dropdown-grid ${
                    window.innerWidth <= 991 ? "single-column" : ""
                  }`}
                >
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>

                    <Link to="/Chatgpt">ChatGPTAI</Link>
                    <Link to="/PerplexityAI">PerplexityAI</Link>
                    <Link to="/Gemini">Gemini</Link>
                    <Link to="/SnatchBot">SnatchBot</Link>
                    <Link to="/PerplexityAI">PerplexityAI</Link>
                    <Link to="/YouchatAI">YouchatAI</Link>
                  </div>

                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>

                    <Link to="/PoeAI">PoeAI</Link>
                    <Link to="/ReplikaAI">ReplikaAI</Link>
                    <Link to="/JasperAI">JasperAI</Link>
                    <Link to="/Tidio">Tidio</Link>
                    <Link to="/ClaudeAI">ClaudeAI</Link>
                    <Link to="/CharacterAI">CharacterAI</Link>
                  </div>

                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>

                    <Link to="/PiAI">PIAI</Link>
                    <Link to="/DriftAI">Drift AI</Link>
                    <Link to="/FlowXO">FLowXO</Link>
                    <Link to="/Botsify">Botsify</Link>
                    <Link to="/AivoAI">Aivo AI</Link>
                    <Link to="/MobileMonkey">Mobile Monkey</Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/*   AI Writing & Content Creation */}
          <li
            className="nav-item dropdown"
            onClick={(e) => toggleDropdown("writing", e)}
          >
            <span className="dropdown-toggle text-white">AI for Writing</span>
            {activeDropdown === "writing" && (
              <div
                className="dropdown-card show"
                style={{
                  maxWidth: "355px",
                  left: "0rem",
                  marginTop: "3rem",
                  position: "absolute",
                  zIndex: 1000,
                }}
              >
                <div
                  className={`dropdown-grid ${
                    window.innerWidth <= 991 ? "single-column" : ""
                  }`}
                >
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/CopyAI">Copy AI</Link>
                    <a href="#">AI Writer 2</a>
                    <a href="#">AI Writer 3</a>
                    <a href="#">AI Writer 4</a>
                    <a href="#">AI Writer 5</a>
                  </div>
                  {/* Design Tools Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Design Tools <SiAntdesign size={20} />
                    </h6>
                    <a href="#">Logo 1</a>
                    <a href="#">Logo 2</a>
                    <a href="#">Logo 3</a>
                    <a href="#">Logo 4</a>
                    <a href="#">Logo 5</a>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* AI in E-commerce */}
          <li
            className="nav-item dropdown"
            onClick={(e) => toggleDropdown("E-commerce", e)}
          >
            <span className="dropdown-toggle text-white">
              AI For E-commerce
            </span>
            {activeDropdown === "E-commerce" && (
              <div
                className="dropdown-card show"
                style={{
                  maxWidth: "340px",
                  left: "0",
                  marginTop: "3rem",
                  position: "absolute",
                  zIndex: 1000,
                  overflow:
                    "visible" /* Ensure dropdown content is fully visible */,
                }}
              >
                <div
                  className={`dropdown-grid ${
                    window.innerWidth <= 991 ? "single-column" : ""
                  }`}
                >
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/AlgoliaAI">AlgoliaAI</Link>
                    <Link to="/BoldMetricsAI">BoldMetricsAI</Link>
                    <Link to="/ClarifaiAI ">ClarifaiAI </Link>
                    <Link to="/FindMineAI ">FindMineAI </Link>
                    <Link to="/LilyAI">LilyAI</Link>
                    <Link to="/ClerkioAI">ClerkioAI</Link>
                  </div>
                  {/* Design Tools Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Design Tools <SiAntdesign size={20} />
                    </h6>
                    <Link to="/StyleAI">StyleAI</Link>
                    <Link to="/PhraseeAI">PhraseeAI</Link>
                    <Link to="/ViSenzeAI">ViSenzeAI</Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/*  AI for Education */}
          <li
            className="nav-item dropdown"
            onClick={(e) => toggleDropdown("education", e)}
          >
            <span className="dropdown-toggle text-white">AI for Education</span>
            {activeDropdown === "education" && (
              <div
                className="dropdown-card show"
                style={{
                  maxWidth: "355px",
                  left: "0",
                  marginTop: "3rem",
                  position: "absolute",
                  zIndex: 1000,
                  overflow:
                    "visible" /* Ensure dropdown content is fully visible */,
                }}
              >
                <div
                  className={`dropdown-grid ${
                    window.innerWidth <= 991 ? "single-column" : ""
                  }`}
                >
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/QuizletAI">QuizletAI</Link>
                    <Link to="/Socratic">Socratic</Link>
                    <Link to="/Knewton">KnewtonAI</Link>
                    <Link to="/CogniiAI">CogniiAI</Link>
                    <Link to="/SmartSparrow">SmartSparrow</Link>
                    <Link to="/BrainlyAI">BrainlyAI</Link>
                  </div>
                  {/* Design Tools Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Design Tools <SiAntdesign size={20} />
                    </h6>
                    <Link to="/DuolingoAI">DuolingoAI</Link>
                    <Link to="/Grammarly">Grammarly</Link>
                    <Link to="/TeachFX">TeachFX</Link>
                    <Link to="/MoocLab">MoocLab</Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* AI for SEO*/}
          <li
            className="nav-item dropdown "
            onClick={() => toggleDropdown("seo")}
          >
            <span className="dropdown-toggle text-white">AI For SEO</span>
            {activeDropdown === "seo" && (
              <div
                className="dropdown-card show"
                style={{
                  maxWidth: "355px",
                  left: "-16rem",
                  marginTop: "3rem",
                  position: "absolute",
                  zIndex: 1000,
                }}
              >
                <div
                  className={`dropdown-grid ${
                    window.innerWidth <= 991 ? "single-column" : ""
                  }`}
                >
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/ClearScopeAI">ClearScopeAI</Link>
                    <Link to="/ContentHarmanyAI">ContentHarmanyAI</Link>
                    <Link to="/DashWordAI">DashWordAI</Link>
                    <Link to="/FraseAI">FraseAI</Link>
                    <Link to="/GrowthBarAI">GrowthBarAI</Link>
                    <Link to="/MarketMuseAI">MarketMuseAI</Link>
                  </div>
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/NeuronWriter">NeuronWriter</Link>
                    <Link to="/OutrankingAI">OutrankingAI</Link>
                    <Link to="/PageOptimizerProAI">PageOptimizerProAI</Link>
                    <Link to="/ScalenutAI">ScalenutAI</Link>
                    <Link to="/SurferSEOAI">SurferSEOAI</Link>
                    <Link to="/WriterZenAI">WriterZenAI</Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* AI in software */}
          <li
            className="nav-item dropdown"
            onClick={(e) => toggleDropdown("software", e)}
          >
            <span className="dropdown-toggle text-white">AI for Software</span>
            {activeDropdown === "software" && (
              <div
                className="dropdown-card show"
                style={{
                  maxWidth: "355px",
                  left: "-20rem",
                  marginTop: "3rem",
                  position: "absolute",
                  zIndex: 1000,
                }}
              >
                <div
                  className={`dropdown-grid ${
                    window.innerWidth <= 991 ? "single-column" : ""
                  }`}
                >
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/RainforestQA">RainforestQA</Link>
                    <Link to="/ApplitoolsAI">ApplitoolsAI</Link>
                    <Link to="/LambdaTestAI">LambdaTestAI</Link>
                    <Link to="/PerfectoAI">PerfectoAI</Link>
                    <Link to="/FunctionizeAI">FunctionizeAI</Link>
                  </div>
                  {/* Design Tools Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Design Tools <SiAntdesign size={20} />
                    </h6>
                    <Link to="/BrowserStackAI">BrowserStackAI</Link>
                    <Link to="/AppvanceIQ">AppvanceIQ</Link>
                    <Link to="/TricentisToscaAI">TricentisToscaAI</Link>
                    <Link to="/Testimio">Testimio</Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Ai for Privacy*/}

          <li
            className="nav-item dropdown "
            onClick={() => toggleDropdown("privacy")}
          >
            <span className="dropdown-toggle text-white">AI For Privacy</span>
            {activeDropdown === "privacy" && (
              <div
                className="dropdown-card show"
                style={{
                  maxWidth: "355px",
                  left: "-18rem",
                  marginTop: "3rem",
                  position: "absolute",
                  zIndex: 1000,
                }}
              >
                <div
                  className={`dropdown-grid ${
                    window.innerWidth <= 991 ? "single-column" : ""
                  }`}
                >
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/Private">Private AI</Link>
                    <Link to="/AnonosAI">Anonos AI</Link>
                    <Link to="/VaulTree">VaulTree AI</Link>
                    <Link to="/Duality">Duality AI</Link>
                    <Link to="/"></Link>
                    <Link to="/"></Link>
                  </div>
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/"></Link>
                    <Link to="/"></Link>
                    <Link to="/"></Link>
                    <Link to="/"></Link>
                    <Link to="/"></Link>
                    <Link to="/"></Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Ai for   Image Generation */}

          <li
            className="nav-item dropdown "
            onClick={() => toggleDropdown("image")}
          >
            <span className="dropdown-toggle text-white">AI For Image</span>
            {activeDropdown === "image" && (
              <div
                className="dropdown-card show"
                style={{
                  maxWidth: "355px",
                  left: "3rem",
                  marginTop: "0.8rem",
                  position: "absolute",
                  zIndex: 1000,
                }}
              >
                <div
                  className={`dropdown-grid ${
                    window.innerWidth <= 991 ? "single-column" : ""
                  }`}
                >
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/MidJourney">MidJourney</Link>
                    <Link to="/AdobeFireflyAI">Adobe Firefly</Link>
                    <Link to="/RunwayMLAI">Runway ML</Link>
                    <Link to="/CanvaAI">Canva AI</Link>
                    <Link to="/ArtbreederAI">Artbreeder</Link>
                    <Link to="/ReminiAI">Remini AI</Link>
                    <Link to="/Removebg">Removebg</Link>
                  </div>
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/NightCafeAI">NightCafe Creator</Link>
                    <Link to="/DreambyWombo">Dream by Wombo</Link>
                    <Link to="/DeepDreamGeneratorAI">DeepDream Generator</Link>

                    <Link to="/LuminarAI">LuminarAI</Link>
                    <Link to="/FotorAI">FotorAI</Link>
                    <Link to="/ClipDropAI">ClipDropAI</Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* AI for mapping */}
          <li
            className="nav-item dropdown "
            onClick={() => toggleDropdown("mapping")}
          >
            <span className="dropdown-toggle text-white">
              {" "}
              AI Mind Mapping{" "}
            </span>
            {activeDropdown === "mapping" && (
              <div
                className="dropdown-card show"
                style={{
                  maxWidth: "355px",
                  left: "-50rem",
                  marginTop: "0.8rem",
                  position: "absolute",
                  zIndex: 1000,
                }}
              >
                <div
                  className={`dropdown-grid ${
                    window.innerWidth <= 991 ? "single-column" : ""
                  }`}
                >
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/AyoaAI">Ayoa AI</Link>
                    <Link to="/MindMeisteAI">MindMeister AI</Link>
                    <Link to="/WhimsicalAI">Whimsical AI</Link>
                    <Link to="/XMindAI">XMind AI</Link>
                    <Link to="/MindNodeAI">MindNode AI</Link>
                  </div>
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/FreeMindAI">FreeMind AI</Link>
                    <Link to="/SimpleMindAI">SimpleMind AI</Link>
                    <Link to="/CoggleAI">Coggle AI</Link>
                    <Link to="/LucidchartAI">Lucidchart AI</Link>
                    <Link to="/ScappleAI">Scapple AI</Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* AI for Business Intelligence and Analytics */}
          <li
            className="nav-item dropdown"
            onClick={(e) => toggleDropdown("business", e)}
          >
            <span className="dropdown-toggle text-white">AI for Business</span>
            {activeDropdown === "business" && (
              <div
                className="dropdown-card show"
                style={{
                  maxWidth: "800px",
                  left: "0rem",
                  marginTop: "0.8rem",
                  position: "absolute",
                  zIndex: 1000,
                }}
              >
                <div
                  className={`dropdown-grid ${
                    window.innerWidth <= 991 ? "single-column" : ""
                  }`}
                >
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/MicrosoftCopilot">MicroSoftCopilot</Link>
                    <Link to="/ZapierAI">ZapierAI</Link>
                    <Link to="/Notion">Notion</Link>
                    <Link to="/ClickupAI">ClickupAI</Link>

                    <Link to="/ClickupAI">ClickupAI</Link>
                  </div>

                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>

                    <Link to="/TrelloAI">TrelloAI</Link>
                    <Link to="/Grammarly">Grammarly AI</Link>
                    <Link to="/CodaAI">Coda AI</Link>
                    <Link to="/MiroAI">Miro AI</Link>
                    <Link to="/OtterAI">Otter AI</Link>
                    <Link to="/QlikSenseAI">Qlik Sense AI</Link>
                  </div>

                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>

                    <Link to="/TableauAI">Tableau AI</Link>
                    <Link to="/DomoAI">Domo AI</Link>
                    <Link to="/ZohoAnalytics">Zoho Analytics</Link>
                    <Link to="/GoogleAnalyticsAI">Google Analytics AI</Link>

                    <Link to="/HeapAnalytics">Heap Analytics</Link>
                    <Link to="/ThoughtSpot">ThoughtSpot</Link>
                  </div>
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/Qubole">Qubole</Link>
                    <Link to="/OracleAI"> Oracle AI</Link>
                    <Link to="/PowerBI ">Power BI AI </Link>
                    <Link to="/SASAI">SAS AI</Link>
                    <Link to="/EvernoteA">EvernoteAI</Link>
                    <Link to="/RescueAI">RescueAI</Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Ai for Recruirment */}

          <li
            className="nav-item dropdown "
            onClick={() => toggleDropdown("recruitment")}
          >
            <span className="dropdown-toggle text-white">
              AI For Recruitment
            </span>
            {activeDropdown === "recruitment" && (
              <div
                className="dropdown-card show"
                style={{
                  maxWidth: "355px",
                  left: "0rem",
                  marginTop: "0.8rem",
                  position: "absolute",
                  zIndex: 1000,
                }}
              >
                <div
                  className={`dropdown-grid ${
                    window.innerWidth <= 991 ? "single-column" : ""
                  }`}
                >
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/HireVue"> HireVue AI</Link>
                    <Link to="/Pymetrics">Pymetrics AI </Link>
                    <Link to="/XOR">XOR AI</Link>
                    <Link to="/Hiretual">Hiretual AI</Link>
                    <Link to="/SeekOut">SeekOut AI</Link>
                  </div>
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/Vervoe">Vervoe AI</Link>
                    <Link to="/MyInterview ">MyInterview AI</Link>
                    <Link to="/Zoho">Zoho AI</Link>
                    <Link to="/iCIMS">iCIMS AI</Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* AI for Retail */}

          <li
            className="nav-item dropdown "
            onClick={() => toggleDropdown("retail")}
          >
            <span className="dropdown-toggle text-white"> AI For Retail</span>
            {activeDropdown === "retail" && (
              <div
                className="dropdown-card show"
                style={{
                  maxWidth: "355px",
                  left: "0rem",
                  marginTop: "0.8rem",
                  position: "absolute",
                  zIndex: 1000,
                }}
              >
                <div
                  className={`dropdown-grid ${
                    window.innerWidth <= 991 ? "single-column" : ""
                  }`}
                >
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/AiFi">AiFi AI</Link>
                    <Link to="/Everseen">Everseen AI</Link>
                    <Link to="/Govison"> Govison AI</Link>
                    <Link to="/Grabango">Grabango AI</Link>
                    <Link to="/Manlong">Manlong</Link>
                  </div>
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/Sensei">Sensei AI</Link>
                    <Link to="/StandardCognition">Standard Cognition AI</Link>
                    <Link to="/Trigo">Trigo AI</Link>
                    <Link to="/Zippin">Zippin AI</Link>
                    <Link to="/PensaSystem">PensaSystem AI</Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* AI for  Doucmnet Managmenet */}

          <li
            className="nav-item dropdown "
            onClick={() => toggleDropdown("document")}
          >
            <span className="dropdown-toggle text-white">AI For Document</span>
            {activeDropdown === "document" && (
              <div
                className="dropdown-card show"
                style={{
                  maxWidth: "355px",
                  left: "0rem",
                  marginTop: "0.8rem",
                  position: "absolute",
                  zIndex: 1000,
                }}
              >
                <div
                  className={`dropdown-grid ${
                    window.innerWidth <= 991 ? "single-column" : ""
                  }`}
                >
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/BrieflyAI">Briefly AI</Link>
                    <Link to="/DeepDyveAI"> DeepDyve AI</Link>
                    <Link to="/Explainpaper">Explainpaper</Link>
                    <Link to="/Parapharser">Parapharser</Link>
                    <Link to="/HumataAI">Humata </Link>
                    <Link to="/Resoomer">Resoomer</Link>
                  </div>
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/Scholarcy">Scholarcy</Link>
                    <Link to="/Scite">Scite</Link>
                    <Link to="/Smmry">Smmry</Link>
                    <Link to="/Summarizebot">Summarizebot</Link>
                    <Link to="/UpsumAI"> UpsumAI</Link>
                    <Link to="/UpwordAI">UpwordAI</Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Ai for Legal */}

          <li
            className="nav-item dropdown "
            onClick={() => toggleDropdown("legal")}
          >
            <span className="dropdown-toggle text-white">AI for Legal</span>
            {activeDropdown === "legal" && (
              <div
                className="dropdown-card show"
                style={{
                  maxWidth: "355px",
                  left: "-8rem",
                  marginTop: "0.8rem",
                  position: "absolute",
                  zIndex: 1000,
                }}
              >
                <div
                  className={`dropdown-grid ${
                    window.innerWidth <= 991 ? "single-column" : ""
                  }`}
                >
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/AIPowered">AI Powered </Link>
                    <Link to="/DoNotPay">DoNotPay</Link>
                    <Link to="/LawGeex">LawGeex</Link>
                    <Link to="/LegalRobot">LegalRobot</Link>
                    <Link to="/LegalZoomAI">LegalZoomAI</Link>
                  </div>
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/Luminance">Luminance</Link>
                    <Link to="/Rivetz">Rivetz</Link>
                    <Link to="/RossIntelligence">RossIntelligence</Link>
                    <Link to="/Legatics">Legatics</Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Ai for Cyber security*/}

          <li
            className="nav-item dropdown "
            onClick={() => toggleDropdown("syber")}
          >
            <span className="dropdown-toggle text-white">AI For Security</span>
            {activeDropdown === "syber" && (
              <div
                className="dropdown-card show"
                style={{
                  maxWidth: "355px",
                  left: "-10rem",
                  marginTop: "0.8rem",
                  position: "absolute",
                  zIndex: 1000,
                }}
              >
                <div
                  className={`dropdown-grid ${
                    window.innerWidth <= 991 ? "single-column" : ""
                  }`}
                >
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/CheckPoint">CheckPoint AI</Link>
                    <Link to="/CrowdStrike">CrowdStrike AI</Link>
                    <Link to="/Cylance">Cylance AI</Link>
                    <Link to="/Cynet">Cynet AI</Link>
                    <Link to="/Darktrace">Darktrace AI</Link>
                  </div>
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/Palo">Palo AI</Link>
                    <Link to="/ShieldAI">ShieldAI</Link>
                    <Link to="/SonicWall">SonicWall</Link>
                    <Link to="/Vectra">Vectra AI</Link>
                    <Link to="/Fortinet">Fortinet AI</Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Ai for Meeting scheduling*/}

          <li
            className="nav-item dropdown "
            onClick={() => toggleDropdown("meeting")}
          >
            <span className="dropdown-toggle text-white">AI For Meeting</span>
            {activeDropdown === "meeting" && (
              <div
                className="dropdown-card show"
                style={{
                  maxWidth: "355px",
                  left: "-10rem",
                  marginTop: "0.8rem",
                  position: "absolute",
                  zIndex: 1000,
                }}
              >
                <div
                  className={`dropdown-grid ${
                    window.innerWidth <= 991 ? "single-column" : ""
                  }`}
                >
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/"></Link>
                    <Link to="/"></Link>
                    <Link to="/"></Link>
                    <Link to="/"></Link>
                    <Link to="/"></Link>
                    <Link to="/"></Link>
                  </div>
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/"></Link>
                    <Link to="/"></Link>
                    <Link to="/"></Link>
                    <Link to="/"></Link>
                    <Link to="/"></Link>
                    <Link to="/"></Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/* Ai for Search engines*/}

          <li
            className="nav-item dropdown "
            onClick={() => toggleDropdown("engines")}
          >
            <span className="dropdown-toggle text-white">AI For Search</span>
            {activeDropdown === "engines" && (
              <div
                className="dropdown-card show"
                style={{
                  maxWidth: "355px",
                  left: "-20rem",
                  marginTop: "0.8rem",
                  position: "absolute",
                  zIndex: 1000,
                }}
              >
                <div
                  className={`dropdown-grid ${
                    window.innerWidth <= 991 ? "single-column" : ""
                  }`}
                >
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/Andi">Andi AI</Link>
                    <Link to="/Neeva">Neeva AI</Link>
                    <Link to="/BraveSearch">BraveSearch AI</Link>
                    <Link to="/Carrot">Carrot AI</Link>
                    <Link to="/Komo">Komo AI</Link>
                  </div>
                  {/* Content Generation Column */}
                  <div
                    className="dropdown-column"
                    style={{ minWidth: "150px" }}
                  >
                    <h6>
                      Content Generation <FaPencilAlt size={20} />
                    </h6>
                    <Link to="/MetaPhor">MetaPhor AI</Link>
                    <Link to="/Mojeek">Mojeek AI</Link>
                    <Link to="/SearxNG">SearchNG AI</Link>
                    <Link to="/Lucid">Lucid AI</Link>
                  </div>
                </div>
              </div>
            )}
          </li>
        </ul>

        <div className="mobile-category-toggle">
          <button onClick={() => setShowMobileMenu((prev) => !prev)}>
            Categories
          </button>
        </div>

        {/* Conditionally show category list */}

        {window.innerWidth <= 991 && (
          <div>
            {activeDropdown === null ? (
              // No dropdown open — show all categories names
              <ul className={`nav-list flex ${showMobileMenu ? "active" : ""}`}>
                <li
                  className="nav-item"
                  onClick={() => toggleDropdown("ai-video")}
                >
                  <span className="dropdown-toggle text-white cursor-pointer">
                    AI for Animation
                  </span>
                </li>
                <li
                  className="nav-item"
                  onClick={() => toggleDropdown("music")}
                >
                  <span className="dropdown-toggle text-white cursor-pointer">
                    AI For Music
                  </span>
                </li>
                <li
                  className="nav-item"
                  onClick={() => toggleDropdown("resume")}
                >
                  <span className="dropdown-toggle text-white cursor-pointer">
                    AI for Resume
                  </span>
                </li>
                <li
                  className="nav-item"
                  onClick={() => toggleDropdown("Chatbots")}
                >
                  <span className="dropdown-toggle text-white cursor-pointer">
                    AI For Chatbots
                  </span>
                </li>
                <li
                  className="nav-item"
                  onClick={() => toggleDropdown("writing")}
                >
                  <span className="dropdown-toggle text-white cursor-pointer">
                    AI for Writing
                  </span>
                </li>
                <li
                  className="nav-item"
                  onClick={() => toggleDropdown("E-commerce")}
                >
                  <span className="dropdown-toggle text-white cursor-pointer">
                    AI For E-commerce
                  </span>
                </li>
                <li
                  className="nav-item"
                  onClick={() => toggleDropdown("education")}
                >
                  <span className="dropdown-toggle text-white cursor-pointer">
                    AI for Education
                  </span>
                </li>

                <li className="nav-item" onClick={() => toggleDropdown("seo")}>
                  <span className="dropdown-toggle text-white cursor-pointer">
                    AI For SEO
                  </span>
                </li>

                <li
                  className="nav-item"
                  onClick={() => toggleDropdown("software")}
                >
                  <span className="dropdown-toggle text-white cursor-pointer">
                    AI For Software
                  </span>
                </li>

                <li
                  className="nav-item"
                  onClick={() => toggleDropdown("privacy")}
                >
                  <span className="dropdown-toggle text-white cursor-pointer">
                    AI For Privacy
                  </span>
                </li>

                <li
                  className="nav-item"
                  onClick={() => toggleDropdown("image")}
                >
                  <span className="dropdown-toggle text-white cursor-pointer">
                    AI For Image
                  </span>
                </li>

                <li
                  className="nav-item"
                  onClick={() => toggleDropdown("mapping")}
                >
                  <span className="dropdown-toggle text-white cursor-pointer">
                    AI Mind Mapping
                  </span>
                </li>

                <li
                  className="nav-item"
                  onClick={() => toggleDropdown("business")}
                >
                  <span className="dropdown-toggle text-white cursor-pointer">
                    AI for Business
                  </span>
                </li>

                <li
                  className="nav-item"
                  onClick={() => toggleDropdown("recruitment")}
                >
                  <span className="dropdown-toggle text-white cursor-pointer">
                    AI For Recruitment
                  </span>
                </li>

                <li
                  className="nav-item"
                  onClick={() => toggleDropdown("retail")}
                >
                  <span className="dropdown-toggle text-white cursor-pointer">
                    AI For Retail
                  </span>
                </li>

                <li
                  className="nav-item"
                  onClick={() => toggleDropdown("document")}
                >
                  <span className="dropdown-toggle text-white cursor-pointer">
                    AI For Document
                  </span>
                </li>

                <li
                  className="nav-item"
                  onClick={() => toggleDropdown("legal")}
                >
                  <span className="dropdown-toggle text-white cursor-pointer">
                    AI for Legal
                  </span>
                </li>

                <li
                  className="nav-item"
                  onClick={() => toggleDropdown("syber")}
                >
                  <span className="dropdown-toggle text-white cursor-pointer">
                    AI For Security
                  </span>
                </li>

                <li
                  className="nav-item"
                  onClick={() => toggleDropdown("meeting")}
                >
                  <span className="dropdown-toggle text-white cursor-pointer">
                    AI For Meeting
                  </span>
                </li>

                <li
                  className="nav-item"
                  onClick={() => toggleDropdown("engines")}
                >
                  <span className="dropdown-toggle text-white cursor-pointer">
                    AI For Search
                  </span>
                </li>
              </ul>
            ) : (
              // Dropdown open hai — sirf activeDropdown category ka dropdown content dikhayein fullscreen style
              <div
                className="dropdown-fullscreen"
                style={{
                  position: "fixed",
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  backgroundColor: "#1a202c",
                  zIndex: 9999,
                  padding: "1rem",
                  overflowY: "auto",
                }}
              >
                <button
                  onClick={() => toggleDropdown(null)}
                  style={{
                    marginTop: "5rem",
                    marginBottom: "3rem",
                    padding: "0.5rem 1rem",
                    fontSize: "1rem",
                    background: "#38bdf8",
                    color: "white",
                    border: "none",
                    borderRadius: "6px",
                    cursor: "pointer",
                  }}
                >
                  Back
                </button>

                {activeDropdown === "ai-video" && (
                  <div>
                    <h2 className="text-white mb-4">AI for Animation</h2>
                    <div className="dropdown-grid single-column">
                      <div className="dropdown-column">
                        <h6>Content Generation</h6>
                        <Link
                          to="/RunWayGen"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null); // Dropdown close karo
                          }}
                        >
                          RunWayGen
                        </Link>
                        <Link
                          to="/DescriptAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Descript AI
                        </Link>
                        <Link
                          to="/Veedio"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Veedio
                        </Link>
                        <Link
                          to="/Lumen5"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Lumen 5
                        </Link>
                        <Link
                          to="/HeyGen"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          HeyGen
                        </Link>
                      </div>
                      <div className="dropdown-column">
                        <h6>Design Tools</h6>
                        <Link
                          to="/Animoto"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Animoto
                        </Link>
                        <Link
                          to="/RephraseAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Rephrase AI
                        </Link>
                        <Link
                          to="/Magisto"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Magisto
                        </Link>
                        <Link
                          to="/SynthesiaAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          SynthesiaAI
                        </Link>
                        <Link
                          to="/PictoryAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          PictoryAI
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {activeDropdown === "music" && (
                  <div>
                    <h2 className="text-white mb-4">AI For Music</h2>
                    <div className="dropdown-grid single-column">
                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/AmperMusicAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          AmperMusicAI
                        </Link>
                        <Link
                          to="/AviaAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          AviaAI
                        </Link>
                        <Link
                          to="/BoomyAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          BoomyAI
                        </Link>
                        <Link
                          to="/DescriptAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          DescriptAI
                        </Link>
                        <Link
                          to="/EcrettMusicAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          EcrettMusicAI
                        </Link>
                      </div>

                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/JukedeckAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          JukedeckAI
                        </Link>
                        <Link
                          to="/ResembleAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          ResembleAI
                        </Link>
                        <Link
                          to="/SoundrawAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          SoundrawAI
                        </Link>
                        <Link
                          to="/VoiceModAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          VoiceModAI
                        </Link>
                        <Link
                          to="/LalalAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          LalalAI
                        </Link>
                      </div>

                      {/* Voice Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Voice <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/PlayHiAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          PlayHiAI
                        </Link>
                        <Link
                          to="/DescriptOverdub"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          DescriptOverdub
                        </Link>
                        <Link
                          to="/WallsaidAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          WallsaidAI
                        </Link>
                        <Link
                          to="/LovoAi"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          LovoAi
                        </Link>
                        <Link
                          to="/DeepgramAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          DeepgramAI
                        </Link>
                      </div>

                      {/* Voice Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Voice <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/SpeechifyAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          SpeechifyAI
                        </Link>
                        <Link
                          to="/AssemblyAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          AssemblyAI
                        </Link>
                        <Link
                          to="/RevAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          RevAI
                        </Link>
                        <Link
                          to="/MurfAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          MurfAI
                        </Link>
                        <Link
                          to="/ElevenlabsAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          ElevenlabsAI
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {activeDropdown === "resume" && (
                  <div>
                    <h2 className="text-white mb-4">AI for Resume</h2>
                    <div className="dropdown-grid single-column">
                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="JobScanAI/"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          JobScanAI
                        </Link>
                        <Link
                          to="TestimA/"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          TestimA
                        </Link>
                        <Link
                          to="FunctionizeAI/"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          FunctionizeAI
                        </Link>
                        <Link
                          to="TricentisAI/"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          TricentisAI
                        </Link>
                        <Link
                          to="PerfectoAI/"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          PerfectoAI
                        </Link>
                      </div>

                      {/* Design Tools Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Design Tools <SiAntdesign size={20} />
                        </h6>
                        <Link
                          to="RessumeAI/"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          RessumeAI
                        </Link>
                        <Link
                          to="ApplitoolsAI/"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          ApplitoolsAI
                        </Link>
                        <Link
                          to="AppvanceAI/"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          AppvanceAI
                        </Link>
                        <Link
                          to="RainForestAI/"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          RainForestAI
                        </Link>
                        <Link
                          to="LambdaTestAI/"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          LambdaTestAI
                        </Link>
                      </div>

                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="ReZiAI/"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          ReZiAI
                        </Link>
                        <Link
                          to="EnhanevA/"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          EnhanevA
                        </Link>
                        <Link
                          to="KickResume/"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          KickResume
                        </Link>
                        <Link
                          to="ZetyAI/"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          ZetyAI
                        </Link>
                        <Link
                          to="VisualAI/"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          VisualAI
                        </Link>
                      </div>

                      {/* Design Tools Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Design Tools <SiAntdesign size={20} />
                        </h6>
                        <Link
                          to="ResunateAI/"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          ResunateAI
                        </Link>
                        <Link
                          to="TealHQAI/"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          TealHQAI
                        </Link>
                        <Link
                          to="HirationAI/"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          HirationAI
                        </Link>
                        <Link
                          to="BrowserStackAI/"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          BrowserStackAI
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {activeDropdown === "Chatbots" && (
                  <div>
                    <h2 className="text-white mb-4">AI For Chatbots</h2>
                    <div className="dropdown-grid single-column">
                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/Chatgpt"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          ChatGPTAI
                        </Link>
                        <Link
                          to="/PerplexityAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          PerplexityAI
                        </Link>
                        <Link
                          to="/Gemini"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Gemini
                        </Link>
                        <Link
                          to="/SnatchBot"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          SnatchBot
                        </Link>
                        <Link
                          to="/PerplexityAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          PerplexityAI
                        </Link>
                        <Link
                          to="/YouchatAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          YouchatAI
                        </Link>
                      </div>

                      {/* Second Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/PoeAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          PoeAI
                        </Link>
                        <Link
                          to="/ReplikaAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          ReplikaAI
                        </Link>
                        <Link
                          to="/JasperAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          JasperAI
                        </Link>
                        <Link
                          to="/Tidio"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Tidio
                        </Link>
                        <Link
                          to="/ClaudeAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          ClaudeAI
                        </Link>
                        <Link
                          to="/CharacterAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          CharacterAI
                        </Link>
                      </div>

                      {/* Third Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/PiAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          PIAI
                        </Link>
                        <Link
                          to="/DriftAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Drift AI
                        </Link>
                        <Link
                          to="/FlowXO"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          FlowXO
                        </Link>
                        <Link
                          to="/Botsify"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Botsify
                        </Link>
                        <Link
                          to="/AivoAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Aivo AI
                        </Link>
                        <Link
                          to="/MobileMonkey"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Mobile Monkey
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {activeDropdown === "writing" && (
                  <div>
                    <h2 className="text-white mb-4">AI for Writing</h2>
                    <div className="dropdown-grid single-column">
                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/CopyAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Copy AI
                        </Link>
                        <a
                          href="#"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          AI Writer 2
                        </a>
                        <a
                          href="#"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          AI Writer 3
                        </a>
                        <a
                          href="#"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          AI Writer 4
                        </a>
                        <a
                          href="#"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          AI Writer 5
                        </a>
                      </div>

                      {/* Design Tools Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Design Tools <SiAntdesign size={20} />
                        </h6>
                        <a
                          href="#"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Logo 1
                        </a>
                        <a
                          href="#"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Logo 2
                        </a>
                        <a
                          href="#"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Logo 3
                        </a>
                        <a
                          href="#"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Logo 4
                        </a>
                        <a
                          href="#"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Logo 5
                        </a>
                      </div>
                    </div>
                  </div>
                )}

                {activeDropdown === "E-commerce" && (
                  <div
                    className="dropdown-card show"
                    style={{
                      maxWidth: "340px",
                      left: "0",
                      marginTop: "-35rem",
                      position: "absolute",
                      zIndex: 1000,
                      overflow: "visible",
                    }}
                  >
                    <div
                      className={`dropdown-grid ${
                        window.innerWidth <= 991 ? "single-column" : ""
                      }`}
                    >
                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/AlgoliaAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          AlgoliaAI
                        </Link>
                        <Link
                          to="/BoldMetricsAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          BoldMetricsAI
                        </Link>
                        <Link
                          to="/ClarifaiAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          ClarifaiAI
                        </Link>
                        <Link
                          to="/FindMineAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          FindMineAI
                        </Link>
                        <Link
                          to="/LilyAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          LilyAI
                        </Link>
                        <Link
                          to="/ClerkioAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          ClerkioAI
                        </Link>
                      </div>

                      {/* Design Tools Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Design Tools <SiAntdesign size={20} />
                        </h6>
                        <Link
                          to="/StyleAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          StyleAI
                        </Link>
                        <Link
                          to="/PhraseeAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          PhraseeAI
                        </Link>
                        <Link
                          to="/ViSenzeAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          ViSenzeAI
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {activeDropdown === "education" && (
                  <div
                    className="dropdown-card show"
                    style={{
                      maxWidth: "355px",
                      left: "0",
                      marginTop: "-35rem",
                      position: "absolute",
                      zIndex: 1000,
                      overflow: "visible",
                    }}
                  >
                    <div
                      className={`dropdown-grid ${
                        window.innerWidth <= 991 ? "single-column" : ""
                      }`}
                    >
                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/QuizletAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          QuizletAI
                        </Link>
                        <Link
                          to="/Socratic"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Socratic
                        </Link>
                        <Link
                          to="/Knewton"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          KnewtonAI
                        </Link>
                        <Link
                          to="/CogniiAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          CogniiAI
                        </Link>
                        <Link
                          to="/SmartSparrow"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          SmartSparrow
                        </Link>
                        <Link
                          to="/BrainlyAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          BrainlyAI
                        </Link>
                      </div>

                      {/* Design Tools Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Design Tools <SiAntdesign size={20} />
                        </h6>
                        <Link
                          to="/DuolingoAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          DuolingoAI
                        </Link>
                        <Link
                          to="/Grammarly"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Grammarly
                        </Link>
                        <Link
                          to="/TeachFX"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          TeachFX
                        </Link>
                        <Link
                          to="/MoocLab"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          MoocLab
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {activeDropdown === "seo" && (
                  <div
                    className="dropdown-card show"
                    style={{
                      maxWidth: "355px",
                      left: "0rem",
                      marginTop: "-35rem",
                      position: "absolute",
                      zIndex: 1000,
                      overflow: "visible",
                    }}
                  >
                    <div
                      className={`dropdown-grid ${
                        window.innerWidth <= 991 ? "single-column" : ""
                      }`}
                    >
                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/ClearScopeAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          ClearScopeAI
                        </Link>
                        <Link
                          to="/ContentHarmanyAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          ContentHarmanyAI
                        </Link>
                        <Link
                          to="/DashWordAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          DashWordAI
                        </Link>
                        <Link
                          to="/FraseAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          FraseAI
                        </Link>
                        <Link
                          to="/GrowthBarAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          GrowthBarAI
                        </Link>
                        <Link
                          to="/MarketMuseAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          MarketMuseAI
                        </Link>
                      </div>

                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/NeuronWriter"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          NeuronWriter
                        </Link>
                        <Link
                          to="/OutrankingAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          OutrankingAI
                        </Link>
                        <Link
                          to="/PageOptimizerProAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          PageOptimizerProAI
                        </Link>
                        <Link
                          to="/ScalenutAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          ScalenutAI
                        </Link>
                        <Link
                          to="/SurferSEOAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          SurferSEOAI
                        </Link>
                        <Link
                          to="/WriterZenAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          WriterZenAI
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {activeDropdown === "software" && (
                  <div
                    className="dropdown-card show"
                    style={{
                      maxWidth: "355px",
                      left: "0rem",
                      marginTop: "-40rem",
                      position: "absolute",
                      zIndex: 1000,
                      overflow: "visible",
                    }}
                  >
                    <div
                      className={`dropdown-grid ${
                        window.innerWidth <= 991 ? "single-column" : ""
                      }`}
                    >
                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/RainforestQA"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          RainforestQA
                        </Link>
                        <Link
                          to="/ApplitoolsAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          ApplitoolsAI
                        </Link>
                        <Link
                          to="/LambdaTestAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          LambdaTestAI
                        </Link>
                        <Link
                          to="/PerfectoAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          PerfectoAI
                        </Link>
                        <Link
                          to="/FunctionizeAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          FunctionizeAI
                        </Link>
                      </div>

                      {/* Design Tools Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Design Tools <SiAntdesign size={20} />
                        </h6>
                        <Link
                          to="/BrowserStackAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          BrowserStackAI
                        </Link>
                        <Link
                          to="/AppvanceIQ"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          AppvanceIQ
                        </Link>
                        <Link
                          to="/TricentisToscaAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          TricentisToscaAI
                        </Link>
                        <Link
                          to="/Testimio"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Testimio
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {activeDropdown === "privacy" && (
                  <div
                    className="dropdown-card show"
                    style={{
                      maxWidth: "355px",
                      left: "0rem",
                      marginTop: "-40rem",
                      position: "absolute",
                      zIndex: 1000,
                      overflow: "visible",
                    }}
                  >
                    <div
                      className={`dropdown-grid ${
                        window.innerWidth <= 991 ? "single-column" : ""
                      }`}
                    >
                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/Private"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Private AI
                        </Link>
                        <Link
                          to="/AnonosAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Anonos AI
                        </Link>
                        <Link
                          to="/VaulTree"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          VaulTree AI
                        </Link>
                        <Link
                          to="/Duality"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Duality AI
                        </Link>
                      </div>

                      {/* Design Tools Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Design Tools <SiAntdesign size={20} />
                        </h6>
                        {/* Agar aapko aur links chahiye to yahan add kar sakte hain */}
                        {/* Otherwise yeh column khali bhi reh sakta hai */}
                      </div>
                    </div>
                  </div>
                )}

                {activeDropdown === "image" && (
                  <div
                    className="dropdown-card show"
                    style={{
                      maxWidth: "355px",
                      left: "0rem",
                      marginTop: "-40rem",
                      position: "absolute",
                      zIndex: 1000,
                      overflow: "visible",
                    }}
                  >
                    <div
                      className={`dropdown-grid ${
                        window.innerWidth <= 991 ? "single-column" : ""
                      }`}
                    >
                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/MidJourney"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          MidJourney
                        </Link>
                        <Link
                          to="/AdobeFireflyAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Adobe Firefly
                        </Link>
                        <Link
                          to="/RunwayMLAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Runway ML
                        </Link>
                        <Link
                          to="/CanvaAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Canva AI
                        </Link>
                        <Link
                          to="/ArtbreederAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Artbreeder
                        </Link>
                        <Link
                          to="/ReminiAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Remini AI
                        </Link>
                        <Link
                          to="/Removebg"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Removebg
                        </Link>
                      </div>

                      {/* Second Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/NightCafeAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          NightCafe Creator
                        </Link>
                        <Link
                          to="/DreambyWombo"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Dream by Wombo
                        </Link>
                        <Link
                          to="/DeepDreamGeneratorAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          DeepDream Generator
                        </Link>
                        <Link
                          to="/LuminarAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          LuminarAI
                        </Link>
                        <Link
                          to="/FotorAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          FotorAI
                        </Link>
                        <Link
                          to="/ClipDropAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          ClipDropAI
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {activeDropdown === "mapping" && (
                  <div
                    className="dropdown-card show"
                    style={{
                      maxWidth: "355px",
                      left: "0",
                      marginTop: "-40rem",
                      position: "absolute",
                      zIndex: 1000,
                      overflow: "visible",
                    }}
                  >
                    <div
                      className={`dropdown-grid ${
                        window.innerWidth <= 991 ? "single-column" : ""
                      }`}
                    >
                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/MindMeisterAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          MindMeister AI
                        </Link>
                        <Link
                          to="/XMindAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          XMind AI
                        </Link>
                        <Link
                          to="/AyoaAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Ayoa AI
                        </Link>
                        <Link
                          to="/CoggleAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Coggle AI
                        </Link>
                        <Link
                          to="/MindNodeAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          MindNode AI
                        </Link>
                      </div>

                      {/* Design Tools Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Design Tools <SiAntdesign size={20} />
                        </h6>
                        {/* Yahan aap design tools ke links add kar sakte hain agar chahiye */}
                      </div>
                    </div>
                  </div>
                )}

                {activeDropdown === "business" && (
                  <div
                    className="dropdown-card show"
                    style={{
                      maxWidth: "800px",
                      left: "0rem",
                      marginTop: "-40rem",
                      position: "absolute",
                      zIndex: 1000,
                      overflow: "visible",
                    }}
                  >
                    <div
                      className={`dropdown-grid ${
                        window.innerWidth <= 991 ? "single-column" : ""
                      }`}
                    >
                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/MicrosoftCopilot"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          MicroSoftCopilot
                        </Link>
                        <Link
                          to="/ZapierAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          ZapierAI
                        </Link>
                        <Link
                          to="/Notion"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Notion
                        </Link>
                        <Link
                          to="/ClickupAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          ClickupAI
                        </Link>
                      </div>

                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/TrelloAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          TrelloAI
                        </Link>
                        <Link
                          to="/Grammarly"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Grammarly AI
                        </Link>
                        <Link
                          to="/CodaAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Coda AI
                        </Link>
                        <Link
                          to="/MiroAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Miro AI
                        </Link>
                        <Link
                          to="/OtterAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Otter AI
                        </Link>
                        <Link
                          to="/QlikSenseAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Qlik Sense AI
                        </Link>
                      </div>

                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/TableauAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Tableau AI
                        </Link>
                        <Link
                          to="/DomoAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Domo AI
                        </Link>
                        <Link
                          to="/ZohoAnalytics"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Zoho Analytics
                        </Link>
                        <Link
                          to="/GoogleAnalyticsAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Google Analytics AI
                        </Link>
                        <Link
                          to="/HeapAnalytics"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Heap Analytics
                        </Link>
                        <Link
                          to="/ThoughtSpot"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          ThoughtSpot
                        </Link>
                      </div>

                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/Qubole"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Qubole
                        </Link>
                        <Link
                          to="/OracleAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Oracle AI
                        </Link>
                        <Link
                          to="/PowerBI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Power BI AI
                        </Link>
                        <Link
                          to="/SASAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          SAS AI
                        </Link>
                        <Link
                          to="/EvernoteAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          EvernoteAI
                        </Link>
                        <Link
                          to="/RescueAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          RescueAI
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {activeDropdown === "retail" && (
                  <div
                    className="dropdown-card show"
                    style={{
                      maxWidth: "800px",
                      left: "0rem",
                      marginTop: "-40rem",
                      position: "absolute",
                      zIndex: 1000,
                      overflow: "visible",
                    }}
                  >
                    <div
                      className={`dropdown-grid ${
                        window.innerWidth <= 991 ? "single-column" : ""
                      }`}
                    >
                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/RetailAI1"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Retail AI 1
                        </Link>
                        <Link
                          to="/RetailAI2"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Retail AI 2
                        </Link>
                        <Link
                          to="/RetailAI3"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Retail AI 3
                        </Link>
                        <Link
                          to="/RetailAI4"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Retail AI 4
                        </Link>
                        <Link
                          to="/RetailAI5"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Retail AI 5
                        </Link>
                      </div>

                      {/* Design Tools Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Design Tools <SiAntdesign size={20} />
                        </h6>
                        <Link
                          to="/RetailDesign1"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Retail Design 1
                        </Link>
                        <Link
                          to="/RetailDesign2"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Retail Design 2
                        </Link>
                        <Link
                          to="/RetailDesign3"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Retail Design 3
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {activeDropdown === "document" && (
                  <div
                    className="dropdown-card show"
                    style={{
                      maxWidth: "800px",
                      left: "0rem",
                      marginTop: "-40rem",
                      position: "absolute",
                      zIndex: 1000,
                      overflow: "visible",
                    }}
                  >
                    <div
                      className={`dropdown-grid ${
                        window.innerWidth <= 991 ? "single-column" : ""
                      }`}
                    >
                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/BrieflyAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Briefly AI
                        </Link>
                        <Link
                          to="/DeepDyveAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          DeepDyve AI
                        </Link>
                        <Link
                          to="/Explainpaper"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Explainpaper
                        </Link>
                        <Link
                          to="/Parapharser"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Parapharser
                        </Link>
                        <Link
                          to="/HumataAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Humata
                        </Link>
                        <Link
                          to="/Resoomer"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Resoomer
                        </Link>
                      </div>

                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/Scholarcy"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Scholarcy
                        </Link>
                        <Link
                          to="/Scite"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Scite
                        </Link>
                        <Link
                          to="/Smmry"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Smmry
                        </Link>
                        <Link
                          to="/Summarizebot"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Summarizebot
                        </Link>
                        <Link
                          to="/UpsumAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          UpsumAI
                        </Link>
                        <Link
                          to="/UpwordAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          UpwordAI
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {activeDropdown === "legal" && (
                  <div
                    className="dropdown-card show"
                    style={{
                      maxWidth: "355px",
                      left: "0rem",
                      marginTop: "-40rem",
                      position: "absolute",
                      zIndex: 1000,
                    }}
                  >
                    <div
                      className={`dropdown-grid ${
                        window.innerWidth <= 991 ? "single-column" : ""
                      }`}
                    >
                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/AIPowered"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          AI Powered
                        </Link>
                        <Link
                          to="/DoNotPay"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          DoNotPay
                        </Link>
                        <Link
                          to="/LawGeex"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          LawGeex
                        </Link>
                        <Link
                          to="/LegalRobot"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          LegalRobot
                        </Link>
                        <Link
                          to="/LegalZoomAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          LegalZoomAI
                        </Link>
                      </div>

                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/Luminance"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Luminance
                        </Link>
                        <Link
                          to="/Rivetz"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Rivetz
                        </Link>
                        <Link
                          to="/RossIntelligence"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          RossIntelligence
                        </Link>
                        <Link
                          to="/Legatics"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Legatics
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {activeDropdown === "syber" && (
                  <div
                    className="dropdown-card show"
                    style={{
                      maxWidth: "355px",
                      left: "0rem",
                      marginTop: "-40rem",
                      position: "absolute",
                      zIndex: 1000,
                    }}
                  >
                    <div
                      className={`dropdown-grid ${
                        window.innerWidth <= 991 ? "single-column" : ""
                      }`}
                    >
                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/CheckPoint"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          CheckPoint AI
                        </Link>
                        <Link
                          to="/CrowdStrike"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          CrowdStrike AI
                        </Link>
                        <Link
                          to="/Cylance"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Cylance AI
                        </Link>
                        <Link
                          to="/Cynet"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Cynet AI
                        </Link>
                        <Link
                          to="/Darktrace"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Darktrace AI
                        </Link>
                      </div>

                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/Palo"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Palo AI
                        </Link>
                        <Link
                          to="/ShieldAI"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          ShieldAI
                        </Link>
                        <Link
                          to="/SonicWall"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          SonicWall
                        </Link>
                        <Link
                          to="/Vectra"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Vectra AI
                        </Link>
                        <Link
                          to="/Fortinet"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Fortinet AI
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {activeDropdown === "meeting" && (
                  <div
                    className="dropdown-card show"
                    style={{
                      maxWidth: "355px",
                      left: "0rem",
                      marginTop: "-40rem",
                      position: "absolute",
                      zIndex: 1000,
                    }}
                  >
                    <div
                      className={`dropdown-grid ${
                        window.innerWidth <= 991 ? "single-column" : ""
                      }`}
                    >
                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/MeetingTool1"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Meeting Tool 1
                        </Link>
                        <Link
                          to="/MeetingTool2"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Meeting Tool 2
                        </Link>
                        <Link
                          to="/MeetingTool3"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Meeting Tool 3
                        </Link>
                        <Link
                          to="/MeetingTool4"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Meeting Tool 4
                        </Link>
                        <Link
                          to="/MeetingTool5"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Meeting Tool 5
                        </Link>
                      </div>

                      {/* Design Tools Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Design Tools <SiAntdesign size={20} />
                        </h6>
                        <Link
                          to="/MeetingDesign1"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Meeting Design 1
                        </Link>
                        <Link
                          to="/MeetingDesign2"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Meeting Design 2
                        </Link>
                        <Link
                          to="/MeetingDesign3"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Meeting Design 3
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {activeDropdown === "engines" && (
                  <div
                    className="dropdown-card show"
                    style={{
                      maxWidth: "355px",
                      left: "0rem",
                      marginTop: "-40rem",
                      position: "absolute",
                      zIndex: 1000,
                    }}
                  >
                    <div
                      className={`dropdown-grid ${
                        window.innerWidth <= 991 ? "single-column" : ""
                      }`}
                    >
                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/Andi"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Andi AI
                        </Link>
                        <Link
                          to="/Neeva"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Neeva AI
                        </Link>
                        <Link
                          to="/BraveSearch"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          BraveSearch AI
                        </Link>
                        <Link
                          to="/Carrot"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Carrot AI
                        </Link>
                        <Link
                          to="/Komo"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Komo AI
                        </Link>
                      </div>

                      {/* Content Generation Column */}
                      <div
                        className="dropdown-column"
                        style={{ minWidth: "150px" }}
                      >
                        <h6>
                          Content Generation <FaPencilAlt size={20} />
                        </h6>
                        <Link
                          to="/MetaPhor"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          MetaPhor AI
                        </Link>
                        <Link
                          to="/Mojeek"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Mojeek AI
                        </Link>
                        <Link
                          to="/SearxNG"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          SearchNG AI
                        </Link>
                        <Link
                          to="/Lucid"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Lucid AI
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {activeDropdown === "recruitment" && (
                  <div>
                    <h2 className="text-white mb-4">AI for Recruitment</h2>
                    <div className="dropdown-grid single-column">
                      <div className="dropdown-column">
                        <h6>Candidate Screening</h6>
                        <Link
                          to="/HireVue"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          HireVue AI
                        </Link>
                        <Link
                          to="/Pymetrics"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Pymetrics AI
                        </Link>
                        <Link
                          to="/XOR"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          XOR AI
                        </Link>
                        <Link
                          to="/Hiretual"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Hiretual AI
                        </Link>
                        <Link
                          to="/SeekOut"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          SeekOut AI
                        </Link>
                      </div>
                      <div className="dropdown-column">
                        <h6>Interview & Assessment</h6>
                        <Link
                          to="/Vervoe"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Vervoe AI
                        </Link>
                        <Link
                          to="/MyInterview"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          MyInterview AI
                        </Link>
                        <Link
                          to="/Zoho"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          Zoho AI
                        </Link>
                        <Link
                          to="/iCIMS"
                          onClick={() => {
                            setShowMobileMenu(false);
                            setActiveDropdown(null);
                          }}
                        >
                          iCIMS AI
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {/* baki categories ke liye bhi similar structure */}
              </div>
            )}
          </div>
        )}
      </nav>
    </div>
  );
};

export default CategoriesNavbar
