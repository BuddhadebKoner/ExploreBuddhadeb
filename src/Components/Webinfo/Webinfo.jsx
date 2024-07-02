import React from 'react';
import '../../Styles/Webinfo.css';

export default function Webinfo() {
  return (
    <div className="webinfo-container">
      <div className="webinfo-content">
        <div className="webinfo-section">
          <h1 className="webinfo-section-title">Skills and Interests</h1>
          <p className="webinfo-section-description">
            Here's a glimpse into my skills, interests, and what defines me:
          </p>
        </div>
        <ul className="webinfo-list">
          <li className="webinfo-list-item">
            <h2 className="webinfo-item-title">MERN Stack Developer</h2>
            <p className="webinfo-item-description">
              Proficient in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js.
            </p>
          </li>
          <li className="webinfo-list-item">
            <h2 className="webinfo-item-title">Programming Languages</h2>
            <p className="webinfo-item-description">
              Skilled in C++, C, and Python, with a strong foundation in algorithmic thinking and problem-solving.
            </p>
          </li>
          <li className="webinfo-list-item">
            <h2 className="webinfo-item-title">Content Creator</h2>
            <p className="webinfo-item-description">
              Enjoy creating engaging content, blending creativity and humor, especially in meme creation and digital content.
            </p>
          </li>
          <li className="webinfo-list-item">
            <h2 className="webinfo-item-title">Messi Enthusiast</h2>
            <p className="webinfo-item-description">
              Passionate about football, particularly a fan of Lionel Messi and avidly follow matches and career highlights.
            </p>
          </li>
          <li className="webinfo-list-item">
            <h2 className="webinfo-item-title">Learning in Public</h2>
            <p className="webinfo-item-description">
              Embrace the philosophy of learning in public, sharing knowledge, and documenting learning journeys to inspire others.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}
