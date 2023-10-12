describe("CallThrough", () => {
  it("should spy on a function and call through", () => {
    // Original function
    function add(a, b) {
      return a + b;
    }

    // Create a spy and allow it to call through to the original function
    const addSpy = spyOn(window, "add").and.callThrough();

    // Call the function
    const result = addSpy(2, 3);

    // Assertions
    expect(addSpy).toHaveBeenCalled();
    expect(result).toEqual(5);
  });
});
