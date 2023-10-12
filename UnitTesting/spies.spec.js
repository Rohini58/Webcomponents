//Spying on a function means that you can track when it is called and what arguments it's called with, but the original function will still execute. Here's an example:

describe("Spies", () => {
  it("should spy on a function", () => {
    // Spy on myFunction
    spyOn(window, "add");

    // Call the original function
    const result = window.add(2, 3);

    // Expect the function to have been called
    expect(window.add).toHaveBeenCalled();
  });
});
