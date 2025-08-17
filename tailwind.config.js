/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors - Orange Theme
        'brand-ink': 'var(--brand-ink)',      // orange-700
        'brand-ink-600': 'var(--brand-ink-600)', // orange-600
        'accent-1': 'var(--accent-1)',        // orange-500
        'accent-2': 'var(--accent-2)',        // orange-400
        
        // Orange palette
        'orange': {
          50: '#FFF7ED',
          100: '#FFEDD5',
          200: '#FED7AA',
          300: '#FDBA74',
          400: '#FB923C',
          500: '#F97316',
          600: '#EA580C',
          700: '#C2410C',
          800: '#9A3412',
          900: '#7C2D12',
        },
        
        // Neutrals
        'bg': 'var(--bg)',
        'bg-soft': 'var(--bg-soft)',
        'line': 'var(--line)',
        'text': 'var(--text)',
        'text-dim': 'var(--text-dim)',
        'text-muted': 'var(--text-muted)',
        
        // Cards
        'card-bg': 'var(--card-bg)',
        'card-border': 'var(--card-border)',
        
        // Shadcn/UI compatibility
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        card: {
          DEFAULT: 'var(--card)',
          foreground: 'var(--card-foreground)',
        },
        popover: {
          DEFAULT: 'var(--popover)',
          foreground: 'var(--popover-foreground)',
        },
        primary: {
          DEFAULT: 'var(--primary)',
          foreground: 'var(--primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--secondary)',
          foreground: 'var(--secondary-foreground)',
        },
        muted: {
          DEFAULT: 'var(--muted)',
          foreground: 'var(--muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          foreground: 'var(--accent-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--destructive)',
          foreground: 'var(--destructive-foreground)',
        },
        border: 'var(--border)',
        input: 'var(--input)',
        ring: 'var(--ring)',
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        lg: 'var(--radius)',
      },
      spacing: {
        '1': 'var(--space-1)',
        '2': 'var(--space-2)',
        '3': 'var(--space-3)',
        '4': 'var(--space-4)',
        '6': 'var(--space-6)',
        '8': 'var(--space-8)',
        '12': 'var(--space-12)',
        '16': 'var(--space-16)',
      },
      maxWidth: {
        'container': 'var(--container)',
      },
      fontFamily: {
        'sans': 'var(--font-sans)',
      },
      fontSize: {
        'h1': 'var(--h1)',
        'h2': 'var(--h2)',
        'lead': 'var(--lead)',
      },
      lineHeight: {
        'tight': 'var(--lh-tight)',
        'normal': 'var(--lh-normal)',
      },
      boxShadow: {
        'sm': 'var(--shadow-sm)',
        'md': 'var(--shadow-md)',
      },
    },
  },
  plugins: [],
}