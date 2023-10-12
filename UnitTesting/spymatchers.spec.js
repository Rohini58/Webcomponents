describe("Example", () => {
  it("should check if a function has been called", () => {
    const spyFunction = jasmine.createSpy("spyFunction");
    spyOn(window, "add");

    // Call the original function
    const result = window.add(2, 3);

    // Expect the function to have been called
    expect(window.add).toHaveBeenCalled();

    spyFunction();
    expect(spyFunction).toHaveBeenCalled();
  });
  it("should check if a function has been called with specific arguments", () => {
    const spyFunction = jasmine.createSpy("spyFunction");
    spyFunction(42, "example");
    expect(spyFunction).toHaveBeenCalledWith(42, "example");
  });
  it("should check how many times a function has been called", () => {
    const spyFunction = jasmine.createSpy("spyFunction");
    spyFunction();
    spyFunction();
    expect(spyFunction).toHaveBeenCalledTimes(2);
  });
});
//instead of writing  spyFunction = jasmine.createSpy("spyFunction"); in every spec directly write in beforeeach bcz it will execute before each spec in the suite
/*describe("Example", () => {
  let spyFunction;

  beforeEach(() => {
    spyFunction = jasmine.createSpy("spyFunction");
  });

  it("should check if a function has been called", () => {
    spyFunction();

    expect(spyFunction).toHaveBeenCalled();
  });

  it("should check if a function has been called with specific arguments", () => {
    spyFunction(42, "example");

    expect(spyFunction).toHaveBeenCalledWith(42, "example");
  });

  it("should check how many times a function has been called", () => {
    spyFunction();
    spyFunction();

    expect(spyFunction).toHaveBeenCalledTimes(2);
  });
});
*/
