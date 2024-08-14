/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {},
      aspectRatio: {
        "4/3": "4 / 3",
        "1/1": "1 / 1",
        "4/5": "4 / 5",
        "16/10": "16 / 10",
        "7/5": "7 / 5",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
        "9/16": "9 / 16",
        "16/9": "16 / 9",
        "3/4": "3 / 4",
        "5/7": "5 / 7",
      },
      fontFamily: {
        DM: ["DM Sans", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
