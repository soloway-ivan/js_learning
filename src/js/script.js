import { Counter } from "./counter.js";
import { Slider } from "./slider.js";

const counter = Counter;
const slider = Slider;

slider.onSliderChange(() => { counter.updateCounterStep(slider.getValue()) })