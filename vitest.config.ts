import { defineConfig } from 'vitest/config'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'

export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  test: {
    name: 'unit',
    include: ['src/**/*.test.{ts,tsx}'],
    environment: 'happy-dom',
    globals: true,
    setupFiles: ['./src/test-setup.ts']
  }
})
