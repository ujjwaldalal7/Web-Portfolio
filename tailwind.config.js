export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        morph: "morph 20s ease-in-out infinite",
        "morph-reverse": "morph-reverse 20s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        aurora1: "aurora1 25s ease-in-out infinite",
        aurora2: "aurora2 35s ease-in-out infinite",
        lightSweep: "lightSweep 6s linear infinite",
      },
      keyframes: {
        morph: {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(20px, -30px) scale(1.1)" },
        },
        "morph-reverse": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "50%": { transform: "translate(-30px, 20px) scale(0.95)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        aurora1: {
      "0%, 100%": { transform: "translate(0, 0) scale(1)" },
      "50%": { transform: "translate(-30%, -20%) scale(1.2)" },
    },
    aurora2: {
      "0%, 100%": { transform: "translate(0, 0) scale(1)" },
      "50%": { transform: "translate(20%, 10%) scale(1.1)" },
    },
    
      },
    },
  },
  plugins: [],
};
