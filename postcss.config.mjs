// postcss.config.mjs
import path from 'path';
import { fileURLToPath } from 'url';

// In ES Modules, __dirname is not available. We need to create it.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  plugins: {
    "@tailwindcss/postcss": {
      // Point directly to your tailwind.config.ts file
      // Adjust the path if your tailwind.config.ts is not in the project root
      config: path.resolve(__dirname, './tailwind.config.ts'),
    },
  },
};

export default config;