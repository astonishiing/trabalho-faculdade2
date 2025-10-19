import { test, expect, chromium } from '@playwright/test';
import path from 'node:path';

// Caminho absoluto para a extensão já empacotada em dist/
const dist = path.resolve(__dirname, '..', 'dist');

test('content script runs on example.com', async () => {
  // Cria um novo contexto persistente com a extensão carregada
  const context = await chromium.launchPersistentContext('', {
    headless: false, // Extensões não funcionam em modo headless
    args: [
      `--disable-extensions-except=${dist}`,
      `--load-extension=${dist}`
    ]
  });

  // Garante que há uma aba disponível
  let [page] = context.pages();
  if (!page) page = await context.newPage();

  // Acessa uma página qualquer para acionar o content script
  await page.goto('https://example.com');

  // Exemplo simples: verifica se há links na página
  const linkCount = await page.locator('a').count();
  expect(linkCount).toBeGreaterThanOrEqual(1);

  // Fecha o contexto (encerra o navegador)
  await context.close();
});