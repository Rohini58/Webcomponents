// Define updateResult as a global function
function updateResult(result) {
  const resultElement = document.getElementById("result");
  if (result === null) {
    resultElement.textContent = "Error: Division by zero or modulo by zero.";
  } else {
    resultElement.textContent = `Result: ${result}`;
  }
}
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("number cannot be divided by zero"); // Handle division by zero
  }
  return a / b;
}

function modulo(a, b) {
  if (b === 0) {
    return null; // Handle modulo by zero
  }
  return a % b;
}

function calculate() {
  const num1Input = document.getElementById("num1");
  const num2Input = document.getElementById("num2");
  const operator = document.getElementById("operator");
  const resultElement = document.getElementById("result");

  // Check if num1Input and num2Input exist

  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  const operator1 = operator.value;
  if (!num1Input || !num2Input) {
    resultElement.textContent = "Error: Input elements not found.";
    return;
  }
  // Check if num1 and num2 are valid numbers
  if (isNaN(num1) || isNaN(num2)) {
    resultElement.textContent = "Invalid input. Please enter valid numbers.";
    return;
  }

  let result;

  switch (operator1) {
    case "add":
      result = add(num1, num2);
      break;
    case "subtract":
      result = subtract(num1, num2);
      break;
    case "multiply":
      result = multiply(num1, num2);
      break;
    case "divide":
      result = divide(num1, num2);
      break;
    case "modulo":
      result = modulo(num1, num2);
      break;
    default:
      resultElement.textContent = "Error: Invalid operator";
      return;
  }

  // Call the globally defined updateResult function
  updateResult(result);
}

// Add the custom matchers to Jasmine within the beforeEach block
