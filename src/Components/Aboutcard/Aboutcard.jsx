import React, { useState } from "react";
import "../../Styles/Aboutcard.css";
import assets from "../../assets/icons/icons";
import ApiDataResponce from "../../Api/apiresponce";

export default function AboutCard() {
   const [expanded, setExpanded] = useState(false);

   const toggleDescription = () => {
      setExpanded(!expanded);
   };

   return (
      <>
         <div className="about-container-fullbox">
            <div className={`about-card glass-bg ${expanded ? "expanded" : "glass-bg"}`}>
               <h3 className="about-heading">About Me</h3>
               <p className={`description ${expanded ? "expanded" : ""}`}>
                  {ApiDataResponce.aboutdata.about}
               </p>
               <button onClick={toggleDescription}>
                  {expanded ? "See Less" : "See More"}
               </button>
               <div className="about-media-links">
                  <div className="media-icons-links">
                     <a href={ApiDataResponce.aboutdata.fblink} target="_blank">
                        <img src={assets.fb} alt="facebook" />
                     </a>
                     <a href={ApiDataResponce.aboutdata.xlink} target="_blank">
                        <img src={assets.x} alt="x" />
                     </a>
                     <a
                        href={ApiDataResponce.aboutdata.linkedinlink}
                        target="_blank"
                     >
                        <img src={assets.linkedin} alt="linkedin" />
                     </a>
                     <a
                        href={ApiDataResponce.aboutdata.gitlink}
                        target="_blank"
                     >
                        <img src={assets.github} alt="github" />
                     </a>
                  </div>
                  <div className="skills-list about-tags">
                     {Object.keys(ApiDataResponce.aboutKeywords).map(
                        (key, index) => (
                           <p className="skill-item" key={index}>
                              {ApiDataResponce.aboutKeywords[key]}
                           </p>
                        )
                     )}
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}
