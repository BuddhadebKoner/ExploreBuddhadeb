import React from "react";
import "../../Styles/Currentproject.css";
import ApiDataResponce from "../../Api/apiresponce.js";

const Currentproject = () => {
   return (
      <div className="current-project-box">
         <div className="current-project-container glass-bg">
            <div className="wellcome-introduction-divs">
               <h2>{ApiDataResponce.currentpagecontent.welcomeMessage}</h2>
               <p>{ApiDataResponce.currentpagecontent.introduction}</p>
            </div>

            {ApiDataResponce.currentpagecontent.projects.map(
               (project, index) => (
                  <div key={index} className="project-card">
                     <h3>{project.title}</h3>
                     <p>{project.description}</p>
                     <p>{project.technologiesUsed}</p>
                     <a href={project.projectLink} target="_blank">
                        See Projects
                     </a>
                  </div>
               )
            )}
         </div>
      </div>
   );
};

export default Currentproject;
