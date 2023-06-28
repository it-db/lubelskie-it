import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import React from 'react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [React()],
  base: '/lubelskie-it/',
});
