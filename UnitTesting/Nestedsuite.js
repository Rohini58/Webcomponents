//suite: gruop of specs ot tests  it is created using describe
//to disable suit: xdescribe(.....)
describe("calculator1.js", function () {
  //in these we will write tests or specs
  describe("add", function () {
    xit("Should add two numbers", function () {
      //disabling a spec with x.
      //here we need to write expectations
      //expect(5 + 5).toBe(10);
      expect(add(2, 3)).toBe(5);
      //expect(add(2, 3)).toBe(7);
      //expect(10).toBe(9); -failing spec
    });
  });
  describe("subtract", function () {
    it("Should subtract two numbers", function () {
      expect(subtract(5, 3)).toBe(2);
      //here we need to write expectations
    });
  });
  describe("toEqual", function () {
    it("Should compare objects using toEqual", function () {
      const person1 = { name: "roo" };
      const person2 = { name: "roo" };

      expect(person1).not.toBe(person2);
      //expect(person1).toBe(person2); Error
      expect(person1).toEqual(person2);
      expect(person1).toBeTruthy();
      // expect(person1).toBeFalsy(); error bcz it's not a empty string
    });
  });
  describe("tobeFalsy and toBeTruthy", function () {
    it("Should check if a value is falsy using toBeFalsy", function () {
      const person1 = 0;
      const person3 = { name: "" };

      // person1 is not a falsy value
      expect(person1).toBeFalsy();

      // person3.name is an empty string, which is falsy
      expect(person3.name).toBeFalsy();
    });
  });
});
