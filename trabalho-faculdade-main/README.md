# Quick Notes & Reminders (Chrome Extension – MV3)

Anote ideias instantaneamente, sincronize entre dispositivos e receba lembretes com notificações do Chrome.

## ✨ Recursos
- Notas rápidas no popup (armazenadas em `chrome.storage.sync`).
- Menu de contexto: salve o texto selecionado em qualquer página.
- Lembretes com `chrome.alarms` → notificações nativas.
- Badge com contagem de notas.
- Landing page (GitHub Pages) para demonstração.

## 🧩 Requisitos Técnicos (MV3)
- `manifest_version: 3`, compatível com Chrome 114+.
- `action.default_popup` (UI HTML/CSS/JS local, sem `eval`).
- `background.service_worker` para `alarms`, `storage`, `notifications`, `contextMenus`.
- Permissões mínimas: `storage`, `alarms`, `notifications`, `contextMenus`.
- Ícones em `icons/` (16, 32, 48, 128 px).

## 🚀 Instalação (modo desenvolvedor)
1. Baixe o `.zip` da release ou faça `Clone` do repositório.
2. Acesse `chrome://extensions` e ative **Modo do desenvolvedor**.
3. Clique em **Carregar sem compactação** e selecione a pasta do projeto.
4. O ícone da extensão aparecerá na barra do Chrome.

## 📝 Uso
- Clique no ícone → escreva uma nota → **Adicionar**.
- Selecione texto em uma página → clique com o botão direito → **Salvar seleção nas Quick Notes**.
- Defina um lembrete no popup (em minutos) → receberá uma notificação quando disparar.

## 🔒 Permissões & Justificativa
- `storage`: salvar suas notas (sincroniza se logado no Chrome).
- `alarms`: agendar lembretes.
- `notifications`: exibir lembretes.
- `contextMenus`: adicionar opção de salvar seleção.
