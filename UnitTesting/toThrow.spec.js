describe("toThrow", () => {
  it("should throw an error when dividing by zero", () => {
    const spy = spyOn(console, "error"); // Spy on console.error to capture the error message
    const a = 10;
    const b = 0;

    expect(() => divide(a, b)).toThrowError(
      Error,
      "number cannot be divided by zero"
    );
  });

  it("should return the result of division when divisor is not zero", () => {
    const a = 10;
    const b = 2; //if we use b=0 we will get an error number cannot be divide by zero

    const result = divide(a, b);

    expect(result).toEqual(5);
  });
});
