import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        card: '#1F1F1F',
        subtle: '#141414',
        muted: '#2D2D2D',
        darker: '#444444',
        'inverted-default': '#141414',
        state: {
          primary: '#4A90E2',
          'primary-hover': '#4281CB',
          brand: '#FA500F',
          'brand-hover': '#E0480D',
          secondary: '#333333',
          'secondary-hover': '#444444',
          'ghost-hover': 'rgba(255, 255, 255, 0.05)',
        },
      },
      textColor: {
        default: '#E0E0E0',
        subtle: '#9E9E9E',
        muted: '#9E9E9E',
        'inverted-default': '#141414',
        'basic-blue-strong': '#38BDF8',
      },
      caretColor: {
        'brand-500': '#FA500F',
      },
      backgroundColor: {
        'badge-sky': 'rgba(56, 189, 248, 0.1)',
        inverted: '#F5F5F5',
      },
      borderColor: {
        darker: '#444444',
      }
    },
  },
  plugins: [
     require('@tailwindcss/typography'),
  ],
}
export default config

