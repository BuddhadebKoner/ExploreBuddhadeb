import React, { useState, useEffect } from "react";
import "../../Styles/Currentproject.css";
import ApiDataResponce from "../../Api/apiresponce.js";

const Currentproject = () => {
   const [projectData, setProjectData] = useState(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState(null);

   useEffect(() => {
      const fetchProjectData = async () => {
         try {
            // Simulate fetching data from the API response
            const data = ApiDataResponce.currentpagecontent;
            setProjectData(data);
            setLoading(false);
         } catch (err) {
            console.error("Error fetching project data:", err);
            setError("Failed to load project data.");
            setLoading(false);
         }
      };

      fetchProjectData();
   }, []);

   if (loading) {
      return (
         <div className="loading-message-container">
            <div className="loading-message">

            </div>
         </div>
      );
   }

   if (error) {
      return (
         <div className="error-message">
            <p>{error}</p>
         </div>
      );
   }

   return (
      <div className="current-project-box">
         <div className="current-project-container glass-bg">
            <div className="wellcome-introduction-divs">
               <h2>{projectData.welcomeMessage}</h2>
               <p>{projectData.introduction}</p>
            </div>

            {projectData.projects.map((project, index) => (
               <div key={index} className="project-card">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <p>{project.technologiesUsed}</p>
                  <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
                     See Projects
                  </a>
               </div>
            ))}
         </div>
      </div>
   );
};

export default Currentproject;
