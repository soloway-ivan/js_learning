import { constants } from "./constants.js"

const selectDOMElement = (selector) => {
  return document.querySelector(selector);
};

//Counter
const Counter = (() => {
  const buttonPlus = selectDOMElement('#click-plus');
  const buttonMinus = selectDOMElement('#click-minus');
  const currentAmountOfCounter = selectDOMElement('#counter-value');

  let value = 1;

  const getValue = () => {
    return value;
  }

  const updateAmountElement = () => {
    currentAmountOfCounter.innerHTML = value;
  }

  const decrementOfCount = () => {
    value--;
    updateAmountElement();
  }

  const stepsVerificationDecrement = () => {
    getValue();
    (value <= constants.MINSTEP) ? value = constants.MINSTEP : decrementOfCount();
  }

  buttonMinus.addEventListener('click', stepsVerificationDecrement)

  const incrementOfCount = () => {
    value++;
    updateAmountElement();
  }

  const stepsVerificationIncrement = () => {
    getValue();
    (value >= constants.MAXSTEP) ? value = constants.MAXSTEP : incrementOfCount();
  }

  buttonPlus.addEventListener('click', stepsVerificationIncrement)

  return {
    getValue
  }
})();

export { Counter };