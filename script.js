'use strict';

const btnChecK = document.querySelector('.check');
const lblMessa = document.querySelector('.message');
const inpGues = document.querySelector('.guess');
const btns = document.querySelectorAll('.btn');
const lblScr = document.querySelector('.label-score');
const lblHS = document.querySelector('.label-highscore span');
let r = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
console.log(r);
btns.forEach(function (btn) {
  btn.addEventListener('click', function (btn) {
    let gues = Number(inpGues.value);
    if (btn.target.id == 'checkBtn') {
      checkNumber(gues, r);
    } else if (btn.target.id == 'againBtn') {
      alert('Click en reset');
      reset();
    }
  });
});

function checkNumber(gues, goal) {
  if (gues != goal && score > 0) {
    gues > goal
      ? (lblMessa.innerHTML = 'Go lower')
      : (lblMessa.innerHTML = 'Go Higher');
    --score;
    lblScr.innerHTML = `Score:${score}`;
  } else {
    if (gues == goal) {
      lblScr.textContent = `Congratulations it was ${r}`;
      lblMessa.textContent = `You did great`;
      if (score > highScore) {
        highScore = score;
        lblHS.textContent = highScore;
      }
    } else {
      alert(`You run out of attempts the number was ${r}`);
    }
  }
}

function reset() {
  score = 20;
  r = Math.floor(Math.random() * 20) + 1;
  lblMessa.textContent = 'Start guessing...';
  inpGues.value = '';
  lblScr.textContent = 'Score: ' + score;
  console.log(r);
}
