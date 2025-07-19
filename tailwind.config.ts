import type { Config } from "tailwindcss";
  
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/theme/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      screens: {
        beauty: "1120px",
      },
      maxWidth: { beauty: "1120px", global: "1360px" },
      boxShadow: {
        beauty_sm: "0px -2px 30px 0px rgba(0, 0, 0, 0.1)",
        beauty_md: "0px 2px 16px 0px rgba(0, 0, 0, 0.1)",
        beauty_lg: "0px 4px 80px 0px rgba(0, 0, 0, 0.1)",
        beauty_xl: "4px 8px 14px 5px rgba(0, 0, 0, 0.06)",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "pink-gradient-border":
          "linear-gradient(74.47deg, #eb1086 1.17%, #ebbed6 99.46%)",
        pink: {
          primary: "var(--primary)",
          badge: "#FCEBEC",
          30: "rgba(235, 16, 134, 0.3)",
          40: "rgba(235, 16, 134, 0.04)",
          50: "rgba(253, 231, 243, 0.5)",
          80: "rgba(235, 16, 134, 0.08)",
          200: `#FFE5F3`,
          700: "rgba(235, 16, 134, 0.5)",
        },
        "card-border": "rgba(0, 0, 0, 0.08)",
        "button-border": "rgba(0, 0, 0, 0.1)",
        input: "#E3E8EB",
        green: {
          primary: "#107C27",
          badge: "#EAF6EC",
          "badge-color": "#0F8F56",
        },
        black: "#181718",
        gray: {
          50: "rgba(0, 0, 0, 0.05)",
          100: `#EBEBEB`,
          200: `#F5F5F5`,
          300: "#D9D9D9",
          400: "#EDEDED",
          500: "#FAFAFA",
        },
        danger: {
          primary: "#DF131F",
          50: "#FCEBEC",
          500: "#DC3545",
        },
        white: "#FFFFFF",
        cream: "#FFE9DD",
        secondary: "var(--secondary)",
      },
      borderRadius: {
        button: "30px",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
