const descriptorprop = {};

Object.defineProperty(descriptorprop, "exampleProperty", {
  value: 42,
});

describe("descriptorprop", function () {
  it("should have a property with a value of 42", function () {
    expect(descriptorprop.exampleProperty).toBe(42);
  });
});

/* writable
const exampleObject = {};

Object.defineProperty(exampleObject, 'exampleProperty', {
  value: 42,
  writable: false,
});

describe('Example Object', function() {
  it('should be a read-only property', function() {
    exampleObject.exampleProperty = 100;
    expect(exampleObject.exampleProperty).toBe(42); // The value remains 42
  });
});

*/

/*enumerable
const exampleObject = {};

Object.defineProperty(exampleObject, 'exampleProperty', {
  value: 42,
  enumerable: false,
});

describe('Example Object', function() {
  it('should not be enumerable', function() {
    for (let prop in exampleObject) {
      expect(prop).not.toBe('exampleProperty');
    }
  });
});

 */

/*configurable
const exampleObject = {};

Object.defineProperty(exampleObject, 'exampleProperty', {
  value: 42,
  configurable: false,
});

describe('Example Object', function() {
  it('should not be configurable', function() {
    delete exampleObject.exampleProperty; // Attempt to delete the property
    Object.defineProperty(exampleObject, 'exampleProperty', {
      value: 100, // Attempt to redefine the property
    });
    expect(exampleObject.exampleProperty).toBe(42); // The property remains unchanged
  });
});

 */
