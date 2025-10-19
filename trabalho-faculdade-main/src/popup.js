const NOTES_KEY = 'notes';


async function init() {
  const notes = await getNotes();
  render(notes);
}


els.add.addEventListener('click', async () => {
  const text = els.note.value.trim();
  if (!text) return;
  const notes = await getNotes();
  notes.unshift({ id: id(), text, createdAt: Date.now() });
  await setNotes(notes);
  els.note.value = '';
  render(notes);
});


els.clear.addEventListener('click', async () => {
  if (!confirm('Tem certeza que deseja apagar todas as notas?')) return;
  await setNotes([]);
  render([]);
});


els.rCreate.addEventListener('click', () => {
  const title = (els.rText.value || 'Lembrete').trim();
  const min = parseInt(els.rMin.value, 10);
  if (!min || min < 1) return alert('Informe os minutos (>= 1).');
  chrome.alarms.create(`qr:${title}`, { delayInMinutes: min });
  els.rText.value = '';
  els.rMin.value = '';
  alert('Lembrete criado! Você receberá uma notificação.');
});


els.list.addEventListener('click', async (e) => {
  const btn = e.target.closest('button[data-del]');
  if (!btn) return;
  const id = btn.getAttribute('data-del');
  const notes = await getNotes();
  const next = notes.filter(n => n.id !== id);
  await setNotes(next);
  render(next);
});


async function getNotes() {
  const { [NOTES_KEY]: notes = [] } = await chrome.storage.sync.get(NOTES_KEY);
  return Array.isArray(notes) ? notes : [];
}


async function setNotes(notes) {
  await chrome.storage.sync.set({ [NOTES_KEY]: notes });
}


function render(notes) {
  els.list.innerHTML = notes.map(n => `
<li>
<span>${escapeHtml(n.text)}</span>
<button data-del="${n.id}" title="Excluir">✕</button>
</li>
`).join('');
}


function escapeHtml(str) {
  const p = document.createElement('p');
  p.appendChild(document.createTextNode(str));
  return p.innerHTML;
}