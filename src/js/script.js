const selectDOMElement = (selector) => {
  return document.querySelector(selector);
};

<<<<<<< HEAD
//Counter
const buttonPlus = selectDOMElement('#click-plus');
const buttonMinus = selectDOMElement('#click-minus');
const currentAmountOfCounter = selectDOMElement('#counter__amount');
let count = Number(currentAmountOfCounter.innerHTML);


const Counter = () => {
  buttonMinus.addEventListener('click', () => {
    currentAmountOfCounter.innerHTML = currentAmountOfCounter.innerHTML - 1;

    if (currentAmountOfCounter.innerHTML <= 0) {
      currentAmountOfCounter.innerHTML = 0;
    }
  })

  buttonPlus.addEventListener('click', () => {
    count = currentAmountOfCounter.innerHTML++;

    if (Number(currentAmountOfCounter.innerHTML) >= 10) {
      currentAmountOfCounter.innerHTML = 10;
    }
  })
}

=======
const button = selectDOMElement('.burger-menu');
const list = selectDOMElement('.list');
const overlay = selectDOMElement('.header__overlay');
const body = selectDOMElement('.body')

function burgerMenu() {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
    list.classList.toggle('active');
    overlay.classList.toggle('show');
    body.classList.toggle('lock');
  });

  overlay.addEventListener('click', () => { 
    overlay.classList.toggle('show');
    button.classList.toggle('active');
    list.classList.toggle('active');
    body.classList.toggle('lock');
  });
}

burgerMenu();

function closeBurgerMenu() {
  // Выполняем действие, если ширина меньше 576px
  const windowWidth = window.innerWidth;

  if (windowWidth > 576) {
    overlay.classList.remove('show');
    button.classList.remove('active');
    list.classList.remove('active');
    body.classList.remove('lock');
  }
}

//  Выполняем заново при изменении размера окна
window.addEventListener('resize', function () {
  closeBurgerMenu();
});

//Counter
const buttonPlus = selectDOMElement('#click-plus');
const buttonMinus = selectDOMElement('#click-minus');
const amount = selectDOMElement('#amount');
let count = Number(amount.innerHTML);

function Counter() {
  buttonMinus.addEventListener('click', () => {
    amount.innerHTML = amount.innerHTML - 1;

    if (amount.innerHTML <= 0) {
      amount.innerHTML = 0;
    }
  })

  buttonPlus.addEventListener('click', () => {
    count = amount.innerHTML++;

    if (Number(amount.innerHTML) >= 10) {
      amount.innerHTML = 10;
    }
  })
}
>>>>>>> 420a32757c5a8c1059858892678c767d87632cc4
Counter();

//Slider
const progressSlide = selectDOMElement('#scroll-bar__pogress');
let currentStep = selectDOMElement('#scroll-bar__current-amount');

const Slider = () => {
  //WIP
  //   amount.innerHTML = progressSlide.value;
  //   currentAmount.innerHTML = progressSlide.value;

  //   buttonMinus.addEventListener('click', () => {
  //     currentAmount.innerHTML = progressSlide.value = amount.innerHTML;
  //   })

  //   buttonPlus.addEventListener('click', () => {
  //     currentAmount.innerHTML = progressSlide.value = amount.innerHTML;
  //   })

  currentStep.innerHTML = progressSlide.value;
}
Slider()