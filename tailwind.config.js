/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./script.js"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui"),require("rippleui")],
}

