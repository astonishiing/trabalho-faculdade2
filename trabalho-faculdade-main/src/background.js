// const NOTES_KEY = 'notes';
// chrome.runtime.onInstalled.addListener(() => {
//   chrome.contextMenus.create({
//     id: 'save-selection',
//     title: 'Salvar seleção nas Quick Notes',
//     contexts: ['selection']
//   });
//   updateBadgeFromStorage();
// });
//
// chrome.contextMenus.onClicked.addListener(async (info, tab) => {
//   if (info.menuItemId === 'save-selection' && info.selectionText) {
//     const selected = info.selectionText.trim();
//     if (!selected) return;
//     const notes = await getNotes();
//     notes.unshift({ id: cryptoRandomId(), text: selected, createdAt: Date.now() });
//     await setNotes(notes);
//     await updateBadge(notes.length);
//     chrome.notifications.create({
//       type: 'basic',
//       iconUrl: 'icons/icon-128.png',
//       title: 'Nota salva',
//       message: 'A seleção foi adicionada às suas notas.'
//     });
//   }
// });
//
// chrome.alarms.onAlarm.addListener((alarm) => {
//   if (!alarm?.name?.startsWith('qr:')) return;
//   const title = alarm.name.slice(3) || 'Lembrete';
//   chrome.notifications.create({
//     type: 'basic',
//     iconUrl: 'icons/icon-128.png',
//     title: 'Lembrete',
//     message: title
//   });
// });
//
//
// chrome.storage.onChanged.addListener((changes, area) => {
//   if (area === 'sync' && changes[NOTES_KEY]) {
//     const len = changes[NOTES_KEY].newValue?.length || 0;
//     updateBadge(len);
//   }
// });
//
//
// async function updateBadgeFromStorage() {
//   const notes = await getNotes();
//   updateBadge(notes.length);
// }
//
//
// function updateBadge(count) {
//   chrome.action.setBadgeText({ text: count ? String(count) : '' });
//   chrome.action.setBadgeBackgroundColor({ color: '#3b82f6' });
// }
//
//
// function cryptoRandomId() {
// // ID curto e estável para notas
//   const arr = new Uint8Array(8);
//   crypto.getRandomValues(arr);
//   return Array.from(arr, b => b.toString(16).padStart(2, '0')).join('');
// }
//
//
// async function getNotes() {
//   const { [NOTES_KEY]: notes = [] } = await chrome.storage.sync.get(NOTES_KEY);
//   return Array.isArray(notes) ? notes : [];
// }
//
//
// async function setNotes(notes) {
//   await chrome.storage.sync.set({ [NOTES_KEY]: notes });
// }