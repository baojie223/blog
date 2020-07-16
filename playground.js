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

function Person(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype.say = function() {
  console.log(this.name);
};

function Person(name) {
  this.name = name;
  if (typeof this.say == 'undefined') {
    Person.prototype.say = function() {
      console.log(this.name);
    };
  }
}

function Person(name, age) {
  const o = new Object();
  const _name = name;
  const _age = age;
  o.say = function() {
    console.log(_name);
  };
  return o;
}
