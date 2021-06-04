// import functions
import { add, subtract, multiply, divide, modulo, integerDivision, pythagoreanTheorem } from './calculations.js';

// reference needed DOM elements
const addXInput = document.getElementById('add-x-input');
const addYInput = document.getElementById('add-y-input');
const addButton = document.getElementById('add-button');
const addResult = document.getElementById('add-result');

const subtractXInput = document.getElementById('subtract-x-input');
const subtractYInput = document.getElementById('subtract-y-input');
const subtractButton = document.getElementById('subtract-button');
const subtractResult = document.getElementById('subtract-result');

const multiplyXInput = document.getElementById('multiply-x-input');
const multiplyYInput = document.getElementById('multiply-y-input');
const multiplyButton = document.getElementById('multiply-button');
const multiplyResult = document.getElementById('multiply-result');

const divideXInput = document.getElementById('divide-x-input');
const divideYInput = document.getElementById('divide-y-input');
const divideButton = document.getElementById('divide-button');
const divideResult = document.getElementById('divide-result');

const moduloXInput = document.getElementById('modulo-x-input');
const moduloYInput = document.getElementById('modulo-y-input');
const moduloButton = document.getElementById('modulo-button');
const moduloResult = document.getElementById('modulo-result');

const integerDivisionXInput = document.getElementById('integer-division-x-input');
const integerDivisionYInput = document.getElementById('integer-division-y-input');
const integerDivisionButton = document.getElementById('integer-division-button');
const integerDivisionResult = document.getElementById('integer-division-result');

const pythagoreanTheoremXInput = document.getElementById('pythagorean-theorem-x-input');
const pythagoreanTheoremYInput = document.getElementById('pythagorean-theorem-y-input');
const pythagoreanTheoremButton = document.getElementById('pythagorean-theorem-button');
const pythagoreanTheoremResult = document.getElementById('pythagorean-theorem-result');

// set event listeners
// add event button
addButton.addEventListener('click', () =>{
    const x = Number(addXInput.value);
    const y = Number(addYInput.value);

    const sum = add(x, y);

    addResult.textContent = sum;
});

// subtract event button
subtractButton.addEventListener('click', ()=>{
    const x = Number(subtractXInput.value);
    const y = Number(subtractYInput.value);

    const difference = subtract(x, y);

    subtractResult.textContent = difference;
});

// multiply event button
multiplyButton.addEventListener('click', ()=>{
    const x = Number(multiplyXInput.value);
    const y = Number(multiplyYInput.value);

    const multiplication = multiply(x, y);

    multiplyResult.textContent = multiplication;
});

// divide event button
divideButton.addEventListener('click', ()=>{
    const x = Number(divideXInput.value);
    const y = Number(divideYInput.value);

    const dividing = divide(x, y);

    divideResult.textContent = dividing;
});

// modulo event button
moduloButton.addEventListener('click', ()=>{
    const x = Number(moduloXInput.value);
    const y = Number(moduloYInput.value);

    const modulus = modulo(x, y);

    moduloResult.textContent = modulus;
});

    // integer division section 
integerDivisionButton.addEventListener('click', ()=>{
    const x = Number(integerDivisionXInput.value);
    const y = Number(integerDivisionYInput.value);

    const integerRemainder = integerDivision(x, y);

    integerDivisionResult.textContent = integerRemainder;
});

    // pythagorean theorem section 
pythagoreanTheoremButton.addEventListener('click', ()=>{
    const x = Number(pythagoreanTheoremXInput.value);
    const y = Number(pythagoreanTheoremYInput.value);

    const rightTriangleHypotenuse = pythagoreanTheorem(x, y);

    pythagoreanTheoremResult.textContent = rightTriangleHypotenuse;
});
  // get user input(s)
  // do any needed work with the value(s)
  // update DOM to reflect new value(s)
