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
        primary: {
          50: '#e6f3f5',
          100: '#b3dce1',
          200: '#80c5cd',
          300: '#4daeb9',
          400: '#2699a6',
          500: '#0A6F7C',
          600: '#085d68',
          700: '#064b54',
          800: '#043940',
          900: '#02272c',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
