/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      lobster: ["Lobster", "sans-serif"],
      poppins: ["Poppins", "sans-serif"],
      oswald: ["Oswald", "sans-serif"],
    },
  },
  screens: {
    phone: "350px",
    // => @media (min-width: 640px) { ... }
    sm: "650px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
  },
  plugins: [],
};
