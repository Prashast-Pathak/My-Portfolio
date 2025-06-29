/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  safelist: [
    'animate-blink',
    'animate-shimmer',
    'animate-floating',
    'animate-fadeIn',
    'animate-pulseGlow',
    'animate-bounceSoft',
    'animate-morphBlob',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'ui-sans-serif', 'system-ui'],
        mono: ['Fira Code', 'monospace'],
        heading: ['Plus Jakarta Sans', 'sans-serif'],
      },
      colors: {
        primary: '#A8FF60',
        background: '#000000',
        foreground: '#ffffff',
        accent: '#4ade80',
        softGray: '#888888',
      },
      keyframes: {
        morphBlob: {
          '0%, 100%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '25%': {
            borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%',
          },
          '50%': {
            borderRadius: '50% 60% 30% 60% / 30% 60% 70% 40%',
          },
          '75%': {
            borderRadius: '60% 40% 60% 30% / 70% 30% 60% 40%',
          },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': {
            boxShadow: '0 0 0 0 rgba(168,255,96,0.6)',
          },
          '50%': {
            boxShadow: '0 0 18px 9px rgba(168,255,96,0)',
          },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
      },
      animation: {
        morphBlob: 'morphBlob 8s ease-in-out infinite',
        bounceSoft: 'bounceSoft 2.5s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s cubic-bezier(0.4, 0, 0.2, 1) infinite',
        shimmer: 'shimmer 6s linear infinite',
        fadeIn: 'fadeIn 1s ease-in forwards',
        floating: 'floating 4.5s ease-in-out infinite',
        blink: 'blink 1s step-start infinite',
      },
      backgroundSize: {
        shimmer: '400% 100%',
      },
      transitionTimingFunction: {
        cinematic: 'cubic-bezier(0.77, 0, 0.175, 1)',
        softEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      transitionDuration: {
        default: '250ms',
        smooth: '350ms',
      },
    },
  },
  plugins: [],
};