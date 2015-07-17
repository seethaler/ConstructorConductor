//Create a Person constructor that accepts name and age as parameters and sets those properties accordingly in the Constructor.

function Person(name, age) {
  this.name = name;
  this.age = age;
}

//Now create three instances of Person with data you make up

var jake = new Person('Jacob', 35);
var manon = new Person('Manon', 35);
var leiden = new Person('Leiden', 9);
var lincoln = new Person('Lincoln', 4);

Person.prototype.sayName = function () {
  console.log(this.name);
}

leiden.sayName();

//Now add a sayName method on your Person class that will alert the name of whatever Person instance called it.

  //code here
