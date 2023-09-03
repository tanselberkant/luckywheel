/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Theme Colors
        homebg: '#121212', //Bg
        bannertext: '#4D194D',
        btnpurple: '#312244', //BTN Purple
        btngreen: '#144552', // BTN Green
        textpurple: '#4D194D', // Text Purple
      },
      fontFamily: {
        custom: ['Inconsolata', 'monospace'],
      },
    },
  },
  darkMode: 'class',
};
