let inputs = [];

const buttons = document.querySelectorAll(".calc-button");
buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const input = event.target.innerText;
    inputs.push(input);

    if (input === "=") {
      for (const i of inputs) {
        console.log(i);
      }
    }
  });
});

function compute() {}

function translate() {}

function showResults() {}
