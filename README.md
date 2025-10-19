    # Testes E2E para Extensão Chrome (MV3) — Playwright + Docker + GitHub Actions

    Este repositório foi preparado para executar testes end-to-end da extensão Chrome (Manifest V3) dentro de um container com Playwright (Chromium) e em CI via GitHub Actions.

    ## O que eu adicionei automaticamente
    - `Dockerfile` baseado em imagem oficial do Playwright.
    - `docker-compose.yml` para executar os testes localmente.
    - `scripts/build-extension.mjs` para copiar arquivos para `dist/` e gerar `dist/extension.zip`.
    - `tests/` com `playwright.config.ts` e `extension.spec.ts` (exemplo simples).
    - `.github/workflows/ci.yml` que instala dependências, gera build, roda testes e publica artefatos.
    - Atualização (ou criação) de `package.json` com scripts necessários.

    ## Como rodar localmente (recomendado)
    1. Instale Docker e Docker Compose.
    2. Faça build da imagem e execute os testes:

```bash
docker compose build
docker compose run --rm e2e
```

3. Alternativamente, sem container:

```bash
npm ci
npx playwright install --with-deps chromium
npm run test
npx playwright show-report
```

## O que verificar / adaptar
- Garanta que `manifest.json`, `src/` e `icons/` existam (são copiados para `dist/` pelo script de build).
- Ajuste o teste em `tests/extension.spec.ts` para validar a funcionalidade real da sua extensão (popup, content script, options page, etc.).

## Artefatos do CI
- `playwright-report/` (HTML) — artefato do job.
- `dist/extension.zip` — artefato para release.

---
