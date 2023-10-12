const loan = {
  _interestRate: 0, // Private property

  set interestRate(rate) {
    if (rate >= 0) {
      this._interestRate = rate;
    }
  },
};

describe("Loan", function () {
  it("should spy on the setter property", function () {
    const spy = spyOnProperty(loan, "interestRate", "set");

    // Assign a value to the setter property
    loan.interestRate = 5;

    expect(spy).toHaveBeenCalled();
  });
});
