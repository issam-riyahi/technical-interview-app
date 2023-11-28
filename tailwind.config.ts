

import type { Config } from "tailwindcss";

const config: Config = {
   content: [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   theme: {
      extend: {
         backgroundImage: {
            "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
            "gradient-conic":
               "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
         },
         colors: {
            woodsmoke: "rgb(var(--woodsmoke-rgb))",
            primary : "rgb(var(--primary))"
         },
         keyframes: {
            "left-letter-animation": {
               "0%": { transform: "translateY(0)" },
               "50%": { transform: "translateY(-1em)" },
               "100%": { transform: "translate(-1.5em,-1em)" },
            },
            "right-letter-animation": {
               "0%": { transform: "translateY(0)" },
               "50%": { transform: "translateY(1em)" },
               "100%": { transform: "translate(1.5em,1em)" },
            },
            "right-letter-animation-back": {
              "0%": { transform: "translate(1.5em,1em)" },
               "100%": { transform: "translate(0em,0em)" },
            },
            "left-letter-animation-back": {
              "0%": { transform: "translate(-1.5em,-1em)" },
               "100%": { transform: "translate(0em,0em)" },
            },
         },
         animation: {
            "left-letter-animation":
               "left-letter-animation 0.6s ease-out  forwards",
            "right-letter-animation":
               "right-letter-animation 0.6s ease-out forwards",
            "left-letter-animation-back":
               "left-letter-animation-back 0.6s 0.2s ease-out  forwards",
            "right-letter-animation-back":
               "right-letter-animation-back 0.6s 0.2s  ease-out forwards",
         },
      },
   },
   plugins: [],
};
export default config;
