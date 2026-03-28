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
          deep: '#0b0720',
          surface: '#13102a',
          card: 'rgba(255,255,255,0.06)',
          border: 'rgba(255,255,255,0.1)',
          primary: '#7C3AED',
          'primary-dark': '#362263',
          accent: '#3C88BA',
          muted: '#9CA3AF',
          subtle: '#6B7280',
        }
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        }
      }
    },
  },
  plugins: [],
};
