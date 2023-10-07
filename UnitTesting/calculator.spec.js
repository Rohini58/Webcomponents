//suite: gruop of specs ot tests  it is created using describe
//to disable suit: xdescribe(.....)
describe("calculator1.js", function () {
  //in these we will write tests or specs
  xit("Should add two numbers", function () {
    //disabling a spec with x.
    //here we need to write expectations
    //expect(5 + 5).toBe(10);
    expect(add(2, 3)).toBe(5);
    //expect(add(2, 3)).toBe(7);
    //expect(10).toBe(9); -failing spec
  });
  it("Should subtract two numbers", function () {
    expect(subtract(5, 3)).toBe(2);
    //here we need to write expectations
  });
  it("Should Multiplication two numbers", function () {
    expect(multiply(2, 3)).toBe(6);

    //here we need to write expectations
  });
  it("Should Division two numbers", function () {
    //here we need to write expectations
    expect(divide(6, 2)).toBe(3);
  });
  it("Should compare objects using toEqual", function () {
    const person1 = { name: "roo" };
    const person2 = { name: "roo" };

    expect(person1).not.toBe(person2);
    //expect(person1).toBe(person2); Error
    expect(person1).toEqual(person2);
    expect(person1).toBeTruthy();
    // expect(person1).toBeFalsy(); error bcz it's not a empty string
  });
  it("Should check if a value is falsy using toBeFalsy", function () {
    const person1 = 0;
    const person3 = { name: "" };

    // person1 is not a falsy value
    expect(person1).toBeFalsy();

    // person3.name is an empty string, which is falsy
    expect(person3.name).toBeFalsy();
  });
  it("Should test for undefined and defined values", function () {
    let someValue; // undefined by default

    expect(someValue).toBeUndefined(); // Passes because someValue is undefined

    const anotherValue = 42;
    expect(anotherValue).toBeDefined(); // Passes because anotherValue is defined
    expect(anotherValue).not.toBeUndefined();
  });
  it("should check null", function () {
    let x = null;
    let y = 10;
    expect(x).toBeNull();
    expect(y).not.toBeNull();
  });
  it("Should check if a string contains a substring using toContain", function () {
    const sentence = "This is a sample sentence.";

    expect(sentence).toContain("sample"); // Passes because the string contains "sample"
    //expect(sentence).toContain("notfound"); // Fails because "notfound" is not in the string
  });

  it("Should check if an array contains a value using toContain", function () {
    const numbers = [1, 2, 3, 4, 5];

    expect(numbers).toContain(3); // Passes because the array contains the value 3
    //expect(numbers).toContain(6); // Fails because 6 is not in the array
  });
  it("Should check if a value is NaN", function () {
    let a = 10 * "a";
    expect(a).toBeNaN(); //pass
  });
  //tothrowmatcher
  it("should throw error when divide by zero", function () {
    expect(function () {
      divide(2, 0);
    }).toThrow(); //pass
  });

  it("Should throw an error when dividing by zero", function () {
    // Defining a function that should throw an error when dividing by zero
    function divideByZero() {
      divide(10, 0);
    }
    expect(divideByZero).toThrow();
  });
  //tothrowerror
  it("should throw error with message when dividing by zero", function () {
    expect(function () {
      divide(2, 0);
    }).toThrowError(Error, "number cannot be divided by zero"); //pass

    expect(function () {
      divide(2, 0);
    }).toThrowError("number cannot be divided by zero"); //pass message should be same in js file and spec file
  });

  //toMatch
  it("Should match a string using regular expression", function () {
    const sentence = "Hello, World!";

    // Using a regular expression to match "Hello" at the beginning of the sentence
    expect(sentence).toMatch(/^Hello/);

    // Using a regular expression to match "World!" at the end of the sentence
    expect(sentence).toMatch(/World!$/);
    //expect(sentence).toMatch(/l23/); -fail
  });
  //anything matcher
  it("should check anything matcher", function () {
    const x = null;
    const y = 9;
    expect(y).toEqual(jasmine.anything());
    //expect(x).toEqual(jasmine.anything()); error
  });
  //anymatcher
  it("should check if a value is an instance of a specific class", function () {
    const myString = "Hello, World!";
    const myArray = [1, 2, 3];
    const myNumber = 42;
    const myObject = { key: "value" };

    expect(myString).toEqual(jasmine.any(String)); // Passes
    expect(myArray).toEqual(jasmine.any(Array)); // Passes
    expect(myNumber).toEqual(jasmine.any(Number)); // Passes
    expect(myObject).toEqual(jasmine.any(Object)); // Passes

    // You can also use it to check for specific built-in classes
    expect(myArray).toEqual(jasmine.any(Array)); // Passes because myArray is an array
    expect(myArray).toEqual(jasmine.any(Object)); // Also passes because arrays are objects in JavaScript
  });
  //object containing
  it("should check if an object contains specific properties", function () {
    const actualObject = { name: "John", age: 30, city: "New York" };
    const expectedProps = { name: "John", age: 30 };
    expect(actualObject).toEqual(jasmine.objectContaining(expectedProps)); //pass both key and values should be same
    //expect(actualObject).toEqual(jasmine.objectContaining({ Area: "rmnagar" })); -error bcz area key is not present in actualobj
  });
  //string containing
  it("should check if a string contains a substring", function () {
    const actualString = "Hello, World!";
    const expectedSubstring = "World";
    expect(actualString).toEqual(jasmine.stringContaining(expectedSubstring));
  });

  //creating a custom matcher
  it("should check if a string contains a substring using custommatcher", function () {
    const actualString = "Hello, world!";
    //const expectedSubstring = "worldll";
    const expectedSubstring = "world";

    expect(actualString).toContainSubstring(expectedSubstring); //here toContainSubstring is a custom matcher created by us
  });
});
