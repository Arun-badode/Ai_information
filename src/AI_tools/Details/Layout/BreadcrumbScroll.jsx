// import React from "react";
// import "./BreadcrumbScroll.css"; // Optional, if you want to move styles to a separate file

// const BreadcrumbScroll = () => {
//   return (
//     <nav aria-label="breadcrumb" className="breadcrumb-scroll-wrapper">
//       <div className="breadcrumb-scroll" id="scrollContainer">
//         <ol className="breadcrumb d-inline-flex" id="breadcrumbContent">
//           <li className="breadcrumb-item">
//             <a href="#">
//               <i className="fa fa-info-circle"></i> SEO AI
//             </a>
//           </li>
//           <li className="breadcrumb-item">
//             <a href="#">
//               <i className="fa fa-snowflake"></i> Content Writer AI
//             </a>
//           </li>
//           <li className="breadcrumb-item">
//             <a href="#">
//               <i className="fa fa-desktop"></i> Web Design AI
//             </a>
//           </li>
//           <li className="breadcrumb-item">
//             <a href="#">
//               <i className="fa fa-paint-brush"></i> Productivity AI
//             </a>
//           </li>
//           <li className="breadcrumb-item">
//             <a href="#">
//               <i className="fa fa-volume-up"></i> AI Voice Generation
//             </a>
//           </li>
//           <li className="breadcrumb-item">
//             <a href="#">
//               <i className="fa fa-lightbulb"></i> Logo Makers AI
//             </a>
//           </li>

//           <li className="breadcrumb-item">
//             <a href="#">
//               <i className="fa fa-image"></i> Image Generator AI
//             </a>
//           </li>
//         </ol>
//         {/* Duplicate the breadcrumb for looping effect */}
//         <ol className="breadcrumb d-inline-flex">
//           <li className="breadcrumb-item">
//             <a href="#">
//               <i className="fa fa-info-circle"></i> SEO AI
//             </a>
//           </li>
//           <li className="breadcrumb-item">
//             <a href="#">
//               <i className="fa fa-snowflake"></i> Content Writer AI
//             </a>
//           </li>
//           <li className="breadcrumb-item">
//             <a href="#">
//               <i className="fa fa-desktop"></i> Web Design AI
//             </a>
//           </li>
//           <li className="breadcrumb-item">
//             <a href="#">
//               <i className="fa fa-paint-brush"></i> Productivity AI
//             </a>
//           </li>
//           <li className="breadcrumb-item">
//             <a href="#">
//               <i className="fa fa-volume-up"></i> AI Voice Generation
//             </a>
//           </li>
//           <li className="breadcrumb-item">
//             <a href="#">
//               <i className="fa fa-lightbulb"></i> Logo Makers AI
//             </a>
//           </li>

//           <li className="breadcrumb-item">
//             <a href="#">
//               <i className="fa fa-image"></i> Image Generator AI
//             </a>
//           </li>
//         </ol>
//       </div>
//     </nav>
//   );
// };

// export default BreadcrumbScroll;

import React from "react";
import "./BreadcrumbScroll.css"; // Make sure CSS is imported

const BreadcrumbScroll = () => {
  return (
    <nav aria-label="breadcrumb" className="breadcrumb-scroll-wrapper">
      <div className="breadcrumb-scroll" id="scrollContainer">
        <ol className="breadcrumb d-inline-flex" id="breadcrumbContent">
          <li className="breadcrumb-item">
            <a href="#">
              <i className="fa fa-info-circle"></i> SEO AI
            </a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">
              <i className="fa fa-snowflake"></i> Content Writer AI
            </a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">
              <i className="fa fa-desktop"></i> Web Design AI
            </a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">
              <i className="fa fa-paint-brush"></i> Productivity AI
            </a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">
              <i className="fa fa-volume-up"></i> AI Voice Generation
            </a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">
              <i className="fa fa-lightbulb"></i> Logo Makers AI
            </a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">
              <i className="fa fa-image"></i> Image Generator AI
            </a>
          </li>
        </ol>
        {/* Duplicate the breadcrumb for looping effect */}
        <ol className="breadcrumb d-inline-flex">
          <li className="breadcrumb-item">
            <a href="#">
              <i className="fa fa-info-circle"></i> SEO AI
            </a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">
              <i className="fa fa-snowflake"></i> Content Writer AI
            </a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">
              <i className="fa fa-desktop"></i> Web Design AI
            </a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">
              <i className="fa fa-paint-brush"></i> Productivity AI
            </a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">
              <i className="fa fa-volume-up"></i> AI Voice Generation
            </a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">
              <i className="fa fa-lightbulb"></i> Logo Makers AI
            </a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">
              <i className="fa fa-image"></i> Image Generator AI
            </a>
          </li>
        </ol>
      </div>
    </nav>
  );
};

export default BreadcrumbScroll;
