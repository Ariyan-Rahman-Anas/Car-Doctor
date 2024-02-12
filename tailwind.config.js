const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xsm: { min: "375px", max: "539px" },
        xxs: { min: "200px", max: "374px" },
      },
    },
  },
  plugins: [],
});