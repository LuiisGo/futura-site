/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        futura: {
          deep: '#0c0714',
          surface: '#111111',
          card: 'rgba(255,255,255,0.06)',
          border: 'rgba(255,255,255,0.1)',
          primary: '#7C3AED',
          'primary-dark': '#362263',
          accent: '#3C88BA',
          muted: '#888888',
          subtle: '#666666',
          'glow-cyan': '#22d3ee',
          'glow-purple': '#a855f7',
          'glow-pink': '#ec4899',
          'neon-blue': '#3b82f6',
        }
      },
      boxShadow: {
        'glow-sm': '0 0 20px rgba(124,58,237,0.12)',
        'glow-md': '0 0 40px rgba(124,58,237,0.15)',
        'glow-lg': '0 0 80px rgba(124,58,237,0.2)',
        'glow-cyan': '0 0 40px rgba(34,211,238,0.15)',
        'glow-pink': '0 0 40px rgba(236,72,153,0.15)',
        'glass': '0 8px 32px rgba(0,0,0,0.3), 0 2px 8px rgba(0,0,0,0.2)',
        'glass-lg': '0 12px 48px rgba(0,0,0,0.4), 0 4px 12px rgba(0,0,0,0.25)',
      },
      backdropBlur: {
        xl: '20px',
        '2xl': '40px',
        '3xl': '60px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'shimmer': 'shimmer 3s linear infinite',
        'fade-in-up': 'fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'breathe': 'breathe 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.7' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        breathe: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.6' },
        },
      }
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
