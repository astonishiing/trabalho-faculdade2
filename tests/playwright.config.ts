import { defineConfig, devices } from '@playwright/test';
import path from 'node:path';

// Caminho absoluto da pasta dist/
const distPath = path.resolve(__dirname, '..', 'dist');

export default defineConfig({
  testDir: __dirname, // Pasta onde estão os testes
  reporter: [
    ['list'], // Saída no terminal
    ['html', { outputFolder: 'playwright-report' }] // Relatório visual
  ],
  use: {
    headless: false, // Extensões exigem modo não-headless
  },
  projects: [
    {
      name: 'chromium-with-extension',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          args: [
            `--disable-extensions-except=${distPath}`,
            `--load-extension=${distPath}`
          ]
        }
      }
    }
  ]
});