const operand1 = 12;
const operand2 = 4;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.

// --v-- write your code here --v--

console.log("Operand1=" + operand1);
console.log("Operand2=" + operand2);

const btn_plus = document.querySelector("[data-js='add']");
const btn_subtract = document.querySelector("[data-js='subtract']");
const btn_multiply = document.querySelector("[data-js='multiply']");
const btn_divide = document.querySelector("[data-js='divide']");
const btn_exponent = document.querySelector("[data-js='exponent']");
const btn_modulo = document.querySelector("[data-js='modulo']");

btn_plus.addEventListener("click", () => {
  let result = operand1 + operand2;
  console.log(operand1 + "+" + operand2 + "=" + result);
});

btn_subtract.addEventListener("click", () => {
  let result = operand1 - operand2;
  console.log(operand1 + "-" + operand2 + "=" + result);
});

btn_multiply.addEventListener("click", () => {
  let result = operand1 * operand2;
  console.log(operand1 + "*" + operand2 + "=" + result);
});

btn_divide.addEventListener("click", () => {
  let result = operand1 / operand2;
  console.log(operand1 + "/" + operand2 + "=" + result);
});

btn_exponent.addEventListener("click", () => {
  let result = operand1 * 3;
  console.log(operand1 + " exponent" + "=" + result);
});

btn_modulo.addEventListener("click", () => {
  let result = operand1 % operand2;
  console.log(operand1 + "%" + operand2 + "=" + result);
});
// --^-- write your code here --^--

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--

// --^-- write your code here --^--

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

// --v-- write your code here --v--

const btn_increase_one = document.querySelector("[data-js='increase-by-one']");
const btn_increase_five = document.querySelector(
  "[data-js='increase-by-five']",
);
const btn_decrease_by_one = document.querySelector(
  "[data-js='decrease-by-one']",
);

const btn_decrease_by_five = document.querySelector(
  "[data-js='decrease-by-five']",
);
const btn_multiply_by_two = document.querySelector(
  "[data-js='multiply-by-two']",
);

const btn_divide_by_two = document.querySelector("[data-js='divide-by-two']");

btn_increase_one.addEventListener("click", () => {
  let new_value = operand1 + 1;
  console.log(new_value);
});

btn_increase_five.addEventListener("click", () => {
  let new_value = operand1 + 5;
  console.log(new_value);
});

btn_decrease_by_one.addEventListener("click", () => {
  let new_value = operand1 - 1;
  console.log(new_value);
});

btn_decrease_by_five.addEventListener("click", () => {
  let new_value = operand1 - 5;
  console.log(new_value);
});
btn_multiply_by_two.addEventListener("click", () => {
  let new_value = operand1 * 2;
  console.log(new_value);
});
btn_divide_by_two.addEventListener("click", () => {
  let new_value = operand1 / 2;
  console.log(new_value);
});
// --^-- write your code here --^--
