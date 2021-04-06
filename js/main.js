'use strict'

const popupTeam = document.querySelector('.list__popup--team');
const popupFinance = document.querySelector('.list__popup--finance');
const popupSystem = document.querySelector('.list__popup--system-think');
const popupDesing = document.querySelector('.list__popup--desing-think');
const popupLeader = document.querySelector('.list__popup--leader');

const textTeam = document.querySelector('.list__text--team');
const textFinance = document.querySelector('.list__text--finance');
const textSystem = document.querySelector('.list__text--system-think');
const textDesing = document.querySelector('.list__text--desing-think');
const textLeader = document.querySelector('.list__text--leader');

const btnTeam = document.querySelector('.list__wrap--team');
const btnFinance = document.querySelector('.list__wrap--finance');
const btnSystem = document.querySelector('.list__wrap--system-think');
const btnDesing = document.querySelector('.list__wrap--desing-think');
const btnLeader = document.querySelector('.list__wrap--leader');

const changeVisible = function (firstElem, secondElem) {
  firstElem.style.display = 'none';
  secondElem.style.display = 'block';
}

const returnVisible = function (secondElem, firstElem) {
  secondElem.style.display = 'none';
  firstElem.style.display = 'block';
}

btnTeam.addEventListener('mouseover', function () {
  changeVisible(textTeam, popupTeam);
})
popupTeam.addEventListener('mouseout', function () {
  returnVisible(popupTeam, textTeam)
})

btnFinance.addEventListener('mouseover', function () {
  changeVisible(textFinance, popupFinance);
})
popupFinance.addEventListener('mouseout', function () {
  returnVisible(popupFinance, textFinance)
})

btnSystem.addEventListener('mouseover', function () {
  changeVisible(textSystem, popupSystem);
})
popupSystem.addEventListener('mouseout', function () {
  returnVisible(popupSystem, textSystem)
})

btnDesing.addEventListener('mouseover', function () {
  changeVisible(textDesing, popupDesing);
})
popupDesing.addEventListener('mouseout', function () {
  returnVisible(popupDesing, textDesing)
})

btnLeader.addEventListener('mouseover', function () {
  changeVisible(textLeader, popupLeader);
})
popupLeader.addEventListener('mouseout', function () {
  returnVisible(popupLeader, textLeader)
})
