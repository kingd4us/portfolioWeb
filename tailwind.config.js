/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', 
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        mono: ['"Cascadia Mono"', 'monospace'], 
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        none: '0',
        sm: '0.125rem',
        DEFAULT: '0', 
        md: '0',
        lg: '0',
      }
    },
  },
  plugins: [],
}