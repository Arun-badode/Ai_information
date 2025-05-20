// import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "../../ImageMindAI.css"; // <-- custom CSS file import
// import { Container, Row, Col, Button, ProgressBar } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import Logo from "../../../Images/logo[2].png";
// import deatilimage from "../../../Images/DetailImage.png";
// import  TealHQAI from "../../../../public/assets/Img/Ai for Resume/48.png";


// // review section data
// const reviews = [
//   {
//     name: "Alex Johnson",
//     date: "April 15, 2025",
//     review:
//       "This tool has completely transformed my workflow. The AI capabilities are far beyond what I expected and the interface is intuitive.",
//     rating: 5,
//   },
//   {
//     name: "Sarah Miller",
//     date: "April 10, 2025",
//     review:
//       "Very powerful tool with great features. The only reason I’m not giving 5 stars is because of the learning curve for some advanced features.",
//     rating: 4,
//   },
//   {
//     name: "David Chen",
//     date: "April 3, 2025",
//     review:
//       "Worth every penny! The customer support is exceptional and the tool itself has saved me countless hours of work.",
//     rating: 5,
//   },
//   {
//     name: "Emma Wilson",
//     date: "March 28, 2025",
//     review:
//       "Good tool overall, but I’ve experienced some performance issues with larger projects. Hope they improve this in future updates.",
//     rating: 3,
//   },
// ];

// const ratingBreakdown = {
//   "5 stars": 70,
//   "4 stars": 20,
//   "3 stars": 7,
//   "2 stars": 2,
//   "1 star": 1,
// };

// // Technical details styles
// const styles = {
//   section: {
//     backgroundColor: "#0d1117",
//     color: "#c9d1d9",
//     minHeight: "100vh",
//     padding: "60px 0",
//   },
//   card: {
//     backgroundColor: "#161b22",
//     borderRadius: "16px",
//     boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
//     padding: "30px",
//     height: "100%",
//   },
//   smallText: {
//     fontSize: "0.95rem",
//   },
//   button: {
//     backgroundColor: "#238636",
//     borderColor: "#238636",
//   },
//   buttonHover: {
//     backgroundColor: "#2ea043",
//     borderColor: "#2ea043",
//   },
// };
// const TealHQAI = () => {
//   const [activeTab, setActiveTab] = useState("Features"); // Set the default

//   const [showAllFaqs, setShowAllFaqs] = useState(false);

//   const renderTabContent = () => {
//     switch (activeTab) {
//       case "Features":
//         return (
//           <div className="row g-4">
//             <div className="text-center">
//               <p className="text-primary">
//                 Smart Resume Creation with TealHQ Career Copilot AI
//               </p>
//               <h3 className="">
//                 Tailored, ATS-Friendly Resumes for Career Growth
//               </h3>
//             </div>
//             {[
//               {
//                 icon: "📝",
//                 title: "ATS Compatibility Enhancements",
//                 desc: "TealHQ AI suggests strategic improvements to align your resume with Applicant Tracking Systems, boosting visibility and increasing your chances of being shortlisted.",
//               },
//               {
//                 icon: "🌍",
//                 title: "Global Language Resume Options",
//                 desc: "Craft multilingual resumes to access job opportunities across global markets, expanding your professional reach beyond borders.",
//               },
//               {
//                 icon: "⚡",
//                 title: "Rapid Resume Personalization",
//                 desc: "Build personalized, job-targeted resumes swiftly using our AI-driven editor, cutting down hours of manual edits.",
//               },
//               {
//                 icon: "🔍",
//                 title: "Role-Specific Optimization",
//                 desc: "Receive content suggestions based on job titles and descriptions to ensure your resume resonates with hiring managers.",
//               },
//               {
//                 icon: "🎯",
//                 title: "Expert Industry Insights",
//                 desc: "Access resume-building tips tailored for different sectors like technology, healthcare, marketing, and finance, ensuring relevance and professionalism.",
//               },
//               {
//                 icon: "🔗",
//                 title: "Job Platform Integration",
//                 desc: "Download resumes in formats ready for LinkedIn, Indeed, and other major job portals, making application submission smooth and hassle-free.",
//               },
//             ].map((feature, index) => (
//               <div className="col-md-4" key={index}>
//                 <div
//                   className="custom-card text-light p-4 h-100"
//                   style={{ border: "1px solid #00796B" }}
//                 >
//                   <div className="icon mb-3">{feature.icon}</div>
//                   <h5 className="fw-bold">{feature.title}</h5>
//                   <p>{feature.desc}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         );

//       case "FAQs":
//         return (
//           <div className="faq-section container py-4">
//             <h3 className="text-center text-white mb-4 text-primary">
//               Frequently Asked Questions
//             </h3>

//             <div className="accordion" id="faqAccordion">
//               {[
//                 {
//                   q: "What is TealHQ Career Copilot AI?",
//                   a: "TealHQ Career Copilot AI is an intelligent platform designed to help job seekers craft personalized, ATS-friendly resumes and cover letters, making it easier to stand out in competitive job markets.",
//                 },
//                 {
//                   q: "How does TealHQ Career Copilot AI simplify resume building?",
//                   a: "It offers dynamic keyword suggestions, modern templates, and instant feedback, making the resume creation process fast, efficient, and optimized for recruiters and ATS.",
//                 },
//                 {
//                   q: "What features are available in TealHQ Career Copilot AI?",
//                   a: "Key features include customizable resume layouts, live optimization tips, ATS scoring, multilingual support, and smart cover letter generation.",
//                 },
//                 {
//                   q: "Can I build a cover letter using TealHQ Career Copilot AI?",
//                   a: "Absolutely! The platform provides a guided cover letter builder with intelligent suggestions based on your resume and job goals.",
//                 },
//                 {
//                   q: "Is TealHQ Career Copilot AI compatible with ATS systems?",
//                   a: "Yes, every resume created through TealHQ is optimized to be ATS-compatible, increasing your chances of passing initial screenings.",
//                 },
//                 {
//                   q: "What file formats can I export my resume in?",
//                   a: "TealHQ supports export in popular formats like PDF and DOCX, ensuring your resume is job-ready and easy to upload anywhere.",
//                 },
//                 {
//                   q: "Can I upload my resume to LinkedIn using TealHQ?",
//                   a: "While there's no direct LinkedIn integration, you can easily download your resume and upload it manually to your LinkedIn profile.",
//                 },
//                 {
//                   q: "Does TealHQ provide role-specific recommendations?",
//                   a: "Yes, the AI tailors content based on the job you're targeting, highlighting relevant skills and achievements to boost your application.",
//                 },
//                 {
//                   q: "How does TealHQ adapt resumes for different industries?",
//                   a: "With sector-specific tips and template recommendations, TealHQ ensures your resume aligns with expectations in fields like tech, marketing, healthcare, and more.",
//                 },
//                 {
//                   q: "Can I change the design of my resume in TealHQ?",
//                   a: "Yes, choose from a range of layouts and adjust colors, fonts, and sections to create a visually unique and professional resume.",
//                 },
//                 {
//                   q: "Does TealHQ help with portfolio building?",
//                   a: "While it's primarily focused on resumes and cover letters, TealHQ can guide you in highlighting your personal brand—useful for linking to an online portfolio.",
//                 },
//                 {
//                   q: "Is TealHQ Career Copilot AI accessible online?",
//                   a: "Yes, it's a fully cloud-based tool. You can log in and manage your resume from any device with internet access.",
//                 },
//                 {
//                   q: "Does it offer feedback while I build my resume?",
//                   a: "Yes, real-time feedback is available for structure, content, and keyword relevance to ensure your resume hits all the right notes.",
//                 },
//                 {
//                   q: "Can TealHQ suggest job titles based on my profile?",
//                   a: "Yes, the platform analyzes your experience and skills to recommend suitable job titles you might want to pursue.",
//                 },
//                 {
//                   q: "Can I use my TealHQ resume on job boards?",
//                   a: "Absolutely. Resumes are exportable in formats compatible with sites like Indeed, LinkedIn, and Glassdoor.",
//                 },
//                 {
//                   q: "Can I download my resume in more than one format?",
//                   a: "Yes, download options include both PDF and DOCX, offering flexibility based on job application needs.",
//                 },
//                 {
//                   q: "Can it help me with my LinkedIn profile?",
//                   a: "TealHQ doesn’t create LinkedIn profiles, but it helps generate polished content you can copy to enhance your profile manually.",
//                 },
//                 {
//                   q: "Is it beginner-friendly?",
//                   a: "Definitely. The intuitive design and helpful tips make it perfect for first-time users as well as experienced professionals.",
//                 },
//                 {
//                   q: "How does TealHQ assist with keeping my resume updated?",
//                   a: "You can revisit your resume anytime, making it easy to refresh content as your career progresses.",
//                 },
//                 {
//                   q: "Is multilingual resume support available?",
//                   a: "Yes, you can create resumes in multiple languages to support international job applications.",
//                 },
//                 {
//                   q: "What industries does TealHQ cater to?",
//                   a: "TealHQ is designed for a wide range of fields, including tech, education, finance, healthcare, and more.",
//                 },
//                 {
//                   q: "Is there a free version of TealHQ Career Copilot AI?",
//                   a: "Yes, a free plan is available with core features. You can unlock advanced tools and premium templates by upgrading.",
//                 },
//                 {
//                   q: "Does TealHQ offer interview tips?",
//                   a: "While focused on resumes, TealHQ also provides guidance and resources to help prepare for interviews.",
//                 },
//                 {
//                   q: "Can I get analytics or scoring on my resume?",
//                   a: "Yes, TealHQ offers insights and scoring to show how well your resume performs and where it can be improved.",
//                 },
//                 {
//                   q: "How is my data secured?",
//                   a: "TealHQ follows strict data privacy practices, using encryption and compliance standards to protect your personal information.",
//                 },
//                 {
//                   q: "How do I get started?",
//                   a: "Just sign up on the TealHQ platform, follow the guided prompts, and start building your personalized resume today.",
//                 },
//                 {
//                   q: "Can I create resumes for different job roles?",
//                   a: "Yes, you can create and manage multiple resume versions, each tailored to different roles or industries.",
//                 },
//               ]

//                 .map((item, i) => ({ ...item, id: ` faq${i}` }))
//                 .filter((item, i) => showAllFaqs || i < 4)
//                 .map((item, i) => (
//                   <div className="accordion-item mb-3" key={item.id}>
//                     <h2 className="accordion-header" id={`heading${item.id}`}>
//                       <button
//                         className={`accordion-button ${
//                           i !== 0 ? "collapsed" : ""
//                         }`}
//                         type="button"
//                         data-bs-toggle="collapse"
//                         data-bs-target={`#collapse${item.id}`}
//                         aria-expanded={i === 0 ? "true" : "false"}
//                         aria-controls={`collapse${item.id}`}
//                         style={{
//                           backgroundColor: "#161b22",
//                           color: "#c9d1d9",
//                           fontWeight: "bold",
//                         }}
//                       >
//                         {item.q}
//                       </button>
//                     </h2>
//                     <div
//                       id={`collapse${item.id}`}
//                       className={`accordion-collapse collapse ${
//                         i === 0 ? "show" : ""
//                       }`}
//                       aria-labelledby={`heading${item.id}`}
//                       data-bs-parent="#faqAccordion"
//                     >
//                       <div
//                         className="accordion-body"
//                         style={{
//                           backgroundColor: "#0d1117",
//                           color: "#c9d1d9",
//                           border: "1px solid #238636",
//                           borderRadius: "8px",
//                           padding: "15px",
//                         }}
//                       >
//                         {item.a}
//                       </div>
//                     </div>
//                   </div>
//                 ))}

//               <div className="text-center mt-4">
//                 <button
//                   className="btn btn-outline-light"
//                   onClick={() => setShowAllFaqs(!showAllFaqs)}
//                 >
//                   {showAllFaqs ? "Show Less" : "Read More"}
//                 </button>
//               </div>
//             </div>
//           </div>
//         );

//       case "Screenshots":
//         return (
//           <div className="row g-4">
//             <div className="col-md-6">
//               <img
//                 src="https://www.testingcatalog.com/content/images/size/w2000/2024/06/screenshot-app.runwayml.com-2024.06.24-00_36_32--1-.png"
//                 alt=""
//                 className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
//               />
//             </div>
//             <div className="col-md-6">
//               <img
//                 src="https://www.techspot.com/articles-info/2720/images/2023-08-17-image.jpg"
//                 className="img-fluid rounded-3  w-100 h-100 object-fit-cover"
//               />
//             </div>
//           </div>
//         );

//       case "Reviews":
//         return (
//           <Container style={{ backgroundColor: "black", padding: "20px" }}>
//             <Row style={{ justifyContent: "center" }}>
//               <Col md={12} lg={6} style={{ marginBottom: "20px" }}>
//                 <div
//                   style={{
//                     backgroundColor: "#2f2f2f",
//                     padding: "20px",
//                     borderRadius: "5px",
//                   }}
//                 >
//                   <h4
//                     style={{
//                       fontSize: "1.5rem",
//                       fontWeight: "bold",
//                       color: "white",
//                     }}
//                   >
//                     USER REVIEWS
//                   </h4>
//                   <div className="d-flex align-items-center mb-3">
//                     <p className="text-white">4.5 out of 5</p>
//                     <p style={{ color: "#6c757d" }}> ⭐⭐⭐⭐⭐</p>
//                   </div>
//                   <ProgressBar
//                     now={ratingBreakdown["5 stars"]}
//                     label="5 stars"
//                     variant="success"
//                     style={{ marginBottom: "20px", height: "30px" }}
//                   />
//                   <ProgressBar
//                     now={ratingBreakdown["4 stars"]}
//                     label="4 stars"
//                     variant="info"
//                     style={{ marginBottom: "20px", height: "30px" }}
//                   />
//                   <ProgressBar
//                     now={ratingBreakdown["3 stars"]}
//                     label="3 stars"
//                     variant="warning"
//                     style={{ marginBottom: "20px", height: "30px" }}
//                   />
//                   <ProgressBar
//                     now={ratingBreakdown["2 stars"]}
//                     label="2 stars"
//                     variant="danger"
//                     style={{ marginBottom: "20px", height: "30px" }}
//                   />
//                   <ProgressBar
//                     now={ratingBreakdown["1 star"]}
//                     label="1 star"
//                     variant="secondary"
//                     style={{ marginBottom: "20px", height: "30px" }}
//                   />
//                 </div>
//               </Col>
//               <Col md={12} lg={6} style={{ marginBottom: "20px" }}>
//                 <div style={{ padding: "20px", borderRadius: "5px" }}>
//                   <div className="d-flex justify-content-between align-items-center mb-3">
//                     <h4
//                       style={{
//                         fontSize: "1.5rem",
//                         fontWeight: "bold",
//                         color: "white",
//                       }}
//                     >
//                       RECENT REVIEWS
//                     </h4>
//                     <Button variant="primary" style={{ width: "30%" }}>
//                       Write Review
//                     </Button>
//                   </div>
//                   {reviews.map((review, index) => (
//                     <div
//                       key={index}
//                       style={{
//                         backgroundColor: "#2f2f2f",
//                         padding: "15px",
//                         marginBottom: "10px",
//                         borderRadius: "5px",
//                         color: "white",
//                       }}
//                     >
//                       <p>
//                         <strong>{review.name}</strong> (Verified User) -{" "}
//                         {review.date}
//                       </p>
//                       <p>{review.review}</p>
//                       <div style={{ color: "#ffcc00" }}>
//                         {"⭐".repeat(review.rating)}
//                       </div>
//                     </div>
//                   ))}
//                   <Button variant="primary" style={{ width: "30%" }}>
//                     Load More Reviews
//                   </Button>
//                 </div>
//               </Col>
//             </Row>
//           </Container>
//         );

//       case "Technical":
//         return (
//           <div style={styles.section}>
//             <div className="container">
//               <div className="row g-4">
//                 {/* System Requirements */}
//                 <div className="col-md-8">
//                   <div style={styles.card}>
//                     <h5 className="mb-4">System Requirements</h5>
//                     <div className="row">
//                       <div className="col-md-6">
//                         <h6>Supported Platforms</h6>
//                         <ul className="list-unstyled" style={styles.smallText}>
//                           <li>🪟 Windows 10/11 (Web App)</li>
//                           <li>🍎 macOS 11+ (Chrome or Safari)</li>
//                           <li>📱 Android & iOS (Mobile Browser)</li>
//                           <li>🌐 Modern browsers (Chrome, Firefox, Edge)</li>
//                         </ul>
//                       </div>
//                       <div className="col-md-6">
//                         <h6>Hardware Requirements</h6>
//                         <ul className="list-unstyled" style={styles.smallText}>
//                           <li>⚡ Intel i3 or equivalent (2.0 GHz+)</li>
//                           <li>🧠 4 GB RAM (8 GB preferred for HD rendering)</li>
//                           <li>💾 300 MB disk space for cache</li>
//                           <li>📶 Stable high-speed internet (4 Mbps+)</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Resources & Support */}
//                 <div className="col-md-4">
//                   <div style={styles.card}>
//                     <h5 className="mb-4">Resources</h5>
//                     <ul className="list-unstyled mb-4" style={styles.smallText}>
//                       <li>📄 Getting Started with Pictory</li>
//                       <li>💻 API Documentation</li>
//                       <li>🎥 Video Tutorials</li>
//                       <li>🎓 AI Video Academy</li>
//                       <li>💬 Support Community</li>
//                     </ul>
//                     <h5>Support</h5>
//                     <button
//                       className="btn w-100 my-2"
//                       style={styles.button}
//                       onMouseOver={(e) => {
//                         e.target.style.backgroundColor =
//                           styles.buttonHover.backgroundColor;
//                         e.target.style.borderColor =
//                           styles.buttonHover.borderColor;
//                       }}
//                       onMouseOut={(e) => {
//                         e.target.style.backgroundColor =
//                           styles.button.backgroundColor;
//                         e.target.style.borderColor = styles.button.borderColor;
//                       }}
//                     >
//                       🎧 Contact Support
//                     </button>
//                     <small className="text-muted d-block text-center">
//                       24/7 technical support for premium users
//                     </small>
//                   </div>
//                 </div>

//                 {/* Integrations */}
//                 <div className="col-12">
//                   <div style={styles.card}>
//                     <h5 className="mb-4">Integration Capabilities</h5>
//                     <div className="row">
//                       <div className="col-md-4">
//                         <h6>Content Sources</h6>
//                         <ul className="list-unstyled" style={styles.smallText}>
//                           <li>🧰 Google Docs</li>
//                           <li>🧰 Microsoft Word</li>
//                           <li>🧰 Blog URLs for video summarization</li>
//                         </ul>
//                       </div>
//                       <div className="col-md-4">
//                         <h6>Export Tools</h6>
//                         <ul className="list-unstyled" style={styles.smallText}>
//                           <li>💻 MP4 Video Export</li>
//                           <li>💻 SRT/VTT Subtitles</li>
//                           <li>💻 Social media formats</li>
//                         </ul>
//                       </div>
//                       <div className="col-md-4">
//                         <h6>Marketing Tools</h6>
//                         <ul className="list-unstyled" style={styles.smallText}>
//                           <li>📢 Hootsuite Integration</li>
//                           <li>📢 HubSpot</li>
//                           <li>📢 LinkedIn & Facebook Upload</li>
//                         </ul>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case "Why-We-Use":
//         return (
//           <div className="container">
//             <div className="row g-4">
//               <div className="col-12">
//                 <div className="custom-card text-light p-5 text-center">
//                   <h3 className="fw-bold mb-4 text-start text-primary">
//                     Why TealHQ Career Copilot AI is the Best Choice for Resume
//                     Creation and Optimization
//                   </h3>

//                   <p className="text-start text-muted mb-3">
//                     TealHQ Career Copilot AI revolutionizes the way you create
//                     and optimize your resume by combining intuitive design with
//                     advanced content recommendations. Here’s why TealHQ Career
//                     Copilot AI is the preferred tool for job seekers looking to
//                     craft standout, ATS-ready resumes:
//                   </p>

//                   <ul
//                     className="text-start"
//                     style={{
//                       listStyleType: "disc",
//                       paddingLeft: "1.5rem",
//                       fontSize: "1rem",
//                       lineHeight: "1.5",
//                     }}
//                   >
//                     <li className="mb-3">
//                       <strong>Tailored Templates for Every Industry:</strong>{" "}
//                       TealHQ Career Copilot AI offers a wide selection of
//                       professionally designed templates that not only look great
//                       but are optimized for different job sectors.
//                     </li>
//                     <li className="mb-3">
//                       <strong>AI-Powered Resume Suggestions:</strong> Receive
//                       personalized, role-specific recommendations that help you
//                       highlight your most relevant skills and experiences,
//                       making your resume more impactful.
//                     </li>
//                     <li className="mb-3">
//                       <strong>ATS Optimization:</strong> TealHQ Career Copilot
//                       AI ensures that your resume is fully compatible with
//                       Applicant Tracking Systems (ATS), increasing your chances
//                       of passing ATS filters and getting noticed by employers.
//                     </li>
//                     <li className="mb-3">
//                       <strong>Real-Time Customization:</strong> Fine-tune your
//                       resume with real-time feedback, allowing you to adjust
//                       your resume based on different job applications and
//                       industries.
//                     </li>
//                     <li className="mb-3">
//                       <strong>Instant, Actionable Feedback:</strong> Receive
//                       immediate suggestions for improving your resume’s content
//                       and formatting, ensuring you’re always on track in the
//                       competitive job market.
//                     </li>
//                     <li className="mb-3">
//                       <strong>Multiple Export Formats:</strong> Easily export
//                       your resume in PDF, DOCX, and other formats, making it
//                       easy to submit to various job application portals and
//                       employers.
//                     </li>
//                     <li className="mb-3">
//                       <strong>Continuous Resume Enhancement:</strong> Track your
//                       resume’s progress over time with ongoing feedback to keep
//                       it up-to-date with the latest trends and job market
//                       requirements.
//                     </li>
//                   </ul>

//                   <div className="text-center mt-4">
//                     <button className="btn btn-primary btn-sm">
//                       Let TealHQ Career Copilot AI Help You Build and Optimize
//                       Your Resume for Career Success
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         );

//       case "Pros & Cons":
//         return (
//           <div className="container my-5">
//             <h4 className="text-center text-light mb-2">
//               Why TealHQ Career Copilot AI is Highly Recommended
//             </h4>
//             <p className="text-center text-secondary mb-4">
//               TealHQ Career Copilot AI stands out as an innovative platform for
//               building personalized, ATS-ready resumes. Below are the key
//               advantages and considerations when using this platform.
//             </p>
//             <div className="row justify-content-center gap-2">
//               {/* Pros Column */}
//               <div
//                 className="col-lg-5 col-md-6 col-sm-12"
//                 style={{
//                   border: "1px solid #7B68EE",
//                   borderRadius: "12px",
//                   padding: "20px",
//                   backgroundColor: "#1e1e1e",
//                   minHeight: "100%",
//                 }}
//               >
//                 <h5 className="text-success text-start mb-4">✅ Pros</h5>
//                 <ul className="ps-3" style={{ listStyleType: "disc" }}>
//                   <li className="mb-2">
//                     <strong>AI-Driven Resume Optimization:</strong> TealHQ
//                     Career Copilot AI provides intelligent suggestions to tailor
//                     your resume for specific roles and industries, maximizing
//                     your chances of success.
//                   </li>
//                   <li className="mb-2">
//                     <strong>ATS Compatibility:</strong> TealHQ Career Copilot AI
//                     ensures your resume passes through Applicant Tracking
//                     Systems (ATS), making it more likely to be noticed by
//                     recruiters.
//                   </li>
//                   <li className="mb-2">
//                     <strong>Industry-Specific Templates:</strong> Choose from a
//                     wide range of resume templates designed for various
//                     industries, ensuring your resume is visually appealing and
//                     functional.
//                   </li>
//                   <li className="mb-2">
//                     <strong>Role Customization:</strong> Customize your resume
//                     to highlight the specific skills and experiences that matter
//                     most to your target role.
//                   </li>
//                   <li className="mb-2">
//                     <strong>Quick and Easy Process:</strong> TealHQ Career
//                     Copilot AI simplifies the resume-building process, allowing
//                     you to create a professional resume in just a few steps.
//                   </li>
//                 </ul>
//               </div>

//               {/* Cons Column */}
//               <div
//                 className="col-lg-5 col-md-6 col-sm-12"
//                 style={{
//                   border: "1px solid #7B68EE",
//                   borderRadius: "12px",
//                   padding: "20px",
//                   backgroundColor: "#1e1e1e",
//                   minHeight: "100%",
//                 }}
//               >
//                 <h5 className="text-warning text-start mb-4">⚠ Cons</h5>
//                 <ul className="ps-3" style={{ listStyleType: "disc" }}>
//                   <li className="mb-2">
//                     <strong>Premium Features Only:</strong> Some advanced
//                     features, such as additional templates and detailed
//                     analytics, are available only with a premium subscription.
//                   </li>
//                   <li className="mb-2">
//                     <strong>Limited Free Plan:</strong> The free plan offers
//                     basic functionality, with restrictions on customization and
//                     template selection.
//                   </li>
//                   <li className="mb-2">
//                     <strong>Account Creation Required:</strong> Creating an
//                     account is mandatory to save and track progress, which may
//                     not appeal to those who prefer more anonymous options.
//                   </li>
//                   <li className="mb-2">
//                     <strong>Limited Visual Customization:</strong> TealHQ Career
//                     Copilot AI focuses on content optimization, which may not
//                     satisfy users looking for more creative flexibility in
//                     visual design.
//                   </li>
//                   <li className="mb-2">
//                     <strong>Relatively Basic Templates:</strong> While effective
//                     for most users, the available templates may feel too basic
//                     for those looking for highly unique and personalized
//                     designs.
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         );

//       case "Alternative":
//         return (
//           <div className="container my-5">
//             <h4 className="text-center text-light mb-2">
//               Explore Powerful Alternatives for Building Resumes
//             </h4>
//             <p className="text-center text-secondary mb-4">
//               TealHQ Career Copilot AI presents a collection of top
//               resume-building platforms that help you craft standout resumes,
//               tailored to your career aspirations and professional journey.
//             </p>
//             <div className="row justify-content-center gap-2">
//               <div
//                 className="col-lg-8 col-md-8 col-sm-12"
//                 style={{
//                   border: "1px solid #7B68EE",
//                   borderRadius: "12px",
//                   padding: "20px",
//                   backgroundColor: "#1e1e1e",
//                   minHeight: "100%",
//                 }}
//               >
//                 <ul className="ps-3" style={{ listStyleType: "disc" }}>
//                   <li className="mb-2">
//                     <strong>TealHQ Career Copilot AI</strong>: Build
//                     personalized, ATS-ready resumes using AI-driven features
//                     that tailor content for specific roles and employers.
//                   </li>
//                   <li className="mb-2">
//                     <strong>Resume Genius</strong>: Create resumes with ease
//                     using customizable templates, designed to cater to various
//                     industries and job roles.
//                   </li>
//                   <li className="mb-2">
//                     <strong>Novoresume</strong>: Design modern and professional
//                     resumes with pre-designed templates that ensure clarity and
//                     ATS optimization.
//                   </li>
//                   <li className="mb-2">
//                     <strong>Zety</strong>: Quickly build professional resumes
//                     with Zety's step-by-step guidance, offering a wide variety
//                     of templates and customization options.
//                   </li>
//                   <li className="mb-2">
//                     <strong>Resume Builder Pro</strong>: Create high-quality
//                     resumes with professionally designed templates and
//                     job-specific recommendations.
//                   </li>
//                   <li className="mb-2">
//                     <strong>VisualCV</strong>: Customize your resume with modern
//                     templates and showcase your experience in a visually
//                     appealing format.
//                   </li>
//                   <li className="mb-2">
//                     <strong>Canva Resume Builder</strong>: Utilize Canva's
//                     drag-and-drop interface to design creative and eye-catching
//                     resumes, perfect for professionals in design and other
//                     creative fields.
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         );

//       default:
//         return null;
//     }
//   };

// <<<<<<< HEAD
//   return (
//     <>
//       <div className="bg-dark d-flex  justify-content-between align-items-center ">
//         <a
//           href="/Aitools"
//           className="d-inline-block text-white text-decoration-none ml-3 py-1"
//         >
//           <i className="bi bi-arrow-left me-2"></i>Back to Directory{" "}
//         </a>
//       </div>
//       <div className="bg-dark text-light min-vh-100 py-5">
//         <div className="container">
//           <div className=" row d-flex align-items-center justify-content-between mb-1">
//             {/* Left side (Text Section) */}
//             <div
//               style={{ flex: 1, paddingRight: "30px" }}
//               className="col-6 col-md-12 "
//             >
//               <p className="text-primary">Write better, faster</p>
//               <h1>TealHQ Career Copilot AI</h1>
//               <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
//               <p>
//                 TealHQ Career Copilot AI is an innovative career development
//                 platform designed to assist job seekers with AI-powered tools
//                 that optimize resumes, help with job search, provide
//                 personalized career advice, and offer job matching. It aims to
//                 streamline the job application process by providing everything a
//                 job seeker needs, from resume building and ATS optimization to
//                 job alerts and interview preparation. Whether you're a job
//                 seeker, a career changer, or a freelancer, TealHQ Career Copilot
//                 AI provides the tools to take your career to the next level.
//               </p>
// =======
// //   return (
// //     <>
// //       <div className="bg-dark d-flex  justify-content-between align-items-center ">
// // //       <a
// //           href="/Aitools"
// //           className="d-inline-block text-white text-decoration-none  mt-3 ml-3 py-1 px-2 ms-5 border rounded-sm"
// //         >
// //           <i className="bi bi-arrow-left me-2"></i>Back  {" "}
// //         </a>
// //       </div>
// //       <div className="bg-dark text-light min-vh-100 py-5">
// //         <div className="container">
// //           <div className=" row d-flex align-items-center justify-content-between mb-1">
// //             {/* Left side (Text Section) */}
// //             <div
// //               style={{ flex: 1, paddingRight: "30px" }}
// //               className="col-6 col-md-12 "
// //             >
// //               <p className="text-primary">Write better, faster</p>
// //               <h1>TealHQ Career Copilot AI</h1>
// //               <div className="text-warning mb-1">⭐⭐⭐⭐⭐</div>
// //               <p>
// //                 TealHQ Career Copilot AI is an innovative career development
// //                 platform designed to assist job seekers with AI-powered tools
// //                 that optimize resumes, help with job search, provide
// //                 personalized career advice, and offer job matching. It aims to
// //                 streamline the job application process by providing everything a
// //                 job seeker needs, from resume building and ATS optimization to
// //                 job alerts and interview preparation. Whether you're a job
// //                 seeker, a career changer, or a freelancer, TealHQ Career Copilot
// //                 AI provides the tools to take your career to the next level.
// //               </p>
// >>>>>>> 7b93dea8598e92fa2173da0f96c56d8053ec74ec

//               <p>
//                 TealHQ has received positive reviews for its AI-powered
//                 features, including resume building, job search tools, and
//                 personalized career coaching. The platform’s AI-driven job
//                 matching and resume optimization tools help job seekers create
//                 professional, ATS-friendly resumes that stand out. Career
//                 changers benefit from TealHQ's career transition tools and the
//                 ability to customize resumes and job applications for specific
//                 roles. However, the premium pricing for full access to all
//                 features is something to consider for budget-conscious users.
//               </p>

//               <div className="mb-3">
//                 <span className="badge bg-primary me-2">Image Generation</span>
//                 <span className="badge bg-success me-2">Creative</span>
//                 <span className="badge bg-warning text-dark">Paid</span>
//               </div>
//             </div>

//             {/* Right side (Image Section) */}
//             <div
//               style={{
//                 flex: 1,
//                 textAlign: "center",
//                 Width: "100%",
//                 height: "250px",
//               }}
//               className="col-6 col-md-12 mb-5  "
//             >
//               <img src={teal} style={{ MaxWidth: "100%", height: "300px" }} />
//             </div>
//           </div>

//           <section style={{ backgroundColor: "#0b1e3d", padding: "3rem 0" }}>
//             <div className="container text-center">
//               <p className="text-primary">
//                 Create Stunning Resumes with TealHQ Career Copilot AI
//               </p>
//               <h2
//                 style={{
//                   fontWeight: "600",
//                   color: "#fff",
//                   marginBottom: "1rem",
//                 }}
//               >
//                 How TealHQ Career Copilot AI Helps You Craft a Professional
//                 Resume
//               </h2>

//               <div className="row g-4">
//                 {/* Step 1 */}
//                 <div className="col-md-4">
//                   <div
//                     style={{
//                       position: "relative",
//                       backgroundColor: "#1034A6",
//                       borderRadius: "12px",
//                       boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
//                       padding: "2rem",
//                       height: "100%",
//                     }}
//                   >
//                     <style>{`
//             .step1 {
//               position: absolute;
//               bottom: 10px;
//               right: 15px;
//               font-size: 4rem;
//               font-weight: bold;
//               color: #7b61ff;
//               opacity: 0.6;
//             }
//           `}</style>
//                     <h5 style={{ fontWeight: "bold", color: "#fff" }}>
//                       Analyzes Your Professional Profile
//                     </h5>
//                     <p style={{ color: "#fff", margin: 0 }}>
//                       TealHQ Career Copilot AI evaluates your professional
//                       experience and career goals, ensuring that your resume
//                       reflects your unique skills and aspirations.
//                     </p>
//                     <div className="step1">1</div>
//                   </div>
//                 </div>

//                 {/* Step 2 */}
//                 <div className="col-md-4">
//                   <div
//                     style={{
//                       position: "relative",
//                       backgroundColor: "#1034A6",
//                       borderRadius: "12px",
//                       boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
//                       padding: "2rem",
//                       height: "100%",
//                     }}
//                   >
//                     <style>{`
//             .step2 {
//               position: absolute;
//               bottom: 10px;
//               right: 15px;
//               font-size: 4rem;
//               font-weight: bold;
//               color: #7b61ff;
//               opacity: 0.6;
//             }
//           `}</style>
//                     <h5 style={{ fontWeight: "bold", color: "#fff" }}>
//                       Customizes Your Resume for Targeted Roles
//                     </h5>
//                     <p style={{ color: "#fff", margin: 0 }}>
//                       TealHQ Career Copilot AI personalizes your resume by
//                       adjusting every section, from experience to skills,
//                       tailored specifically for the job roles and industries
//                       you're targeting.
//                     </p>
//                     <div className="step2">2</div>
//                   </div>
//                 </div>

//                 {/* Step 3 */}
//                 <div className="col-md-4">
//                   <div
//                     style={{
//                       position: "relative",
//                       backgroundColor: "#1034A6",
//                       borderRadius: "12px",
//                       boxShadow: "0 2px 4px rgba(255,255,255,0.1)",
//                       padding: "2rem",
//                       height: "100%",
//                     }}
//                   >
//                     <style>{`
//             .step3 {
//               position: absolute;
//               bottom: 10px;
//               right: 15px;
//               font-size: 4rem;
//               font-weight: bold;
//               color: #7b61ff;
//               opacity: 0.6;
//             }
//           `}</style>
//                     <h5 style={{ fontWeight: "bold", color: "#fff" }}>
//                       Generates a Professionally Designed Resume
//                     </h5>
//                     <p style={{ color: "#fff", margin: 0 }}>
//                       TealHQ Career Copilot AI creates a polished, visually
//                       stunning resume that effectively highlights your key
//                       achievements and professional experience, making you stand
//                       out.
//                     </p>
//                     <div className="step3">3</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </section>

//           {/* Tab Navigation */}
//           <ul className="nav nav-tabs custom-tabs mb-4">
//             {[
//               "Features",
//               "Screenshots",
//               "Reviews",
//               "FAQs",
//               "Technical",
//               "Why-We-Use",
//               "Pros & Cons",
//               "Alternative",
//             ].map((tab) => (
//               <li className="nav-item mb-2" key={tab}>
//                 <button
//                   className={`nav-link ${activeTab === tab ? "active" : ""}`}
//                   onClick={() => setActiveTab(tab)}
//                 >
//                   {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                 </button>
//               </li>
//             ))}
//           </ul>

//           {/* Tab Content */}
//           <div className="tab-content-area">{renderTabContent()}</div>

//           <div className="bg-primary text-center text-light rounded-4 p-5 mt-5">
//             <h4 className="mb-3">Ready to get started with RunWayGen?</h4>
//             <p className="mb-4">
//               Join thousands of professionals already boosting their
//               productivity!
//             </p>
//             <div>
//               <button className="btn btn-light me-3">Try Now for Free</button>
//               <button className="btn btn-outline-light">Schedule a Demo</button>
//             </div>
//             <small className="d-block mt-2">
//               No credit card required. 14-day free trial available.
//             </small>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default TealHQAI;
