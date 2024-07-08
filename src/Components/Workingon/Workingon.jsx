import React from 'react';
import '../../Styles/Workingon.css';
import assets from '../../assets/icons/icons';

export default function Workingon({ data }) {
   return (
      <div className="workingon-container">
         <div className="profile-heading">
            <a target="_blank" href={data.githubLink} rel="noopener noreferrer">
               <img src={assets.github} alt="GitHub" />
               <h1>{data.title}</h1>
            </a>
            <p>{data.date}</p>
         </div>
         <div className="workingon-details">
            <div className="workingon-details-thumbnail">
               <img src={data.thambnail} alt="Thumbnail" />
            </div>
            <div className="workingon-details-description">
               <h1>{data.detailsTitle}</h1>
               <p>Team Members:</p>
               <div className="team-members">
                  {data.team.map((member, index) => (
                     <>
                        <p key={index}>{member}</p>
                     </>
                  ))}
               </div>
               <a target='_blank' className='workingon-btn' href={data.projectLink}>View</a>
            </div>
         </div>
      </div>
   );
}
