const selectDOMElement = (selector) => {
  return document.querySelector(selector);
};

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