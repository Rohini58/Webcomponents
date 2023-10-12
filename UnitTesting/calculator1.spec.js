// Import your calculator1.js functions
// You may need to include the functions from calculator1.js here

describe("calculator1.js", function () {
  describe("calculate()", function () {
    // Add similar tests for other mathematical operations (add, multiply, divide, subtract, modulo)

    //this is a sute for calculate method
    /*
    it("validate the expression if the number is invalid", function () {
      //spyon
      //1starg:in which object that function is present here this is global function so this is present in window
      //2nd arg:function name in which we need to spyon
      spyOn(window, "updateResult").and.stub(); //what is te use of stub here:whenever your calling updateresult, it wont call that function just it will make a spy
      document.getElementById("num1").value = "a";
      document.getElementById("num2").value = "3";
      document.getElementById("operator").value = "add";

      calculate(); //here it will go to calculate method in calculator1..
      //we have made a spy on this updateresult. so that  now spec will not call that original updateresult. it prretend that it is called
      //we want to know whether the updateresult is called or not for this we need to use spy mathcers.
      expect(window.updateResult).toHaveBeenCalled();
    });
    */
    it("calls add");
    it("calls multiply");
    it("calls divide");
    it("calls subtract");
    it("calls modulo");
  });

  describe("updateResult()", function () {
    beforeAll(function () {
      //is used to attach any dom elements before running the spec
      const element = document.createElement("div");
      element.setAttribute("id", "result");
      document.body.appendChild(element);
    });
    afterAll(function () {
      //afterall is used to cleanup all the dom elements
      const element = document.getElementById("result");
      document.body.removeChild(element); //when the before spec was executed and it's
      //completed then afterall method will be executed so that it will clean up the values
      //for ex: here Result:5 will go from the dom and spec was succeffully passed
    });

    it("should add the result to the DOM element", function () {
      // Add your test code here for testing the "updateResult" function
      // You can create a DOM element, call the function with a result, and check the content

      updateResult("5"); //before execution of this method we need to create before the execution of this spec

      const resultElement = document.getElementById("result");
      expect(resultElement.textContent).toBe("Result: 5");
    });
  });
});
