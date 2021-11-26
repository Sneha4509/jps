function Person(FirstName,LastName,OfficeAddress){
    this.FirstName=FirstName,
    this.LastName=LastName,
    this.OfficeAddress=OfficeAddress
}

var person1 = new Person("SNEHA","PRIYA","PO-1, PATNA");
var person2 = new Person("KANAK","LATA","PO-2, DELHI");
var person3 = new Person("PRAGYA","RANI","PO-3, RAJASTHAN");

console.log(person1);
console.log(person2);
console.log(person3);