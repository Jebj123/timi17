const display = document.querySelector(".display");

let firstNumber = null;
let selectedOperator = null;

function clearAll() {
  display.value = 0;
}

function updateDisplay(num) {
  display.value = String(num);
}

function deleteLast() {
  if (display.value === "0") {
    return;
  }
  if (display.value.length === 1) {
    updateDisplay(0);
  } else {
    display.value = display.value.slice(0, -1);
  }
}

function selectOperator(operator) {
  firstNumber = display.value;
  selectedOperator = operator;
  updateDisplay(0);
}

function selectNumber(num) {
  let value = display.value;
  if (display.value === "0") {
    updateDisplay(num);
  } else {
    updateDisplay((display.value += num));
  }
}

function calculateNumbers() {
  let result;
  const secondNumber = Number(display.value);
  if (selectedOperator === "-") {
    result = firstNumber - secondNumber;
  } else if (selectedOperator === "+") {
    result = Number(firstNumber) + secondNumber;
  } else if (selectedOperator === "*") {
    result = firstNumber * secondNumber;
  } else if (selectedOperator === "/") {
    result = firstNumber / secondNumber;
  } else if (selectedOperator === "%") {
    result = firstNumber * (secondNumber / 100);
  }
  updateDisplay(result);
}
