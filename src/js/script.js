const selectDOMElement = (selector) => {
  return document.querySelector(selector);
};

//Counter
const buttonPlus = selectDOMElement('.click-plus');
const buttonMinus = selectDOMElement('.click-minus');
const amount = selectDOMElement('.amount');
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