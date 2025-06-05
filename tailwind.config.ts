// tailwind.config.ts (if you're using it, or create a minimal one)
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      aspectRatio: {
        'portrait': '3 / 4', // Common portrait
        'portrait-tall': '2 / 3', // Taller portrait
        'portrait-custom': '7 / 16', // Matches 700x1600 image (width / height)
      },
      // ... other theme extensions like fontFamily
    },
  },
  plugins: [],
};
export default config;