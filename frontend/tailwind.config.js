/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        'xs' : '350px',
        'sm' : '640px',
        'md' : '768px',
        'lg' : '1024px',
        'xl' : '1280px',
        '2xl' : '1536px',
      },
      colors: {
        'border-col': '#E2E8F0',
        'grey3': '#CBD5E1',
        'grey9': '#0F172A',
        'grey7': '#334155',
        'primary4': '#60A5FA',
        'primary5': '#3B82F6',
        'primary6': '#2563EB',
        'warning': '#FACC15',
        'bg': '#FFFFFF',
        'error': '#F87171',
      },
      fontFamily: {
        'Noto': ['Noto Serif', 'sans-serif']
      },
      
    },
  },
  plugins: [],
}