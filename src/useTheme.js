import { useState } from 'react';
import { THEMELIST } from './ThemeContext';

const useTheme = (startingTheme) => {
  const [theme, setTheme] = useState(startingTheme);
  return {
    theme,
    toggleTheme: () => {
      if (theme === THEMELIST.LIGHT) {
        setTheme(THEMELIST.DARK);
      } else {
        setTheme(THEMELIST.LIGHT);
      }
    },
  };
};

export default useTheme;
