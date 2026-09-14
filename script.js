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
// ==========================================

const startDate =
  new Date(
    2025,
    11,
    15
  );
  
// 15 de diciembre de 2025


function updateCounter(){

  const now =
    new Date();


  let months =
    (
      now.getFullYear() -
      startDate.getFullYear()
    ) * 12
    +
    (
      now.getMonth() -
      startDate.getMonth()
    );


  let days =
    now.getDate() -
    startDate.getDate();


  if(days < 0){

    months -= 1;

    const prevMonth =
      new Date(
        now.getFullYear(),
        now.getMonth(),
        0
      );

    days +=
      prevMonth.getDate();

  }


  const totalDays =
    Math.floor(
      (
        now -
        startDate
      )
      /
      (
        1000 *
        60 *
        60 *
        24
      )
    );


  document
    .getElementById('c-months')
    .textContent =
      Math.max(
        months,
        0
      );


  document
    .getElementById('c-days')
    .textContent =
      Math.max(
        days,
        0
      );


  document
    .getElementById('c-total')
    .textContent =
      Math.max(
        totalDays,
        0
      );

}


updateCounter();


// ==========================================
// ABRIR CARTA
// ==========================================

function openLetter(){

  document
    .getElementById('envelope')
    .classList
    .add('hidden');


  document
    .getElementById('letterPaper')
    .classList
    .add('show');


  document
    .getElementById('letterPaper')
    .scrollIntoView({

      behavior:'smooth',

      block:'center'

    });

}