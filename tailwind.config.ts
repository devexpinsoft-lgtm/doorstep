import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          teal: "#00C49A",
          "teal-light": "#00D4AA",
          "teal-dark": "#00A882",
          blue: "#1B4FD8",
          "blue-light": "#2563EB",
          "blue-dark": "#1340B8",
          navy: "#1E2D5A",
          "navy-light": "#2A3F70",
          "navy-dark": "#131D3A",
        },
        gray: {
          50: "#F8FAFC",
          100: "#F1F5F9",
          200: "#E2E8F0",
          300: "#CBD5E1",
          400: "#94A3B8",
          500: "#64748B",
          600: "#475569",
          700: "#334155",
          800: "#1E293B",
          900: "#0F172A",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
        poppins: ["Poppins", "ui-sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #00C49A 0%, #1B4FD8 100%)",
        "brand-gradient-reverse":
          "linear-gradient(135deg, #1B4FD8 0%, #00C49A 100%)",
        "hero-gradient":
          "linear-gradient(135deg, #0f1e3c 0%, #1E2D5A 50%, #162248 100%)",
        "section-gradient":
          "linear-gradient(180deg, #F8FAFC 0%, #EEF2FF 100%)",
      },
      boxShadow: {
        brand:
          "0 4px 30px rgba(27, 79, 216, 0.15), 0 1px 3px rgba(0,0,0,0.1)",
        "brand-lg":
          "0 10px 60px rgba(27, 79, 216, 0.2), 0 4px 16px rgba(0,0,0,0.1)",
        card: "0 2px 20px rgba(30, 45, 90, 0.08)",
        "card-hover":
          "0 8px 40px rgba(27, 79, 216, 0.18), 0 2px 8px rgba(0,0,0,0.06)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.6s ease-out forwards",
        "bounce-gentle": "bounceGentle 2s ease-in-out infinite",
        gradient: "gradientShift 4s ease infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        gradientShift: {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
