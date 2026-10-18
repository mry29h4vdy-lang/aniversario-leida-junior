
document.addEventListener('DOMContentLoaded', () => {
  // CONTADOR CONGELADO
  document.getElementById('c-months').textContent = '10';
  document.getElementById('c-days').textContent = '3';
  document.getElementById('c-total').textContent = '307';

  // PETALOS ANIMADOS
  const petals = document.getElementById('petals');

  if (petals && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    for (let i = 0; i < 14; i++) {
      const petal = document.createElement('span');
      petal.className = 'petal';
      petal.style.left = Math.random() * 100 + '%';
      petal.style.animationDuration = (7 + Math.random() * 9) + 's';
      petal.style.animationDelay = (-Math.random() * 10) + 's';
      petals.appendChild(petal);
    }
  }

  // ABRIR Y CERRAR LA CARTA
  const envelope = document.getElementById('envelope');
  const letter = document.getElementById('letterPaper');
  const closeButton = document.getElementById('closeLetter');

  if (!envelope || !letter) {
    console.error('No se encuentra el sobre o la carta. Revisa los ID en index.html.');
    return;
  }

  envelope.addEventListener('click', () => {
    envelope.hidden = true;
    letter.hidden = false;
    letter.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  if (closeButton) {
    closeButton.addEventListener('click', () => {
      letter.hidden = true;
      envelope.hidden = false;
      envelope.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }
});



// ==========================================
// CONTADOR
// ====
