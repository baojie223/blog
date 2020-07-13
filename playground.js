function createPerson(name, age) {
  const o = new Object();
  o.name = name;
  o.age = age;
  o.say = function() {
    console.log(this.name);
  };
}
