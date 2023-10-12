// Describe a test suite

function Calculator() {
  this.add = function (a, b) {
    return a + b;
  };
}

describe("Calculator", function () {
  // Create an instance of the Calculator class
  var calculator;

  // Before each test, create a new Calculator instance
  beforeEach(function () {
    calculator = new Calculator();
  });

  // Test the add method
  it("should spy on the add method", function () {
    // Spy on the add method
    spyOn(calculator, "add");

    // Call the add method
    var result = calculator.add(2, 3);

    // Expect that the add method was called with arguments 2 and 3
    expect(calculator.add).toHaveBeenCalledWith(2, 3);
  });
});
