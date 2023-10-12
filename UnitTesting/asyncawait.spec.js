async function fetchDataFromApi(url) {
  //that fetches data from a given URL using the Fetch API.
  try {
    const response = await fetch(url); // await to call the fetchDataFromApi function and wait for it to complete.
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

// Jasmine test using async and await
describe("Testing an asynchronous API request", () => {
  it("should fetch data from an API", async () => {
    const apiUrl = "https://jsonplaceholder.typicode.com/posts/1";

    const data = await fetchDataFromApi(apiUrl);

    expect(data).toBeDefined(); //checks that the data variable is defined and not null or undefined.
  });
});
