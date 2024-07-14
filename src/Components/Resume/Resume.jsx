import React from "react";

// Styles are here
import "../../Styles/Resume.css";
import ApiDataResponce from "../../Api/apiresponce";

export default function Resume() {
   return (
      <>
         <div className="resume-main-container">
            <div className="resume-container glass-bg">
               <div className="header-section">
                  <h1 className="name">{ApiDataResponce.resumeData.name}</h1>
                  <p className="job-title">
                     {ApiDataResponce.resumeData.jobTitle}
                  </p>
               </div>
               <div className="education-section">
                  <h2 className="section-title">Education</h2>
                  <ul className="education-list">
                     <li className="education-item">
                        {ApiDataResponce.resumeData.education.degree}
                     </li>
                     <li className="education-item">
                        {ApiDataResponce.resumeData.education.university},{" "}
                        {ApiDataResponce.resumeData.education.duration}
                     </li>
                  </ul>
               </div>
               <div className="experience-section">
                  <h2 className="section-title">Experience</h2>
                  <ul className="experience-list">
                     <li className="experience-item">
                        {ApiDataResponce.resumeData.experience.position}
                     </li>
                     <li className="experience-item">
                        {ApiDataResponce.resumeData.experience.company},{" "}
                        {ApiDataResponce.resumeData.experience.duration}
                     </li>
                  </ul>
               </div>
               <div className="responsibility-section">
                  <h2 className="section-title">
                     {ApiDataResponce.resumeData.responsibilities.title}
                  </h2>
                  <ul className="responsibility-list">
                     {ApiDataResponce.resumeData.responsibilities.list.map(
                        (responsibility, index) => (
                           <li className="responsibility-item" key={index}>
                              {responsibility}
                           </li>
                        )
                     )}
                  </ul>
               </div>
               <div className="skills-section">
                  <h2 className="section-title">Skills</h2>
                  <div className="skills-list">
                     {ApiDataResponce.resumeData.skills.map((skill, index) => (
                        <p className="skill-item" key={index}>
                           {skill}
                        </p>
                     ))}
                  </div>
               </div>
               <div className="contact-section">
                  <h2 className="section-title">Contact</h2>
                  <ul className="contact-list">
                     <li className="contact-item">
                        Email: {ApiDataResponce.resumeData.contact.email}
                     </li>
                     <li className="contact-item">
                        Linkedin:
                        <a
                           href={ApiDataResponce.resumeData.contact.linkedin}
                           target="blank"
                        >
                           {ApiDataResponce.resumeData.contact.displayName}
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </>
   );
}
