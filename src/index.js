const calculator = require("./calculator");

function runDemo() {
  const a = 10;
  const b = 5;

  console.log("Basic Calculator");
  console.log(`Addition: ${a} + ${b} = ${calculator.add(a, b)}`);
  console.log(`Subtraction: ${a} - ${b} = ${calculator.subtract(a, b)}`);
  console.log(`Multiplication: ${a} * ${b} = ${calculator.multiply(a, b)}`);
  console.log(`Division: ${a} / ${b} = ${calculator.divide(a, b)}`);
}

runDemo();
