import { selectDOMElement } from './utils.js';

//Slider
const Slider = (() => {
  const sliderElement = selectDOMElement('#scroll-bar-progress');
  const sliderAmountElement = selectDOMElement('#scroll-bar-current-amount');

  let value = 1;
  let sliderChangeCB = () => {}

  const getValue = () => {
    return value;
  }

  const updateAmountElement = () => {
    sliderAmountElement.innerHTML = value;
  }

  const onInputListener = () => {
    value = sliderElement.value;
    updateAmountElement()
    sliderChangeCB()
  }

  const onSliderChange = (cb) => {
    sliderChangeCB = cb;
  } 

  sliderElement.value = value;
  sliderElement.addEventListener('input', () => { onInputListener() })

  return {
    onSliderChange,
    getValue
  }
})();

export { Slider };