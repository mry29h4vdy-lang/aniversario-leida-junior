// ==========================================
// PÉTALOS FLOTANTES
// ==========================================

const petalContainer =
  document.getElementById('petals');

const petalChars = [
  '❀',
  '✿',
  '♥'
];


if (
  !window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches
) {

  for (
    let i = 0;
    i < 14;
    i++
  ) {

    const p =
      document.createElement('div');

    p.className =
      'petal';

    p.textContent =
      petalChars[
        Math.floor(
          Math.random() *
          petalChars.length
        )
      ];

    p.style.left =
      Math.random() * 100 + 'vw';

    p.style.animationDuration =
      (
        10 +
        Math.random() * 10
      ) + 's';

    p.style.animationDelay =
      (
        Math.random() * 10
      ) + 's';

    p.style.fontSize =
      (
        1 +
        Math.random() * 1.2
      ) + 'rem';

    petalContainer.appendChild(p);
  }

}


// ==========================================
// CONTADOR
// ====
