const counterEl = document.querySelector(".counter");
const increaseButtonEl = document.querySelector(".counter__button--increase");
const decreaseButtonEl = document.querySelector(".counter__button--decrease");
const resetButtonEl = document.querySelector(".counter__reset-button");
const counterValueEl = document.querySelector(".counter__value");
const counterTitleEl = document.querySelector(".counter__title");

resetButtonEl.addEventListener("click", () => {
  //set counter element to 0
  counterValueEl.textContent = 0;
  //reset background color
  counterEl.classList.remove("counter--limit");
  // reset counter title
  counterTitleEl.textContent = "Fancy Counter";
  //enable increase and decrease buttons
  increaseButtonEl.disabled = false;
  decreaseButtonEl.disabled = false;
  //unfocus the reset button
  resetButtonEl.blur();
});

const decreaseCounter = () => {
  //get current value
  const currentValue = counterValueEl.textContent;
  //convert value to number type
  const currentValueAsNumber = +currentValue;
  // decrement by 1
  let newValue = currentValueAsNumber - 1;
  //set new value
  //check if value is less than 0
  /*   if (newValue < 0) {
    //set counter element to 0
    newValue = 0;
  } */
  newValue > 0 ? (newValue = newValue) : (newValue = 0);
  //set counter element w/ new value
  counterValueEl.textContent = newValue;
  //unfocus the decrease button
  decreaseButtonEl.blur();
};

decreaseButtonEl.addEventListener("click", decreaseCounter);

const incrementCounter = () => {
  //get current value
  const currentValue = counterValueEl.textContent;
  //convert value to number type
  const currentValueAsNumber = +currentValue;
  // increment by 1
  let newValue = currentValueAsNumber + 1;
  //check if newValue is greater than 5
  /*   newValue > 5 ? (newValue = 5) : (newValue = newValue);
   */
  if (newValue >= 5) {
    //set counter element to 5
    newValue = 5;
    //add class to counter element
    counterEl.classList.add("counter--limit");
    //update counter title to say limit has been reached
    counterTitleEl.innerHTML = "Limit! Buy <b>Pro</b> for > 5";
    //disable increase and decrease buttons
    increaseButtonEl.disabled = true;
    decreaseButtonEl.disabled = true;
  }
  //set new value
  //set counter element w/ new value
  counterValueEl.textContent = newValue;
  //unfocus the increase button
  increaseButtonEl.blur();
};
increaseButtonEl.addEventListener("click", incrementCounter);
document.addEventListener("keydown", incrementCounter);
