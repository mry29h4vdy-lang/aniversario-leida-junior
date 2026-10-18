
/* =========================================
   CONTADOR CONGELADO
   No avanza con el paso del tiempo.
========================================= */

const contadorFijo = {
  meses: 10,
  dias: 3,
  total: 307
};

function updateCounter() {
  const meses = document.getElementById('c-months');
  const dias = document.getElementById('c-days');
  const total = document.getElementById('c-total');

  if (meses) meses.textContent = contadorFijo.meses;
  if (dias) dias.textContent = contadorFijo.dias;
  if (total) total.textContent = contadorFijo.total;
}

// Se ejecuta una sola vez.
updateCounter();


/* =========================================
   PETALOS FLOTANTES
========================================= */

function createPetals() {
  const container = document.getElementById('petals');

  if (!container) return;

  // Respeta la preferencia de reducir movimiento.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  for (let i = 0; i < 14; i++) {
    const petal = document.createElement('span');
    petal.className = 'petal';

    petal.style.left = Math.random() * 100 + '%';
    petal.style.animationDuration = (7 + Math.random() * 9) + 's';
    petal.style.animationDelay = (-Math.random() * 12) + 's';
    petal.style.opacity = (0.25 + Math.random() * 0.45).toString();
    petal.style.transform = `scale(${0.6 + Math.random() * 0.8})`;

    container.appendChild(petal);
  }
}

createPetals();


/* =========================================
   ABRIR Y CERRAR LA CARTA
========================================= */

const envelope = document.getElementById('envelope');
const letterPaper = document.getElementById('letterPaper');
const closeButton = document.getElementById('closeLetter');

function openLetter() {
  if (!envelope || !letterPaper) return;

  envelope.hidden = true;
  letterPaper.hidden = false;

  letterPaper.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
}

function closeLetter() {
  if (!envelope || !letterPaper) return;

  letterPaper.hidden = true;
  envelope.hidden = false;

  envelope.scrollIntoView({
    behavior: 'smooth',
    block: 'center'
  });
}

if (envelope) {
  envelope.addEventListener('click', openLetter);
}

if (closeButton) {
  closeButton.addEventListener('click', closeLetter);
}
