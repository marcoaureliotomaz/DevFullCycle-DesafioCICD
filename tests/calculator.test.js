const calculator = require("../src/calculator");

describe("calculator", () => {
  test("adds two numbers", () => {
    expect(calculator.add(10, 5)).toBe(15);
  });

  test("subtracts two numbers", () => {
    expect(calculator.subtract(10, 5)).toBe(5);
  });

  test("multiplies two numbers", () => {
    expect(calculator.multiply(10, 5)).toBe(50);
  });

  test("divides two numbers", () => {
    expect(calculator.divide(10, 5)).toBe(2);
  });

  test("throws when dividing by zero", () => {
    expect(() => calculator.divide(10, 0)).toThrow(
      "Division by zero is not allowed."
    );
  });

  test("throws when operands are not numbers", () => {
    expect(() => calculator.add("10", 5)).toThrow(
      "Both operands must be numbers."
    );
  });
});
