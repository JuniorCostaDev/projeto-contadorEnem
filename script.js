function countDown() {
  let dateEnem = new Date(2022, 10, 13, 12);
  let now = new Date();
  let diff = dateEnem - now;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  function DaysWeeksMonths() {
    document.querySelector('#months p').innerText = Math.floor((diff / day) / 30.41);
    document.querySelector('#weeks p').innerText = Math.floor((diff / day) / 7);
    document.querySelector('#days p').innerText = Math.floor(diff / day);
  }
  DaysWeeksMonths();

  function clock() {
    let clockHours = Math.floor(diff % day / hour);
    let clockMinute = Math.floor(diff % hour / minute);
    let clockSecond = Math.floor(diff % minute / second);
    document.querySelector('#hours').innerText = `${clockHours < 10 ? '0' + clockHours : clockHours}:${clockMinute < 10 ? '0' + clockMinute : clockMinute}:${clockSecond < 10 ? '0' + clockSecond : clockSecond}`;
  }
  clock();
};
setInterval(countDown, 500);

//Modal 


const buttonSingUp = document.querySelector('[data-signUp]');
const sectionModal = document.querySelector('[data-modal="container"]');
function activeModal() {
  sectionModal.classList.add('active');
};
buttonSingUp.addEventListener('click', activeModal);

function initClosedModal() {
  const buttonClosed = document.querySelector('[data-modal="closed"]');

  function closedModal() {
    sectionModal.classList.remove('active');
  };
  buttonClosed.addEventListener('click', closedModal);
}
initClosedModal();







