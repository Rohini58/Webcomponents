function fetchData() {
  // it returns a Promise that simulates an asynchronous operation.
  return new Promise((resolve, reject) => {
    // A Promise is created using the Promise constructor. It takes two callback functions as arguments: 'resolve' and 'reject.'

    setTimeout(() => {
      // Within the Promise, a setTimeout is used to simulate an asynchronous delay. This represents the time it takes for an async operation to complete.

      const data = { value: "This is the fetched data" }; // This line creates an object 'data' with a 'value' property, representing the fetched data.

      resolve(data); // The 'resolve' function is called with 'data' as an argument, which fulfills the Promise. This means that the asynchronous operation succeeded, and the Promise is resolved with 'data.'
    }, 1000);
    // The setTimeout function schedules the inner function to be executed after 1000 milliseconds (1 second).
  });
}
describe("fetchData with Promises", function () {
  it("should resolve with the fetched data", function (done) {
    // The second argument is a function that contains the test logic.
    // 'done' is a callback that we'll use to signal when the test is complete.

    fetchData().then((data) => {
      // This line initiates the asynchronous operation by calling the 'fetchData' function,
      // which returns a Promise.
      // The '.then()' method is used to handle the resolved Promise.

      expect(data.value).toBe("This is the fetched data");
      done();
      // This line calls the 'done' callback to signal that the test is complete.
      // This is necessary because the test is asynchronous, and Jasmine needs to know when it's finished.
    });
  });

  it("should handle Promise rejection", function (done) {
    const errorReason = "An error occurred";
    // This line defines the 'errorReason' variable, which is the reason for simulating a Promise rejection.

    const promise = new Promise((resolve, reject) => {
      // This line creates a new Promise using the Promise constructor.

      setTimeout(() => {
        reject(errorReason);
        // After a delay, the Promise is rejected with the 'errorReason.'
      }, 1000);
    });

    promise.catch((error) => {
      // This line uses the '.catch()' method to handle the rejected Promise.

      expect(error).toBe(errorReason);

      done();
    });
  });
});
