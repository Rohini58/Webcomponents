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

// Jasmine test
describe("Spy with returnValue", () => {
  it("should spy on the getUserRole function and use returnValue", () => {
    // Create a spy on the "getUserRole" function and configure it to return 'User'
    const getUserRoleSpy = spyOn(window, "getUserRole").and.returnValue(
      "Guest"
    );

    // Test cases
    expect(getUserRoleSpy(1)).toEqual("Guest"); // Spy returns 'Guset' for userId 1
    expect(getUserRoleSpy(2)).toEqual("Guest"); // Spy returns 'Guest' for userId 2
  });

  it("should spy on the getUserRole function and use returnValue for a different user", () => {
    // Create a spy on the "getUserRole" function and configure it to return 'Admin' for userId 1
    const getUserRoleSpy = spyOn(window, "getUserRole").and.returnValue("User");

    // Test cases
    expect(getUserRoleSpy(1)).toEqual("User"); // Spy returns 'User' for userId 1
  });
});
