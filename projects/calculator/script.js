let inputs = [];
let toDisplay = "";
let result = 0;
const operations = ["+", "-", "x", "%", "="];
const control = ["C", "<-"];

const buttons = document.querySelectorAll(".calc-button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const input = event.target.innerText;
    const display = document.querySelector(".result");

    if (operations.includes(input)) {
      inputs.push(display.innerText);
      inputs.push(input);
      console.log(inputs);
      clearResults();
      toDisplay = "0";
    } else if (control.includes(input)) {
      if (input === control[0]) {
        toDisplay = "0";
        inputs = [];
        result = 0;
      } else if (input === control[1]) {
        toDisplay = toDisplay.slice(0 - 1);
        if (toDisplay === "") {
          toDisplay = "0";
        }
      }
    } else {
      if (toDisplay == "0") {
        toDisplay = input;
      } else {
        toDisplay += input;
      }
    }

    if (input === "=") {
      const result = compute(inputs);
      toDisplay = result;
    }

    showResults(toDisplay);
  });
});

function compute(inputs) {
  let operation = "";
  result = Number(inputs[0]);

  for (let i = 0; i < inputs.length; i++) {
    if (typeof inputs[i] === "string" && !isNaN(inputs[i])) {
      currentNum = Number(inputs[i]);
    } else if (operations.includes(inputs[i])) {
      operation = inputs[i];
    }

    if (operation !== undefined && operation !== "") {
      if (typeof inputs[i] === "string" && !isNaN(inputs[i])) {
        calculate(Number(inputs[i]), operation);
      }
    }
  }

  return result;
}

function calculate(input, operation) {
  switch (operation) {
    case "+":
      result += input;
      break;
    case "-":
      result -= input;
      break;
    case "x":
      result *= input;
      break;
    case "%":
      if (input === 0) {
        alert("Cannot divide by zero");
        return 0;
      }
      result /= input;
      break;
  }
}

function showResults(result) {
  const display = document.querySelector(".result");

  display.innerText = result;
}

function clearResults() {
  const display = document.querySelector(".result");
  display.innerText = 0;
}
