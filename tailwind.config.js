/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',      // Include JSX and TSX files in app folder
    './src/components/**/*.{js,jsx,ts,tsx}', // Include components' files
    './src/layout.js',                       // Include layout.js (if it contains any Tailwind classes)
    './src/globals.css',                     // Include the globals.css where Tailwind is imported
  ],
  darkMode: 'media', // or 'class' for manual dark mode toggle
  theme: {
    extend: {
      colors: {
        // Use CSS variables for colors to maintain consistency with your global.css
        primary: {
          DEFAULT: 'var(--color-primary)',
          dark: 'var(--color-primary-dark)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          dark: 'var(--color-secondary-dark)',
        },
        tertiary: {
          DEFAULT: 'var(--color-tertiary)',
          dark: 'var(--color-tertiary-dark)',
        },
        highlight: {
          DEFAULT: 'var(--color-highlight)',
          dark: 'var(--color-highlight-dark)',
        },
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
      },
      fontFamily: {
        sans: ['var(--font-sans, Arial)', 'sans-serif'],
        mono: ['var(--font-mono, monospace)'],
      },
      boxShadow: {
        'soft': '0 2px 10px rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.1)',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInFromTop: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-out',
        'slide-in-top': 'slideInFromTop 0.3s ease-out',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}