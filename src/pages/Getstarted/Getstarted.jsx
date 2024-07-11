import React from 'react';
import './Getstarted.css';
import Workingon from '../../Components/Workingon/Workingon';
import ApiDataResponce from '../../Api/apiresponce';

export default function Getstarted() {
  return (
    <div className="getstarted-main-container">
      {Object.values(ApiDataResponce.workingonData).map((item, index) => (
        <Workingon key={index} data={item} />
      ))}
    </div>
  );
}
