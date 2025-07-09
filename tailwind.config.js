/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#000000",
          light: "#F6F6FE",
        },
        secondary: {
          blue: "#377DFF",
          green: "#3BC98B",
          orange: "#F7AB00",
          red: "#FF6A50",
        },
        neutral: {
          1: "#F6F6FE",
          2: "#F5F5F7",
          3: "#E5E6EF",
          4: "#6C7275",
          5: "#343A39",
          6: "#212529",
          7: "#14171B",
        },
      },
      fontSize: {
        // === Display / Headings ===
        hero: ["6rem", { lineHeight: "1", fontWeight: "500" }],
        h1: ["5rem", { lineHeight: "1.05", fontWeight: "500" }],
        h2: ["4.5rem", { lineHeight: "1.05", fontWeight: "500" }],
        h3: ["3.375rem", { lineHeight: "1.1", fontWeight: "500" }],
        h4: ["2.5rem", { lineHeight: "1.1", fontWeight: "500" }],
        h5: ["2.125rem", { lineHeight: "1.15", fontWeight: "500" }],
        h6: ["1.75rem", { lineHeight: "1.2", fontWeight: "500" }],
        h7: ["1.25rem", { lineHeight: "1.3", fontWeight: "500" }],

        // === Body text – weight‑400 ===
        text1: ["1.625rem", { lineHeight: "1.25", fontWeight: "400" }],
        text2: ["1.375rem", { lineHeight: "1.2125", fontWeight: "400" }],
        text3: ["1.25rem", { lineHeight: "1.2", fontWeight: "400" }],
        text4: ["1.125rem", { lineHeight: "1.1875", fontWeight: "400" }],
        text5: ["1rem", { lineHeight: "1.1625", fontWeight: "400" }],
        text6: ["0.875rem", { lineHeight: "1.1375", fontWeight: "400" }],
        text7: ["0.75rem", { lineHeight: "1.25", fontWeight: "400" }],

        // === Body text – weight‑600 ===
        text8: ["1.625rem", { lineHeight: "1.25", fontWeight: "600" }],
        text9: ["1.375rem", { lineHeight: "1.2125", fontWeight: "600" }],
        text10: ["1.25rem", { lineHeight: "1.2", fontWeight: "600" }],
        text11: ["1.125rem", { lineHeight: "1.1875", fontWeight: "600" }],
        text12: ["1rem", { lineHeight: "1.1625", fontWeight: "600" }],
        text13: ["0.875rem", { lineHeight: "1.1375", fontWeight: "600" }],
        text14: ["0.75rem", { lineHeight: "1.25", fontWeight: "600" }],

        // === Body text – weight‑700 ===
        text15: ["1.625rem", { lineHeight: "1.25", fontWeight: "700" }],
        text16: ["1.375rem", { lineHeight: "1.2125", fontWeight: "700" }],
        text17: ["1.25rem", { lineHeight: "1.2", fontWeight: "700" }],
        text18: ["1.125rem", { lineHeight: "1.1875", fontWeight: "700" }],
        text19: ["1rem", { lineHeight: "1.1625", fontWeight: "700" }],
        text20: ["0.875rem", { lineHeight: "1.1375", fontWeight: "700" }],
        text21: ["0.75rem", { lineHeight: "1.25", fontWeight: "700" }],

        // === Buttons ===
        "button-xl": ["1.625rem", { lineHeight: "1.375", fontWeight: "500" }],
        "button-lg": ["1.375rem", { lineHeight: "1.325", fontWeight: "500" }],
        "button-md": ["1.125rem", { lineHeight: "1.25", fontWeight: "500", letterSpacing: "-0.04em" }],
        "button-sm": ["1rem", { lineHeight: "1.25", fontWeight: "500", letterSpacing: "-0.04em" }],
        "button-xs": ["0.875rem", { lineHeight: "1.2", fontWeight: "500" }],
      },
    },
  },
  plugins: [],
};
