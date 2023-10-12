describe("returnswingleValue", () => {
  it("should return the square of a number", () => {
    // Create a spy for the square function
    const squareSpy = jasmine.createSpy("squareSpy");

    // Use returnValue to specify the value the spy should return
    squareSpy.and.returnValue(25); // Make it return 25 when called

    // Test the function that uses the spy
    const result = squareSpy(5); // Calling the spy with 5 calling the returnvalue.js function

    // Expect the result to be the value specified with returnValue
    expect(result).toBe(25); // 5 * 5 = 25
  });
});
