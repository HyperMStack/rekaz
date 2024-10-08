/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["md:translate-x-0", "md:translate-x-1/2", "md:translate-x-full"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInRightToLeft: {
          "0%": { opacity: "0", transform: "translateX(15%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        fadeOutLeftToRight: {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(-15%)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
        fadeInRightToLeft: "fadeInRightToLeft 1s ease-in-out",
        fadeOutLeftToRight: "fadeOutLeftToRight 1s ease-in-out",
      },
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
        "3/2": "3 / 2",
        "16/9": "16 / 9",
        "9/16": "9 / 16",
      },
      height: {
        128: "32rem",
        172: "43rem",
        196: "49rem",
        256: "64rem",
        512: "128rem",
        1024: "256rem",
      },
      width: {
        "1/10": "10%",
      },
      maxWidth: {
        192: "48rem",
      },
    },
  },
  plugins: [],
};
