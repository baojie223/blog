function createPerson(name, age) {
  const o = new Object();
  o.name = name;
  o.age = age;
  o.say = function() {
    console.log(this.name);
  };
}

function Person() {}

Person.prototype.name = 'bao';
Person.prototype.age = 24;
Person.prototype.say = function() {
  console.log(this.name);
};
