import React, { useState, useEffect } from 'react';
import './Getstarted.css';
import Workingon from '../../Components/Workingon/Workingon';
import ApiDataResponce from '../../Api/apiresponce';

export default function Getstarted() {
  const [workingOnData, setWorkingOnData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Simulate fetching data from ApiDataResponce
        const data = Object.values(ApiDataResponce.workingonData);
        setWorkingOnData(data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching working on data:', err);
        setError('Failed to load data.');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="loading-message">
        <p>Loading data...</p>
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
    <div className="getstarted-main-container">
      {workingOnData.map((item, index) => (
        <Workingon key={index} data={item} />
      ))}
    </div>
  );
}
