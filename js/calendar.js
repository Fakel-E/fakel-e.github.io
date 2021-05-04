'use strict'

const leader = document.querySelector('.record-list__wrap--leader');
const finance = document.querySelector('.record-list__wrap--finance');
const desing = document.querySelector('.record-list__wrap--desing-think');
const system = document.querySelector('.record-list__wrap--system-think');
const team = document.querySelector('.record-list__wrap--team');

const leaderFrame = document.querySelector('.form__frame--leader');
const financeFrame = document.querySelector('.form__frame--finance');
const desingFrame = document.querySelector('.form__frame--desing-think');
const systemFrame = document.querySelector('.form__frame--system-think');
const teamFrame = document.querySelector('.form__frame--team');

const leaderBorder = document.querySelector('.record-list__elem--leader');
const financeBorder = document.querySelector('.record-list__elem--finance');
const desingBorder = document.querySelector('.record-list__elem--desing-think');
const systemBorder = document.querySelector('.record-list__elem--system-think');
const teamBorder = document.querySelector('.record-list__elem--team');

const formArr = [leaderFrame, financeFrame, desingFrame, systemFrame, teamFrame];
const borderArr = [leaderBorder, financeBorder, desingBorder, systemBorder, teamBorder]

const changeElements = (arr, elem, mass, bord) => {
  arr.forEach(element => {
    element.style.display = 'none';
  });
  elem.style.display = 'block';
  mass.forEach(element => {
    element.style.border = 'none';
  });
  if (bord === leaderBorder) {
    bord.style.border = '3px solid rgba(33, 230, 193, 0.5)';
  } else if (bord === financeBorder) {
    bord.style.border = '3px solid rgba(119, 90, 218, 0.5)';
  } else if (bord === desingBorder) {
    bord.style.border = '3px solid rgba(255, 48, 79, 0.5)';
  } else if (bord === systemBorder) {
    bord.style.border = '3px solid rgba(0, 38, 81, 0.5)';
  } else if (bord === teamBorder) {
    bord.style.border = '3px solid rgba(40, 199, 250, 0.5)';
  }
}

leader.addEventListener('click', () => {
  changeElements(formArr, leaderFrame, borderArr, leaderBorder);
})

finance.addEventListener('click', () => {
  changeElements(formArr, financeFrame, borderArr, financeBorder);
})

desing.addEventListener('click', () => {
  changeElements(formArr, desingFrame, borderArr, desingBorder);
})

system.addEventListener('click', () => {
  changeElements(formArr, systemFrame, borderArr, systemBorder);
})

team.addEventListener('click', () => {
  changeElements(formArr, teamFrame, borderArr, teamBorder);
})
