/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      chat: 'rgb(221,225,236)',
      black: 'rgb(45,48,51)',
      blue: 'rgb(28,104,255)',
      'dark-blue': 'rgb(1,30,60)',
      purple: '#7e5bef',
      pink: '#ff49db',
      orange: '#ff7849',
      green: 'rgb(66,183,41)',
      yellow: '#ffc82c',
      'gray-dark': '#273444',
      gray: '#8492a6',
      white: 'rgb(255,255,255)',
      'gray-light': '#d3dce6',
    },
    extend: {},
  },
  plugins: [require('autoprefixer')],
};
