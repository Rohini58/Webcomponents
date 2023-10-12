describe("CallFake", () => {
  it("should add two numbers", () => {
    // Create a spy for the add function
    const addSpy = jasmine.createSpy("addSpy");

    // Replace the actual implementation with a fake one
    addSpy.and.callFake((a, b) => {
      return a * b; // Fake implementation that multiplies instead of adding
    });

    // Test the function that uses the fake implementation
    const result = addSpy(2, 3);

    // Expect the result to be the result of the fake implementation
    expect(result).toBe(6); // 2 * 3 = 6
  });
});
