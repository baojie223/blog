class Bromise {
  state = 'pending'
  result

  constructor(executor) {
    executor(this.resolve, null)
  }

  static all() {}

  static race() {}

  static resolve() {}

  static reject() {}

  onResolve() {}

  onReject() {}

  then() {}

  catch() {}

  finally() {}
}

new Promise((resolve, reject) => {

})