/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // "./node_modules/flowbite/**/*.jsx",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FC7D3A",
      },
      fontFamily: {
        Sora: ["Sora", "serif"],
        // youngSerif: ["Young Serif", "serif"],
        // arOneSans: ["AR One Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    // require('flowbite/plugin')
  ],
};
