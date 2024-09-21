import React, { useContext } from 'react';
import { DataContext } from './DataContext';
import './App.css';

const DataDisplay = () => {
  const data = useContext(DataContext);

  return (
    <div className="data-container">
      <h2>Data from Context API:</h2>
      <p>{data}</p>
    </div>
    
  );
};

export default DataDisplay;
