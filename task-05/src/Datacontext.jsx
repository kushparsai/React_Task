import React, { createContext, useState } from 'react';

// Create a context
export const DataContext = createContext();

// Create a provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState("This is the data from Context API!");

  return (
    <DataContext.Provider value={data}>
      {children}
    </DataContext.Provider>
  );
};
