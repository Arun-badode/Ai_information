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
                  maxWidth: "600px",
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

          {/* Ai for Music end  */}

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
                    <Link to="EnhanevAI/">Enhanev AI</Link>
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

          {/* Ai for Resume End  */}
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
          {/*  AI for Education end */}
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
          {/* AI for SEO   end*/}
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

          {/* Ai for Privacy end  */}

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

          {/* Ai for   Image Generation   end*/}
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
          {/*Ai for mapping end */}
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

          {/* AI for Retail */}

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

          {/* Ai for Recruirment  end  */}

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
                    <Link to="/Standard">Standard Cognition AI</Link>
                    <Link to="/Trigo">Trigo AI</Link>
                    <Link to="/Zippin">Zippin AI</Link>
                    <Link to="/PensaSystem">PensaSystem AI</Link>
                  </div>
                </div>
              </div>
            )}
          </li>

          {/*Ai for Reatil   end */}

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

          {/*AI for  Doucmnet Managmenet   end  */}

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

          {/* Ai for legal end  */}

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

          {/* Ai for Cyber security  end  */}

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

          {/* Ai for meeting end  */}

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

          {/* Ai for search engines end  */}
        </ul>

        <div className="mobile-category-toggle">
          <button onClick={() => setShowMobileMenu((prev) => !prev)}>
            Categories
          </button>
        </div>

        {/* Conditionally show category list */}
        {window.innerWidth <= 991 && (
          <ul className={`nav-list flex ${showMobileMenu ? "active" : ""}`}>
            {/* AI for Animation */}
            <li
              className="nav-item dropdown"
              onClick={(e) => toggleDropdown("ai-video", e)}
            >
              <span className="dropdown-toggle text-white">
                AI for Animation
              </span>
              {activeDropdown === "ai-video" && (
                <div className="dropdown-card show">
                  <div className="dropdown-grid-2">
                    <div className="dropdown-column">
                      <h6>
                        Content Generation <FaPencilAlt size={20} />
                      </h6>
                      <Link
                        to="/RunWayGen"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        RunWayGen
                      </Link>
                      <Link
                        to="/DescriptAI"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        Descript AI
                      </Link>
                      <Link
                        to="/Veedio"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        Veedio
                      </Link>
                      <Link
                        to="/Lumen5"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        Lumen 5
                      </Link>
                      <Link
                        to="/HeyGen"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        HeyGen
                      </Link>
                    </div>

                    <div
                      className="dropdown-column"
                      style={{ minWidth: "150px" }}
                    >
                      <h6>
                        Design Tools <SiAntdesign size={20} />
                      </h6>
                      <Link
                        to="/Animoto"
                        onClick={() => setShowMobileMenu(false)} // This will close the mobile menu when clicked
                      >
                        Animoto
                      </Link>
                      <Link
                        to="/RephraseAI"
                        onClick={() => setShowMobileMenu(false)} // Close mobile menu
                      >
                        Rephrase AI
                      </Link>
                      <Link
                        to="/Magisto"
                        onClick={() => setShowMobileMenu(false)} // Close mobile menu
                      >
                        Magisto
                      </Link>
                      <Link
                        to="/SynthesiaAI"
                        onClick={() => setShowMobileMenu(false)} // Close mobile menu
                      >
                        SynthesiaAI
                      </Link>
                      <Link
                        to="/PictoryAI"
                        onClick={() => setShowMobileMenu(false)} // Close mobile menu
                      >
                        PictoryAI
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* AI for Music */}
            <li
              className="nav-item dropdown"
              onClick={() => toggleDropdown("music")}
            >
              <span className="dropdown-toggle text-white">AI For Music</span>
              {activeDropdown === "music" && (
                <div
                  className="dropdown-card show"
                  style={{
                    maxWidth: "600px",
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
                      <Link
                        to="/AmperMusicAI"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        AmperMusicAI
                      </Link>
                      <Link
                        to="/AviaAI"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        AviaAI
                      </Link>
                      <Link
                        to="/BoomyAI"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        BoomyAI
                      </Link>
                      <Link
                        to="/DescriptAI"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        DescriptAI
                      </Link>
                      <Link
                        to="/EcrettMusicAI"
                        onClick={() => setShowMobileMenu(false)}
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
                        onClick={() => setShowMobileMenu(false)}
                      >
                        JukedeckAI
                      </Link>
                      <Link
                        to="/ResembleAI"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        ResembleAI
                      </Link>
                      <Link
                        to="/SoundrawAI"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        SoundrawAI
                      </Link>
                      <Link
                        to="/VoiceModAI"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        VoiceModAI
                      </Link>
                      <Link
                        to="/LalalAI"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        LalalAI
                      </Link>
                    </div>

                    {/* Content Generation Column */}
                    <div
                      className="dropdown-column"
                      style={{ minWidth: "150px" }}
                    >
                      <h6>
                        Voice <FaPencilAlt size={20} />
                      </h6>
                      <Link
                        to="/PlayHiAI"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        PlayHiAI
                      </Link>
                      <Link
                        to="/DescriptOverdub"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        DescriptOverdub
                      </Link>
                      <Link
                        to="/WallsaidAI"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        WallsaidAI
                      </Link>
                      <Link
                        to="/LovoAi"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        LovoAi
                      </Link>
                      <Link
                        to="/DeepgramAI"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        DeepgramAI
                      </Link>
                    </div>
                    {/* Content Generation Column */}
                    <div
                      className="dropdown-column"
                      style={{ minWidth: "150px" }}
                    >
                      <h6>
                        Voice <FaPencilAlt size={20} />
                      </h6>
                      <Link
                        to="/SpeechifyAI"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        SpeechifyAI
                      </Link>
                      <Link
                        to="/AssemblyAI"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        AssemblyAI
                      </Link>
                      <Link
                        to="/RevAI"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        RevAI
                      </Link>
                      <Link
                        to="/MurfAI"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        MurfAI
                      </Link>
                      <Link
                        to="/ElevenlabsAI"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        ElevenlabsAI
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* AI for Resume */}
            <li
              className="nav-item dropdown"
              onClick={() => toggleDropdown("resume")}
            >
              <span className="dropdown-toggle text-white">AI for Resume</span>
              {activeDropdown === "resume" && (
                <div className="dropdown-card show">
                  <div className="dropdown-grid">
                    <div className="dropdown-column">
                      <h6>
                        Content Generation <FaPencilAlt size={20} />
                      </h6>
                      <Link
                        to="JobScanAI/"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        JobScanAI
                      </Link>
                      <Link
                        to="TestimA/"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        TestimA
                      </Link>
                      <Link
                        to="FunctionizeAI/"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        FunctionizeAI
                      </Link>
                      <Link
                        to="TricentisAI/"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        TricentisAI
                      </Link>
                      <Link
                        to="PerfectoAI/"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        PerfectoAI
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </li>

            {/* AI for Chatbots */}
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

            {/* AI Writing & Content Creation */}
            <li
              className="nav-item dropdown"
              onClick={(e) => toggleDropdown("writing", e)}
            >
              <span className="dropdown-toggle text-white">AI for Writing</span>
              {activeDropdown === "writing" && (
                <div className="dropdown-card show">
                  <div className="dropdown-grid">
                    <div className="dropdown-column">
                      <h6>
                        Content Generation <FaPencilAlt size={20} />
                      </h6>
                      <Link
                        to="/CopyAI"
                        onClick={() => setShowMobileMenu(false)}
                      >
                        Copy AI
                      </Link>
                      <Link to="#">AI Writer 2</Link>
                      <Link to="#">AI Writer 3</Link>
                      <Link to="#">AI Writer 4</Link>
                      <Link to="#">AI Writer 5</Link>
                    </div>
                  </div>
                </div>
              )}
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
};

export default CategoriesNavbar;
