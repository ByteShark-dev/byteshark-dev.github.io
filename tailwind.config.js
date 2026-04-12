/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.js'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        background: '#081B34',
        surface: '#081B34',
        'surface-container-lowest': '#040d1a',
        'surface-container-low': '#09162a',
        'surface-container': '#0d1f3b',
        'surface-container-high': '#122950',
        'surface-container-highest': '#173562',
        primary: '#ffffff',
        'on-primary': '#081B34',
        'primary-container': '#1E5AA8',
        'on-primary-container': '#ffffff',
        secondary: '#A7B0BA',
        'secondary-container': '#10284d',
        'on-secondary-container': '#ffffff',
        outline: '#A7B0BA',
        'outline-variant': '#42556e',
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
        headline: ['Montserrat', 'Inter', 'Manrope', 'sans-serif'],
        body: ['Montserrat', 'Inter', 'Manrope', 'sans-serif'],
        label: ['Montserrat', 'Inter', 'Manrope', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
