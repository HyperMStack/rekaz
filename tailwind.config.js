/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      scrollbar: {
        hide: "scrollbar-hide",
        thin: "scrollbar-thin",
        auto: "scrollbar-auto",
      },
      aspectRatio: {
        "1/1": "1 / 1",
        "3/4": "3 / 4",
        "4/5": "4 / 5",
        "2/3": "2 / 3",
        "16/9": "16 / 9",
        "9/16": "9 / 16",
      },
      height: {
        128: "32rem",
        172: "42rem",
        256: "64rem",
        512: "128rem",
        1024: "256rem",
      },
    },
  },
  plugins: [],
};
