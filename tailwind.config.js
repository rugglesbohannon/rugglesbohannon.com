/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#050505',
        foreground: '#f0f0f0',
        primary: '#468fff',
        secondary: '#9c84c7',
        accent: '#6eca9c',
        muted: '#888888'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.1em',
        medium: '0.05em',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 