import React from 'react';
import { DataContext, DataProvider } from './DataContext';
import DataDisplay from './DataDisplay';
import './App.css';

const App = () => {
  return (
    <DataProvider>
      <div className="App">
        <h1>React Context API Example</h1>
        <DataContext/>
        <DataDisplay />
      </div>
   
    </DataProvider>
  );
};
export default App;
