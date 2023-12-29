/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('dark');

  const lightTheme = () => {
    setThemeMode('light');
  };

  const darkTheme = () => {
    setThemeMode('dark');
  };

  const themeInfo = {
    lightTheme,
    darkTheme,
    themeMode,
  };

  // IMPORTANT:
  //* Actual Change In Theme Inside DOM || Toggle Dark / Light Theme
  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark');
    document.querySelector('html').classList.add(themeMode);
  }, [themeMode]);

  return (
    <>
      <ThemeContext.Provider value={themeInfo}>
        {children}
      </ThemeContext.Provider>
    </>
  );
};

export default ThemeProvider;
