import React, { useState } from 'react';

const themes = ['theme1', 'theme2', 'theme3'];

const ThemeSwitcher = ({ onThemeChange }) => {
  const [activeTheme, setActiveTheme] = useState(0);

  const handleThemeChange = (index) => {
    setActiveTheme(index);
    onThemeChange(themes[index]);
  };

  return (
    <div className="flex justify-center mt-4">
      {themes.map((_, index) => (
        <div
          key={index}
          className={`w-4 h-4 rounded-full mx-1 cursor-pointer ${activeTheme === index ? 'bg-black' : 'bg-gray-400'}`}
          onClick={() => handleThemeChange(index)}
        ></div>
      ))}
    </div>
  );
};

export default ThemeSwitcher;