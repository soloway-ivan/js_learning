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
  let step = 1;

  const getValue = () => {
    return value;
  }

  const getCurrentStep = () => {
    return step;
  }

  const updateAmountElement = () => {
  currentAmountOfCounter.innerHTML = value;
}

  const decrementOfCount = () => {
    (value <= constants.MINSTEP) ? value = constants.MINSTEP : value -= Number(step);
  }
  
  const incrementOfCount = () => {
    (value >= constants.MAXSTEP) ? value = constants.MAXSTEP : value += Number(step);

  }

  const updateCounter = (step) => {
    if (step > 0) {
      incrementOfCount();
    }
  
    if (step < 0) {
      decrementOfCount();
    }

    updateAmountElement();
  }

  const updateCounterStep = (newStepValue) => {
    step = newStepValue;
  }

  buttonMinus.addEventListener('click', () => {updateCounter(-step)})
  buttonPlus.addEventListener('click', () => { updateCounter(step)})

  return {
    updateCounterStep
  }
})();

export { Counter };