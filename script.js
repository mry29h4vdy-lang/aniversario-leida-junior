// ==========================================
// POLVO DORADO
// ==========================================

const sparkContainer = document.getElementById('petals');

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  for (let i = 0; i < 22; i++) {
    const s = document.createElement('div');
    s.className = 'spark';
    s.style.left = Math.random() * 100 + 'vw';
    s.style.animationDuration = (14 + Math.random() * 14) + 's';
    s.style.animationDelay = (Math.random() * 14) + 's';
    sparkContainer.appendChild(s);
  }
}

// ==========================================
// CONTADOR (EN PAUSA)
// Congelado en: 10 meses, 4 días, 308 días en total
// (los números ya están escritos en el HTML; no se actualizan más)
// ==========================================

document.getElementById('c-months').textContent = 10;
document.getElementById('c-days').textContent = 4;
document.getElementById('c-total').textContent = 308;

// ==========================================
// ABRIR CARTA
// ==========================================

function openLetter() {
  document.getElementById('envelope').classList.add('hidden');

  const paper = document.getElementById('letterPaper');
  paper.classList.add('show');
  paper.setAttribute('tabindex', '-1');
  paper.focus({ preventScroll: true });

  paper.scrollIntoView({ behavior: 'smooth', block: 'center' });
}
