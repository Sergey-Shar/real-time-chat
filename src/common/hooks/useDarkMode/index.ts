import { useLayoutEffect, useState } from 'react';

export const useDarkMode = () => {
  const [theme, setTheme] = useState<string>(localStorage.theme);

  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useLayoutEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [colorTheme, theme]);

  return {
    colorTheme,
    setTheme,
  };
};
