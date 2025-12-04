import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Mystery palette
        burgundy: {
          DEFAULT: "hsl(var(--burgundy))",
          glow: "hsl(var(--burgundy-glow))",
        },
        gold: {
          DEFAULT: "hsl(var(--gold))",
          dim: "hsl(var(--gold-dim))",
        },
        charcoal: {
          DEFAULT: "hsl(var(--charcoal))",
          deep: "hsl(var(--charcoal-deep))",
        },
        smoke: "hsl(var(--smoke))",
        ash: "hsl(var(--ash))",
      },
      fontFamily: {
        cinematic: ['Cinzel', 'serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "slow-zoom": {
          from: { transform: "scale(1)" },
          to: { transform: "scale(1.1)" },
        },
        "parallax-drift": {
          from: { transform: "translate(0, 0) scale(1.1)" },
          to: { transform: "translate(-20px, -10px) scale(1.15)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.5" },
          "50%": { opacity: "1" },
        },
        "expand": {
          from: { maxHeight: "0", opacity: "0" },
          to: { maxHeight: "500px", opacity: "1" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-up": "fade-up 0.8s ease-out forwards",
        "fade-in": "fade-in 1s ease-out forwards",
        "slow-zoom": "slow-zoom 20s ease-out forwards",
        "parallax-drift": "parallax-drift 30s ease-in-out infinite alternate",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "expand": "expand 0.4s ease-out forwards",
        "float": "float 6s ease-in-out infinite",
      },
      backgroundImage: {
        'gradient-noir': 'linear-gradient(180deg, hsl(0 0% 4%) 0%, hsl(345 30% 8%) 50%, hsl(0 0% 4%) 100%)',
        'gradient-vignette': 'radial-gradient(ellipse at center, transparent 0%, hsl(0 0% 0% / 0.7) 100%)',
        'gradient-gold': 'linear-gradient(135deg, hsl(43 70% 47%) 0%, hsl(35 60% 35%) 100%)',
        'gradient-burgundy': 'linear-gradient(135deg, hsl(345 42% 30%) 0%, hsl(345 35% 20%) 100%)',
      },
      boxShadow: {
        'noir': '0 25px 50px -12px hsl(0 0% 0% / 0.8)',
        'glow': '0 0 40px hsl(43 70% 47% / 0.2)',
        'glow-lg': '0 0 60px hsl(43 70% 47% / 0.3)',
        'burgundy': '0 0 60px hsl(345 42% 30% / 0.3)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
