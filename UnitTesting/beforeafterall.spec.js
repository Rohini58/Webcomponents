describe("BeforeAll AfterAll", () => {
  let sharedResource;

  // This code runs before any of the tests in this suite.
  beforeAll(() => {
    sharedResource = "This is a shared resource";
    console.log("Before all tests");
  });

  // This code runs after all the tests in this suite.
  afterAll(() => {
    sharedResource = null;
    console.log("After all tests");
  });

  it("Test 1", () => {
    expect(sharedResource).toEqual("This is a shared resource");
  });

  it("Test 2", () => {
    expect(sharedResource).toEqual("This is a shared resource");
  });
});
