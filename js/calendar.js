'use strict'

const leader = document.querySelector('.record-list__wrap--leader');
const finance = document.querySelector('.record-list__wrap--finance');
const design = document.querySelector('.record-list__wrap--desing-think');
const system = document.querySelector('.record-list__wrap--system-think');
const team = document.querySelector('.record-list__wrap--team');

const leaderFrame = document.querySelector('.form__frame--leader');
const financeFrame = document.querySelector('.form__frame--finance');
const designFrame = document.querySelector('.form__frame--desing-think');
const systemFrame = document.querySelector('.form__frame--system-think');
const teamFrame = document.querySelector('.form__frame--team');

const leaderBorder = document.querySelector('.record-list__elem--leader');
const financeBorder = document.querySelector('.record-list__elem--finance');
const designBorder = document.querySelector('.record-list__elem--desing-think');
const systemBorder = document.querySelector('.record-list__elem--system-think');
const teamBorder = document.querySelector('.record-list__elem--team');

const formArr = [leaderFrame, financeFrame, designFrame, systemFrame, teamFrame];
const borderArr = [leaderBorder, financeBorder, designBorder, systemBorder, teamBorder]

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
  } else if (bord === designBorder) {
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

design.addEventListener('click', () => {
  changeElements(formArr, designFrame, borderArr, designBorder);
})

system.addEventListener('click', () => {
  changeElements(formArr, systemFrame, borderArr, systemBorder);
})

team.addEventListener('click', () => {
  changeElements(formArr, teamFrame, borderArr, teamBorder);
})

let URL_SERVER = `homecreditnew/api/odyssey_handler.js.html?request=event`;

const formLeader = document.querySelector('.form-leader');
const leaderGroupOne = formLeader.querySelector('.first-leader');
const leaderGroupTwo = formLeader.querySelector('.second-leader');
const leaderGroupThree = formLeader.querySelector('.third-leader');
const leaderGroupFour = formLeader.querySelector('.fourth-leader');

formLeader.addEventListener('click', () => {
  if (leaderGroupOne.checked) {
    URL_SERVER = 'homecreditnew/api/odyssey_handler.js.html?request=event/set/leader_group_1';
  } else if (leaderGroupTwo.checked) {
    URL_SERVER = 'homecreditnew/api/odyssey_handler.js.html?request=event/set/leader_group_2';
  } else if (leaderGroupThree.checked) {
    URL_SERVER = 'homecreditnew/api/odyssey_handler.js.html?request=event/set/leader_group_3';
  } else if (leaderGroupFour.checked) {
    URL_SERVER = 'homecreditnew/api/odyssey_handler.js.html?request=event/set/leader_group_4';
  }
  console.log(URL_SERVER);
})

const formFinance = document.querySelector('.form-finance');
const financeGroupOne = formFinance.querySelector('.first-finance');
const financeGroupTwo = formFinance.querySelector('.second-finance');
const financeGroupThree = formFinance.querySelector('.third-finance');
const financeGroupFour = formFinance.querySelector('.fourth-finance');

formFinance.addEventListener('click', () => {
  if (financeGroupOne.checked) {
    URL_SERVER = 'homecreditnew/api/odyssey_handler.js.html?request=event/set/finance_group_1';
  } else if (financeGroupTwo.checked) {
    URL_SERVER = 'homecreditnew/api/odyssey_handler.js.html?request=event/set/finance_group_2';
  } else if (financeGroupThree.checked) {
    URL_SERVER = 'homecreditnew/api/odyssey_handler.js.html?request=event/set/finance_group_3';
  } else if (financeGroupFour.checked) {
    URL_SERVER = 'homecreditnew/api/odyssey_handler.js.html?request=event/set/finance_group_4';
  }
  console.log(URL_SERVER);
})

const formDesign = document.querySelector('.form-design');
const designGroupOne = formDesign.querySelector('.first-design');
const designGroupTwo = formDesign.querySelector('.second-design');
const designGroupThree = formDesign.querySelector('.third-design');
const designGroupFour = formDesign.querySelector('.fourth-design');

formDesign.addEventListener('click', () => {
  if (designGroupOne.checked) {
    URL_SERVER = 'homecreditnew/api/odyssey_handler.js.html?request=event/set/design_group_1';
  } else if (designGroupTwo.checked) {
    URL_SERVER = 'homecreditnew/api/odyssey_handler.js.html?request=event/set/design_group_2';
  } else if (designGroupThree.checked) {
    URL_SERVER = 'homecreditnew/api/odyssey_handler.js.html?request=event/set/design_group_3';
  } else if (designGroupFour.checked) {
    URL_SERVER = 'homecreditnew/api/odyssey_handler.js.html?request=event/set/design_group_4';
  }
  console.log(URL_SERVER);
})

const formSystem = document.querySelector('.form-system');
const systemGroupOne = formSystem.querySelector('.first-system');
const systemGroupTwo = formSystem.querySelector('.second-system');
const systemGroupThree = formSystem.querySelector('.third-system');
const systemGroupFour = formSystem.querySelector('.fourth-system');

formSystem.addEventListener('click', () => {
  if (systemGroupOne.checked) {
    URL_SERVER = 'homecreditnew/api/odyssey_handler.js.html?request=event/set/system_group_1';
  } else if (systemGroupTwo.checked) {
    URL_SERVER = 'homecreditnew/api/odyssey_handler.js.html?request=event/set/system_group_2';
  } else if (systemGroupThree.checked) {
    URL_SERVER = 'homecreditnew/api/odyssey_handler.js.html?request=event/set/system_group_3';
  } else if (systemGroupFour.checked) {
    URL_SERVER = 'homecreditnew/api/odyssey_handler.js.html?request=event/set/system_group_4';
  }
  console.log(URL_SERVER);
})


const formTeam = document.querySelector('.form-team');
const teamGroupOne = formTeam.querySelector('.first-team');
const teamGroupTwo = formTeam.querySelector('.second-team');
const teamGroupThree = formTeam.querySelector('.third-team');
const teamGroupFour = formTeam.querySelector('.fourth-team');

formTeam.addEventListener('click', () => {
  if (teamGroupOne.checked) {
    URL_SERVER = 'homecreditnew/api/odyssey_handler.js.html?request=event/set/coahing_group_1';
  } else if (teamGroupTwo.checked) {
    URL_SERVER = 'homecreditnew/api/odyssey_handler.js.html?request=event/set/coahing_group_2';
  } else if (teamGroupThree.checked) {
    URL_SERVER = 'homecreditnew/api/odyssey_handler.js.html?request=event/set/coahing_group_3';
  } else if (teamGroupFour.checked) {
    URL_SERVER = 'homecreditnew/api/odyssey_handler.js.html?request=event/set/coahing_group_4';
  }
  console.log(URL_SERVER);
})


const StatusCode = {
  OK: 200
};
const TIMEOUT_IN_MS = 10000;

const formBtns = document.querySelectorAll('.form__btn');
const messageOk = document.querySelector('.success');
const messageErr = document.querySelector('.error');
const messageOkBtn = messageOk.querySelector('.form__ok');
const messageErrBtn = messageErr.querySelector('.form__err');


formBtns.forEach((formBtn) => {
  formBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    upload = (data, onSuccess) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = `json`;

      xhr.addEventListener(`load`, () => {
        onSuccess(xhr.response);
      });

      xhr.open(`POST`, URL_SERVER);
      xhr.send(data);
    };

    load = (onSuccess, onError) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = `json`;

      xhr.addEventListener(`load`, () => {
        if (xhr.status === StatusCode.OK) {
          onSuccess(xhr.response);
        } else {
          onError(`Статус ответа: ${xhr.status} ${xhr.statusText}`);
        }
      });
      xhr.addEventListener(`error`, () => {
        onError(`Произошла ошибка соединения`);
      });
      xhr.addEventListener(`timeout`, () => {
        onError(`Запрос не успел выполниться за ${xhr.timeout}мс`);
      });

      xhr.timeout = TIMEOUT_IN_MS;

      xhr.open(`GET`, URL_SERVER);
      xhr.send();
    };


    if (leaderFrame.style.display === 'block') {
      upload(new FormData(formLeader))
    } else if (financeFrame.style.display === 'block') {
      upload(new FormData(formFinance))
    } else if (designFrame.style.display === 'block') {
      upload(new FormData(formDesign))
    } else if (systemFrame.style.display === 'block') {
      upload(new FormData(formSystem))
    } else if (teamFrame.style.display === 'block') {
      upload(new FormData(formTeam))
    }
    load(response);
    if (response.result === true) {
      messageOk.style.display = 'block';
    } else {
      messageErr.style.display = 'block';
    }
  })
})

messageOkBtn.addEventListener('click', () => {
  messageOk.style.display = 'none';
})

messageErrBtn.addEventListener('click', () => {
  messageErr.style.display = 'none';
})

