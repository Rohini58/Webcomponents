// Custom matcher definition
const customMatchers = {
  // defining a custom matcher called toContainSubstring. that called a function
  toContainSubstring: function () {
    //these function retuns an object
    return {
      //This object must have a compare property, which is a function that will be called when you use the custom matcher in your tests.
      compare: function (actual, expectedSubstring) {
        if (typeof actual !== "string") {
          //This line checks whether the actual value is not a string.
          //If it's not a string, the custom matcher will return an object with pass set to false and a message indicating that the actual value should be a string
          return {
            pass: false,
            message: "Expected the actual value to be a string",
          };
        }

        const pass = actual.includes(expectedSubstring);
        const message = pass
          ? `Expected '${actual}' not to contain '${expectedSubstring}'`
          : `Expected '${actual}' to contain '${expectedSubstring}'`;

        return {
          pass: pass,
          message: message,
        };
      },
    };
  },
};

// Add the custom matchers to Jasmine
//Adding it using beforeEach ensures that the custom matcher is available for all your tests within the test suite.

beforeEach(function () {
  jasmine.addMatchers(customMatchers); ////if we won't write this we will get TypeError: expect(...).toContainSubstring is not a function
});
