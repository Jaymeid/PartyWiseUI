/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        ibrand: ['Ibrand'],
      },
      colors: {
        background: '#111827',
        backgroundSecondary: '#1f2937',
        textPrimary: '#FFFFFF',
        textSecondary: '#B0B0B0',
        textDisabled: '#6E6E6E',
        primary: '#BB86FC',
        secondary: '#03DAC6',
        error: '#CF6679',
        divider: '#373737',
        border: '#444444',
      },
    },
  },
  plugins: [],
  corePlugin: {
    backgroundOpacity: true,
  },
};
