describe("Spy on fetch API", () => {
  it("should spy on fetch and handle async/await", async () => {
    //It's marked as an asynchronous test case because it uses async () =>.

    // Create a spy for the global fetch function
    spyOn(window, "fetch").and.returnValue(
      //returnvalue  part specifies what the spy should return when fetch is called.

      Promise.resolve({
        //it returns a promise that resolves to an object with a json method, which simulates the response from an HTTP request.

        json: async () => ({ data: "Hello, World!" }),
      })
    );

    // Use fetch in an asynchronous function
    async function fetchData() {
      //asynchronous function named fetchData that uses the fetch API to make an HTTP request . It then awaits the response and parses it as JSON.

      try {
        const response = await fetch("https://example.com/api/data");
        const data = await response.json();
        return data;
      } catch (error) {
        return { error: error.message };
      }
    }

    // Call the fetchData function and await its result
    const result = await fetchData();

    // Assert that fetch was called with the correct URL
    expect(fetch).toHaveBeenCalledWith("https://example.com/api/data");
  });
});
