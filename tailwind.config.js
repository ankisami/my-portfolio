import tailwindScrollBar from "tailwind-scrollbar";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontfamily: {
        sans: ["Inter var", "sans-serif"],
      },
    },
  },
  plugins: [tailwindScrollBar],
};
