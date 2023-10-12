const bankAccount = {
  _balance: 1000, // Private property

  get balance() {
    return this._balance;
  },
};

describe("SpyOn on Getproperty", function () {
  it("should spy on the getter property", function () {
    const spy = spyOnProperty(bankAccount, "balance", "get");

    // Access the getter property
    const result = bankAccount.balance;

    expect(spy).toHaveBeenCalled();
  });
});
