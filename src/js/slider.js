import { selectDOMElement } from './utils.js'

//Slider
const Slider = (() => {
  const sliderElement = selectDOMElement('#scroll-bar-progress');
  const sliderAmountElement = selectDOMElement('#scroll-bar-current-amount');

  let value = 1;

  const getValue = () => {
    return value;
  }

  const updateAmountElement = () => {
    sliderAmountElement.innerHTML = value;
  }

  const onInputListener = () => {
    value = sliderElement.value;
    updateAmountElement();
  }

  sliderElement.value = value;
  sliderElement.addEventListener('input', onInputListener)

  return {
    getValue
  } 
})();

export { Slider };