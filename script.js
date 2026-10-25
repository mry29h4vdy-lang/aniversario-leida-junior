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
// CONTADOR
// ==========================================

const startDate = new Date(2025, 11, 15); // 15 de diciembre de 2025

function updateCounter() {
  const now = new Date();

  let months = (now.getFullYear() - startDate.getFullYear()) * 12
    + (now.getMonth() - startDate.getMonth());

  let days = now.getDate() - startDate.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
    days += prevMonth.getDate();
  }

  const totalDays = Math.floor((now - startDate) / (1000 * 60 * 60 * 24));

  document.getElementById('c-months').textContent = Math.max(months, 0);
  document.getElementById('c-days').textContent = Math.max(days, 0);
  document.getElementById('c-total').textContent = Math.max(totalDays, 0);
}

updateCounter();
setInterval(updateCounter, 60 * 1000);

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
