// 类继承
class Vehicle {
  constructor() {
    if (new.target === Vehicle) {
      throw new Error('no no no')
    }
  }
  static hi() {
    console.log('hi')
  }
}

class Bus extends Vehicle {
  constructor() {
    super()
  }

  static e() {
    super.hi()
  }
}

new Bus()
