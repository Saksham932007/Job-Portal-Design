/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6f1ff',
          100: '#cce3ff',
          200: '#99c8ff',
          300: '#66acff',
          400: '#3391ff',
          500: '#0B7FFF', // Primary color
          600: '#0964cc',
          700: '#074a99',
          800: '#053166',
          900: '#021933'
        },
        secondary: {
          50: '#f5edff',
          100: '#ead9ff',
          200: '#d5b3ff',
          300: '#c08eff',
          400: '#ab68ff',
          500: '#9C1AFF', // Secondary color
          600: '#7d15cc',
          700: '#5e1099',
          800: '#3e0a66',
          900: '#1f0533'
        },
        accent: {
          50: '#e6fff9',
          100: '#ccfff3',
          200: '#99ffe7',
          300: '#66ffdb',
          400: '#33ffcf',
          500: '#00F0B5', // Accent color
          600: '#00c092',
          700: '#00906e',
          800: '#00604a',
          900: '#003025'
        },
        dark: {
          900: '#050816', // Very dark blue for background
          800: '#0a0f29',
          700: '#0f173d',
          600: '#141f50',
          500: '#192764'
        },
        light: {
          50: '#f8faff',
          100: '#e8f1ff',
          200: '#d1e3ff',
          300: '#bad5ff',
          400: '#a3c7ff',
          500: '#8cb9ff'
        }
      },
      fontFamily: {
        sans: ['Space Grotesk', 'system-ui', 'sans-serif'],
        display: ['Orbitron', 'sans-serif']
      },
      boxShadow: {
        neon: '0 0 5px theme(colors.primary.400), 0 0 20px theme(colors.primary.500)',
        'neon-accent': '0 0 5px theme(colors.accent.400), 0 0 20px theme(colors.accent.500)',
        'neon-secondary': '0 0 5px theme(colors.secondary.400), 0 0 20px theme(colors.secondary.500)',
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)'
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out forwards',
        'slide-down': 'slideDown 0.5s ease-out forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(11, 127, 255, 0.5), 0 0 10px rgba(11, 127, 255, 0.3)' },
          '100%': { boxShadow: '0 0 10px rgba(11, 127, 255, 0.8), 0 0 20px rgba(11, 127, 255, 0.6)' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        }
      }
    },
  },
  plugins: [],
};