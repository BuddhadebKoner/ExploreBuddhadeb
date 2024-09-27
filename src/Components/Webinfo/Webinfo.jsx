import React from 'react';
import '../../Styles/Webinfo.css';
import ApiDataResponce from '../../Api/apiresponce';

export default function Webinfo() {
  return (
    <div className="webinfo-container">
      <div className="webinfo-content glass-bg">
        <div className="webinfo-section">
          <h1 className="webinfo-section-title">
            {ApiDataResponce.SkillsInterests.content.section.title}
          </h1>
          <p className="webinfo-section-description">
            {ApiDataResponce.SkillsInterests.content.section.description}
          </p>
        </div>
        <ul className="webinfo-list">
          {ApiDataResponce.SkillsInterests.content.list.map((item, index) => (
            <li className="webinfo-list-item" key={index}>
              <h2 className="webinfo-item-title">{item.title}</h2>
              <p className="webinfo-item-description">{item.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
