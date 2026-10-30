import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cbp: {
          navy: {
            50: '#f0f4f9',
            100: '#d9e2ef',
            200: '#b4c7df',
            300: '#84a4cb',
            400: '#557fb4',
            500: '#35639d',
            600: '#274e82',
            700: '#203e68',
            800: '#142742',
            900: '#0b1626',
            950: '#070e19',
          },
          gold: {
            50: '#faf8f2',
            100: '#f3eedf',
            200: '#e6dabf',
            300: '#d5c198',
            400: '#c5a770',
            500: '#b89253',
            600: '#a37a44',
            700: '#835e39',
            800: '#6c4c33',
            900: '#5a3f2e',
          },
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

