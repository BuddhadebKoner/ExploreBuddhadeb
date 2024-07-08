import React from 'react';
import './Getstarted.css';
import Workingon from '../../Components/Workingon/Workingon';
import { workingonData } from '../../assets/workingon/workingon';

export default function Getstarted() {
  return (
    <div className="getstarted-main-container">
      {Object.values(workingonData).map((item, index) => (
        <Workingon key={index} data={item} />
      ))}
    </div>
  );
}
