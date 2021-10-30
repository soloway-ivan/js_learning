const selectDOMElement = (selector) => {
  return document.querySelector(selector);
};

//Counter
const buttonPlus = selectDOMElement('#click-plus');
const buttonMinus = selectDOMElement('#click-minus');
const currentAmountOfCounter = selectDOMElement('#counter-value');
let count = Number(currentAmountOfCounter.innerHTML);

  buttonMinus.addEventListener('click', () => {
    currentAmountOfCounter.innerHTML = currentAmountOfCounter.innerHTML - 1;

    if (currentAmountOfCounter.innerHTML <= 0) {
      currentAmountOfCounter.innerHTML = 0;
    }
  })

  buttonPlus.addEventListener('click', () => {
    count = currentAmountOfCounter.innerHTML++;

    if (Number(currentAmountOfCounter.innerHTML) >= 10) { //переменные
      currentAmountOfCounter.innerHTML = 10;
    }
  })


//Slider
const progressSlide = selectDOMElement('#scroll-bar-progress');
let currentStep = selectDOMElement('#scroll-bar-current-amount');

const Slider = () => {
  //WIP
  //   amount.innerHTML = progressSlide.value;
  //   currentAmount.innerHTML = progressSlide.value;

  
  //     currentAmount.innerHTML = progressSlide.value = amount.innerHTML;

  //     currentAmount.innerHTML = progressSlide.value = amount.innerHTML;


  currentStep.innerHTML = progressSlide.value;
}
Slider()