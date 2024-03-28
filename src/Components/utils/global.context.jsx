import React, { createContext, useState, useContext } from 'react';

export const initialState = { theme: 'light', data: [] };
export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ContextGlobal.Provider value={{ theme, toggleTheme }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ContextGlobal);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export default ContextGlobal;