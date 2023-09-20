class Bank {
  constructor(name, accno) {
    var name = name;
    var accno = accno;
    this.getName = () => {
      return name;
    };
    this.getAccno = () => {
      return accno;
    };
    this.setName = (newName) => {
      name = newName;
    };
    this.setAccno = (newAccno) => {
      accno = newAccno;
    };
  }
}
let Axis = new Bank("Roo", 123);
console.log(Axis.name); //undefined By using var keywords all the properties will become private soowe can't access it directlly
console.log(Axis.accno); //undefined
console.log(Axis.getName());
Axis.setAccno(345);
console.log(Axis.getAccno());
