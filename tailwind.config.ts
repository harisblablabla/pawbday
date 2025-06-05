// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // Remove this block if it's not working:
      // fontFamily: {
      //   fredoka: ['var(--font-fredoka)'],
      // },
    },
  },
  plugins: [],
};

export default config;