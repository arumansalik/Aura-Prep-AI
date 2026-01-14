/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C7CFF",
        secondary: "#22D3EE",
        accent: "#A78BFA",
        dark: "#0B0F1A",
        glass: "rgba(255,255,255,0.08)",
      },
      backdropBlur: {
        glass: "12px",
      },
    },
  },
  plugins: [],
};
