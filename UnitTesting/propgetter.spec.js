// Calculator object
const calculator = {
  num1: 0,
  num2: 0,
};

// Define a getter property 'sum' using Object.defineProperty
Object.defineProperty(calculator, "sum", {
  get: function () {
    return this.num1 + this.num2;
  },
});

// Jasmine test
describe("getterproperty", function () {
  it("should calculate the sum of num1 and num2", function () {
    calculator.num1 = 5;
    calculator.num2 = 3;

    // Access the 'sum' property
    expect(calculator.sum).toBe(8);
  });
});
