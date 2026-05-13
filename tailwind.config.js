/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        farm: {
          green: '#1F7A3F',
          light: '#E7F5EA',
          dark: '#0F3F28',
        },
      },
      boxShadow: {
        soft: '0 25px 60px rgba(15, 81, 50, 0.12)',
      },
    },
  },
  plugins: [],
}

