module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "miko-shuttle": "url('public/spaceshuttle.jpg')",
      },
    },
  },
  plugins: [],
};
