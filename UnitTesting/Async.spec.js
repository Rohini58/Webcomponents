// A simple asynchronous function that reads a file and returns its contents after a delay
function readFileAsync(callback) {
  setTimeout(function () {
    callback("This is the file content.");
  }, 1000);
}
describe("readFileAsync", function () {
  it("should read a file asynchronously and return its contents", function (done) {
    //This done callback is a signal to Jasmine that the test is asynchronous. When the asynchronous operation is complete, we call done() to let Jasmine know that it should now check the expectations.
    readFileAsync(function (content) {
      // The function receiving the callback (in this case, readFileAsync) will call it when the asynchronous operation(settimeout) is complete.
      expect(content).toBe("This is the file content.");
      done(); // Signal Jasmine that the test is complete
    });
  });
});

/*same code using promise instead of callbacks
promise is better compare to callbacks

function readFileAsync() {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve("This is the file content.");
    }, 1000);
  });
}

// Jasmine test for readFileAsync using Promises
describe("readFileAsync", function () {
  it("should read a file asynchronously and return its contents", function (done) {
    readFileAsync().then(function (content) {
      expect(content).toBe("This is the file content.");
      done();
    });
  });
});
*/
