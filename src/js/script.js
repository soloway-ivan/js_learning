const selectDOMElement = (selector) => {
  return document.querySelector(selector);
};

//Counter
const buttonPlus = selectDOMElement('#click-plus');
const buttonMinus = selectDOMElement('#click-minus');
const amount = selectDOMElement('.amount');
let count = Number(amount.innerHTML);

function Counter() {
  buttonMinus.addEventListener('click', () => {
    amount.innerHTML = count--;

    if (count <= 0) {
      count = 0;
    }
  })

  buttonPlus.addEventListener('click', () => {
    count = amount.innerHTML++;
  })
}
Counter();