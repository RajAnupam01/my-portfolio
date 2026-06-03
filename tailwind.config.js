/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7c3aed",
        secondary: "#06b6d4",
        dark: "#050816",
        card: "#0f172a",
      },

      boxShadow: {
        glow: "0 0 30px rgba(124,58,237,0.4)",
      },
    },
  },
  plugins: [],
};

