/// <reference types="vitest/config" />

import { defineConfig } from 'vitest/config'
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({






  
  test: {
    globals:true,
    setupFiles: './vitest.setup.ts',
  },
  plugins: [react()],
 
 
});