const selectDOMElement = (selector) => {
  return document.querySelector(selector);
};

//Counter
const buttonPlus = selectDOMElement('#click-plus');
const buttonMinus = selectDOMElement('#click-minus');
const amount = selectDOMElement('#amount');
let count = amount.innerHTML;

buttonMinus.addEventListener('click', () => {
  amount.innerHTML = `${amount.innerHTML - 1}`;

  if (amount.innerHTML <= 0) {
    amount.innerHTML = 0;
  }
})

buttonPlus.addEventListener('click', () => {
  count = `${amount.innerHTML++}`;
})

//Slider
const allAmount = selectDOMElement('#scroll-bar__all-amount');
const progressSlide = selectDOMElement('#scroll-bar__pogress');
let currentAmount = selectDOMElement('#scroll-bar__current-amount');

function Slider() {
  amount.innerHTML = progressSlide.value;
  currentAmount.innerHTML = progressSlide.value;

  buttonMinus.addEventListener('click', () => {
    currentAmount.innerHTML = progressSlide.value = amount.innerHTML;
  })

  buttonPlus.addEventListener('click', () => {
    currentAmount.innerHTML = progressSlide.value = amount.innerHTML;
  })
}

Slider()