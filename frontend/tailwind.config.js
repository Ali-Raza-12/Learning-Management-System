/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
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
        'inter': ['Inter', 'sans-serif']
      },
      
    },
  },
  plugins: [],
}