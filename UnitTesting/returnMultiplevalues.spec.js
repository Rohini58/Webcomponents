// Suppose you have a function to spy on, e.g., a simple function that adds numbers.
function add(a, b) {
  return a + b;
}
describe("returnMultipleValues", () => {
  it("should spy on the getUserRole function and use returnValue", () => {
    // Create a spy on the "getUserRole" function and configure it to return 'User'
    // Define an array of return values that you want the spy to return.
    /*
    const returnValues = [3, 5, 7];
    const addSpy = jasmine.createSpy("add").and.returnValues(...returnValues);
*/
    const addSpy = jasmine.createSpy("add").and.returnValues(3, 5, 7);

    // Now, you can call the spied function and use expect statements to check the returned values.
    expect(addSpy(2, 2)).toBe(3);
    expect(addSpy(3, 2)).toBe(5);
    expect(addSpy(4, 3)).toBe(7);
  });
});

/*
// Original function we want to spy on
function getUserRole(userId) {
  // In a real application, this function might fetch the user's role from a database or an API.
  // For testing purposes, we'll mock its behavior.
  if (userId === 1) {
    return "Admin";
  } else if (userId === 2) {
    return "User";
  } else {
    return "Guest";
  }
}


describe("Spy with returnValues", () => {
  it("should spy on the getUserRole function and use returnValues", () => {
    // Create a spy on the "getUserRole" function and configure it to return values in sequence.
    const getUserRoleSpy = spyOn(window, "getUserRole").and.returnValues("Admin", "User", "Guest");

    // Test cases
    expect(getUserRoleSpy(1)).toEqual("Admin"); // First call returns 'Admin'
    expect(getUserRoleSpy(2)).toEqual("User");  // Second call returns 'User'
    expect(getUserRoleSpy(3)).toEqual("Guest"); // Third call returns 'Guest'
    
    // Additional test cases
    expect(getUserRoleSpy(4)).toEqual("Admin"); // Fourth call returns 'Admin'
    expect(getUserRoleSpy(5)).toEqual("User");  // Fifth call returns 'User'
    expect(getUserRoleSpy(6)).toEqual("Guest"); // Sixth call returns 'Guest'
  });
});

*/
