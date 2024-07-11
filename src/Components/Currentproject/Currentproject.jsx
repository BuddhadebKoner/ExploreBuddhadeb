import React from 'react';
import '../../Styles/Currentproject.css';
import ApiDataResponce from '../../Api/apiresponce.js';

const Currentproject = () => {
  return (
    <div className="current-project-box">
      <div className="current-project-container">
        <h2>{ApiDataResponce.currentpagecontent.welcomeMessage}</h2>
        <p>{ApiDataResponce.currentpagecontent.introduction}</p>
        
        {ApiDataResponce.currentpagecontent.projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>{project.technologiesUsed}</p>
            <a href={project.projectLink} target='_blank'>See Project</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Currentproject;
