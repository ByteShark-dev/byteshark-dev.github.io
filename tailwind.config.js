/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './aphidex.html', './casos-reales/index.html', './src/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#080b10',
        surface: '#080b10',
        'surface-container-lowest': '#080b10',
        'surface-container-low': '#0b1017',
        'surface-container': '#121923',
        'surface-container-high': '#172534',
        'surface-container-highest': '#243245',
        primary: '#ffffff',
        'on-primary': '#080b10',
        'primary-container': '#1E5AA8',
        'on-primary-container': '#ffffff',
        secondary: '#A7B0BA',
        'secondary-container': '#172534',
        'on-secondary-container': '#ffffff',
        outline: '#A7B0BA',
        'outline-variant': '#394454',
        'on-surface': '#ffffff',
        'on-surface-variant': '#A7B0BA',
        'surface-tint': '#1E5AA8',
        error: '#ff6b6b',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
      fontFamily: {
        headline: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
        body: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
        label: ['Geist', 'Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
