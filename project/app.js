// app.js

import { add, subtract, PI, multiply } from './math.js';

// Display results in the browser
document.addEventListener("DOMContentLoaded", () => {
  const resultArea = document.getElementById("results");

  const sum = add(10, 5);
  const difference = subtract(10, 5);
  const product = multiply(63,74);

  resultArea.innerHTML = `
    <p>10 + 5 = ${sum}</p>
    <p>10 - 5 = ${difference}</p>
    <p>PI = ${PI}</p>
    <p>63 * 74 = ${product}
  `;
});

// as = rename

