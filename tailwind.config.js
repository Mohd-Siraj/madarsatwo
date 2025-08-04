/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
 theme: {
    extend: {
      backgroundImage: {
        'grid-pattern': `
          linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px)
        `
      },
      backgroundSize: {
        'grid-size': '20px 20px' // Adjust grid spacing as needed
      },
      colors: {
        cream: '#fef9ed', // Matches your base background
      }
    }
  },
  plugins: [],
};
